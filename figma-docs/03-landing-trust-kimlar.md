# CHATFLOW — Landing Page: Trust Bar + Kimlar Uchun

## Umumiy yondashuv
Bu ikki bo'lim Hero sectiondan keyin keladi va foydalanuvchiga ishonch uyg'otish hamda platformaning kim uchun yaratilganligini aniq tushuntirish vazifasini bajaradi. Trust Bar — qisqa, faktlarga asoslangan blok. Kimlar Uchun — platformaning maqsadli foydalanuvchilarini aniq belgilab beruvchi bo'lim.

**Muhim:** Bu bo'limlar vizual jihatdan "yengil" bo'lishi kerak — ortiqcha rang, animatsiya yoki dekoratsiya ishlatilmasin. Mazmun muhim, shakl emas.

---

## 1. TRUST BAR — Raqamlar va ishonch

### Vazifasi
Foydalanuvchiga "boshqalar allaqachon ishlatmoqda" xabarini berish. Ijtimoiy dalil (social proof) orqali ishonchni mustahkamlash. Bu kichik, lekin muhim bo'lim — Hero va Kimlar Uchun o'rtasida ko'prik vazifasini bajaradi.

### Layout va o'lchamlar
- **Joylashuv:** Hero sectiondan keyin, to'liq kenglikda
- **Background:** `#F9FAFB` (Gray-50) — yengil kulrang fon
- **Balandlik:** Auto (kontentga qarab), taxminan 120-180px
- **Max-width:** 1200px (kontent), markazda
- **Padding:** 48px 0 (vertikal), 24px (gorizontal)
- **Border:** Ustidan va pastidan 1px `#E5E7EB` (Gray-300) — ixtiyoriy

### 3 ta variant (Figma'da alohida variantlar sifatida)

---

#### Variant A — Faktlar va raqamlar (Asosiy)

**Tuzilish:** 4 ta metrik gorizontal qatorda, teng taqsimlangan

| Metrik | Raqam | Tavsif |
|--------|-------|--------|
| Aktiv kompaniyalar | **500+** | aktiv kompaniya |
| Kunlik xabarlar | **50,000+** | kunlik xabar |
| Mijoz qoniqishi | **98%** | mijoz qoniqishi |
| O'rtacha javob vaqti | **2 daq** | o'rtacha javob vaqti |

**Har bir metrik kartasi:**
- **Raqam:** 32px, Bold (700), `#111827` (Gray-900)
- **Tavsif:** 14px, Regular (400), `#6B7280` (Gray-500)
- **Layout:** Vertikal stack, markazda tekislangan
- **Gap:** raqam va tavsif orasida 4px
- **Metriklar orasidagi gap:** 64px
- **Ajratgich:** Metriklar orasida vertikal chiziq — 1px, 40px balandlik, `#E5E7EB`

**Figma komponent daraxti:**
```
trust-bar-variant-a/
├── container (auto-layout, horizontal, gap: 64px, center aligned)
│   ├── metric-item-1
│   │   ├── number (text: "500+", 32px Bold, #111827)
│   │   └── label (text: "aktiv kompaniya", 14px Regular, #6B7280)
│   ├── divider (1px x 40px, #E5E7EB)
│   ├── metric-item-2
│   │   ├── number (text: "50,000+", 32px Bold, #111827)
│   │   └── label (text: "kunlik xabar", 14px Regular, #6B7280)
│   ├── divider
│   ├── metric-item-3
│   │   ├── number (text: "98%", 32px Bold, #111827)
│   │   └── label (text: "mijoz qoniqishi", 14px Regular, #6B7280)
│   ├── divider
│   └── metric-item-4
│       ├── number (text: "2 daq", 32px Bold, #111827)
│       └── label (text: "o'rtacha javob vaqti", 14px Regular, #6B7280)
```

---

#### Variant B — Ijtimoiy dalil (Social Proof Quotes)

