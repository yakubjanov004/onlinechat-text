# Page 07: Onboarding Step 1 — Workspace Setup

> **Board:** 1440×900 | **Position:** col=1, row=1 | **BG:** `#F9FAFB`

## Vazifasi
Foydalanuvchi Workspace nomi va kompaniya veb-saytini kiritadi.
Bu birinchi qadamda org/workspace yaratiladi.

---

## Element Tree

```
Board "07-Onboarding-1" (1440×900, fill:#F9FAFB)
│
├── progress-indicator (center-top, mt:40)
│   flex, gap:8, align:center
│   │
│   ├── dot-1 (active)  24×24 bg:#4F46E5 radius:12 text:"1" 12px Bold #FFF
│   ├── conn-1          48×2 bg:#4F46E5 (done connector)
│   ├── dot-2 (upcoming) 24×24 bg:#E5E7EB radius:12 text:"2" 12px Bold #9CA3AF
│   ├── conn-2          48×2 bg:#E5E7EB
│   ├── dot-3 (upcoming) 24×24 bg:#E5E7EB radius:12
│   ├── conn-3          48×2 bg:#E5E7EB
│   └── dot-4 (upcoming) 24×24 bg:#E5E7EB radius:12
│   mb:40
│
└── onboarding-card (560×auto, center)
    │  bg:#FFFFFF  radius:16  shadow:lg  padding:40
    │
    ├── step-label
    │   "1-qadam / 4" 13px Med #4F46E5, mb:8
    │
    ├── heading "Workspace yarating"
    │   24px Semi(600) #111827, mb:8
    │
    ├── description
    │   "Kompaniyangiz uchun ish muhitini sozlang"
    │   14px Reg #6B7280, mb:32
    │
    ├── form-fields (gap:20)
    │   │
    │   ├── field-workspace-name
    │   │   ├── label "Workspace nomi *" (14px Med #374151, mb:6)
    │   │   └── input (44h, radius:8, pad:12/16)
    │   │       placeholder: "Masalan: ChatFlow Team"
    │   │       required: true
    │   │       border: 1px #D1D5DB
    │   │
    │   ├── field-website
    │   │   ├── label "Kompaniya veb-sayti" (14px Med #374151, mb:6)
    │   │   └── input-group (44h, radius:8)
    │   │       ├── prefix "https://" (bg:#F3F4F6, border-right:1px #D1D5DB, pad:0/12, 14px Reg #6B7280)
    │   │       └── input (pad:12/16)
    │   │           placeholder: "your-company.com"
    │   │
    │   └── field-team-size (optional)
    │       ├── label "Jamoa hajmi" (14px Med #374151, mb:6)
    │       └── select/dropdown (44h, radius:8, pad:12/16)
    │           options: "1-5", "6-20", "21-50", "50+"
    │           icon-right: Chevron down 16px #6B7280
    │   mb:32
    │
    ├── btn-row (flex, gap:12)
    │   ├── btn-skip (flex:1, 44h)
    │   │   bg:#FFF  border:1px #D1D5DB  radius:8
    │   │   "O'tkazib yuborish" 14px Med #374151
    │   │
    │   └── btn-continue (flex:1, 44h)
    │       bg:#4F46E5  radius:8
    │       "Davom etish →" 14px Semi #FFF
    │       disabled: until workspace name filled
    │       hover: bg:#4338CA
    │
    └── help-link (center, mt:16)
        "Yordam kerakmi?" 13px Reg #6B7280
        link: "Qo'llanmani ko'ring" #4F46E5
```

---

## Progress Indicator States

