(function(){
  'use strict';

  var KEY='qc_team_state_v1';
  function qs(s,r){return (r||document).querySelector(s);} 
  function qsa(s,r){return Array.from((r||document).querySelectorAll(s));}
  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{"roles":{},"invites":[]}');}catch(e){return {roles:{},invites:[]};}}
  function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));}catch(e){}}

  function normalizeStatus(row){
    var txt=(qsa('td',row)[3]?.textContent||'').toLowerCase();
    if(txt.indexOf('online')>-1) return 'online';
    if(txt.indexOf('away')>-1) return 'away';
    return 'offline';
  }

  function initAgents(){
    var root=qs('[data-team-page="agents"]'); if(!root) return;
    var search=qs('[data-team-search]',root); var filter=qs('[data-team-status-filter]',root);
    var rows=qsa('[data-team-agents-body] .table-row',root);

    function apply(){
      var q=(search?.value||'').toLowerCase().trim();
      var st=(filter?.value||'all');
      rows.forEach(function(r){
        var t=r.textContent.toLowerCase();
        var okQ=!q||t.indexOf(q)>-1;
        var okS=st==='all'||normalizeStatus(r)===st;
        r.style.display=(okQ&&okS)?'':'none';
      });
    }
    search?.addEventListener('input',apply);
    filter?.addEventListener('change',apply);

    root.addEventListener('click',function(e){
      var b=e.target.closest('[data-team-action]'); if(!b) return;
      var tr=b.closest('.table-row'); if(!tr) return;
      if(b.getAttribute('data-team-action')==='delete-agent'){
        if(confirm('Agentni o\'chirasizmi?')) tr.remove();
      }
      if(b.getAttribute('data-team-action')==='edit-agent'){
        var tds=qsa('td',tr);
        var role=prompt('Yangi role (Admin/Manager/Agent):', (tds[2]?.textContent||'Agent').trim());
        if(role){ tds[2].innerHTML='<span class="badge">'+role+'</span>'; }
      }
      apply();
    });
    apply();
  }

  function initRoles(){
    var root=qs('[data-team-page="roles"]'); if(!root) return;
    var st=load();

    // restore
    qsa('[data-role-card]').forEach(function(card){
      var role=card.getAttribute('data-role-card');
      var saved=st.roles?.[role];
      if(Array.isArray(saved)){
        qsa('input[type="checkbox"]',card).forEach(function(ch,i){ ch.checked=!!saved[i]; });
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
    });
  }

  function initInvitations(){
    var root=qs('[data-team-page="invitations"]'); if(!root) return;
    var body=qs('[data-team-invite-body]',root);
    var st=load();

    function hydrateFromDOM(){
      if(st.invites?.length) return;
      st.invites=qsa('.table-row',body).map(function(r){
        var t=qsa('td',r);
        return { email:t[0]?.textContent.trim(), role:t[1]?.textContent.trim(), status:t[2]?.textContent.trim(), sent:t[3]?.textContent.trim() };
      });
      save(st);
    }

    function render(){
      body.innerHTML='';
      (st.invites||[]).forEach(function(i){
        var statusCls=i.status.toLowerCase().indexOf('accepted')>-1?'badge-success':'badge-warning';
        var tr=document.createElement('tr'); tr.className='table-row';
        tr.innerHTML='<td>'+i.email+'</td><td>'+i.role+'</td><td><span class="badge '+statusCls+'">'+i.status+'</span></td><td>'+i.sent+'</td><td><div class="flex gap-2"><button type="button" class="btn btn-secondary" data-team-action="resend-invite">Resend</button><button type="button" class="btn btn-danger" data-team-action="cancel-invite">Cancel</button></div></td>';
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
        if(!email) return;
        st.invites.unshift({email:email,role:role,status:'Pending',sent:'Just now'});
        save(st); render();
      }
      if((action==='resend-invite' || action==='cancel-invite') && tr){
        var email=qsa('td',tr)[0]?.textContent.trim();
        var idx=(st.invites||[]).findIndex(function(x){return x.email===email;});
        if(idx<0) return;
        if(action==='resend-invite'){ st.invites[idx].sent='Just now'; }
        if(action==='cancel-invite'){ st.invites.splice(idx,1); }
        save(st); render();
      }
    });
  }

  function initProfile(){
    var root=qs('[data-team-page="profile"]'); if(!root) return;
    root.addEventListener('click',function(e){
      if(e.target.closest('[data-team-action="save-profile"]')){
        // intentionally lightweight
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