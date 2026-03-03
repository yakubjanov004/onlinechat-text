# QULAY CHAT — Onboarding: Welcome Screen + Workspace Setup

## Umumiy yondashuv
Onboarding jarayoni foydalanuvchini 5-10 daqiqada platformani to'liq ishlatishga tayyorlaydi. Bu jarayon 5 ta qadamdan iborat: Welcome, Workspace Setup, Widget Customization, Widget Installation, Test Message. Har bir qadamda progress indicator doim yuqorida ko'rinib turadi. Maqsad — foydalanuvchi hech qachon "men qayerdaman?" deb o'ylamasligi.

**Muhim:** Onboarding sahifalari auth sahifalariga o'xshab alohida sahifa sifatida ko'rinadi — header va sidebar yo'q. Faqat progress dots va markaziy kontent container mavjud. Foydalanuvchi onboarding tugagunga qadar dashboard'ga kira olmaydi.

---

## 1. PROGRESS INDICATOR — Barcha qadamlarda umumiy

### Vazifasi
Foydalanuvchiga hozir nechta qadamda turganini va qancha qolganini ko'rsatish. Har bir sahifaning yuqori qismida joylashgan.

### Layout va o'lchamlar

| Parametr | Qiymat |
|----------|--------|
| **Joylashuv** | Sahifa yuqorisida, gorizontal markazda |
| **Container kenglik** | 280px |
| **Vertikal joylashuv** | Card ustida, 40px gap bilan |
| **Sahifa background** | `#F9FAFB` (Gray-50) |

### Element spetsifikatsiyalari

#### Vizual ko'rinish
```
●━━━━━○━━━━━○━━━━━○   1/4
```

#### Dot holatlari

| Holat | O'lcham | Rang | Qo'shimcha |
|-------|---------|------|------------|
| **Done (bajarilgan)** | 24px doira | `#4F46E5` (Primary-600) bg | Oq checkmark icon 12px |
| **Active (hozirgi)** | 24px doira | `#4F46E5` (Primary-600) bg | Raqam yoki to'ldirilgan doira |
| **Upcoming (kelgusi)** | 24px doira | `#D1D5DB` (Gray-300) bg | Bo'sh doira |

#### Chiziqlar (connector)

| Holat | Rang | Balandlik |
|-------|------|-----------|
| **Done** | `#4F46E5` (Primary-600) | 2px |
| **Active-to-next** | `#D1D5DB` (Gray-300) | 2px |
| **Upcoming** | `#D1D5DB` (Gray-300) | 2px |

- **Chiziq uzunligi:** 48px (dotlar orasida)
- **Chiziq va dot tekislash:** Vertikal markazda

#### Qadam raqami matni
```
1/4
```
- **Joylashuv:** Progress dots ning o'ng tomonida, 16px gap
- **Shrift:** 14px, Medium (500), `#6B7280` (Gray-500)

### Figma komponent — Progress Indicator
```
progress-indicator/
├── container (auto-layout, horizontal, gap: 0, center aligned)
│   ├── step-1/
│   │   ├── dot (24px, variant: done/active/upcoming)
│   │   └── connector (48px x 2px, variant: done/upcoming)
│   ├── step-2/
│   │   ├── dot (24px, variant: done/active/upcoming)
│   │   └── connector (48px x 2px)
│   ├── step-3/
│   │   ├── dot (24px, variant: done/active/upcoming)
│   │   └── connector (48px x 2px)
│   ├── step-4/
│   │   └── dot (24px, variant: done/active/upcoming)
│   └── step-label (text: "1/4", 14px Medium, #6B7280, margin-left: 16px)
```

---

## 2. WELCOME SCREEN — Xush kelibsiz, {Ism}!

### Vazifasi
Foydalanuvchini onboarding jarayoniga kirgazish, pozitiv ruhda kutib olish va nima bo'lishini oldindan tushuntirish. Bu sahifada hech qanday form yo'q — faqat matn va bitta tugma.

### Layout va o'lchamlar

| Parametr | Qiymat |
|----------|--------|
| **Sahifa background** | `#F9FAFB` (Gray-50) |
| **Container kengligi** | 600px |
| **Card background** | `#FFFFFF` (White) |
| **Card border-radius** | 12px (radius-lg) |
| **Card shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Card padding** | 48px |
| **Card tekislash** | Sahifa markazida (vertically + horizontally centered) |
| **Progress** | 1/4 (birinchi dot active) |

### Element spetsifikatsiyalari

#### Celebration icon
- **Turi:** Confetti/Party/Rocket illustration
- **O'lcham:** 64px x 64px
- **Joylashuv:** Card ichida, gorizontal markazda, yuqorida
- **Rang:** Multicolor yoki Primary-600 asosiy rang
- **Animatsiya:** Paydo bo'lganda scale(0 to 1), 400ms ease-out + confetti particles 2s