**Tuzilish:** 3 ta iqtibos gorizontal qatorda

| Iqtibos | Muallif | Lavozim |
|---------|---------|---------|
| "CHATFLOW operatorlar ishini 2 barobar tezlashtirdi. Endi mijozlarga javob berish juda oson." | Aziz Karimov | Support Lead, TechUz |
| "Bitta inbox'da barcha kanallarni boshqarish — bu biz kutgan yechim edi." | Nodira Rahimova | Operations Manager, ShopExpress |
| "Sozlash 5 daqiqa oldi. Jamoamiz bir kunda o'rgandi." | Sardor Toshmatov | CEO, StartupHub |

**Har bir iqtibos kartasi:**
- **Iqtibos matni:** 14px, Regular (400), `#374151` (Gray-700), italic
- **Muallif ismi:** 14px, Semibold (600), `#111827` (Gray-900)
- **Lavozim:** 12px, Regular (400), `#6B7280` (Gray-500)
- **Iqtibos belgisi:** " (ochilish qo'shtirnoq), 24px, `#4F46E5` (Primary), yuqori chapda
- **Karta:** Background: transparent, border yo'q
- **Gap:** iqtiboslar orasida 48px

**Figma komponent daraxti:**
```
trust-bar-variant-b/
├── container (auto-layout, horizontal, gap: 48px, center aligned)
│   ├── quote-card-1
│   │   ├── quote-mark (text: """, 24px, #4F46E5)
│   │   ├── quote-text (14px Regular Italic, #374151)
│   │   └── author-row (auto-layout, horizontal, gap: 8px)
│   │       ├── author-name (14px Semibold, #111827)
│   │       └── author-role (12px Regular, #6B7280)
│   ├── quote-card-2
│   │   └── ... (xuddi shu tuzilish)
│   └── quote-card-3
│       └── ... (xuddi shu tuzilish)
```

---

#### Variant C — Kompaniya logolari

**Tuzilish:** Yuqorida kichik sarlavha + pastda logolar qatori

**Sarlavha matni:**
```
Bizga ishongan kompaniyalar
```
- **Shrift:** 14px, Medium (500), `#6B7280` (Gray-500)
- **Harflar orasidagi masofa:** 0.05em (uppercase uchun)
- **Text-transform:** UPPERCASE
- **Tekislash:** Markazda

