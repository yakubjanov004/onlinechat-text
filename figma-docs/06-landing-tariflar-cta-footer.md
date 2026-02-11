# CHATFLOW — Landing Page: Tariflar + Final CTA + Footer

## Umumiy yondashuv
Bu uchta bo'lim landing sahifaning yakuniy qismini tashkil etadi. Tariflar bo'limi foydalanuvchiga mos rejani tanlashga yordam beradi. Final CTA — butun sahifaning mantiqiy yakuni, harakatga undovchi blok. Footer esa qo'shimcha havolalar va huquqiy ma'lumotlarni o'z ichiga oladi. Uchala bo'lim birgalikda "tushundim, boshlayman" hissini yaratishi kerak.

**Muhim:** Bu sahifa marketing landing emas — bu professional tool uchun mahsulot sahifasi. Tariflar bo'limi ortiqcha mubolag'asiz, aniq va tushunarli bo'lishi kerak. CTA kuchli, lekin bosimli emas.

---

## 1. TARIFLAR — Sizga mos tarif rejasini tanlang

### Vazifasi
Foydalanuvchiga 3 ta aniq rejani ko'rsatish va har biri kimga mo'ljallanganligini tushuntirish. Pro reja "Mashhur" badge bilan ajralib turishi kerak. Maqsad — foydalanuvchini bosqichma-bosqich to'g'ri rejaga yo'naltirish.

### Layout va o'lchamlar
- **Joylashuv:** Nega Aynan Biz bo'limidan keyin
- **Background:** `#FFFFFF` (oq)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** 1200px, markazda
- **Bo'lim umumiy balandligi:** Auto (kontentga qarab), taxminan 700-850px

### Bo'lim sarlavhasi

**Sarlavha matni:**
```
Sizga mos tarif rejasini tanlang
```
- **Shrift:** 40px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda
- **Max-width:** 600px

**Qo'shimcha tavsif (subtitle):**
```
Barcha rejalarda 14 kunlik bepul sinov. Kredit karta talab qilinmaydi.
```
- **Shrift:** 18px, Regular (400), `#6B7280` (Gray-500)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Max-width:** 560px
- **Margin-top:** 16px

### 3 ta tarif kartasi — Gorizontal qator

**Kartalar layout:**
- **Tuzilish:** 4 karta gorizontal qatorda (desktop), 2×2 grid (tablet), 1 ustma-ust (mobile)
- **Kartalar orasidagi gap:** 24px
- **Har bir karta kengligi:** teng taqsimlangan (1/4 - gap), taxminan 276px (desktop)
- **Margin-top:** 64px (sarlavhadan keyin)
- **Pro karta:** vertikal jihatdan boshqalardan 8px yuqori ko'tarilgan (translateY(-8px))

---

#### Karta 1: Free — Sinov rejasi

**Karta holati:** Oddiy (featured emas)

**Reja nomi:**
```
Free
```
- **Shrift:** 24px, Bold (700), `#111827` (Gray-900)
- **Margin-top:** 0 (karta padding ichida)

**Reja tavsifi:**
```
14 kunlik sinov
```
- **Shrift:** 14px, Regular (400), `#6B7280` (Gray-500)
- **Margin-top:** 4px

**Narx:**
```
$0
```
- **Shrift:** 48px, Bold (700), `#111827` (Gray-900)
- **Line-height:** 56px
- **Margin-top:** 24px

**Narx izoh:**
```
/oy
```
- **Shrift:** 16px, Regular (400), `#6B7280`
- **Joylashuv:** Narx yonida, pastki chiziqqa tekislangan (baseline)

**Ajratgich:**
- 1px `#E5E7EB` (Gray-300), to'liq kenglik
- **Margin:** 24px 0

**Imkoniyatlar ro'yxati:**
```
- 1 operator
- 100 chat/oy
- Chat vidjeti
- Asosiy statistika
- Email qo'llab-quvvatlash
```
- **Shrift:** 14px, Regular (400), `#374151` (Gray-700)
- **Line-height:** 22px
- **Marker:** Checkmark icon, 16px, `#10B981` (Success-500)
- **Gap:** har bir punkt orasida 12px
- **Margin-top:** 0 (ajratgichdan keyin)

**CTA tugma:**
```
Bepul boshlash
```
- **Uslub:** Outline button
- **Background:** transparent
- **Border:** 1px `#4F46E5` (Primary-600)
- **Matn rangi:** `#4F46E5` (Primary-600)
- **Shrift:** 16px, Semibold (600)
- **Balandlik:** 44px
- **Border-radius:** 8px (radius-md)
- **Kenglik:** to'liq (100%)
- **Margin-top:** 24px
- **Hover:** Background `#EEF2FF` (Primary-50)

---

#### Karta 2: Pro — Mashhur reja (Featured)

**Karta holati:** Featured (ajralib turadi)

**"Mashhur" badge:**
- **Joylashuv:** Karta yuqori qismida, reja nomi ustida
- **Background:** `#E0E7FF` (Primary-100)
- **Matn rangi:** `#4F46E5` (Primary-600)
- **Matn:** "Mashhur"
- **Shrift:** 12px, Semibold (600)
- **Padding:** 4px 12px
- **Border-radius:** 9999px (pill shape)
- **Tekislash:** Markazda yoki chapda

**Reja nomi:**
```
Pro
```
- **Shrift:** 24px, Bold (700), `#111827`
- **Margin-top:** 16px (badge dan keyin)

**Reja tavsifi:**
```
Kichik va o'rta bizneslar uchun
```
- **Shrift:** 14px, Regular (400), `#6B7280`
- **Margin-top:** 4px

**Narx:**
```
$29
```
- **Shrift:** 48px, Bold (700), `#111827`
- **Line-height:** 56px
- **Margin-top:** 24px

**Narx izoh:**
```
/oy, har bir operator uchun
```
- **Shrift:** 16px, Regular (400), `#6B7280`

**Ajratgich:**
- 1px `#E5E7EB`, to'liq kenglik
- **Margin:** 24px 0

**Imkoniyatlar ro'yxati:**
```
- 5 tagacha operator
- Cheksiz chat
- Chat vidjeti + Email
- To'liq analytics
- Avtomatik javoblar
- Prioritet qo'llab-quvvatlash
```
- Uslub: Free karta bilan bir xil
- **Qo'shimcha:** "Cheksiz chat" matni **Bold** bilan ajratilgan

