(function(){
  'use strict';

  var KEY='qc_settings_state_v1';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function pageKey(){ return (location.pathname.split('/').pop()||'settings').toLowerCase(); }
  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}}
  function save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){} }

  var state=load();
  state.pages=state.pages||{};
  state.global=state.global||{};

  function notify(message,type){
    if(!message) return;
    var root=qs('#qc-settings-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-settings-toast-root';
      root.style.position='fixed'; root.style.right='16px'; root.style.bottom='16px';
      root.style.zIndex='9999'; root.style.display='grid'; root.style.gap='8px';
      document.body.appendChild(root);
    }
    var t=document.createElement('div');
    t.style.padding='10px 12px'; t.style.borderRadius='10px'; t.style.color='#fff'; t.style.fontSize='13px';
    t.style.background=type==='error'?'#7f1d1d':(type==='warn'?'#7c2d12':'#0f172a');
    t.style.boxShadow='0 10px 24px rgba(0,0,0,.18)'; t.style.opacity='0'; t.style.transform='translateY(8px)'; t.style.transition='all .18s ease';
    t.textContent=message; root.appendChild(t);
    requestAnimationFrame(function(){ t.style.opacity='1'; t.style.transform='translateY(0)'; });
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateY(8px)'; setTimeout(function(){t.remove();},180); },1700);
  }

  function fieldKey(el, idx){
    var label=el.closest('.form-field')?.querySelector('.form-label')?.textContent?.trim();
    var ph=el.getAttribute('placeholder')||'';
    return (label||ph||el.type||el.tagName)+'#'+idx;
  }

  function restoreFormState(){
    var pk=pageKey();
    var p=state.pages[pk]||{};
    qsa('input, select, textarea').forEach(function(el,idx){
      if(el.type==='password') return;
      if(el.readOnly) return;
      var k=fieldKey(el,idx);
      if(!(k in p)) return;
      if(el.type==='checkbox') el.checked=!!p[k]; else el.value=String(p[k]);
    });
  }

  function captureFormState(){
    var pk=pageKey();
    var p={};
    qsa('input, select, textarea').forEach(function(el,idx){
      if(el.type==='password') return;
      if(el.readOnly) return;
      var k=fieldKey(el,idx);
      p[k]=el.type==='checkbox'?!!el.checked:el.value;
    });
    state.pages[pk]=p;
    save(state);
  }

  function bindSaveBar(){
    qsa('.sticky-save-bar .btn').forEach(function(btn){
      var txt=(btn.textContent||'').toLowerCase();
      btn.addEventListener('click',function(){
        if(txt.indexOf('saqlash')>-1){ captureFormState(); notify('Sozlamalar saqlandi'); }
        if(txt.indexOf('bekor')>-1){ restoreFormState(); notify('Oxirgi saqlangan holat tiklandi','warn'); }
      });
    });
  }

  function initWorkspace(){
    if(pageKey()!=='01-workspace.html') return;
    var nameInput=qsa('input.input').find(function(i){ return (i.previousElementSibling?.textContent||'').toLowerCase().indexOf('workspace nomi')>-1; });
    var deleteModal=qs('[data-modal="workspace-delete"]');
    var confirmInput=deleteModal?qs('input.input',deleteModal):null;
    qsa('[data-modal-open="workspace-delete"]').forEach(function(btn){
      btn.addEventListener('click',function(){
        if(confirmInput && nameInput){ confirmInput.placeholder=nameInput.value||'Workspace'; }
      });
    });
    qsa('.modal-footer .btn.btn-danger',deleteModal).forEach(function(btn){
      btn.addEventListener('click',function(e){
        var expected=(nameInput?.value||'').trim();
        var actual=(confirmInput?.value||'').trim();
        if(!expected || actual!==expected){
          e.preventDefault();
          notify('Workspace nomi mos emas','error');
          return;
        }
        state.global.workspaceName=expected; save(state);
        notify('Delete so\'rovi qabul qilindi','warn');
      });
    });
  }

  function initWidget(){
    if(pageKey()!=='02-widget-settings.html') return;
    var swatches=qsa('.color-swatch');
    var header=qs('.widget-window-header');
    swatches.forEach(function(s){
      s.style.cursor='pointer';
      s.addEventListener('click',function(){
        swatches.forEach(function(x){x.classList.remove('active');});
        s.classList.add('active');
        var c=getComputedStyle(s).backgroundColor;
        if(header) header.style.background=c;
        state.global.widgetColor=c; save(state);
      });
    });
    if(state.global.widgetColor && header) header.style.background=state.global.widgetColor;
  }

  function initSecurity(){
    if(pageKey()!=='03-security.html') return;
    qsa('.table-row .btn').forEach(function(btn){
      if((btn.textContent||'').toLowerCase().indexOf('revoke')>-1){
        btn.addEventListener('click',function(){
          btn.closest('.table-row')?.remove();
          notify('Session revoke qilindi');
        });
      }
    });
    qsa('.btn.btn-danger').forEach(function(btn){
      if((btn.textContent||'').toLowerCase().indexOf('barcha sessiyalarni tugatish')>-1){
        btn.addEventListener('click',function(){
          qsa('.table tbody .table-row').slice(1).forEach(function(r){r.remove();});
          notify('Barcha sessionlar yopildi','warn');
        });
      }
    });
  }

  function initProfile(){
    if(pageKey()!=='05-profile.html') return;
    var nameInput=qsa('input.input').find(function(i){ return (i.previousElementSibling?.textContent||'').toLowerCase()==='ism'; });
    var avatar=qs('.avatar.avatar-xxl');
    function sync(){
      if(!nameInput || !avatar) return;
      var initials=(nameInput.value||'').trim().split(/\s+/).slice(0,2).map(function(x){return x[0]?.toUpperCase()||'';}).join('')||'SA';
      avatar.textContent=initials;
      state.global.profileName=nameInput.value||''; save(state);
    }
    nameInput?.addEventListener('input',sync);
    if(state.global.profileName && nameInput) nameInput.value=state.global.profileName;
    sync();
  }

  function initPrivacyDelete(){
    if(pageKey()!=='07-privacy-delete.html') return;
    var inp=qs('.settings-section .input');
    if(inp && state.global.workspaceName) inp.placeholder=state.global.workspaceName;
  }

  function cleanTextArtifacts(){
    qsa('body *').forEach(function(el){
      if(el.children.length) return;
      if(el.textContent && el.textContent.indexOf('вЂў')>-1){
        el.textContent=el.textContent.replace(/вЂў/g,'•');
      }
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    restoreFormState();
    bindSaveBar();
    initWorkspace();
    initWidget();
    initSecurity();
    initProfile();
    initPrivacyDelete();
    cleanTextArtifacts();

    qsa('input, select, textarea').forEach(function(el){
      el.addEventListener('change',captureFormState);
      if(el.tagName==='INPUT' || el.tagName==='TEXTAREA') el.addEventListener('input',captureFormState);
    });
  });
})();
