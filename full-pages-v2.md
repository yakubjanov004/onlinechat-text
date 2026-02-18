# CHATFLOW — Full Pages V2 (18 Papka · 3 Rol · Sidebar Sinxronlashtirilgan)

> **Versiya:** 2.1 | **Sana:** 2026-02-18
> **Maqsad:** 18 papka uchun barcha HTML sahifalar, Figma JS fayllar, **3 rol variant** (Admin, Agent, Client) va **sidebar sinxronizatsiyasi** standartlashtirilgan holda.

---

## 🔐 ROLLAR TAQSIMI

| Rol | Tavsif | Dashboard Access | Widget Access | Settings |
|-----|--------|-----------------|---------------|----------|
| **🔴 Admin** | Tizim boshqaruvchisi | ✅ Barcha (66 page) | ✅ Sozlash | Admin settings (Workspace, Billing, Users) |
| **💼 Agent** | Operatorlar va suport | ✅ 18 page (Inbox, Contacts, Analytics, my-stats) | ✅ Ishlatish | Faqat profil + password |
| **👤 Client** | Foydalanuvchi/Visitor | ❌ Dashboard yo'q | ✅ Chat + CSAT | Minimal (profil, language, theme) |

---

## � DASHBOARD MODULELAR — ROL ACCESS MATRIX

> Quyidagi jadval har bir dashboard modulining Admin, Agent, Client uchun mavjud bo'lishini ko'rsatadi.

| Modul | Sidebar Item | Admin | Agent (Operator) | Client | Sahifalar soni |
|-------|--------------|-------|-----------------|--------|-----------------|
| Inbox | 📥 Inbox | ✅ Full | ✅ Limited | ❌ | 3 |
| Contacts | 👥 Kontaktlar | ✅ Full | ✅ Limited | ❌ | 6 |
| Visitors | 👁 Online | ✅ Full | ✅ Limited | ❌ | 3 |
| Automation | ⚡ Automation | ✅ Full | ❌ | ❌ | 4 |
| Team | 👤 Team | ✅ Full | ❌ | ❌ | 4 |
| Team Chat | 💬 Team Chat | ✅ Full | ✅ Full | ❌ | 3 |
| Analytics | 📊 Analytics | ✅ Full | ✅ My Stats only | ❌ | 11 |
| Knowledge Base | 📚 Knowledge Base | ✅ Full | ✅ View/Search | ❌ | 5 |
| Settings | ⚙️ Settings | ✅ Full (8 tabs) | ✅ Limited (2 tabs) | ✅ Widget (3 tabs) | 8 |
| Billing | 💳 Billing | ✅ Full | ❌ | ❌ | 4 |
| Add-ons | 🧩 Add-ons | ✅ Full | ❌ | ❌ | 4 |
| Developer | 🖥 Developer | ✅ Full | ❌ | ❌ | 3 |
| **Total Dashboard Pages** | — | **66** | **18** | **0** | — |

### Role Details

**🔴 ADMIN (Full Access)**
- Barcha dashboard modules
- 66 ta sahifa (sidebar: 14 item)
- Full analytics, users, billing, settings
- Workspace configuration

**💼 AGENT / OPERATOR (Limited Access)**
- Sidebar: 6 item (Inbox, Contacts, Visitors, Team Chat, Analytics→My Stats, KB)
- 18 ta sahifa
- Chatlar: faqat o'z assigned chatlari
- Analytics: faqat personal statistics
- Settings: faqat profil (password, language, theme)

**👤 CLIENT (Minimal Access)**
- Sidebar: ❌ Yo'q (dashboard kirisa olmaydi)
- Widget ichida: Chat, Offline form, CSAT survey
- Settings: Widget sozlamalari (minimal)
- Profile: Registered clientlar uchun

---

> **Bu sidebar barcha 04-dashboard ichidagi sahifalar va 05–17 standalone sahifalarda bir xil ko'rinadi.**
> Faqat `active` holat papkaga qarab o'zgaradi — qolgan hamma narsa bir xil.

### Sidebar Tuzilishi (240px kenglikda)

```
┌──────────────────────────────┐
│  🟣 CHATFLOW (Logo)          │  ← Logo click → Inbox
│                              │
│  ─── ASOSIY ───────────────  │
│  📥 Inbox           [12]     │  ← Badge: unread count (qizil)
│  👥 Kontaktlar               │
│  👁 Online Visitors  [5]     │  ← Badge: live count (yashil)
│  ⚡ Automation                │
│  👤 Team                     │
│  💬 Team Chat        [3]     │  ← Badge: unread (ko'k)
│  📊 Analytics                │
│  📚 Knowledge Base           │
│                              │
│  ─── SOZLAMALAR ───────────  │
│  ⚙️ Settings                  │
│  💳 Billing                  │
│  🧩 Add-ons                  │
│  🖥 Developer                │
│                              │
│  ─── QO'SHIMCHA ───────────  │
│  📄 Docs         (↗ tashqi)  │
│  ❓ Support                   │
│                              │
│  ─── PASTKI ───────────────  │
│  🟢 Sardor A. (Online)       │  ← User avatar + status
│  ▾ collapse                  │  ← Sidebar kichiklashtirish
└──────────────────────────────┘
```

### Sidebar Active Holatlari (Papka bo'yicha)

| Papka | Sidebar Active Item | Active Stil |
|-------|--------------------|-------------|
| 04-dashboard (root) | — (yoki Dashboard yopiq) | Dashboard overview alohida |
| 05-inbox / inbox/ | **📥 Inbox** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 12-contacts / contacts/ | **👥 Kontaktlar** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 13-visitors / visitors/ | **👁 Online Visitors** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 06-automation / automation/ | **⚡ Automation** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 07-team / team/ | **👤 Team** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 14-team-chat / team-chat/ | **💬 Team Chat** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 08-analytics / analytics/ | **📊 Analytics** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 15-knowledge-base / knowledge-base/ | **📚 Knowledge Base** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 09-settings / settings/ | **⚙️ Settings** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 10-billing / billing/ | **💳 Billing** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 16-addons / addons/ | **🧩 Add-ons** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |
| 17-developer / developer/ | **🖥 Developer** | bg `#E0E7FF`, text `#4F46E5`, left-border 3px |

### Sidebar CSS Dizayn Tokenlari

```css
/* Sidebar */
--sidebar-width: 240px;
--sidebar-collapsed: 64px;
--sidebar-bg: #FFFFFF;
--sidebar-border: 1px solid #E5E7EB;

/* Menu Item States */
--item-height: 44px;
--item-radius: 8px;
--item-padding: 0 12px;
--item-font: 500 14px/20px 'Inter';
--item-gap: 12px; /* icon-text gap */
--item-icon-size: 20px;

/* Default */
--item-default-bg: transparent;
--item-default-text: #374151;
--item-default-icon: #6B7280;

/* Hover */
--item-hover-bg: #F3F4F6;
--item-hover-text: #111827;

/* Active */
--item-active-bg: #E0E7FF;
--item-active-text: #4F46E5;
--item-active-icon: #4F46E5;
--item-active-border: 3px solid #4F46E5; /* left */

/* Badges */
--badge-error: #EF4444;   /* Inbox unread */
--badge-success: #10B981; /* Online visitors */
--badge-primary: #6366F1; /* Team chat */

/* Transition */
--sidebar-transition: 200ms ease;
--item-transition: 150ms ease;
```

---

## 📐 UMUMIY HEADER STANDARTI (BARCHA DASHBOARD SAHIFALARI UCHUN)

```
┌─────────────────────────────────────────────────────────────────┐
│ 🟣 Logo │ 🔍 Qidiruv (Ctrl+K)     │ 🟢 Online ▾ │ 🔔 [3] │ 👤 ▾ │
│          │ [320-480px]              │  Status      │  Bell   │ Menu │
└─────────────────────────────────────────────────────────────────┘
Height: 64px | bg: #FFFFFF | border-bottom: 1px #E5E7EB
```

**Header elementlari:**
- Logo → Inbox ga o'tish
- Search → Ctrl+K global search modal
- Status toggle: Online / Away / Busy
- Bell → Notification center dropdown (420px)
- User menu → Settings, Profile, Help, Language, Logout

---

# ═══════════════════════════════════════════════════════════════
# 18 PAPKA — BATAFSIL SAHIFALAR RO'YXATI
# ═══════════════════════════════════════════════════════════════

---

## 📂 01-landing/ — Landing Page

