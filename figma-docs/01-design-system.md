# CHATFLOW — Dizayn Tizimi (Design System)

## Umumiy uslub
CHATFLOW dizayni **zamonaviy SaaS** platformalari uslubida — toza, professional va minimal. Asosiy ilhom: Crisp.chat, Intercom, Linear.

---

## 1. Rang palitrasi (Colors)

### Primary (Asosiy)
| Nom | Hex | Ishlatilishi |
|-----|-----|-------------|
| Primary-600 | `#4F46E5` | Asosiy CTA tugmalar, active states, linklar |
| Primary-500 | `#6366F1` | Hover states |
| Primary-400 | `#818CF8` | Light accent |
| Primary-100 | `#E0E7FF` | Background highlight, selected states |
| Primary-50 | `#EEF2FF` | Yengil background |

### Neutral (Kulrang)
| Nom | Hex | Ishlatilishi |
|-----|-----|-------------|
| Gray-900 | `#111827` | Asosiy matn, sarlavhalar |
| Gray-700 | `#374151` | Ikkilamchi matn |
| Gray-500 | `#6B7280` | Placeholder, yordam matn |
| Gray-300 | `#D1D5DB` | Borderlar, ajratgichlar |
| Gray-100 | `#F3F4F6` | Card background, hover |
| Gray-50 | `#F9FAFB` | Sahifa background |
| White | `#FFFFFF` | Asosiy background, kartalar |

### Status ranglari
| Nom | Hex | Ishlatilishi |
|-----|-----|-------------|
| Success-500 | `#10B981` | Online status, muvaffaqiyat, tasdiqlash |
| Success-50 | `#ECFDF5` | Success background |
| Error-500 | `#EF4444` | Xato, o'chirish, offline badge |
| Error-50 | `#FEF2F2` | Error background |
| Warning-500 | `#F59E0B` | Ogohlantirish, away status |
| Warning-50 | `#FFFBEB` | Warning background |
| Info-500 | `#3B82F6` | Ma'lumot, linklar |
| Info-50 | `#EFF6FF` | Info background |

### Gradient
| Nom | Qiymat | Ishlatilishi |
|-----|--------|-------------|
| Hero gradient | `linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)` | Hero section background |
| CTA gradient | `linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)` | CTA bo'lim background |
| Widget header | `linear-gradient(180deg, #4F46E5 0%, #6366F1 100%)` | Chat widget header |

---

## 2. Tipografiya (Typography)

### Shrift oilasi
- **Asosiy:** Inter (Google Fonts)
- **Monospace:** JetBrains Mono (kod bloklari uchun)
- **Zaxira:** -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

### Shrift o'lchamlari

