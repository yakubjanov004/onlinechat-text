(function(){
  'use strict';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}

  var STORAGE_KEY='qc_analytics_state_v1';
  var PERIODS=['Bugun','Kecha','Oxirgi 7 kun','Oxirgi 30 kun'];
  var PRESETS=['Conservative','Balanced','Aggressive'];

  function loadState(){
    try{
      var s=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');
      return {
        periodIndex:Number.isInteger(s.periodIndex)?s.periodIndex:2,
        presetIndex:Number.isInteger(s.presetIndex)?s.presetIndex:1,
        operatorSort:s.operatorSort||'chats',
        selectedOperator:s.selectedOperator||'',
        slaFilter:s.slaFilter||'all',
        slaThreshold:Number(s.slaThreshold||180),
        channelFocus:s.channelFocus||'all',
        segmentMinConv:Number(s.segmentMinConv||0),
        tagQuery:s.tagQuery||'',
        exportFormat:s.exportFormat||'CSV'
      };
    }catch(e){
      return { periodIndex:2, presetIndex:1, operatorSort:'chats', selectedOperator:'', slaFilter:'all', slaThreshold:180, channelFocus:'all', segmentMinConv:0, tagQuery:'', exportFormat:'CSV' };
    }
  }

  function saveState(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }

  var state=loadState();

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
    if(sortSelect){
      sortSelect.value=state.operatorSort;
      sortRows(state.operatorSort);
      sortSelect.addEventListener('change',function(){
        state.operatorSort=sortSelect.value;
        saveState();
        sortRows(sortSelect.value);
        notify('Operatorlar saralandi: '+sortSelect.options[sortSelect.selectedIndex].text);
      });
    }

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
          state.selectedOperator=name;
          saveState();
          window.location.href='./04-operator-detail.html?op='+encodeURIComponent(name);
        });
      }
    });
  }

  function initOperatorDetailPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Operator Profili') return;

    var op=new URLSearchParams(window.location.search).get('op') || state.selectedOperator;
    if(!op) return;
    state.selectedOperator=op;
    saveState();

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

  function initSlaPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='SLA Monitoring') return;

    var complianceCard=qs('.card .card-body .stack')?.closest('.card');
    if(complianceCard){
      var header=qs('.card-header',complianceCard);
      if(header && !qs('[data-sla-threshold]',header)){
        var actions=document.createElement('div');
        actions.className='card-actions flex gap-2';
        actions.innerHTML='\n<select class="select" style="width:170px" data-sla-filter>\n  <option value="all">Barcha breachlar</option>\n  <option value="first">First response</option>\n  <option value="resolution">Resolution</option>\n  <option value="vip">VIP</option>\n</select>\n<div class="input-group" style="width:180px"><input class="input" type="number" min="60" step="30" value="'+(state.slaThreshold||180)+'" data-sla-threshold><span class="text-muted" style="font-size:12px">sec</span></div>';
        header.appendChild(actions);
      }
    }

    var rows=qsa('.table tbody .table-row');
    function delayToSec(txt){
      txt=String(txt||'').toLowerCase();
      var m=txt.match(/(\d+)m(?:\s*(\d+)s)?/);
      if(m) return Number(m[1])*60 + Number(m[2]||0);
      var s=txt.match(/(\d+)s/);
      if(s) return Number(s[1]);
      return 0;
    }

    function styleRows(){
      rows=qsa('.table tbody .table-row');
      rows.forEach(function(row){
        var cells=qsa('td',row);
        var type=(cells[2]?.textContent||'').toLowerCase();
        var delay=delayToSec(cells[3]?.textContent||'0');
        var owner=(cells[4]?.textContent||'').trim().toLowerCase();

        row.style.borderLeft='4px solid transparent';
        if(owner==='unassigned'){
          row.style.background='rgba(239,68,68,.08)';
          row.style.borderLeft='4px solid #ef4444';
        } else if(delay>900){
          row.style.background='rgba(245,158,11,.10)';
          row.style.borderLeft='4px solid #f59e0b';
        } else {
          row.style.background='';
        }

        if(!qs('[data-sla-actions]',row)){
          var td=document.createElement('td');
          td.setAttribute('data-sla-actions','1');
          td.innerHTML='<div class="flex gap-2"><button type="button" class="btn btn-secondary btn-sm" data-sla-action="assign">Assign</button><button type="button" class="btn btn-primary btn-sm" data-sla-action="resolve">Resolve</button></div>';
          row.appendChild(td);
        }

        row.setAttribute('data-sla-kind', type.indexOf('vip')>-1 ? 'vip' : (type.indexOf('resolution')>-1 ? 'resolution' : 'first'));
        row.setAttribute('data-sla-delay', String(delay));
      });

      var headerRow=qs('.table thead tr');
      if(headerRow && qsa('th',headerRow).length===5){
        var th=document.createElement('th');
        th.textContent='Actions';
        headerRow.appendChild(th);
      }
    }

    function applyFilter(){
      var kind=qs('[data-sla-filter]')?.value||'all';
      var threshold=Number(qs('[data-sla-threshold]')?.value||180);
      rows=qsa('.table tbody .table-row');
      rows.forEach(function(row){
        var rowKind=row.getAttribute('data-sla-kind')||'first';
        var delay=Number(row.getAttribute('data-sla-delay')||0);
        var kindOk=(kind==='all' || kind===rowKind);
        var thresholdOk=delay>=threshold;
        row.style.display=(kindOk && thresholdOk)?'':'none';
      });
    }

    styleRows();
    var filterEl=qs('[data-sla-filter]');
    if(filterEl) filterEl.value=state.slaFilter || 'all';
    applyFilter();

    qs('[data-sla-filter]')?.addEventListener('change',function(){
      state.slaFilter=qs('[data-sla-filter]').value;
      saveState();
      applyFilter();
      notify('SLA filter yangilandi');
    });
    qs('[data-sla-threshold]')?.addEventListener('input',function(){
      state.slaThreshold=Number(qs('[data-sla-threshold]').value||180);
      saveState();
      applyFilter();
    });

    document.addEventListener('click',function(e){
      var btn=e.target.closest('[data-sla-action]');
      if(!btn) return;
      var action=btn.getAttribute('data-sla-action');
      var row=btn.closest('.table-row');
      if(!row) return;
      var ownerCell=qsa('td',row)[4];
      if(action==='assign'){
        var who=prompt('Kimga biriktiramiz?', ownerCell?.textContent?.trim()==='Unassigned'?'Sardor A.':ownerCell?.textContent?.trim());
        if(who){
          ownerCell.textContent=who;
          notify('Chat biriktirildi: '+who);
          styleRows();
          applyFilter();
        }
      }
      if(action==='resolve'){
        row.remove();
        notify('Breach resolved');
      }
    });
  }

  function initChannelsPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Kanallar') return;

    var top=qs('.page-header-actions .analytics-topbar');
    if(top && !qs('[data-channel-focus]')){
      var sel=document.createElement('select');
      sel.className='select';
      sel.style.width='160px';
      sel.setAttribute('data-channel-focus','1');
      sel.innerHTML='<option value="all">All channels</option><option value="web">Web</option><option value="telegram">Telegram</option><option value="email">Email</option><option value="instagram">Instagram</option>';
      sel.value=state.channelFocus||'all';
      top.prepend(sel);
      sel.addEventListener('change',function(){ state.channelFocus=sel.value; saveState(); notify('Channel focus: '+sel.value); });
    }

    qsa('.mini-bar-col').forEach(function(col){
      col.style.cursor='pointer';
      col.addEventListener('click',function(){
        qsa('.mini-bar-col').forEach(function(c){ c.style.opacity='0.45'; });
        col.style.opacity='1';
      });
    });
  }

  function initSegmentsPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Segmentlar') return;
    var top=qs('.page-header-actions .analytics-topbar');
    if(top && !qs('[data-segment-minconv]')){
      var input=document.createElement('input');
      input.type='number'; input.min='0'; input.max='100';
      input.className='input'; input.style.width='120px';
      input.value=String(state.segmentMinConv||0);
      input.setAttribute('data-segment-minconv','1');
      input.title='Min conversion %';
      top.prepend(input);
      var apply=function(){
        var min=Number(input.value||0); state.segmentMinConv=min; saveState();
        qsa('.table tbody .table-row').forEach(function(row){
          var conv=parseInt((qsa('td',row)[3]?.textContent||'0').replace('%',''),10)||0;
          row.style.display=conv>=min?'':'none';
        });
      };
      input.addEventListener('input',apply); apply();
    }
  }

  function initTagsPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Tag Analytics') return;
    var top=qs('.page-header-actions .analytics-topbar');
    if(top && !qs('[data-tag-search]')){
      var search=document.createElement('input');
      search.className='input'; search.placeholder='Tag qidirish'; search.style.width='150px';
      search.value=state.tagQuery||'';
      search.setAttribute('data-tag-search','1');
      top.prepend(search);
      var apply=function(){
        var q=(search.value||'').toLowerCase().trim(); state.tagQuery=q; saveState();
        qsa('.tag-cloud .badge').forEach(function(b){ b.style.display=!q || b.textContent.toLowerCase().indexOf(q)>-1 ? '' : 'none'; });
        qsa('.table tbody .table-row').forEach(function(r){ r.style.display=!q || r.textContent.toLowerCase().indexOf(q)>-1 ? '' : 'none'; });
      };
      search.addEventListener('input',apply); apply();
    }
  }

  function initExportPage(){
    var pageTitle=qs('.page-header h1')?.textContent?.trim();
    if(pageTitle!=='Analytics Export') return;
    var formatSel=qs('.form-grid .form-field .select');
    if(formatSel){
      formatSel.value=state.exportFormat||formatSel.value;
      formatSel.addEventListener('change',function(){ state.exportFormat=formatSel.value; saveState(); });
    }
  }

  function bindInteractions(){
    qsa('.date-range').forEach(function(el){
      var advance=function(){
        state.periodIndex=(state.periodIndex+1)%PERIODS.length;
        saveState();
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
      saveState();
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
    initSlaPage();
    initChannelsPage();
    initSegmentsPage();
    initTagsPage();
    initExportPage();
  });
})();
