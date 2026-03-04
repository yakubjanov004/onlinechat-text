# QULAY CHAT — UMUMIY PROMPT (Barcha 28 bo'lim uchun yagona asosiy ko'rsatmalar)

> **Maqsad:** Loyihadagi 218 ta HTML sahifani bir-biriga chambarchas bog'lab, yaxlit real SaaS dastur ko'rinishiga keltirish. Bu prompt PROMPT-2 bilan birga ishlatiladi. Bu yerda faqat UMUMIY (global) o'zgartirishlar — PROMPT-2 da esa har bir bo'lim uchun BATAFSIL ko'rsatmalar bor.

---

## 1. LOYIHA TUZILISHI

```
html/
├── index.html                   ← Workspace Navigator (markaziy hub)
├── assets/                      ← Umumiy CSS/JS fayllar
│   ├── qulay-chat-design-system.css  ← Asosiy design token'lar + UI komponentlari
│   ├── qulay-chat-pages.css          ← cf-* prefiksli sahifa komponentlari
│   ├── qulay-chat-shell.js           ← Admin/Agent sidebar + header generator
│   ├── qulay-chat-runtime.js         ← Rol boshqaruvi, tab, modal, toast, action handlers
│   ├── production-look.css           ← Umumiy polish layer
│   ├── dark-mode.css                 ← Dark mode variables
│   ├── system-pages.css              ← Error sahifalar uchun
│   ├── landing-v2.css                ← (yo'q, u 01-landing/ ichida)
│   └── [section]-interactions.js     ← Har bir bo'lim uchun alohida JS
├── 01-landing/   (8 html + 1 css)   ← Marketing sahifalari
├── 02-auth/      (5 html)           ← Login/Register/Verify
├── 03-onboarding/(9 html)           ← Welcome/Setup/Widget
├── 04-dashboard/ (6 html + 1 md)    ← Admin/Agent/Manager dashboard
├── 05-inbox/     (10 html)          ← Chat inbox workflow
├── 06-automation/(18 html)          ← Working hours, triggers, chatbot
├── 07-team/      (4 html)           ← Agent management
├── 08-analytics/ (17 html)          ← Reports, charts, stats
├── 09-settings/  (20 html)          ← Workspace, security, profile
├── 10-billing/   (12 html)          ← Plans, payments, invoices
├── 11-chat-widget/(8 html)          ← Widget preview (standalone, no shell)
├── 12-contacts/  (6 html)           ← CRM contacts/orgs
├── 13-visitors/  (3 html)           ← Real-time visitors
├── 14-team-chat/ (3 html)           ← Internal messaging
├── 15-knowledge-base/(18 html)      ← KB dashboard + public pages
├── 16-addons/    (7 html)           ← Marketplace
├── 17-developer/ (5 html)           ← API, webhooks, logs
├── 18-system/    (5 html)           ← Error 404/500/403, maintenance, offline
├── 19-global-search/(2 html)        ← Search modal + results
├── 20-notifications/(3 html)        ← Notification center
├── 21-help-support/(5 html)         ← Help center, tickets
├── 22-email-templates/(4 html)      ← Template editor
├── 23-multi-language/(3 html)       ← i18n settings
├── 24-gdpr-compliance/(4 html)      ← Data, consent, retention
├── 25-dark-mode/ (1 html)           ← Dark mode demo
├── 26-integrations/(20 html)        ← Telegram, WhatsApp, etc.
├── 27-payments/  (8 html)           ← Payme, Click, Uzum, Stripe
├── 28-mobile-agent/(5 html)         ← Mobile app UI
```

---

## 2. SAHIFA TURLARI VA SHELL TIZIMI

Loyihada 4 xil sahifa turi mavjud:

### 2.1. Shell sahifalar (Dashboard ichidagi sahifalar)
Bu sahifalar `qulay-chat-shell.js` orqali avtomatik sidebar + header oladi.

**Qoidalar:**
```html
<body class="dashboard-shell-page" data-active-nav="KEY" data-shell-role="admin">
  <main class="app-content">
    <!-- sahifa kontenti shu yerda -->
  </main>
  <script src="../assets/qulay-chat-shell.js"></script>
  <script src="../assets/qulay-chat-runtime.js"></script>
</body>
```

- `data-active-nav` — sidebarning qaysi elementi active bo'lishini belgilaydi
- `data-shell-role` — default rol (admin yoki agent)