**Logolar:**
- 5-6 ta kompaniya logotipi gorizontal qatorda
- **Logo o'lchami:** Har biri max 120px kenglik, 32-40px balandlik
- **Logo rangi:** Grayscale (barcha logolar kulrang, hover'da rangli — ixtiyoriy)
- **Opacity:** 0.5 (default), 0.8 (hover)
- **Gap:** logolar orasida 48px
- **Tekislash:** Gorizontal markazda, vertikal markazda

**Logolar ro'yxati (namuna):**
- TechUz Solutions
- ShopExpress
- EduPlatform
- FinServ.uz
- Datacom Central Asia

**Figma komponent daraxti:**
```
trust-bar-variant-c/
├── container (auto-layout, vertical, gap: 24px, center aligned)
│   ├── label (text: "BIZGA ISHONGAN KOMPANIYALAR", 14px Medium UPPERCASE, #6B7280)
│   └── logos-row (auto-layout, horizontal, gap: 48px, center aligned)
│       ├── logo-1 (image, grayscale, max 120x40px, opacity 0.5)
│       ├── logo-2
│       ├── logo-3
│       ├── logo-4
│       └── logo-5
```

---

### Trust Bar — Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 4 metrik / 3 iqtibos / 5 logo — gorizontal qator |
| **Tablet (768px)** | 4 metrik — 2x2 grid; 3 iqtibos — vertikal stack; logolar — 3+2 qator |
| **Mobile (375px)** | 4 metrik — vertikal stack (markazda); iqtiboslar — karusel (swipe); logolar — 2x3 grid yoki gorizontal scroll |

**Mobile uchun maxsus:**
- Metriklar: Raqam shrifti 28px ga kamayadi
- Padding: 32px 16px
- Gap: 32px (metriklar orasida)
- Divider: yo'qoladi (mobile'da ajratgich ko'rinmaydi)

### Trust Bar — Figma AI uchun prompt

```
Create a trust bar / social proof section for a SaaS platform called CHATFLOW.
Show 4 key metrics in a horizontal row: "500+" active companies, "50,000+" daily messages,
"98%" customer satisfaction, "2 min" average response time.
Each metric: large bold number on top, small gray description below.
Metrics separated by thin vertical dividers.
Background: light gray (#F9FAFB). Font: Inter. Numbers: #111827, descriptions: #6B7280.
Width: 1200px max, centered. Clean, minimal, professional style.
No decorative elements, no icons — just numbers and text.
```

---

## 2. KIMLAR UCHUN — Platforma kimlarga mo'ljallangan

### Vazifasi
Foydalanuvchiga platformaning 3 ta asosiy foydalanuvchi turini ko'rsatish va har birining nima qilishini tushuntirish. Eng muhimi — bu bo'lim orqali "bu platforma mijozlar uchun emas" xabarini aniq yetkazish.

### Layout va o'lchamlar
- **Joylashuv:** Trust Bar dan keyin
- **Background:** `#FFFFFF` (oq)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda
- **Bo'lim umumiy balandligi:** Auto (kontentga qarab), taxminan 500-650px

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Kim uchun yaratilgan?
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda
- **Max-width:** 600px

**Qo'shimcha tavsif (subtitle):**
```
CHATFLOW ichki ishchi panel bo'lib, faqat kompaniya jamoasi a'zolari tomonidan ishlatiladi
```
- **Shrift:** 18px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Max-width:** 560px
- **Margin-top:** 16px

### 3 ta rol kartasi — Gorizontal qator

**Kartalar layout:**
- **Tuzilish:** 3 karta gorizontal qatorda
- **Kartalar orasidagi gap:** 32px
- **Har bir karta kengligi:** teng taqsimlangan (1/3 - gap)
- **Margin-top:** 64px (sarlavhadan keyin)

---

#### Karta 1: Operatorlar

**Icon:** Headset yoki Chat bubble icon
- **Icon o'lchami:** 48px x 48px
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px doira, border-radius: 12px

**Rol nomi:**
```
Operatorlar
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Vazifa ta'rifi:**
```
Mijozlar bilan bevosita suhbatlashadi va muammolarni hal qiladi
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Line-height:** 24px
- **Margin-top:** 8px

**Vazifalar ro'yxati:**
```
- Kiruvchi chatlarni qabul qilish va javob berish
- Tezkor javob shablonlaridan foydalanish
- Suhbatlarni yopish va natija belgilash
```
- **Shrift:** 14px, Regular (400), `#374151`
- **Line-height:** 22px
- **Marker:** `#4F46E5` rangli kichik doira (6px) yoki checkmark
- **Gap:** har bir punkt orasida 8px
- **Margin-top:** 16px

---

#### Karta 2: Menejerlar

**Icon:** Chart bar yoki Eye (monitoring) icon
- **Icon o'lchami:** 48px x 48px
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px, border-radius: 12px

**Rol nomi:**
```
Menejerlar
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Vazifa ta'rifi:**
```
Jamoani nazorat qiladi va samaradorlikni tahlil qiladi
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

**Vazifalar ro'yxati:**
```
- Operatorlar faoliyatini monitoring qilish
- Analytics va hisobotlarni ko'rish
- Chatlarni qayta taqsimlash (reassign)
```
- Uslub: Karta 1 bilan bir xil

---

#### Karta 3: Administratorlar

**Icon:** Settings gear yoki Shield icon
- **Icon o'lchami:** 48px x 48px
- **Icon rangi:** `#4F46E5` (Primary-600)
- **Icon background:** `#EEF2FF` (Primary-50), 48px x 48px, border-radius: 12px

**Rol nomi:**
```
Administratorlar
```
- **Shrift:** 20px, Semibold (600), `#111827`
- **Margin-top:** 20px

**Vazifa ta'rifi:**
```
Tizim sozlamalari va barcha jarayonlarni to'liq boshqaradi
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Margin-top:** 8px

**Vazifalar ro'yxati:**
```
- Workspace va umumiy sozlamalarni boshqarish
- Integratsiyalar va kanallarni ulash
- Billing, obuna va to'lovlarni nazorat qilish
```
- Uslub: Karta 1 bilan bir xil

---

### Karta umumiy uslubi

| Parametr | Qiymat |
|----------|--------|
| **Background** | `#FFFFFF` (White) |
| **Border** | 1px `#E5E7EB` (Gray-300) |
| **Border-radius** | 12px (radius-lg) |
| **Padding** | 32px |
| **Shadow** | `0 1px 2px rgba(0,0,0,0.05)` (shadow-sm) |
| **Hover shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) |
| **Hover transform** | `translateY(-2px)`, transition 200ms ease |
| **Min-height** | 280px |
| **Vertikal tekislash** | Yuqoridan boshlanadi (align: flex-start) |

