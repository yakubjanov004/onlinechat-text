# Page 02: Login (Kirish)

> **Board:** 1440×900 | **Position:** col=1, row=0 | **BG:** `#F9FAFB`

## Vazifasi
Mavjud foydalanuvchi email+parol yoki Google orqali tizimga kiradi.
Forgot password va Register'ga havolalar mavjud.

---

## Element Tree

```
Board "02-Login" (1440×900, fill:#F9FAFB)
│
└── auth-card (480×auto, center-center)
    │  bg:#FFFFFF  radius:12  shadow:md  padding:40
    │
    ├── logo
    │   img 140×auto, center, mb:32
    │
    ├── heading "Kirish"
    │   24px Semi(600) #111827, center, mb:24
    │
    ├── btn-google (480-80=400w × 44h)
    │   bg:#FFF  border:1px #D1D5DB  radius:8
    │   icon: Google "G" 20px, left
    │   text: "Google orqali kirish" 14px Med(500) #374151
    │   gap:12  hover:shadow-sm bg:#F9FAFB
    │   mb:20
    │
    ├── divider-or (full-width)
    │   ├── line-left  (flex:1, h:1px, #E5E7EB)
    │   ├── text "yoki" (14px Reg #6B7280, px:16)
    │   └── line-right (flex:1, h:1px, #E5E7EB)
    │   mb:20
    │
    ├── form-fields (gap:16)
    │   │
    │   ├── field-email
    │   │   ├── label "Email" (14px Med #374151, mb:6)
    │   │   └── input (44h, radius:8, pad:12/16)
    │   │       placeholder: "email@misol.com"
    │   │       border: 1px #D1D5DB
    │   │       focus: 2px #4F46E5 + ring
    │   │
    │   └── field-password
    │       ├── label "Parol" (14px Med #374151, mb:6)
    │       └── input (44h, radius:8, pad:12/16)
    │           placeholder: "Parolingizni kiriting"
    │           type: password
    │           icon-right: Eye toggle 20px #6B7280
    │           border: 1px #D1D5DB
    │           focus: 2px #4F46E5 + ring
    │   mb:4
    │
    ├── forgot-link (align:right)
    │   "Parolni unutdingizmi?"
    │   14px Reg #4F46E5, hover:underline
    │   mb:20
    │
    ├── btn-submit (full-width × 44h)
    │   bg:#4F46E5  radius:8
    │   text: "Kirish" 14px Semi(600) #FFF
    │   hover: bg:#4338CA
    │   loading: "Kirilmoqda..." + spinner 16px
    │   mb:24
    │
    └── footer-link (center)
        "Akkauntingiz yo'qmi? "
        14px Reg #6B7280
        link: "Ro'yxatdan o'tish" 14px Med #4F46E5 hover:underline
```

---

## States (Holatlar)

### Input States

| State | Border | BG | Extra |
|-------|--------|----|-------|
| Default | 1px `#D1D5DB` | `#FFF` | — |
| Hover | 1px `#9CA3AF` | `#FFF` | — |
| Focus | 2px `#4F46E5` | `#FFF` | ring 3px rgba(79,70,229,0.1) |
| Error | 2px `#EF4444` | `#FEF2F2` | error msg below |
| Filled | 1px `#D1D5DB` | `#FFF` | text #111827 |

### Error Messages

| Trigger | Message | Color |
|---------|---------|-------|
| Empty email | "Email kiriting" | `#EF4444` |
| Invalid email | "Email noto'g'ri formatda" | `#EF4444` |
| Empty password | "Parol kiriting" | `#EF4444` |
| Wrong credentials | "Email yoki parol noto'g'ri" | `#EF4444` |

### Button States

| State | BG | Text | Cursor |
|-------|-----|------|--------|
| Default | `#4F46E5` | `#FFF` | pointer |
| Hover | `#4338CA` | `#FFF` | pointer |
| Active | `#3730A3` | `#FFF` | pointer |
| Loading | `#4F46E5` opacity:0.8 | "Kirilmoqda..." + spinner | wait |
| Disabled | opacity:0.5 | `#FFF` | not-allowed |

---

## Penpot Element Map (chizish uchun)

