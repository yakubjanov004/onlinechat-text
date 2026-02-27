(function(){
  'use strict';

  var KEY='qc_visitors_state_v2';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }
  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}}
  function save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){} }
  var state=load();

  function notify(msg,type){
    if(!msg) return;
    var root=qs('#qc-visitors-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-visitors-toast-root';
      root.style.position='fixed'; root.style.right='16px'; root.style.bottom='16px';
      root.style.display='grid'; root.style.gap='8px'; root.style.zIndex='9999';
      document.body.appendChild(root);
    }
    var t=document.createElement('div');
    t.style.padding='10px 12px'; t.style.borderRadius='10px'; t.style.color='#fff'; t.style.fontSize='13px';
    t.style.background=type==='error'?'#7f1d1d':'#0f172a';
    t.style.boxShadow='0 10px 24px rgba(0,0,0,.18)'; t.style.opacity='0'; t.style.transform='translateY(8px)'; t.style.transition='all .18s ease';
    t.textContent=msg; root.appendChild(t);
    requestAnimationFrame(function(){ t.style.opacity='1'; t.style.transform='translateY(0)'; });
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateY(8px)'; setTimeout(function(){t.remove();},180); },1700);
  }

  function cleanArtifacts(){
    qsa('body *').forEach(function(el){
      if(el.children.length) return;
      if(el.textContent && el.textContent.indexOf('вЂў')>-1){
        el.textContent=el.textContent.replace(/вЂў/g,'•');
      }
    });
  }

  function parseMMSS(s){
    var m=String(s||'0:0').match(/(\d+):(\d+)/);
    if(!m) return 0;
    return Number(m[1])*60+Number(m[2]);
  }
  function fmtMMSS(total){
    total=Math.max(0,total|0);
    var m=Math.floor(total/60), s=total%60;
    return String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  }

  function ensureProactiveModal(){
    var modal=qs('[data-visitor-proactive-modal]');
    if(modal) return modal;
    modal=document.createElement('div');
    modal.setAttribute('data-visitor-proactive-modal','1');
    modal.className='modal-overlay';
    modal.hidden=true;
    modal.innerHTML='\
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="proactive-title">\
        <div class="modal-header">\
          <h3 id="proactive-title">Proaktiv chat boshlash</h3>\
          <button class="btn btn-ghost btn-sm" type="button" data-proactive-close><i data-lucide="x"></i></button>\
        </div>\
        <div class="modal-body">\
          <div class="kv-list">\
            <div class="kv-row"><span>Visitor</span><strong data-proactive-visitor>Anonymous</strong></div>\
            <div class="kv-row"><span>Current page</span><strong data-proactive-page>/pricing</strong></div>\
          </div>\
          <div class="form-grid one" style="margin-top:12px">\
            <label class="form-field">\
              <span class="form-label">Shablon</span>\
              <select class="select" data-proactive-template>\
                <option value="">Shablon tanlash</option>\
                <option>Salom! Sizga yordam kerakmi?</option>\
                <option>Pricing haqida ma\'lumot beraymi?</option>\
                <option>Demo ko\'rib chiqishni xohlaysizmi?</option>\
              </select>\
            </label>\
            <label class="form-field">\
              <span class="form-label">Xabar</span>\
              <textarea class="textarea" rows="5" data-proactive-message placeholder="Salom! Sizga yordam bera olaman."></textarea>\
            </label>\
            <small class="text-muted" data-proactive-count>0 / 500</small>\
          </div>\
        </div>\
        <div class="modal-footer">\
          <button class="btn btn-secondary" type="button" data-proactive-close>Bekor qilish</button>\
          <button class="btn btn-primary" type="button" data-proactive-send>Yuborish</button>\
        </div>\
      </div>';
    document.body.appendChild(modal);
    if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons();
    return modal;
  }

  function openModal(modal){ modal.hidden=false; requestAnimationFrame(function(){modal.classList.add('is-open');}); }
  function closeModal(modal){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},130); }

  function initVisitorsList(){
    if(page()!=='01-visitors-list.html') return;
    var table=qs('table tbody');
    if(!table) return;
    var rows=qsa('.table-row',table);
    var liveBadge=qs('.badge.badge-success');

    // Filters + tabs (docs'ga yaqinroq)
    var cardBody=qs('section.card .card-body');
    if(cardBody && !qs('[data-vis-filter-wrap]')){
      var f=document.createElement('div');
      f.setAttribute('data-vis-filter-wrap','1');
      f.className='stack';
      f.style.marginTop='12px';
      f.innerHTML='\
        <div class="pill-tabs" data-vis-tabs>\
          <button class="tab active" type="button" data-vis-tab="online">Online</button>\
          <button class="tab" type="button" data-vis-tab="offline">Offline</button>\
          <button class="tab" type="button" data-vis-tab="all">Barchasi</button>\
        </div>\
        <div class="form-grid three">\
          <input class="input" type="search" placeholder="Country yoki page qidiring" data-vis-search>\
          <select class="select" data-vis-country><option value="all">Country: Barchasi</option><option value="uz">Uzbekistan</option><option value="kz">Kazakhstan</option><option value="tr">Turkey</option><option value="us">United States</option><option value="ae">UAE</option><option value="in">India</option><option value="ru">Russia</option><option value="de">Germany</option></select>\
          <select class="select" data-vis-duration><option value="all">Duration: Barchasi</option><option value="lt1">&lt; 1 min</option><option value="1to5">1-5 min</option><option value="gt5">5+ min</option></select>\
        </div>\
        <div class="flex gap-2"><button class="btn btn-secondary" type="button" data-vis-clear>Tozalash</button><button class="btn btn-primary" type="button" data-vis-proactive disabled>Proaktiv chat boshlash</button></div>';
      cardBody.appendChild(f);
    }

    var search=qs('[data-vis-search]');
    var countrySel=qs('[data-vis-country]');
    var durationSel=qs('[data-vis-duration]');
    var clearBtn=qs('[data-vis-clear]');
    var proactiveBtn=qs('[data-vis-proactive]');
    var activeTab='online';

    var selectedRow=null;
    function selectRow(r){
      rows.forEach(function(x){ x.style.background=''; x.style.outline=''; x.removeAttribute('aria-selected'); });
      selectedRow=r;
      if(r){ r.style.background='#EEF2FF'; r.style.outline='1px solid #C7D2FE'; r.setAttribute('aria-selected','true'); }
      if(proactiveBtn) proactiveBtn.disabled=!r;
    }

    rows.forEach(function(r){
      r.style.cursor='pointer';
      r.tabIndex=0;
      r.setAttribute('role','button');
      r.addEventListener('click',function(e){ if(e.target.closest('button,a,input')) return; selectRow(r); });
      r.addEventListener('keydown',function(e){ if(e.key==='Enter' || e.key===' '){ e.preventDefault(); selectRow(r); } });
    });

    function byDuration(sec, mode){
      if(mode==='all') return true;
      if(mode==='lt1') return sec<60;
      if(mode==='1to5') return sec>=60 && sec<=300;
      if(mode==='gt5') return sec>300;
      return true;
    }

    function applyFilter(){
      var q=(search&&search.value||'').trim().toLowerCase();
      var country=(countrySel&&countrySel.value||'all');
      var duration=(durationSel&&durationSel.value||'all');

      rows.forEach(function(r){
        var tds=qsa('td',r);
        var txt=(r.textContent||'').toLowerCase();
        var loc=(tds[1]&&tds[1].textContent||'').toLowerCase();
        var status=(tds[4]&&tds[4].textContent||'').toLowerCase();
        var sec=parseMMSS(tds[3]&&tds[3].textContent);

        var byQ=!q || txt.indexOf(q)>-1;
        var byCountry=country==='all' || loc.indexOf(country)>-1;
        var byDuration=byDuration(sec,duration);
        var byTab = activeTab==='all' || (activeTab==='online' && (status.indexOf('active')>-1 || status.indexOf('idle')>-1)) || (activeTab==='offline' && (status.indexOf('left')>-1 || status.indexOf('offline')>-1));

        r.style.display=(byQ&&byCountry&&byDuration&&byTab)?'':'none';
      });
      if(selectedRow && selectedRow.style.display==='none') selectRow(null);
      updateLiveCounter();
    }

    qsa('[data-vis-tab]').forEach(function(btn){
      btn.addEventListener('click',function(){
        activeTab=btn.getAttribute('data-vis-tab');
        qsa('[data-vis-tab]').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        applyFilter();
      });
    });

    search&&search.addEventListener('input',applyFilter);
    countrySel&&countrySel.addEventListener('change',applyFilter);
    durationSel&&durationSel.addEventListener('change',applyFilter);
    clearBtn&&clearBtn.addEventListener('click',function(){
      if(search) search.value='';
      if(countrySel) countrySel.value='all';
      if(durationSel) durationSel.value='all';
      activeTab='online';
      qsa('[data-vis-tab]').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-vis-tab')==='online'); });
      applyFilter();
    });

    var modal=ensureProactiveModal();
    var closeBtns=qsa('[data-proactive-close]',modal);
    closeBtns.forEach(function(b){ b.addEventListener('click',function(){ closeModal(modal); }); });
    modal.addEventListener('click',function(e){ if(e.target===modal) closeModal(modal); });

    var tmpl=qs('[data-proactive-template]',modal);
    var msg=qs('[data-proactive-message]',modal);
    var cnt=qs('[data-proactive-count]',modal);
    var sendBtn=qs('[data-proactive-send]',modal);
    function syncCnt(){ var l=(msg&&msg.value||'').length; if(cnt) cnt.textContent=l+' / 500'; if(sendBtn) sendBtn.disabled=l===0 || l>500; }
    tmpl&&tmpl.addEventListener('change',function(){ if(msg) msg.value=tmpl.value; syncCnt(); });
    msg&&msg.addEventListener('input',syncCnt);
    msg&&msg.addEventListener('keydown',function(e){ if((e.ctrlKey||e.metaKey) && e.key==='Enter' && sendBtn && !sendBtn.disabled){ sendBtn.click(); }});
    syncCnt();

    function openProactiveByRow(r){
      if(!r) return;
      var tds=qsa('td',r);
      var ip=tds[0] ? tds[0].textContent.trim() : 'Anonymous';
      var pg=tds[2] ? tds[2].textContent.trim() : '/';
      var nm=qs('[data-proactive-visitor]',modal); var np=qs('[data-proactive-page]',modal);
      if(nm) nm.textContent=ip;
      if(np) np.textContent=pg;
      if(msg) msg.value='Salom! Sizga yordam bera olamanmi?';
      syncCnt();
      openModal(modal);
    }

    proactiveBtn&&proactiveBtn.addEventListener('click',function(){ openProactiveByRow(selectedRow); });
    qsa('.btn.btn-primary[data-action="log"]',table).forEach(function(b){
      b.addEventListener('click',function(e){ e.preventDefault(); var r=b.closest('.table-row'); selectRow(r); openProactiveByRow(r); });
    });

    sendBtn&&sendBtn.addEventListener('click',function(){
      if(!selectedRow){ notify('Avval visitor tanlang','error'); return; }
      closeModal(modal);
      var statusCell=qsa('td',selectedRow)[4];
      if(statusCell){ statusCell.innerHTML='<span class="badge badge-warning">Contacted</span>'; }
      notify('Proaktiv xabar yuborildi');
    });

    function updateLiveCounter(){
      var shown=rows.filter(function(r){return r.style.display!== 'none';});
      var online=shown.filter(function(r){ var s=(qsa('td',r)[4]&&qsa('td',r)[4].textContent||'').toLowerCase(); return s.indexOf('active')>-1 || s.indexOf('idle')>-1; }).length;
      if(liveBadge){
        liveBadge.textContent='Live • '+online+' visitors online';
        liveBadge.style.transform='scale(1.04)';
        setTimeout(function(){liveBadge.style.transform='';},180);
      }
    }

    setInterval(function(){
      rows.forEach(function(r){
        if(r.style.display==='none') return;
        var td=qsa('td',r)[3];
        if(!td) return;
        td.textContent=fmtMMSS(parseMMSS(td.textContent)+1);
      });
      updateLiveCounter();
    },1000);

    applyFilter();
  }

  function initVisitorProfile(){
    if(page()!=='02-visitor-profile.html') return;
    var sessionRow=qsa('.kv-row').find(function(r){ return (r.textContent||'').toLowerCase().indexOf('session')>-1; });
    var sessionStrong=sessionRow?qs('strong',sessionRow):null;
    var sec=parseMMSS(sessionStrong?sessionStrong.textContent:'00:00');
    setInterval(function(){ sec++; if(sessionStrong) sessionStrong.textContent=fmtMMSS(sec); },1000);

    var addBtn=qsa('.btn.btn-secondary').find(function(b){ return (b.textContent||'').toLowerCase().indexOf('add to contacts')>-1; });
    if(addBtn){
      addBtn.addEventListener('click',function(){
        addBtn.textContent='Saved to contacts';
        addBtn.classList.remove('btn-secondary');
        addBtn.classList.add('btn-primary');
        notify('Visitor kontakt sifatida saqlandi');
      });
    }
  }

  function initVisitorsMap(){
    if(page()!=='03-visitors-map.html') return;
    var map=qs('.world-map');
    if(!map) return;

    var wrap=map.closest('.card').parentElement;
    if(wrap && !qs('[data-map-live-feed]')){
      var panel=document.createElement('section');
      panel.className='card';
      panel.setAttribute('data-map-live-feed','1');
      panel.innerHTML='\
        <div class="card-header"><div><h3>So\'nggi faollik</h3><p class="card-description">Real-time feed</p></div></div>\
        <div class="card-body"><div class="list-stack" data-map-feed-list></div></div>';
      wrap.appendChild(panel);
    }
    var feed=qs('[data-map-feed-list]');

    function addFeed(text){
      if(!feed) return;
      var it=document.createElement('div');
      it.className='list-item';
      it.innerHTML='<div class="item-main"><div class="item-title">'+text+'</div><div class="item-sub">Hozirgina</div></div>';
      feed.prepend(it);
      qsa('.list-item',feed).slice(8).forEach(function(x){x.remove();});
    }

    qsa('.map-marker',map).forEach(function(m,idx){
      m.style.cursor='pointer';
      m.addEventListener('click',function(){
        addFeed('Visitor #'+(idx+1)+' marker bosildi');
        notify('Marker tanlandi: visitor #'+(idx+1));
      });
    });

    var events=['/pricing sahifasiga o\'tdi','/features ochdi','Chat boshladi','Sahifani tark etdi'];
    setInterval(function(){
      var e=events[Math.floor(Math.random()*events.length)];
      addFeed('Anonymous #'+(1000+Math.floor(Math.random()*9000))+' — '+e);
    },4500);
  }

  function safeRun(name,fn){ try{fn();} catch(e){ console.error('[visitors]',name,e); notify(name+' modulida xatolik','error'); } }

  document.addEventListener('DOMContentLoaded',function(){
    safeRun('cleanArtifacts', cleanArtifacts);
    safeRun('initVisitorsList', initVisitorsList);
    safeRun('initVisitorProfile', initVisitorProfile);
    safeRun('initVisitorsMap', initVisitorsMap);
    save(state);
  });
})();