#### Sarlavha
```
Xush kelibsiz, Ulug'bek!
```
- **Shrift:** 24px, Semibold (600), `#111827` (Gray-900)
- **Line-height:** 32px
- **Tekislash:** Markazda
- **Margin-top:** 24px
- **Dinamik qism:** `{Ism}` — foydalanuvchi ismi, backend dan olinadi

#### Tavsif
```
Keling, 5 daqiqada platformani sozlaymiz
```
- **Shrift:** 16px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 24px
- **Tekislash:** Markazda
- **Max-width:** 400px
- **Margin-top:** 8px

#### Qadamlar preview (ixtiyoriy)
Foydalanuvchiga qanday qadamlar borligini ko'rsatish uchun:

| Qadam | Matn | Icon |
|-------|------|------|
| 1 | Workspace yaratish | Building icon |
| 2 | Vidjetni sozlash | Palette icon |
| 3 | Vidjeti o'rnatish | Code icon |
| 4 | Test xabar yuborish | MessageCircle icon |

- **Har bir qadam:** 14px, Regular (400), `#374151` (Gray-700)
- **Icon:** 16px, `#6B7280` (Gray-500)
- **Gap:** qadamlar orasida 12px
- **Layout:** Vertikal stack, chap tomonga tekislangan
- **Container:** Background `#F9FAFB`, padding 20px, border-radius 8px
- **Margin-top:** 24px

