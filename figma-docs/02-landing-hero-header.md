# CHATFLOW — Landing Page: Header + Hero Section

## Umumiy yondashuv
Landing page — bitta uzun scroll sahifa. Yuqoridan pastga tabiiy oqimda qurilgan. Foydalanuvchi sahifani o'qib turib, o'z-o'zidan platformani tushunib boradi. Har bir bo'lim oldingi bo'limdan mantiqiy davom etadi.

**Muhim:** Bu sahifa marketing landing emas — bu professional tool uchun mahsulot sahifasi. Maqsad — sotish emas, to'g'ri odamlarni to'g'ri tushuncha bilan platformaga olib kelish.

---

## 1. HEADER — Yo'l ko'rsatuvchi navigatsiya

### Vazifasi
Sahifani boshqarish, lekin e'tiborni o'ziga tortmaslik. Toza, minimal dizayn.

### Xususiyatlar
- **Sticky:** Scroll qilganda yuqorida qoladi
- **Background:** White (`#FFFFFF`), pastki border: 1px `#E5E7EB`
- **Scroll holatida:** `backdrop-filter: blur(8px)`, background: `rgba(255,255,255,0.95)`
- **Balandlik:** 72px
- **Max-width:** 1200px (markazda)
- **Z-index:** 100 (barcha elementlar ustida)

### Tarkibi (chapdan o'ngga)

#### Chap tomon
| Element | Tavsif |
|---------|--------|
| **Logo** | CHATFLOW brend logotipi, bosh sahifaga qaytish uchun link. O'lcham: ~140px kenglik, 32px balandlik |

#### O'rta qism (Navigatsiya)
| Link | Bosilganda |
|------|-----------|
| Imkoniyatlar | Funksiyalar ro'yxatiga scroll |
| Integratsiyalar | Qo'llab-quvvatlanadigan kanallar bo'limiga scroll |
| Tariflar | Narx va rejalar bo'limiga scroll |
| Haqimizda | Kompaniya haqida ma'lumot bo'limiga scroll |
| Bog'lanish | Kontakt forma sahifasiga link |

**Nav link uslubi:**
- Font: 14px Medium, rang: `#374151`
- Hover: rang `#4F46E5`
- Active: rang `#4F46E5`, pastki chiziq (2px)

#### O'ng tomon
| Element | Uslub | Vazifa |
|---------|-------|--------|
| **Kirish** | Ghost button (matn, border yo'q) | Mavjud foydalanuvchilar uchun login sahifasiga |
| **Boshlash** | Primary button (`#4F46E5`, oq matn) | Yangi foydalanuvchilar uchun signup sahifasiga |
| **Demo so'rash** | Outline button (ixtiyoriy) | Korporativ mijozlar uchun demo form |

### Mobil holat (< 768px)
- Logo chap tomonda
- Hamburger menu (☰) o'ng tomonda
- Menu ochilganda: to'liq ekran overlay, vertikal nav linklar
- Animatsiya: slide-down, 300ms

### Figma uchun komponentlar
```
header/
├── logo (image/svg)
├── nav-links (auto-layout, horizontal, gap: 32px)
│   ├── nav-link (5 variant: default, hover, active)
├── actions (auto-layout, horizontal, gap: 12px)
│   ├── btn-ghost ("Kirish")
│   ├── btn-primary ("Boshlash")
│   └── btn-outline ("Demo so'rash") — optional
└── mobile-menu-trigger (hamburger icon)
```

---

## 2. HERO SECTION — Bir qarashda tushunarlik

### Vazifasi
3-5 soniya ichida foydalanuvchi platformaning mohiyatini anglashi kerak. Bu sahifaning eng muhim bo'limi.

### Layout
- **Tuzilish:** 2 ustunli — 50/50 yoki 55/45 (matn/vizual)
- **Balandlik:** Ekranning 85-95% qoplashi kerak (min-height: calc(100vh - 72px))
- **Background:** Oq yoki juda yengil gradient (`#F9FAFB` → `#FFFFFF`)
- **Max-width:** 1200px, markazda
- **Vertikal tekislash:** Markazda (align-items: center)

### Chap tomon — Matn kontenti

#### Asosiy sarlavha (H1)
```
Barcha mijoz yozishmalarini
bitta joyda boshqaring
```
- **Shrift:** 56px, Bold (700), `#111827`
- **Line-height:** 64px
- **Letter-spacing:** -0.02em
- **Max-width:** 560px

#### Qisqa tavsif (subtitle)
```
CHATFLOW — mijozlar bilan aloqani markazlashtiruvchi platforma.
Saytingizdagi chat, email va boshqa kanallar bitta inbox'da.
```
- **Shrift:** 18px, Regular (400), `#6B7280`
- **Line-height:** 28px
- **Max-width:** 480px
- **Margin-top:** 20px

#### CTA tugmalar
| Tugma | Uslub | Matn | O'lcham |
|-------|-------|------|---------|
| **Primary** | Primary button, katta | "Bepul boshlash" | 52px height, 24px 40px padding |
| **Secondary** | Outline button, katta | "Demo ko'rish" | 52px height |

- **Tugmalar orasidagi gap:** 16px
- **Margin-top:** 32px
- **Horizontal layout** (yonma-yon)

#### Ishonch elementlari (sub-CTA)
```
✓ Kredit karta talab qilinmaydi    ✓ 2 daqiqada sozlanadi
```
- **Shrift:** 14px, Regular, `#6B7280`
- **Icon:** Checkmark, `#10B981`
- **Margin-top:** 16px
- **Layout:** Horizontal, gap: 24px

### O'ng tomon — Vizual kontent

#### Real mahsulot interfeysi tasviri
Bu yerda platformaning haqiqiy interfeysi ko'rsatiladi — kontseptual tasvir **EMAS**.

**Variantlar (biri tanlanadi):**

**Variant A — Yagona Inbox ko'rinishi:**
- Chat ro'yxati (chap) + ochiq chat oynasi (o'ng)
- 3-4 ta namuna chat cardlar
- 1 ta ochiq suhbat (operator-mijoz)
- Status indikatorlari (online/offline)

