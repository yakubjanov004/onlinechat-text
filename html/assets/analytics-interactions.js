(function(){
  'use strict';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}

  var PERIODS=['Bugun','Kecha','Oxirgi 7 kun','Oxirgi 30 kun'];
  var state={ periodIndex:2 };

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
    qsa('.metric-card').forEach(function(card){
      var valueEl=qs('.metric-value',card);
      var trendEl=qs('.metric-trend',card);
      if(!valueEl || !trendEl) return;
      var text=(valueEl.textContent||'').trim();
      if(/\d/.test(text)){
        if(text.indexOf('%')>-1){
          valueEl.textContent=rand(72,99)+'%';
        }else if(text.indexOf('m')>-1 || text.indexOf('s')>-1){
          valueEl.textContent=rand(0,4)+'m '+rand(8,59)+'s';
        }else if(text.indexOf('.')>-1){
          valueEl.textContent=(Math.round((4.2+Math.random()*0.8)*10)/10).toFixed(1);
        }else{
          valueEl.textContent=(rand(200,18000)).toLocaleString('en-US');
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
  }

  document.addEventListener('DOMContentLoaded',function(){
    updateDateLabels();
    bindInteractions();
    highlightTopTableRow();
  });
})();
