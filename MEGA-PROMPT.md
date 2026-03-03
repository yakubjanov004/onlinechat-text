# MEGA PROMPT — QULAY CHAT v3: 88 ta yangi HTML sahifa generatsiya qilish

## SEN KIMSAN

Sen — QULAY CHAT platformasining senior frontend developeri va UX architectisan. Senga 2 ta hujjat beriladi:
1. **QULAY-CHAT-AUDIT.md** — platformaning to'liq auditi, nimalar yetishmaydi
2. **QULAY-CHAT-FILE-MAP.md** — barcha 88 ta yangi fayl ro'yxati, papka joylashuvi va har bir faylda nima bo'lishi kerakligi

Sening vazifang: shu 88 ta HTML faylni **birma-bir, ketma-ket** generatsiya qilish. Har bir fayl **to'liq, ishlashi mumkin bo'lgan, real kontent bilan to'ldirilgan** HTML bo'lishi kerak.

---

## LOYIHA HAQIDA

**QULAY CHAT** — O'zbekiston va O'rta Osiyo uchun mo'ljallangan Enterprise SaaS chat platformasi. Hozir 132 ta static HTML sahifa bor. Sen yana 88 ta qo'shasan. Yakuniy: ~220 sahifa.

- **Tillar:** O'zbek tili asosiy (UI labellari UZ), ba'zi texnik atamalar inglizcha
- **Rollar:** Admin (to'liq), Agent (cheklangan)
- **Bu static demo** — backend yo'q, faqat HTML/CSS/JS preview

---

## QATTIQ QOIDALAR — HAR BIR FAYLDA ALBATTA BO'LISHI KERAK

### 1. HTML BOILERPLATE (aynan shu formatda):

```html
<!doctype html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QULAY CHAT - [Sahifa nomi]</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/qulay-chat-design-system.css">
<script src="https://unpkg.com/lucide@latest" defer></script>
<script src="../assets/qulay-chat-shell.js" defer></script>
<script src="../assets/qulay-chat-runtime.js" defer></script>
</head>
```

### 2. BODY STRUCTURE:

```html
<body data-active-nav="[sidebar-key]" class="dashboard-shell-page">
<main class="app-content">

<!-- SUBNAV TABS — shu papkadagi barcha sahifalar linki -->
<div class="subnav-scroll">
<div class="subnav-tabs">
<a class="subnav-tab" href="./01-xxx.html">Tab 1</a>
<a class="subnav-tab active" href="./02-xxx.html">Tab 2 (joriy)</a>
<a class="subnav-tab" href="./03-xxx.html">Tab 3</a>
</div>
</div>

<!-- AGAR ADMIN-ONLY SAHIFA BO'LSA: Agent uchun cheklash bloки -->
<div data-roles="agent" class="card" style="border-color:#FCD34D;background:#FFFBEB;margin-top:12px">
  <div class="card-body">
    <h3 style="margin:0 0 6px">Admin only</h3>
    <p class="text-muted" style="margin:0 0 12px">Bu bo'lim faqat adminlar uchun.</p>
    <a class="btn btn-secondary" href="../04-dashboard/02-dashboard-agent.html">Agent dashboardga qaytish</a>
  </div>
</div>

<div data-roles="admin">
<!-- ASOSIY KONTENT SHU YERDA -->
</div>

</main>
<script>window.addEventListener("DOMContentLoaded", function(){ if (window.lucide && window.lucide.createIcons) { window.lucide.createIcons(); } });</script>
</body>
</html>
```

### 3. `data-active-nav` QIYMATLARI (sidebar highlight uchun):

| Papka | data-active-nav qiymati |
|-------|------------------------|
| 04-dashboard | `dashboard` |
| 05-inbox | `inbox` |
| 06-automation | `automation` |
| 07-team | `team` |
| 08-analytics | `analytics` |
| 09-settings | `settings` |
| 10-billing | `billing` |
| 12-contacts | `contacts` |
| 13-visitors | `visitors` |
| 14-team-chat | `team-chat` |
| 15-knowledge-base | `knowledge-base` |
| 16-addons | `addons` |
| 17-developer | `developer` |
| 20-notifications | `notifications` |
| 21-help-support | `help-support` |
| 22-email-templates | `email-templates` |
| 23-multi-language | `multi-language` |
| 24-gdpr-compliance | `gdpr` |
| 26-integrations (YANGI) | `addons` (yoki shellga yangi key qo'shiladi) |
| 27-payments (YANGI) | `billing` |
| 28-mobile-agent (YANGI) | `dashboard` |

### 4. SUBNAV TABS QOIDASI:

Har bir papkadagi **BARCHA** fayllar subnav-tabs ichida bo'lishi KERAK — ham eski, ham yangi fayllar. Masalan `06-automation/` uchun subnav endi 18 ta tab bo'ladi (7 eski + 11 yangi). Subnav shu papkadagi barcha sahifalarga link beradi. Joriy sahifa `active` classga ega.

**Agar subnav juda ko'p bo'lsa** — guruhlab, `subnav-scroll` ichida scroll qilinadi (bu allaqachon CSS'da bor).

### 5. UI COMPONENTLAR (faqat shulardan foydalan):

```
.card, .card-header, .card-body         — Karta
.page-header, .page-header-actions      — Sahifa sarlavhasi + tugmalar
.btn .btn-primary / .btn-secondary / .btn-danger / .btn-ghost  — Tugmalar
.table, .table-header, .table-row       — Jadvallar
.form-grid, .form-field, .form-label    — Forma
.input, .select, .textarea              — Input elementlar
.toggle-switch                          — On/Off toggle
.checkbox                               — Checkbox
.badge, .badge-success, .badge-danger, .badge-warning, .badge-primary — Badge
.pill-tabs, .tab                        — Pill tablar
.list-stack, .list-item                 — Ro'yxat
.grid, .cols-2, .cols-3                 — Grid layout
.split-grid                             — 2 ustunli layout (katta + kichik)
.text-muted                             — Yordamchi matn
.status-dot .online / .away / .offline  — Status indikator
.divider                                — Ajratuvchi chiziq
.breadcrumbs                            — Breadcrumb navigatsiya
.empty-state                            — Bo'sh holat (hech narsa yo'q)
.skeleton                               — Yuklanish skeleton
.stats-row, .stat-card                  — Statistika kartalar
.pricing-card, .pricing-comparison      — Narxlar
.settings-card, .settings-tabs, .settings-body, .settings-section — Settings layout
.sticky-save-bar                        — Pastdagi saqlash paneli
.inbox-toolbar                          — Toolbar
.icon-btn                               — Icon tugma
```

### 6. LUCIDE ICONS:

Icon qo'shish uchun: `<i data-lucide="icon-name"></i>`
Tez-tez ishlatiladigan: `check, x, plus, search, settings, edit, trash-2, eye, download, upload, copy, link, mail, phone, message-square, bell, shield-check, zap, bar-chart-3, users, credit-card, globe, code, file-text, alert-triangle, info, chevron-right, external-link, refresh-cw, calendar, clock, filter, tag, star, heart, bookmark, share-2, layers, database, server, wifi, smartphone`

### 7. DATA-ROLES QOIDASI:

- `data-roles="admin"` — faqat admin ko'radi
- `data-roles="agent"` — faqat agent ko'radi
- Agar sahifa **admin-only** bo'lsa: agent uchun sariq warning card + admin kontent `<div data-roles="admin">` ichida
- Agar sahifa **ikkalasi uchun** (masalan inbox, contacts): data-roles ishlatma, hammasi ko'rinadi
- Agar ba'zi elementlar faqat admin uchun: o'sha elementga `data-roles="admin"` qo'y

### 8. KONTENT QOIDALARI:

- **Bo'sh sahifa YARATMA!** Har bir sahifada real, demo kontent bo'lsin: jadvalda 3-5 qator, formada to'ldirilgan fieldlar, statistikada raqamlar
- Matnlar **o'zbek tilida** (UI labellar aralash UZ/EN bo'lishi mumkin, Crisp/Intercom kabi)
- Har bir sahifada kamida: **page-header** + **1-3 ta card/section** + **action buttonlar**
- Demo data O'zbekiston kontekstida: Toshkent, Samarqand, so'mda narx, UZ telefon raqamlari
- Button actionlar: `data-action="save"`, `data-action="log"`, `data-action="delete"` (JS tomonidan handle qilinadi)
- Breadcrumb: `Dashboard > [Modul] > [Sahifa]`

### 9. YANGI PAPKALAR UCHUN MAXSUS:

**`26-integrations/`** — `data-active-nav="addons"` ishlatilsin. Subnav-tabs barcha 20 ta sahifani o'z ichiga oladi. Agar 20 ta tab ko'p bo'lsa — guruhla: "Channels" (Telegram, WhatsApp, Instagram, Facebook, Viber, Email, SMS), "CRM" (Bitrix24, AmoCRM), "Developer" (Zapier, Webhook), "System" (Logs, Status).

**`27-payments/`** — `data-active-nav="billing"` ishlatilsin. `10-billing/` subnav-tabs BILAN BIRGA ko'rsatilishi mumkin, yoki alohida subnav.

**`28-mobile-agent/`** — Bu sahifalar boshqacha bo'lishi mumkin. Desktop shell emas, **mobile-first layout** bo'lsin. `class="dashboard-shell-page"` o'rniga `class="mobile-page"` ishlat. Sidebar yo'q — bottom navigation bar bo'lsin.

---

## GENERATSIYA TARTIBI

Quyidagi tartibda, **birma-bir** genera qil. Har bir faylni to'liq yoz, keyin keyingisiga o't.

### BOSQICH 1 — `26-integrations/` (20 ta fayl)
```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 → 10
11 → 12 → 13 → 14 → 15 → 16 → 17 → 18 → 19 → 20
```

### BOSQICH 2 — `27-payments/` (8 ta fayl)
```
01 → 02 → 03 → 04 → 05 → 06 → 07 → 08
```

### BOSQICH 3 — `06-automation/` ga qo'shish (11 ta fayl)
```
08 → 09 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18
```
⚠️ SUBNAV-TABS: 01-07 eski + 08-18 yangi = jami 18 ta tab

### BOSQICH 4 — `09-settings/` ga qo'shish (10 ta fayl)
```
09 → 10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18
```
⚠️ SUBNAV-TABS: 01-08 eski + 09-18 yangi = jami 20 ta tab (guruhlash kerak)

### BOSQICH 5 — `15-knowledge-base/` ga qo'shish (9 ta fayl)
```
10 → 11 → 12 → 13 → 14 → 15 → 16 → 17 → 18
```

### BOSQICH 6 — `10-billing/` ga qo'shish (8 ta fayl)
```
05 → 06 → 07 → 08 → 09 → 10 → 11 → 12
```

### BOSQICH 7 — `08-analytics/` ga qo'shish (4 ta fayl)
```
14 → 15 → 16 → 17
```

### BOSQICH 8 — `05-inbox/` ga qo'shish (3 ta fayl)
```
08 → 09 → 10
```

### BOSQICH 9 — `03-onboarding/` ga qo'shish (3 ta fayl)
```
07 → 08 → 09
```

### BOSQICH 10 — `16-addons/` ga qo'shish (3 ta fayl)
```
05 → 06 → 07
```

### BOSQICH 11 — `17-developer/` ga qo'shish (2 ta fayl)
```
04 → 05
```

### BOSQICH 12 — `04-dashboard/` ga qo'shish (2 ta fayl)
```
04 → 05
```

### BOSQICH 13 — `28-mobile-agent/` (5 ta fayl)
```
01 → 02 → 03 → 04 → 05
```

---

## JAVOB FORMATI

Har bir fayl uchun aynan shu formatda ber:

```
📁 Papka: [papka nomi]/
📄 Fayl: [fayl nomi].html
📝 Maqsad: [1 qatorda nima uchun kerak]

[TO'LIQ HTML KODI]
```

Keyin keyingi faylga o't. Agar bitta javobga sig'masa — to'xtatmasdan davom etishimni so'ra.

---

## MUHIM ESLATMALAR

1. **Hech qachon qisqartirma!** `<!-- qolgan kontent -->` yoki `...` yozma. To'liq HTML yoz.
2. **Har bir sahifada real demo data** — bo'sh jadval, bo'sh forma bo'lmasin
3. **Subnav-tabs YANGILASH** — yangi fayllar qo'shilganda eski fayllarning subnav-tabs ham yangilanishi kerakligini esda tut, lekin hozir faqat yangi fayllarni yozasan, eski fayllarning subnav-tabs ni alohida yangilaymiz
4. **CSS yozma** — `qulay-chat-design-system.css` yetarli. Faqat juda zarur bo'lganda `<style>` tegi qo'sh
5. **JS yozma** — interaksiya uchun `data-action="log"`, `data-action="save"` ishlat. Runtime.js handle qiladi
6. **Link to'g'riligi** — `../` bilan boshqa papkalarga, `./` bilan o'z papkasiga
7. **Mobile agent sahifalari** — boshqa layoutda, sidebar o'rniga bottom nav
8. **O'zbekiston konteksti** — Toshkent, Samarqand, +998, so'm, Payme, Click, Telegram

---

## BOSHLASH

Ikkala MD faylni o'qi. Keyin **BOSQICH 1** dan boshla: `26-integrations/01-channels-overview.html`

Tayyor bo'lsang, boshlaylik! Har bir faylni to'liq yoz, qisqartirma.