**CTA tugma:**
```
Rejani tanlash
```
- **Uslub:** Primary button
- **Background:** `#4F46E5` (Primary-600)
- **Matn rangi:** `#FFFFFF` (White)
- **Shrift:** 16px, Semibold (600)
- **Balandlik:** 44px
- **Border-radius:** 8px
- **Kenglik:** to'liq (100%)
- **Margin-top:** 24px
- **Hover:** Background `#6366F1` (Primary-500)
- **Shadow:** `0 4px 6px -1px rgba(79, 70, 229, 0.3)` (primary shadow)

---

#### Karta 3: Business — O'sib borayotgan kompaniyalar uchun

**Karta holati:** Oddiy (featured emas)

**Reja nomi:**
```
Business
```
- **Shrift:** 24px, Bold (700), `#111827`

**Reja tavsifi:**
```
O'sib borayotgan kompaniyalar uchun
```
- **Shrift:** 14px, Regular (400), `#6B7280`
- **Margin-top:** 4px

**Narx:**
```
$59
```
- **Shrift:** 48px, Bold (700), `#111827`
- **Line-height:** 56px
- **Margin-top:** 24px

**Narx izoh:**
```
/oy, minimal 10 operator
```
- **Shrift:** 16px, Regular (400), `#6B7280`

**Ajratgich:**
- 1px `#E5E7EB`, to'liq kenglik
- **Margin:** 24px 0

**Imkoniyatlar ro'yxati:**
```
- 10 tagacha operator
- Cheksiz chat
- Barcha kanallar
- Advanced automation
- Priority support
- CRM integratsiya
- White-label (branding olib tashlash)
- SSO (Single Sign-On)
```
- Uslub: Free karta bilan bir xil
- **Qo'shimcha:** "Priority support" va "Advanced automation" matni **Medium** bilan ajratilgan

**CTA tugma:**
```
Rejani tanlash
```
- **Uslub:** Primary button (Pro bilan bir xil)
- **Margin-top:** 24px
- **Kenglik:** to'liq (100%)

---

#### Karta 4: Enterprise — Maxsus reja

**Karta holati:** Oddiy (featured emas)

**Reja nomi:**
```
Enterprise
```
- **Shrift:** 24px, Bold (700), `#111827`

**Reja tavsifi:**
```
Katta kompaniyalar uchun
```
- **Shrift:** 14px, Regular (400), `#6B7280`
- **Margin-top:** 4px

**Narx:**
```
Maxsus
```
- **Shrift:** 48px, Bold (700), `#111827`
- **Line-height:** 56px
- **Margin-top:** 24px

**Narx izoh:**
```
Kompaniya talabiga qarab
```
- **Shrift:** 16px, Regular (400), `#6B7280`

**Ajratgich:**
- 1px `#E5E7EB`, to'liq kenglik
- **Margin:** 24px 0

**Imkoniyatlar ro'yxati:**
```
- Cheksiz operator
- Cheksiz chat
- Barcha kanallar
- Maxsus integratsiyalar
- Shaxsiy menejer
- SLA kafolati
- API kirish
```
- Uslub: Free karta bilan bir xil

**CTA tugma:**
```
Bog'lanish
```
- **Uslub:** Outline button (Free karta bilan bir xil uslub)
- **Margin-top:** 24px
- **Kenglik:** to'liq (100%)

---

### Tarif kartasi umumiy uslubi

| Parametr | Qiymat (Oddiy) | Qiymat (Featured — Pro) |
|----------|----------------|------------------------|
| **Kenglik** | teng taqsimlangan, ~276px | ~276px |
| **Background** | `#FFFFFF` (White) | `#FFFFFF` (White) |
| **Border** | 1px `#E5E7EB` (Gray-300) | 2px `#4F46E5` (Primary-600) |
| **Border-radius** | 16px (radius-xl) | 16px (radius-xl) |
| **Padding** | 32px | 32px |
| **Shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` (shadow-md) | `0 10px 15px -3px rgba(0,0,0,0.1)` (shadow-lg) |
| **Hover shadow** | `0 10px 15px -3px rgba(0,0,0,0.1)` | `0 20px 25px -5px rgba(0,0,0,0.1)` (shadow-xl) |
| **Hover transform** | `translateY(-2px)`, 200ms | `translateY(-4px)`, 200ms |
| **Vertikal offset** | 0 | `translateY(-8px)` (biroz yuqori ko'tarilgan) |
| **Min-height** | 480px | 520px |

---

### Tariflar ostidagi eslatma

**Joylashuv:** 4 ta karta ostida, 32px margin-top
```
Barcha rejalarda 14 kunlik bepul sinov. Istalgan vaqt bekor qilishingiz mumkin.
```
- **Shrift:** 14px, Regular (400), `#6B7280`
- **Tekislash:** Markazda
- **Icon:** Info circle, 16px, `#6B7280`, matn oldida

---