**Shell ishlatadigan bo'limlar:** 04-dashboard, 05-inbox, 06-automation, 07-team, 08-analytics, 09-settings, 10-billing, 12-contacts, 13-visitors, 14-team-chat, 15-knowledge-base (dashboard sahifalari), 16-addons, 17-developer, 19-global-search, 20-notifications, 21-help-support, 22-email-templates, 23-multi-language, 24-gdpr-compliance, 25-dark-mode, 26-integrations, 27-payments, 28-mobile-agent

### 2.2. Standalone sahifalar (Shellsiz)
- **01-landing/** — O'z navigatsiyasi bor (`.nav` + `.nav-links`)
- **02-auth/** — Auth card layout, shellsiz
- **03-onboarding/** — O'z stepper layout'i bor
- **11-chat-widget/** — Widget simulyatsiya sahifalari (`.widget-page`)
- **15-knowledge-base/06-09** — Public KB sahifalari
- **18-system/** — Error pages (`.system-page`)

### 2.3. Ikki rollik tizim
- `data-roles="admin"` — faqat Admin ko'radigan kontent
- `data-roles="agent"` — faqat Agent ko'radigan kontent
- Rol almashtirgich header dropdown ichida mavjud
- Role `localStorage` dan olinadi (`qulaychat_role`)

---

## 3. ASOSIY MUAMMOLAR VA UMUMIY YECHIMLAR

### 3.1. ❌ Sahifalar bir-biriga bog'lanmagan → ✅ To'liq navigatsiya tizimi

**Har bir bo'lim uchun bajarilishi kerak:**

1. **Subnav tabs** (`.subnav-tabs`) — bo'lim ichidagi barcha sahifalarga havolalar:
```html
<nav class="subnav-tabs" aria-label="Bo'lim navigatsiyasi">
  <a class="tab active" href="./01-current-page.html">Current</a>
  <a class="tab" href="./02-next-page.html">Next</a>
  <!-- barcha sahifalarga -->
</nav>
```

2. **Breadcrumbs** — Dashboard → Bo'lim nomi → Sahifa nomi:
```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <span class="separator">›</span>
  <a href="./01-first-page.html">Bo'lim nomi</a>
  <span class="separator">›</span>
  <span class="current">Joriy sahifa</span>
</nav>
```

3. **Prev/Next navigatsiya** — sahifa oxirida:
```html
<div class="page-nav">
  <a class="page-nav-prev" href="./prev.html">← Oldingi sahifa</a>
  <a class="page-nav-next" href="./next.html">Keyingi sahifa →</a>
</div>
```

### 3.2. ❌ Ranglar va dizayn bir xil emas → ✅ Yagona rang tizimi

**Barcha sahifalarda ishlatilishi kerak bo'lgan CSS o'zgaruvchilar:**
```css
:root {
  /* Primary */
  --primary: #4F46E5;
  --primary-hover: #4338CA;
  --primary-light: #EEF2FF;
  --primary-50: #E0E7FF;
  
  /* Gray scale */  
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* Status */
  --success: #10B981;
  --danger: #EF4444;
  --warning: #F59E0B;
  --info: #3B82F6;
}
```

**Muammo:** `qulay-chat-pages.css` da boshqa rang tizimi ishlatilgan (`--cf-primary: #0d6efd` — ko'k rang). Landing'da esa `--primary: #ff5c35` (to'q sariq).

**Yechim:**
- Dashboard sahifalar: `--primary: #4F46E5` (indigo) + `qulay-chat-design-system.css` 
- Landing sahifalar: o'z rangini saqlab qolishi mumkin lekin accent rangi yaqinlashtirilishi kerak
- `qulay-chat-pages.css` faylida `--cf-primary` ni `#4F46E5` ga almashtirilsin yoki ikkala CSS birlashtirilsin

### 3.3. ❌ Placeholder rasmlar → ✅ Real rasmlar va logotiplar

**Qo'yilishi kerak bo'lgan real rasmlar:**