#### Landing Page
| Element | O'lcham | Og'irlik | Line-height | Letter-spacing |
|---------|---------|----------|-------------|----------------|
| H1 (Hero) | 56px | Bold (700) | 64px (1.14) | -0.02em |
| H2 (Bo'lim sarlavha) | 40px | Bold (700) | 48px (1.2) | -0.01em |
| H3 (Kichik sarlavha) | 28px | Semibold (600) | 36px (1.28) | 0 |
| H4 (Karta sarlavha) | 20px | Semibold (600) | 28px (1.4) | 0 |
| Body Large | 18px | Regular (400) | 28px (1.55) | 0 |
| Body | 16px | Regular (400) | 24px (1.5) | 0 |
| Body Small | 14px | Regular (400) | 20px (1.43) | 0 |
| Caption | 12px | Medium (500) | 16px (1.33) | 0.01em |

#### Dashboard
| Element | O'lcham | Og'irlik | Line-height |
|---------|---------|----------|-------------|
| Page Title | 24px | Semibold (600) | 32px |
| Section Title | 18px | Semibold (600) | 24px |
| Card Title | 16px | Semibold (600) | 24px |
| Table Header | 12px | Semibold (600) | 16px |
| Body | 14px | Regular (400) | 20px |
| Small | 12px | Regular (400) | 16px |
| Metric Value | 32px | Bold (700) | 40px |
| Nav Item | 14px | Medium (500) | 20px |

### 2.1. Font Weight Combinations Matrix

Font og'irligi kontekstga qarab to'g'ri tanlash muhim. Quyida har xil o'lcham uchun qaysi og'irlikni ishlatish kerakligi ko'rsatilgan:

| Font Size | Regular (400) | Medium (500) | Semibold (600) | Bold (700) |
|-----------|---------------|--------------|----------------|------------|
| **56px** (H1 Hero) | — | — | — | ✅ Asosiy sarlavha |
| **40px** (H2) | — | — | — | ✅ Katta bo'lim sarlavha |
| **32px** (Metric) | — | — | — | ✅ Metrika qiymati |
| **28px** (H3) | — | — | ✅ Kichik sarlavha | Minimal ishlatish |
| **24px** (Page Title) | — | — | ✅ Dashboard sahifa nomi | Ta'kid uchun |
| **20px** (H4) | — | — | ✅ Karta sarlavha | — |
| **18px** (Section Title) | — | Body Large uchun | ✅ Bo'lim sarlavha | — |
| **16px** (Body) | ✅ Asosiy matn | Ta'kid/linklar | Kichik sarlavha | — |
| **14px** (Nav/Body) | ✅ Asosiy matn | ✅ Nav item, label | Form label | — |
| **12px** (Small/Caption) | ✅ Ikkilamchi ma'lumot | ✅ Badge, Caption, Table header | Minimal ta'kid | — |

**Ishlatish tamoyillari:**
- **Regular (400):** Asosiy matn, paragraph, description, ikkilamchi ma'lumotlar
- **Medium (500):** Navigation items, form labels, badge, kichik sarlavha, table header
- **Semibold (600):** Sarlavhalar (H3-H4), page title, section title, card title
- **Bold (700):** Katta sarlavhalar (H1-H2), metrika qiymatlari, hero matn

### 2.2. Responsive Typography Scaling

Mobil qurilmalarda shrift o'lchamlarini qisqartirish tavsiya etiladi. Desktop baseline bilan solishtirganda:

| Element | Desktop | Tablet (768px) | Mobile (480px) | Scale Ratio |
|---------|---------|----------------|----------------|-------------|
| H1 (Hero) | 56px | 48px (-14%) | 40px (-29%) | 0.71x |
| H2 (Section) | 40px | 36px (-10%) | 32px (-20%) | 0.80x |
| H3 | 28px | 24px (-14%) | 22px (-21%) | 0.79x |
| H4 | 20px | 18px (-10%) | 18px (-10%) | 0.90x |
| Body Large | 18px | 18px (0%) | 16px (-11%) | 0.89x |
| Body | 16px | 16px (0%) | 14px (-13%) | 0.88x |
| Body Small | 14px | 14px (0%) | 13px (-7%) | 0.93x |
| Caption | 12px | 12px (0%) | 12px (0%) | 1.00x |
| Page Title | 24px | 22px (-8%) | 20px (-17%) | 0.83x |
| Metric Value | 32px | 28px (-13%) | 24px (-25%) | 0.75x |

**CSS Media Query Implementation:**

```css
/* Desktop (default) */
.hero-title {
  font-size: 56px;
  line-height: 64px;
}

/* Tablet */
@media (max-width: 768px) {
  .hero-title {
    font-size: 48px;
    line-height: 56px;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-title {
    font-size: 40px;
    line-height: 48px;
  }
}
```

**Breakpoint priorities:**
- **1440px+:** Desktop (full size)
- **768px-1439px:** Tablet (kichik qisqartirish)
- **480px-767px:** Mobile landscape (o'rtacha qisqartirish)
- **<480px:** Mobile portrait (maksimal qisqartirish)

**Line-height scaling:** Line-height ham proporsional qisqartiriladi, lekin minimal readability saqlash uchun ratio 1.2x dan past bo'lmasligi kerak (masalan: 40px font → 48px line-height = 1.2).

### 2.3. Line-Height to Font-Size Ratio Guidelines

Line-height nisbati matn o'qilishini ta'minlaydi. Har xil matn turlari uchun optimal nisbatlar:

| Matn Turi | Ratio | Sabab | Misollar |
|-----------|-------|-------|----------|
| **Katta Sarlavhalar** (H1-H2) | 1.14-1.2x | Qat'iy va compact ko'rinish | 56px → 64px (1.14), 40px → 48px (1.2) |
| **Kichik Sarlavhalar** (H3-H4) | 1.25-1.4x | Muvozanat ko'rinish | 28px → 36px (1.28), 20px → 28px (1.4) |
| **Body Matn** | 1.5-1.6x | Maksimal o'qilish qulayligi | 16px → 24px (1.5), 14px → 20px (1.43) |
| **Kichik Matn** | 1.33-1.5x | O'qilish, lekin ixcham | 12px → 16px (1.33) |
| **Metrika/Raqamlar** | 1.2-1.25x | Compact raqamlar joylashuvi | 32px → 40px (1.25) |
| **Navigation** | 1.43x | Toza va o'qiladigan | 14px → 20px (1.43) |

**Rationale (sabab):**
- **Sarlavhalar:** Qisqa matn bo'lgani uchun tight line-height (1.14-1.4x) vizual hierarchiya yaratadi va strong presence beradi.
- **Body matn:** Uzun paragraph'larda loose line-height (1.5x+) qator orasida havo qoldiradi, ko'z charchamasligini ta'minlaydi.
- **Kichik matn:** Moderate line-height (1.33-1.5x) joy tejashda lekin o'qilishni saqlaydi.

**Accessibility standard:** WCAG 2.1 Success Criterion 1.4.8 tavsiyasi — Body matn uchun line-height **kamida 1.5x** bo'lishi kerak.

### 2.4. Letter-Spacing (Tracking) Usage Guidelines

Letter-spacing (tracking) shrift o'lchamiga qarab o'zgaradi. Katta shriftlarda negative tracking (siqiq) professional ko'rinadi, kichik shriftlarda positive tracking (keng) esa o'qilishni yaxshilaydi:

| Font Size | Letter-Spacing | Ishlatilishi | Sabab |
|-----------|----------------|-------------|--------|
| **56px** (H1) | -0.02em | Hero sarlavha | Katta shriftda toza va premium ko'rinish |
| **40px** (H2) | -0.01em | Bo'lim sarlavha | Yengil siqilgan, lekin o'qilishi qulay |
| **28-32px** | -0.005em yoki 0 | Metrika, H3 | Neutral spacing, balansli |
| **16-24px** | 0 | Body matn, paragraflar | Default spacing ideal o'qilish uchun |
| **14px** | 0 yoki +0.005em | Nav, form label | Default yoki minimal kenglik |
| **12px** (Caption, Badge) | +0.01em | Kichik matn, uppercase | Kenglik o'qilishni osonlashtiradi |
| **11px va kichik** | +0.02em | Juda kichik matn | Zarur agar ishlatilsa |
| **Uppercase matn** | +0.05em - +0.1em | Buttons, nav, labels | Uppercase siqiq ko'rinadi, tracking kerak |

**Best practices:**
- Negative tracking faqat **24px+** shriftlar uchun
- Positive tracking faqat **kichik shriftlar (<14px)** yoki **UPPERCASE matn** uchun
- Body matn (14-18px) uchun **0em** (default) yetarli
- Button va badge uppercase textda **+0.05em** minimum

**Figma'da sozlash:**  
Text → Letter spacing → Percent yoki Pixels (em conversion: 0.01em = 1% = 0.16px for 16px font)

---

## 3. Spacing (Bo'shliqlar)

### Asosiy spacing shkala
| Token | Qiymat | Ishlatilishi |
|-------|--------|-------------|
| space-1 | 4px | Ikonka ichki padding |
| space-2 | 8px | Kichik elementlar orasida |
| space-3 | 12px | Input ichki padding, badge padding |
| space-4 | 16px | Karta ichki padding, elementlar gap |
| space-5 | 20px | Form fieldlar orasida |
| space-6 | 24px | Bo'limlar ichki padding |
| space-8 | 32px | Bo'limlar orasida (dashboard) |
| space-10 | 40px | Karta padding, onboarding container |
| space-12 | 48px | Katta bo'limlar padding |
| space-16 | 64px | Landing bo'limlar orasida |
| space-20 | 80px | Landing katta bo'shliq |
| space-24 | 96px | Landing section gap |
| space-30 | 120px | Landing section gap (katta) |

### Layout o'lchamlari
| Element | O'lcham |
|---------|---------|
| Landing max-width | 1200px |
| Dashboard sidebar | 240px (expanded), 64px (collapsed) |
| Dashboard header | 64px balandlik |
| Chat list panel | 360px kenglik |
| Chat info sidebar | 280px kenglik |
| Onboarding container | 600px kenglik |
| Modal (small) | 400px kenglik |
| Modal (medium) | 560px kenglik |
| Modal (large) | 720px kenglik |

---

## 4. Border Radius

| Token | Qiymat | Ishlatilishi |
|-------|--------|-------------|
| radius-sm | 4px | Badge, tag |
| radius-md | 8px | Input, button, kichik karta |
| radius-lg | 12px | Karta, modal, dropdown |
| radius-xl | 16px | Katta karta, section |
| radius-2xl | 24px | Widget oynasi |
| radius-full | 50% (9999px) | Avatar, widget tugma, toggle |

---

## 5. Shadow (Soyalar)

| Token | Qiymat | Ishlatilishi |
|-------|--------|-------------|
| shadow-sm | `0 1px 2px rgba(0,0,0,0.05)` | Input, kichik element |
| shadow-md | `0 4px 6px -1px rgba(0,0,0,0.1)` | Karta, dropdown |
| shadow-lg | `0 10px 15px -3px rgba(0,0,0,0.1)` | Modal, popup |
| shadow-xl | `0 20px 25px -5px rgba(0,0,0,0.1)` | Widget oynasi |
| shadow-inner | `inset 0 2px 4px rgba(0,0,0,0.06)` | Ichki soya |

---

## 6. Komponentlar kutubxonasi

### Tugmalar (Buttons)

| Variant | Background | Matn rangi | Border | Balandlik |
|---------|-----------|------------|--------|-----------|
| Primary | `#4F46E5` | `#FFFFFF` | none | 44px |
| Secondary | `#FFFFFF` | `#4F46E5` | 1px `#4F46E5` | 44px |
| Outline | transparent | `#374151` | 1px `#D1D5DB` | 44px |
| Ghost | transparent | `#374151` | none | 44px |
| Danger | `#EF4444` | `#FFFFFF` | none | 44px |
| Small | — | — | — | 36px |
| Large | — | — | — | 52px |

**Holatlar:** Default → Hover → Active → Disabled → Loading

**Tugma ichki padding:** 12px 24px (normal), 8px 16px (small), 16px 32px (large)
#### Button States (Batafsil)

| Holat | Xususiyyat | CSS |
|-------|------------|-----|
| **Default** | Normal ko'rinish | — |
| **Hover** | Background: Primary-500 `#6366F1`<br>Transform: translateY(-1px)<br>Shadow: shadow-md | `transition: 200ms ease` |
| **Active** | Background: Primary-700 (darker)<br>Transform: scale(0.98) | `transition: 100ms ease` |
| **Disabled** | Background: `#E5E7EB`<br>Text: `#9CA3AF`<br>Cursor: not-allowed<br>Opacity: 0.6<br>Pointer-events: none | — |
| **Loading** | Background: Default (but disabled)<br>Text: "Loading..." or hidden<br>Spinner icon: 16px, left of text<br>Opacity: 0.7<br>Cursor: not-allowed<br>Pointer-events: none | Spinner rotates 360deg 600ms infinite |

#### Button Loading State Details

**With Text:**
```
[Spinner 16px]  Loading...
   ↑ gap 8px
```
- Spinner: 16px × 16px, Primary-600 color, stroke-width 2px
- Text: "Loading..." yoki "Yuklanmoqda..."
- Gap: 8px spinner va text orasida
- Opacity: 0.7
- Pointer-events: none (click disabled)

**Icon-only Loading:**
```
[Spinner 20px centered]
```
- Faqat spinner ko'rsatiladi, text yo'q
- Spinner 20px × 20px markazda
- Same opacity and disabled state

#### Button Icon-Only Variant

| O'lcham | Width × Height | Icon Size | Padding | Ishlatilishi |
|---------|----------------|-----------|---------|-------------|
| **Small** | 32px × 32px | 16px | 0 (center) | Compact toolbar |
| **Medium** | 40px × 40px | 20px | 0 (center) | Default actions |
| **Large** | 48px × 48px | 24px | 0 (center) | Primary actions |

**Xususiyyatlar:**
- Square shakl (width = height)
- Icon markazda (flexbox center)
- Padding yo'q, icon centered
- Border-radius: 8px (medium) yoki 12px (large)
- Hover/Active same as regular button
- Ishlatilishi: Close button, Edit icon, Delete icon, More menu (⋮)

**ASCII Wireframe:**
```
┌────────┐
│        │
│   ✕    │  40×40px button
│        │  Icon 20px centered
└────────┘
```
### Input fieldlar

| Holat | Border | Background |
|-------|--------|------------|
| Default | 1px `#D1D5DB` | `#FFFFFF` |
| Focus | 2px `#4F46E5` | `#FFFFFF` |
| Error | 2px `#EF4444` | `#FEF2F2` |
| Success | 2px `#10B981` | `#ECFDF5` |
| Disabled | 1px `#E5E7EB` | `#F9FAFB` |

**Input o'lchamlari:**
- Balandlik: 44px
- Border-radius: 8px
- Padding: 12px 16px
- Font: 14px Regular

#### Input States (Pixel-Perfect Specs)

| Holat | Border | Background | Box-Shadow | Text Color | Cursor | Pointer-Events |
|-------|--------|------------|------------|------------|--------|----------------|
| **Default** | 1px solid `#D1D5DB` | `#FFFFFF` | none | `#111827` | text | auto |
| **Hover** | 1px solid `#9CA3AF` | `#FFFFFF` | none | `#111827` | text | auto |
| **Focus** | 2px solid `#4F46E5` | `#FFFFFF` | `0 0 0 2px rgba(79,70,229,0.2)` | `#111827` | text | auto |
| **Error** | 2px solid `#EF4444` | `#FEF2F2` | `0 0 0 2px rgba(239,68,68,0.1)` | `#111827` | text | auto |
| **Success** | 2px solid `#10B981` | `#ECFDF5` | `0 0 0 2px rgba(16,185,129,0.1)` | `#111827` | text | auto |
| **Disabled** | 1px solid `#E5E7EB` | `#F9FAFB` | none | `#9CA3AF` | not-allowed | none |

**Focus Glow Effect (pixel-perfect):**
```css
input:focus {
  border: 2px solid #4F46E5;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2); /* Outer glow */
  outline: none; /* Remove default browser outline */
}
```

**Disabled State Details:**
- Background: `#F9FAFB` (light gray)
- Text color: `#9CA3AF` (muted)
- Opacity: 0.5 (agar kerak bo'lsa)
- Cursor: `not-allowed`
- Placeholder: `#D1D5DB` (very light)
- User cannot type or interact

#### Input with Icons

**Left Icon (Info/Search):**
```
┌────────────────────────────┐
│ 🔍  Search...              │  44px height
│ ↑                          │
│ Icon 20px, 12px left       │
└────────────────────────────┘
```
- Icon: 20px × 20px
- Position: 12px from left edge
- Input padding-left: 40px (12px + 20px + 8px gap)
- Icon color: `#6B7280` default, `#4F46E5` when focused

**Right Icon (Clear/Show Password):**
```
┌────────────────────────────┐
│ Email Address          ✕   │  44px height
│                        ↑   │
│              Icon 20px, 12px right│
└────────────────────────────┘
```
- Icon: 20px × 20px
- Position: 12px from right edge
- Input padding-right: 40px
- Button: 40px × 40px (clickable area)
- Icon color: `#9CA3AF` default, `#111827` hover

**Error with Icon:**
```
┌────────────────────────────┐
│ ⚠  Invalid email format    │  44px height
│ ↑                          │
│ AlertCircle 20px #EF4444   │
└────────────────────────────┘
Invalid email format
↑ Error message 12px Regular #EF4444
```
- Icon: AlertCircle 20px × 20px, `#EF4444` color
- Position: 12px from left edge
- Input padding-left: 40px
- Error message below: 12px Regular, `#EF4444`, margin-top 8px
- Background: `#FEF2F2` (error light)
- Border: 2px solid `#EF4444`

### Kartalar (Cards)

| Variant | Xususiyat |
|---------|-----------|
| Default | White bg, radius-lg, shadow-md, padding 24px |
| Outlined | White bg, 1px border `#E5E7EB`, radius-lg, padding 24px |
| Elevated | White bg, shadow-lg, radius-lg, padding 24px |
| Interactive | Hover: shadow-lg + translateY(-2px) |

### Badgelar

| Variant | Background | Matn | Padding |
|---------|-----------|------|---------|
| Default | `#F3F4F6` | `#374151` | 4px 8px |
| Primary | `#E0E7FF` | `#4F46E5` | 4px 8px |
| Success | `#ECFDF5` | `#059669` | 4px 8px |
| Error | `#FEF2F2` | `#DC2626` | 4px 8px |
| Warning | `#FFFBEB` | `#D97706` | 4px 8px |

Border-radius: 9999px (pill shape), Font: 12px Medium
#### Badge Size Variants

| Size | Font Size | Padding | Height | Ishlatilishi |
|------|-----------|---------|--------|-------------|
| **SM** | 11px Medium | 4px 6px | ~19px | Compact lists, table cells |
| **MD** | 12px Medium | 4px 8px | ~20px | Default (current spec) |
| **LG** | 13px Semibold | 6px 10px | ~25px | Prominent badges, hero sections |

**Calculation:**
- SM: 11px font + 8px vertical padding = 19px height
- MD: 12px font + 8px vertical padding = 20px height
- LG: 13px font + 12px vertical padding = 25px height

**Visual Examples:**
```
┌─────────┐
│  Active │  SM - 11px, compact
└─────────┘

┌──────────┐
│  Online  │  MD - 12px, default
└──────────┘

┌────────────┐
│  Pro Plan  │  LG - 13px, prominent
└────────────┘
```

**Usage guidelines:**
- **SM:** Table cells, compact dashboards, secondary tags
- **MD:** Default badge everywhere (status, tags, counts)
- **LG:** Important status (plan name, primary tags on cards)
### Avatar

| O'lcham | Pixel | Ishlatilishi |
|---------|-------|-------------|
| XS | 24px | Chat list, kichik ko'rsatma |
| SM | 32px | Xabar bubble, sidebar |
| MD | 40px | Jadval, agent card |
| LG | 48px | Profil modal |
| XL | 64px | Profil sahifa |
| 2XL | 120px | Profil edit |

Agar rasm yo'q — initiallar ko'rsatiladi (masalan: "UK" — Ulug'bek K.)
Background: Primary-100, Matn: Primary-600

### Toggle Switch
- O'lcham: 44px x 24px
- Off: `#D1D5DB` background
- On: `#4F46E5` background
- Knob: 20px, white, shadow-sm
- Transition: 200ms ease

### Checkbox / Radio
- O'lcham: 20px x 20px
- Unchecked: 1px `#D1D5DB` border
- Checked: `#4F46E5` background, white checkmark
- Border-radius: 4px (checkbox), 50% (radio)

### Dropdown (Select)

**Variants:**
1. **Single Select** — Language, Role, Timezone tanlash
2. **Multi-select** — Tags, Filters (checkbox bilan)
3. **Search Dropdown** — 10+ option bo'lganda (Country, Timezone)
4. **Grouped Dropdown** — Category bo'yicha guruhlangan

**Anatomy:**
```
┌─────────────────────────────┐
│ Selected option          ▼  │ ← Trigger button
└─────────────────────────────┘
            ↓ Click
┌─────────────────────────────┐
│ Search...                   │ ← Search input (optional)
├─────────────────────────────┤
│ ✓ Option 1 (selected)       │ ← Checkmark (single) / checkbox (multi)
│   Option 2                  │
│   Option 3                  │
│   ─────────────             │ ← Divider
│   Option 4                  │
└─────────────────────────────┘
```

**States:**

| State | Border | Background | Icon |
|-------|--------|------------|------|
| Default | 1px `#E5E7EB` | `#FFFFFF` | Chevron `#6B7280` |
| Hover | 1px `#D1D5DB` | `#F9FAFB` | Chevron `#6B7280` |
| Focused | 2px `#4F46E5` | `#FFFFFF` | Ring: 4px `primary-100` |
| Open | 2px `#4F46E5` | `#FFFFFF` | Chevron rotated 180° |
| Disabled | 1px `#E5E7EB` | `#F3F4F6` | `cursor: not-allowed` |
| Error | 2px `#EF4444` | `#FFFFFF` | Error text `#EF4444` |

**Trigger Styling:**
- Height: 40px, min-width: 200px
- Padding: 10px 14px
- Border-radius: 8px
- Font: 14px Regular, `#111827`
- Transition: all 150ms ease

**Dropdown Panel:**
- Position: absolute, top: calc(100% + 8px)
- Min-width: 200px, max-height: 240px (~6 items, scroll)
- Background: `#FFFFFF`, border: 1px `#E5E7EB`
- Border-radius: 8px, shadow: shadow-lg
- Padding: 6px, z-index: 50

**Option Item:**
- Padding: 10px 14px, border-radius: 6px
- Hover: `#F3F4F6` background
- Selected: `#EEF2FF` background + checkmark icon `#4F46E5`
- Font: 14px Regular, `#111827`

**Behavior:**
- Click trigger → open/close toggle
- Click outside → close
- Escape key → close
- Arrow Up/Down → navigate options
- Enter → select option
- Type to search (agar 10+ option)

**Accessibility:**
```html
<button aria-haspopup="listbox" aria-expanded="false" aria-labelledby="label">
  Selected option
</button>
<ul role="listbox" aria-labelledby="label">
  <li role="option" aria-selected="true">Option 1</li>
</ul>
```

**Ishlatilgan joylar:** 11-inbox-chat.md (filter, sort), 12-inbox-advanced.md (assign, tag select), 13-automation.md (trigger/action), 14-team.md (role, filter), 16-settings.md (language, timezone), 20-contacts-crm.md (filter, tag)

---

### Tabs

**Variants:**
1. **Underline Tabs** (default) — Settings, Analytics, formal sahifalar uchun
2. **Pill Tabs** — Filters (All/Mine/Unassigned), compact toggle
3. **Segmented Control** — Binary choice (Active/Inactive, Grid/List)

#### Underline Tabs

```
┌──────────────────────────────────────────┐
│ General  |  Team  |  Widget  |  Integ.  │
  ━━━━━━━                                  ← Active indicator
```

| State | Style |
|-------|-------|
| Active | `color: #4F46E5`, `font-weight: 600`, `border-bottom: 2px solid #4F46E5` |
| Inactive | `color: #6B7280`, `font-weight: 400` |
| Hover | `color: #111827` |
| Disabled | `color: #D1D5DB`, `cursor: not-allowed` |

**Styling:** Gap 24px, border-bottom: 1px `#E5E7EB`, padding: 12px 4px, font: 14px

#### Pill Tabs

```
┌───────────────────────────────────────┐
│ [All (12)] [Mine (5)] [Unassigned (3)]│
  ━━━━━━━   (inactive)   (inactive)
```

| State | Style |
|-------|-------|
| Active | `bg: #4F46E5`, `color: #FFFFFF`, `border-radius: 6px`, `padding: 6px 12px` |
| Inactive | `bg: #F3F4F6`, `color: #6B7280`, hover: `bg: #E5E7EB` |

#### Tab Badge (Count)

```css
.tab-badge {
  margin-left: 8px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 600;
  background: #F3F4F6; /* inactive */
  border-radius: 12px;
}
/* Active tab badge */
.tab-badge-active {
  color: #4F46E5;
  background: #EEF2FF;
}
```

**Accessibility:**
```html
<div role="tablist" aria-label="Settings tabs">
  <button role="tab" aria-selected="true" aria-controls="panel-1">General</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Team</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">Content</div>
```

**Behavior:**
- Arrow Left/Right → navigate tabs
- Enter/Space → activate tab
- Tab panel: fade transition 200ms

**Ishlatilgan joylar:** 16-settings.md (4 tabs), 15-analytics.md (4 tabs), 11-inbox-chat.md (3 filter tabs), 13-automation.md (3 tabs), 20-contacts-crm.md (3 tabs), 17-billing.md (3 tabs), 23-knowledge-base.md (3 tabs)

---

### Table

**Variants:**
1. **Simple Table** — Article list, invoice history
2. **Sortable Table** — Team members (sort by name, role, status)
3. **Selectable Table** — Bulk actions (checkbox, delete, export)
4. **Expandable Rows** — Nested data, conversation details

**Anatomy:**
```
┌─────────────────────────────────────────────────────────┐
│ Table Title                    Search     [+ Add]       │
├─────────────────────────────────────────────────────────┤
│ ☐ | Name ↑     | Email          | Role    | Status |⋮  │
├─────────────────────────────────────────────────────────┤
│ ☐ | John Doe   | john@..        | Admin   | 🟢     |⋮  │
│ ☐ | Jane Smith | jane@..        | Agent   | 🔴     |⋮  │
├─────────────────────────────────────────────────────────┤
│ Showing 1-10 of 245        [< 1 2 3 ... 25 >]          │
└─────────────────────────────────────────────────────────┘
```

**States:**

| State | Style |
|-------|-------|
| Default row | `bg: white` |
| Hover row | `bg: #F9FAFB` |
| Selected row | `bg: #EEF2FF`, checkbox ✓ |
| Loading | Skeleton loader |
| Empty | Empty state illustration + "Ma'lumot topilmadi" |
| Error | Error message + "Qayta urinish" button |

**Styling:**
- Container: `border: 1px #E5E7EB`, `border-radius: 12px`, `shadow-sm`
- Header bg: `#F9FAFB`, th: 12px Semibold `#6B7280` uppercase, padding 12px 16px
- Row: `border-bottom: 1px #E5E7EB`, td padding: 12px 16px
- Sort icon: `#6B7280` (default), `#4F46E5` (sorted)

**Pagination:**
- Default: 10 per page, options: 10, 25, 50
- "Showing 1-10 of 245" — 13px `#6B7280`
- Page buttons: 32px × 32px, radius 6px
- Active page: `bg: #4F46E5`, `color: white`

**Ishlatilgan joylar:** 14-team.md, 20-contacts-crm.md, 17-billing.md, 25-advanced-analytics.md, 15-analytics.md, 23-knowledge-base.md, 13-automation.md, 21-online-visitors.md

---

### Date Picker

**Variants:**
1. **Single Date** — Deadline, specific date
2. **Date Range** (default) — Analytics filter, report period
3. **Date + Time** — Automation schedule, event timestamp
4. **Preset Range** — "Last 7 days", "This month", "Custom"

**Date Format Standard:** "MMM D, YYYY" (masalan: "Jan 15, 2024")
**Range Format:** "Jan 1 - Jan 31, 2024"

**Anatomy (Date Range):**
```
┌─────────────────────────────────────┐
│ Jan 15, 2024 - Feb 14, 2024     📅 │ ← Trigger input
└─────────────────────────────────────┘
               ↓ Click
┌─────────────────────────────────────────────┐
│ Presets        │  January 2024              │
│                │  Su Mo Tu We Th Fr Sa      │
│ Last 7 days    │   1  2  3  4  5  6  7     │
│ Last 30 days   │   8  9 10 11 12 13 14     │
│ This month     │  [15 16 17 18 19 20] 21   │
│ Last month     │  22 23 24 25 26 27 28     │
│ Custom range   │  29 30 31                 │
│                │                            │
│                │  [Cancel]      [Apply]      │
└─────────────────────────────────────────────┘
```

**States:**

| State | Border | Background |
|-------|--------|------------|
| Default | 1px `#E5E7EB` | `#FFFFFF` |
| Hover | 1px `#D1D5DB` | `#F9FAFB` |
| Focused | 2px `#4F46E5` | `#FFFFFF`, ring 4px |
| Open | 2px `#4F46E5` | Calendar visible |
| Disabled | 1px `#E5E7EB` | `#F3F4F6` |
| Error | 2px `#EF4444` | Helper text red |

**Trigger Input:** Height 40px, min-width 240px, padding 10px 14px, radius 8px
**Calendar Panel:** radius 12px, shadow-lg, padding 16px

**Calendar Day States:**

| State | Style |
|-------|-------|
| Default | `#111827`, hover: `#F3F4F6` bg |
| Today | `border: 1px #4F46E5`, `font-weight: 600` |
| Selected | `bg: #4F46E5`, `color: white`, radius 50% |
| In Range | `bg: #EEF2FF` (primary-50) |
| Disabled (past) | `color: #D1D5DB`, `cursor: not-allowed` |

**Preset Buttons:** width 140px, padding 8px 12px, font 14px, hover: `bg: #F3F4F6`

**Ishlatilgan joylar:** 15-analytics.md, 25-advanced-analytics.md, 17-billing.md, 13-automation.md, 20-contacts-crm.md, 16-settings.md

---

## 7. Ikonlar

- **Uslub:** Outline (Heroicons yoki Phosphor Icons)
- **O'lcham:** 20px (default), 16px (small), 24px (large)
- **Rang:** `#6B7280` (default), `#4F46E5` (active)
- **Stroke width:** 1.5px

---

## 8. Responsive Breakpoints

| Breakpoint | Kenglik | Nomi |
|------------|---------|------|
| Mobile | 375px | sm |
| Tablet | 768px | md |
| Desktop | 1024px | lg |
| Wide | 1440px | xl |
| Ultra-wide | 1920px | 2xl |

### Responsive xulq-atvor
- **Sidebar:** Desktop — 240px; Tablet — collapsed (64px, faqat ikonlar); Mobile — bottom navigation
- **Chat layout:** Desktop — 3 panel; Tablet — 2 panel; Mobile — full screen stack
- **Landing:** Desktop — multi-column; Tablet — 2 column; Mobile — single column
- **Kartalar:** Desktop — grid; Mobile — vertical stack

---

## 9. Animatsiyalar

| Animatsiya | Parametrlar | Ishlatilishi |
|-----------|-------------|-------------|
| Fade in | opacity 0→1, 200ms ease | Sahifa yuklash, modal ochish |
| Slide up | translateY(20px→0), 300ms ease | Widget ochilishi, toast |
| Scale | scale(0.95→1), 150ms ease | Tugma bosish, dropdown |
| Hover lift | translateY(-2px), 200ms | Kartalar hover |
| Pulse | scale(1→1.1→1), 1s loop | Badge, notification dot |
| Skeleton | gradient shimmer, 1.5s loop | Yuklanish holati |
| Spinner | rotate(360deg), 1s linear loop | Loading |
| Confetti | particles, 2s | Muvaffaqiyat ekranlari |

---

## 10. Toast / Notification (Consolidated)

| Variant | Icon | Icon Color | Background | Text Color | Border | Duration | Ishlatilishi |
|---------|------|------------|------------|------------|--------|----------|-------------|
| **Success** | CheckCircle 20px | `#10B981` | `#ECFDF5` | `#065F46` | 1px `#A7F3D0` | 3s | "Sozlamalar saqlandi" |
| **Error** | XCircle 20px | `#EF4444` | `#FEF2F2` | `#991B1B` | 1px `#FECACA` | 5s | "Xatolik yuz berdi" |
| **Warning** | AlertTriangle 20px | `#F59E0B` | `#FFFBEB` | `#92400E` | 1px `#FDE68A` | 4s | "Limit tugayapti" |
| **Info** | InfoCircle 20px | `#3B82F6` | `#EFF6FF` | `#1E40AF` | 1px `#BFDBFE` | 3s | "Yangi xabar keldi" |

**O'lchamlar:**
- Max-width: 400px
- Min-width: 300px
- Padding: 16px
- Border-radius: 12px (radius-lg)
- Height: auto (min 64px)
- Gap between icon and text: 12px

**Joylashuv:** Top-right corner, 24px margin from edge

**Animatsiya:**
- **Slide-in:** translateX(100%) → translateX(0), 300ms ease-out
- **Visible:** 3-5 soniya (variantga qarab)
- **Slide-out:** opacity 1→0 + translateX(0) → translateX(100%), 200ms ease-in

**Stacking:** Multiple toasts stack vertically, 12px gap

**Close button:**
- X icon 16px, top-right 12px from edge
- Color: `#6B7280` default, `#111827` hover
- Click closes immediately
- 32×32px clickable area

**ASCII Wireframe:**
```
┌─────────────────────────────────┐
│  ✓  Sozlamalar saqlandi    ✕    │  Success toast
│     ↑ icon 20px      close↑     │  64px min height
└─────────────────────────────────┘  400px max-width
      ↑ 12px gap
```
---

## 11. ANIMATION SPECIFICATIONS (BATAFSIL)

### 11.1. Timing Functions (Easing)

| Nom | Cubic-bezier | Ishlatilishi |
|-----|--------------|-------------|
| ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` | Default, universal |
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` | Entering elements (modal, dropdown) |
| ease-in | `cubic-bezier(0.4, 0, 1, 1)` | Exiting elements |
| ease-spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful interactions (button click) |
| ease-smooth | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Smooth transitions |

**Figma:** Use "Spring" animation for interactive elements, "Ease Out" for entrances.

### 11.2. Duration Taxonomy

| Duration | Milliseconds | Foydalanish |
|----------|--------------|-------------|
| Instant | 0-50ms | Color changes, hover states |
| Fast | 100ms | Button clicks, checkbox toggles |
| Base | 150-200ms | Default transitions, fade-in/out |
| Moderate | 300ms | Modal open/close, slide animations |
| Slow | 400-500ms | Page transitions, complex animations |
| Very Slow | 600ms+ | Storytelling animations (confetti, success) |

**Rule:** Shorter = feels responsive. Longer = draws attention.

### 11.3. Core Animation Patterns

#### Pattern 1: Modal / Dialog

```css
/* Open */
.modal-enter {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}
.modal-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: opacity 200ms ease-out, transform 200ms ease-out;
}

/* Close */
.modal-exit {
  opacity: 1;
  transform: scale(1);
}
.modal-exit-active {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 150ms ease-in, transform 150ms ease-in;
}
```

**Figma:** Create 3 frames: Default (scale 0.95, opacity 0%), Active (scale 100%), Exit (scale 95%, opacity 0%). Prototype with "Smart Animate" 200ms Ease Out.

#### Pattern 2: Sidebar Collapse/Expand

```css
.sidebar {
  width: 240px;
  transition: width 300ms ease-in-out;
}

.sidebar.collapsed {
  width: 64px;
}

.sidebar-item-text {
  opacity: 1;
  transition: opacity 150ms ease-in-out 50ms; /* Delay 50ms */
}

.sidebar.collapsed .sidebar-item-text {
  opacity: 0;
  transition: opacity 100ms ease-in;
}
```

**Stagger:** Text fades out faster (100ms) than sidebar collapses (300ms) to avoid clipping.

#### Pattern 3: Dropdown / Combobox

```css
.dropdown-enter {
  opacity: 0;
  transform: translateY(-5px);
}
.dropdown-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 150ms ease-out, transform 150ms ease-out;
}
```

**Best Practice:** Always animate from direction of trigger (if button is above, slide down from top).

#### Pattern 4: Toast Notification

```css
.toast-enter {
  opacity: 0;
  transform: translateX(100%);
}
.toast-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: all 300ms ease-out;
}

/* Auto-dismiss after 3s */
.toast-exit {
  opacity: 1;
  height: auto;
}
.toast-exit-active {
  opacity: 0;
  height: 0;
  margin-top: 0;
  transition: opacity 200ms ease-in, height 200ms ease-in 50ms, margin-top 200ms ease-in 50ms;
}
```

**Stagger:** Opacity fades first, then height collapses (prevents jump).

#### Pattern 5: Button Click Feedback

```css
.button {
  transform: scale(1);
  transition: transform 100ms ease-spring;
}

.button:active {
  transform: scale(0.98);
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}
```

**Figma:** Prototype with "Spring" animation, 100ms.

#### Pattern 6: Card Hover Lift

```css
.card {
  transition: transform 200ms ease-out, box-shadow 200ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}
```

#### Pattern 7: Skeleton Loading

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
}
```

**Figma:** Create gradient background with offset animation, 1.5s loop.

#### Pattern 8: Page Transition

```css
.page-enter {
  opacity: 0;
  transform: translateX(20px);
}
.page-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.page-exit {
  opacity: 1;
}
.page-exit-active {
  opacity: 0;
  transition: opacity 200ms ease-in;
}
```

**Note:** Exiting page fades faster (200ms) to make room for entering page.

#### Pattern 9: Toggle Switch

```css
.toggle-knob {
  transform: translateX(0);
  transition: transform 200ms ease-in-out;
}

.toggle.checked .toggle-knob {
  transform: translateX(24px);
}

.toggle {
  background-color: #D1D5DB;
  transition: background-color 200ms ease-in-out;
}

.toggle.checked {
  background-color: #4F46E5;
}
```

**Figma:** Create 2 variants: Off (knob left, gray bg), On (knob right, primary bg). Smart Animate 200ms.

#### Pattern 10: Accordion Expand/Collapse

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
}

.accordion.expanded .accordion-content {
  max-height: 500px; /* Approximate max */
}
```

**Better Approach (JS):**
```javascript
element.style.height = element.scrollHeight + 'px';
```

#### Pattern 11: Badge Pulse

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.badge-unread {
  animation: pulse 1s ease-in-out infinite;
}
```

**Usage:** Notification badges, new message indicators.

#### Pattern 12: Confetti Success

```javascript
// Use libraries like canvas-confetti or react-confetti
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 },
  duration: 2000,
});
```

**Figma:** You can't prototype confetti in Figma, but show a celebratory icon animation (scale bounce).

### 11.4. Micro-interaction Guidelines

| Element | Hover | Active | Focus | Transition |
|---------|-------|--------|-------|------------|
| Button Primary | bg darker, lift -1px | scale 0.98 | outline 2px primary | 100ms ease-out |
| Button Secondary | border primary, bg light | scale 0.98 | outline 2px primary | 100ms ease-out |
| Input | border primary | - | border primary, shadow | 150ms ease |
| Checkbox | border primary | scale 0.95 | outline 2px | 100ms ease |
| Link | underline, color darker | - | outline 2px | instant |
| Card | lift -4px, shadow larger | - | outline 2px | 200ms ease-out |
| Avatar | ring 2px primary | - | - | 150ms ease |
| Badge | scale 1.05 | - | - | 100ms ease |
| Icon Button | bg gray-100, rotate 15deg | scale 0.95 | outline 2px | 100ms ease |
| Tab | border-bottom primary | - | outline 2px | 200ms ease |

### 11.5. Stagger Animations

**When to use:** Animating lists (chat messages, notifications, search results).

```css
.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
/* ... */
```

**Figma:** Prototype each item with increasing delay (0ms, 50ms, 100ms...).

**React (Framer Motion):**
```javascript
<motion.ul
  variants={{
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }}
>
  {items.map((item) => (
    <motion.li
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item.name}
    </motion.li>
  ))}