### ASCII wireframe (Desktop)
```
                  [ Sizga mos tarif rejasini tanlang ]
           [ Barcha rejalarda 14 kunlik bepul sinov... ]

┌──────────┐  ┌────────────┐  ┌──────────┐  ┌──────────┐
│          │  │ [Mashhur]  │  │          │  │          │
│  Free    │  │            │  │ Business │  │Enterprise│
│ 14 kunlik│  │    Pro     │  │ O'sib    │  │  Katta   │
│  sinov   │  │  Kichik va │  │ borayotgan│  │kompaniya │
│          │  │  o'rta     │  │ kompaniya│  │          │
│ $0 /oy   │  │  biznes    │  │          │  │          │
│          │  │            │  │ $59 /oy  │  │ Maxsus   │
│─────────│  │ $29 /oy    │  │          │  │          │
│✓1 operator│  │            │  │─────────│  │─────────│
│✓100 chat │  │───────────│  │✓10 operator│ │✓Cheksiz │
│✓Chat     │  │✓5 operator │  │✓Cheksiz  │  │ operator │
│ vidjeti  │  │✓Cheksiz    │  │ chat     │  │✓Cheksiz  │
│✓Asosiy   │  │ chat       │  │✓Barcha   │  │ chat     │
│ statistika│  │✓Chat+Email │  │ kanallar │  │✓Barcha   │
│          │  │✓To'liq     │  │✓Advanced │  │ kanallar │
│[Bepul    │  │ analytics  │  │ autom.   │  │✓Maxsus   │
│ boshlash]│  │✓Avtomatik  │  │✓Priority │  │ integr.  │
│          │  │ javoblar   │  │ support  │  │✓Shaxsiy  │
│          │  │✓Priority   │  │✓CRM      │  │ menejer  │
│          │  │ support    │  │✓White-   │  │✓SLA      │
│          │  │            │  │ label    │  │ kafolati │
│          │  │[Rejani     │  │✓SSO      │  │✓API      │
│          │  │ tanlash]   │  │          │  │ kirish   │
│          │  │            │  │[Rejani   │  │          │
│          │  │            │  │ tanlash] │  │[Bog'lan.]│
└──────────┘  └────────────┘  └──────────┘  └──────────┘
│   14 kunlik  │  │     Pro        │  │  Katta       │
│    sinov     │  │  Kichik va     │  │  kompaniyalar│
│              │  │  o'rta biznes  │  │  uchun       │
│    $0 /oy    │  │                │  │              │
│              │  │   $29 /oy      │  │   Maxsus     │
│ ───────────  │  │                │  │              │
│ ✓ 1 operator │  │ ───────────── │  │ ───────────  │
│ ✓ 100 chat   │  │ ✓ 5 operator  │  │ ✓ Cheksiz    │
│ ✓ Chat vidjeti│  │ ✓ Cheksiz chat│  │   operator   │
│ ✓ Asosiy stat│  │ ✓ Chat+Email  │  │ ✓ Cheksiz    │
│ ✓ Email      │  │ ✓ Analytics   │  │   chat       │
│   support    │  │ ✓ Avtomatik   │  │ ✓ Barcha     │
│              │  │   javoblar    │  │   kanallar   │
│              │  │ ✓ Prioritet   │  │ ✓ Maxsus     │
│              │  │   support     │  │   integrats. │
│              │  │               │  │ ✓ Shaxsiy    │
│              │  │               │  │   menejer    │
│ [Bepul bosh- │  │               │  │ ✓ SLA + API  │
│   lash]      │  │ [Rejani       │  │              │
│  (outline)   │  │  tanlash]     │  │ [Bog'lanish] │
│              │  │  (primary)    │  │  (outline)   │
└──────────────┘  └────────────────┘  └──────────────┘

         ℹ Barcha rejalarda 14 kunlik bepul sinov.
```

### ASCII wireframe (Mobile)
```
[ Sizga mos tarif rejasini tanlang ]
[ Barcha rejalarda 14 kunlik ... ]

┌──────────────────────────────┐
│        [Mashhur]             │
│          Pro                 │
│   Kichik va o'rta bizneslar  │
│        $29 /oy               │
│ ──────────────────────────── │
│ ✓ 5 tagacha operator        │
│ ✓ Cheksiz chat              │
│ ✓ Chat vidjeti + Email      │
│ ✓ To'liq analytics          │
│ ✓ Avtomatik javoblar        │
│ ✓ Prioritet support         │
│                              │
│     [Rejani tanlash]         │
│      (primary, 100%)         │
└──────────────────────────────┘

┌──────────────────────────────┐
│          Free                │
│      14 kunlik sinov         │
│         $0 /oy               │
│ ──────────────────────────── │
│ ✓ 1 operator                │
│ ✓ 100 chat/oy               │
│ ✓ Chat vidjeti              │
│ ✓ Asosiy statistika         │
│ ✓ Email support             │
│                              │
│     [Bepul boshlash]         │
│      (outline, 100%)         │
└──────────────────────────────┘

┌──────────────────────────────┐
│        Enterprise            │
│   Katta kompaniyalar uchun   │
│         Maxsus               │
│ ──────────────────────────── │
│ ✓ Cheksiz operator          │
│ ✓ Cheksiz chat              │
│ ✓ Barcha kanallar           │
│ ✓ Maxsus integratsiyalar    │
│ ✓ Shaxsiy menejer           │
│ ✓ SLA kafolati              │
│ ✓ API kirish                │
│                              │
│      [Bog'lanish]            │
│      (outline, 100%)         │
└──────────────────────────────┘
```

**Mobile eslatma:** Mobile da Pro karta birinchi ko'rsatiladi (tartib: Pro -> Free -> Enterprise), chunki u eng ko'p tanlanadigan reja.

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 3 karta gorizontal qatorda, 24px gap, Pro karta 2px border + shadow-lg + translateY(-8px) |
| **Desktop (1024px)** | 3 karta gorizontal, gap 20px, kartalar kengligi moslashadi |
| **Tablet (768px)** | Pro karta to'liq kenglik yuqorida, Free va Enterprise pastda 2 ustunda yoki barcha vertikal |
| **Mobile (375px)** | 1 ustunli vertikal stack (Pro -> Free -> Enterprise tartibda), kartalar full-width, padding 32px 16px |

**Mobile uchun maxsus o'zgarishlar:**
- Section sarlavha: 32px Bold
- Subtitle: 16px
- Kartalar: to'liq kenglik, padding 24px
- Kartalar orasidagi gap: 16px
- Section padding: 64px 16px
- Narx shrifti: 40px (48px dan kichikroq)
- Pro karta translateY yo'qoladi (barcha kartalar bir tekislikda)

**Tablet uchun maxsus o'zgarishlar:**
- Section sarlavha: 36px
- Kartalar gap: 20px
- Section padding: 80px 24px
- Pro karta yuqorida birinchi bo'lib ko'rsatiladi

---

### Tariflar — To'liq Figma komponent daraxti