```
Step 1 Active:
  ● ── ○ ── ○ ── ○
  1       2    3    4
  #4F46E5  #E5E7EB (all upcoming)

Step 2 Active:
  ✓ ── ● ── ○ ── ○
  #10B981  #4F46E5  #E5E7EB

Step 3 Active:
  ✓ ── ✓ ── ● ── ○

Step 4 Active:
  ✓ ── ✓ ── ✓ ── ●

Done dot:  24×24 bg:#10B981, icon:check 12px #FFF
Active:    24×24 bg:#4F46E5, text number 12px Bold #FFF
Upcoming:  24×24 bg:#E5E7EB, text number 12px Bold #9CA3AF

Done connector:    48×2 bg:#10B981
Active connector:  48×2 bg:#4F46E5
Upcoming connector:48×2 bg:#E5E7EB
```

---

## Penpot Element Map

```
1. Board ................................... 1440×900 fill: #F9FAFB

2. Progress group @ (center, 40):
   dot1 ................................... 24×24 @ (618,40) fill:#4F46E5
   conn1 .................................. 48×2 @ (646,51) fill:#4F46E5
   dot2 ................................... 24×24 @ (698,40) fill:#E5E7EB
   conn2 .................................. 48×2 @ (726,51) fill:#E5E7EB
   dot3 ................................... 24×24 @ (778,40) fill:#E5E7EB
   conn3 .................................. 48×2 @ (806,51) fill:#E5E7EB
   dot4 ................................... 24×24 @ (858,40) fill:#E5E7EB
   digit texts inside each dot

3. Card frame .............................. 560×500 @ (440,110)
      fill:#FFF radius:16 shadow-lg

4.  └ Step label ........................... @ (480,150)
       "1-qadam / 4" 13px Med #4F46E5
    └ Heading .............................. @ (480,170)
       24px Semi #111827
    └ Description .......................... @ (480,202)
       14px Reg #6B7280

5.  └ Workspace label ...................... @ (480,254)
    └ Workspace input ...................... 480×44 @ (480,276)
    └ Website label ........................ @ (480,336)
    └ Website input group .................. 480×44 @ (480,358)
      └ Prefix bg .......................... 76×44 @ (480,358) fill:#F3F4F6
    └ Team size label ...................... @ (480,418)
    └ Team size select ..................... 480×44 @ (480,440)

6.  └ Skip btn ............................. 230×44 @ (480,512)
    └ Continue btn ......................... 230×44 @ (730,512)

7.  └ Help text ............................ @ (center,576)
```

---

## ASCII Wireframe

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                      ● ─── ○ ─── ○ ─── ○                              │
│                      1     2     3     4                                │
│                                                                         │
│                 ┌──────────────────────────────────┐                    │
│                 │  1-qadam / 4                     │                    │
│                 │                                  │                    │
│                 │  Workspace yarating               │                    │
│                 │  Kompaniyangiz uchun ish muhitini │                    │
│                 │  sozlang                          │                    │
│                 │                                  │                    │
│                 │  Workspace nomi *                 │                    │
│                 │  ┌──────────────────────────────┐ │                    │
│                 │  │ Masalan: ChatFlow Team       │ │                    │
│                 │  └──────────────────────────────┘ │                    │
│                 │                                  │                    │
│                 │  Kompaniya veb-sayti              │                    │
│                 │  ┌────────┬─────────────────────┐ │                    │
│                 │  │https://│ your-company.com    │ │                    │
│                 │  └────────┴─────────────────────┘ │                    │
│                 │                                  │                    │
│                 │  Jamoa hajmi                      │                    │
│                 │  ┌──────────────────────────────┐ │                    │
│                 │  │ 1-5                        ▼ │ │                    │
│                 │  └──────────────────────────────┘ │                    │
│                 │                                  │                    │
│                 │  ┌─────────────┐ ┌──────────────┐ │                    │
│                 │  │O'tkazib yub.│ │ Davom etish →│ │                    │
│                 │  └─────────────┘ └──────────────┘ │                    │
│                 │                                  │                    │
│                 │    Yordam kerakmi? Qo'llanmani    │                    │
│                 │    ko'ring                        │                    │
│                 └──────────────────────────────────┘                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| "Davom etish →" | POST /api/workspace → Next | → Step 2 (Widget Install) |
| "O'tkazib yuborish" | Skip step | → Step 2 with workspace deferred |
| "Qo'llanmani ko'ring" | New tab | → Help Center |

