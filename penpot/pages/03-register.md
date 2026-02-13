# Page 03: Register (Ro'yxatdan o'tish)

> **Board:** 1440×900 | **Position:** col=2, row=0 | **BG:** `#F9FAFB`

## Vazifasi
Yangi foydalanuvchi email+parol yoki Google orqali akkaunt yaratadi.
Privacy policy/ToS roziligini tasdiqlaydi.

---

## Element Tree

```
Board "03-Register" (1440×900, fill:#F9FAFB)
│
└── auth-card (480×auto, center-center)
    │  bg:#FFFFFF  radius:12  shadow:md  padding:40
    │
    ├── logo
    │   img 140×auto, center, mb:32
    │
    ├── heading "Ro'yxatdan o'tish"
    │   24px Semi(600) #111827, center, mb:8
    │
    ├── subheading "CHATFLOW bilan mijozlar bilan muloqotni boshlang"
    │   14px Reg #6B7280, center, mb:24
    │
    ├── btn-google (400w × 44h)
    │   bg:#FFF  border:1px #D1D5DB  radius:8
    │   icon: Google "G" 20px, left
    │   text: "Google orqali ro'yxatdan o'tish" 14px Med(500) #374151
    │   gap:12  hover:shadow-sm bg:#F9FAFB
    │   mb:20
    │
    ├── divider-or (full-width)
    │   line + "yoki" + line (14px Reg #6B7280)
    │   mb:20
    │
    ├── form-fields (gap:16)
    │   │
    │   ├── field-email
    │   │   ├── label "Email" (14px Med #374151, mb:6)
    │   │   └── input (44h, radius:8, pad:12/16)
    │   │       placeholder: "email@misol.com"
    │   │       border: 1px #D1D5DB
    │   │
    │   ├── field-password
    │   │   ├── label "Parol" (14px Med #374151, mb:6)
    │   │   └── input (44h, radius:8, pad:12/16)
    │   │       placeholder: "Kamida 8 ta belgi"
    │   │       icon-right: Eye toggle 20px #6B7280
    │   │
    │   ├── password-strength-bar (400×4, radius:2, mt:4)
    │   │   ├── Weak:    1/4 fill #EF4444, text "Kuchsiz" 12px #EF4444
    │   │   ├── Fair:    2/4 fill #F59E0B, text "O'rtacha" 12px #F59E0B
    │   │   ├── Good:    3/4 fill #3B82F6, text "Yaxshi" 12px #3B82F6
    │   │   └── Strong:  4/4 fill #10B981, text "Kuchli" 12px #10B981
    │   │
    │   └── field-confirm-password
    │       ├── label "Parolni tasdiqlash" (14px Med #374151, mb:6)
    │       └── input (44h, radius:8, pad:12/16)
    │           placeholder: "Parolni qayta kiriting"
    │           icon-right: Eye toggle 20px #6B7280
    │   mb:16
    │
    ├── checkbox-row (flex, gap:8, align:start)
    │   ├── checkbox (18×18, radius:4, border:1.5px #D1D5DB)
    │   │   checked: bg:#4F46E5, icon:check 12px #FFF
    │   └── text (14px Reg #6B7280)
    │       "Men "
    │       link: "Foydalanish shartlari" #4F46E5 underline
    │       " va "
    │       link: "Maxfiylik siyosati" #4F46E5 underline
    │       "ga roziman"
    │   mb:20
    │
    ├── btn-submit (full-width × 44h)
    │   bg:#4F46E5  radius:8
    │   text: "Ro'yxatdan o'tish" 14px Semi(600) #FFF
    │   hover: bg:#4338CA
    │   disabled: opacity:0.5 (checkbox unchecked)
    │   loading: "Yaratilmoqda..." + spinner
    │   mb:24
    │
    └── footer-link (center)
        "Akkauntingiz bormi? "
        14px Reg #6B7280
        link: "Kirish" 14px Med #4F46E5 hover:underline
```

---

## States

### Password Strength Indicator

| Level | Color | Width | Label |
|-------|-------|-------|-------|
| Empty | `#E5E7EB` | 0% | — |
| Weak (< 8 chars) | `#EF4444` | 25% | "Kuchsiz" |
| Fair (8+ chars, 1 type) | `#F59E0B` | 50% | "O'rtacha" |
| Good (8+, 2 types) | `#3B82F6` | 75% | "Yaxshi" |
| Strong (8+, 3+ types) | `#10B981` | 100% | "Kuchli" |

