# QULAY CHAT — Landing Page: Integratsiyalar + Nega Aynan Biz

## Umumiy yondashuv
Bu ikki bo'lim Asosiy Imkoniyatlar bo'limidan keyin keladi. Integratsiyalar bo'limi platformaning qaysi kanallar bilan ishlashini ko'rsatadi va "yagona inbox" konsepsiyasini mustahkamlaydi. Nega Aynan Biz bo'limi esa raqobatchilardan farqlarni 6 ta aniq afzallik orqali ko'rsatib, foydalanuvchini platformaga ishontiradi.

**Muhim:** Bu sahifa marketing landing emas — bu professional tool uchun mahsulot sahifasi. Maqsad — sotish emas, to'g'ri odamlarni to'g'ri tushuncha bilan platformaga olib kelish. Bloklar vizual jihatdan toza, faktlarga asoslangan va minimal.

---

## 1. INTEGRATSIYALAR — Istalgan kanaldan xabar qabul qiling

### Vazifasi
Platforma turli kanallardan (sayt vidjeti, email, messenjerlar) xabar qabul qilishini ko'rsatish va barcha kanallar bitta yagona inbox'ga tushishini vizuallashtirish. Foydalanuvchiga "siz har qanday kanaldan kelgan xabarni bir joydan boshqarasiz" xabarini berish.

### Layout va o'lchamlar
- **Joylashuv:** Asosiy Imkoniyatlar bo'limidan keyin
- **Background:** `#FFFFFF` (oq)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda
- **Bo'lim umumiy balandligi:** Auto (kontentga qarab), taxminan 520-640px

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Istalgan kanaldan xabar qabul qiling
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda
- **Max-width:** 600px

**Qo'shimcha tavsif (subtitle):**
```
Barcha kanallardan kelgan xabarlar yagona inbox'da — hech narsani o'tkazib yubormaysiz
```
- **Shrift:** 18px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Max-width:** 560px
- **Margin-top:** 16px

### 3 ta kanal kartasi — Gorizontal qator

**Kartalar layout:**
- **Tuzilish:** 3 karta gorizontal qatorda
- **Kartalar orasidagi gap:** 32px
- **Har bir karta kengligi:** teng taqsimlangan (1/3 - gap), taxminan 368px
- **Margin-top:** 64px (sarlavhadan keyin)

---

#### Karta 1: Sayt Chat Vidjeti

**Icon:** Chat bubble / Widget icon
- **Icon o'lchami:** 48px x 48px konteyner
- **Icon o'zi:** 24px, outline uslubida
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px, border-radius: 12px

**Kanal nomi:**
```
Sayt Chat Vidjeti
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Tavsif matni:**
```
Veb-saytingizga chat vidjetni bir necha daqiqada o'rnating
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Line-height:** 24px
- **Margin-top:** 8px

**Xususiyatlar ro'yxati:**
```
- Bir necha daqiqada o'rnating
- To'liq sozlanadigan dizayn
- Mobil va desktop uchun
```
- **Shrift:** 14px, Regular (400), `#374151` (Gray-700)
- **Line-height:** 22px
- **Marker:** `#10B981` (Success-500) rangli checkmark icon (16px) yoki `#4F46E5` doira (6px)
- **Gap:** har bir punkt orasida 8px
- **Margin-top:** 16px

---

#### Karta 2: Email

**Icon:** Mail / Envelope icon
- **Icon o'lchami:** 48px x 48px konteyner
- **Icon o'zi:** 24px, outline
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px, border-radius: 12px

**Kanal nomi:**
```
Email
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Tavsif matni:**
```
support@kompaniya.uz manzili orqali xabar qabul qiling
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

**Xususiyatlar ro'yxati:**
```
- Emaillar avtomatik ticket'ga aylanadi
- Javoblar email orqali ketadi
- To'liq suhbat tarixini saqlash
```
- Uslub: Karta 1 bilan bir xil

---

#### Karta 3: Messenger / WhatsApp

