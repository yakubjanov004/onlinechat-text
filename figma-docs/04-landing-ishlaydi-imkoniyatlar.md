# CHATFLOW — Landing Page: Qanday Ishlaydi + Asosiy Imkoniyatlar

## Umumiy yondashuv
Bu ikki bo'lim Kimlar Uchun bo'limidan keyin keladi. Foydalanuvchiga platforma qanday ishlashini 4 qadamda tushuntiradi va keyin 6 ta asosiy funksiyani ko'rsatadi. Har bir bo'lim oldingi bo'limdan mantiqiy davom etadi.

**Muhim:** Bu sahifa marketing landing emas — bu professional tool uchun mahsulot sahifasi. Maqsad — sotish emas, to'g'ri odamlarni to'g'ri tushuncha bilan platformaga olib kelish.

---

## 1. QANDAY ISHLAYDI — Jarayon oqimi

### Vazifasi
Platformaning real ish jarayonini vizuallashtirish. Mijoz yozgan paytdan operator javob berguncha va natija saqlanguncha bo'lgan jarayonni 4 bosqichda ko'rsatish.

### Layout va o'lchamlar
- **Joylashuv:** Kimlar Uchun bo'limidan keyin
- **Background:** `#FFFFFF` (oq)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda
- **Timeline chizig'i:** 1px `#E5E7EB` (Gray-300), ikonlar markazidan o'tadi

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Qanday ishlaydi?
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda

**Qo'shimcha tavsif:**
```
Mijoz yozgan paytdan natija saqlanguncha — 4 oddiy qadam
```
- **Shrift:** 18px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Margin-top:** 16px

### 4 qadam — Gorizontal timeline (Desktop)

**Layout:**
- 4 ta karta gorizontal qatorda
- Kartalar orasida timeline chiziq va o'q/chevron ikonkalar
- **Margin-top:** 64px (sarlavhadan keyin)
- **Kartalar orasidagi gap:** 32px

---

#### Qadam 1: Mijoz yozadi

**Qadam raqami badge:**
- **O'lcham:** 28px x 28px doira
- **Background:** `#E0E7FF` (Primary-100)
- **Matn:** "1", 12px Bold, `#4F46E5` (Primary-600)

**Icon:** Pencil / Edit icon
- **O'lcham:** 24px
- **Rang:** `#4F46E5` (Primary-600)
- **Uslub:** Outline

**Sarlavha:**
```
Mijoz yozadi
```
- **Shrift:** 18px, Semibold (600), `#111827`
- **Margin-top:** 16px

**Tavsif:**
```
Mijoz saytingizdagi chat vidjetni ochadi va savol beradi
```
- **Shrift:** 14px, Regular (400), `#6B7280`
- **Line-height:** 22px
- **Margin-top:** 8px

---

#### Qadam 2: Xabar tushadi

**Icon:** Inbox / Download icon, 24px, `#4F46E5`

**Sarlavha:**
```
Xabar tushadi
```

**Tavsif:**
```
Uning xabari avtomatik ravishda sizning yagona inbox'ga tushadi
```

---

#### Qadam 3: Operator javob beradi

**Icon:** Chat bubble / Message icon, 24px, `#4F46E5`

**Sarlavha:**
```
Operator javob beradi
```

**Tavsif:**
```
Operatorlaringizdan biri xabarni ko'rib, real vaqtda javob qaytaradi
```

---

#### Qadam 4: Natija saqlanadi

**Icon:** Chart / Analytics icon, 24px, `#4F46E5`

**Sarlavha:**
```
Natija saqlanadi
```

**Tavsif:**
```
Suhbat tarixi, vaqt va natijalar avtomatik tahlil qilinadi
```

---

### Qadam karta umumiy uslubi