```
pricing-section/
├── section-wrapper (auto-layout, vertical, center aligned, padding: 96px 24px)
│   │
│   ├── section-header (auto-layout, vertical, center aligned, gap: 16px)
│   │   ├── title (text: "Sizga mos tarif rejasini tanlang", H2: 40px Bold, #111827, center)
│   │   └── subtitle (text: "Barcha rejalarda 14 kunlik bepul sinov...", 18px Regular, #6B7280, center)
│   │
│   ├── pricing-cards-row (auto-layout, horizontal, gap: 24px, margin-top: 64px, center aligned)
│   │   │
│   │   ├── pricing-card-free [Free]
│   │   │   ├── plan-name (text: "Free", 24px Bold, #111827)
│   │   │   ├── plan-description (text: "14 kunlik sinov", 14px Regular, #6B7280)
│   │   │   ├── price-row (auto-layout, horizontal, baseline aligned)
│   │   │   │   ├── price-amount (text: "$0", 48px Bold, #111827)
│   │   │   │   └── price-period (text: "/oy", 16px Regular, #6B7280)
│   │   │   ├── divider (1px, #E5E7EB, full width, margin: 24px 0)
│   │   │   ├── features-list (auto-layout, vertical, gap: 12px)
│   │   │   │   ├── feature-item (check + "1 operator")
│   │   │   │   ├── feature-item (check + "100 chat/oy")
│   │   │   │   ├── feature-item (check + "Chat vidjeti")
│   │   │   │   ├── feature-item (check + "Asosiy statistika")
│   │   │   │   └── feature-item (check + "Email qo'llab-quvvatlash")
│   │   │   └── cta-button (text: "Bepul boshlash", outline, full-width, margin-top: 24px)
│   │   │
│   │   ├── pricing-card-pro [Pro — Featured]
│   │   │   ├── badge-popular (text: "Mashhur", 12px Semibold, #4F46E5, #E0E7FF bg, pill)
│   │   │   ├── plan-name (text: "Pro", 24px Bold, #111827, margin-top: 16px)
│   │   │   ├── plan-description (text: "Kichik va o'rta bizneslar uchun", 14px Regular, #6B7280)
│   │   │   ├── price-row (auto-layout, horizontal, baseline aligned)
│   │   │   │   ├── price-amount (text: "$29", 48px Bold, #111827)
│   │   │   │   └── price-period (text: "/oy, har bir operator uchun", 16px Regular, #6B7280)
│   │   │   ├── divider (1px, #E5E7EB, full width, margin: 24px 0)
│   │   │   ├── features-list (auto-layout, vertical, gap: 12px)
│   │   │   │   ├── feature-item (check + "5 tagacha operator")
│   │   │   │   ├── feature-item (check + "Cheksiz chat" — bold)
│   │   │   │   ├── feature-item (check + "Chat vidjeti + Email")
│   │   │   │   ├── feature-item (check + "To'liq analytics")
│   │   │   │   ├── feature-item (check + "Avtomatik javoblar")
│   │   │   │   └── feature-item (check + "Prioritet qo'llab-quvvatlash")
│   │   │   └── cta-button (text: "Rejani tanlash", primary, full-width, margin-top: 24px)
│   │   │
│   │   └── pricing-card-enterprise [Enterprise]
│   │       ├── plan-name (text: "Enterprise", 24px Bold, #111827)
│   │       ├── plan-description (text: "Katta kompaniyalar uchun", 14px Regular, #6B7280)
│   │       ├── price-row
│   │       │   ├── price-amount (text: "Maxsus", 48px Bold, #111827)
│   │       │   └── price-period (text: "Kompaniya talabiga qarab", 16px Regular, #6B7280)
│   │       ├── divider
│   │       ├── features-list (auto-layout, vertical, gap: 12px)
│   │       │   ├── feature-item (check + "Cheksiz operator")
│   │       │   ├── feature-item (check + "Cheksiz chat")
│   │       │   ├── feature-item (check + "Barcha kanallar")
│   │       │   ├── feature-item (check + "Maxsus integratsiyalar")
│   │       │   ├── feature-item (check + "Shaxsiy menejer")
│   │       │   ├── feature-item (check + "SLA kafolati")
│   │       │   └── feature-item (check + "API kirish")
│   │       └── cta-button (text: "Bog'lanish", outline, full-width, margin-top: 24px)
│   │
│   └── pricing-note (text: "Barcha rejalarda 14 kunlik bepul sinov...", 14px Regular, #6B7280, center, margin-top: 32px)
```

### Tariflar — Figma AI uchun prompt

```
Create a pricing section for a SaaS customer support platform called CHATFLOW.
White background, 96px vertical padding.
Centered title: "Sizga mos tarif rejasini tanlang" (H2, 40px Bold, #111827).
Subtitle: "Barcha rejalarda 14 kunlik bepul sinov. Kredit karta talab qilinmaydi." (18px, #6B7280).

Show 3 pricing cards side by side, 24px gap:

Card 1 - "Free": $0/month. 14-day trial. Features: 1 operator, 100 chats/month,
chat widget, basic stats, email support. Outline CTA button "Bepul boshlash".
Normal card: 1px #E5E7EB border, 16px radius, 32px padding, shadow-md.

Card 2 - "Pro" (Featured): "Mashhur" badge (#E0E7FF bg, #4F46E5 text, pill shape).
$29/month per operator. Features: 5 operators, unlimited chats, widget + email,
full analytics, auto-replies, priority support. Primary CTA button "Rejani tanlash"
(#4F46E5 bg, white text). Card has 2px #4F46E5 border, shadow-lg, slightly elevated
(translateY -8px).

Card 3 - "Enterprise": Custom pricing. Features: unlimited operators, unlimited chats,
all channels, custom integrations, dedicated manager, SLA guarantee, API access.
Outline CTA button "Bog'lanish".

Below cards: note "Barcha rejalarda 14 kunlik bepul sinov" centered.
Style: Clean, modern, professional SaaS. Font: Inter. Desktop width: 1200px max.
```

---

## 2. FINAL CTA — Mijozlaringiz bilan muloqotni bugun yaxshilang

### Vazifasi
Butun sahifani o'qib chiqqan foydalanuvchini yakuniy harakatga undash. Bu sahifaning eng kuchli "chaqiruv" bo'limi — vizual jihatdan ajralib turishi va "boshlayman" hissini yaratishi kerak. Lekin bosimli emas — professional va ishonchli.

### Layout va o'lchamlar
- **Joylashuv:** Tariflar bo'limidan keyin
- **Background:** Gradient — `linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)` (Primary to Purple)
- **Padding:** 96px 0 (vertikal), 24px (gorizontal)
- **Max-width:** To'liq kenglik (100vw), kontent 800px max, markazda
- **Tekislash:** Barcha elementlar markazda
- **Bo'lim umumiy balandligi:** Auto, taxminan 360-440px

### Sarlavha

**Sarlavha matni:**
```
Mijozlaringiz bilan muloqotni bugun yaxshilang
```
- **Shrift:** 40px, Bold (700), `#FFFFFF` (White)
- **Line-height:** 48px
- **Letter-spacing:** -0.01em
- **Tekislash:** Markazda
- **Max-width:** 700px