**Icon:** Phone / Messenger icon
- **Icon o'lchami:** 48px x 48px konteyner
- **Icon o'zi:** 24px, outline
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px, border-radius: 12px

**"Tez orada" badge:**
- **Joylashuv:** Karta yuqori o'ng burchagida, yoki kanal nomi yonida
- **Background:** `#FFFBEB` (Warning-50)
- **Matn rangi:** `#D97706` (Warning-700)
- **Matn:** "Tez orada"
- **Shrift:** 12px, Medium (500)
- **Padding:** 4px 10px
- **Border-radius:** 9999px (pill shape)

**Kanal nomi:**
```
Messenger / WhatsApp
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Tavsif matni:**
```
Business API orqali messenjerlarni ulang (agar mavjud)
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

**Xususiyatlar ro'yxati:**
```
- Business API orqali integratsiya
- Barcha xabarlar yagona inbox'da
- Real vaqtda xabarnoma
```
- Uslub: Karta 1 bilan bir xil

---

### Karta umumiy uslubi

| Parametr | Qiymat |
|----------|--------|
| **Kenglik** | teng taqsimlangan (1/3 - gap), ~368px |
| **Min-height** | 280px |
| **Background** | `#FFFFFF` (White) |
| **Border** | 1px `#E5E7EB` (Gray-300) |
| **Border-radius** | 12px (radius-lg) |
| **Padding** | 32px |
| **Shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Hover shadow** | `0 10px 15px -3px rgba(0,0,0,0.1)` (shadow-lg) |
| **Hover transform** | `translateY(-2px)`, transition 200ms ease |
| **Hover border** | 1px `#818CF8` (Primary-400) |
| **Tekislash** | Chapdan boshlanadi (text-align: left) |

---

### ASCII wireframe (Desktop)
```
                 [ Istalgan kanaldan xabar qabul qiling ]
            [ Barcha kanallardan kelgan xabarlar yagona ... ]

┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 💬               │  │ 📧               │  │ 📱  [Tez orada] │
│                  │  │                  │  │                  │
│ Sayt Chat Vidjeti│  │ Email            │  │ Messenger /      │
│                  │  │                  │  │ WhatsApp         │
│ Veb-saytingizga  │  │ support@kompaniya│  │ Business API     │
│ chat vidjetni... │  │ .uz manzili...   │  │ orqali...        │
│                  │  │                  │  │                  │
│ ✓ Daqiqada o'rna │  │ ✓ Avtomatik      │  │ ✓ API integratsiya│
│ ✓ Sozlanadigan   │  │   ticket         │  │ ✓ Yagona inbox   │
│ ✓ Mobil+desktop  │  │ ✓ Email javob    │  │ ✓ Real-time      │
│                  │  │ ✓ Tarix saqlash  │  │   xabarnoma      │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

### ASCII wireframe (Mobile)
```
[ Istalgan kanaldan xabar qabul qiling ]
[ Barcha kanallardan ... ]

┌──────────────────────────┐
│ 💬 Sayt Chat Vidjeti     │
│ Veb-saytingizga chat...  │
│ ✓ Daqiqada o'rnating     │
│ ✓ Sozlanadigan dizayn    │
│ ✓ Mobil va desktop uchun │
└──────────────────────────┘

┌──────────────────────────┐
│ 📧 Email                 │
│ support@kompaniya.uz ... │
│ ✓ Avtomatik ticket       │
│ ✓ Email orqali javob     │
│ ✓ Tarix saqlash          │
└──────────────────────────┘

┌──────────────────────────┐
│ 📱 Messenger / WhatsApp  │
│     [Tez orada]          │
│ Business API orqali...   │
│ ✓ API integratsiya       │
│ ✓ Yagona inbox           │
│ ✓ Real-time xabarnoma    │
└──────────────────────────┘
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 3 karta gorizontal qatorda, 32px gap, har biri ~368px |
| **Desktop (1024px)** | 3 karta gorizontal, gap 24px ga kamayadi |
| **Tablet (768px)** | 2+1 grid (yuqorida 2 karta, pastda 1 karta markazda) yoki vertikal stack |
| **Mobile (375px)** | 1 ustunli vertikal stack, kartalar full-width, padding 32px 16px |