| Kerak bo'lgan joy | Tavsif | Rasm manbasi |
|---|---|---|
| Landing hero | Dashboard screenshot | Placeholder: `https://placehold.co/800x500/EEF2FF/4F46E5?text=Qulay+Chat+Dashboard` yoki real screenshot |
| Landing integrations | Kanal logolari | Real SVG logolar: Telegram, WhatsApp, Instagram, Facebook, Viber |
| Payments — Payme | Payme logotipi | `https://cdn.payme.uz/logo/payme-logo.svg` yoki `https://payme.uz/static/media/payme_app_logo.png` |
| Payments — Click | Click logotipi | `https://click.uz/click/images/logo.svg` |
| Payments — Uzum | Uzum Bank logotipi | `https://uzum.uz/static/img/logo.svg` |
| Payments — Stripe | Stripe logotipi | `https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg` |
| Integrations — Telegram | Telegram logotipi | `https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg` |
| Integrations — WhatsApp | WhatsApp logotipi | `https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg` |
| Integrations — Instagram | Instagram logotipi | `https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png` |
| Integrations — Facebook | Facebook logotipi | `https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png` |
| Integrations — Viber | Viber logotipi | `https://upload.wikimedia.org/wikipedia/commons/8/8d/Viber_logo.svg` |
| Integrations — Bitrix24 | Bitrix24 logotipi | inline SVG yoki `https://www.bitrix24.com/images/b24/logo.svg` |
| Integrations — amoCRM | amoCRM logotipi | `https://www.amocrm.com/static/images/logo.svg` |
| Integrations — Zapier | Zapier logotipi | `https://cdn.zapier.com/zapier/images/logos/zapier-logo.png` |
| Help — Video tutorials | YouTube embed | `<iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>` |
| Analytics — Charts | Chart placeholderlar | SVG chart yoki CSS orqali simple bar/line charts |

**SVG inline logolar yaratish uchun prompt:**
> Har bir integratsiya/to'lov tizimi uchun: `.integration-logo` class bilan 48x48px o'lchamda inline SVG yoki `<img>` tag ishlatilsin. Alt text to'g'ri yozilsin. Yuklanmasa fallback sifatida Lucide ikonka ko'rinsin.

### 3.4. ❌ Diagrammalar yo'q → ✅ Chart va grafiklar uchun ko'rsatmalar

**Analytics va Dashboard sahifalaridagi chart/diagrammalar:**

CSS-only yoki SVG orqali oddiy chartlar yaratilsin:

```html
<!-- Simple Bar Chart -->
<div class="chart-bars">
  <div class="chart-bar" style="--value: 85%;" data-label="Dush">
    <span class="chart-bar-fill"></span>
    <span class="chart-bar-label">Dush</span>
  </div>
  <!-- ... -->
</div>
```

```css
.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 180px;
  padding: 10px 0;
}
.chart-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.chart-bar-fill {
  width: 100%;
  height: var(--value);
  background: linear-gradient(180deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: 6px 6px 0 0;
  transition: height 0.3s ease;
}
.chart-bar-label {
  margin-top: 6px;
  font-size: 11px;
  color: var(--gray-500);
}
```

**Diagramma turlari bo'yicha promptlar:**

1. **Line chart (trend):** SVG `<polyline>` yoki CSS gradient bilan 7 kunlik trend ko'rsatilsin
2. **Donut/Pie chart:** CSS `conic-gradient` bilan foiz ko'rsatilsin
3. **Progress bar:** oddiy `<div>` bilan to'ldirilgan foiz
4. **Sparkline:** kichik SVG inline mini-chart (metric card ichida)
5. **Heatmap:** CSS Grid + background-color opacity bilan
6. **Funnel:** CSS width transitions bilan

**Har bir chart uchun CSS snippet:**

```css
/* Donut Chart */
.donut-chart {
  width: 120px; height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    var(--primary) 0% 45%,
    var(--success) 45% 72%,
    var(--warning) 72% 88%,
    var(--gray-200) 88% 100%
  );
  position: relative;
}
.donut-chart::after {
  content: '';
  position: absolute;
  inset: 25%;
  border-radius: 50%;
  background: white;
}

/* Sparkline (inline SVG) */
.sparkline {
  width: 80px; height: 24px;
}
.sparkline polyline {
  fill: none;
  stroke: var(--primary);
  stroke-width: 1.5;
}
```

---

## 4. SIDEBAR TIZIMI — O'ZGARTIRISH KERAK EMAS, LEKIN TEKSHIRILSIN

`qulay-chat-shell.js` ichidagi `NAV_SECTIONS_BY_ROLE` to'g'ri ishlaydi — 2 ta rol (admin/agent) uchun.

