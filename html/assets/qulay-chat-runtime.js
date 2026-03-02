(function () {
  "use strict";
  var ROLE_KEY = "qulaychat_role";
  var ROLES = ["admin","agent"];
  var ROLE_LABELS = {admin:"Admin",agent:"Agent"};

  function normalizeRole(role){var r=String(role||"admin").toLowerCase().trim();return ROLES.indexOf(r)>-1?r:"admin";}
  function roleList(value){if(!value)return[];return String(value).split(",").map(normalizeRole).filter(function(x,i,a){return a.indexOf(x)===i;});}
  function getRole(){try{return normalizeRole(localStorage.getItem(ROLE_KEY));}catch(e){return "admin";}}
  function setRole(role){var safe=normalizeRole(role);try{localStorage.setItem(ROLE_KEY,safe);}catch(e){}applyRole(safe);pushToast("Rol o'zgartirildi: "+(ROLE_LABELS[safe]||safe),"success");}

  function applyRole(forced){
    var role = normalizeRole(forced || getRole());
    document.documentElement.setAttribute("data-current-role", role);
    if (document.body) {
      document.body.setAttribute("data-current-role", role);
      document.body.setAttribute("data-shell-role", role);
    }
    if (window.QulayChatShell && typeof window.QulayChatShell.renderSidebarForRole === "function") {
      window.QulayChatShell.renderSidebarForRole(role);
    }
    document.querySelectorAll("[data-role-switch]").forEach(function(btn){
      var active = normalizeRole(btn.getAttribute("data-role-switch")) === role;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    document.querySelectorAll("[data-roles]").forEach(function(node){
      var allowed = roleList(node.getAttribute("data-roles"));
      node.hidden = !!allowed.length && allowed.indexOf(role) === -1;
    });
  }

  function escapeHtml(s){return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");}
  function ensureToastRoot(){var root=document.getElementById("cf-toast"); if(root) return root; root=document.createElement("div"); root.id="cf-toast"; document.body.appendChild(root); return root;}
  function toastIcon(type){if(type==="success")return"check-circle-2"; if(type==="warn")return"alert-triangle"; if(type==="error")return"x-circle"; return "info";}
  function refreshIcons(){if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons();}

  function pushToast(message,type){
    if(!message) return;
    var root = ensureToastRoot();
    var item = document.createElement("div");
    item.className = "cf-toast-item " + (type||"");
    item.innerHTML = '<i data-lucide="'+toastIcon(type)+'"></i><span>'+escapeHtml(message)+'</span>';
    root.appendChild(item); refreshIcons();
    setTimeout(function(){item.style.opacity="0";item.style.transform="translateY(6px)";setTimeout(function(){if(item.parentNode)item.parentNode.removeChild(item);},150);},1800);
  }

  function focusGlobalSearch(){
    var input = document.querySelector("[data-global-search]") || document.querySelector(".cf-search");
    if(!input) return false;
    input.focus(); if(input.select) input.select();
    return true;
  }

  function actionCopy(button){
    var selector = button.getAttribute("data-target");
    var source = selector ? document.querySelector(selector) : null;
    var text = source ? (source.value || source.textContent || "") : (button.getAttribute("data-copy") || "");
    text = String(text||"").trim();
    if(!text){ pushToast("Nusxalash uchun matn topilmadi","warn"); return; }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(function(){ pushToast("Matn nusxalandi","success"); }).catch(function(){ pushToast("Clipboard xatosi","error"); });
      return;
    }
    pushToast("Clipboard API mavjud emas","warn");
  }
  function actionSave(button){
    var form = button.closest("form");
    if(form && typeof form.reportValidity==="function" && !form.reportValidity()){ pushToast("Majburiy maydonlarni to'ldiring","warn"); return; }
    pushToast("Ma'lumot saqlandi","success");
  }
  function actionReset(button){ var form=button.closest("form"); if(form&&form.reset)form.reset(); pushToast("Forma tozalandi","info"); }
  function actionExport(){ pushToast("Export tayyorlanmoqda","info"); }
  function actionBack(){ if(window.history.length>1) window.history.back(); else window.location.href="../04-dashboard/01-dashboard.html"; }
  function actionToggleSidebar(){ document.body.classList.toggle("sidebar-collapsed"); pushToast(document.body.classList.contains("sidebar-collapsed")?"Sidebar yopildi":"Sidebar ochildi","info"); }

  function runAction(button){
    var action = String(button.getAttribute("data-action")||"").toLowerCase().trim();
    if(!action) return;
    if(action==="copy") return actionCopy(button);
    if(action==="save") return actionSave(button);
    if(action==="reset-form") return actionReset(button);
    if(action==="export") return actionExport();
    if(action==="back") return actionBack();
    if(action==="toggle-sidebar") return actionToggleSidebar();
    if(action==="goto"){ var href = button.getAttribute("data-href"); if(href) window.location.href = href; return; }
    pushToast(button.getAttribute("data-message") || "Amal bajarildi","info");
  }

  function setActiveTab(group, value){
    document.querySelectorAll('[data-tab-group="'+group+'"][data-tab]').forEach(function(btn){
      var active = btn.getAttribute("data-tab")===value;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll('[data-tab-group="'+group+'"][data-tab-panel]').forEach(function(panel){
      panel.hidden = panel.getAttribute("data-tab-panel") !== value;
    });
  }
  function initTabs(){
    var groups = {};
    document.querySelectorAll("[data-tab-group][data-tab]").forEach(function(btn){
      var g = btn.getAttribute("data-tab-group");
      if(!groups[g]) groups[g] = [];
      groups[g].push(btn);
    });
    Object.keys(groups).forEach(function(group){
      var initial = groups[group].find(function(btn){ return btn.classList.contains("active"); }) || groups[group][0];
      if(initial) setActiveTab(group, initial.getAttribute("data-tab"));
    });
  }

  function openModal(id){
    var overlay = document.querySelector('[data-modal="'+id+'"]');
    if(!overlay) return;
    overlay.hidden = false;
    requestAnimationFrame(function(){ overlay.classList.add("is-open"); });
    document.body.classList.add("modal-open");
    refreshIcons();
  }
  function closeModal(from){
    var overlay = from && from.closest ? from.closest(".modal-overlay") : null;
    if(!overlay && from && from.classList && from.classList.contains("modal-overlay")) overlay = from;
    if(!overlay) return;
    overlay.classList.remove("is-open");
    setTimeout(function(){ overlay.hidden = true; }, 140);
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("click", function (event) {
    var node;
    node = event.target.closest("[data-role-switch]");
    if(node){ event.preventDefault(); setRole(node.getAttribute("data-role-switch")); return; }
    node = event.target.closest("[data-nav]");
    if(node){ event.preventDefault(); if(node.getAttribute("data-nav")) window.location.href = node.getAttribute("data-nav"); return; }
    node = event.target.closest("[data-tab-group][data-tab]");
    if(node){ event.preventDefault(); setActiveTab(node.getAttribute("data-tab-group"), node.getAttribute("data-tab")); return; }
    node = event.target.closest("[data-modal-open]");
    if(node){ event.preventDefault(); openModal(node.getAttribute("data-modal-open")); return; }
    node = event.target.closest("[data-modal-close]");
    if(node){ event.preventDefault(); closeModal(node); return; }
    if(event.target.classList && event.target.classList.contains("modal-overlay")){ closeModal(event.target); return; }
    node = event.target.closest("[data-action]");
    if(node){ event.preventDefault(); runAction(node); return; }
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if(!form || form.tagName!=="FORM") return;
    if(!form.hasAttribute("data-auto-submit")) return;
    event.preventDefault();
    pushToast(form.getAttribute("data-submit-message") || "Forma yuborildi", "success");
  });

  document.addEventListener("keydown", function (event) {
    var key = String(event.key||"").toLowerCase();
    if((event.ctrlKey || event.metaKey) && key==="k"){ event.preventDefault(); focusGlobalSearch(); return; }
    if(key==="escape"){
      var open = document.querySelector(".modal-overlay.is-open");
      if(open) closeModal(open);
    }
  });

  document.addEventListener("qulaychat:shell-mounted", function(){ applyRole(); initTabs(); refreshIcons(); });
  document.addEventListener("DOMContentLoaded", function(){ applyRole(); initTabs(); refreshIcons(); });
})();