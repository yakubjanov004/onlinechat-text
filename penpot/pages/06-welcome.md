# Page 06: Welcome / First Login (Xush kelibsiz)

> **Board:** 1440×900 | **Position:** col=0, row=1 | **BG:** `#F9FAFB`

## Vazifasi
Email tasdiqlangandan keyin birinchi marta tizimga kirgan foydalanuvchini
kutib olish. Ismni ko'rsatish, keyingi qadamlar haqida ma'lumot berish.

---

## Element Tree

```
Board "06-Welcome" (1440×900, fill:#F9FAFB)
│
└── welcome-card (600×auto, center-center)
    │  bg:#FFFFFF  radius:16  shadow:lg  padding:48
    │
    ├── celebration-icon (80×80, center)
    │   bg: gradient(135deg, #4F46E5, #7C3AED)
    │   radius: 40 (circle)
    │   icon: 🎉 Party 36px #FFF
    │   mb:32
    │
    ├── heading "Xush kelibsiz, Aziz! 🎉"
    │   28px Bold(700) #111827, center, mb:8
    │   (Aziz = dynamic user name)
    │
    ├── subheading
    │   "Akkauntingiz muvaffaqiyatli yaratildi"
    │   16px Reg #6B7280, center, mb:32
    │
    ├── steps-preview (flex-col, gap:16, padding:24, bg:#F9FAFB, radius:12)
    │   │
    │   ├── step-1 (flex, gap:12, align:center)
    │   │   ├── step-icon (32×32, bg:#EEF2FF, radius:8)
    │   │   │   icon: 🏢 Building 16px #4F46E5
    │   │   ├── step-info
    │   │   │   ├── "Workspace yaratish" 14px Semi #111827
    │   │   │   └── "Kompaniya ma'lumotlari" 13px Reg #6B7280
    │   │   └── est-time "~1 min" 12px Reg #9CA3AF
    │   │
    │   ├── step-2 (flex, gap:12, align:center)
    │   │   ├── step-icon (32×32, bg:#FEF3C7, radius:8)
    │   │   │   icon: 💬 Chat 16px #F59E0B
    │   │   ├── step-info
    │   │   │   ├── "Widget o'rnatish" 14px Semi #111827
    │   │   │   └── "Saytga chat qo'shish" 13px Reg #6B7280
    │   │   └── est-time "~2 min" 12px Reg #9CA3AF
    │   │
    │   ├── step-3 (flex, gap:12, align:center)
    │   │   ├── step-icon (32×32, bg:#D1FAE5, radius:8)
    │   │   │   icon: 👥 Team 16px #10B981
    │   │   ├── step-info
    │   │   │   ├── "Jamoani taklif qilish" 14px Semi #111827
    │   │   │   └── "Agentlarni qo'shish" 13px Reg #6B7280
    │   │   └── est-time "~1 min" 12px Reg #9CA3AF
    │   │
    │   └── step-4 (flex, gap:12, align:center)
    │       ├── step-icon (32×32, bg:#FCE7F3, radius:8)
    │       │   icon: ⚡ Bolt 16px #EC4899
    │       ├── step-info
    │       │   ├── "Avtomatlashtirishni sozlash" 14px Semi #111827
    │       │   └── "Auto-javoblar" 13px Reg #6B7280
    │       └── est-time "~2 min" 12px Reg #9CA3AF
    │
    │   mb:32
    │
    ├── total-time (center)
    │   icon: ⏱ Clock 14px #6B7280
    │   "Taxminan 6 daqiqa" 14px Reg #6B7280
    │   mb:24
    │
    ├── btn-start (full-width × 56h)
    │   bg: gradient(135deg, #4F46E5, #7C3AED)  radius:12
    │   text: "Boshlash →" 16px Semi(600) #FFF
    │   hover: brightness(1.1) shadow-lg
    │   mb:12
    │
    └── btn-skip (center)
        "Keyinroq sozlash" 14px Reg #6B7280
        hover: #4F46E5 underline
```

