(function(){
  'use strict';

  var KEY='qc_contacts_state_v2';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }
  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}}
  function save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){} }
  var state=load();

  function notify(msg,type){
    if(!msg) return;
    var root=qs('#qc-contacts-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-contacts-toast-root';
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
    // kept for compatibility
  }

  function initContactsList(){
    if(page()!=='01-contacts-list.html') return;

    var search=qs('input[type="search"]');
    var tbody=qs('table tbody');
    if(!tbody) return;
    var rows=qsa('.table-row',tbody);
    var filterBtns=qsa('.card .btn.btn-secondary[data-action="log"]');
    var exportBtn=qs('[data-action="export"]');

    var listState={active:'all', sort:'name', page:1, pageSize:5};

    // Select all
    var thFirst=qs('table thead th');
    if(thFirst){
      thFirst.innerHTML='<input type="checkbox" aria-label="Select all" data-select-all>';
    }
    function syncSelectAll(){
      var all=qsa('input[type="checkbox"]:not([data-select-all])',tbody);
      var checked=all.filter(function(c){return c.checked;}).length;
      var sa=qs('[data-select-all]');
      if(sa){ sa.checked=all.length>0 && checked===all.length; sa.indeterminate=checked>0 && checked<all.length; }
    }
    var selectAll=qs('[data-select-all]');
    if(selectAll){
      selectAll.addEventListener('change',function(){
        qsa('input[type="checkbox"]:not([data-select-all])',tbody).forEach(function(c){ c.checked=selectAll.checked; });
      });
    }
    qsa('input[type="checkbox"]:not([data-select-all])',tbody).forEach(function(c){ c.addEventListener('change',syncSelectAll); });

    function rowData(r){
      var tds=qsa('td',r);
      return {
        el:r,
        name:(tds[1]&&tds[1].textContent||'').trim().toLowerCase(),
        company:(tds[3]&&tds[3].textContent||'').trim().toLowerCase(),
        last:(tds[4]&&tds[4].textContent||'').trim().toLowerCase(),
        text:(r.textContent||'').toLowerCase()
      };
    }

    function applyFilterSortPaginate(){
      var q=(search&&search.value||'').trim().toLowerCase();
      var data=rows.map(rowData).filter(function(d){
        var bySearch=!q || d.text.indexOf(q)>-1;
        var byTag=listState.active==='all' || d.text.indexOf(listState.active)>-1;
        return bySearch && byTag;
      });

      data.sort(function(a,b){
        var k=listState.sort;
        if(k==='company') return a.company.localeCompare(b.company);
        if(k==='last') return a.last.localeCompare(b.last);
        return a.name.localeCompare(b.name);
      });

      rows.forEach(function(r){ r.style.display='none'; });
      var total=Math.max(1,Math.ceil(data.length/listState.pageSize));
      if(listState.page>total) listState.page=total;
      var start=(listState.page-1)*listState.pageSize;
      data.slice(start,start+listState.pageSize).forEach(function(d){ d.el.style.display=''; });

      var info=qs('[data-page-info]');
      if(info) info.textContent=listState.page+' / '+total+' sahifa';
      var prev=qs('[data-page-prev]'), next=qs('[data-page-next]');
      if(prev) prev.disabled=listState.page<=1;
      if(next) next.disabled=listState.page>=total;
      syncSelectAll();

      var empty=qs('[data-empty-state="contacts"]');
      var tableWrap=qs('[data-contacts-table-wrap]');
      var hasRows=data.length>0;
      if(empty) empty.hidden=hasRows;
      if(tableWrap) tableWrap.hidden=!hasRows;
    }

    // Sort controls
    var cardBody=qs('.card .card-body');
    if(cardBody && !qs('[data-sort-controls]')){
      var sortWrap=document.createElement('div');
      sortWrap.setAttribute('data-sort-controls','1');
      sortWrap.className='flex gap-2';
      sortWrap.style.margin='10px 0';
      sortWrap.innerHTML='<button class="btn btn-secondary btn-sm" type="button" data-sort="name">Sort: Name</button><button class="btn btn-secondary btn-sm" type="button" data-sort="company">Company</button><button class="btn btn-secondary btn-sm" type="button" data-sort="last">Last contact</button>';
      cardBody.appendChild(sortWrap);
      qsa('[data-sort]',sortWrap).forEach(function(btn){
        btn.addEventListener('click',function(){ listState.sort=btn.getAttribute('data-sort'); listState.page=1; applyFilterSortPaginate(); });
      });
    }

    // Pagination controls
    if(tbody.parentElement && !qs('[data-pagination-wrap]')){
      var pager=document.createElement('div');
      pager.setAttribute('data-pagination-wrap','1');
      pager.className='flex gap-2';
      pager.style.marginTop='10px';
      pager.innerHTML='<button class="btn btn-secondary btn-sm" data-page-prev type="button">Oldingi</button><span class="badge" data-page-info>1 / 1 sahifa</span><button class="btn btn-secondary btn-sm" data-page-next type="button">Keyingi</button>';
      tbody.parentElement.parentElement.appendChild(pager);
      qs('[data-page-prev]',pager).addEventListener('click',function(){ listState.page--; applyFilterSortPaginate(); });
      qs('[data-page-next]',pager).addEventListener('click',function(){ listState.page++; applyFilterSortPaginate(); });
    }

    filterBtns.forEach(function(btn){
      var txt=(btn.textContent||'').trim().toLowerCase();
      btn.addEventListener('click',function(){
        listState.active=txt;
        listState.page=1;
        filterBtns.forEach(function(b){b.classList.remove('btn-primary'); b.classList.add('btn-secondary');});
        btn.classList.remove('btn-secondary'); btn.classList.add('btn-primary');
        applyFilterSortPaginate();
      });
    });

    search && search.addEventListener('input',function(){ listState.page=1; applyFilterSortPaginate(); });

    exportBtn && exportBtn.addEventListener('click',function(e){
      e.preventDefault();
      var selected=qsa('tbody input[type="checkbox"]:checked').length;
      notify('Bulk export navbatga qo\'shildi ('+(selected||rows.filter(function(r){return r.style.display!=='none';}).length)+' kontakt)');
    });

    rows.forEach(function(r){
      r.addEventListener('dblclick',function(){
        var link=qs('a[href*="02-contact-profile"]',r);
        if(link) location.href=link.getAttribute('href');
      });
    });

    applyFilterSortPaginate();
  }

  function initContactProfile(){
    if(page()!=='02-contact-profile.html') return;
    var note=qs('textarea.textarea');
    if(!note) return;
    var key='contactNote';
    if(state[key]) note.value=state[key];

    var timeline=qs('.timeline');
    function addEvent(text){
      if(!timeline) return;
      var it=document.createElement('div');
      it.className='timeline-item';
      it.innerHTML='<span class="timeline-dot"></span><div class="timeline-card"><strong>'+text+'</strong><span class="timeline-time">Hozir</span></div>';
      timeline.prepend(it);
    }

    note.addEventListener('input',function(){ state[key]=note.value; save(state); });

    var wrap=note.parentElement;
    if(wrap && !qs('[data-save-note]',wrap)){
      var btn=document.createElement('button');
      btn.type='button'; btn.className='btn btn-primary btn-sm'; btn.textContent='Note saqlash';
      btn.setAttribute('data-save-note','1');
      btn.style.marginTop='8px';
      wrap.appendChild(btn);
      btn.addEventListener('click',function(){
        state[key]=note.value; save(state);
        addEvent('Note yangilandi');
        notify('Kontakt note saqlandi');
      });
    }
  }

  function initOrganizations(){
    if(page()!=='03-organizations.html') return;
    var table=qs('table tbody');
    if(!table) return;
    qsa('tr.table-row',table).forEach(function(r){
      r.style.cursor='pointer';
      r.addEventListener('click',function(e){
        if(e.target.closest('a,button')) return;
        location.href='./04-org-detail.html';
      });
    });
  }

  function initSegments(){
    if(page()!=='05-segments.html') return;
    var list=qs('.list-stack');
    var modal=qs('[data-modal="new-contact-segment"]');
    var nameInput=modal?qs('input.input',modal):null;
    var ruleInput=modal?qs('textarea.textarea',modal):null;
    var saveBtn=modal?qsa('.modal-footer .btn.btn-primary',modal)[0]:null;

    function attachActions(item){
      if(qs('[data-seg-edit]',item)) return;
      var actions=document.createElement('div');
      actions.className='flex gap-2';
      actions.innerHTML='<button type="button" class="btn btn-secondary btn-sm" data-seg-edit>Edit</button><button type="button" class="btn btn-secondary btn-sm" data-seg-delete>Delete</button>';
      item.appendChild(actions);

      qs('[data-seg-edit]',item).addEventListener('click',function(){
        var t=qs('.item-title',item); var cur=t?t.textContent:'';
        var n=prompt('Yangi nom:',cur);
        if(!n) return;
        if(t) t.textContent=n;
        notify('Segment yangilandi');
      });
      qs('[data-seg-delete]',item).addEventListener('click',function(){
        if(confirm('Segment o\'chirilsinmi?')){ item.remove(); notify('Segment o\'chirildi'); }
      });
    }

    qsa('.list-item',list||document).forEach(attachActions);

    saveBtn && saveBtn.addEventListener('click',function(){
      var name=(nameInput&&nameInput.value||'').trim();
      var rule=(ruleInput&&ruleInput.value||'').trim();
      if(!name || !rule){ notify('Segment nomi va qoidasini kiriting','error'); return; }
      if(!list) return;
      var item=document.createElement('div');
      item.className='list-item';
      var count=Math.floor(Math.random()*300)+1;
      item.innerHTML='<div class="item-main"><div class="item-title"></div><div class="item-sub"></div></div><span class="badge badge-info">Dynamic</span>';
      qs('.item-title',item).textContent=name;
      qs('.item-sub',item).textContent=count+' contacts • '+rule.slice(0,48)+(rule.length>48?'...':'');
      list.prepend(item);
      attachActions(item);
      notify('Yangi segment qo\'shildi: '+name);
    });
  }

  function initImportExport(){
    if(page()!=='06-import-export.html') return;
    var dropzone=qs('.dropzone');
    var importBtn=qsa('.btn.btn-primary[data-action="log"]')[0];
    var format=qs('select.select');
    var segment=qsa('select.select')[1];
    var downloadBtn=qs('.btn.btn-primary[data-action="export"]');
    var historyBody=qs('table tbody');
    var pickedFile='';

    function ensureProgress(){
      var cardBody=dropzone?dropzone.parentElement:null;
      if(!cardBody) return null;
      var wrap=qs('[data-import-progress]',cardBody);
      if(wrap) return wrap;
      wrap=document.createElement('div');
      wrap.setAttribute('data-import-progress','1');
      wrap.style.marginTop='10px';
      wrap.innerHTML='<div class="progress"><div class="progress-bar" style="width:0%"></div></div><small data-progress-text>0%</small>';
      cardBody.appendChild(wrap);
      return wrap;
    }

    function setDropLabel(text){
      var label=dropzone?qs('div',dropzone):null;
      if(label) label.textContent=text;
    }

    if(dropzone){
      var input=document.createElement('input');
      input.type='file'; input.accept='.csv,.xlsx,.json'; input.hidden=true;
      dropzone.appendChild(input);
      dropzone.style.cursor='pointer';
      dropzone.addEventListener('click',function(){ input.click(); });
      input.addEventListener('change',function(){
        var f=input.files && input.files[0];
        if(!f) return;
        pickedFile=f.name;
        setDropLabel('Tanlandi: '+f.name);
      });
    }

    importBtn && importBtn.addEventListener('click',function(){
      var fileName=pickedFile||'contacts-import.csv';
      var pWrap=ensureProgress();
      var bar=pWrap?qs('.progress-bar',pWrap):null;
      var txt=pWrap?qs('[data-progress-text]',pWrap):null;
      var val=0;
      var timer=setInterval(function(){
        val+=20;
        if(bar) bar.style.width=val+'%';
        if(txt) txt.textContent=val+'%';
        if(val>=100){
          clearInterval(timer);
          var now=new Date();
          var stamp=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
          var rows=Math.floor(Math.random()*700)+30;
          if(historyBody){
            var tr=document.createElement('tr');
            tr.className='table-row';
            var warn=Math.random()<0.25;
            tr.innerHTML='<td>'+stamp+'</td><td>'+fileName+'</td><td>'+rows+'</td><td><span class="badge '+(warn?'badge-warning':'badge-success')+'">'+(warn?'Warning':'Completed')+'</span></td><td>You</td>';
            historyBody.prepend(tr);
          }
          notify('Import bajarildi: '+fileName+' ('+rows+' qator)');
        }
      },160);
    });

    downloadBtn && downloadBtn.addEventListener('click',function(e){
      e.preventDefault();
      var fmt=(format&&format.value||'CSV').toLowerCase();
      var seg=(segment&&segment.value||'All contacts');
      var content='name,email,company\nAhmad,ahmad@example.com,ACME\nNodira,nodira@example.com,Nexa\n';
      if(fmt==='json') content='[{"name":"Ahmad","email":"ahmad@example.com"}]';
      var blob=new Blob([content],{type:'text/plain;charset=utf-8'});
      var url=URL.createObjectURL(blob);
      var a=document.createElement('a');
      a.href=url;
      a.download='contacts-'+seg.toLowerCase().replace(/\s+/g,'-')+'.'+(fmt==='xlsx'?'csv':fmt);
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function(){URL.revokeObjectURL(url);},300);
      notify('Export yuklab olindi: '+seg+' ('+fmt.toUpperCase()+')');
    });
  }

  function safeRun(name,fn){ try{fn();} catch(e){ console.error('[contacts]',name,e); notify(name+' modulida xatolik','error'); } }

  document.addEventListener('DOMContentLoaded',function(){
    safeRun('cleanArtifacts', cleanArtifacts);
    safeRun('initContactsList', initContactsList);
    safeRun('initContactProfile', initContactProfile);
    safeRun('initOrganizations', initOrganizations);
    safeRun('initSegments', initSegments);
    safeRun('initImportExport', initImportExport);
  });
})();