**Mavjud nav kalitlari:** dashboard, inbox, contacts, visitors, team-chat, mobile-agent, automation, team, knowledge-base, email-templates, analytics, global-search, notifications, settings, billing, payments, addons, integrations, developer, multi-language, gdpr, dark-mode, help-support, docs, support

**Tekshirish kerak:** index.html dagi ba'zi havolalar noto'g'ri bo'lishi mumkin:
- `09-settings/01-workspace.html` → `09-settings/01-workspace-general.html` bo'lishi kerak
- Landing (26/27/28 bo'limlar) index.html'da yo'q — qo'shilsin

**Qo'shimcha:** `qulay-chat-shell.js` dagi `currentSectionName()` funksiyasiga quyidagi bo'limlar qo'shilsin (hali yo'q):
```javascript
if (p.indexOf("/06-automation/") > -1) return "Automation";
if (p.indexOf("/07-team/") > -1) return "Team";
if (p.indexOf("/10-billing/") > -1) return "Billing";
if (p.indexOf("/12-contacts/") > -1) return "Contacts";
if (p.indexOf("/13-visitors/") > -1) return "Visitors";
if (p.indexOf("/14-team-chat/") > -1) return "Team Chat";
if (p.indexOf("/15-knowledge-base/") > -1) return "Knowledge Base";
if (p.indexOf("/16-addons/") > -1) return "Add-ons";
if (p.indexOf("/17-developer/") > -1) return "Developer";
if (p.indexOf("/03-onboarding/") > -1) return "Onboarding";
if (p.indexOf("/02-auth/") > -1) return "Auth";
```

---

## 5. UMUMIY CSS YAXSHILASHLAR

### 5.1. `qulay-chat-design-system.css` ga qo'shilishi kerak:

```css
/* ===== Breadcrumbs ===== */
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--gray-500);
  margin-bottom: 12px;
}
.breadcrumbs a {
  color: var(--gray-500);
  text-decoration: none;
  transition: color 0.15s;
}
.breadcrumbs a:hover {
  color: var(--primary);
}
.breadcrumbs .current {
  color: var(--gray-800);
  font-weight: 600;
}
.breadcrumbs .separator {
  color: var(--gray-300);
  font-size: 10px;
}

/* ===== Page Navigation (Prev/Next) ===== */
.page-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.page-nav a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
  background: var(--surface);
  transition: all 0.15s ease;
}
.page-nav a:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

/* ===== Subnav Tabs (agar hali yo'q bo'lsa) ===== */
.subnav-tabs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding: 0 0 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border);
  scrollbar-width: thin;
}
.subnav-tabs .tab {
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-600);
  white-space: nowrap;
  border: 1px solid transparent;
  transition: all 0.15s ease;
}
.subnav-tabs .tab:hover {
  background: var(--gray-50);
  color: var(--gray-800);
}
.subnav-tabs .tab.active {
  background: var(--primary-light);
  color: var(--primary);
  font-weight: 600;
  border-color: var(--primary-50);
}

/* ===== Integration Logo Styles ===== */
.integration-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid var(--border);
  display: grid;
  place-items: center;
  background: var(--surface);
  overflow: hidden;
}
.integration-logo img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

/* ===== Chart Components ===== */
.chart-container {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 16px;
}
.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}
.chart-header h3 {
  font-size: 15px;
  font-weight: 600;
}

/* ===== Real product badge ===== */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}
.status-badge.online { background: #ecfdf5; color: #059669; }
.status-badge.offline { background: #fef2f2; color: #dc2626; }
.status-badge.away { background: #fffbeb; color: #d97706; }

/* ===== Improved Metric Card ===== */
.metric-card-v2 {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 16px;
  display: grid;
  gap: 8px;
}
.metric-card-v2 .metric-value {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.metric-card-v2 .metric-change {
  font-size: 12px;
  font-weight: 600;
}
.metric-card-v2 .metric-change.up { color: var(--success); }
.metric-card-v2 .metric-change.down { color: var(--danger); }
```

