(function () {
  "use strict";
  var NAV_SECTIONS = [
    { label: "Asosiy", items: [
      { key: "dashboard", label: "Dashboard", icon: "layout-dashboard", href: "../04-dashboard/01-dashboard.html" },
      { key: "inbox", label: "Inbox", icon: "inbox", href: "../05-inbox/01-inbox-chat.html", badge: "12", badgeClass: "badge-danger" },
      { key: "contacts", label: "Kontaktlar", icon: "users", href: "../12-contacts/01-contacts-list.html" },
      { key: "visitors", label: "Online Visitors", icon: "eye", href: "../13-visitors/01-visitors-list.html", badge: "5", badgeClass: "badge-success" }
    ]},
    { label: "Vositalar", items: [
      { key: "automation", label: "Automation", icon: "zap", href: "../06-automation/01-working-hours.html" },
      { key: "team", label: "Team", icon: "user-round", href: "../07-team/01-agents.html" },
      { key: "team-chat", label: "Team Chat", icon: "message-square", href: "../14-team-chat/01-team-chat.html", badge: "3", badgeClass: "badge-primary" },
      { key: "analytics", label: "Analytics", icon: "bar-chart-3", href: "../08-analytics/01-overview.html" },
      { key: "knowledge-base", label: "Knowledge Base", icon: "book-open", href: "../15-knowledge-base/01-kb-dashboard.html" }
    ]},
    { label: "Sozlamalar", items: [
      { key: "settings", label: "Settings", icon: "settings", href: "../09-settings/01-workspace.html" },
      { key: "billing", label: "Billing", icon: "credit-card", href: "../10-billing/01-plan.html" },
      { key: "addons", label: "Add-ons", icon: "puzzle", href: "../16-addons/01-addons-catalog.html" },
      { key: "developer", label: "Developer", icon: "code", href: "../17-developer/01-api-keys.html" }
    ]},
    { label: "Yordam", items: [
      { key: "docs", label: "Docs", icon: "file-text", href: "../index.html#docs" },
      { key: "support", label: "Support", icon: "help-circle", href: "../index.html#support" }
    ]}
  ];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function buildSidebar(active) {
    var aside = el("aside", "app-sidebar");
    NAV_SECTIONS.forEach(function (section) {
      aside.appendChild(el("div", "nav-section-label", section.label));
      section.items.forEach(function (item) {
        var a = el("a", "nav-link" + (item.key === active ? " active" : ""));
        a.href = item.href;
        var left = el("span", "nav-left");
        left.innerHTML = '<i data-lucide="' + item.icon + '"></i><span class="nav-label">' + item.label + '</span>';
        a.appendChild(left);
        if (item.badge) {
          var badge = el("span", "badge " + (item.badgeClass || ""));
          badge.textContent = item.badge;
          a.appendChild(badge);
        }
        aside.appendChild(a);
      });
    });
    var footer = el("div", "sidebar-footer");
    footer.innerHTML =
      '<div class="sidebar-user">' +
      '  <span class="avatar">SA</span>' +
      '  <div class="sidebar-user-meta">' +
      '    <strong>Sardor A.</strong>' +
      '    <span><span class="status-dot online"></span>Online</span>' +
      '  </div>' +
      '</div>';
    aside.appendChild(footer);
    return aside;
  }

  function buildHeader() {
    var header = el("header", "app-header");
    header.innerHTML =
      '<div class="app-header-left">' +
      '  <button class="icon-btn" type="button" data-action="toggle-sidebar" aria-label="Sidebar toggle"><i data-lucide="panel-left-close"></i></button>' +
      '  <a class="shell-brand" href="../04-dashboard/01-dashboard.html"><span class="shell-brand-mark">QC</span><span>QULAY CHAT</span></a>' +
      '</div>' +
      '<label class="shell-search" aria-label="Global qidiruv">' +
      '  <i data-lucide="search"></i>' +
      '  <input type="search" placeholder="Qidirish... (Ctrl+K)" data-global-search>' +
      '  <kbd>Ctrl+K</kbd>' +
      '</label>' +
      '<div class="app-header-right">' +
      '  <span class="status-pill"><span class="status-dot online"></span>Online</span>' +
      '  <button class="icon-btn" type="button" aria-label="Bildirishnomalar"><i data-lucide="bell"></i><span class="icon-badge">3</span></button>' +
      '  <details class="header-dropdown">' +
      '    <summary aria-label="User menu"><span class="avatar">SA</span><span class="nav-label">SA</span><i data-lucide="chevron-down"></i></summary>' +
      '    <div class="dropdown-menu">' +
      '      <a class="dropdown-item" href="../09-settings/05-profile.html"><i data-lucide="user"></i>Profil</a>' +
      '      <a class="dropdown-item" href="../09-settings/01-workspace.html"><i data-lucide="settings"></i>Sozlamalar</a>' +
      '      <a class="dropdown-item" href="../index.html#support"><i data-lucide="help-circle"></i>Yordam</a>' +
      '      <div class="divider"></div>' +
      '      <a class="dropdown-item danger" href="../02-auth/01-login.html"><i data-lucide="log-out"></i>Chiqish</a>' +
      '      <div class="role-switch">' +
      '        <label>Role Preview</label>' +
      '        <div class="role-switch-buttons">' +
      '          <button type="button" data-role-switch="admin">Admin</button>' +
      '          <button type="button" data-role-switch="agent">Agent</button>' +
      '          <button type="button" data-role-switch="client">Client</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </details>' +
      '</div>';
    return header;
  }

  function mountShell() {
    var body = document.body;
    if (!body || body.hasAttribute("data-no-shell")) return;
    if (body.querySelector(".app-header")) return;
    var main = body.querySelector("main.app-content");
    if (!main) return;

    var shell = el("div", "app-shell");
    var layout = el("div", "app-layout");
    var appMain = el("div", "app-main");
    main.id = main.id || "main-content";
    appMain.appendChild(main);
    layout.appendChild(buildSidebar((body.getAttribute("data-active-nav") || "").trim()));
    layout.appendChild(appMain);
    shell.appendChild(buildHeader());
    shell.appendChild(layout);
    body.insertBefore(shell, body.firstChild);

    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    document.dispatchEvent(new CustomEvent("qulaychat:shell-mounted"));
  }

  document.addEventListener("DOMContentLoaded", mountShell);
})();