---

# Page 08: Onboarding Step 2 — Widget O'rnatish

> **Board:** 1440×900 | **Position:** col=2, row=1 | **BG:** `#F9FAFB`

## Vazifasi
Foydalanuvchi chat widgetni saytiga o'rnatish uchun kod oladi.
Kodni copy qilish va test qilish imkoniyati.

---

## Element Tree

```
Board "08-Onboarding-2" (1440×900, fill:#F9FAFB)
│
├── progress-indicator (step 2 active)
│   ✓ ── ● ── ○ ── ○
│
└── onboarding-card (560×auto, center)
    │  bg:#FFFFFF  radius:16  shadow:lg  padding:40
    │
    ├── step-label "2-qadam / 4" 13px Med #4F46E5
    │
    ├── heading "Chat widgetni o'rnating"
    │   24px Semi(600) #111827, mb:8
    │
    ├── description
    │   "Quyidagi kodni saytingizning </body> tegidan oldin joylashtiring"
    │   14px Reg #6B7280, mb:24
    │
    ├── code-block (full-width, bg:#1F2937 radius:12 pad:20)
    │   ├── code-header (flex, justify:between)
    │   │   ├── lang-tag "HTML" 12px Mono #9CA3AF
    │   │   └── btn-copy
    │   │       icon: Copy 14px #9CA3AF
    │   │       "Nusxalash" 13px #9CA3AF
    │   │       hover: #FFF
    │   │       clicked: "Nusxalandi ✓" 13px #10B981 (2s)
    │   │
    │   └── code-content (Fira Code / JetBrains Mono, 13px)
    │       ```html
    │       <script>
    │         (function(w,d,s){
    │           w.ChatFlowWidget={
    │             id: "YOUR_WIDGET_ID"
    │           };
    │           var f=d.getElementsByTagName(s)[0],
    │               j=d.createElement(s);
    │           j.async=true;
    │           j.src="https://cdn.chatflow.uz/widget.js";
    │           f.parentNode.insertBefore(j,f);
    │         })(window,document,"script");
    │       </script>
    │       ```
    │       syntax highlighting: keywords #C084FC, strings #34D399, functions #60A5FA
    │   mb:20
    │
    ├── integration-options (flex, gap:12, mb:24)
    │   3 option cards (flex:1, pad:16, border:1px #E5E7EB, radius:8):
    │   │
    │   ├── option-wordpress
    │   │   icon: WP 24px, "WordPress" 13px Semi, "Plugin" 12px #6B7280
    │   │   hover: border:#4F46E5 bg:#EEF2FF
    │   │
    │   ├── option-react
    │   │   icon: React 24px, "React" 13px Semi, "npm package" 12px #6B7280
    │   │
    │   └── option-other
    │       icon: Code 24px, "Boshqa" 13px Semi, "Script tag" 12px #6B7280
    │
    ├── test-section (bg:#F0FDF4, border:1px #D1FAE5, radius:12, pad:16)
    │   flex, gap:12, align:center
    │   ├── icon: ✓ in circle 32×32 bg:#10B981 #FFF
    │   ├── text:
    │   │   ├── "Widget tekshiruvi" 14px Semi #111827
    │   │   └── "Saytingizga kodingizni joylashtiring va tekshiring" 13px Reg #6B7280
    │   └── btn: "Tekshirish" 13px Semi #10B981, border:1px #10B981, radius:6
    │   mb:32
    │
    ├── btn-row (flex, gap:12)
    │   ├── btn-back (flex:0, 44h)
    │   │   bg:#FFF  border:1px #D1D5DB  radius:8  pad:0/24
    │   │   icon: ← 16px  "Orqaga" 14px Med #374151
    │   │
    │   ├── btn-skip (flex:1, 44h)
    │   │   bg:#FFF  border:1px #D1D5DB  radius:8
    │   │   "O'tkazib yuborish" 14px Med #374151
    │   │
    │   └── btn-continue (flex:1, 44h)
    │       bg:#4F46E5  radius:8
    │       "Davom etish →" 14px Semi #FFF
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| "Nusxalash" | Copy to clipboard | Toast: "Nusxalandi ✓" |
| WordPress | Open guide | → WordPress plugin guide |
| React | Open guide | → npm package guide |
| "Tekshirish" | Test widget | Ping widget endpoint → success/fail |
| "Orqaga" | Navigate | → Step 1 |
| "O'tkazib yuborish" | Skip | → Step 3 |
| "Davom etish →" | Navigate | → Step 3 |

---

# Page 09: Onboarding Step 3 — Jamoa Taklifi

> **Board:** 1440×900 | **Position:** col=3, row=1 | **BG:** `#F9FAFB`

