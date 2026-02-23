const fs = require("fs");
const path = require("path");

const HTML_ROOT = path.join(process.cwd(), "html");
const ASSETS_DIR = path.join(HTML_ROOT, "assets");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readDirFilesRecursive(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...readDirFilesRecursive(full));
      continue;
    }
    out.push(full);
  }
  return out;
}

function writeFileSafe(relPath, content) {
  const abs = path.join(HTML_ROOT, relPath);
  ensureDir(path.dirname(abs));
  let sanitized = String(content || "");
  sanitized = sanitized.replace(/\r?\n/g, "\n");
  if (/\.html$/i.test(relPath)) {
    sanitized = sanitized
      .replace(/>\s+</g, ">\n<")
      .replace(/\n{3,}/g, "\n\n");
  }
  fs.writeFileSync(abs, sanitized, "utf8");
}

function esc(input) {
  return String(input == null ? "" : input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(input) {
  return String(input || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const upper = word.toUpperCase();
      if (["API", "SLA", "CSAT", "KB", "IP", "URL"].includes(upper)) {
        return upper;
      }
      if (upper === "ORG") return "Org";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const TITLE_OVERRIDES = {
  "01-landing/01-landing.html": "QULAY CHAT",
  "02-auth/01-login.html": "Kirish",
  "02-auth/02-register.html": "Ro'yxatdan o'tish",
  "02-auth/03-email-verify.html": "Email Tasdiqlash",
  "02-auth/04-forgot-password.html": "Parolni Tiklash",
  "02-auth/05-welcome-first-login.html": "Xush Kelibsiz",
  "03-onboarding/01-welcome.html": "Onboarding Boshlanishi",
  "03-onboarding/02-onboarding-setup.html": "Boshlang'ich Sozlash",
  "03-onboarding/03-workspace.html": "Workspace Sozlash",
  "03-onboarding/04-widget-customize.html": "Widget Moslash",
  "03-onboarding/05-widget-install.html": "Widget O'rnatish",
  "03-onboarding/06-widget-verify.html": "Widget Tekshirish",
  "04-dashboard/01-dashboard.html": "Dashboard",
  "05-inbox/01-inbox-chat.html": "Inbox",
  "05-inbox/02-chat-open.html": "Chat Ochiq Holat",
  "05-inbox/03-info-sidebar.html": "Inbox Info Panel",
  "08-analytics/01-overview.html": "Analytics Overview",
  "08-analytics/02-response-times.html": "Response Times",
  "08-analytics/03-operators.html": "Operatorlar",
  "08-analytics/04-operator-detail.html": "Operator Profili",
  "08-analytics/05-sla.html": "SLA Monitoring",
  "08-analytics/06-channels.html": "Kanallar",
  "08-analytics/07-segments.html": "Segmentlar",
  "08-analytics/08-tags.html": "Tag Analytics",
  "08-analytics/09-custom-reports.html": "Custom Reports",
  "08-analytics/10-export.html": "Analytics Export",
  "08-analytics/11-my-stats.html": "Mening Statistikam",
  "09-settings/01-workspace.html": "Workspace Settings",
  "09-settings/02-widget-settings.html": "Widget Settings",
  "09-settings/03-security.html": "Security",
  "09-settings/04-notifications.html": "Notifications",
  "09-settings/05-profile.html": "Profile",
  "09-settings/06-privacy-export.html": "Privacy Export",
  "09-settings/07-privacy-delete.html": "Privacy Delete",
  "09-settings/08-privacy-settings.html": "Privacy Settings",
  "10-billing/01-plan.html": "Billing Plan",
  "10-billing/02-payment.html": "Payment Methods",
  "10-billing/03-invoices.html": "Invoices",
  "10-billing/04-usage.html": "Usage",
  "11-chat-widget/01-widget-launcher.html": "Widget Launcher",
  "11-chat-widget/02-widget-chat.html": "Widget Chat",
  "11-chat-widget/03-widget-offline.html": "Widget Offline",
  "11-chat-widget/04-widget-csat.html": "Widget CSAT",
  "11-chat-widget/05-widget-states.html": "Widget States",
  "12-contacts/01-contacts-list.html": "Kontaktlar",
  "12-contacts/02-contact-profile.html": "Kontakt Profili",
  "12-contacts/03-organizations.html": "Tashkilotlar",
  "12-contacts/04-org-detail.html": "Tashkilot Profili",
  "12-contacts/05-segments.html": "CRM Segmentlar",
  "12-contacts/06-import-export.html": "Import & Export",
  "13-visitors/01-visitors-list.html": "Online Visitors",
  "13-visitors/02-visitor-profile.html": "Visitor Profile",
  "13-visitors/03-visitors-map.html": "Visitors Map",
  "14-team-chat/01-team-chat.html": "Team Chat",
  "14-team-chat/02-room-settings.html": "Room Settings",
  "14-team-chat/03-notifications.html": "Team Chat Notifications",
  "15-knowledge-base/01-kb-dashboard.html": "Knowledge Base",
  "15-knowledge-base/02-article-editor.html": "Article Editor",
  "15-knowledge-base/03-categories.html": "KB Categories",
  "15-knowledge-base/04-kb-settings.html": "KB Settings",
  "15-knowledge-base/05-kb-analytics.html": "KB Analytics",
  "16-addons/01-addons-catalog.html": "Add-ons Catalog",
  "16-addons/02-active-addons.html": "Active Add-ons",
  "16-addons/03-addon-detail.html": "Add-on Detail",
  "16-addons/04-addon-settings.html": "Add-on Settings",
  "17-developer/01-api-keys.html": "API Keys",
  "17-developer/02-webhooks.html": "Webhooks",
  "17-developer/03-logs.html": "API Logs",
  "18-system/01-error-404.html": "404 - Sahifa Topilmadi",
  "18-system/02-error-500.html": "500 - Server Xatosi",
  "18-system/03-error-403.html": "403 - Ruxsat Yo'q",
  "18-system/04-maintenance.html": "Maintenance",
  "18-system/05-offline.html": "Offline",
};

const ACTIVE_NAV_BY_FOLDER = {
  "04-dashboard": "dashboard",
  "05-inbox": "inbox",
  "06-automation": "automation",
  "07-team": "team",
  "08-analytics": "analytics",
  "09-settings": "settings",
  "10-billing": "billing",
  "12-contacts": "contacts",
  "13-visitors": "visitors",
  "14-team-chat": "team-chat",
  "15-knowledge-base": "knowledge-base",
  "16-addons": "addons",
  "17-developer": "developer",
};

function prettyTitleFromRel(relPath) {
  if (TITLE_OVERRIDES[relPath]) return TITLE_OVERRIDES[relPath];
  const filename = path.basename(relPath, ".html");
  const withoutIndex = filename.replace(/^\d+-/, "");
  return titleCase(withoutIndex.replace(/-/g, " "));
}

function icon(name) {
  return `<i data-lucide="${esc(name)}"></i>`;
}

function initials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "CF";
  return parts.slice(0, 2).map((x) => x.charAt(0).toUpperCase()).join("");
}

function baseHead(options) {
  const title = options.title || "QULAY CHAT";
  const prefix = options.prefix || "..";
  const includeShell = !!options.includeShell;
  const robots = options.robots ? `\n  <meta name="robots" content="${esc(options.robots)}">` : "";
  return `  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>${robots}
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${prefix}/assets/qulay-chat-design-system.css">
  <script src="https://unpkg.com/lucide@latest" defer></script>${includeShell ? `\n  <script src="${prefix}/assets/qulay-chat-shell.js" defer></script>` : ""}
  <script src="${prefix}/assets/qulay-chat-runtime.js" defer></script>`;
}

function iconInitScript() {
  return `<script>window.addEventListener("DOMContentLoaded", function(){ if (window.lucide && window.lucide.createIcons) { window.lucide.createIcons(); } });</script>`;
}

function shellPage({ title, activeNav, content, bodyClass = "", pageAttrs = "" }) {
  const attrs = [activeNav ? `data-active-nav="${esc(activeNav)}"` : "", pageAttrs].filter(Boolean).join(" ");
  return `<!doctype html>
<html lang="uz">
<head>
${baseHead({ title: `QULAY CHAT - ${title}`, includeShell: true })}
</head>
<body ${attrs} class="${["dashboard-shell-page", bodyClass].filter(Boolean).join(" ")}">
  <main class="app-content">
${content}
  </main>
  ${iconInitScript()}
</body>
</html>`;
}

function standalonePage({ title, prefix = "..", bodyClass = "", content, robots = "" }) {
  return `<!doctype html>
<html lang="uz">
<head>
${baseHead({ title, prefix, includeShell: false, robots })}
</head>
<body class="${bodyClass}">
${content}
  ${iconInitScript()}
</body>
</html>`;
}

function pageHeader(title, subtitle, actions = "") {
  return `    <div class="page-header">
      <div>
        <h1>${esc(title)}</h1>
        <p class="text-muted">${esc(subtitle)}</p>
      </div>
      ${actions ? `<div class="page-header-actions">${actions}</div>` : ""}
    </div>`;
}

function btn(label, variant = "secondary", attrs = "") {
  const cls = `btn btn-${variant}`;
  const rawAttrs = String(attrs || "");
  const needsFallback =
    !/data-action=|data-modal-open=|data-modal-close=|data-role-switch=|data-tab-group=|data-nav=/.test(rawAttrs) &&
    !/type\s*=\s*["']submit["']/.test(rawAttrs);
  const withFallback = needsFallback ? `data-action="log" data-message="${esc(String(label || "Amal bajarildi"))}" ${rawAttrs}` : rawAttrs;
  return `<button type="button" class="${cls}" ${withFallback}>${label}</button>`;
}

function linkBtn(label, href, variant = "secondary", attrs = "") {
  const cls = `btn btn-${variant}`;
  return `<a class="${cls}" href="${esc(href)}" ${attrs}>${label}</a>`;
}

function badge(text, variant = "") {
  const raw = String(variant || "").trim();
  const cls = !raw ? "" : (raw.startsWith("badge-") || raw.includes(" ")) ? raw : `badge-${raw}`;
  return `<span class="badge${cls ? ` ${cls}` : ""}">${esc(text)}</span>`;
}

function metricGrid(items) {
  return `    <div class="metrics-grid">
${items.map((item) => `      <div class="metric-card">
        <div class="metric-label">${esc(item.label)}</div>
        <div class="metric-value">${item.value}</div>
        <div class="metric-trend ${item.trendClass || ""}">${item.trend || ""}</div>
      </div>`).join("\n")}
    </div>`;
}

function card(title, body, options = {}) {
  const cls = ["card", options.className || ""].join(" ").trim();
  const desc = options.description ? `<p class="text-muted card-description">${esc(options.description)}</p>` : "";
  const headActions = options.actions ? `<div class="card-actions">${options.actions}</div>` : "";
  return `    <section class="${cls}">
      <div class="card-header">
        <div>
          <h3>${esc(title)}</h3>
          ${desc}
        </div>
        ${headActions}
      </div>
      <div class="card-body">
${body}
      </div>
    </section>`;
}

function simpleTable(columns, rows, options = {}) {
  const tableClass = ["table", options.className || ""].join(" ").trim();
  return `<div class="table-wrap">
  <table class="${tableClass}">
    <thead>
      <tr class="table-header">
        ${columns.map((c) => `<th>${esc(c)}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${rows.map((row) => `<tr class="table-row">${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
    </tbody>
  </table>
</div>`;
}

function subnavLinks(items, currentHref) {
  if (!items || !items.length) return "";
  return `    <div class="subnav-scroll">
      <div class="subnav-tabs">
        ${items.map((item) => `<a class="subnav-tab ${item.href === currentHref ? "active" : ""}" href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}
      </div>
    </div>`;
}

function formField(labelText, controlHtml, hint) {
  return `<label class="form-field">
    <span class="form-label">${esc(labelText)}</span>
    ${controlHtml}
    ${hint ? `<small class="text-muted">${esc(hint)}</small>` : ""}
  </label>`;
}

function input(value = "", placeholder = "") {
  return `<input class="input" type="text" value="${esc(value)}" placeholder="${esc(placeholder)}">`;
}

function select(options, selected) {
  return `<select class="select">${options.map((opt) => `<option ${opt === selected ? "selected" : ""}>${esc(opt)}</option>`).join("")}</select>`;
}

function textarea(value = "", placeholder = "", rows = 3) {
  return `<textarea class="textarea" rows="${rows}" placeholder="${esc(placeholder)}">${esc(value)}</textarea>`;
}

function toggle(checked, labelText = "") {
  return `<label class="toggle-switch ${labelText ? "with-label" : ""}">
    <input type="checkbox" ${checked ? "checked" : ""}>
    <span class="toggle-track"><span class="toggle-thumb"></span></span>
    ${labelText ? `<span class="toggle-text">${esc(labelText)}</span>` : ""}
  </label>`;
}

function avatar(name, sizeClass = "") {
  return `<span class="avatar ${sizeClass}">${esc(initials(name))}</span>`;
}

function progressBar(percent, variant = "primary") {
  const safe = Math.max(0, Math.min(100, Number(percent) || 0));
  return `<div class="progress"><div class="progress-bar ${variant}" style="width:${safe}%"></div></div>`;
}

function codeBlock(code, copySelectorId) {
  const id = copySelectorId || `code-${slugify(code).slice(0, 12)}`;
  return `<div class="code-block-wrap">
    <button class="btn btn-ghost btn-sm" type="button" data-action="copy" data-target="#${id}">${icon("copy")} Nusxalash</button>
    <pre class="code-block" id="${id}"><code>${esc(code)}</code></pre>
  </div>`;
}

function fakeLineChart() {
  return `<div class="chart-placeholder line">
    <div class="chart-gridlines"></div>
    <svg viewBox="0 0 600 240" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(79,70,229,0.24)"></stop>
          <stop offset="100%" stop-color="rgba(79,70,229,0.02)"></stop>
        </linearGradient>
      </defs>
      <path d="M0,180 C60,130 90,160 140,120 C190,80 230,100 280,90 C330,80 360,130 410,110 C460,90 500,30 600,45 L600,240 L0,240 Z" fill="url(#chartFill)"></path>
      <path d="M0,180 C60,130 90,160 140,120 C190,80 230,100 280,90 C330,80 360,130 410,110 C460,90 500,30 600,45" fill="none" stroke="#4F46E5" stroke-width="3" stroke-linecap="round"></path>
    </svg>
  </div>`;
}

function fakeBars(count = 7, labels) {
  const bars = Array.from({ length: count }, (_, i) => {
    const h = [36, 54, 42, 68, 49, 74, 58, 62, 44, 66][i % 10];
    const label = labels && labels[i] ? labels[i] : `0${i + 1}`;
    return `<div class="mini-bar-col"><div class="mini-bar" style="height:${h}px"></div><span>${esc(label)}</span></div>`;
  });
  return `<div class="mini-bars">${bars.join("")}</div>`;
}

function fakeDonut(legend) {
  const items = legend || [
    { label: "Web", color: "#4F46E5", value: "54%" },
    { label: "Telegram", color: "#10B981", value: "21%" },
    { label: "Email", color: "#F59E0B", value: "15%" },
    { label: "Instagram", color: "#EF4444", value: "10%" }
  ];
  return `<div class="donut-wrap">
    <div class="donut-chart" aria-hidden="true"></div>
    <div class="donut-legend">
      ${items.map((it) => `<div class="legend-row"><span><i class="legend-dot" style="background:${it.color}"></i>${esc(it.label)}</span><strong>${esc(it.value)}</strong></div>`).join("")}
    </div>
  </div>`;
}

function keyValueList(items) {
  return `<div class="kv-list">
    ${items.map((item) => `<div class="kv-row"><span>${esc(item.key)}</span><strong>${item.value}</strong></div>`).join("")}
  </div>`;
}

function folderFilesMap() {
  const htmlFiles = readDirFilesRecursive(HTML_ROOT)
    .filter((file) => file.toLowerCase().endsWith(".html"))
    .map((file) => path.relative(HTML_ROOT, file).replace(/\\/g, "/"))
    .filter((rel) => rel !== "index.html");

  const byFolder = {};
  for (const rel of htmlFiles) {
    const [folder, file] = rel.split("/");
    if (!folder || !file) continue;
    if (!byFolder[folder]) byFolder[folder] = [];
    byFolder[folder].push({ rel, file, href: `./${file}`, label: prettyTitleFromRel(rel) });
  }
  Object.keys(byFolder).forEach((folder) => {
    byFolder[folder].sort((a, b) => a.file.localeCompare(b.file));
  });
  return byFolder;
}

function moduleLabel(folder) {
  const map = {
    "04-dashboard": "Dashboard",
    "05-inbox": "Inbox",
    "06-automation": "Automation",
    "07-team": "Team",
    "08-analytics": "Analytics",
    "09-settings": "Settings",
    "10-billing": "Billing",
    "12-contacts": "Contacts",
    "13-visitors": "Visitors",
    "14-team-chat": "Team Chat",
    "15-knowledge-base": "Knowledge Base",
    "16-addons": "Add-ons",
    "17-developer": "Developer"
  };
  return map[folder] || folder;
}

function designSystemCss() {
  return CSS_CHUNKS.join("");
}

function shellJs() {
  return SHELL_SOURCE;
}

function runtimeJs() {
  return RUNTIME_SOURCE;
}

const CSS_CHUNKS = [];
let SHELL_SOURCE = "";
let RUNTIME_SOURCE = "";

CSS_CHUNKS.push(`:root{--primary:#4F46E5;--primary-hover:#4338CA;--primary-light:#EEF2FF;--primary-50:#E0E7FF;--gray-50:#F9FAFB;--gray-100:#F3F4F6;--gray-200:#E5E7EB;--gray-300:#D1D5DB;--gray-400:#9CA3AF;--gray-500:#6B7280;--gray-600:#4B5563;--gray-700:#374151;--gray-800:#1F2937;--gray-900:#111827;--success:#10B981;--success-light:#ECFDF5;--danger:#EF4444;--danger-light:#FEF2F2;--warning:#F59E0B;--warning-light:#FFFBEB;--info:#3B82F6;--info-light:#EFF6FF;--bg:#F9FAFB;--surface:#FFF;--border:#E5E7EB;--border-strong:#D1D5DB;--shadow-sm:0 1px 2px rgba(0,0,0,.05);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--header-height:64px;--sidebar-width:260px}
*,*:before,*:after{box-sizing:border-box}html,body{margin:0;padding:0}body{min-height:100vh;background:var(--bg);color:var(--gray-900);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.5}img,svg{display:block;max-width:100%}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit;color:inherit}button{background:none;border:none;cursor:pointer}h1,h2,h3,h4,h5,h6,p{margin:0}h1{font-size:24px;line-height:1.2;font-weight:600}h2{font-size:20px;line-height:1.2;font-weight:600}h3{font-size:16px;line-height:1.2;font-weight:600}small{font-size:12px;color:var(--gray-500)}
.text-center{text-align:center}.text-right{text-align:right}.text-muted{color:var(--gray-500)}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.hidden{display:none!important}.w-full{width:100%}.flex{display:flex}.grid{display:grid}.gap-1{gap:4px}.gap-2{gap:8px}.gap-3{gap:12px}.gap-4{gap:16px}.gap-5{gap:20px}.gap-6{gap:24px}.divider{height:1px;background:var(--border);margin:12px 0}
.btn{height:40px;padding:0 14px;border-radius:10px;border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:14px;font-weight:500;transition:all 150ms ease;white-space:nowrap}.btn:hover{transform:translateY(-1px)}.btn:active{transform:scale(.98)}.btn:focus-visible{outline:2px solid rgba(79,70,229,.35);outline-offset:2px}.btn[disabled]{opacity:.55;pointer-events:none}.btn-sm{height:34px;padding:0 12px;font-size:13px;border-radius:8px}.btn-lg{height:46px;padding:0 18px;border-radius:12px}.btn-primary{background:var(--primary);color:#fff;box-shadow:var(--shadow-sm)}.btn-primary:hover{background:var(--primary-hover);box-shadow:var(--shadow-md)}.btn-secondary{background:var(--surface);border-color:var(--border);color:var(--gray-700)}.btn-secondary:hover{background:var(--gray-50)}.btn-ghost{background:transparent;color:var(--gray-700)}.btn-ghost:hover{background:var(--gray-100)}.btn-danger{background:var(--danger);color:#fff}
.input,.select,.textarea{width:100%;border:1px solid var(--border-strong);background:var(--surface);border-radius:10px;transition:border-color 150ms ease,box-shadow 150ms ease}.input,.select{height:42px;padding:0 12px}.textarea{padding:10px 12px;min-height:92px;resize:vertical}.input::placeholder,.textarea::placeholder{color:var(--gray-400)}.input:focus,.select:focus,.textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px rgba(79,70,229,.1)}.input-group{display:flex;align-items:center;gap:8px;border:1px solid var(--border-strong);border-radius:10px;background:#fff;padding:0 10px}.input-group:focus-within{border-color:var(--primary);box-shadow:0 0 0 3px rgba(79,70,229,.1)}.input-group .input{border:none;background:transparent;box-shadow:none;height:40px;padding:0}.input-group i[data-lucide]{width:16px;height:16px;color:var(--gray-400);flex-shrink:0}
.checkbox{display:inline-flex;align-items:center;gap:10px;font-size:14px;color:var(--gray-700)}.checkbox input{width:16px;height:16px;margin:0;accent-color:var(--primary)}.toggle-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer}.toggle-switch input{position:absolute;opacity:0;width:1px;height:1px}.toggle-track{width:42px;height:24px;border-radius:999px;background:var(--gray-300);padding:2px;display:inline-flex;align-items:center;transition:background-color 150ms ease}.toggle-thumb{width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.18);transform:translateX(0);transition:transform 150ms ease}.toggle-switch input:checked + .toggle-track{background:var(--primary)}.toggle-switch input:checked + .toggle-track .toggle-thumb{transform:translateX(18px)}.toggle-text{font-size:14px;color:var(--gray-700)}
.badge{display:inline-flex;align-items:center;justify-content:center;min-height:20px;padding:0 8px;border-radius:999px;background:var(--gray-100);color:var(--gray-700);font-size:11px;font-weight:600}.badge-success{background:var(--success-light);color:#047857}.badge-danger{background:var(--danger-light);color:#B91C1C}.badge-warning{background:var(--warning-light);color:#B45309}.badge-info{background:var(--info-light);color:#1D4ED8}.badge-primary{background:var(--primary-light);color:var(--primary)}
.avatar{width:32px;height:32px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:var(--primary-light);color:var(--primary);font-size:12px;font-weight:700;flex-shrink:0}.avatar-sm{width:24px;height:24px;font-size:10px}.avatar-lg{width:48px;height:48px;font-size:16px}.avatar-xl{width:72px;height:72px;font-size:22px}.avatar-xxl{width:96px;height:96px;font-size:30px}.status-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--gray-300);flex-shrink:0}.status-dot.online{background:var(--success)}.status-dot.away{background:var(--warning)}.status-dot.offline{background:var(--gray-400)}.status-dot.busy{background:var(--danger)}
.alert{border-radius:12px;border:1px solid var(--border);background:#fff;padding:12px 14px;display:flex;align-items:flex-start;gap:10px;font-size:13px}.alert i[data-lucide]{width:16px;height:16px;flex-shrink:0;margin-top:1px}.alert-success{background:var(--success-light);border-color:#A7F3D0;color:#065F46}.alert-danger{background:var(--danger-light);border-color:#FECACA;color:#991B1B}.alert-info{background:var(--info-light);border-color:#BFDBFE;color:#1E40AF}
.card{background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-sm);overflow:hidden}.card-header{padding:16px 18px 0;display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.card-header h3{font-size:16px}.card-header .card-description{font-size:13px;color:var(--gray-500);margin-top:4px}.card-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.card-body{padding:16px 18px 18px}
.metrics-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.metric-card{background:#fff;border:1px solid var(--border);border-radius:12px;padding:16px;display:grid;gap:6px;box-shadow:var(--shadow-sm)}.metric-label{font-size:13px;color:var(--gray-500)}.metric-value{font-size:28px;line-height:1.1;font-weight:700}.metric-trend{font-size:12px;font-weight:600;color:var(--success)}.metric-trend.down{color:var(--danger)}.metric-trend.warn{color:#B45309}
.table-wrap{overflow:auto;border:1px solid var(--border);border-radius:12px}.table{width:100%;border-collapse:separate;border-spacing:0;font-size:13px;background:#fff}.table-header th,.table thead th{text-align:left;padding:12px 14px;font-size:12px;font-weight:600;color:var(--gray-500);text-transform:uppercase;letter-spacing:.04em;background:var(--gray-50);border-bottom:1px solid var(--border);white-space:nowrap}.table td{padding:12px 14px;border-bottom:1px solid var(--gray-100);color:var(--gray-700);vertical-align:top}.table-row:last-child td,.table tbody tr:last-child td{border-bottom:none}.table tbody tr:hover{background:var(--gray-50)}
.tab-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap;border-bottom:1px solid var(--border)}.tab{display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 12px;border-radius:10px 10px 0 0;color:var(--gray-500);font-size:14px;font-weight:500;border-bottom:2px solid transparent;transition:all 150ms ease}.tab:hover{background:rgba(243,244,246,.65);color:var(--gray-700)}.tab.active{color:var(--primary);border-bottom-color:var(--primary)}.pill-tabs{display:flex;gap:8px;flex-wrap:wrap}.pill-tabs .tab{height:34px;padding:0 12px;border-radius:8px;border-bottom:none;background:transparent}.pill-tabs .tab.active{background:var(--primary-light);color:var(--primary)}
.modal-overlay{position:fixed;inset:0;background:rgba(17,24,39,.45);display:none;align-items:center;justify-content:center;padding:16px;z-index:90}.modal-overlay.is-open{display:flex}.modal{width:min(560px,100%);background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow-lg);overflow:hidden}.modal-header,.modal-footer{padding:14px 16px;background:#fff}.modal-header{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--border)}.modal-body{padding:16px}.modal-footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;border-top:1px solid var(--border)}
.progress{height:8px;border-radius:999px;background:var(--gray-100);overflow:hidden}.progress-bar{height:100%;background:var(--primary)}.progress-bar.success{background:var(--success)}.progress-bar.warning{background:var(--warning)}.progress-bar.danger{background:var(--danger)}
.app-shell{min-height:100vh}.app-header{position:sticky;top:0;z-index:50;height:var(--header-height);background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 18px}.app-header-left,.app-header-right{display:flex;align-items:center;gap:10px}.shell-brand{display:inline-flex;align-items:center;gap:10px;font-weight:700;color:var(--gray-900)}.shell-brand-mark{width:28px;height:28px;border-radius:9px;background:linear-gradient(135deg,var(--primary),#7C3AED);display:grid;place-items:center;color:#fff;font-size:12px;font-weight:700;box-shadow:var(--shadow-sm)}
.shell-search{width:min(520px,46vw);height:40px;border-radius:10px;background:var(--gray-100);border:1px solid transparent;padding:0 12px;display:flex;align-items:center;gap:8px}.shell-search:focus-within{background:#fff;border-color:#C7D2FE;box-shadow:0 0 0 3px rgba(79,70,229,.1)}.shell-search i[data-lucide]{width:16px;height:16px;color:var(--gray-400)}.shell-search input{border:none;background:transparent;outline:none;height:36px;flex:1;min-width:0}.shell-search input::placeholder{color:var(--gray-500)}.shell-search kbd{padding:2px 6px;border-radius:6px;border:1px solid var(--border);background:#fff;font-size:11px;color:var(--gray-500);font-weight:600}
.icon-btn{width:36px;height:36px;border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:var(--gray-500);transition:all 150ms ease;position:relative}.icon-btn:hover{background:var(--gray-100);color:var(--gray-700)}.icon-btn i[data-lucide]{width:18px;height:18px}.icon-badge{position:absolute;top:3px;right:3px;min-width:16px;height:16px;border-radius:999px;background:var(--danger);color:#fff;padding:0 4px;font-size:10px;font-weight:700;display:grid;place-items:center}.status-pill{height:32px;border-radius:999px;border:1px solid #A7F3D0;background:var(--success-light);color:#047857;padding:0 10px;font-size:12px;font-weight:600;display:inline-flex;align-items:center;gap:6px}.status-pill .status-dot{width:7px;height:7px}
.header-dropdown{position:relative}.header-dropdown>summary{list-style:none;display:flex;align-items:center;gap:8px;padding:4px 8px;border-radius:10px;cursor:pointer}.header-dropdown>summary::-webkit-details-marker{display:none}.header-dropdown[open]>summary{background:var(--gray-100)}.dropdown-menu{position:absolute;right:0;top:calc(100% + 8px);min-width:240px;background:#fff;border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-lg);padding:8px;display:grid;gap:4px;z-index:70}.dropdown-item{height:38px;border-radius:8px;padding:0 10px;display:flex;align-items:center;gap:8px;color:var(--gray-700);font-size:14px}.dropdown-item:hover{background:var(--gray-100)}.dropdown-item.danger{color:#B91C1C}.dropdown-item i[data-lucide]{width:16px;height:16px;color:var(--gray-500)}
.role-switch{display:grid;gap:6px;margin-top:6px;padding-top:8px;border-top:1px solid var(--gray-100)}.role-switch label{font-size:11px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em}.role-switch-buttons{display:flex;gap:6px}.role-switch-buttons button{flex:1;height:30px;border-radius:8px;border:1px solid var(--border);background:#fff;font-size:12px;color:var(--gray-600)}.role-switch-buttons button.is-active{background:var(--primary-light);border-color:#C7D2FE;color:var(--primary);font-weight:600}
.app-layout{display:grid;grid-template-columns:var(--sidebar-width) minmax(0,1fr);min-height:calc(100vh - var(--header-height))}.app-sidebar{position:sticky;top:var(--header-height);height:calc(100vh - var(--header-height));overflow:auto;border-right:1px solid var(--border);background:#fff;padding:14px 12px}.app-main{min-width:0}.app-content{padding:20px 20px 28px;display:grid;gap:16px}.nav-section-label{font-size:11px;font-weight:600;color:var(--gray-400);text-transform:uppercase;letter-spacing:.08em;padding:10px 10px 6px}.nav-link{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:40px;padding:8px 12px;border-radius:9px;color:var(--gray-600);font-size:14px;font-weight:500;border-left:3px solid transparent;transition:all 150ms ease}.nav-link:hover{background:var(--gray-100);color:var(--gray-800)}.nav-link .nav-left{display:flex;align-items:center;gap:10px;min-width:0}.nav-link i[data-lucide]{width:18px;height:18px;color:var(--gray-500)}.nav-link.active{background:var(--primary-light);color:var(--primary);font-weight:600;border-left-color:var(--primary)}.nav-link.active i[data-lucide]{color:var(--primary)}.sidebar-footer{margin-top:12px;padding-top:12px;border-top:1px solid var(--gray-100)}.sidebar-user{display:flex;align-items:center;gap:10px;padding:8px;border-radius:10px;background:var(--gray-50);border:1px solid var(--gray-100)}.sidebar-user-meta{display:grid;gap:2px}.sidebar-user-meta strong{font-size:13px}.sidebar-user-meta span{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--gray-500)}
`);

CSS_CHUNKS.push(`.page-header{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap}.page-header p{margin-top:4px;font-size:14px;color:var(--gray-500)}.page-header-actions{display:flex;gap:8px;flex-wrap:wrap}.stack{display:grid;gap:16px}.two-col{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.three-col{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.four-col{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.split-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:16px}
.subnav-scroll{overflow:auto}.subnav-tabs{display:flex;gap:8px;min-width:max-content}.subnav-tab{height:34px;padding:0 12px;border-radius:9px;border:1px solid var(--border);background:#fff;color:var(--gray-600);display:inline-flex;align-items:center;font-size:13px;font-weight:500}.subnav-tab:hover{background:var(--gray-50)}.subnav-tab.active{background:var(--primary-light);border-color:#C7D2FE;color:var(--primary)}
.chart-placeholder{position:relative;height:240px;border:1px dashed #C7D2FE;border-radius:12px;background:linear-gradient(180deg,#fff,#F8FAFF);overflow:hidden}.chart-placeholder.compact{height:180px}.chart-gridlines{position:absolute;inset:0;opacity:.55;background:repeating-linear-gradient(to top,transparent,transparent 39px,#EEF2FF 40px),repeating-linear-gradient(to right,transparent,transparent 59px,#F3F4F6 60px)}.chart-placeholder svg{position:absolute;inset:0;width:100%;height:100%}
.mini-bars{height:180px;border:1px dashed var(--border);border-radius:12px;background:linear-gradient(180deg,#fff,#F8FBFF);padding:12px;display:flex;align-items:flex-end;justify-content:space-between;gap:10px}.mini-bar-col{display:grid;justify-items:center;gap:8px;flex:1;min-width:0}.mini-bar{width:100%;max-width:28px;border-radius:8px 8px 5px 5px;background:linear-gradient(180deg,#818CF8,#4F46E5)}.mini-bar-col span{font-size:11px;color:var(--gray-500)}
.donut-wrap{display:grid;grid-template-columns:140px 1fr;gap:16px;align-items:center}.donut-chart{width:140px;height:140px;border-radius:50%;background:conic-gradient(#4F46E5 0 54%,#10B981 54% 75%,#F59E0B 75% 90%,#EF4444 90% 100%);position:relative;margin:auto}.donut-chart:after{content:'';position:absolute;inset:18px;background:#fff;border-radius:50%;box-shadow:inset 0 0 0 1px var(--border)}.donut-legend{display:grid;gap:8px}.legend-row{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:13px;color:var(--gray-600)}.legend-row span{display:flex;align-items:center;gap:8px}.legend-dot{width:8px;height:8px;border-radius:50%;display:inline-block}
.list-stack{display:grid;gap:10px}.list-item{border:1px solid var(--border);border-radius:10px;background:#fff;padding:12px;display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.list-item .item-main{min-width:0;display:grid;gap:4px}.item-title{font-size:14px;font-weight:600}.item-sub{font-size:13px;color:var(--gray-500)}.kv-list{display:grid;gap:8px}.kv-row{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 10px;border-radius:8px;background:var(--gray-50);border:1px solid var(--gray-100);font-size:13px}.kv-row span{color:var(--gray-500)}.kv-row strong{font-size:13px;font-weight:600;color:var(--gray-800)}
.timeline{display:grid;gap:12px}.timeline-item{display:grid;grid-template-columns:16px 1fr;gap:10px;align-items:start}.timeline-dot{width:10px;height:10px;border-radius:50%;background:var(--primary);margin-top:4px;box-shadow:0 0 0 4px rgba(79,70,229,.12)}.timeline-card{border:1px solid var(--border);border-radius:10px;background:#fff;padding:10px 12px;display:grid;gap:4px}.timeline-time{font-size:12px;color:var(--gray-400)}
.stat-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.stat-chip{border:1px solid var(--border);border-radius:10px;background:var(--gray-50);padding:10px 12px;display:grid;gap:4px}.stat-chip strong{font-size:18px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.form-grid.one{grid-template-columns:1fr}.form-grid.three{grid-template-columns:repeat(3,minmax(0,1fr))}.form-field{display:grid;gap:6px}.form-label{font-size:13px;font-weight:500;color:var(--gray-700)}.form-row{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid var(--gray-100)}.form-row:last-child{border-bottom:none;padding-bottom:0}.row-copy{max-width:460px}
.code-block-wrap{display:grid;gap:8px}.code-block{margin:0;background:var(--gray-900);color:var(--gray-100);border-radius:12px;border:1px solid #111827;padding:14px;overflow:auto;line-height:1.45;font-size:12px}.dropzone{border:2px dashed var(--border-strong);border-radius:14px;padding:22px;background:linear-gradient(180deg,#fff,#FAFBFF);display:grid;place-items:center;text-align:center;gap:8px;color:var(--gray-500)}.dropzone:hover{border-color:#C7D2FE}.dropzone i[data-lucide]{width:28px;height:28px;color:var(--primary)}
.tag-cloud{display:flex;flex-wrap:wrap;gap:8px}.tag-cloud .badge{height:28px;padding:0 10px;font-size:12px}.kanban{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.kanban-col{background:var(--gray-50);border:1px solid var(--border);border-radius:12px;padding:12px;display:grid;gap:10px;align-content:start}.kanban-col h4{font-size:14px}.kanban-card{background:#fff;border:1px solid var(--border);border-radius:10px;padding:10px;display:grid;gap:6px;box-shadow:var(--shadow-sm)}.editor-shell{display:grid;gap:12px}.editor-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px;border:1px solid var(--border);border-radius:12px;background:#fff}.editor-canvas{min-height:320px;border:1px solid var(--border);border-radius:12px;background:#fff;padding:18px}.placeholder-line{height:10px;border-radius:999px;background:var(--gray-100);margin-bottom:10px}
.world-map{height:360px;border:1px solid var(--border);border-radius:12px;background:linear-gradient(180deg,#fff,#F8FBFF);position:relative;overflow:hidden}.world-map svg{position:absolute;inset:0;width:100%;height:100%;opacity:.6}.map-marker{position:absolute;width:12px;height:12px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 6px rgba(79,70,229,.12);animation:pulseMarker 2s infinite}
.empty-state{border:1px dashed var(--border-strong);border-radius:12px;background:linear-gradient(180deg,#fff,#FCFCFF);padding:24px;text-align:center;color:var(--gray-500);display:grid;gap:8px;place-items:center}.empty-state i[data-lucide]{width:28px;height:28px;color:var(--gray-400)}
`);

CSS_CHUNKS.push(`.marketing-page{background:radial-gradient(circle at 10% 10%,rgba(79,70,229,.12),transparent 30%),radial-gradient(circle at 90% 0,rgba(59,130,246,.08),transparent 28%),var(--bg)}.marketing-shell{min-height:100vh}.marketing-header{position:sticky;top:0;z-index:40;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 24px;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);border-bottom:1px solid rgba(229,231,235,.8)}.marketing-nav{display:flex;gap:18px;color:var(--gray-600);font-size:14px}.marketing-nav a:hover{color:var(--gray-900)}.marketing-main{width:min(1200px,calc(100% - 32px));margin:0 auto;padding:24px 0 48px;display:grid;gap:24px}.hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:20px;align-items:center}.hero-panel{background:#fff;border:1px solid var(--border);border-radius:20px;padding:28px;box-shadow:var(--shadow-sm)}.hero-panel h1{font-size:clamp(32px,4vw,52px);line-height:1.08;font-weight:700;letter-spacing:-.02em}.hero-panel .lead{font-size:16px;color:var(--gray-500);margin-top:14px;max-width:54ch}.hero-cta{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}.hero-proof{display:flex;gap:14px;flex-wrap:wrap;margin-top:16px;color:var(--gray-500);font-size:13px}.hero-visual{border:1px solid var(--border);border-radius:20px;background:linear-gradient(180deg,#fff,#F7F9FF);padding:16px;box-shadow:var(--shadow-md)}
.mock-window{border:1px solid var(--border);border-radius:14px;background:#fff;box-shadow:var(--shadow-sm);overflow:hidden}.mock-window-head{padding:10px 12px;border-bottom:1px solid var(--border);display:flex;gap:8px}.mock-window-head span{width:8px;height:8px;border-radius:50%;background:var(--gray-300)}.mock-window-body{display:grid;grid-template-columns:180px 1fr;min-height:270px}.mock-side{border-right:1px solid var(--border);padding:10px;background:var(--gray-50);display:grid;gap:8px;align-content:start}.mock-side div{height:28px;border-radius:8px;background:#fff;border:1px solid var(--gray-100)}.mock-content{padding:12px;display:grid;gap:10px}.mock-metric-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.mock-metric-grid div{height:56px;border-radius:10px;border:1px solid var(--border);background:#fff}.mock-chart{height:120px;border-radius:12px;border:1px dashed #C7D2FE;background:linear-gradient(180deg,#fff,#F8FAFF)}
.trust-bar{display:grid;grid-template-columns:240px 1fr;gap:14px;align-items:center;background:#fff;border:1px solid var(--border);border-radius:16px;padding:14px 18px}.logo-strip{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}.logo-pill{height:42px;border:1px dashed var(--border-strong);border-radius:10px;display:grid;place-items:center;color:var(--gray-400);font-size:12px}.feature-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}.feature-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:16px;display:grid;gap:10px;box-shadow:var(--shadow-sm)}.feature-icon{width:38px;height:38px;border-radius:12px;background:var(--primary-light);color:var(--primary);display:grid;place-items:center}.feature-icon i[data-lucide]{width:18px;height:18px}.pricing-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.pricing-card{background:#fff;border:1px solid var(--border);border-radius:18px;padding:18px;display:grid;gap:12px}.pricing-card.featured{border-color:#C7D2FE;box-shadow:0 0 0 1px #C7D2FE,var(--shadow-md)}.pricing-price{font-size:30px;font-weight:700}.pricing-list{display:grid;gap:8px;font-size:13px;color:var(--gray-600)}.pricing-list li{list-style:none;display:flex;align-items:center;gap:8px}.pricing-list li i[data-lucide]{width:14px;height:14px;color:var(--success)}.cta-banner{border-radius:20px;padding:24px;background:linear-gradient(135deg,#4F46E5,#6366F1);color:#fff;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.marketing-footer{border-top:1px solid var(--border);padding:20px 24px;color:var(--gray-500);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap}
.auth-page{min-height:100vh;background:radial-gradient(circle at 20% 10%,rgba(79,70,229,.18),transparent 28%),radial-gradient(circle at 100% 20%,rgba(59,130,246,.12),transparent 25%),linear-gradient(180deg,#F8FAFF,#F9FAFB);display:grid;place-items:center;padding:18px}.auth-card{width:min(420px,100%);background:#fff;border:1px solid var(--border);border-radius:16px;box-shadow:var(--shadow-lg);padding:22px;display:grid;gap:16px}.auth-logo{display:flex;justify-content:center;align-items:center;gap:10px;font-weight:700}.auth-title{text-align:center}.auth-title h1{font-size:22px}.auth-title p{font-size:14px;color:var(--gray-500);margin-top:6px}.auth-form{display:grid;gap:12px}.auth-divider{display:flex;align-items:center;gap:10px;color:var(--gray-400);font-size:12px}.auth-divider:before,.auth-divider:after{content:'';height:1px;background:var(--border);flex:1}.auth-footer{text-align:center;font-size:13px;color:var(--gray-500)}
.onboarding-page{min-height:100vh;padding:18px;background:radial-gradient(circle at 15% 10%,rgba(79,70,229,.12),transparent 32%),var(--bg)}.onboarding-shell{width:min(860px,100%);margin:0 auto;display:grid;gap:16px}.onboarding-top{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center}.onboarding-progress{background:#fff;border:1px solid var(--border);border-radius:16px;padding:14px 16px;display:grid;gap:10px}.step-dots{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}.step-dots span{height:8px;border-radius:999px;background:var(--gray-200)}.step-dots span.active{background:var(--primary)}.step-dots span.done{background:#A5B4FC}.onboarding-card{background:#fff;border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow-md);padding:22px;display:grid;gap:18px}.onboarding-actions{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}.preset-colors{display:flex;gap:8px;flex-wrap:wrap}.color-swatch{width:28px;height:28px;border-radius:50%;border:2px solid transparent;box-shadow:0 0 0 1px var(--border) inset}.color-swatch.active{border-color:#111827}.widget-mini-preview{border:1px solid var(--border);border-radius:14px;background:linear-gradient(180deg,#fff,#F8FAFF);padding:12px;display:grid;gap:10px}.widget-mini-window{margin-left:auto;width:260px;border-radius:14px;border:1px solid var(--border);overflow:hidden;background:#fff;box-shadow:var(--shadow-md)}.widget-mini-head{height:48px;padding:0 12px;background:linear-gradient(180deg,#4F46E5,#6366F1);color:#fff;display:flex;align-items:center;justify-content:space-between}.widget-mini-body{padding:10px;display:grid;gap:8px}
`);

CSS_CHUNKS.push(`.inbox-layout{display:grid;grid-template-columns:340px minmax(0,1fr) 300px;gap:16px;min-height:calc(100vh - var(--header-height) - 112px)}.inbox-panel{background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow-sm);overflow:hidden;min-width:0}.inbox-list-top{padding:14px;border-bottom:1px solid var(--border);display:grid;gap:10px}.inbox-list-scroll{max-height:calc(100vh - 260px);overflow:auto}.inbox-tabs{display:flex;gap:6px;flex-wrap:wrap}.inbox-tabs .tab{height:32px;border-radius:8px;padding:0 10px;border-bottom:none;font-size:13px}
.inbox-chat-item{display:grid;grid-template-columns:auto 1fr auto;gap:10px;padding:12px 14px;border-bottom:1px solid var(--gray-100);align-items:start;cursor:pointer;transition:background-color 150ms ease,border-color 150ms ease;border-left:3px solid transparent}.inbox-chat-item:hover{background:var(--gray-50)}.inbox-chat-item.active{background:var(--primary-light);border-left-color:var(--primary)}.inbox-chat-item:last-child{border-bottom:none}.inbox-chat-main{min-width:0;display:grid;gap:4px}.name-row{display:flex;align-items:center;gap:8px;min-width:0}.preview{font-size:13px;color:var(--gray-500)}.inbox-chat-meta{display:grid;justify-items:end;gap:8px}.time{font-size:12px;color:var(--gray-400)}.channel-pill{font-size:10px;padding:2px 6px;border-radius:999px;background:var(--gray-100);color:var(--gray-600);border:1px solid var(--gray-200)}
.inbox-chat-header{height:64px;border-bottom:1px solid var(--border);padding:0 14px;display:flex;align-items:center;justify-content:space-between;gap:10px}.inbox-chat-header .left,.inbox-chat-header .right{display:flex;align-items:center;gap:10px;min-width:0}.inbox-chat-header .right{gap:8px;flex-wrap:wrap}.inbox-messages{height:calc(100% - 64px - 86px);min-height:360px;padding:14px;background:linear-gradient(180deg,#fff,#FCFCFF);display:grid;gap:12px;align-content:start;overflow:auto}.msg-group{display:grid;gap:4px}.msg-group.out{justify-items:end}.msg-bubble{max-width:72%;padding:10px 12px;border-radius:12px;background:var(--gray-100);color:var(--gray-900);font-size:14px;position:relative}.msg-group.in .msg-bubble{border-top-left-radius:4px}.msg-group.out .msg-bubble{border-top-right-radius:4px;background:var(--primary);color:#fff}.msg-meta{font-size:12px;color:var(--gray-400)}.msg-system{text-align:center;color:var(--gray-400);font-size:12px;font-style:italic;padding:4px 0}.msg-quick-actions{position:absolute;top:-12px;right:8px;background:#fff;border:1px solid var(--border);box-shadow:var(--shadow-sm);border-radius:8px;padding:2px;display:none;gap:2px}.msg-bubble:hover .msg-quick-actions{display:flex}.msg-quick-actions button{width:24px;height:24px;border-radius:6px;color:var(--gray-500);display:grid;place-items:center}.msg-quick-actions button:hover{background:var(--gray-100)}.msg-quick-actions i[data-lucide]{width:14px;height:14px}
.inbox-input{border-top:1px solid var(--border);padding:10px 12px;background:#fff;display:grid;gap:8px}.inbox-toolbar{display:flex;align-items:center;gap:6px}.inbox-toolbar .icon-btn{width:32px;height:32px}.inbox-send-row{display:grid;grid-template-columns:1fr auto;gap:8px;align-items:end}.inbox-send-row .textarea{min-height:44px;max-height:110px;border-radius:12px;resize:none}.inbox-info-scroll{padding:14px;display:grid;gap:14px;max-height:calc(100vh - 220px);overflow:auto}.inbox-info-card{border:1px solid var(--border);border-radius:12px;background:var(--gray-50);padding:12px;display:grid;gap:10px}
.widget-page{min-height:100vh;padding:18px;background:radial-gradient(circle at 12% 12%,rgba(79,70,229,.1),transparent 30%),radial-gradient(circle at 90% 15%,rgba(16,185,129,.1),transparent 28%),var(--bg)}.widget-shell{width:min(1200px,100%);margin:0 auto;display:grid;gap:16px}.widget-topbar{background:#fff;border:1px solid var(--border);border-radius:14px;padding:10px 12px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.widget-canvas{min-height:620px;border:1px solid var(--border);border-radius:18px;background:linear-gradient(180deg,#fff,#F8FBFF);padding:18px;position:relative;overflow:hidden}.widget-site-content{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;align-items:start}.widget-floating-launcher{position:absolute;right:22px;bottom:22px;width:60px;height:60px;border-radius:50%;background:var(--primary);color:#fff;display:grid;place-items:center;box-shadow:0 12px 24px rgba(79,70,229,.35)}.widget-floating-launcher i[data-lucide]{width:26px;height:26px}
.widget-window{width:360px;height:520px;border-radius:22px;border:1px solid var(--border);background:#fff;box-shadow:0 20px 28px rgba(15,23,42,.18);overflow:hidden;display:grid;grid-template-rows:56px 1fr auto}.widget-window-header{background:linear-gradient(180deg,#4F46E5,#6366F1);color:#fff;padding:0 14px;display:flex;align-items:center;justify-content:space-between;gap:10px}.widget-window-header .mini{font-size:12px;opacity:.9}.widget-window-body{padding:12px;display:grid;gap:10px;align-content:start;overflow:auto}.widget-msg{max-width:78%;padding:10px 12px;border-radius:12px;background:var(--gray-100);font-size:13px;color:var(--gray-800)}.widget-msg.agent{margin-left:auto;background:var(--primary);color:#fff}.widget-msg.center{margin:0 auto;max-width:90%;background:transparent;color:var(--gray-400);font-style:italic;padding:2px 0}.typing-dots{display:inline-flex;gap:4px;align-items:center}.typing-dots span{width:5px;height:5px;border-radius:50%;background:currentColor;animation:bounceDots 1s infinite}.typing-dots span:nth-child(2){animation-delay:.15s}.typing-dots span:nth-child(3){animation-delay:.3s}.widget-window-footer{border-top:1px solid var(--border);padding:10px;display:flex;gap:8px;align-items:center;background:#fff}.widget-window-footer .textarea{min-height:42px;max-height:84px;padding:10px 12px;border-radius:12px}.widget-gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.widget-state-card{background:#fff;border:1px solid var(--border);border-radius:16px;padding:14px;display:grid;gap:12px}
.system-page{min-height:100vh;background:var(--bg);display:grid;place-items:center;padding:20px}.system-shell{width:min(720px,100%);display:grid;gap:16px}.system-brand{display:flex;justify-content:center}.system-card{background:#fff;border:1px solid var(--border);border-radius:20px;box-shadow:var(--shadow-lg);padding:24px;display:grid;gap:16px;text-align:center;justify-items:center}.system-illustration{width:min(240px,55vw);aspect-ratio:1;border-radius:24px;border:1px dashed #C7D2FE;background:linear-gradient(180deg,#fff,#F7F9FF);display:grid;place-items:center;color:var(--primary);overflow:hidden}.system-illustration i[data-lucide]{width:56px;height:56px}.error-code{font-size:56px;font-weight:700;line-height:1;padding:10px 18px;border-radius:14px;border:2px solid var(--border);background:var(--gray-50);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}.error-code.warning{border-color:#F59E0B;background:#FEF3C7;color:#92400E}.error-code.danger{border-color:#EF4444;background:#FEE2E2;color:#991B1B}.error-code.info{border-color:#60A5FA;background:#EFF6FF;color:#1D4ED8}.system-actions{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
.settings-shell{max-width:1000px}.settings-card{background:#fff;border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow-sm);overflow:hidden}.settings-tabs{display:flex;gap:4px;overflow:auto;padding:0 12px;border-bottom:1px solid var(--border)}.settings-tabs a{height:44px;display:inline-flex;align-items:center;padding:0 12px;color:var(--gray-500);font-size:14px;font-weight:500;border-bottom:2px solid transparent;white-space:nowrap}.settings-tabs a.active{color:var(--primary);border-bottom-color:var(--primary)}.settings-body{padding:18px;display:grid;gap:16px}.settings-section{border:1px solid var(--gray-100);border-radius:12px;padding:16px;background:linear-gradient(180deg,#fff,#FCFCFF);display:grid;gap:12px}.settings-section .section-desc{font-size:13px;color:var(--gray-500)}.sticky-save-bar{position:sticky;bottom:0;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-top:1px solid var(--border);padding:12px 18px;display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap}
.analytics-topbar{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}.date-range{display:flex;align-items:center;gap:8px;padding:0 10px;height:38px;border:1px solid var(--border);border-radius:10px;background:#fff;color:var(--gray-600);font-size:13px}.date-range i[data-lucide]{width:15px;height:15px}.slack-layout{display:grid;grid-template-columns:260px minmax(0,1fr);gap:16px}.channel-list{background:#fff;border:1px solid var(--border);border-radius:14px;padding:14px;display:grid;gap:14px;align-content:start}.channel-group{display:grid;gap:6px}.channel-group h4{font-size:12px;color:var(--gray-500);text-transform:uppercase;letter-spacing:.05em}.channel-item{height:34px;border-radius:8px;padding:0 10px;display:flex;align-items:center;justify-content:space-between;gap:8px;color:var(--gray-600);font-size:13px}.channel-item:hover{background:var(--gray-100)}.channel-item.active{background:var(--primary-light);color:var(--primary);font-weight:600}.team-chat-main{background:#fff;border:1px solid var(--border);border-radius:14px;display:grid;grid-template-rows:56px 1fr auto;overflow:hidden}.team-chat-main .head{border-bottom:1px solid var(--border);padding:0 14px;display:flex;align-items:center;justify-content:space-between}.team-chat-main .messages{padding:14px;display:grid;gap:12px;overflow:auto;min-height:400px;background:#fff}.team-chat-main .composer{border-top:1px solid var(--border);padding:10px;display:grid;grid-template-columns:1fr auto;gap:8px}.kb-article-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.article-card{border:1px solid var(--border);border-radius:12px;background:#fff;padding:14px;display:grid;gap:8px}.addon-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px}.addon-card{border:1px solid var(--border);border-radius:14px;background:#fff;padding:16px;display:grid;gap:10px;box-shadow:var(--shadow-sm)}.addon-icon{width:42px;height:42px;border-radius:12px;background:var(--gray-50);border:1px solid var(--gray-100);display:grid;place-items:center;color:var(--primary)}.pricing-comparison{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.usage-meter{display:grid;gap:8px}.usage-meter .row{display:flex;justify-content:space-between;gap:12px;font-size:13px;color:var(--gray-600)}
#cf-toast{position:fixed;right:16px;bottom:16px;z-index:99;display:grid;gap:8px;pointer-events:none}.cf-toast-item{pointer-events:auto;background:#111827;color:#fff;border-radius:12px;padding:10px 12px;box-shadow:var(--shadow-lg);font-size:13px;display:flex;gap:8px;align-items:flex-start;max-width:420px;transition:opacity 150ms ease,transform 150ms ease}.cf-toast-item.success{background:#065F46}.cf-toast-item.warn{background:#92400E}.cf-toast-item.error{background:#991B1B}.cf-toast-item i[data-lucide]{width:16px;height:16px;flex-shrink:0;margin-top:1px}
@keyframes bounceDots{0%,80%,100%{transform:translateY(0);opacity:.45}40%{transform:translateY(-2px);opacity:1}}@keyframes pulseMarker{0%,100%{box-shadow:0 0 0 4px rgba(79,70,229,.12)}50%{box-shadow:0 0 0 10px rgba(79,70,229,.06)}}
@media (max-width:1200px){.feature-grid,.pricing-grid,.pricing-comparison{grid-template-columns:repeat(2,minmax(0,1fr))}.metrics-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.inbox-layout{grid-template-columns:300px minmax(0,1fr);grid-template-areas:"list chat" "info chat"}.inbox-layout>.inbox-panel:nth-child(1){grid-area:list}.inbox-layout>.inbox-panel:nth-child(2){grid-area:chat}.inbox-layout>.inbox-panel:nth-child(3){grid-area:info}}
@media (max-width:1024px){:root{--sidebar-width:84px}.app-layout{grid-template-columns:84px minmax(0,1fr)}.app-sidebar{padding-inline:8px}.nav-section-label{padding-inline:6px}.nav-link{padding:8px;justify-content:center;border-left:none;border-radius:10px}.nav-link .nav-label,.nav-link .badge{display:none}.nav-link .nav-left{gap:0}.nav-link.active{border-left-color:transparent}.sidebar-user{justify-content:center}.sidebar-user-meta{display:none}.shell-search{width:min(420px,42vw)}.hero-grid,.two-col,.three-col,.four-col,.split-grid,.widget-site-content,.slack-layout{grid-template-columns:1fr}.donut-wrap{grid-template-columns:1fr}}
@media (max-width:768px){.app-header{padding-inline:12px;gap:8px}.shell-search{display:none}.status-pill{display:none}.app-content{padding:16px}.metrics-grid,.pricing-grid,.pricing-comparison,.feature-grid,.form-grid,.form-grid.three{grid-template-columns:1fr}.trust-bar{grid-template-columns:1fr}.logo-strip{grid-template-columns:repeat(3,1fr)}.inbox-layout{grid-template-columns:1fr;min-height:auto}.inbox-list-scroll,.inbox-info-scroll{max-height:none}.widget-window{width:min(100%,360px)}.onboarding-card{padding:16px}.system-card{padding:18px}}
@media (prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
`);

SHELL_SOURCE = `(function () {
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
      '  <a class="shell-brand" href="../04-dashboard/01-dashboard.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a>' +
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
})();`;

RUNTIME_SOURCE = `(function () {
  "use strict";
  var ROLE_KEY = "qulaychat_role";
  var ROLES = ["admin","agent","client"];
  var ROLE_LABELS = {admin:"Admin",agent:"Agent",client:"Client"};

  function normalizeRole(role){var r=String(role||"admin").toLowerCase().trim();return ROLES.indexOf(r)>-1?r:"admin";}
  function roleList(value){if(!value)return[];return String(value).split(",").map(normalizeRole).filter(function(x,i,a){return a.indexOf(x)===i;});}
  function getRole(){try{return normalizeRole(localStorage.getItem(ROLE_KEY));}catch(e){return "admin";}}
  function setRole(role){var safe=normalizeRole(role);try{localStorage.setItem(ROLE_KEY,safe);}catch(e){}applyRole(safe);pushToast("Rol o'zgartirildi: "+(ROLE_LABELS[safe]||safe),"success");}

  function applyRole(forced){
    var role = normalizeRole(forced || getRole());
    document.documentElement.setAttribute("data-current-role", role);
    if (document.body) document.body.setAttribute("data-current-role", role);
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
})();`;

function siblingItemsFor(folderMap, relPath) {
  const folder = relPath.split("/")[0];
  const items = (folderMap[folder] || []).map((x) => ({ href: `./${x.file}`, label: x.label }));
  return { items, currentHref: `./${path.basename(relPath)}` };
}

function modalMarkup(id, title, bodyHtml, footerHtml) {
  return `    <div class="modal-overlay" data-modal="${esc(id)}" hidden>
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="${esc(id)}-title">
        <div class="modal-header">
          <h3 id="${esc(id)}-title">${esc(title)}</h3>
          <button class="btn btn-ghost btn-sm" type="button" data-modal-close>${icon("x")}</button>
        </div>
        <div class="modal-body">${bodyHtml}</div>
        <div class="modal-footer">${footerHtml}</div>
      </div>
    </div>`;
}

function renderIndexPage(folderMap) {
  const moduleCards = Object.keys(folderMap)
    .sort()
    .map((folder) => {
      const first = folderMap[folder][0];
      const count = folderMap[folder].length;
      const label = moduleLabel(folder) || folder;
      return `<a class="article-card" href="./${folder}/${first.file}">
        <div class="flex gap-3 items-center">
          <span class="addon-icon">${icon("folder-open")}</span>
          <div>
            <strong>${esc(label)}</strong>
            <div class="text-muted" style="font-size:13px">${count} sahifa</div>
          </div>
        </div>
        <div class="text-muted" style="font-size:13px">${esc(first.label)}</div>
      </a>`;
    })
    .join("");

  const content = `  <main class="marketing-shell">
    <header class="marketing-header">
      <a class="shell-brand" href="./index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT Frontend</span></a>
      <div class="flex gap-2 wrap" id="docs">
        ${linkBtn("Landing", "./01-landing/01-landing.html", "secondary")}
        ${linkBtn("Auth", "./02-auth/01-login.html", "secondary")}
        ${linkBtn("Dashboard", "./04-dashboard/01-dashboard.html", "primary")}
      </div>
    </header>
    <section class="marketing-main">
      <section class="hero-grid">
        <div class="hero-panel">
          <span class="badge badge-primary">Production Preview</span>
          <h1 style="margin-top:12px">QULAY CHAT HTML sahifalari yagona SaaS dizayn tizimida</h1>
          <p class="lead">` +
          `Barcha 18 modul, auth/onboarding, inbox, widget va system sahifalari bir xil dizayn tokenlar, shell va komponentlar asosida qayta generatsiya qilindi.` +
          `</p>
          <div class="hero-cta">
            ${linkBtn("Dashboard ochish", "./04-dashboard/01-dashboard.html", "primary")}
            ${linkBtn("Inbox ochish", "./05-inbox/02-chat-open.html", "secondary")}
            ${linkBtn("Landing ko'rish", "./01-landing/01-landing.html", "ghost")}
          </div>
          <div class="hero-proof">
            <span>${badge("82 HTML sahifa", "badge-info")}</span>
            <span>${badge("Lucide Icons", "badge-primary")}</span>
            <span>${badge("Inter Font", "badge-success")}</span>
          </div>
        </div>
        <div class="hero-visual">
          <div class="mock-window">
            <div class="mock-window-head"><span></span><span></span><span></span></div>
            <div class="mock-window-body">
              <div class="mock-side"><div></div><div></div><div></div><div></div><div></div></div>
              <div class="mock-content">
                <div class="mock-metric-grid"><div></div><div></div><div></div></div>
                <div class="mock-chart"></div>
                <div class="table-wrap" style="border-radius:10px">
                  <table class="table">
                    <thead><tr><th>Visitor</th><th>Status</th><th>Agent</th></tr></thead>
                    <tbody><tr><td>Ahmad V.</td><td>Active</td><td>Sardor</td></tr><tr><td>Dilnoza R.</td><td>Waiting</td><td>Sara</td></tr></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="trust-bar">
        <div>
          <div class="text-muted" style="font-size:13px">Platforma holati</div>
          <strong style="font-size:18px">Design system + shell + runtime</strong>
        </div>
        <div class="logo-strip" id="support">
          <div class="logo-pill">Shell JS</div><div class="logo-pill">Inbox UI</div><div class="logo-pill">Analytics</div>
          <div class="logo-pill">Settings</div><div class="logo-pill">Widget</div><div class="logo-pill">Errors</div>
        </div>
      </section>
      <section class="card">
        <div class="card-header"><div><h3>Modullar</h3><p class="card-description">Har bir modul birinchi sahifasiga tezkor kirish</p></div></div>
        <div class="card-body"><div class="kb-article-grid">${moduleCards}</div></div>
      </section>
    </section>
  </main>`;
  return standalonePage({ title: "QULAY CHAT Frontend Preview", prefix: ".", bodyClass: "marketing-page", content });
}

function renderLandingPage() {
  const features = [
    ["Bitta Inbox", "Web, Telegram, Instagram va email xabarlarini bir joyda boshqaring.", "inbox"],
    ["Automation", "Working hours, auto-reply, trigger va greeting'larni sozlang.", "zap"],
    ["Analytics", "Javob vaqti, SLA va operator statistikalarini kuzating.", "bar-chart-3"],
    ["Knowledge Base", "Mijozlar uchun self-service maqolalar bazasini yarating.", "book-open"]
  ];
  const pricing = [
    { name: "Free", price: "$0", subtitle: "Start", items: ["1 agent", "Widget + Inbox", "Basic analytics"], cta: "Boshlash", featured: false },
    { name: "Pro", price: "$29", subtitle: "oyiga", items: ["10 agent", "Automation", "Team chat", "Export"], cta: "Pro'ga o'tish", featured: true },
    { name: "Enterprise", price: "Custom", subtitle: "narx", items: ["SLA", "SSO", "Advanced security", "Priority support"], cta: "Kontakt", featured: false }
  ];
  const content = `  <div class="marketing-shell">
    <header class="marketing-header">
      <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a>
      <nav class="marketing-nav">
        <a href="#imkoniyatlar">Imkoniyatlar</a>
        <a href="#tariflar">Tariflar</a>
        <a href="#integrations">Integrations</a>
      </nav>
      <div class="flex gap-2">
        ${linkBtn("Kirish", "../02-auth/01-login.html", "ghost")}
        ${linkBtn("Bepul boshlash", "../02-auth/02-register.html", "primary")}
      </div>
    </header>
    <main class="marketing-main">
      <section class="hero-grid">
        <div class="hero-panel">
          <span class="badge badge-primary">Mijoz support platformasi</span>
          <h1 style="margin-top:12px">Mijozlaringiz bilan suhbatni yangi bosqichga olib chiqing</h1>
          <p class="lead">QULAY CHAT yordamida barcha kanallardagi xabarlarni yagona inbox'da boshqaring, operatorlar ishini tezlashtiring va real vaqt analytics bilan nazorat qiling.</p>
          <div class="hero-cta">
            ${linkBtn("Bepul boshlash", "../02-auth/02-register.html", "primary")}
            ${linkBtn("Demo ko'rish", "../04-dashboard/01-dashboard.html", "secondary")}
          </div>
          <div class="hero-proof"><span>${badge("14 kunlik trial", "badge-success")}</span><span>${badge("No card required", "badge-info")}</span></div>
        </div>
        <div class="hero-visual"><div class="mock-window"><div class="mock-window-head"><span></span><span></span><span></span></div><div class="mock-window-body"><div class="mock-side"><div></div><div></div><div></div></div><div class="mock-content"><div class="mock-metric-grid"><div></div><div></div><div></div></div><div class="mock-chart"></div></div></div></div></div>
      </section>
      <section class="trust-bar">
        <div><div class="text-muted" style="font-size:13px">1000+ kompaniyalar ishonadi</div><strong>Uzbekistan SaaS Support Stack</strong></div>
        <div class="logo-strip"><div class="logo-pill">ACME</div><div class="logo-pill">NEXA</div><div class="logo-pill">MARKET</div><div class="logo-pill">EDU</div><div class="logo-pill">LOGI</div><div class="logo-pill">BANK</div></div>
      </section>
      <section id="imkoniyatlar" class="feature-grid">
        ${features.map((f) => `<article class="feature-card"><div class="feature-icon">${icon(f[2])}</div><h3>${esc(f[0])}</h3><p class="text-muted" style="font-size:13px">${esc(f[1])}</p></article>`).join("")}
      </section>
      <section id="tariflar" class="pricing-grid">
        ${pricing.map((p) => `<article class="pricing-card ${p.featured ? "featured" : ""}"><div>${p.featured ? badge("Tavsiya", "badge-primary") : ""}<h3 style="margin-top:${p.featured ? "8px" : "0"}">${esc(p.name)}</h3><div class="text-muted" style="font-size:13px">${esc(p.subtitle)}</div></div><div class="pricing-price">${esc(p.price)}</div><ul class="pricing-list">${p.items.map((it) => `<li>${icon("check")}<span>${esc(it)}</span></li>`).join("")}</ul>${linkBtn(p.cta, "../02-auth/02-register.html", p.featured ? "primary" : "secondary")}</article>`).join("")}
      </section>
      <section class="cta-banner"><div><h2 style="color:#fff">Hoziroq boshlang</h2><p style="opacity:.9;margin-top:4px">Bir necha daqiqada widgetni o'rnating va birinchi chatni qabul qiling.</p></div><div class="flex gap-2">${linkBtn("Ro'yxatdan o'tish", "../02-auth/02-register.html", "secondary")} ${linkBtn("Dashboard preview", "../04-dashboard/01-dashboard.html", "ghost")}</div></section>
    </main>
    <footer class="marketing-footer"><div class="shell-brand"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></div><div class="flex gap-3 wrap"><a href="#imkoniyatlar">Imkoniyatlar</a><a href="#tariflar">Tariflar</a><a href="../index.html">Docs</a><a href="../index.html#support">Support</a></div><div>&copy; 2026 QULAY CHAT</div></footer>
  </div>`;
  return standalonePage({ title: "QULAY CHAT - Landing", bodyClass: "marketing-page", content });
}

function renderAuthPage(relPath) {
  const map = {
    "01-login.html": { title: "Kirish", subtitle: "Akkauntingizga kiring va mijoz chatlarini boshqaring.", primary: "Kirish", alt: "Akkauntingiz yo'qmi?", altLink: "../02-auth/02-register.html", altLabel: "Ro'yxatdan o'tish", fields: [
      formField("Email", `<input class="input" type="email" placeholder="name@company.uz">`),
      formField("Parol", `<input class="input" type="password" placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў">`)
    ]},
    "02-register.html": { title: "Ro'yxatdan o'tish", subtitle: "Bepul trial boshlash uchun workspace yarating.", primary: "Akkaunt yaratish", alt: "Akkauntingiz bormi?", altLink: "../02-auth/01-login.html", altLabel: "Kirish", fields: [
      formField("Ism", `<input class="input" type="text" placeholder="Sardor Aliyev">`),
      formField("Email", `<input class="input" type="email" placeholder="sardor@company.uz">`),
      formField("Parol", `<input class="input" type="password" placeholder="Kamida 8 belgi">`)
    ]},
    "03-email-verify.html": { title: "Email Tasdiqlash", subtitle: "Tasdiqlash havolasini email manzilingizga yubordik.", primary: "Dashboardga o'tish", primaryHref: "../03-onboarding/01-welcome.html", alt: "Havola kelmadimi?", altLink: "../02-auth/03-email-verify.html", altLabel: "Qayta yuborish", info: true, fields: [] },
    "04-forgot-password.html": { title: "Parolni Tiklash", subtitle: "Email manzilingizni kiriting, tiklash havolasini yuboramiz.", primary: "Havola yuborish", alt: "Parolingiz esingizdami?", altLink: "../02-auth/01-login.html", altLabel: "Kirish", fields: [
      formField("Email", `<input class="input" type="email" placeholder="name@company.uz">`)
    ]},
    "05-welcome-first-login.html": { title: "Xush kelibsiz!", subtitle: "Akkaunt tayyor. Endi widget va workspace sozlamalarini yakunlaymiz.", primary: "Onboardingni boshlash", primaryHref: "../03-onboarding/01-welcome.html", alt: "Yoki darhol", altLink: "../04-dashboard/01-dashboard.html", altLabel: "Dashboardga o'tish", success: true, fields: [] }
  };
  const cfg = map[path.basename(relPath)] || map["01-login.html"];
  const formInner = cfg.fields.length ? `<form class="auth-form" data-auto-submit data-submit-message="${esc(cfg.primary)} bajarildi">${cfg.fields.join("")}<button class="btn btn-primary w-full" type="submit">${cfg.primary}</button></form>` : `<div class="stack">${cfg.info ? `<div class="alert alert-info">${icon("mail-check")}<div>Tasdiqlash xati <strong>sardor@qulaychat.uz</strong> manziliga yuborildi.</div></div>` : ""}${cfg.success ? `<div class="alert alert-success">${icon("badge-check")}<div>Trial workspace yaratildi. Endi onboarding bosqichlarini yakunlashingiz mumkin.</div></div>` : ""}${linkBtn(cfg.primary, cfg.primaryHref || "../03-onboarding/01-welcome.html", "primary", 'style="width:100%"')}</div>`;
  const content = `  <main class="auth-page">
    <section class="auth-card">
      <div class="auth-logo"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></div>
      <div class="auth-title"><h1>${esc(cfg.title)}</h1><p>${esc(cfg.subtitle)}</p></div>
      ${formInner}
      <div class="auth-divider">yoki</div>
      <button type="button" class="btn btn-secondary auth-social w-full">${icon("chrome")} Google bilan davom etish</button>
      <div class="auth-footer">${esc(cfg.alt)} <a href="${esc(cfg.altLink)}" style="color:var(--primary);font-weight:600">${esc(cfg.altLabel)}</a></div>
    </section>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${cfg.title}`, bodyClass: "auth-page", content });
}

function onboardingStepConfig(file) {
  const list = {
    "01-welcome.html": { step: 1, title: "QULAY CHAT'ga xush kelibsiz", subtitle: "6 qadamda workspace, widget va inbox'ni ishga tushiramiz.", body: `<div class="alert alert-success">${icon("sparkles")}<div>Setup taxminan 4-6 daqiqa davom etadi. Xohlasangiz keyin ham davom ettirishingiz mumkin.</div></div><div class="two-col"><div class="card"><div class="card-body"><h3>1. Workspace</h3><p class="text-muted">Nom, domen, timezone</p></div></div><div class="card"><div class="card-body"><h3>2. Widget</h3><p class="text-muted">Rang, welcome xabar, install kod</p></div></div></div>`, back: "../02-auth/05-welcome-first-login.html", next: "./02-onboarding-setup.html" },
    "02-onboarding-setup.html": { step: 2, title: "Boshlang'ich sozlash", subtitle: "Workspace yaratish uchun asosiy ma'lumotlarni kiriting.", body: `<div class="form-grid">${formField("Workspace nomi", input("QULAY CHAT Support", "ACME Support"))}${formField("Veb-sayt", `<input class="input" type="url" placeholder="https://example.uz">`)}${formField("Til", select(["O'zbek", "English", "Р СѓСЃСЃРєРёР№"], "O'zbek"))}${formField("Timezone", select(["GMT+5 Toshkent","GMT+6 Almaty","GMT+3 Istanbul"], "GMT+5 Toshkent"))}</div>`, back: "./01-welcome.html", next: "./03-workspace.html" },
    "03-workspace.html": { step: 3, title: "Jamoa va kanallar", subtitle: "Qaysi kanallarni yoqishni va birinchi operatorlarni belgilang.", body: `<div class="form-row"><div class="row-copy"><div class="form-label">Kanallar</div><p class="text-muted" style="font-size:13px">Dastlabki qabul kanallarini tanlang</p></div><div class="three-col"><label class="checkbox"><input type="checkbox" checked>Web Widget</label><label class="checkbox"><input type="checkbox" checked>Telegram</label><label class="checkbox"><input type="checkbox">Email</label></div></div><div class="form-grid">${formField("Birinchi operator", input("Sardor Aliyev"))}${formField("Support email", `<input class="input" type="email" value="support@qulaychat.uz">`)}</div>`, back: "./02-onboarding-setup.html", next: "./04-widget-customize.html" },
    "04-widget-customize.html": { step: 4, title: "Widget ko'rinishini moslang", subtitle: "Asosiy rang, joylashuv va welcome xabarni tanlang.", body: `<div class="settings-section"><div class="form-label">Asosiy rang</div><div class="preset-colors"><span class="color-swatch active" style="background:#4F46E5"></span><span class="color-swatch" style="background:#2563EB"></span><span class="color-swatch" style="background:#059669"></span><span class="color-swatch" style="background:#DC2626"></span><span class="color-swatch" style="background:#F59E0B"></span></div></div><div class="two-col"><div>${formField("Welcome xabar", textarea("Salom! Sizga qanday yordam bera olamiz?", "", 3))}</div><div class="widget-mini-preview"><div class="text-muted" style="font-size:13px">Preview</div><div class="widget-mini-window"><div class="widget-mini-head"><span>QULAY CHAT</span><span>Online</span></div><div class="widget-mini-body"><div class="widget-msg">Salom! Sizga qanday yordam bera olamiz?</div><div class="widget-msg agent">Narxlar haqida aytib bera olaman.</div></div></div></div></div>`, back: "./03-workspace.html", next: "./05-widget-install.html" },
    "05-widget-install.html": { step: 5, title: "Widget o'rnatish", subtitle: "Saytingizga kod snippetni qo'shing va test qiling.", body: `${codeBlock(`<script src="https://cdn.qulaychat.uz/widget.js" data-id="cf_demo_01"></script>`, "onboard-widget-code")}<div class="alert alert-info">${icon("terminal")}<div>Snippetni <strong>&lt;/body&gt;</strong> tegi oldidan joylashtirish tavsiya etiladi.</div></div>`, back: "./04-widget-customize.html", next: "./06-widget-verify.html" },
    "06-widget-verify.html": { step: 6, title: "Hammasi tayyor", subtitle: "Widget ulandi va birinchi test chat qabul qilindi.", body: `<div class="text-center" style="padding:8px 0 4px"><div class="avatar avatar-xxl" style="margin:0 auto;background:var(--success-light);color:#059669">${icon("badge-check")}</div><h2 style="margin-top:12px">Widget muvaffaqiyatli ulandi</h2><p class="text-muted" style="margin-top:8px">Endi dashboard va inbox orqali mijoz xabarlarini boshqarishingiz mumkin.</p></div><div class="two-col"><div class="card"><div class="card-body"><h3>Test Chat</h3><p class="text-muted">Bugun 1 ta test chat qabul qilindi</p></div></div><div class="card"><div class="card-body"><h3>Keyingi qadam</h3><p class="text-muted">Automation va team sozlamalarini yakunlang</p></div></div></div>`, back: "./05-widget-install.html", next: "../04-dashboard/01-dashboard.html" }
  };
  return list[file];
}

function renderOnboardingPage(relPath) {
  const cfg = onboardingStepConfig(path.basename(relPath));
  const dots = Array.from({ length: 6 }, (_, i) => i + 1).map((n) => `<span class="${n < cfg.step ? "done" : n === cfg.step ? "active" : ""}"></span>`).join("");
  const content = `  <main class="onboarding-page">
    <div class="onboarding-shell">
      <div class="onboarding-top">
        <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a>
        <span class="badge badge-primary">Step ${cfg.step}/6</span>
      </div>
      <div class="onboarding-progress"><div class="flex justify-between items-center"><strong>Onboarding</strong><span class="text-muted" style="font-size:13px">${cfg.step} / 6</span></div><div class="step-dots">${dots}</div><div class="progress"><div class="progress-bar" style="width:${Math.round((cfg.step/6)*100)}%"></div></div></div>
      <section class="onboarding-card">
        <div><h1>${esc(cfg.title)}</h1><p class="text-muted" style="margin-top:6px">${esc(cfg.subtitle)}</p></div>
        ${cfg.body}
        <div class="onboarding-actions">
          <div class="flex gap-2">${linkBtn("Orqaga", cfg.back, "secondary")} ${linkBtn("Skip", "../04-dashboard/01-dashboard.html", "ghost")}</div>
          ${linkBtn(cfg.step === 6 ? "Dashboardga o'tish" : "Keyingi", cfg.next, "primary")}
        </div>
      </section>
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${cfg.title}`, bodyClass: "onboarding-page", content });
}

function widgetStateWindow(kind) {
  if (kind === "offline") {
    return `<div class="widget-window"><div class="widget-window-header"><div><strong>QULAY CHAT</strong><div class="mini">Offline</div></div><button class="icon-btn" type="button" data-action="log">${icon("x")}</button></div><div class="widget-window-body"><div class="alert alert-info">${icon("clock-3")}<div>Operatorlar hozir offline. Xabar qoldiring.</div></div>${formField("Ism", `<input class="input" type="text" placeholder="Sardor">`)}${formField("Email", `<input class="input" type="email" placeholder="you@example.com">`)}${formField("Xabar", `<textarea class="textarea" rows="4" placeholder="Savolingizni yozing..."></textarea>`)}</div><div class="widget-window-footer">${btn("Yuborish", "primary")}</div></div>`;
  }
  if (kind === "csat") {
    return `<div class="widget-window"><div class="widget-window-header"><div><strong>QULAY CHAT</strong><div class="mini">CSAT</div></div><button class="icon-btn" type="button" data-action="log">${icon("x")}</button></div><div class="widget-window-body"><h3>Yordamingiz foydali bo'ldimi?</h3><div class="flex gap-2">${["star","star","star","star","star"].map((s, i)=>`<button class="btn ${i<4?"btn-primary":"btn-secondary"} btn-sm" type="button" data-action="log">${icon(s)}</button>`).join("")}</div>${formField("Izoh", `<textarea class="textarea" rows="4" placeholder="Qo'shimcha fikringiz..."></textarea>`)}</div><div class="widget-window-footer">${btn("Baholashni yuborish", "primary")}</div></div>`;
  }
  return `<div class="widget-window"><div class="widget-window-header"><div><strong>QULAY CHAT</strong><div class="mini">Online вЂў Javob 2m ichida</div></div><div class="flex gap-1"><button class="icon-btn" type="button" data-action="log">${icon("minus")}</button><button class="icon-btn" type="button" data-action="log">${icon("x")}</button></div></div><div class="widget-window-body"><div class="widget-msg">Salom! Sizga qanday yordam bera olamiz?</div><div class="widget-msg agent">Assalomu alaykum, narxlar yoki status bo'yicha yordam bera olaman.</div><div class="widget-msg">Rahmat, tariflar haqida yozing.</div><div class="widget-msg center"><span class="typing-dots"><span></span><span></span><span></span></span> Agent yozmoqda...</div></div><div class="widget-window-footer"><button class="icon-btn" type="button" data-action="log">${icon("paperclip")}</button><textarea class="textarea" rows="1" placeholder="Xabar yozing..."></textarea><button class="btn btn-primary btn-sm" type="button" data-action="log">${icon("send")}</button></div></div>`;
}

function renderWidgetPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const { items, currentHref } = siblingItemsFor(folderMap, relPath);
  let title = prettyTitleFromRel(relPath);
  let mainContent = "";
  if (file === "01-widget-launcher.html") {
    mainContent = `<div class="widget-canvas"><div class="two-col"><div class="card"><div class="card-header"><div><h3>Website Preview</h3><p class="card-description">Visitor tomoni landing sahifasi simulatsiyasi</p></div></div><div class="card-body"><div class="placeholder-line" style="width:70%"></div><div class="placeholder-line" style="width:95%"></div><div class="placeholder-line" style="width:88%"></div><div class="placeholder-line" style="width:76%"></div><div class="placeholder-line" style="width:92%;height:120px;border-radius:14px"></div></div></div><div class="card"><div class="card-header"><div><h3>Launcher Settings</h3><p class="card-description">Floating button primary rangda ko'rinadi</p></div></div><div class="card-body">${keyValueList([{key:"Size",value:"60x60px"},{key:"Position",value:"Bottom Right"},{key:"Icon",value:"Message Circle"},{key:"Color",value:"#4F46E5"}])}</div></div></div><button class="widget-floating-launcher" aria-label="Open widget">${icon("message-circle")}</button></div>`;
  } else if (file === "05-widget-states.html") {
    mainContent = `<div class="widget-canvas"><div class="widget-gallery"><div class="widget-state-card"><h3>Online</h3>${widgetStateWindow("chat")}</div><div class="widget-state-card"><h3>Offline</h3>${widgetStateWindow("offline")}</div><div class="widget-state-card"><h3>CSAT</h3>${widgetStateWindow("csat")}</div><div class="widget-state-card"><h3>Loading</h3><div class="widget-window"><div class="widget-window-header"><strong>QULAY CHAT</strong><span class="mini">Loading...</span></div><div class="widget-window-body"><div class="empty-state">${icon("loader-circle")}<div>Yuklanmoqda...</div></div></div><div class="widget-window-footer"><button class="btn btn-secondary btn-sm" disabled>...</button></div></div></div></div></div>`;
  } else {
    const kind = file === "03-widget-offline.html" ? "offline" : (file === "04-widget-csat.html" ? "csat" : "chat");
    mainContent = `<div class="widget-canvas"><div class="widget-site-content"><div class="card"><div class="card-header"><div><h3>Visitor Sahifasi</h3><p class="card-description">Widget demo holati: ${esc(title)}</p></div></div><div class="card-body"><div class="placeholder-line" style="width:72%"></div><div class="placeholder-line" style="width:94%"></div><div class="placeholder-line" style="width:88%"></div><div class="placeholder-line" style="width:90%;height:220px;border-radius:14px"></div></div></div><div style="justify-self:end">${widgetStateWindow(kind)}</div></div></div>`;
  }
  const content = `  <main class="widget-page">
    <div class="widget-shell">
      <div class="widget-topbar">
        <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>Widget Preview</span></a>
        <div class="subnav-scroll"><div class="subnav-tabs">${items.map((item) => `<a class="subnav-tab ${item.href===currentHref?"active":""}" href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}</div></div>
      </div>
      ${mainContent}
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${title}`, bodyClass: "widget-page", content });
}

function systemConfig(file) {
  const map = {
    "01-error-404.html": { code: "404", codeClass: "warning", title: "Sahifa topilmadi", desc: "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.", iconName: "search-x", actions: [`${linkBtn("Bosh sahifaga", "../index.html", "primary")}`, `${linkBtn("Dashboard", "../04-dashboard/01-dashboard.html", "secondary")}`] },
    "02-error-500.html": { code: "500", codeClass: "danger", title: "Xatolik yuz berdi", desc: "Ichki server muammosi yuz berdi. Iltimos, qaytadan urinib ko'ring.", iconName: "server-crash", actions: [`${btn("Qayta urinish", "primary", 'data-action="log" data-message="Retry ishga tushdi"')}`, `${linkBtn("Bosh sahifaga", "../index.html", "secondary")}`] },
    "03-error-403.html": { code: "403", codeClass: "warning", title: "Ruxsat yo'q", desc: "Bu sahifani ko'rish uchun sizga kerakli ruxsat berilmagan.", iconName: "shield-alert", actions: [`${linkBtn("Orqaga", "../04-dashboard/01-dashboard.html", "secondary")}`, `${linkBtn("Admin bilan bog'lanish", "../index.html#support", "ghost")}`] },
    "04-maintenance.html": { code: "Maint", codeClass: "info", title: "Tez orada qaytamiz", desc: "Rejalashtirilgan texnik ishlar olib borilmoqda. Taxminiy vaqt: 20 daqiqa.", iconName: "wrench", actions: [`${btn("Statusni yangilash", "primary", 'data-action="log" data-message="Status qayta tekshirildi"')}`, `${linkBtn("Status sahifasi", "../index.html", "secondary")}`] },
    "05-offline.html": { code: "Offline", codeClass: "info", title: "Internet aloqasi yo'q", desc: "Ulanish qayta tiklangach sahifa avtomatik yangilanadi. Hozircha retry qilishingiz mumkin.", iconName: "wifi-off", actions: [`${btn("Retry", "primary", 'data-action="log" data-message="Connection retry"')}`, `${linkBtn("Bosh sahifa", "../index.html", "secondary")}`] }
  };
  return map[file];
}

function renderSystemPage(relPath) {
  const cfg = systemConfig(path.basename(relPath));
  const content = `  <main class="system-page">
    <div class="system-shell">
      <div class="system-brand"><a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a></div>
      <section class="system-card">
        <div class="system-illustration">${icon(cfg.iconName)}</div>
        <div class="error-code ${cfg.codeClass}">${esc(cfg.code)}</div>
        <h1>${esc(cfg.title)}</h1>
        <p class="text-muted" style="max-width:48ch">${esc(cfg.desc)}</p>
        <div class="system-actions">${cfg.actions.join("")}</div>
      </section>
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${cfg.title}`, bodyClass: "system-page", content, robots: "noindex, nofollow" });
}

function shellHeaderBlock(relPath, folderMap, title, subtitle, actionsHtml) {
  const sib = siblingItemsFor(folderMap, relPath);
  return `${subnavLinks(sib.items, sib.currentHref)}
${pageHeader(title, subtitle, actionsHtml || "")}`;
}

function renderDashboardHomePage(relPath, folderMap) {
  const content = `${shellHeaderBlock(relPath, folderMap, "Dashboard", "Bugungi umumiy ko'rinish", `${btn("Yangi chat", "primary")} ${linkBtn("Inbox", "../05-inbox/02-chat-open.html", "secondary")}`)}
${card("Xush kelibsiz, Sardor!", `<div class="two-col"><div><p class="text-muted">Bugun jamoa faol, 23 ta live chat va 4 ta kutilayotgan suhbat bor.</p><div class="flex gap-2 wrap" style="margin-top:12px">${linkBtn("Inboxga o'tish", "../05-inbox/01-inbox-chat.html", "primary")} ${linkBtn("Automation sozlash", "../06-automation/01-working-hours.html", "secondary")}</div></div><div>${progressBar(66)}<div class="text-muted" style="font-size:13px;margin-top:8px">Onboarding progress: 4/6 bosqich</div></div></div>`)}
${metricGrid([{label:"Jami chatlar",value:"1,247",trend:"+12%"},{label:"Faol chatlar",value:"23",trend:"+8%"},{label:"O'rtacha javob",value:"2m 34s",trend:"-15%",trendClass:"warn"},{label:"CSAT",value:"4.8/5",trend:"+3%"}])}
<div class="two-col">
${card("Chat faolligi (7 kun)", fakeLineChart())}
${card("Kanallar ulushi", fakeDonut())}
</div>
${card("Recent chats", simpleTable(["Visitor","Status","Agent","Vaqt","Kanal"], [
  ["<span class='cell-strong'>Ahmad Valiyev</span>","<span class='badge badge-success'>Active</span>","Sardor","2m","Web"],
  ["<span class='cell-strong'>Dilnoza Rahimova</span>","<span class='badge badge-warning'>Waiting</span>","Sara","5m","Telegram"],
  ["<span class='cell-strong'>Rustam Karimov</span>","<span class='badge'>Assigned</span>","Ali","15m","WhatsApp"],
  ["<span class='cell-strong'>Malika Orifova</span>","<span class='badge badge-info'>Resolved</span>","Bobur","32m","Email"],
  ["<span class='cell-strong'>Nodira T.</span>","<span class='badge badge-danger'>Urgent</span>","Unassigned","1m","Web"]
]))}
${card("Quick actions", `<div class="three-col"><a class="quick-action-card" href="../05-inbox/02-chat-open.html">${icon("message-circle-plus")}<strong>Yangi chat boshlash</strong><span class="text-muted" style="font-size:13px">Inbox open state preview</span></a><a class="quick-action-card" href="../07-team/04-invitations.html">${icon("user-plus")}<strong>Jamoa qo'shish</strong><span class="text-muted" style="font-size:13px">Operator taklif yuborish</span></a><a class="quick-action-card" href="../09-settings/02-widget-settings.html">${icon("paintbrush")}<strong>Widget sozlash</strong><span class="text-muted" style="font-size:13px">Rang va xabarlarni yangilash</span></a></div>`)}
`;
  return shellPage({ title: "Dashboard", activeNav: "dashboard", content });
}

function inboxChatListHtml(activeIndex) {
  const rows = [
    ["Ahmad Valiyev","Salom, tariflar haqida savol bor.","2m","Web","3","online","Sardor"],
    ["Dilnoza Rahimova","Telegram integratsiyasi ishlamayapti.","5m","Telegram","1","away","Sara"],
    ["Rustam Karimov","Buyurtma statusini tekshira olasizmi?","11m","WhatsApp","","offline","Ali"],
    ["Malika Orifova","Rahmat, hammasi tushunarli bo'ldi.","32m","Email","","offline","Bobur"],
    ["Olim Ergashev","Demo so'rovi yubordim.","1h","Web","","online","Unassigned"]
  ];
  return rows.map((r, idx) => `<div class="inbox-chat-item ${idx===activeIndex?"active":""}" role="option" aria-selected="${idx===activeIndex?"true":"false"}">
      <span class="status-dot ${r[5]}"></span>
      <div class="inbox-chat-main">
        <div class="name-row"><strong class="truncate">${esc(r[0])}</strong>${r[6]==="Unassigned"?badge("Unassigned","badge-warning"):""}</div>
        <div class="preview truncate">${esc(r[1])}</div>
        <div class="text-muted" style="font-size:12px">Agent: ${esc(r[6])}</div>
      </div>
      <div class="inbox-chat-meta"><span class="time">${esc(r[2])}</span><span class="channel-pill">${esc(r[3])}</span>${r[4]?`<span class="badge badge-danger">${esc(r[4])}</span>`:""}</div>
    </div>`).join("");
}

function inboxMessagesHtml() {
  return `<div class="msg-system">Chat boshlandi вЂў Bugun 14:21</div>
    <div class="msg-group in"><div class="msg-bubble">Salom, Pro tarifda nechta operator qo'shsa bo'ladi?<div class="msg-quick-actions"><button>${icon("reply")}</button><button>${icon("star")}</button><button>${icon("trash-2")}</button></div></div><div class="msg-meta">Ahmad вЂў 14:22</div></div>
    <div class="msg-group out"><div class="msg-bubble">Assalomu alaykum! Pro tarifda 10 tagacha operator qo'shish mumkin.</div><div class="msg-meta">Sardor вЂў 14:23</div></div>
    <div class="msg-group in"><div class="msg-bubble">Ajoyib. Telegram integratsiyasi ham kiradimi?</div><div class="msg-meta">Ahmad вЂў 14:24</div></div>
    <div class="msg-group out"><div class="msg-bubble">Ha, Telegram, web widget va email kanallari mavjud. Xohlasangiz demo yoqib beraman.</div><div class="msg-meta">Sardor вЂў 14:25</div></div>
    <div class="msg-group in"><div class="msg-bubble"><span class="typing-dots"><span></span><span></span><span></span></span> Ahmad yozmoqda...</div></div>`;
}

function inboxInfoPanel(expanded) {
  return `<div class="inbox-info-scroll">
    <div class="inbox-info-card">
      <div class="flex gap-3 items-center">${avatar("Ahmad Valiyev","avatar-lg")}<div><strong>Ahmad Valiyev</strong><div class="text-muted" style="font-size:13px">ahmad@example.com</div></div></div>
      ${keyValueList([{key:"Location",value:"Toshkent, UZ"},{key:"Browser",value:"Chrome 122 / macOS"},{key:"IP",value:"185.8.212.34"},{key:"Current page",value:"/pricing"}])}
    </div>
    <div class="inbox-info-card"><h3>Tags</h3><div class="tag-cloud">${badge("Pricing","badge-primary")}${badge("Lead","badge-info")}${badge("Enterprise","badge-warning")}</div></div>
    <div class="inbox-info-card"><h3>Notes</h3><p class="text-muted" style="font-size:13px">Demo uchun qiziqmoqda. Ertaga follow-up yuborish tavsiya etiladi.</p></div>
    <div class="inbox-info-card"><h3>Previous chats</h3><div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">Pricing question</div><div class="item-sub">2 kun oldin вЂў Sara</div></div>${badge("Closed","badge-success")}</div><div class="list-item"><div class="item-main"><div class="item-title">Feature comparison</div><div class="item-sub">1 hafta oldin вЂў Ali</div></div>${badge("Closed","badge-success")}</div></div></div>
    ${expanded ? `<div class="inbox-info-card"><h3>Timeline</h3><div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Page visited: /pricing</strong><span class="timeline-time">14:20</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Started widget chat</strong><span class="timeline-time">14:21</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Tagged: Pricing</strong><span class="timeline-time">14:26</span></div></div></div></div>` : ""}
  </div>`;
}

function renderInboxPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  const activeIndex = file === "01-inbox-chat.html" ? -1 : 0;
  const expanded = file === "03-info-sidebar.html";
  const middle = file === "01-inbox-chat.html"
    ? `<div class="empty-state" style="margin:14px;height:calc(100% - 28px)">${icon("message-square-dashed")}<strong>Chat tanlang</strong><p class="text-muted" style="font-size:13px">Chap ro'yxatdan suhbat tanlang yoki yangi chat boshlang.</p></div>`
    : `<div class="inbox-chat-header"><div class="left">${avatar("Ahmad Valiyev")}<div><strong>Ahmad Valiyev</strong><div class="text-muted" style="font-size:12px"><span class="status-dot online"></span> Online вЂў Web</div></div></div><div class="right"><span class="data-pill">${icon("user")} Sardor</span><button class="btn btn-secondary btn-sm" type="button" data-modal-open="assign-agent">${icon("user-plus")} Assign</button><button class="btn btn-ghost btn-sm" type="button">${icon("x")} Yopish</button></div></div><div class="inbox-messages" role="log" aria-live="polite">${inboxMessagesHtml()}</div><div class="inbox-input"><div class="inbox-toolbar"><button class="icon-btn">${icon("smile")}</button><button class="icon-btn" type="button" data-action="log">${icon("paperclip")}</button><button class="icon-btn">${icon("message-square-quote")}</button></div><div class="inbox-send-row"><textarea class="textarea" rows="1" placeholder="Xabar yozing..."></textarea><button class="btn btn-primary">${icon("send")}</button></div></div>`;
  const main = `${shellHeaderBlock(relPath, folderMap, title, "Live chats uchun 3 ustunli operator interfeysi", `${btn("Yangi chat", "primary")} ${btn("Filter", "secondary")}`)}
  <section class="inbox-layout">
    <aside class="inbox-panel">
      <div class="inbox-list-top">
        <div class="input-group">${icon("search")}<input class="input" type="search" placeholder="Mijoz ismi yoki xabar..." style="width:100%"></div>
        <div class="inbox-tabs" role="tablist" aria-label="Chat tabs">
          <button class="tab active" type="button" data-tab-group="inbox-list" data-tab="all">Hammasi</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="active">Faol</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="unread">Javobsiz</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="closed">Yopilgan</button>
        </div>
      </div>
      <div class="inbox-list-scroll" role="listbox" aria-label="Conversations">${inboxChatListHtml(activeIndex)}</div>
    </aside>
    <section class="inbox-panel">${middle}</section>
    <aside class="inbox-panel">${inboxInfoPanel(expanded)}</aside>
  </section>
${modalMarkup("assign-agent","Agent tayinlash", `<div class="list-stack"><button class="list-item" type="button" data-action="log" data-message="Chat Sardor ga tayinlandi"><div class="item-main"><div class="item-title">Sardor A.</div><div class="item-sub">3 active chats</div></div><span class="status-dot online"></span></button><button class="list-item" type="button" data-action="log" data-message="Chat Sara ga tayinlandi"><div class="item-main"><div class="item-title">Sara M.</div><div class="item-sub">5 active chats</div></div><span class="status-dot online"></span></button><button class="list-item" type="button" data-action="log" data-message="Chat Ali ga tayinlandi"><div class="item-main"><div class="item-title">Ali K.</div><div class="item-sub">2 active chats</div></div><span class="status-dot away"></span></button></div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Saqlash","primary",'data-modal-close data-action="save"')}`)}
`;
  return shellPage({ title, activeNav: "inbox", content: main });
}

function renderAutomationPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-working-hours.html") {
    const days = ["Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba","Yakshanba"];
    body = card("Ish vaqti jadvali", `<div class="form-grid one">${formField("Timezone", select(["GMT+5 Toshkent","GMT+3 Istanbul","GMT+6 Almaty"], "GMT+5 Toshkent"))}<div class="table-wrap"><table class="table"><thead><tr><th>Kun</th><th>Holat</th><th>Boshlanish</th><th>Tugash</th></tr></thead><tbody>${days.map((d,i)=>`<tr><td class="cell-strong">${d}</td><td>${toggle(i<5)}</td><td><input class="input" value="${i<5?"09:00":"вЂ”"}" ${i<5?"":"disabled"}></td><td><input class="input" value="${i<5?"18:00":"вЂ”"}" ${i<5?"":"disabled"}></td></tr>`).join("")}</tbody></table></div></div>`);
  } else if (file === "02-auto-reply.html") {
    body = card("Auto reply sozlamalari", `<div class="form-row"><div class="row-copy"><div class="form-label">Auto reply yoqish</div><p class="text-muted" style="font-size:13px">Operator offline bo'lsa avtomatik javob yuboriladi</p></div>${toggle(true)}</div><div class="form-grid">${formField("Delay (soniya)", `<input class="input" type="number" value="8">`)}${formField("Trigger kanal", select(["Barcha kanallar","Faqat Web","Faqat Telegram"], "Barcha kanallar"))}${formField("Xabar matni", textarea("Salom! Operatorlarimiz tez orada javob beradi. Savolingizni yozib qoldiring.", "", 4))}<div>${card("Preview", `<div class="widget-msg">Salom! Operatorlarimiz tez orada javob beradi. Savolingizni yozib qoldiring.</div>`, { className: "card" }).replace(/^\s*<section class="card">|<\/section>$/g, "")}</div></div>`);
  } else if (file === "03-triggers.html") {
    body = `${card("Trigger ro'yxati", simpleTable(["Trigger","Condition","Action","Status"], [
      ["Welcome Lead","First visit && /pricing","Show greeting","<label class='toggle-switch'><input type='checkbox' checked><span class='toggle-track'><span class='toggle-thumb'></span></span></label>"],
      ["VIP Route","Tag=VIP","Assign Sara","<label class='toggle-switch'><input type='checkbox' checked><span class='toggle-track'><span class='toggle-thumb'></span></span></label>"],
      ["Night Auto-close","No reply 30m","Close chat","<label class='toggle-switch'><input type='checkbox'><span class='toggle-track'><span class='toggle-thumb'></span></span></label>"]
    ]), { actions: btn("Yangi trigger", "primary", 'data-modal-open="new-trigger"') })}${modalMarkup("new-trigger","Yangi trigger", `<div class="form-grid one">${formField("Trigger nomi", input("Welcome Lead"))}${formField("Condition", textarea("Page contains /pricing AND visitor is new", "", 3))}${formField("Action", select(["Greeting yuborish","Agentga tayinlash","Tag qo'shish"], "Greeting yuborish"))}</div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Saqlash","primary",'data-modal-close data-action="save"')}`)}`;
  } else {
    body = card("Greeting xabarlari", `<div class="list-stack">${[
      ["Home page welcome","Homepage va visitor new","Salom! Mahsulot haqida savolingiz bormi?",true],
      ["Pricing page helper","/pricing sahifasida","Tariflar bo'yicha yordam kerakmi?",true],
      ["Exit intent","Cursor leave intent","Ketishdan oldin savolingiz bormi?",false]
    ].map((g)=>`<div class="list-item"><div class="item-main"><div class="item-title">${esc(g[0])}</div><div class="item-sub">${esc(g[1])}</div><div class="text-muted" style="font-size:13px">${esc(g[2])}</div></div>${toggle(g[3])}</div>`).join("")}</div>`);
  }
  const content = `${shellHeaderBlock(relPath, folderMap, title, "Automation qoidalari va schedule konfiguratsiyasi", `${btn("Saqlash", "primary", 'data-action="save"')} ${btn("Reset", "secondary", 'data-action="reset-form"')}`)}${body}`;
  return shellPage({ title, activeNav: "automation", content });
}

function renderTeamPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-agents.html") {
    body = card("Agentlar", simpleTable(["Agent","Email","Role","Status","Oxirgi faollik","Actions"], [
      [`<div class='flex gap-2 items-center'>${avatar("Sardor A.")}<span class='cell-strong'>Sardor A.</span></div>`,"sardor@qulaychat.uz",badge("Admin","badge-primary"),"<span class='status-dot online'></span> Online","2m","<span class='text-muted'>Edit вЂў Delete</span>"],
      [`<div class='flex gap-2 items-center'>${avatar("Sara M.")}<span class='cell-strong'>Sara M.</span></div>`,"sara@qulaychat.uz",badge("Manager","badge-info"),"<span class='status-dot away'></span> Away","6m","<span class='text-muted'>Edit вЂў Delete</span>"],
      [`<div class='flex gap-2 items-center'>${avatar("Ali K.")}<span class='cell-strong'>Ali K.</span></div>`,"ali@qulaychat.uz",badge("Operator"),"<span class='status-dot offline'></span> Offline","1h","<span class='text-muted'>Edit вЂў Delete</span>"]
    ]), { actions: linkBtn("Taklif yuborish", "./04-invitations.html", "primary") });
  } else if (file === "02-agent-profile.html") {
    body = `<div class="split-grid">
${card("Agent profili", `<div class="flex gap-4 items-center">${avatar("Sardor A.","avatar-xl")}<div><h3>Sardor A.</h3><p class="text-muted">Senior Support Admin</p><div class="flex gap-2 mt-2">${badge("Admin","badge-primary")}${badge("Online","badge-success")}</div></div></div><div class="divider"></div>${keyValueList([{key:"Email",value:"sardor@qulaychat.uz"},{key:"Phone",value:"+998 90 123 45 67"},{key:"Shift",value:"09:00 - 18:00"},{key:"Language",value:"UZ / EN"}])}`)}
${card("Statistika", `${metricGrid([{label:"Handled chats",value:"1,204",trend:"+9%"},{label:"Avg response",value:"1m 42s",trend:"+4%"},{label:"CSAT",value:"4.9",trend:"+0.2"},{label:"SLA",value:"97%",trend:"+1%"}]).replace('metrics-grid','metrics-grid')}${card("Activity", `<div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>VIP chat assigned</strong><span class="timeline-time">10:12</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Closed #CH-2192</strong><span class="timeline-time">09:48</span></div></div></div>`).replace(/^\s*<section class="card">|<\/section>$/g,'')}`)}
</div>`;
  } else if (file === "03-roles.html") {
    body = `<div class="three-col">${[
      ["Admin","To'liq boshqaruv",["Users","Billing","Developer","Settings","Analytics"],"badge-primary"],
      ["Manager","Jamoa va analytics nazorati",["Users","Analytics","Inbox","Automation"],"badge-info"],
      ["Operator","Faqat operatsion chat ishlari",["Inbox","Contacts","Team Chat"],""]
    ].map((r)=>`<div class="card"><div class="card-header"><div><h3>${r[0]}</h3><p class="card-description">${r[1]}</p></div>${badge(r[0],r[3])}</div><div class="card-body"><div class="list-stack">${["Inbox","Contacts","Visitors","Automation","Team","Analytics","Settings","Billing","Developer"].map((p)=>`<label class="checkbox"><input type="checkbox" ${r[2].indexOf(p)>-1?"checked":""}>${p}</label>`).join("")}</div></div></div>`).join("")}</div>`;
  } else {
    body = `${card("Pending Invitations", simpleTable(["Email","Role","Status","Sent","Actions"], [
      ["operator1@client.uz","Operator",badge("Pending","badge-warning"),"2h ago","Resend вЂў Cancel"],
      ["manager@client.uz","Manager",badge("Pending","badge-warning"),"Yesterday","Resend вЂў Cancel"]
    ]), { actions: btn("Taklif yuborish","primary",'data-modal-open="invite-modal"') })}${modalMarkup("invite-modal","Taklif yuborish", `<div class="form-grid one">${formField("Email", `<input class="input" type="email" placeholder="user@company.uz">`)}${formField("Role", select(["Operator","Manager","Admin"], "Operator"))}</div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Yuborish","primary",'data-modal-close data-action="save"')}`)}`;
  }
  const content = `${shellHeaderBlock(relPath, folderMap, title, "Jamoa, rollar va takliflarni boshqarish", `${btn("Saqlash", "secondary", 'data-action="save"')}`)}${body}`;
  return shellPage({ title, activeNav: "team", content });
}

function renderBillingPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-plan.html") {
    body = `<div class="pricing-comparison">
      <div class="pricing-card"><h3>Free</h3><div class="pricing-price">$0</div><ul class="pricing-list"><li>${icon("check")}1 agent</li><li>${icon("check")}Widget</li><li>${icon("check")}Basic analytics</li></ul>${btn("Current", "secondary", "disabled")}</div>
      <div class="pricing-card featured"><h3>Pro</h3><div class="pricing-price">$29</div><ul class="pricing-list"><li>${icon("check")}10 agents</li><li>${icon("check")}Automation</li><li>${icon("check")}Team Chat</li><li>${icon("check")}Exports</li></ul>${btn("Upgrade", "primary")}</div>
      <div class="pricing-card"><h3>Enterprise</h3><div class="pricing-price">Custom</div><ul class="pricing-list"><li>${icon("check")}SSO</li><li>${icon("check")}SLA</li><li>${icon("check")}Priority Support</li></ul>${btn("Contact sales", "secondary")}</div>
    </div>`;
  } else if (file === "02-payment.html") {
    body = `${card("Saved cards", simpleTable(["Card","Owner","Expires","Default","Actions"], [
      ["Visa вЂўвЂўвЂўвЂў 4242","QULAY CHAT LLC","12/27",badge("Default","badge-success"),"Edit вЂў Remove"],
      ["Mastercard вЂўвЂўвЂўвЂў 9071","QULAY CHAT LLC","09/26","вЂ”","Set default вЂў Remove"]
    ]), { actions: btn("Karta qo'shish","primary",'data-modal-open="add-card"') })}${modalMarkup("add-card","Karta qo'shish", `<div class="form-grid one">${formField("Card number", `<input class="input" placeholder="4242 4242 4242 4242">`)}<div class="two-col">${formField("Expiry", `<input class="input" placeholder="12/27">`)}${formField("CVC", `<input class="input" placeholder="123">`)}</div></div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Saqlash","primary",'data-modal-close data-action="save"')}`)}`;
  } else if (file === "03-invoices.html") {
    body = card("Invoices", simpleTable(["Sana","Invoice ID","Summa","Status","Download"], [
      ["2026-02-01","#INV-2026-021","$29.00",badge("Paid","badge-success"),"<a href='#' style='color:var(--primary)'>PDF</a>"],
      ["2026-01-01","#INV-2026-011","$29.00",badge("Paid","badge-success"),"<a href='#' style='color:var(--primary)'>PDF</a>"],
      ["2025-12-01","#INV-2025-121","$29.00",badge("Paid","badge-success"),"<a href='#' style='color:var(--primary)'>PDF</a>"]
    ]));
  } else {
    body = card("Usage meters", `<div class="usage-meter"><div class="row"><span>Agents</span><strong>7 / 10</strong></div>${progressBar(70)}<div class="row"><span>Monthly chats</span><strong>12,430 / 20,000</strong></div>${progressBar(62)}<div class="row"><span>Storage</span><strong>18 GB / 50 GB</strong></div>${progressBar(36,"success")}</div>`);
  }
  return shellPage({ title, activeNav: "billing", content: `${shellHeaderBlock(relPath, folderMap, title, "Plan, to'lov va invoice boshqaruvi", `${btn("Manage plan", "primary")}`)}${body}` });
}

function renderAnalyticsPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-overview.html") {
    body = `${metricGrid([{label:"Total chats",value:"12,842",trend:"+14%"},{label:"First response",value:"1m 58s",trend:"+7%"},{label:"Resolution",value:"84%",trend:"+2%"},{label:"CSAT",value:"4.8",trend:"+0.3"}])}<div class="two-col">${card("Chat volume", fakeLineChart())}${card("Channels", fakeDonut())}</div>${card("Top segments", simpleTable(["Segment","Chats","Avg response","CSAT"], [["New visitors","4,102","2m 11s","4.7"],["Returning","3,881","1m 43s","4.9"],["VIP","402","0m 58s","4.9"]]))}`;
  } else if (file === "02-response-times.html") {
    body = `${card("Response time trend", fakeLineChart())}<div class="three-col">${card("Average", "<div class='metric-value'>1m 58s</div><div class='metric-trend'>-12%</div>")}${card("Median", "<div class='metric-value'>1m 21s</div><div class='metric-trend'>-9%</div>")}${card("p95", "<div class='metric-value'>5m 44s</div><div class='metric-trend down'>+6%</div>")}</div>`;
  } else if (file === "03-operators.html") {
    body = card("Operator performance", simpleTable(["Agent","Chats","Avg response","Resolution","CSAT"], [["Sardor A.","412","1m 42s","88%","4.9"],["Sara M.","355","2m 01s","83%","4.8"],["Ali K.","298","2m 14s","80%","4.6"]]), { actions: linkBtn("Detail", "./04-operator-detail.html", "secondary") });
  } else if (file === "04-operator-detail.html") {
    body = `<div class="split-grid">${card("Operator card", `<div class="flex gap-3 items-center">${avatar("Sardor A.","avatar-xl")}<div><h3>Sardor A.</h3><p class="text-muted">Admin вЂў Day shift</p>${badge("Online","badge-success")}</div></div>${keyValueList([{key:"Handled chats",value:"412"},{key:"Avg response",value:"1m 42s"},{key:"CSAT",value:"4.9"},{key:"SLA",value:"98%"}])}`)}${card("Weekly trend", fakeLineChart())}</div>${card("Breakdown by channel", simpleTable(["Channel","Chats","Avg response","CSAT"], [["Web","220","1m 35s","4.9"],["Telegram","121","2m 02s","4.8"],["Email","71","2m 31s","4.7"]]))}`;
  } else if (file === "05-sla.html") {
    body = card("SLA compliance", `<div class="stack"><div><div class="flex justify-between"><strong>First response SLA</strong><span class="text-muted">94%</span></div>${progressBar(94)}</div><div><div class="flex justify-between"><strong>Resolution SLA</strong><span class="text-muted">87%</span></div>${progressBar(87,"warning")}</div><div><div class="flex justify-between"><strong>VIP SLA</strong><span class="text-muted">98%</span></div>${progressBar(98,"success")}</div><div class="alert alert-danger">${icon("alert-circle")}<div>Bugun 4 ta breach qayd etildi. Asosiy sabab: kech assignment.</div></div></div>`);
  } else if (file === "06-channels.html") {
    body = `<div class="two-col">${card("Channel share", fakeDonut())}${card("Channel volume", fakeBars(6,["Web","TG","WA","Email","IG","FB"]))}</div>`;
  } else if (file === "07-segments.html") {
    body = card("Segment breakdown", simpleTable(["Segment","Users","Chats","Conv rate","CSAT"], [["New Visitors","4,812","6,421","18%","4.7"],["Returning","2,944","4,203","25%","4.8"],["VIP","344","892","42%","4.9"]]));
  } else if (file === "08-tags.html") {
    body = `${card("Tag cloud", `<div class="tag-cloud">${["Pricing","Lead","Bug","Billing","Refund","Technical","Sales","Enterprise","VIP","Urgent","Integration","Widget"].map((t,i)=>`<span class="badge ${i%3===0?"badge-primary":i%3===1?"badge-info":"badge-warning"}">${t}</span>`).join("")}</div>`)}${card("Tag frequency", simpleTable(["Tag","Count","Avg response","Resolution"], [["Pricing","482","1m 45s","84%"],["Technical","321","2m 22s","79%"],["Billing","198","2m 01s","91%"]]))}`;
  } else if (file === "09-custom-reports.html") {
    body = `${card("Report builder", `<div class="kanban"><div class="kanban-col"><h4>Available metrics</h4><div class="kanban-card">Chats count</div><div class="kanban-card">Response time</div><div class="kanban-card">CSAT</div><div class="kanban-card">SLA breach</div></div><div class="kanban-col"><h4>Selected columns</h4><div class="kanban-card">Date</div><div class="kanban-card">Agent</div><div class="kanban-card">Channel</div></div><div class="kanban-col"><h4>Filters</h4><div class="kanban-card">Date range: Last 30 days</div><div class="kanban-card">Channel = Web</div><div class="kanban-card">Team = Support</div></div></div>`, { actions: `${btn("Save report","primary")} ${btn("Preview","secondary")}` })}`;
  } else if (file === "10-export.html") {
    body = `${card("Export report", `<div class="form-grid"><div>${formField("Format", select(["CSV","PDF","Excel"], "CSV"))}</div><div>${formField("Date range", `<div class="date-range">${icon("calendar")}Last 30 days</div>`)}</div><div>${formField("Include fields", select(["All fields","Summary only"], "All fields"))}</div><div class="flex items-center" style="align-self:end">${btn("Download export","primary",'data-action="export"')}</div></div>`)}${card("Recent exports", simpleTable(["Created","Format","Range","Status"], [["14:21","CSV","Last 30 days",badge("Ready","badge-success")],["Yesterday","PDF","This month",badge("Ready","badge-success")],["2 days ago","Excel","Custom",badge("Processing","badge-warning")]]))}`;
  } else {
    body = `${metricGrid([{label:"My chats",value:"412",trend:"+8%"},{label:"Avg response",value:"1m 42s",trend:"+6%"},{label:"CSAT",value:"4.9",trend:"+0.1"},{label:"Resolved",value:"88%",trend:"+4%"}])}<div class="two-col">${card("My weekly activity", fakeLineChart())}${card("Personal channel split", fakeDonut([{label:"Web",color:"#4F46E5",value:"62%"},{label:"Telegram",color:"#10B981",value:"18%"},{label:"Email",color:"#F59E0B",value:"20%"}]))}</div>`;
  }
  const header = `${shellHeaderBlock(relPath, folderMap, title, "Analytics dashboard va reportlar", `<div class="analytics-topbar"><div class="date-range">${icon("calendar")}Oxirgi 30 kun</div>${btn("Export", "secondary", 'data-action="export"')}</div>`)}`;
  return shellPage({ title, activeNav: "analytics", content: `${header}${body}` });
}

function settingsTabsHtml(currentFile) {
  const tabs = [["01-workspace.html","Workspace"],["02-widget-settings.html","Widget"],["03-security.html","Security"],["04-notifications.html","Notifications"],["05-profile.html","Profile"],["06-privacy-export.html","Privacy"]];
  return `<div class="settings-tabs">${tabs.map(([file,label]) => `<a href="./${file}" class="${currentFile===file || (label==="Privacy" && /^0[678]-/.test(currentFile)) ? "active" : ""}">${label}</a>`).join("")}</div>`;
}

function renderSettingsPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-workspace.html") {
    body = `<section class="settings-section"><h3>Workspace</h3><p class="section-desc">Workspace nomi, domen va locale sozlamalari</p><div class="form-grid"><div>${formField("Workspace nomi", input("QULAY CHAT Support"))}</div><div>${formField("URL", `<input class="input" value="support.qulaychat.uz">`)}</div><div>${formField("Timezone", select(["GMT+5 Toshkent","GMT+3 Istanbul","GMT+6 Almaty"], "GMT+5 Toshkent"))}</div><div>${formField("Til", select(["O'zbek","English","Р СѓСЃСЃРєРёР№"], "O'zbek"))}</div></div><div class="two-col"><div class="dropzone">${icon("upload-cloud")}<div>Logo yuklash</div><small>PNG / JPG / SVG</small></div><div>${formField("Workspace description", textarea("Mijoz support va sales chatlari uchun umumiy workspace.", "", 5))}</div></div></section>`;
  } else if (file === "02-widget-settings.html") {
    body = `<section class="settings-section"><h3>Widget Preview</h3><p class="section-desc">Color, position va welcome message</p><div class="two-col"><div><div class="form-grid one"><div class="form-field"><span class="form-label">Asosiy rang</span><div class="preset-colors"><span class="color-swatch active" style="background:#4F46E5"></span><span class="color-swatch" style="background:#2563EB"></span><span class="color-swatch" style="background:#059669"></span><span class="color-swatch" style="background:#DC2626"></span></div></div>${formField("Position", select(["Bottom right","Bottom left","Right center"], "Bottom right"))}${formField("Welcome xabar", textarea("Salom! Sizga qanday yordam bera olamiz?", "", 3))}${formField("Offline xabar", textarea("Hozir operator mavjud emas. Xabar qoldiring.", "", 3))}</div>${codeBlock(`<script src="https://cdn.qulaychat.uz/widget.js" data-id="cf_demo_01"></script>`, "widget-settings-code")}</div><div>${widgetStateWindow("chat")}</div></div></section>`;
  } else if (file === "03-security.html") {
    body = `<section class="settings-section"><h3>Security</h3><p class="section-desc">Parol, 2FA va session boshqaruvi</p><div class="form-grid"><div>${formField("Current password", `<input class="input" type="password" placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў">`)}</div><div>${formField("New password", `<input class="input" type="password" placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў">`)}</div></div><div class="form-row"><div class="row-copy"><div class="form-label">2FA</div><p class="text-muted" style="font-size:13px">Login paytida qo'shimcha kod talab qilinadi</p></div>${toggle(true)}</div>${simpleTable(["Device","Location","Last active","Action"], [["Chrome вЂў macOS","Toshkent","Now","Revoke"],["Safari вЂў iPhone","Samarkand","Yesterday","Revoke"]])}</section>`;
  } else if (file === "04-notifications.html") {
    body = `<section class="settings-section"><h3>Notifications</h3><p class="section-desc">Email, push va sound kanallari</p><div class="form-grid three">${[["New chat","Push",true],["New message","Push",true],["Urgent chat","Push",true],["Weekly digest","Email",true],["SLA breach","Email",true],["Billing updates","Email",false],["Sound alerts","Sound",true],["Mentions","Sound",true],["Team chat","Sound",false]].map((n)=>`<div class="card"><div class="card-body"><div class="flex justify-between items-center"><div><div class="item-title">${n[0]}</div><div class="item-sub">${n[1]}</div></div>${toggle(n[2])}</div></div></div>`).join("")}</div></section>`;
  } else if (file === "05-profile.html") {
    body = `<section class="settings-section"><h3>Profile</h3><p class="section-desc">Avatar va shaxsiy ma'lumotlar</p><div class="two-col"><div class="flex gap-4 items-center">${avatar("Sardor A.","avatar-xxl")}<div><button class="btn btn-secondary">Avatar yuklash</button><p class="text-muted" style="font-size:12px;margin-top:6px">PNG/JPG, max 2MB</p></div></div><div class="form-grid one">${formField("Ism", input("Sardor Aliyev"))}${formField("Email", `<input class="input" type="email" value="sardor@qulaychat.uz" readonly>`)}${formField("Telefon", `<input class="input" value="+998 90 123 45 67">`)}</div></div></section>`;
  } else if (file === "06-privacy-export.html") {
    body = `<section class="settings-section"><h3>Data export</h3><p class="section-desc">Foydalanuvchi ma'lumotlarini eksport qilish</p><div class="form-grid"><div>${formField("Format", select(["JSON","CSV","ZIP"], "ZIP"))}</div><div>${formField("Date range", `<div class="date-range">${icon("calendar")}Last 90 days</div>`)}</div></div><div class="alert alert-info">${icon("shield-check")}<div>Export tayyor bo'lgach email orqali yuboriladi.</div></div><div>${btn("Exportni boshlash","primary",'data-action="export"')}</div></section>`;
  } else if (file === "07-privacy-delete.html") {
    body = `<section class="settings-section"><h3>Delete data</h3><p class="section-desc">Xavfli amal: workspace yoki account ma'lumotlarini o'chirish</p><div class="alert alert-danger">${icon("triangle-alert")}<div>Bu amal qaytarilmaydi. Davom etishdan oldin barcha exportlarni yuklab oling.</div></div>${formField("Tasdiqlash uchun workspace nomini kiriting", `<input class="input" placeholder="QULAY CHAT Support">`)}<div class="flex gap-2">${btn("Delete request", "danger", 'data-modal-open="delete-confirm"')}</div></section>${modalMarkup("delete-confirm","Delete confirmation", `<p class="text-muted">Haqiqatan ham delete request yuborilsinmi?</p>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Tasdiqlash","danger",'data-modal-close data-action="log" data-message="Delete request yuborildi"')}`)}`;
  } else {
    body = `<section class="settings-section"><h3>Privacy settings</h3><p class="section-desc">Retention, cookie va data sharing boshqaruvi</p><div class="form-row"><div class="row-copy"><div class="form-label">Cookie analytics</div><p class="text-muted" style="font-size:13px">Anonim usage statistikalarini yig'ish</p></div>${toggle(true)}</div><div class="form-row"><div class="row-copy"><div class="form-label">Marketing emails</div><p class="text-muted" style="font-size:13px">Yangilik va feature email xabarlari</p></div>${toggle(false)}</div><div class="form-grid"><div>${formField("Data retention", select(["30 days","90 days","180 days","1 year"], "180 days"))}</div><div>${formField("Download logs", select(["Enabled","Disabled"], "Enabled"))}</div></div></section>`;
  }
  const content = `${shellHeaderBlock(relPath, folderMap, "Sozlamalar", "Workspace, widget, security va privacy boshqaruvi", "")}<section class="settings-card">${settingsTabsHtml(file)}<div class="settings-body">${body}</div><div class="sticky-save-bar">${btn("Bekor qilish","secondary",'data-action="reset-form"')} ${btn("Saqlash","primary",'data-action="save"')}</div></section>`;
  return shellPage({ title, activeNav: "settings", content, bodyClass: "settings-shell" });
}

function renderContactsPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-contacts-list.html") {
    body = `${card("Filters", `<div class="form-grid three"><div class="input-group">${icon("search")}<input class="input" placeholder="Search contact"></div><div>${select(["All segments","VIP","Leads","Customers"], "All segments")}</div><div>${select(["Last contact","Name A-Z","Recently added"], "Last contact")}</div></div>`)}${card("Kontaktlar ro'yxati", simpleTable(["Kontakt","Email","Company","Last contact","Tags"], [[`<div class='flex gap-2 items-center'>${avatar("Ahmad V")}<span class='cell-strong'>Ahmad V.</span></div>`,"ahmad@example.com","ACME","2h","Pricing, Lead"],[`<div class='flex gap-2 items-center'>${avatar("Nodira T")}<span class='cell-strong'>Nodira T.</span></div>`,"nodira@example.com","Nexa","Yesterday","VIP"],[`<div class='flex gap-2 items-center'>${avatar("Rustam K")}<span class='cell-strong'>Rustam K.</span></div>`,"rustam@example.com","Logi","3d","Support"]]))}`;
  } else if (file === "02-contact-profile.html") {
    body = `<div class="split-grid">${card("Kontakt ma'lumotlari", `<div class="flex gap-3 items-center">${avatar("Ahmad Valiyev","avatar-xl")}<div><h3>Ahmad Valiyev</h3><p class="text-muted">ACME вЂў ahmad@example.com</p></div></div>${keyValueList([{key:"Phone",value:"+998 90 222 33 44"},{key:"Status",value:"Lead"},{key:"Owner",value:"Sardor A."},{key:"Last seen",value:"2h ago"}])}`)}${card("Chat tarixi", `<div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Pricing chat</strong><span class="timeline-time">Today</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Demo follow-up</strong><span class="timeline-time">Yesterday</span></div></div></div>`)} </div>${card("Notes & Tags", `<div class="tag-cloud">${badge("Lead","badge-info")}${badge("Pricing","badge-primary")}${badge("Demo","badge-warning")}</div><div class="mt-3">${textarea("Qiziqish yuqori. Pro plan demo talab qilishi mumkin.", "", 4)}</div>`)}`;
  } else if (file === "03-organizations.html") {
    body = card("Organizations", simpleTable(["Org","Website","Contacts","Last activity"], [["ACME","acme.uz","42","10m ago"],["Nexa Market","nexa.uz","19","2h ago"],["Logi Group","logi.uz","7","Yesterday"]]));
  } else if (file === "04-org-detail.html") {
    body = `<div class="split-grid">${card("Organization", keyValueList([{key:"Name",value:"ACME"},{key:"Website",value:"acme.uz"},{key:"Industry",value:"Retail"},{key:"Contacts",value:"42"}]))}${card("Related contacts", simpleTable(["Name","Role","Email"], [["Ahmad V.","PM","ahmad@acme.uz"],["Nodira T.","Sales","nodira@acme.uz"],["Olim E.","Support","olim@acme.uz"]]))}</div>`;
  } else if (file === "05-segments.html") {
    body = `<div class="two-col">${card("Segmentlar", `<div class="list-stack"><div class="list-item"><div class="item-main"><div class="item-title">VIP Customers</div><div class="item-sub">42 contacts вЂў CSAT 4.9</div></div>${badge("Active","badge-success")}</div><div class="list-item"><div class="item-main"><div class="item-title">Pricing Leads</div><div class="item-sub">318 contacts вЂў Last 30 days</div></div>${badge("Dynamic","badge-info")}</div></div>`)}${card("Filter builder", `<div class="kanban"><div class="kanban-col"><h4>Fields</h4><div class="kanban-card">Country</div><div class="kanban-card">Tag</div><div class="kanban-card">Last contact</div></div><div class="kanban-col"><h4>Conditions</h4><div class="kanban-card">Country = UZ</div><div class="kanban-card">Tag contains VIP</div></div><div class="kanban-col"><h4>Output</h4><div class="kanban-card">Preview 42 contacts</div></div></div>`)}</div>`;
  } else {
    body = `<div class="two-col">${card("Import CSV", `<div class="dropzone">${icon("upload-cloud")}<div>CSV faylni tortib tashlang</div><small>Contact import template</small></div>`)}${card("Export contacts", `<div class="form-grid one">${formField("Format", select(["CSV","XLSX","JSON"], "CSV"))}${formField("Segment", select(["All contacts","VIP Customers","Pricing Leads"], "All contacts"))}<div class="flex gap-2">${btn("Download", "primary", 'data-action="export"')}${btn("Schedule export","secondary")}</div></div>`)}</div>`;
  }
  return shellPage({ title, activeNav: "contacts", content: `${shellHeaderBlock(relPath, folderMap, title, "CRM kontaktlar, tashkilotlar va segmentlar", "")}${body}` });
}

function renderVisitorsPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-visitors-list.html") {
    body = `${card("Real-time visitors", simpleTable(["IP","Location","Current page","Duration","Status"], [["185.8.212.34","UZ вЂў Toshkent","/pricing","03:14","<span class='status-dot online'></span> Active"],["91.204.155.1","KZ вЂў Almaty","/features","01:02","<span class='status-dot away'></span> Idle"],["37.110.214.8","TR вЂў Istanbul","/contact","00:31","<span class='status-dot online'></span> Active"]]), { actions: `<span class="badge badge-info">${icon("refresh-cw")} Auto-refresh</span>` })}`;
  } else if (file === "02-visitor-profile.html") {
    body = `<div class="split-grid">${card("Visitor profile", keyValueList([{key:"IP",value:"185.8.212.34"},{key:"Location",value:"Toshkent, UZ"},{key:"Browser",value:"Chrome 122 / Windows"},{key:"Session",value:"07m 12s"}]))}${card("Pages visited", `<div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>/landing</strong><span class="timeline-time">14:18</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>/pricing</strong><span class="timeline-time">14:20</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Widget opened</strong><span class="timeline-time">14:21</span></div></div></div>`)}</div>`;
  } else {
    body = `${card("Visitors map", `<div class="world-map"><svg viewBox="0 0 1000 500" preserveAspectRatio="none"><path d="M84 209c34-22 61-41 89-36 26 4 52 28 80 32 28 3 59-14 90-10 26 4 51 30 81 31 28 1 56-21 84-22 29-1 58 18 88 18 29 0 54-20 81-22 28-2 51 13 79 9 28-4 44-30 74-36 29-5 70 9 92 29" fill="none" stroke="#CBD5E1" stroke-width="8" stroke-linecap="round"/></svg><span class="map-marker" style="left:56%;top:42%"></span><span class="map-marker" style="left:61%;top:37%"></span><span class="map-marker" style="left:74%;top:34%"></span><span class="map-marker" style="left:47%;top:30%"></span></div>`)}`;
  }
  return shellPage({ title, activeNav: "visitors", content: `${shellHeaderBlock(relPath, folderMap, title, "Online visitor kuzatuvi va profiling", "")}${body}` });
}

function renderTeamChatPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-team-chat.html") {
    body = `<section class="slack-layout"><aside class="channel-list"><div class="channel-group"><h4>Channels</h4><a class="channel-item active" href="#"># support <span class="badge badge-primary">3</span></a><a class="channel-item" href="#"># sales</a><a class="channel-item" href="#"># bugs</a></div><div class="channel-group"><h4>Direct</h4><a class="channel-item" href="#">Sardor</a><a class="channel-item" href="#">Sara</a><a class="channel-item" href="#">Ali</a></div></aside><div class="team-chat-main"><div class="head"><div><strong># support</strong><div class="text-muted" style="font-size:12px">5 members</div></div><div class="flex gap-2">${btn("Room settings","secondary",'data-nav="./02-room-settings.html"')}</div></div><div class="messages">${["Sprint demo 16:00 da boshlanadi.","Inboxda VIP queue ko'paydi, assignmentni tekshiramiz.","Men auto-reply triggerni update qildim.","Yaxshi, kechqurun SLA dashboardni export qilaman."].map((m,i)=>`<div class="msg-group ${i%2?"out":"in"}"><div class="msg-bubble">${esc(m)}</div><div class="msg-meta">${i%2?"Sardor":"Sara"} вЂў 14:${20+i}</div></div>`).join("")}</div><div class="composer"><textarea class="textarea" rows="1" placeholder="Xabar yozing..."></textarea><button class="btn btn-primary">${icon("send")}</button></div></div></section>`;
  } else if (file === "02-room-settings.html") {
    body = `${card("Room settings", `<div class="form-grid"><div>${formField("Room name", input("support"))}</div><div>${formField("Topic", input("Live inbox coordination"))}</div></div><div class="form-row"><div class="row-copy"><div class="form-label">Mute notifications</div><p class="text-muted" style="font-size:13px">Ushbu room uchun bildirishnomalarni vaqtincha o'chirish</p></div>${toggle(false)}</div>${simpleTable(["Member","Role","Status"], [["Sardor","Admin","Online"],["Sara","Manager","Online"],["Ali","Operator","Away"]])}`)}`;
  } else {
    body = `${card("Team chat notifications", `<div class="form-grid three">${[["Mentions",true],["Channel activity",true],["Direct messages",true],["Sound",false],["Desktop popup",true],["Email summary",false]].map((n)=>`<div class="card"><div class="card-body"><div class="flex justify-between items-center"><span>${n[0]}</span>${toggle(n[1])}</div></div></div>`).join("")}</div>`)}`;
  }
  return shellPage({ title, activeNav: "team-chat", content: `${shellHeaderBlock(relPath, folderMap, title, "Slack-uslubdagi jamoa suhbat interfeysi", "")}${body}` });
}

function renderKnowledgeBasePage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-kb-dashboard.html") {
    body = `${metricGrid([{label:"Articles",value:"248",trend:"+12"},{label:"Views",value:"18.2k",trend:"+9%"},{label:"Searches",value:"4.1k",trend:"+4%"},{label:"Helpfulness",value:"92%",trend:"+2%"}])}${card("Recent articles", `<div class="kb-article-grid">${["Widget o'rnatish","API key yaratish","Billing invoice yuklash","SLA sozlash"].map((t)=>`<a class="article-card" href="./02-article-editor.html"><strong>${t}</strong><span class="text-muted" style="font-size:13px">Updated 2 days ago</span>${badge("Published","badge-success")}</a>`).join("")}</div>`)}`;
  } else if (file === "02-article-editor.html") {
    body = `${card("Article editor", `<div class="editor-shell"><div class="editor-toolbar">${["bold","italic","underline","list","list-ordered","link","image","quote"].map((i)=>`<button class="btn btn-secondary btn-sm">${icon(i)}</button>`).join("")}${btn("Publish","primary","style='margin-left:auto'")}</div><div class="editor-canvas"><h2 style="font-size:22px">Widget o'rnatish bo'yicha qo'llanma</h2><p class="text-muted" style="margin-top:8px">QULAY CHAT widget snippetni saytingizga qo'shish bosqichlari...</p><div class="placeholder-line" style="width:88%;margin-top:16px"></div><div class="placeholder-line" style="width:94%"></div><div class="placeholder-line" style="width:86%"></div><div class="placeholder-line" style="width:90%;height:140px;border-radius:14px"></div></div></div>`)}`;
  } else if (file === "03-categories.html") {
    body = `${card("Categories", `<div class="list-stack">${["Getting Started","Inbox & Chat","Automation","Analytics","Billing","Developer API"].map((c,i)=>`<div class="list-item"><div class="item-main"><div class="item-title">${c}</div><div class="item-sub">${14+i*3} articles</div></div><div class="flex gap-2">${icon("grip-vertical")}${btn("Edit","secondary")}</div></div>`).join("")}</div>`)}`;
  } else if (file === "04-kb-settings.html") {
    body = `${card("KB Settings", `<div class="form-grid"><div>${formField("Knowledge Base domain", `<input class="input" value="help.qulaychat.uz">`)}</div><div>${formField("Theme", select(["Light","Brand","Minimal"], "Brand"))}</div><div>${formField("SEO title", input("QULAY CHAT Yordam Markazi"))}</div><div>${formField("Default language", select(["O'zbek","English","Р СѓСЃСЃРєРёР№"], "O'zbek"))}</div></div>${formField("SEO description", textarea("QULAY CHAT platformasi bo'yicha qo'llanmalar va savollarga javoblar.", "", 3))}`)}`;
  } else {
    body = `${card("KB analytics", simpleTable(["Article","Views","Search hits","Helpful"], [["Widget install","4,221","802","93%"],["API keys","2,118","441","89%"],["Billing invoices","1,590","215","90%"]]))}${card("Search terms", simpleTable(["Term","Count","Result rate"], [["widget install","221","96%"],["telegram integration","180","88%"],["invoice","133","92%"]]))}`;
  }
  return shellPage({ title, activeNav: "knowledge-base", content: `${shellHeaderBlock(relPath, folderMap, title, "Knowledge base kontenti va analytics", "")}${body}` });
}

function renderAddonsPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-addons-catalog.html") {
    body = `<div class="addon-grid">${[["Telegram Bot","Live chatlarni Telegram kanaliga yo'naltirish","$9/mo","bot"],["CRM Sync","Kontaktlarni tashqi CRM bilan sinxronlash","$19/mo","refresh-cw"],["Slack Alerts","Urgent chatlar uchun Slack notification","Free","bell"],["AI Summary","Chat summary va tag tavsiyalari","$29/mo","sparkles"]].map((a)=>`<div class="addon-card"><div class="addon-icon">${icon(a[3])}</div><h3>${a[0]}</h3><p class="text-muted" style="font-size:13px">${a[1]}</p><div class="flex justify-between items-center"><strong>${a[2]}</strong>${linkBtn("Install","./03-addon-detail.html","primary")}</div></div>`).join("")}</div>`;
  } else if (file === "02-active-addons.html") {
    body = `${card("Active add-ons", `<div class="list-stack">${[["Telegram Bot","Connected to @qulaychat_support",true],["Slack Alerts","Channel #support-alerts",true],["CRM Sync","Sync paused due token expiry",false]].map((a)=>`<div class="list-item"><div class="item-main"><div class="item-title">${a[0]}</div><div class="item-sub">${a[1]}</div></div>${toggle(a[2])}</div>`).join("")}</div>`)}`;
  } else if (file === "03-addon-detail.html") {
    body = `${card("Add-on detail", `<div class="split-grid"><div><h3>Telegram Bot</h3><p class="text-muted" style="margin-top:6px">Telegram orqali operatorga notification yuborish va reply sync qilish.</p><div class="mini-bars" style="margin-top:14px;height:220px"><div class="mini-bar-col"><div class="mini-bar" style="height:160px"></div><span>Screenshot</span></div><div class="mini-bar-col"><div class="mini-bar" style="height:120px"></div><span>Preview</span></div><div class="mini-bar-col"><div class="mini-bar" style="height:180px"></div><span>Flow</span></div></div></div><div>${keyValueList([{key:"Price",value:"$9/mo"},{key:"Version",value:"1.4.2"},{key:"Installs",value:"1,248"},{key:"Category",value:"Messaging"}])}<div class="mt-4">${btn("Install add-on","primary")}</div></div></div><div class="divider"></div><ul class="pricing-list"><li>${icon("check")}Incoming message sync</li><li>${icon("check")}Reply from Telegram</li><li>${icon("check")}Agent assignment alerts</li></ul>`)}`;
  } else {
    body = `${card("Add-on settings", `<div class="form-grid one">${formField("Bot token", `<input class="input" value="123456:ABCвЂўвЂўвЂўвЂў">`)}${formField("Target channel", `<input class="input" value="@qulaychat_support">`)}${formField("Events", select(["All events","Urgent only","Assigned chats"], "All events"))}<div class="form-row"><div class="row-copy"><div class="form-label">Send full transcript</div><p class="text-muted" style="font-size:13px">Har bir close holatida transcript yuborish</p></div>${toggle(true)}</div></div>`)}`;
  }
  return shellPage({ title, activeNav: "addons", content: `${shellHeaderBlock(relPath, folderMap, title, "Add-on katalogi va konfiguratsiya", "")}${body}` });
}

function renderDeveloperPage(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";
  if (file === "01-api-keys.html") {
    body = `${card("API keys", simpleTable(["Key name","API key","Created","Last used","Actions"], [["Backend Prod","cf_live_вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўc1a2","2026-01-11","2h ago","Revoke"],["Internal Tools","cf_live_вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂўd9f3","2025-12-20","Yesterday","Revoke"]]), { actions: btn("Generate new key","primary",'data-modal-open="new-key"') })}${modalMarkup("new-key","Generate API key", `<div class="form-grid one">${formField("Key name", input("Backend Prod"))}${formField("Permissions", select(["Read + Write","Read only","Webhook scope"], "Read + Write"))}</div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Generate","primary",'data-modal-close data-action="save"')}`)}`;
  } else if (file === "02-webhooks.html") {
    body = `${card("Webhooks", simpleTable(["URL","Events","Status","Last triggered","Actions"], [["https://api.client.uz/qulaychat/webhook","chat.created, chat.closed",badge("Active","badge-success"),"5m ago","Edit вЂў Disable"],["https://n8n.client.uz/hooks/qulaychat","contact.updated",badge("Paused","badge-warning"),"2d ago","Edit вЂў Enable"]]), { actions: btn("Add webhook","primary") })}`;
  } else {
    body = `${card("API logs", `<div class="table-wrap"><table class="table mono"><thead><tr><th>Timestamp</th><th>Method</th><th>Endpoint</th><th>Status</th><th>RT</th></tr></thead><tbody>${[["2026-02-22 14:21:11","POST","/v1/chats","201","124ms"],["2026-02-22 14:20:55","GET","/v1/contacts/123","200","62ms"],["2026-02-22 14:20:03","POST","/v1/webhooks/test","500","488ms"],["2026-02-22 14:19:41","GET","/v1/analytics/overview","200","211ms"]].map((r)=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]==="500"?`<span class="badge badge-danger">${r[3]}</span>`:`<span class="badge badge-success">${r[3]}</span>`}</td><td>${r[4]}</td></tr>`).join("")}</tbody></table></div>`, { description: "API request tracing va troubleshooting" })}`;
  }
  return shellPage({ title, activeNav: "developer", content: `${shellHeaderBlock(relPath, folderMap, title, "API keys, webhooks va request loglar", "")}${body}` });
}

function renderLandingPageV2() {
  const features = [
    ["Bitta Inbox", "Web, Telegram, Instagram va Email kanallaridan kelgan barcha xabarlarni bitta operator navbatida boshqaring va SLA bo'yicha kuzating.", "inbox", "Unified routing, assignment va smart filters."],
    ["Automation", "Working hours, auto-reply, trigger va greeting ssenariylarini no-code tarzda ishga tushiring.", "zap", "Lead capture, routing va follow-up flowlar."],
    ["Analytics", "Javob vaqti, CSAT, SLA breach va agent samaradorligini real vaqt dashboardlarda ko'ring.", "bar-chart-3", "Eksport va custom report builder bilan."],
    ["Knowledge Base", "Yordam markazi, maqola kategoriyalari va qidiruv analytics orqali self-service ni kuchaytiring.", "book-open", "Mijoz support yuklamasini kamaytiradi."]
  ];
  const pricing = [
    { name: "Starter", price: "$0", subtitle: "Kichik jamoalar uchun", items: ["1 agent", "Web widget", "Basic inbox", "7 kun analytics"], cta: "Boshlash", href: "../02-auth/02-register.html" },
    { name: "Pro", price: "$29", subtitle: "Har oy / agent workspace", items: ["10 agent", "Automation", "Analytics", "Team chat", "Export"], cta: "Boshlash", href: "../02-auth/02-register.html", featured: true },
    { name: "Enterprise", price: "Custom", subtitle: "Korporativ jamoalar", items: ["SSO", "Advanced security", "Priority SLA", "Custom onboarding", "Dedicated CSM"], cta: "Sales bilan bog'lanish", href: "../02-auth/02-register.html" }
  ];
  const testimonials = [
    ["Madina Yoqubova", "Nexa Market", "QULAY CHAT bilan first response time 38% ga tushdi. Operatorlar endi Telegram va web chatni alohida tekshirmaydi."],
    ["Bekzod Karimov", "EduPro", "Onboarding juda tez: widgetni 10 daqiqada ishga tushirdik va ertasi kuni analytics hisobot tayyor bo'ldi."],
    ["Sarvinoz T.", "LogiHub", "Automation triggerlar yordamida VIP leadlar to'g'ridan-to'g'ri senior agentlarga tushmoqda."]
  ];
  const content = `  <div class="marketing-shell">
    <header class="marketing-header">
      <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a>
      <nav class="marketing-nav">
        <a href="#imkoniyatlar">Imkoniyatlar</a>
        <a href="#qanday-ishlaydi">Qanday ishlaydi</a>
        <a href="#integrations">Integratsiyalar</a>
        <a href="#tariflar">Tariflar</a>
      </nav>
      <div class="flex gap-2">
        ${linkBtn("Kirish", "../02-auth/01-login.html", "ghost")}
        ${linkBtn("Bepul boshlash", "../02-auth/02-register.html", "primary")}
      </div>
    </header>
    <main class="marketing-main">
      <section class="hero-grid">
        <div class="hero-panel">
          <span class="badge badge-primary">Omnichannel support platformasi</span>
          <h1 style="margin-top:12px">Mijoz suhbatlarini Intercom darajasidagi boshqaruv panelida boshqaring</h1>
          <p class="lead">QULAY CHAT web widget, Telegram, WhatsApp, Instagram va Email xabarlarini yagona inbox'da birlashtiradi. Jamoangiz javob vaqtini qisqartiradi, automation bilan yuklamani kamaytiradi va analytics orqali aniq nazorat qiladi.</p>
          <div class="hero-cta">
            ${linkBtn("Bepul boshlash", "../02-auth/02-register.html", "primary")}
            ${linkBtn("Demo ko'rish", "../04-dashboard/01-dashboard.html", "secondary")}
          </div>
          <div class="hero-proof">
            <span>${badge("14 kunlik trial", "badge-success")}</span>
            <span>${badge("Kartasiz boshlash", "badge-info")}</span>
            <span>${badge("UZ + EN support", "badge-primary")}</span>
          </div>
        </div>
        <div class="hero-visual hero-visual-elevated">
          <div class="mock-window">
            <div class="mock-window-head"><span></span><span></span><span></span></div>
            <div class="mock-window-body">
              <div class="mock-side">
                <div></div><div></div><div></div><div></div><div></div>
                <div style="height:66px"></div>
              </div>
              <div class="mock-content">
                <div class="mock-metric-grid"><div></div><div></div><div></div></div>
                <div class="mock-chart"></div>
                <div class="list-stack">
                  <div class="list-item"><div class="item-main"><div class="item-title">Ahmad V.</div><div class="item-sub">Tariflar bo'yicha savol</div></div><span class="badge badge-danger">Urgent</span></div>
                  <div class="list-item"><div class="item-main"><div class="item-title">Dilnoza R.</div><div class="item-sub">Telegram integratsiya</div></div><span class="badge badge-warning">Waiting</span></div>
                  <div class="list-item"><div class="item-main"><div class="item-title">Rustam K.</div><div class="item-sub">Invoice so'rovi</div></div><span class="badge badge-success">Resolved</span></div>
                </div>
                <div class="mini-bars" style="height:120px">${["Dush","Sesh","Chor","Pay","Jum","Shan","Yak"].map((d,i)=>`<div class="mini-bar-col"><div class="mini-bar" style="height:${44 + (i*7 % 36)}px"></div><span>${d}</span></div>`).join("")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="trust-bar">
        <div>
          <div class="text-muted" style="font-size:13px">Ishonchli support operatsiyalari uchun tanlangan platforma</div>
          <strong style="font-size:18px">1,000+ kompaniya QULAY CHAT orqali suhbatlarni boshqaradi</strong>
        </div>
        <div class="logo-strip">
          <div class="logo-pill">ACME</div>
          <div class="logo-pill">NEXA</div>
          <div class="logo-pill">MARKET</div>
          <div class="logo-pill">EDU PRO</div>
          <div class="logo-pill">LOGI HUB</div>
          <div class="logo-pill">BANKX</div>
        </div>
      </section>

      <section id="qanday-ishlaydi" class="card">
        <div class="card-header"><div><h3>Qanday ishlaydi</h3><p class="card-description">3 qadamda support workflow'ni ishga tushiring</p></div></div>
        <div class="card-body">
          <div class="three-col marketing-step-grid">
            <div class="feature-card"><div class="feature-icon">${icon("plug-zap")}</div><div class="badge badge-primary">1-qadam</div><h3>Widget o'rnating</h3><p class="text-muted" style="font-size:13px">Snippetni saytingizga qo'shing yoki WordPress/React integratsiyasidan foydalaning.</p></div>
            <div class="feature-card"><div class="feature-icon">${icon("messages-square")}</div><div class="badge badge-primary">2-qadam</div><h3>Chatni qabul qiling</h3><p class="text-muted" style="font-size:13px">Operatorlar yagona inbox orqali chatlarni assign qiladi, tezkor javoblar yuboradi.</p></div>
            <div class="feature-card"><div class="feature-icon">${icon("chart-column")}</div><div class="badge badge-primary">3-qadam</div><h3>Tahlil qiling</h3><p class="text-muted" style="font-size:13px">Javob vaqti, SLA va agent ko'rsatkichlarini dashboard va reportlarda ko'ring.</p></div>
          </div>
        </div>
      </section>

      <section id="imkoniyatlar" class="feature-grid">
        ${features.map((f) => `<article class="feature-card feature-card-rich"><div class="feature-icon">${icon(f[2])}</div><h3>${esc(f[0])}</h3><p class="text-muted" style="font-size:13px">${esc(f[1])}</p><p class="text-muted" style="font-size:12px">${esc(f[3])}</p></article>`).join("")}
      </section>

      <section id="integrations" class="card">
        <div class="card-header"><div><h3>Integratsiyalar</h3><p class="card-description">Mijozlaringiz ishlatadigan kanallar bilan tez ulaning</p></div></div>
        <div class="card-body">
          <div class="four-col integration-pill-grid">
            ${[
              ["Telegram", "send"],
              ["Instagram", "instagram"],
              ["WhatsApp", "message-circle"],
              ["Email", "mail"],
              ["Facebook", "facebook"],
              ["Slack", "slack"],
              ["Zapier", "workflow"],
              ["Webhook", "plug"]
            ].map((i) => `<div class="list-item"><div class="item-main"><div class="item-title">${icon(i[1])} ${esc(i[0])}</div><div class="item-sub">2 daqiqada ulash</div></div>${badge("Ready","badge-success")}</div>`).join("")}
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-header"><div><h3>Mijozlar fikri</h3><p class="card-description">Jamoalar QULAY CHAT bilan qanday natija olmoqda</p></div></div>
        <div class="card-body">
          <div class="three-col testimonial-grid">
            ${testimonials.map((t) => `<article class="feature-card"><div class="flex gap-3 items-center">${avatar(t[0], "avatar-lg")}<div><strong>${esc(t[0])}</strong><div class="text-muted" style="font-size:12px">${esc(t[1])}</div></div></div><p class="text-muted" style="font-size:13px">"${esc(t[2])}"</p></article>`).join("")}
          </div>
        </div>
      </section>

      <section id="tariflar" class="pricing-grid">
        ${pricing.map((p) => `<article class="pricing-card ${p.featured ? "featured pricing-card-featured-strong" : ""}"><div>${p.featured ? `<span class="badge badge-primary" style="font-size:12px;padding:2px 10px">Tavsiya</span>` : ""}<h3 style="margin-top:${p.featured ? "8px" : "0"}">${esc(p.name)}</h3><div class="text-muted" style="font-size:13px">${esc(p.subtitle)}</div></div><div class="pricing-price">${esc(p.price)}</div><ul class="pricing-list">${p.items.map((it) => `<li>${icon("check")}<span>${esc(it)}</span></li>`).join("")}</ul>${linkBtn(p.cta, p.href, p.featured ? "primary" : "secondary")}</article>`).join("")}
      </section>

      <section class="cta-banner cta-banner-xl">
        <div>
          <h2 style="color:#fff">Bugunoq birinchi support workspace'ingizni ishga tushiring</h2>
          <p style="opacity:.92;margin-top:6px;max-width:54ch">Ro'yxatdan o'ting, onboarding'ni yakunlang va 10 daqiqa ichida live widget orqali mijozlardan xabar qabul qiling.</p>
        </div>
        <div class="flex gap-2 wrap">
          ${linkBtn("Ro'yxatdan o'tish", "../02-auth/02-register.html", "secondary")}
          ${linkBtn("Demo ko'rish", "../04-dashboard/01-dashboard.html", "ghost")}
        </div>
      </section>
    </main>
    <footer class="marketing-footer marketing-footer-grid">
      <div>
        <div class="shell-brand"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></div>
        <p class="text-muted" style="font-size:13px;margin-top:8px">Omnichannel support va inbox platformasi.</p>
      </div>
      <div class="footer-col"><strong>Mahsulot</strong><div class="list-stack"><a href="#imkoniyatlar">Imkoniyatlar</a><a href="#integrations">Integratsiyalar</a><a href="#tariflar">Tariflar</a><a href="../04-dashboard/01-dashboard.html">Demo</a></div></div>
      <div class="footer-col"><strong>Kompaniya</strong><div class="list-stack"><a href="../index.html">Docs</a><a href="../index.html#support">Support</a><a href="../02-auth/01-login.html">Kirish</a><a href="../02-auth/02-register.html">Ro'yxatdan o'tish</a></div></div>
      <div class="footer-col"><strong>Ijtimoiy</strong><div class="list-stack"><a href="../index.html">Telegram</a><a href="../index.html">LinkedIn</a><a href="../index.html">YouTube</a><a href="../index.html">Status</a></div></div>
      <div class="text-muted" style="font-size:12px;align-self:end">&copy; 2026 QULAY CHAT. Barcha huquqlar himoyalangan.</div>
    </footer>
  </div>`;
  return standalonePage({ title: "QULAY CHAT - Landing", bodyClass: "marketing-page", content });
}

function authCardShellV2(pageTitle, cardInner) {
  return standalonePage({
    title: `QULAY CHAT - ${pageTitle}`,
    bodyClass: "auth-page",
    content: `  <main class="auth-page">
    <section class="auth-card auth-card-lg">
      <div class="auth-logo"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></div>
      ${cardInner}
    </section>
  </main>`
  });
}

function renderAuthPageV2(relPath) {
  const file = path.basename(relPath);
  if (file === "01-login.html") {
    return authCardShellV2("Kirish", `<div class="auth-title"><h1>Kirish</h1><p>Akkauntingizga kiring va mijoz chatlarini boshqaring.</p></div>
      <form class="auth-form" data-submit-message="Kirish bajarildi" data-submit-href="../03-onboarding/01-welcome.html">
        ${formField("Email", `<input class="input" name="email" type="email" placeholder="name@company.uz" required>`)}
        ${formField("Parol", `<input class="input" name="password" type="password" placeholder="Kamida 8 belgi" required>`)}
        <div class="justify-between">
          <label class="checkbox"><input type="checkbox" checked> Eslab qolish</label>
          <a href="./04-forgot-password.html" style="color:var(--primary);font-size:13px;font-weight:600">Parolni unutdingizmi?</a>
        </div>
        <button type="submit" class="btn btn-primary w-full">Kirish</button>
      </form>
      <div class="auth-divider">yoki</div>
      <button type="button" class="btn btn-secondary w-full" data-action="log" data-message="Google auth boshlandi">${icon("chrome")} Google bilan davom etish</button>
      <div class="auth-footer">Akkauntingiz yo'qmi? <a href="./02-register.html" style="color:var(--primary);font-weight:600">Ro'yxatdan o'tish</a></div>`);
  }
  if (file === "02-register.html") {
    return authCardShellV2("Ro'yxatdan o'tish", `<div class="auth-title"><h1>Ro'yxatdan o'tish</h1><p>Workspace yaratib, trial support panelni ishga tushiring.</p></div>
      <form class="auth-form" data-submit-message="Ro'yxatdan o'tish bajarildi" data-submit-href="./03-email-verify.html">
        ${formField("Ism", `<input class="input" name="name" type="text" placeholder="Sardor Aliyev" required>`)}
        ${formField("Email", `<input class="input" name="email" type="email" placeholder="sardor@company.uz" required>`)}
        ${formField("Parol", `<input class="input" name="password" type="password" placeholder="Kamida 8 belgi" required>`)}
        ${formField("Parolni takrorlang", `<input class="input" name="password_confirm" type="password" placeholder="Parolni qayta kiriting" required>`)}
        <label class="checkbox"><input type="checkbox" required> Foydalanish shartlariga roziman</label>
        <button type="submit" class="btn btn-primary w-full">Ro'yxatdan o'tish</button>
      </form>
      <div class="auth-divider">yoki</div>
      <button type="button" class="btn btn-secondary w-full" data-action="log" data-message="Google auth boshlandi">${icon("chrome")} Google bilan davom etish</button>
      <div class="auth-footer">Akkauntingiz bormi? <a href="./01-login.html" style="color:var(--primary);font-weight:600">Kirish</a></div>`);
  }
  if (file === "03-email-verify.html") {
    return authCardShellV2("Email Tasdiqlash", `<div class="auth-title"><div class="avatar avatar-xxl auth-hero-icon">${icon("mail-check")}</div><h1 style="margin-top:10px">Emailingizni tasdiqlang</h1><p><strong>name@company.uz</strong> manziliga tasdiqlash xabari yubordik. Quyidagi kodni kiriting.</p></div>
      <form class="auth-form" data-submit-message="Email tasdiqlandi" data-submit-href="./05-welcome-first-login.html">
        <div class="otp-grid" aria-label="OTP code">
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
          <input class="input otp-input" inputmode="numeric" maxlength="1" required>
        </div>
        <div class="justify-between">
          <span class="text-muted" style="font-size:13px">Spam papkasini ham tekshiring</span>
          <button type="button" class="btn btn-ghost btn-sm" data-resend-countdown="47">Qayta yuborish (47s)</button>
        </div>
        <button type="submit" class="btn btn-primary w-full">Kodni tasdiqlash</button>
      </form>
      <div class="auth-footer"><a href="./02-register.html" style="color:var(--primary);font-weight:600">Emailni o'zgartirish</a></div>`);
  }
  if (file === "04-forgot-password.html") {
    return authCardShellV2("Parolni Tiklash", `<div class="auth-title"><h1>Parolni tiklash</h1><p>Email manzilingizni kiriting, tiklash havolasini yuboramiz.</p></div>
      <form class="auth-form" data-submit-message="Parol tiklash xabari yuborildi" data-reveal="#forgot-password-success">
        ${formField("Email", `<input class="input" name="email" type="email" placeholder="name@company.uz" required>`)}
        <button type="submit" class="btn btn-primary w-full">Yuborish</button>
      </form>
      <div id="forgot-password-success" class="alert alert-success" hidden>${icon("mail-check")}<div>Emailingizga tiklash linki yuborildi. 10 daqiqa ichida kelmasa qayta urinib ko'ring.</div></div>
      <div class="auth-footer"><a href="./01-login.html" style="color:var(--primary);font-weight:600">Kirishga qaytish</a></div>`);
  }
  return authCardShellV2("Xush kelibsiz", `<div class="auth-title"><div class="avatar avatar-xxl auth-hero-icon" style="background:var(--primary-light);color:var(--primary)">${icon("rocket")}</div><h1 style="margin-top:10px">Xush kelibsiz, Sardor!</h1><p>Akkauntingiz tayyor. Endi workspace sozlashni boshlaymiz.</p></div>
      <div class="stack">
        <div class="feature-card" style="padding:14px">
          <div class="flex gap-3 items-center">${icon("inbox")}<div><strong>Inbox</strong><div class="text-muted" style="font-size:12px">Live chatlar va assignment</div></div></div>
        </div>
        <div class="feature-card" style="padding:14px">
          <div class="flex gap-3 items-center">${icon("zap")}<div><strong>Automation</strong><div class="text-muted" style="font-size:12px">Working hours, triggers, greetings</div></div></div>
        </div>
        <div class="feature-card" style="padding:14px">
          <div class="flex gap-3 items-center">${icon("bar-chart-3")}<div><strong>Analytics</strong><div class="text-muted" style="font-size:12px">Javob vaqti va CSAT monitoring</div></div></div>
        </div>
        ${linkBtn("Sozlashni boshlash", "../03-onboarding/01-welcome.html", "primary", 'style="width:100%"')}
        <div class="text-center"><a href="../04-dashboard/01-dashboard.html" style="color:var(--primary);font-weight:600">Keyinroq sozlayman</a></div>
      </div>`);
}

function onboardingStepConfigV2(file) {
  const steps = {
    "01-welcome.html": {
      step: 1,
      title: "QULAY CHAT'ga xush kelibsiz",
      subtitle: "6 qadamda workspace, widget va inbox'ni ishga tushiramiz.",
      body: `<div class="alert alert-success">${icon("sparkles")}<div>Setup odatda 4-6 daqiqa oladi. Istalgan vaqtda dashboarddan onboarding'ga qayta olasiz.</div></div>
        <div class="four-col">
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("building-2")}</div><h3 style="margin-top:8px">Workspace</h3><p class="text-muted" style="font-size:13px">Nom, domen va timezone</p></div></div>
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("message-circle")}</div><h3 style="margin-top:8px">Widget</h3><p class="text-muted" style="font-size:13px">Rang, welcome xabar</p></div></div>
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("users")}</div><h3 style="margin-top:8px">Team</h3><p class="text-muted" style="font-size:13px">Agentlar va rollar</p></div></div>
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("message-square-heart")}</div><h3 style="margin-top:8px">First Chat</h3><p class="text-muted" style="font-size:13px">Widget verify va test chat</p></div></div>
        </div>`,
      back: "../02-auth/05-welcome-first-login.html",
      next: "./02-onboarding-setup.html"
    },
    "02-onboarding-setup.html": {
      step: 2,
      title: "Boshlang'ich sozlash",
      subtitle: "Workspace yaratish uchun asosiy ma'lumotlarni kiriting.",
      body: `<div class="form-grid">
        ${formField("Workspace nomi", `<input class="input" value="QULAY CHAT Support" required>`)}
        ${formField("Business type", select(["SaaS","E-commerce","Education","Banking","Services"], "SaaS"))}
        ${formField("Country", select(["Uzbekistan","Kazakhstan","Turkey","UAE"], "Uzbekistan"))}
        ${formField("Timezone", select(["GMT+5 Toshkent","GMT+6 Almaty","GMT+3 Istanbul"], "GMT+5 Toshkent"))}
      </div>
      <div class="dropzone">${icon("upload-cloud")}<div>Kompaniya logotipini yuklang</div><small>PNG, JPG yoki SVG. Drag & drop qo'llab-quvvatlanadi.</small></div>`,
      back: "./01-welcome.html",
      next: "./03-workspace.html"
    },
    "03-workspace.html": {
      step: 3,
      title: "Workspace sozlash",
      subtitle: "Domen, tashkilot turi va jamoa hajmini belgilang.",
      body: `<div class="two-col">
        <div class="card"><div class="card-body">
          <h3>Workspace URL</h3>
          <p class="text-muted" style="font-size:13px;margin-top:4px">Subdomain keyinroq ham o'zgartirilishi mumkin.</p>
          <div class="input-group" style="margin-top:10px"><span class="text-muted">https://</span><input class="input" value="sardor" aria-label="Workspace slug"><span class="text-muted">.qulaychat.uz</span></div>
          <div class="divider"></div>
          ${formField("Tashkilot turi", select(["Startup","SMB","Enterprise","Agency"], "Startup"))}
          ${formField("Jamoa kattaligi", select(["1-5","6-20","21-50","50+"], "6-20"))}
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Kanallar reja</h3>
          <div class="list-stack" style="margin-top:10px">
            <label class="list-item"><div class="item-main"><div class="item-title">Web Widget</div><div class="item-sub">Asosiy live support kanal</div></div><input type="checkbox" checked></label>
            <label class="list-item"><div class="item-main"><div class="item-title">Telegram</div><div class="item-sub">Operator notification va reply sync</div></div><input type="checkbox" checked></label>
            <label class="list-item"><div class="item-main"><div class="item-title">Email</div><div class="item-sub">Offline form va support email</div></div><input type="checkbox"></label>
            <label class="list-item"><div class="item-main"><div class="item-title">Instagram</div><div class="item-sub">Social DMs ingest</div></div><input type="checkbox"></label>
          </div>
        </div></div>
      </div>`,
      back: "./02-onboarding-setup.html",
      next: "./04-widget-customize.html"
    },
    "04-widget-customize.html": {
      step: 4,
      title: "Widget ko'rinishini moslang",
      subtitle: "Rang, joylashuv va welcome xabarni tanlang. Preview real vaqt yangilanadi.",
      body: `<div class="split-grid">
        <div class="stack">
          <section class="settings-section">
            <h3>Asosiy rang</h3>
            <div class="preset-colors">
              ${["#4F46E5","#2563EB","#059669","#DC2626","#F59E0B","#0EA5E9"].map((c, i) => `<label class="color-swatch ${i===0?"active":""}" style="background:${c}"><input type="radio" name="widget-color" value="${c}" ${i===0?"checked":""} data-widget-color hidden></label>`).join("")}
            </div>
          </section>
          <section class="settings-section">
            <h3>Widget position</h3>
            <div class="flex gap-4 wrap">
              <label class="checkbox"><input type="radio" name="widget-position" value="right" checked> Right</label>
              <label class="checkbox"><input type="radio" name="widget-position" value="left"> Left</label>
            </div>
          </section>
          <section class="settings-section">
            ${formField("Welcome xabar", `<textarea class="textarea" rows="4" data-widget-welcome-input>Salom! Sizga qanday yordam bera olamiz?</textarea>`)}
          </section>
        </div>
        <div class="widget-mini-preview" data-widget-preview>
          <div class="text-muted" style="font-size:13px">Live preview</div>
          <div class="widget-mini-window" data-widget-preview-window>
            <div class="widget-mini-head" data-widget-preview-head><span>QULAY CHAT</span><span>Online</span></div>
            <div class="widget-mini-body">
              <div class="widget-msg" data-widget-preview-message>Salom! Sizga qanday yordam bera olamiz?</div>
              <div class="widget-msg agent">Pro plan va demo haqida ma'lumot bera olaman.</div>
              <div class="widget-msg">Rahmat, pricing sahifasidan keldim.</div>
            </div>
          </div>
        </div>
      </div>`,
      back: "./03-workspace.html",
      next: "./05-widget-install.html"
    },
    "05-widget-install.html": {
      step: 5,
      title: "Widget o'rnatish",
      subtitle: "HTML, WordPress yoki React uchun mos snippetni tanlang va o'rnating.",
      body: `<div class="pill-tabs">
          <button class="tab active" type="button" data-tab-group="install-code" data-tab="html">HTML</button>
          <button class="tab" type="button" data-tab-group="install-code" data-tab="wp">WordPress</button>
          <button class="tab" type="button" data-tab-group="install-code" data-tab="react">React</button>
        </div>
        <div data-tab-group="install-code" data-tab-panel="html">
          ${codeBlock(`<script src="https://cdn.qulaychat.uz/widget.js" data-id="cf_demo_01"></script>`, "install-code-html")}
          <div class="alert alert-info">${icon("terminal")}<div>Bu kodni saytingizning <strong>&lt;/body&gt;</strong> tagidan oldin joylashtiring.</div></div>
        </div>
        <div data-tab-group="install-code" data-tab-panel="wp" hidden>
          ${codeBlock(`add_action('wp_footer', function(){ echo '<script src=\"https://cdn.qulaychat.uz/widget.js\" data-id=\"cf_demo_01\"></script>'; });`, "install-code-wp")}
          <div class="alert alert-info">${icon("plug")}<div>Code Snippets yoki theme footer orqali qo'shing.</div></div>
        </div>
        <div data-tab-group="install-code" data-tab-panel="react" hidden>
          ${codeBlock(`useEffect(() => { const s = document.createElement('script'); s.src='https://cdn.qulaychat.uz/widget.js'; s.dataset.id='cf_demo_01'; document.body.appendChild(s); }, []);`, "install-code-react")}
          <div class="alert alert-info">${icon("code")}<div>App-level layout yoki root page ichida bir marta ishga tushiring.</div></div>
        </div>`,
      back: "./04-widget-customize.html",
      next: "./06-widget-verify.html"
    },
    "06-widget-verify.html": {
      step: 6,
      title: "Widget tekshirildi",
      subtitle: "Widget muvaffaqiyatli topildi va birinchi chat uchun tayyor.",
      body: `<div class="text-center">
          <div class="avatar avatar-xxl auth-hero-icon" style="background:var(--success-light);color:var(--success)">${icon("check-circle-2")}</div>
          <h2 style="margin-top:12px">Widget muvaffaqiyatli topildi!</h2>
          <p class="text-muted" style="margin-top:6px">Birinchi chatni kutmoqdamiz. Quyidagi qadamlar bilan support panelni yakunlang.</p>
        </div>
        <div class="three-col">
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("inbox")}</div><h3 style="margin-top:8px">Inbox'ga o'ting</h3><p class="text-muted" style="font-size:13px">Live chatlarni real vaqt qabul qiling.</p></div></div>
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("user-plus")}</div><h3 style="margin-top:8px">Jamoa qo'shing</h3><p class="text-muted" style="font-size:13px">Operatorlar va rollarni belgilang.</p></div></div>
          <div class="card"><div class="card-body"><div class="feature-icon">${icon("zap")}</div><h3 style="margin-top:8px">Automation sozlang</h3><p class="text-muted" style="font-size:13px">Greeting va triggerlarni yoqing.</p></div></div>
        </div>`,
      back: "./05-widget-install.html",
      next: "../04-dashboard/01-dashboard.html"
    }
  };
  return steps[file];
}

function renderOnboardingPageV2(relPath) {
  const cfg = onboardingStepConfigV2(path.basename(relPath));
  const widths = {1:17,2:33,3:50,4:67,5:83,6:100};
  const dots = Array.from({ length: 6 }, (_, i) => i + 1)
    .map((n) => `<span class="${n < cfg.step ? "done" : n === cfg.step ? "active" : ""}"></span>`)
    .join("");
  const content = `  <main class="onboarding-page">
    <div class="onboarding-shell">
      <div class="onboarding-top">
        <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a>
        <span class="badge badge-primary">Step ${cfg.step}/6</span>
      </div>
      <div class="onboarding-progress">
        <div class="justify-between"><strong>Onboarding progress</strong><span class="text-muted" style="font-size:13px">Step ${cfg.step} / 6</span></div>
        <div class="progress"><div class="progress-bar" style="width:${widths[cfg.step]}%"></div></div>
        <div class="step-dots">${dots}</div>
      </div>
      <section class="onboarding-card">
        <div><h1>${esc(cfg.title)}</h1><p class="text-muted" style="margin-top:6px">${esc(cfg.subtitle)}</p></div>
        ${cfg.body}
        <div class="onboarding-actions">
          <div class="flex gap-2 wrap">${linkBtn("Orqaga", cfg.back, "secondary")} ${linkBtn("Skip", "../04-dashboard/01-dashboard.html", "ghost")}</div>
          ${linkBtn(cfg.step === 6 ? "Dashboard'ga o'tish" : "Keyingi", cfg.next, "primary")}
        </div>
      </section>
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${cfg.title}`, bodyClass: "onboarding-page", content });
}

function renderDashboardHomePageV2(relPath, folderMap) {
  const metrics = [
    ["message-square", "Jami chatlar", "1,247", "+12%", ""],
    ["activity", "Faol chatlar", "23", "+8%", ""],
    ["timer", "O'rtacha javob", "2m 34s", "-15%", "warn"],
    ["smile", "CSAT", "4.8/5", "+3%", ""]
  ];
  const recentRows = [
    ["AV","Ahmad Valiyev","online","Active","badge-success","Sardor","2m","Web"],
    ["DR","Dilnoza Rahimova","away","Waiting","badge-warning","Sara","5m","Telegram"],
    ["RK","Rustam Karimov","offline","Assigned","","Ali","15m","WhatsApp"],
    ["MO","Malika Orifova","online","Resolved","badge-info","Bobur","32m","Email"],
    ["NT","Nodira T.","busy","Urgent","badge-danger","Unassigned","1m","Web"],
    ["OE","Olim Ergashev","away","Pending","badge-warning","Ali","9m","Instagram"],
    ["SA","Sabina A.","online","Active","badge-success","Sardor","14m","Telegram"],
    ["FK","Farrux K.","offline","Closed","","Sara","1h","Email"]
  ];
  const metricCards = `    <div class="metrics-grid">
${metrics.map((m) => `      <div class="metric-card metric-card-hover">
        <div class="flex justify-between items-center">
          <div class="metric-label">${esc(m[1])}</div>
          <span class="metric-icon">${icon(m[0])}</span>
        </div>
        <div class="metric-value">${m[2]}</div>
        <div class="metric-trend ${m[4]}">${m[3]}</div>
      </div>`).join("\n")}
    </div>`;
  const chartWithAxis = `${fakeLineChart()}<div class="chart-axis-labels"><span>Dush</span><span>Sesh</span><span>Chor</span><span>Pay</span><span>Jum</span><span>Shan</span><span>Yak</span></div>`;
  const recentTable = simpleTable(["Visitor","Status","Agent","Vaqt","Kanal"], recentRows.map((r) => [
    `<a href="../05-inbox/02-chat-open.html" class="flex gap-2 items-center"><span class="avatar avatar-sm">${r[0]}</span><span class="status-dot ${r[2]}"></span><span class="cell-strong">${r[1]}</span></a>`,
    `<span class="badge ${r[4]}">${r[3]}</span>`,
    r[5],
    r[6],
    `<span class="channel-pill">${r[7]}</span>`
  ]));
  const teamActivity = `<div class="four-col">
    ${[
      ["Sardor A.","3 ta active chat","online","1m avg response"],
      ["Sara M.","5 ta active chat","online","CSAT 4.9"],
      ["Ali K.","2 ta active chat","away","1 ta waiting"],
      ["Bobur R.","1 ta active chat","offline","Shift 16:00 da"]
    ].map((a) => `<div class="card"><div class="card-body"><div class="flex justify-between items-center">${avatar(a[0])}<span class="status-dot ${a[2]}"></span></div><div style="margin-top:10px"><div class="cell-strong">${esc(a[0])}</div><div class="text-muted" style="font-size:13px">${esc(a[1])}</div><div class="text-muted" style="font-size:12px;margin-top:4px">${esc(a[3])}</div></div></div></div>`).join("")}
  </div>`;
  const quickActions = `<div class="three-col">
    <a class="quick-action-card" href="../05-inbox/02-chat-open.html">${icon("message-circle-plus")}<strong>Yangi chat boshlash</strong><span class="text-muted" style="font-size:13px">Inbox open state preview</span></a>
    <a class="quick-action-card" href="../07-team/04-invitations.html">${icon("user-plus")}<strong>Jamoa qo'shish</strong><span class="text-muted" style="font-size:13px">Operator taklif yuborish</span></a>
    <a class="quick-action-card" href="../09-settings/02-widget-settings.html">${icon("paintbrush")}<strong>Widget sozlash</strong><span class="text-muted" style="font-size:13px">Rang va xabarlarni yangilash</span></a>
  </div>`;
  const onboardingBanner = card("Xush kelibsiz, Sardor!", `<div class="two-col">
      <div>
        <p class="text-muted">Bugun jamoa faol: 23 ta live chat, 4 ta waiting va 2 ta urgent queue mavjud.</p>
        <div class="flex gap-2 wrap" style="margin-top:12px">
          ${linkBtn("Inboxga o'tish", "../05-inbox/01-inbox-chat.html", "primary")}
          ${linkBtn("Automation sozlash", "../06-automation/01-working-hours.html", "secondary")}
        </div>
      </div>
      <button class="btn btn-secondary justify-between w-full" type="button" data-action="goto" data-href="../03-onboarding/05-widget-install.html" style="height:auto;padding:12px 14px">
        <div style="text-align:left"><strong>Onboarding progress: 4/6</strong><div class="text-muted" style="font-size:12px">Widget install bosqichiga qaytish</div></div>
        <div style="width:140px">${progressBar(66)}<div class="text-muted" style="font-size:11px;margin-top:6px">66% yakunlandi</div></div>
      </button>
    </div>`);
  const content = `${shellHeaderBlock(relPath, folderMap, "Dashboard", "Bugungi umumiy ko'rinish", `${btn("Yangi chat", "primary", 'data-action="goto" data-href="../05-inbox/02-chat-open.html"')} ${linkBtn("Inbox", "../05-inbox/02-chat-open.html", "secondary")}`)}
${onboardingBanner}
${metricCards}
<div class="two-col">
${card("Chat faolligi (7 kun)", chartWithAxis)}
${card("Kanallar ulushi", fakeDonut())}
</div>
${card("Recent chats", recentTable)}
${card("Quick actions", quickActions)}
${card("Jamoa faolligi", teamActivity)}
`;
  return shellPage({ title: "Dashboard", activeNav: "dashboard", content });
}

function inboxConversationsV2() {
  return [
    { id: "chat-101", name: "Ahmad Valiyev", preview: "Salom, tariflar haqida savol bor.", time: "2m", channel: "Web", unread: "3", statusDot: "online", statusKey: "active unread urgent", agent: "Sardor", href: "./02-chat-open.html" },
    { id: "chat-102", name: "Dilnoza Rahimova", preview: "Telegram integratsiyasi ishlamayapti.", time: "5m", channel: "Telegram", unread: "1", statusDot: "away", statusKey: "active unread", agent: "Sara", href: "./02-chat-open.html" },
    { id: "chat-103", name: "Rustam Karimov", preview: "Buyurtma statusini tekshira olasizmi?", time: "11m", channel: "WhatsApp", unread: "", statusDot: "offline", statusKey: "closed", agent: "Ali", href: "./02-chat-open.html" },
    { id: "chat-104", name: "Malika Orifova", preview: "Rahmat, hammasi tushunarli bo'ldi.", time: "32m", channel: "Email", unread: "", statusDot: "offline", statusKey: "closed", agent: "Bobur", href: "./02-chat-open.html" },
    { id: "chat-105", name: "Olim Ergashev", preview: "Demo so'rovi yubordim.", time: "1h", channel: "Web", unread: "", statusDot: "online", statusKey: "active", agent: "Unassigned", href: "./02-chat-open.html", tag: "Unassigned" },
    { id: "chat-106", name: "Zarina N.", preview: "Invoice PDF yuklanmayapti", time: "3m", channel: "Email", unread: "2", statusDot: "busy", statusKey: "active unread urgent", agent: "Sara", href: "./02-chat-open.html" },
    { id: "chat-107", name: "Farrux K.", preview: "Widget rangi o'zgarmadi", time: "8m", channel: "Web", unread: "", statusDot: "away", statusKey: "active", agent: "Ali", href: "./02-chat-open.html" },
    { id: "chat-108", name: "Madina T.", preview: "Pro plan bo'yicha demo xohlayman", time: "14m", channel: "Instagram", unread: "1", statusDot: "online", statusKey: "active unread", agent: "Sardor", href: "./02-chat-open.html" },
    { id: "chat-109", name: "Sherzod R.", preview: "Support emailga javob kelmadi", time: "22m", channel: "Email", unread: "", statusDot: "away", statusKey: "active", agent: "Bobur", href: "./02-chat-open.html" },
    { id: "chat-110", name: "Nargiza A.", preview: "Muammo hal bo'ldi, rahmat", time: "2h", channel: "Telegram", unread: "", statusDot: "offline", statusKey: "closed", agent: "Sara", href: "./02-chat-open.html" }
  ];
}

function inboxChatListHtmlV2(activeId) {
  return inboxConversationsV2().map((c) => `<div class="inbox-chat-item ${c.id===activeId?"active":""}" role="option" aria-selected="${c.id===activeId?"true":"false"}" data-chat-id="${c.id}" data-status="${c.statusKey}" data-href="${c.href}" data-name="${esc(c.name)}" data-channel="${esc(c.channel)}" data-agent="${esc(c.agent)}">
      <span class="status-dot ${c.statusDot}"></span>
      <div class="inbox-chat-main">
        <div class="name-row"><strong class="truncate">${esc(c.name)}</strong>${c.tag ? badge(c.tag, "badge-warning") : ""}</div>
        <div class="preview truncate">${esc(c.preview)}</div>
        <div class="text-muted" style="font-size:12px">Agent: ${esc(c.agent)}</div>
      </div>
      <div class="inbox-chat-meta"><span class="time">${esc(c.time)}</span><span class="channel-pill">${esc(c.channel)}</span>${c.unread?`<span class="badge badge-danger">${esc(c.unread)}</span>`:""}</div>
    </div>`).join("");
}

function inboxMessagesHtmlV2() {
  const messages = [
    ["system", "Chat boshlandi вЂў Bugun 14:21", "14:21"],
    ["in", "Salom, Pro tarifda nechta operator qo'shsa bo'ladi?", "14:22"],
    ["out", "Assalomu alaykum! Pro tarifda 10 tagacha operator qo'shish mumkin.", "14:23"],
    ["in", "Telegram integratsiyasi ham kiradimi?", "14:24"],
    ["out", "Ha, Telegram, Web Widget va Email integratsiyalari mavjud.", "14:25"],
    ["in", "Ajoyib. Demo ko'rsatib bera olasizmi? https://example.uz/demo", "14:26"],
    ["out", "Albatta. Hozir demo sessiya uchun link yuboraman рџ™‚", "14:27"],
    ["in", "Rahmat, ertaga 11:00 qulay.", "14:28"],
    ["out", "Qabul qilindi. Calendar invite yuboryapman.", "14:29"],
    ["typing", "Agent yozmoqda...", ""]
  ];
  return messages.map((m) => {
    if (m[0] === "system") return `<div class="msg-system">${esc(m[1])}</div>`;
    if (m[0] === "typing") return `<div class="msg-group in"><div class="msg-bubble"><span class="typing-dots"><span></span><span></span><span></span></span> ${esc(m[1])}</div></div>`;
    const isOut = m[0] === "out";
    return `<div class="msg-group ${isOut ? "out" : "in"}"><div class="msg-bubble">${esc(m[1])}<div class="msg-quick-actions"><button type="button" data-action="log" data-message="Reply tanlandi">${icon("reply")}</button><button type="button" data-action="log" data-message="Star qo'shildi">${icon("star")}</button><button type="button" data-action="copy" data-copy="${esc(m[1])}">${icon("copy")}</button></div></div><div class="msg-meta">${isOut ? "Sardor" : "Ahmad"} вЂў ${m[2]}</div></div>`;
  }).join("");
}

function inboxInfoPanelV2(expanded) {
  return `<div class="inbox-info-scroll">
    <div class="inbox-info-card">
      <div class="flex gap-3 items-center">${avatar("Ahmad Valiyev","avatar-lg")}<div><strong>Ahmad Valiyev</strong><div class="text-muted" style="font-size:13px">ahmad@example.com</div></div></div>
      ${keyValueList([{key:"Phone",value:"+998 90 111 22 33"},{key:"Location",value:"Toshkent, UZ"},{key:"Browser",value:"Chrome 122"},{key:"OS",value:"macOS Sonoma"},{key:"Current page",value:"/pricing"},{key:"IP",value:"185.8.212.34"}])}
    </div>
    <div class="inbox-info-card"><div class="justify-between"><h3>Tags</h3>${btn("Tag qo'shish","ghost","data-action=\"log\" data-message=\"Tag qo'shish oynasi ochildi\"")}</div><div class="tag-cloud">${badge("Pricing","badge-primary")}${badge("Lead","badge-info")}${badge("Enterprise","badge-warning")}${badge("VIP","badge-danger")}</div></div>
    <div class="inbox-info-card"><h3>Notes</h3><textarea class="textarea" rows="4" placeholder="Ichki eslatma yozing...">Demo uchun qiziqmoqda. Ertaga follow-up yuborish tavsiya etiladi.</textarea><button class="btn btn-primary" type="button" data-action="save">Saqlash</button></div>
    <div class="inbox-info-card"><h3>Previous chats</h3><div class="list-stack">
      <a class="list-item" href="./02-chat-open.html"><div class="item-main"><div class="item-title">2026-02-18 вЂў Pricing question</div><div class="item-sub">Sara вЂў 18 xabar</div></div>${badge("Closed","badge-success")}</a>
      <a class="list-item" href="./02-chat-open.html"><div class="item-main"><div class="item-title">2026-02-11 вЂў Feature comparison</div><div class="item-sub">Ali вЂў 9 xabar</div></div>${badge("Closed","badge-success")}</a>
      <a class="list-item" href="./02-chat-open.html"><div class="item-main"><div class="item-title">2026-01-28 вЂў Demo request</div><div class="item-sub">Sardor вЂў 12 xabar</div></div>${badge("Won","badge-primary")}</a>
      <a class="list-item" href="./02-chat-open.html"><div class="item-main"><div class="item-title">2026-01-19 вЂў Invoice issue</div><div class="item-sub">Bobur вЂў 6 xabar</div></div>${badge("Resolved","badge-info")}</a>
    </div></div>
    <div class="inbox-info-card"><h3>Custom fields</h3>${keyValueList([{key:"Plan",value:"Pro Trial"},{key:"Lead source",value:"Pricing page"},{key:"Company",value:"ACME LLC"}])}</div>
    ${expanded ? `<div class="inbox-info-card"><h3>Timeline</h3><div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Page visited: /pricing</strong><span class="timeline-time">14:20</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Started widget chat</strong><span class="timeline-time">14:21</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Assigned to Sardor</strong><span class="timeline-time">14:23</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Tag added: Enterprise</strong><span class="timeline-time">14:26</span></div></div></div></div>` : ""}
  </div>`;
}

function renderInboxPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  const activeChatId = file === "01-inbox-chat.html" ? "" : "chat-101";
  const expanded = file === "03-info-sidebar.html";
  const middle = file === "01-inbox-chat.html"
    ? `<div class="empty-state" data-inbox-empty style="margin:14px;height:calc(100% - 28px)">${icon("message-square-dashed")}<strong>Chat tanlang</strong><p class="text-muted" style="font-size:13px">Chap ro'yxatdan suhbat tanlang yoki yangi chat boshlang.</p></div>`
    : `<div class="inbox-chat-header">
        <div class="left">${avatar("Ahmad Valiyev")}<div><strong>Ahmad Valiyev</strong><div class="text-muted" style="font-size:12px"><span class="status-dot online"></span> Online вЂў Web</div></div></div>
        <div class="right">
          <button class="btn btn-secondary btn-sm" type="button" data-modal-open="assign-agent">${icon("user-plus")} Assign</button>
          <button class="btn btn-ghost btn-sm" type="button" data-action="log" data-message="Chat yopildi">${icon("check")} Close</button>
          <button class="btn btn-ghost btn-sm" type="button" data-action="log" data-message="Qo'shimcha menyu ochildi">${icon("ellipsis")} More</button>
        </div>
      </div>
      <div class="inbox-messages" role="log" aria-live="polite">${inboxMessagesHtmlV2()}</div>
      <div class="inbox-input">
        <div class="justify-between">
          <div class="inbox-toolbar">
            <button class="icon-btn" type="button" data-action="log" data-message="Emoji panel ochildi">${icon("smile")}</button>
            <button class="icon-btn" type="button" data-action="log" data-message="Fayl biriktirish boshlandi">${icon("paperclip")}</button>
            <button class="icon-btn" type="button" data-action="log" data-message="Emoji panel ochildi">${icon("image")}</button>
          </div>
          <div class="quick-replies">
            <button class="btn btn-secondary btn-sm" type="button" data-quick-replies-toggle>${icon("message-square-quote")} Tezkor javoblar</button>
            <div class="quick-replies-menu" data-quick-replies-menu hidden>
              <button type="button" class="list-item" data-quick-reply="Salom! Yordam berishdan mamnunman.">${""}<div class="item-main"><div class="item-title">Salomlashuv</div><div class="item-sub">Standart kirish xabari</div></div></button>
              <button type="button" class="list-item" data-quick-reply="Pro plan demo uchun kalendar vaqt yuboraman.">${""}<div class="item-main"><div class="item-title">Demo taklif</div><div class="item-sub">Kalendar invite shabloni</div></div></button>
              <button type="button" class="list-item" data-quick-reply="Rahmat! Suhbat yakunida CSAT baholash yuboriladi.">${""}<div class="item-main"><div class="item-title">CSAT eslatma</div><div class="item-sub">Yakuniy follow-up</div></div></button>
              <button type="button" class="list-item" data-quick-reply="Iltimos, screenshot yoki video yuboring.">${""}<div class="item-main"><div class="item-title">Texnik diagnostika</div><div class="item-sub">Issue troubleshooting</div></div></button>
            </div>
          </div>
        </div>
        <div class="inbox-send-row">
          <textarea class="textarea" rows="1" data-chat-composer placeholder="Xabar yozing..."></textarea>
          <button class="btn btn-primary" type="button" data-action="log" data-message="Xabar yuborildi">${icon("send")} Yuborish</button>
        </div>
      </div>`;
  const main = `${shellHeaderBlock(relPath, folderMap, title, "Live chats uchun 3 ustunli operator interfeysi", `${btn("Yangi chat", "primary", 'data-action="log" data-message="Yangi chat oynasi ochildi"')} ${btn("Filter", "secondary", 'data-action="log" data-message="Filter panel ochildi"')}`)}
  <section class="inbox-layout">
    <aside class="inbox-panel">
      <div class="inbox-list-top">
        <div class="input-group">${icon("search")}<input class="input" type="search" placeholder="Mijoz ismi yoki xabar..." style="width:100%" data-inbox-search></div>
        <div class="inbox-tabs" role="tablist" aria-label="Chat tabs">
          <button class="tab active" type="button" data-tab-group="inbox-list" data-tab="all">Hammasi</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="active">Faol</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="unread">Javobsiz</button>
          <button class="tab" type="button" data-tab-group="inbox-list" data-tab="closed">Yopilgan</button>
        </div>
      </div>
      <div class="inbox-list-scroll" role="listbox" aria-label="Conversations" data-inbox-list>${inboxChatListHtmlV2(activeChatId)}</div>
    </aside>
    <section class="inbox-panel" data-inbox-chat-panel>${middle}</section>
    <aside class="inbox-panel">${inboxInfoPanelV2(expanded)}</aside>
  </section>
${modalMarkup("assign-agent","Agent tayinlash", `<div class="list-stack"><button class="list-item" type="button" data-action="log" data-message="Chat Sardor ga tayinlandi"><div class="item-main"><div class="item-title">Sardor A.</div><div class="item-sub">3 ta active chat</div></div><span class="status-dot online"></span></button><button class="list-item" type="button" data-action="log" data-message="Chat Sara ga tayinlandi"><div class="item-main"><div class="item-title">Sara M.</div><div class="item-sub">5 ta active chat</div></div><span class="status-dot online"></span></button><button class="list-item" type="button" data-action="log" data-message="Chat Ali ga tayinlandi"><div class="item-main"><div class="item-title">Ali K.</div><div class="item-sub">2 ta active chat</div></div><span class="status-dot away"></span></button><button class="list-item" type="button" data-action="log" data-message="Chat Bobur ga tayinlandi"><div class="item-main"><div class="item-title">Bobur R.</div><div class="item-sub">1 ta active chat</div></div><span class="status-dot offline"></span></button></div>`, `${btn("Bekor qilish","secondary",'data-modal-close')} ${btn("Saqlash","primary",'data-modal-close data-action="save"')}`)}
`;
  return shellPage({ title, activeNav: "inbox", content: main });
}

function analyticsTopbarV2() {
  return `<div class="analytics-topbar">
  <div class="date-range">${icon("calendar")}Oxirgi 7 kun</div>
  <button class="btn btn-secondary" type="button" data-action="export">${icon("download")} Export</button>
</div>`;
}

function renderByPath(relPath, folderMap) {
  const normalized = relPath.replace(/\\/g, "/");
  if (normalized === "index.html") return renderIndexPage(folderMap);

  const folder = normalized.split("/")[0];
  switch (folder) {
    case "01-landing":
      return renderLandingPageV2();
    case "02-auth":
      return renderAuthPageV2(normalized);
    case "03-onboarding":
      return renderOnboardingPageV2(normalized);
    case "04-dashboard":
      return renderDashboardHomePageV2(normalized, folderMap);
    case "05-inbox":
      return renderInboxPageV2(normalized, folderMap);
    case "06-automation":
      return renderAutomationPageV2(normalized, folderMap);
    case "07-team":
      return renderTeamPageV2(normalized, folderMap);
    case "08-analytics":
      return renderAnalyticsPageV2(normalized, folderMap);
    case "09-settings":
      return renderSettingsPageV2(normalized, folderMap);
    case "10-billing":
      return renderBillingPageV2(normalized, folderMap);
    case "11-chat-widget":
      return renderWidgetPageV2(normalized, folderMap);
    case "12-contacts":
      return renderContactsPageV2(normalized, folderMap);
    case "13-visitors":
      return renderVisitorsPageV2(normalized, folderMap);
    case "14-team-chat":
      return renderTeamChatPageV2(normalized, folderMap);
    case "15-knowledge-base":
      return renderKnowledgeBasePageV2(normalized, folderMap);
    case "16-addons":
      return renderAddonsPageV2(normalized, folderMap);
    case "17-developer":
      return renderDeveloperPageV2(normalized, folderMap);
    case "18-system":
      return renderSystemPageV2(normalized);
    default:
      throw new Error(`No renderer mapped for ${normalized}`);
  }
}

function listHtmlPages() {
  return readDirFilesRecursive(HTML_ROOT)
    .filter((file) => file.toLowerCase().endsWith(".html"))
    .map((file) => path.relative(HTML_ROOT, file).replace(/\\/g, "/"))
    .sort();
}

function run() {
  ensureDir(ASSETS_DIR);

  writeFileSafe("assets/qulay-chat-design-system.css", designSystemCss());
  writeFileSafe("assets/qulay-chat-shell.js", shellJs());
  writeFileSafe("assets/qulay-chat-runtime.js", runtimeJs());

  const folderMap = folderFilesMap();
  const htmlFiles = listHtmlPages();
  let written = 0;

  for (const relPath of htmlFiles) {
    const content = renderByPath(relPath, folderMap);
    writeFileSafe(relPath, content);
    written += 1;
  }

  const stats = {
    htmlWritten: written,
    folders: Object.keys(folderMap).length,
    assetsWritten: 3
  };

  process.stdout.write(`${JSON.stringify(stats, null, 2)}\n`);
}

function renderAutomationPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-working-hours.html") {
    const days = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];
    const rows = days.map((day, idx) => {
      const enabled = idx < 5;
      return [
        `<span class="cell-strong">${esc(day)}</span>`,
        toggle(enabled),
        `<input class="input" type="time" value="${enabled ? "09:00" : ""}" ${enabled ? "" : "disabled"}>`,
        `<input class="input" type="time" value="${enabled ? "18:00" : ""}" ${enabled ? "" : "disabled"}>`
      ];
    });
    const exceptionRows = [
      ["2026-03-08", "Xalqaro xotin-qizlar kuni", badge("Yopiq", "badge-danger"), "Butun kun"],
      ["2026-03-21", "Navro'z", badge("Qisqartirilgan", "badge-warning"), "10:00 - 15:00"],
      ["2026-05-09", "Xotira va qadrlash kuni", badge("Yopiq", "badge-danger"), "Butun kun"]
    ];
    body = `
${card("Ish vaqti jadvali", `<div class="form-grid one">
  ${formField("Timezone", select(["GMT+5 Toshkent", "GMT+3 Istanbul", "GMT+6 Almaty", "UTC"], "GMT+5 Toshkent"))}
  ${simpleTable(["Kun", "Holat", "Boshlanish", "Tugash"], rows)}
</div>`)}
${card("Bayram kunlari", simpleTable(["Sana", "Izoh", "Holat", "Soat"], exceptionRows), { actions: btn("Exception qo'shish", "secondary", 'data-modal-open="holiday-exception"') })}
<div class="sticky-save-bar">${btn("Reset", "secondary", 'data-action="reset-form"')} ${btn("Saqlash", "primary", 'data-action="save"')}</div>
${modalMarkup("holiday-exception", "Bayram kuni qo'shish", `<div class="form-grid one">
  ${formField("Sana", '<input class="input" type="date" value="2026-04-01">')}
  ${formField("Holat", select(["Yopiq", "Qisqartirilgan vaqt"], "Yopiq"))}
  ${formField("Izoh", input("Ramazon hayit"))}
</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else if (file === "02-auto-reply.html") {
    const msg = "Salom! Operatorlarimiz tez orada javob beradi. Savolingizni yozib qoldiring.";
    body = `${card("Auto reply sozlamalari", `<div class="form-row">
  <div class="row-copy">
    <div class="form-label">Auto reply yoqish</div>
    <p class="text-muted" style="font-size:13px">Operator offline bo'lsa avtomatik javob yuboriladi</p>
  </div>
  ${toggle(true)}
</div>
<div class="form-grid">
  <label class="form-field"><span class="form-label">Delay (soniya)</span><input class="input" type="number" value="5" min="0" max="30"></label>
  ${formField("Trigger kanal", select(["Barcha kanallar", "Faqat Web", "Faqat Telegram", "Faqat WhatsApp"], "Barcha kanallar"))}
  ${formField("Xabar matni", textarea(msg, "", 4))}
</div>
<div class="divider"></div>
<div class="card" style="border-style:dashed">
  <div class="card-header"><div><h3>Preview</h3><p class="card-description">Auto-reply xabar ko'rinishi</p></div></div>
  <div class="card-body"><div class="widget-msg">${esc(msg)}</div></div>
</div>`, { actions: btn("Saqlash", "primary", 'data-action="save"') })}`;
  } else if (file === "03-triggers.html") {
    const tgl = (checked) => `<label class="toggle-switch"><input type="checkbox" ${checked ? "checked" : ""}><span class="toggle-track"><span class="toggle-thumb"></span></span></label>`;
    body = `${card("Trigger ro'yxati", simpleTable(["Trigger", "Condition", "Action", "Status"], [
  ["Welcome Lead", "First visit && /pricing", "Show greeting", tgl(true)],
  ["VIP Route", "Tag=VIP", "Assign Sara", tgl(true)],
  ["Night Auto-close", "No reply 30m", "Close chat", tgl(false)],
  ["Trial Follow-up", "Tag=Trial && idle 10m", "Quick reply", tgl(true)],
  ["Enterprise Route", "Company size > 100", "Assign Sardor", tgl(true)],
  ["Refund Escalation", "Message contains refund", "Tag + Assign Billing", tgl(false)]
]), { actions: btn("Yangi trigger", "primary", 'data-modal-open="new-trigger"') })}
${modalMarkup("new-trigger", "Yangi trigger", `<div class="form-grid one">
  ${formField("Trigger nomi", input("Welcome Lead"))}
  ${formField("Condition", textarea("Page contains /pricing AND visitor is new", "", 3))}
  ${formField("Action", select(["Greeting yuborish", "Agentga tayinlash", "Tag qo'shish"], "Greeting yuborish"))}
</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else {
    const cards = [
      ["Home page welcome", "Yangi visitor", "Salom! Mahsulot haqida savolingiz bormi?", true, "Primary"],
      ["Pricing helper", "/pricing sahifasi", "Tariflarni tanlashda yordam bera olaman.", true, "Pricing"],
      ["Returning visitor", "2+ tashrif", "Qaytganingizdan xursandmiz. Nima qidiryapsiz?", true, "Retention"],
      ["Exit intent", "Cursor exit intent", "Ketishdan oldin savolingiz bormi?", false, "Exit"],
      ["Late night", "18:00 dan keyin", "Operatorlar offline, xabar qoldiring.", true, "After hours"]
    ];
    body = `${card("Greeting xabarlari", `<div class="two-col">
${cards.map((g) => `  <div class="card">
    <div class="card-header">
      <div>
        <h3>${esc(g[0])}</h3>
        <p class="card-description">${esc(g[2])}</p>
      </div>
      ${toggle(g[3])}
    </div>
    <div class="card-body">
      <div class="flex justify-between items-center gap-2 wrap">
        <span class="text-muted" style="font-size:13px">${esc(g[1])}</span>
        ${badge(g[4], g[3] ? "badge-info" : "badge-warning")}
      </div>
      <div style="margin-top:12px">${btn("Edit", "secondary", 'data-action="log"')}</div>
    </div>
  </div>`).join("")}
</div>`, { actions: btn("Yangi greeting qo'shish", "primary", 'data-modal-open="new-greeting"') })}
${modalMarkup("new-greeting", "Yangi greeting qo'shish", `<div class="form-grid one">
  ${formField("Greeting nomi", input("Yangi greeting"))}
  ${formField("Condition", select(["New visitor", "/pricing sahifasi", "Exit intent", "18:00 dan keyin"], "New visitor"))}
  ${formField("Xabar matni", textarea("Salom! Sizga qanday yordam bera olamiz?", "", 4))}
</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  }

  const content = `${shellHeaderBlock(relPath, folderMap, title, "Automation qoidalari va schedule konfiguratsiyasi", `${btn("Saqlash", "primary", 'data-action="save"')} ${btn("Reset", "secondary", 'data-action="reset-form"')}`)}${body}`;
  return shellPage({ title, activeNav: "automation", content });
}

function renderTeamPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-agents.html") {
    const agents = [
      ["Sardor A.", "sardor@qulaychat.uz", "Admin", "online", "2m"],
      ["Sara M.", "sara@qulaychat.uz", "Manager", "online", "5m"],
      ["Ali K.", "ali@qulaychat.uz", "Agent", "away", "11m"],
      ["Bobur R.", "bobur@qulaychat.uz", "Agent", "offline", "1h"],
      ["Malika T.", "malika@qulaychat.uz", "Agent", "online", "3m"],
      ["Dilshod N.", "dilshod@qulaychat.uz", "Agent", "away", "22m"],
      ["Nodira A.", "nodira@qulaychat.uz", "Agent", "offline", "3h"],
      ["Jasur P.", "jasur@qulaychat.uz", "Agent", "online", "1m"]
    ];
    const roleBadge = (role) => role === "Admin" ? badge(role, "badge-primary") : role === "Manager" ? badge(role, "badge-info") : badge(role);
    const statusLabel = { online: "Online", away: "Away", offline: "Offline" };
    const rows = agents.map((a) => [
      `<div class="flex gap-2 items-center">${avatar(a[0])}<div><a href="./02-agent-profile.html" style="color:var(--primary)"><strong>${esc(a[0])}</strong></a></div></div>`,
      esc(a[1]),
      roleBadge(a[2]),
      `<span class="flex gap-2 items-center"><span class="status-dot ${a[3]}"></span>${statusLabel[a[3]]}</span>`,
      esc(a[4]),
      `<div class="flex gap-2">${btn("Edit", "secondary", 'data-action="log"')}${btn("Delete", "danger", 'data-action="log"')}</div>`
    ]);
    body = `
${card("Qidiruv va taklif", `<div class="form-grid" style="grid-template-columns:2fr auto">
  <div class="input-group">${icon("search")}<input class="input" type="search" placeholder="Ism yoki email bo'yicha qidiring"></div>
  <div>${linkBtn("Taklif yuborish", "./04-invitations.html", "primary")}</div>
</div>`)}
${card("Agentlar ro'yxati", simpleTable(["Agent", "Email", "Role", "Status", "Oxirgi faollik", "Actions"], rows))}`;
  } else if (file === "02-agent-profile.html") {
    body = `<div class="split-grid">
${card("Agent profili", `<div class="flex gap-4 items-center">${avatar("Sardor A.", "avatar-xl")}<div><h3>Sardor A.</h3><p class="text-muted">Senior Support Admin</p><div class="flex gap-2 mt-2">${badge("Admin", "badge-primary")}${badge("Online", "badge-success")}</div></div></div><div class="divider"></div>${keyValueList([{ key: "Email", value: "sardor@qulaychat.uz" }, { key: "Phone", value: "+998 90 123 45 67" }, { key: "Shift", value: "09:00 - 18:00" }, { key: "Language", value: "UZ / EN / RU" }])}`)}
${card("Statistika", `${metricGrid([{ label: "Handled chats", value: "1,204", trend: "+9%" }, { label: "Avg response", value: "1m 42s", trend: "+4%" }, { label: "CSAT", value: "4.9", trend: "+0.2" }, { label: "SLA", value: "97%", trend: "+1%" }])}`)}
</div>
${card("Oxirgi chatlar", simpleTable(["Chat ID", "Visitor", "Kanal", "Status", "Vaqt"], [
  ["#CH-2192", "Ahmad V.", "Web", badge("Closed", "badge-success"), "10:12"],
  ["#CH-2188", "Dilnoza R.", "Telegram", badge("Resolved", "badge-info"), "09:48"],
  ["#CH-2179", "Malika O.", "WhatsApp", badge("Closed", "badge-success"), "08:56"],
  ["#CH-2173", "Rustam K.", "Email", badge("Escalated", "badge-warning"), "Yesterday"],
  ["#CH-2161", "Nodira T.", "Web", badge("Closed", "badge-success"), "Yesterday"],
  ["#CH-2158", "Jasur P.", "Web", badge("Closed", "badge-success"), "2d ago"]
]))}`;
  } else if (file === "03-roles.html") {
    const permissions = [
      ["Inbox access", "inbox"],
      ["Team management", "team"],
      ["Analytics", "analytics"],
      ["Settings", "settings"],
      ["Billing", "billing"],
      ["Automation", "automation"]
    ];
    const roles = [
      { name: "Admin", desc: "To'liq boshqaruv", checked: ["inbox", "team", "analytics", "settings", "billing", "automation"], badgeClass: "badge-primary" },
      { name: "Manager", desc: "Team va analytics nazorati", checked: ["inbox", "team", "analytics", "automation"], badgeClass: "badge-info" },
      { name: "Operator", desc: "Operatsion ishlash uchun minimum ruxsatlar", checked: ["inbox", "analytics"], badgeClass: "" }
    ];
    body = `<div class="three-col">
${roles.map((r) => `  <div class="card">
    <div class="card-header">
      <div><h3>${r.name}</h3><p class="card-description">${r.desc}</p></div>
      ${badge(r.name, r.badgeClass)}
    </div>
    <div class="card-body">
      <div class="list-stack">${permissions.map((p) => `<label class="checkbox"><input type="checkbox" ${r.checked.includes(p[1]) ? "checked" : ""}>${p[0]}</label>`).join("")}</div>
      <div class="divider"></div>
      ${btn("Saqlash", "primary", 'data-action="save"')}
    </div>
  </div>`).join("")}
</div>`;
  } else if (file === "04-invitations.html") {
    const rows = [
      ["operator1@client.uz", "Operator", badge("Pending", "badge-warning"), "2h ago"],
      ["manager@client.uz", "Manager", badge("Pending", "badge-warning"), "Yesterday"],
      ["ops@acme.uz", "Operator", badge("Accepted", "badge-success"), "2d ago"],
      ["sales@nexa.uz", "Manager", badge("Pending", "badge-warning"), "3d ago"]
    ].map((r) => [r[0], r[1], r[2], r[3], `<div class="flex gap-2">${btn("Resend", "secondary", 'data-action="log"')}${btn("Cancel", "danger", 'data-action="log"')}</div>`]);
    body = `${card("Pending Invitations", simpleTable(["Email", "Role", "Status", "Sent", "Actions"], rows), { actions: btn("Taklif yuborish", "primary", 'data-modal-open="invite-modal"') })}
${modalMarkup("invite-modal", "Taklif yuborish", `<div class="form-grid one">
  ${formField("Email", '<input class="input" type="email" placeholder="user@company.uz">')}
  ${formField("Role", select(["Operator", "Manager", "Admin"], "Operator"))}
</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Yuborish", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else {
    return renderTeamPage(relPath, folderMap);
  }

  const content = `${shellHeaderBlock(relPath, folderMap, title, "Jamoa, rollar va takliflarni boshqarish", `${btn("Saqlash", "secondary", 'data-action="save"')}`)}${body}`;
  return shellPage({ title, activeNav: "team", content });
}

function renderBillingPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-plan.html") {
    const plans = [
      ["Starter", "$0", "Kichik jamoalar uchun", ["1 agent", "Web widget", "Basic inbox", "7 kun analytics"], btn("Joriy plan", "secondary", "disabled")],
      ["Pro", "$29", "Har oy / workspace", ["5 agent", "Automation", "Analytics export", "Team chat", "Knowledge Base"], btn("Upgrade", "primary", 'data-action="save"'), true],
      ["Enterprise", "Custom", "Korporativ jamoalar uchun", ["Custom seats", "SSO", "Priority SLA", "Advanced security", "Dedicated CSM"], btn("Contact sales", "secondary", 'data-action="log"')]
    ];
    body = `
${card("Billing cycle", `<div class="pill-tabs" role="tablist" aria-label="Billing cycle">
  <button class="tab active" type="button" data-tab-group="billing-cycle" data-tab="monthly">Monthly</button>
  <button class="tab" type="button" data-tab-group="billing-cycle" data-tab="yearly">Yearly</button>
</div>`)}
<div class="pricing-comparison">
${plans.map((p) => `  <div class="pricing-card ${p[6] ? "featured" : ""}" style="${p[6] ? "border-color:#C7D2FE;box-shadow:var(--shadow-md)" : ""}">
    <h3>${p[0]}</h3>
    <div class="pricing-price">${p[1]}</div>
    <p class="text-muted" style="font-size:13px">${p[2]}</p>
    <ul class="pricing-list" style="margin-top:10px">${p[3].map((x) => `<li>${icon("check")} ${esc(x)}</li>`).join("")}</ul>
    <div style="margin-top:12px">${p[4]}</div>
  </div>`).join("")}
</div>
${card("Feature comparison", simpleTable(["Feature", "Starter", "Pro", "Enterprise"], [
  ["Agent limit", "1", "5", "Custom"],
  ["Inbox", "Basic", "Full", "Full + Advanced"],
  ["Automation", "вЂ”", badge("Included", "badge-success"), badge("Advanced", "badge-success")],
  ["Analytics", "7 kun", "90 kun + export", "Unlimited + custom"],
  ["Billing", "Basic", "Included", "Custom contract"],
  ["Support", "Community", "Email", "Priority"]
]))}`;
  } else if (file === "03-invoices.html") {
    body = `
${card("Filters", `<div class="form-grid three">
  <div>${formField("Status", select(["All", "Paid", "Failed", "Pending"], "All"))}</div>
  <div>${formField("Date range", `<div class="date-range">${icon("calendar")}Oxirgi 12 oy</div>`)}</div>
  <div class="flex items-end">${btn("Filter", "secondary", 'data-action="log"')}</div>
</div>`)}
${card("Invoices", simpleTable(["Sana", "Invoice ID", "Summa", "Status", "Cycle", "Download"], [
  ["2026-02-01", "#INV-2026-021", "$29.00", badge("Paid", "badge-success"), "Monthly", btn("PDF", "secondary", 'data-action="export"')],
  ["2026-01-01", "#INV-2026-011", "$29.00", badge("Paid", "badge-success"), "Monthly", btn("PDF", "secondary", 'data-action="export"')],
  ["2025-12-01", "#INV-2025-121", "$29.00", badge("Paid", "badge-success"), "Monthly", btn("PDF", "secondary", 'data-action="export"')],
  ["2025-11-01", "#INV-2025-111", "$29.00", badge("Paid", "badge-success"), "Monthly", btn("PDF", "secondary", 'data-action="export"')],
  ["2025-10-01", "#INV-2025-101", "$29.00", badge("Paid", "badge-success"), "Monthly", btn("PDF", "secondary", 'data-action="export"')],
  ["2025-09-01", "#INV-2025-091", "$29.00", badge("Failed", "badge-danger"), "Monthly", btn("Retry", "secondary", 'data-action="log"')],
  ["2025-08-01", "#INV-2025-081", "$0.00", badge("Trial", "badge-info"), "Starter", btn("View", "secondary", 'data-action="log"')]
]))}`;
  } else if (file === "04-usage.html") {
    const usage = [
      ["Agents", "3/5", 60],
      ["Chats", "847/1000", 84.7],
      ["Storage", "120MB/500MB", 24],
      ["API", "4200/10000", 42]
    ];
    body = `${card("Usage meters", `<div class="usage-meter">
${usage.map((u) => `<div style="display:grid;gap:6px"><div class="row"><span>${u[0]}</span><strong>${u[1]}</strong></div>${progressBar(u[2], u[2] > 85 ? "warning" : "primary")}</div>`).join("")}
</div>`)}`;
  } else {
    return renderBillingPage(relPath, folderMap);
  }

  return shellPage({ title, activeNav: "billing", content: `${shellHeaderBlock(relPath, folderMap, title, "Plan, to'lov va invoice boshqaruvi", `${btn("Manage plan", "primary", 'data-action="log"')}`)}${body}` });
}

function renderAnalyticsPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-overview.html") {
    body = `${metricGrid([{ label: "Total chats", value: "12,842", trend: "+14%" }, { label: "First response", value: "1m 58s", trend: "-12%", trendClass: "warn" }, { label: "Resolution", value: "84%", trend: "+2%" }, { label: "CSAT", value: "4.8", trend: "+0.3" }])}
<div class="two-col">${card("Chat volume", fakeLineChart())}${card("Channels", fakeDonut())}</div>
${card("Top segments", simpleTable(["Segment", "Chats", "Avg response", "CSAT"], [
  ["New visitors", "4,102", "2m 11s", "4.7"],
  ["Returning", "3,881", "1m 43s", "4.9"],
  ["VIP", "402", "0m 58s", "4.9"],
  ["Pricing leads", "1,244", "1m 29s", "4.8"],
  ["Support", "2,091", "2m 22s", "4.6"],
  ["Enterprise", "118", "0m 44s", "4.9"]
]))}`;
  } else if (file === "02-response-times.html") {
    body = `${card("Response time trend", fakeLineChart())}
<div class="three-col">${card("Average", "<div class='metric-value'>1m 58s</div><div class='metric-trend'>-12%</div>")}${card("Median", "<div class='metric-value'>1m 21s</div><div class='metric-trend'>-9%</div>")}${card("p95", "<div class='metric-value'>5m 44s</div><div class='metric-trend down'>+6%</div>")}</div>
${card("Kanal breakdown", simpleTable(["Kanal", "Avg response", "Median", "p95", "Chats"], [
  ["Web", "1m 12s", "0m 58s", "4m 04s", "4,822"],
  ["Telegram", "2m 04s", "1m 39s", "6m 11s", "2,931"],
  ["WhatsApp", "2m 22s", "1m 51s", "7m 05s", "1,480"],
  ["Email", "4m 18s", "3m 02s", "12m 42s", "980"],
  ["Instagram", "2m 48s", "2m 10s", "8m 14s", "613"],
  ["Facebook", "3m 01s", "2m 33s", "9m 26s", "411"]
]))}`;
  } else if (file === "03-operators.html") {
    const rows = [
      ["Sardor A.", "412", "1m 42s", "88%", "4.9"],
      ["Sara M.", "355", "2m 01s", "83%", "4.8"],
      ["Ali K.", "298", "2m 14s", "80%", "4.6"],
      ["Malika T.", "267", "1m 54s", "86%", "4.9"],
      ["Dilshod N.", "189", "2m 40s", "78%", "4.5"],
      ["Jasur P.", "321", "1m 37s", "89%", "4.8"],
      ["Bobur R.", "144", "3m 05s", "74%", "4.4"]
    ].map((r) => [`<a href="./04-operator-detail.html" style="color:var(--primary)">${esc(r[0])}</a>`, r[1], r[2], r[3], r[4]]);
    body = `${card("Operator performance", simpleTable(["Agent", "Chats", "Avg response", "Resolution", "CSAT"], rows), { actions: linkBtn("Detail", "./04-operator-detail.html", "secondary") })}`;
  } else if (file === "04-operator-detail.html") {
    body = `<div class="split-grid">${card("Operator card", `<div class="flex gap-3 items-center">${avatar("Sardor A.", "avatar-xl")}<div><h3>Sardor A.</h3><p class="text-muted">Admin вЂў Day shift</p>${badge("Online", "badge-success")}</div></div>${keyValueList([{ key: "Handled chats", value: "412" }, { key: "Avg response", value: "1m 42s" }, { key: "CSAT", value: "4.9" }, { key: "SLA", value: "98%" }])}`)}${card("Weekly trend", fakeLineChart())}</div>${card("Breakdown by channel", simpleTable(["Channel", "Chats", "Avg response", "CSAT"], [["Web", "220", "1m 35s", "4.9"], ["Telegram", "121", "2m 02s", "4.8"], ["Email", "71", "2m 31s", "4.7"], ["WhatsApp", "48", "1m 58s", "4.9"], ["Instagram", "19", "2m 49s", "4.6"]]))}`;
  } else if (file === "05-sla.html") {
    body = `${card("SLA compliance", `<div class="stack">
  <div><div class="flex justify-between"><strong>First response SLA</strong><span class="text-muted">94%</span></div>${progressBar(94)}</div>
  <div><div class="flex justify-between"><strong>Resolution SLA</strong><span class="text-muted">87%</span></div>${progressBar(87, "warning")}</div>
  <div><div class="flex justify-between"><strong>VIP SLA</strong><span class="text-muted">98%</span></div>${progressBar(98, "success")}</div>
</div>`)}
${card("Breached conversations", simpleTable(["Chat ID", "Visitor", "SLA type", "Delay", "Owner"], [
  ["#CH-3021", "Ahmad V.", "First response", "4m 12s", "Unassigned"],
  ["#CH-3018", "Dilnoza R.", "Resolution", "18m", "Ali K."],
  ["#CH-3012", "ACME Support", "VIP response", "2m 19s", "Bobur R."],
  ["#CH-3004", "Nexa Ops", "First response", "3m 44s", "Dilshod N."],
  ["#CH-2991", "Malika O.", "Resolution", "26m", "Sara M."]
]))}`;
  } else if (file === "06-channels.html") {
    body = `<div class="two-col">${card("Channel share", fakeDonut())}${card("Channel volume", fakeBars(6, ["Web", "TG", "WA", "Email", "IG", "FB"]))}</div>`;
  } else if (file === "07-segments.html") {
    body = `${card("Segment breakdown", simpleTable(["Segment", "Users", "Chats", "Conv rate", "CSAT"], [
  ["New Visitors", "4,812", "6,421", "18%", "4.7"],
  ["Returning", "2,944", "4,203", "25%", "4.8"],
  ["VIP", "344", "892", "42%", "4.9"],
  ["Pricing Leads", "1,102", "1,844", "31%", "4.8"],
  ["Support Existing", "1,981", "3,102", "22%", "4.6"],
  ["Enterprise Leads", "119", "402", "56%", "4.9"],
  ["Trial Users", "807", "1,411", "28%", "4.7"]
]))}`;
  } else if (file === "08-tags.html") {
    body = `${card("Tag cloud", `<div class="tag-cloud">${["Pricing", "Lead", "Bug", "Billing", "Refund", "Technical", "Sales", "Enterprise", "VIP", "Urgent", "Integration", "Widget"].map((t, i) => `<span class="badge ${i % 3 === 0 ? "badge-primary" : i % 3 === 1 ? "badge-info" : "badge-warning"}">${t}</span>`).join("")}</div>`, { actions: btn("Tag qo'shish", "primary", 'data-modal-open="add-tag"') })}
${card("Tag frequency", simpleTable(["Tag", "Count", "Avg response", "Resolution"], [
  ["Pricing", "482", "1m 45s", "84%"],
  ["Technical", "321", "2m 22s", "79%"],
  ["Billing", "198", "2m 01s", "91%"],
  ["Lead", "544", "1m 18s", "88%"],
  ["VIP", "76", "0m 52s", "96%"],
  ["Refund", "44", "2m 34s", "89%"]
]))}
${modalMarkup("add-tag", "Tag qo'shish", `<div class="form-grid one">${formField("Tag nomi", input("Urgent"))}${formField("Rang", select(["Primary", "Info", "Warning", "Success"], "Primary"))}</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else if (file === "09-custom-reports.html") {
    body = `
${card("Report builder", `<div class="split-grid">
  <div>
    <h4 style="margin-bottom:10px">Metrics</h4>
    <div class="list-stack">
      <label class="checkbox"><input type="checkbox" checked> Chats count</label>
      <label class="checkbox"><input type="checkbox" checked> First response time</label>
      <label class="checkbox"><input type="checkbox"> Resolution time</label>
      <label class="checkbox"><input type="checkbox" checked> CSAT</label>
      <label class="checkbox"><input type="checkbox"> SLA breach count</label>
      <label class="checkbox"><input type="checkbox"> Reopen rate</label>
    </div>
  </div>
  <div>
    ${formField("Group by", select(["Day", "Week", "Operator", "Channel", "Segment"], "Day"))}
    ${formField("Date range", `<div class="date-range">${icon("calendar")}Oxirgi 30 kun</div>`)}
    ${formField("Filter", select(["All channels", "Web only", "Telegram only", "VIP only"], "All channels"))}
  </div>
</div>
<div class="divider"></div>
<div class="card" style="border-style:dashed">
  <div class="card-header"><div><h3>Preview</h3><p class="card-description">Report preview area</p></div></div>
  <div class="card-body">${fakeLineChart()}<div class="chart-axis-labels"><span>D1</span><span>D2</span><span>D3</span><span>D4</span><span>D5</span><span>D6</span><span>D7</span></div></div>
</div>`, { actions: `${btn("Preview", "secondary", 'data-action="log"')} ${btn("Saqlash", "primary", 'data-action="save"')}` })}
${card("Saved reports", simpleTable(["Nomi", "Group by", "Range", "Owner", "Actions"], [
  ["Daily Support KPI", "Day", "30 kun", "Sardor", btn("Open", "secondary", 'data-action="log"')],
  ["Operator QA", "Operator", "7 kun", "Sara", btn("Open", "secondary", 'data-action="log"')],
  ["Channel Mix", "Channel", "30 kun", "Ali", btn("Open", "secondary", 'data-action="log"')]
]))}`;
  } else if (file === "10-export.html") {
    body = `${card("Export report", `<div class="form-grid"><div>${formField("Format", select(["CSV", "PDF", "Excel"], "CSV"))}</div><div>${formField("Date range", `<div class="date-range">${icon("calendar")}Oxirgi 30 kun</div>`)}</div><div>${formField("Include fields", select(["All fields", "Summary only"], "All fields"))}</div><div class="flex items-center" style="align-self:end">${btn("Download export", "primary", 'data-action="export"')}</div></div>`)}${card("Recent exports", simpleTable(["Created", "Format", "Range", "Status"], [["14:21", "CSV", "Last 30 days", badge("Ready", "badge-success")], ["Yesterday", "PDF", "This month", badge("Ready", "badge-success")], ["2 days ago", "Excel", "Custom", badge("Processing", "badge-warning")], ["4 days ago", "CSV", "Last 7 days", badge("Ready", "badge-success")]]))}`;
  } else {
    body = `${metricGrid([{ label: "My chats", value: "412", trend: "+8%" }, { label: "Avg response", value: "1m 42s", trend: "+6%" }, { label: "CSAT", value: "4.9", trend: "+0.1" }, { label: "Resolved", value: "88%", trend: "+4%" }])}<div class="two-col">${card("My weekly activity", fakeLineChart())}${card("Personal channel split", fakeDonut([{ label: "Web", color: "#4F46E5", value: "62%" }, { label: "Telegram", color: "#10B981", value: "18%" }, { label: "Email", color: "#F59E0B", value: "20%" }]))}</div>`;
  }

  const header = `${shellHeaderBlock(relPath, folderMap, title, "Analytics dashboard va reportlar", analyticsTopbarV2())}`;
  return shellPage({ title, activeNav: "analytics", content: `${header}${body}` });
}

function renderSettingsPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  if (!["01-workspace.html", "03-security.html", "05-profile.html", "06-privacy-export.html"].includes(file)) {
    return renderSettingsPage(relPath, folderMap);
  }
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-workspace.html") {
    body = `<section class="settings-section"><h3>Workspace</h3><p class="section-desc">Workspace nomi, domen va locale sozlamalari</p><div class="form-grid"><div>${formField("Workspace nomi", input("QULAY CHAT Support"))}</div><div>${formField("URL", '<input class="input" value="support.qulaychat.uz">')}</div><div>${formField("Timezone", select(["GMT+5 Toshkent", "GMT+3 Istanbul", "GMT+6 Almaty"], "GMT+5 Toshkent"))}</div><div>${formField("Til", select(["O'zbek", "English", "Р СѓСЃСЃРєРёР№"], "O'zbek"))}</div></div><div class="two-col"><div class="dropzone">${icon("upload-cloud")}<div>Logo yuklash</div><small>PNG / JPG / SVG</small></div><div>${formField("Workspace description", textarea("Mijoz support va sales chatlari uchun umumiy workspace.", "", 5))}</div></div></section>
<section class="card" style="border-color:#FCA5A5;background:#FFF7F7">
  <div class="card-header"><div><h3 style="color:#B91C1C">Danger zone</h3><p class="card-description">Workspace o'chirilsa barcha ma'lumotlar yo'qoladi.</p></div>${badge("Xavfli", "badge-danger")}</div>
  <div class="card-body"><div class="flex justify-between items-center gap-3 wrap"><div><div class="item-title">Workspace o'chirish</div><div class="item-sub">Delete amalidan oldin export oling.</div></div>${btn("Workspace o'chirish", "danger", 'data-modal-open="workspace-delete"')}</div></div>
</section>
${modalMarkup("workspace-delete", "Workspace o'chirish", `${formField("Tasdiqlash", '<input class="input" placeholder="QULAY CHAT Support">')}`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("O'chirishni tasdiqlash", "danger", 'data-modal-close data-action="log"')}`)}`;
  } else if (file === "03-security.html") {
    body = `<section class="settings-section"><h3>Security</h3><p class="section-desc">Parol, 2FA va session boshqaruvi</p><div class="form-grid"><div>${formField("Current password", '<input class="input" type="password" placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў">')}</div><div>${formField("New password", '<input class="input" type="password" placeholder="вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў">')}</div></div><div class="form-row"><div class="row-copy"><div class="form-label">2FA</div><p class="text-muted" style="font-size:13px">Login paytida qo'shimcha kod talab qilinadi</p></div>${toggle(true)}</div>${simpleTable(["Device", "Location", "Last active", "Action"], [["Chrome вЂў macOS", "Toshkent", "Now", btn("Revoke", "secondary", 'data-action="log"')], ["Safari вЂў iPhone", "Samarqand", "Yesterday", btn("Revoke", "secondary", 'data-action="log"')], ["Edge вЂў Windows", "Buxoro", "2d ago", btn("Revoke", "secondary", 'data-action="log"')]])}<div class="divider"></div><div class="flex justify-between items-center gap-2 wrap"><div><div class="item-title">Barcha sessiyalarni tugatish</div><div class="item-sub">Joriy qurilmadan tashqari barcha sessionlar yopiladi.</div></div>${btn("Barcha sessiyalarni tugatish", "danger", 'data-action="log"')}</div></section>`;
  } else if (file === "05-profile.html") {
    body = `<section class="settings-section"><h3>Profile</h3><p class="section-desc">Avatar va shaxsiy ma'lumotlar</p><div class="two-col"><div class="flex gap-4 items-center">${avatar("Sardor A.", "avatar-xxl")}<div><button class="btn btn-secondary" type="button" data-action="log" data-message="Avatar yuklash oynasi ochildi">Avatar yuklash</button><p class="text-muted" style="font-size:12px;margin-top:6px">PNG/JPG, max 2MB</p></div></div><div class="form-grid one">${formField("Ism", input("Sardor Aliyev"))}${formField("Email", '<input class="input" type="email" value="sardor@qulaychat.uz" readonly>')}${formField("Telefon", '<input class="input" value="+998 90 123 45 67">')}${formField("Lavozim", input("Support Lead"))}</div></div></section>`;
  } else if (file === "06-privacy-export.html") {
    body = `<section class="settings-section"><h3>Data export</h3><p class="section-desc">Foydalanuvchi ma'lumotlarini eksport qilish</p><div class="form-grid"><div>${formField("Format", select(["JSON", "CSV", "ZIP"], "ZIP"))}</div><div>${formField("Date range", `<div class="date-range">${icon("calendar")}Last 90 days</div>`)}</div></div><div class="alert alert-info">${icon("shield-check")}<div>Export tayyor bo'lgach email orqali yuboriladi.</div></div><div>${btn("Exportni boshlash", "primary", 'data-action="export"')}</div><div class="divider"></div><h4>Oldingi exportlar</h4>${simpleTable(["Sana", "Format", "Range", "Status", "File"], [["2026-02-18 10:12", "ZIP", "90 kun", badge("Ready", "badge-success"), btn("Yuklash", "secondary", 'data-action="export"')], ["2026-01-20 14:40", "CSV", "30 kun", badge("Ready", "badge-success"), btn("Yuklash", "secondary", 'data-action="export"')], ["2025-12-28 09:05", "JSON", "Custom", badge("Expired", "badge-warning"), btn("Qayta yaratish", "secondary", 'data-action="export"')]])}</section>`;
  }

  const content = `${shellHeaderBlock(relPath, folderMap, "Sozlamalar", "Workspace, widget, security va privacy boshqaruvi", "")}<section class="settings-card">${settingsTabsHtml(file)}<div class="settings-body">${body}</div><div class="sticky-save-bar">${btn("Bekor qilish", "secondary", 'data-action="reset-form"')} ${btn("Saqlash", "primary", 'data-action="save"')}</div></section>`;
  return shellPage({ title, activeNav: "settings", content, bodyClass: "settings-shell" });
}

function widgetWindowChatV2(options = {}) {
  const titleMini = options.mini || "Online вЂў Javob 2m ichida";
  const typing = options.typing ? `<div class="widget-msg center"><span class="typing-dots"><span></span><span></span><span></span></span> Agent yozmoqda...</div>` : "";
  const attrs = options.attrs || "";
  return `<div class="widget-window" ${attrs}>
  <div class="widget-window-header">
    <div><strong>QULAY CHAT</strong><div class="mini">${esc(titleMini)}</div></div>
    <div class="flex gap-1">
      <button class="icon-btn" type="button" data-action="log">${icon("minus")}</button>
      <button class="icon-btn" type="button" data-action="log">${icon("x")}</button>
    </div>
  </div>
  <div class="widget-window-body">
    <div class="widget-msg">Salom! QULAY CHAT supportga xush kelibsiz.</div>
    <div class="widget-msg agent">Assalomu alaykum, qanday yordam kerak?</div>
    <div class="widget-msg">Pro plan narxi va agent limiti qancha?</div>
    <div class="widget-msg agent">Pro plan $29, 5 agentgacha. Enterprise ham mavjud.</div>
    <div class="widget-msg">Telegram integratsiya bormi?</div>
    <div class="widget-msg agent">Ha, Telegram, WhatsApp va Email kanallari qo'llab-quvvatlanadi.</div>
    <div class="widget-msg">Demo olsam bo'ladimi?</div>
    ${typing}
  </div>
  <div class="widget-window-footer">
    <button class="icon-btn" type="button" data-action="log">${icon("paperclip")}</button>
    <button class="icon-btn" type="button" data-action="log">${icon("smile")}</button>
    <textarea class="textarea" rows="1" placeholder="Xabar yozing..."></textarea>
    <button class="btn btn-primary btn-sm" type="button" data-action="log">${icon("send")}</button>
  </div>
</div>`;
}

function widgetWindowOfflineV2(options = {}) {
  const attrs = options.attrs || "";
  return `<div class="widget-window" ${attrs}>
  <div class="widget-window-header">
    <div><strong>QULAY CHAT</strong><div class="mini">Offline</div></div>
    <button class="icon-btn" type="button" data-action="log">${icon("x")}</button>
  </div>
  <form class="widget-window-body" data-submit-message="Offline xabar yuborildi">
    <div class="alert alert-info">${icon("clock-3")}<div>Operatorlar hozir offline. Dush-Jum, 09:00-18:00 oralig'ida javob beramiz.</div></div>
    ${formField("Ism", '<input class="input" type="text" placeholder="Ismingiz">')}
    ${formField("Email", '<input class="input" type="email" placeholder="you@example.com">')}
    ${formField("Xabar", '<textarea class="textarea" rows="4" placeholder="Savolingizni yozing..."></textarea>')}
    <div class="widget-window-footer" style="padding:0;border-top:none"><button class="btn btn-primary w-full" type="submit" data-action="log">Yuborish</button></div>
  </form>
</div>`;
}

function widgetWindowCsatV2(options = {}) {
  const attrs = options.attrs || "";
  return `<div class="widget-window" ${attrs}>
  <div class="widget-window-header">
    <div><strong>QULAY CHAT</strong><div class="mini">CSAT</div></div>
    <button class="icon-btn" type="button" data-action="log">${icon("x")}</button>
  </div>
  <div class="widget-window-body">
    <h3>Yordamingiz foydali bo'ldimi?</h3>
    <div class="text-muted" style="font-size:13px">Suhbat sifatini 1 dan 5 gacha baholang.</div>
    <div class="flex gap-2" data-star-rating data-value="0">
      <button class="btn btn-secondary btn-sm" type="button" data-star-value="1">${icon("star")}</button>
      <button class="btn btn-secondary btn-sm" type="button" data-star-value="2">${icon("star")}</button>
      <button class="btn btn-secondary btn-sm" type="button" data-star-value="3">${icon("star")}</button>
      <button class="btn btn-secondary btn-sm" type="button" data-star-value="4">${icon("star")}</button>
      <button class="btn btn-secondary btn-sm" type="button" data-star-value="5">${icon("star")}</button>
    </div>
    ${formField("Izoh", "<textarea class=\"textarea\" rows=\"4\" placeholder=\"Qo'shimcha fikringiz...\"></textarea>")}
  </div>
  <div class="widget-window-footer">
    <button class="btn btn-primary w-full" type="button" data-action="log">Yuborish</button>
  </div>
</div>`;
}

function widgetWindowLoadingV2() {
  return `<div class="widget-window">
  <div class="widget-window-header"><div><strong>QULAY CHAT</strong><div class="mini">Loading</div></div><button class="icon-btn" type="button" data-action="log">${icon("x")}</button></div>
  <div class="widget-window-body">
    <div class="empty-state">${icon("loader-circle")}<div>Yuklanmoqda...</div><p class="text-muted" style="font-size:13px">Widget komponentlari yuklanmoqda</p></div>
  </div>
  <div class="widget-window-footer"><button class="btn btn-secondary w-full" type="button" disabled>...</button></div>
</div>`;
}

function renderWidgetPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const { items, currentHref } = siblingItemsFor(folderMap, relPath);
  const title = prettyTitleFromRel(relPath);
  let mainContent = "";

  if (file === "01-widget-launcher.html") {
    mainContent = `<div class="widget-canvas">
  <div class="widget-site-content">
    <div class="card">
      <div class="card-header"><div><h3>Website Preview</h3><p class="card-description">Sayt kontenti va widget launcher joylashuvi</p></div></div>
      <div class="card-body">
        <div class="placeholder-line" style="width:68%"></div>
        <div class="placeholder-line" style="width:92%"></div>
        <div class="placeholder-line" style="width:88%"></div>
        <div class="divider"></div>
        <div class="three-col">
          <div class="card"><div class="card-body"><strong>Pricing</strong><p class="text-muted" style="font-size:13px">Pro va Enterprise taqqoslash</p></div></div>
          <div class="card"><div class="card-body"><strong>Integrations</strong><p class="text-muted" style="font-size:13px">Telegram, WhatsApp, Slack</p></div></div>
          <div class="card"><div class="card-body"><strong>FAQ</strong><p class="text-muted" style="font-size:13px">Ko'p so'raladigan savollar</p></div></div>
        </div>
        <div class="placeholder-line" style="width:95%;height:120px;border-radius:14px;margin-top:12px"></div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div><h3>Launcher Config</h3><p class="card-description">Pulse animatsiya va open/close demo</p></div></div>
      <div class="card-body">${keyValueList([{ key: "Position", value: "Bottom right" }, { key: "Size", value: "60px" }, { key: "Animation", value: "pulse" }, { key: "Action", value: "Open widget window" }])}</div>
    </div>
  </div>
  <div data-widget-demo>
    ${widgetWindowChatV2({ attrs: 'data-widget-window' })}
    <button class="widget-floating-launcher pulse" type="button" aria-label="Open widget" data-widget-launcher-toggle>${icon("message-circle")}</button>
  </div>
</div>`;
  } else if (file === "02-widget-chat.html") {
    mainContent = `<div class="widget-canvas">
  <div class="widget-site-content">
    <div class="card"><div class="card-header"><div><h3>Visitor page</h3><p class="card-description">Chat holati (online) namuna</p></div></div><div class="card-body"><div class="placeholder-line" style="width:72%"></div><div class="placeholder-line" style="width:94%"></div><div class="placeholder-line" style="width:88%"></div><div class="placeholder-line" style="width:91%;height:220px;border-radius:14px"></div></div></div>
    <div data-widget-demo class="is-open" style="justify-self:end">${widgetWindowChatV2({ attrs: 'data-widget-window', typing: true })}</div>
  </div>
</div>`;
  } else if (file === "03-widget-offline.html") {
    mainContent = `<div class="widget-canvas"><div class="widget-site-content"><div class="card"><div class="card-header"><div><h3>Offline state</h3><p class="card-description">Ish vaqtidan tashqari visitor lead capture form</p></div></div><div class="card-body"><div class="alert alert-info">${icon("clock-3")}<div>Ish vaqti: Dush-Jum, 09:00-18:00</div></div><div class="placeholder-line" style="width:92%;height:220px;border-radius:14px"></div></div></div><div style="justify-self:end">${widgetWindowOfflineV2()}</div></div></div>`;
  } else if (file === "04-widget-csat.html") {
    mainContent = `<div class="widget-canvas"><div class="widget-site-content"><div class="card"><div class="card-header"><div><h3>CSAT prompt</h3><p class="card-description">Suhbatdan keyin baholash oynasi</p></div></div><div class="card-body"><div class="placeholder-line" style="width:90%"></div><div class="placeholder-line" style="width:80%"></div><div class="placeholder-line" style="width:95%;height:180px;border-radius:14px"></div></div></div><div style="justify-self:end">${widgetWindowCsatV2()}</div></div></div>`;
  } else {
    mainContent = `<div class="widget-canvas"><div class="widget-gallery">
  <div class="widget-state-card"><h3>Online</h3>${widgetWindowChatV2({ mini: "Online вЂў Javob 2m ichida" })}</div>
  <div class="widget-state-card"><h3>Offline</h3>${widgetWindowOfflineV2()}</div>
  <div class="widget-state-card"><h3>Typing</h3>${widgetWindowChatV2({ mini: "Online вЂў Typing", typing: true })}</div>
  <div class="widget-state-card"><h3>Loading</h3>${widgetWindowLoadingV2()}</div>
</div></div>`;
  }

  const content = `  <main class="widget-page">
    <div class="widget-shell">
      <div class="widget-topbar">
        <a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>Widget Preview</span></a>
        <div class="subnav-scroll"><div class="subnav-tabs">${items.map((item) => `<a class="subnav-tab ${item.href === currentHref ? "active" : ""}" href="${esc(item.href)}">${esc(item.label)}</a>`).join("")}</div></div>
      </div>
      ${mainContent}
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${title}`, bodyClass: "widget-page", content });
}

function renderContactsPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-contacts-list.html") {
    const contacts = [
      ["Ahmad Valiyev", "ahmad@example.com", "ACME", "2h ago", [badge("Lead", "badge-info"), badge("Pricing", "badge-primary")]],
      ["Nodira Tursunova", "nodira@nexa.uz", "Nexa", "Yesterday", [badge("VIP", "badge-warning")]],
      ["Rustam Karimov", "rustam@logi.uz", "Logi Group", "3d ago", [badge("Support")]],
      ["Malika Orifova", "malika@shop.uz", "Shoply", "20m ago", [badge("Customer", "badge-success")]],
      ["Dilshod Nazarov", "dilshod@edu.uz", "EduPro", "1h ago", [badge("Lead", "badge-info")]],
      ["Jasur P.", "jasur@fin.uz", "FinCore", "4h ago", [badge("Billing", "badge-warning")]],
      ["Sarvinoz T.", "sarvinoz@hub.uz", "LogiHub", "2d ago", [badge("Customer", "badge-success")]],
      ["Bobur R.", "bobur@retail.uz", "RetailX", "5d ago", [badge("Inactive")]],
      ["Zuhra M.", "zuhra@acme.uz", "ACME", "6h ago", [badge("VIP", "badge-warning"), badge("Enterprise", "badge-primary")]]
    ];
    const rows = contacts.map((c) => [
      '<input type="checkbox" aria-label="Select row">',
      `<div class="flex gap-2 items-center">${avatar(c[0])}<a href="./02-contact-profile.html" style="color:var(--primary)">${esc(c[0])}</a></div>`,
      esc(c[1]),
      esc(c[2]),
      esc(c[3]),
      c[4].join("")
    ]);
    body = `${card("Filters", `<div class="form-grid three">
  <div class="input-group">${icon("search")}<input class="input" type="search" placeholder="Kontakt qidirish"></div>
  <div class="flex gap-2 wrap">
    ${btn("All", "secondary", 'data-action="log"')}
    ${btn("VIP", "secondary", 'data-action="log"')}
    ${btn("Leads", "secondary", 'data-action="log"')}
    ${btn("Customers", "secondary", 'data-action="log"')}
  </div>
  <div>${btn("Bulk export", "secondary", 'data-action="export"')}</div>
