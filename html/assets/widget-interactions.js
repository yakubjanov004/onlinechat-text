(function(){
  'use strict';

  var KEY='qc_widget_state_v1';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }
  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}}
  function save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){} }

  var state=load();
  state.open = state.open!==false;
  state.rating = Number(state.rating||0);

  function notify(message,type){
    if(!message) return;
    var root=qs('#qc-widget-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-widget-toast-root';
      root.style.position='fixed'; root.style.right='16px'; root.style.bottom='16px';
      root.style.zIndex='9999'; root.style.display='grid'; root.style.gap='8px';
      document.body.appendChild(root);
    }
    var t=document.createElement('div');
    t.style.padding='10px 12px'; t.style.borderRadius='10px'; t.style.color='#fff'; t.style.fontSize='13px';
    t.style.background=type==='error'?'#7f1d1d':'#0f172a';
    t.style.boxShadow='0 10px 24px rgba(0,0,0,.18)'; t.style.opacity='0'; t.style.transform='translateY(8px)'; t.style.transition='all .18s ease';
    t.textContent=message; root.appendChild(t);
    requestAnimationFrame(function(){ t.style.opacity='1'; t.style.transform='translateY(0)'; });
    setTimeout(function(){ t.style.opacity='0'; t.style.transform='translateY(8px)'; setTimeout(function(){t.remove();},180); },1700);
  }

  function initLauncher(){
    var demo=qs('[data-widget-demo]');
    var win=qs('[data-widget-window]',demo||document);
    var btn=qs('[data-widget-launcher-toggle]',demo||document);
    if(!win || !btn) return;

    function apply(){
      win.style.display=state.open?'grid':'none';
      btn.setAttribute('aria-label',state.open?'Close widget':'Open widget');
      btn.innerHTML=state.open?'<i data-lucide="x"></i>':'<i data-lucide="message-circle"></i>';
      if(window.lucide&&window.lucide.createIcons) window.lucide.createIcons();
    }

    btn.addEventListener('click',function(){
      state.open=!state.open;
      save(state);
      apply();
    });

    qsa('.widget-window-header .icon-btn',win).forEach(function(iconBtn){
      iconBtn.addEventListener('click',function(){
        state.open=false; save(state); apply();
      });
    });

    apply();
  }

  function initChat(){
    var win=qs('.widget-window'); if(!win) return;
    var body=qs('.widget-window-body',win);
    var input=qs('.widget-window-footer textarea',win);
    var send=qs('.widget-window-footer .btn.btn-primary',win);
    if(!body || !input || !send) return;

    function sendMsg(){
      var text=(input.value||'').trim();
      if(!text) return;
      var msg=document.createElement('div');
      msg.className='widget-msg';
      msg.textContent=text;
      body.appendChild(msg);
      input.value='';
      body.scrollTop=body.scrollHeight;

      var typing=document.createElement('div');
      typing.className='widget-msg center';
      typing.innerHTML='<span class="typing-dots"><span></span><span></span><span></span></span> Agent yozmoqda...';
      body.appendChild(typing);
      body.scrollTop=body.scrollHeight;

      setTimeout(function(){
        typing.remove();
        var reply=document.createElement('div');
        reply.className='widget-msg agent';
        reply.textContent='Rahmat, tez orada operator javob beradi.';
        body.appendChild(reply);
        body.scrollTop=body.scrollHeight;
      },700);
    }

    send.addEventListener('click',sendMsg);
    input.addEventListener('keydown',function(e){ if(e.key==='Enter'&&!e.shiftKey){ e.preventDefault(); sendMsg(); } });
  }

  function initOfflineForm(){
    var form=qs('form.widget-window-body');
    if(!form) return;
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var name=qs('input[type="text"]',form)?.value?.trim();
      var email=qs('input[type="email"]',form)?.value?.trim();
      var msg=qs('textarea',form)?.value?.trim();
      if(!name || !email || !msg){ notify('Barcha maydonlarni to\'ldiring','error'); return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ notify('Email noto\'g\'ri','error'); return; }
      notify('Offline xabar yuborildi');
      form.reset();
    });
  }

  function initCsat(){
    var starWrap=qs('[data-star-rating]');
    if(!starWrap) return;
    var stars=qsa('[data-star-value]',starWrap);

    function paint(){
      stars.forEach(function(btn){
        var v=Number(btn.getAttribute('data-star-value'));
        btn.classList.toggle('btn-primary',v<=state.rating);
        btn.classList.toggle('btn-secondary',v>state.rating);
      });
      starWrap.setAttribute('data-value',String(state.rating));
    }

    stars.forEach(function(btn){
      btn.addEventListener('click',function(){
        state.rating=Number(btn.getAttribute('data-star-value'));
        save(state);
        paint();
      });
    });

    var submit=qs('.widget-window-footer .btn.btn-primary');
    submit?.addEventListener('click',function(){
      if(!state.rating){ notify('Avval baho tanlang','error'); return; }
      notify('Rahmat! Sizning bahoyingiz: '+state.rating+'/5');
    });

    paint();
  }

  function initStatesPage(){
    if(page()!=='05-widget-states.html') return;
    qsa('.widget-state-card').forEach(function(card){
      card.style.cursor='pointer';
      card.addEventListener('click',function(){
        qsa('.widget-state-card').forEach(function(c){ c.style.outline=''; });
        card.style.outline='2px solid rgba(79,70,229,.35)';
      });
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    initLauncher();
    initChat();
    initOfflineForm();
    initCsat();
    initStatesPage();
  });
})();