## Element Tree

```
Board "09-Onboarding-3" (1440×900, fill:#F9FAFB)
│
├── progress-indicator (step 3 active)
│   ✓ ── ✓ ── ● ── ○
│
└── onboarding-card (560×auto, center)
    │  bg:#FFFFFF  radius:16  shadow:lg  padding:40
    │
    ├── step-label "3-qadam / 4" 13px Med #4F46E5
    │
    ├── heading "Jamoangizni taklif qiling"
    │   24px Semi #111827, mb:8
    │
    ├── description
    │   "Agentlarni qo'shib, mijozlarga tezroq javob bering"
    │   14px Reg #6B7280, mb:24
    │
    ├── invite-inputs (gap:12)
    │   │
    │   ├── invite-row-1 (flex, gap:8)
    │   │   ├── input-email (flex:1, 44h)
    │   │   │   placeholder: "agent@email.com"
    │   │   └── select-role (140w × 44h)
    │   │       "Agent" / "Admin" / "Kuzatuvchi"
    │   │       icon: Chevron ▼
    │   │
    │   ├── invite-row-2 (same)
    │   │   placeholder: "teammate@email.com"
    │   │
    │   └── invite-row-3 (same, initially dimmed)
    │       placeholder: "yana birini qo'shish..."
    │
    │   ├── btn-add-more (mt:8)
    │   │   icon: + 14px #4F46E5
    │   │   "Yana qo'shish" 14px Med #4F46E5
    │   mb:24
    │
    ├── invite-link-section (bg:#F9FAFB, rad:12, pad:16, mb:32)
    │   ├── label "Yoki taklif havolasi orqali:" 13px Reg #6B7280
    │   ├── link-row (flex, gap:8, mt:8)
    │   │   ├── input (flex:1, 40h, bg:#FFF, border)
    │   │   │   value: "https://app.chatflow.uz/invite/abc123"
    │   │   │   readonly
    │   │   └── btn-copy (40×40, border, radius:8)
    │   │       icon: Copy 16px
    │
    ├── btn-row (flex, gap:12)
    │   ├── btn-back, btn-skip, btn-invite
    │   │   "Taklif yuborish va davom etish →" 14px Semi #FFF
```

---

# Page 10: Onboarding Step 4 — Avtomatlashtirish

> **Board:** 1440×900 | **Position:** col=4, row=1 | **BG:** `#F9FAFB`

## Element Tree

