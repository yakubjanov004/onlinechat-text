(function(){
  'use strict';

  var KEY='qc_billing_state_v1';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function page(){ return (location.pathname.split('/').pop()||'').toLowerCase(); }
  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}}
  function save(s){ try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){} }

  var state=load();
  state.plan=state.plan||'Starter';
  state.cycle=state.cycle||'monthly';
  state.cards=state.cards||[];
  state.invoiceFilter=state.invoiceFilter||'All';
  state.usage=state.usage||{agents:'3/5',chats:'847/1000',storage:'120MB/500MB',api:'4200/10000'};

  function notify(message,type){
    if(!message) return;
    var root=qs('#qc-billing-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-billing-toast-root';
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

  function cleanMojibake(){
    qsa('body *').forEach(function(el){
      if(el.children.length) return;
      if(!el.textContent) return;
      el.textContent=el.textContent
        .replace(/вЂў/g,'•')
        .replace(/вЂ”/g,'—');
    });
  }

  function initPlan(){
    if(page()!=='01-plan.html') return;

    qsa('[data-tab-group="billing-cycle"][data-tab]').forEach(function(tab){
      tab.classList.toggle('active', tab.getAttribute('data-tab')===state.cycle);
      tab.addEventListener('click',function(){
        state.cycle=tab.getAttribute('data-tab');
        save(state);
        qsa('[data-tab-group="billing-cycle"][data-tab]').forEach(function(t){ t.classList.remove('active'); });
        tab.classList.add('active');
        var proPrice=qs('.pricing-card:nth-child(2) .pricing-price');
        if(proPrice) proPrice.textContent=state.cycle==='yearly'?'$290':'$29';
        notify('Billing cycle: '+(state.cycle==='yearly'?'Yearly':'Monthly'));
      });
    });

    qsa('.pricing-card .btn').forEach(function(btn){
      var txt=(btn.textContent||'').toLowerCase();
      if(txt.indexOf('upgrade')>-1){
        btn.addEventListener('click',function(){
          state.plan='Pro'; save(state); notify('Plan yangilandi: Pro');
        });
      }
      if(txt.indexOf('contact sales')>-1){
        btn.addEventListener('click',function(){ state.plan='Enterprise'; save(state); notify('Sales bilan bog\'lanish so\'rovi yuborildi'); });
      }
    });
  }

  function initPayment(){
    if(page()!=='02-payment.html') return;
    var table=qs('.table tbody');
    var modal=qs('[data-modal="add-card"]');
    var inputs=qsa('.modal .input',modal);
    var saveBtn=qs('.modal-footer .btn.btn-primary',modal);

    function mask(num){
      var d=(num||'').replace(/\D/g,'');
      if(d.length<4) return '••••';
      return '•••• '+d.slice(-4);
    }

    saveBtn?.addEventListener('click',function(){
      var cardNo=(inputs[0]?.value||'').trim();
      var exp=(inputs[1]?.value||'').trim();
      var cvc=(inputs[2]?.value||'').trim();
      if(cardNo.replace(/\D/g,'').length<12) return notify('Karta raqami noto\'g\'ri','error');
      if(!/^\d{2}\/\d{2}$/.test(exp)) return notify('Expiry format: MM/YY','error');
      if(!/^\d{3,4}$/.test(cvc)) return notify('CVC noto\'g\'ri','error');

      var tr=document.createElement('tr');
      tr.className='table-row';
      tr.innerHTML='<td>Visa '+mask(cardNo)+'</td><td>QULAY CHAT LLC</td><td>'+exp+'</td><td>—</td><td>Set default • Remove</td>';
      table?.appendChild(tr);
      state.cards.push({last4:mask(cardNo),exp:exp});
      save(state);
      notify('Karta qo\'shildi');
    });
  }

  function initInvoices(){
    if(page()!=='03-invoices.html') return;
    var statusSel=qs('.form-grid .select');
    var rows=qsa('.table tbody .table-row');
    if(statusSel) statusSel.value=state.invoiceFilter;

    function apply(){
      var v=(statusSel?.value||'All').toLowerCase();
      state.invoiceFilter=statusSel?.value||'All';
      save(state);
      rows.forEach(function(r){
        var status=(qs('.badge',r)?.textContent||'').toLowerCase();
        var ok=v==='all' || status.indexOf(v)>-1;
        r.style.display=ok?'':'none';
      });
    }
    statusSel?.addEventListener('change',apply);
    qsa('.form-grid .btn.btn-secondary').forEach(function(b){ b.addEventListener('click',apply); });
    apply();
  }

  function initUsage(){
    if(page()!=='04-usage.html') return;
    var meterRows=qsa('.usage-meter .row');
    var bars=qsa('.usage-meter .progress-bar');
    if(meterRows.length<4 || bars.length<4) return;

    function recalc(){
      var data=[
        {k:'agents',txt:meterRows[0].querySelector('strong')?.textContent||'3/5'},
        {k:'chats',txt:meterRows[1].querySelector('strong')?.textContent||'847/1000'},
        {k:'storage',txt:meterRows[2].querySelector('strong')?.textContent||'120MB/500MB'},
        {k:'api',txt:meterRows[3].querySelector('strong')?.textContent||'4200/10000'}
      ];
      data.forEach(function(x,i){
        var m=(x.txt.match(/(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)/)||[]);
        if(m.length<3) return;
        var used=Number(m[1]), total=Number(m[2]);
        var pct=Math.max(0,Math.min(100, total? (used/total)*100 : 0));
        bars[i].style.width=pct.toFixed(1)+'%';
        if(pct>=90){ bars[i].classList.add('danger'); bars[i].classList.remove('warning'); }
        else if(pct>=75){ bars[i].classList.add('warning'); bars[i].classList.remove('danger'); }
        else { bars[i].classList.remove('warning','danger'); }
      });
    }

    recalc();
  }

  document.addEventListener('DOMContentLoaded',function(){
    cleanMojibake();
    initPlan();
    initPayment();
    initInvoices();
    initUsage();
  });
})();