---

## Penpot Element Map

```
LAYER ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Board "06-Welcome" ...................... 1440×900 fill:#F9FAFB

2. Card frame ............................. 600×640 @ (420,130)
      fill:#FFF radius:16 shadow-lg

3.  └ Celebration circle .................. 80×80 @ (680,178)
       fill: #4F46E5 (gradient placeholder) radius:40
    └ Party icon rect ..................... 36×36 @ (702,200)
       fill: #FFF

4.  └ Heading ............................. auto @ (center,290)
       "Xush kelibsiz, Aziz! 🎉" 28px Bold #111827
    └ Subheading .......................... auto @ (center,326)
       16px Reg #6B7280

5.  └ Steps bg frame ...................... 504×220 @ (468,370)
       fill: #F9FAFB  radius:12

    └ Step 1 row:
      └ Icon bg ........................... 32×32 @ (492,394)
         fill:#EEF2FF radius:8
      └ Title ............................. @ (536,394)
         14px Semi #111827
      └ Desc .............................. @ (536,412)
         13px Reg #6B7280
      └ Time .............................. @ (right,400)
         12px #9CA3AF

    └ Step 2 row: @ y:438 (same structure)
    └ Step 3 row: @ y:482
    └ Step 4 row: @ y:526

6.  └ Total time .......................... auto @ (center,610)
       14px #6B7280

7.  └ Start btn frame ..................... 504×56 @ (468,646)
       fill: #4F46E5  radius:12
    └ Start text .......................... auto @ (center,662)
       "Boshlash →" 16px Semi #FFF

8.  └ Skip text ........................... auto @ (center,718)
       "Keyinroq sozlash" 14px #6B7280
```

---

## ASCII Wireframe

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                 ┌──────────────────────────────────┐                    │
│                 │                                  │                    │
│                 │            ┌──────┐              │                    │
│                 │            │  🎉  │              │                    │
│                 │            └──────┘              │                    │
│                 │                                  │                    │
│                 │    Xush kelibsiz, Aziz! 🎉       │                    │
│                 │    Akkauntingiz muvaffaqiyatli    │                    │
│                 │    yaratildi                      │                    │
│                 │                                  │                    │
│                 │  ┌──────────────────────────────┐ │                    │
│                 │  │ 🏢 Workspace yaratish  ~1min │ │                    │
│                 │  │    Kompaniya ma'lumotlari    │ │                    │
│                 │  │──────────────────────────────│ │                    │
│                 │  │ 💬 Widget o'rnatish    ~2min │ │                    │
│                 │  │    Saytga chat qo'shish     │ │                    │
│                 │  │──────────────────────────────│ │                    │
│                 │  │ 👥 Jamoani taklif     ~1min │ │                    │
│                 │  │    Agentlarni qo'shish      │ │                    │
│                 │  │──────────────────────────────│ │                    │
│                 │  │ ⚡ Avtomatlashtirishni  ~2min│ │                    │
│                 │  │    Auto-javoblar             │ │                    │
│                 │  └──────────────────────────────┘ │                    │
│                 │                                  │                    │
│                 │       ⏱ Taxminan 6 daqiqa        │                    │
│                 │                                  │                    │
│                 │  ┌──────────────────────────────┐ │                    │
│                 │  │        Boshlash →            │ │                    │
│                 │  └──────────────────────────────┘ │                    │
│                 │       Keyinroq sozlash            │                    │
│                 │                                  │                    │
│                 └──────────────────────────────────┘                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| "Boshlash →" | Navigate | → Onboarding Step 1 (Workspace setup) |
| "Keyinroq sozlash" | Skip + Navigate | → Dashboard (empty state) |

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Card | fade-in + scale(0.95→1) | 400ms ease |
| Celebration icon | bounce + rotate(0→360) | 600ms spring |
| Steps list | stagger fade-in each 100ms delay | 400ms each |
| Start button | gradient shift on hover | 300ms |
| Confetti particles (optional) | random scatter | 2s |