</motion.ul>
```

### 11.6. Reduced Motion

**Accessibility:** Respect user's `prefers-reduced-motion` setting.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Why:** Users with vestibular disorders can feel nauseous from animations.

### 11.7. Animation Performance

**Best Practices:**
1. **Use `transform` and `opacity`** only (GPU-accelerated).
   - ✅ `transform: translateY(-10px)`
   - ❌ `top: -10px`
2. **Avoid animating:** `width`, `height`, `margin`, `padding` (triggers layout reflow).
3. **Use `will-change`** sparingly for complex animations:
   ```css
   .modal {
     will-change: transform, opacity;
   }
   ```
   **Remove after animation:**
   ```javascript
   element.addEventListener('animationend', () => {
     element.style.willChange = 'auto';
   });
   ```
4. **Debounce scroll/resize listeners** to avoid jank.

### 11.8. Icon System Specification

| Icon Library | Size | Usage |
|--------------|------|-------|
| Heroicons | 16px, 20px, 24px | Primary icon library (outline + solid variants) |
| Phosphor Icons | 16px, 20px, 24px, 32px | Alternative (if Heroicons doesn't have icon) |
| Custom icons | 24px, 48px | Logo, brand-specific |

**Icon Colors:**
- Default: `#6B7280` (Gray-500)
- Active/Selected: `#4F46E5` (Primary-600)
- Disabled: `#D1D5DB` (Gray-300)
- Success: `#10B981`
- Error: `#EF4444`
- Warning: `#F59E0B`

