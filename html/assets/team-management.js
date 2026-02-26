(function(){
  'use strict';

  var KEY='qc_team_state_v1';

  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{"roles":{},"invites":[]}');}catch(e){return {roles:{},invites:[]};}}
  function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){}}
  function escapeHtml(v){return String(v||'').replace(/[&<>"']/g,function(ch){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[ch];});}

  function notify(message,type){
    if(!message) return;
    var root=qs('#qc-team-toast-root');
    if(!root){
      root=document.createElement('div');
      root.id='qc-team-toast-root';
      root.style.position='fixed';
      root.style.right='16px';
      root.style.bottom='16px';
      root.style.zIndex='9999';
      root.style.display='grid';
      root.style.gap='8px';
      document.body.appendChild(root);
    }

    var toast=document.createElement('div');
    toast.style.padding='10px 12px';
    toast.style.borderRadius='10px';
    toast.style.background = type==='error' ? '#7f1d1d' : (type==='warn' ? '#7c2d12' : '#0f172a');
    toast.style.color='#fff';
    toast.style.fontSize='13px';
    toast.style.boxShadow='0 10px 24px rgba(0,0,0,.18)';
    toast.style.opacity='0';
    toast.style.transform='translateY(8px)';
    toast.style.transition='all .18s ease';
    toast.innerHTML=escapeHtml(message);

    root.appendChild(toast);
    requestAnimationFrame(function(){
      toast.style.opacity='1';
      toast.style.transform='translateY(0)';
    });

    setTimeout(function(){
      toast.style.opacity='0';
      toast.style.transform='translateY(8px)';
      setTimeout(function(){toast.remove();},180);
    },1700);
  }

  function normalizeStatus(row){
    var txt=(qsa('td',row)[3]?.textContent||'').toLowerCase();
    if(txt.indexOf('online')>-1) return 'online';
    if(txt.indexOf('away')>-1) return 'away';
    return 'offline';
  }

  function initAgents(){
    var root=qs('[data-team-page="agents"]'); if(!root) return;
    var search=qs('[data-team-search]',root);
    var filter=qs('[data-team-status-filter]',root);
    var rows=qsa('[data-team-agents-body] .table-row',root);

    var editModal=qs('[data-modal="agent-edit-modal"]',root);
    var editName=qs('[data-agent-edit-name]',root);
    var editEmail=qs('[data-agent-edit-email]',root);
    var editRole=qs('[data-agent-edit-role]',root);
    var currentEditingRow=null;

    function apply(){
      var q=(search?.value||'').toLowerCase().trim();
      var st=(filter?.value||'all');
      rows=qsa('[data-team-agents-body] .table-row',root);
      rows.forEach(function(r){
        var t=r.textContent.toLowerCase();
        var okQ=!q||t.indexOf(q)>-1;
        var okS=st==='all'||normalizeStatus(r)===st;
        r.style.display=(okQ&&okS)?'':'none';
      });
    }

    function openEditModal(tr){
      if(!editModal || !tr) return;
      currentEditingRow=tr;
      var tds=qsa('td',tr);
      var name=(qs('strong',tds[0])?.textContent||'').trim();
      var email=(tds[1]?.textContent||'').trim();
      var role=(tds[2]?.textContent||'Agent').trim();

      if(editName) editName.value=name;
      if(editEmail) editEmail.value=email;
      if(editRole) editRole.value=role;

      editModal.hidden=false;
      editModal.classList.add('is-open');
      document.body.classList.add('modal-open');
    }

    function closeEditModal(){
      if(!editModal) return;
      editModal.classList.remove('is-open');
      editModal.hidden=true;
      document.body.classList.remove('modal-open');
      currentEditingRow=null;
    }

    function saveEditModal(){
      if(!currentEditingRow) return;
      var name=(editName?.value||'').trim();
      var email=(editEmail?.value||'').trim();
      var role=(editRole?.value||'Agent').trim();
      var valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if(!name){
        notify('Ismni kiriting', 'error');
        return;
      }
      if(!valid){
        notify('To\'g\'ri email kiriting', 'error');
        return;
      }

      var tds=qsa('td',currentEditingRow);
      var avatar=(name.split(/\s+/).slice(0,2).map(function(x){return x.charAt(0).toUpperCase();}).join('')||'AG').slice(0,2);
      var badgeClass = role==='Admin' ? 'badge-primary' : (role==='Manager' ? 'badge-info' : '');

      var strong=qs('strong',tds[0]);
      if(strong) strong.textContent=name;
      var avatarNode=qs('.avatar',tds[0]);
      if(avatarNode) avatarNode.textContent=avatar;
      if(tds[1]) tds[1].textContent=email;
      if(tds[2]) tds[2].innerHTML='<span class="badge '+badgeClass+'">'+escapeHtml(role)+'</span>';

      notify('Agent yangilandi');
      closeEditModal();
      apply();
    }

    search?.addEventListener('input',apply);
    filter?.addEventListener('change',apply);

    root.addEventListener('click',function(e){
      var b=e.target.closest('[data-team-action]');
      if(!b) return;
      var action=b.getAttribute('data-team-action');
      var tr=b.closest('.table-row');

      if(action==='close-agent-modal'){
        closeEditModal();
        return;
      }

      if(action==='save-agent-modal'){
        saveEditModal();
        return;
      }

      if(action==='delete-agent' && tr){
        if(confirm('Agentni o\'chirasizmi?')){
          tr.remove();
          notify('Agent o\'chirildi');
          apply();
        }
        return;
      }

      if(action==='edit-agent' && tr){
        openEditModal(tr);
        return;
      }
    });

    editModal?.addEventListener('click',function(e){
      if(e.target===editModal) closeEditModal();
    });

    apply();
  }

  function initRoles(){
    var root=qs('[data-team-page="roles"]'); if(!root) return;
    var st=load();

    qsa('[data-role-card]').forEach(function(card){
      var role=card.getAttribute('data-role-card');
      var saved=st.roles?.[role];
      if(Array.isArray(saved)){
        qsa('input[type="checkbox"]',card).forEach(function(ch,i){ ch.checked=!!saved[i]; });
      }
    });

    root.addEventListener('change',function(e){
      if(e.target.matches('input[type="checkbox"]')){
        notify('O\'zgarish qayd etildi', 'warn');
      }
    });

    root.addEventListener('click',function(e){
      var b=e.target.closest('[data-team-action="save-roles"]');
      if(!b) return;
      var data=load();
      data.roles=data.roles||{};
      qsa('[data-role-card]').forEach(function(card){
        var role=card.getAttribute('data-role-card');
        data.roles[role]=qsa('input[type="checkbox"]',card).map(function(ch){return !!ch.checked;});
      });
      save(data);
      notify('Role ruxsatlari saqlandi');
    });
  }

  function closeInviteModal(root){
    var overlay=qs('[data-modal="invite-modal"]',root);
    if(!overlay) return;
    overlay.classList.remove('is-open');
    overlay.hidden=true;
    document.body.classList.remove('modal-open');
  }

  function initInvitations(){
    var root=qs('[data-team-page="invitations"]'); if(!root) return;
    var body=qs('[data-team-invite-body]',root);
    var st=load();

    function hydrateFromDOM(){
      if(st.invites?.length) return;
      st.invites=qsa('.table-row',body).map(function(r){
        var t=qsa('td',r);
        var status=(t[2]?.textContent||'Pending').trim();
        return { email:(t[0]?.textContent||'').trim(), role:(t[1]?.textContent||'Operator').trim(), status:status, sent:(t[3]?.textContent||'').trim() };
      });
      save(st);
    }

    function render(){
      body.innerHTML='';
      (st.invites||[]).forEach(function(i){
        var accepted=i.status.toLowerCase().indexOf('accepted')>-1;
        var statusCls=accepted?'badge-success':'badge-warning';
        var tr=document.createElement('tr');
        tr.className='table-row';
        tr.innerHTML=
          '<td>'+escapeHtml(i.email)+'</td>'+
          '<td>'+escapeHtml(i.role)+'</td>'+
          '<td><span class="badge '+statusCls+'">'+escapeHtml(i.status)+'</span></td>'+
          '<td>'+escapeHtml(i.sent)+'</td>'+
          '<td><div class="flex gap-2">'+
          '<button type="button" class="btn btn-secondary" data-team-action="resend-invite" '+(accepted?'disabled':'')+'>Resend</button>'+
          '<button type="button" class="btn btn-danger" data-team-action="cancel-invite">Cancel</button>'+
          '</div></td>';
        body.appendChild(tr);
      });
    }

    hydrateFromDOM();
    render();

    root.addEventListener('click',function(e){
      var btn=e.target.closest('[data-team-action]');
      if(!btn) return;
      var action=btn.getAttribute('data-team-action');
      var tr=btn.closest('.table-row');

      if(action==='send-invite'){
        var email=(qs('[data-team-invite-email]',root)?.value||'').trim();
        var role=(qs('[data-team-invite-role]',root)?.value||'Operator').trim();
        var valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if(!valid){
          notify('To\'g\'ri email kiriting', 'error');
          return;
        }
        st.invites.unshift({email:email,role:role,status:'Pending',sent:'Just now'});
        save(st);
        render();
        notify('Taklif yuborildi');
        var emailInput=qs('[data-team-invite-email]',root);
        if(emailInput) emailInput.value='';
        closeInviteModal(root);
      }

      if((action==='resend-invite' || action==='cancel-invite') && tr){
        var email=qsa('td',tr)[0]?.textContent.trim();
        var idx=(st.invites||[]).findIndex(function(x){return x.email===email;});
        if(idx<0) return;

        if(action==='resend-invite'){
          if((st.invites[idx].status||'').toLowerCase().indexOf('accepted')>-1){
            notify('Accepted invite qayta yuborilmaydi', 'warn');
            return;
          }
          st.invites[idx].sent='Just now';
          notify('Taklif qayta yuborildi');
        }

        if(action==='cancel-invite'){
          st.invites.splice(idx,1);
          notify('Taklif bekor qilindi');
        }

        save(st);
        render();
      }
    });
  }

  function initProfile(){
    var root=qs('[data-team-page="profile"]'); if(!root) return;
    root.addEventListener('click',function(e){
      if(e.target.closest('[data-team-action="save-profile"]')){
        notify('Profil saqlandi');
      }
    });
  }

  document.addEventListener('DOMContentLoaded',function(){
    initAgents();
    initRoles();
    initInvitations();
    initProfile();
  });
})();
