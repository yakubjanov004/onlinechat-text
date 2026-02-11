# CHATFLOW — Automation & Availability (Avtomatlashtirish va Mavjudlik)

## Umumiy yondashuv
Automation bo'limi — ish vaqtini, avtomatik javoblarni, triggerlarni va kutib olish xabarlarini boshqarish uchun yagona markaz. Dashboard shell ichida joylashgan, 4 ta tab bilan navigatsiya qilinadi. Har bir tab alohida funksional sohani boshqaradi: ish jadvalidan tortib, foydalanuvchi harakatiga asoslangan trigger mexanizmlarigacha.

**Muhim:** Bu sahifa operatorlarga yukni kamaytirish va javob vaqtini optimallashtirish uchun yaratilgan. Barcha sozlamalar real-time preview bilan birgalikda ishlaydi — o'zgarish kiritilganda sidebar'dagi oldindan ko'rish darhol yangilanadi.

---

## Layout — Umumiy Sahifa Tuzilishi

### Dashboard Shell
- **Joylashuv:** Dashboard sidebar (240px) + Header (64px) + Main Content
- **Main Content area:** Sidebar'dan o'ngda, header'dan pastda
- **Background:** `#F9FAFB` (Gray-50)
- **Padding:** 32px

### Tab Navigation
- **Joylashuv:** Main content yuqorisida
- **Tablar soni:** 4 ta
- **Tab nomlari:** Ish Vaqti | Auto-Reply | Triggers | Greetings
- **Tab uslubi:**
  - Font: 14px, Medium (500), `#6B7280` (Gray-500)
  - Active tab: `#4F46E5` (Primary), pastki border 2px `#4F46E5`
  - Hover: `#374151` (Gray-700)
  - Gap: tablar orasida 32px
  - Padding: 12px 0 (vertikal)
  - Border-bottom: 1px `#E5E7EB` (Gray-300) — to'liq kenglikda