---

### DIQQAT Bloki — Muhim ogohlantirish

**Joylashuv:** 3 ta karta ostida, 48px margin-top bilan

**Layout:**
- **Kenglik:** To'liq kontent kengligi (1200px max)
- **Background:** `#FFFBEB` (Warning-50) — yengil sariq fon
- **Border:** 1px `#F59E0B` (Warning-500) — chap tomondan 4px qalin border (border-left)
- **Border-radius:** 8px (radius-md)
- **Padding:** 20px 24px
- **Shadow:** yo'q

**Kontent:**

**Sarlavha qatori:**
```
DIQQAT
```
- **Icon:** Alert triangle icon, 20px, `#F59E0B` (Warning-500) — sarlavha oldida
- **Shrift:** 14px, Bold (700), `#92400E` (sariq-qo'ng'ir, warning-dark)
- **Gap:** icon va matn orasida 8px

**Asosiy matn:**
```
Bu platforma mijozlar uchun EMAS. Oddiy foydalanuvchilar platformaga kirmaydi.
Ular faqat saytingizga o'rnatilgan CHAT VIDJETI orqali yozadi.
CHATFLOW — bu faqat sizning ichki jamoangiz (operatorlar, menejerlar, administratorlar) uchun ishchi panel.
```
- **Shrift:** 14px, Regular (400), `#92400E`
- **Line-height:** 22px
- **Margin-top:** 8px
- **"EMAS"** va **"CHAT VIDJETI"** so'zlari Bold (700) bilan ajratilgan

**Figma komponent daraxti:**
```
warning-block/
├── container (auto-layout, vertical, gap: 8px, padding: 20px 24px)
│   ├── header-row (auto-layout, horizontal, gap: 8px, center aligned)
│   │   ├── alert-icon (triangle, 20px, #F59E0B)
│   │   └── title (text: "DIQQAT", 14px Bold, #92400E)
│   └── body-text (14px Regular, #92400E, max-width: 100%)
```

---

### Kimlar Uchun — To'liq Figma komponent daraxti

