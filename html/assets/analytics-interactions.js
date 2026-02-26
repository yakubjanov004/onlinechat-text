(function(){
  'use strict';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}

  var PERIODS=['Bugun','Kecha','Oxirgi 7 kun','Oxirgi 30 kun'];
  var PRESETS=['Conservative','Balanced','Aggressive'];
  var state={ periodIndex:2, presetIndex:1 };

  function notify(message,type){
    if(!message) return;
    var root=qs('#qc-analytics-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-analytics-toast-root';
      root.style.position='fixed';
      root.style.right='16px';
      root.style.bottom='16px';
      root.style.zIndex='9999';
      root.style.display='grid';
      root.style.gap='8px';
      document.body.appendChild(root);
    }
    var toast=document.createElement('div');
    toast.style.padding='10px 12px';
    toast.style.borderRadius='10px';
    toast.style.background = type==='error' ? '#7f1d1d' : (type==='warn' ? '#7c2d12' : '#0f172a');
    toast.style.color='#fff';
    toast.style.fontSize='13px';
    toast.style.boxShadow='0 10px 24px rgba(0,0,0,.18)';
    toast.style.opacity='0';
    toast.style.transform='translateY(8px)';
    toast.style.transition='all .18s ease';
    toast.textContent=message;
    root.appendChild(toast);
    requestAnimationFrame(function(){ toast.style.opacity='1'; toast.style.transform='translateY(0)'; });
    setTimeout(function(){ toast.style.opacity='0'; toast.style.transform='translateY(8px)'; setTimeout(function(){toast.remove();},180); },1700);
  }

  function rand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

  function updateDateLabels(){
    var label=PERIODS[state.periodIndex];
    qsa('.date-range').forEach(function(el){
      if(!el) return;
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      var icon=qs('i[data-lucide="calendar"]',el);
      el.textContent=' ' + label;
      if(icon) el.prepend(icon);
    });
  }

  function updateMetricCards(){
    var mul = state.presetIndex===0 ? 0.88 : (state.presetIndex===2 ? 1.12 : 1);
    qsa('.metric-card').forEach(function(card){
      var valueEl=qs('.metric-value',card);
      var trendEl=qs('.metric-trend',card);
      if(!valueEl || !trendEl) return;
      var text=(valueEl.textContent||'').trim();
      if(/\d/.test(text)){
        if(text.indexOf('%')>-1){
          valueEl.textContent=Math.min(99,Math.max(55,Math.round(rand(72,99)*mul)))+'%';
        }else if(text.indexOf('m')>-1 || text.indexOf('s')>-1){
          var m=Math.max(0,Math.round(rand(0,4)*(2-mul)));
          var s=Math.max(5,Math.round(rand(8,59)*(2-mul)));
          valueEl.textContent=m+'m '+s+'s';
        }else if(text.indexOf('.')>-1){
          valueEl.textContent=(Math.round((4.2+Math.random()*0.8*mul)*10)/10).toFixed(1);
        }else{
          valueEl.textContent=(Math.max(100,Math.round(rand(200,18000)*mul))).toLocaleString('en-US');
        }
      }
      var sign=Math.random()>0.45?'+':'-';
      var pct=rand(1,18);
      trendEl.textContent=sign+pct+'%';
      trendEl.classList.remove('down','warn');
      if(sign==='-') trendEl.classList.add('warn');
    });
  }

  function highlightTopTableRow(){
    qsa('.table tbody').forEach(function(tb){
      qsa('tr',tb).forEach(function(r){ r.style.background=''; });
      var first=qs('tr',tb);
      if(first) first.style.background='rgba(79,70,229,.06)';
    });
  }

  function initLegendToggle(){
    qsa('.legend-row').forEach(function(row){
      row.style.cursor='pointer';
      row.setAttribute('title','Toggle');
      row.addEventListener('click',function(){
        var strong=qs('strong',row);
        if(!strong) return;
        var muted=row.getAttribute('data-muted')==='1';
        row.setAttribute('data-muted', muted ? '0':'1');
        row.style.opacity=muted ? '1' : '.35';
        strong.style.textDecoration=muted ? 'none':'line-through';
      });
    });
  }

  function initChartTooltip(){
    qsa('.chart-placeholder').forEach(function(chart){
      chart.style.position='relative';
      var tip=document.createElement('div');
      tip.style.position='absolute';
      tip.style.pointerEvents='none';
      tip.style.padding='6px 8px';
      tip.style.borderRadius='8px';
      tip.style.background='#0f172a';
      tip.style.color='#fff';
      tip.style.fontSize='12px';
      tip.style.opacity='0';
      tip.style.transform='translate(-50%,-120%)';
      tip.style.transition='opacity .12s ease';
      tip.style.zIndex='3';
      chart.appendChild(tip);

      chart.addEventListener('mousemove',function(e){
        var rect=chart.getBoundingClientRect();
        var x=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));
        var day=Math.round(x*6)+1;
        var val=rand(120,540);
        tip.textContent='Day '+day+' · '+val+' chats';
        tip.style.left=(x*100)+'%';
        tip.style.top=Math.max(12, e.clientY-rect.top)+'px';
        tip.style.opacity='1';
      });
      chart.addEventListener('mouseleave',function(){ tip.style.opacity='0'; });
    });
  }

  function initPresetControl(){
    var host=qs('.page-header-actions .analytics-topbar');
    if(!host || qs('[data-analytics-preset-wrap]')) return;
    var wrap=document.createElement('div');
    wrap.setAttribute('data-analytics-preset-wrap','1');
    wrap.className='flex gap-2';

    PRESETS.forEach(function(name,idx){
      var btn=document.createElement('button');
      btn.type='button';
      btn.className='btn btn-secondary btn-sm';
      btn.textContent=name;
      btn.setAttribute('data-analytics-preset',String(idx));
      if(idx===state.presetIndex) btn.classList.add('btn-primary');
      wrap.appendChild(btn);
    });

    host.prepend(wrap);
  }

  function setActivePresetButton(){
    qsa('[data-analytics-preset]').forEach(function(btn){
      var idx=Number(btn.getAttribute('data-analytics-preset'));
      btn.classList.remove('btn-primary');
      if(idx===state.presetIndex) btn.classList.add('btn-primary');
    });
  }

  function initOperatorsPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Operatorlar') return;

    var cardHeader=qs('.card .card-header .card-actions');
    if(cardHeader && !qs('[data-operator-sort]')){
      var select=document.createElement('select');
      select.className='select';
      select.style.width='170px';
      select.setAttribute('data-operator-sort','1');
      select.innerHTML='\n<option value="chats">Chats (desc)</option>\n<option value="response">Response (asc)</option>\n<option value="csat">CSAT (desc)</option>\n<option value="name">Name (A-Z)</option>';
      cardHeader.prepend(select);
    }

    var table=qs('.table tbody');
    if(!table) return;

    function responseToSec(txt){
      var m=(txt||'').match(/(\d+)m\s*(\d+)s/i);
      if(!m) return 9999;
      return Number(m[1])*60+Number(m[2]);
    }

    function sortRows(mode){
      var rows=qsa('tr.table-row',table);
      rows.sort(function(a,b){
        var aT=qsa('td',a), bT=qsa('td',b);
        if(mode==='name') return (aT[0]?.textContent||'').localeCompare((bT[0]?.textContent||''));
        if(mode==='response') return responseToSec(aT[2]?.textContent)-responseToSec(bT[2]?.textContent);
        if(mode==='csat') return parseFloat(bT[4]?.textContent||0)-parseFloat(aT[4]?.textContent||0);
        return parseInt(bT[1]?.textContent||0,10)-parseInt(aT[1]?.textContent||0,10);
      });
      rows.forEach(function(r){ table.appendChild(r); });
    }

    var sortSelect=qs('[data-operator-sort]');
    sortSelect?.addEventListener('change',function(){
      sortRows(sortSelect.value);
      notify('Operatorlar saralandi: '+sortSelect.options[sortSelect.selectedIndex].text);
    });

    qsa('tr.table-row',table).forEach(function(row){
      row.style.cursor='pointer';
      row.addEventListener('dblclick',function(){
        var name=(qs('td a',row)?.textContent||'').trim();
        if(!name) return;
        window.location.href='./04-operator-detail.html?op='+encodeURIComponent(name);
      });
      var link=qs('td a',row);
      if(link){
        link.addEventListener('click',function(e){
          e.preventDefault();
          var name=(link.textContent||'').trim();
          window.location.href='./04-operator-detail.html?op='+encodeURIComponent(name);
        });
      }
    });
  }

  function initOperatorDetailPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Operator Profili') return;

    var op=new URLSearchParams(window.location.search).get('op');
    if(!op) return;

    var map={
      'Sardor A.':{abbr:'SA',role:'Admin • Day shift',status:'Online',chats:'412',resp:'1m 42s',csat:'4.9',sla:'98%'},
      'Sara M.':{abbr:'SM',role:'Manager • Day shift',status:'Online',chats:'355',resp:'2m 01s',csat:'4.8',sla:'95%'},
      'Ali K.':{abbr:'AK',role:'Agent • Evening shift',status:'Away',chats:'298',resp:'2m 14s',csat:'4.6',sla:'92%'},
      'Malika T.':{abbr:'MT',role:'Agent • Day shift',status:'Online',chats:'267',resp:'1m 54s',csat:'4.9',sla:'97%'},
      'Dilshod N.':{abbr:'DN',role:'Agent • Night shift',status:'Offline',chats:'189',resp:'2m 40s',csat:'4.5',sla:'88%'},
      'Jasur P.':{abbr:'JP',role:'Agent • Day shift',status:'Online',chats:'321',resp:'1m 37s',csat:'4.8',sla:'96%'},
      'Bobur R.':{abbr:'BR',role:'Agent • Evening shift',status:'Offline',chats:'144',resp:'3m 05s',csat:'4.4',sla:'84%'}
    };

    var data=map[op];
    if(!data) return;

    var card=qs('.split-grid .card .card-body');
    if(card){
      var avatar=qs('.avatar',card); if(avatar) avatar.textContent=data.abbr;
      var name=qs('h3',card); if(name) name.textContent=op;
      var meta=qs('p.text-muted',card); if(meta) meta.textContent=data.role;
      var badge=qs('.badge',card); if(badge){ badge.textContent=data.status; badge.className='badge ' + (data.status==='Online'?'badge-success':(data.status==='Away'?'badge-warning':'badge')); }
      var kv=qsa('.kv-row strong',card);
      if(kv[0]) kv[0].textContent=data.chats;
      if(kv[1]) kv[1].textContent=data.resp;
      if(kv[2]) kv[2].textContent=data.csat;
      if(kv[3]) kv[3].textContent=data.sla;
    }

    var title=qs('.page-header h1');
    if(title) title.textContent='Operator Profili — '+op;
  }

  function bindInteractions(){
    qsa('.date-range').forEach(function(el){
      var advance=function(){
        state.periodIndex=(state.periodIndex+1)%PERIODS.length;
        updateDateLabels();
        updateMetricCards();
        highlightTopTableRow();
        notify('Period yangilandi: '+PERIODS[state.periodIndex]);
      };
      el.addEventListener('click',advance);
      el.addEventListener('keydown',function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); advance(); } });
    });

    qsa('tbody .table-row').forEach(function(row){
      row.style.cursor='pointer';
      row.addEventListener('click',function(){
        var tb=row.closest('tbody');
        qsa('.table-row',tb).forEach(function(r){ r.style.outline=''; r.style.outlineOffset=''; });
        row.style.outline='2px solid rgba(79,70,229,.35)';
        row.style.outlineOffset='-2px';
      });
    });

    qsa('[data-action="export"]').forEach(function(btn){
      btn.addEventListener('click',function(){
        btn.disabled=true;
        var old=btn.innerHTML;
        btn.innerHTML='<i data-lucide="loader-2"></i> Tayyorlanmoqda...';
        setTimeout(function(){
          btn.disabled=false;
          btn.innerHTML=old;
          if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons();
          notify('Export tayyor (demo)');
        },900);
      });
    });

    document.addEventListener('click',function(e){
      var btn=e.target.closest('[data-analytics-preset]');
      if(!btn) return;
      state.presetIndex=Number(btn.getAttribute('data-analytics-preset'))||0;
      setActivePresetButton();
      updateMetricCards();
      notify('Preset: '+PRESETS[state.presetIndex]);
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    updateDateLabels();
    initPresetControl();
    setActivePresetButton();
    bindInteractions();
    highlightTopTableRow();
    initLegendToggle();
    initChartTooltip();
    initOperatorsPage();
    initOperatorDetailPage();
  });
})();