| Parametr | Qiymat |
|----------|--------|
| **Kenglik** | teng taqsimlangan (1/4 - gap) |
| **Min-height** | 180px |
| **Background** | `#FFFFFF` (White) |
| **Border** | 1px `#E5E7EB` (Gray-300) |
| **Border-radius** | 12px (radius-lg) |
| **Padding** | 24px |
| **Shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Hover shadow** | `0 10px 15px -3px rgba(0,0,0,0.1)` (shadow-lg) |
| **Hover transform** | `translateY(-2px)`, transition 200ms ease |
| **Tekislash** | Markazda (text-align: center) |

### Timeline chizig'i va o'qlar
- **Chiziq:** 1px `#E5E7EB`, kartalar markazidan o'tadi (gorizontal)
- **O'qlar:** Kartalar orasida kichik chevron-right icon, 16px, `#D1D5DB`
- **Chiziq vertikal joylashuv:** Icon markaziga to'g'ri keladi

### Qo'shimcha eslatma

**Joylashuv:** 4 ta karta ostida, 32px margin-top bilan
```
Butun jarayon bitta tizimda — hech narsa qo'shimcha o'rnatish yoki sozlash shart emas.
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Tekislash:** Markazda
- **Icon:** Checkmark, `#10B981`, matn oldida

### ASCII wireframe (Desktop)
```
                    [ Qanday ishlaydi? ]
              [ Mijoz yozgan paytdan ... ]

┌──────────┐  ──→  ┌──────────┐  ──→  ┌──────────┐  ──→  ┌──────────┐
│    ①     │       │    ②     │       │    ③     │       │    ④     │
│ 📝 Mijoz │       │ 📥 Xabar │       │ 💬 Opera-│       │ 📊 Natija│
│  yozadi  │       │  tushadi │       │tor javob │       │ saqlanadi│
│          │       │          │       │  beradi  │       │          │
└──────────┘       └──────────┘       └──────────┘       └──────────┘

       ✓ Butun jarayon bitta tizimda
```

### ASCII wireframe (Mobile)
```
[ Qanday ishlaydi? ]

┌──────────────────┐
│ ① 📝 Mijoz yozadi│
└────────┬─────────┘
         │
┌────────▼─────────┐
│ ② 📥 Xabar tushadi│
└────────┬─────────┘
         │
┌────────▼─────────┐
│ ③ 💬 Operator    │
│    javob beradi  │
└────────┬─────────┘
         │
┌────────▼─────────┐
│ ④ 📊 Natija      │
│    saqlanadi     │
└──────────────────┘
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 4 karta gorizontal qatorda, timeline chiziq bilan |
| **Tablet (768px)** | 2x2 grid, timeline chizig'i 2 qatorda |
| **Mobile (375px)** | Vertikal stack, vertikal chiziq, kartalar full-width, padding 32px 16px |

**Mobile uchun maxsus:**
- Sarlavha: 32px (kichikroq)
- Karta padding: 20px
- Gap: 16px

---

## 2. ASOSIY IMKONIYATLAR — Funksional qobiliyatlar

### Vazifasi
Platforma nimalarga qodirligini oddiy tilda, 6 ta karta orqali ko'rsatish. Har bir karta bitta asosiy funksiyani 2-3 bullet point bilan tushuntiradi.

### Layout va o'lchamlar
- **Joylashuv:** Qanday Ishlaydi bo'limidan keyin
- **Background:** `#F9FAFB` (Gray-50)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Barcha kerakli funksiyalar bitta joyda
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Tekislash:** Markazda

**Qo'shimcha tavsif:**
```
Platformadagi barcha asosiy imkoniyatlar — sodda va samarali
```
- **Shrift:** 18px, Regular (400), `#6B7280`
- **Tekislash:** Markazda
- **Margin-top:** 16px

### 6 ta funksiya kartasi — Grid layout

**Layout:**
- **Grid:** 3x2 (desktop), 2x3 (tablet), 1x6 (mobile)
- **Gap:** 24px
- **Margin-top:** 64px (sarlavhadan keyin)

---

#### Karta 1: Yagona Inbox

