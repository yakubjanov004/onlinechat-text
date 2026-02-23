const fs = require("fs");
const path = require("path");

const HTML_ROOT = path.join(process.cwd(), "html");
const PLACEHOLDER_MARKER = "Spec Checklist";

const MODULE_META = {
  "01-landing": {
    name: "Landing",
    description: "Public sahifa. Login va ro'yxatdan o'tish oqimiga kirish nuqtasi."
  },
  "05-inbox": {
    name: "Inbox",
    description: "Chat operatori uchun jonli suhbatlar va tezkor javoblar paneli."
  },
  "06-automation": {
    name: "Automation",
    description: "Auto-reply, trigger va greeting qoidalarini boshqarish bo'limi."
  },
  "08-analytics": {
    name: "Analytics",
    description: "SLA, javob vaqti va operator natijalarini tahlil qilish sahifalari."
  },
  "09-settings": {
    name: "Settings",
    description: "Workspace, security, profile va privacy sozlamalari markazi."
  },
  "10-billing": {
    name: "Billing",
    description: "Plan, to'lov usuli, invoice va foydalanish limitlarini boshqarish."
  },
  "11-chat-widget": {
    name: "Chat Widget",
    description: "Client tomoni chat oynasi, offline forma va CSAT holatlari."
  },
  "12-contacts": {
    name: "Contacts",
    description: "Mijoz kartalari, tashkilotlar va segmentlash funksiyalari."
  },
  "13-visitors": {
    name: "Visitors",
    description: "Online visitor monitoring va individual visitor profillari."
  },
  "14-team-chat": {
    name: "Team Chat",
    description: "Agentlar o'rtasidagi ichki xabar almashinuvi bo'limi."
  },
  "15-knowledge-base": {
    name: "Knowledge Base",
    description: "Maqolalar bazasi, kategoriyalar va self-service kontent boshqaruvi."
  },
  "16-addons": {
    name: "Add-ons",
    description: "Integratsiya katalogi, faol qo'shimchalar va konfiguratsiya."
  },
  "17-developer": {
    name: "Developer",
    description: "API key, webhook va texnik loglarni boshqarish markazi."
  },
  "18-system": {
    name: "System",
    description: "Error, maintenance va offline holatlar uchun servis sahifalari."
  }
};

const SIDEBAR_ITEMS = [
  { folder: "05-inbox", label: "Inbox", href: "../05-inbox/01-inbox-chat.html", badge: "12", roles: "admin,agent" },
  { folder: "12-contacts", label: "Contacts", href: "../12-contacts/01-contacts-list.html", roles: "admin,agent" },
  { folder: "13-visitors", label: "Visitors", href: "../13-visitors/01-visitors-list.html", badge: "5", roles: "admin,agent" },
  { folder: "06-automation", label: "Automation", href: "../06-automation/01-working-hours.html", roles: "admin" },
  { folder: "07-team", label: "Team", href: "../07-team/01-agents.html", roles: "admin" },
  { folder: "14-team-chat", label: "Team Chat", href: "../14-team-chat/01-team-chat.html", badge: "3", roles: "admin,agent" },
  { folder: "08-analytics", label: "Analytics", href: "../08-analytics/01-overview.html", roles: "admin,agent" },
  { folder: "15-knowledge-base", label: "Knowledge Base", href: "../15-knowledge-base/01-kb-dashboard.html", roles: "admin,agent" },
  { folder: "09-settings", label: "Settings", href: "../09-settings/01-workspace.html", roles: "admin,agent" },
  { folder: "10-billing", label: "Billing", href: "../10-billing/01-plan.html", roles: "admin" },
  { folder: "16-addons", label: "Add-ons", href: "../16-addons/01-addons-catalog.html", roles: "admin" },
  { folder: "17-developer", label: "Developer", href: "../17-developer/01-api-keys.html", roles: "admin" }
];

const ADMIN_ONLY = new Set(["06-automation", "07-team", "10-billing", "16-addons", "17-developer"]);
const PUBLIC_MODULES = new Set(["01-landing", "02-auth", "03-onboarding", "11-chat-widget", "18-system"]);

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
      continue;
    }

    out.push(full);
  }

  return out;
}

