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

  function initGlobalActions(){
    qsa('.page-header-actions .btn').forEach(function(btn){
      var txt=(btn.textContent||'').toLowerCase();
      if(txt.indexOf('manage plan')>-1){
        btn.addEventListener('click',function(){ window.location.href='./01-plan.html'; });
      }
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

    function clearDefault(){
      qsa('tr.table-row',table).forEach(function(row){
        var d=qsa('td',row)[3];
        if(d) d.textContent='—';
      });
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
      tr.innerHTML='<td>Visa '+mask(cardNo)+'</td><td>QULAY CHAT LLC</td><td>'+exp+'</td><td>—</td><td><div class="flex gap-2"><button type="button" class="btn btn-secondary btn-sm" data-card-action="set-default">Set default</button><button type="button" class="btn btn-danger btn-sm" data-card-action="remove">Remove</button></div></td>';
      table?.appendChild(tr);
      state.cards.push({last4:mask(cardNo),exp:exp});
      save(state);
      notify('Karta qo\'shildi');
    });

    table?.addEventListener('click',function(e){
      var btn=e.target.closest('[data-card-action]');
      if(!btn) return;
      var row=btn.closest('.table-row');
      if(!row) return;
      var action=btn.getAttribute('data-card-action');

      if(action==='remove'){
        row.remove();
        notify('Karta o\'chirildi');
      }
      if(action==='set-default'){
        clearDefault();
        var d=qsa('td',row)[3];
        if(d) d.innerHTML='<span class="badge badge-success">Default</span>';
        notify('Default karta yangilandi');
      }
      if(action==='edit'){
        notify('Karta tahrirlash modalini keyingi bosqichda qo\'shamiz');
      }
    });
  }

  function initInvoices(){
    if(page()!=='03-invoices.html') return;
    var statusSel=qs('.form-grid .select');
    var rows=qsa('.table tbody .table-row');
    var tbody=qs('.table tbody');
    if(statusSel) statusSel.value=state.invoiceFilter;

    function apply(){
      rows=qsa('.table tbody .table-row');
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

    tbody?.addEventListener('click',function(e){
      var btn=e.target.closest('button.btn');
      if(!btn) return;
      var row=btn.closest('.table-row');
      if(!row) return;
      var text=(btn.textContent||'').toLowerCase();
      var badge=qs('.badge',row);

      if(text.indexOf('retry')>-1){
        btn.disabled=true;
        btn.textContent='Retrying...';
        setTimeout(function(){
          if(badge){ badge.className='badge badge-success'; badge.textContent='Paid'; }
          btn.textContent='PDF';
          btn.disabled=false;
          notify('To\'lov qayta urinish muvaffaqiyatli');
          apply();
        },800);
      } else if(text.indexOf('view')>-1 || text.indexOf('pdf')>-1){
        notify('Invoice ochildi: '+(qsa('td',row)[1]?.textContent||''));
      }
    });

    apply();
  }

  function initUsage(){
    if(page()!=='04-usage.html') return;
    var meterRows=qsa('.usage-meter .row');
    var bars=qsa('.usage-meter .progress-bar');
    var cardHeader=qs('.card .card-header');
    if(meterRows.length<4 || bars.length<4) return;

    if(cardHeader && !qs('[data-usage-simulate]')){
      var actions=document.createElement('div');
      actions.className='card-actions flex gap-2';
      actions.innerHTML='<button type="button" class="btn btn-secondary btn-sm" data-usage-simulate="up">Simulate +10%</button><button type="button" class="btn btn-secondary btn-sm" data-usage-simulate="down">Simulate -10%</button>';
      cardHeader.appendChild(actions);
    }

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

    document.addEventListener('click',function(e){
      var btn=e.target.closest('[data-usage-simulate]');
      if(!btn) return;
      var dir=btn.getAttribute('data-usage-simulate');
      meterRows.forEach(function(row){
        var s=qs('strong',row); if(!s) return;
        var txt=s.textContent||'';
        var m=txt.match(/(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)/);
        if(!m) return;
        var used=Number(m[1]), total=Number(m[2]);
        used = dir==='up' ? used*1.1 : used*0.9;
        if(txt.indexOf('MB')>-1) s.textContent=Math.max(1,Math.round(used))+'MB/'+Math.round(total)+'MB';
        else s.textContent=Math.max(1,Math.round(used))+'/'+Math.round(total);
      });
      recalc();
      notify('Usage yangilandi ('+(dir==='up'?'+10%':'-10%')+')');
    });

    recalc();
  }

  document.addEventListener('DOMContentLoaded',function(){
    cleanMojibake();
    initGlobalActions();
    initPlan();
    initPayment();
    initInvoices();
    initUsage();
  });
})();