### 5.2. Global font va smoothing:
```css
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 6. UMUMIY JAVASCRIPT YAXSHILASHLAR

### 6.1. `qulay-chat-runtime.js` ga qo'shilsin:

```javascript
// Keyboard shortcut bar: N — Notifications, I — Inbox
if (!isTyping && key === "n") { window.location.href = "../20-notifications/01-notification-dropdown.html"; }
if (!isTyping && key === "i") { window.location.href = "../05-inbox/01-inbox-chat.html"; }
```

### 6.2. `qulay-chat-shell.js` ga qo'shilsin — active subnav auto-highlight:
Hozirda shell faqat sidebar nav-link'ni highlight qiladi. Subnav tabs ichida ham active tab'ni avtomatik aniqlash uchun `DOMContentLoaded` da:
```javascript
document.querySelectorAll('.subnav-tabs .tab').forEach(function(tab) {
  var href = tab.getAttribute('href');
  if (href && window.location.pathname.endsWith(href.replace('./', '/'))) {
    tab.classList.add('active');
  }
});
```

---

## 7. INDEX.HTML (WORKSPACE NAVIGATOR) O'ZGARTIRISHLARI

### 7.1. Qo'shilmagan modullarni qo'shish:
```html
<a class="hub-module" data-name="integrations" href="./26-integrations/01-channels-overview.html">
  <h4>26 Integrations</h4><p>Telegram, WhatsApp, Instagram...</p>
</a>
<a class="hub-module" data-name="payments" href="./27-payments/01-payment-overview.html">
  <h4>27 Payments</h4><p>Payme, Click, Uzum, Stripe</p>
</a>
<a class="hub-module" data-name="mobile agent" href="./28-mobile-agent/01-mobile-inbox.html">
  <h4>28 Mobile Agent</h4><p>Mobile inbox va chat</p>
</a>
```

### 7.2. Settings havolasini tuzatish:
```
./09-settings/01-workspace.html → ./09-settings/01-workspace-general.html
```

### 7.3. KPI raqamlarini yangilash:
```
28 Asosiy modul (18 emas)
218+ Sahifalar (80+ emas)
```

---

## 8. HAR BIR SHELL SAHIFA UCHUN STANDART TEMPLATE

Har bir shell sahifa quyidagi strukturaga ega bo'lishi kerak:

```html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Sahifa nomi] — QULAY CHAT</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/qulay-chat-design-system.css">
  <!-- Agar bo'limga xos CSS kerak bo'lsa: -->
  <!-- <link rel="stylesheet" href="../assets/[section]-styles.css"> -->
  <script src="https://unpkg.com/lucide@latest" defer></script>