**Icon:** Inbox icon, 24px, `#4F46E5`, outline
**Icon background:** `#EEF2FF`, 48x48px, border-radius: 12px

**Sarlavha:**
```
Yagona Inbox
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Bullet pointlar:**
```
- Barcha kanallardan kelgan xabarlar bitta ro'yxatda
- Prioritet va filter
- Assign va status boshqaruvi
```
- **Shrift:** 14px, Regular (400), `#374151`
- **Marker:** `#4F46E5` rangli kichik doira (6px)

---

#### Karta 2: Avtomatik Javoblar

**Icon:** Robot / Bot icon, 24px, `#4F46E5`

**Sarlavha:**
```
Avtomatik Javoblar
```

**Bullet pointlar:**
```
- Tez-tez beriladigan savollar uchun chatbot
- Ish vaqtidan tashqari avtomatik xabar
- Smart routing — so'rovni kerakli odamga yo'naltirish
```

---

#### Karta 3: Operatorlar Boshqaruvi

**Icon:** Users / Team icon, 24px, `#4F46E5`

**Sarlavha:**
```
Operatorlar Boshqaruvi
```

**Bullet pointlar:**
```
- Jamoa a'zolarini qo'shish va boshqarish
- Rollar va ruxsatlar tizimi
- Ish yuklarini monitoring qilish
```

---

#### Karta 4: Analytics va Hisobotlar

**Icon:** Chart / Bar chart icon, 24px, `#4F46E5`

**Sarlavha:**
```
Analytics va Hisobotlar
```

**Bullet pointlar:**
```
- Javob berish vaqti tahlili
- Hal qilingan muammolar statistikasi
- Operator samaradorligi va CSAT
```

---

#### Karta 5: Integratsiyalar

**Icon:** Link / Chain icon, 24px, `#4F46E5`

**Sarlavha:**
```
Integratsiyalar
```

**Bullet pointlar:**
```
- Sayt chat vidjeti
- Email inbox integratsiya
- WhatsApp, Telegram (agar mavjud)
```

---

#### Karta 6: Billing va Tariflar

**Icon:** Credit card icon, 24px, `#4F46E5`

**Sarlavha:**
```
Billing va Tariflar
```

**Bullet pointlar:**
```
- Shaffof narxlar va obunani boshqarish
- Foydalanish limitleri nazorati
- Invoice va to'lov tarixi
```

---

### Funksiya kartasi umumiy uslubi

| Parametr | Qiymat |
|----------|--------|
| **Kenglik** | teng taqsimlangan (1/3 - gap) |
| **Min-height** | 220px |
| **Background** | `#FFFFFF` (White) |
| **Border** | 1px `#F3F4F6` (Gray-100) |
| **Border-radius** | 12px (radius-lg) |
| **Padding** | 24px |
| **Shadow** | `0 1px 2px rgba(0,0,0,0.05)` (shadow-sm) |
| **Hover shadow** | `0 10px 15px -3px rgba(0,0,0,0.1)` (shadow-lg) |
| **Hover transform** | `translateY(-2px)`, transition 200ms ease |
| **Tekislash** | Chapdan boshlanadi (text-align: left) |