```
LAYER ORDER (top to bottom in Penpot):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Board "02-Login" .......................... 1440×900 @ (0,0)
   fill: #F9FAFB

2.  └ Card frame ............................. 480×560 @ (480,170)
       fill: #FFFFFF
       radius: 12
       shadow: 0 4px 6px rgba(0,0,0,0.1)

3.    └ Logo (rect/image placeholder) ....... 140×40 @ (650,210)
         fill: #4F46E5 (placeholder)
         text inside: "CHATFLOW" 18px Bold #FFF

4.    └ Heading text ......................... auto @ (x:center, 282)
         "Kirish" 24px Semi #111827

5.    └ Google button frame .................. 400×44 @ (520,330)
         fill: #FFFFFF  stroke: 1px #D1D5DB  radius:8
      └ Google icon (rect) .................. 20×20 @ (540,342)
         fill: #4285F4
      └ Google text .......................... auto @ (572,341)
         "Google orqali kirish" 14px Med #374151

6.    └ Divider group @ y:394
      └ Line-left ........................... 164×1 @ (520,404)
         fill: #E5E7EB
      └ "yoki" text ......................... auto @ (center,396)
         14px Reg #6B7280
      └ Line-right .......................... 164×1 @ (716,404)
         fill: #E5E7EB

7.    └ Email label .......................... auto @ (520,434)
         "Email" 14px Med #374151
     └ Email input frame .................... 400×44 @ (520,456)
         fill: #FFFFFF  stroke:1px #D1D5DB  radius:8
     └ Email placeholder .................... auto @ (532,468)
         "email@misol.com" 14px Reg #6B7280

8.    └ Password label ....................... auto @ (520,516)
         "Parol" 14px Med #374151
     └ Password input frame ................. 400×44 @ (520,538)
         fill: #FFFFFF  stroke:1px #D1D5DB  radius:8
     └ Password placeholder ................. auto @ (532,550)
         "••••••••" 14px Reg #6B7280
     └ Eye icon (rect) ...................... 20×20 @ (888,550)
         fill: #6B7280

9.    └ Forgot link .......................... auto @ (right-align, 590)
         "Parolni unutdingizmi?" 14px Reg #4F46E5

10.   └ Submit button frame .................. 400×44 @ (520,622)
         fill: #4F46E5  radius:8
      └ Submit text .......................... auto @ (center,634)
         "Kirish" 14px Semi #FFFFFF

11.   └ Footer text .......................... auto @ (center,690)
         "Akkauntingiz yo'qmi? " 14px Reg #6B7280
      └ Footer link .......................... inline
         "Ro'yxatdan o'tish" 14px Med #4F46E5
```

---

## ASCII Wireframe (1440×900)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                                                                         │
│                                                                         │
│                    ┌────────────────────────────┐                       │
│                    │                            │                       │
│                    │       [ CHATFLOW ]          │                       │
│                    │                            │                       │
│                    │          Kirish             │                       │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ G  Google orqali kirish │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  ─────────  yoki  ───────── │                       │
│                    │                            │                       │
│                    │  Email                     │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ email@misol.com        │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │  Parol                     │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ ••••••••           👁  │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │         Parolni unutdingizmi?│                       │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │       Kirish            │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  Akkauntingiz yo'qmi?       │                       │
│                    │  Ro'yxatdan o'tish          │                       │
│                    │                            │                       │
│                    └────────────────────────────┘                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions (Bosilganda nima bo'ladi)

| Element | Action | Natija |
|---------|--------|--------|
| Google button | OAuth flow | Google popup → Dashboard redirect |
| Submit "Kirish" | POST /api/auth/login | Success → Dashboard / Error → error msg |
| "Parolni unutdingizmi?" | Navigate | → Forgot Password sahifasi |
| "Ro'yxatdan o'tish" | Navigate | → Register sahifasi |
| Eye icon | Toggle | password ↔ text input type |

---

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Card appear | fade-in + translateY(20→0) | 300ms ease |
| Input focus | border glow ring | 150ms |
| Button hover | bg lighten | 150ms |
| Button click | scale(0.98) | 100ms |
| Error appear | shake translateX(-4,4,0) | 300ms |
| Loading spinner | rotate 360° | 1s linear infinite |
