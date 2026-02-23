# QULAY CHAT — Dashboard: Umumiy Layout va Navigatsiya

## Umumiy konsepsiya
Dashboard — QULAY CHAT platformasining asosiy ishchi muhiti. Admin, menejer va agentlar bu yerda chatlarni boshqaradi, sozlamalarni o'zgartiradi, jamoani nazorat qiladi va barcha operatsion jarayonlarni amalga oshiradi. Default ochiladigan sahifa: **Inbox (Live Chats)**.

**Muhim:** Dashboard funksional va aniq bo'lishi shart. Har bir modulga maksimum 1-2 klikda kirish mumkin. Chalg'ituvchi dekorativ elementlar bo'lmasin — bu marketing sahifasi emas, real ishchi vosita.

---

## 1. APP SHELL — Asosiy tuzilish

### Layout modeli
- **Tuzilish:** Header (yuqorida) + Sidebar (chapda) + Main Content (o'ngda, fluid)
- **Header balandligi:** 64px
- **Sidebar kengligi:** 240px (expanded), 64px (collapsed)
- **Main Content:** fluid (qolgan bo'sh joy)
- **Sahifa background:** `#F9FAFB` (Gray-50)
- **Content area padding:** 24px barcha tomondan
- **Content area gap:** 16px (elementlar orasida)

### Design Tokens

| Token | Qiymat | Ishlatilishi |
|-------|--------|-------------|
| sidebar-width-expanded | 240px | Sidebar ochiq holati |
| sidebar-width-collapsed | 64px | Sidebar yig'ilgan holati |
| header-height | 64px | Header balandligi |
| content-padding | 24px | Asosiy kontent padding |
| content-gap | 16px | Kontent elementlari orasidagi gap |
| page-bg | `#F9FAFB` | Sahifa orqa foni |

### ASCII Wireframe — Desktop (1440px)

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]    [Search Ctrl+K]          [Status] [Bell🔔] [Avatar▾] │  ← Header 64px
├──────────┬───────────────────────────────────────────────────────┤
│          │                                                       │
│  [Logo]  │   Page Title (24px Semibold)                         │
│          │   ─────────────────────────────────                  │
│  Inbox 3 │                                                       │
│  Auto    │   ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  Team    │   │ Metric  │  │ Metric  │  │ Metric  │            │
│  Analy   │   │  Card   │  │  Card   │  │  Card   │            │
│  ──────  │   └─────────┘  └─────────┘  └─────────┘            │
│  Settin  │                                                       │
│  Billin  │   ┌──────────────────────────────────────┐           │
│  Develo  │   │                                      │           │
│  ──────  │   │          Main Content Area            │           │
│  Docs    │   │                                      │           │
│  Suppor  │   │                                      │           │
│          │   └──────────────────────────────────────┘           │
│          │                                                       │
├──────────┴───────────────────────────────────────────────────────┤
│  240px        fluid (1440 - 240 - 48 padding = ~1152px)         │
└──────────────────────────────────────────────────────────────────┘
```

### ASCII Wireframe — Sidebar Collapsed (64px)

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]    [Search Ctrl+K]          [Status] [Bell🔔] [Avatar▾] │
├────┬─────────────────────────────────────────────────────────────┤
│ 📥 │                                                             │
│ 🤖 │   Kengroq kontent maydoni                                   │
│ 👥 │   (1440 - 64 - 48 = ~1328px)                               │
│ 📊 │                                                             │
│ ── │                                                             │
│ ⚙️ │                                                             │
│ 💳 │                                                             │
│ 🔌 │                                                             │
│ ── │                                                             │
│ 📄 │                                                             │
│ ❓ │                                                             │
├────┴─────────────────────────────────────────────────────────────┤
│ 64px                    fluid                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 2. HEADER — Yuqori navigatsiya paneli

### Vazifasi
Tezkor amallar va global boshqaruv. Har doim ekranning yuqorisida qotib turadi.

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Balandlik | 64px |
| Background | `#FFFFFF` (White) |
| Border-bottom | 1px `#E5E7EB` (Gray-300) |
| Padding | 0 24px |
| Z-index | 50 |
| Shadow | `0 1px 2px rgba(0,0,0,0.05)` |

### Tarkibi (chapdan o'ngga)

#### Chap tomon — Logo
| Element | Tavsif |
|---------|--------|
| **Logo** | QULAY CHAT brend logotipi, bosh sahifaga (Inbox) qaytish uchun link |
| O'lcham | ~120px kenglik, 28px balandlik |
| Holat | Cursor: pointer |

#### O'rta qism — Search

| Element | Tavsif |
|---------|--------|
| **Search input** | Global qidiruv maydoni |
| Placeholder | "Qidirish... (Ctrl+K)" |
| Kenglik | 320px (min), max 480px |
| Balandlik | 40px |
| Background | `#F3F4F6` (Gray-100) |
| Border | none (default), 2px `#4F46E5` (focus) |
| Border-radius | 8px |
| Icon | Search (magnifying glass), 16px, `#6B7280` |
| Shrift | 14px Regular, `#6B7280` (placeholder), `#111827` (input) |
| Klaviatura | Ctrl+K qidiruv maydonini fokusga oladi |

#### O'ng tomon — Status, Notifications, User Menu

**Status Toggle:**

| Element | Tavsif |
|---------|--------|
| Turi | Dropdown yoki toggle switch |
| Holatlar | Online (Success-500 `#10B981`), Away (Warning-500 `#F59E0B`), Busy (Error-500 `#EF4444`) |
| Ko'rinish | Rangli nuqta (8px) + status matni |
| Shrift | 13px Medium |

**Notification Bell:**

| Element | Tavsif |
|---------|--------|
| Icon | Bell (outline), 20px |
| Default rangi | `#6B7280` (Gray-500) |
| Badge | Error-500 `#EF4444` background, oq matn, 16px doira, 11px bold |
| Hover | `#111827` (Gray-900) |
| Bosish | Notification dropdown paneli ochiladi |

**User Menu:**

| Element | Tavsif |
|---------|--------|
| Tarkib | Avatar (32px, doira) + Foydalanuvchi ismi + Chevron down icon |
| Avatar | Rasm yoki initiallar (Primary-100 bg, Primary-600 text) |
| Ism shrifti | 14px Medium, `#111827` |
| Hover | Gray-100 background |

**User Menu Dropdown:**

| Menu item | Icon | Amal |
|-----------|------|------|
| Sozlamalar | Settings gear | Settings sahifasiga o'tish |
| Profil | User icon | Profil sahifasiga o'tish |
| Yordam | Help circle | Yordam markazi ochiladi |
| Chiqish | Logout icon | Tizimdan chiqish |

**Dropdown spetsifikatsiyalari:**
- Background: `#FFFFFF`
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Shadow: `0 10px 15px -3px rgba(0,0,0,0.1)` (shadow-lg)
- Padding: 8px
- Har bir item: 40px balandlik, 12px padding horizontal, radius 8px
- Hover: `#F3F4F6` (Gray-100) background
- Divider: 1px `#E5E7EB`, Chiqish oldida
- Icon o'lchami: 16px, `#6B7280`
- Matn: 14px Regular, `#374151`
- "Chiqish" matni: `#EF4444` (Error-500)

---

## 3. SIDEBAR — Chap navigatsiya paneli

### Vazifasi
Asosiy modullar navigatsiyasi. Tez-tez ishlatiladigan sahifalarga tezkor kirish.

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Kenglik (expanded) | 240px |
| Kenglik (collapsed) | 64px |
| Background | `#FFFFFF` (White) |
| Border-right | 1px `#E5E7EB` (Gray-300) |
| Padding | 16px 12px |
| Balandlik | 100vh - 64px (header) |
| Scroll | Vertikal scroll (agar itemlar sig'masa) |

### Menu Itemlar ro'yxati

**Asosiy navigatsiya:**

| # | Item nomi | Icon | Badge |
|---|-----------|------|-------|
| 1 | **Inbox** | Inbox/Mail icon | Ha — o'qilmagan chat soni, Error-500 bg |
| 2 | **Contacts** | People/Contact card icon | Yo'q |
| 3 | **Online Visitors** | Eye/Monitor icon | Ha — hozir saytda (Success-500 bg) |
| 4 | **Automation** | Robot/Zap icon | Yo'q |
| 5 | **Team** | Users icon | Yo'q |
| 6 | **Team Chat** | Message square icon | Ha — o'qilmagan xabarlar (Primary-500 bg) |
| 7 | **Analytics** | Bar chart icon | Yo'q |
| 8 | **Knowledge Base** | Book/Library icon | Yo'q |

**Separator** — 1px `#E5E7EB`, margin: 12px 0

**Sozlamalar:**

| # | Item nomi | Icon |
|---|-----------|------|
| 9 | **Settings** | Settings gear icon |
| 10 | **Billing** | Credit card icon |
| 11 | **Add-ons** | Puzzle/Plugin icon |
| 12 | **Developer** | Code/Terminal icon |

**Separator** — 1px `#E5E7EB`, margin: 12px 0

**Qo'shimcha:**

| # | Item nomi | Icon |
|---|-----------|------|
| 8 | **Docs** | Document icon |
| 9 | **Support** | Help circle icon |

### Menu Item Holatlari

| Holat | Background | Matn rangi | Border | Icon rangi |
|-------|-----------|------------|--------|------------|
| Default | transparent | `#374151` (Gray-700) | none | `#6B7280` (Gray-500) |
| Hover | `#F3F4F6` (Gray-100) | `#111827` (Gray-900) | none | `#374151` |
| Active | `#E0E7FF` (Primary-100) | `#4F46E5` (Primary-600) | chap 3px `#4F46E5` | `#4F46E5` |
| Focused | `#F3F4F6` | `#111827` | 2px outline `#4F46E5` | `#374151` |

**Menu Item spetsifikatsiyalari:**
- Balandlik: 44px
- Padding: 0 12px
- Border-radius: 8px
- Gap (icon va matn): 12px
- Icon o'lchami: 20px
- Matn: 14px Medium (500)
- Transition: background 150ms ease

### Badge (Inbox unread count)

| Parametr | Qiymat |
|----------|--------|
| Background | `#EF4444` (Error-500) |
| Matn rangi | `#FFFFFF` |
| Shrift | 11px Bold |
| Min-width | 20px |
| Balandlik | 20px |
| Border-radius | 9999px (pill) |
| Padding | 0 6px |
| Joylashuv | Menu item o'ng tomonida |
| Animatsiya | Yangi xabar kelganda pulse (scale 1→1.1→1) |

### Sidebar Collapse xulq-atvori
- **Collapse trigger:** Sidebar pastki qismida chevron tugmasi yoki header tugmasi
- **Collapsed holat:** Faqat iconlar ko'rinadi, 64px kenglik
- **Tooltip:** Hover qilganda item nomi tooltip sifatida ko'rinadi (o'ng tomonda)
- **Tooltip uslubi:** Dark bg (`#111827`), oq matn, 12px, radius 6px, padding 4px 8px
- **Animatsiya:** kenglik o'zgarishi 200ms ease
- **Badge:** collapsed holatda icon ustida kichik nuqta (8px, Error-500)

---

## 4. MAIN CONTENT AREA

### Vazifasi
Tanlangan modul kontenti shu yerda ko'rinadi. Har bir sahifaning o'z layout tuzilishi bor.

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Background | `#F9FAFB` (Gray-50) |
| Padding | 24px |
| Overflow | Vertikal scroll |
| Min-height | calc(100vh - 64px) |

### Sahifa sarlavhasi

| Element | Tavsif |
|---------|--------|
| Page title | 24px Semibold (600), `#111827` |
| Breadcrumb | 13px Regular, `#6B7280`, ixtiyoriy |
| Margin-bottom | 24px |

### Metric Card (Dashboard umumiy widget)

| Parametr | Qiymat |
|----------|--------|
| Background | `#FFFFFF` |
| Border | 1px `#E5E7EB` |
| Border-radius | 12px |
| Padding | 24px |
| Shadow | `0 1px 2px rgba(0,0,0,0.05)` |
| Kenglik | Flexible (grid 1/3 yoki 1/4) |

**Metric Card ichki tuzilishi:**
- Label: 13px Medium, `#6B7280` — "Faol chatlar"
- Raqam: 32px Bold, `#111827` — "24"
- Trend: 13px Medium, `#10B981` (agar o'sish) / `#EF4444` (agar tushish) — "+12%"
- Trend icon: Arrow up/down, 14px
- Gap: label → raqam 8px, raqam → trend 4px

### Setting Section (Sozlamalar umumiy blok)

| Parametr | Qiymat |
|----------|--------|
| Background | `#FFFFFF` |
| Border | 1px `#E5E7EB` |
| Border-radius | 12px |
| Padding | 24px |
| Kenglik | 100% (max 800px) |
| Title | 16px Semibold, `#111827` |
| Description | 14px Regular, `#6B7280` |
| Divider | 1px `#E5E7EB` ichki seksiyalar orasida |

---

## 5. FIGMA COMPONENT TREE — To'liq komponent daraxti

```
dashboard-layout/
├── app-shell (auto-layout, horizontal wrap)
│   │
│   ├── header/ (fixed top, full width, 64px height)
│   │   ├── header-left (auto-layout, horizontal, gap: 16px)
│   │   │   └── logo (image/svg, 120x28px, link to Inbox)
│   │   │
│   │   ├── header-center (auto-layout, horizontal)
│   │   │   └── search-input (320-480px width, 40px height)
│   │   │       ├── search-icon (magnifying glass, 16px, #6B7280)
│   │   │       ├── placeholder-text ("Qidirish... (Ctrl+K)")
│   │   │       └── shortcut-badge ("Ctrl+K", Gray-200 bg, 12px)
│   │   │
│   │   └── header-right (auto-layout, horizontal, gap: 16px, center aligned)
│   │       ├── status-toggle/
│   │       │   ├── status-dot (8px, rangli)
│   │       │   └── status-label ("Online" / "Away" / "Busy", 13px Medium)
│   │       │
│   │       ├── notification-bell/
│   │       │   ├── bell-icon (20px, #6B7280)
│   │       │   └── badge (16px doira, #EF4444 bg, oq raqam)
│   │       │
│   │       └── user-menu/
│   │           ├── avatar (32px, doira)
│   │           ├── user-name (14px Medium, #111827)
│   │           ├── chevron-down (12px)
│   │           └── dropdown-panel/ (ko'rinmas, hover/click ochiladi)
│   │               ├── menu-item ("Sozlamalar", gear icon)
│   │               ├── menu-item ("Profil", user icon)
│   │               ├── menu-item ("Yordam", help icon)
│   │               ├── divider (1px #E5E7EB)
│   │               └── menu-item ("Chiqish", logout icon, #EF4444)
│   │
│   ├── sidebar/ (fixed left, 240px/64px, full height - header)
│   │   ├── nav-section-main (auto-layout, vertical, gap: 4px)
│   │   │   ├── sidebar-item ("Inbox", inbox-icon, badge: "3")
│   │   │   │   ├── states: [default, hover, active]
│   │   │   ├── sidebar-item ("Automation", robot-icon)
│   │   │   ├── sidebar-item ("Team", users-icon)
│   │   │   └── sidebar-item ("Analytics", chart-icon)
│   │   │
│   │   ├── divider (1px #E5E7EB, margin: 12px 0)
│   │   │
│   │   ├── nav-section-settings (auto-layout, vertical, gap: 4px)
│   │   │   ├── sidebar-item ("Settings", gear-icon)
│   │   │   ├── sidebar-item ("Billing", credit-card-icon)
│   │   │   └── sidebar-item ("Developer", code-icon)
│   │   │
│   │   ├── divider (1px #E5E7EB, margin: 12px 0)
│   │   │
│   │   ├── nav-section-extra (auto-layout, vertical, gap: 4px)
│   │   │   ├── sidebar-item ("Docs", document-icon)
│   │   │   └── sidebar-item ("Support", help-icon)
│   │   │
│   │   └── collapse-toggle (pastki qismda, chevron icon)
│   │
│   └── main-content/ (fluid, scrollable)
│       ├── page-header (auto-layout, horizontal, space-between)
│       │   ├── page-title (24px Semibold, #111827)
│       │   └── breadcrumb (optional, 13px, #6B7280)
│       │
│       └── content-slot (o'zgaruvchan — modul sahifasiga qarab)
│           ├── metric-cards-row (auto-layout, horizontal, gap: 16px)
│           │   ├── metric-card (label + raqam + trend)
│           │   ├── metric-card
│           │   └── metric-card
│           │
│           └── main-section (modul kontenti)
```

---

## 6. SIDEBAR MENU ITEM — Komponent variantlari

### Figma Component: `SidebarMenuItem`

**Properties (Figma variants):**

| Property | Qiymatlari |
|----------|-----------|
| State | `default` / `hover` / `active` |
| HasBadge | `true` / `false` |
| Collapsed | `true` / `false` |

**Variant matritsa:**

| State | HasBadge | Collapsed | Ko'rinish |
|-------|----------|-----------|-----------|
| default | false | false | Gray icon + matn |
| default | true | false | Gray icon + matn + badge |
| hover | false | false | Gray-100 bg + darker icon/matn |
| active | false | false | Primary-100 bg + Primary-600 icon/matn + chap border |
| active | true | false | Primary-100 bg + Primary badge |
| default | false | true | Faqat icon, 64px kenglik |
| default | true | true | Icon + kichik nuqta (8px) |
| hover | false | true | Gray-100 bg + tooltip ko'rinadi |

---

## 7. RESPONSIVE XULQ-ATVOR

### Breakpoint jadvali

| Breakpoint | Sidebar | Header | Content | Maxsus xulq-atvor |
|------------|---------|--------|---------|--------------------|
| **Desktop (1440px+)** | 240px expanded | To'liq | fluid | Barcha elementlar ko'rinadi |
| **Desktop (1024px)** | 240px expanded | To'liq | fluid | Search kichikroq |
| **Tablet (768px)** | 64px collapsed (icon only) | Qisqartirilgan | fluid | Hover qilganda sidebar expand |
| **Mobile (< 768px)** | Yo'q — bottom nav | Minimal | to'liq kenglik | Bottom navigation bar |

### Mobile Bottom Navigation

| Tab | Icon | Badge |
|-----|------|-------|
| Inbox | Inbox icon | Unread count |
| Team | Users icon | — |
| Analytics | Chart icon | — |
| Settings | Gear icon | — |
| Profile | Avatar | — |

**Bottom Nav spetsifikatsiyalari:**
- Balandlik: 64px + safe area (iOS)
- Background: `#FFFFFF`
- Border-top: 1px `#E5E7EB`
- Shadow: `0 -2px 8px rgba(0,0,0,0.05)`
- Active tab: `#4F46E5` icon + label
- Default tab: `#6B7280` icon + label
- Icon: 20px
- Label: 10px Medium
- Gap (icon-label): 4px

### Tablet Sidebar Expand
- Default holat: 64px (collapsed, faqat iconlar)
- Hover qilganda: 240px ga kengayadi (overlay sifatida, shadow-lg bilan)
- Kontent o'z joyida qoladi (siljimaydi)
- Overlay background: `rgba(0,0,0,0.1)` (content ustida)

---

## 8. EMPTY / LOADING / ERROR HOLATLARI

### Empty State

| Element | Tavsif |
|---------|--------|
| Icon | Inbox/Empty illustration, 120px, `#D1D5DB` |
| Sarlavha | "Ma'lumot yo'q" — 18px Semibold, `#111827` |
| Tavsif | "Hozircha ko'rsatiladigan ma'lumot mavjud emas" — 14px Regular, `#6B7280` |
| Tugma | Ixtiyoriy — "Yangi qo'shish" Primary button |
| Joylashuv | Markazda, vertikal stack, gap 16px |

### Loading State
- Skeleton bloklar: Gray-200 bg, shimmer animatsiya (1.5s loop)
- Sidebar: 8 ta rectangle (20px x 200px), gap 8px
- Header: 2 ta rectangle (search + user area)
- Content: 3 ta metric card skeleton + katta kontent skeleton

### Error State

| Element | Tavsif |
|---------|--------|
| Icon | Alert circle, 48px, `#EF4444` |
| Sarlavha | "Xatolik yuz berdi" — 18px Semibold, `#111827` |
| Tavsif | "Ma'lumotlarni yuklab bo'lmadi. Qayta urinib ko'ring." — 14px Regular, `#6B7280` |
| Tugma | "Qayta yuklash" — Outline button |

---

## 9. MICRO-INTERACTIONS VA ANIMATSIYALAR

| Animatsiya | Trigger | Parametrlar |
|-----------|---------|-------------|
| Sidebar hover | Mouse enter menu item | bg color 150ms ease |
| Sidebar collapse | Toggle button bosish | width 200ms ease |
| Notification badge pulse | Yangi notification | scale 1→1.1→1, 1s loop |
| Dropdown ochilish | User menu bosish | opacity 0→1, translateY(-8px→0), 200ms ease |
| Search focus | Ctrl+K yoki klik | border-color change, 150ms |
| Page transition | Menu item bosish | fade-in, 200ms |
| Status toggle | Status o'zgartirish | dot color change, 200ms |

---

## 10. ACCESSIBILITY

| Parametr | Qiymat |
|----------|--------|
| Sidebar item min-height | 44px (touch target) |
| Kontrast nisbati | Kamida 4.5:1 (matn), 3:1 (katta elementlar) |
| Focus outline | 2px `#4F46E5` (Primary-600), offset 2px |
| Keyboard nav | Tab orqali sidebar itemlar, Enter aktivlashtirish |
| ARIA roles | navigation (sidebar), menu (dropdown), search (input) |
| Screen reader | Badge: "3 ta o'qilmagan xabar" aria-label |
| Skip link | "Asosiy kontentga o'tish" link (hidden, focus'da ko'rinadi) |

---

## 11. RANG XULOSA JADVALI

| Element | Rang | Hex |
|---------|------|-----|
| Sahifa background | Gray-50 | `#F9FAFB` |
| Header/Sidebar background | White | `#FFFFFF` |
| Border | Gray-300 | `#E5E7EB` |
| Active item bg | Primary-100 | `#E0E7FF` |
| Active item text/icon | Primary-600 | `#4F46E5` |
| Hover bg | Gray-100 | `#F3F4F6` |
| Default text | Gray-700 | `#374151` |
| Default icon | Gray-500 | `#6B7280` |
| Badge bg | Error-500 | `#EF4444` |
| Badge text | White | `#FFFFFF` |
| Online status | Success-500 | `#10B981` |
| Away status | Warning-500 | `#F59E0B` |
| Busy status | Error-500 | `#EF4444` |
| Page title | Gray-900 | `#111827` |
| Search placeholder | Gray-500 | `#6B7280` |

---

## 12. TIPOGRAFIYA XULOSA JADVALI

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Page Title | 24px | Semibold (600) | `#111827` |
| Sidebar Item | 14px | Medium (500) | `#374151` / `#4F46E5` active |
| Breadcrumb | 13px | Regular (400) | `#6B7280` |
| Search placeholder | 14px | Regular (400) | `#6B7280` |
| User name | 14px | Medium (500) | `#111827` |
| Status label | 13px | Medium (500) | holat rangiga qarab |
| Dropdown item | 14px | Regular (400) | `#374151` |
| Badge raqam | 11px | Bold (700) | `#FFFFFF` |
| Metric label | 13px | Medium (500) | `#6B7280` |
| Metric value | 32px | Bold (700) | `#111827` |
| Metric trend | 13px | Medium (500) | `#10B981` / `#EF4444` |
| Tooltip | 12px | Regular (400) | `#FFFFFF` |

---

## 13. SPACING XULOSA JADVALI

| Element | Qiymat |
|---------|--------|
| Header padding | 0 24px |
| Sidebar padding | 16px 12px |
| Content padding | 24px |
| Menu items gap | 4px |
| Menu sections gap (divider) | 12px margin |
| Dropdown padding | 8px |
| Dropdown item padding | 0 12px |
| Icon-text gap (sidebar) | 12px |
| Metric cards gap | 16px |
| Metric card padding | 24px |
| Setting section padding | 24px |
| Page title margin-bottom | 24px |
| Bottom nav safe area | 64px + env(safe-area-inset-bottom) |

---

## 14. FIGMA AI UCHUN PROMPT

```
Create a SaaS dashboard application shell for a customer support platform called QULAY CHAT.

LAYOUT:
- Fixed top header: 64px height, white background, bottom border
- Fixed left sidebar: 240px width, white background, right border
- Fluid main content area: light gray background (#F9FAFB)

HEADER (left to right):
- QULAY CHAT logo on the left
- Search input in the center with placeholder "Qidirish... (Ctrl+K)", gray background (#F3F4F6), rounded
- Right side: Status indicator (green dot + "Online"), notification bell icon with red badge showing "3", user avatar (32px circle) with name and dropdown chevron

SIDEBAR navigation items (top to bottom):
- Inbox (with red unread badge "3"), Automation, Team, Analytics
- Separator line
- Settings, Billing, Developer
- Separator line
- Docs, Support
- Active item has indigo background (#E0E7FF) and indigo text (#4F46E5) with left border accent
- Hover items have light gray background (#F3F4F6)
- Collapse/expand toggle at bottom

CONTENT AREA:
- Page title "Inbox" at 24px semibold
- Three metric cards in a row (white cards, subtle border, 12px radius)
- Each metric card: label, large number, trend percentage with arrow

Style: Clean, modern, professional SaaS dashboard.
Font: Inter. Primary color: #4F46E5.
Desktop width: 1440px.
Include both expanded (240px) and collapsed (64px icons-only) sidebar variants.
```