### ASCII wireframe (Desktop)
```
        [ Barcha kerakli funksiyalar bitta joyda ]
          [ Platformadagi barcha asosiy ... ]

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 📥 Yagona Inbox │ │ 🤖 Avtomatik    │ │ 👥 Operatorlar  │
│                 │ │    Javoblar     │ │    Boshqaruvi   │
│ • Barcha kanal..│ │ • Chatbot       │ │ • Jamoa qo'shish│
│ • Prioritet    │ │ • Offline xabar │ │ • Rollar        │
│ • Assign       │ │ • Smart routing │ │ • Monitoring    │
└─────────────────┘ └─────────────────┘ └─────────────────┘
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ 📊 Analytics    │ │ 🔗 Integratsiya-│ │ 💳 Billing va   │
│                 │ │    lar          │ │    Tariflar     │
│ • Javob vaqti  │ │ • Chat vidjeti  │ │ • Shaffof narx  │
│ • Statistika   │ │ • Email         │ │ • Limitlar      │
│ • CSAT         │ │ • WhatsApp/TG   │ │ • Invoice       │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 3x2 grid, 24px gap |
| **Tablet (768px)** | 2x3 grid, 20px gap |
| **Mobile (375px)** | 1 ustunli vertikal stack, to'liq kenglik, 16px gap |

---

## Micro-interactions
- **Section fade-in:** Scroll qilganda 200ms fade-in
- **Card hover lift:** translateY(-2px), shadow-lg
- **Timeline dot pulse:** Subtle pulse animatsiya (1s loop) qadam doiralarida
- **Chevron:** Scroll trigger bilan ketma-ket paydo bo'ladi

---

### Figma uchun komponentlar
```
landing-how-it-works/
├── section-wrapper (auto-layout, vertical, center aligned, padding: 96px 24px)
│   ├── section-header (auto-layout, vertical, center, gap: 16px)
│   │   ├── title (H2: 40px Bold, #111827, center)
│   │   └── subtitle (18px Regular, #6B7280, center)
│   ├── steps-row (auto-layout, horizontal, gap: 32px, margin-top: 64px)
│   │   ├── step-card-1
│   │   │   ├── step-badge (28x28 doira, #E0E7FF bg, "1")
│   │   │   ├── step-icon (pencil, 24px, #4F46E5)
│   │   │   ├── step-title ("Mijoz yozadi", 18px Semibold)
│   │   │   └── step-description (14px Regular, #6B7280)
│   │   ├── timeline-connector (chevron + line)
│   │   ├── step-card-2
│   │   ├── timeline-connector
│   │   ├── step-card-3
│   │   ├── timeline-connector
│   │   └── step-card-4
│   └── note-text ("✓ Butun jarayon bitta tizimda...", margin-top: 32px)

landing-features/
├── section-wrapper (auto-layout, vertical, center, padding: 96px 24px, #F9FAFB bg)
│   ├── section-header
│   │   ├── title (H2)
│   │   └── subtitle
│   └── features-grid (auto-layout, wrap, 3 columns, gap: 24px, margin-top: 64px)
│       ├── feature-card-1 [Yagona Inbox]
│       │   ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│       │   │   └── icon (inbox, 24px, #4F46E5)
│       │   ├── title ("Yagona Inbox", 20px Semibold)
│       │   └── bullet-list (3 punkt, 14px, #374151)
│       ├── feature-card-2 [Avtomatik Javoblar]
│       ├── feature-card-3 [Operatorlar Boshqaruvi]
│       ├── feature-card-4 [Analytics]
│       ├── feature-card-5 [Integratsiyalar]
│       └── feature-card-6 [Billing]
```

### Figma AI uchun prompt
```
Create two landing page sections for a SaaS customer support platform called CHATFLOW.

Section 1 - "Qanday ishlaydi?": Show 4 step cards in a horizontal timeline with connecting
lines and chevron arrows. Each card has a numbered badge (1-4), outline icon, title and
short description. Steps: "Mijoz yozadi", "Xabar tushadi", "Operator javob beradi",
"Natija saqlanadi". Below: a note with checkmark "Butun jarayon bitta tizimda".
White background, 96px vertical padding.

Section 2 - "Barcha kerakli funksiyalar bitta joyda": 6 feature cards in a 3x2 grid.
Each card: icon in #4F46E5 on #EEF2FF background, bold title, 3 bullet points.
Cards: Yagona Inbox, Avtomatik Javoblar, Operatorlar Boshqaruvi, Analytics,
Integratsiyalar, Billing. Light gray background (#F9FAFB).

Style: Clean, modern, professional SaaS. Colors: Primary #4F46E5, text #111827,
secondary text #6B7280. Font: Inter. Desktop width: 1200px max.
```