**When to use Emoji:**
- ✅ Illustrations (error pages, empty states)
- ✅ Celebrations (confetti, success modals)
- ❌ Functional icons (buttons, navigation)
- ❌ Status indicators (use colored dots instead)

**Icon Animation:**
```css
.icon {
  transition: transform 150ms ease, color 150ms ease;
}

.icon:hover {
  transform: scale(1.1);
  color: #4F46E5;
}

/* Rotating loader */
.icon-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 11.9. MOTION DESIGN CHECKLIST

Before shipping animations, check:

- [ ] All animations have duration between 100-500ms (except storytelling >500ms)
- [ ] Modal open/close uses scale + fade
- [ ] Dropdowns slide from trigger direction
- [ ] Buttons have active state (scale 0.98)
- [ ] Cards lift on hover (-4px translateY)
- [ ] Toasts slide from right and auto-dismiss
- [ ] Loading states use skeleton shimmer
- [ ] Lists use stagger animation (50ms delay between items)
- [ ] Focus states have visible outline (2px primary)
- [ ] Toggle switches animate knob position (200ms ease-in-out)
- [ ] Icons scale on hover (1.1x)
- [ ] Sidebar collapse/expand is smooth (300ms)
- [ ] Page transitions fade (300ms)
- [ ] `prefers-reduced-motion` is respected
- [ ] Only `transform` and `opacity` are animated (performance)
- [ ] No animation lasts longer than 1s (except infinite loops)

---

## 12. FIGMA ANIMATION PROTOTYPING GUIDE

### 12.1. Smart Animate Setup

1. **Create 2 frames:** "Before" and "After"
2. **Use identical layer names** (Figma matches by name)
3. **Change properties:** position, size, opacity, fill
4. **Prototype:** Click "Before" frame → Prototype panel → "On Click" → Navigate to "After" → Animation "Smart Animate" → Easing "Ease Out" → Duration 200ms

**Example: Button Hover**
- Frame 1: Button (bg #4F46E5, y=0)
- Frame 2: Button (bg #6366F1, y=-2)
- Prototype: On Hover → Navigate to Frame 2 → Smart Animate → 100ms Ease Out

### 12.2. Component Variants for States

**Best Practice:** Use component variants for state-based animations.

1. **Create component:** Button
2. **Add variants:** Default, Hover, Active, Disabled
3. **Add interactive state prototyping:**
   - Default → (On Hover) → Hover variant → Smart Animate 100ms
   - Hover → (On Mouse Leave) → Default → Smart Animate 100ms
   - Hover → (On Click) → Active → Instant
   - Active → (After Delay 100ms) → Hover → Ease Out

### 12.3. Prototype Videos for Developers

**Deliverable:** Record screen of prototype interactions.

1. Figma → Present prototype
2. Record with Loom/QuickTime
3. Share video + Figma link with developer

**Include:**
- Modal open/close flow
- Dropdown open, select item, close
- Form validation (error states)
- Success toast animation
- Loading skeleton → data loaded

---

## 📝 ANIMATION IMPLEMENTATION NOTES (For Developers)

### React Animation Libraries

| Library | Bundle Size | Use Case |
|---------|-------------|----------|
| Framer Motion | ~60KB | Full-featured animations, gestures, variants |
| React Spring | ~30KB | Physics-based animations, spring configs |
| React Transition Group | ~9KB | Simple enter/exit transitions |
| CSS only | 0KB | Simplest, prefer for micro-interactions |

**Recommendation:** Use **CSS** for simple hover/focus states. Use **Framer Motion** for complex page transitions, modals, and lists.

### Example: Modal with Framer Motion

```jsx
import { motion, AnimatePresence } from 'framer-motion';

function Modal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="backdrop"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="modal"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

---

**STATUS:** ✅ Animation specifications to'liq yakunlandi  
**Qo'shildi:** 2026-02-12  
**Jami:** ~1000 qator animation specs + code examples + Figma guide