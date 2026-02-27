(function(){
  'use strict';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }

  function initDashboard(){
    if(page()!=='01-kb-dashboard.html') return;
    var search=qs('[data-kb-search]');
    var status=qs('[data-kb-status]');
    var sort=qs('[data-kb-sort]');
    var tbody=qs('[data-kb-table] tbody');
    if(!tbody) return;
    var rows=qsa('tr',tbody);

    function apply(){
      var q=(search&&search.value||'').trim().toLowerCase();
      var st=(status&&status.value||'all');
      var visible=rows.filter(function(r){
        var text=(r.textContent||'').toLowerCase();
        var okQ=!q || text.indexOf(q)>-1;
        var okS=st==='all' || r.getAttribute('data-status')===st;
        r.style.display=(okQ&&okS)?'':'none';
        return okQ&&okS;
      });

      var sorted=visible.slice();
      if(sort&&sort.value==='alpha') sorted.sort(function(a,b){ return a.textContent.localeCompare(b.textContent); });
      if(sort&&sort.value==='views') sorted.sort(function(a,b){ return Number(b.getAttribute('data-views'))-Number(a.getAttribute('data-views')); });
      if(sort&&sort.value==='recent') sorted.sort(function(a,b){ return b.rowIndex-a.rowIndex; });
      sorted.forEach(function(r){ tbody.appendChild(r); });

      var empty=qs('[data-kb-empty]');
      var tableWrap=qs('.table-wrap');
      if(empty) empty.classList.toggle('hidden', sorted.length!==0);
      if(tableWrap) tableWrap.classList.toggle('hidden', sorted.length===0);
    }

    search&&search.addEventListener('input',apply);
    status&&status.addEventListener('change',apply);
    sort&&sort.addEventListener('change',apply);
    apply();
  }

  function initEditor(){
    if(page()!=='02-article-editor.html') return;
    var title=qs('[data-kb-title]');
    var editor=qs('[data-kb-editor]');
    var slug=qs('[data-kb-slug]');
    var auto=qs('[data-kb-autosave]');
    var modal=qs('[data-kb-modal="preview"]');
    var open=qs('[data-kb-preview]');
    var close=qs('[data-kb-close-preview]');
    var pubModal=qs('[data-kb-modal="publish"]');
    var closePub=qsa('[data-kb-close-publish]');
    var confirmPub=qs('[data-kb-confirm-publish]');
    var meta=qs('[data-kb-meta]');
    var metaCount=qs('[data-kb-meta-count]');

    function slugify(v){ return (v||'').toLowerCase().replace(/[^a-z0-9\s-]/g,'').trim().replace(/\s+/g,'-'); }
    title&&title.addEventListener('input',function(){ if(slug) slug.value=slugify(title.value); });

    var t;
    function autosave(){
      clearTimeout(t);
      if(auto) auto.textContent='Autosave: saqlanmoqda...';
      t=setTimeout(function(){ if(auto) auto.textContent='Autosave: barcha o\'zgarishlar saqlandi'; },600);
    }
    title&&title.addEventListener('input',autosave);
    editor&&editor.addEventListener('input',autosave);
    function updateMetaCount(){ if(meta&&metaCount){ metaCount.textContent=(meta.value||'').length+'/160'; } }
    meta&&meta.addEventListener('input',function(){ autosave(); updateMetaCount(); });
    updateMetaCount();

    qsa('[data-kb-tool]').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(!editor) return;
        var tool=btn.getAttribute('data-kb-tool');
        if(tool==='bold') editor.value+=' **bold**';
        if(tool==='italic') editor.value+=' _italic_';
        if(tool==='h2') editor.value+='\n\n## Sarlavha';
        if(tool==='list') editor.value+='\n- punkt';
        if(tool==='link') editor.value+=' [link](https://)';
        if(tool==='code') editor.value+='\n```js\nconsole.log("hi")\n```';
        editor.focus();
        autosave();
      });
    });

    open&&open.addEventListener('click',function(){
      if(!modal) return;
      qs('[data-kb-preview-title]',modal).textContent=(title&&title.value)||'No title';
      qs('[data-kb-preview-body]',modal).textContent=(editor&&editor.value)||'';
      modal.hidden=false; requestAnimationFrame(function(){modal.classList.add('is-open');});
    });
    close&&close.addEventListener('click',function(){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120); });
    modal&&modal.addEventListener('click',function(e){ if(e.target===modal){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120);} });

    qsa('.btn.btn-primary').forEach(function(btn){
      if((btn.textContent||'').toLowerCase().indexOf('nashr')>-1){
        btn.addEventListener('click',function(){ if(pubModal){ pubModal.hidden=false; requestAnimationFrame(function(){pubModal.classList.add('is-open');}); } });
      }
    });
    closePub.forEach(function(b){ b.addEventListener('click',function(){ if(pubModal){ pubModal.classList.remove('is-open'); setTimeout(function(){pubModal.hidden=true;},120); } }); });
    confirmPub&&confirmPub.addEventListener('click',function(){
      if(pubModal){ pubModal.classList.remove('is-open'); setTimeout(function(){pubModal.hidden=true;},120); }
      if(auto) auto.textContent='Maqola nashr qilindi ✅';
    });
  }

  function initCategories(){
    if(page()!=='03-categories.html') return;
    var list=qs('[data-kb-cats]');
    var save=qs('[data-kb-cat-save]');
    var name=qs('[data-kb-cat-name]');
    var desc=qs('[data-kb-cat-desc]');

    function bindRow(row){
      var up=qs('[data-kb-up]',row), down=qs('[data-kb-down]',row);
      up&&up.addEventListener('click',function(){ var p=row.previousElementSibling; if(p) row.parentNode.insertBefore(row,p); });
      down&&down.addEventListener('click',function(){ var n=row.nextElementSibling; if(n) row.parentNode.insertBefore(n,row); });
    }
    qsa('.list-item',list).forEach(bindRow);

    save&&save.addEventListener('click',function(){
      var n=(name&&name.value||'').trim();
      if(!n || !list) return;
      var item=document.createElement('div');
      item.className='list-item';
      item.innerHTML='<div class="item-main"><div class="item-title">🏷️ '+n+'</div><div class="item-sub">0 maqola</div></div><div class="flex gap-2"><button class="btn btn-secondary btn-sm" type="button" data-kb-up>↑</button><button class="btn btn-secondary btn-sm" type="button" data-kb-down>↓</button></div>';
      list.appendChild(item);
      bindRow(item);
      if(name) name.value=''; if(desc) desc.value='';
    });
  }

  function initSettings(){
    if(page()!=='04-kb-settings.html') return;
    var tabs=qsa('[data-kb-settings-tabs] [data-kb-stab]');
    tabs.forEach(function(t){
      t.addEventListener('click',function(){
        tabs.forEach(function(x){x.classList.remove('active');});
        t.classList.add('active');
        var v=t.getAttribute('data-kb-stab');
        qsa('[data-kb-spanel]').forEach(function(p){ p.hidden=p.getAttribute('data-kb-spanel')!==v; });
      });
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    initDashboard(); initEditor(); initCategories(); initSettings();
  });
})();