function decodeEntities(input) {
  return String(input || "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)));
}

function stripTags(input) {
  return decodeEntities(String(input || "").replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(input) {
  return String(input || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function basenameFromHref(href) {
  return String(href || "")
    .split("#")[0]
    .split("?")[0]
    .split("/")
    .pop();
}

function ensureCurrentSibling(siblings, currentFile) {
  if (siblings.length === 0) {
    return siblings;
  }

  let foundCurrent = siblings.some((item) => item.current);
  if (!foundCurrent) {
    for (const item of siblings) {
      if (basenameFromHref(item.href) === currentFile) {
        item.current = true;
        foundCurrent = true;
        break;
      }
    }
  }

  if (!foundCurrent) {
    siblings[0].current = true;
  }

  return siblings;
}

function parsePlaceholder(raw, relPath) {
  const currentFile = path.basename(relPath);
  const folder = relPath.split("/")[0];

  const titleMatch = raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = stripTags(titleMatch ? titleMatch[1] : currentFile.replace(/\.html$/i, ""));

  const moduleMatch = raw.match(/<p class="eyebrow">([\s\S]*?)<\/p>/i);
  const module = stripTags(moduleMatch ? moduleMatch[1] : (MODULE_META[folder] ? MODULE_META[folder].name : "Module"));

  const sections = [];
  const sectionRe = /<section class="panel">([\s\S]*?)<\/section>/gi;
  let section;

  while ((section = sectionRe.exec(raw)) !== null) {
    const block = section[1];
    const headingMatch = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
    const heading = stripTags(headingMatch ? headingMatch[1] : "");

    const listMatch = block.match(/<(ol|ul)(?:[^>]*)>([\s\S]*?)<\/\1>/i);
    const itemHtml = listMatch ? listMatch[2] : "";
    const items = [];

    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let li;
    while ((li = liRe.exec(itemHtml)) !== null) {
      const text = stripTags(li[1]);
      if (text) {
        items.push(text);
      }
    }

    sections.push({ heading, block, items });
  }

  const checklistSection = sections.find((item) => /spec checklist/i.test(item.heading));
  const flowSection = sections.find((item) => /(flow|cta|navigatsiya)/i.test(item.heading) && !/spec/i.test(item.heading));
  const siblingSection = sections.find((item) => /siblings/i.test(item.block) || /(sahifalari|system sahifalari|widget sahifalari)/i.test(item.heading));

  const checklist = checklistSection && checklistSection.items.length > 0
    ? checklistSection.items
    : ["Asosiy forma holatini tekshirish", "Saqlash va export tugmalarini verifikatsiya qilish"];

  const flow = flowSection && flowSection.items.length > 0
    ? flowSection.items
    : checklist.slice(0, 4);

  const siblings = [];
  if (siblingSection) {
    const anchorRe = /<a[^>]*href=['"]([^'"]+)['"][^>]*>([\s\S]*?)<\/a>/gi;
    let anchor;
    while ((anchor = anchorRe.exec(siblingSection.block)) !== null) {
      const fullAnchor = anchor[0];
      const href = anchor[1];
      const label = stripTags(anchor[2]);
      const clsMatch = fullAnchor.match(/class=['"]([^'"]*)['"]/i);
      const className = clsMatch ? clsMatch[1] : "";
      siblings.push({
        href,
        label,
        current: /\bcurrent\b/i.test(className)
      });
    }
  }

  return {
    currentFile,
    folder,
    title,
    module,
    checklist,
    flow,
    siblings: ensureCurrentSibling(siblings, currentFile)
  };
}

function pageRolesForFolder(folder) {
  if (PUBLIC_MODULES.has(folder)) {
    return "admin,agent,client";
  }

  if (ADMIN_ONLY.has(folder)) {
    return "admin";
  }

  return "admin,agent";
}

function roleSwitchHtml() {
  return [
    '<div class="cf-role-switch" role="group" aria-label="Role switch">',
    '  <button class="cf-role-btn" type="button" data-role-switch="admin" aria-pressed="false">Admin</button>',
    '  <button class="cf-role-btn" type="button" data-role-switch="agent" aria-pressed="false">Agent</button>',
    '  <button class="cf-role-btn" type="button" data-role-switch="client" aria-pressed="false">Client</button>',
    '</div>'
  ].join("\n");
}

function sidebarHtml(activeFolder) {
  const rows = SIDEBAR_ITEMS.map((item) => {
    const active = item.folder === activeFolder ? " is-active" : "";
    const badge = item.badge ? `<span class="cf-badge">${escapeHtml(item.badge)}</span>` : "";
    return `<a class="cf-nav-link${active}" href="${escapeHtml(item.href)}" data-roles="${escapeHtml(item.roles)}"><span>${escapeHtml(item.label)}</span>${badge}</a>`;
  }).join("\n");

  return [
    '<aside class="cf-sidebar">',
    '  <p class="cf-side-label">Main</p>',
    rows,
    '</aside>'
  ].join("\n");
}

function checklistHtml(items, pageRoles) {
  const source = items.length ? items : ["Asosiy operatsion vazifani tekshiring"];

  return source.map((item, index) => {
    const message = `Checklist bosqichi ishga tushdi: ${item}`;
    return [
      `<li class="cf-task-item" data-roles="${escapeHtml(pageRoles)}">`,
      '  <div class="cf-task-main">',
      `    <p class="cf-task-title">${escapeHtml(item)}</p>`,
      '  </div>',
      '  <div class="cf-task-actions">',
      '    <button class="cf-btn cf-btn--ghost" type="button" data-action="toggle-check" aria-pressed="false">Bajarildi</button>',
      `    <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="${escapeHtml(message)}">Ishga tushirish</button>`,
      `    <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="Band ${index + 1} uchun tekshiruv protokoli yozildi">Protokol</button>`,
      '  </div>',
      '</li>'
    ].join("\n");
  }).join("\n");
}

function flowHtml(items) {
  const source = items.length ? items : ["Asosiy flow ni ishga tushirish", "Natijani event log orqali tekshirish"];

  return source.map((item) => {
    return [
      '<li>',
      `  <span>${escapeHtml(item)}</span>`,
      '  <div class="cf-inline">',
      `    <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="Flow ishga tushdi: ${escapeHtml(item)}">Run</button>`,
      `    <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="Flow verifikatsiyasi yakunlandi: ${escapeHtml(item)}">Verify</button>`,
      '  </div>',
      '</li>'
    ].join("\n");
  }).join("\n");
}

function siblingNavHtml(siblings, relPath) {
  if (!siblings.length) {
    return '<p class="cf-subtitle">Bu sahifa uchun qo\'shimcha modul havolalari topilmadi.</p>';
  }

  return [
    '<nav class="cf-sibling-nav">',
    siblings.map((item) => {
      const current = item.current ? " is-current" : "";
      return `<a class="cf-sibling-link${current}" href="${escapeHtml(item.href)}">${escapeHtml(item.label || basenameFromHref(item.href))}</a>`;
    }).join("\n"),
    '</nav>'
  ].join("\n");
}

function getPrevNext(siblings) {
  if (!siblings.length) {
    return { prev: null, next: null };
  }

  const currentIndex = siblings.findIndex((item) => item.current);
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex > 0 ? siblings[currentIndex - 1] : null,
    next: currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null
  };
}

function dashboardHtml(ctx) {
  const prevNext = getPrevNext(ctx.siblings);
  const moduleInfo = MODULE_META[ctx.folder] || { name: ctx.module, description: "Operatsion boshqaruv sahifasi." };

  const prevButton = prevNext.prev
    ? `<button class="cf-btn cf-btn--subtle" type="button" data-nav="${escapeHtml(prevNext.prev.href)}">Oldingi sahifa</button>`
    : "";

  const nextButton = prevNext.next
    ? `<button class="cf-btn cf-btn--subtle" type="button" data-nav="${escapeHtml(prevNext.next.href)}">Keyingi sahifa</button>`
    : "";

  return `<!doctype html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QULAY CHAT - ${escapeHtml(ctx.title)}</title>
  <link rel="stylesheet" href="../assets/qulay-chat-pages.css" />
</head>
<body class="cf-body" data-page="${escapeHtml(ctx.relPath)}" data-page-roles="${escapeHtml(ctx.pageRoles)}">
  <header class="cf-header">
    <a class="cf-brand" href="../04-dashboard/01-dashboard.html">QULAY CHAT</a>
    <input class="cf-search" type="search" aria-label="Global qidiruv" placeholder="Global qidiruv (Ctrl+K)" />
    <div class="cf-header-right">
      ${roleSwitchHtml()}
      <span class="cf-role-pill">Production Preview</span>
    </div>
  </header>
  <div class="cf-layout">
    ${sidebarHtml(ctx.folder)}
    <main class="cf-content">
      <div class="cf-banner" data-role-banner hidden></div>
      <section class="cf-hero">
        <p class="cf-overline">${escapeHtml(moduleInfo.name)}</p>
        <h1 class="cf-title">${escapeHtml(ctx.title)}</h1>
        <p class="cf-subtitle">${escapeHtml(moduleInfo.description)} Barcha tugmalar click holatida event-logga yoziladi va role-gating orqali Admin, Agent, Client testlarini o'tkazish mumkin.</p>
      </section>

      <section class="cf-toolbar">
        <button class="cf-btn cf-btn--subtle" type="button" data-action="back">Orqaga</button>
        ${prevButton}
        ${nextButton}
        <button class="cf-btn cf-btn--primary" type="button" data-action="save">Saqlash</button>
        <button class="cf-btn cf-btn--ghost" type="button" data-action="export">Export</button>
      </section>

      <section class="cf-card">
        <h2>Operatsion checklist</h2>
        <ol class="cf-task-list">
          ${checklistHtml(ctx.checklist, ctx.pageRoles)}
        </ol>
      </section>

      <section class="cf-card-grid">
        <article class="cf-card">
          <h2>Boshqaruv formasi</h2>
          <form data-auto-submit data-submit-message="Forma yuborildi va konfiguratsiya saqlandi">
            <div class="cf-form-grid">
              <div class="cf-field">
                <label for="title-${escapeHtml(ctx.slug)}">Sarlavha</label>
                <input id="title-${escapeHtml(ctx.slug)}" name="title" type="text" value="${escapeHtml(ctx.title)} konfiguratsiyasi" />
              </div>
              <div class="cf-field">
                <label for="status-${escapeHtml(ctx.slug)}">Status</label>
                <select id="status-${escapeHtml(ctx.slug)}" name="status">
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
              <div class="cf-field" style="grid-column:1/-1;">
                <label for="note-${escapeHtml(ctx.slug)}">Ichki izoh</label>
                <textarea id="note-${escapeHtml(ctx.slug)}" name="note">Ushbu maydon production oldidan operator checklistiga biriktiriladi.</textarea>
              </div>
            </div>
            <div class="cf-form-actions">
              <button class="cf-btn cf-btn--primary" type="submit">Yuborish</button>
              <button class="cf-btn cf-btn--subtle" type="button" data-action="reset-form">Tozalash</button>
              <button class="cf-btn cf-btn--subtle" type="button" data-action="copy" data-copy="${escapeHtml(ctx.title)} konfiguratsiyasi">Nusxa olish</button>
            </div>
          </form>
        </article>

        <article class="cf-card">
          <h2>Flow testi</h2>
          <ul class="cf-flow-list">
            ${flowHtml(ctx.flow)}
          </ul>
        </article>
      </section>

      <section class="cf-card">
        <h2>Modul ichki navigatsiyasi</h2>
        ${siblingNavHtml(ctx.siblings, ctx.relPath)}
      </section>

      <section class="cf-card">
        <h2>Event log</h2>
        <ul class="cf-log-list" data-event-log>
          <li>Tayyor - ${escapeHtml(ctx.title)} sahifasi yuklandi</li>
        </ul>
      </section>
    </main>
  </div>
  <script src="../assets/qulay-chat-runtime.js"></script>
</body>
</html>`;
}

function widgetHtml(ctx) {
  const prevNext = getPrevNext(ctx.siblings);
  const prevButton = prevNext.prev
    ? `<button class="cf-btn cf-btn--subtle" type="button" data-nav="${escapeHtml(prevNext.prev.href)}">Oldingi holat</button>`
    : "";

  const nextButton = prevNext.next
    ? `<button class="cf-btn cf-btn--subtle" type="button" data-nav="${escapeHtml(prevNext.next.href)}">Keyingi holat</button>`
    : "";

  return `<!doctype html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QULAY CHAT Widget - ${escapeHtml(ctx.title)}</title>
  <link rel="stylesheet" href="../assets/qulay-chat-pages.css" />
</head>
<body class="cf-body cf-widget-page" data-page="${escapeHtml(ctx.relPath)}" data-page-roles="${escapeHtml(ctx.pageRoles)}">
  <main class="cf-widget-shell">
    <header class="cf-widget-top">
      <a class="cf-brand" href="../index.html">QULAY CHAT Widget</a>
      ${roleSwitchHtml()}
    </header>

    <section class="cf-widget-content">
      <div class="cf-banner" data-role-banner hidden></div>

      <div class="cf-widget-sim">
        <p class="cf-overline">Client Widget</p>
        <h1 class="cf-title">${escapeHtml(ctx.title)}</h1>
        <p class="cf-subtitle">Widget preview rejimi. Chat boshlash, offline forma va CSAT oqimlarini shu sahifadan test qilish mumkin.</p>

        <div class="cf-inline" style="margin-top:12px;">
          <button class="cf-btn cf-btn--primary" type="button" data-action="log" data-message="Widget chat sessiyasi boshlandi">Chat boshlash</button>
          <button class="cf-btn cf-btn--ghost" type="button" data-action="log" data-message="Offline forma ochildi">Offline forma</button>
          <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="CSAT dialog ochildi">CSAT</button>
          ${prevButton}
          ${nextButton}
        </div>

        <div class="cf-widget-chat">
          <p class="cf-chat-bubble">Assalomu alaykum. Sizga qanday yordam bera olamiz?</p>
          <p class="cf-chat-bubble user">Buyurtma holatini tekshirmoqchi edim.</p>
          <p class="cf-chat-bubble">Albatta, ID ni yuboring. Operator ulanishi ham yoqilgan.</p>
        </div>
      </div>

      <section class="cf-card">
        <h2>Checklist</h2>
        <ol class="cf-task-list">
          ${checklistHtml(ctx.checklist, ctx.pageRoles)}
        </ol>
      </section>

      <section class="cf-card-grid">
        <article class="cf-card">
          <h2>Flow bosqichlari</h2>
          <ul class="cf-flow-list">
            ${flowHtml(ctx.flow)}
          </ul>
        </article>
        <article class="cf-card">
          <h2>Widget sahifalari</h2>
          ${siblingNavHtml(ctx.siblings, ctx.relPath)}
        </article>
      </section>

      <section class="cf-card">
        <h2>Event log</h2>
        <ul class="cf-log-list" data-event-log>
          <li>Tayyor - widget preview ishga tushdi</li>
        </ul>
      </section>
    </section>
  </main>
  <script src="../assets/qulay-chat-runtime.js"></script>
</body>
</html>`;
}

function systemHtml(ctx, raw) {
  const codeMatch = raw.match(/<p class="code">([\s\S]*?)<\/p>/i) || ctx.title.match(/(\d{3})/);
  const code = stripTags(codeMatch ? codeMatch[1] : "SYS");

  return `<!doctype html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QULAY CHAT System - ${escapeHtml(ctx.title)}</title>
  <link rel="stylesheet" href="../assets/qulay-chat-pages.css" />
</head>
<body class="cf-body cf-system-page" data-page="${escapeHtml(ctx.relPath)}" data-page-roles="${escapeHtml(ctx.pageRoles)}">
  <main class="cf-system-shell">
    <header class="cf-system-top">
      <a class="cf-brand" href="../index.html">QULAY CHAT System</a>
      ${roleSwitchHtml()}
    </header>
    <section class="cf-system-content">
      <div class="cf-banner" data-role-banner hidden></div>
      <p class="cf-system-code">${escapeHtml(code)}</p>
      <h1 class="cf-title" style="margin-top:8px;">${escapeHtml(ctx.title)}</h1>
      <p class="cf-subtitle">Servis holati sahifasi. Barcha tugmalar fallback bilan ishlaydi: qayta urinish, dashboardga qaytish, yordamga murojaat.</p>

      <section class="cf-toolbar">
        <button class="cf-btn cf-btn--primary" type="button" data-action="log" data-message="Qayta urinish ishga tushdi">Qayta urinish</button>
        <button class="cf-btn cf-btn--ghost" type="button" data-nav="../04-dashboard/01-dashboard.html" data-roles="admin,agent">Dashboard</button>
        <button class="cf-btn cf-btn--ghost" type="button" data-nav="../index.html">Bosh sahifa</button>
        <button class="cf-btn cf-btn--subtle" type="button" data-action="back">Orqaga</button>
      </section>

      <section class="cf-card">
        <h2>Nosozlik tekshiruvi</h2>
        <ol class="cf-task-list">
          ${checklistHtml(ctx.checklist, ctx.pageRoles)}
        </ol>
      </section>

      <section class="cf-card-grid">
        <article class="cf-card">
          <h2>Recovery Flow</h2>
          <ul class="cf-flow-list">
            ${flowHtml(ctx.flow)}
          </ul>
        </article>
        <article class="cf-card">
          <h2>System sahifalari</h2>
          ${siblingNavHtml(ctx.siblings, ctx.relPath)}
        </article>
      </section>

      <section class="cf-card">
        <h2>Event log</h2>
        <ul class="cf-log-list" data-event-log>
          <li>Tayyor - system fallback page ochildi</li>
        </ul>
      </section>
    </section>
  </main>
  <script src="../assets/qulay-chat-runtime.js"></script>
</body>
</html>`;
}

function publicHtml(ctx) {
  return `<!doctype html>
<html lang="uz">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QULAY CHAT - ${escapeHtml(ctx.title)}</title>
  <link rel="stylesheet" href="../assets/qulay-chat-pages.css" />
</head>
<body class="cf-body cf-public-page" data-page="${escapeHtml(ctx.relPath)}" data-page-roles="${escapeHtml(ctx.pageRoles)}">
  <main class="cf-public-shell">
    <header class="cf-public-top">
      <a class="cf-brand" href="../index.html">QULAY CHAT</a>
      <div class="cf-header-right">
        ${roleSwitchHtml()}
        <a class="cf-btn cf-btn--subtle" href="../02-auth/01-login.html">Kirish</a>
        <a class="cf-btn cf-btn--primary" href="../02-auth/02-register.html">Boshlash</a>
      </div>
    </header>

    <section class="cf-public-content">
      <div class="cf-banner" data-role-banner hidden></div>
      <section class="cf-public-hero">
        <p class="cf-overline">Public Entry</p>
        <h1 class="cf-title">${escapeHtml(ctx.title)}</h1>
        <p class="cf-subtitle">Landing sahifa production preview rejimiga o'tkazildi. CTA tugmalari auth oqimiga bog'langan va event-log bilan kuzatiladi.</p>
        <div class="cf-inline" style="margin-top:12px;">
          <a class="cf-btn cf-btn--primary" href="../02-auth/02-register.html">Bepul boshlash</a>
          <button class="cf-btn cf-btn--ghost" type="button" data-action="log" data-message="Demo sorovi yuborildi">Demo sorash</button>
          <button class="cf-btn cf-btn--subtle" type="button" data-action="log" data-message="Tariflar bloki ochildi">Tariflarni ko'rish</button>
        </div>
      </section>

      <section class="cf-card">
        <h2>Landing checklist</h2>
        <ol class="cf-task-list">
          ${checklistHtml(ctx.checklist, ctx.pageRoles)}
        </ol>
      </section>

      <section class="cf-card-grid">
        <article class="cf-card">
          <h2>CTA Flow</h2>
          <ul class="cf-flow-list">
            ${flowHtml(ctx.flow)}
          </ul>
        </article>
        <article class="cf-card">
          <h2>Event log</h2>
          <ul class="cf-log-list" data-event-log>
            <li>Tayyor - landing sahifa production preview holatida</li>
          </ul>
        </article>
      </section>
    </section>
  </main>
  <script src="../assets/qulay-chat-runtime.js"></script>
</body>
</html>`;
}

function detectType(folder) {
  if (folder === "11-chat-widget") {
    return "widget";
  }

  if (folder === "18-system") {
    return "system";
  }

  if (folder === "01-landing") {
    return "public";
  }

  return "dashboard";
}

function slugFromPath(relPath) {
  return relPath.replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "").toLowerCase();
}

function run() {
  const files = walk(HTML_ROOT).filter((file) => file.toLowerCase().endsWith(".html"));
  let updated = 0;

  for (const file of files) {
    const raw = fs.readFileSync(file, "utf8");
    if (!raw.includes(PLACEHOLDER_MARKER)) {
      continue;
    }

    const relPath = path.relative(HTML_ROOT, file).replace(/\\/g, "/");
    const parsed = parsePlaceholder(raw, relPath);

    const ctx = {
      ...parsed,
      relPath,
      pageRoles: pageRolesForFolder(parsed.folder),
      slug: slugFromPath(relPath)
    };

    const type = detectType(parsed.folder);
    let output = "";

    if (type === "widget") {
      output = widgetHtml(ctx);
    } else if (type === "system") {
      output = systemHtml(ctx, raw);
    } else if (type === "public") {
      output = publicHtml(ctx);
    } else {
      output = dashboardHtml(ctx);
    }

    fs.writeFileSync(file, output, "utf8");
    updated += 1;
    process.stdout.write(`updated ${relPath}\n`);
  }

  process.stdout.write(`done ${updated} placeholder pages updated\n`);
}

run();