### Validation Errors

| Field | Rule | Message |
|-------|------|---------|
| Email | required | "Email kiriting" |
| Email | format | "Email noto'g'ri formatda" |
| Email | exists | "Bu email allaqachon ro'yxatdan o'tgan" |
| Password | min 8 | "Parol kamida 8 ta belgidan iborat bo'lsin" |
| Password | weak | "Harf, raqam va belgi qo'shing" |
| Confirm | match | "Parollar mos kelmayapti" |
| Checkbox | required | "Shartlarni qabul qiling" |

---

## Penpot Element Map

```
LAYER ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Board "03-Register" ..................... 1440×900 @ (0,0)
   fill: #F9FAFB

2.  └ Card frame ........................... 480×680 @ (480,110)
       fill: #FFFFFF  radius:12  shadow:md

3.    └ Logo placeholder ................... 140×40 @ (650,150)
      └ Heading ............................ auto @ (center,222)
         "Ro'yxatdan o'tish" 24px Semi #111827
      └ Subheading ......................... auto @ (center,254)
         14px Reg #6B7280

4.    └ Google btn frame ................... 400×44 @ (520,294)
      └ Google icon rect ................... 20×20 @ (540,306)
      └ Google text ........................ auto @ (572,305)

5.    └ Divider group ...................... @ y:358
         lines + "yoki"

6.    └ Email label ........................ @ (520,398)
      └ Email input frame .................. 400×44 @ (520,420)

7.    └ Password label ..................... @ (520,480)
      └ Password input frame ............... 400×44 @ (520,502)
      └ Eye icon rect ...................... 20×20 @ (888,514)

8.    └ Strength bar bg .................... 400×4 @ (520,552)
         fill: #E5E7EB  radius:2
      └ Strength bar fill .................. 200×4 @ (520,552)
         fill: #F59E0B  radius:2
      └ Strength label ..................... auto @ (520,562)
         "O'rtacha" 12px #F59E0B

9.    └ Confirm label ...................... @ (520,582)
      └ Confirm input frame ................ 400×44 @ (520,604)

10.   └ Checkbox rect ...................... 18×18 @ (520,664)
         stroke:1.5px #D1D5DB  radius:4
      └ Checkbox text ...................... auto @ (546,664)
         14px Reg #6B7280 + links #4F46E5

11.   └ Submit btn frame ................... 400×44 @ (520,702)
         fill: #4F46E5  radius:8
      └ Submit text ........................ auto @ (center,714)
         "Ro'yxatdan o'tish" 14px Semi #FFF

12.   └ Footer text ........................ auto @ (center,770)
```

---

## ASCII Wireframe

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    ┌────────────────────────────┐                       │
│                    │       [ CHATFLOW ]          │                       │
│                    │   Ro'yxatdan o'tish         │                       │
│                    │   CHATFLOW bilan mijozlar   │                       │
│                    │   bilan muloqotni boshlang  │                       │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │G Google orqali ro'yxat │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │  ──────── yoki ──────────── │                       │
│                    │                            │                       │
│                    │  Email                     │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ email@misol.com        │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │  Parol                     │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ Kamida 8 ta belgi   👁 │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │  ████████░░░░░░  O'rtacha   │                       │
│                    │  Parolni tasdiqlash        │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ Parolni qayta kirit  👁 │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  ☐ Men Shartlari va        │                       │
│                    │    Maxfiylik siyosatiga     │                       │
│                    │    roziman                  │                       │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │  Ro'yxatdan o'tish     │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  Akkauntingiz bormi? Kirish │                       │
│                    └────────────────────────────┘                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| Google button | OAuth flow | Google popup → Email verify |
| Submit | POST /api/auth/register | Success → Email Verify sahifasi |
| "Kirish" footer | Navigate | → Login sahifasi |
| "Foydalanish shartlari" | New tab | → ToS sahifasi |
| "Maxfiylik siyosati" | New tab | → Privacy sahifasi |
| Eye icon | Toggle | password ↔ text |
| Checkbox | Toggle | checked ↔ unchecked, submit disabled control |

---

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Card appear | fade-in + translateY(20→0) | 300ms ease |
| Strength bar fill | width transition | 200ms ease |
| Checkbox check | scale bounce 0→1.2→1 | 200ms |
| Button enabled | opacity 0.5→1 | 150ms |
| Error shake | translateX(-4,4,-2,2,0) | 300ms |