```
Board "10-Onboarding-4" (1440×900, fill:#F9FAFB)
│
├── progress-indicator (step 4 active, all done)
│   ✓ ── ✓ ── ✓ ── ●
│
└── onboarding-card (560×auto, center)
    │  bg:#FFFFFF  radius:16  shadow:lg  padding:40
    │
    ├── step-label "4-qadam / 4" 13px Med #4F46E5
    │
    ├── heading "Avtomatlashtirishni sozlang"
    │   24px Semi #111827, mb:8
    │
    ├── description
    │   "Tez javob berish uchun quyidagi sozlamalarni yoqing"
    │   14px Reg #6B7280, mb:24
    │
    ├── toggle-cards (gap:12)
    │   │
    │   ├── card-welcome-msg (flex, pad:16, border:1px #E5E7EB, radius:12)
    │   │   ├── icon (40×40, bg:#EEF2FF, radius:8)
    │   │   │   icon: 💬 16px #4F46E5
    │   │   ├── info (flex:1, ml:12)
    │   │   │   ├── "Xush kelibsiz xabari" 14px Semi #111827
    │   │   │   └── "Yangi tashrif buyuruvchilarga avtomatik salomlashish" 13px Reg #6B7280
    │   │   └── toggle (44×24, radius:12)
    │   │       off: bg:#E5E7EB, knob:#FFF left
    │   │       on:  bg:#4F46E5, knob:#FFF right
    │   │       default: on
    │   │
    │   ├── card-away-msg (same structure)
    │   │   icon: 🕐 on #FEF3C7
    │   │   "Tashqaridamiz xabari"
    │   │   "Ish vaqtidan tashqari avtomatik javob"
    │   │   toggle default: on
    │   │
    │   ├── card-auto-assign (same)
    │   │   icon: 🔄 on #D1FAE5
    │   │   "Avtomatik tayinlash"
    │   │   "Chatlarni agentlarga teng taqsimlash"
    │   │   toggle default: off
    │   │
    │   └── card-satisfaction (same)
    │       icon: ⭐ on #FCE7F3
    │       "Baholash so'rovi"
    │       "Chat tugagandan keyin baholash so'rash"
    │       toggle default: off
    │   mb:32
    │
    ├── btn-row (flex, gap:12)
    │   ├── btn-back
    │   └── btn-finish (flex:1, 56h)
    │       bg: gradient(135deg, #4F46E5, #7C3AED)  radius:12
    │       "Tugatish va dashboardga o'tish 🎉" 16px Semi #FFF
    │       hover: brightness(1.1)
```

---

## Onboarding Complete Modal (overlay after Step 4)

```
Overlay: bg:rgba(0,0,0,0.5) backdrop-blur:4px

modal-card (480×auto, center-center)
│  bg:#FFF  radius:16  shadow:2xl  padding:40
│
├── confetti animation (absolute, full-screen)
│
├── celebration (80×80, center)
│   bg:gradient #4F46E5→#7C3AED, radius:40
│   icon: 🚀 Rocket 36px
│   mb:24
│
├── heading "Tabriklaymiz! 🎉"
│   28px Bold #111827, center, mb:8
│
├── subheading "CHATFLOW tayyor!"
│   16px Reg #6B7280, center, mb:24
│
├── stats-row (flex, gap:24, center, mb:32)
│   ├── stat: "1" 24px Bold #4F46E5 + "Workspace" 12px #6B7280
│   ├── stat: "3" 24px Bold #10B981 + "Agent" 12px #6B7280
│   └── stat: "2" 24px Bold #F59E0B + "Avtomatik" 12px #6B7280
│
├── btn-dashboard (full-width × 56h)
│   bg:#4F46E5  radius:12
│   "Dashboard'ga o'tish →" 16px Semi #FFF
│
└── btn-explore (center, mt:12)
    "Sozlamalarni ko'rish" 14px Reg #6B7280
```

---

## Actions Summary (All Onboarding)

| Step | Main Action | Skip Action | Result |
|------|-------------|-------------|--------|
| 1 | Create workspace | Skip → Step 2 | POST /api/workspace |
| 2 | Copy code | Skip → Step 3 | Widget install |
| 3 | Send invites | Skip → Step 4 | POST /api/invite |
| 4 | Set toggles + Finish | — | PATCH /api/settings → Dashboard |
