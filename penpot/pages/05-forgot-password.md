# Page 05: Forgot Password (Parolni Tiklash)

> **Board:** 1440×900 | **Position:** col=4, row=0 | **BG:** `#F9FAFB`

## Vazifasi
Foydalanuvchi emailni kiritib parolni tiklash havolasini oladi.
2 holat: email kiritish va yuborildi holati.

---

## Screen A: Email Kiritish

```
Board "05-Forgot-Password" (1440×900, fill:#F9FAFB)
│
└── auth-card (480×auto, center-center)
    │  bg:#FFFFFF  radius:12  shadow:md  padding:40
    │
    ├── back-link (align:left)
    │   icon: ← Arrow 16px #6B7280
    │   "Orqaga" 14px Med #6B7280
    │   hover: #4F46E5
    │   mb:24
    │
    ├── icon-circle (64×64, center)
    │   bg:#FEF3C7  radius:32
    │   icon: 🔑 Key 28px #F59E0B
    │   mb:24
    │
    ├── heading "Parolni tiklash"
    │   24px Semi(600) #111827, center, mb:8
    │
    ├── description
    │   "Email manzilingizni kiriting. Biz sizga parolni tiklash havolasini yuboramiz."
    │   14px Reg #6B7280, center, maxW:360
    │   mb:24
    │
    ├── field-email
    │   ├── label "Email" (14px Med #374151, mb:6)
    │   └── input (44h, radius:8, pad:12/16)
    │       placeholder: "email@misol.com"
    │       border: 1px #D1D5DB
    │   mb:20
    │
    ├── btn-submit (full-width × 44h)
    │   bg:#4F46E5  radius:8
    │   text: "Havola yuborish" 14px Semi(600) #FFF
    │   hover: bg:#4338CA
    │   loading: "Yuborilmoqda..." + spinner
    │   mb:24
    │
    └── footer-link (center)
        "Parolingiz esingizdami? "
        link: "Kirish" 14px Med #4F46E5
```

---

## Screen B: Yuborildi (Success)

```
auth-card (480×auto, center-center)
│
├── icon-circle (64×64, center)
│   bg:#D1FAE5  radius:32
│   icon: ✓ Check 28px #10B981
│   mb:24
│
├── heading "Email yuborildi!"
│   24px Semi(600) #111827, center, mb:8
│
├── description
│   "Parolni tiklash havolasi "
│   "user@email.com" 14px Semi #111827
│   " emailga yuborildi."
│   14px Reg #6B7280, center
│   mb:8
│
├── note
│   "Agar 5 daqiqa ichida kelmasa, spam papkasini tekshiring."
│   13px Reg #9CA3AF, center
│   mb:24
│
├── btn-open-email (full-width × 44h)
│   bg:#4F46E5  radius:8
│   text: "Email ilovasini ochish" 14px Semi #FFF
│   mb:12
│
├── btn-resend (full-width × 44h)
│   bg:#FFF  border:1px #D1D5DB  radius:8
│   text: "Qayta yuborish" 14px Med #374151
│   disabled during cooldown
│   mb:24
│
└── footer-link (center)
    link: "Kirish sahifasiga qaytish" 14px Med #4F46E5
```

---

## Penpot Element Map — Screen A

```
LAYER ORDER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Board ................................. 1440×900 fill:#F9FAFB
2. Card frame ........................... 480×480 @ (480,210)
3. Back arrow rect ...................... 16×16 @ (520,250)
   "Orqaga" text ........................ @ (542,248)
4. Key icon circle ...................... 64×64 @ (688,290)
5. Heading .............................. @ (center,378)
6. Description .......................... @ (center,410)
7. Email label .......................... @ (520,462)
   Email input .......................... 400×44 @ (520,484)
8. Submit btn ........................... 400×44 @ (520,544)
9. Footer ............................... @ (center,612)
```

---

## ASCII Wireframe — Screen A

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    ┌────────────────────────────┐                       │
│                    │  ← Orqaga                  │                       │
│                    │                            │                       │
│                    │          ┌────┐            │                       │
│                    │          │ 🔑 │            │                       │
│                    │          └────┘            │                       │
│                    │                            │                       │
│                    │    Parolni tiklash          │                       │
│                    │                            │                       │
│                    │   Email manzilingizni       │                       │
│                    │   kiriting. Biz sizga       │                       │
│                    │   parolni tiklash           │                       │
│                    │   havolasini yuboramiz.     │                       │
│                    │                            │                       │
│                    │  Email                     │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │ email@misol.com        │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  ┌────────────────────────┐ │                       │
│                    │  │   Havola yuborish      │ │                       │
│                    │  └────────────────────────┘ │                       │
│                    │                            │                       │
│                    │  Parolingiz esingizdami?    │                       │
│                    │  Kirish                     │                       │
│                    └────────────────────────────┘                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Actions

| Element | Action | Natija |
|---------|--------|--------|
| "← Orqaga" | Navigate | → Login sahifasi |
| Submit | POST /api/auth/forgot | → Screen B (success) |
| "Kirish" footer | Navigate | → Login sahifasi |
| "Email ilovasini ochish" | External | mailto: or email app |
| "Qayta yuborish" | POST /api/auth/forgot | Resend + cooldown |
| "Kirish sahifasiga qaytish" | Navigate | → Login sahifasi |

## Micro-interactions

| Element | Animation | Duration |
|---------|-----------|----------|
| Screen A → B transition | fade + scale | 300ms |
| Success icon | scale bounce 0→1.2→1 | 400ms |
| Check icon | draw stroke animation | 400ms |
