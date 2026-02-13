# Page 11: Dashboard (Boshqaruv paneli)

> **Board:** 1440×900 | **Position:** col=0, row=2 | **BG:** `#F9FAFB`

## Vazifasi
Asosiy ish paneli. Barcha statistika, tezkor harakatlar va navigatsiya shu yerda.
Onboarding tugagandan keyin yoki har qanday vaqtda login qilganda ko'rinadi.

---

## Layout Architecture (App Shell)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ HEADER (h:64px, full-width, bg:#FFF, shadow-sm, z:50)                   │
├─────────┬────────────────────────────────────────────────────────────────┤
│ SIDEBAR │ CONTENT AREA (flex:1, bg:#F9FAFB, overflow-y:auto)            │
│ w:240px │                                                                │
│ bg:#FFF │  padding:24                                                    │
│ h:calc  │                                                                │
│ (100vh  │                                                                │
│ -64px)  │                                                                │
│         │                                                                │
│         │                                                                │
│         │                                                                │
│         │                                                                │
│         │                                                                │
│         │                                                                │
│         │                                                                │
└─────────┴────────────────────────────────────────────────────────────────┘
```

---

## 1. HEADER (64px)

```
Header (1440×64, y:0, bg:#FFF, border-bottom:1px #E5E7EB, shadow-sm)
│
├── left-section (flex, gap:16, align:center, pl:16)
│   │
│   ├── logo "CHATFLOW" (120×28)
│   │   gradient text #4F46E5→#7C3AED or img
│   │
│   └── search-bar (320w × 40h, radius:8)
│       bg:#F3F4F6  border:none
│       icon-left: 🔍 Search 16px #9CA3AF
│       placeholder: "Qidirish... (Ctrl+K)" 14px Reg #9CA3AF
│       hover: bg:#E5E7EB
│       focus: bg:#FFF border:2px #4F46E5
│
├── spacer (flex:1)
│
└── right-section (flex, gap:16, align:center, pr:16)
    │
    ├── status-toggle (flex, gap:8, align:center)
    │   ├── dot (8×8 radius:4)
    │   │   Online: bg:#10B981
    │   │   Away:   bg:#F59E0B
    │   │   Busy:   bg:#EF4444
    │   ├── text "Online" 13px Med, color matches dot
    │   └── chevron ▼ 12px #6B7280 (dropdown)
    │
    ├── notification-bell (36×36)
    │   icon: 🔔 Bell 20px #6B7280
    │   hover: bg:#F3F4F6 radius:8
    │   badge (if count > 0):
    │     circle 18×18 bg:#EF4444 radius:9
    │     text: "3" 10px Bold #FFF
    │     position: top:-4, right:-4
    │
    └── user-avatar (32×32, radius:16)
        img or initials bg:#4F46E5 text:#FFF 13px Bold
        hover: ring 2px #4F46E5
        click → dropdown menu:
          ┌────────────────────────┐
          │ 👤 Aziz Karimov       │ (14px Semi #111827)
          │    aziz@email.com     │ (13px #6B7280)
          │ ──────────────────── │
          │ Profil sozlamalari   │
          │ Hisob sozlamalari    │
          │ Yordam              │
          │ ──────────────────── │
          │ 🚪 Chiqish           │ (#EF4444)
          └────────────────────────┘
          (200w, bg:#FFF, shadow-lg, radius:8, pad:8)
```

---

## 2. SIDEBAR (240×836)

```
Sidebar (240w × calc(900-64)=836, x:0, y:64)
│  bg:#FFFFFF  border-right:1px #E5E7EB
│  padding:12
│  flex-col, justify:between
│
├── nav-section-1 "ASOSIY" (gap:2)
│   │
│   ├── menu-item (active) ─── Dashboard
│   │   h:40  pad:0/12  radius:8  bg:#EEF2FF
│   │   icon: 📊 Grid 18px #4F46E5
│   │   text: "Dashboard" 14px Semi #4F46E5
│   │
│   ├── menu-item ─── Inbox
│   │   h:40  pad:0/12  radius:8  bg:transparent
│   │   icon: 📨 Inbox 18px #6B7280
│   │   text: "Inbox" 14px Reg #374151
│   │   badge: "12" (bg:#EF4444, text:#FFF, 18×18, radius:9)
│   │   hover: bg:#F3F4F6
│   │
│   ├── menu-item ─── Kontaktlar
│   │   icon: 👥 Users 18px #6B7280
│   │   text: "Kontaktlar" 14px Reg #374151
│   │
│   └── menu-item ─── Tashrif buyuruvchilar
│       icon: 🌐 Globe 18px #6B7280
│       text: "Tashrif buyuruvchilar" 14px Reg #374151
│       badge: "●" green dot (8px, bg:#10B981) = live visitors
│
├── divider (h:1px, bg:#E5E7EB, mx:12, my:8)
│
├── nav-section-2 "VOSITALAR" (gap:2)
│   │
│   ├── menu-item ─── Avtomatlashtirish
│   │   icon: ⚡ Bolt 18px #6B7280
│   │   "Avtomatlashtirish"
│   │
│   ├── menu-item ─── Bilim bazasi
│   │   icon: 📚 Book 18px #6B7280
│   │   "Bilim bazasi"
│   │
│   ├── menu-item ─── Jamoa chat
│   │   icon: 💬 Chat 18px #6B7280
│   │   "Jamoa chat"
│   │
│   └── menu-item ─── Analitika
│       icon: 📈 Chart 18px #6B7280
│       "Analitika"
│
├── divider
│
├── nav-section-3 "BOSHQARISH" (gap:2)
│   │
│   ├── menu-item ─── Jamoa
│   │   icon: 👥 People 18px #6B7280
│   │   "Jamoa"
│   │
│   ├── menu-item ─── Sozlamalar
│   │   icon: ⚙️ Gear 18px #6B7280
│   │   "Sozlamalar"
│   │
│   └── menu-item ─── Tariflar
│       icon: 💳 Card 18px #6B7280
│       "Tariflar"
│       badge: "PRO" (bg:#FEF3C7, text:#F59E0B, 13px, pad:2/6, radius:4)
│
├── spacer (flex:1)
│
└── sidebar-footer (pad:12)
    ├── collapse-btn (flex, gap:8, align:center)
    │   icon: « Chevrons 16px #6B7280
    │   "Yig'ish" 13px Reg #6B7280
    │   hover: bg:#F3F4F6 radius:8
    │
    └── version "v1.0.0" 11px #9CA3AF
```

### Menu Item States

| State | BG | Text | Icon |
|-------|-----|------|------|
| Default | transparent | `#374151` Reg | `#6B7280` |
| Hover | `#F3F4F6` | `#374151` Med | `#6B7280` |
| Active | `#EEF2FF` | `#4F46E5` Semi | `#4F46E5` |
| Focused | ring 2px `#4F46E5` | `#374151` | `#6B7280` |

---

## 3. CONTENT AREA — Dashboard

```
Content (1200×836, x:240, y:64, bg:#F9FAFB, padding:24)
│
├── page-header (flex, justify:between, align:center, mb:24)
│   ├── left
│   │   ├── title "Dashboard" 24px Semi #111827
│   │   └── subtitle "Bugungi umumiy ko'rinish" 14px Reg #6B7280
│   └── right
│       └── date-filter (flex, gap:8)
│           ├── btn "Bugun" (active, bg:#4F46E5 text:#FFF, h:32 pad:0/12 rad:6)
│           ├── btn "Hafta" (bg:#FFF border #D1D5DB, h:32)
│           ├── btn "Oy" (same)
│           └── btn "📅" (calendar icon, same)
│
├── metric-cards (grid: 4 cols, gap:16, mb:24)
│   │
│   ├── card-1 "Jami chatlar"
│   │   bg:#FFF radius:12 pad:20 border:1px #E5E7EB
│   │   ├── icon-circle (40×40 bg:#EEF2FF rad:10)
│   │   │   icon: 💬 18px #4F46E5
│   │   ├── label "Jami chatlar" 13px Reg #6B7280
│   │   ├── value "1,247" 28px Bold #111827
│   │   └── trend "↑ 12%" 13px Semi #10B981
│   │       (or "↓ 5%" #EF4444 for negative)
│   │
│   ├── card-2 "Faol chatlar"
│   │   icon bg:#D1FAE5, icon 💬 #10B981
│   │   value: "23"
│   │   trend: "↑ 8%"
│   │
│   ├── card-3 "O'rtacha javob vaqti"
│   │   icon bg:#FEF3C7, icon ⏱ #F59E0B
│   │   value: "2m 34s"
│   │   trend: "↓ 15%" #10B981 (lower is better)
│   │
│   └── card-4 "Mijoz qoniqishi"
│       icon bg:#FCE7F3, icon ⭐ #EC4899
│       value: "4.8/5"
│       trend: "↑ 3%"
│
├── charts-row (grid: 2 cols, gap:16, mb:24)
│   │
│   ├── chart-activity (bg:#FFF radius:12 pad:20 border)
│   │   ├── header "Chat faoliyati" 16px Semi #111827
│   │   │   subtitle "Oxirgi 7 kun" 13px #6B7280
│   │   └── chart-area (h:240)
│   │       Line chart with gradient fill
│   │       X-axis: Dush, Sesh, Chor, Pay, Jum, Shan, Yak
│   │       Y-axis: 0, 25, 50, 75, 100
│   │       Line: stroke 2px #4F46E5
│   │       Fill: gradient #4F46E5 opacity 0.1→0
│   │       Dots: 6px circles on data points
│   │
│   └── chart-channels (bg:#FFF radius:12 pad:20 border)
│       ├── header "Kanallar bo'yicha" 16px Semi
│       └── chart-area (h:240)
│           Donut chart (160×160, center)
│           ├── Web chat:    55% #4F46E5
│           ├── Telegram:    25% #3B82F6
│           ├── Instagram:   12% #EC4899
│           └── Email:        8% #F59E0B
│           Center: "247" 24px Bold + "bugun" 13px
│           Legend: right side, colored dots + labels
│
├── bottom-row (grid: 2 cols, gap:16)
│   │
│   ├── recent-chats (bg:#FFF radius:12 pad:20 border)
│   │   ├── header (flex between)
│   │   │   "Oxirgi chatlar" 16px Semi #111827
│   │   │   link: "Hammasini ko'rish →" 13px #4F46E5
│   │   │
│   │   └── chat-list (gap:0)
│   │       ├── chat-row (h:56, pad:0/12, flex, gap:12 border-b:1px #F3F4F6)
│   │       │   ├── avatar (36×36, radius:18)
│   │       │   ├── info (flex:1)
│   │       │   │   ├── name "Ali Valiyev" 14px Med #111827
│   │       │   │   └── preview "Salom, buyurtma haqida..." 13px Reg #6B7280 truncate
│   │       │   ├── time "2 min" 12px #9CA3AF
│   │       │   └── status-dot (8×8, bg:#10B981) — online
│   │       │
│   │       ├── chat-row-2 ...
│   │       ├── chat-row-3 ...
│   │       ├── chat-row-4 ...
│   │       └── chat-row-5 ...
│   │
│   └── agent-status (bg:#FFF radius:12 pad:20 border)
│       ├── header "Agent holati" 16px Semi
│       │
│       └── agent-list (gap:8)
│           ├── agent-row (flex, gap:12, pad:8, radius:8, align:center)
│           │   ├── avatar (32×32, rad:16) + status-ring
│           │   │   online: ring 2px #10B981
│           │   │   away:   ring 2px #F59E0B
│           │   │   offline: ring 2px #E5E7EB
│           │   ├── info (flex:1)
│           │   │   ├── name "Aziz K." 14px Med #111827
│           │   │   └── role "Admin" 12px #6B7280
│           │   ├── active-chats "5 chat" 13px #4F46E5
│           │   └── status-badge
│           │       online: "Online" bg:#D1FAE5 text:#10B981
│           │       away: "Tashqarida" bg:#FEF3C7 text:#F59E0B
│           │       busy: "Band" bg:#FEE2E2 text:#EF4444
│           │
│           ├── agent-row-2 ...
│           └── agent-row-3 ...
```

---

## Penpot Element Map (Key elements)

```
LAYER ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1.  Board "11-Dashboard" ................. 1440×900 fill:#F9FAFB
2.  Header frame ......................... 1440×64 @ (0,0) fill:#FFF 
3.   └ Logo text ......................... @ (16,18) "CHATFLOW" 18px Bold
4.   └ Search frame ...................... 320×40 @ (152,12) fill:#F3F4F6 rad:8
5.   └ Status group ...................... @ (1100,18)
6.   └ Bell icon ......................... 36×36 @ (1340,14)
     └ Bell badge ........................ 18×18 @ (1358,10) fill:#EF4444
7.   └ Avatar circle ..................... 32×32 @ (1392,16)

8.  Sidebar frame ........................ 240×836 @ (0,64) fill:#FFF
9.   └ 12 menu item groups (each 40px high, stacked)
     └ Active item bg .................... 216×40 @ (12,76+idx×42)

10. Content frame ........................ 1200×836 @ (240,64) fill:#F9FAFB
11.  └ Page header ....................... @ (264,88)
12.  └ Metric cards (4 × 267w × 120h):
      └ Card 1 ........................... 267×120 @ (264,140)
      └ Card 2 ........................... 267×120 @ (547,140)
      └ Card 3 ........................... 267×120 @ (830,140)
      └ Card 4 ........................... 267×120 @ (1113,140)

13.  └ Chart activity .................... 576×300 @ (264,276)
     └ Chart channels .................... 576×300 @ (856,276)

14.  └ Recent chats ...................... 576×320 @ (264,592)
     └ Agent status ...................... 576×320 @ (856,592)
```

---

## ASCII Wireframe (Full Dashboard)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│ [CHATFLOW]  [🔍 Qidirish... Ctrl+K          ]          ● Online  🔔³  [AK]    │
├───────────┬──────────────────────────────────────────────────────────────────────┤
│           │                                                                      │
│ ASOSIY    │  Dashboard                            [Bugun] [Hafta] [Oy] [📅]    │
│ ■Dashboard│  Bugungi umumiy ko'rinish                                            │
│  Inbox 12 │                                                                      │
│  Kontakt  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐              │
│  Tashrifb │  │💬 Jami   │ │💬 Faol   │ │⏱ O'rtacha│ │⭐ Qoniqish│              │
│           │  │  1,247   │ │   23     │ │  2m 34s  │ │  4.8/5   │              │
│ ──────── │  │  ↑ 12%   │ │  ↑ 8%   │ │  ↓ 15%  │ │  ↑ 3%   │              │
│ VOSITALAR │  └──────────┘ └──────────┘ └──────────┘ └──────────┘              │
│  Avtomat. │                                                                      │
│  Bilim b. │  ┌─────────────────────┐ ┌─────────────────────┐                    │
│  Jamoa ch │  │ Chat faoliyati      │ │ Kanallar bo'yicha   │                    │
│  Analitika│  │                     │ │                     │                    │
│           │  │     ╱\    /╲       │ │    ┌───┐           │                    │
│ ──────── │  │   ╱   ╲╱   ╲      │ │    │ ◉ │ 55% Web   │                    │
│ BOSHQAR.  │  │  ╱          ╲     │ │    │   │ 25% TG    │                    │
│  Jamoa    │  │ ╱╱╱╱╱╱╱╱╱╱╱╱╲    │ │    └───┘ 12% IG    │                    │
│  Sozlama  │  │ Du Se Ch Pa Ju    │ │      247  8% Email  │                    │
│  Tariflar │  └─────────────────────┘ └─────────────────────┘                    │
│  PRO      │                                                                      │
│           │  ┌─────────────────────┐ ┌─────────────────────┐                    │
│           │  │ Oxirgi chatlar   →  │ │ Agent holati         │                    │
│           │  │ ● Ali V.  2min     │ │ ● Aziz K.  5chat ✅  │                    │
│           │  │ ● Dilnoza 5min     │ │ ● Sanjar   3chat ✅  │                    │
│ ──────── │  │ ● Bobur   12min    │ │ ● Dilnoza  0    🟡  │                    │
│ « Yig'ish │  │ ● Madina  1soat    │ │                     │                    │
│ v1.0.0    │  └─────────────────────┘ └─────────────────────┘                    │
└───────────┴──────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| Search bar | Focus/Ctrl+K | → Global search modal |
| Status toggle | Click | Dropdown: Online/Away/Busy |
| Bell icon | Click | → Notification center panel |
| User avatar | Click | → User dropdown menu |
| Any sidebar item | Click | → Navigate to that page |
| "Hammasini ko'rish →" | Click | → Inbox page |
| Date filter buttons | Click | Toggle active, refresh data |
| Chat row | Click | → Open that chat in Inbox |
| Agent row | Click | → Agent profile |
| "« Yig'ish" | Click | Sidebar collapse (240→64px, icons only) |

## Dashboard Empty State

```
Content (when no data):
┌──────────────────────────────────────────────────┐
│                                                    │
│          ┌──────┐                                 │
│          │ 📊  │  72×72 bg:#F3F4F6 rad:16        │
│          └──────┘                                 │
│                                                    │
│    Hali ma'lumot yo'q                              │
│    20px Semi #374151                               │
│                                                    │
│    Birinchi chatni boshlang                        │
│    va statistika shu yerda ko'rinadi               │
│    14px Reg #6B7280                               │
│                                                    │
│    ┌──────────────────────┐                       │
│    │  Widget o'rnatish →  │  44h bg:#4F46E5      │
│    └──────────────────────┘                       │
│                                                    │
└──────────────────────────────────────────────────┘
```

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Metric cards | stagger fade-in | 300ms + 50ms delay each |
| Metric values | count up animation | 600ms ease-out |
| Charts | draw/grow animation | 800ms ease |
| Sidebar collapse | width 240→64 | 200ms ease |
| Menu hover | bg fade-in | 100ms |
| Badge pulse | scale 1→1.2→1 | 400ms on new message |
| Status dot | pulse glow | 2s infinite (online) |
