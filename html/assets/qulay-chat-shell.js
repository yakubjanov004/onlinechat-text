(function () {
  "use strict";
  var NAV_SECTIONS_BY_ROLE = {
    admin: [
      {
        label: "Asosiy",
        items: [
          {
            key: "dashboard",
            label: "Dashboard",
            icon: "layout-dashboard",
            href: "../04-dashboard/01-dashboard.html",
          },
          {
            key: "inbox",
            label: "Inbox",
            icon: "inbox",
            href: "../05-inbox/01-inbox-chat.html",
            badge: "12",
            badgeClass: "badge-danger",
          },
          {
            key: "contacts",
            label: "Kontaktlar",
            icon: "users",
            href: "../12-contacts/01-contacts-list.html",
          },
          {
            key: "visitors",
            label: "Online Visitors",
            icon: "eye",
            href: "../13-visitors/01-visitors-list.html",
            badge: "5",
            badgeClass: "badge-success",
          },
          {
            key: "team-chat",
            label: "Team Chat",
            icon: "message-square",
            href: "../14-team-chat/01-team-chat.html",
            badge: "3",
            badgeClass: "badge-primary",
          },
        ],
      },
      {
        label: "Boshqaruv",
        items: [
          {
            key: "automation",
            label: "Automation",
            icon: "zap",
            href: "../06-automation/01-working-hours.html",
          },
          {
            key: "team",
            label: "Team",
            icon: "user-round",
            href: "../07-team/01-agents.html",
          },
          {
            key: "knowledge-base",
            label: "Knowledge Base",
            icon: "book-open",
            href: "../15-knowledge-base/01-kb-dashboard.html",
          },
          {
            key: "email-templates",
            label: "Email Templates",
            icon: "mail",
            href: "../22-email-templates/01-templates-list.html",
          },
        ],
      },
      {
        label: "Tahlil va monitoring",
        items: [
          {
            key: "analytics",
            label: "Analytics",
            icon: "bar-chart-3",
            href: "../08-analytics/01-overview.html",
          },
          {
            key: "global-search",
            label: "Global Search",
            icon: "search",
            href: "../19-global-search/01-search-modal.html",
          },
          {
            key: "notifications",
            label: "Notifications",
            icon: "bell",
            href: "../20-notifications/01-notification-dropdown.html",
            badge: "6",
            badgeClass: "badge-danger",
          },
        ],
      },
      {
        label: "Sozlamalar",
        items: [
          {
            key: "settings",
            label: "Settings",
            icon: "settings",
            href: "../09-settings/01-workspace.html",
          },
          {
            key: "billing",
            label: "Billing",
            icon: "credit-card",
            href: "../10-billing/01-plan.html",
          },
          {
            key: "addons",
            label: "Add-ons",
            icon: "puzzle",
            href: "../16-addons/01-addons-catalog.html",
          },
          {
            key: "developer",
            label: "Developer",
            icon: "code",
            href: "../17-developer/01-api-keys.html",
          },
          {
            key: "multi-language",
            label: "Multi-language",
            icon: "languages",
            href: "../23-multi-language/01-language-settings.html",
          },
          {
            key: "gdpr",
            label: "GDPR",
            icon: "shield-check",
            href: "../24-gdpr-compliance/01-data-overview.html",
          },
          {
            key: "dark-mode",
            label: "Dark Mode",
            icon: "moon",
            href: "../25-dark-mode/01-dark-mode-demo.html",
          },
        ],
      },
      {
        label: "Yordam",
        items: [
          {
            key: "help-support",
            label: "Help Center",
            icon: "life-buoy",
            href: "../21-help-support/01-help-center.html",
          },
          {
            key: "docs",
            label: "Docs",
            icon: "file-text",
            href: "../index.html",
          },
          {
            key: "support",
            label: "Support",
            icon: "help-circle",
            href: "../21-help-support/03-submit-ticket.html",
          },
        ],
      },
    ],
    agent: [
      {
        label: "Asosiy",
        items: [
          {
            key: "dashboard",
            label: "Dashboard",
            icon: "layout-dashboard",
            href: "../04-dashboard/02-dashboard-agent.html",
          },
          {
            key: "inbox",
            label: "Inbox",
            icon: "inbox",
            href: "../05-inbox/01-inbox-chat.html",
            badge: "4",
            badgeClass: "badge-danger",
          },
          {
            key: "contacts",
            label: "Kontaktlar",
            icon: "users",
            href: "../12-contacts/01-contacts-list.html",
          },
        ],
      },
      {
        label: "Ish",
        items: [
          {
            key: "team-chat",
            label: "Team Chat",
            icon: "message-square",
            href: "../14-team-chat/01-team-chat.html",
            badge: "2",
            badgeClass: "badge-primary",
          },
          {
            key: "knowledge-base",
            label: "Knowledge Base",
            icon: "book-open",
            href: "../15-knowledge-base/01-kb-dashboard.html",
          },
          {
            key: "analytics",
            label: "My Stats",
            icon: "bar-chart-3",
            href: "../08-analytics/11-my-stats.html",
          },
        ],
      },
      {
        label: "Hisob",
        items: [
          {
            key: "settings",
            label: "Profil va sozlamalar",
            icon: "settings",
            href: "../09-settings/05-profile.html",
          },
          {
            key: "notifications",
            label: "Notifications",
            icon: "bell",
            href: "../20-notifications/01-notification-dropdown.html",
            badge: "3",
            badgeClass: "badge-danger",
          },
          {
            key: "help-support",
            label: "Yordam markazi",
            icon: "life-buoy",
            href: "../21-help-support/01-help-center.html",
          },
          {
            key: "support",
            label: "Ticket yuborish",
            icon: "help-circle",
            href: "../21-help-support/03-submit-ticket.html",
          },
        ],
      },
    ],
  };

  function getNavSections(role) {
    return NAV_SECTIONS_BY_ROLE[role] || NAV_SECTIONS_BY_ROLE.admin;
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function buildSidebar(active, role) {
    var aside = el("aside", "app-sidebar");
    getNavSections(role).forEach(function (section) {
      aside.appendChild(el("div", "nav-section-label", section.label));
      section.items.forEach(function (item) {
        var a = el("a", "nav-link" + (item.key === active ? " active" : ""));
        a.href = item.href;
        var left = el("span", "nav-left");
        left.innerHTML =
          '<i data-lucide="' +
          item.icon +
          '"></i><span class="nav-label">' +
          item.label +
          "</span>";
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
      "    <strong>Sardor A.</strong>" +
      '    <span><span class="status-dot online"></span>Online</span>' +
      "  </div>" +
      "</div>";
    aside.appendChild(footer);
    return aside;
  }

  function currentSectionName() {
    var p = (
      window.location && window.location.pathname
        ? window.location.pathname
        : ""
    ).toLowerCase();
    if (p.indexOf("/05-inbox/") > -1) return "Inbox";
    if (p.indexOf("/04-dashboard/") > -1) return "Dashboard";
    if (p.indexOf("/08-analytics/") > -1) return "Analytics";
    if (p.indexOf("/09-settings/") > -1) return "Settings";
    if (p.indexOf("/19-global-search/") > -1) return "Global Search";
    if (p.indexOf("/20-notifications/") > -1) return "Notifications";
    if (p.indexOf("/21-help-support/") > -1) return "Help Center";
    if (p.indexOf("/22-email-templates/") > -1) return "Email Templates";
    if (p.indexOf("/23-multi-language/") > -1) return "Multi-language";
    if (p.indexOf("/24-gdpr-compliance/") > -1) return "GDPR";
    if (p.indexOf("/25-dark-mode/") > -1) return "Dark Mode";
    if (p.indexOf("/01-landing/") > -1) return "Landing";
    return "Workspace";
  }

  function buildHeader() {
    var section = currentSectionName();
    var header = el("header", "app-header");
    header.innerHTML =
      '<div class="app-header-left">' +
      '  <button class="icon-btn" type="button" data-action="toggle-sidebar" aria-label="Sidebar toggle"><i data-lucide="panel-left-close"></i></button>' +
      '  <a class="shell-brand" href="../04-dashboard/01-dashboard.html"><span class="shell-brand-mark">QC</span><span>QULAY CHAT • ' +
      section +
      "</span></a>" +
      "</div>" +
      '<label class="shell-search" aria-label="Global qidiruv">' +
      '  <i data-lucide="search"></i>' +
      '  <input type="search" placeholder="Qidirish... (Ctrl+K)" data-global-search>' +
      "  <kbd>Ctrl+K</kbd>" +
      "</label>" +
      '<div class="app-header-right">' +
      '  <span class="status-pill"><span class="status-dot online"></span>Online</span>' +
      '  <a class="icon-btn" href="../20-notifications/01-notification-dropdown.html" aria-label="Bildirishnomalar"><i data-lucide="bell"></i><span class="icon-badge">3</span></a>' +
      '  <details class="header-dropdown">' +
      '    <summary aria-label="User menu"><span class="avatar">SA</span><span class="nav-label">SA</span><i data-lucide="chevron-down"></i></summary>' +
      '    <div class="dropdown-menu">' +
      '      <a class="dropdown-item" href="../09-settings/05-profile.html"><i data-lucide="user"></i>Profil</a>' +
      '      <a class="dropdown-item" href="../09-settings/01-workspace.html"><i data-lucide="settings"></i>Sozlamalar</a>' +
      '      <a class="dropdown-item" href="../21-help-support/01-help-center.html"><i data-lucide="help-circle"></i>Yordam</a>' +
      '      <div class="divider"></div>' +
      '      <a class="dropdown-item danger" href="../02-auth/01-login.html"><i data-lucide="log-out"></i>Chiqish</a>' +
      '      <div class="role-switch">' +
      "        <label>Role Preview</label>" +
      '        <div class="role-switch-buttons">' +
      '          <button type="button" data-role-switch="admin">Admin</button>' +
      '          <button type="button" data-role-switch="agent">Agent</button>' +
      '          <button type="button" data-role-switch="client">Client</button>' +
      "        </div>" +
      "      </div>" +
      "    </div>" +
      "  </details>" +
      "</div>";
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
    var shellRole = (body.getAttribute("data-shell-role") || "admin")
      .trim()
      .toLowerCase();
    main.id = main.id || "main-content";
    appMain.appendChild(main);
    layout.appendChild(
      buildSidebar(
        (body.getAttribute("data-active-nav") || "").trim(),
        shellRole,
      ),
    );
    layout.appendChild(appMain);
    shell.appendChild(buildHeader());
    shell.appendChild(layout);
    body.insertBefore(shell, body.firstChild);

    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    document.dispatchEvent(new CustomEvent("qulaychat:shell-mounted"));
  }

  document.addEventListener("DOMContentLoaded", mountShell);
})();
