(function(){
  'use strict';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }

  function toast(msg){
    var root=qs('#dev-toast');
    if(!root){ root=document.createElement('div'); root.id='dev-toast'; root.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999'; document.body.appendChild(root); }
    var t=document.createElement('div'); t.style.cssText='background:#111827;color:#fff;padding:10px 12px;border-radius:10px;box-shadow:0 10px 24px rgba(0,0,0,.18);margin-top:8px'; t.textContent=msg; root.appendChild(t); setTimeout(function(){t.remove();},1500);
  }

  function initApiKeys(){
    if(page()!=='01-api-keys.html') return;
    var quick=qs('[data-dev-quick]');
    var collapse=qs('[data-dev-collapse]');
    collapse&&collapse.addEventListener('click',function(){ if(!quick) return; var b=qs('.card-body',quick); var hide=b.style.display==='none'; b.style.display=hide?'':'none'; collapse.textContent=hide?"Yig'ish":"Ochish"; localStorage.setItem('dev_quick_hide', hide?'0':'1'); });
    if(localStorage.getItem('dev_quick_hide')==='1' && collapse) collapse.click();

    qsa('[data-copy]').forEach(function(btn){ btn.addEventListener('click',function(){ navigator.clipboard&&navigator.clipboard.writeText(btn.getAttribute('data-copy')); toast('Nusxalandi'); }); });
    qsa('[data-dev-regen]').forEach(function(b){ b.addEventListener('click',function(){ toast('Yangi key yaratildi (demo)'); }); });

    var revokeModal=qs('[data-dev-modal="revoke"]');
    var revokeInput=qs('[data-dev-revoke-input]');
    var revokeBtn=qs('[data-dev-confirm-revoke]');
    var targetName='';
    qsa('[data-dev-revoke]').forEach(function(b){ b.addEventListener('click',function(){ targetName=(b.closest('tr').children[0].textContent||'').trim(); if(revokeInput) revokeInput.value=''; if(revokeBtn) revokeBtn.disabled=true; if(revokeModal){ revokeModal.hidden=false; requestAnimationFrame(function(){revokeModal.classList.add('is-open');}); } }); });
    qsa('[data-dev-close-revoke]').forEach(function(b){ b.addEventListener('click',function(){ if(revokeModal){ revokeModal.classList.remove('is-open'); setTimeout(function(){revokeModal.hidden=true;},120);} }); });
    revokeInput&&revokeInput.addEventListener('input',function(){ if(revokeBtn) revokeBtn.disabled=(revokeInput.value.trim()!==targetName); });
    revokeBtn&&revokeBtn.addEventListener('click',function(){ qsa('[data-dev-keys] tr').forEach(function(r){ if((r.children[0].textContent||'').trim()===targetName) r.remove();}); if(revokeModal){ revokeModal.classList.remove('is-open'); setTimeout(function(){revokeModal.hidden=true;},120);} toast('Key o\'chirildi'); });

    var create=qs('[data-dev-create-key]');
    create&&create.addEventListener('click',function(){ toast('API key yaratildi (demo)'); qsa('[data-modal-close]').forEach(function(c){c.click();}); });
  }

  function initWebhooks(){
    if(page()!=='02-webhooks.html') return;
    qsa('[data-copy]').forEach(function(btn){ btn.addEventListener('click',function(){ navigator.clipboard&&navigator.clipboard.writeText(btn.getAttribute('data-copy')); toast('URL nusxalandi'); }); });
    qsa('[data-webhook-delete]').forEach(function(b){ b.addEventListener('click',function(){ b.closest('article.card').remove(); }); });

    var tmodal=qs('[data-dev-modal="webhook-test"]');
    qsa('[data-webhook-test]').forEach(function(b){ b.addEventListener('click',function(){ if(tmodal){ tmodal.hidden=false; requestAnimationFrame(function(){tmodal.classList.add('is-open');}); } }); });
    qsa('[data-dev-close-test]').forEach(function(b){ b.addEventListener('click',function(){ if(tmodal){ tmodal.classList.remove('is-open'); setTimeout(function(){tmodal.hidden=true;},120);} }); });
    var send=qs('[data-dev-send-test]');
    send&&send.addEventListener('click',function(){ toast('Test muvaffaqiyatli: 200 OK'); qsa('[data-dev-close-test]').forEach(function(c){c.click();}); });
    var save=qs('[data-webhook-save]');
    save&&save.addEventListener('click',function(){ toast('Webhook yaratildi (demo)'); qsa('[data-modal-close]').forEach(function(c){c.click();}); });
  }

  function initLogs(){
    if(page()!=='03-logs.html') return;
    var search=qs('[data-log-search]');
    var status=qs('[data-log-status]');
    var rows=qsa('[data-log-rows] tr');
    var empty=qs('[data-log-empty]');
    function apply(){
      var q=(search&&search.value||'').toLowerCase().trim(); var st=(status&&status.value)||'all';
      var shown=0;
      rows.forEach(function(r){ var okQ=!q || (r.textContent||'').toLowerCase().indexOf(q)>-1; var okS=st==='all' || r.getAttribute('data-st')===st; var show=okQ&&okS; r.classList.toggle('hidden',!show); if(show) shown++; });
      empty&&empty.classList.toggle('hidden', shown!==0);
    }
    search&&search.addEventListener('input',apply); status&&status.addEventListener('change',apply); apply();

    var lmodal=qs('[data-dev-modal="log-detail"]');
    qsa('[data-log-view]').forEach(function(b){ b.addEventListener('click',function(){ if(lmodal){ lmodal.hidden=false; requestAnimationFrame(function(){lmodal.classList.add('is-open');}); } }); });
    qsa('[data-dev-close-log]').forEach(function(b){ b.addEventListener('click',function(){ if(lmodal){ lmodal.classList.remove('is-open'); setTimeout(function(){lmodal.hidden=true;},120);} }); });
    qs('[data-dev-retry]')&&qs('[data-dev-retry]').addEventListener('click',function(){ toast('Payload qayta yuborildi'); });
    qs('[data-log-export]')&&qs('[data-log-export]').addEventListener('click',function(){ toast('CSV export boshlandi'); });
  }

  document.addEventListener('DOMContentLoaded',function(){ initApiKeys(); initWebhooks(); initLogs(); });
})();