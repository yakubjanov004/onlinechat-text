# QULAY CHAT — PROMPT-2: HAR BIR BO'LIM UCHUN BATAFSIL KO'RSATMALAR

> **Bu fayl PROMPT-1-UMUMIY.md bilan birga ishlatiladi.** Bu yerda 28 ta bo'limning HAR BIRI uchun alohida-alohida: qaysi faylga nima qo'shish, qaysi havolalar tuzatish, qanday rasmlar joylashtirish, qanday chartlar yaratish — HAMMASINI topasiz.

> **Muhim:** Har bir bo'limda `[SUBNAV]`, `[BREADCRUMB]`, `[PREV/NEXT]`, `[LINKS]`, `[IMAGES]`, `[CHARTS]` belgilari bilan nima qilish kerakligi ko'rsatilgan.

---

## ═══════════════════════════════════════════
## BO'LIM 01: LANDING (01-landing/)
## ═══════════════════════════════════════════

**Fayllar:** 01-landing.html, 02-pricing.html, 03-features.html, 04-integrations.html, 05-about.html, 06-blog-list.html, 07-blog-post.html, 08-comparison.html, landing-v2.css

**Tur:** Standalone (shell ishlatmaydi)
**CSS:** landing-v2.css (o'z ichida)
**JS:** Yo'q (faqat inline script)

### Umumiy o'zgartirishlar (barcha 8 HTML uchun):

**[NAV]** — Har bir sahifada bir xil navigatsiya bo'lishi kerak:
```html
<div class="topbar">
  <a href="tel:+998901234567">+998 90 123 45 67</a>
  <a href="mailto:info@qulaychat.uz">info@qulaychat.uz</a>
</div>
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
    <a class="btn btn-primary" href="../02-auth/02-register.html">14 kun bepul sinash</a>
  </div>
</nav>
```

**Joriy sahifani `.nav-links a` da active class bilan belgilash:**
```html
<a class="active" href="./03-features.html">Imkoniyatlar</a>
```
CSS:
```css
.nav-links a.active {
  color: var(--primary);
  font-weight: 700;
}
```

**[FOOTER]** — Barcha 8 sahifada yagona footer (PROMPT-1 §9 ga qarang):
Footer'da quyidagi bo'limlar bo'lsin: Product, Resurslar, Hisob, Ijtimoiy tarmoqlar

### 01-landing.html (Asosiy landing)

**[IMAGES]** — Hero sektsiyasida:
```html
<div class="hero-media">
  <!-- Haqiqiy screenshot placeholder -->
  <img src="https://placehold.co/800x500/EEF2FF/4F46E5?text=Qulay+Chat+Dashboard+Preview" 
       alt="Qulay Chat dashboard ko'rinishi" 
       loading="lazy">
</div>
```

**[IMAGES]** — Trust/Partners sektsiyasida real logolar:
```html
<section class="section">
  <p class="text-center text-muted">250+ kompaniya ishonch bildirmoqda</p>
  <div class="grid-5" style="display:flex;justify-content:center;gap:32px;align-items:center;opacity:0.6;margin-top:12px;">
    <img src="https://placehold.co/120x40/F9FAFB/6B7280?text=Uzbekiston+Airways" alt="Uzbekiston Airways">
    <img src="https://placehold.co/120x40/F9FAFB/6B7280?text=Artel" alt="Artel">
    <img src="https://placehold.co/120x40/F9FAFB/6B7280?text=Uzum" alt="Uzum">
    <img src="https://placehold.co/120x40/F9FAFB/6B7280?text=Humans" alt="Humans">
    <img src="https://placehold.co/120x40/F9FAFB/6B7280?text=Oson+Apteka" alt="Oson Apteka">
  </div>
</section>
```

**[IMAGES]** — Imkoniyatlar sektsiyasida screenshot placeholder:
```html
<img src="https://placehold.co/600x400/F0F4FF/4F46E5?text=Inbox+Chat+View" alt="Inbox chat">
<img src="https://placehold.co/600x400/ECFDF5/10B981?text=Analytics+Dashboard" alt="Analytics">
<img src="https://placehold.co/600x400/EFF6FF/3B82F6?text=Chatbot+Builder" alt="Chatbot builder">
```

**[LINKS]** — CTA tugmalar:
- "Bepul boshlash" → `../02-auth/02-register.html`
- "Demo ko'rish" → `#demo` yoki `./03-features.html`
- "Narxlarni ko'rish" → `./02-pricing.html`

---

### 02-pricing.html (Narxlar)

**[LINKS]** — Tarif tugmalari:
```html
<!-- Free plan -->
<a class="btn btn-secondary" href="../02-auth/02-register.html">Bepul boshlash</a>
<!-- Pro plan -->
<a class="btn btn-primary" href="../02-auth/02-register.html?plan=pro">Pro rejani tanlash</a>
<!-- Enterprise -->
<a class="btn btn-secondary" href="mailto:sales@qulaychat.uz">Biz bilan bog'lanish</a>
```

**[TABLE]** — Taqqoslash jadvali — barcha tariflarni solishtiruvchi jadval qo'shilsin:
```html
<section class="section">
  <h2>Rejalarni batafsil solishtirish</h2>
  <table class="table">
    <thead>
      <tr><th>Imkoniyat</th><th>Bepul</th><th>Pro</th><th>Enterprise</th></tr>
    </thead>
    <tbody>
      <tr><td>Agentlar soni</td><td>2</td><td>10</td><td>Cheksiz</td></tr>
      <tr><td>Chat tarixi</td><td>30 kun</td><td>1 yil</td><td>Cheksiz</td></tr>
      <tr><td>Chatbot</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>API kirish</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>WhatsApp</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>Telegram</td><td>✅</td><td>✅</td><td>✅</td></tr>
      <tr><td>Analytics</td><td>Asosiy</td><td>Kengaytirilgan</td><td>Custom</td></tr>
      <tr><td>Knowledge Base</td><td>❌</td><td>✅</td><td>✅</td></tr>
      <tr><td>SLA monitoring</td><td>❌</td><td>❌</td><td>✅</td></tr>
      <tr><td>Dedicated manager</td><td>❌</td><td>❌</td><td>✅</td></tr>
    </tbody>
  </table>
</section>
```

**[LINKS]** — FAQ bo'limida:
- "Bog'lanish" → `./05-about.html` yoki `mailto:sales@qulaychat.uz`

---

### 03-features.html (Imkoniyatlar)

**[IMAGES]** — Har bir feature uchun screenshot/illustration:
```html
<!-- Inbox -->
<img src="https://placehold.co/560x360/EEF2FF/4F46E5?text=Omnichannel+Inbox" alt="Inbox ko'rinishi">
<!-- Chatbot -->
<img src="https://placehold.co/560x360/F0FDF4/10B981?text=Visual+Chatbot+Builder" alt="Chatbot builder">
<!-- Analytics -->
<img src="https://placehold.co/560x360/EFF6FF/3B82F6?text=Real-time+Analytics" alt="Analytics">
<!-- Widget -->
<img src="https://placehold.co/560x360/FEF3C7/D97706?text=Chat+Widget" alt="Chat widget">
<!-- KB -->
<img src="https://placehold.co/560x360/F0F4FF/6366F1?text=Knowledge+Base" alt="Knowledge base">
```

**[LINKS]** — Har bir feature kartochkasida:
- "Batafsil" → tegishli dashboard sahifaga (masalan, Inbox → `../05-inbox/01-inbox-chat.html` emas, balki `./03-features.html#inbox`)
- "Sinab ko'ring" → `../02-auth/02-register.html`

---

### 04-integrations.html (Integratsiyalar)

**[IMAGES]** — Real kanal logolari:
```html
<div class="integration-grid" style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
  <!-- Telegram -->
  <div class="card" style="text-align:center;padding:20px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
         alt="Telegram" style="width:48px;height:48px;margin:0 auto 10px;">
    <h4>Telegram</h4>
    <p style="font-size:13px;color:var(--muted);">Bot API orqali to'liq integratsiya</p>
  </div>
  <!-- WhatsApp -->
  <div class="card" style="text-align:center;padding:20px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
         alt="WhatsApp" style="width:48px;height:48px;margin:0 auto 10px;">
    <h4>WhatsApp Business</h4>
    <p style="font-size:13px;color:var(--muted);">Cloud API va template xabarlar</p>
  </div>
  <!-- Instagram -->
  <div class="card" style="text-align:center;padding:20px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
         alt="Instagram" style="width:48px;height:48px;margin:0 auto 10px;">
    <h4>Instagram DM</h4>
    <p style="font-size:13px;color:var(--muted);">Direct Message API</p>
  </div>
  <!-- Facebook -->
  <div class="card" style="text-align:center;padding:20px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
         alt="Facebook" style="width:48px;height:48px;margin:0 auto 10px;">
    <h4>Facebook Messenger</h4>
    <p style="font-size:13px;color:var(--muted);">Page messaging integratsiya</p>
  </div>
  <!-- Viber -->
  <div class="card" style="text-align:center;padding:20px;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Viber_logo.svg" 
         alt="Viber" style="width:48px;height:48px;margin:0 auto 10px;">
    <h4>Viber</h4>
    <p style="font-size:13px;color:var(--muted);">Bot API orqali integratsiya</p>
  </div>
  <!-- Email -->
  <div class="card" style="text-align:center;padding:20px;">
    <i data-lucide="mail" style="width:48px;height:48px;color:var(--primary);margin:0 auto 10px;"></i>
    <h4>Email (SMTP/IMAP)</h4>
    <p style="font-size:13px;color:var(--muted);">Emailni tick sifatida qabul qilish</p>
  </div>
  <!-- SMS -->
  <div class="card" style="text-align:center;padding:20px;">
    <i data-lucide="smartphone" style="width:48px;height:48px;color:var(--primary);margin:0 auto 10px;"></i>
    <h4>SMS (Eskiz/PlayMobile)</h4>
    <p style="font-size:13px;color:var(--muted);">SMS gateway integratsiya</p>
  </div>
  <!-- CRM -->
  <div class="card" style="text-align:center;padding:20px;">
    <i data-lucide="database" style="width:48px;height:48px;color:var(--primary);margin:0 auto 10px;"></i>
    <h4>CRM (Bitrix24/amoCRM)</h4>
    <p style="font-size:13px;color:var(--muted);">Kontaktlarni sinxronlash</p>
  </div>
</div>
```

**[LINKS]:**
- "Batafsil sozlash" → `../26-integrations/01-channels-overview.html`

---

### 05-about.html (Biz haqimizda)

**[IMAGES]** — Jamoa rasmlari:
```html
<div class="grid-3">
  <div class="card" style="text-align:center;padding:16px;">
    <div style="width:80px;height:80px;border-radius:50%;background:var(--primary-light);margin:0 auto 8px;display:grid;place-items:center;">
      <span style="font-size:28px;font-weight:700;color:var(--primary);">SA</span>
    </div>
    <h4>Sardor Alimov</h4>
    <p style="font-size:13px;color:var(--muted);">CEO & Founder</p>
  </div>
  <!-- Boshqa jamoa a'zolari... -->
</div>
```

**[LINKS]:**
- "Biz bilan ishlang" → `mailto:hr@qulaychat.uz`
- "Bog'lanish" → `mailto:info@qulaychat.uz`

---

### 06-blog-list.html & 07-blog-post.html

**[LINKS]:**
- Blog kartochkalari → `./07-blog-post.html`
- Blog post ichidan → `./06-blog-list.html` (orqaga)
- Sidebar'da → `./02-pricing.html` (CTA banner)
- Social share havolalar (Twitter, LinkedIn, Telegram)

**[IMAGES]** — Blog post rasmlari:
```html
<img src="https://placehold.co/800x400/EEF2FF/4F46E5?text=Blog+Post+Header" alt="Blog post">
```

---

### 08-comparison.html (Taqqoslash)

**[TABLE]** — Qulay Chat vs raqobatchilar:
```html
<table class="table">
  <thead>
    <tr><th>Xususiyat</th><th>Qulay Chat</th><th>Jivo</th><th>Tawk.to</th><th>Intercom</th></tr>
  </thead>
  <tbody>
    <tr><td>Bepul reja</td><td>✅</td><td>✅</td><td>✅</td><td>❌</td></tr>
    <tr><td>O'zbek tili</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
    <tr><td>Payme/Click to'lov</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
    <tr><td>Telegram integratsiya</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td></tr>
    <tr><td>Chatbot builder</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr>
    <tr><td>Knowledge Base</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td></tr>
    <tr><td>Local to'lov</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
    <tr><td>Narxi (oylik)</td><td>$15</td><td>$19</td><td>Bepul</td><td>$74</td></tr>
  </tbody>
</table>
```

---

## ═══════════════════════════════════════════
## BO'LIM 02: AUTH (02-auth/)
## ═══════════════════════════════════════════

**Fayllar:** 01-login.html, 02-register.html, 03-email-verify.html, 04-forgot-password.html, 05-welcome-first-login.html

**Tur:** Standalone (shell yo'q)
**CSS:** qulay-chat-design-system.css
**JS:** lucide CDN + qulay-chat-runtime.js

### Barcha sahifalar uchun umumiy:

**[LINKS]** — Har bir sahifada navigatsiya:
| Sahifa | Havolalar |
|---|---|
| 01-login | → `./02-register.html` (Ro'yxat), → `./04-forgot-password.html` (Parolni unutdingizmi?), → `../01-landing/01-landing.html` (Bosh sahifa) |
| 02-register | → `./01-login.html` (Allaqachon hisobingiz bormi?), → `../01-landing/01-landing.html` (Bosh sahifa) |
| 03-email-verify | → `./01-login.html` (Login sahifasiga), → `mailto:support@qulaychat.uz` (Emailni olmadingizmi?) |
| 04-forgot-password | → `./01-login.html` (Orqaga) |
| 05-welcome-first-login | → `../03-onboarding/01-welcome.html` (Davom ettirish) |

**[IMAGES]** — Auth sahifalarda:
```html
<!-- Login/Register sahifalarda bitta illustratsiya -->
<div class="auth-illustration">
  <img src="https://placehold.co/400x300/EEF2FF/4F46E5?text=Welcome+to+Qulay+Chat" 
       alt="Qulay Chat'ga xush kelibsiz">
</div>
```

**Form redirect tuzatish:**
```html
<!-- 01-login.html -->
<form data-auto-submit data-submit-message="Muvaffaqiyatli kirdingiz!" data-submit-href="../04-dashboard/01-dashboard.html">
<!-- 02-register.html -->
<form data-auto-submit data-submit-message="Ro'yxatdan o'tdingiz!" data-submit-href="./03-email-verify.html">
<!-- 04-forgot-password.html -->
<form data-auto-submit data-submit-message="Parol tiklash havolasi yuborildi!" data-submit-href="./01-login.html">
```

---

## ═══════════════════════════════════════════
## BO'LIM 03: ONBOARDING (03-onboarding/)
## ═══════════════════════════════════════════

**Fayllar:** 01-welcome.html, 02-onboarding-setup.html, 03-workspace.html, 04-widget-customize.html, 05-widget-install.html, 06-widget-verify.html, 07-progress-checklist.html, 08-interactive-tutorial.html, 09-first-chat-demo.html

**Tur:** Aralash — 01-06 standalone wizard, 07-09 shell ishlatadi
**CSS:** qulay-chat-design-system.css
**JS:** lucide CDN + runtime.js (07-09 da shell.js ham)

### ❌ MUAMMO: Buzilgan havolalar
Fayllar 07, 08, 09 dagi subnav-tabs noto'g'ri fayl nomlariga ishora qilmoqda. Tuzatish:

```
❌ 02-branding.html        → ✅ 02-onboarding-setup.html
❌ 03-team-invite.html     → ✅ 03-workspace.html
❌ 04-channel-connect.html → ✅ 04-widget-customize.html
❌ 05-whatsapp-setup.html  → ✅ 05-widget-install.html
```

### Ketma-ket o'tish zanjiri:

```
01-welcome → 02-onboarding-setup → 03-workspace → 04-widget-customize 
→ 05-widget-install → 06-widget-verify → 07-progress-checklist 
→ 08-interactive-tutorial → 09-first-chat-demo → ../04-dashboard/01-dashboard.html
```

**Har bir sahifada:**
```html
<!-- Progress bar -->
<div class="onboarding-progress">
  <div class="progress-bar" style="--progress: 33%;">
    <div class="progress-fill"></div>
  </div>
  <span class="text-muted">Qadam 3/9</span>
</div>

<!-- Footer navigatsiya -->
<div class="page-nav">
  <a class="btn btn-ghost" href="./02-onboarding-setup.html">← Orqaga</a>
  <a class="btn btn-primary" href="./04-widget-customize.html">Davom ettirish →</a>
</div>
```

**[LINKS]:**
| Sahifa | Keyingi | Oldingi |
|---|---|---|
| 01-welcome | 02-onboarding-setup | ../02-auth/05-welcome-first-login.html |
| 02-onboarding-setup | 03-workspace | 01-welcome |
| 03-workspace | 04-widget-customize | 02-onboarding-setup |
| 04-widget-customize | 05-widget-install | 03-workspace |
| 05-widget-install | 06-widget-verify | 04-widget-customize |
| 06-widget-verify | 07-progress-checklist | 05-widget-install |
| 07-progress-checklist | 08-interactive-tutorial | 06-widget-verify |
| 08-interactive-tutorial | 09-first-chat-demo | 07-progress-checklist |
| 09-first-chat-demo | ../04-dashboard/01-dashboard.html | 08-interactive-tutorial |

**[LINKS]** — "O'tkazib yuborish" havolasi har bir sahifada:
```html
<a class="text-muted" href="../04-dashboard/01-dashboard.html" style="font-size:13px;">
  O'tkazib yuborish va Dashboard'ga o'tish →
</a>
```

---

## ═══════════════════════════════════════════
## BO'LIM 04: DASHBOARD (04-dashboard/)
## ═══════════════════════════════════════════

**Fayllar:** 01-dashboard.html, 01-dashboard-admin.html, 02-dashboard-agent.html, 03-dashboard-customizable.html, 04-agent-quick-actions.html, 05-manager-dashboard.html

**Tur:** Shell (`data-active-nav="dashboard"`)
**CSS:** qulay-chat-design-system.css
**JS:** lucide CDN + shell.js + runtime.js + dashboard-customizable.js

### [SUBNAV] — Barcha 6 sahifada bir xil subnav:
```html
<nav class="subnav-tabs" aria-label="Dashboard sahifalari">
  <a class="tab" href="./01-dashboard.html">Router</a>
  <a class="tab" href="./01-dashboard-admin.html">Admin Dashboard</a>
  <a class="tab" href="./02-dashboard-agent.html">Agent Dashboard</a>
  <a class="tab" href="./03-dashboard-customizable.html">Customizable</a>
  <a class="tab" href="./04-agent-quick-actions.html">Quick Actions</a>
  <a class="tab" href="./05-manager-dashboard.html">Manager</a>
</nav>
```
**Joriy sahifaga `active` class qo'shilsin.**

### [BREADCRUMB] — Har bir sahifada:
```html
<nav class="breadcrumbs">
  <a href="./01-dashboard.html">Dashboard</a>
  <span class="separator">›</span>
  <span class="current">[Sahifa nomi]</span>
</nav>
```

### [CHARTS] — Admin Dashboard (01-dashboard-admin.html):

**Metrikalar qatori (4 ta metric card):**
```html
<div class="metrics-grid" style="grid-template-columns:repeat(4,1fr);">
  <div class="metric-card-v2">
    <small class="text-muted">Bugungi chatlar</small>
    <div class="metric-value">247</div>
    <span class="metric-change up">↑ 12% kechagiga nisbatan</span>
    <!-- Sparkline -->
    <svg class="sparkline" viewBox="0 0 80 24"><polyline points="0,20 12,16 24,18 36,10 48,14 60,6 72,8 80,4"></polyline></svg>
  </div>
  <div class="metric-card-v2">
    <small class="text-muted">O'rtacha javob vaqti</small>
    <div class="metric-value">1m 24s</div>
    <span class="metric-change down">↓ 8% yaxshilandi</span>
  </div>
  <div class="metric-card-v2">
    <small class="text-muted">CSAT ball</small>
    <div class="metric-value">4.7/5</div>
    <span class="metric-change up">↑ 0.2 kechagiga nisbatan</span>
  </div>
  <div class="metric-card-v2">
    <small class="text-muted">Online agentlar</small>
    <div class="metric-value">8/12</div>
    <span class="status-badge online"><span class="status-dot online"></span>Online</span>
  </div>
</div>
```

**Haftalik chat trendi (bar chart):**
```html
<div class="chart-container">
  <div class="chart-header">
    <h3>Haftalik chat statistikasi</h3>
    <select class="input" style="width:auto;">
      <option>Shu hafta</option>
      <option>O'tgan hafta</option>
    </select>
  </div>
  <div class="chart-bars" style="height:180px;display:flex;align-items:flex-end;gap:8px;">
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:65%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Dush</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:78%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Sesh</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:90%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Chor</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:72%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Pay</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:85%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Jum</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:45%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Shan</span>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;">
      <div style="width:100%;height:30%;background:linear-gradient(180deg,var(--primary),var(--primary-light));border-radius:6px 6px 0 0;"></div>
      <span style="font-size:11px;color:var(--gray-500);margin-top:4px;">Yak</span>
    </div>
  </div>
</div>
```

**Kanal taqsimoti (donut chart):**
```html
<div class="chart-container">
  <div class="chart-header"><h3>Kanallar bo'yicha</h3></div>
  <div style="display:flex;align-items:center;gap:20px;">
    <div class="donut-chart" style="width:120px;height:120px;border-radius:50%;background:conic-gradient(var(--primary) 0% 35%, #10B981 35% 55%, #F59E0B 55% 70%, #3B82F6 70% 85%, var(--gray-200) 85% 100%);position:relative;">
      <div style="position:absolute;inset:30%;border-radius:50%;background:white;display:grid;place-items:center;">
        <span style="font-weight:700;font-size:16px;">247</span>
      </div>
    </div>
    <div style="display:grid;gap:6px;font-size:13px;">
      <div><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:var(--primary);margin-right:6px;"></span>Website — 35%</div>
      <div><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#10B981;margin-right:6px;"></span>Telegram — 20%</div>
      <div><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#F59E0B;margin-right:6px;"></span>WhatsApp — 15%</div>
      <div><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#3B82F6;margin-right:6px;"></span>Instagram — 15%</div>
      <div><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:var(--gray-200);margin-right:6px;"></span>Boshqa — 15%</div>
    </div>
  </div>
</div>
```

**[LINKS]** — Dashboard'dagi tezkor havolalar:
- "Barcha chatlarni ko'rish" → `../05-inbox/01-inbox-chat.html`
- "Analytics" → `../08-analytics/01-overview.html`
- "Sozlamalar" → `../09-settings/01-workspace-general.html`
- "Agent boshqaruvi" → `../07-team/01-agents.html`

**DASHBOARD-PAGES-PLAN.md** — bu faylni o'chirib tashlash kerak (dev hujjati).

---

## ═══════════════════════════════════════════
## BO'LIM 05: INBOX (05-inbox/)
## ═══════════════════════════════════════════

**Fayllar:** 01-inbox-chat.html, 02-chat-open.html, 03-info-sidebar.html, 04-canned-responses.html, 05-chat-transfer.html, 06-chat-merge.html, 07-bulk-actions.html, 08-omnichannel-view.html, 09-channel-filter.html, 10-internal-notes.html

**Tur:** Shell (`data-active-nav="inbox"`)
**CSS:** qulay-chat-design-system.css
**JS:** lucide CDN + shell.js + runtime.js + inbox-realism.js + inbox-operations.js + canned-responses.js

### [SUBNAV] — Barcha 10 sahifada:
```html
<nav class="subnav-tabs" aria-label="Inbox sahifalari">
  <a class="tab" href="./01-inbox-chat.html">Chat ro'yxati</a>
  <a class="tab" href="./02-chat-open.html">Ochiq chat</a>
  <a class="tab" href="./03-info-sidebar.html">Ma'lumot panel</a>
  <a class="tab" href="./04-canned-responses.html">Tayyor javoblar</a>
  <a class="tab" href="./05-chat-transfer.html">Transfer</a>
  <a class="tab" href="./06-chat-merge.html">Birlashtirish</a>
  <a class="tab" href="./07-bulk-actions.html">Ko'plik amallar</a>
  <a class="tab" href="./08-omnichannel-view.html">Omnichannel</a>
  <a class="tab" href="./09-channel-filter.html">Kanal filtr</a>
  <a class="tab" href="./10-internal-notes.html">Ichki eslatmalar</a>
</nav>
```

### [BREADCRUMB]:
```html
<nav class="breadcrumbs">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <span class="separator">›</span>
  <a href="./01-inbox-chat.html">Inbox</a>
  <span class="separator">›</span>
  <span class="current">[Sahifa nomi]</span>
</nav>
```

### [PREV/NEXT]:
| Sahifa | Prev | Next |
|---|---|---|
| 01-inbox-chat | — | 02-chat-open |
| 02-chat-open | 01-inbox-chat | 03-info-sidebar |
| 03-info-sidebar | 02-chat-open | 04-canned-responses |
| ... | ... | ... |
| 10-internal-notes | 09-channel-filter | — |

### [LINKS] — Chat elementlarida:
- Chat ro'yxatidagi har bir element → `./02-chat-open.html`
- Contact nomi → `../12-contacts/02-contact-profile.html`
- Agent nomi → `../07-team/02-agent-profile.html`
- "KB'dan javob qidirish" → `../15-knowledge-base/06-public-home.html`
- "Transfer" tugmasi → `./05-chat-transfer.html`

---

## ═══════════════════════════════════════════
## BO'LIM 06: AUTOMATION (06-automation/)
## ═══════════════════════════════════════════

**Fayllar:** 01-working-hours.html, 02-auto-reply.html, 03-triggers.html, 04-greetings.html, 05-chatbot-builder.html, 06-chatbot-templates.html, 07-routing-rules.html, 08-chatbot-flow-editor.html, 09-chatbot-testing.html, 10-chatbot-analytics.html, 11-chatbot-variables.html, 12-workflow-builder.html, 13-auto-tagging.html, 14-auto-assignment.html, 15-sla-rules.html, 16-escalation-rules.html, 17-business-rules.html, 18-scheduled-messages.html

**Tur:** Shell (`data-active-nav="automation"`)
**JS:** shell.js + runtime.js + automation-advanced.js + automation-auto-reply.js + automation-greetings.js + automation-triggers.js

### ⚠️ STUB FAYLLAR (08-18 — 11 ta fayl cookie-cutter stub, 73 qator)
Bu 11 ta faylni TO'LIQ qayta yozish kerak. Har birida real page-specific kontent bo'lishi kerak.

### [SUBNAV] — Barcha 18 sahifada:
```html
<nav class="subnav-tabs" aria-label="Automation sahifalari">
  <a class="tab" href="./01-working-hours.html">Ish vaqtlari</a>
  <a class="tab" href="./02-auto-reply.html">Auto javob</a>
  <a class="tab" href="./03-triggers.html">Triggerlar</a>
  <a class="tab" href="./04-greetings.html">Salomlashuvlar</a>
  <a class="tab" href="./05-chatbot-builder.html">Chatbot Builder</a>
  <a class="tab" href="./06-chatbot-templates.html">Chatbot shablonlari</a>
  <a class="tab" href="./07-routing-rules.html">Routing qoidalari</a>
  <a class="tab" href="./08-chatbot-flow-editor.html">Flow Editor</a>
  <a class="tab" href="./09-chatbot-testing.html">Chatbot test</a>
  <a class="tab" href="./10-chatbot-analytics.html">Chatbot analitika</a>
  <a class="tab" href="./11-chatbot-variables.html">O'zgaruvchilar</a>
  <a class="tab" href="./12-workflow-builder.html">Workflow Builder</a>
  <a class="tab" href="./13-auto-tagging.html">Auto tagging</a>
  <a class="tab" href="./14-auto-assignment.html">Auto tayinlash</a>
  <a class="tab" href="./15-sla-rules.html">SLA qoidalari</a>
  <a class="tab" href="./16-escalation-rules.html">Eskalatsiya</a>
  <a class="tab" href="./17-business-rules.html">Biznes qoidalar</a>
  <a class="tab" href="./18-scheduled-messages.html">Rejalashtirilgan xabarlar</a>
</nav>
```

### Stub fayllarni to'ldirish uchun individual promptlar:

#### 08-chatbot-flow-editor.html:
```
Chatbot flow editor sahifasi yaratilsin:
- Vizual flow canvas (CSS Grid bilan simullatsiya)
- Chap panel: node turlari (Message, Condition, Action, Delay, API Call)
- Markaziy canvas: drag-drop simulyatsiyasi (3-4 ta node bog'langan holda)
- O'ng panel: tanlangan node xususiyatlari
- Toolbar: Save, Test, Publish tugmalari
- Node'lar orasidagi bog'lanishlar (CSS line bilan)
```

#### 09-chatbot-testing.html:
```
Chatbot test muhiti sahifasi:
- Chap panel: test konfiguratsiyasi (ssenariy tanlash, o'zgaruvchilar)
- Markaziy: simullatsiya chat oynasi (foydalanuvchi va bot xabarlari)
- O'ng panel: debug log (qaysi node ishga tushdi, o'tish yo'li)
- "Start Test", "Reset", "Step by Step" tugmalari
```

#### 10-chatbot-analytics.html:
```
Chatbot analitika sahifasi:
- Metrikalar: Total conversations, Completion rate, Handoff rate, Avg duration
- Flow performance chart (har bir node necha marta ishga tushdi — bar chart)
- Drop-off funnel (qaerda foydalanuvchilar tark etdi)
- Popular paths ro'yxati
- Sana filtri
```

#### 11-chatbot-variables.html:
```
O'zgaruvchilar boshqaruvi:
- O'zgaruvchilar jadvali: Nom, Tur (text/number/boolean/array), Default qiymat, Tavsif
- "Yangi o'zgaruvchi" modal
- System variables: {{visitor.name}}, {{visitor.email}}, {{agent.name}}, {{time}}, {{channel}}
- Custom variables ro'yxati
```

#### 12-workflow-builder.html:
```
Workflow builder sahifasi:
- Trigger tanlash: New chat, Chat closed, Tag added, Custom event
- Condition builder: IF/ELSE bloklar
- Action tanlash: Send message, Assign agent, Add tag, Send email, Webhook
- Vizual workflow ko'rinishi
- Active/Pause toggle
```

#### 13-auto-tagging.html:
```
Avtomatik tagging qoidalari:
- Qoidalar jadvali: Nomi, Shart (keyword, channel, time), Tag, Status
- "Yangi qoida" modal
- Mashq qilish: test matn kiritib natijani ko'rish
- Statistika: Har bir qoida necha marta ishga tushgan
```

#### 14-auto-assignment.html:
```
Avtomatik tayinlash qoidalari:
- Routing strategiyalari: Round-robin, Load-based, Skill-based, Manual
- Har bir strategiya uchun konfiguratsiya
- Agent availability hisobga olish toggle
- Max concurrent chats per agent
- Fallback agent tanlash
```

#### 15-sla-rules.html:
```
SLA qoidalari sahifasi:
- SLA jadval: Nomi, Birinchi javob vaqti, Yechish vaqti, Prioritet, Status
- "Yangi SLA" modal
- Eskalatsiya bosqichlari (Level 1, 2, 3)
- Notification sozlamalari (kim xabar oladi)
- SLA buzilishi holatida action: Alert, Reassign, Email
```

#### 16-escalation-rules.html:
```
Eskalatsiya qoidalari:
- Eskalatsiya jadvali: Trigger, Vaqt chegarasi, Action, Kimga
- "Yangi eskalatsiya" modal
- Eskalatsiya chain vizualizatsiya (Level 1 → Level 2 → Manager)
- Notification template tanlash
```

#### 17-business-rules.html:
```
Biznes qoidalari:
- IF-THEN qoidalar jadvali
- Condition tiplari: Time, Channel, Visitor info, Chat count, Tag
- Action tiplari: Assign, Tag, Priority set, Auto-reply, Webhook
- Qoida prioriteti tartibini o'zgartirish (drag-and-drop simulyatsiya)
```

#### 18-scheduled-messages.html:
```
Rejalashtirilgan xabarlar:
- Xabarlar jadvali: Matn, Vaqt, Kanal, Status (Active/Paused/Completed)
- "Yangi xabar rejalashtirish" modal: Matn, Sana/vaqt, Kanal, Auditoriya
- Kalendar ko'rinishi (CSS grid bilan haftalik)
- Statistika: Yuborilgan, O'qilgan, Javob olgan
```

---

## ═══════════════════════════════════════════
## BO'LIM 07: TEAM (07-team/)
## ═══════════════════════════════════════════

**Fayllar:** 01-agents.html, 02-agent-profile.html, 03-roles.html, 04-invitations.html

**Tur:** Shell (`data-active-nav="team"`)
**JS:** shell.js + runtime.js + team-management.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Team sahifalari">
  <a class="tab" href="./01-agents.html">Agentlar</a>
  <a class="tab" href="./02-agent-profile.html">Agent profil</a>
  <a class="tab" href="./03-roles.html">Rollar</a>
  <a class="tab" href="./04-invitations.html">Taklifnomalar</a>
</nav>
```

### [BREADCRUMB]:
```html
<nav class="breadcrumbs">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <span class="separator">›</span>
  <a href="./01-agents.html">Team</a>
  <span class="separator">›</span>
  <span class="current">[Sahifa nomi]</span>
</nav>
```

### [LINKS]:
- Agent jadvalidagi nom → `./02-agent-profile.html`
- "Yangi agent taklif qilish" → `./04-invitations.html`
- Agent profildagi "Chat tarixi" → `../05-inbox/01-inbox-chat.html` (filtrlangan)
- Agent profildagi "Statistika" → `../08-analytics/04-operator-detail.html`
- Rollar sahifasidan → `../09-settings/03-security.html` (Xavfsizlik sozlamalari)

### [IMAGES]:
Agent avatar'lari uchun initials-based placeholder:
```html
<span class="avatar" style="background:var(--primary-light);color:var(--primary);">SA</span>
```

---

## ═══════════════════════════════════════════
## BO'LIM 08: ANALYTICS (08-analytics/)
## ═══════════════════════════════════════════

**Fayllar:** 01-overview.html, 02-response-times.html, 03-operators.html, 04-operator-detail.html, 05-sla.html, 06-channels.html, 07-segments.html, 08-tags.html, 09-custom-reports.html, 10-export.html, 11-my-stats.html, 12-realtime-monitor.html, 13-scheduled-reports.html, 14-agent-goals.html, 15-csat-trends.html, 16-nps-survey.html, 17-feedback-wall.html

**Tur:** Shell (`data-active-nav="analytics"`)
**JS:** shell.js + runtime.js + analytics-interactions.js + analytics-advanced.js

### [SUBNAV] — Barcha 17 sahifada:
```html
<nav class="subnav-tabs" aria-label="Analytics sahifalari">
  <a class="tab" href="./01-overview.html">Umumiy</a>
  <a class="tab" href="./02-response-times.html">Javob vaqtlari</a>
  <a class="tab" href="./03-operators.html">Operatorlar</a>
  <a class="tab" href="./04-operator-detail.html">Operator batafsil</a>
  <a class="tab" href="./05-sla.html">SLA</a>
  <a class="tab" href="./06-channels.html">Kanallar</a>
  <a class="tab" href="./07-segments.html">Segmentlar</a>
  <a class="tab" href="./08-tags.html">Taglar</a>
  <a class="tab" href="./09-custom-reports.html">Custom hisobotlar</a>
  <a class="tab" href="./10-export.html">Export</a>
  <a class="tab" href="./11-my-stats.html">Mening statistikam</a>
  <a class="tab" href="./12-realtime-monitor.html">Real-time</a>
  <a class="tab" href="./13-scheduled-reports.html">Rejali hisobotlar</a>
  <a class="tab" href="./14-agent-goals.html">Maqsadlar</a>
  <a class="tab" href="./15-csat-trends.html">CSAT trendlari</a>
  <a class="tab" href="./16-nps-survey.html">NPS so'rovnoma</a>
  <a class="tab" href="./17-feedback-wall.html">Fikrlar devori</a>
</nav>
```

### [CHARTS] — Har bir analitika sahifasi uchun alohida diagramma:

#### 01-overview.html:
- 4 ta metric card (Chatlar, O'rtacha javob vaqti, CSAT, Hal qilingan)
- Haftalik trend line chart (SVG polyline)
- Kanal taqsimoti donut chart
- Agent performance jadval

#### 02-response-times.html:
- O'rtacha birinchi javob vaqti (metric)
- O'rtacha yechish vaqti (metric)
- Soatlar bo'yicha response time bar chart (24 bar)
- Kunlar bo'yicha trend line chart

#### 03-operators.html:
- Operator jadvali: Nomi, Chatlar, O'rtacha vaqt, CSAT, Status
- Har bir operatorda kichik sparkline
- Top 5 operator visual ranking

#### 05-sla.html:
- SLA compliance foizi (donut chart)
- Breached tickets ro'yxati
- Trend chart (haftalik SLA %)

#### 06-channels.html:
- Kanal bo'yicha chatlar (stacked bar chart)
- Har bir kanal alohida metric card bilan

#### 12-realtime-monitor.html:
- Hozirgi queue hajmi (big number)
- Agentlar holati (online/busy/away ro'yxat)
- Kutish vaqti progress bar
- Live chat counter (animatsiya)

#### 15-csat-trends.html:
- CSAT score trend (line chart, 30 kunlik)
- Rating taqsimoti (horizontal bar chart: 1-5 yulduz)
- Comments ro'yxati

#### 16-nps-survey.html:
- NPS score gauge (yarrim doira chart)
- Promoters / Passives / Detractors (stacked bar)
- Feedback jadval

### [LINKS]:
- Operator nomi → `./04-operator-detail.html`
- "Chat ochish" → `../05-inbox/02-chat-open.html`
- "Export" → `./10-export.html`
- Agent nomi → `../07-team/02-agent-profile.html`

---

## ═══════════════════════════════════════════
## BO'LIM 09: SETTINGS (09-settings/)
## ═══════════════════════════════════════════

**Fayllar:** 01-workspace.html, 01-workspace-general.html, 01b-workspace-branding.html, 02-widget-settings.html, 03-security.html, 04-notifications.html, 05-profile.html, 06-privacy-export.html, 07-privacy-delete.html, 08-privacy-settings.html, 09-custom-fields.html, 10-tags-manager.html, 11-canned-manager.html, 12-ip-restriction.html, 13-activity-log.html, 14-file-storage.html, 15-account-management.html, 16-workspace-switcher.html, 17-agent-availability.html, 18-agent-canned-personal.html

**Tur:** Shell (`data-active-nav="settings"`)
**JS:** shell.js + runtime.js + settings-interactions.js

### ⚠️ STUB FAYLLAR (09-18 — 10 ta fayl cookie-cutter stub, 40 qator)
Bu 10 ta faylni TO'LIQ qayta yozish kerak.

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Settings sahifalari">
  <a class="tab" href="./01-workspace-general.html">Umumiy</a>
  <a class="tab" href="./01b-workspace-branding.html">Branding</a>
  <a class="tab" href="./02-widget-settings.html">Widget</a>
  <a class="tab" href="./03-security.html">Xavfsizlik</a>
  <a class="tab" href="./04-notifications.html">Bildirishnomalar</a>
  <a class="tab" href="./05-profile.html">Profil</a>
  <a class="tab" href="./06-privacy-export.html">Ma'lumot export</a>
  <a class="tab" href="./07-privacy-delete.html">Ma'lumot o'chirish</a>
  <a class="tab" href="./08-privacy-settings.html">Maxfiylik</a>
  <a class="tab" href="./09-custom-fields.html">Maxsus maydonlar</a>
  <a class="tab" href="./10-tags-manager.html">Taglar</a>
  <a class="tab" href="./11-canned-manager.html">Tayyor javoblar</a>
  <a class="tab" href="./12-ip-restriction.html">IP cheklash</a>
  <a class="tab" href="./13-activity-log.html">Faoliyat jurnali</a>
  <a class="tab" href="./14-file-storage.html">Fayl saqlash</a>
  <a class="tab" href="./15-account-management.html">Hisob boshqaruvi</a>
  <a class="tab" href="./16-workspace-switcher.html">Workspace almashtirish</a>
  <a class="tab" href="./17-agent-availability.html">Agent holati</a>
  <a class="tab" href="./18-agent-canned-personal.html">Shaxsiy javoblar</a>
</nav>
```

### ⚠️ Eslatma: `01-workspace.html` va `01-workspace-general.html` — ikkalasi ham mavjud. `01-workspace.html` ni `01-workspace-general.html` ga redirect qilish yoki birlashtirib, keraksiz faylni o'chirish kerak.

### Stub fayllarni to'ldirish uchun promptlar:

#### 09-custom-fields.html:
```
Custom fields sahifasi:
- Jadval: Nom, Tur (text/number/date/select/checkbox), Maydon uchun, Default, Majburiy
- "Yangi maydon" modal — tur tanlash, validatsiya qoidalari
- Drag-and-drop tartib o'zgartirish
- Guruhlash imkoniyati (Contact fields, Chat fields, Company fields)
```

#### 10-tags-manager.html:
```
Taglar boshqaruvi:
- Taglar jadvali: Nomi, Rang, Ishlatilgan soni, Yaratilgan sana
- "Yangi tag" modal — nom, rang pallitra
- Taglarni birlashtirish (merge) funksiyasi
- Statistika: eng ko'p ishlatiladigan taglar
```

#### 11-canned-manager.html:
```
Tayyor javoblar boshqaruvi:
- Jadval: Shortcut (#greeting, #thanks), Matn, Kategoriya, Yaratuvchi
- "Yangi javob" modal — shortcut, matn (rich text), kategoriya
- Categoriya filter
- Import/Export tugmalari
```

#### 12-ip-restriction.html:
```
IP cheklash:
- Ruxsat berilgan IP lar jadvali: IP, Tavsif, Qo'shilgan sana
- Bloklangan IP lar ro'yxati
- "IP qo'shish" modal
- Whitelist/Blacklist toggle
- Joriy IP ko'rsatish
```

#### 13-activity-log.html:
```
Faoliyat jurnali:
- Log jadvali: Vaqt, Foydalanuvchi, Amal, Tafsilot, IP
- Filtrlash: Sana, Foydalanuvchi, Amal turi
- "Export log" tugmasi
- Pagination
- Amal turlari uchun ikonlar (login, settings change, agent invite, role change)
```

#### 14-file-storage.html:
```
Fayl saqlash sozlamalari:
- Umumiy statistika: Ishlatilgan joy, Limit, Foiz (progress bar)
- Fayl turlari bo'yicha taqsimot (donut chart)
- Eski fayllarni tozalash tugmasi
- Max fayl hajmi sozlamalari
- Ruxsat berilgan fayl turlari (checkbox list)
```

#### 15-account-management.html:
```
Hisob boshqaruvi:
- Email o'zgartirish
- Parol o'zgartirish
- 2FA sozlash
- Sessiyalar ro'yxati (qurilma, IP, vaqt)
- "Barcha sessiyalardan chiqish" tugmasi
- Hisobni o'chirish (danger zone)
```

#### 16-workspace-switcher.html:
```
Workspace almashtirish:
- Mavjud workspace'lar ro'yxati (kartochka ko'rinishida)
- Har birida: Nomi, Plan, A'zolar soni, Oxirgi faollik
- "Yangi workspace yaratish" tugmasi
- Active workspace belgilanishi
```

#### 17-agent-availability.html:
```
Agent holati sozlamalari:
- Avtomatik "Away" vaqt (daqiqa)
- Ish vaqtlarida avtomatik "Online"
- Ish vaqtidan tashqarida avtomatik "Offline"
- Custom status qo'yish
- Status tarixi jadvali
```

#### 18-agent-canned-personal.html:
```
Shaxsiy tayyor javoblar:
- Faqat joriy agent ko'radigan javoblar
- Jadval: Shortcut, Matn, Oxirgi ishlatilgan
- "Yangi shaxsiy javob" modal
- "Team javoblaridan import" tugmasi
```

---

## ═══════════════════════════════════════════
## BO'LIM 10: BILLING (10-billing/)
## ═══════════════════════════════════════════

**Fayllar:** 01-plan.html, 02-payment.html, 03-invoices.html, 04-usage.html, 05-upgrade-downgrade.html, 06-billing-alerts.html, 07-coupon-promo.html, 08-trial-management.html, 09-payment-history.html, 10-billing-contacts.html, 11-tax-settings.html, 12-seat-management.html

**Tur:** Shell (`data-active-nav="billing"`)
**JS:** shell.js + runtime.js + billing-interactions.js

### ⚠️ STUB FAYLLAR (05-12 — 8 ta fayl cookie-cutter stub, 40 qator)

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Billing sahifalari">
  <a class="tab" href="./01-plan.html">Joriy reja</a>
  <a class="tab" href="./02-payment.html">To'lov usullari</a>
  <a class="tab" href="./03-invoices.html">Hisob-fakturalar</a>
  <a class="tab" href="./04-usage.html">Foydalanish</a>
  <a class="tab" href="./05-upgrade-downgrade.html">Reja o'zgartirish</a>
  <a class="tab" href="./06-billing-alerts.html">To'lov ogohlantirishlari</a>
  <a class="tab" href="./07-coupon-promo.html">Kupon va aksiyalar</a>
  <a class="tab" href="./08-trial-management.html">Sinov muddati</a>
  <a class="tab" href="./09-payment-history.html">To'lov tarixi</a>
  <a class="tab" href="./10-billing-contacts.html">Billing kontaktlar</a>
  <a class="tab" href="./11-tax-settings.html">Soliq sozlamalari</a>
  <a class="tab" href="./12-seat-management.html">O'rindiqlar</a>
</nav>
```

### [LINKS]:
- "To'lov qilish" → `../27-payments/01-payment-overview.html`
- "Rejani o'zgartirish" → `./05-upgrade-downgrade.html`
- "Hisob-fakturani yuklab olish" → `data-action="export"` (PDF download simullatsiya)

### [CHARTS] — 04-usage.html:
- API chaqiruvlar soni (progress bar with limit)
- Storage ishlatilishi (progress bar)
- Agentlar soni vs limit
- Oylik trend (bar chart)

### Stub fayllarni to'ldirish uchun promptlar:

#### 05-upgrade-downgrade.html:
```
Reja o'zgartirish sahifasi:
- Joriy reja ko'rsatilishi (Free/Pro/Enterprise)
- Barcha rejalar solishtirma jadval
- Upgrade tugmasi — to'lov oqimiga olib borish
- Downgrade ogohlantirishi (nimalar yo'qotiladi)
- Proration hisob-kitob ko'rsatilishi
```

#### 06-billing-alerts.html:
```
To'lov ogohlantrishlari:
- Ogohlantirishlar ro'yxati: Turi (payment failed, plan expiring, usage limit), Sana, Status
- Notification sozlamalari: Email, In-app, qaerga yuborilsin
- Avtomatik retry sozlamalari
```

#### 07-coupon-promo.html:
```
Kupon va aksiyalar:
- Kupon kodi kiritish input
- "Apply" tugmasi
- Mavjud aksiyalar ro'yxati (agar bor bo'lsa)
- Kupon tarixi: Kod, Chegirma, Qo'llanilgan sana, Muddat
```

#### 08-trial-management.html:
```
Sinov muddati:
- Qolgan kunlar (katta raqam + progress bar)
- Trial plan qanday imkoniyatlar beradi
- "Rejaga o'tish" CTA
- Trial davomida ishlatilgan resurslar statistikasi
```

#### 09-payment-history.html:
```
To'lov tarixi:
- Jadval: Sana, Summa, Usul, Status (paid/failed/refunded), Hisob-faktura
- Filtrlash: Sana oraliq, Status
- PDF download tugmasi har bir satrda
```

#### 10-billing-contacts.html:
```
Billing kontaktlar:
- Asosiy billing email
- Buxgalteriya email (CC)
- Telefon raqam
- Kompaniya ma'lumotlari (INN, Bank rekvizitlari)
```

#### 11-tax-settings.html:
```
Soliq sozlamalari:
- Kompaniya INN
- QQS holati (to'laydi/to'lamaydi)
- Davlat tanlash
- Soliq hisob-kitobi formati
```

#### 12-seat-management.html:
```
O'rindiqlar boshqaruvi:
- Joriy o'rindiqlar vs limit (3/10 kabi)
- Agent ro'yxati (nomi, rol, holati, qo'shilgan sana)
- "Yangi o'rindiq qo'shish" tugmasi
- O'rindiq narxi ko'rsatish
- Olib tashlash tugmasi (deactivate)
```

---

## ═══════════════════════════════════════════
## BO'LIM 11: CHAT WIDGET (11-chat-widget/)
## ═══════════════════════════════════════════

**Fayllar:** 01-widget-launcher.html, 02-widget-chat.html, 03-widget-offline.html, 04-widget-csat.html, 05-widget-states.html, 06-widget-prechat.html, 07-widget-knowledge.html, 08-widget-mobile.html

**Tur:** Standalone (shell yo'q, `.widget-page`)
**JS:** lucide CDN + runtime.js + widget-interactions.js + widget-extensions.js

### [SUBNAV] — Widget topbar ichida:
```html
<div class="widget-topbar">
  <a href="../04-dashboard/01-dashboard.html" class="btn btn-ghost btn-sm">
    <i data-lucide="arrow-left"></i> Dashboard
  </a>
  <nav class="subnav-tabs" style="border:0;margin:0;padding:0;">
    <a class="tab" href="./01-widget-launcher.html">Launcher</a>
    <a class="tab" href="./02-widget-chat.html">Chat</a>
    <a class="tab" href="./03-widget-offline.html">Offline</a>
    <a class="tab" href="./04-widget-csat.html">CSAT</a>
    <a class="tab" href="./05-widget-states.html">Holatlar</a>
    <a class="tab" href="./06-widget-prechat.html">Pre-chat</a>
    <a class="tab" href="./07-widget-knowledge.html">KB</a>
    <a class="tab" href="./08-widget-mobile.html">Mobile</a>
  </nav>
</div>
```

### [LINKS]:
- "Widget sozlamalari" → `../09-settings/02-widget-settings.html`
- "Install kodi" → `../03-onboarding/05-widget-install.html`
- "Customization" → `../03-onboarding/04-widget-customize.html`
- Brand link → `../04-dashboard/01-dashboard.html`

---

## ═══════════════════════════════════════════
## BO'LIM 12: CONTACTS (12-contacts/)
## ═══════════════════════════════════════════

**Fayllar:** 01-contacts-list.html, 02-contact-profile.html, 03-organizations.html, 04-org-detail.html, 05-segments.html, 06-import-export.html

**Tur:** Shell (`data-active-nav="contacts"`)
**JS:** shell.js + runtime.js + contacts-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Contacts sahifalari">
  <a class="tab" href="./01-contacts-list.html">Kontaktlar</a>
  <a class="tab" href="./02-contact-profile.html">Kontakt profil</a>
  <a class="tab" href="./03-organizations.html">Tashkilotlar</a>
  <a class="tab" href="./04-org-detail.html">Tashkilot batafsil</a>
  <a class="tab" href="./05-segments.html">Segmentlar</a>
  <a class="tab" href="./06-import-export.html">Import/Export</a>
</nav>
```

### [LINKS]:
- Contact nomiga bosish → `./02-contact-profile.html`
- Contact profildagi "Chatlar" → `../05-inbox/01-inbox-chat.html`
- Organization → `./04-org-detail.html`
- "Segment yaratish" → `./05-segments.html`
- "Import" → `./06-import-export.html`

---

## ═══════════════════════════════════════════
## BO'LIM 13: VISITORS (13-visitors/)
## ═══════════════════════════════════════════

**Fayllar:** 01-visitors-list.html, 02-visitor-profile.html, 03-visitors-map.html

**Tur:** Shell (`data-active-nav="visitors"`)
**JS:** shell.js + runtime.js + visitors-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Visitors sahifalari">
  <a class="tab" href="./01-visitors-list.html">Visitors ro'yxati</a>
  <a class="tab" href="./02-visitor-profile.html">Visitor profil</a>
  <a class="tab" href="./03-visitors-map.html">Xarita</a>
</nav>
```

### [LINKS]:
- Visitor nomiga bosish → `./02-visitor-profile.html`
- "Chat boshlash" → `../05-inbox/02-chat-open.html`
- Visitor profildagi "Contact yaratish" → `../12-contacts/02-contact-profile.html`

### [CHARTS] — 03-visitors-map.html:
```
Xarita sahifasi:
- CSS orqali O'zbekiston xaritasi placeholder yoki geometric shapes
- Shaharlar bo'yicha visitor soni (Toshkent: 45%, Samarqand: 15%, va h.k.)
- Real-time visitor counter
- Browser/OS statistikasi (bar chart)
- Referer sources ro'yxati
```

---

## ═══════════════════════════════════════════
## BO'LIM 14: TEAM CHAT (14-team-chat/)
## ═══════════════════════════════════════════

**Fayllar:** 01-team-chat.html, 02-room-settings.html, 03-notifications.html

**Tur:** Shell (`data-active-nav="team-chat"`)
**JS:** shell.js + runtime.js + team-chat-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Team Chat sahifalari">
  <a class="tab" href="./01-team-chat.html">Chatlar</a>
  <a class="tab" href="./02-room-settings.html">Xona sozlamalari</a>
  <a class="tab" href="./03-notifications.html">Bildirishnomalar</a>
</nav>
```

### [LINKS]:
- Xona yaratish → modal
- Agent nomi → `../07-team/02-agent-profile.html`
- "Notification sozlamalari" → `../09-settings/04-notifications.html`

---

## ═══════════════════════════════════════════
## BO'LIM 15: KNOWLEDGE BASE (15-knowledge-base/)
## ═══════════════════════════════════════════

**Fayllar:** 01-kb-dashboard.html, 02-article-editor.html, 03-categories.html, 04-kb-settings.html, 05-kb-analytics.html, 06-public-home.html, 07-public-search.html, 08-public-category.html, 09-public-article.html, 10-kb-versioning.html, 11-kb-multilingual.html, 12-kb-ai-suggest.html, 13-kb-feedback-detail.html, 14-kb-internal.html, 15-kb-import.html, 16-kb-custom-domain.html, 17-kb-seo.html, 18-kb-widget-link.html

**Tur:** Aralash — 01-05, 10-18 shell ishlatadi, 06-09 public (standalone)
**JS:** shell.js + runtime.js + kb-interactions.js

### ⚠️ STUB FAYLLAR (10-18 — 9 ta stub, 40 qator)

### [SUBNAV] — Shell sahifalar uchun (01-05, 10-18):
```html
<nav class="subnav-tabs" aria-label="Knowledge Base sahifalari">
  <a class="tab" href="./01-kb-dashboard.html">Dashboard</a>
  <a class="tab" href="./02-article-editor.html">Maqola editor</a>
  <a class="tab" href="./03-categories.html">Kategoriyalar</a>
  <a class="tab" href="./04-kb-settings.html">Sozlamalar</a>
  <a class="tab" href="./05-kb-analytics.html">Analitika</a>
  <a class="tab" href="./10-kb-versioning.html">Versiyalar</a>
  <a class="tab" href="./11-kb-multilingual.html">Ko'p tilli</a>
  <a class="tab" href="./12-kb-ai-suggest.html">AI tavsiyalar</a>
  <a class="tab" href="./13-kb-feedback-detail.html">Fikr-mulohazalar</a>
  <a class="tab" href="./14-kb-internal.html">Ichki KB</a>
  <a class="tab" href="./15-kb-import.html">Import</a>
  <a class="tab" href="./16-kb-custom-domain.html">Custom domen</a>
  <a class="tab" href="./17-kb-seo.html">SEO</a>
  <a class="tab" href="./18-kb-widget-link.html">Widget bog'lanish</a>
</nav>
```

### Public sahifalar (06-09) uchun navigatsiya:
```html
<header style="padding:16px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
  <a href="./06-public-home.html" style="font-weight:700;font-size:18px;color:var(--primary);">
    QULAY CHAT — Bilim bazasi
  </a>
  <div style="display:flex;gap:8px;">
    <a class="btn btn-ghost btn-sm" href="./07-public-search.html">Qidirish</a>
    <a class="btn btn-ghost btn-sm" href="../02-auth/01-login.html">Kirish</a>
    <a class="btn btn-primary btn-sm" href="../04-dashboard/01-dashboard.html">Dashboard</a>
  </div>
</header>
```

### [LINKS]:
| Sahifa | Havolalar |
|---|---|
| 01-kb-dashboard | "Yangi maqola" → 02, "Kategoriyalar" → 03, "Public view" → 06 |
| 02-article-editor | "Ko'rish" → 09-public-article |
| 06-public-home | Kategoriyalarga → 08, Qidirish → 07, Maqolalarga → 09 |
| 07-public-search | Natijalar → 09 |
| 08-public-category | Maqolalarga → 09 |
| 09-public-article | "Orqaga" → 08, "Ticket yuborish" → `../21-help-support/03-submit-ticket.html` |

### Stub fayllarni to'ldirish uchun promptlar:

#### 10-kb-versioning.html:
```
Maqola versiyalari:
- Versiyalar jadvali: Versiya raqami, Muallif, Sana, O'zgarishlar soni
- Diff ko'rinishi (ikki ustun: eski vs yangi)
- "Restore" tugmasi
- Auto-save indicator
```

#### 11-kb-multilingual.html:
```
Ko'p tilli maqolalar:
- Tillar jadvali: Til, Tarjima holati (%, progress bar), Oxirgi yangilangan
- "Tarjima qo'shish" modal
- Sinxronizatsiya holati (original tildan farq bormi?)
```

#### 12-kb-ai-suggest.html:
```
AI tavsiyalar:
- AI tomonidan tavsiya qilingan maqolalar ro'yxati (gap analysis)
- "Avtomatik yaratish" tugmasi
- Ko'p so'raladigan savollar analizi
- Auto-tag tavsiyalari
```

#### 13-kb-feedback-detail.html:
```
Maqola fikr-mulohazalari:
- Har bir maqola uchun: "Foydali bo'ldimi?" — Ha/Yo'q statistikasi
- Izohlar ro'yxati
- Filter: maqola, baho, sana
```

#### 14-kb-internal.html:
```
Ichki KB (faqat agentlar uchun):
- Agent-only maqolalar ro'yxati
- "Yangi ichki maqola" tugmasi
- Kategoriyalar
- Inbox ichida qidirish imkoniyati
```

#### 15-kb-import.html:
```
Import:
- Fayl yuklash (Markdown, HTML, CSV)
- Zendesk/Intercom/Freshdesk dan import
- Import log: fayllar, holat, xatoliklar
```

#### 16-kb-custom-domain.html:
```
Custom domen:
- DNS sozlamalari: CNAME record
- SSL sertifikat holati
- Domen nomi input
- Tekshirish tugmasi
```

#### 17-kb-seo.html:
```
SEO sozlamalari:
- Meta title va description shablonlari
- Sitemap.xml generatsiya toggle
- Robots.txt tahrirlash
- Open Graph rasmlar sozlash
```

#### 18-kb-widget-link.html:
```
Widget bog'lanish:
- Chat widget ichida KB qidiruvni yoqish/o'chirish
- Qaysi kategoriyalar widget'da ko'rinadi
- Avtomatik maqola tavsiya sozlamasi
- Widget ichida ko'rinadigan maqolalar preview
```

---

## ═══════════════════════════════════════════
## BO'LIM 16: ADDONS (16-addons/)
## ═══════════════════════════════════════════

**Fayllar:** 01-addons-catalog.html, 02-active-addons.html, 03-addon-detail.html, 04-addon-settings.html, 05-developer-sdk.html, 06-submit-app.html, 07-app-reviews.html

**Tur:** Shell (`data-active-nav="addons"`)
**JS:** shell.js + runtime.js + addons-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Add-ons sahifalari">
  <a class="tab" href="./01-addons-catalog.html">Katalog</a>
  <a class="tab" href="./02-active-addons.html">Faol qo'shimchalar</a>
  <a class="tab" href="./03-addon-detail.html">Batafsil</a>
  <a class="tab" href="./04-addon-settings.html">Sozlamalar</a>
  <a class="tab" href="./05-developer-sdk.html">Developer SDK</a>
  <a class="tab" href="./06-submit-app.html">Ilova yuborish</a>
  <a class="tab" href="./07-app-reviews.html">Sharhlar</a>
</nav>
```

### [IMAGES] — Addon ikonkalari:
```html
<!-- Har bir addon card uchun -->
<div class="addon-icon" style="width:48px;height:48px;border-radius:12px;background:var(--primary-light);display:grid;place-items:center;">
  <i data-lucide="puzzle" style="color:var(--primary);"></i>
</div>
```

### [LINKS]:
- Addon kartochkasi → `./03-addon-detail.html`
- "Sozlash" → `./04-addon-settings.html`
- "SDK docs" → `../17-developer/01-api-keys.html`
- "Ilova yuborish" → `./06-submit-app.html`

---

## ═══════════════════════════════════════════
## BO'LIM 17: DEVELOPER (17-developer/)
## ═══════════════════════════════════════════

**Fayllar:** 01-api-keys.html, 02-webhooks.html, 03-logs.html, 04-api-usage.html, 05-sandbox.html

**Tur:** Shell (`data-active-nav="developer"`)
**JS:** shell.js + runtime.js + developer-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Developer sahifalari">
  <a class="tab" href="./01-api-keys.html">API kalitlari</a>
  <a class="tab" href="./02-webhooks.html">Webhooklar</a>
  <a class="tab" href="./03-logs.html">Loglar</a>
  <a class="tab" href="./04-api-usage.html">API foydalanish</a>
  <a class="tab" href="./05-sandbox.html">Sandbox</a>
</nav>
```

### [CHARTS] — 04-api-usage.html:
```
- API chaqiruvlar soni (kunlik bar chart)
- Rate limit usage (progress bar)
- Endpoint bo'yicha taqsimot (jadval)
- Error rate trend (line chart, qizil rang)
```

### [LINKS]:
- "Add-ons SDK" → `../16-addons/05-developer-sdk.html`
- API key nusxalash → `data-action="copy"`
- Webhook test → `data-action="save"` + toast notification

---

## ═══════════════════════════════════════════
## BO'LIM 18: SYSTEM (18-system/)
## ═══════════════════════════════════════════

**Fayllar:** 01-error-404.html, 02-error-500.html, 03-error-403.html, 04-maintenance.html, 05-offline.html

**Tur:** Standalone (shell yo'q, `.system-page`)
**CSS:** qulay-chat-design-system.css + system-pages.css

### [LINKS] — Barcha 5 sahifada:
```html
<div class="system-actions">
  <a class="btn btn-primary" href="../index.html">
    <i data-lucide="home"></i> Bosh sahifa
  </a>
  <a class="btn btn-secondary" href="../04-dashboard/01-dashboard.html">
    <i data-lucide="layout-dashboard"></i> Dashboard
  </a>
  <button class="btn btn-ghost" type="button" data-system-back>
    <i data-lucide="arrow-left"></i> Orqaga
  </button>
  <a class="btn btn-ghost" href="../21-help-support/03-submit-ticket.html">
    <i data-lucide="help-circle"></i> Muammo haqida xabar berish
  </a>
</div>
```

### [IMAGES]:
Har bir error sahifada kattaroq, rang-barang illustration:
```
01-error-404: Yo'qolgan sahifa — compass icon, "Sahifa topilmadi" 
02-error-500: Server xatosi — server icon, "Tizim xatosi"
03-error-403: Kirish taqiqlangan — shield icon, "Ruxsat yo'q"
04-maintenance: Texnik ishlar — wrench icon, "Texnik xizmat"
05-offline: Internet yo'q — wifi-off icon, "Internet aloqasi yo'q"
```

---

## ═══════════════════════════════════════════
## BO'LIM 19: GLOBAL SEARCH (19-global-search/)
## ═══════════════════════════════════════════

**Fayllar:** 01-search-modal.html, 02-search-results.html

**Tur:** Shell (`data-active-nav="global-search"`)
**JS:** shell.js + runtime.js + global-search.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Search sahifalari">
  <a class="tab" href="./01-search-modal.html">Qidiruv modal</a>
  <a class="tab" href="./02-search-results.html">Natijalar</a>
</nav>
```

### [LINKS] — Qidiruv natijalarida:
```html
<!-- Natija turlari bo'yicha havolalar -->
<a href="../05-inbox/02-chat-open.html">Chat: #4521 — Sardor bilan suhbat</a>
<a href="../12-contacts/02-contact-profile.html">Kontakt: Aziza Karimova</a>
<a href="../15-knowledge-base/09-public-article.html">Maqola: Widget o'rnatish yo'riqnomasi</a>
<a href="../09-settings/01-workspace-general.html">Sozlama: Workspace nomi</a>
```

---

## ═══════════════════════════════════════════
## BO'LIM 20: NOTIFICATIONS (20-notifications/)
## ═══════════════════════════════════════════

**Fayllar:** 01-notification-dropdown.html, 02-notification-all.html, 03-notification-preferences.html

**Tur:** Shell (`data-active-nav="notifications"`)
**JS:** shell.js + runtime.js + notification-interactions.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Notification sahifalari">
  <a class="tab" href="./01-notification-dropdown.html">Tezkor ko'rinish</a>
  <a class="tab" href="./02-notification-all.html">Barcha bildirishnomalar</a>
  <a class="tab" href="./03-notification-preferences.html">Sozlamalar</a>
</nav>
```

### [LINKS] — Notification elementlarida:
```html
<!-- Har bir notification tegishli sahifaga olib borsin -->
<a href="../05-inbox/02-chat-open.html">Yangi xabar: Aziza Karimova — "Mahsulot haqida..."</a>
<a href="../07-team/02-agent-profile.html">Yangi agent qo'shildi: Bobur T.</a>
<a href="../10-billing/01-plan.html">To'lov muddati yaqinlashmoqda</a>
<a href="../08-analytics/01-overview.html">Haftalik hisobot tayyor</a>
```

---

## ═══════════════════════════════════════════
## BO'LIM 21: HELP SUPPORT (21-help-support/)
## ═══════════════════════════════════════════

**Fayllar:** 01-help-center.html, 02-video-tutorials.html, 03-submit-ticket.html, 04-my-tickets.html, 05-contextual-help.html

**Tur:** Shell (`data-active-nav="help-support"`)
**JS:** shell.js + runtime.js + help-support.js

### ⚠️ MUAMMO: 02-05 fayllarida `data-active-nav="dashboard"` ishlatilgan — `"help-support"` bo'lishi kerak!

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Help sahifalari">
  <a class="tab" href="./01-help-center.html">Yordam markazi</a>
  <a class="tab" href="./02-video-tutorials.html">Video darsliklar</a>
  <a class="tab" href="./03-submit-ticket.html">Ticket yuborish</a>
  <a class="tab" href="./04-my-tickets.html">Mening ticketlarim</a>
  <a class="tab" href="./05-contextual-help.html">Kontekst yordam</a>
</nav>
```

### ⚠️ MUAMMO: 02-video-tutorials.html da lucide CDN script yo'q — qo'shilsin.

### [IMAGES] — Video tutorials (02-video-tutorials.html):
**YouTube video embed'lar:**
```html
<div class="video-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;">
  <div class="card">
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Qulay Chat - Boshlash" 
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" 
              allowfullscreen></iframe>
    </div>
    <h4 style="margin-top:8px;">Qulay Chat bilan ishlashni boshlash</h4>
    <p class="text-muted" style="font-size:13px;">5:32 • Boshlash uchun asosiy qadamlar</p>
  </div>
  <div class="card">
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Inbox bilan ishlash" 
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" 
              allowfullscreen></iframe>
    </div>
    <h4 style="margin-top:8px;">Inbox bilan ishlash</h4>
    <p class="text-muted" style="font-size:13px;">8:15 • Chatlarni boshqarish</p>
  </div>
  <div class="card">
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Chatbot yaratish" 
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" 
              allowfullscreen></iframe>
    </div>
    <h4 style="margin-top:8px;">Chatbot yaratish</h4>
    <p class="text-muted" style="font-size:13px;">12:40 • Visual builder bilan</p>
  </div>
  <div class="card">
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
      <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Analytics" 
              allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" 
              allowfullscreen></iframe>
    </div>
    <h4 style="margin-top:8px;">Analytics va hisobotlar</h4>
    <p class="text-muted" style="font-size:13px;">7:20 • KPI monitoring</p>
  </div>
</div>
```

> **Eslatma:** YouTube `embed` URL lardagi `dQw4w9WgXcQ` placeholder video ID sifatida ishlatilgan. Real video ID larga almashtirilishi kerak.

### [LINKS]:
- "KB qidirish" → `../15-knowledge-base/06-public-home.html`
- "Ticket yuborish" → `./03-submit-ticket.html`
- Ticket statusini ko'rish → `./04-my-tickets.html`

---

## ═══════════════════════════════════════════
## BO'LIM 22: EMAIL TEMPLATES (22-email-templates/)
## ═══════════════════════════════════════════

**Fayllar:** 01-templates-list.html, 02-template-editor.html, 03-template-preview.html, 04-template-settings.html

**Tur:** Shell (`data-active-nav="email-templates"`)
**JS:** shell.js + runtime.js + email-templates.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Email Templates sahifalari">
  <a class="tab" href="./01-templates-list.html">Shablonlar</a>
  <a class="tab" href="./02-template-editor.html">Editor</a>
  <a class="tab" href="./03-template-preview.html">Ko'rish</a>
  <a class="tab" href="./04-template-settings.html">SMTP sozlamalari</a>
</nav>
```

### [LINKS]:
- Template nomi → `./02-template-editor.html`
- "Ko'rib chiqish" → `./03-template-preview.html`
- "SMTP sozlamalari" → `./04-template-settings.html`

---

## ═══════════════════════════════════════════
## BO'LIM 23: MULTI-LANGUAGE (23-multi-language/)
## ═══════════════════════════════════════════

**Fayllar:** 01-language-settings.html, 02-translation-manager.html, 03-widget-language.html

**Tur:** Shell (`data-active-nav="multi-language"`)
**JS:** shell.js + runtime.js + multi-language.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Multi-language sahifalari">
  <a class="tab" href="./01-language-settings.html">Til sozlamalari</a>
  <a class="tab" href="./02-translation-manager.html">Tarjima boshqaruvi</a>
  <a class="tab" href="./03-widget-language.html">Widget tili</a>
</nav>
```

### [LINKS]:
- "Widget sozlamalari" → `../09-settings/02-widget-settings.html`
- "KB ko'p tilli" → `../15-knowledge-base/11-kb-multilingual.html`

---

## ═══════════════════════════════════════════
## BO'LIM 24: GDPR COMPLIANCE (24-gdpr-compliance/)
## ═══════════════════════════════════════════

**Fayllar:** 01-data-overview.html, 02-consent-management.html, 03-data-retention.html, 04-audit-log.html

**Tur:** Shell (`data-active-nav="gdpr"`)
**JS:** shell.js + runtime.js + gdpr-compliance.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="GDPR sahifalari">
  <a class="tab" href="./01-data-overview.html">Ma'lumotlar</a>
  <a class="tab" href="./02-consent-management.html">Rozilik boshqaruvi</a>
  <a class="tab" href="./03-data-retention.html">Saqlash muddati</a>
  <a class="tab" href="./04-audit-log.html">Audit log</a>
</nav>
```

### [LINKS]:
- "Privacy settings" → `../09-settings/08-privacy-settings.html`
- "Data export" → `../09-settings/06-privacy-export.html`
- "Data delete" → `../09-settings/07-privacy-delete.html`

---

## ═══════════════════════════════════════════
## BO'LIM 25: DARK MODE (25-dark-mode/)
## ═══════════════════════════════════════════

**Fayllar:** 01-dark-mode-demo.html

**Tur:** Shell (`data-active-nav="dark-mode"`)
**JS:** shell.js + runtime.js + dark-mode.js
**CSS:** qulay-chat-design-system.css + dark-mode.css

### Bu yagona sahifa, subnav kerak emas.

### [BREADCRUMB]:
```html
<nav class="breadcrumbs">
  <a href="../04-dashboard/01-dashboard.html">Dashboard</a>
  <span class="separator">›</span>
  <span class="current">Dark Mode</span>
</nav>
```

### [LINKS]:
- "Sozlamalarga o'tish" → `../09-settings/01-workspace-general.html`

---

## ═══════════════════════════════════════════
## BO'LIM 26: INTEGRATIONS (26-integrations/)
## ═══════════════════════════════════════════

**Fayllar:** 01-channels-overview.html, 02-telegram-setup.html, 03-telegram-settings.html, 04-telegram-test.html, 05-whatsapp-setup.html, 06-whatsapp-templates.html, 07-whatsapp-settings.html, 08-instagram-setup.html, 09-facebook-setup.html, 10-viber-setup.html, 11-email-setup.html, 12-email-settings.html, 13-sms-setup.html, 14-sms-settings.html, 15-bitrix24-setup.html, 16-amocrm-setup.html, 17-zapier-setup.html, 18-custom-webhook.html, 19-integration-logs.html, 20-integration-status.html

**Tur:** Shell (`data-active-nav="integrations"`)
**JS:** shell.js + runtime.js

### ⚠️ STUB FAYLLAR (10-20 — 11 ta stub, 30 qator har biri)

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Integrations sahifalari">
  <a class="tab" href="./01-channels-overview.html">Kanallar</a>
  <a class="tab" href="./02-telegram-setup.html">Telegram</a>
  <a class="tab" href="./03-telegram-settings.html">Telegram soz.</a>
  <a class="tab" href="./04-telegram-test.html">Telegram test</a>
  <a class="tab" href="./05-whatsapp-setup.html">WhatsApp</a>
  <a class="tab" href="./06-whatsapp-templates.html">WA shablonlar</a>
  <a class="tab" href="./07-whatsapp-settings.html">WA sozlamalar</a>
  <a class="tab" href="./08-instagram-setup.html">Instagram</a>
  <a class="tab" href="./09-facebook-setup.html">Facebook</a>
  <a class="tab" href="./10-viber-setup.html">Viber</a>
  <a class="tab" href="./11-email-setup.html">Email</a>
  <a class="tab" href="./12-email-settings.html">Email soz.</a>
  <a class="tab" href="./13-sms-setup.html">SMS</a>
  <a class="tab" href="./14-sms-settings.html">SMS soz.</a>
  <a class="tab" href="./15-bitrix24-setup.html">Bitrix24</a>
  <a class="tab" href="./16-amocrm-setup.html">amoCRM</a>
  <a class="tab" href="./17-zapier-setup.html">Zapier</a>
  <a class="tab" href="./18-custom-webhook.html">Custom webhook</a>
  <a class="tab" href="./19-integration-logs.html">Loglar</a>
  <a class="tab" href="./20-integration-status.html">Status</a>
</nav>
```

### [IMAGES] — Real logolar HAR BIR integratsiya sahifasida:

```html
<!-- 02-telegram-setup.html -->
<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" 
     alt="Telegram" class="integration-logo-img" style="width:48px;height:48px;">

<!-- 05-whatsapp-setup.html -->
<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
     alt="WhatsApp" class="integration-logo-img" style="width:48px;height:48px;">

<!-- 08-instagram-setup.html -->
<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
     alt="Instagram" class="integration-logo-img" style="width:48px;height:48px;">

<!-- 09-facebook-setup.html -->
<img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" 
     alt="Facebook" class="integration-logo-img" style="width:48px;height:48px;">

<!-- 10-viber-setup.html -->
<img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Viber_logo.svg" 
     alt="Viber" class="integration-logo-img" style="width:48px;height:48px;">

<!-- 15-bitrix24-setup.html -->
<div class="integration-logo" style="background:#2FC7F7;color:white;font-weight:800;font-size:12px;">B24</div>

<!-- 16-amocrm-setup.html -->
<div class="integration-logo" style="background:#339DC9;color:white;font-weight:800;font-size:12px;">amo</div>

<!-- 17-zapier-setup.html -->
<img src="https://cdn.zapier.com/zapier/images/logos/zapier-logo.png" 
     alt="Zapier" class="integration-logo-img" style="width:48px;height:48px;">
```

### Stub fayllarni to'ldirish uchun promptlar:

#### 10-viber-setup.html:
```
Viber integratsiya setup:
- Bot token kiritish formi
- Webhook URL ko'rsatish (avtomatik)
- "Ulanish" tugmasi
- Status indicator (connected/disconnected)
- Test xabar yuborish
```

#### 11-email-setup.html & 12-email-settings.html:
```
Email kanal setup:
- SMTP konfiguratsiya: Host, Port, Username, Password, Encryption (TLS/SSL)
- IMAP konfiguratsiya: Host, Port, Username, Password
- "Test ulanish" tugmasi
- Forwarding email address (auto-generated)
- Email → ticket conversion sozlamalari
```

#### 13-sms-setup.html & 14-sms-settings.html:
```
SMS gateway setup:
- Provider tanlash (Eskiz, PlayMobile, Custom)
- API key va secret kiritish
- Sender ID sozlamalari
- Test SMS yuborish
- SMS shablonlari
- Charset/encoding sozlamalari
```

#### 15-bitrix24-setup.html:
```
Bitrix24 integratsiya:
- Bitrix24 domen URL kiritish
- OAuth autorizatsiya tugmasi
- Sinxronlash sozlamalari: Kontakt, Deal, Task
- Trigger: Yangi chat → Bitrix24 deal yaratish
- Mapping (Qulay Chat field → Bitrix24 field)
```

#### 16-amocrm-setup.html:
```
amoCRM integratsiya:
- amoCRM domen URL
- API key
- Sinxronlash: Kontakt, Lead, Pipeline
- Auto-create lead on new chat
- Field mapping
```

#### 17-zapier-setup.html:
```
Zapier integratsiya:
- API key ko'rsatish (copy button bilan)
- Mavjud triggers ro'yxati: New chat, Chat closed, New contact
- Mavjud actions: Create contact, Send message, Add tag
- "Zapier'da ochish" external link
- Webhook URL
```

#### 18-custom-webhook.html:
```
Custom webhook:
- Webhook URL kiritish
- Event tanlash (checkbox list): New chat, Chat closed, New message, etc.
- Secret key generatsiya
- Headers sozlamalari
- Request format: JSON
- Test webhook tugmasi
- Oxirgi 10 ta webhook log
```

#### 19-integration-logs.html:
```
Integratsiya loglari:
- Jadval: Vaqt, Kanal, Event, Status (success/error), Response code
- Filtrlash: Kanal, Status, Sana
- Error details modal
- Retry tugmasi
```

#### 20-integration-status.html:
```
Integratsiya holatlari:
- Barcha kanallar ro'yxati: Nomi, Status (🟢 active / 🔴 error / ⚪ disabled)
- Oxirgi sync vaqti
- "Refresh" tugmasi
- Health check history (oxirgi 24 soat)
```

---

## ═══════════════════════════════════════════
## BO'LIM 27: PAYMENTS (27-payments/)
## ═══════════════════════════════════════════

**Fayllar:** 01-payment-overview.html, 02-payme-setup.html, 03-click-setup.html, 04-uzum-setup.html, 05-stripe-setup.html, 06-bank-transfer.html, 07-payment-test.html, 08-payment-logs.html

**Tur:** Shell (`data-active-nav="payments"`)

### ⚠️ MUAMMO: `data-active-nav="billing"` ishlatilmoqda — `"payments"` ga o'zgartirilsin (10-billing bilan collision bor)!

Yoki shell.js dagi NAV_SECTIONS_BY_ROLE da `payments` key qo'shilsin va davom etilsin.

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Payments sahifalari">
  <a class="tab" href="./01-payment-overview.html">Umumiy</a>
  <a class="tab" href="./02-payme-setup.html">Payme</a>
  <a class="tab" href="./03-click-setup.html">Click</a>
  <a class="tab" href="./04-uzum-setup.html">Uzum Bank</a>
  <a class="tab" href="./05-stripe-setup.html">Stripe</a>
  <a class="tab" href="./06-bank-transfer.html">Bank o'tkazma</a>
  <a class="tab" href="./07-payment-test.html">Test to'lov</a>
  <a class="tab" href="./08-payment-logs.html">To'lov loglari</a>
</nav>
```

### [IMAGES] — REAL TO'LOV TIZIMI LOGOLARI:

```html
<!-- 02-payme-setup.html -->
<div class="payment-brand" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
  <div style="width:64px;height:64px;border-radius:16px;background:#00CCCC;display:grid;place-items:center;">
    <span style="color:white;font-weight:900;font-size:16px;letter-spacing:1px;">payme</span>
  </div>
  <div>
    <h2>Payme integratsiya</h2>
    <p class="text-muted">O'zbekistonning eng mashhur to'lov tizimi</p>
  </div>
</div>
<!-- yoki img: -->
<img src="https://cdn.payme.uz/logo/payme-logo.svg" alt="Payme" style="height:40px;">
```

```html
<!-- 03-click-setup.html -->
<div class="payment-brand" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
  <div style="width:64px;height:64px;border-radius:16px;background:#0050B3;display:grid;place-items:center;">
    <span style="color:white;font-weight:900;font-size:14px;">CLICK</span>
  </div>
  <div>
    <h2>Click integratsiya</h2>
    <p class="text-muted">Click to'lov tizimini ulash</p>
  </div>
</div>
```

```html
<!-- 04-uzum-setup.html -->
<div class="payment-brand" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
  <div style="width:64px;height:64px;border-radius:16px;background:#7B2FF7;display:grid;place-items:center;">
    <span style="color:white;font-weight:900;font-size:14px;">UZUM</span>
  </div>
  <div>
    <h2>Uzum Bank integratsiya</h2>
    <p class="text-muted">Uzum Bank to'lov tizimi</p>
  </div>
</div>
```

```html
<!-- 05-stripe-setup.html -->
<div class="payment-brand" style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
       alt="Stripe" style="height:36px;">
  <div>
    <h2>Stripe integratsiya</h2>
    <p class="text-muted">Xalqaro kartalar uchun</p>
  </div>
</div>
```

### Har bir to'lov tizimi setup sahifasida:
```html
<!-- Umumiy form strukturasi -->
<div class="card">
  <h3>API sozlamalari</h3>
  <div class="form-grid">
    <div class="form-group">
      <label>Merchant ID</label>
      <input class="input" type="text" placeholder="XXXXXXXXX">
    </div>
    <div class="form-group">
      <label>Secret Key</label>
      <div class="input-group">
        <input class="input" type="password" placeholder="••••••••">
        <button class="btn btn-ghost btn-sm" data-action="copy" data-target="input[type=password]">
          <i data-lucide="copy"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label>Callback URL</label>
    <div class="input-group">
      <input class="input" readonly value="https://api.qulaychat.uz/payments/callback">
      <button class="btn btn-ghost btn-sm" data-action="copy">
        <i data-lucide="copy"></i> Nusxalash
      </button>
    </div>
  </div>
  <div style="margin-top:12px;display:flex;gap:8px;">
    <button class="btn btn-primary" data-action="save">
      <i data-lucide="save"></i> Saqlash
    </button>
    <a class="btn btn-ghost" href="./07-payment-test.html">
      <i data-lucide="play"></i> Test to'lov
    </a>
  </div>
</div>
```

### [LINKS]:
- "Billing sahifasi" → `../10-billing/01-plan.html`
- "Test to'lov" → `./07-payment-test.html`
- "Loglar" → `./08-payment-logs.html`

---

## ═══════════════════════════════════════════
## BO'LIM 28: MOBILE AGENT (28-mobile-agent/)
## ═══════════════════════════════════════════

**Fayllar:** 01-mobile-inbox.html, 02-mobile-chat.html, 03-mobile-notifications.html, 04-mobile-status.html, 05-mobile-settings.html

**Tur:** Shell (`data-active-nav="mobile-agent"`)
**JS:** shell.js + runtime.js

### [SUBNAV]:
```html
<nav class="subnav-tabs" aria-label="Mobile Agent sahifalari">
  <a class="tab" href="./01-mobile-inbox.html">Mobile Inbox</a>
  <a class="tab" href="./02-mobile-chat.html">Mobile Chat</a>
  <a class="tab" href="./03-mobile-notifications.html">Bildirishnomalar</a>
  <a class="tab" href="./04-mobile-status.html">Status</a>
  <a class="tab" href="./05-mobile-settings.html">Sozlamalar</a>
</nav>
```

### [IMAGES] — Mobil telefon simulyatsiyasi:
```html
<!-- Har bir sahifada mobil telefon frame -->
<div class="phone-frame" style="max-width:375px;margin:0 auto;border:3px solid var(--gray-800);border-radius:36px;overflow:hidden;box-shadow:0 20px 40px rgba(0,0,0,0.15);">
  <!-- Status bar -->
  <div style="height:44px;background:var(--gray-800);color:white;display:flex;align-items:center;justify-content:space-between;padding:0 16px;font-size:12px;">
    <span>9:41</span>
    <span style="display:flex;gap:4px;">
      <i data-lucide="signal" style="width:14px;height:14px;"></i>
      <i data-lucide="wifi" style="width:14px;height:14px;"></i>
      <i data-lucide="battery" style="width:14px;height:14px;"></i>
    </span>
  </div>
  <!-- Content -->
  <div style="background:white;min-height:600px;">
    <!-- Sahifa kontenti shu yerda -->
  </div>
  <!-- Home indicator -->
  <div style="height:34px;background:white;display:grid;place-items:center;">
    <div style="width:134px;height:5px;background:var(--gray-800);border-radius:99px;"></div>
  </div>
</div>
```

### [LINKS]:
- "Desktop versiya" → `../05-inbox/01-inbox-chat.html`
- "Sozlamalar" → `../09-settings/05-profile.html`
- "Notifications" → `../20-notifications/01-notification-dropdown.html`

---

## ═══════════════════════════════════════════
## UMUMIY TEKSHIRUV RO'YXATI (BARCHA BO'LIMLAR UCHUN)
## ═══════════════════════════════════════════

Har bir bo'limni tugatgandan keyin TEKSHIR:

- [ ] Barcha sahifalarda **subnav-tabs** bor (bo'lim ichidagi barcha sahifalarga havolalar)
- [ ] Joriy sahifada tab `active` class bilan belgilangan
- [ ] **Breadcrumbs** mavjud (Dashboard → Bo'lim → Sahifa)
- [ ] **Prev/Next** navigatsiya sahifa oxirida
- [ ] **`data-active-nav`** to'g'ri kalitga o'rnatilgan
- [ ] **`data-shell-role="admin"`** mavjud
- [ ] Barcha **havolalar** to'g'ri va ishlaydigan (`./` va `../` relative path'lar)
- [ ] Agent rol uchun **cheklash** qo'yilgan (kerak bo'lsa)
- [ ] **Rasmlar** va **logolar** real URL bilan qo'yilgan
- [ ] **Chart/diagrammalar** CSS orqali yaratilgan (analytics sahifalarida)
- [ ] **Lucide ikonlar** to'g'ri nom bilan ishlatilgan
- [ ] **Title** tegi to'g'ri: "[Sahifa] — QULAY CHAT"
- [ ] **Form tugmalari** `data-action="save"` yoki `data-auto-submit` bilan ishlaydi
- [ ] **Copy tugmalari** `data-action="copy"` bilan ishlaydi
- [ ] Stub fayllar to'liq qayta yozilgan

---

## ═══════════════════════════════════════════
## XULOSA: BUGLAR VA TUZATISHLAR UMUMIY RO'YXATI
## ═══════════════════════════════════════════

### Singan havolalar:
1. `03-onboarding/07-09` — subnav tablar noto'g'ri fayl nomlariga ishora qilmoqda
2. `index.html` — `09-settings/01-workspace.html` → `01-workspace-general.html` bo'lishi kerak
3. `index.html` — 26, 27, 28 bo'limlar yo'q

### Nav key muammolar:
4. `21-help-support/02-05` — `data-active-nav="dashboard"` o'rniga `"help-support"` bo'lishi kerak
5. `27-payments/*` — `data-active-nav="billing"` o'rniga `"payments"` bo'lishi kerak

### Yo'qolgan resurslar:
6. `21-help-support/02-video-tutorials.html` — lucide CDN script yo'q

### Stub fayllar (qayta yozish kerak — 49 ta):
7. `06-automation/08-18` — 11 ta stub (73 qator)
8. `09-settings/09-18` — 10 ta stub (40 qator)
9. `10-billing/05-12` — 8 ta stub (40 qator)
10. `15-knowledge-base/10-18` — 9 ta stub (40 qator)
11. `26-integrations/10-20` — 11 ta stub (30 qator)

### CSS muammolar:
12. `qulay-chat-pages.css` va `qulay-chat-design-system.css` orasidagi rang ziddiyatlari

### O'chirilishi/birlashtirilishi kerak:
13. `04-dashboard/DASHBOARD-PAGES-PLAN.md` — o'chirilsin
14. `assets/production-look.css` — design-system ga birlashtirilsin
15. `09-settings/01-workspace.html` — `01-workspace-general.html` bilan birlashtirilsin

### shell.js ga qo'shilishi kerak:
16. `currentSectionName()` ga 11 ta yangi bo'lim nomi qo'shilsin

### Yaratilishi kerak yangi fayllar:
17. `assets/qulay-chat-charts.css` — chart/diagramma stillari
18. `assets/qulay-chat-navigation.js` — auto subnav highlight

---

> **Tayyor!** Shu 2 ta prompt (PROMPT-1-UMUMIY.md + PROMPT-2-BATAFSIL.md) ni AI agentga yuboring. Avval PROMPT-1 ni, keyin PROMPT-2 ni bo'lib-bo'lib (har bir bo'limni alohida) yuborish tavsiya etiladi.