```
kimlar-uchun-section/
├── section-wrapper (auto-layout, vertical, center aligned, padding: 96px 24px)
│   │
│   ├── section-header (auto-layout, vertical, center aligned, gap: 16px)
│   │   ├── title (text: "Kim uchun yaratilgan?", H2: 40px Bold, #111827, center)
│   │   └── subtitle (text: "CHATFLOW ichki ishchi panel...", 18px Regular, #6B7280, center)
│   │
│   ├── cards-row (auto-layout, horizontal, gap: 32px, margin-top: 64px)
│   │   ├── role-card-1 [Operatorlar]
│   │   │   ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│   │   │   │   └── icon (headset, 24px, #4F46E5)
│   │   │   ├── role-name (text: "Operatorlar", 20px Semibold, #111827)
│   │   │   ├── role-description (text: "Mijozlar bilan bevosita...", 16px Regular, #6B7280)
│   │   │   └── tasks-list (auto-layout, vertical, gap: 8px)
│   │   │       ├── task-item (dot + "Kiruvchi chatlarni qabul qilish...")
│   │   │       ├── task-item (dot + "Tezkor javob shablonlaridan...")
│   │   │       └── task-item (dot + "Suhbatlarni yopish va natija...")
│   │   │
│   │   ├── role-card-2 [Menejerlar]
│   │   │   ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│   │   │   │   └── icon (chart-bar, 24px, #4F46E5)
│   │   │   ├── role-name (text: "Menejerlar", 20px Semibold, #111827)
│   │   │   ├── role-description (text: "Jamoani nazorat qiladi...", 16px Regular, #6B7280)
│   │   │   └── tasks-list (auto-layout, vertical, gap: 8px)
│   │   │       ├── task-item (dot + "Operatorlar faoliyatini monitoring...")
│   │   │       ├── task-item (dot + "Analytics va hisobotlarni ko'rish")
│   │   │       └── task-item (dot + "Chatlarni qayta taqsimlash...")
│   │   │
│   │   └── role-card-3 [Administratorlar]
│   │       ├── icon-wrapper (48x48, #EEF2FF bg, radius: 12px)
│   │       │   └── icon (settings, 24px, #4F46E5)
│   │       ├── role-name (text: "Administratorlar", 20px Semibold, #111827)
│   │       ├── role-description (text: "Tizim sozlamalari...", 16px Regular, #6B7280)
│   │       └── tasks-list (auto-layout, vertical, gap: 8px)
│   │           ├── task-item (dot + "Workspace va umumiy sozlamalarni...")
│   │           ├── task-item (dot + "Integratsiyalar va kanallarni...")
│   │           └── task-item (dot + "Billing, obuna va to'lovlarni...")
│   │
│   └── warning-block (margin-top: 48px)
│       ├── header-row
│       │   ├── alert-icon (triangle, #F59E0B)
│       │   └── title ("DIQQAT", Bold, #92400E)
│       └── body-text ("Bu platforma mijozlar uchun EMAS...", #92400E)
```

---

### Kimlar Uchun — Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 3 karta gorizontal qatorda, 32px gap |
| **Desktop (1024px)** | 3 karta gorizontal, gap 24px ga kamayadi |
| **Tablet (768px)** | 3 karta vertikal stackga o'tadi, har bir karta to'liq kenglik |
| **Mobile (375px)** | 1 ustunli vertikal stack, padding 32px 16px |

