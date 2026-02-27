(function(){
  'use strict';
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function toast(msg){
    var root=document.getElementById('sys-toast');
    if(!root){ root=document.createElement('div'); root.id='sys-toast'; root.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999'; document.body.appendChild(root); }
    var t=document.createElement('div'); t.style.cssText='background:#111827;color:#fff;padding:10px 12px;border-radius:10px;margin-top:8px'; t.textContent=msg; root.appendChild(t); setTimeout(function(){t.remove();},1600);
  }
  document.addEventListener('DOMContentLoaded',function(){
    qsa('[data-system-back]').forEach(function(b){ b.addEventListener('click',function(){ if(history.length>1) history.back(); else location.href='../index.html'; }); });
    qsa('[data-system-reload]').forEach(function(b){ b.addEventListener('click',function(){ toast('Sahifa yangilanmoqda...'); setTimeout(function(){ location.reload(); },300); }); });
  });
})();