### Qo'shimcha tavsif (subtitle)

```
Kredit karta talab qilinmaydi. 2 daqiqada sozlang. Istalgan vaqt bekor qilishingiz mumkin.
```
- **Shrift:** 18px, Regular (400), `rgba(255,255,255,0.85)` (oq, 85% opacity)
- **Line-height:** 28px
- **Tekislash:** Markazda
- **Max-width:** 560px
- **Margin-top:** 16px

### CTA tugmalar

**Layout:** Gorizontal, markazda, gap: 16px
**Margin-top:** 32px

| Tugma | Uslub | Matn | O'lcham |
|-------|-------|------|---------|
| **Primary** | Oq background, primary matn | "Bepul boshlash" | 52px height, 24px 40px padding |
| **Secondary** | Transparent bg, oq border, oq matn | "Demo so'rash" | 52px height, 24px 40px padding |

**Primary tugma:**
- **Background:** `#FFFFFF` (White)
- **Matn rangi:** `#4F46E5` (Primary-600)
- **Shrift:** 16px, Semibold (600)
- **Border-radius:** 8px (radius-md)
- **Hover:** Background `#F3F4F6` (Gray-100), shadow: `0 4px 12px rgba(0,0,0,0.15)`

**Secondary tugma:**
- **Background:** transparent
- **Border:** 1px `rgba(255,255,255,0.4)` (yarim shaffof oq)
- **Matn rangi:** `#FFFFFF` (White)
- **Shrift:** 16px, Semibold (600)
- **Border-radius:** 8px
- **Hover:** Background `rgba(255,255,255,0.1)`, border `rgba(255,255,255,0.7)`

### Ishonch elementlari (sub-CTA)

**Layout:** Gorizontal, markazda, gap: 32px
**Margin-top:** 24px

```
✓ 14 kunlik sinov    ✓ 24/7 support    ✓ O'rnatish uchun yordam
```
- **Shrift:** 14px, Regular (400), `rgba(255,255,255,0.75)` (oq, 75% opacity)
- **Icon:** Checkmark, 16px, `rgba(255,255,255,0.9)`
- **Gap:** Icon va matn orasida 6px

### Dekorativ elementlar (ixtiyoriy)
- Yengil abstract shapes yoki dots pattern (opacity 5-10%)
- Orqa fonda gradient circles (subtle glow effect)
- Rang: oq, opacity 3-8%

---

