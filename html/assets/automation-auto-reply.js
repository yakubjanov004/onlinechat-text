(function () {
  "use strict";
  var STORE_KEY = "qc_automation_auto_reply_v1";

  function qs(s, r){ return (r||document).querySelector(s); }
  function qsa(s, r){ return Array.from((r||document).querySelectorAll(s)); }

  function load(){
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch(e){ return {}; }
  }
  function save(data){
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch(e){}
  }

  function getVars(){
    return {
      name: (qs('[data-ar-var="name"]')||{}).value || "Mijoz",
      channel: (qs('[data-ar-var="channel"]')||{}).value || "Web",
      working_hours: (qs('[data-ar-var="working_hours"]')||{}).value || "09:00 - 18:00"
    };
  }

  function renderTemplate(tpl){
    var v = getVars();
    return String(tpl || "")
      .replaceAll("{{name}}", v.name)
      .replaceAll("{{channel}}", v.channel)
      .replaceAll("{{working_hours}}", v.working_hours);
  }

  function buildStateFromDOM(){
    return {
      global: {
        timezone: (qs('[data-ar-global="timezone"]')||{}).value || "Asia/Tashkent",
        cooldown: parseInt((qs('[data-ar-global="cooldown"]')||{}).value || "5", 10),
        loop: (qs('[data-ar-global="loop"]')||{}).value || "strict"
      },
      rules: qsa('[data-rule-id]').map(function (r, i) {
        return {
          id: r.getAttribute('data-rule-id') || ('r' + (i+1)),
          title: (qs('.item-title', r)||{}).textContent || ('Rule ' + (i+1)),
          channel: (qs('[data-field="channel"]', r)||{}).value || 'all',
          timeWindow: (qs('[data-field="timeWindow"]', r)||{}).value || '',
          lang: (qs('[data-field="lang"]', r)||{}).value || 'all',
          condition: (qs('[data-field="condition"]', r)||{}).value || '',
          primary: (qs('[data-field="primary"]', r)||{}).value || '',
          fallback: (qs('[data-field="fallback"]', r)||{}).value || '',
          variantA: (qs('[data-field="variantA"]', r)||{}).value || '',
          variantB: (qs('[data-field="variantB"]', r)||{}).value || '',
          ab: (qs('[data-field="ab"]', r)||{}).value || '50/50'
        };
      }),
      logs: load().logs || []
    };
  }

  function loadToDOM(data){
    if (!data || !data.global) return;
    var g = data.global;
    if (qs('[data-ar-global="timezone"]')) qs('[data-ar-global="timezone"]').value = g.timezone || "Asia/Tashkent";
    if (qs('[data-ar-global="cooldown"]')) qs('[data-ar-global="cooldown"]').value = g.cooldown != null ? g.cooldown : 5;
    if (qs('[data-ar-global="loop"]')) qs('[data-ar-global="loop"]').value = g.loop || "strict";
    renderLogs(data.logs || []);
  }

  function addLog(rule, result, status){
    var data = buildStateFromDOM();
    var row = {
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      rule: rule,
      result: result,
      status: status || 'OK'
    };
    data.logs = [row].concat(data.logs || []).slice(0, 30);
    save(data);
    renderLogs(data.logs);
  }

  function renderLogs(logs){
    var body = qs('[data-ar-log-body]');
    if (!body) return;
    if (!logs || !logs.length) {
      body.innerHTML = '<tr><td colspan="4" class="text-muted">Log bo\'sh</td></tr>';
      return;
    }
    body.innerHTML = logs.map(function (l) {
      var badge = l.status === 'MATCH' ? 'badge-success' : (l.status === 'SKIP' ? 'badge-warning' : 'badge-info');
      return '<tr class="table-row"><td>' + l.time + '</td><td>' + l.rule + '</td><td>' + l.result + '</td><td><span class="badge ' + badge + '">' + l.status + '</span></td></tr>';
    }).join('');
  }

  function parseRange(t){
    if (!t || t.indexOf('-') < 0) return null;
    var p = t.split('-');
    return { s: p[0].trim(), e: p[1].trim() };
  }

  function hmToMin(hm){
    if (!hm || hm.indexOf(':') < 0) return 0;
    var p = hm.split(':');
    return parseInt(p[0],10) * 60 + parseInt(p[1],10);
  }

  function inWindow(time, range){
    if (!range) return true;
    var t = hmToMin(time), s = hmToMin(range.s), e = hmToMin(range.e);
    if (s <= e) return t >= s && t <= e;
    return t >= s || t <= e;
  }

  function runSimulation(){
    var test = {
      channel: (qs('[data-ar-test="channel"]')||{}).value || 'Web',
      time: (qs('[data-ar-test="time"]')||{}).value || '12:00',
      message: ((qs('[data-ar-test="message"]')||{}).value || '').toLowerCase()
    };

    var data = buildStateFromDOM();
    var matched = null;

    for (var i=0;i<data.rules.length;i++) {
      var r = data.rules[i];
      var okChannel = (r.channel === 'all' || r.channel === test.channel);
      var okTime = inWindow(test.time, parseRange(r.timeWindow));
      var okCond = !r.condition || test.message.indexOf((r.condition||'').toLowerCase().replace('page contains ','').trim()) > -1 || r.condition.indexOf('page contains') > -1;

      if (okChannel && okTime && okCond) { matched = r; break; }
      addLog(r.title, 'Shart mos emas', 'SKIP');
    }

    if (!matched) {
      addLog('None', 'Mos qoida topilmadi', 'SKIP');
      return;
    }

    var reply = matched.primary || matched.variantA || matched.fallback || 'Auto-reply mavjud emas';
    if (matched.variantA && matched.variantB) {
      var ratio = (matched.ab || '50/50').split('/');
      var a = parseInt(ratio[0] || '50', 10);
      reply = Math.random() * 100 < a ? matched.variantA : matched.variantB;
    }

    var rendered = renderTemplate(reply);
    var preview = qs('[data-ar-preview]');
    if (preview) preview.textContent = rendered;
    addLog(matched.title, rendered, 'MATCH');
  }

  function resetPage(){
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }

  function addRule(){
    var box = qs('[data-ar-rules]');
    if (!box) return;
    var id = 'r' + Math.floor(1000 + Math.random() * 9000);
    var node = document.createElement('article');
    node.className = 'list-item';
    node.setAttribute('data-rule-id', id);
    node.innerHTML = '<div class="item-main" style="width:100%">'
      + '<div class="justify-between"><div class="item-title">[P?] New rule</div><span class="badge">Draft</span></div>'
      + '<div class="form-grid three" style="margin-top:10px">'
      + '<label class="form-field"><span class="form-label">Kanal</span><select class="select" data-field="channel"><option value="all" selected>Barcha</option><option value="Web">Web</option><option value="Telegram">Telegram</option><option value="WhatsApp">WhatsApp</option><option value="Email">Email</option></select></label>'
      + '<label class="form-field"><span class="form-label">Vaqt oynasi</span><input class="input" type="text" value="" data-field="timeWindow"></label>'
      + '<label class="form-field"><span class="form-label">Shart</span><input class="input" type="text" value="" data-field="condition"></label>'
      + '</div>'
      + '<label class="form-field" style="margin-top:10px"><span class="form-label">Primary template</span><textarea class="textarea" rows="2" data-field="primary">Salom {{name}}! Savolingizni qabul qildik.</textarea></label>'
      + '<label class="form-field"><span class="form-label">Fallback template</span><textarea class="textarea" rows="2" data-field="fallback">Rahmat, tez orada javob beramiz.</textarea></label>'
      + '<div class="flex gap-2 wrap" style="margin-top:8px"><button class="btn btn-secondary btn-sm" type="button" data-ar-action="duplicate-rule">Duplicate</button><button class="btn btn-danger btn-sm" type="button" data-ar-action="delete-rule">Delete</button></div>'
      + '</div>';
    box.appendChild(node);
    save(buildStateFromDOM());
  }

  function bindEvents(){
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ar-action]');
      if (!b) return;
      var act = b.getAttribute('data-ar-action');

      if (act === 'save-all') { save(buildStateFromDOM()); addLog('System','Sozlamalar saqlandi','OK'); }
      if (act === 'test-run') runSimulation();
      if (act === 'clear-logs') { var d = buildStateFromDOM(); d.logs = []; save(d); renderLogs([]); }
      if (act === 'reset') resetPage();
      if (act === 'new-rule') addRule();
      if (act === 'delete-rule') {
        var rule = b.closest('[data-rule-id]');
        if (rule && confirm('Bu qoidani o\'chirasizmi?')) { rule.remove(); save(buildStateFromDOM()); }
      }
      if (act === 'duplicate-rule') {
        var src = b.closest('[data-rule-id]');
        if (src) {
          var clone = src.cloneNode(true);
          clone.setAttribute('data-rule-id', 'r' + Math.floor(1000 + Math.random() * 9000));
          var t = qs('.item-title', clone); if (t) t.textContent = (t.textContent || 'Rule') + ' (Copy)';
          src.parentNode.insertBefore(clone, src.nextSibling);
          save(buildStateFromDOM());
        }
      }
    });

    qsa('[data-ar-var]').forEach(function (inp) {
      inp.addEventListener('input', function () {
        var firstTpl = (qs('[data-rule-id] [data-field="primary"]')||{}).value || 'Salom {{name}}';
        var p = qs('[data-ar-preview]');
        if (p) p.textContent = renderTemplate(firstTpl);
      });
    });
  }

  function init(){
    if (!qs('[data-automation-auto-reply]')) return;
    var data = load();
    loadToDOM(data);
    bindEvents();
    var firstTpl = (qs('[data-rule-id] [data-field="primary"]')||{}).value || 'Salom {{name}}';
    var p = qs('[data-ar-preview]');
    if (p) p.textContent = renderTemplate(firstTpl);
    if (!data.logs) renderLogs([]);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
