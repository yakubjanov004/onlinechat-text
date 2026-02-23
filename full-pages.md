# QULAY CHAT — To'liq Sahifalar Ro'yxati (figma-html-pages + figma-designs)

> **Maqsad:** 18 papka uchun barcha HTML sahifalar + Figma JS fayllar, har bir page ning maqsadi va button navigatsiyalari.
> **Manba:** figma-docs/ (00–34), figma-html-pages/, figma-designs/

---

## HOZIRGI HOLAT (Mavjud fayllar)

### figma-html-pages/ (HTML)

| Papka | Fayllar | Status |
|-------|---------|--------|
| 01-landing/ | — | ❌ Bo'sh |
| 02-auth/ | 01-login, 02-register, 03-email-verify, 04-forgot-password, 05-welcome-first-login | ✅ 5/5 |
| 03-onboarding/ | 01-welcome, 02-onboarding-setup, 03-workspace, 04-widget-customize, 05-widget-install, 06-widget-verify | ✅ 6/6 |
| 04-dashboard/ | 01-dashboard + DASHBOARD-PAGES-PLAN.md | ⚠️ 1/66 |
| 05-inbox/ | 01-inbox-chat | ⚠️ 1/1 |
| 06-automation/ | 01-working-hours | ⚠️ 1/1 |
| 07-team/ | — | ❌ Bo'sh |
| 08-analytics/ | — | ❌ Bo'sh |
| 09-settings/ | — | ❌ Bo'sh |
| 10-billing/ | — | ❌ Bo'sh |
| 11-chat-widget/ | — | ❌ Bo'sh |
| 12-contacts/ | — | ❌ Bo'sh |
| 13-visitors/ | — | ❌ Bo'sh |
| 14-team-chat/ | — | ❌ Bo'sh |
| 15-knowledge-base/ | — | ❌ Bo'sh |
| 16-addons/ | — | ❌ Bo'sh |
| 17-developer/ | — | ❌ Bo'sh |
| 18-system/ | — | ❌ Bo'sh |

### figma-designs/ (Figma Plugin JS)

| Papka | Fayllar | Status |
|-------|---------|--------|
| 01-landing/ | — | ❌ Bo'sh |
| 02-auth/ | 01-login.js, 05-welcome-first-login.js | ⚠️ 2/5 |
| 03-onboarding/ | 01-welcome.js, 02-onboarding-setup.js, 03-workspace.js, 04-widget-customize.js, 05-widget-install.js, 06-widget-verify.js | ✅ 6/6 |
| 04-dashboard/ | — | ❌ Bo'sh |
| 05-inbox/ | 01-inbox-chat.js | ⚠️ 1/1 |
| 06-automation/ | 01-working-hours.js | ⚠️ 1/1 |
| 07–18 | — | ❌ Bo'sh |

---

## 📂 01-landing/ — Landing Page (Bitta Uzun Scroll Sahifa)

**Figma docs:** 02-landing-hero-header.md, 03-landing-trust-kimlar.md, 04-landing-ishlaydi-imkoniyatlar.md, 05-landing-integratsiya-afzallik.md, 06-landing-tariflar-cta-footer.md

> **Muhim:** Figma doc bo'yicha landing **bitta uzun scroll sahifa**. Seksiyalar alohida page emas, bitta HTML faylda bo'ladi.

