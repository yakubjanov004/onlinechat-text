(function(){
  "use strict";
  var STORE_KEY = 'qc_automation_triggers_v1';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function load(){try{return JSON.parse(localStorage.getItem(STORE_KEY)||'{"rules":[],"logs":[]}');}catch(e){return {rules:[],logs:[]};}}
  function save(d){try{localStorage.setItem(STORE_KEY,JSON.stringify(d));}catch(e){}}

  function rowToRule(tr, i){
    var tds = qsa('td', tr);
    return {
      id: tr.getAttribute('data-rule-id') || ('tr'+i),
      name: (tds[0]||{}).textContent?.trim() || 'Rule',
      condition: (tds[1]||{}).textContent?.trim() || '',
      action: (tds[2]||{}).textContent?.trim() || '',
      enabled: !!qs('input[type="checkbox"]', tr)?.checked,
      priority: i + 1
    };
  }

  function collectRules(){
    return qsa('tbody .table-row').map(rowToRule);
  }

  function renderLogs(logs){
    var body = qs('[data-trigger-log-body]');
    if(!body) return;
    if(!logs?.length){body.innerHTML='<tr><td colspan="4" class="text-muted">Log bo\'sh</td></tr>';return;}
    body.innerHTML = logs.map(function(l){
      var c = l.status==='MATCH'?'badge-success':(l.status==='SKIP'?'badge-warning':'badge-info');
      return '<tr class="table-row"><td>'+l.time+'</td><td>'+l.rule+'</td><td>'+l.result+'</td><td><span class="badge '+c+'">'+l.status+'</span></td></tr>';
    }).join('');
  }

  function addLog(rule,result,status){
    var d=load();
    d.logs=[{time:new Date().toLocaleTimeString('en-GB'),rule:rule,result:result,status:status||'OK'}].concat(d.logs||[]).slice(0,40);
    save(d); renderLogs(d.logs);
  }

  function runSimulation(){
    var keyword=(qs('[data-trigger-test="keyword"]')?.value||'').toLowerCase();
    var rules=collectRules();
    var matched=false;
    rules.forEach(function(r){
      if(!r.enabled){ addLog(r.name,'Disabled','SKIP'); return; }
      var ok=!keyword || r.condition.toLowerCase().indexOf(keyword)>-1;
      if(!matched && ok){ matched=true; addLog(r.name,'Action: '+r.action,'MATCH'); }
      else addLog(r.name,'Shart mos emas','SKIP');
    });
    if(!matched) addLog('None','Mos trigger topilmadi','SKIP');
    save({rules:rules,logs:load().logs});
  }

  function init(){
    if(!qs('[data-automation-triggers]')) return;
    var d=load();
    if(!d.rules?.length){ d.rules=collectRules(); save(d); }
    renderLogs(d.logs||[]);

    document.addEventListener('click', function(e){
      var a=e.target.closest('[data-trigger-action]');
      if(!a) return;
      var act=a.getAttribute('data-trigger-action');
      if(act==='save'){ save({rules:collectRules(),logs:load().logs}); addLog('System','Triggerlar saqlandi','OK'); }
      if(act==='simulate'){ runSimulation(); }
      if(act==='clear-log'){ var x=load(); x.logs=[]; save(x); renderLogs([]); }
      if(act==='add-row'){
        var tb=qs('tbody'); if(!tb) return;
        var tr=document.createElement('tr'); tr.className='table-row'; tr.innerHTML='<td>New Trigger</td><td>message contains help</td><td>Assign operator</td><td><label class="toggle-switch"><input type="checkbox" checked><span class="toggle-track"><span class="toggle-thumb"></span></span></label></td>';
        tb.appendChild(tr);
        if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons();
      }
    });
  }
  document.addEventListener('DOMContentLoaded', init);
})();