**Mobile uchun maxsus o'zgarishlar:**
- Section sarlavha: 32px Bold (H2 o'lchamdan kichikroq)
- Subtitle: 16px
- Kartalar: to'liq kenglik, padding 24px
- Kartalar orasidagi gap: 16px
- Section padding: 64px 16px

**Tablet uchun maxsus o'zgarishlar:**
- Section sarlavha: 36px
- Kartalar gap: 24px
- Section padding: 80px 24px

---

### Integratsiyalar — To'liq Figma komponent daraxti

```
integration-section/
├── section-wrapper (auto-layout, vertical, center aligned, padding: 96px 24px)
│   │
│   ├── section-header (auto-layout, vertical, center aligned, gap: 16px)
│   │   ├── title (text: "Istalgan kanaldan xabar qabul qiling", H2: 40px Bold, #111827, center)
│   │   └── subtitle (text: "Barcha kanallardan kelgan xabarlar yagona inbox'da...", 18px Regular, #6B7280, center)
│   │
│   └── cards-row (auto-layout, horizontal, gap: 32px, margin-top: 64px)
│       ├── channel-card-1 [Sayt Chat Vidjeti]
│       │   ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│       │   │   └── icon (chat-bubble, 24px, #4F46E5)
│       │   ├── channel-name (text: "Sayt Chat Vidjeti", 20px Semibold, #111827)
│       │   ├── channel-description (text: "Veb-saytingizga chat vidjetni...", 16px Regular, #6B7280)
│       │   └── features-list (auto-layout, vertical, gap: 8px)
│       │       ├── feature-item (checkmark + "Bir necha daqiqada o'rnating")
│       │       ├── feature-item (checkmark + "To'liq sozlanadigan dizayn")
│       │       └── feature-item (checkmark + "Mobil va desktop uchun")
│       │
│       ├── channel-card-2 [Email]
│       │   ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│       │   │   └── icon (mail, 24px, #4F46E5)
│       │   ├── channel-name (text: "Email", 20px Semibold, #111827)
│       │   ├── channel-description (text: "support@kompaniya.uz manzili...", 16px Regular, #6B7280)
│       │   └── features-list (auto-layout, vertical, gap: 8px)
│       │       ├── feature-item (checkmark + "Emaillar avtomatik ticket'ga aylanadi")
│       │       ├── feature-item (checkmark + "Javoblar email orqali ketadi")
│       │       └── feature-item (checkmark + "To'liq suhbat tarixini saqlash")
│       │
│       └── channel-card-3 [Messenger / WhatsApp]
│           ├── badge-coming-soon (text: "Tez orada", 12px Medium, #D97706, #FFFBEB bg, pill)
│           ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│           │   └── icon (phone, 24px, #4F46E5)
│           ├── channel-name (text: "Messenger / WhatsApp", 20px Semibold, #111827)
│           ├── channel-description (text: "Business API orqali...", 16px Regular, #6B7280)
│           └── features-list (auto-layout, vertical, gap: 8px)
│               ├── feature-item (checkmark + "Business API orqali integratsiya")
│               ├── feature-item (checkmark + "Barcha xabarlar yagona inbox'da")
│               └── feature-item (checkmark + "Real vaqtda xabarnoma")
```

### Integratsiyalar — Figma AI uchun prompt

```
Create an "Integrations" section for a SaaS customer support platform called QULAY CHAT.
Centered title: "Istalgan kanaldan xabar qabul qiling" (H2, 40px Bold, #111827).
Subtitle: "Barcha kanallardan kelgan xabarlar yagona inbox'da" (18px, #6B7280).

Below the title, show 3 channel cards side by side with equal width:

Card 1 - "Sayt Chat Vidjeti": Chat bubble icon in #4F46E5 on #EEF2FF rounded background.
Description about installing widget in minutes. 3 checkmark features: quick setup,
customizable design, mobile and desktop support.

Card 2 - "Email": Mail icon in #4F46E5 on #EEF2FF background.
Description about support@company.uz email. 3 checkmark features: auto ticket creation,
email replies, full history.

Card 3 - "Messenger / WhatsApp": Phone icon with a "Tez orada" (Coming soon) pill badge
in yellow (#FFFBEB bg, #D97706 text) at top-right corner. Description about Business API.
3 checkmark features: API integration, unified inbox, real-time notifications.

Each card: white background, 1px #E5E7EB border, 12px radius, 32px padding, shadow-md.
Hover: shadow-lg, translateY(-2px).
Style: Clean, modern, professional SaaS. Font: Inter. Desktop width: 1200px max.
White section background, 96px vertical padding.
```

---

## 2. NEGA AYNAN BIZ — Raqobat afzalliklari

### Vazifasi
Boshqa yechimlardan farqni aniq ko'rsatish va platforma tanlash sabablarini mustahkamlash. 6 ta afzallikni 2 ustunli toza layoutda ko'rsatish orqali foydalanuvchiga "nimaga aynan QULAY CHAT" savoliga javob berish.

### Layout va o'lchamlar
- **Joylashuv:** Integratsiyalar bo'limidan keyin
- **Background:** `#F9FAFB` (Gray-50) — yengil kulrang fon
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda
- **Bo'lim umumiy balandligi:** Auto (kontentga qarab), taxminan 480-580px

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Nega QULAY CHAT ni tanlash kerak?
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda
- **Max-width:** 600px

**Qo'shimcha tavsif (subtitle):**
```
Oddiy, tezkor va operatorlar uchun qulay — boshqa hech narsa shart emas
```
- **Shrift:** 18px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Max-width:** 480px
- **Margin-top:** 16px

### 6 ta afzallik — 2 ustunli grid

**Layout:**
- **Grid:** 2 ustun x 3 qator (desktop)
- **Har bir element kengligi:** teng taqsimlangan (1/2 - gap), taxminan 572px
- **Elementlar orasidagi gap:** 24px (gorizontal), 24px (vertikal)
- **Margin-top:** 64px (sarlavhadan keyin)

---

#### Afzallik 1: Tez ishga tushadi

**Check icon:**
- **Icon:** Checkmark-circle yoki Shield-check, 24px
- **Icon rangi:** `#10B981` (Success-500)
- **Joylashuv:** Sarlavha chap tomonida, vertikal markazda

**Sarlavha:**
```
Tez ishga tushadi
```
- **Shrift:** 18px, Semibold (600), `#111827` (Gray-900)
- **Line-height:** 28px

**Tavsif:**
```
2 daqiqada sozlang va ishlatishni boshlang. Murakkab o'rnatish yoki texnik bilim shart emas.
```
- **Shrift:** 14px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 22px
- **Margin-top:** 4px

---

#### Afzallik 2: Sodda va tushunarli

**Check icon:** 24px, `#10B981`

**Sarlavha:**
```
Sodda va tushunarli
```

**Tavsif:**
```
Ortiqcha funksiyalar va chalg'ituvchi sozlamalar yo'q. Faqat kerakli imkoniyatlar.
```

---

#### Afzallik 3: Operatorlar uchun qulay

**Check icon:** 24px, `#10B981`

**Sarlavha:**
```
Operatorlar uchun qulay
```

**Tavsif:**
```
Intuitiv interfeys — yangi xodim bir necha soatda to'liq o'rganib oladi.
```

---

#### Afzallik 4: Barcha bitta joyda

**Check icon:** 24px, `#10B981`

**Sarlavha:**
```
Barcha bitta joyda
```

**Tavsif:**
```
Chatlar, tarix, analitika va jamoani boshqarish — hammasini bitta tizimda olib boring.
```

---

#### Afzallik 5: Real vaqtda ishlaydi

**Check icon:** 24px, `#10B981`

**Sarlavha:**
```
Real vaqtda ishlaydi
```

**Tavsif:**
```
Xabarlar bir zumda keladi, javoblar tezkor. Mijozlaringiz kutmaydi.
```

---

#### Afzallik 6: Narx-sifat balansi

**Check icon:** 24px, `#10B981`

**Sarlavha:**
```
Narx-sifat balansi
```

**Tavsif:**
```
Enterprise darajadagi imkoniyatlar, lekin adolatli va tushunarli narx siyosati.
```

---

### Afzallik elementi umumiy uslubi

| Parametr | Qiymat |
|----------|--------|
| **Kenglik** | teng taqsimlangan (1/2 - gap), ~572px |
| **Min-height** | 80px |
| **Background** | `#FFFFFF` (White) |
| **Border** | 1px `#E5E7EB` (Gray-300) |
| **Border-radius** | 12px (radius-lg) |
| **Padding** | 24px |
| **Shadow** | `0 1px 2px rgba(0,0,0,0.05)` (shadow-sm) |
| **Hover shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Hover transform** | `translateY(-1px)`, transition 200ms ease |
| **Layout** | Horizontal: icon (chapda) + matn konteyner (o'ngda) |
| **Icon va matn gap** | 16px |

### ASCII wireframe (Desktop)
```
              [ Nega QULAY CHAT ni tanlash kerak? ]
           [ Oddiy, tezkor va operatorlar uchun qulay ]

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ ✅ Tez ishga tushadi        │  │ ✅ Barcha bitta joyda       │
│    2 daqiqada sozlang va    │  │    Chatlar, tarix, analitika│
│    ishlatishni boshlang...  │  │    bitta tizimda...         │
└─────────────────────────────┘  └─────────────────────────────┘

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ ✅ Sodda va tushunarli      │  │ ✅ Real vaqtda ishlaydi     │
│    Ortiqcha funksiyalar va  │  │    Xabarlar bir zumda       │
│    chalg'ituvchi sozlama... │  │    keladi, javoblar tezkor..│
└─────────────────────────────┘  └─────────────────────────────┘

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ ✅ Operatorlar uchun qulay  │  │ ✅ Narx-sifat balansi       │
│    Intuitiv interfeys —     │  │    Enterprise imkoniyatlar, │
│    yangi xodim bir necha... │  │    lekin adolatli narx...   │
└─────────────────────────────┘  └─────────────────────────────┘
```

### ASCII wireframe (Mobile)
```
[ Nega QULAY CHAT ni tanlash kerak? ]
[ Oddiy, tezkor va ... ]

┌──────────────────────────────┐
│ ✅ Tez ishga tushadi         │
│    2 daqiqada sozlang...     │
└──────────────────────────────┘

┌──────────────────────────────┐
│ ✅ Sodda va tushunarli       │
│    Ortiqcha funksiyalar...   │
└──────────────────────────────┘

┌──────────────────────────────┐
│ ✅ Operatorlar uchun qulay   │
│    Intuitiv interfeys...     │
└──────────────────────────────┘

┌──────────────────────────────┐
│ ✅ Barcha bitta joyda        │
│    Chatlar, tarix...         │
└──────────────────────────────┘

┌──────────────────────────────┐
│ ✅ Real vaqtda ishlaydi      │
│    Xabarlar bir zumda...     │
└──────────────────────────────┘

┌──────────────────────────────┐
│ ✅ Narx-sifat balansi        │
│    Enterprise imkoniyatlar...│
└──────────────────────────────┘
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 2 ustunli grid (2x3), 24px gap, har bir element ~572px |
| **Desktop (1024px)** | 2 ustunli grid, gap 20px |
| **Tablet (768px)** | 2 ustunli grid saqlanadi, elementlar kengligi moslashadi |
| **Mobile (375px)** | 1 ustunli vertikal stack, to'liq kenglik, 16px gap |

**Mobile uchun maxsus o'zgarishlar:**
- Section sarlavha: 32px Bold
- Subtitle: 16px
- Elementlar: to'liq kenglik, padding 20px
- Elementlar orasidagi gap: 12px
- Section padding: 64px 16px
- Check icon: 20px

**Tablet uchun maxsus o'zgarishlar:**
- Section sarlavha: 36px
- Grid gap: 20px
- Section padding: 80px 24px

---

### Nega Aynan Biz — To'liq Figma komponent daraxti

```
why-us-section/
├── section-wrapper (auto-layout, vertical, center aligned, padding: 96px 24px, bg: #F9FAFB)
│   │
│   ├── section-header (auto-layout, vertical, center aligned, gap: 16px)
│   │   ├── title (text: "Nega QULAY CHAT ni tanlash kerak?", H2: 40px Bold, #111827, center)
│   │   └── subtitle (text: "Oddiy, tezkor va operatorlar uchun qulay...", 18px Regular, #6B7280, center)
│   │
│   └── benefits-grid (auto-layout, wrap, 2 columns, gap: 24px, margin-top: 64px)
│       ├── benefit-item-1 [Tez ishga tushadi]
│       │   ├── check-icon (checkmark-circle, 24px, #10B981)
│       │   └── text-content (auto-layout, vertical, gap: 4px)
│       │       ├── benefit-title (text: "Tez ishga tushadi", 18px Semibold, #111827)
│       │       └── benefit-description (text: "2 daqiqada sozlang...", 14px Regular, #6B7280)
│       │
│       ├── benefit-item-2 [Sodda va tushunarli]
│       │   ├── check-icon (24px, #10B981)
│       │   └── text-content
│       │       ├── benefit-title (text: "Sodda va tushunarli", 18px Semibold, #111827)
│       │       └── benefit-description (text: "Ortiqcha funksiyalar...", 14px Regular, #6B7280)
│       │
│       ├── benefit-item-3 [Operatorlar uchun qulay]
│       │   ├── check-icon (24px, #10B981)
│       │   └── text-content
│       │       ├── benefit-title (text: "Operatorlar uchun qulay", 18px Semibold, #111827)
│       │       └── benefit-description (text: "Intuitiv interfeys...", 14px Regular, #6B7280)
│       │
│       ├── benefit-item-4 [Barcha bitta joyda]
│       │   ├── check-icon (24px, #10B981)
│       │   └── text-content
│       │       ├── benefit-title (text: "Barcha bitta joyda", 18px Semibold, #111827)
│       │       └── benefit-description (text: "Chatlar, tarix...", 14px Regular, #6B7280)
│       │
│       ├── benefit-item-5 [Real vaqtda ishlaydi]
│       │   ├── check-icon (24px, #10B981)
│       │   └── text-content
│       │       ├── benefit-title (text: "Real vaqtda ishlaydi", 18px Semibold, #111827)
│       │       └── benefit-description (text: "Xabarlar bir zumda...", 14px Regular, #6B7280)
│       │
│       └── benefit-item-6 [Narx-sifat balansi]
│           ├── check-icon (24px, #10B981)
│           └── text-content
│               ├── benefit-title (text: "Narx-sifat balansi", 18px Semibold, #111827)
│               └── benefit-description (text: "Enterprise imkoniyatlar...", 14px Regular, #6B7280)
```

### Nega Aynan Biz — Figma AI uchun prompt

```
Create a "Why Choose Us" section for a SaaS customer support platform called QULAY CHAT.
Light gray background (#F9FAFB).
Centered title: "Nega QULAY CHAT ni tanlash kerak?" (H2, 40px Bold, #111827).
Subtitle: "Oddiy, tezkor va operatorlar uchun qulay" (18px, #6B7280).

Below the title, show 6 benefit items in a 2-column grid (3 rows x 2 columns), 24px gap.

Each benefit item: white card with 1px #E5E7EB border, 12px radius, 24px padding, shadow-sm.
Layout: green checkmark-circle icon (24px, #10B981) on left, text on right.
Text has bold title (18px Semibold, #111827) and short description (14px Regular, #6B7280).

Benefits:
1. "Tez ishga tushadi" - Setup in 2 minutes
2. "Sodda va tushunarli" - No unnecessary features
3. "Operatorlar uchun qulay" - Intuitive interface
4. "Barcha bitta joyda" - Chats, history, analytics unified
5. "Real vaqtda ishlaydi" - Instant messages
6. "Narx-sifat balansi" - Enterprise features, fair price

Style: Clean, modern, professional SaaS. Font: Inter. Desktop width: 1200px max.
96px vertical padding.
```

---

## Micro-interactions

| Animatsiya | Parametrlar | Ishlatilishi |
|-----------|-------------|-------------|
| Section fade-in | opacity 0 -> 1, 200ms ease | Scroll qilganda section paydo bo'ladi |
| Card hover lift | translateY(-2px), shadow-lg, 200ms | Integratsiya kartalarida |
| Benefit hover | translateY(-1px), shadow-md, 200ms | Afzallik elementlarida |
| Check icon pulse | scale(1 -> 1.05 -> 1), 150ms | Afzallik elementiga hover qilganda |
| Badge shimmer | gradient slide, 2s | "Tez orada" badge da yengil animatsiya |

---

## Rang xulosa jadvali — Integratsiyalar + Nega Biz

| Element | Rang | Hex |
|---------|------|-----|
| Section background (Integratsiya) | White | `#FFFFFF` |
| Section background (Nega Biz) | Gray-50 | `#F9FAFB` |
| Bo'lim sarlavhasi | Gray-900 | `#111827` |
| Bo'lim subtitle | Gray-500 | `#6B7280` |
| Karta background | White | `#FFFFFF` |
| Karta border | Gray-300 | `#E5E7EB` |
| Karta hover border | Primary-400 | `#818CF8` |
| Icon rangi | Primary-600 | `#4F46E5` |
| Icon background | Primary-50 | `#EEF2FF` |
| Kanal / Afzallik nomi | Gray-900 | `#111827` |
| Tavsif matni | Gray-500 | `#6B7280` |
| Bullet / Feature matn | Gray-700 | `#374151` |
| Check icon | Success-500 | `#10B981` |
| Badge background | Warning-50 | `#FFFBEB` |
| Badge matn | Warning-700 | `#D97706` |

---

## Tipografiya xulosa jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Bo'lim sarlavha (H2) | 40px | Bold (700) | `#111827` |
| Bo'lim subtitle | 18px | Regular (400) | `#6B7280` |
| Karta / Kanal sarlavha (H4) | 20px | Semibold (600) | `#111827` |
| Karta tavsif | 16px | Regular (400) | `#6B7280` |
| Feature / Bullet matn | 14px | Regular (400) | `#374151` |
| Afzallik sarlavha | 18px | Semibold (600) | `#111827` |
| Afzallik tavsif | 14px | Regular (400) | `#6B7280` |
| Badge matn | 12px | Medium (500) | `#D97706` |

---

## Spacing xulosa jadvali

| Element | Qiymat |
|---------|--------|
| Integratsiyalar section padding | 96px vertikal |
| Nega Biz section padding | 96px vertikal |
| Sarlavha va subtitle gap | 16px |
| Sarlavha va kartalar gap | 64px |
| Integratsiya kartalar gap | 32px |
| Karta ichki padding | 32px |
| Icon va sarlavha gap | 20px |
| Sarlavha va tavsif gap | 8px |
| Tavsif va features list gap | 16px |
| Feature punktlar gap | 8px |
| Afzalliklar grid gap | 24px |
| Afzallik ichki padding | 24px |
| Check icon va matn gap | 16px |
| Afzallik title va description gap | 4px |