**Mobile uchun maxsus o'zgarishlar:**
- Section sarlavha: 32px (H2 o'lchamdan kichikroq), Bold
- Subtitle: 16px
- Kartalar: to'liq kenglik, padding 24px
- Kartalar orasidagi gap: 16px
- Warning block: padding 16px, shrift 13px
- Section padding: 64px 16px

**Tablet uchun maxsus o'zgarishlar:**
- Section sarlavha: 36px
- Kartalar: vertikal stack yoki 2+1 grid
- Kartalar gap: 24px
- Section padding: 80px 24px

---

### Kimlar Uchun — Figma AI uchun prompt

```
Create a "Who is it for?" section for a SaaS customer support platform called CHATFLOW.
Centered title: "Kim uchun yaratilgan?" (H2, 40px Bold, #111827).
Subtitle: "CHATFLOW ichki ishchi panel bo'lib, faqat kompaniya jamoasi a'zolari tomonidan ishlatiladi" (18px, #6B7280).

Below the title, show 3 role cards side by side with equal width:

Card 1 - "Operatorlar": Headset icon in #4F46E5 on #EEF2FF circle background.
Description: "Mijozlar bilan bevosita suhbatlashadi va muammolarni hal qiladi".
3 bullet points about their tasks.

Card 2 - "Menejerlar": Chart icon in #4F46E5 on #EEF2FF circle background.
Description: "Jamoani nazorat qiladi va samaradorlikni tahlil qiladi".
3 bullet points about their tasks.

Card 3 - "Administratorlar": Settings gear icon in #4F46E5 on #EEF2FF circle background.
Description: "Tizim sozlamalari va barcha jarayonlarni to'liq boshqaradi".
3 bullet points about their tasks.

Each card: white background, 1px #E5E7EB border, 12px radius, 32px padding, subtle shadow.

Below the cards, add a warning block with light yellow background (#FFFBEB),
left border 4px #F59E0B, alert triangle icon, and text in Uzbek explaining
that this platform is NOT for end customers — they only interact via the chat widget on the website.

Style: Clean, modern, professional. Font: Inter. Desktop width: 1200px max.
White section background, 96px vertical padding.
```

---

### Rang xulosa jadvali — Trust Bar + Kimlar Uchun

| Element | Rang | Hex |
|---------|------|-----|
| Trust Bar background | Gray-50 | `#F9FAFB` |
| Metrik raqamlari | Gray-900 | `#111827` |
| Metrik tavsifi | Gray-500 | `#6B7280` |
| Ajratgich (divider) | Gray-300 | `#E5E7EB` |
| Bo'lim sarlavhasi | Gray-900 | `#111827` |
| Bo'lim subtitle | Gray-500 | `#6B7280` |
| Karta background | White | `#FFFFFF` |
| Karta border | Gray-300 | `#E5E7EB` |
| Icon rangi | Primary-600 | `#4F46E5` |
| Icon background | Primary-50 | `#EEF2FF` |
| Rol nomi | Gray-900 | `#111827` |
| Vazifa tavsifi | Gray-500 | `#6B7280` |
| Bullet matn | Gray-700 | `#374151` |
| Bullet marker | Primary-600 | `#4F46E5` |
| Warning background | Warning-50 | `#FFFBEB` |
| Warning border | Warning-500 | `#F59E0B` |
| Warning matn | Warning dark | `#92400E` |

---

### Tipografiya xulosa jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Metrik raqam | 32px | Bold (700) | `#111827` |
| Metrik label | 14px | Regular (400) | `#6B7280` |
| Bo'lim sarlavha (H2) | 40px | Bold (700) | `#111827` |
| Bo'lim subtitle | 18px | Regular (400) | `#6B7280` |
| Karta sarlavha (H4) | 20px | Semibold (600) | `#111827` |
| Karta tavsif | 16px | Regular (400) | `#6B7280` |
| Bullet matn | 14px | Regular (400) | `#374151` |
| Warning sarlavha | 14px | Bold (700) | `#92400E` |
| Warning matn | 14px | Regular (400) | `#92400E` |
| Iqtibos matni | 14px | Regular Italic (400) | `#374151` |
| Iqtibos muallif | 14px | Semibold (600) | `#111827` |
| Logo section label | 14px | Medium (500) UPPERCASE | `#6B7280` |

---

### Spacing xulosa jadvali

| Element | Qiymat |
|---------|--------|
| Trust Bar vertikal padding | 48px |
| Trust Bar metriklar gap | 64px |
| Kimlar Uchun section padding | 96px vertikal |
| Sarlavha va subtitle gap | 16px |
| Sarlavha va kartalar gap | 64px |
| Kartalar orasidagi gap | 32px |
| Karta ichki padding | 32px |
| Icon va rol nomi gap | 20px |
| Rol nomi va tavsif gap | 8px |
| Tavsif va bullet list gap | 16px |
| Bullet punktlar orasidagi gap | 8px |
| Kartalar va warning blok gap | 48px |
| Warning ichki padding | 20px 24px |