### Content Area
- **Desktop:** Split layout — Settings (chap, 60%) + Preview sidebar (o'ng, 40%)
- **Max-width:** 1200px
- **Gap:** settings va preview orasida 32px
- **Background:** `#FFFFFF` kontent kartalari, `#F9FAFB` sahifa foni

### ASCII Wireframe — Umumiy Layout
```
┌─────────────────────────────────────────────────────────┐
│  SIDEBAR  │  HEADER: Automation & Availability          │
│  240px    ├─────────────────────────────────────────────┤
│           │  [ Ish Vaqti | Auto-Reply | Triggers | Greetings ] │
│  Nav      ├──────────────────────┬──────────────────────┤
│  links    │                      │                      │
│           │   SETTINGS AREA      │   PREVIEW SIDEBAR    │
│           │   (60%)              │   (40%)              │
│           │                      │                      │
│           │   Formalar,          │   Joriy holat,       │
│           │   jadvallar,         │   vidjet ko'rinishi  │
│           │   togglelar          │                      │
│           │                      │                      │
│           ├──────────────────────┴──────────────────────┤
│           │              [ Saqlash ]                     │
└─────────────────────────────────────────────────────────┘
```

---

## TAB 1 — ISH VAQTI (Working Hours)

### Vazifasi
Kompaniyaning ish vaqtini sozlash. Agar ish vaqti o'chirilgan bo'lsa — vidjet doimo "online" holatda ko'rsatiladi. Ish vaqti faollashtirilganda — belgilangan jadval bo'yicha vidjet avtomatik ravishda online/offline holatga o'tadi.

### 1.1 Asosiy Sozlamalar

**Toggle:**
```
☑ Ish vaqtini faollashtirish
```
- **Turi:** Checkbox toggle
- **Font:** 16px, Medium (500), `#111827` (Gray-900)
- **Holat:** ON = jadval ko'rsatiladi, OFF = vidjet doimo online
- **Toggle o'lchami:** 44px x 24px, border-radius: 12px
- **ON rangi:** `#4F46E5` (Primary)
- **OFF rangi:** `#D1D5DB` (Gray-300)
- **Qo'shimcha matn:** 14px, Regular, `#6B7280` — "Agar o'chirilgan bo'lsa, vidjet doimo online"
- **Margin-bottom:** 24px

### 1.2 Kunlik Jadval (Haftalik Grid)

**Layout:** 7 ta qator (Dushanba — Yakshanba), har bir qator bitta kun

**Har bir qator tuzilishi:**
| Element | Tavsif | Uslub |
|---------|--------|-------|
| **Kun nomi** | Dushanba, Seshanba... | 14px, Medium (500), `#111827`, 100px kenglik |
| **Radio: Ishlash kuni** | Ishlash kuni variant | Radio button, `#4F46E5` active |
| **Radio: Dam olish kuni** | Dam olish kuni variant | Radio button, `#6B7280` |
| **Time Picker (Boshlanish)** | 09:00 | Select dropdown, 80px kenglik |
| **"dan" label** | separator | 14px, Regular, `#6B7280` |
| **Time Picker (Tugash)** | 18:00 | Select dropdown, 80px kenglik |
| **"gacha" label** | separator | 14px, Regular, `#6B7280` |
| **+ Break qo'shish** | Tanaffus qo'shish | Text button, 14px, `#4F46E5` |

**Break qator (qo'shilganda):**
```
    Break: [13:00] — [14:00]  [✕ O'chirish]
```
- **Indent:** 100px (kun nomi kengligicha)
- **Background:** `#F9FAFB` (Gray-50)
- **Border-radius:** 6px
- **Padding:** 8px 12px
- **O'chirish tugmasi:** X icon, 16px, `#EF4444` (Error)

**Default holatlar:**
| Kun | Holat | Vaqt |
|-----|-------|------|
| Dushanba | Ishlash kuni | 09:00 — 18:00 |
| Seshanba | Ishlash kuni | 09:00 — 18:00 |
| Chorshanba | Ishlash kuni | 09:00 — 18:00 |
| Payshanba | Ishlash kuni | 09:00 — 18:00 |
| Juma | Ishlash kuni | 09:00 — 18:00 |
| Shanba | Dam olish kuni | — |
| Yakshanba | Dam olish kuni | — |

**Dam olish kuni holati:**
- Time picker'lar disabled (opacity: 0.5)
- "Dam olish kuni" label ko'rsatiladi, `#6B7280`

**Qator uslubi:**
- **Balandlik:** 52px
- **Border-bottom:** 1px `#E5E7EB`
- **Padding:** 0 16px
- **Hover:** background `#F9FAFB`
- **Gap:** elementlar orasida 16px

### 1.3 Barchaga Qo'llash Tugma

```
[ Barchaga qo'llash ]
```
- **Vazifasi:** Bitta kunning vaqtini barcha ishlash kunlariga nusxalash
- **Turi:** Secondary button (outline)
- **O'lcham:** height 36px, padding 12px 20px
- **Font:** 14px, Medium (500), `#4F46E5`
- **Border:** 1px `#4F46E5`, border-radius: 8px
- **Joylashuv:** Jadval ostida, chap tomonda
- **Margin-top:** 16px
- **Hover:** background `#EEF2FF` (Primary-50)

### 1.4 Timezone Dropdown

| Parametr | Qiymat |
|----------|--------|
| **Label** | Vaqt mintaqasi |
| **Font (label)** | 14px, Medium (500), `#374151` |
| **Dropdown kengligi** | 280px |
| **Balandlik** | 40px |
| **Border** | 1px `#D1D5DB`, border-radius: 8px |
| **Default** | (GMT+5) Toshkent |
| **Variantlar** | (GMT+5) Toshkent, (GMT+3) Moskva, (GMT+1) Berlin, (GMT+0) London |
| **Margin-top** | 24px |

### 1.5 Bayram Kunlari

**Sarlavha:**
```
Bayram kunlari
```
- **Font:** 16px, Semibold (600), `#111827`
- **Margin-top:** 32px

**Bayramlar ro'yxati:**
| Sana | Bayram nomi | Amallar |
|------|-------------|---------|
| 01.01.2026 | Yangi yil | [✏] [🗑] |
| 21.03.2026 | Navro'z | [✏] [🗑] |

**Har bir bayram qatori:**
- **Background:** `#FFFFFF`
- **Border:** 1px `#E5E7EB`
- **Border-radius:** 8px
- **Padding:** 12px 16px
- **Sana:** 14px, Semibold, `#111827`
- **Nom:** 14px, Regular, `#374151`
- **Gap:** qatorlar orasida 8px
- **Action iconlar:** 16px, `#6B7280`, hover `#4F46E5` (tahrir), `#EF4444` (o'chirish)

**+ Bayram qo'shish tugma:**
```
[ + Bayram qo'shish ]
```
- **Turi:** Text button with icon
- **Font:** 14px, Medium, `#4F46E5`
- **Margin-top:** 12px

**Bayram Qo'shish Modal:**
- **O'lcham:** 400px kenglik
- **Background:** `#FFFFFF`, border-radius: 12px
- **Shadow:** `0 20px 25px -5px rgba(0,0,0,0.1)`
- **Overlay:** `rgba(0,0,0,0.5)`
- **Sarlavha:** "Bayram qo'shish", 18px Bold, `#111827`
- **Maydonlar:**
  - Date Picker: sana tanlash, to'liq kenglik
  - Bayram nomi: text input, to'liq kenglik, placeholder "masalan: Navro'z"
- **Tugmalar:** [Bekor qilish] (ghost) + [Qo'shish] (primary)
- **Tugmalar gap:** 12px, o'ngda tekislangan

### 1.6 Preview Sidebar (Ish Vaqti)

**Joylashuv:** O'ng tomon, 40% kenglik
**Background:** `#FFFFFF`, border: 1px `#E5E7EB`, border-radius: 12px
**Padding:** 24px

**Tarkibi:**
```
┌──────────────────────┐
│   Joriy Holat         │
│   ● Online            │  (yashil dot + matn)
│                       │
│   Keyingi o'zgarish   │
│   Bugun 18:00 da      │
│   offline bo'ladi     │
│                       │
│   Ish vaqti summary   │
│   Du-Ju: 09:00-18:00  │
│   Sh-Ya: Dam olish    │
│                       │
│   Timezone: GMT+5     │
└──────────────────────┘
```

| Element | Uslub |
|---------|-------|
| **Sarlavha "Joriy Holat"** | 12px, Semibold, `#6B7280`, UPPERCASE |
| **Status matn** | 20px, Bold, `#10B981` (Online) / `#EF4444` (Offline) |
| **Status dot** | 8px, to'ldirilgan doira, tegishli rang |
| **Keyingi o'zgarish** | 14px, Regular, `#374151` |
| **Summary qatorlari** | 14px, Regular, `#374151` |
| **Timezone** | 14px, Regular, `#6B7280` |

### 1.7 Saqlash Tugma

```
[ Saqlash ]
```
- **Joylashuv:** Settings area pastida, o'ng tomonda
- **Turi:** Primary button
- **O'lcham:** height 44px, padding 12px 32px
- **Background:** `#4F46E5`, border-radius: 8px
- **Font:** 16px, Semibold (600), `#FFFFFF`
- **Hover:** `#4338CA` (Primary-700)
- **Disabled holat:** opacity 0.5, cursor not-allowed
- **Success toast:** "Sozlamalar saqlandi" — 3 soniya ko'rinadi

---

## TAB 2 — AUTO-REPLY (Avtomatik Javoblar)

### Vazifasi
Turli holatlarda (offline, band, birinchi javob) avtomatik xabar yuborish sozlamalari. Har bir xabar turi alohida boshqariladi.

### 2.1 Offline Auto-Reply

**Sarlavha qatori:**
```
Offline Auto-Reply     [toggle ☑]
```
- **Sarlavha:** 16px, Semibold (600), `#111827`
- **Toggle:** ON/OFF, 44x24px

**Kontent (toggle ON bo'lganda):**

**Textarea:**
- **Kenglik:** 100% (settings area)
- **Balandlik:** min 120px, max 200px (resize qilinadi)
- **Border:** 1px `#D1D5DB`, focus: 2px `#4F46E5`
- **Border-radius:** 8px
- **Padding:** 12px 16px
- **Font:** 14px, Regular, `#111827`
- **Placeholder:** "Hozir ish vaqtidan tashqaridamiz..."
- **Max belgilar:** 500
- **Character counter:** o'ng pastda, "0/500", 12px, `#6B7280`, 490+ bo'lsa `#EF4444`

**Variables (Textarea ostida):**
```
O'zgaruvchilar: {working_hours}  {company_name}  {agent_name}
```
- **Font:** 12px, Regular, `#6B7280`
- **Har bir variable:** inline badge, background `#EEF2FF`, padding 2px 8px, border-radius: 4px
- **Bosilganda:** variable textarea'ga qo'shiladi
- **Gap:** variablelar orasida 8px

**Qo'shimcha checkbox:**
```
☑ Ish vaqtini ko'rsatish
```
- **Font:** 14px, Regular, `#374151`
- **Checkbox:** 18px, `#4F46E5` checked
- **Margin-top:** 12px

### 2.2 Away Auto-Reply

**Sarlavha qatori:**
```
Away Auto-Reply — Barcha agentlar band bo'lganida    [toggle ☑]
```

**Textarea:** Offline bilan bir xil uslub
**Qo'shimcha maydon:**
```
Kutish vaqti: [ 5 ] daqiqa
```
- **Input:** Number input, 60px kenglik, min: 1, max: 30
- **Label:** 14px, Regular, `#374151`
- **Suffix:** "daqiqa", 14px, `#6B7280`

### 2.3 First Response Auto-Reply

**Sarlavha qatori:**
```
First Response Auto-Reply     [toggle ☑]
```

**Textarea:** Bir xil uslub
**Qo'shimcha maydon:**
```
Kechikish: [ 3 ] soniya
```
- **Input:** Number input, 60px kenglik, min: 0, max: 10
- **Label:** 14px, Regular, `#374151`
- **Suffix:** "soniya", 14px, `#6B7280`

### 2.4 Auto-Reply Preview Sidebar

```
┌──────────────────────────┐
│  📱 Vidjet Preview        │
│ ┌────────────────────────┐│
│ │ CHATFLOW              ││
│ │ ─────────────────     ││
│ │                       ││
│ │  🤖 Hozir ish vaqtidan││
│ │  tashqaridamiz.       ││
│ │  Ish vaqtimiz:        ││
│ │  Du-Ju 09:00-18:00    ││
│ │                       ││
│ │  [Xabar yozing...]    ││
│ └────────────────────────┘│
│                           │
│  Offline Preview ▲        │
│  First Response Preview ▼ │
└──────────────────────────┘
```

- **Background:** `#FFFFFF`, border: 1px `#E5E7EB`, border-radius: 12px
- **Vidjet preview:** kichik vidjet simulatsiyasi, scale 0.8
- **Toggle:** Offline va First Response previewlarini almashtirish

### ASCII Wireframe — Auto-Reply Tab
```
┌─────────────────────────────────┬──────────────────────┐
│                                 │                      │
│  OFFLINE AUTO-REPLY      [ON]  │  Preview             │
│  ┌─────────────────────────┐   │  ┌──────────────┐    │
│  │ Hozir ish vaqtidan     │   │  │ Chat Widget   │    │
│  │ tashqaridamiz...       │   │  │              │    │
│  │                  45/500 │   │  │ Bot xabar... │    │
│  └─────────────────────────┘   │  │              │    │
│  {working_hours} {company_name}│  └──────────────┘    │
│  ☑ Ish vaqtini ko'rsatish      │                      │
│                                 │                      │
│  AWAY AUTO-REPLY         [ON]  │                      │
│  ┌─────────────────────────┐   │                      │
│  │ Barcha agentlar band... │   │                      │
│  └─────────────────────────┘   │                      │
│  Kutish vaqti: [5] daqiqa      │                      │
│                                 │                      │
│  FIRST RESPONSE          [ON]  │                      │
│  ┌─────────────────────────┐   │                      │
│  │ Rahmat! Tez orada...   │   │                      │
│  └─────────────────────────┘   │                      │
│  Kechikish: [3] soniya         │                      │
│                                 │                      │
│                    [ Saqlash ]  │                      │
└─────────────────────────────────┴──────────────────────┘
```

---

## TAB 3 — TRIGGERS (Triggerlar)

### Vazifasi
Foydalanuvchi harakatlariga asoslangan avtomatik xabarlar va harakatlarni sozlash. Trigger — ma'lum shart bajarilganda avtomatik ishga tushadigan mexanizm.

### 3.1 Trigger Ro'yxati

**Yuqori qator:**
```
Triggerlar                              [ + Yangi trigger ]
```
- **Sarlavha:** 20px, Semibold, `#111827`
- **Tugma:** Primary button, height 40px, padding 10px 20px
- **Font:** 14px, Medium, `#FFFFFF`
- **Icon:** + (plus), 16px, `#FFFFFF`

**Trigger Cards List:**
Mavjud triggerlar kartalar shaklida ko'rsatiladi, vertikal stack.

### 3.2 Trigger Card Uslubi

| Parametr | Qiymat |
|----------|--------|
| **Background** | `#FFFFFF` |
| **Border** | 1px `#E5E7EB` |
| **Border-radius** | 12px |
| **Padding** | 20px 24px |
| **Shadow** | `0 1px 2px rgba(0,0,0,0.05)` |
| **Hover shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` |
| **Gap** | kartalar orasida 16px |
| **Min-height** | Auto |

### 3.3 Welcome Message Trigger (Batafsil)

**Karta sarlavhasi:**
```
Welcome Message                    [Faol ☑]
```
- **Nomi:** 16px, Semibold, `#111827`
- **Toggle:** Faol/Nofaol, 44x24px

**Trigger nomi input:**
- **Label:** "Trigger nomi", 14px, Medium, `#374151`
- **Input:** text, to'liq kenglik, height 40px, border 1px `#D1D5DB`
- **Default:** "Welcome Message"

**Shart dropdown:**
- **Label:** "Shart", 14px, Medium, `#374151`
- **Dropdown:** to'liq kenglik, height 40px
- **Variantlar:**
  - Sahifaga kirish (Page Load)
  - X soniya turganida (Time on Page)
  - Scroll qilganida (Scroll Depth)
  - Chiqmoqchi bo'lganida (Exit Intent)
  - Ma'lum sahifada (Specific Page)
  - Ma'lum URL'da (URL Match)

**Kechikish input:**
```
Kechikish: [ 3 ] soniya
```
- **Input:** Number, 60px kenglik, min: 0, max: 60
- **Suffix:** "soniya", 14px, `#6B7280`

**Xabar textarea:**
- **Label:** "Xabar matni", 14px, Medium, `#374151`
- **Textarea:** to'liq kenglik, min-height: 80px
- **Max belgilar:** 300, character counter ko'rsatiladi
- **Border:** 1px `#D1D5DB`, focus: 2px `#4F46E5`

**Qo'shimcha checkboxlar:**
```
☑ Faqat birinchi tashrifda ko'rsatish
☐ Faqat ma'lum sahifalarda ko'rsatish
```
- **Font:** 14px, Regular, `#374151`
- **Gap:** checkboxlar orasida 12px

**URL Pattern (ikkinchi checkbox tanlanganda):**
```
URL Pattern: [ /products/* ]
```
- **Input:** text, 280px kenglik, height 40px
- **Placeholder:** "/products/*"
- **Font:** 14px, Mono, `#374151`

**Karta pastki tugmalari:**
```
[ Saqlash ]  [ Test qilish ]
```
- **Saqlash:** Primary button, height 36px
- **Test qilish:** Outline button, height 36px, `#4F46E5` border
- **Gap:** 12px

### 3.4 Exit Intent Trigger

Welcome Message bilan o'xshash tuzilish, farqlari:
- **Default shart:** "Chiqmoqchi bo'lganida" (Exit Intent)
- **Xabar:** "Ketmoqchimisiz? Savollaringiz bo'lsa yozing!"
- **Kechikish yo'q** (darhol ishga tushadi)
- **Qo'shimcha:** ☑ Faqat desktop'da (mobile'da exit intent ishlamaydi)

### 3.5 Yangi Trigger Modal

**Modal o'lchami:** 560px kenglik
**Sarlavha:** "Yangi trigger yaratish", 20px, Bold, `#111827`
**Background:** `#FFFFFF`, border-radius: 16px
**Shadow:** `0 20px 25px -5px rgba(0,0,0,0.1)`
**Overlay:** `rgba(0,0,0,0.5)`

**5 ta trigger turi kartasi (2x3 grid yoki 3+2):**

| Trigger turi | Icon | Tavsif |
|-------------|------|--------|
| **Welcome** | Chat bubble | Sahifaga kirganda kutib olish xabari |
| **Exit Intent** | Arrow up-right | Foydalanuvchi sahifadan chiqmoqchi bo'lganda |
| **Time Based** | Clock | Ma'lum vaqt o'tganidan keyin |
| **Scroll Based** | Arrow down | Sahifani ma'lum foizga scroll qilganida |
| **Custom** | Gear/Code | Maxsus event bo'yicha |

**Har bir trigger turi kartasi:**
- **O'lcham:** 160px x 140px
- **Background:** `#FFFFFF`, hover: `#F9FAFB`
- **Border:** 1px `#E5E7EB`, selected: 2px `#4F46E5`
- **Border-radius:** 12px
- **Padding:** 20px
- **Icon:** 32px, `#4F46E5`
- **Nomi:** 14px, Semibold, `#111827`
- **Tavsif:** 12px, Regular, `#6B7280`
- **Tekislash:** markazda, vertikal stack

**Modal tugmalar:** [Bekor qilish] (ghost) + [Yaratish] (primary, disabled until selection)

### ASCII Wireframe — Triggers Tab
```
┌─────────────────────────────────────────┐
│  Triggerlar                  [+ Yangi]  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Welcome Message          [Faol ☑]  ││
│  │ Trigger nomi: [Welcome Message   ] ││
│  │ Shart: [Sahifaga kirish        ▼] ││
│  │ Kechikish: [3] soniya             ││
│  │ ┌─────────────────────────────┐   ││
│  │ │ Salom! Sizga qanday        │   ││
│  │ │ yordam bera olamiz?        │   ││
│  │ └─────────────────────────────┘   ││
│  │ ☑ Faqat birinchi tashrifda        ││
│  │ ☐ Faqat ma'lum sahifalarda        ││
│  │            [Saqlash] [Test qilish] ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Exit Intent              [Faol ☑]  ││
│  │ ...                                ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

---

## TAB 4 — GREETINGS (Kutib Olish)

### Vazifasi
Chat vidjetining ko'rinishi va kutib olish xabarlarini sozlash. Bu tab vidjetning foydalanuvchiga ko'rinadigan qismini boshqaradi.

### 4.1 Widget Button Text

- **Label:** "Vidjet tugma matni", 14px, Medium, `#374151`
- **Input:** text, to'liq kenglik, height 40px
- **Default:** "Yordam kerakmi?"
- **Max:** 30 belgi
- **Border:** 1px `#D1D5DB`, focus: 2px `#4F46E5`, border-radius: 8px

### 4.2 Chat Window Title

- **Label:** "Chat oyna sarlavhasi", 14px, Medium, `#374151`
- **Input:** text, to'liq kenglik, height 40px
- **Default:** "CHATFLOW Support"
- **Max:** 40 belgi

### 4.3 Welcome Message

- **Label:** "Kutib olish xabari", 14px, Medium, `#374151`
- **Textarea:** to'liq kenglik, min-height: 100px
- **Default:** "Salom! Sizga qanday yordam bera olamiz?"
- **Max:** 200 belgi
- **Character counter:** "0/200", 12px, `#6B7280`, o'ng pastda
- **180+ bo'lsa:** counter rangi `#F59E0B` (Warning)
- **200 bo'lsa:** counter rangi `#EF4444` (Error)

### 4.4 Input Placeholder

- **Label:** "Xabar maydoni placeholder", 14px, Medium, `#374151`
- **Input:** text, to'liq kenglik, height 40px
- **Default:** "Xabaringizni yozing..."
- **Max:** 50 belgi

### 4.5 Agent Typing Indicator

- **Label:** "Agent yozmoqda matni", 14px, Medium, `#374151`
- **Input:** text, to'liq kenglik, height 40px
- **Default:** "Agent yozmoqda..."
- **Max:** 40 belgi

### 4.6 Live Preview Sidebar (Greetings)

**Joylashuv:** O'ng tomon, 40% kenglik
**Kontent:** Real-time vidjet simulatsiyasi

```
┌──────────────────────────┐
│   LIVE PREVIEW            │
│                           │
│   ┌─────────────────────┐ │
│   │ CHATFLOW Support    │ │
│   │ ─────────────────── │ │
│   │                     │ │
│   │  Salom! Sizga       │ │
│   │  qanday yordam      │ │
│   │  bera olamiz?       │ │
│   │                     │ │
│   │ [Xabaringizni       │ │
│   │  yozing...       ]  │ │
│   └─────────────────────┘ │
│                           │
│   ┌─────────────────────┐ │
│   │  💬 Yordam kerakmi? │ │
│   └─────────────────────┘ │
│   (Widget button preview) │
└──────────────────────────┘
```

- **Vidjet preview:** Scaled 0.75, exact replica of real widget
- **Widget button:** `#4F46E5` bg, white text, border-radius: 24px, shadow-lg
- **Chat window:** `#FFFFFF` bg, border: 1px `#E5E7EB`, border-radius: 16px
- **Sarlavha bar:** `#4F46E5` bg, white text, border-radius: 16px 16px 0 0, height: 56px
- **Real-time yangilanish:** Input o'zgartirilganda preview darhol yangilanadi

### 4.7 Tugmalar

```
[ Saqlash ]  [ Test qilish ]
```
- **Saqlash:** Primary button, height 44px, `#4F46E5`
- **Test qilish:** Outline button, height 44px, border `#4F46E5`
- **Keyboard shortcut:** Ctrl+S = Saqlash
- **Shortcut tooltip:** Saqlash tugmasi ustida hover qilganda "Ctrl+S" ko'rsatiladi
- **Gap:** 12px

### ASCII Wireframe — Greetings Tab
```
┌─────────────────────────────────┬──────────────────────┐
│                                 │                      │
│  Vidjet tugma matni             │  LIVE PREVIEW        │
│  [Yordam kerakmi?           ]   │                      │
│                                 │  ┌────────────────┐  │
│  Chat oyna sarlavhasi           │  │ CHATFLOW       │  │
│  [CHATFLOW Support          ]   │  │ Support        │  │
│                                 │  │                │  │
│  Kutib olish xabari             │  │ Salom! Sizga   │  │
│  ┌─────────────────────────┐    │  │ qanday yordam  │  │
│  │ Salom! Sizga qanday     │    │  │ bera olamiz?   │  │
│  │ yordam bera olamiz?     │    │  │                │  │
│  │                  38/200 │    │  │ [Xabaringizni  │  │
│  └─────────────────────────┘    │  │  yozing...]    │  │
│                                 │  └────────────────┘  │
│  Xabar maydoni placeholder      │                      │
│  [Xabaringizni yozing...   ]   │  [💬 Yordam kerakmi?]│
│                                 │                      │
│  Agent yozmoqda matni           │                      │
│  [Agent yozmoqda...         ]   │                      │
│                                 │                      │
│         [ Saqlash ] [ Test ]    │                      │
└─────────────────────────────────┴──────────────────────┘
```

---

## Responsive Xulq-atvor

| Breakpoint | Layout | O'zgarishlar |
|------------|--------|-------------|
| **Desktop (1440px)** | Split: Settings 60% + Preview 40% | To'liq layout, side-by-side |
| **Desktop (1024px)** | Split: Settings 55% + Preview 45% | Biroz tor, gap 24px |
| **Tablet (768px)** | Vertikal stack | Settings ustida, Preview pastda |
| **Mobile (375px)** | Full width, 1 ustun | Preview yo'qoladi (faqat [Preview] tugma orqali modal), input'lar to'liq kenglik |

**Tablet uchun maxsus:**
- Tab navigation: horizontal scroll (overflow-x: auto)
- Jadval qatorlari: stack layout (kun nomi ustida, controls pastda)
- Preview: settings ostida, 100% kenglik
- Padding: 24px

**Mobile uchun maxsus:**
- Tab navigation: horizontal scroll, active tab ko'rinadi
- Jadval: vertikal kartalar (har bir kun alohida karta)
- Time picker: to'liq kenglik
- Textarea: min-height 100px
- Preview: modal shaklida ([Preview] tugma bilan ochiladi)
- Padding: 16px
- Saqlash tugma: to'liq kenglik (sticky bottom)

---

## Empty / Loading / Error States

| Holat | Ko'rinish |
|-------|-----------|
| **Loading** | Skeleton forms — jadval qatorlari va textarea'lar shimmer animatsiya bilan |
| **Empty triggers** | Icon (robot/zap) + "Triggerlar yo'q" + "Birinchi triggeringizni yarating" + [+ Yangi trigger] tugma |
| **Empty holidays** | "Bayram kunlari qo'shilmagan" + [+ Bayram qo'shish] tugma |
| **Save error** | Toast: "Sozlamalarni saqlab bo'lmadi. Qayta urinib ko'ring." — `#EF4444` bg, 4 soniya |
| **Save success** | Toast: "Sozlamalar saqlandi" — `#10B981` bg, 3 soniya |

---

## Micro-interactions

| Element | Animatsiya |
|---------|-----------|
| **Toggle switch** | Smooth slide, 200ms ease, background color transition |
| **Tab underline** | Slide left/right, 250ms ease-out |
| **Save toast** | Slide-in from top, 300ms, auto-dismiss 3s |
| **Preview update** | Fade transition, 150ms, real-time |
| **Trigger card expand** | Height auto animation, 200ms |
| **Modal open** | Fade-in overlay + scale-up content, 250ms |
| **Modal close** | Fade-out, 200ms |
| **Hover states** | All 150ms ease transition |

---

## Accessibility

| Element | Talablar |
|---------|----------|
| **Toggle** | Min touch target: 44x44px, role="switch", aria-checked |
| **Tab** | role="tab", aria-selected, keyboard arrow navigation |
| **Time picker** | aria-label="Boshlanish vaqti", keyboard accessible |
| **Textarea** | aria-describedby="character-counter" |
| **Modal** | Focus trap, Escape to close, role="dialog" |
| **Color contrast** | All text 4.5:1 minimum ratio |
| **Focus outline** | 2px `#4F46E5`, offset 2px |

---

## Figma Komponent Daraxti — To'liq

```
automation-page/
├── page-wrapper (dashboard-shell + main-content)
│   ├── tab-navigation (auto-layout, horizontal, gap: 32px)
│   │   ├── tab-item "Ish Vaqti" (variant: default/active/hover)
│   │   ├── tab-item "Auto-Reply"
│   │   ├── tab-item "Triggers"
│   │   └── tab-item "Greetings"
│   │
│   ├── tab-content-ish-vaqti/
│   │   ├── settings-panel (60%)
│   │   │   ├── toggle-row ("Ish vaqtini faollashtirish", checkbox + label)
│   │   │   ├── weekly-schedule (auto-layout, vertical, gap: 0)
│   │   │   │   ├── day-row-1 "Dushanba" (radio + time-picker + break-btn)
│   │   │   │   ├── day-row-2 "Seshanba"
│   │   │   │   ├── day-row-3 "Chorshanba"
│   │   │   │   ├── day-row-4 "Payshanba"
│   │   │   │   ├── day-row-5 "Juma"
│   │   │   │   ├── day-row-6 "Shanba" (dam olish, disabled times)
│   │   │   │   └── day-row-7 "Yakshanba" (dam olish, disabled times)
│   │   │   ├── btn-apply-all ("Barchaga qo'llash", outline)
│   │   │   ├── timezone-dropdown (label + select)
│   │   │   ├── holidays-section/
│   │   │   │   ├── section-title ("Bayram kunlari")
│   │   │   │   ├── holiday-list (auto-layout, vertical, gap: 8px)
│   │   │   │   │   ├── holiday-item ("01.01.2026 — Yangi yil", edit + delete)
│   │   │   │   │   └── holiday-item ("21.03.2026 — Navro'z", edit + delete)
│   │   │   │   └── btn-add-holiday ("+ Bayram qo'shish", text-btn)
│   │   │   └── btn-save ("Saqlash", primary)
│   │   └── preview-sidebar (40%)
│   │       ├── status-indicator ("Joriy Holat: Online")
│   │       ├── next-change ("Keyingi o'zgarish: Bugun 18:00")
│   │       └── schedule-summary ("Du-Ju: 09:00-18:00")
│   │
│   ├── tab-content-auto-reply/
│   │   ├── settings-panel (60%)
│   │   │   ├── offline-section/
│   │   │   │   ├── header-row (title + toggle)
│   │   │   │   ├── textarea (500 char max, counter)
│   │   │   │   ├── variables-row ({working_hours}, {company_name}, {agent_name})
│   │   │   │   └── checkbox ("Ish vaqtini ko'rsatish")
│   │   │   ├── away-section/
│   │   │   │   ├── header-row (title + toggle)
│   │   │   │   ├── textarea
│   │   │   │   └── wait-time-input ("Kutish vaqti: [5] daqiqa")
│   │   │   ├── first-response-section/
│   │   │   │   ├── header-row (title + toggle)
│   │   │   │   ├── textarea
│   │   │   │   └── delay-input ("Kechikish: [3] soniya")
│   │   │   └── btn-save
│   │   └── preview-sidebar (40%)
│   │       └── widget-preview (offline + first-response toggle)
│   │
│   ├── tab-content-triggers/
│   │   ├── header-row ("Triggerlar" + [+ Yangi trigger] btn)
│   │   ├── trigger-cards-list (auto-layout, vertical, gap: 16px)
│   │   │   ├── trigger-card-welcome/
│   │   │   │   ├── card-header (name + faol toggle)
│   │   │   │   ├── trigger-name-input
│   │   │   │   ├── condition-dropdown
│   │   │   │   ├── delay-input
│   │   │   │   ├── message-textarea
│   │   │   │   ├── checkboxes (birinchi tashrif, ma'lum sahifalar)
│   │   │   │   ├── url-pattern-input (conditional)
│   │   │   │   └── actions-row ([Saqlash] + [Test qilish])
│   │   │   └── trigger-card-exit-intent/ (similar structure)
│   │   └── new-trigger-modal/
│   │       ├── modal-header ("Yangi trigger yaratish")
│   │       ├── trigger-type-grid (2x3)
│   │       │   ├── type-card "Welcome"
│   │       │   ├── type-card "Exit Intent"
│   │       │   ├── type-card "Time Based"
│   │       │   ├── type-card "Scroll Based"
│   │       │   └── type-card "Custom"
│   │       └── modal-actions ([Bekor qilish] + [Yaratish])
│   │
│   └── tab-content-greetings/
│       ├── settings-panel (60%)
│       │   ├── widget-button-text-input
│       │   ├── chat-window-title-input
│       │   ├── welcome-message-textarea (200 char, counter)
│       │   ├── input-placeholder-input
│       │   ├── agent-typing-input
│       │   └── actions-row ([Saqlash] + [Test qilish])
│       └── preview-sidebar (40%)
│           ├── chat-window-preview (title + welcome + input)
│           └── widget-button-preview
```

---

## Figma Maxsus Komponentlar

### Time Picker Component
```
time-picker/
├── wrapper (auto-layout, horizontal, border: 1px #D1D5DB, radius: 8px)
│   ├── hours-select (2 raqamli, 00-23)
│   ├── separator (text: ":", 14px, #6B7280)
│   └── minutes-select (2 raqamli, 00/15/30/45)
├── variants: default, focused, disabled, error
├── size: 80px x 40px
```

### Day Selector Row Component
```
day-selector/
├── wrapper (auto-layout, horizontal, gap: 16px, height: 52px)
│   ├── day-name (100px, 14px Medium, #111827)
│   ├── radio-group (Ishlash/Dam olish)
│   ├── time-range (time-picker + "dan" + time-picker + "gacha")
│   └── break-action ("+ Break qo'shish", text-btn)
├── variants: workday, holiday, with-break
```

### Textarea with Counter Component
```
textarea-counter/
├── wrapper (auto-layout, vertical, gap: 4px)
│   ├── textarea (min-height: 80px, resize-y)
│   └── footer (auto-layout, horizontal, space-between)
│       ├── variables-row (optional)
│       └── counter ("45/500", 12px, #6B7280)
├── variants: default, focused, near-limit (yellow), at-limit (red)
```

### Trigger Card Component
```
trigger-card/
├── wrapper (padding: 20px 24px, border: 1px #E5E7EB, radius: 12px)
│   ├── header (name + toggle, space-between)
│   ├── form-fields (vertical stack, gap: 16px)
│   └── actions (horizontal, gap: 12px, right-aligned)
├── variants: collapsed, expanded, active, inactive
```

### Preview Widget Component
```
preview-widget/
├── wrapper (border: 1px #E5E7EB, radius: 12px, padding: 24px)
│   ├── section-label ("LIVE PREVIEW", 12px UPPERCASE)
│   ├── chat-window (scaled 0.75)
│   │   ├── title-bar (#4F46E5 bg, white text)
│   │   ├── message-area (bot messages)
│   │   └── input-bar (placeholder text)
│   └── widget-button (#4F46E5, rounded pill)
├── variants: ish-vaqti-preview, auto-reply-preview, greetings-preview
```

---

## Rang Xulosa Jadvali

| Element | Rang | Hex |
|---------|------|-----|
| Primary (active tab, toggle, buttons) | Primary-600 | `#4F46E5` |
| Primary hover | Primary-700 | `#4338CA` |
| Primary light (icon bg, variable badge) | Primary-50 | `#EEF2FF` |
| Sarlavha matn | Gray-900 | `#111827` |
| Label matn | Gray-700 | `#374151` |
| Secondary matn | Gray-500 | `#6B7280` |
| Border, divider | Gray-300 | `#E5E7EB` |
| Disabled toggle | Gray-300 | `#D1D5DB` |
| Sahifa fon | Gray-50 | `#F9FAFB` |
| Kontent fon | White | `#FFFFFF` |
| Online status | Success | `#10B981` |
| Offline status | Error | `#EF4444` |
| Warning counter | Warning | `#F59E0B` |
| Error counter | Error | `#EF4444` |

---

## Tipografiya Xulosa Jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Tab nomi (active) | 14px | Medium (500) | `#4F46E5` |
| Tab nomi (default) | 14px | Medium (500) | `#6B7280` |
| Section sarlavha | 20px | Semibold (600) | `#111827` |
| Subsection sarlavha | 16px | Semibold (600) | `#111827` |
| Label | 14px | Medium (500) | `#374151` |
| Input text | 14px | Regular (400) | `#111827` |
| Placeholder | 14px | Regular (400) | `#9CA3AF` |
| Helper text | 12px | Regular (400) | `#6B7280` |
| Character counter | 12px | Regular (400) | `#6B7280` |
| Button text (primary) | 16px | Semibold (600) | `#FFFFFF` |
| Button text (outline) | 14px | Medium (500) | `#4F46E5` |
| Preview label | 12px | Semibold (600) | `#6B7280` |

---

## Spacing Xulosa Jadvali

| Element | Qiymat |
|---------|--------|
| Sahifa padding | 32px |
| Settings va Preview gap | 32px |
| Tab bar padding (vertikal) | 12px 0 |
| Tab bar bottom border | 1px `#E5E7EB` |
| Tablar orasidagi gap | 32px |
| Section orasidagi gap | 32px |
| Form field label va input gap | 8px |
| Form fieldlar orasidagi gap | 20px |
| Jadval qator balandligi | 52px |
| Karta ichki padding | 20px 24px |
| Tugmalar orasidagi gap | 12px |
| Modal padding | 24px 32px |
| Toast border-radius | 8px |

---

## Figma AI Uchun Promptlar

### Ish Vaqti Tab Prompt
```
Create a working hours settings page for a SaaS customer support platform called CHATFLOW.
Layout: Split view — left side 60% for settings, right side 40% for preview sidebar.

Left side contains:
1. A toggle "Ish vaqtini faollashtirish" at the top
2. Weekly schedule grid with 7 rows (Monday-Sunday). Each row has: day name,
   radio buttons (Working day / Day off), two time pickers (09:00 to 18:00),
   and a "+ Add Break" text button. Mon-Fri are working days, Sat-Sun days off.
3. "Barchaga qo'llash" outline button below the grid
4. Timezone dropdown (GMT+5 Toshkent)
5. Holiday list with date+name entries and "+ Bayram qo'shish" button
6. Save button at bottom right

Right side preview shows: Current status (Online/Offline with colored dot),
next status change time, and weekly schedule summary.

Style: Clean, modern, white cards on #F9FAFB background. Primary color #4F46E5.
Font: Inter. Border radius: 8px for inputs, 12px for cards.
```

### Auto-Reply Tab Prompt
```
Create an auto-reply settings page with three message types stacked vertically:
1. Offline Auto-Reply: toggle, textarea with 500 char counter, variable badges
   ({working_hours}, {company_name}, {agent_name}), checkbox "Show working hours"
2. Away Auto-Reply: toggle, textarea, wait time number input (5 minutes)
3. First Response Auto-Reply: toggle, textarea, delay number input (3 seconds)

Right sidebar shows a widget preview with the auto-reply message displayed.
Primary #4F46E5, clean SaaS style, Inter font, 1200px max width.
```

### Triggers Tab Prompt
```
Create a triggers management page for CHATFLOW. Header with "Triggerlar" title
and "+ Yangi trigger" primary button. Below, show trigger cards in a vertical list.

Each trigger card contains: name with active toggle, trigger name input,
condition dropdown (Page Load, Time on Page, Scroll, Exit Intent, Specific Page, URL Match),
delay input in seconds, message textarea, checkboxes for "first visit only"
and "specific pages only" with URL pattern input. Card footer has Save and Test buttons.

Also design a "New Trigger" modal with 5 trigger type cards in a grid:
Welcome, Exit Intent, Time Based, Scroll Based, Custom — each with icon and description.

Style: White cards with #E5E7EB border, 12px radius. Primary #4F46E5. Inter font.
```

### Greetings Tab Prompt
```
Create a greetings/widget customization page with split layout.
Left side 60%: Form with 5 inputs stacked vertically:
- Widget Button Text input (default: "Yordam kerakmi?")
- Chat Window Title input (default: "CHATFLOW Support")
- Welcome Message textarea with 0/200 character counter
- Input Placeholder input (default: "Xabaringizni yozing...")
- Agent Typing Indicator input (default: "Agent yozmoqda...")
Save and Test buttons at bottom.

Right side 40%: Live preview showing a realistic chat widget with
purple (#4F46E5) title bar, welcome message bubble, and input field.
Below the chat window, show the widget button pill in #4F46E5.
Preview updates in real-time as user types in the form fields.

Style: Clean SaaS, Inter font, white on #F9FAFB background.
```
