# QULAY CHAT — Auth: Sign Up, Login, Email Verification, Forgot Password

## Umumiy yondashuv
Auth sahifalari butunlay alohida — header va footer ko'rinmaydi. Foydalanuvchi faqat bitta markaziy karta bilan ishlaydi. Dizayn SaaS standartlariga mos, Crisp/Chatwoot/Jivo uslubida toza va minimal. Sahifa foni yengil kulrang, karta oq va soyali. Foydalanuvchi diqqati faqat formaga qaratilgan.

**Muhim:** Google orqali ro'yxatdan o'tish — asosiy (primary) variant. Email orqali — ikkilamchi, divider bilan ajratilgan. Barcha auth sahifalarida bir xil card container, logo va uslub ishlatiladi.

---

## 1. SIGN UP — Ro'yxatdan o'tish

### Vazifasi
Yangi foydalanuvchini tez va oson ro'yxatdan o'tkazish. Google orqali bir bosishda yoki email orqali standart formani to'ldirish.

### Layout va o'lchamlar

| Parametr | Qiymat |
|----------|--------|
| **Sahifa background** | `#F9FAFB` (Gray-50) |
| **Card kengligi** | 480px |
| **Card background** | `#FFFFFF` (White) |
| **Card border-radius** | 12px (radius-lg) |
| **Card shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Card padding** | 40px |
| **Card vertikal tekislash** | Sahifa markazida (vertically + horizontally centered) |
| **Logo kengligi** | 140px |
| **Logo joylashuvi** | Card ichida, yuqorida, markazda |
| **Logo va sarlavha gap** | 32px |
| **Elementlar orasidagi gap** | 20px |

### Element spetsifikatsiyalari

#### Logo
- **Joylashuv:** Card ning yuqori qismida, gorizontal markazda
- **O'lcham:** 140px kenglik, auto balandlik
- **Margin-bottom:** 32px

#### Sarlavha
```
Ro'yxatdan o'tish
```
- **Shrift:** 24px, Semibold (600), `#111827` (Gray-900)
- **Line-height:** 32px
- **Tekislash:** Markazda