**Variant B — Dashboard overview:**
- Sidebar + header + main content
- Metric cardlar + chat list snippet

**Tasvir uslubi:**
- **Ramka:** Rounded (border-radius: 16px)
- **Shadow:** shadow-xl
- **Burchak:** Biroz burilgan (rotate: 2-3deg) — ixtiyoriy
- **Background:** Yengil gradient yoki dots pattern
- **O'lcham:** ~600px kenglik, aspekt ratio saqlangan

### Dekorativ elementlar (ixtiyoriy)
- Orqa fonda yengil geometric shapes (doiralar, to'rtburchaklar)
- Rang: Primary-100 yoki Primary-50, opacity 30-50%
- Joylashuv: Vizual tasvir orqasida

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| Desktop (1440px) | 2 ustun, 50/50 layout |
| Tablet (768px) | 1 ustun, matn ustida → tasvir pastda |
| Mobile (375px) | 1 ustun, kichikroq shriftlar (H1: 36px), CTA vertikal stack |

### Figma uchun komponentlar
```
hero-section/
├── content (auto-layout, horizontal, gap: 64px)
│   ├── text-side (auto-layout, vertical, gap: 0)
│   │   ├── heading-h1
│   │   ├── subtitle (margin-top: 20px)
│   │   ├── cta-buttons (margin-top: 32px, horizontal, gap: 16px)
│   │   │   ├── btn-primary-lg ("Bepul boshlash")
│   │   │   └── btn-outline-lg ("Demo ko'rish")
│   │   └── trust-points (margin-top: 16px, horizontal, gap: 24px)
│   │       ├── trust-item ("✓ Kredit karta talab qilinmaydi")
│   │       └── trust-item ("✓ 2 daqiqada sozlanadi")
│   └── visual-side
│       └── product-screenshot (frame, shadow-xl, radius-xl)
├── decorative-elements (optional, absolute positioned)
```

### Figma AI uchun prompt ko'rsatmasi
```
Create a SaaS hero section for a customer support platform called CHATFLOW.
Left side: Large heading "Barcha mijoz yozishmalarini bitta joyda boshqaring",
subtitle text, two CTA buttons (primary "Bepul boshlash" and outline "Demo ko'rish"),
and trust checkmarks below.
Right side: A realistic product screenshot showing a chat inbox interface
with conversation list on left and active chat on right.
Style: Clean, modern, professional. Colors: Primary #4F46E5, text #111827.
Desktop width: 1440px. Font: Inter.
```