#### CTA tugma
```
[ Boshlash ]
```
- **Balandlik:** 56px (katta tugma — onboarding uchun maxsus)
- **Kenglik:** 100% (card ichida to'liq kenglik)
- **Background:** `#4F46E5` (Primary-600)
- **Matn:** 16px, Semibold (600), `#FFFFFF`
- **Border-radius:** 8px (radius-md)
- **Hover:** `#4338CA` (Primary-700)
- **Margin-top:** 32px
- **Animatsiya:** Hover — translateY(-1px) + shadow-md, 150ms

### ASCII wireframe — Welcome Screen
```
+----------------------------------------------------------+
|                                                          |
|              ●━━━━━○━━━━━○━━━━━○  1/4                   |
|                                                          |
|  ┌──────────────────────────────────────────────────┐    |
|  │                                                  │    |
|  │              [ Celebration Icon ]                │    |
|  │                                                  │    |
|  │         Xush kelibsiz, Ulug'bek!                │    |
|  │                                                  │    |
|  │    Keling, 5 daqiqada platformani sozlaymiz     │    |
|  │                                                  │    |
|  │    ┌────────────────────────────────────┐        │    |
|  │    │  1. Workspace yaratish             │        │    |
|  │    │  2. Vidjetni sozlash               │        │    |
|  │    │  3. Vidjeti o'rnatish              │        │    |
|  │    │  4. Test xabar yuborish            │        │    |
|  │    └────────────────────────────────────┘        │    |
|  │                                                  │    |
|  │  ┌──────────────────────────────────────────┐    │    |
|  │  │               Boshlash                   │    │    |
|  │  └──────────────────────────────────────────┘    │    |
|  │                                                  │    |
|  └──────────────────────────────────────────────────┘    |
|                                                          |
+----------------------------------------------------------+
```

---

## 3. WORKSPACE SETUP — Workspace yaratish (Qadam 1/4)

### Vazifasi
Foydalanuvchining workspace (ishchi makon) nomini va kompaniya veb-saytini kiritish. Bu platforma ichidagi asosiy tashkiliy birlik hisoblanadi.

### Layout va o'lchamlar

| Parametr | Qiymat |
|----------|--------|
| **Container kengligi** | 600px |
| **Card background** | `#FFFFFF` (White) |
| **Card border-radius** | 12px (radius-lg) |
| **Card shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Card padding** | 40px |
| **Progress** | 1/4 (birinchi dot active) |
| **Fieldlar orasidagi gap** | 20px |

### Element spetsifikatsiyalari

#### Sarlavha
```
Workspace yaratish
```
- **Shrift:** 24px, Semibold (600), `#111827` (Gray-900)
- **Line-height:** 32px
- **Tekislash:** Chapga (left-aligned)

#### Tavsif
```
Workspace — bu sizning kompaniyangiz uchun ishchi makon. Jamoangiz shu yerda ishlaydi.
```
- **Shrift:** 16px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 24px
- **Margin-top:** 8px

#### Field 1: Workspace nomi (Required)

**Label:**
```
Workspace nomi *
```
- **Shrift:** 14px, Medium (500), `#374151` (Gray-700)
- **"*" rangi:** `#EF4444` (Error-500) — required indicator
- **Margin-bottom:** 6px

**Input:**
- **Placeholder:** "Masalan: TechUz Support"
- **Balandlik:** 44px
- **Border-radius:** 8px
- **Padding:** 12px 16px
- **Border (default):** 1px `#D1D5DB` (Gray-300)
- **Border (focus):** 2px `#4F46E5` (Primary-600)
- **Border (error):** 2px `#EF4444` (Error-500)
- **Font:** 14px, Regular (400), `#111827`

**Helper text (default):**
```
Bu nom jamoangizga ko'rinadi
```
- **Shrift:** 12px, Regular (400), `#6B7280`
- **Margin-top:** 4px

**Error state:**
```
Workspace nomi majburiy maydon
```
- **Shrift:** 12px, Regular (400), `#EF4444`
- **Icon:** 12px exclamation circle, `#EF4444`, matn oldida

#### Field 2: Kompaniya veb-sayti (Recommended)

**Label:**
```
Kompaniya veb-sayti
```
- **Shrift:** 14px, Medium (500), `#374151`
- **Badge:** "Tavsiya etiladi" — 12px Medium, `#4F46E5`, background `#EEF2FF`, padding 2px 8px, radius 9999px
- **Margin-bottom:** 6px

**Input:**
- **Placeholder:** "https://kompaniya.uz"
- **Prefix:** https:// (input ichida, kulrang)
- **Prefix shrift:** 14px, Regular (400), `#6B7280`
- **Prefix background:** `#F9FAFB`, border-right: 1px `#D1D5DB`
- **Balandlik:** 44px
- **Border-radius:** 8px
- **Boshqa parametrlar:** Field 1 bilan bir xil

**Helper text:**
```
Vidjet uchun favicon va brend rangi uchun ishlatiladi
```
- **Shrift:** 12px, Regular (400), `#6B7280`
- **Margin-top:** 4px

**Warning state (noto'g'ri URL):**
```
URL formati noto'g'ri. Misol: https://example.com
```
- **Shrift:** 12px, Regular (400), `#F59E0B` (Warning-500)
- **Background:** Input bg `#FFFBEB`
- **Border:** 2px `#F59E0B`

#### Tugmalar qatori

**Layout:** Gorizontal, o'ng tomonga tekislangan (justify-content: flex-end)

| Tugma | Uslub | Matn | Balandlik |
|-------|-------|------|-----------|
| **O'tkazib yuborish** | Ghost button | "Keyinroq" | 44px |
| **Davom etish** | Primary button | "Davom etish" | 56px |

- **Gap:** 12px
- **Margin-top:** 32px
- **"Davom etish" disabled:** Workspace nomi bo'sh bo'lganda, opacity 0.5
- **"Davom etish" loading:** "Saqlanmoqda..." + spinner, 16px

### Input holatlari (barcha fieldlar uchun)

| Holat | Border | Background | Qo'shimcha |
|-------|--------|------------|------------|
| **Default** | 1px `#D1D5DB` | `#FFFFFF` | — |
| **Hover** | 1px `#9CA3AF` | `#FFFFFF` | border rangi biroz qorong'iroq |
| **Focus** | 2px `#4F46E5` | `#FFFFFF` | ring 3px `rgba(79,70,229,0.1)` |
| **Filled** | 1px `#D1D5DB` | `#FFFFFF` | matn qora, placeholder yo'q |
| **Error** | 2px `#EF4444` | `#FEF2F2` | error icon + matn pastda |
| **Warning** | 2px `#F59E0B` | `#FFFBEB` | warning matn pastda |
| **Disabled** | 1px `#E5E7EB` | `#F9FAFB` | cursor not-allowed |

### ASCII wireframe — Workspace Setup
```
+----------------------------------------------------------+
|                                                          |
|              ●━━━━━○━━━━━○━━━━━○  1/4                   |
|                                                          |
|  ┌──────────────────────────────────────────────────┐    |
|  │                                                  │    |
|  │  Workspace yaratish                              │    |
|  │  Workspace — bu sizning kompaniyangiz uchun      │    |
|  │  ishchi makon.                                   │    |
|  │                                                  │    |
|  │  Workspace nomi *                                │    |
|  │  ┌──────────────────────────────────────────┐    │    |
|  │  │  Masalan: TechUz Support                 │    │    |
|  │  └──────────────────────────────────────────┘    │    |
|  │  Bu nom jamoangizga ko'rinadi                    │    |
|  │                                                  │    |
|  │  Kompaniya veb-sayti  [Tavsiya etiladi]          │    |
|  │  ┌──────────┬───────────────────────────────┐    │    |
|  │  │ https:// │  kompaniya.uz                 │    │    |
|  │  └──────────┴───────────────────────────────┘    │    |
|  │  Vidjet uchun favicon va brend rangi uchun       │    |
|  │                                                  │    |
|  │                     [ Keyinroq ] [ Davom etish ] │    |
|  │                                                  │    |
|  └──────────────────────────────────────────────────┘    |
|                                                          |
+----------------------------------------------------------+
```

---

## Micro-interactions va animatsiyalar

| Element | Animatsiya | Parametrlar |
|---------|-----------|-------------|
| **Progress dot (active)** | Pulse glow | box-shadow pulse `rgba(79,70,229,0.3)`, 1.5s loop |
| **Progress dot (done)** | Checkmark paydo | scale(0 to 1), 200ms ease-out |
| **Card paydo bo'lishi** | Fade-in + slide-up | opacity 0 to 1, translateY(20px to 0), 400ms ease |
| **Celebration icon** | Bounce + scale | scale(0 to 1.1 to 1), 500ms ease-out |
| **Confetti** | Particles falling | 50 particles, 2s duration, random colors |
| **Input focus** | Border glow | ring 3px Primary-100, 150ms |
| **Button hover** | Lift + shadow | translateY(-1px), shadow-md, 150ms |
| **Button loading** | Spinner | rotate 360deg, 1s linear loop |
| **Error shake** | Horizontal shake | translateX(-4px, 4px, 0), 300ms |
| **Sahifa o'tish** | Slide-left | translateX(0 to -100%), yangi sahifa translateX(100% to 0), 300ms |

---

## Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | Container 600px, sahifa markazida, to'liq padding 48px/40px |
| **Tablet (768px)** | Container 600px (o'zgarmas), sahifa markazida |
| **Mobile (375px)** | Container 100% kenglik, card border-radius 0, shadow yo'q, padding 24px |

**Mobile uchun maxsus o'zgarishlar:**
- Container to'liq ekran kenglik, 100vw
- Card to'liq ekran, background oq, border-radius yo'q, shadow yo'q
- Progress indicator: 200px kenglik, dotlar 20px
- Sarlavha: 20px Semibold
- Tavsif: 14px Regular
- Input balandlik: 48px (barmaq uchun qulay)
- Tugma balandlik: 52px
- Card padding: 24px 16px
- Fieldlar gap: 16px

**Tablet uchun maxsus:**
- Container 600px (desktop bilan bir xil)
- Card padding: 32px
- Tugma balandlik: 52px

---

## Rang xulosa jadvali

| Element | Rang | Hex |
|---------|------|-----|
| Sahifa background | Gray-50 | `#F9FAFB` |
| Card background | White | `#FFFFFF` |
| Sarlavha matni | Gray-900 | `#111827` |
| Tavsif matni | Gray-500 | `#6B7280` |
| Helper text | Gray-500 | `#6B7280` |
| Label matni | Gray-700 | `#374151` |
| Input border (default) | Gray-300 | `#D1D5DB` |
| Input border (focus) | Primary-600 | `#4F46E5` |
| Input border (error) | Error-500 | `#EF4444` |
| Input border (warning) | Warning-500 | `#F59E0B` |
| Primary button | Primary-600 | `#4F46E5` |
| Progress active dot | Primary-600 | `#4F46E5` |
| Progress upcoming dot | Gray-300 | `#D1D5DB` |
| Required indicator | Error-500 | `#EF4444` |
| Badge "Tavsiya" bg | Primary-50 | `#EEF2FF` |
| Badge "Tavsiya" matn | Primary-600 | `#4F46E5` |

---

## Tipografiya xulosa jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Sarlavha (H2) | 24px | Semibold (600) | `#111827` |
| Tavsif (Body) | 16px | Regular (400) | `#6B7280` |
| Label | 14px | Medium (500) | `#374151` |
| Input matni | 14px | Regular (400) | `#111827` |
| Placeholder | 14px | Regular (400) | `#6B7280` |
| Helper text | 12px | Regular (400) | `#6B7280` |
| Error text | 12px | Regular (400) | `#EF4444` |
| Button text (large) | 16px | Semibold (600) | `#FFFFFF` |
| Progress label | 14px | Medium (500) | `#6B7280` |
| Badge text | 12px | Medium (500) | `#4F46E5` |

---

## Spacing xulosa jadvali

| Element | Qiymat |
|---------|--------|
| Container kenglik | 600px |
| Card padding (Welcome) | 48px |
| Card padding (Workspace) | 40px |
| Sarlavha va tavsif gap | 8px |
| Tavsif va form gap | 24px |
| Fieldlar orasidagi gap | 20px |
| Label va input gap | 6px |
| Input va helper text gap | 4px |
| Form va tugmalar gap | 32px |
| Tugmalar orasidagi gap | 12px |
| Progress va card gap | 40px |
| Celebration icon va sarlavha gap | 24px |
| Card border-radius | 12px |
| Input border-radius | 8px |
| Button border-radius | 8px |
| Button balandlik (CTA) | 56px |
| Button balandlik (standart) | 44px |

---

## Figma komponent daraxti

```
onboarding/
├── shared/
│   └── progress-indicator/
│       ├── dot-done (24px, #4F46E5 bg, white checkmark)
│       ├── dot-active (24px, #4F46E5 bg, filled)
│       ├── dot-upcoming (24px, #D1D5DB bg, empty)
│       ├── connector-done (48px x 2px, #4F46E5)
│       ├── connector-upcoming (48px x 2px, #D1D5DB)
│       └── step-label (text: "1/4", 14px Medium, #6B7280)
│
├── page-welcome/
│   ├── background (fill: #F9FAFB, 100% ekran)
│   ├── progress-indicator (instance, step: 1/4)
│   └── card (600px, white, radius-lg, shadow-md, padding: 48px)
│       ├── celebration-icon (64px, center aligned)
│       ├── heading (text: "Xush kelibsiz, {Ism}!", 24px Semibold, #111827, center)
│       ├── description (text: "Keling, 5 daqiqada...", 16px Regular, #6B7280, center)
│       ├── steps-preview (optional, auto-layout, vertical, gap: 12px)
│       │   ├── step-row-1 (icon + "Workspace yaratish")
│       │   ├── step-row-2 (icon + "Vidjetni sozlash")
│       │   ├── step-row-3 (icon + "Vidjeti o'rnatish")
│       │   └── step-row-4 (icon + "Test xabar yuborish")
│       └── btn-start (primary-lg, 100%, 56px, text: "Boshlash")
│
├── page-workspace-setup/
│   ├── background (fill: #F9FAFB, 100% ekran)
│   ├── progress-indicator (instance, step: 1/4)
│   └── card (600px, white, radius-lg, shadow-md, padding: 40px)
│       ├── heading (text: "Workspace yaratish", 24px Semibold, #111827, left)
│       ├── description (text: "Workspace — bu sizning...", 16px Regular, #6B7280)
│       ├── form-fields (auto-layout, vertical, gap: 20px)
│       │   ├── field-workspace-name/
│       │   │   ├── label-row (auto-layout, horizontal)
│       │   │   │   ├── label (text: "Workspace nomi", 14px Medium, #374151)
│       │   │   │   └── required-mark (text: "*", #EF4444)
│       │   │   ├── input (44px, 8px radius, placeholder: "Masalan: TechUz Support")
│       │   │   └── helper-text (text: "Bu nom jamoangizga ko'rinadi", 12px, #6B7280)
│       │   └── field-website/
│       │       ├── label-row (auto-layout, horizontal, gap: 8px)
│       │       │   ├── label (text: "Kompaniya veb-sayti", 14px Medium, #374151)
│       │       │   └── badge (text: "Tavsiya etiladi", 12px, #4F46E5, bg: #EEF2FF)
│       │       ├── input-with-prefix (44px)
│       │       │   ├── prefix (text: "https://", 14px, #6B7280, bg: #F9FAFB)
│       │       │   └── input (placeholder: "kompaniya.uz")
│       │       └── helper-text (text: "Vidjet uchun favicon...", 12px, #6B7280)
│       └── actions-row (auto-layout, horizontal, gap: 12px, justify: flex-end)
│           ├── btn-skip (ghost, text: "Keyinroq", 44px)
│           └── btn-continue (primary, text: "Davom etish", 56px)
```

---

---

## 5. ONBOARDING SKIP & RESUME FUNKSIYASI

### Umumiy konsepsiya
Foydalanuvchi onboarding jarayonini ixtiyoriy holatda to'xtatib, keyinroq davom ettirishi mumkin. Skip funksiyasi har bir qadamda mavjud, Resume banner esa dashboard'da ko'rinadi.

### 5.1. SKIP TUGMASI (Har bir qadamda)

#### Joylashuv
- **Pozitsiya:** Card pastida, "Davom etish" tugmasining chap tomonida
- **Alignment:** O'ng tomonga tekislangan actions-row ichida
- **Gap:** 12px "Davom etish" tugmasi bilan orasida

#### Vizual spetsifikatsiya

| Parametr | Qiymat |
|----------|--------|
| **Turi** | Ghost button (secondary) |
| **Matn** | "Keyinroq" yoki "O'tkazib yuborish" |
| **Shrift** | 14px, Medium (500) |
| **Rang** | `#6B7280` (Gray-500) |
| **Hover rang** | `#374151` (Gray-700) |
| **Background** | Transparent |
| **Hover background** | `#F3F4F6` (Gray-100) |
| **Balandlik** | 44px |
| **Padding** | 12px 16px |
| **Border-radius** | 8px |

#### Interaksiya
1. **Click:** Confirmation modal ochiladi (optional, faqat 2+ qadam tugallangan bo'lsa)
2. **Bypass:** Agar foydalanuvchi 1-qadamda skip qilsa, to'g'ridan-to'g'ri dashboard'ga o'tadi
3. **State save:** Backend'ga `PUT /api/onboarding/progress` bilan hozirgi qadam saqlanadi
4. **Navigation:** Dashboard'ga redirect qiladi va Resume Banner ko'rsatiladi

#### Confirmation Modal (Ixtiyoriy)

**Trigger:** Foydalanuvchi 2 yoki undan ko'p qadamni tugallaganda Skip tugmasini bosadi

**Modal spetsifikatsiyasi:**
- **Kenglik:** 480px
- **Padding:** 24px
- **Header:**
  - Icon: AlertCircle (24px, `#F59E0B` Orange-500)
  - Title: "Onboarding'ni keyinga qoldirish?" — 18px Semibold #111827
- **Body:**
  - Matn: "Siz allaqachon ba'zi sozlamalarni bajardingiz. Hozir to'xtatsangiz, keyinde qaytib davom ettirishingiz mumkin." — 14px Regular #6B7280
  - Checklist (optional):
    - ✓ Workspace yaratildi
    - ✓ Widget sozlandi
    - ○ Widget o'rnatish kerak
- **Footer actions:**
  - Cancel: "Davom ettirish" — 44px height, secondary
  - Confirm: "Keyinga qoldirish" — 44px height, primary

**Figma komponent:**
```
modal-skip-confirmation/
├── overlay (bg: rgba(0,0,0,0.5), blur: 4px)
└── modal-container (480px, bg: white, radius: 12px, shadow: lg)
    ├── header (icon 24px + title 18px)
    ├── body (text 14px + checklist optional)
    └── footer (2 buttons, gap 12px)
```

---

### 5.2. RESUME BANNER (Dashboard'da)

#### Trigger qoidalari
- **Ko'rsatiladi:** Onboarding boshlangan lekin tugallanmagan (step 1/5 dan 4/5 gacha)
- **Yashiriladi:** Onboarding to'liq tugallangan (step 5/5) yoki foydalanuvchi banner'ni dismiss qilgan

#### Joylashuv
- **Pozitsiya:** Dashboard yuqori qismida, header ostida
- **Kenglik:** 100% (full-width), max 1400px container ichida 16px padding
- **Vertikal gap:** 16px yuqori va pastda (header va stat cards orasida)

#### Vizual spetsifikatsiya

| Parametr | Qiymat |
|----------|--------|
| **Background** | Gradient: `#4F46E5` → `#6366F1` (Primary-600 → Primary-500) |
| **Balandlik** | 80px |
| **Padding** | 20px 24px |
| **Border-radius** | 12px |
| **Shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Layout** | Horizontal, space-between |

#### Chap tomon: Matn + Progress

**Icon:**
- Turi: Rocket yoki CheckCircle
- O'lcham: 40px
- Rang: White
- Background: `rgba(255,255,255,0.2)` (white/20 opacity)
- Border-radius: 50% (circle)
- Padding: 8px gap

**Matn:**
- **Title:** "Hali onboarding tugallanmadi" — 16px, Semibold, White
- **Description:** "Yana 2 qadam qoldi! Widget o'rnatish va test yuborish." — 14px, Regular, White/90 opacity
- **Gap:** 4px vertikal (title va description orasida)

**Progress bar (optional):**
- Joylashuv: Matn ostida, 8px gap
- Kenglik: 240px
- Balandlik: 6px
- Background: `rgba(255,255,255,0.2)`
- Fill: White
- Border-radius: 999px (pill)
- Fill progress: 60% (3/5 qadam)

#### O'ng tomon: Actions

**Primary button: "Davom ettirish"**
- Balandlik: 40px
- Padding: 12px 20px
- Background: White
- Rang: `#4F46E5` (Primary-600)
- Font: 14px, Semibold
- Border-radius: 8px
- Hover: `#F9FAFB` (Gray-50) background
- Icon: ArrowRight (16px) o'ng tomonda

**Secondary button: "Keyinroq" (Dismiss)**
- Balandlik: 40px
- Padding: 12px 16px
- Background: Transparent
- Rang: White
- Font: 14px, Medium
- Border-radius: 8px
- Hover: `rgba(255,255,255,0.1)` background
- Icon: X (16px) o'ng tomonda

**Gap:** 12px ikkala tugma orasida

#### ASCII Wireframe — Resume Banner

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│ ┃  [🚀]   Hali onboarding tugallanmadi                  [Davom ettirish →]  ┃ │
│ ┃         Yana 2 qadam qoldi! Widget o'rnatish              [Keyinroq ×]    ┃ │
│ ┃         va test yuborish.                                                 ┃ │
│ ┃         ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░ 60%                                   ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
└────────────────────────────────────────────────────────────────────────────────┘
```

#### Figma komponent — Resume Banner

```
resume-onboarding-banner/
├── container (auto-layout, horizontal, space-between, padding: 20/24, bg gradient)
│   ├── left-content (auto-layout, horizontal, gap: 16px)
│   │   ├── icon (40px circle, white/20 bg, Rocket 24px white)
│   │   └── text-content (auto-layout, vertical, gap: 4px)
│   │       ├── title (text: "Hali onboarding tugallanmadi", 16px Semibold, white)
│   │       ├── description (text: "Yana 2 qadam...", 14px Regular, white/90)
│   │       └── progress-bar (optional)
│   │           ├── track (240×6px, white/20, radius 999px)
│   │           └── fill (60% width, white, radius 999px)
│   └── right-actions (auto-layout, horizontal, gap: 12px)
│       ├── btn-resume (40px, white bg, primary text, "Davom ettirish →")
│       └── btn-dismiss (40px, transparent, white text, "Keyinroq ×")
```

---

### 5.3. ONBOARDING STATE MANAGEMENT

#### API Endpoints

**GET /api/onboarding/progress**
- **Response:**
```json
{
  "user_id": "usr_123abc",
  "workspace_id": "wks_456def",
  "status": "in_progress",
  "current_step": 3,
  "total_steps": 5,
  "completed_steps": [1, 2],
  "started_at": "2026-02-10T14:30:00Z",
  "updated_at": "2026-02-10T14:35:00Z",
  "data": {
    "workspace_name": "Mening Kompaniyam",
    "workspace_url": "kompaniya.uz",
    "widget_customization": {
      "primary_color": "#4F46E5",
      "shape": "round",
      "position": "bottom-right"
    }
  }
}
```

**PUT /api/onboarding/progress**
- **Request:**
```json
{
  "current_step": 3,
  "completed_steps": [1, 2, 3],
  "data": {
    "widget_customization": {
      "primary_color": "#10B981",
      "shape": "square"
    }
  }
}
```
- **Response:** 200 OK + updated progress object

**POST /api/onboarding/skip**
- **Request:**
```json
{
  "current_step": 3,
  "reason": "will_complete_later"
}
```
- **Response:** 200 OK
- **Side effect:** Sets `status: "skipped"`, saves current progress

**POST /api/onboarding/dismiss-banner**
- **Request:** Empty body
- **Response:** 200 OK
- **Side effect:** Sets `banner_dismissed: true`, banner yashirinadi 24 soatga

**POST /api/onboarding/complete**
- **Request:** Empty body
- **Response:** 200 OK
- **Side effect:** Sets `status: "completed"`, `completed_at` timestamp

#### Database Schema

**Table: `onboarding_progress`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `user_id` | UUID | Foreign key → users.id |
| `workspace_id` | UUID | Foreign key → workspaces.id |
| `status` | ENUM | `not_started`, `in_progress`, `skipped`, `completed` |
| `current_step` | INTEGER | 1-5 |
| `total_steps` | INTEGER | 5 (static) |
| `completed_steps` | INTEGER[] | Array: [1, 2, 3] |
| `data` | JSONB | Step-specific data (workspace name, widget config, etc.) |
| `banner_dismissed_at` | TIMESTAMP | NULL yoki dismiss vaqti |
| `started_at` | TIMESTAMP | Onboarding boshlangan vaqt |
| `completed_at` | TIMESTAMP | NULL yoki tugallangan vaqt |
| `updated_at` | TIMESTAMP | Oxirgi yangilanish |

**Indexes:**
- `idx_onboarding_user_id` on `user_id`
- `idx_onboarding_workspace_id` on `workspace_id`
- `idx_onboarding_status` on `status`

---

### 5.4. FRONTEND STATE MANAGEMENT

#### React Context (ixtiyoriy)

```typescript
interface OnboardingContext {
  progress: OnboardingProgress | null;
  isLoading: boolean;
  skipOnboarding: () => Promise<void>;
  resumeOnboarding: () => void;
  completeStep: (step: number, data?: any) => Promise<void>;
  dismissBanner: () => Promise<void>;
}
```

#### LocalStorage Backup

**Key:** `qulaychat_onboarding_progress`
**Value:** JSON object (progress state)
**Purpose:** Saqlanadi agar backend request fail bo'lsa, keyingi sync uchun

---

### 5.5. USER FLOWS

#### Flow 1: Skip Onboarding (Early)
1. Foydalanuvchi Welcome ekranida "Keyinroq" tugmasini bosadi
2. Confirmation modal ochilmaydi (faqat 1-qadam bo'lgani uchun)
3. `POST /api/onboarding/skip` request yuboriladi
4. Dashboard'ga redirect qiladi
5. Resume banner ko'rinadi

#### Flow 2: Skip Onboarding (Mid-way)
1. Foydalanuvchi 3/5 qadamda "Keyinroq" tugmasini bosadi
2. Confirmation modal ochiladi: "Siz allaqachon ba'zi sozlamalarni bajardingiz..."
3. Foydalanuvchi "Keyinga qoldirish" ni tasdiqlaydi
4. `POST /api/onboarding/skip` request yuboriladi
5. Dashboard'ga redirect qiladi
6. Resume banner ko'rinadi (60% progress bilan)

#### Flow 3: Resume Onboarding
1. Foydalanuvchi dashboard'da Resume banner'ni ko'radi
2. "Davom ettirish" tugmasini bosadi
3. `GET /api/onboarding/progress` request yuboriladi
4. `current_step` ga mos onboarding sahifasiga redirect qiladi (masalan, Step 3/5)
5. Onboarding davom etadi

#### Flow 4: Dismiss Banner
1. Foydalanuvchi banner'da "Keyinroq" (X) tugmasini bosadi
2. `POST /api/onboarding/dismiss-banner` request yuboriladi
3. Banner fade-out animatsiyasi bilan yashirinadi
4. Banner 24 soat ko'rinmaydi
5. 24 soatdan keyin yana ko'rinadi (agar onboarding hali tugallanmagan bo'lsa)

---

### 5.6. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **Skip button hover** | Background: transparent → #F3F4F6 | 150ms ease |
| **Skip button click** | Scale: 1 → 0.95 → 1 | 200ms ease |
| **Confirmation modal open** | Scale: 0.95 → 1, Opacity: 0 → 1 | 200ms ease-out |
| **Confirmation modal backdrop** | Opacity: 0 → 50%, Blur: 0 → 4px | 200ms ease |
| **Resume banner appear** | Slide-down: translateY(-20px) → 0, Opacity: 0 → 1 | 300ms ease-out |
| **Resume banner dismiss** | Slide-up: 0 → translateY(-20px), Opacity: 1 → 0 | 250ms ease-in |
| **Resume button hover** | Background: white → #F9FAFB | 150ms ease |
| **Progress bar fill** | Width: 0 → 60% | 800ms ease-out (on load) |
| **Banner icon pulse** | Scale: 1 → 1.1 → 1 | 2000ms infinite ease-in-out |

---

### 5.7. ACCESSIBILITY

#### Keyboard Navigation
- **Tab order:** Skip button → Continue button → Modal buttons (if modal open)
- **Escape:** Yopadi confirmation modal
- **Enter/Space:** Activates focused button

#### ARIA Labels
- Skip button: `aria-label="Skip onboarding for now"`
- Resume button: `aria-label="Resume onboarding setup"`
- Dismiss button: `aria-label="Dismiss onboarding reminder"`
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`
- Banner: `role="region"`, `aria-label="Onboarding progress reminder"`

#### Screen Reader Announcements
- Skip click: "Onboarding skipped. You can resume from the dashboard."
- Resume click: "Resuming onboarding from step 3 of 5."
- Dismiss click: "Onboarding reminder dismissed for 24 hours."
- Banner load: "Onboarding incomplete. 2 steps remaining. 60% complete."

#### Focus Management
- Modal open: Focus moves to first button (Cancel)
- Modal close: Focus returns to Skip button trigger
- Banner dismiss: Focus moves to first dashboard element (stat card)

#### Color Contrast
- Banner text on gradient: 5.8:1 (AA compliant)
- Skip button: 4.5:1 (AA compliant)
- Modal text: 10.8:1 (AAA compliant)

---

## Figma AI uchun prompt

```
Create two onboarding step screens for a SaaS platform called QULAY CHAT.
Both screens share a light gray (#F9FAFB) page background and a centered white card
(600px wide, 12px radius, medium shadow). Above the card is a horizontal progress
indicator showing 4 dots connected by lines — first dot is active (filled, #4F46E5),
remaining dots are gray (#D1D5DB). "1/4" label next to the dots.

Screen 1 — Welcome:
Card padding 48px. Centered celebration/party icon (64px). Title "Xush kelibsiz, Ulug'bek!"
(24px semibold, #111827, centered). Subtitle "Keling, 5 daqiqada platformani sozlaymiz"
(16px regular, #6B7280, centered). Optional: a small preview list of 4 steps in a light
gray container. Full-width large primary button "Boshlash" (56px height, #4F46E5).

Screen 2 — Workspace Setup:
Card padding 40px. Left-aligned title "Workspace yaratish" (24px semibold, #111827).
Subtitle explaining what a workspace is (16px, #6B7280). Two form fields stacked:
1) "Workspace nomi" with required asterisk — standard input with helper text below.
2) "Kompaniya veb-sayti" with a "Tavsiya etiladi" badge — input with https:// prefix
and helper text. At the bottom-right: ghost "Keyinroq" button and primary "Davom etish"
button (56px height).

Inputs: 44px height, 8px radius, 12px 16px padding. Font: Inter.
Primary: #4F46E5. Text: #111827 headings, #6B7280 body, #374151 labels.
Style: Clean, modern, Crisp.chat-like onboarding wizard.

ADDITIONAL COMPONENTS:

Resume Banner (Dashboard):
Full-width gradient banner (#4F46E5 → #6366F1), 80px height, 12px radius, padding 20/24.
Left: Rocket icon 40px white in semi-transparent circle, title "Hali onboarding tugallanmadi"
(16px Semibold white), description "Yana 2 qadam qoldi!" (14px white/90), progress bar
240px 6px pill (white/20 track, white fill 60%). Right: "Davom ettirish →" button (40px white bg
primary text) + "Keyinroq ×" button (40px transparent white text). Gap 12px between buttons.

Skip Confirmation Modal:
Modal 480px centered on dark overlay (50% black, 4px blur). White background, 12px radius,
24px padding. Header: Orange AlertCircle icon 24px + "Onboarding'ni keyinga qoldirish?"
(18px Semibold). Body: explanation text 14px gray + optional checklist (✓ completed steps,
○ remaining). Footer: "Davom ettirish" secondary button + "Keyinga qoldirish" primary button,
both 44px height, 12px gap.
```
