(function(){
  'use strict';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }

  function notify(msg){
    if(!msg || !window.dispatchEvent) return;
    var ev = new CustomEvent('qulaychat:toast', {detail:{message:msg}});
    window.dispatchEvent(ev);
  }

  function initChatPage(){
    if(page()!=='01-team-chat.html') return;

    var dmList=qs('[data-tc-list-dm]');
    var roomList=qs('[data-tc-list-room]');
    var tabs=qsa('[data-tc-type-tabs] [data-tc-type]');
    var search=qs('[data-tc-search]');
    var onlineOnly=qs('[data-tc-online-only]');
    var typing=qs('[data-tc-typing]');
    var input=qs('[data-tc-input]');
    var send=qs('[data-tc-send]');
    var messages=qs('[data-tc-messages]');

    var activeType='dm';
    var convMeta={
      dm_jahongir:{title:'Jahongir Otajonov', subtitle:'Manager · Online'},
      dm_sara:{title:'Sara Akhmedova', subtitle:'Operator · Online'},
      dm_ali:{title:'Ali Karimov', subtitle:'Operator · Offline'},
      room_general:{title:'#general', subtitle:'12 a\'zo · Public room'},
      room_support:{title:'#support-team', subtitle:'8 a\'zo · Public room'},
      room_ann:{title:'#announcements', subtitle:'Read only room'}
    };

    function setType(type){
      activeType=type;
      tabs.forEach(function(t){ t.classList.toggle('active', t.getAttribute('data-tc-type')===type); });
      if(dmList) dmList.classList.toggle('hidden', type!=='dm');
      if(roomList) roomList.classList.toggle('hidden', type!=='room');
      applyFilter();
    }

    function applyFilter(){
      var q=(search&&search.value||'').trim().toLowerCase();
      qsa('[data-tc-conv]').forEach(function(item){
        var online=item.getAttribute('data-online')==='1';
        var byQ=!q || (item.textContent||'').toLowerCase().indexOf(q)>-1;
        var byOnline=!onlineOnly || !onlineOnly.checked || online;
        var byType=item.getAttribute('data-tc-kind')===activeType;
        item.classList.toggle('hidden', !(byQ&&byOnline&&byType));
      });
    }

    tabs.forEach(function(t){ t.addEventListener('click', function(){ setType(t.getAttribute('data-tc-type')); }); });
    search&&search.addEventListener('input', applyFilter);
    onlineOnly&&onlineOnly.addEventListener('change', applyFilter);

    qsa('[data-tc-conv]').forEach(function(item){
      item.addEventListener('click', function(){
        qsa('[data-tc-conv]').forEach(function(i){i.classList.remove('active');});
        item.classList.add('active');
        var id=item.getAttribute('data-tc-conv');
        var meta=convMeta[id]||{};
        var title=qs('[data-tc-title]');
        var subtitle=qs('[data-tc-subtitle]');
        if(title) title.textContent=meta.title||'Chat';
        if(subtitle) subtitle.textContent=meta.subtitle||'';
      });
    });

    var typingTimer;
    input&&input.addEventListener('input', function(){
      if(typing) typing.textContent='Jahongir yozmoqda...';
      clearTimeout(typingTimer);
      typingTimer=setTimeout(function(){ if(typing) typing.textContent=''; }, 1400);
    });

    function sendMessage(){
      if(!input || !messages) return;
      var text=(input.value||'').trim();
      if(!text) return;
      var bubble=document.createElement('div');
      bubble.className='list-item';
      bubble.style.alignItems='flex-start';
      bubble.style.maxWidth='75%';
      bubble.style.marginLeft='auto';
      bubble.style.background='#4F46E5';
      bubble.style.borderColor='#4F46E5';
      bubble.style.color='#fff';
      bubble.innerHTML='<div class="item-main"><div class="item-title" style="color:#fff">Me <span style="font-size:12px;font-weight:400;opacity:.9">hozir</span></div><div class="item-sub" style="white-space:normal;line-height:1.45;color:#EEF2FF"></div></div>';
      qs('.item-sub',bubble).textContent=text;
      messages.appendChild(bubble);
      input.value='';
      messages.scrollTop=messages.scrollHeight;
      if(typing) typing.textContent='';
    }

    send&&send.addEventListener('click', sendMessage);
    input&&input.addEventListener('keydown', function(e){
      if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); sendMessage(); }
    });

    // New chat modal
    var modal=qs('[data-tc-modal="new-chat"]');
    var openBtn=qs('[data-tc-new-chat]');
    var closeBtns=qsa('[data-tc-close-modal]');
    var createTabs=qsa('[data-tc-create-tabs] [data-create]');
    var submit=qs('[data-tc-create-submit]');

    function openModal(){ if(modal){ modal.hidden=false; requestAnimationFrame(function(){modal.classList.add('is-open');}); } }
    function closeModal(){ if(modal){ modal.classList.remove('is-open'); setTimeout(function(){modal.hidden=true;},120); } }

    openBtn&&openBtn.addEventListener('click',openModal);
    closeBtns.forEach(function(b){ b.addEventListener('click',closeModal); });
    modal&&modal.addEventListener('click', function(e){ if(e.target===modal) closeModal(); });

    createTabs.forEach(function(t){
      t.addEventListener('click', function(){
        createTabs.forEach(function(x){x.classList.remove('active');});
        t.classList.add('active');
        var mode=t.getAttribute('data-create');
        qsa('[data-create-panel]').forEach(function(p){ p.hidden=p.getAttribute('data-create-panel')!==mode; });
      });
    });

    submit&&submit.addEventListener('click', function(){
      var isDm=qs('[data-tc-create-tabs] .tab.active')?.getAttribute('data-create')==='dm';
      if(isDm){
        var a=qs('[data-tc-create-agent]')?.value;
        if(!a){ notify('Agent tanlang'); return; }
        notify('Yangi DM yaratildi: '+a);
      } else {
        var room=qs('[data-tc-room-name]')?.value?.trim();
        if(!room){ notify('Xona nomini kiriting'); return; }
        notify('Yangi xona yaratildi: '+room);
      }
      closeModal();
    });

    setType('dm');
  }

  function initRoomSettings(){
    if(page()!=='02-room-settings.html') return;
    var tabs=qsa('[data-tc-room-tabs] [data-room-tab]');
    tabs.forEach(function(t){
      t.addEventListener('click', function(){
        tabs.forEach(function(x){x.classList.remove('active');});
        t.classList.add('active');
        var v=t.getAttribute('data-room-tab');
        qsa('[data-room-panel]').forEach(function(p){ p.hidden=p.getAttribute('data-room-panel')!==v; });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initChatPage();
    initRoomSettings();
  });
})();