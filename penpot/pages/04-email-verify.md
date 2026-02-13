# Page 04: Email Verification (Email Tasdiqlash)

> **Board:** 1440×900 | **Position:** col=3, row=0 | **BG:** `#F9FAFB`

## Vazifasi
Foydalanuvchi emailga yuborilgan 6 xonali kodni kiritib akkauntni tasdiqlaydi.
Kod qayta yuborish va email o'zgartirish mumkin.

---

## Element Tree

```
Board "04-Email-Verify" (1440×900, fill:#F9FAFB)
│
└── auth-card (480×auto, center-center)
    │  bg:#FFFFFF  radius:12  shadow:md  padding:40
    │
    ├── icon-circle (64×64, center)
    │   bg:#EEF2FF  radius:32 (full circle)
    │   icon: ✉️ Mail 28px #4F46E5
    │   mb:24
    │
    ├── heading "Emailni tasdiqlang"
    │   24px Semi(600) #111827, center, mb:8
    │
    ├── description (center, maxW:360)
    │   "Biz " 14px Reg #6B7280
    │   "user@email.com" 14px Semi #111827
    │   " emailga 6 xonali kod yubordik"
    │   mb:32
    │
    ├── code-inputs (flex, gap:12, center)
    │   6x input boxes:
    │   each: 48×56, radius:8, border:1.5px #D1D5DB
    │   text: 24px Semi #111827, center
    │   focus: border 2px #4F46E5 + ring
    │   filled: border 1.5px #4F46E5
    │   error: border 2px #EF4444, bg:#FEF2F2
    │   auto-advance on input, backspace goes back
    │   mb:8
    │
    ├── error-message (center, hidden by default)
    │   "Kod noto'g'ri. Qayta urinib ko'ring"
    │   14px Reg #EF4444
    │   mb:24
    │
    ├── btn-verify (full-width × 44h)
    │   bg:#4F46E5  radius:8
    │   text: "Tasdiqlash" 14px Semi(600) #FFF
    │   hover: bg:#4338CA
    │   disabled: opacity:0.5 (until 6 digits entered)
    │   loading: "Tekshirilmoqda..." + spinner
    │   mb:24
    │
    ├── resend-section (center)
    │   ├── timer-state (60s countdown)
    │   │   "Kodni qayta yuborish " 14px Reg #6B7280
    │   │   "0:45" 14px Semi #4F46E5
    │   │
    │   └── active-state (timer = 0)
    │       "Kod kelmadimi? "
    │       btn-link: "Qayta yuborish" 14px Med #4F46E5 hover:underline
    │   mb:16
    │
    └── change-email (center)
        btn-link: "Emailni o'zgartirish" 14px Reg #6B7280 hover:#4F46E5
```

---

## States

### Code Input States

| State | Border | BG | Text |
|-------|--------|----|------|
| Empty | 1.5px `#D1D5DB` | `#FFF` | — |
| Focus | 2px `#4F46E5` | `#FFF` | cursor blink |
| Filled | 1.5px `#4F46E5` | `#FFF` | `#111827` |
| Error | 2px `#EF4444` | `#FEF2F2` | `#EF4444` |
| Success | 2px `#10B981` | `#F0FDF4` | `#10B981` |

### Success Flow
```
All 6 entered → auto-submit → spinner 1s →
Success: all boxes turn green → redirect to Welcome (500ms)
```

### Resend Cooldown

| State | Display |
|-------|---------|
| Counting | "Kodni qayta yuborish 0:45" (grey + blue timer) |
| Ready | "Kod kelmadimi? Qayta yuborish" (clickable link) |
| Sent | "Kod qayta yuborildi ✓" green toast 3s |

---

## Penpot Element Map

```
LAYER ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Board "04-Email-Verify" ................. 1440×900 @ (0,0)
   fill: #F9FAFB

2.  └ Card frame ........................... 480×480 @ (480,210)
       fill: #FFFFFF  radius:12  shadow:md

3.    └ Icon circle ........................ 64×64 @ (688,250)
         fill: #EEF2FF  radius:32
      └ Mail icon (rect placeholder) ....... 28×28 @ (706,268)
         fill: #4F46E5

4.    └ Heading ............................ auto @ (center,338)
         "Emailni tasdiqlang" 24px Semi #111827
      └ Description ........................ auto @ (center,370)
         14px Reg #6B7280 (multi-line centered)

5.    └ Code input group:
      └ Box 1 ............................. 48×56 @ (528,422)
      └ Box 2 ............................. 48×56 @ (588,422)
      └ Box 3 ............................. 48×56 @ (648,422)
      └ Box 4 ............................. 48×56 @ (708,422)
      └ Box 5 ............................. 48×56 @ (768,422)
      └ Box 6 ............................. 48×56 @ (828,422)
         each: fill:#FFF stroke:1.5px #D1D5DB radius:8
      └ Digit texts inside each box
         "5" 24px Semi #111827, center

6.    └ Verify button frame ................ 400×44 @ (520,502)
         fill: #4F46E5  radius:8
      └ Verify text ........................ auto @ (center,514)
         "Tasdiqlash" 14px Semi #FFF

7.    └ Resend text ........................ auto @ (center,566)
         "Kodni qayta yuborish 0:45" 14px #6B7280 + #4F46E5

8.    └ Change email ....................... auto @ (center,594)
         "Emailni o'zgartirish" 14px #6B7280
```

---

## ASCII Wireframe

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                                                                         │
│                                                                         │
│                    ┌────────────────────────────┐                       │
│                    │                            │                       │
│                    │          ┌────┐            │                       │
│                    │          │ ✉️ │            │                       │
│                    │          └────┘            │                       │
│                    │                            │                       │
│                    │    Emailni tasdiqlang       │                       │
│                    │                            │                       │
│                    │   Biz user@email.com        │                       │
│                    │   emailga 6 xonali          │                       │
│                    │   kod yubordik              │                       │
│                    │                            │                       │
│                    │  ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ ┌──┐ │                 │
│                    │  │5 │ │2 │ │8 │ │  │ │  │ │  │ │                 │
│                    │  └──┘ └──┘ └──┘ └──┘ └──┘ └──┘ │                 │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │     Tasdiqlash         │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  Kodni qayta yuborish 0:45  │                       │
│                    │     Emailni o'zgartirish    │                       │
│                    │                            │                       │
│                    └────────────────────────────┘                       │
│                                                                         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| Code boxes | Auto-submit 6 digits | POST /api/auth/verify |
| "Tasdiqlash" | Manual submit | POST /api/auth/verify |
| "Qayta yuborish" | Resend code | POST /api/auth/resend → cooldown restart |
| "Emailni o'zgartirish" | Navigate back | → Register sahifasi |

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Card appear | fade-in + translateY(20→0) | 300ms |
| Code box focus | scale(1.05) | 150ms |
| Auto-advance | next box focus | instant |
| Success | all green + scale bounce | 300ms |
| Error | boxes shake + red flash | 300ms |
| Resend toast | slide-down + fade-out | 3s |