</div>`)}
${card("Kontaktlar ro'yxati", simpleTable(["", "Kontakt", "Email", "Company", "Last contact", "Tags"], rows))}`;
  } else if (file === "03-organizations.html") {
    body = `${card("Organizations", simpleTable(["Org", "Website", "Industry", "Contacts", "Last activity", "Actions"], [
  ["ACME", "acme.uz", "Retail", "42", "10m ago", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["Nexa Market", "nexa.uz", "Marketplace", "19", "2h ago", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["Logi Group", "logi.uz", "Logistics", "7", "Yesterday", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["EduPro", "edu.uz", "Education", "24", "3h ago", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["FinCore", "fincore.uz", "Finance", "13", "2d ago", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["RetailX", "retailx.uz", "Retail", "31", "5h ago", linkBtn("Open", "./04-org-detail.html", "secondary")],
  ["Shoply", "shoply.uz", "E-commerce", "11", "1d ago", linkBtn("Open", "./04-org-detail.html", "secondary")]
]))}`;
  } else if (file === "05-segments.html") {
    body = `<div class="two-col">
${card("Segmentlar", `<div class="list-stack">
  <div class="list-item"><div class="item-main"><div class="item-title">VIP Customers</div><div class="item-sub">42 contacts вЂў CSAT 4.9</div></div>${badge("Active", "badge-success")}</div>
  <div class="list-item"><div class="item-main"><div class="item-title">Pricing Leads</div><div class="item-sub">318 contacts вЂў Last 30 days</div></div>${badge("Dynamic", "badge-info")}</div>
  <div class="list-item"><div class="item-main"><div class="item-title">Dormant Users</div><div class="item-sub">91 contacts вЂў 60+ kun faol emas</div></div>${badge("Saved", "badge-warning")}</div>
</div>`, { actions: btn("Yangi segment", "primary", 'data-modal-open="new-contact-segment"') })}
${card("Filter builder", `<div class="kanban"><div class="kanban-col"><h4>Fields</h4><div class="kanban-card">Country</div><div class="kanban-card">Tag</div><div class="kanban-card">Last contact</div></div><div class="kanban-col"><h4>Conditions</h4><div class="kanban-card">Country = UZ</div><div class="kanban-card">Tag contains VIP</div></div><div class="kanban-col"><h4>Output</h4><div class="kanban-card">Preview 42 contacts</div></div></div>`)}
</div>
${modalMarkup("new-contact-segment", "Yangi segment", `<div class="form-grid one">${formField("Nomi", input("High intent leads"))}${formField("Rule", textarea("Visited /pricing OR /demo in last 7 days", "", 3))}</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else if (file === "06-import-export.html") {
    body = `<div class="two-col">
${card("Import CSV", `<div class="dropzone">${icon("upload-cloud")}<div>CSV faylni tortib tashlang</div><small>Contact import template</small></div><div style="margin-top:12px">${btn("Importni boshlash", "primary", 'data-action="log"')}</div>`)}
${card("Export contacts", `<div class="form-grid one">${formField("Format", select(["CSV", "XLSX", "JSON"], "CSV"))}${formField("Segment", select(["All contacts", "VIP Customers", "Pricing Leads"], "All contacts"))}<div class="flex gap-2">${btn("Download", "primary", 'data-action="export"')}${btn("Schedule export", "secondary", 'data-action="log"')}</div></div>`)}
</div>
${card("Import history", simpleTable(["Sana", "Fayl", "Rows", "Status", "By"], [
  ["2026-02-20 09:14", "contacts-feb.csv", "324", badge("Completed", "badge-success"), "Sardor"],
  ["2026-02-11 18:02", "vip-leads.xlsx", "41", badge("Completed", "badge-success"), "Sara"],
  ["2026-02-03 12:30", "legacy-import.csv", "912", badge("Warning", "badge-warning"), "Ali"]
]))}`;
  } else {
    return renderContactsPage(relPath, folderMap);
  }

  return shellPage({ title, activeNav: "contacts", content: `${shellHeaderBlock(relPath, folderMap, title, "CRM kontaktlar, tashkilotlar va segmentlar", "")}${body}` });
}

function renderVisitorsPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-visitors-list.html") {
    const rows = [
      ["185.8.212.34", "UZ вЂў Toshkent", "/pricing", "03:14", "online"],
      ["91.204.155.1", "KZ вЂў Almaty", "/features", "01:02", "away"],
      ["37.110.214.8", "TR вЂў Istanbul", "/contact", "00:31", "online"],
      ["104.28.12.3", "US вЂў New York", "/demo", "04:18", "online"],
      ["62.122.90.12", "UZ вЂў Samarqand", "/pricing", "02:11", "away"],
      ["88.218.11.7", "AE вЂў Dubai", "/enterprise", "06:03", "online"],
      ["45.77.19.40", "DE вЂў Berlin", "/help", "00:54", "offline"],
      ["103.11.4.26", "IN вЂў Delhi", "/api", "01:26", "online"],
      ["79.110.2.91", "RU вЂў Moscow", "/contact", "02:48", "away"]
    ].map((r) => [r[0], r[1], r[2], r[3], `<span class="flex gap-2 items-center"><span class="status-dot ${r[4]}"></span>${r[4] === "online" ? "Active" : r[4] === "away" ? "Idle" : "Left"}</span>`, `<div class="flex gap-2">${btn("Start chat", "primary", 'data-action="log" data-message="Chat boshlandi"')}</div>`]);
    body = `${card("Live visitors", `<div class="flex justify-between items-center wrap gap-2"><div class="badge badge-success">Live вЂў 5 visitors online</div><div class="text-muted" style="font-size:13px">Real-time session stream</div></div>`)}
${card("Real-time visitors", simpleTable(["IP", "Location", "Current page", "Duration", "Status", "Action"], rows))}`;
  } else if (file === "02-visitor-profile.html") {
    body = `<div class="split-grid">
${card("Visitor profile", `${keyValueList([{ key: "IP", value: "185.8.212.34" }, { key: "Location", value: "Toshkent, UZ" }, { key: "Browser", value: "Chrome 122 / Windows" }, { key: "Session", value: "07m 12s" }])}<div class="divider"></div><div class="flex gap-2 wrap">${btn("Start chat", "primary", 'data-action="log" data-message="Chat boshlandi"')}${btn("Add to contacts", "secondary", 'data-action="log"')}</div>`)}
${card("Pages visited", `<div class="timeline"><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>/landing</strong><span class="timeline-time">14:18</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>/pricing</strong><span class="timeline-time">14:20</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Widget opened</strong><span class="timeline-time">14:21</span></div></div><div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-card"><strong>Viewed /enterprise</strong><span class="timeline-time">14:24</span></div></div></div>`)}
</div>`;
  } else if (file === "03-visitors-map.html") {
    body = `${card("Visitors map", `<div class="world-map"><svg viewBox="0 0 1000 500" preserveAspectRatio="none"><path d="M84 209c34-22 61-41 89-36 26 4 52 28 80 32 28 3 59-14 90-10 26 4 51 30 81 31 28 1 56-21 84-22 29-1 58 18 88 18 29 0 54-20 81-22 28-2 51 13 79 9 28-4 44-30 74-36 29-5 70 9 92 29" fill="none" stroke="#CBD5E1" stroke-width="8" stroke-linecap="round"/></svg><span class="map-marker" style="left:56%;top:42%"></span><span class="map-marker" style="left:61%;top:37%"></span><span class="map-marker" style="left:74%;top:34%"></span><span class="map-marker" style="left:47%;top:30%"></span><span class="map-marker" style="left:66%;top:46%"></span></div>`)}
${card("Visitors by country", simpleTable(["Country", "Visitors", "Active", "Avg duration", "Top page"], [
  ["Uzbekistan", "124", "23", "03:21", "/pricing"],
  ["Kazakhstan", "41", "8", "02:45", "/features"],
  ["Turkey", "29", "5", "02:18", "/contact"],
  ["United States", "18", "3", "04:02", "/demo"],
  ["UAE", "16", "4", "03:37", "/enterprise"],
  ["India", "14", "2", "01:56", "/api"]
]))}`;
  } else {
    return renderVisitorsPage(relPath, folderMap);
  }

  return shellPage({ title, activeNav: "visitors", content: `${shellHeaderBlock(relPath, folderMap, title, "Online visitor kuzatuvi va profiling", "")}${body}` });
}

function renderTeamChatPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  if (file !== "01-team-chat.html") {
    return renderTeamChatPage(relPath, folderMap);
  }
  const title = prettyTitleFromRel(relPath);
  const channels = [
    ["#general", true, "4"],
    ["#support", false, ""],
    ["#sales", false, ""],
    ["#random", false, ""]
  ];
  const dms = ["Sardor", "Sara", "Ali", "Malika"];
  const messages = [
    ["Sardor", "09:12", "Bugun #general da sprint update va inbox SLA statusini ko'rib chiqamiz."],
    ["Sara", "09:13", "Support queue hozir 12 ta, VIP chatlar uchun routing ishlayapti."],
    ["Ali", "09:15", "Telegram kanalida kechagi webhook xatosi tuzatildi."],
    ["Malika", "09:17", "Knowledge base uchun 3 ta yangi maqola draft tayyor."],
    ["Sardor", "09:18", "Zo'r. Analytics exportni 11:00 gacha yuboring."],
    ["Sara", "09:20", "Response time median 1m 21s bo'libdi, yaxshilangan."],
    ["Ali", "09:22", "Billing support uchun alohida canned reply qo'shdim."],
    ["Malika", "09:24", "CSAT survey copy variantini ham testga qo'ydim."],
    ["Sardor", "09:26", "14:00 da ops sync call bo'ladi, eslatma yuboraman."],
    ["Sara", "09:28", "Qabul qilindi, #support da navbatni balanslab turaman."]
  ];
  const body = `<section class="slack-layout">
  <aside class="channel-list">
    <div class="channel-group">
      <h4>Channels</h4>
      ${channels.map((c) => `<button class="channel-item ${c[1] ? "active" : ""}" type="button" data-action="log"><span>${c[0]}</span>${c[2] ? `<span class="badge badge-primary">${c[2]}</span>` : ""}</button>`).join("")}
    </div>
    <div class="channel-group">
      <h4>DM</h4>
      ${dms.map((d) => `<button class="channel-item" type="button" data-action="log"><span>${d}</span></button>`).join("")}
    </div>
  </aside>
  <div class="team-chat-main">
    <div class="head">
      <div><strong>#general</strong><div class="text-muted" style="font-size:12px">8 members</div></div>
      <div class="flex gap-2">${btn("Room settings", "secondary", 'data-nav="./02-room-settings.html"')}${btn("Notifications", "secondary", 'data-nav="./03-notifications.html"')}</div>
    </div>
    <div class="messages">
      ${messages.map((m) => `<div class="list-item" style="align-items:flex-start">
        ${avatar(m[0])}
        <div class="item-main">
          <div class="item-title">${esc(m[0])} <span class="text-muted" style="font-size:12px;font-weight:400">${m[1]}</span></div>
          <div class="item-sub" style="white-space:normal;line-height:1.45">${esc(m[2])}</div>
        </div>
      </div>`).join("")}
    </div>
    <div class="composer">
      <textarea class="textarea" rows="2" placeholder="Xabar yozing..."></textarea>
      <button class="btn btn-primary" type="button" data-action="log">${icon("send")}</button>
    </div>
  </div>
</section>`;
  return shellPage({ title, activeNav: "team-chat", content: `${shellHeaderBlock(relPath, folderMap, title, "Slack-uslubdagi jamoa suhbat interfeysi", "")}${body}` });
}

function renderKnowledgeBasePageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  if (!["01-kb-dashboard.html", "02-article-editor.html", "03-categories.html"].includes(file)) {
    return renderKnowledgeBasePage(relPath, folderMap);
  }
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-kb-dashboard.html") {
    body = `${metricGrid([{ label: "Articles", value: "248", trend: "+12" }, { label: "Views", value: "18.2k", trend: "+9%" }, { label: "Searches", value: "4.1k", trend: "+4%" }, { label: "Helpfulness", value: "92%", trend: "+2%" }])}
${card("Recent articles", `<div class="kb-article-grid">${["Widget o'rnatish", "API key yaratish", "Billing invoice yuklash", "SLA sozlash", "Telegram integratsiya"].map((t) => `<a class="article-card" href="./02-article-editor.html"><strong>${t}</strong><span class="text-muted" style="font-size:13px">Updated 2 days ago</span>${badge("Published", "badge-success")}</a>`).join("")}</div>`, { actions: linkBtn("Yangi maqola", "./02-article-editor.html", "primary") })}`;
  } else if (file === "02-article-editor.html") {
    body = `${card("Article editor", `<div class="split-grid">
  <div>
    <div class="editor-shell">
      <div class="editor-toolbar">${["bold", "italic", "underline", "list", "list-ordered", "link", "image", "quote"].map((i) => `<button class="btn btn-secondary btn-sm" type="button" data-action="log">${icon(i)}</button>`).join("")}</div>
      <div class="editor-canvas">
        <h2 style="font-size:22px">Widget o'rnatish bo'yicha qo'llanma</h2>
        <p class="text-muted" style="margin-top:8px">QULAY CHAT widget snippetni saytingizga qo'shish bosqichlari...</p>
        <div class="placeholder-line" style="width:88%;margin-top:16px"></div>
        <div class="placeholder-line" style="width:94%"></div>
        <div class="placeholder-line" style="width:86%"></div>
        <div class="placeholder-line" style="width:90%;height:140px;border-radius:14px"></div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><div><h3>Publish settings</h3><p class="card-description">Category, tags va status boshqaruvi</p></div></div>
    <div class="card-body">
      <div class="form-grid one">
        ${formField("Category", select(["Getting Started", "Inbox & Chat", "Automation", "Billing"], "Getting Started"))}
        ${formField("Tags", '<input class="input" value="widget, install, js-snippet">')}
        ${formField("Status", select(["Draft", "Review", "Published"], "Draft"))}
        ${formField("Slug", '<input class="input" value="widget-ornatish-qollanma">')}
      </div>
      <div class="divider"></div>
      <div class="flex gap-2 wrap">${btn("Save draft", "secondary", 'data-action="save"')}${btn("Publish", "primary", 'data-action="save"')}</div>
    </div>
  </div>
</div>`)}`;
  } else if (file === "03-categories.html") {
    body = `${card("Categories", `<div class="list-stack">${["Getting Started", "Inbox & Chat", "Automation", "Analytics", "Billing", "Developer API"].map((c, i) => `<div class="list-item"><div class="item-main"><div class="item-title">${c}</div><div class="item-sub">${14 + i * 3} articles</div></div><div class="flex gap-2">${icon("grip-vertical")}${btn("Edit", "secondary", 'data-action="log"')}</div></div>`).join("")}</div>`, { actions: btn("Yangi kategoriya", "primary", 'data-modal-open="new-kb-category"') })}
${modalMarkup("new-kb-category", "Yangi kategoriya", `<div class="form-grid one">${formField("Nomi", input("Integrations"))}${formField("Description", textarea("Telegram, WhatsApp va boshqa integratsiyalar bo'limi.", "", 3))}</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Saqlash", "primary", 'data-modal-close data-action="save"')}`)}`;
  }

  return shellPage({ title, activeNav: "knowledge-base", content: `${shellHeaderBlock(relPath, folderMap, title, "Knowledge base kontenti va analytics", "")}${body}` });
}

function renderAddonsPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-addons-catalog.html") {
    const addons = [
      ["AI Chatbot", "$19/mo", "AI", "Chatlarga AI javob va summary tavsiyalari", "sparkles"],
      ["Video Call", "$29/mo", "Communication", "Chat ichida video-call tugmasi va session log", "video"],
      ["Phone Support", "$39/mo", "Communication", "VoIP call routing va call notes", "phone"],
      ["SMS", "$15/mo", "Communication", "SMS notification va callback flowlar", "message-square"],
      ["WhatsApp", "$25/mo", "Integration", "WhatsApp Business kanal integratsiyasi", "message-circle"],
      ["Facebook", "$19/mo", "Integration", "Facebook Messenger live sync", "facebook"],
      ["Slack Integration", "Free", "Free", "Urgent alerts va channel relay", "slack"],
      ["Zapier", "Free", "Free", "No-code automation trigger connector", "workflow"]
    ];
    body = `
${card("Katalog filterlari", `<div class="form-grid three">
  <div class="input-group">${icon("search")}<input class="input" type="search" placeholder="Add-on qidirish"></div>
  <div class="flex gap-2 wrap">${btn("AI", "secondary", 'data-action="log"')}${btn("Communication", "secondary", 'data-action="log"')}${btn("Integration", "secondary", 'data-action="log"')}${btn("Free", "secondary", 'data-action="log"')}</div>
  <div>${btn("Clear filters", "secondary", 'data-action="reset-form"')}</div>
</div>`)}
<div class="addon-grid">
${addons.map((a) => `  <div class="addon-card">
  <div class="addon-icon">${icon(a[4])}</div>
  <div class="flex justify-between items-start gap-2">
    <div><h3>${a[0]}</h3><p class="text-muted" style="font-size:13px">${a[3]}</p></div>
    ${badge(a[2], a[2] === "AI" ? "badge-primary" : a[2] === "Communication" ? "badge-info" : a[2] === "Free" ? "badge-success" : "badge-warning")}
  </div>
  <div class="flex justify-between items-center"><strong>${a[1]}</strong>${linkBtn("Install", "./03-addon-detail.html", "primary")}</div>
</div>`).join("")}
</div>`;
  } else if (file === "02-active-addons.html") {
    body = `${card("Active add-ons", `<div class="list-stack">
  ${[
    ["WhatsApp", "Business API connected", true],
    ["AI Chatbot", "Draft mode enabled", true],
    ["Slack Integration", "Channel #support-alerts", true],
    ["SMS", "Provider token expiring soon", false]
  ].map((a) => `<div class="list-item"><div class="item-main"><div class="item-title">${a[0]}</div><div class="item-sub">${a[1]}</div></div><div class="flex gap-2 items-center">${toggle(a[2])}${btn("Settings", "secondary", 'data-nav="./04-addon-settings.html"')}${btn("Uninstall", "danger", 'data-action="log"')}</div></div>`).join("")}
</div>`)}`;
  } else if (file === "03-addon-detail.html") {
    body = `${card("Add-on detail", `<div class="split-grid">
  <div>
    <h3>WhatsApp Integration</h3>
    <p class="text-muted" style="margin-top:6px">WhatsApp Business xabarlarini QULAY CHAT inbox bilan sinxronlashtiradi.</p>
    <div class="mini-bars" style="margin-top:14px;height:220px">
      <div class="mini-bar-col"><div class="mini-bar" style="height:160px"></div><span>Screenshot 1</span></div>
      <div class="mini-bar-col"><div class="mini-bar" style="height:120px"></div><span>Screenshot 2</span></div>
      <div class="mini-bar-col"><div class="mini-bar" style="height:180px"></div><span>Flow</span></div>
    </div>
  </div>
  <div>${keyValueList([{ key: "Price", value: "$25/mo" }, { key: "Version", value: "2.1.0" }, { key: "Installs", value: "3,248" }, { key: "Category", value: "Integration" }])}<div class="mt-4">${btn("Install add-on", "primary", 'data-action="save"')}</div></div>
</div>
<div class="divider"></div>
<h4>Features</h4>
<ul class="pricing-list">
  <li>${icon("check")} Incoming/outgoing message sync</li>
  <li>${icon("check")} Media attachments support</li>
  <li>${icon("check")} Agent assignment alerts</li>
  <li>${icon("check")} Conversation tags passthrough</li>
</ul>
<div class="divider"></div>
<h4>Reviews</h4>
<div class="list-stack">
  <div class="list-item"><div class="item-main"><div class="item-title">Madina Y. вЂў 5/5</div><div class="item-sub">Setup oson va message sync barqaror ishlayapti.</div></div></div>
  <div class="list-item"><div class="item-main"><div class="item-title">Bekzod K. вЂў 4/5</div><div class="item-sub">Webhook docs yaxshi, lekin media limitni oshirish kerak.</div></div></div>
  <div class="list-item"><div class="item-main"><div class="item-title">Sara M. вЂў 5/5</div><div class="item-sub">Support team uchun eng foydali integratsiyalardan biri.</div></div></div>
</div>`)}`;
  } else {
    return renderAddonsPage(relPath, folderMap);
  }

  return shellPage({ title, activeNav: "addons", content: `${shellHeaderBlock(relPath, folderMap, title, "Add-on katalogi va konfiguratsiya", "")}${body}` });
}

function renderDeveloperPageV2(relPath, folderMap) {
  const file = path.basename(relPath);
  const title = prettyTitleFromRel(relPath);
  let body = "";

  if (file === "01-api-keys.html") {
    return renderDeveloperPage(relPath, folderMap);
  }
  if (file === "02-webhooks.html") {
    body = `${card("Webhooks", simpleTable(["URL", "Events", "Status", "Last triggered", "Actions"], [
  ["https://api.client.uz/qulaychat/webhook", "chat.created, chat.closed", badge("Active", "badge-success"), "5m ago", `<div class="flex gap-2">${btn("Edit", "secondary", 'data-action="log"')}${btn("Disable", "secondary", 'data-action="log"')}</div>`],
  ["https://n8n.client.uz/hooks/qulaychat", "contact.updated", badge("Paused", "badge-warning"), "2d ago", `<div class="flex gap-2">${btn("Edit", "secondary", 'data-action="log"')}${btn("Enable", "secondary", 'data-action="log"')}</div>`],
  ["https://erp.client.uz/webhooks/qulaychat", "invoice.paid", badge("Active", "badge-success"), "1h ago", `<div class="flex gap-2">${btn("Edit", "secondary", 'data-action="log"')}${btn("Disable", "secondary", 'data-action="log"')}</div>`]
]), { actions: btn("Add webhook", "primary", 'data-modal-open="add-webhook"') })}
${modalMarkup("add-webhook", "Add webhook", `<div class="form-grid one">
  ${formField("URL", '<input class="input" type="url" placeholder="https://example.com/webhook">')}
  ${formField("Events", select(["chat.created", "chat.closed", "contact.updated", "invoice.paid"], "chat.created"))}
  ${formField("Secret", '<input class="input" placeholder="whsec_...">')}
</div>`, `${btn("Bekor qilish", "secondary", 'data-modal-close')} ${btn("Save", "primary", 'data-modal-close data-action="save"')}`)}`;
  } else if (file === "03-logs.html") {
    const methodBadge = (m) => badge(m, m === "GET" ? "badge-info" : m === "POST" ? "badge-primary" : "badge-warning");
    const statusBadge = (s) => {
      const code = String(s);
      if (code.startsWith("2")) return badge(code, "badge-success");
      if (code.startsWith("4")) return badge(code, "badge-warning");
      return badge(code, "badge-danger");
    };
    const logs = [
      ["2026-02-22 14:21:11", "POST", "/v1/chats", "200", "124ms"],
      ["2026-02-22 14:20:55", "GET", "/v1/contacts/123", "200", "62ms"],
      ["2026-02-22 14:20:03", "POST", "/v1/webhooks/test", "500", "488ms"],
      ["2026-02-22 14:19:41", "GET", "/v1/analytics/overview", "200", "211ms"],
      ["2026-02-22 14:18:09", "POST", "/v1/messages/send", "200", "173ms"],
      ["2026-02-22 14:17:32", "GET", "/v1/invoices", "200", "98ms"],
      ["2026-02-22 14:16:27", "POST", "/v1/webhooks", "404", "59ms"],
      ["2026-02-22 14:15:10", "GET", "/v1/segments", "200", "84ms"],
      ["2026-02-22 14:14:44", "POST", "/v1/chats/assign", "200", "147ms"],
      ["2026-02-22 14:14:05", "GET", "/v1/addons/catalog", "500", "522ms"]
    ];
    body = `
${card("Filters", `<div class="form-grid three">
  <div>${formField("Method", select(["All", "GET", "POST"], "All"))}</div>
  <div>${formField("Status", select(["All", "200", "404", "500"], "All"))}</div>
  <div>${formField("Date range", `<div class="date-range">${icon("calendar")}Bugun</div>`)}</div>
</div><div class="divider"></div><div class="form-row"><div class="row-copy"><div class="form-label">Auto-refresh</div><p class="text-muted" style="font-size:13px">Har 10 soniyada loglar yangilanadi (demo).</p></div>${toggle(true)}</div>`)}
${card("API logs", `<div class="table-wrap"><table class="table mono"><thead><tr><th>Timestamp</th><th>Method</th><th>Endpoint</th><th>Status</th><th>Response time</th></tr></thead><tbody>${logs.map((r) => `<tr><td>${r[0]}</td><td>${methodBadge(r[1])}</td><td>${r[2]}</td><td>${statusBadge(r[3])}</td><td>${r[4]}</td></tr>`).join("")}</tbody></table></div>`, { description: "API request tracing va troubleshooting" })}`;
  }

  return shellPage({ title, activeNav: "developer", content: `${shellHeaderBlock(relPath, folderMap, title, "API keys, webhooks va request loglar", "")}${body}` });
}

function renderSystemPageV2(relPath) {
  const file = path.basename(relPath);
  const cfg = systemConfig(file);
  if (!cfg) return renderSystemPage(relPath);

  let actions = cfg.actions;
  let extra = "";

  if (file === "01-error-404.html") {
    extra = `<div style="width:100%;display:grid;gap:12px">
  <div class="input-group" style="width:100%">${icon("search")}<input class="input" type="search" placeholder="Qidiruv..." style="width:100%"><button class="btn btn-secondary btn-sm" type="button" data-action="log">Qidirish</button></div>
  <div class="card" style="width:100%;text-align:left">
    <div class="card-header"><div><h3>Ko'p so'raladigan sahifalar</h3></div></div>
    <div class="card-body"><div class="list-stack">
      <a class="list-item" href="../04-dashboard/01-dashboard.html"><div class="item-main"><div class="item-title">Dashboard</div><div class="item-sub">Asosiy ko'rinish</div></div></a>
      <a class="list-item" href="../05-inbox/01-inbox-chat.html"><div class="item-main"><div class="item-title">Inbox</div><div class="item-sub">Live chatlar</div></div></a>
      <a class="list-item" href="../08-analytics/01-overview.html"><div class="item-main"><div class="item-title">Analytics Overview</div><div class="item-sub">Statistika va hisobotlar</div></div></a>
      <a class="list-item" href="../09-settings/01-workspace.html"><div class="item-main"><div class="item-title">Workspace Settings</div><div class="item-sub">Sozlamalar</div></div></a>
    </div></div>
  </div>
</div>`;
  } else if (file === "02-error-500.html") {
    actions = [`${btn("Qayta urinish", "primary", 'onclick="window.location.reload()" data-action="log"')}`, `${linkBtn("Bosh sahifaga", "../index.html", "secondary")}`];
  } else if (file === "05-offline.html") {
    actions = [`${btn("Qayta urinish", "primary", 'onclick="window.location.reload()" data-action="log"')}`, `${linkBtn("Bosh sahifa", "../index.html", "secondary")}`];
    extra = `<div class="card" style="width:100%;text-align:left">
  <div class="card-header"><div><h3>Offline holatda mavjud funksiyalar</h3></div></div>
  <div class="card-body"><ul class="pricing-list">
    <li>${icon("check")} So'nggi ochilgan sahifalarni ko'rish (browser cache)</li>
    <li>${icon("check")} Draft form matnlarini tahrirlash</li>
    <li>${icon("check")} Team notes va local UI preview</li>
    <li>${icon("check")} Ulanish qaytgach retry qilish</li>
  </ul></div>
</div>`;
  }

  const content = `  <main class="system-page">
    <div class="system-shell">
      <div class="system-brand"><a class="shell-brand" href="../index.html"><span class="shell-brand-mark">CF</span><span>QULAY CHAT</span></a></div>
      <section class="system-card">
        <div class="system-illustration">${icon(cfg.iconName)}</div>
        <div class="error-code ${cfg.codeClass}">${esc(cfg.code)}</div>
        <h1>${esc(cfg.title)}</h1>
        <p class="text-muted" style="max-width:48ch">${esc(cfg.desc)}</p>
        <div class="system-actions">${actions.join("")}</div>
        ${extra}
      </section>
    </div>
  </main>`;
  return standalonePage({ title: `QULAY CHAT - ${cfg.title}`, bodyClass: "system-page", content, robots: "noindex, nofollow" });
}

if (require.main === module) {
  run();
}