> **Turi:** Public sahifa (login/sidebar yo'q)
> **Sidebar:** ❌ Yo'q — bu public landing page
> **Layout:** Full-width, bitta uzun scroll sahifa
> **Figma docs:** 02, 03, 04, 05, 06

### Sahifalar

| # | Fayl nomi | Maqsad |
|---|-----------|--------|
| 1 | **01-landing.html** | To'liq landing page (bitta scroll sahifa) |

### 01-landing.html — Tarkibi

```
📌 HEADER (sticky, 72px, white, shadow-sm)
├── Logo (CHATFLOW)
├── Nav: Imkoniyatlar | Integratsiyalar | Tariflar | Haqimizda | Bog'lanish
├── "Kirish" (ghost button) → 02-auth/01-login.html
└── "Boshlash" (primary button) → 02-auth/02-register.html

🟣 HERO SECTION (h: 600px, gradient bg)
├── H1: "Mijozlaringiz bilan real-time aloqa"
├── Subtitle: Platform tavsifi
├── "Bepul boshlash" (primary, xl) → 02-auth/02-register.html
├── "Demo so'rash" (outlined) → contact form modal
└── Screenshot mockup (dashboard preview)

🤝 TRUST SECTION (bg: white)
├── "Kim qo'llanmoqda?" sarlavha
├── Company Logos row (6-8 ta logo)
└── Statistikalar: 1000+ users | 50+ companies | 99.9% uptime

⚙️ QANDAY ISHLAYDI (bg: gray-50)
├── 3 ta step card:
│   ├── 1️⃣ O'rnating — Widget kodni saytga qo'ying
│   ├── 2️⃣ Ulaning — Telegram, WhatsApp, email ulang
│   └── 3️⃣ Javob bering — Real-time yoki bot orqali

✨ IMKONIYATLAR (bg: white)
├── 6 ta feature card (2x3 grid):
│   ├── 💬 Live Chat — Tezkor chat
│   ├── 🤖 Chatbot — Avtomatik javoblar
│   ├── 📊 Analytics — Hisobotlar
│   ├── 👥 Team — Jamoa boshqaruvi
│   ├── 📚 Knowledge Base — Bilim bazasi
│   └── 🔌 Integrations — Telegram, WhatsApp, ...

🔗 INTEGRATSIYALAR (bg: gray-50)
├── Channel icons (katta, hover animatsiya):
│   ├── Telegram | WhatsApp | Instagram | Facebook | Email
└── "Barcha integratsiyalar" → #imkoniyatlar

⚡ AFZALLIKLAR (bg: white)
├── "Nega aynan biz?" sarlavha
├── Solishtiruv: ChatFlow vs Raqobatchilar (table yoki cards)

💰 TARIFLAR (bg: gray-50)
├── 4 ta plan card:
│   ├── Free ($0/oy) — 1 agent, 100 chat/oy
│   ├── Pro ($49/oy) — 5 agent, cheksiz chat ⭐ MASHHUR
│   ├── Business ($99/oy) — 20 agent, API, analitika
│   └── Enterprise (Custom) — cheksiz, SLA, dedicated
├── Har birida "Tanlash" → 02-auth/02-register.html

🎯 FINAL CTA (bg: primary gradient)
├── "Hoziroq boshlang" katta matn
├── "Bepul sinab ko'ring" (white button) → 02-auth/02-register.html

📌 FOOTER (bg: #111827, text: white)
├── Logo + short description
├── Nav columns: Mahsulot | Kompaniya | Resurslar | Huquqiy
├── Social links: Twitter, LinkedIn, GitHub, Telegram
├── Legal: Privacy Policy | Terms of Service
└── Copyright © 2026 ChatFlow
```

**Jami:** 1 HTML + 1 JS

---

## 📂 02-auth/ — Authentication

> **Turi:** Public sahifalar (login/sidebar yo'q)
> **Sidebar:** ❌ Yo'q — bu auth flow
> **Layout:** Centered card (480px) + right illustration (yoki fullscreen split)
> **Figma docs:** 07-auth-signup-login.md

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | All Roles | Status |
|---|-----------|--------|-----------|--------|
| 1 | **01-login.html** | Kirish (email + password) | ✅ | ✅ HTML + JS |
| 2 | **02-register.html** | Ro'yxatdan o'tish | ✅ | ✅ HTML |
| 3 | **03-email-verify.html** | Email OTP tasdiqlash | ✅ | ✅ HTML |
| 4 | **04-forgot-password.html** | Parolni tiklash | ✅ | ✅ HTML |
| 5 | **05-welcome-first-login.html** | Xush kelibsiz + yo'nalish | ✅ | ✅ HTML + JS |

> **Rolle:** Auth sahifalari barcha rollar uchun (Admin, Agent, Client). Ro'yxatdan o'tishdan keyin rol tayinlanadi va appropriate dashboard-ga yo'naltirish.

### 01-login.html — Tarkibi

```
🖼 Layout: 50/50 split (chap: form, o'ng: illustration)

📋 LOGIN FORM (max-width: 400px, centered)
├── Logo (CHATFLOW)
├── H2: "Hisobingizga kiring"
├── Subtitle: "Davom etish uchun ma'lumotlaringizni kiriting"
│
├── 🔘 OAuth buttons:
│   ├── "Google bilan kirish" (icon + text, full-width)
│   └── "GitHub bilan kirish" (icon + text, full-width)
│
├── ─── YOKI ─── (divider)
│
├── 📧 Email input (label + placeholder + validation)
├── 🔒 Password input (label + eye toggle + validation)
├── ☑️ "Meni eslab qol" checkbox + "Parolni unutdingizmi?" link → 04-forgot-password.html
│
├── ✅ "Kirish" button (primary, full-width, loading state)
│   ├── Mavjud user → 04-dashboard/01-dashboard.html
│   └── Yangi user (birinchi marta) → 03-onboarding/01-welcome.html
│
└── "Hisobingiz yo'qmi? Ro'yxatdan o'ting" → 02-register.html
```

### 02-register.html — Tarkibi

```
📋 REGISTER FORM (max-width: 400px)
├── Logo
├── H2: "Bepul hisob yarating"
│
├── 🔘 OAuth buttons (Google, GitHub)
├── ─── YOKI ───
│
├── 👤 To'liq ism input
├── 📧 Email input
├── 🏢 Kompaniya nomi input
├── 🔒 Password input (strength indicator: Weak/Medium/Strong)
├── 🔒 Parolni tasdiqlash input
├── ☑️ "Shartlar va maxfiylik siyosatiga roziman" checkbox
│
├── ✅ "Ro'yxatdan o'tish" (primary) → 03-email-verify.html
└── "Allaqachon hisobim bor? Kirish" → 01-login.html
```

### 03-email-verify.html — Tarkibi

```
📋 VERIFY FORM (max-width: 400px, centered)
├── 📧 Email icon (katta, 64px)
├── H2: "Emailingizni tasdiqlang"
├── Subtitle: "user@example.com ga 6 xonali kod yubordik"
│
├── 🔢 6 ta OTP input box (bir-biriga auto-focus)
│
├── ✅ "Tasdiqlash" (primary) → 05-welcome-first-login.html
├── ⏱ "Qayta yuborish" (timer: 60s cooldown, clickable keyin)
└── "Emailni o'zgartirish" → 02-register.html
```

### 04-forgot-password.html — Tarkibi

```
📋 FORGOT PASSWORD FORM (2 step)

STEP 1: Email kiritish
├── 🔒 Lock icon (64px)
├── H2: "Parolni tiklash"
├── 📧 Email input
├── ✅ "Tiklash havolasini yuborish" (primary)
├── "← Kirish sahifasiga qaytish" → 01-login.html

STEP 2: Yangi parol (email link orqali)
├── H2: "Yangi parol yarating"
├── 🔒 Yangi parol input (strength indicator)
├── 🔒 Parolni tasdiqlash
├── ✅ "Parolni saqlash" → success → 01-login.html
```

### 05-welcome-first-login.html — Tarkibi

```
📋 WELCOME PAGE (centered, max-width: 600px)
├── 🎉 Welcome illustration
├── H1: "Xush kelibsiz, [Ism]!"
├── Subtitle: "ChatFlow ga qo'shilganingizdan xursandmiz"
│
├── 2 ta yo'nalish card:
│   ├── 🚀 "Onboarding boshlash" (primary card)
│   │   └── "5 daqiqada sozlab oling" → 03-onboarding/01-welcome.html
│   └── ⏩ "Dashboardga o'tish" (secondary card)
│       └── "Tour keyinroq" → 04-dashboard/01-dashboard.html
```

**Jami:** 5 HTML + 5 JS

---

## 📂 03-onboarding/ — Onboarding (5 Bosqich Wizard)

> **Turi:** Auth-dan keyin, dashboard-dan oldin
> **Sidebar:** ❌ Yo'q — faqat stepper (1-5 progress)
> **Layout:** Centered card (640px) + progress bar tepada
> **Figma docs:** 08, 09

### Sahifalar

| # | Fayl nomi | Maqsad | Status |
|---|-----------|--------|--------|
| 1 | **01-welcome.html** | Welcome intro (1/5) | ✅ |
| 2 | **02-onboarding-setup.html** | Workspace sozlash (2/5) | ✅ |
| 3 | **03-workspace.html** | Profil sozlash (3/5) | ✅ |
| 4 | **04-widget-customize.html** | Widget dizayni (4/5) | ✅ |
| 5 | **05-widget-install.html** | Widget o'rnatish (5/5) | ✅ |
| 6 | **06-widget-verify.html** | Tekshirish (tugatish) | ✅ |

### 01-welcome.html — Tarkibi

```
📊 PROGRESS BAR: [●○○○○] 1/5

📋 CONTENT (centered, 640px)
├── 🎯 Welcome illustration
├── H1: "ChatFlow-ga xush kelibsiz!"
├── Subtitle: "5 oson qadamda saytingizga chat qo'shing"
│
├── 3 ta benefit card:
│   ├── ⚡ "2 daqiqada o'rnating"
│   ├── 💬 "Real-time chat"
│   └── 📊 "Analytics bepul"
│
├── ✅ "Boshlash →" (primary) → 02-onboarding-setup.html
└── "Keyinroq" (skip) → 04-dashboard/01-dashboard.html
```

### 02-onboarding-setup.html — Tarkibi

```
📊 PROGRESS BAR: [●●○○○] 2/5

📋 WORKSPACE SETUP FORM
├── H2: "Workspace sozlamalari"
├── 🏢 Workspace nomi input
├── 🌍 Timezone select (auto-detect)
├── 🏭 Industry select (12 ta variant)
├── 👥 Jamoa kattaligi select (1-5, 6-20, 21-50, 50+)
│
├── "← Orqaga" → 01-welcome.html
└── "Keyingisi →" (primary) → 03-workspace.html
```

### 03-workspace.html — Tarkibi

```
📊 PROGRESS BAR: [●●●○○] 3/5

📋 PROFILE SETUP
├── H2: "Profilingizni sozlang"
├── 📸 Avatar upload (drag & drop, crop modal)
├── 👤 Display name input
├── 🏷 Rol select (Admin, Manager, Operator)
├── 📱 Telefon raqam input (ixtiyoriy)
│
├── "← Orqaga" → 02-onboarding-setup.html
└── "Keyingisi →" (primary) → 04-widget-customize.html
```

### 04-widget-customize.html — Tarkibi

```
📊 PROGRESS BAR: [●●●●○] 4/5

📋 WIDGET DIZAYN (chap: form, o'ng: preview)
├── H2: "Chat widget dizayni"
│
├── 🎨 Rang tanlash:
│   ├── 8 ta preset rang doira
│   └── Custom color picker (HEX input)
├── ⬜ Shakl: Rounded (16px) / Square (8px)
├── 📍 Pozitsiya: O'ng pastda / Chap pastda / Custom
├── 💬 Welcome message textarea (120 char limit)
├── 🔕 Offline message textarea
│
├── 👁 LIVE PREVIEW (o'ng tomonda, 360×520px widget ko'rinishi)
│
├── "← Orqaga" → 03-workspace.html
└── "Keyingisi →" (primary) → 05-widget-install.html
```

### 05-widget-install.html — Tarkibi

```
📊 PROGRESS BAR: [●●●●●] 5/5

📋 WIDGET O'RNATISH
├── H2: "Widget-ni saytingizga qo'shing"
├── Subtitle: "Quyidagi kodni </body> tagidan oldin joylashtiring"
│
├── 📋 Code snippet block (dark bg, mono font):
│   └── <script src="https://chatflow.uz/widget/xxx.js"></script>
│   └── "📋 Nusxalash" button
│
├── 🔧 Platformalar (tab):
│   ├── HTML | WordPress | Shopify | React | Next.js
│   └── Har biri uchun alohida yo'riqnoma
│
├── "← Orqaga" → 04-widget-customize.html
├── "O'rnatdim ✓" (primary) → 06-widget-verify.html
└── "Keyinroq" (skip, ghost) → 04-dashboard/01-dashboard.html
```

### 06-widget-verify.html — Tarkibi

```
📋 TEKSHIRISH
├── 🔍 Checking animation (spinner)
├── Holat:
│   ├── ⏳ "Tekshirilmoqda..." (loading)
│   ├── ✅ "Widget topildi!" (success, confetti animation)
│   └── ❌ "Widget topilmadi" (error + retry)
│
├── ✅ Success → "Dashboard ga o'tish →" → 04-dashboard/01-dashboard.html
├── ❌ Fail → "Qayta tekshirish" (retry button)
└── "Keyinroq" → 04-dashboard/01-dashboard.html
```

**Jami:** 6 HTML ✅ + 6 JS ✅ (TAYYOR)

---

## 📂 04-dashboard/ — Dashboard (Asosiy Hub)

> **Turi:** Authenticated — dashboard shell
> **Sidebar:** ✅ **Sidebar mavjud — hech bir item active emas (yoki "Dashboard" maxsus active)**
> **Layout:** Header (64px) + Sidebar (240px) + Main Content (fluid)
> **Figma docs:** 10-dashboard-layout.md

### Sidebar holati: `Dashboard Overview` — Hech bir modul active emas

```
┌──────────────────────────┐
│  🟣 CHATFLOW              │
│                           │
│  ─── ASOSIY ────────────  │
│  ▶ Dashboard  ← ACTIVE   │  ← Faqat shu sahifada
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team                  │
│  💬 Team Chat        [3]  │
│  📊 Analytics             │
│  📚 Knowledge Base        │
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings               │
│  💳 Billing               │
│  🧩 Add-ons               │
│  🖥 Developer             │
│  ─── QO'SHIMCHA ────────  │
│  📄 Docs                  │
│  ❓ Support                │
└──────────────────────────┘
```

### Sahifalar

| # | Fayl nomi | Maqsad | Status |
|---|-----------|--------|--------|
| 1 | **01-dashboard.html** | Umumiy ko'rinish (Overview) | ✅ |

### 01-dashboard.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar + Main

📊 MAIN CONTENT:
├── H1: "Dashboard" + "Bugun: 18 Fevral, 2026"
│
├── 📈 4 ta Metric Card (grid 4 col):
│   ├── 💬 Jami chatlar: 1,248 (+12% ↑)
│   ├── ⏱ O'rtacha javob: 2.4 min (-8% ↓)
│   ├── ⭐ CSAT bahosi: 4.6/5.0 (+3% ↑)
│   └── 👥 Online visitors: 34 (hozir)
│
├── 📊 2 ta Chart (grid 2 col):
│   ├── 📈 Chatlar trendi (line chart, 7 kun)
│   └── 📊 Kanallar ulushi (pie/donut chart)
│
├── 📋 So'nggi chatlar table (5 qator):
│   ├── Customer | Agent | Status | Kanal | Vaqt
│   └── "Barchasini ko'rish" → inbox/
│
└── 🔔 Bildirishnomalar card:
    ├── Oxirgi 5 ta notification
    └── "Barchasini ko'rish" → notification center
```

**Jami dashboard root:** 1 HTML + 1 JS

---

## 📂 05-inbox/ — Inbox (Chat Markazi)

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **📥 Inbox — ACTIVE** (bg `#E0E7FF`, text `#4F46E5`, left-border 3px `#4F46E5`)
> **Layout:** Header + Sidebar + 3-Panel (Chat List + Chat Area + Info Sidebar)
> **Figma docs:** 11-inbox-chat.md, 12-inbox-advanced.md

### Sidebar holati:

```
┌──────────────────────────┐
│  🟣 CHATFLOW              │
│  ─── ASOSIY ────────────  │
│  📥 Inbox        [12] ◀━━│━━ ACTIVE (ko'k bg, 3px chap border)
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team                  │
│  💬 Team Chat        [3]  │
│  📊 Analytics             │
│  📚 Knowledge Base        │
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings               │
│  💳 Billing               │
│  🧩 Add-ons               │
│  🖥 Developer             │
│  ─── QO'SHIMCHA ────────  │
│  📄 Docs                  │
│  ❓ Support                │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-inbox-chat.html** | Inbox asosiy (2-panel) | ✅ Barcha chatlar | ✅ O'z + assigned | ✅ HTML + JS |
| 2 | **02-chat-open.html** | Chat ochiq (3-panel) | ✅ Barcha | ✅ O'z + assigned | ❌ |
| 3 | **03-info-sidebar.html** | Mijoz info | ✅ + export/block | ✅ Ko'rish | ❌ |

### 01-inbox-chat.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(INBOX active) + 2-Panel

┌──────────────────────────────────────────┐
│ SIDEBAR │ CHAT LIST (360px)  │ CHAT AREA │
│ (240px) │                    │ (fluid)   │
│         │ 🔍 Qidiruv         │           │
│ INBOX   │ Filter tabs:       │ "Chat     │
│ ◀active │ Active|Mine|Closed │  tanlang" │
│         │                    │ (empty    │
│         │ Chat card #1       │  state)   │
│         │ Chat card #2       │           │
│         │ Chat card #3...    │           │
└──────────────────────────────────────────┘

📋 CHAT LIST PANEL (360px, fixed):
├── 🔍 Search input (debounce 300ms)
├── Filter tabs: 
│   ├── 🔴 ADMIN: Active | Mine | Unassigned | Closed | All
│   ├── 💼 AGENT: Active | Mine | Closed
│   └── 👤 CLIENT: ❌ (dashboard yo'q)
│
├── Sort: Eng yangi | Eng eski | Kutish vaqti
│
├── Chat cards (list):
│   ├── 🟢 Avatar + Name + status dot
│   ├── Oxirgi xabar preview (1 qator, truncate)
│   ├── Vaqt (relative: "2 min oldin")
│   ├── Unread badge (qizil doira)
│   ├── Kanal icon (Telegram/Web/WhatsApp)
│   ├── Agent avatar (assigned)
│   └── ADMIN ONLY: Assign dropdown, Priority flag
│
├── Card states:
│   ├── Default: bg white
│   ├── Hover: bg gray-50
│   ├── Selected: bg primary-50, left 3px primary border
│   └── Unread: bold text, blue left border

📋 CHAT AREA (fluid) — bo'sh holat:
└── Illustration: "Chat tanlang" + icon

🔐 ROLE-SPECIFIC FEATURES:
├── ADMIN:
│   ├── Barcha chatlar ko'rish (hammasini filter qilish mumkin)
│   ├── Assign to any agent
│   ├── Reassign chats
│   ├── Force close chat
│   └── Customer block option
│
├── AGENT:
│   ├── Faqat o'ziga assigned qilingan chatlar
│   ├── "Mine" default filter
│   ├── Self-assign available chats
│   ├── Can't reassign to others
│   └── Can't block customers
│
└── CLIENT: ❌ Inbox page yo'q
```

### 02-chat-open.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(INBOX active) + 3-Panel

┌───────────────────────────────────────────────────────┐
│ SIDEBAR │ CHAT LIST │ CHAT WINDOW    │ INFO SIDEBAR   │
│ (240px) │ (360px)   │ (fluid)        │ (300px)        │
│         │           │                │                │
│ INBOX   │ [selected]│ Header:        │ Customer info  │
│ ◀active │           │ Name + status  │ Tags, Notes    │
│         │           │ Messages...    │ History        │
│         │           │ Input bar      │                │
└───────────────────────────────────────────────────────┘

📋 CHAT WINDOW:
├── Chat Header (64px):
│   ├── 🟢 Avatar + Name + status ("Online")
│   ├── Kanal badge (Telegram/Web)
│   ├── 📌 Pin | 🏷 Tag | 👤 Assign | ⋮ More
│   └── ✕ Close chat button
│
├── Messages Area (scrollable):
│   ├── Visitor message (chap, gray-100 bg, rounded)
│   ├── Agent message (o'ng, primary-500 bg, white text)
│   ├── System message (centered, gray, italic)
│   ├── Timestamp (har 30 min, centered)
│   ├── Typing indicator: "..." animated dots
│   └── File message: preview + download link
│
├── Input Bar (sticky bottom):
│   ├── Textarea (auto-resize, max 5 qator)
│   ├── 😊 Emoji picker
│   ├── 📎 File attach (drag & drop ham)
│   ├── ⚡ Canned responses (/ trigger)
│   ├── 📝 Internal note toggle
│   └── ➤ Send button (primary, Enter shortcut)
│
└── Quick Reply Buttons (ixtiyoriy):
    └── 3 tagacha tezkor javob tugmalari
```

### 03-info-sidebar.html — Tarkibi

```
📋 INFO SIDEBAR (300px, o'ng panel):
├── 👤 Customer Header:
│   ├── Avatar (48px) + Name + Email
│   ├── Status: Online/Offline
│   └── "Profilni ko'rish" → contacts/profile
│
├── 📊 Info Tabs:
│   ├── Umumiy: Browser, OS, Location, IP, Referrer
│   ├── 🏷 Teglar: Tag qo'shish/o'chirish
│   ├── 📝 Eslatmalar: Rich text notes (add/edit/delete)
│   ├── 💬 Tarix: Oldingi chatlar ro'yxati
│   └── 📋 Custom fields: Key-value pairs
│
└── ⚡ Quick Actions:
    ├── "Assign" → agent tanlash dropdown
    ├── "Block" → tasdiqlash modal
    └── "Export" → chat export (TXT/PDF)
```

**Jami:** 3 HTML + 3 JS

---

## 📂 06-automation/ — Automation

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **⚡ Automation — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (tabbed)
> **Figma docs:** 13-automation.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation   ◀━━━━━━━│━━ ACTIVE
│  👤 Team                  │
│  💬 Team Chat        [3]  │
│  📊 Analytics             │
│  📚 Knowledge Base        │
│  ─── SOZLAMALAR ────────  │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-working-hours.html** | Ish vaqti sozlamalari | ✅ | ❌ | ✅ HTML + JS |
| 2 | **02-auto-reply.html** | Avtomatik javoblar | ✅ | ❌ | ❌ |
| 3 | **03-triggers.html** | Chat triggerlari | ✅ | ❌ | ❌ |
| 4 | **04-greetings.html** | Salomlash xabarlari | ✅ | ❌ | ❌ |

> **Rolle:** Automation faqat **Admin** uchun. Agent bunga kira olmaydi, sidebar-da yo'q.

### 01-working-hours.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(AUTOMATION active) + Main

📋 CONTENT:
├── H1: "Automation"
├── 4 Tab bar: [Ish vaqti] | Auto-Reply | Triggers | Salomlash
│   └── Tab 1 ACTIVE
│
├── ⏰ ISH VAQTI:
│   ├── 🔘 Toggle: "Ish vaqti cheklangan" ON/OFF
│   ├── 📅 Hafta jadvali (Monday-Sunday):
│   │   ├── Har bir kun: Toggle ON/OFF + Start time + End time
│   │   └── Bayram kunlari: 🗓 Calendar picker
│   ├── 🌍 Timezone select
│   └── 💾 "Saqlash" button (primary)
│
├── 📱 Offline xabar:
│   ├── Textarea: "Hozir ish vaqti emas..."
│   └── Preview card
```

### 02-auto-reply.html — Tarkibi

```
📋 CONTENT:
├── Tab bar: Ish vaqti | [Auto-Reply] | Triggers | Salomlash
│
├── 📝 AUTO-REPLY RULES:
│   ├── ➕ "Yangi qoida" button
│   ├── Rules table:
│   │   ├── Nomi | Holat (Active/Paused) | Trigger | Action | ⋮
│   │   └── Har bir qator expandable detail
│   │
│   ├── Rule builder modal:
│   │   ├── Trigger: Yangi chat | Javob kutish (5/10/15 min) | Offline
│   │   ├── Shart: Kanal = Web | Telegram | Hammasi
│   │   ├── Javob: Text input (variables: {name}, {agent})
│   │   └── 👁 Preview
│   │
│   └── 💾 "Saqlash" button
```

### 03-triggers.html — Tarkibi

```
📋 CONTENT:
├── Tab bar: Ish vaqti | Auto-Reply | [Triggers] | Salomlash
│
├── ⚡ TRIGGERS:
│   ├── ➕ "Yangi trigger" button
│   ├── Triggers list (cards):
│   │   ├── Trigger nomi + description
│   │   ├── Status toggle (Active/Paused)
│   │   ├── Shart: "Sahifada 30s+ bo'lsa" / "3+ sahifa ko'rsa"
│   │   ├── Action: "Chat ochilsin" / "Xabar yuborilsin"
│   │   └── Edit | Delete | Duplicate
│   │
│   └── Trigger builder:
│       ├── Event: Page visit | Time on page | Scroll depth | Exit intent
│       ├── Conditions: URL contains | Visitor type | Country
│       └── Action: Open chat | Send message | Show greeting
```

### 04-greetings.html — Tarkibi

```
📋 CONTENT:
├── Tab bar: Ish vaqti | Auto-Reply | Triggers | [Salomlash]
│
├── 👋 GREETINGS:
│   ├── ➕ "Yangi salomlash" button
│   ├── Greetings list:
│   │   ├── Greeting card:
│   │   │   ├── Name + message preview
│   │   │   ├── Status: Active/Paused
│   │   │   ├── Trigger: "Birinchi tashrif" / "Qayta tashrif"
│   │   │   └── Edit | Delete
│   │
│   ├── Greeting editor:
│   │   ├── Title input
│   │   ├── Message textarea (250 char, emoji support)
│   │   ├── Agent avatar tanlash
│   │   ├── Trigger rules
│   │   └── 👁 Live preview (widget ko'rinishida)
│   │
│   └── 💾 "Saqlash" button
```

**Jami:** 4 HTML + 4 JS

---

## 📂 07-team/ — Team Management

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **👤 Team — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (tabbed)
> **Figma docs:** 14-team.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team         ◀━━━━━━│━━ ACTIVE
│  💬 Team Chat        [3]  │
│  📊 Analytics             │
│  📚 Knowledge Base        │
│  ─── SOZLAMALAR ────────  │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-agents.html** | Agentlar ro'yxati (table) | ✅ | ❌ | ❌ |
| 2 | **02-agent-profile.html** | Agent profili (detail) | ✅ | ❌ | ❌ |
| 3 | **03-roles.html** | Rollar boshqaruvi | ✅ | ❌ | ❌ |
| 4 | **04-invitations.html** | Taklif yuborish | ✅ | ❌ | ❌ |

> **Rolle:** Team management faqat **Admin** uchun. Agent bunga kira olmaydi.

### 01-agents.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(TEAM active) + Main

📋 CONTENT:
├── H1: "Jamoa" + "➕ Agent qo'shish" button
├── 3 Tab bar: [Agentlar] | Rollar | Takliflar
│
├── 🔍 Search + Filter (Status, Rol)
│
├── 👥 AGENTS TABLE:
│   ├── Columns: Avatar | Ism | Email | Rol | Status | Chatlar | ⋮
│   ├── Status badges: 🟢 Online | 🟡 Away | 🔴 Busy | ⚫ Offline
│   ├── Click row → 02-agent-profile.html
│   └── ⋮ Menu: Edit | Deactivate | Delete
│
├── 📊 Team Stats (tepada, 3 card):
│   ├── Jami agentlar: 12
│   ├── Online: 8
│   └── O'rtacha CSAT: 4.5
│
└── Pagination: "1-10 / 45" + ◀ ▶
```

### 02-agent-profile.html — Tarkibi

```
📋 AGENT PROFILE (slide-in panel 800px yoki alohida page):
├── 👤 Header: Avatar (80px) + Name + Role badge + Status
│
├── 📊 Tabs: Umumiy | Chatlar | Statistika | Sozlamalar
│
├── TAB: Umumiy
│   ├── Info card: Email, Phone, Role, Joined date
│   ├── Skills/Tags
│   ├── Department
│   └── Max concurrent chats setting
│
├── TAB: Chatlar
│   ├── Assigned chats list
│   └── Chat history (last 30 days)
│
├── TAB: Statistika
│   ├── Response time (avg)
│   ├── Resolution rate
│   ├── CSAT score
│   └── Charts (7/30 days)
│
└── TAB: Sozlamalar
    ├── Notification preferences
    ├── Auto-assign toggle
    └── Working hours override
```

### 03-roles.html — Tarkibi

```
📋 ROLES (Tab 2):
├── H2: "Rollar"
├── ➕ "Yangi rol" button
│
├── Roles cards/list:
│   ├── 🔴 Admin — To'liq ruxsat (default, o'chirilmaydi)
│   ├── 🟡 Manager — Cheklangan admin
│   ├── 🟢 Operator — Faqat chat + kontakt
│   └── Custom roles...
│
├── Role detail/editor:
│   ├── Rol nomi input
│   ├── Permissions checklist:
│   │   ├── ☑ Dashboard ko'rish
│   │   ├── ☑ Inbox — barcha chatlar / faqat o'ziniki
│   │   ├── ☑ Kontaktlar — ko'rish / tahrirlash / o'chirish
│   │   ├── ☑ Analytics — ko'rish / export
│   │   ├── ☑ Settings — o'zgartirish
│   │   ├── ☑ Team — qo'shish / o'chirish
│   │   └── ☑ Billing — ko'rish / to'lash
│   └── 💾 "Saqlash"
```

### 04-invitations.html — Tarkibi

```
📋 INVITATIONS (Tab 3):
├── H2: "Takliflar"
├── ➕ "Taklif yuborish" button → modal
│
├── Invite Modal:
│   ├── 📧 Email(lar) input (multiple, comma-separated)
│   ├── 🏷 Rol select (Admin/Manager/Operator/Custom)
│   ├── 💬 Xabar textarea (ixtiyoriy)
│   └── "Yuborish" button
│
├── Pending Invitations table:
│   ├── Email | Rol | Yuborilgan sana | Status | ⋮
│   ├── Status: Pending | Accepted | Expired
│   └── ⋮ Menu: Resend | Cancel
│
└── 📊 Stats: Yuborilgan: 15 | Qabul: 12 | Kutilmoqda: 3
```

**Jami:** 4 HTML + 4 JS

---

## 📂 08-analytics/ — Analytics

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **📊 Analytics — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (multi-tab)
> **Figma docs:** 15-analytics.md, 25-advanced-analytics.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team                  │
│  💬 Team Chat        [3]  │
│  📊 Analytics    ◀━━━━━━│━━ ACTIVE
│  📚 Knowledge Base        │
│  ─── SOZLAMALAR ────────  │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-overview.html** | Analitika umumiy (KPI + charts) | ✅ | ❌ | ❌ |
| 2 | **02-response-times.html** | Javob vaqtlari | ✅ | ❌ | ❌ |
| 3 | **03-operators.html** | Operatorlar statistikasi | ✅ | ❌ | ❌ |
| 4 | **04-operator-detail.html** | Bitta operator batafsil | ✅ | ❌ | ❌ |
| 5 | **05-sla.html** | SLA monitoring | ✅ | ❌ | ❌ |
| 6 | **06-channels.html** | Kanallar statistikasi | ✅ | ❌ | ❌ |
| 7 | **07-segments.html** | Segment analitikasi | ✅ | ❌ | ❌ |
| 8 | **08-tags.html** | Teg analitikasi | ✅ | ❌ | ❌ |
| 9 | **09-custom-reports.html** | Custom hisobotlar | ✅ | ❌ | ❌ |
| 10 | **10-export.html** | Ma'lumotlarni export | ✅ | ❌ | ❌ |
| 11 | **11-my-stats.html** | Mening statistikam (operator) | ✅ | ✅ | ❌ |

> **Rolle:** Analytics overview faqat **Admin**. **Agent** faqat **11-my-stats.html** ko'ra oladi (o'z personal statistics).

### 01-overview.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(ANALYTICS active) + Main

📋 CONTENT:
├── H1: "Analytics" + Date range picker (7d | 30d | 90d | Custom)
├── 11 Tab bar: [Overview] | Response | Operators | SLA | Channels | ...
│
├── 📊 KPI CARDS (4 col grid):
│   ├── Jami chatlar: 3,456 (+18%)
│   ├── O'rtacha javob: 1.8 min (-12%)
│   ├── Hal qilingan: 92% (+5%)
│   └── CSAT: 4.7/5 (+2%)
│
├── 📈 CHARTS:
│   ├── Line chart: Chatlar trendi (kunlik/haftalik)
│   ├── Bar chart: Soatlik taqsimot (24h heatmap)
│   ├── Pie chart: Kanallar ulushi
│   └── Area chart: CSAT trendi
│
├── 📋 TOP PERFORMERS table:
│   ├── Agent | Chatlar | Avg Response | CSAT | Resolution
│   └── Top 5 agent
│
└── ⬇️ "Export" button → PDF / CSV / Excel
```

### 02-response-times.html — Tarkibi

```
📋 RESPONSE TIMES:
├── Tab: Overview | [Response] | ...
├── 📊 Avg First Response: 45s (chart)
├── 📊 Avg Resolution Time: 12min (chart)
├── 📊 Response by Hour (24h heatmap)
├── 📊 Response by Day (7 days bar chart)
└── Table: Agent | First Response | Avg Response | Resolution
```

### 03-operators.html — Tarkibi

```
📋 OPERATORS STATS:
├── Tab: Overview | Response | [Operators] | ...
├── Operators table (sortable, filterable):
│   ├── Agent | Chatlar | O'rtacha javob | CSAT | Online vaqt | Status
│   ├── Click row → 04-operator-detail.html
│   └── Sort: Eng ko'p chatlar | Eng yaxshi CSAT | Eng tez javob
└── Comparison chart: Selected operators vs team avg
```

### 04-operator-detail.html — Tarkibi

```
📋 OPERATOR DETAIL:
├── 👤 Agent header: Avatar + Name + Role + Status
├── Date range picker
├── 📊 Personal KPIs (4 cards)
├── 📈 Performance charts (line, daily trend)
├── 💬 Recent chats table
├── ⭐ CSAT reviews list
└── "← Operatorlarga qaytish" → 03-operators.html
```

### 05-sla.html — Tarkibi

```
📋 SLA MONITORING:
├── Tab: ... | [SLA] | ...
├── SLA Rules: First response < 1min, Resolution < 30min
├── 📊 SLA Compliance: 94% (donut chart)
├── ⚠️ Breached tickets table
└── SLA configuration (Admin only)
```

### 06-channels.html — Tarkibi

```
📋 CHANNELS:
├── 📊 Channel comparison:
│   ├── Web Chat: 45% | Telegram: 30% | WhatsApp: 15% | Email: 10%
├── Trend chart per channel
└── Table: Channel | Volume | Avg Response | CSAT | Growth
```

### 07-segments.html — Tarkibi

```
📋 SEGMENTS:
├── Segment-based analytics
├── Segments: New visitors | Returning | VIP | Enterprise
├── 📊 Volume + CSAT per segment
└── Comparison charts
```

### 08-tags.html — Tarkibi

```
📋 TAGS:
├── Tag cloud visualization
├── Most used tags (bar chart)
├── Tag trends (line chart)
└── Table: Tag | Count | Avg Resolution | CSAT
```

### 09-custom-reports.html — Tarkibi

```
📋 CUSTOM REPORTS:
├── ➕ "Yangi hisobot" button
├── Saved reports list
├── Report builder:
│   ├── Metrics select (multi)
│   ├── Dimensions: Date | Agent | Channel | Tag
│   ├── Filters
│   ├── Chart type: Line | Bar | Pie | Table
│   └── "Saqlash" + "Export"
```

### 10-export.html — Tarkibi

```
📋 EXPORT:
├── Export type: Full report | Custom range | Specific module
├── Format: PDF | CSV | Excel | JSON
├── Date range picker
├── Data selection checkboxes
├── "⬇️ Eksport" button → download
└── Export history table
```

### 11-my-stats.html — Tarkibi

```
📋 MY STATS (Operator view):
├── 👤 "Mening statistikam" — faqat o'z ma'lumotlari
├── 📊 KPIs: My chats | Response time | CSAT | Online time
├── 📈 Trend charts (7/30 days)
├── 💬 Recent chats
└── ⭐ CSAT reviews about me
```

**Jami:** 11 HTML + 11 JS

---

## 📂 09-settings/ — Settings

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **⚙️ Settings — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (tabbed, max-width 800px centered)
> **Figma docs:** 16-settings.md, 32-gdpr-data-deletion.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings     ◀━━━━━━│━━ ACTIVE
│  💳 Billing               │
│  🧩 Add-ons               │
│  🖥 Developer             │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin Tabs | Agent Tabs | Client | Status |
|---|-----------|--------|-----------|-----------|--------|--------|
| 1 | **01-workspace.html** | Workspace sozlamalari | ✅ | ❌ | ❌ | ❌ |
| 2 | **02-widget-settings.html** | Widget sozlamalari | ✅ | ❌ | ✅ | ❌ |
| 3 | **03-security.html** | Xavfsizlik | ✅ | ✅ | ❌ | ❌ |
| 4 | **04-notifications.html** | Bildirishnoma sozlamalari | ✅ | ✅ | ❌ | ❌ |
| 5 | **05-profile.html** | Profil/Account | ✅ | ✅ | ✅ | ❌ |
| 6 | **06-privacy-export.html** | GDPR: Data export | ✅ | ✅ | ✅ | ❌ |
| 7 | **07-privacy-delete.html** | GDPR: Account deletion | ✅ | ✅ | ✅ | ❌ |
| 8 | **08-privacy-settings.html** | GDPR: Privacy settings | ✅ | ✅ | ✅ | ❌ |

> **Role-based tabs:**
> - **Admin:** 01-workspace.html + 02-widget.html + 03-security + 04-notifications + 05-profile + 06-07-08 GDPR
> - **Agent:** 03-security + 04-notifications + 05-profile + 06-07-08 GDPR (Workspace, Widget tab ko'rinmaydi)
> - **Client (Widget User):** 02-widget-settings + 05-profile (minimal) + 06-07-08 GDPR

### 01-workspace.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(SETTINGS active) + Main (800px centered)

📋 CONTENT:
├── H1: "Sozlamalar"
├── 5 Tab bar: [Workspace] | Widget | Xavfsizlik | Bildirishnomalar | Profil
│
├── 🏢 WORKSPACE:
│   ├── Company name input
│   ├── Company logo upload (drag & drop, 200×200px)
│   ├── 🌍 Timezone select
│   ├── 🌐 URL/Domain input
│   ├── 🏭 Industry select
│   ├── 📧 Support email input
│   ├── 🌍 Default language select
│   └── 💾 "Saqlash" button
│
├── ⚠️ DANGER ZONE:
│   ├── "Workspace o'chirish" → confirmation modal (type name)
│   └── "Ma'lumotlarni export" → 06-privacy-export.html
```

### 02-widget-settings.html — Tarkibi

```
📋 WIDGET SETTINGS:
├── Tab: Workspace | [Widget] | ...
│
├── 🎨 Appearance:
│   ├── Primary color: 8 preset + custom hex
│   ├── Shape: Square (8px) / Rounded (16px)
│   ├── Position: Bottom-right / Bottom-left / Custom
│   ├── Size: Normal / Compact
│
├── 💬 Messages:
│   ├── Welcome message textarea (120 char)
│   ├── Offline message textarea
│   ├── Placeholder text input
│
├── ⚙️ Behavior:
│   ├── Pre-chat form toggle + fields config
│   ├── CSAT survey toggle
│   ├── File sharing toggle
│   ├── Sound notifications toggle
│
├── 👁 LIVE PREVIEW (o'ng tomonda, 360×520px)
│
└── 📋 Install code snippet + "Copy" button
```

### 03-security.html — Tarkibi

```
📋 SECURITY:
├── Tab: ... | [Xavfsizlik] | ...
│
├── 🔒 Two-Factor Authentication:
│   ├── Status: Enabled/Disabled
│   ├── "2FA yoqish" → QR code + backup codes
│
├── 📋 Active Sessions:
│   ├── Device | Browser | IP | Location | Last active
│   └── "Barchasini chiqarish" button
│
├── 🔑 Password:
│   ├── "Parolni o'zgartirish" → old + new + confirm
│
├── 📋 Login History (last 30 days):
│   ├── Date | IP | Browser | Status (Success/Failed)
│
└── 🛡 IP Whitelist (Admin only):
    ├── Allowed IPs list + Add IP input
```

### 04-notifications.html — Tarkibi

```
📋 NOTIFICATIONS:
├── Tab: ... | [Bildirishnomalar] | ...
│
├── 🔔 Email notifications:
│   ├── ☑ Yangi chat
│   ├── ☑ Chat tayinlandi
│   ├── ☑ Chat mention (@agent)
│   ├── ☑ CSAT feedback
│   ├── ☑ Haftalik hisobot
│   └── ☑ Tizim yangilanishlari
│
├── 🖥 Desktop notifications:
│   ├── ☑ Yangi xabar
│   ├── ☑ Yangi chat
│   ├── Sound: On/Off + volume
│
├── 📱 Mobile push (agar app bo'lsa):
│   └── Same toggles
│
└── ⏰ Quiet hours:
    ├── Toggle ON/OFF
    ├── Start time — End time
    └── Hafta kunlari select
```

### 05-profile.html — Tarkibi

```
📋 PROFILE:
├── Tab: ... | [Profil]
│
├── 👤 Profile Info:
│   ├── Avatar upload (crop modal)
│   ├── Full name input
│   ├── Display name input
│   ├── Email (read-only, verified badge)
│   ├── Phone input
│   ├── Bio textarea (160 char)
│
├── 🌍 Preferences:
│   ├── Language: O'zbek | Русский | English | Türkçe
│   ├── 🌙 Theme: Light | Dark | System
│   ├── Date format: DD/MM/YYYY | MM/DD/YYYY
│   ├── Time format: 24h | 12h
│
├── 💾 "Saqlash" button
│
└── 🛡 Privacy:
    ├── "Ma'lumotlarimni eksport" → 06-privacy-export.html
    └── "Hisobni o'chirish" → 07-privacy-delete.html
```

### 06-privacy-export.html — Tarkibi

```
📋 GDPR DATA EXPORT:
├── H2: "Ma'lumotlarni eksport qilish"
├── ℹ️ Info: "GDPR Article 20 bo'yicha barcha ma'lumotlaringizni yuklab olishingiz mumkin"
│
├── Data categories (checkbox list):
│   ├── ☑ Profil ma'lumotlari
│   ├── ☑ Chat tarixi
│   ├── ☑ Kontaktlar
│   ├── ☑ Analytics
│   ├── ☑ Sozlamalar
│
├── Format: JSON | CSV
├── "Eksportni boshlash" → processing → email notification
├── 📋 Previous exports table (file + date + download link)
└── "← Sozlamalarga qaytish" → 05-profile.html
```

### 07-privacy-delete.html — Tarkibi

```
📋 GDPR ACCOUNT DELETION:
├── H2: "Hisobni o'chirish"
├── ⚠️ Warning card (red border):
│   ├── "Bu amalni ortga qaytarib bo'lmaydi!"
│   ├── 30 kun muddat — bekor qilish mumkin
│   ├── O'chiriladi: Profil, chatlar, kontaktlar, sozlamalar
│
├── Confirmation steps:
│   ├── 1. Sababni tanlang (select)
│   ├── 2. Parolni kiriting
│   ├── 3. "O'CHIRISH" so'zini yozing
│
├── "Hisobni o'chirish" (red button) → confirmation modal
├── Countdown: "30 kun ichida bekor qilishingiz mumkin"
└── "Bekor qilish" → cancel deletion process
```

### 08-privacy-settings.html — Tarkibi

```
📋 PRIVACY SETTINGS:
├── H2: "Maxfiylik sozlamalari"
│
├── 🍪 Cookie Preferences:
│   ├── ☑ Zaruriy cookies (o'chirib bo'lmaydi)
│   ├── ☐ Analytics cookies
│   ├── ☐ Marketing cookies
│
├── 📊 Data Collection:
│   ├── ☑ Usage analytics
│   ├── ☐ Error reporting
│   ├── ☐ Feature usage tracking
│
├── 👁 Visibility:
│   ├── Profile visibility: Public / Team only / Private
│   ├── Online status: Show / Hide
│
└── 💾 "Saqlash" button
```

**Jami:** 8 HTML + 8 JS

---

## 📂 10-billing/ — Billing & Subscription

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **💳 Billing — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (tabbed)
> **Figma docs:** 17-billing.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings               │
│  💳 Billing      ◀━━━━━━│━━ ACTIVE
│  🧩 Add-ons               │
│  🖥 Developer             │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-plan.html** | Joriy tarif + taqqoslash | ✅ | ❌ | ❌ |
| 2 | **02-payment.html** | To'lov usullari | ✅ | ❌ | ❌ |
| 3 | **03-invoices.html** | Fakturalar tarixi | ✅ | ❌ | ❌ |
| 4 | **04-usage.html** | Foydalanish statistikasi | ✅ | ❌ | ❌ |

> **Rolle:** Billing faqat **Admin** uchun. Agent bunga kira olmaydi, sidebar-da yo'q.

### 01-plan.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(BILLING active) + Main

📋 CONTENT:
├── H1: "Billing"
├── 4 Tab bar: [Plan] | To'lov | Fakturalar | Usage
│
├── 📋 JORIY PLAN:
│   ├── Plan card (highlighted): "Pro — $49/oy"
│   ├── Status: Active
│   ├── Keyingi to'lov: 2026-03-18 ($49)
│   ├── Agentlar: 4/5 ishlatilmoqda
│   └── "Tarifni o'zgartirish" button
│
├── 💰 PLANS COMPARISON (4 col):
│   ├── Free ($0): 1 agent, 100 chat/oy, basic features
│   ├── Pro ($49): 5 agent, unlimited chat, analytics ⭐ CURRENT
│   ├── Business ($99): 20 agent, API, advanced analytics, SLA
│   ├── Enterprise (Custom): unlimited, dedicated support
│   ├── Each: Feature checklist + "Tanlash" / "Joriy" / "Bog'laning"
│
├── 💳 Billing cycle toggle: Monthly | Annual (20% off)
│
└── ❓ FAQ section (accordion)
```

### 02-payment.html — Tarkibi

```
📋 PAYMENT:
├── Tab: Plan | [To'lov] | ...
│
├── 💳 Saved Cards:
│   ├── Card: •••• 4242 (Visa) — Default ✓
│   ├── Card: •••• 8888 (Mastercard)
│   ├── "➕ Yangi karta qo'shish" → card form modal
│   └── Delete / Set as default
│
├── 📋 Billing Info:
│   ├── Company name
│   ├── Billing address
│   ├── Tax ID / INN
│   └── "Tahrirlash" button
│
└── Auto-renewal: ON/OFF toggle
```

### 03-invoices.html — Tarkibi

```
📋 INVOICES:
├── Tab: Plan | To'lov | [Fakturalar] | ...
│
├── Invoices table:
│   ├── # | Sana | Summa | Status | ⬇️
│   ├── Status: Paid ✅ | Pending ⏳ | Failed ❌
│   └── ⬇️ Download PDF
│
├── Filter: Date range | Status
└── Pagination
```

### 04-usage.html — Tarkibi

```
📋 USAGE:
├── Tab: ... | [Usage]
│
├── 📊 Usage meters:
│   ├── Agents: 4/5 (80%) [progress bar]
│   ├── Chats: 2340/unlimited
│   ├── Storage: 2.1/5 GB (42%)
│   ├── API calls: 1200/10000 (12%)
│
├── 📈 Usage trend chart (30 days)
│
└── ⚠️ Alerts:
    ├── "Agentlar limiti yaqin — upgrade qiling"
    └── "Storage 80% to'ldi"
```

**Jami:** 4 HTML + 4 JS

---

## 📂 11-chat-widget/ — Chat Widget (Saytga Embed)

> **Turi:** Standalone widget (dashboard emas!)
> **Sidebar:** ❌ Yo'q — bu saytga embed qilinadigan widget
> **Layout:** Widget frame (360×520px) + Launcher (56×56px)
> **Figma docs:** 18-chat-widget.md

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Client | Status |
|---|-----------|--------|-------|-------|--------|--------|
| 1 | **01-widget-launcher.html** | Launcher button (FAB) | — | — | ✅ | ❌ |
| 2 | **02-widget-chat.html** | Chat oynasi | — | — | ✅ | ❌ |
| 3 | **03-widget-offline.html** | Offline holat | — | — | ✅ | ❌ |
| 4 | **04-widget-csat.html** | CSAT survey | — | — | ✅ | ❌ |
| 5 | **05-widget-states.html** | Barcha holatlar demo | — | — | ✅ | ❌ |

> **Rolle:** Chat widget faqat **Client** uchun (saytga embed). Admin/Agent uchun sidebar-da yo'q.

### 01-widget-launcher.html — Tarkibi

```
📋 LAUNCHER (bottom-right, 56×56px doira):
├── 💬 Chat icon (default holat)
├── Click → widget ochiladi (animated)
├── Hover 500ms → Preview card:
│   ├── Agent avatar + name
│   ├── "Salom! Yordam bera olamizmi?"
│   └── "Chat boshlash" button
│
├── 🔴 Unread badge:
│   ├── Position: top-right
│   ├── "3" yoki "99+"
│   ├── Pulse animation
│
├── States:
│   ├── 🟢 Online: Primary bg
│   ├── 🟡 Away: Yellow bg
│   └── 🔴 Offline: Gray bg
│
└── Animation: bounce on first load, scale on click
```

### 02-widget-chat.html — Tarkibi

```
📋 WIDGET CHAT (360×520px, shadow-xl, radius 16px):
├── 📌 HEADER (56px, primary bg, white text):
│   ├── 🟢 Agent avatar (32px) + Name + "Online"
│   ├── — Minimize button
│   └── ✕ Close button
│
├── 💬 MESSAGES AREA (scrollable):
│   ├── Visitor message (chap, #F3F4F6 bg, radius)
│   ├── Agent message (o'ng, primary bg, white text)
│   ├── System message (center, italic, gray)
│   ├── Timestamp (har 30 min)
│   ├── Typing: "..." animated dots
│   ├── Image message: thumbnail + lightbox
│   └── File message: icon + name + size + download
│
├── 📋 PRE-CHAT FORM (agar yoqilgan):
│   ├── 👤 Name input
│   ├── 📧 Email input
│   ├── 💬 Message textarea
│   └── "Boshlash" button
│
├── ⌨️ INPUT BAR (sticky bottom):
│   ├── Textarea (placeholder: "Xabar yozing...")
│   ├── 😊 Emoji button → emoji picker
│   ├── 📎 File button → file picker
│   └── ➤ Send button
│
├── ⚡ QUICK REPLIES (ixtiyoriy):
│   └── "Tariflar" | "Yordam" | "Aloqa" (up to 3)
│
└── 📌 FOOTER:
    └── "Powered by ChatFlow" (branding, removable on paid)
```

### 03-widget-offline.html — Tarkibi

```
📋 WIDGET OFFLINE (360×520px):
├── Header (gray bg): "Hozir offline"
│
├── 😴 Offline illustration
├── H3: "Hozir agentlar band"
├── P: "Xabar qoldiring, tez orada javob beramiz"
│
├── 📋 Offline Form:
│   ├── 👤 Ism input (required)
│   ├── 📧 Email input (required)
│   ├── 💬 Xabar textarea (required)
│   └── "Xabar qoldirish" button
│
├── ✅ Success state:
│   ├── ✅ "Xabaringiz qabul qilindi!"
│   └── "Javob emailingizga yuboriladi"
│
└── Footer: "Powered by ChatFlow"
```

### 04-widget-csat.html — Tarkibi

```
📋 WIDGET CSAT (360×520px):
├── Header: "Suhbat qanday bo'ldi?"
│
├── ⭐ RATING:
│   ├── 5 ta yulduz (click to rate)
│   ├── Labels: Yomon | Qoniqarsiz | O'rtacha | Yaxshi | A'lo
│   └── Selected: filled stars + color change
│
├── 💬 Comment:
│   ├── Textarea: "Fikringizni bildiring..." (ixtiyoriy)
│
├── "Yuborish" button
│
├── ✅ Thank you state:
│   ├── 🎉 "Rahmat!"
│   ├── "Fikringiz biz uchun muhim"
│   └── Auto-close 3s
│
└── "O'tkazib yuborish" link
```

### 05-widget-states.html — Tarkibi

```
📋 ALL STATES SHOWCASE (test/demo uchun):
├── Grid layout (3 col):
│   ├── 🟢 Online state (launcher + chat)
│   ├── 🟡 Away state (launcher + chat)
│   ├── 🔴 Offline state (launcher + form)
│   ├── ⌨️ Typing indicator
│   ├── 📋 Pre-chat form
│   ├── ⭐ CSAT survey
│   ├── 📎 File preview
│   ├── 👁 Image lightbox
│   └── 🔴 Unread badge variants (1, 5, 99+)
```

**Jami:** 5 HTML + 5 JS

---

## 📂 12-contacts/ — Contacts (CRM)

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **👥 Kontaktlar — ACTIVE**
> **Layout:** Header + Sidebar + Main Content
> **Figma docs:** 20-contacts-crm.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar   ◀━━━━━━│━━ ACTIVE
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-contacts-list.html** | Kontaktlar ro'yxati (table/card) | ✅ Full | ✅ Limited | ❌ |
| 2 | **02-contact-profile.html** | Kontakt profili (detail slide-in) | ✅ Full | ✅ Ko'rish | ❌ |
| 3 | **03-organizations.html** | Tashkilotlar ro'yxati | ✅ | ✅ Limited | ❌ |
| 4 | **04-org-detail.html** | Tashkilot profili | ✅ | ✅ Ko'rish | ❌ |
| 5 | **05-segments.html** | Segmentlar boshqaruvi | ✅ | ❌ | ❌ |
| 6 | **06-import-export.html** | Import/Export kontaktlar | ✅ | ❌ | ❌ |

> **Role Access:**
> - **Admin:** Barcha kontaktlar, tahrirlash, import/export, segment boshqaruvi
> - **Agent:** Faqat assigned kontaktlar, ko'rish + notes, bulk actions ❌

### 01-contacts-list.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(CONTACTS active) + Main

📋 CONTENT:
├── H1: "Kontaktlar" + "➕ Yangi kontakt" button
├── 3 Tab bar: [Kontaktlar] | Tashkilotlar | Segmentlar
│
├── 🔍 Search (320px) + Filters:
│   ├── Tags filter (multi-select)
│   ├── Organization filter
│   ├── Last seen: Today | 7 days | 30 days | All
│   └── "Filtrlash" button
│
├── 📋 View toggle: 📋 Table | 🗂 Cards
│
├── TABLE VIEW:
│   ├── Columns: ☑ | Avatar | Ism | Email | Tashkilot | Oxirgi ko'rilgan | Chatlar | Teglar | ⋮
│   ├── Sortable columns
│   ├── Bulk actions: Tag | Assign | Export | Delete
│   ├── 15 rows per page
│   └── Click row → 02-contact-profile.html (slide-in)
│
├── CARD VIEW:
│   ├── 3 column grid
│   ├── Card: Avatar + Name + Email + Tags + Last seen + Chat count
│   └── Click card → 02-contact-profile.html
│
├── Pagination: "1-15 / 1,248" + ◀ ▶
│
└── Import/Export buttons → 06-import-export.html
```

### 02-contact-profile.html — Tarkibi

```
📋 CONTACT PROFILE (slide-in panel, 800px o'ngdan):
├── Header: ✕ Close + "Tahrirlash" + ⋮ More
│
├── 👤 Profile header:
│   ├── Avatar (80px) + Name + Email
│   ├── Tags badges
│   ├── Organization link
│   └── Status: Online/Offline
│
├── 📊 Tabs: Umumiy | Suhbatlar | Eslatmalar | Faoliyat
│
├── TAB: Umumiy
│   ├── Contact info: Phone, Location, Browser, OS
│   ├── Custom fields: key-value pairs
│   ├── Social links
│   └── "Tahrirlash" → edit form
│
├── TAB: Suhbatlar
│   ├── Previous chats list (date, agent, status, duration)
│   └── Click → open chat in inbox
│
├── TAB: Eslatmalar
│   ├── Notes list (rich text)
│   ├── "➕ Yangi eslatma" → textarea
│   └── Edit/Delete each note
│
└── TAB: Faoliyat
    ├── Timeline: Birinchi tashrif → Chatlar → Sahifalar → Events
    └── Filterable by date/type
```

### 03-organizations.html — Tarkibi

```
📋 ORGANIZATIONS:
├── Tab: Kontaktlar | [Tashkilotlar] | Segmentlar
│
├── 🔍 Search + "➕ Yangi tashkilot"
│
├── Organizations table:
│   ├── Logo | Nomi | Domen | Kontaktlar soni | Chatlar | ⋮
│   ├── Click row → 04-org-detail.html
│   └── ⋮ Menu: Edit | Merge | Delete
│
└── Pagination
```

### 04-org-detail.html — Tarkibi

```
📋 ORG DETAIL:
├── Organization header: Logo + Name + Domain + Industry
├── Stats: Kontaktlar soni | Jami chatlar | CSAT
│
├── Tabs: Kontaktlar | Suhbatlar | Ma'lumotlar
│
├── TAB: Kontaktlar — members list
├── TAB: Suhbatlar — all chats from org
└── TAB: Ma'lumotlar — org info edit form
```

### 05-segments.html — Tarkibi

```
📋 SEGMENTS:
├── Tab: Kontaktlar | Tashkilotlar | [Segmentlar]
│
├── "➕ Yangi segment" button
│
├── Segments list:
│   ├── Segment card: Name + Description + Count + Auto/Manual
│   ├── Default segments: All | New | Active | VIP | Inactive
│   └── Custom segments
│
├── Segment builder:
│   ├── Name input
│   ├── Rules (AND/OR):
│   │   ├── "Chat soni > 5" AND "Oxirgi tashrif < 7 kun"
│   │   └── "Tag = VIP" OR "Organization = Company X"
│   ├── Preview: "45 ta kontakt mos keladi"
│   └── "Saqlash" button
```

### 06-import-export.html — Tarkibi

```
📋 IMPORT/EXPORT:
├── Import:
│   ├── 📎 CSV/Excel file upload (drag & drop)
│   ├── Column mapping: File Column → ChatFlow Field
│   ├── Duplicate handling: Skip | Update | Create new
│   ├── Preview (first 5 rows)
│   └── "Import boshlash" → progress bar → result
│
├── Export:
│   ├── Format: CSV | Excel | JSON
│   ├── Fields selection (checkboxes)
│   ├── Segment filter (optional)
│   └── "⬇️ Eksport" → download
```

**Jami:** 6 HTML + 6 JS

---

## 📂 13-visitors/ — Online Visitors

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **👁 Online Visitors — ACTIVE** (badge: live count, yashil)
> **Layout:** Header + Sidebar + Main Content
> **Figma docs:** 21-online-visitors.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors◀━━━━│━━ ACTIVE (yashil badge: [5])
│  ⚡ Automation             │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-visitors-list.html** | Real-time visitors ro'yxati | ✅ Full | ✅ Limited | ❌ |
| 2 | **02-visitor-profile.html** | Visitor detail (slide-in) | ✅ Full | ✅ Ko'rish | ❌ |
| 3 | **03-visitors-map.html** | Geo map visualization | ✅ | ✅ | ❌ |

> **Role Access:**
> - **Admin:** Barcha visitors, proactive chat, block action
> - **Agent:** O'z serverlari, chat boshlash, ko'rish

### 01-visitors-list.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(VISITORS active) + Main

📋 CONTENT:
├── H1: "Online Visitors" + Live counter badge: "🟢 5 ta hozir saytda"
├── 3 Tab bar: [Online] | Barcha | Xarita → 03-visitors-map.html
│
├── Auto-refresh: har 10 soniyada yangilanadi
│
├── 🔍 Search + Filter: Country | Page | Referrer | New/Returning
│
├── 👥 VISITORS CARDS (grid yoki list):
│   ├── Visitor card:
│   │   ├── 🟢 Status dot (online/idle)
│   │   ├── Name/IP (agar anonim)
│   │   ├── 🌍 Country flag + city
│   │   ├── 📄 Current page URL
│   │   ├── ⏱ Saytda vaqt: "4 min"
│   │   ├── 📱 Browser + OS icons
│   │   ├── Pages viewed: 3
│   │   └── 💬 "Chat boshlash" button (proactive)
│   │
│   └── Click card → 02-visitor-profile.html
│
├── 📊 Stats bar (tepada):
│   ├── Online: 5 | Bugungi: 34 | Yangi: 12 | Qaytgan: 22
│
└── Live indicator: pulse animation (har 10s refresh)
```

### 02-visitor-profile.html — Tarkibi

```
📋 VISITOR DETAIL (slide-in, 600px):
├── 👤 Header: Name/IP + Country + Status
│
├── 📊 Session info:
│   ├── Current page
│   ├── Referrer
│   ├── Browser / OS / Device
│   ├── IP address
│   ├── Location (city, country)
│   ├── Time on site
│   └── Pages viewed (list with timestamps)
│
├── 📋 Page Journey:
│   ├── Timeline: Page 1 → Page 2 → Page 3 (with time)
│
├── 💬 Chat history (if exists, previous sessions)
│
└── Actions:
    ├── "💬 Chat boshlash" (proactive chat)
    ├── "🏷 Tag qo'shish"
    └── "🚫 Block" (IP ban)
```

### 03-visitors-map.html — Tarkibi

```
📋 GEO MAP:
├── Tab: Online | Barcha | [Xarita]
│
├── 🗺 World map:
│   ├── Dots/pins showing visitor locations
│   ├── Cluster for nearby visitors
│   ├── Hover dot → visitor info tooltip
│   ├── Click dot → 02-visitor-profile.html
│
├── 📊 Country stats (sidebar):
│   ├── 🇺🇿 Uzbekistan: 15
│   ├── 🇷🇺 Russia: 8
│   ├── 🇺🇸 USA: 3
│   └── Bar chart visualization
│
└── Filters: Online only | All today | Custom date
```

**Jami:** 3 HTML + 3 JS

---

## 📂 14-team-chat/ — Team Chat (Ichki Chat)

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **💬 Team Chat — ACTIVE** (badge: unread, ko'k)
> **Layout:** Header + Sidebar + 2-Panel (Channels list + Chat area)
> **Figma docs:** 22-team-chat.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team                  │
│  💬 Team Chat    [3]◀━━━│━━ ACTIVE (ko'k badge)
│  📊 Analytics             │
│  📚 Knowledge Base        │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-team-chat.html** | Team chat asosiy (DM + Rooms) | ✅ | ✅ | ❌ |
| 2 | **02-room-settings.html** | Room sozlamalari | ✅ Full | ✅ Limited | ❌ |
| 3 | **03-notifications.html** | Team chat bildirishnoma sozlamalari | ✅ | ✅ | ❌ |

> **Role Access:**
> - **Admin:** Barcha DM, barcha rooms, room creation/deletion
> - **Agent:** O'z DM + assigned rooms, tidak bisa membuat room

### 01-team-chat.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(TEAM CHAT active) + 2-Panel

┌──────────────────────────────────────────┐
│ SIDEBAR │ CHANNELS (300px)  │ CHAT AREA  │
│ (240px) │                   │ (fluid)    │
│         │ 🔍 Qidiruv        │            │
│ TEAM    │                   │ Messages   │
│ CHAT    │ DIRECT MESSAGES:  │ area       │
│ ◀active │ 🟢 Sardor A.     │            │
│         │ 🟡 Dilshod K.    │            │
│         │ ⚫ Aziza R.      │ Input bar  │
│         │                   │            │
│         │ ROOMS:            │            │
│         │ # general         │            │
│         │ # support-team    │            │
│         │ # dev [🔒]        │            │
└──────────────────────────────────────────┘

📋 CHANNELS LIST (300px):
├── 🔍 Search
├── ➕ "Yangi xabar" / "Room yaratish" button
│
├── DIRECT MESSAGES:
│   ├── Agent avatar + name + status dot
│   ├── Last message preview
│   ├── Time
│   └── Unread badge
│
├── ROOMS:
│   ├── # Room icon + name
│   ├── 🔒 Private room indicator
│   ├── Last message preview
│   └── Unread badge / @mention indicator
│
└── Click → o'ng panelda chat ochiladi

📋 CHAT AREA (fluid):
├── Chat header: Room/DM name + members count + ⚙️ settings
├── Messages (same style as inbox chat)
├── Input bar: Text + Emoji + File + @mention + Send
└── Typing indicator
```

### 02-room-settings.html — Tarkibi

```
📋 ROOM SETTINGS (modal yoki slide-in):
├── Room info:
│   ├── Room name input
│   ├── Description textarea
│   ├── 🔒 Private toggle
│   ├── 🔔 Notification preference: All | Mentions | None
│
├── 👥 Members:
│   ├── Members list (avatar + name + role)
│   ├── "➕ A'zo qo'shish" → agent search
│   ├── Remove member (admin only)
│   └── Admin transfer
│
├── ⚙️ Settings:
│   ├── File sharing: ON/OFF
│   ├── Thread replies: ON/OFF
│
├── ⚠️ Danger:
│   ├── "Roomni arxivlash"
│   └── "Roomni o'chirish" → confirmation
│
└── 💾 "Saqlash" button
```

### 03-notifications.html — Tarkibi

```
📋 TEAM CHAT NOTIFICATIONS:
├── 🔔 Notification rules:
│   ├── DM: ☑ All messages (o'chirilmaydi)
│   ├── Rooms:
│   │   ├── # general: All | @mentions | None
│   │   ├── # support-team: All | @mentions | None
│   │   └── Per-room settings
│
├── 🔊 Sound: ON/OFF + sound select
├── 🖥 Desktop notifications: ON/OFF
├── 📱 Mobile push: ON/OFF
│
└── ⏰ Do Not Disturb:
    ├── Toggle
    ├── Duration: 1 hour | Until tomorrow | Custom
    └── Status message input
```

**Jami:** 3 HTML + 3 JS

---

## 📂 15-knowledge-base/ — Knowledge Base

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **📚 Knowledge Base — ACTIVE**
> **Layout:** Header + Sidebar + Main Content
> **Figma docs:** 23-knowledge-base.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── ASOSIY ────────────  │
│  📥 Inbox           [12]  │
│  👥 Kontaktlar            │
│  👁 Online Visitors  [5]  │
│  ⚡ Automation             │
│  👤 Team                  │
│  💬 Team Chat        [3]  │
│  📊 Analytics             │
│  📚 Knowledge Base ◀━━━━│━━ ACTIVE
│  ─── SOZLAMALAR ────────  │
│  ...                      │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-kb-dashboard.html** | KB boshqaruv paneli | ✅ Full | ✅ Ko'rish | ❌ |
| 2 | **02-article-editor.html** | Maqola yaratish/tahrirlash | ✅ | ❌ | ❌ |
| 3 | **03-categories.html** | Kategoriyalar boshqaruvi | ✅ | ❌ | ❌ |
| 4 | **04-kb-settings.html** | KB sozlamalari | ✅ | ❌ | ❌ |
| 5 | **05-kb-analytics.html** | KB analitikasi | ✅ | ✅ Ko'rish | ❌ |

> **Role Access:**
> - **Admin:** Barcha articles, create/edit, categories, settings, analytics full
> - **Agent:** Ko'rish + search, suggestions + analytics (read-only)

### 01-kb-dashboard.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(KB active) + Main

📋 CONTENT:
├── H1: "Knowledge Base" + "➕ Yangi maqola" button
├── 5 Tab bar: [Maqolalar] | Kategoriyalar | Sozlamalar | Analitika
│
├── 📊 Stats cards (4 col):
│   ├── Jami maqolalar: 48
│   ├── Published: 42
│   ├── Draft: 6
│   └── Ko'rishlar: 12,456
│
├── 🔍 Search + Filter: Category | Status (Published/Draft/Archived) | Author
│
├── 📋 Articles table:
│   ├── Columns: Sarlavha | Kategoriya | Status | Ko'rishlar | Oxirgi tahrir | ⋮
│   ├── Status badges: 🟢 Published | 🟡 Draft | ⚫ Archived
│   ├── Click → 02-article-editor.html
│   └── ⋮ Menu: Edit | Duplicate | Archive | Delete
│
├── 📁 Category sidebar (chap, collapsible):
│   ├── All articles (48)
│   ├── 📁 Boshlash (12)
│   ├── 📁 FAQ (15)
│   ├── 📁 API docs (8)
│   ├── 📁 Troubleshooting (13)
│
└── Pagination
```

### 02-article-editor.html — Tarkibi

```
📋 ARTICLE EDITOR (full-width):
├── ← "Orqaga" → 01-kb-dashboard.html
├── Title input (katta, H1 size)
│
├── 📝 WYSIWYG Editor:
│   ├── Toolbar: Bold | Italic | H2 | H3 | List | Link | Image | Code | Table
│   ├── Content area (rich text, min-height 400px)
│   ├── Drag & drop image upload
│   └── Markdown shortcut support
│
├── O'ng sidebar (300px):
│   ├── Status: Draft / Published
│   ├── Category select
│   ├── Tags input (multi)
│   ├── SEO: Meta title + description
│   ├── Slug: auto-generated, editable
│   ├── Author info (read-only)
│   ├── Created / Updated dates
│   └── "👁 Ko'rib chiqish" (preview mode)
│
├── Actions:
│   ├── "💾 Qoralama saqlash" (auto-save har 30s)
│   ├── "🚀 Nashr qilish" (primary)
│   └── "🗑 O'chirish" (red, confirmation)
│
└── Version history (sidebar drawer):
    ├── Previous versions list
    └── Diff viewer
```

### 03-categories.html — Tarkibi

```
📋 CATEGORIES:
├── Tab: Maqolalar | [Kategoriyalar] | ...
│
├── "➕ Yangi kategoriya" button
│
├── Categories list (drag & drop sortable):
│   ├── 📁 Category card:
│   │   ├── Icon + Name + Description
│   │   ├── Articles count
│   │   ├── Visibility: Public / Private
│   │   ├── ⇅ Drag handle (reorder)
│   │   └── Edit | Delete
│   │
│   └── Sub-categories (nested, collapsible)
│
├── Category editor modal:
│   ├── Name input
│   ├── Description textarea
│   ├── Icon select (emoji yoki icon library)
│   ├── Parent category select (for nesting)
│   ├── Visibility: Public / Private
│   └── "Saqlash" button
```

### 04-kb-settings.html — Tarkibi

```
📋 KB SETTINGS:
├── Tab: ... | [Sozlamalar] | ...
│
├── 🌐 Public URL:
│   ├── Custom domain: help.yourdomain.com
│   └── Default: chatflow.uz/kb/your-workspace
│
├── 🎨 Branding:
│   ├── Logo upload
│   ├── Primary color
│   ├── Header text
│   ├── Footer text
│
├── 🔍 Search settings:
│   ├── ☑ Search enabled
│   ├── ☑ Popular articles section
│   ├── ☑ Related articles
│
├── 💬 Chat integration:
│   ├── ☑ "Chat boshlash" button on KB pages
│   ├── ☑ Suggest KB articles in chat
│
└── 💾 "Saqlash" button
```

### 05-kb-analytics.html — Tarkibi

```
📋 KB ANALYTICS:
├── Tab: ... | [Analitika]
│
├── 📊 KPIs (4 cards):
│   ├── Jami ko'rishlar: 12,456
│   ├── Noyob tashrif: 8,234
│   ├── O'rtacha o'qish: 2.5 min
│   └── Helpful rate: 87%
│
├── 📈 Charts:
│   ├── Page views trend (line chart, 30 days)
│   ├── Top 10 articles (bar chart)
│   ├── Search queries (word cloud yoki table)
│   └── Failed searches (no results)
│
├── 📋 Helpful/Not helpful per article:
│   ├── Article | 👍 Helpful | 👎 Not | Rate
│
└── ⬇️ "Export" → CSV
```

**Jami:** 5 HTML + 5 JS

---

## 📂 16-addons/ — Add-ons Marketplace

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **🧩 Add-ons — ACTIVE**
> **Layout:** Header + Sidebar + Main Content
> **Figma docs:** 24-addons-marketplace.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings               │
│  💳 Billing               │
│  🧩 Add-ons       ◀━━━━━│━━ ACTIVE
│  🖥 Developer             │
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-addons-catalog.html** | Marketplace katalog | ✅ | ❌ | ❌ |
| 2 | **02-active-addons.html** | Faol add-onlar | ✅ | ❌ | ❌ |
| 3 | **03-addon-detail.html** | Add-on batafsil sahifasi | ✅ | ❌ | ❌ |
| 4 | **04-addon-settings.html** | Add-on sozlamalari | ✅ | ❌ | ❌ |

> **Rolle:** Add-ons faqat **Admin** uchun. Agent bunga kira olmaydi.

### 01-addons-catalog.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(ADDONS active) + Main

📋 CONTENT:
├── H1: "Add-ons Marketplace" + Search (320px)
├── 2 Tab bar: [Katalog] | Faol add-onlar
│
├── 🏷 Categories (horizontal pills):
│   ├── Barchasi | Integratsiya | Analitika | Avtomatlashtirish | CRM | Xavfsizlik
│
├── 🧩 ADD-ONS GRID (3 col):
│   ├── Add-on card:
│   │   ├── Icon (48px)
│   │   ├── Name
│   │   ├── Short description (2 line)
│   │   ├── Rating: ⭐ 4.5 (120 reviews)
│   │   ├── Price: "Bepul" / "$9/oy" / "Pro+ plan"
│   │   ├── Status: "O'rnatish" / "O'rnatilgan ✓"
│   │   └── Click → 03-addon-detail.html
│   │
│   ├── Examples:
│   │   ├── 🔗 Telegram Bot Integration
│   │   ├── 📊 Advanced Analytics
│   │   ├── 🤖 AI Chatbot
│   │   ├── 📧 Email Marketing
│   │   ├── 🔒 Two-Factor Auth
│   │   └── 🔗 Zapier Integration
│
└── Pagination / "Ko'proq ko'rsatish" button
```

### 02-active-addons.html — Tarkibi

```
📋 ACTIVE ADD-ONS:
├── Tab: Katalog | [Faol add-onlar]
│
├── Active add-ons list:
│   ├── Add-on card (expanded):
│   │   ├── Icon + Name + Version
│   │   ├── Status: 🟢 Active / 🔴 Error / 🟡 Updating
│   │   ├── Installed: 2026-01-15
│   │   ├── "⚙️ Sozlamalar" → 04-addon-settings.html
│   │   └── "🗑 O'chirish" → confirmation modal
│
├── 📊 Usage stats per add-on
│
└── Auto-update toggle: ON/OFF
```

### 03-addon-detail.html — Tarkibi

```
📋 ADD-ON DETAIL (full page):
├── ← "Marketplacega qaytish" → 01-addons-catalog.html
│
├── Header: Icon (64px) + Name + Developer + Rating
│
├── 📸 Screenshots carousel (3-5 images)
│
├── 📋 Tabs: Umumiy | O'rnatish | Sharhlar | Changelog
│
├── TAB: Umumiy
│   ├── Full description (rich text)
│   ├── Features list
│   ├── Requirements: "Pro+ plan kerak"
│   ├── Compatibility info
│
├── TAB: O'rnatish
│   ├── Step-by-step guide
│   ├── Configuration instructions
│
├── TAB: Sharhlar
│   ├── Rating distribution (5-1 star bars)
│   ├── Review list: User + Rating + Comment + Date
│   └── "Sharh qoldirish" form
│
├── O'ng sidebar (300px):
│   ├── Price: "$9/oy"
│   ├── "O'rnatish" (primary button, xl)
│   ├── Developer info: Name + Website + Support email
│   ├── Version: 2.1.0
│   ├── Last updated: 2026-02-10
│   ├── Installs: 500+
│   └── Category: Integratsiya
```

### 04-addon-settings.html — Tarkibi

```
📋 ADD-ON SETTINGS (per add-on):
├── ← "Faol add-onlar" → 02-active-addons.html
│
├── Add-on header: Icon + Name + Version + Status
│
├── ⚙️ Configuration:
│   ├── API Key input (masked)
│   ├── Webhook URL input
│   ├── Feature toggles (add-on specific)
│   ├── Notification preferences
│
├── 📊 Usage:
│   ├── API calls this month: 1,200
│   ├── Events processed: 3,456
│
├── 🔄 Update:
│   ├── Current: v2.1.0 | Latest: v2.2.0
│   ├── "Yangilash" button
│   └── Auto-update toggle
│
├── 💾 "Saqlash" button
│
└── ⚠️ Danger:
    └── "Add-on'ni o'chirish" (red) → confirmation
```

**Jami:** 4 HTML + 4 JS

---

## 📂 17-developer/ — Developer Tools

> **Turi:** Dashboard modul
> **Sidebar:** ✅ **🖥 Developer — ACTIVE**
> **Layout:** Header + Sidebar + Main Content (tabbed)
> **Figma docs:** 26-developer.md

### Sidebar holati:

```
┌──────────────────────────┐
│  ─── SOZLAMALAR ────────  │
│  ⚙️ Settings               │
│  💳 Billing               │
│  🧩 Add-ons               │
│  🖥 Developer    ◀━━━━━━│━━ ACTIVE
└──────────────────────────┘
```

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | Admin | Agent | Status |
|---|-----------|--------|-------|-------|--------|
| 1 | **01-api-keys.html** | API kalitlari boshqaruvi | ✅ | ❌ | ❌ |
| 2 | **02-webhooks.html** | Webhook sozlamalari | ✅ | ❌ | ❌ |
| 3 | **03-logs.html** | API loglar | ✅ | ❌ | ❌ |

> **Rolle:** Developer tools faqat **Admin** uchun. Agent bunga kira olmaydi.

### 01-api-keys.html — Tarkibi

```
📐 LAYOUT: Header + Sidebar(DEVELOPER active) + Main

📋 CONTENT:
├── H1: "Developer" + "📖 API Docs" (tashqi link)
├── 3 Tab bar: [API Keys] | Webhooks | Loglar
│
├── 🔑 API KEYS:
│   ├── "➕ Yangi kalit" button → modal
│   │
│   ├── Keys table:
│   │   ├── Nomi | Key (masked: sk-****-xxxx) | Yaratilgan | Oxirgi ishlatilish | Status | ⋮
│   │   ├── "👁 Ko'rsatish" → full key (bir marta)
│   │   ├── ⋮ Menu: Revoke | Rename | Copy
│   │   └── Status: 🟢 Active | 🔴 Revoked
│   │
│   ├── Create Key modal:
│   │   ├── Name input
│   │   ├── Permissions checkboxes: Read | Write | Admin
│   │   ├── Expiry: Never | 30 days | 90 days | 1 year
│   │   └── "Yaratish" → generated key (copy immediately!)
│   │
│   └── ⚠️ Warning: "Kalitni xavfsiz saqlang, qayta ko'rsatilmaydi"
```

### 02-webhooks.html — Tarkibi

```
📋 WEBHOOKS:
├── Tab: API Keys | [Webhooks] | Loglar
│
├── "➕ Yangi webhook" button
│
├── Webhooks list:
│   ├── Webhook card:
│   │   ├── URL: https://yourapp.com/webhook
│   │   ├── Events: chat.created, chat.closed, message.new
│   │   ├── Status: 🟢 Active / 🔴 Failed (last 5 attempts)
│   │   ├── Last triggered: 5 min ago
│   │   └── Edit | Test | Delete
│
├── Webhook editor:
│   ├── URL input
│   ├── Secret key (auto-generated)
│   ├── Events checklist:
│   │   ├── ☑ chat.created
│   │   ├── ☑ chat.closed
│   │   ├── ☑ message.new
│   │   ├── ☑ contact.created
│   │   ├── ☑ agent.status_changed
│   │   └── ... (15+ events)
│   ├── "🧪 Test webhook" → send sample payload
│   └── "Saqlash" button
│
└── 📋 Recent deliveries (last 20):
    ├── Event | Status (✅/❌) | Response code | Timestamp
    └── Click → payload detail (request/response JSON)
```

### 03-logs.html — Tarkibi

```
📋 API LOGS:
├── Tab: API Keys | Webhooks | [Loglar]
│
├── 📋 Filters:
│   ├── Date range picker
│   ├── Status filter: All | 2xx | 4xx | 5xx
│   ├── Method: GET | POST | PUT | DELETE
│   ├── Endpoint search
│
├── 📋 Logs table:
│   ├── Timestamp | Method | Endpoint | Status | Duration | Key
│   ├── Color-coded status: 🟢 200 | 🟡 401 | 🔴 500
│   └── Click row → detail panel:
│       ├── Request: Headers + Body (JSON, syntax highlighted)
│       ├── Response: Status + Headers + Body
│       └── "📋 Copy curl" button
│
├── 📊 Stats (tepada):
│   ├── Total requests today: 1,234
│   ├── Error rate: 0.5%
│   ├── Avg latency: 45ms
│
└── Pagination + "⬇️ Export" CSV
```

**Jami:** 3 HTML + 3 JS

---

## 📂 18-system/ — System Pages

> **Turi:** Standalone sahifalar (sidebar yo'q yoki minimal)
> **Sidebar:** ❌ Yo'q (error va maintenance sahifalari)
> **Layout:** Centered content (max-width 600px, vertically centered)
> **Figma docs:** 27-error-pages.md

### Sahifalar & Rol Variants

| # | Fayl nomi | Maqsad | All Roles | Status |
|---|-----------|--------|-----------|--------|
| 1 | **01-error-404.html** | Sahifa topilmadi | ✅ | ❌ |
| 2 | **02-error-500.html** | Server xatosi | ✅ | ❌ |
| 3 | **03-error-403.html** | Ruxsat yo'q | ✅ | ❌ |
| 4 | **04-maintenance.html** | Texnik ishlar | ✅ | ❌ |
| 5 | **05-offline.html** | Internet yo'q | ✅ | ❌ |

> **Rolle:** Error pages barcha rollar uchun (Admin, Agent, Client). Barcha foydalanuvchilar xatolik ko'rishi mumkin.

### 01-error-404.html — Tarkibi

```
📋 404 PAGE (centered, max-width 600px):
├── 🎨 Illustration (404 themed, 300×200px)
├── H1: "404"
├── H2: "Sahifa topilmadi"
├── P: "Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan"
│
├── 🔍 Search input: "Nima qidiryapsiz?"
│
├── Buttons:
│   ├── "🏠 Bosh sahifaga" (primary) → dashboard yoki landing
│   └── "← Orqaga" (ghost) → browser back
│
└── 💡 Tavsiyalar:
    ├── "📥 Inbox" → inbox
    ├── "📊 Dashboard" → dashboard
    └── "❓ Yordam" → help center
```

### 02-error-500.html — Tarkibi

```
📋 500 PAGE:
├── 🎨 Illustration (server error themed)
├── H1: "500"
├── H2: "Server xatosi"
├── P: "Kutilmagan xatolik yuz berdi. Jamoamiz xabardor qilindi."
│
├── Error ID: "ERR-20260218-1423" (support uchun)
│
├── Buttons:
│   ├── "🔄 Qayta yuklash" (primary) → page reload
│   ├── "📩 Muammoni xabar qilish" → help tickets
│   └── "🏠 Bosh sahifaga" → dashboard
│
└── Status page link: "Tizim holati" → status.chatflow.uz
```

### 03-error-403.html — Tarkibi

```
📋 403 PAGE:
├── 🎨 Illustration (lock/shield themed)
├── H1: "403"
├── H2: "Ruxsat berilmagan"
├── P: "Bu sahifaga kirish uchun ruxsatingiz yo'q"
│
├── ℹ️ Role info card:
│   ├── "Sizning rolingiz: Operator"
│   ├── "Talab qilinadi: Admin"
│   └── "Admin bilan bog'laning"
│
├── Buttons:
│   ├── "🏠 Bosh sahifaga" (primary) → dashboard
│   └── "← Orqaga" → browser back
│
└── 📧 "Admin ga so'rov yuborish" → request access modal
```

### 04-maintenance.html — Tarkibi

```
📋 MAINTENANCE PAGE:
├── 🎨 Illustration (tools/wrench themed)
├── H1: "Texnik ishlar"
├── H2: "Tizim yangilanmoqda"
├── P: "Tez orada qaytamiz!"
│
├── ⏱ Taxminiy vaqt:
│   ├── "Boshlanish: 18:00"
│   ├── "Tugash: 20:00 (taxminan)"
│   ├── Countdown timer: "01:23:45"
│
├── 📋 Nima yangilanmoqda (list):
│   ├── ✅ Database migration
│   ├── ⏳ UI yangilanishi
│   ├── ⏳ API v2.5 deployment
│
├── 📧 "Tayyor bo'lganda xabar bering" → email input + subscribe
│
└── 🔗 Links:
    ├── Status page: status.chatflow.uz
    └── Twitter: @chatflow_uz
```

### 05-offline.html — Tarkibi

```
📋 OFFLINE PAGE:
├── 🎨 Illustration (no-wifi themed)
├── H1: "Internet aloqasi yo'q"
├── P: "Iltimos, internet ulanishingizni tekshiring"
│
├── 🔄 "Qayta urinish" (primary) → retry connection
│
├── Auto-check:
│   ├── Har 5 sekund avtomatik tekshiradi
│   ├── "Tekshirilmoqda..." spinner
│   ├── Aloqa tiklanganda avtomatik reload
│
└── 💡 Tips:
    ├── "Wi-Fi yoqilganligini tekshiring"
    ├── "Router-ni qayta yoqing"
    └── "VPN o'chirib ko'ring"
```

**Jami:** 5 HTML + 5 JS

---

# ═══════════════════════════════════════════════════════════════
# SHARED / GLOBAL KOMPONENTLAR (Alohida papkaga emas, barcha sahifalarga tegishli)
# ═══════════════════════════════════════════════════════════════

## 🔍 Global Search Modal (Ctrl+K)

> Bu alohida sahifa emas — **har bir dashboard sahifada** Ctrl+K bosganida ochiladi.

```
📋 GLOBAL SEARCH MODAL (640×600px, centered, backdrop blur):
├── 🔍 Search input (auto-focus, large)
├── Recent searches (5 ta)
│
├── Results (grouped):
│   ├── 💬 Chatlar (top 3)
│   ├── 👥 Kontaktlar (top 3)
│   ├── 👤 Agentlar (top 3)
│   ├── 📚 KB maqolalar (top 3)
│   └── ⚙️ Sozlamalar (matching items)
│
├── Keyboard navigation:
│   ├── ↑↓ — navigate results
│   ├── Enter — open selected
│   └── Esc — close modal
│
└── "Barcha natijalar" → filtered list page
```

## 🔔 Notification Center (Bell dropdown)

> Bu alohida sahifa emas — header-dagi 🔔 bell icon bosilganda ochiladi.

```
📋 NOTIFICATION DROPDOWN (420px, top-right):
├── Header: "Bildirishnomalar" + "Barchasini o'qilgan deb belgilash"
│
├── Tabs: Barchasi | 💬 Chatlar | 👤 Mention | 👥 Jamoa | ⚙️ Tizim
│
├── Notifications list:
│   ├── Notification item:
│   │   ├── Icon (type-specific)
│   │   ├── Title: "Yangi chat: Alisher K."
│   │   ├── Preview: "Salom, buyurtmam haqida..."
│   │   ├── Time: "2 min oldin"
│   │   ├── Unread dot (ko'k)
│   │   └── Click → related page
│   │
│   ├── Types:
│   │   ├── 💬 Yangi chat, xabar, tayinlash
│   │   ├── 👤 @mention (chat yoki team chat)
│   │   ├── 👥 Yangi agent, role change
│   │   ├── ⚙️ Tizim: update, maintenance
│   │   └── 💳 Billing: invoice, payment
│
├── "Barchasini ko'rish" → settings/notifications
│
└── Empty state: "Bildirishnomalar yo'q" + illustration
```

## 🌍 Language Selector Modal

> Settings → Profile ichida yoki Header → User menu → Language.

```
📋 LANGUAGE MODAL (480px):
├── H3: "Tilni tanlang"
│
├── Language grid (2 col):
│   ├── 🇺🇿 O'zbek (default) ✓
│   ├── 🇷🇺 Русский
│   ├── 🇬🇧 English
│   ├── 🇹🇷 Türkçe
│   ├── 🇰🇿 Қазақша
│   ├── 🇮🇹 Italiano
│
├── "Saqlash" → page reload with new language
└── "Bekor qilish"
```

## 🌙 Dark Mode Toggle

> Settings → Profile → Theme yoki Header → User menu → Theme.

```
CSS Variables (Dark Mode):
--page-bg: #0F172A;
--surface-bg: #1E293B;
--surface-border: #334155;
--text-primary: #F1F5F9;
--text-secondary: #94A3B8;
--sidebar-bg: #1E293B;
--sidebar-active-bg: #312E81;
--sidebar-active-text: #A5B4FC;
--header-bg: #1E293B;
```

---

# ═══════════════════════════════════════════════════════════════
# JAMI STATISTIKA
# ═══════════════════════════════════════════════════════════════

## Papka bo'yicha hisob (+ ROLE ACCESS)

| # | Papka | HTML | JS | Access | Status |
|---|-------|------|----|---------|----|
| 01 | landing/ | 1 | 1 | ✅✅✅ All | ❌ Yaratilishi kerak |
| 02 | auth/ | 5 | 5 | ✅✅✅ All | ✅ HTML 5/5 tayyor |
| 03 | onboarding/ | 6 | 6 | ✅✅✅ All | ✅ HTML 6/6 tayyor |
| 04 | dashboard/ | 1 | 1 | 🔴✅ A>Ag | ⚠️ 1/1 root page |
| 05 | inbox/ | 3 | 3 | 🔴✅❌ | ⚠️ 1/3 mavjud |
| 06 | automation/ | 4 | 4 | 🔴❌❌ | ⚠️ 1/4 mavjud |
| 07 | team/ | 4 | 4 | 🔴❌❌ | ❌ Yaratilishi kerak |
| 08 | analytics/ | 11 | 11 | 🔴✅⚠️ | ❌ Yaratilishi kerak |
| 09 | settings/ | 8 | 8 | 🔴✅✅ | ❌ Yaratilishi kerak |
| 10 | billing/ | 4 | 4 | 🔴❌❌ | ❌ Yaratilishi kerak |
| 11 | chat-widget/ | 5 | 5 | ❌❌✅ | ❌ Yaratilishi kerak |
| 12 | contacts/ | 6 | 6 | 🔴✅❌ | ❌ Yaratilishi kerak |
| 13 | visitors/ | 3 | 3 | 🔴✅❌ | ❌ Yaratilishi kerak |
| 14 | team-chat/ | 3 | 3 | 🔴✅❌ | ❌ Yaratilishi kerak |
| 15 | knowledge-base/ | 5 | 5 | 🔴✅❌ | ❌ Yaratilishi kerak |
| 16 | addons/ | 4 | 4 | 🔴❌❌ | ❌ Yaratilishi kerak |
| 17 | developer/ | 3 | 3 | 🔴❌❌ | ❌ Yaratilishi kerak |
| 18 | system/ | 5 | 5 | ✅✅✅ All | ❌ Yaratilishi kerak |
| — | **JAMI** | **81** | **81** | — | — |

**Role Legend:** 🔴 Admin | ✅ Agent | ❌ Client | ⚠️ Limited (my-stats only)

## Mavjud vs Kerak

```
HTML:  ██████░░░░░░░░░░░░░░░░░░░░░░░░  14/81  (17%)
JS:    ████░░░░░░░░░░░░░░░░░░░░░░░░░░  10/81  (12%)
```

## ROLE-BASED DASHBOARD ACCESS SUMMARY

**🔴 ADMIN** (Barcha dashboard modules)
- Sidebar items: 14 (ASOSIY: 8 + SOZLAMALAR: 4)
- Pages: 66 (04-dashboard root + 05-17 all modules)
- Access: Full (create, read, update, delete, manage team, billing)
- No restrictions

**💼 AGENT/OPERATOR** (Cheklangan modules)
- Sidebar items: 6 (📥 Inbox, 👥 Kontaktlar, 👁 Visitors, 💬 Team Chat, 📊 Analytics [→my-stats], 📚 KB)
- Pages: 18 (05 inbox 3 • 12 contacts 2 • 13 visitors 2 • 14 team-chat 2 • 08 analytics 11-only • 15 kb partial)
- Access: Limited (read own data, can't manage team/billing/automation)
- No: 06 automation, 07 team, 10 billing, 16 addons, 17 developer

**👤 CLIENT** (Widget users only)
- Sidebar: ❌ None (dashboard kiris yo'q)
- Pages: 5 (11-chat-widget 4 + 09-settings [02 widget] + [05 profile] + [06-08 GDPR])
- Access: Widget chat + minimal settings
- Entry: Landing → Auth → [optional] Onboarding → Widget



## Sidebar Sinxronizatsiya Qoidalari

| Qoida | Tavsif |
|-------|--------|
| **1. Bir xil HTML** | Barcha dashboard sahifalarida sidebar HTML kodi 100% bir xil |
| **2. Faqat active o'zgaradi** | Sahifa papkasiga qarab faqat `active` class qo'shiladi |
| **3. Badge-lar dynamic** | Inbox count, Visitors count, Team Chat count — JS orqali yangilanadi |
| **4. Collapse holati** | localStorage-da saqlanadi, sahifalar o'rtasida saqlanadi |
| **5. Responsive** | Desktop: 240px expanded, Tablet: 64px collapsed, Mobile: bottom nav |
| **6. Tooltip collapsed** | Collapsed holatda hover → tooltip (dark bg, white text) |
| **7. Active stil** | bg `#E0E7FF`, text/icon `#4F46E5`, left-border 3px `#4F46E5` |
| **8. Section dividers** | "ASOSIY", "SOZLAMALAR", "QO'SHIMCHA" — uppercase, 12px, gray-400 |

## Sidebar Active Mapping (Qaysi sahifada qaysi item active)

```
01-landing/          → Sidebar YO'Q
02-auth/             → Sidebar YO'Q
03-onboarding/       → Sidebar YO'Q
04-dashboard/        → Dashboard item (maxsus)
05-inbox/            → 📥 Inbox ACTIVE
06-automation/       → ⚡ Automation ACTIVE
07-team/             → 👤 Team ACTIVE
08-analytics/        → 📊 Analytics ACTIVE
09-settings/         → ⚙️ Settings ACTIVE
10-billing/          → 💳 Billing ACTIVE
11-chat-widget/      → Sidebar YO'Q
12-contacts/         → 👥 Kontaktlar ACTIVE
13-visitors/         → 👁 Online Visitors ACTIVE
14-team-chat/        → 💬 Team Chat ACTIVE
15-knowledge-base/   → 📚 Knowledge Base ACTIVE
16-addons/           → 🧩 Add-ons ACTIVE
17-developer/        → 🖥 Developer ACTIVE
18-system/           → Sidebar YO'Q
```

---

## ISHLASH TARTIBI (TAVSIYA)

| # | Papka | Fayllar soni | Ustunlik | Izoh |
|---|-------|-------------|----------|------|
| 1 | 01-landing/ | 1 HTML + 1 JS | 🔴 Yuqori | Birinchi taassurot |
| 2 | 05-inbox/ | 2 HTML + 2 JS (2,3) | 🔴 Yuqori | Core feature, 1 mavjud |
| 3 | 11-chat-widget/ | 5 HTML + 5 JS | 🔴 Yuqori | Mijoz uchun widget |
| 4 | 12-contacts/ | 6 HTML + 6 JS | 🔴 Yuqori | CRM module |
| 5 | 13-visitors/ | 3 HTML + 3 JS | 🟡 O'rta | Real-time tracking |
| 6 | 06-automation/ | 3 HTML + 3 JS (2,3,4) | 🟡 O'rta | 1 mavjud |
| 7 | 07-team/ | 4 HTML + 4 JS | 🟡 O'rta | Team management |
| 8 | 14-team-chat/ | 3 HTML + 3 JS | 🟡 O'rta | Ichki chat |
| 9 | 08-analytics/ | 11 HTML + 11 JS | 🟡 O'rta | Mo'l hisobotlar |
| 10 | 15-knowledge-base/ | 5 HTML + 5 JS | 🟡 O'rta | KB module |
| 11 | 09-settings/ | 8 HTML + 8 JS | 🟡 O'rta | Sozlamalar + GDPR |
| 12 | 10-billing/ | 4 HTML + 4 JS | 🟢 Past | Billing |
| 13 | 16-addons/ | 4 HTML + 4 JS | 🟢 Past | Marketplace |
| 14 | 17-developer/ | 3 HTML + 3 JS | 🟢 Past | API tools |
| 15 | 18-system/ | 5 HTML + 5 JS | 🟢 Past | Error pages |
| 16 | 02-auth/ | 3 JS (02,03,04) | 🟢 Past | HTML mavjud |
| — | **JAMI yaratish kerak** | **~67 HTML + ~71 JS** | — | — |

---

> **Tayyor!** Har bir papkaning sidebar holati, sahifalar tarkibi va navigatsiya xaritasi yuqorida batafsil yozilgan. Yaratishni boshlashda ushbu hujjatni **reference** sifatida ishlating.