### ASCII wireframe (Desktop)
```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║     ████████████  GRADIENT BACKGROUND  ████████████             ║
║                                                                  ║
║        Mijozlaringiz bilan muloqotni bugun yaxshilang            ║
║                                                                  ║
║     Kredit karta talab qilinmaydi. 2 daqiqada sozlang.          ║
║     Istalgan vaqt bekor qilishingiz mumkin.                      ║
║                                                                  ║
║          [Bepul boshlash]    [Demo so'rash]                      ║
║           (white/primary)     (outline/white)                    ║
║                                                                  ║
║       ✓ 14 kunlik sinov  ✓ 24/7 support  ✓ O'rnatish yordam    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### ASCII wireframe (Mobile)
```
╔════════════════════════════╗
║   GRADIENT BACKGROUND      ║
║                            ║
║  Mijozlaringiz bilan       ║
║  muloqotni bugun           ║
║  yaxshilang                ║
║                            ║
║  Kredit karta talab        ║
║  qilinmaydi. 2 daqiqada   ║
║  sozlang.                  ║
║                            ║
║    [Bepul boshlash]        ║
║     (full-width)           ║
║                            ║
║    [Demo so'rash]          ║
║     (full-width)           ║
║                            ║
║  ✓ 14 kunlik sinov         ║
║  ✓ 24/7 support            ║
║  ✓ O'rnatish uchun yordam  ║
║                            ║
╚════════════════════════════╝
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | Sarlavha 40px, tugmalar gorizontal, ishonch elementlari gorizontal |
| **Desktop (1024px)** | Bir xil, faqat padding moslashadi |
| **Tablet (768px)** | Sarlavha 36px, tugmalar gorizontal saqlanadi, padding 80px 24px |
| **Mobile (375px)** | Sarlavha 28px, tugmalar vertikal stack (full-width), ishonch elementlari vertikal, padding 64px 16px |

**Mobile uchun maxsus o'zgarishlar:**
- Sarlavha: 28px Bold
- Subtitle: 16px
- Tugmalar: vertikal stack, to'liq kenglik, gap 12px
- Ishonch elementlari: vertikal stack, gap 12px
- Section padding: 64px 16px

---

### Final CTA — Figma komponent daraxti

```
final-cta-section/
├── section-wrapper (full-width, gradient bg: #4F46E5 → #7C3AED, padding: 96px 24px, center)
│   │
│   ├── content-container (max-width: 800px, center aligned, auto-layout vertical)
│   │   │
│   │   ├── cta-title (text: "Mijozlaringiz bilan muloqotni bugun yaxshilang", 40px Bold, #FFFFFF, center)
│   │   │
│   │   ├── cta-subtitle (text: "Kredit karta talab qilinmaydi...", 18px Regular, rgba(255,255,255,0.85), center, margin-top: 16px)
│   │   │
│   │   ├── cta-buttons (auto-layout, horizontal, gap: 16px, center, margin-top: 32px)
│   │   │   ├── btn-primary-white (text: "Bepul boshlash", white bg, #4F46E5 text, 52px height)
│   │   │   └── btn-outline-white (text: "Demo so'rash", transparent bg, white border, white text, 52px height)
│   │   │
│   │   └── trust-points (auto-layout, horizontal, gap: 32px, center, margin-top: 24px)
│   │       ├── trust-item (check + "14 kunlik sinov", rgba(255,255,255,0.75))
│   │       ├── trust-item (check + "24/7 support")
│   │       └── trust-item (check + "O'rnatish uchun yordam")
│   │
│   └── decorative-elements (optional, absolute positioned, low opacity shapes)
```

### Final CTA — Figma AI uchun prompt

```
Create a bold CTA (Call to Action) section for a SaaS platform called CHATFLOW.
Full-width gradient background from #4F46E5 to #7C3AED (135 degrees).
96px vertical padding.

Centered content (max-width 800px):
- Large title: "Mijozlaringiz bilan muloqotni bugun yaxshilang" (40px Bold, white)
- Subtitle: "Kredit karta talab qilinmaydi. 2 daqiqada sozlang." (18px, white 85% opacity)
- Two buttons side by side, 16px gap:
  Primary: "Bepul boshlash" (white background, #4F46E5 text, 52px height)
  Secondary: "Demo so'rash" (transparent bg, white border, white text, 52px height)
- Trust points below buttons: "14 kunlik sinov", "24/7 support", "O'rnatish uchun yordam"
  with checkmark icons, white text at 75% opacity.

Style: Professional, bold but not aggressive. Font: Inter. Subtle decorative elements optional.
```

---

## 3. FOOTER — Sahifaning pastki qismi

### Vazifasi
Qo'shimcha navigatsiya havolalari, huquqiy ma'lumotlar va kompaniya haqida asosiy linklar. Footer — sahifaning professional ko'rinishini yakunlash uchun muhim. Toza, minimal va tartibli bo'lishi kerak.

### Layout va o'lchamlar
- **Joylashuv:** Sahifaning eng pastki qismi
- **Background:** `#111827` (Gray-900) — qorong'u fon
- **Padding:** 64px 0 (asosiy qism), 24px (gorizontal)
- **Pastki qator padding:** 32px 0 (yuqoridan border bilan ajratilgan)
- **Max-width:** 1200px (kontent), markazda
- **Kenglik:** 100% (background to'liq kenglik)

### Asosiy qism — 4 ustunli grid

**Layout:**
- **Grid:** 4 ustun, teng taqsimlangan
- **Ustunlar orasidagi gap:** 40px
- **Birinchi ustun:** Logo + qisqa tavsif (kengroq — 1.5x)
- **2-4 ustunlar:** Link kategoriyalari (teng)

---

#### Ustun 1: Brend + tavsif

**Logo:**
- CHATFLOW logo (oq variant)
- **O'lcham:** ~140px kenglik, 32px balandlik
- **Margin-bottom:** 16px

**Tavsif matni:**
```
Mijozlar bilan aloqani markazlashtiruvchi professional platforma.
```
- **Shrift:** 14px, Regular (400), `#9CA3AF` (Gray-400)
- **Line-height:** 22px
- **Max-width:** 260px

**Ijtimoiy tarmoq ikonlari (ixtiyoriy):**
- **Layout:** Gorizontal, gap: 16px
- **Margin-top:** 24px
- **Ikonlar:** Twitter/X, LinkedIn, GitHub, Telegram
- **Icon o'lchami:** 20px
- **Icon rangi:** `#9CA3AF` (Gray-400), hover: `#FFFFFF`

---

#### Ustun 2: Mahsulot

**Ustun sarlavhasi:**
```
Mahsulot
```
- **Shrift:** 14px, Semibold (600), `#FFFFFF` (White)
- **Text-transform:** Uppercase
- **Letter-spacing:** 0.05em
- **Margin-bottom:** 20px

**Linklar:**
```
- Imkoniyatlar
- Integratsiyalar
- Tariflar
- Changelog
- Roadmap
```
- **Shrift:** 14px, Regular (400), `#9CA3AF` (Gray-400)
- **Line-height:** 20px
- **Gap:** linklar orasida 12px
- **Hover rangi:** `#FFFFFF` (White)
- **Hover:** Underline, transition 150ms

---

#### Ustun 3: Resurslar

**Ustun sarlavhasi:**
```
Resurslar
```
- Uslub: Ustun 2 bilan bir xil

**Linklar:**
```
- Dokumentatsiya
- API docs
- Video qo'llanmalar
- Blog
- FAQs
```

---

#### Ustun 4: Kompaniya

**Ustun sarlavhasi:**
```
Kompaniya
```
- Uslub: Ustun 2 bilan bir xil

**Linklar:**
```
- Biz haqimizda
- Bog'lanish
- Hamkorlik
- Karriera
```

---

#### Ustun 5: Yordam

**Ustun sarlavhasi:**
```
Yordam
```
- Uslub: Ustun 2 bilan bir xil

**Linklar:**
```
- Support markazi
- Email: help@chatflow.uz
- Telegram kanal
- Status sahifa
```

**Eslatma:** Birinchi ustun (Brend) kengroq bo'lgani uchun, amalda 5 ta mantiqiy bo'lim 4 ta visual ustunda joylashadi: Brend ustuni 2x kenglik, qolgan 4 ta link ustuni teng taqsimlanadi. Yoki alternativ: Brend ustuni yuqorida, pastda 4 ta teng ustun.

---

### Pastki qator (Bottom bar)

**Ajratgich:**
- 1px `#374151` (Gray-700), to'liq kenglik
- **Margin-top:** 48px

**Layout:**
- Gorizontal, space-between, vertikal markazda
- **Padding:** 32px 0

**Chap tomon:**
```
© 2026 CHATFLOW. Barcha huquqlar himoyalangan.
```
- **Shrift:** 14px, Regular (400), `#6B7280` (Gray-500)

**O'ng tomon (linklar):**
```
Foydalanish shartlari  •  Maxfiylik siyosati  •  Cookie sozlamalari
```
- **Shrift:** 14px, Regular (400), `#6B7280` (Gray-500)
- **Ajratgich:** " • " belgisi, `#4B5563` (Gray-600)
- **Hover:** `#FFFFFF` (White)
- **Gap:** linklar orasida 24px (ajratgich bilan)

---

### ASCII wireframe (Desktop)
```
┌══════════════════════════════════════════════════════════════════════┐
│                        DARK BACKGROUND (#111827)                     │
│                                                                      │
│  CHATFLOW (logo)     Mahsulot      Resurslar     Kompaniya   Yordam │
│                                                                      │
│  Mijozlar bilan      Imkoniyatlar  Dokumentatsiya Biz haqimizda  Support │
│  aloqani             Integratsiya  API docs      Bog'lanish   markazi │
│  markazlashtir-      Tariflar      Video qo'lla  Hamkorlik    Email  │
│  uvchi platforma.    Changelog     Blog          Karriera     Telegram│
│                      Roadmap       FAQs                       Status │
│  [Twitter][LinkedIn]                                                  │
│  [GitHub][Telegram]                                                   │
│                                                                      │
│ ──────────────────────────────────────────────────────────────────── │
│                                                                      │
│  © 2026 CHATFLOW.            Foydalanish shartlari • Maxfiylik •     │
│  Barcha huquqlar             Cookie sozlamalari                      │
│  himoyalangan.                                                       │
│                                                                      │
└══════════════════════════════════════════════════════════════════════┘
```

### ASCII wireframe (Mobile)
```
┌══════════════════════════════╗
│     DARK BG (#111827)        │
│                              │
│  CHATFLOW (logo)             │
│  Mijozlar bilan aloqani...   │
│  [Social icons]              │
│                              │
│  MAHSULOT                    │
│  Imkoniyatlar                │
│  Integratsiyalar             │
│  Tariflar                    │
│  Changelog                   │
│  Roadmap                     │
│                              │
│  RESURSLAR                   │
│  Dokumentatsiya              │
│  API docs                    │
│  Video qo'llanmalar          │
│  Blog                        │
│  FAQs                        │
│                              │
│  KOMPANIYA                   │
│  Biz haqimizda               │
│  Bog'lanish                  │
│  Hamkorlik                   │
│  Karriera                    │
│                              │
│  YORDAM                      │
│  Support markazi             │
│  Email                       │
│  Telegram kanal              │
│  Status sahifa               │
│                              │
│ ─────────────────────────── │
│                              │
│  © 2026 CHATFLOW.            │
│  Barcha huquqlar himoya-     │
│  langan.                     │
│                              │
│  Foydalanish shartlari       │
│  Maxfiylik siyosati          │
│  Cookie sozlamalari          │
│                              │
└══════════════════════════════┘
```

### Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | 4-5 ustunli gorizontal grid, logo chap tomonida, linklar o'ng tomonda |
| **Desktop (1024px)** | Bir xil, ustunlar kengligi moslashadi |
| **Tablet (768px)** | 2x2 grid (logo to'liq kenglik yuqorida, linklar 2 ustunda pastda) |
| **Mobile (375px)** | 1 ustunli vertikal stack, barcha bo'limlar ketma-ket, padding 48px 16px |

**Mobile uchun maxsus o'zgarishlar:**
- Logo va tavsif: markazda tekislangan
- Link ustunlari: vertikal stack, to'liq kenglik
- Ustun sarlavhasi: 16px margin-top bilan ajratilgan
- Linklar gap: 10px
- Pastki qator: vertikal stack, markazda tekislangan
- Copyright va linklar alohida qatorlarda
- Section padding: 48px 16px
- Bottom bar padding: 24px 0

**Tablet uchun maxsus o'zgarishlar:**
- Logo qismi to'liq kenglikda yuqorida
- Link ustunlari 2x2 grid (yoki 4 ustun siqilgan)
- Section padding: 56px 24px

---

### Footer — To'liq Figma komponent daraxti

```
footer-section/
├── footer-wrapper (full-width, bg: #111827, padding: 64px 24px)
│   │
│   ├── footer-content (max-width: 1200px, center, auto-layout horizontal, gap: 40px)
│   │   │
│   │   ├── brand-column (auto-layout, vertical, gap: 16px, flex: 1.5)
│   │   │   ├── logo (CHATFLOW, white variant, ~140x32px)
│   │   │   ├── description (text: "Mijozlar bilan aloqani...", 14px Regular, #9CA3AF)
│   │   │   └── social-icons (auto-layout, horizontal, gap: 16px, margin-top: 24px)
│   │   │       ├── icon-twitter (20px, #9CA3AF, hover: #FFFFFF)
│   │   │       ├── icon-linkedin (20px, #9CA3AF)
│   │   │       ├── icon-github (20px, #9CA3AF)
│   │   │       └── icon-telegram (20px, #9CA3AF)
│   │   │
│   │   ├── links-column-1 [Mahsulot] (auto-layout, vertical, gap: 12px, flex: 1)
│   │   │   ├── column-title (text: "MAHSULOT", 14px Semibold, #FFFFFF, uppercase, letter-spacing: 0.05em)
│   │   │   ├── link (text: "Imkoniyatlar", 14px Regular, #9CA3AF)
│   │   │   ├── link (text: "Integratsiyalar")
│   │   │   ├── link (text: "Tariflar")
│   │   │   ├── link (text: "Changelog")
│   │   │   └── link (text: "Roadmap")
│   │   │
│   │   ├── links-column-2 [Resurslar] (auto-layout, vertical, gap: 12px, flex: 1)
│   │   │   ├── column-title (text: "RESURSLAR", 14px Semibold, #FFFFFF, uppercase)
│   │   │   ├── link (text: "Dokumentatsiya")
│   │   │   ├── link (text: "API docs")
│   │   │   ├── link (text: "Video qo'llanmalar")
│   │   │   ├── link (text: "Blog")
│   │   │   └── link (text: "FAQs")
│   │   │
│   │   ├── links-column-3 [Kompaniya] (auto-layout, vertical, gap: 12px, flex: 1)
│   │   │   ├── column-title (text: "KOMPANIYA", 14px Semibold, #FFFFFF, uppercase)
│   │   │   ├── link (text: "Biz haqimizda")
│   │   │   ├── link (text: "Bog'lanish")
│   │   │   ├── link (text: "Hamkorlik")
│   │   │   └── link (text: "Karriera")
│   │   │
│   │   └── links-column-4 [Yordam] (auto-layout, vertical, gap: 12px, flex: 1)
│   │       ├── column-title (text: "YORDAM", 14px Semibold, #FFFFFF, uppercase)
│   │       ├── link (text: "Support markazi")
│   │       ├── link (text: "Email: help@chatflow.uz")
│   │       ├── link (text: "Telegram kanal")
│   │       └── link (text: "Status sahifa")
│   │
│   ├── divider (1px, #374151, full-width, margin-top: 48px)
│   │
│   └── bottom-bar (auto-layout, horizontal, space-between, padding: 32px 0)
│       ├── copyright (text: "© 2026 CHATFLOW. Barcha huquqlar himoyalangan.", 14px Regular, #6B7280)
│       └── legal-links (auto-layout, horizontal, gap: 24px)
│           ├── link (text: "Foydalanish shartlari", 14px Regular, #6B7280)
│           ├── separator (text: "•", #4B5563)
│           ├── link (text: "Maxfiylik siyosati")
│           ├── separator (text: "•", #4B5563)
│           └── link (text: "Cookie sozlamalari")
```

### Footer — Figma AI uchun prompt

```
Create a dark footer section for a SaaS platform called CHATFLOW.
Background: #111827 (dark navy/gray). Padding: 64px vertical.

Layout: horizontal grid with 5 columns (brand column wider):

Column 1 (Brand): CHATFLOW logo in white, short description in #9CA3AF,
social media icons (Twitter, LinkedIn, GitHub, Telegram) in #9CA3AF.

Column 2 (Mahsulot): Links - Imkoniyatlar, Integratsiyalar, Tariflar, Changelog, Roadmap.
Column 3 (Resurslar): Links - Dokumentatsiya, API docs, Video qo'llanmalar, Blog, FAQs.
Column 4 (Kompaniya): Links - Biz haqimizda, Bog'lanish, Hamkorlik, Karriera.
Column 5 (Yordam): Links - Support markazi, Email, Telegram kanal, Status sahifa.

Column titles: 14px Semibold, white, UPPERCASE, letter-spacing 0.05em.
Links: 14px Regular, #9CA3AF, hover: white.

Divider line below columns: 1px #374151.
Bottom bar: "© 2026 CHATFLOW" on left, legal links on right
(Foydalanish shartlari, Maxfiylik siyosati, Cookie sozlamalari) in #6B7280.

Style: Clean, dark, professional. Font: Inter. Width: 1200px max content, full-width background.
```

---

## Micro-interactions

| Animatsiya | Parametrlar | Ishlatilishi |
|-----------|-------------|-------------|
| Section fade-in | opacity 0 -> 1, 200ms ease | Scroll qilganda section paydo bo'ladi |
| Pricing card hover | translateY(-2px), shadow-lg, 200ms | Tarif kartalarida |
| Pro card glow | subtle box-shadow pulse, 3s loop | Featured Pro karta |
| CTA button glow | box-shadow: 0 0 20px rgba(255,255,255,0.2), hover | CTA tugmalarida |
| CTA button press | scale(0.98), 100ms | Tugma bosilganda |
| Footer link underline | text-decoration opacity 0 -> 1, 150ms | Footer linklar hover |
| Social icon hover | color transition, 200ms | Ijtimoiy tarmoq ikonlari |

---

## Rang xulosa jadvali — Tariflar + CTA + Footer

| Element | Rang | Hex |
|---------|------|-----|
| Tariflar section bg | White | `#FFFFFF` |
| CTA section bg (gradient start) | Primary-600 | `#4F46E5` |
| CTA section bg (gradient end) | Purple | `#7C3AED` |
| Footer bg | Gray-900 | `#111827` |
| Tarif karta bg | White | `#FFFFFF` |
| Tarif karta border (oddiy) | Gray-300 | `#E5E7EB` |
| Tarif karta border (featured) | Primary-600 | `#4F46E5` |
| Bo'lim sarlavhasi | Gray-900 | `#111827` |
| Bo'lim subtitle | Gray-500 | `#6B7280` |
| Reja nomi | Gray-900 | `#111827` |
| Narx matni | Gray-900 | `#111827` |
| Feature list matn | Gray-700 | `#374151` |
| Feature checkmark | Success-500 | `#10B981` |
| "Mashhur" badge bg | Primary-100 | `#E0E7FF` |
| "Mashhur" badge matn | Primary-600 | `#4F46E5` |
| Primary CTA button bg | Primary-600 | `#4F46E5` |
| Primary CTA button matn | White | `#FFFFFF` |
| CTA sarlavha | White | `#FFFFFF` |
| CTA subtitle | White 85% | `rgba(255,255,255,0.85)` |
| CTA trust points | White 75% | `rgba(255,255,255,0.75)` |
| Footer sarlavhalar | White | `#FFFFFF` |
| Footer linklar | Gray-400 | `#9CA3AF` |
| Footer link hover | White | `#FFFFFF` |
| Footer copyright | Gray-500 | `#6B7280` |
| Footer divider | Gray-700 | `#374151` |
| Footer legal links | Gray-500 | `#6B7280` |
| Footer social icons | Gray-400 | `#9CA3AF` |

---

## Tipografiya xulosa jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Bo'lim sarlavha (H2) | 40px | Bold (700) | `#111827` / `#FFFFFF` (CTA) |
| Bo'lim subtitle | 18px | Regular (400) | `#6B7280` / `rgba(255,255,255,0.85)` |
| Reja nomi | 24px | Bold (700) | `#111827` |
| Reja tavsifi | 14px | Regular (400) | `#6B7280` |
| Narx | 48px | Bold (700) | `#111827` |
| Narx izoh | 16px | Regular (400) | `#6B7280` |
| Feature matn | 14px | Regular (400) | `#374151` |
| CTA tugma matn | 16px | Semibold (600) | `#4F46E5` / `#FFFFFF` |
| CTA trust matn | 14px | Regular (400) | `rgba(255,255,255,0.75)` |
| Footer ustun sarlavha | 14px | Semibold (600) UPPERCASE | `#FFFFFF` |
| Footer link | 14px | Regular (400) | `#9CA3AF` |
| Footer tavsif | 14px | Regular (400) | `#9CA3AF` |
| Footer copyright | 14px | Regular (400) | `#6B7280` |
| Footer legal link | 14px | Regular (400) | `#6B7280` |
| Badge matn | 12px | Semibold (600) | `#4F46E5` |

---

## Spacing xulosa jadvali

| Element | Qiymat |
|---------|--------|
| Tariflar section padding | 96px vertikal |
| CTA section padding | 96px vertikal |
| Footer asosiy padding | 64px vertikal |
| Sarlavha va subtitle gap | 16px |
| Sarlavha va kartalar gap | 64px |
| Tarif kartalar gap | 24px |
| Karta ichki padding | 32px |
| Reja nomi va tavsif gap | 4px |
| Narx va ajratgich gap | 24px |
| Feature punktlar gap | 12px |
| CTA tugma va narx gap | 24px |
| CTA tugmalar gap | 16px |
| CTA ishonch elementlari gap | 32px |
| CTA trust va tugmalar gap | 24px |
| Footer ustunlar gap | 40px |
| Footer ustun sarlavha va linklar gap | 20px |
| Footer linklar gap | 12px |
| Footer divider margin-top | 48px |
| Footer bottom bar padding | 32px 0 |
| Footer legal links gap | 24px |
| Social icons gap | 16px |