</head>
<body class="dashboard-shell-page" data-active-nav="[nav-key]" data-shell-role="admin">

  <main class="app-content">
    <!-- Breadcrumbs -->
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
      <span class="separator">›</span>
      <a href="./01-[first-page].html">[Bo'lim nomi]</a>
      <span class="separator">›</span>
      <span class="current">[Sahifa nomi]</span>
    </nav>

    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1>[Sahifa sarlavhasi]</h1>
        <p class="text-muted">[Qisqacha tavsif]</p>
      </div>
      <div class="page-header-actions">
        <!-- Amallar tugmalari -->
      </div>
    </div>

    <!-- Subnav Tabs -->
    <nav class="subnav-tabs" aria-label="[Bo'lim] sahifalari">
      <a class="tab active" href="./01-page.html">Page 1</a>
      <a class="tab" href="./02-page.html">Page 2</a>
      <!-- Barcha sahifalar uchun -->
    </nav>

    <!-- Agent uchun cheklangan kontent (agar kerak bo'lsa) -->
    <div data-roles="agent" hidden>
      <div class="card" style="text-align:center;padding:32px;">
        <i data-lucide="lock" style="width:40px;height:40px;color:var(--gray-400);margin:0 auto 12px;"></i>
        <h3>Bu sahifa faqat admin uchun</h3>
        <p class="text-muted">Agent dashboard'ga o'ting</p>
        <a class="btn btn-primary" href="../04-dashboard/02-dashboard-agent.html" style="margin-top:12px;">Agent Dashboard</a>
      </div>
    </div>

    <!-- Asosiy kontent (faqat admin uchun) -->
    <div data-roles="admin">
      <!-- SAHIFA KONTENTI SHU YERDA -->
    </div>

    <!-- Prev/Next Navigation -->
    <div class="page-nav">
      <a class="page-nav-prev" href="./prev.html">← Oldingi</a>
      <a class="page-nav-next" href="./next.html">Keyingi →</a>
    </div>
  </main>

  <script src="../assets/qulay-chat-shell.js"></script>
  <script src="../assets/qulay-chat-runtime.js"></script>
  <!-- Bo'limga xos JS: -->
  <!-- <script src="../assets/[section]-interactions.js"></script> -->
</body>
</html>
```

---

## 9. LANDING SAHIFALAR UCHUN STANDART HAVOLALAR

`01-landing/` sahifalarida header navigatsiyasi quyidagicha bo'lishi kerak:

```html
<nav class="nav">
  <a class="brand" href="./01-landing.html">
    <span class="brand-mark">QC</span> QULAY CHAT
  </a>
  <div class="nav-links">
    <a href="./03-features.html">Imkoniyatlar</a>
    <a href="./04-integrations.html">Integratsiyalar</a>
    <a href="./02-pricing.html">Narxlar</a>
    <a href="./06-blog-list.html">Blog</a>
    <a href="./05-about.html">Biz haqimizda</a>
    <a href="./08-comparison.html">Taqqoslash</a>
  </div>
  <div class="actions">
    <a class="btn btn-secondary" href="../02-auth/01-login.html">Kirish</a>
    <a class="btn btn-primary" href="../02-auth/02-register.html">Boshlash</a>
  </div>
</nav>
```

**Footer** — barcha landing sahifalarida bir xil footer bo'lsin:
```html
<footer class="footer">
  <div class="footer-grid">
    <div>
      <div class="brand"><span class="brand-mark">QC</span> QULAY CHAT</div>
      <p class="muted-sm">Mijozlar bilan muloqotni osonlashtiruvchi zamonaviy chat platformasi.</p>
    </div>
    <div>
      <h4>Product</h4>
      <a href="./03-features.html">Imkoniyatlar</a>
      <a href="./02-pricing.html">Narxlar</a>
      <a href="./04-integrations.html">Integratsiyalar</a>
      <a href="./08-comparison.html">Taqqoslash</a>
    </div>
    <div>
      <h4>Resurslar</h4>
      <a href="./06-blog-list.html">Blog</a>
      <a href="./05-about.html">Biz haqimizda</a>
      <a href="../15-knowledge-base/06-public-home.html">Bilim bazasi</a>
    </div>
    <div>
      <h4>Hisob</h4>
      <a href="../02-auth/01-login.html">Kirish</a>
      <a href="../02-auth/02-register.html">Ro'yxatdan o'tish</a>
      <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
    </div>
  </div>
</footer>
```

---

## 10. AUTH VA ONBOARDING OQIMI

**Foydalanuvchi yo'li:**
1. Landing (`01-landing/01-landing.html`) → "Boshlash" → Register
2. Register (`02-auth/02-register.html`) → Email verify
3. Email verify (`02-auth/03-email-verify.html`) → Login
4. Login (`02-auth/01-login.html`) → Welcome (first login)
5. Welcome (`02-auth/05-welcome-first-login.html`) → Onboarding
6. Onboarding Welcome (`03-onboarding/01-welcome.html`) → Setup → Workspace → Widget → Verify → Progress → Tutorial → Demo
7. Demo tugagach → Dashboard (`04-dashboard/01-dashboard.html`)

**Har bir sahifada keyingi bosqich ko'rsatilishi kerak:**
- Auth sahifalarda form'ning `data-submit-href` atributi to'g'ri yo'naltirilsin
- Onboarding sahifalarda "Davom ettirish" tugmasi keyingi bosqichga olib borsin
- Forgot password → Login'ga qaytish havolasi

---

## 11. WIDGET SAHIFALAR (11-CHAT-WIDGET)

Widget sahifalar shell ishlatmaydi. Ular o'z alohida topbar'iga ega. Lekin dashboard'ga qaytish havolasi bo'lishi kerak:

```html
<a class="btn btn-ghost btn-sm" href="../04-dashboard/01-dashboard.html">
  <i data-lucide="arrow-left"></i> Dashboard'ga qaytish
</a>
```

---

## 12. PUBLIC KNOWLEDGE BASE SAHIFALAR (15-KB 06-09)

Bu sahifalar shell ishlatmaydi, o'z header/footer'lari bor. Lekin:
- Header'da "Dashboard" ga kirish havolasi bo'lsin
- KB Internal sahifalardan (01-05, 10-18) public sahifalarga havola bo'lsin
- Footer'da landing sahifalarga havolalar bo'lsin

---

## 13. SYSTEM/ERROR SAHIFALAR (18-SYSTEM)

Bu sahifalar shell ishlatmaydi. Ular `system-pages.css` ni qo'shimcha CSS sifatida yuklamoqda.

**Har bir error sahifada:**
- `../index.html` ga "Bosh sahifa" havolasi
- `../04-dashboard/01-dashboard.html` ga "Dashboard" havolasi
- `history.back()` tugmasi (`data-system-back`)
- `../21-help-support/03-submit-ticket.html` ga "Muammo haqida xabar berish" havolasi

---

## 14. YANGI FAYLLAR YARATISH KERAKMI?

### 14.1. ✅ Yaratilishi kerak:
| Fayl | Maqsad |
|---|---|
| `assets/qulay-chat-charts.css` | Barcha chart/diagramma stillari uchun alohida CSS fayl |
| `assets/qulay-chat-navigation.js` | Subnav tabs auto-highlight + breadcrumb generator |

### 14.2. ❌ Olib tashlanishi/Birlashtirilishi kerak:
| Fayl | Yechim |
|---|---|
| `assets/production-look.css` | `qulay-chat-design-system.css` ga birlashtirilsin — alohida fayl sifatida keraksiz |
| `04-dashboard/DASHBOARD-PAGES-PLAN.md` | Olib tashlansin — bu ishlab chiqish hujjati, foydalanuvchiga kerak emas |

### 14.3. ⚠️ Qayta ko'rib chiqish kerak:
| Fayl | Muammo |
|---|---|
| `assets/qulay-chat-pages.css` | `qulay-chat-design-system.css` bilan CSS variable qarama-qarshiliklari bor. `--cf-primary` va `--primary` turlicha. Yagona tizimga birlashtirish kerak |

---

## 15. ACCESSIBILITY VA SEO

Har bir sahifada quyidagilar tekshirilsin:
- `<html lang="uz">` — O'zbek tili
- `<title>` — sahifaga mos sarlavha
- Barcha `<img>` da `alt` atributi
- Barcha `<button>` va `<a>` da `aria-label` (agar matn yo'q bo'lsa)
- Focus visible: `:focus-visible` stillari mavjudligini ta'minlash
- Keyboard navigatsiya: Tab, Enter, Escape ishlashi

---

## 16. RESPONSIVE DESIGN

Hozirgi responsive breakpointlar:
- `1120px` — sidebar yashiriladi
- `860px` — header stack bo'ladi
- `640px` — grid 1 ustunga tushadi
- `980px` — landing grid 1 ustunga

**Qo'shimcha:** mobil ko'rinishda sidebar hamburger menyuga aylanishi kerak (hozir faqat yashiriladi).

---

## 17. MUHIM QOIDALAR (AI AGENT UCHUN)

1. **Sidebar o'zgartirma** — `qulay-chat-shell.js` dagi sidebar strukturasini O'ZGARTIRMA. Faqat `currentSectionName()` ga yangi bo'limlar qo'sh.
2. **Rol tizimini buzma** — `data-roles="admin"` va `data-roles="agent"` atributlarini to'g'ri ishlat.
3. **Relative path ishlatish** — barcha havolalar relative bo'lsin: `../folder/file.html` yoki `./file.html`
4. **Inline style'larni kamayir** — Imkon qadar CSS class ishlatish, inline style faqat unique holatlar uchun
5. **Lucide ikonlar** — barcha ikonlar `<i data-lucide="icon-name"></i>` orqali
6. **Toast notification** — amallar uchun `pushToast("Xabar", "success|warn|error|info")`
7. **Tab tizimi** — `data-tab-group` va `data-tab` / `data-tab-panel` orqali
8. **Modal tizimi** — `data-modal-open="id"` va `data-modal="id"` orqali
9. **Form handling** — `data-auto-submit` va `data-submit-message` orqali
10. **Copy action** — `data-action="copy"` va `data-target="selector"` yoki `data-copy="text"`

---

> **Keyingi qadam:** PROMPT-2-BATAFSIL.md ni o'qing — unda har bir 28 bo'lim uchun alohida-alohida batafsil ko'rsatmalar, qaysi sahifaga nima qo'shish, qayerga qanday havola qo'yish, qanday rasmlar joylashtirish — HAMMASINI topasiz.
