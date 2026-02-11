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

## 10. Toast / Notification

| Variant | Icon | Rang | Misol |
|---------|------|------|-------|
| Success | Checkmark | `#10B981` | "Sozlamalar saqlandi" |
| Error | X circle | `#EF4444` | "Xatolik yuz berdi" |
| Warning | Alert triangle | `#F59E0B` | "Limit tugayapti" |
| Info | Info circle | `#3B82F6` | "Yangi xabar keldi" |

**Joylashuv:** Yuqori o'ng burchak
**Animatsiya:** Slide-in o'ngdan, 2-3 soniya ko'rinadi, fade-out
**O'lcham:** Max-width 400px, padding 16px, radius-lg