| Fayl | Maqsad | Seksiyalar & Buttonlar |
|------|--------|----------------------|
| **01-landing.html** | To'liq landing page (bitta scroll) | **Header (sticky 72px):** Logo, Nav links (Imkoniyatlar, Integratsiyalar, Tariflar, Haqimizda, Bog'lanish), "Kirish" ghost → 02-auth/01-login.html, "Boshlash" primary → 02-auth/02-register.html |
| | | **Hero:** Sarlavha + subtitle + "Bepul boshlash" → 02-auth/02-register.html, "Demo so'rash" → contact form modal, Screenshot mockup |
| | | **Trust:** "Kim qo'llanmoqda?" — Logos row (kompaniyalar), Statistikalar (1000+ users, 50+ companies) |
| | | **Qanday ishlaydi:** 3-step illustration (O'rnating → Ulaning → Javob bering) |
| | | **Imkoniyatlar:** 6 ta feature card (Live Chat, Chatbot, Analytics, Team, KB, Integrations) |
| | | **Integratsiyalar:** Channel icons (Telegram, WhatsApp, Instagram, Facebook, Email) |
| | | **Afzalliklar:** "Nega aynan biz?" solishtiruv cards |
| | | **Tariflar:** 4 ta plan card (Free $0, Pro $49, Business $99, Enterprise Custom), "Tanlash" → 02-auth/02-register.html |
| | | **Final CTA:** "Hoziroq boshlang" katta banner, "Bepul sinab ko'ring" → 02-auth/02-register.html |
| | | **Footer:** Logo, Nav links, Social links, Legal (Privacy, Terms), Copyright |

**figma-designs/:** 01-landing.js yaratilishi kerak

**Jami:** 1 HTML + 1 JS

---

## 📂 02-auth/ — Authentication

**Figma docs:** 07-auth-signup-login.md

| Fayl | Maqsad | Buttonlar |
|------|--------|----------|
| **01-login.html** ✅ | Email + Password kirish | "Kirish" → 04-dashboard/01-dashboard.html (mavjud user) yoki 03-onboarding/01-welcome.html (yangi user) |
| | | "Parolni unutdingizmi?" → 04-forgot-password.html |
| | | "Ro'yxatdan o'ting" → 02-register.html |
| | | Google/GitHub OAuth buttons |
| **02-register.html** ✅ | Email + Password + Kompaniya | "Ro'yxatdan o'tish" → 03-email-verify.html |
| | | "Allaqachon hisobim bor?" → 01-login.html |
| | | Google/GitHub OAuth buttons |
| **03-email-verify.html** ✅ | 6-xonali OTP tasdiqlash | "Tasdiqlash" → 05-welcome-first-login.html |
| | | "Qayta yuborish" → resend email |
| | | "Emailni o'zgartirish" → 02-register.html |
| **04-forgot-password.html** ✅ | Email kiritish → yangi parol | "Parolni tiklash" → success → 01-login.html |
| | | "Orqaga" → 01-login.html |
| **05-welcome-first-login.html** ✅ | Xush kelibsiz + yo'nalish tanlash | "Onboarding →" → 03-onboarding/01-welcome.html |
| | | "Dashboardga o'tish" → 04-dashboard/01-dashboard.html |

**figma-designs/:** 01-login.js ✅, 05-welcome-first-login.js ✅ — 02, 03, 04 yo'q

**Jami:** 5 HTML ✅ + 2/5 JS

---

## 📂 03-onboarding/ — Onboarding (5 Bosqich)

**Figma docs:** 08-onboarding-welcome-workspace.md, 09-onboarding-widget-install.md

| Fayl | Maqsad | Buttonlar |
|------|--------|----------|
| **01-welcome.html** ✅ | Welcome intro (1/5) | "Boshlanmoq →" → 02-onboarding-setup.html |
| **02-onboarding-setup.html** ✅ | Workspace nomi, timezone, industry (2/5) | "Keyingisi →" → 03-workspace.html |
| | | "← Orqaga" → 01-welcome.html |
| **03-workspace.html** ✅ | Jamoa: ism, rol, avatar (3/5) | "Keyingisi →" → 04-widget-customize.html |
| | | "← Orqaga" → 02-onboarding-setup.html |
| **04-widget-customize.html** ✅ | Widget: rang, pozitsiya, welcome msg (4/5) | "Keyingisi →" → 05-widget-install.html |
| | | "← Orqaga" → 03-workspace.html |
| **05-widget-install.html** ✅ | Code snippet copy-paste (5/5) | "O'rnatdim ✓" → 06-widget-verify.html |
| | | "← Orqaga" → 04-widget-customize.html |
| | | "Keyinroq" skip → 04-dashboard/01-dashboard.html |
| **06-widget-verify.html** ✅ | Widget ishlashini tekshirish | "Dashboard →" → 04-dashboard/01-dashboard.html |
| | | "Qayta tekshirish" → retry |

**figma-designs/:** 01–06 barcha JS fayllar ✅

**Jami:** 6 HTML ✅ + 6/6 JS ✅

---

## 📂 04-dashboard/ — Dashboard (Asosiy ishchi muhit)

**Figma docs:** 10-dashboard-layout.md + barcha modul docs (11–30)

> **To'liq 66 ta sahifa rejalashtirilgan.** Batafsil ro'yxat: [DASHBOARD-PAGES-PLAN.md](figma-html-pages/04-dashboard/DASHBOARD-PAGES-PLAN.md)

| Sub-papka | Sahifalar | Qisqacha |
|-----------|----------|---------|
| *(root)* | **01-dashboard.html** ✅ | Umumiy ko'rinish: 4 metric card, 2 chart, sidebar |
| inbox/ | 02-inbox, 03-chat-open, 04-info-sidebar | Chat list, ochiq chat (3 panel), customer info |
| contacts/ | 05-list, 06-profile, 07-organizations, 08-org-detail, 09-segments, 10-import-export | CRM: kontaktlar, profillar, segmentlar |
| visitors/ | 11-visitors, 12-profile, 13-map | Online real-time tracking, geo map |
| automation/ | 14-hours, 15-reply, 16-triggers, 17-greetings | Ish vaqti, auto-reply, triggerlar |
| team/ | 18-agents, 19-profile, 20-roles, 21-invitations | Agentlar, rollar, takliflar |
| team-chat/ | 22-chat, 23-room-settings, 24-notifications | Ichki chat: DM + rooms |
| analytics/ | 25-overview, 26-response, 27-operators, 28-op-detail, 29-sla, 30-channels, 31-segments, 32-tags, 33-custom, 34-export, 35-my-stats | Analitika (Admin: 10 tab, Operator: faqat my-stats) |
| knowledge-base/ | 36-kb, 37-editor, 38-categories, 39-settings, 40-analytics | Maqolalar, WYSIWYG editor |
| settings/ | 41-workspace, 42-widget, 43-security, 44-notifications, 45-profile, **46-privacy-export, 47-privacy-delete, 48-privacy-settings** | Sozlamalar (5 tab + 3 GDPR) |
| billing/ | 49-plan, 50-payment, 51-invoices, 52-usage | Tarif, to'lov, fakturalar |
| addons/ | 53-catalog, 54-active, 55-detail, 56-settings | Marketplace, add-on sozlamalari |
| developer/ | 57-api-keys, 58-webhooks, 59-logs | API, webhook, loglar |
| help/ | 60-center, 61-article, 62-videos, 63-tickets, 64-ticket-detail | Yordam, tiketlar |
| system/ | 65-error-404, 66-error-500, 67-error-403 | Xato sahifalari |
| shared/ | 68-global-search, 69-notification-center | Ctrl+K modal, bell dropdown |

**figma-designs/:** 04-dashboard/ bo'sh — yaratilishi kerak

**Jami:** 1/69 HTML mavjud + 0 JS

---

## 📂 05-inbox/ → 17-developer/ — Standalone Sahifalar

> **Bu papkalar (05–17) dashboard sahifalarining standalone nusxalari**. Dashboard ichidagi modules bilan bir xil sahifa. Har biri uchun faqat **1 ta HTML** — main view sifatida.

| Papka | Fayl | Maqsad | Mavjud? |
|-------|------|--------|---------|
| **05-inbox/** | 01-inbox-chat.html | Inbox main view (2-panel: chat list + chat window) | ✅ |
| **06-automation/** | 01-working-hours.html | Automation main (4 tab) | ✅ |
| **07-team/** | 01-agents.html | Agents list table | ❌ |
| **08-analytics/** | 01-overview.html | Analytics overview (KPI + charts) | ❌ |
| **09-settings/** | 01-workspace.html | Settings main (5 tab) | ❌ |
| **10-billing/** | 01-plan.html | Billing plan + comparison | ❌ |
| **12-contacts/** | 01-contacts-list.html | Contacts table/card view | ❌ |
| **13-visitors/** | 01-visitors-list.html | Online visitors real-time | ❌ |
| **14-team-chat/** | 01-team-chat.html | Team chat (DM + Rooms) | ❌ |
| **15-knowledge-base/** | 01-kb-dashboard.html | KB admin panel | ❌ |
| **16-addons/** | 01-addons-catalog.html | Add-ons marketplace | ❌ |
| **17-developer/** | 01-api-keys.html | Developer API keys | ❌ |

**figma-designs/:** 05: 01-inbox-chat.js ✅, 06: 01-working-hours.js ✅. Qolganlari bo'sh.

**Jami standalone:** 2 HTML mavjud + 10 yaratilishi kerak = 12 HTML

---

## 📂 11-chat-widget/ — Live Chat Widget (Mijoz tomoni)

**Figma docs:** 18-chat-widget.md (1100 qator, juda batafsil)

> **Bu boshqa sahifalardan farq qiladi** — dashboard emas, bu **saytga embed qilinadigan widget** (360×520px).

| Fayl | Maqsad | Buttonlar / Holatlar |
|------|--------|---------------------|
| **01-widget-launcher.html** | Launcher button (56×56px circle, bottom-right) | Click → widget ochiladi |
| | | Hover 500ms → preview card (agent avatar + greeting) |
| | | Unread badge (red, "3" yoki "99+") |
| **02-widget-chat.html** | Chat oynasi (360×520px) | **Header:** Agent avatar + name + status, minimize (—), close (×) |
| | | **Messages:** Visitor (chap, gray), Agent (o'ng, primary), typing "..." |
| | | **Input:** Textarea, 😊 emoji, 📎 file attach, Send button |
| | | **Pre-chat form (agar yoqilgan):** Name, email, message → "Boshlash" |
| | | **Canned responses:** Quick reply buttons (up to 3) |
| **03-widget-offline.html** | Offline holat (agentlar yo'q) | Offline form: Name, email, message → "Xabar qoldirish" |
| | | "Javob emailga yuboriladi" info text |
| **04-widget-csat.html** | CSAT feedback (chat tugagandan keyin) | 5 yulduz rating ⭐⭐⭐⭐⭐ |
| | | Comment textarea (ixtiyoriy) |
| | | "Yuborish" → "Rahmat!" → widget closes |
| **05-widget-states.html** | Barcha holatlar showcase (test uchun) | Online, Offline, Away, Typing, Pre-chat, CSAT, File preview |

**figma-designs/:** Bo'sh, 5 JS yaratilishi kerak

**Jami:** 5 HTML + 5 JS kerak

---

## 📂 18-system/ — Tizim Sahifalari

**Figma docs:** 27-error-pages.md

| Fayl | Maqsad | Buttonlar |
|------|--------|----------|
| **01-error-404.html** | Sahifa topilmadi (404) | "🏠 Bosh sahifaga" → dashboard/landing |
| | | "← Orqaga" → browser back |
| **02-error-500.html** | Server xatosi (500) | "🔄 Qayta yuklash" → page reload |
| | | "📩 Muammoni xabar qilish" → help tickets |
| | | Error ID: "ERR-20260211-1423" |
| **03-error-403.html** | Ruxsat yo'q (403) | "🏠 Bosh sahifaga" → dashboard |
| | | Role info: "Sizning rolingiz: Operator, Talab: Admin" |
| **04-maintenance.html** | Texnik ishlar | Taxminiy vaqt ko'rsatish, status page link |
| **05-offline.html** | Internet yo'q | "🔄 Qayta urinish" → retry + auto-check |
| | | Offline illustration |

**figma-designs/:** Bo'sh, 5 JS yaratilishi kerak

**Jami:** 5 HTML + 5 JS kerak

---

## 🌐 CROSS-CUTTING MODULLAR (Alohida sahifa emas, barcha sahifalarga tegishli)

Bu modullar alohida HTML page sifatida emas, **barcha sahifalar ichiga integratsiya qilinadi:**

### 🌍 Multi-Language (Ko'p tillilik)
**Figma docs:** 31-multi-language.md (1528 qator)

- **Nima:** Til tanlash modal — header dropdown yoki settings ichida
- **Qo'llanadigan joylar:** Login page, Settings → Profile, Header → User menu
- **Tillar (Phase 1):** O'zbek (default), Русский, English, Türkçe, Қазақша, Italiano
- **RTL support:** Arabcha (Phase 2)
- **Alohida page:** ❌ — modal component, har bir sahifaga qo'shiladi

### 🛡️ GDPR & Data Deletion
**Figma docs:** 32-gdpr-data-deletion.md (2170 qator, 5 screen + 8 modal)

- **Sahifalar:** Settings ichiga qo'shilgan (46-privacy-export, 47-privacy-delete, 48-privacy-settings)
- **Komponentlar:** Data export wizard, Account deletion (30 kun countdown), Cookie consent banner, Privacy settings toggles
- **Alohida papka:** ❌ — 04-dashboard/settings/ ichida

### 📧 Email Templates
**Figma docs:** 33-email-templates.md (5097 qator, 15 template)

- **Bu HTML page EMAS** — backend email assets
- **15 template:** Email verify, Password reset, Team invite, New chat, Assignment, CSAT, Weekly digest, Monthly report, Invoice, Payment, Plan change, Data export, Account delete, Maintenance, Feature update
- **Alohida page:** ❌ — backend email service (Mailgun/SendGrid) orqali

### 🌙 Dark Mode
**Figma docs:** 34-dark-mode.md (3793 qator)

- **Bu alohida page EMAS** — CSS variables bilan barcha sahifalarga qo'llaniladi
- **Toggle:** Settings → Profile → Theme: Light / Dark / System
- **Dark ranglar:** bg #0F172A, surface #1E293B, border #334155, text #F1F5F9
- **Qo'llanish:** 10 ta dark variant (Dashboard, Inbox, Contacts, Settings, Analytics, Team, Widget, Auth, KB, Billing)

---

## GLOBAL NAVIGATSIYA XARITASI

```
🌐 PUBLIC
│
├── 01-landing/01-landing.html (bitta scroll sahifa)
│   ├── "Kirish" → 02-auth/01-login.html
│   ├── "Boshlash" → 02-auth/02-register.html
│   └── "Demo" → contact form modal
│
├── 02-auth/
│   ├── 01-login.html
│   │   ├── "Kirish" → 04-dashboard/01-dashboard.html (existing user)
│   │   ├── "Kirish" → 03-onboarding/01-welcome.html (new user)
│   │   ├── "Parolni unutdim" → 04-forgot-password.html
│   │   └── "Ro'yxatdan o'tish" → 02-register.html
│   ├── 02-register.html → 03-email-verify.html
│   ├── 03-email-verify.html → 05-welcome-first-login.html
│   ├── 04-forgot-password.html → 01-login.html
│   └── 05-welcome-first-login.html → 03-onboarding/ yoki 04-dashboard/
│
├── 03-onboarding/ (1→2→3→4→5→6→dashboard)
│   └── 06-widget-verify.html → 04-dashboard/01-dashboard.html
│
🔒 AUTHENTICATED
│
├── 04-dashboard/01-dashboard.html (MAIN HUB — 69 sahifa)
│   ├── Sidebar → inbox/, contacts/, visitors/, automation/, team/,
│   │            team-chat/, analytics/, knowledge-base/,
│   │            settings/, billing/, addons/, developer/, help/
│   ├── Header → global-search (Ctrl+K), notification-center (🔔)
│   ├── User menu → Settings, Profile, Help, 🌍 Language, Logout
│   └── system/ → 404, 500, 403
│
├── 05-17 standalone/ (har biri 1 HTML — dashboard nusxasi)
│
├── 11-chat-widget/ (embed widget — 5 HTML)
│   └── launcher → chat → offline → csat → states
│
└── 18-system/ (5 HTML — error + maintenance + offline)

💌 EMAIL TEMPLATES (15 ta — backend, sahifa emas)
🌙 DARK MODE (CSS orqali — alohida sahifa emas)
🌍 MULTI-LANGUAGE (modal component — alohida sahifa emas)
🛡️ GDPR (settings ichida — 3 qo'shimcha sahifa)
```

---

## JAMI STATISTIKA

| Kategoriya | HTML fayllar | JS fayllar | Status |
|-----------|-------------|-----------|--------|
| 01-landing | 1 | 1 | ❌ Yaratilishi kerak |
| 02-auth | 5 | 5 | ✅ HTML 5/5, JS 2/5 |
| 03-onboarding | 6 | 6 | ✅ HTML 6/6, JS 6/6 |
| 04-dashboard | 69 | 69 | ⚠️ HTML 1/69, JS 0/69 |
| 05-17 standalone | 12 | 12 | ⚠️ HTML 2/12, JS 2/12 |
| 11-chat-widget | 5 | 5 | ❌ Yaratilishi kerak |
| 18-system | 5 | 5 | ❌ Yaratilishi kerak |
| **JAMI** | **103** | **103** | **Mavjud: 14 HTML, 10 JS** |

### Mavjud / Kerak nisbati

```
HTML:  ████░░░░░░░░░░░░░░░░░░░░░░  14/103 (14%)
JS:    ███░░░░░░░░░░░░░░░░░░░░░░░░  10/103 (10%)
```

---

## ISHLASH TARTIBI (TAVSIYA)

| # | Papka | Fayllar | Ustunlik |
|---|-------|---------|----------|
| 1 | 01-landing/ | 1 HTML | 🔴 Yuqori — birinchi taassurot |
| 2 | 02-auth/ | 3 JS yaratish (02, 03, 04) | 🔴 Yuqori — entry point |
| 3 | 03-onboarding/ | — | ✅ Tayyor |
| 4 | 04-dashboard/inbox/ | 3 HTML | 🔴 Yuqori — core feature |
| 5 | 11-chat-widget/ | 5 HTML | 🔴 Yuqori — mijoz uchun |
| 6 | 04-dashboard/contacts/ | 6 HTML | 🟡 O'rta |
| 7 | 04-dashboard/visitors/ | 3 HTML | 🟡 O'rta |
| 8 | 04-dashboard/automation/ | 4 HTML | 🟡 O'rta |
| 9 | 04-dashboard/team/ | 4 HTML | 🟡 O'rta |
| 10 | 04-dashboard/team-chat/ | 3 HTML | 🟡 O'rta |
| 11 | 04-dashboard/analytics/ | 11 HTML | 🟡 O'rta |
| 12 | 04-dashboard/knowledge-base/ | 5 HTML | 🟡 O'rta |
| 13 | 04-dashboard/settings/ | 5+3 GDPR | 🟡 O'rta |
| 14 | 04-dashboard/billing/ | 4 HTML | 🟢 Past |
| 15 | 04-dashboard/addons/ | 4 HTML | 🟢 Past |
| 16 | 04-dashboard/developer/ | 3 HTML | 🟢 Past |
| 17 | 04-dashboard/help/ | 5 HTML | 🟢 Past |
| 18 | 18-system/ | 5 HTML | 🟢 Past |
| 19 | 05-17 standalone/ | 10 HTML | 🟢 Past (dashboard nusxasi) |
| 20 | Dark mode CSS | — | 🟢 Oxirida — barcha page tayyor bo'lganda |
| 21 | Email templates | 15 template | 🟢 Backend bilan birga |
