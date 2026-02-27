(function(){
  'use strict';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }

  function initCatalog(){
    if(page()!=='01-addons-catalog.html') return;
    var search=qs('[data-addon-search]');
    var sort=qs('[data-addon-sort]');
    var tabs=qsa('[data-addon-tabs] [data-addon-cat]');
    var cards=qsa('[data-addon-grid] .addon-card');
    var empty=qs('[data-addon-empty]');
    var active='all';

    function apply(){
      var q=(search&&search.value||'').toLowerCase().trim();
      var shown=cards.filter(function(c){
        var byCat=active==='all' || c.getAttribute('data-cat')===active;
        var byQ=!q || (c.textContent||'').toLowerCase().indexOf(q)>-1;
        c.classList.toggle('hidden', !(byCat&&byQ));
        return byCat&&byQ;
      });
      var s=(sort&&sort.value)||'popular';
      shown.sort(function(a,b){
        if(s==='price_low') return Number(a.getAttribute('data-price'))-Number(b.getAttribute('data-price'));
        if(s==='newest') return 0;
        return Number(b.getAttribute('data-pop'))-Number(a.getAttribute('data-pop'));
      }).forEach(function(x){ x.parentNode.appendChild(x); });
      if(empty) empty.classList.toggle('hidden', shown.length!==0);
    }

    tabs.forEach(function(t){ t.addEventListener('click',function(){ tabs.forEach(function(x){x.classList.remove('active');}); t.classList.add('active'); active=t.getAttribute('data-addon-cat'); apply(); }); });
    search&&search.addEventListener('input',apply);
    sort&&sort.addEventListener('change',apply);
    apply();
  }

  function initActive(){
    if(page()!=='02-active-addons.html') return;
    qsa('[data-addon-remove]').forEach(function(btn){
      btn.addEventListener('click',function(){ var row=btn.closest('[data-active-addon]'); if(row) row.remove(); });
    });
  }

  function initDetail(){
    if(page()!=='03-addon-detail.html') return;
    var tabs=qsa('[data-addon-detail-tabs] [data-addon-dtab]');
    tabs.forEach(function(t){ t.addEventListener('click',function(){ tabs.forEach(function(x){x.classList.remove('active');}); t.classList.add('active'); var v=t.getAttribute('data-addon-dtab'); qsa('[data-addon-dpanel]').forEach(function(p){ p.hidden=p.getAttribute('data-addon-dpanel')!==v; }); }); });

    var modal=qs('[data-addon-modal="activation"]');
    var open=qs('[data-addon-open-activation]');
    var close=qs('[data-addon-close-activation]');
    var next=qs('[data-addon-next-step]');
    var prev=qs('[data-addon-prev-step]');
    var step=1;
    function paint(){
      qsa('[data-addon-steps] [data-step]').forEach(function(x){x.classList.toggle('active', Number(x.getAttribute('data-step'))===step);});
      qsa('[data-step-panel]').forEach(function(p){ p.hidden=Number(p.getAttribute('data-step-panel'))!==step; });
      if(prev) prev.disabled=step===1;
      if(next) next.textContent=step===3?'Faollashtirish':'Davom etish';
    }
    open&&open.addEventListener('click',function(){ if(modal){ modal.hidden=false; requestAnimationFrame(function(){modal.classList.add('is-open');}); step=1; paint(); } });
    close&&close.addEventListener('click',function(){ if(modal){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120);} });
    modal&&modal.addEventListener('click',function(e){ if(e.target===modal){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120);} });
    prev&&prev.addEventListener('click',function(){ step=Math.max(1,step-1); paint(); });
    next&&next.addEventListener('click',function(){ if(step<3){ step++; paint(); } else { modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120); } });
  }

  function initSettings(){
    if(page()!=='04-addon-settings.html') return;
    var tabs=qsa('[data-addon-settings-tabs] [data-addon-stab]');
    tabs.forEach(function(t){ t.addEventListener('click',function(){ tabs.forEach(function(x){x.classList.remove('active');}); t.classList.add('active'); var v=t.getAttribute('data-addon-stab'); qsa('[data-addon-spanel]').forEach(function(p){ p.hidden=p.getAttribute('data-addon-spanel')!==v; }); }); });
  }

  document.addEventListener('DOMContentLoaded',function(){ initCatalog(); initActive(); initDetail(); initSettings(); });
})();