#### Google tugma (Primary CTA)
```
[ G  Google orqali ro'yxatdan o'tish ]
```
- **Balandlik:** 44px
- **Kenglik:** 100% (card ichida to'liq)
- **Background:** `#FFFFFF`
- **Border:** 1px `#D1D5DB` (Gray-300)
- **Border-radius:** 8px (radius-md)
- **Matn:** 14px, Medium (500), `#374151` (Gray-700)
- **Icon:** Google "G" logo, 20px, chap tomonda
- **Hover:** shadow-sm, background `#F9FAFB`
- **Gap icon va matn:** 12px

#### Divider
```
──────────  yoki  ──────────
```
- **Chiziq:** 1px `#E5E7EB` (Gray-300), har ikkala tomonda
- **Matn:** 14px, Regular (400), `#6B7280` (Gray-500)
- **Vertikal margin:** 20px (yuqori va past)
- **Layout:** Flex row, align-items center, gap 16px

#### Email form maydonlari

| Maydon | Placeholder | Turi | Required |
|--------|-------------|------|----------|
| **Email** | email@misol.com | email | Ha |
| **Parol** | Kamida 8 ta belgi | password | Ha |
| **Parolni tasdiqlash** | Parolni qayta kiriting | password | Ha |

**Har bir input:**
- **Balandlik:** 44px
- **Border-radius:** 8px (radius-md)
- **Padding:** 12px 16px
- **Border:** 1px `#D1D5DB` (Gray-300)
- **Font:** 14px, Regular (400), `#111827`
- **Placeholder font:** 14px, Regular (400), `#6B7280`
- **Maydonlar orasidagi gap:** 16px

**Label (har bir maydon ustida):**
- **Shrift:** 14px, Medium (500), `#374151` (Gray-700)
- **Margin-bottom:** 6px

#### Input holatlari

| Holat | Border | Background | Qo'shimcha |
|-------|--------|------------|------------|
| **Default** | 1px `#D1D5DB` | `#FFFFFF` | — |
| **Focus** | 2px `#4F46E5` | `#FFFFFF` | ring: 3px `rgba(79,70,229,0.1)` |
| **Error** | 2px `#EF4444` | `#FEF2F2` | error matn pastda 12px `#EF4444` |
| **Success** | 2px `#10B981` | `#ECFDF5` | checkmark icon o'ng tomonda |
| **Disabled** | 1px `#E5E7EB` | `#F9FAFB` | cursor: not-allowed |

#### Validatsiya xabarlari

| Holat | Xabar | Rang |
|-------|-------|------|
| Email noto'g'ri | "Email manzil noto'g'ri formatda" | `#EF4444` |
| Parol qisqa | "Parol kamida 8 ta belgidan iborat bo'lishi kerak" | `#EF4444` |
| Parollar mos emas | "Parollar bir-biriga mos kelmayapti" | `#EF4444` |
| Email band | "Bu email allaqachon ro'yxatdan o'tgan" | `#EF4444` |

- **Xabar shrifti:** 12px, Regular (400), `#EF4444`
- **Joylashuv:** Input ostida, 4px margin-top

#### Checkbox — shartlarga rozilik
```
[ ] Foydalanish shartlari va Maxfiylik siyosatiga roziman
```
- **Checkbox o'lchami:** 20px x 20px
- **Border-radius:** 4px
- **Unchecked:** 1px `#D1D5DB`
- **Checked:** `#4F46E5` background, oq checkmark
- **Matn:** 14px, Regular (400), `#374151`
- **Link rangi:** `#4F46E5`, underline on hover
- **Margin-top:** 8px

#### Submit tugma
```
[ Ro'yxatdan o'tish ]
```
- **Balandlik:** 44px
- **Kenglik:** 100%
- **Background:** `#4F46E5` (Primary-600)
- **Matn:** 14px, Semibold (600), `#FFFFFF`
- **Border-radius:** 8px
- **Hover:** `#4338CA` (Primary-700)
- **Disabled:** opacity 0.5, cursor not-allowed (checkbox belgilanmagan)
- **Loading holati:** Matn "Akkaunt yaratilmoqda..." + 16px spinner

#### Pastki havola
```
Akkauntingiz bormi? Kirish
```
- **Matn:** 14px, Regular (400), `#6B7280`
- **Link:** "Kirish" — 14px, Medium (500), `#4F46E5`, hover: underline
- **Margin-top:** 24px
- **Tekislash:** Markazda

### ASCII wireframe — Sign Up
```
+--------------------------------------------------+
|                                                    |
|  ┌──────────────────────────────────────────────┐  |
|  │                                              │  |
|  │            [ QULAY CHAT Logo ]                 │  |
|  │                                              │  |
|  │          Ro'yxatdan o'tish                   │  |
|  │                                              │  |
|  │  ┌──────────────────────────────────────┐    │  |
|  │  │  G  Google orqali ro'yxatdan o'tish  │    │  |
|  │  └──────────────────────────────────────┘    │  |
|  │                                              │  |
|  │  ────────────  yoki  ────────────            │  |
|  │                                              │  |
|  │  Email                                       │  |
|  │  ┌──────────────────────────────────────┐    │  |
|  │  │  email@misol.com                     │    │  |
|  │  └──────────────────────────────────────┘    │  |
|  │  Parol                                       │  |
|  │  ┌──────────────────────────────────────┐    │  |
|  │  │  ••••••••                        👁   │    │  |
|  │  └──────────────────────────────────────┘    │  |
|  │  Parolni tasdiqlash                          │  |
|  │  ┌──────────────────────────────────────┐    │  |
|  │  │  ••••••••                        👁   │    │  |
|  │  └──────────────────────────────────────┘    │  |
|  │                                              │  |
|  │  [x] Shartlar va Maxfiylik siyosatiga        │  |
|  │      roziman                                 │  |
|  │                                              │  |
|  │  ┌──────────────────────────────────────┐    │  |
|  │  │       Ro'yxatdan o'tish              │    │  |
|  │  └──────────────────────────────────────┘    │  |
|  │                                              │  |
|  │     Akkauntingiz bormi? Kirish               │  |
|  │                                              │  |
|  └──────────────────────────────────────────────┘  |
|                                                    |
+--------------------------------------------------+
```

---

## 2. EMAIL VERIFICATION — Email manzilini tasdiqlash

### Vazifasi
Email orqali ro'yxatdan o'tgandan keyin foydalanuvchiga tasdiqlash havolasi yuborilganligini xabar qilish. Foydalanuvchi emailni ochib, havola orqali hisobni tasdiqlaydi.

### Layout
- Xuddi Sign Up sahifasi bilan bir xil card layout
- Card kengligi: 480px
- Sahifa markazida joylashgan

### Element spetsifikatsiyalari

#### Mail icon
- **O'lcham:** 48px x 48px
- **Joylashuv:** Markazda, sarlavha ustida
- **Rang:** `#4F46E5` (Primary-600)
- **Background:** `#EEF2FF` (Primary-50), 64px doira, border-radius: 50%

#### Sarlavha
```
Email manzilini tasdiqlang
```
- **Shrift:** 24px, Semibold (600), `#111827`
- **Margin-top:** 24px

#### Tavsif matni
```
Tasdiqlash havolasi emailingizga yuborildi
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Line-height:** 24px
- **Margin-top:** 8px

#### Ko'rsatiladigan email
```
user@example.com
```
- **Shrift:** 16px, Semibold (600), `#111827`
- **Background:** `#F3F4F6` (Gray-100)
- **Padding:** 8px 16px
- **Border-radius:** 8px
- **Margin-top:** 16px
- **Tekislash:** Markazda

#### Tugmalar

| Tugma | Uslub | Balandlik |
|-------|-------|-----------|
| **Qayta yuborish** | Primary button, 100% kenglik | 44px |
| **Emailni o'zgartirish** | Ghost button, markazda | 36px |

- **Gap:** 12px
- **"Qayta yuborish" loading:** "Yuborilmoqda..." + spinner
- **"Qayta yuborish" success:** "Yuborildi!" + checkmark, 3s keyin default

### ASCII wireframe — Email Verification
```
┌──────────────────────────────────────────────┐
│                                              │
│            [ QULAY CHAT Logo ]                 │
│                                              │
│              [ Mail Icon ]                   │
│                                              │
│       Email manzilini tasdiqlang             │
│                                              │
│   Tasdiqlash havolasi emailingizga           │
│   yuborildi                                  │
│                                              │
│         [ user@example.com ]                 │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │          Qayta yuborish              │    │
│  └──────────────────────────────────────┘    │
│                                              │
│          Emailni o'zgartirish                │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 3. LOGIN — Kirish

### Vazifasi
Mavjud foydalanuvchini tizimga kiritish. Sign Up sahifasiga o'xshash, lekin soddaroq — faqat email va parol.

### Layout
- Card kengligi: 480px, sahifa markazida
- Barcha parametrlar Sign Up card bilan bir xil

### Element spetsifikatsiyalari

#### Sarlavha
```
Kirish
```
- **Shrift:** 24px, Semibold (600), `#111827`

#### Google tugma
```
[ G  Google orqali kirish ]
```
- Uslub Sign Up dagi Google tugma bilan bir xil

#### Divider
- Xuddi Sign Up sahifasidagi kabi

#### Form maydonlari

| Maydon | Placeholder | Turi |
|--------|-------------|------|
| **Email** | email@misol.com | email |
| **Parol** | Parolingizni kiriting | password |

- Input uslublari Sign Up bilan bir xil (44px, 8px radius, 12px 16px padding)

#### "Parolni unutdingizmi?" havolasi
```
Parolni unutdingizmi?
```
- **Shrift:** 14px, Regular (400), `#4F46E5` (Primary-600)
- **Hover:** underline
- **Joylashuv:** Parol input ostida, o'ng tomonda (text-align: right)
- **Margin-top:** 4px

#### Submit tugma
```
[ Kirish ]
```
- **Uslub:** Primary button, 100% kenglik, 44px balandlik
- **Background:** `#4F46E5`
- **Matn:** 14px, Semibold (600), `#FFFFFF`
- **Loading:** "Kirilmoqda..." + spinner

#### Pastki havola
```
Akkauntingiz yo'qmi? Ro'yxatdan o'tish
```
- **Matn:** 14px, Regular (400), `#6B7280`
- **Link:** "Ro'yxatdan o'tish" — `#4F46E5`, hover: underline
- **Margin-top:** 24px

### ASCII wireframe — Login
```
┌──────────────────────────────────────────────┐
│                                              │
│            [ QULAY CHAT Logo ]                 │
│                                              │
│                 Kirish                        │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │  G  Google orqali kirish             │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  ────────────  yoki  ────────────            │
│                                              │
│  Email                                       │
│  ┌──────────────────────────────────────┐    │
│  │  email@misol.com                     │    │
│  └──────────────────────────────────────┘    │
│  Parol                                       │
│  ┌──────────────────────────────────────┐    │
│  │  ••••••••                        👁   │    │
│  └──────────────────────────────────────┘    │
│                      Parolni unutdingizmi?   │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │              Kirish                  │    │
│  └──────────────────────────────────────┘    │
│                                              │
│   Akkauntingiz yo'qmi? Ro'yxatdan o'tish    │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 4. FORGOT PASSWORD — Parolni tiklash

### Vazifasi
Foydalanuvchiga parolni tiklash havolasini email orqali yuborish.

### Layout
- Card kengligi: 480px, sahifa markazida
- Barcha parametrlar boshqa auth sahifalari bilan bir xil

### Element spetsifikatsiyalari

#### Back link (yuqorida)
```
← Kirish sahifasiga qaytish
```
- **Shrift:** 14px, Medium (500), `#4F46E5`
- **Icon:** Chapga o'q (←), 16px
- **Hover:** underline
- **Joylashuv:** Card ichida, chap tomonda, logo ostida

#### Sarlavha
```
Parolni tiklash
```
- **Shrift:** 24px, Semibold (600), `#111827`

#### Tavsif
```
Email manzilingizni kiriting. Parolni tiklash havolasini yuboramiz.
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

#### Email input
- Boshqa sahifalardagi kabi — 44px, 8px radius

#### Submit tugma
```
[ Tiklash havolasini yuborish ]
```
- **Primary button:** 100% kenglik, 44px balandlik
- **Loading:** "Yuborilmoqda..." + spinner
- **Success holati:** Tugma o'rniga success xabar: "Havola yuborildi! Emailingizni tekshiring."
  - **Background:** `#ECFDF5`, **Border:** 1px `#10B981`
  - **Matn:** 14px, Medium, `#059669`
  - **Icon:** Checkmark, 20px

### ASCII wireframe — Forgot Password
```
┌──────────────────────────────────────────────┐
│                                              │
│            [ QULAY CHAT Logo ]                 │
│                                              │
│  ← Kirish sahifasiga qaytish                │
│                                              │
│           Parolni tiklash                    │
│                                              │
│   Email manzilingizni kiriting. Parolni      │
│   tiklash havolasini yuboramiz.              │
│                                              │
│  Email                                       │
│  ┌──────────────────────────────────────┐    │
│  │  email@misol.com                     │    │
│  └──────────────────────────────────────┘    │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │    Tiklash havolasini yuborish       │    │
│  └──────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 5. BIRINCHI KIRISH — Xush kelibsiz holati

### Vazifasi
Birinchi marta kirgan foydalanuvchiga xush kelibsiz ekranini ko'rsatish va onboarding jarayoniga yo'naltirish.

### Layout
- Card kengligi: 480px, sahifa markazida
- Card padding: 48px (boshqa auth sahifalardan biroz kattaroq)

### Element spetsifikatsiyalari

#### Celebration icon
- **O'lcham:** 64px x 64px
- **Joylashuv:** Markazda
- **Turi:** Confetti/Celebration illustration yoki party popper icon
- **Rang:** Primary-600 va Success-500 aralash

#### Sarlavha
```
Xush kelibsiz!
```
- **Shrift:** 24px, Bold (700), `#111827`
- **Margin-top:** 24px

#### Tavsif
```
Akkauntingiz tayyor. Keling, platformani sozlaymiz.
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

#### CTA tugma
```
[ Dashboard'ga o'tish ]
```
- **Primary button:** Auto kenglik (min 200px), 44px balandlik
- **Margin-top:** 32px

### ASCII wireframe — Birinchi kirish
```
┌──────────────────────────────────────────────┐
│                                              │
│            [ QULAY CHAT Logo ]                 │
│                                              │
│              [ Party Icon ]                  │
│                                              │
│            Xush kelibsiz!                    │
│                                              │
│   Akkauntingiz tayyor. Keling,               │
│   platformani sozlaymiz.                     │
│                                              │
│        [ Dashboard'ga o'tish ]               │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Micro-interactions va animatsiyalar

| Element | Animatsiya | Parametrlar |
|---------|-----------|-------------|
| **Card paydo bo'lishi** | Fade-in + slide-up | opacity 0 to 1, translateY(20px to 0), 300ms ease |
| **Button hover** | Background lighten | transition 150ms ease |
| **Button click** | Scale | scale(0.98), 100ms |
| **Input focus** | Border glow | ring 3px `rgba(79,70,229,0.1)`, 150ms |
| **Error paydo** | Shake | translateX(-4px, 4px, 0), 300ms |
| **Loading spinner** | Rotate | 360deg, 1s linear infinite |
| **Success checkmark** | Scale-in | scale(0 to 1), 200ms ease-out |
| **Page transition** | Cross-fade | opacity 200ms, sahifalar orasida |

---

## Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | Card 480px, sahifa markazida, to'liq padding |
| **Tablet (768px)** | Card 480px (o'zgarmas), sahifa markazida |
| **Mobile (375px)** | Card to'liq ekran, border-radius 0, shadow yo'q, padding 24px |

**Mobile uchun maxsus:**
- Card 100% kenglik, ekran balandligini to'liq qoplash
- Background sahifa bilan bir xil — oq
- Logo o'lchami 120px ga kamayadi
- Sarlavha 20px ga kamayadi
- Tugmalar 48px balandlik (barmaq uchun qulay)
- Input balandlik 48px

---

## Rang xulosa jadvali

| Element | Rang | Hex |
|---------|------|-----|
| Sahifa background | Gray-50 | `#F9FAFB` |
| Card background | White | `#FFFFFF` |
| Sarlavha | Gray-900 | `#111827` |
| Tavsif matni | Gray-500 | `#6B7280` |
| Input border (default) | Gray-300 | `#D1D5DB` |
| Input border (focus) | Primary-600 | `#4F46E5` |
| Input border (error) | Error-500 | `#EF4444` |
| Primary button | Primary-600 | `#4F46E5` |
| Link rangi | Primary-600 | `#4F46E5` |
| Error matn | Error-500 | `#EF4444` |
| Checkbox checked | Primary-600 | `#4F46E5` |
| Divider chiziq | Gray-300 | `#E5E7EB` |
| Divider matn | Gray-500 | `#6B7280` |

---

## Figma komponent daraxti

```
auth/
├── page-sign-up/
│   ├── background (fill: #F9FAFB, 100% ekran)
│   └── auth-card (480px, white, radius-lg, shadow-md, padding: 40px)
│       ├── logo (image/svg, 140px, center aligned)
│       ├── heading (text: "Ro'yxatdan o'tish", 24px Semibold, #111827, center)
│       ├── btn-google (auto-layout, horizontal, gap: 12px)
│       │   ├── google-icon (20px)
│       │   └── label (text: "Google orqali ro'yxatdan o'tish", 14px Medium, #374151)
│       ├── divider-or (auto-layout, horizontal, gap: 16px, center aligned)
│       │   ├── line-left (1px, #E5E7EB, flex: 1)
│       │   ├── text (text: "yoki", 14px Regular, #6B7280)
│       │   └── line-right (1px, #E5E7EB, flex: 1)
│       ├── form-fields (auto-layout, vertical, gap: 16px)
│       │   ├── field-email/
│       │   │   ├── label (text: "Email", 14px Medium, #374151)
│       │   │   └── input (44px, 8px radius, placeholder: "email@misol.com")
│       │   ├── field-password/
│       │   │   ├── label (text: "Parol", 14px Medium, #374151)
│       │   │   └── input (44px, password, eye-toggle icon)
│       │   └── field-password-confirm/
│       │       ├── label (text: "Parolni tasdiqlash", 14px Medium, #374151)
│       │       └── input (44px, password, eye-toggle icon)
│       ├── checkbox-row (auto-layout, horizontal, gap: 8px)
│       │   ├── checkbox (20x20, 4px radius)
│       │   └── label-with-links (14px Regular, #374151)
│       ├── btn-submit (primary, 100%, 44px, text: "Ro'yxatdan o'tish")
│       └── footer-link (text: "Akkauntingiz bormi? Kirish", center)
│
├── page-email-verification/
│   └── auth-card (480px)
│       ├── logo
│       ├── mail-icon (48px, Primary-600, 64px circle bg Primary-50)
│       ├── heading (text: "Email manzilini tasdiqlang", 24px Semibold)
│       ├── description (text: "Tasdiqlash havolasi...", 16px Regular, #6B7280)
│       ├── email-display (16px Semibold, #111827, Gray-100 bg, 8px radius)
│       ├── btn-resend (primary, 100%, 44px, text: "Qayta yuborish")
│       └── btn-change-email (ghost, text: "Emailni o'zgartirish")
│
├── page-login/
│   └── auth-card (480px)
│       ├── logo
│       ├── heading (text: "Kirish", 24px Semibold)
│       ├── btn-google
│       ├── divider-or
│       ├── form-fields (auto-layout, vertical, gap: 16px)
│       │   ├── field-email
│       │   └── field-password
│       ├── forgot-link (text: "Parolni unutdingizmi?", 14px, #4F46E5, right aligned)
│       ├── btn-submit (primary, text: "Kirish")
│       └── footer-link (text: "Akkauntingiz yo'qmi? Ro'yxatdan o'tish")
│
├── page-forgot-password/
│   └── auth-card (480px)
│       ├── logo
│       ├── back-link (text: "← Kirish sahifasiga qaytish", 14px, #4F46E5)
│       ├── heading (text: "Parolni tiklash", 24px Semibold)
│       ├── description (16px Regular, #6B7280)
│       ├── field-email
│       └── btn-submit (primary, text: "Tiklash havolasini yuborish")
│
└── page-first-login/
    └── auth-card (480px, padding: 48px)
        ├── logo
        ├── celebration-icon (64px)
        ├── heading (text: "Xush kelibsiz!", 24px Bold)
        ├── description (16px Regular, #6B7280)
        └── btn-cta (primary, text: "Dashboard'ga o'tish")
```

---

## Figma AI uchun prompt

```
Create a set of clean, minimal SaaS authentication screens for a platform called QULAY CHAT.
All screens share the same layout: light gray page background (#F9FAFB), a centered white
card (480px wide, 12px border-radius, medium shadow, 40px padding), and the QULAY CHAT logo
centered at the top of the card. No header or footer — just the logo and the card.

Screen 1 — Sign Up:
Title "Ro'yxatdan o'tish" (24px semibold, #111827). A full-width "Google orqali ro'yxatdan
o'tish" button with Google icon. Divider line with "yoki" text. Three input fields with
labels: Email, Parol (with eye toggle), Parolni tasdiqlash (with eye toggle). Checkbox for
terms agreement. Primary submit button "Ro'yxatdan o'tish". Bottom link "Akkauntingiz bormi? Kirish".

Screen 2 — Email Verification:
Mail icon in a Primary-50 circle. Title "Email manzilini tasdiqlang". Description text.
Email address displayed in a gray pill. "Qayta yuborish" primary button. "Emailni o'zgartirish" text link.

Screen 3 — Login:
Title "Kirish". Google button. Divider. Email and password fields. "Parolni unutdingizmi?"
right-aligned link. Primary "Kirish" button. Bottom link to sign up.

Screen 4 — Forgot Password:
Back arrow link. Title "Parolni tiklash". Description. Email input. Primary "Tiklash havolasini
yuborish" button.

Screen 5 — First Login Welcome:
Celebration icon (64px). Title "Xush kelibsiz!". Subtitle text. "Dashboard'ga o'tish" primary button.

Style: Crisp/Intercom-like, modern, professional, Inter font. Inputs: 44px height, 8px radius.
Primary color: #4F46E5. Text: #111827 headings, #6B7280 body.
```
