(function(){
  'use strict';

  var KEY='qc_contacts_state_v1';
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
    qsa('body *').forEach(function(el){
      if(el.children.length) return;
      if(el.textContent && el.textContent.indexOf('вЂў')>-1){
        el.textContent=el.textContent.replace(/вЂў/g,'•');
      }
    });
  }

  function initContactsList(){
    if(page()!=='01-contacts-list.html') return;

    var search=qs('input[type="search"]');
    var rows=qsa('tbody .table-row');
    var filterBtns=qsa('.card .btn.btn-secondary[data-action="log"]');
    var exportBtn=qs('[data-action="export"]');

    function rowText(row){ return (row.textContent||'').toLowerCase(); }
    function applyFilter(tag){
      var q=(search&&search.value||'').trim().toLowerCase();
      rows.forEach(function(r){
        var text=rowText(r);
        var bySearch=!q || text.indexOf(q)>-1;
        var byTag=tag==='all' || text.indexOf(tag)>-1;
        r.style.display=(bySearch && byTag)?'':'none';
      });
    }

    var active='all';
    filterBtns.forEach(function(btn){
      var txt=(btn.textContent||'').trim().toLowerCase();
      btn.addEventListener('click',function(){
        active=txt;
        filterBtns.forEach(function(b){b.classList.remove('btn-primary'); b.classList.add('btn-secondary');});
        btn.classList.remove('btn-secondary'); btn.classList.add('btn-primary');
        applyFilter(active);
      });
    });

    search && search.addEventListener('input',function(){ applyFilter(active); });

    exportBtn && exportBtn.addEventListener('click',function(e){
      e.preventDefault();
      var selected=qsa('tbody input[type="checkbox"]:checked').length;
      notify('Bulk export navbatga qo\'shildi ('+(selected||rows.length)+' kontakt)');
    });

    rows.forEach(function(r){
      r.addEventListener('dblclick',function(){
        var link=qs('a[href*="02-contact-profile"]',r);
        if(link) location.href=link.getAttribute('href');
      });
    });

    applyFilter(active);
  }

  function initContactProfile(){
    if(page()!=='02-contact-profile.html') return;
    var note=qs('textarea.textarea');
    if(!note) return;
    var key='contactNote';
    if(state[key]) note.value=state[key];
    note.addEventListener('input',function(){ state[key]=note.value; save(state); });

    var wrap=note.parentElement;
    if(wrap && !qs('[data-save-note]',wrap)){
      var btn=document.createElement('button');
      btn.type='button'; btn.className='btn btn-primary btn-sm'; btn.textContent='Note saqlash';
      btn.setAttribute('data-save-note','1');
      btn.style.marginTop='8px';
      wrap.appendChild(btn);
      btn.addEventListener('click',function(){ state[key]=note.value; save(state); notify('Kontakt note saqlandi'); });
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

    saveBtn && saveBtn.addEventListener('click',function(){
      var name=(nameInput&&nameInput.value||'').trim();
      var rule=(ruleInput&&ruleInput.value||'').trim();
      if(!name || !rule){ notify('Segment nomi va qoidasini kiriting','error'); return; }
      if(!list) return;
      var item=document.createElement('div');
      item.className='list-item';
      item.innerHTML='<div class="item-main"><div class="item-title"></div><div class="item-sub"></div></div><span class="badge badge-info">Dynamic</span>';
      qs('.item-title',item).textContent=name;
      qs('.item-sub',item).textContent='0 contacts • '+rule.slice(0,48)+(rule.length>48?'...':'');
      list.prepend(item);
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
      var now=new Date();
      var stamp=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
      var rows=Math.floor(Math.random()*700)+30;
      if(historyBody){
        var tr=document.createElement('tr');
        tr.className='table-row';
        tr.innerHTML='<td>'+stamp+'</td><td>'+fileName+'</td><td>'+rows+'</td><td><span class="badge badge-success">Completed</span></td><td>You</td>';
        historyBody.prepend(tr);
      }
      notify('Import bajarildi: '+fileName+' ('+rows+' qator)');
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