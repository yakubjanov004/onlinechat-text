# CHATFLOW — Settings: Workspace, Widget, Security, Notifications, Profile

## Umumiy yondashuv
Settings bo'limi platformaning barcha sozlamalarini boshqarish uchun markaziy joy. 5 ta asosiy tab bilan tashkil etilgan: Workspace, Widget, Security, Notifications, Profile. Har bir tab o'z ichida form seksiyalari, toggle'lar, inputlar va vizual ko'rsatmalarni o'z ichiga oladi. Qo'shimcha ravishda Advanced sozlamalar ham mavjud.

**Muhim:** Sozlamalar sahifasi funksional va tushuntiruvchi bo'lishi kerak. Har bir seksiya orasida aniq vizual ajratgich bo'lsin. Save tugmasi har doim sahifa pastida sticky holatda tursin.

**Maqsad:** Admin va agentlar sozlamalarni tez, xatosiz va intuitiv boshqarsin.

---

## Layout va umumiy tuzilish

### Sahifa strukturasi
- **Joylashuv:** Dashboard shell ichida, sidebar "Settings" active holat
- **Page title:** "Sozlamalar" — 24px Semibold `#111827`
- **Background:** `#F9FAFB` (Gray-50)
- **Content card:** White `#FFFFFF`, border-radius: 12px, shadow-md, padding: 0
- **Content max-width:** 800px (form content uchun), markazda

### Tab navigatsiya
- **Tab bar:** Content cardning yuqori qismida
- **Tab items:** 5 ta — Workspace, Widget, Security, Notifications, Profile
- **Active tab:** `#4F46E5` matn, pastda 2px `#4F46E5` border
- **Inactive tab:** `#6B7280` matn, hover: `#374151`
- **Tab font:** 14px Medium (500)
- **Tab padding:** 12px 20px
- **Tab bar border-bottom:** 1px `#E5E7EB`
- **Tab bar background:** `#FFFFFF`

### ASCII wireframe — Umumiy layout
```
┌─────────────────────────────────────────────────────────────┐
│  Sozlamalar                                                 │
├─────────────────────────────────────────────────────────────┤
│  [ Workspace | Widget | Security | Notifications | Profile ]│
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  ┌─ Section Title ────────────────────────────────────────┐ │
│  │  Label:  [ Input field                            ]    │ │
│  │  Label:  [ Select dropdown                     ▼  ]    │ │
│  │  Label:  [ Toggle ○━━━ ]                              │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─ Section Title ────────────────────────────────────────┐ │
│  │  ...                                                   │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                              [ Bekor qilish ] [ Saqlash ] │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## TAB 1 — WORKSPACE

### Vazifasi
Workspace asosiy ma'lumotlarini sozlash: kompaniya nomi, vaqt mintaqasi, branding va kompaniya haqida ma'lumot.

### Section 1.1 — Workspace nomi

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Workspace nomi" — 14px Medium `#374151` |
| **Input** | Text input, placeholder: "Masalan: ACME Support" |
| **Input height** | 44px |
| **Border** | 1px `#D1D5DB`, focus: 2px `#4F46E5` |
| **Border-radius** | 8px |
| **Font** | 14px Regular `#111827` |
| **Helper text** | "Bu nom dashboard va chat widget'da ko'rinadi" — 12px `#6B7280` |

### Section 1.2 — Vaqt mintaqasi (Timezone)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Vaqt mintaqasi" — 14px Medium `#374151` |
| **Select** | Dropdown, default: "GMT+5 Toshkent" |
| **Select height** | 44px |
| **Chevron** | O'ng tomonda, 16px, `#6B7280` |
| **Options** | GMT+0 London, GMT+3 Moscow, GMT+5 Toshkent, GMT+6 Almaty, ... |
| **Selected option** | Primary-100 background, Primary-600 text |
| **Dropdown shadow** | shadow-lg |
| **Border-radius** | 8px |

### Section 1.3 — Branding (Logo yuklash)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Kompaniya logotipi" — 14px Medium `#374151` |
| **Upload area** | 120x120px, dashed border 2px `#D1D5DB`, border-radius: 12px |
| **Upload icon** | Cloud upload icon, 32px, `#6B7280` |
| **Upload text** | "Rasm yuklang yoki tortib tashlang" — 14px `#6B7280` |
| **Subtext** | "PNG, JPG, SVG. Max 2MB" — 12px `#9CA3AF` |
| **Hover state** | Border: 2px `#4F46E5`, background: `#EEF2FF` |
| **Uploaded state** | Rasm preview ko'rinadi, X tugma bilan o'chirish |

### Section 1.4 — Kompaniya ma'lumotlari

| Field | Type | Placeholder |
|-------|------|-------------|
| **Kompaniya nomi** | Text input | "ACME Corporation" |
| **Veb-sayt** | URL input | "https://example.com" |
| **Telefon** | Phone input | "+998 90 123 45 67" |
| **Manzil** | Textarea (2 qator) | "Toshkent, O'zbekiston" |

- **Fieldlar orasidagi gap:** 20px
- **Section title:** "Kompaniya ma'lumotlari" — 18px Semibold `#111827`
- **Section description:** "Ixtiyoriy. Bu ma'lumotlar chat footer'da ko'rinadi" — 14px `#6B7280`

### ASCII wireframe — Workspace tab
```
┌─ Workspace nomi ──────────────────────────────────┐
│  Workspace nomi:  [ ACME Support              ]   │
│  Vaqt mintaqasi:  [ GMT+5 Toshkent         ▼  ]   │
├─ Branding ────────────────────────────────────────┤
│  Kompaniya logotipi:                               │
│  ┌ ─ ─ ─ ─ ─ ─ ┐                                 │
│  │  ☁ Yuklang   │  PNG, JPG, SVG. Max 2MB         │
│  └ ─ ─ ─ ─ ─ ─ ┘                                 │
├─ Kompaniya ma'lumotlari ──────────────────────────┤
│  Kompaniya nomi:  [ ACME Corporation         ]    │
│  Veb-sayt:        [ https://example.com      ]    │
│  Telefon:         [ +998 90 123 45 67        ]    │
│  Manzil:          [ Toshkent, O'zbekiston    ]    │
│                                                    │
│                    [ Bekor qilish ] [ ✓ Saqlash ]  │
└────────────────────────────────────────────────────┘
```

---

## TAB 2 — WIDGET

### Vazifasi
Chat widget'ning tashqi ko'rinishi, joylashuvi va xabar shablonlarini sozlash. Admin real vaqtda widget preview'ni ko'rishi kerak.

### Section 2.1 — Asosiy rang (Color Picker)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Asosiy rang" — 14px Medium `#374151` |
| **Color picker** | Doira, 40px, tanlangan rang bilan to'ldirilgan |
| **Hex input** | Text input, placeholder: "#4F46E5", width: 120px |
| **Hex format** | # belgisi prefix sifatida, 6 xonali hex qabul qiladi |
| **Preset ranglar** | 8 ta doira qatorda, 32px har biri, gap: 8px |
| **Preset ranglar ro'yxati** | `#4F46E5`, `#7C3AED`, `#2563EB`, `#059669`, `#DC2626`, `#EA580C`, `#D97706`, `#111827` |
| **Selected preset** | 2px `#111827` border, scale: 1.1 |
| **Custom** | "Boshqa rang..." tugma → tizim color picker ochiladi |

### Section 2.2 — Vidjet shakli

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Vidjet shakli" — 14px Medium `#374151` |
| **Option 1** | Kvadrat — border-radius: 12px (radius-lg) |
| **Option 2** | Yumaloq — border-radius: 50% (radius-full) |
| **Selection** | Radio card style: 120x80px, border: 2px, selected: `#4F46E5` |
| **Preview** | Har bir option ichida mini vidjet preview ko'rinadi |

### Section 2.3 — Joylashuv (Position)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Joylashuv" — 14px Medium `#374151` |
| **Option 1** | Pastki chap (bottom-left) |
| **Option 2** | Pastki o'ng (bottom-right) — **default** |
| **Option 3** | O'ng o'rta (right-center) |
| **Selection** | Radio card style: 100x80px mini sahifa preview bilan |
| **Active option** | Border: 2px `#4F46E5`, bg: `#EEF2FF` |
| **Inactive option** | Border: 1px `#D1D5DB`, bg: `#FFFFFF` |

### Section 2.4 — Welcome xabar

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Welcome xabar" — 14px Medium `#374151` |
| **Textarea** | 3 qator, placeholder: "Salom! Sizga qanday yordam bera olamiz?" |
| **Max belgilar** | 100 belgi |
| **Character counter** | O'ng pastda: "24/100" — 12px `#6B7280` |
| **Counter warning** | 80+ belgida: `#F59E0B`, 100 belgida: `#EF4444` |
| **Height** | 88px (3 qator) |
| **Border** | 1px `#D1D5DB`, focus: 2px `#4F46E5` |

### Section 2.5 — Offline xabar

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Offline xabar" — 14px Medium `#374151` |
| **Textarea** | 3 qator, placeholder: "Hozirda operator mavjud emas. Xabar qoldiring." |
| **Max belgilar** | 100 belgi |
| **Character counter** | O'ng pastda: "0/100" — 12px `#6B7280` |

### Section 2.6 — Input placeholder

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Input placeholder matni" — 14px Medium `#374151` |
| **Input** | Text input, placeholder: "Xabar yozing..." |
| **Helper** | "Widget input maydoni uchun default matn" — 12px `#6B7280` |

### Section 2.7 — Code snippet (O'rnatish kodi)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "O'rnatish kodi" — 14px Medium `#374151` |
| **Code block** | Monospace font (JetBrains Mono), 13px |
| **Background** | `#1F2937` (Gray-800) — qorong'u fon |
| **Text color** | `#F9FAFB` (Gray-50) |
| **Syntax highlight** | HTML tag: `#60A5FA`, attribute: `#34D399`, string: `#FBBF24` |
| **Border-radius** | 8px |
| **Padding** | 16px |
| **Copy button** | O'ng yuqori burchak, "Nusxalash" + clipboard icon |
| **Copy button** | 36px height, ghost style, `#9CA3AF` |
| **Copied state** | "Nusxalandi ✓" yashil matn, 2 soniya keyin qaytadi |
| **Code content** | `<script src="https://cdn.chatflow.uz/widget.js" data-id="abc123"></script>` |

### Section 2.8 — Domain whitelist

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Ruxsat etilgan domenlar" — 14px Medium `#374151` |
| **Input** | Text input + "Qo'shish" tugma, placeholder: "example.com" |
| **Tag list** | Qo'shilgan domenlar chip/tag sifatida ko'rinadi |
| **Tag style** | Background: `#F3F4F6`, radius: 9999px, padding: 4px 12px, X tugma |
| **Helper** | "Faqat ko'rsatilgan domenlarda widget ishlaydi" — 12px `#6B7280` |

### Section 2.9 — Widget test modal

| Element | Xususiyat |
|---------|-----------|
| **Trigger** | "Widget'ni test qilish" outline tugma, 44px height |
| **Modal** | 560px kenglik, markazda |
| **Modal content** | Widget preview haqiqiy ko'rinishda |
| **Background** | Sayt sahifa simulatsiyasi (yengil grid yoki dots pattern) |
| **Widget** | O'ng pastda, tanlangan sozlamalar bilan |
| **Close** | X tugma yuqori o'ngda, Esc tugma bilan yopiladi |

### ASCII wireframe — Widget tab
```
┌─ Asosiy rang ─────────────────────────────────────┐
│  Asosiy rang:  (●) #4F46E5  [ #4F46E5 ]          │
│  Preset: ● ● ● ● ● ● ● ●                        │
├─ Vidjet shakli ───────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐                       │
│  │ Kvadrat  │  │ Yumaloq  │                       │
│  │ r:12px   │  │ r:50%    │                       │
│  └──────────┘  └──────────┘                       │
├─ Joylashuv ───────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌─────┐                       │
│  │ ◐ P │  │ P ◐ │  │   ◐ │                       │
│  │  Ch  │  │  O' │  │ O'r │                       │
│  └─────┘  └─────┘  └─────┘                       │
├─ Welcome xabar ───────────────────────────────────┤
│  [ Salom! Sizga qanday yordam bera     ]          │
│  [ olamiz?                              ]  24/100 │
├─ Offline xabar ───────────────────────────────────┤
│  [ Hozirda operator mavjud emas.       ]          │
│  [ Xabar qoldiring.                    ]   0/100  │
├─ Input placeholder ───────────────────────────────┤
│  [ Xabar yozing...                     ]          │
├─ O'rnatish kodi ──────────────────────────────────┤
│  ┌──────────────────────────────── [Nusxalash]──┐ │
│  │ <script src="https://cdn.chatflow.uz/...     │ │
│  │   data-id="abc123"></script>                  │ │
│  └──────────────────────────────────────────────┘ │
├─ Ruxsat etilgan domenlar ─────────────────────────┤
│  [ example.com          ] [ + Qo'shish ]          │
│  [example.com ✕] [mysite.uz ✕]                    │
├───────────────────────────────────────────────────┤
│         [ Widget'ni test qilish ]                  │
│                    [ Bekor qilish ] [ ✓ Saqlash ]  │
└────────────────────────────────────────────────────┘
```

---

## TAB 3 — SECURITY

### Vazifasi
Xavfsizlik va nazorat sozlamalari. IP bloklash, rate limiting, 2FA va audit log.

### Section 3.1 — IP Bloklash

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "IP Bloklash" — 18px Semibold `#111827` |
| **Description** | "Muayyan IP manzillardan kirishni bloklash" — 14px `#6B7280` |
| **Input row** | Text input + "+ IP qo'shish" tugma (Primary outline) |
| **Input placeholder** | "192.168.1.100" |
| **Bloklangan IPlar** | List ko'rinishida, har biri alohida row |

**Bloklangan IP row:**

| Element | Xususiyat |
|---------|-----------|
| **IP text** | 14px Monospace `#111827` |
| **Qo'shilgan sana** | 12px `#6B7280`, o'ngda |
| **O'chirish** | Trash icon, 20px, `#EF4444`, hover: red bg |
| **Row height** | 44px |
| **Row border-bottom** | 1px `#E5E7EB` |
| **Row hover** | Background: `#F9FAFB` |

**Namuna ma'lumotlar:**

| IP manzil | Qo'shilgan sana |
|-----------|-----------------|
| 192.168.1.100 | 2024-01-15 |
| 203.45.67.89 | 2024-02-03 |

### Section 3.2 — Rate Limiting

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Rate Limiting" — 18px Semibold `#111827` |
| **Max xabarlar** | Number input + label: "Max xabarlar" |
| **Number input** | Width: 80px, default value: 10, min: 1, max: 100 |
| **Per label** | "/ daqiqa" — 14px `#6B7280` |
| **Flood himoyasi** | Checkbox + "Flood himoyasi" label |
| **Checkbox** | 20x20px, checked: `#4F46E5` bg, white checkmark |
| **Helper** | "Bir foydalanuvchi bir daqiqada yuboradigan max xabar soni" — 12px `#6B7280` |

### Section 3.3 — Ikki bosqichli tasdiqlash (2FA)

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Ikki bosqichli tasdiqlash (2FA)" — 18px Semibold `#111827` |
| **Toggle** | On/Off toggle switch, 44x24px |
| **Toggle Off** | Background: `#D1D5DB`, knob: chap |
| **Toggle On** | Background: `#4F46E5`, knob: o'ng |
| **Description** | "Barcha foydalanuvchilar uchun 2FA talab qilinadi" — 14px `#6B7280` |
| **Status badge** | Yoqilgan: Success badge "Faol" / O'chirilgan: Gray badge "Nofaol" |
| **Setup link** | "2FA sozlash bo'yicha qo'llanma →" — 14px `#4F46E5`, underline hover |

### Section 3.4 — Audit Log

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Audit Log" — 18px Semibold `#111827` |
| **Description** | "Tizimda bajarilgan barcha amallar tarixi" — 14px `#6B7280` |
| **Table** | 2 ustunli — Vaqt, Amal |

**Audit Log jadvali:**

| Vaqt (Timestamp) | Amal (Action) |
|-------------------|--------------|
| 2024-02-10 14:30 | Settings o'zgartirildi |
| 2024-02-10 13:15 | Chat assigned — Aziz K. |
| 2024-02-09 18:00 | Yangi agent qo'shildi |
| 2024-02-09 09:30 | IP bloklandi: 203.45.67.89 |
| 2024-02-08 16:45 | 2FA yoqildi |

**Jadval uslubi:**

| Element | Xususiyat |
|---------|-----------|
| **Header row** | Background: `#F9FAFB`, font: 12px Semibold `#6B7280`, UPPERCASE |
| **Body row** | Height: 44px, font: 14px Regular `#111827` |
| **Row border** | Bottom: 1px `#E5E7EB` |
| **Row hover** | Background: `#F9FAFB` |
| **Timestamp font** | 14px Monospace `#6B7280` |
| **Action font** | 14px Regular `#111827` |
| **Ko'proq ko'rish** | Link tugma, pastda: "Ko'proq ko'rish →" — 14px `#4F46E5` |
| **Pagination** | Ixtiyoriy, 10 ta yozuv ko'rsatiladi |

### Section 3.5 — Session Management

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Faol sessiyalar" — 18px Semibold `#111827` |
| **Session card** | Har bir faol sessiya uchun: qurilma nomi, IP, oxirgi faollik vaqti |
| **Current session** | Yashil badge: "Joriy sessiya" |
| **Tugatish** | "Sessiyani tugatish" danger tugma, har bir sessiya uchun |
| **Barchasini tugatish** | "Boshqa barcha sessiyalarni tugatish" — danger outline tugma |

### Section 3.6 — Login tarixi

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Kirish tarixi" — 18px Semibold `#111827` |
| **List** | Oxirgi 10 ta login: sana, vaqt, IP, qurilma, status (Success/Failed) |
| **Success** | Yashil dot + "Muvaffaqiyatli" |
| **Failed** | Qizil dot + "Muvaffaqiyatsiz" |

### ASCII wireframe — Security tab
```
┌─ IP Bloklash ─────────────────────────────────────┐
│  [ 192.168.1.100        ] [ + IP qo'shish ]       │
│  ┌──────────────────────────────────────────────┐  │
│  │ 192.168.1.100    2024-01-15         🗑       │  │
│  │ 203.45.67.89     2024-02-03         🗑       │  │
│  └──────────────────────────────────────────────┘  │
├─ Rate Limiting ───────────────────────────────────┤
│  Max xabarlar: [ 10 ] / daqiqa                     │
│  ☑ Flood himoyasi                                  │
├─ Ikki bosqichli tasdiqlash ───────────────────────┤
│  2FA:  ━━━○ O'chirilgan                            │
│  Barcha foydalanuvchilar uchun 2FA talab qilinadi  │
├─ Audit Log ───────────────────────────────────────┤
│  VAQT               AMAL                           │
│  2024-02-10 14:30   Settings o'zgartirildi         │
│  2024-02-10 13:15   Chat assigned — Aziz K.        │
│  2024-02-09 18:00   Yangi agent qo'shildi          │
│                          Ko'proq ko'rish →          │
├─ Session Management ──────────────────────────────┤
│  Chrome — MacOS    ● Joriy sessiya                 │
│  Firefox — Windows  [ Sessiyani tugatish ]         │
├─ Login tarixi ────────────────────────────────────┤
│  2024-02-10 14:30  192.168.1.1  Chrome  ● Success │
│  2024-02-09 09:00  10.0.0.5    Firefox  ● Failed  │
└────────────────────────────────────────────────────┘
```

---

## TAB 4 — NOTIFICATIONS

### Vazifasi
Bildirishnomalar sozlamalari. Desktop push, email va ovoz bildirishnomalarini alohida boshqarish.

### Section 4.1 — Desktop bildirishnomalar

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Desktop bildirishnomalar" — 18px Semibold `#111827` |
| **Icon** | Monitor icon, 20px, `#6B7280` |
| **Description** | "Brauzer push bildirishnomalari" — 14px `#6B7280` |

**Toggle elementlari:**

| Bildirishnoma | Default holat | Tavsif |
|---------------|--------------|--------|
| **Yangi chat** | ✓ Yoqilgan | Yangi chat boshlanganda |
| **Yangi xabar** | ✓ Yoqilgan | Mavjud chatda yangi xabar kelganda |
| **Shoshilinch chat** | ✓ Yoqilgan | Urgent belgilangan chat kelganda |

**Toggle row uslubi:**

| Element | Xususiyat |
|---------|-----------|
| **Row** | auto-layout horizontal, justify: space-between |
| **Row height** | 52px |
| **Row border-bottom** | 1px `#F3F4F6` |
| **Label** | 14px Medium `#111827` |
| **Description** | 12px Regular `#6B7280` |
| **Toggle** | 44x24px, right-aligned |

### Section 4.2 — Email bildirishnomalar

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Email bildirishnomalar" — 18px Semibold `#111827` |
| **Icon** | Mail icon, 20px, `#6B7280` |

| Bildirishnoma | Default holat | Tavsif |
|---------------|--------------|--------|
| **Haftalik hisobot** | ✓ Yoqilgan | Har haftada analytics hisoboti |
| **Shoshilinch ogohlantirishlar** | ✓ Yoqilgan | Urgent hodisalar haqida email |

### Section 4.3 — Ovoz sozlamalari

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Ovoz" — 18px Semibold `#111827` |
| **Icon** | Speaker icon, 20px, `#6B7280` |

| Element | Xususiyat |
|---------|-----------|
| **Enable sounds** | Toggle: "Ovozli bildirishnomalar" |
| **Volume slider** | Range input, 0-100%, default: 70% |
| **Slider track** | Height: 6px, bg: `#E5E7EB`, filled: `#4F46E5` |
| **Slider thumb** | 20px circle, white, shadow-sm, border: 2px `#4F46E5` |
| **Volume label** | O'ngda: "70%" — 14px `#6B7280` |
| **Test sound** | "🔊 Test" tugma — ghost style, plays sample notification |

### ASCII wireframe — Notifications tab
```
┌─ Desktop bildirishnomalar ────────────────────────┐
│  Yangi chat              Yangi chat boshlanganda   │
│                                         ━━━● ON   │
│  ─────────────────────────────────────────────     │
│  Yangi xabar             Yangi xabar kelganda      │
│                                         ━━━● ON   │
│  ─────────────────────────────────────────────     │
│  Shoshilinch chat        Urgent chat kelganda      │
│                                         ━━━● ON   │
├─ Email bildirishnomalar ──────────────────────────┤
│  Haftalik hisobot        Har haftada analytics     │
│                                         ━━━● ON   │
│  ─────────────────────────────────────────────     │
│  Shoshilinch ogohlantirish  Urgent hodisalar       │
│                                         ━━━● ON   │
├─ Ovoz ────────────────────────────────────────────┤
│  Ovozli bildirishnomalar               ━━━● ON    │
│  Ovoz balandligi:                                  │
│  ○━━━━━━━━━━━━━━━━●━━━━━━━━○         70%           │
│                                    [ 🔊 Test ]     │
│                    [ Bekor qilish ] [ ✓ Saqlash ]  │
└────────────────────────────────────────────────────┘
```

---

## TAB 5 — PROFILE

### Vazifasi
Foydalanuvchining shaxsiy sozlamalari: profil ma'lumotlari, parol, tema va interfeys sozlamalari.

### Section 5.1 — Shaxsiy ma'lumotlar

| Element | Xususiyat |
|---------|-----------|
| **Avatar** | 120px doira, markazda yoki chapda |
| **Avatar upload** | Hover: overlay "O'zgartirish" + camera icon |
| **Avatar border** | 3px `#E5E7EB`, hover: 3px `#4F46E5` |
| **Ism** | Text input, label: "To'liq ism" |
| **Telefon** | Phone input, label: "Telefon raqam", format: +998 XX XXX XX XX |
| **Email** | Read-only, label: "Email", gray background |

### Section 5.2 — Parol o'zgartirish

| Element | Xususiyat |
|---------|-----------|
| **Section title** | "Parolni o'zgartirish" — 18px Semibold `#111827` |
| **Joriy parol** | Password input, label: "Joriy parol" |
| **Yangi parol** | Password input, label: "Yangi parol" |
| **Tasdiqlash** | Password input, label: "Yangi parolni tasdiqlang" |
| **Eye icon** | O'ng tomonda, parolni ko'rsatish/yashirish toggle |
| **Password strength** | Progress bar — Weak (red), Medium (yellow), Strong (green) |
| **Requirements** | 8+ belgi, katta harf, raqam, maxsus belgi — checklist ko'rinishida |
| **Save** | "Parolni o'zgartirish" tugma — Primary style |

### Section 5.3 — Tema (Theme)

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Tema" — 14px Medium `#374151` |
| **Options** | 3 ta radio card: Light, Dark, Auto |
| **Light card** | Oq fon preview, quyosh icon ☀️ |
| **Dark card** | Qora fon preview, oy icon 🌙 |
| **Auto card** | Yarim oq/yarim qora preview, ⚙️ icon |
| **Card size** | 100x80px |
| **Selected** | Border: 2px `#4F46E5`, bg: `#EEF2FF` |

### Section 5.4 — Shrift o'lchami

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Shrift o'lchami" — 14px Medium `#374151` |
| **Options** | 3 ta radio: Small (12px), Medium (14px), Large (16px) |
| **Selection style** | Segmented control (pill buttons) |
| **Active** | `#4F46E5` bg, white text |
| **Inactive** | `#F3F4F6` bg, `#374151` text |
| **Height** | 36px |

### Section 5.5 — Chat uslubi

| Element | Xususiyat |
|---------|-----------|
| **Label** | "Chat uslubi" — 14px Medium `#374151` |
| **Options** | 3 ta radio card: Classic, Modern, Compact |
| **Classic** | Standart bubble, keng spacing |
| **Modern** | Rounded bubble, gradient header |
| **Compact** | Zich spacing, kichikroq bubblelar |
| **Card size** | 120x90px har biri, chat preview bilan |
| **Selected** | Border: 2px `#4F46E5` |

### Section 5.6 — Til va mintaqa

| Element | Xususiyat |
|---------|-----------|
| **Til** | Select dropdown, options: O'zbek, Русский, English |
| **Mintaqa** | Select dropdown, options: O'zbekiston, Rossiya, Global |
| **Sana formati** | Select: DD.MM.YYYY, MM/DD/YYYY, YYYY-MM-DD |

### ASCII wireframe — Profile tab
```
┌─ Shaxsiy ma'lumotlar ─────────────────────────────┐
│       ┌─────┐                                      │
│       │ 📷  │  ← Avatar (120px)                   │
│       └─────┘                                      │
│  To'liq ism:    [ Aziz Karimov               ]    │
│  Telefon:       [ +998 90 123 45 67          ]    │
│  Email:         [ aziz@company.uz            ]    │
├─ Parolni o'zgartirish ────────────────────────────┤
│  Joriy parol:   [ ••••••••              👁   ]    │
│  Yangi parol:   [ ••••••••              👁   ]    │
│  Tasdiqlash:    [ ••••••••              👁   ]    │
│  Kuch: ████████░░░░ O'rtacha                       │
│         [ Parolni o'zgartirish ]                   │
├─ Tema ────────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│  │ ☀ Light │ │ 🌙 Dark │ │ ⚙ Auto  │             │
│  └─────────┘ └─────────┘ └─────────┘             │
├─ Shrift o'lchami ─────────────────────────────────┤
│  [ Small | ██ Medium ██ | Large ]                  │
├─ Chat uslubi ─────────────────────────────────────┤
│  ┌──────────┐ ┌──────────┐ ┌──────────┐          │
│  │ Classic  │ │ Modern   │ │ Compact  │          │
│  └──────────┘ └──────────┘ └──────────┘          │
├─ Til va mintaqa ──────────────────────────────────┤
│  Til:      [ O'zbek                        ▼ ]    │
│  Mintaqa:  [ O'zbekiston                   ▼ ]    │
│  Sana:     [ DD.MM.YYYY                    ▼ ]    │
│                    [ Bekor qilish ] [ ✓ Saqlash ]  │
└────────────────────────────────────────────────────┘
```

---

## ADVANCED SOZLAMALAR

### Vazifasi
Avtomatik hodisalar va chat tarixini boshqarish. Bu seksiya Settings sahifasining pastki qismida yoki alohida "Kengaytirilgan" bo'limida bo'lishi mumkin.

### Joylashuv
- Tab ichida emas, barcha tablar ostida yoki Profile tab ichida collapsible section sifatida
- "Kengaytirilgan sozlamalar" sarlavhasi bilan, chevron icon bilan ochiladi/yopiladi

### Elementlar

| Sozlama | Turi | Default | Tavsif |
|---------|------|---------|--------|
| **Auto-close** | Number input + label | 30 daqiqa | Javob bo'lmasa chatni avtomatik yopish |
| **Auto-away** | Number input + label | 10 daqiqa | Idle bo'lganda away statusga o'tish |
| **Auto-offline** | Time picker | 18:00 | Ish vaqti tugaganda offline bo'lish |
| **Auto-online** | Time picker | 09:00 | Ish vaqti boshlanganda online bo'lish |
| **Chat tarixini ko'rsatish** | Toggle | ✓ Yoqilgan | Oldingi suhbatlarni ko'rsatish |

### Time picker uslubi

| Element | Xususiyat |
|---------|-----------|
| **Height** | 44px |
| **Width** | 120px |
| **Format** | HH:MM (24 soat) |
| **Icon** | Clock icon, o'ng tomonda, 16px `#6B7280` |
| **Border** | 1px `#D1D5DB` |

### ASCII wireframe — Advanced
```
┌─ Kengaytirilgan sozlamalar ──── ▼ ────────────────┐
│  Auto-close:     [ 30 ] daqiqa javob bo'lmasa     │
│  Auto-away:      [ 10 ] daqiqa idle bo'lganda      │
│  Auto-offline:   [ 18:00 ] ish vaqti tugaganda     │
│  Auto-online:    [ 09:00 ] ish vaqti boshlanganda  │
│  Chat tarixini ko'rsatish:              ━━━● ON    │
└────────────────────────────────────────────────────┘
```

---

## Save bar (Sticky footer)

| Element | Xususiyat |
|---------|-----------|
| **Joylashuv** | Sahifa pastida sticky, scroll bilan ko'rinadi |
| **Background** | `#FFFFFF`, border-top: 1px `#E5E7EB` |
| **Padding** | 16px 24px |
| **Buttons** | O'ng tomonda, gap: 12px |
| **Bekor qilish** | Outline tugma, "Bekor qilish" |
| **Saqlash** | Primary tugma, "Saqlash" — `#4F46E5` bg, white text |
| **Loading state** | Saqlash tugmada spinner, disabled |
| **Success toast** | "Sozlamalar muvaffaqiyatli saqlandi" — success toast, yuqori o'ng |

---

## Empty / Loading / Error holatlar

| Holat | Ko'rinish |
|-------|-----------|
| **Loading** | Skeleton forms — input, toggle va text uchun shimmer animatsiya |
| **Error** | Qizil banner: "Sozlamalarni saqlab bo'lmadi. Qayta urinib ko'ring." |
| **Validation error** | Input border: 2px `#EF4444`, pastda: "Majburiy maydon" qizil matn |
| **Success** | Toast: "Sozlamalar saqlandi ✓" yashil, 3 soniya |

---

## Micro-interactions

| Interaction | Tavsif |
|-------------|--------|
| **Toggle switch** | Smooth slide, 200ms ease, bg rang o'zgarishi |
| **Save toast** | Slide-in o'ngdan, 300ms, 3 soniya ko'rinadi, fade-out |
| **Input focus** | Border-color transition 150ms, shadow glow `0 0 0 3px rgba(79,70,229,0.1)` |
| **Tab switch** | Underline slide animation, 200ms |
| **Color picker** | Doira hover: scale 1.15, transition 150ms |
| **Code copy** | "Nusxalash" → "Nusxalandi ✓" text swap, 2s timeout |
| **Upload drag** | Border color va bg color transition on dragover |

---

## Responsive xulq-atvor

| Breakpoint | O'zgarish |
|------------|-----------|
| **Desktop (1440px)** | To'liq layout, 800px content width, side-by-side form sections |
| **Tablet (768px)** | Tab bar horizontal scroll, content width: 100%, padding: 16px |
| **Mobile (375px)** | Tab bar → horizontal scroll (swipeable), full width inputs, stacked layout |

**Mobile uchun maxsus:**
- Radio cardlar vertikal stackga o'tadi
- Color preset doiralari 2 qatorga bo'linadi
- Code snippet horizontally scrollable
- Save bar to'liq kenglikda fixed bottom

---

## Accessibility

| Element | Talab |
|---------|-------|
| **Form labels** | Har bir input uchun `<label>` — min 12px |
| **Toggle size** | 44x24px — touch target standart |
| **Focus outline** | 2px `#4F46E5`, offset 2px |
| **Color contrast** | Barcha matnlar min 4.5:1 kontrast |
| **Keyboard** | Tab orqali navigatsiya, Enter submit, Space toggle |
| **Screen reader** | aria-label barcha toggle va tugmalar uchun |
| **Error messages** | aria-live="polite" bilan e'lon qilinadi |

---

## Figma uchun komponentlar

```
settings-page/
├── page-wrapper (auto-layout, vertical)
│   ├── page-title ("Sozlamalar", 24px Semibold, #111827)
│   └── content-card (white bg, radius-lg, shadow-md)
│       ├── tab-bar (auto-layout, horizontal, border-bottom: 1px #E5E7EB)
│       │   ├── tab-item [Workspace] (5 variants: default, hover, active)
│       │   ├── tab-item [Widget]
│       │   ├── tab-item [Security]
│       │   ├── tab-item [Notifications]
│       │   └── tab-item [Profile]
│       │
│       ├── tab-content-workspace/
│       │   ├── section-workspace-name
│       │   │   ├── label ("Workspace nomi", 14px Medium)
│       │   │   ├── text-input (44px height, radius-md)
│       │   │   └── helper-text (12px, #6B7280)
│       │   ├── section-timezone
│       │   │   ├── label ("Vaqt mintaqasi")
│       │   │   └── select-dropdown (GMT+5 Toshkent)
│       │   ├── section-branding
│       │   │   ├── label ("Kompaniya logotipi")
│       │   │   └── upload-area (120x120, dashed border)
│       │   └── section-company-info
│       │       ├── input-company-name
│       │       ├── input-website
│       │       ├── input-phone
│       │       └── textarea-address
│       │
│       ├── tab-content-widget/
│       │   ├── section-color-picker
│       │   │   ├── color-circle (40px, tanlangan rang)
│       │   │   ├── hex-input (120px)
│       │   │   └── preset-colors-row (8 ta doira, 32px, gap: 8px)
│       │   ├── section-widget-shape
│       │   │   ├── radio-card [Kvadrat r:12px]
│       │   │   └── radio-card [Yumaloq r:50%]
│       │   ├── section-position
│       │   │   ├── radio-card [Pastki chap]
│       │   │   ├── radio-card [Pastki o'ng] (default)
│       │   │   └── radio-card [O'ng o'rta]
│       │   ├── section-welcome-message
│       │   │   ├── textarea (88px, 3 rows)
│       │   │   └── char-counter ("24/100", 12px)
│       │   ├── section-offline-message
│       │   │   ├── textarea (88px, 3 rows)
│       │   │   └── char-counter
│       │   ├── section-input-placeholder
│       │   │   └── text-input
│       │   ├── section-code-snippet
│       │   │   ├── code-block (dark bg, syntax highlighted)
│       │   │   └── copy-button ("Nusxalash", ghost)
│       │   ├── section-domain-whitelist
│       │   │   ├── input + add-button
│       │   │   └── tag-list (chip items with X)
│       │   └── test-widget-button ("Widget'ni test qilish")
│       │
│       ├── tab-content-security/
│       │   ├── section-ip-blocking
│       │   │   ├── input-row (IP input + "Qo'shish" button)
│       │   │   └── blocked-ip-list
│       │   │       ├── ip-row (IP + date + delete icon)
│       │   │       └── ip-row
│       │   ├── section-rate-limiting
│       │   │   ├── number-input (80px) + "/daqiqa" label
│       │   │   └── checkbox ("Flood himoyasi")
│       │   ├── section-2fa
│       │   │   ├── toggle-switch (44x24)
│       │   │   ├── description
│       │   │   └── status-badge
│       │   ├── section-audit-log
│       │   │   ├── log-table (timestamp + action)
│       │   │   └── more-link ("Ko'proq ko'rish →")
│       │   ├── section-sessions
│       │   │   └── session-card-list
│       │   └── section-login-history
│       │       └── login-list
│       │
│       ├── tab-content-notifications/
│       │   ├── section-desktop
│       │   │   ├── toggle-row [Yangi chat]
│       │   │   ├── toggle-row [Yangi xabar]
│       │   │   └── toggle-row [Shoshilinch chat]
│       │   ├── section-email
│       │   │   ├── toggle-row [Haftalik hisobot]
│       │   │   └── toggle-row [Shoshilinch ogohlantirish]
│       │   └── section-sound
│       │       ├── toggle-row [Ovozli bildirishnomalar]
│       │       ├── volume-slider (range 0-100%)
│       │       └── test-sound-button
│       │
│       ├── tab-content-profile/
│       │   ├── section-personal
│       │   │   ├── avatar-upload (120px circle)
│       │   │   ├── input-name
│       │   │   ├── input-phone
│       │   │   └── input-email (readonly)
│       │   ├── section-password
│       │   │   ├── input-current-password
│       │   │   ├── input-new-password
│       │   │   ├── input-confirm-password
│       │   │   └── password-strength-bar
│       │   ├── section-theme
│       │   │   ├── radio-card [Light]
│       │   │   ├── radio-card [Dark]
│       │   │   └── radio-card [Auto]
│       │   ├── section-font-size
│       │   │   └── segmented-control [Small | Medium | Large]
│       │   ├── section-chat-style
│       │   │   ├── radio-card [Classic]
│       │   │   ├── radio-card [Modern]
│       │   │   └── radio-card [Compact]
│       │   └── section-language
│       │       ├── select-language
│       │       ├── select-region
│       │       └── select-date-format
│       │
│       └── advanced-section (collapsible)
│           ├── number-input [Auto-close: 30 daqiqa]
│           ├── number-input [Auto-away: 10 daqiqa]
│           ├── time-picker [Auto-offline: 18:00]
│           ├── time-picker [Auto-online: 09:00]
│           └── toggle [Chat tarixini ko'rsatish]
│
├── save-bar (sticky bottom)
│   ├── btn-outline ("Bekor qilish")
│   └── btn-primary ("Saqlash")
│
└── test-widget-modal (560px, overlay)
    ├── modal-header ("Widget Preview", close X)
    └── widget-preview (haqiqiy widget simulatsiyasi)
```

---

## Rang xulosa jadvali

| Element | Rang | Hex |
|---------|------|-----|
| Page background | Gray-50 | `#F9FAFB` |
| Content card bg | White | `#FFFFFF` |
| Active tab text | Primary-600 | `#4F46E5` |
| Active tab border | Primary-600 | `#4F46E5` |
| Inactive tab | Gray-500 | `#6B7280` |
| Section title | Gray-900 | `#111827` |
| Label text | Gray-700 | `#374151` |
| Helper text | Gray-500 | `#6B7280` |
| Input border | Gray-300 | `#D1D5DB` |
| Input focus border | Primary-600 | `#4F46E5` |
| Toggle On | Primary-600 | `#4F46E5` |
| Toggle Off | Gray-300 | `#D1D5DB` |
| Code block bg | Gray-800 | `#1F2937` |
| Code text | Gray-50 | `#F9FAFB` |
| Error border | Error-500 | `#EF4444` |
| Success toast | Success-500 | `#10B981` |
| Save button bg | Primary-600 | `#4F46E5` |

---

## Tipografiya xulosa jadvali

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Page title | 24px | Semibold (600) | `#111827` |
| Section title | 18px | Semibold (600) | `#111827` |
| Tab item | 14px | Medium (500) | `#6B7280` / `#4F46E5` |
| Label | 14px | Medium (500) | `#374151` |
| Input text | 14px | Regular (400) | `#111827` |
| Helper text | 12px | Regular (400) | `#6B7280` |
| Code text | 13px | Regular (JetBrains Mono) | `#F9FAFB` |
| Toggle label | 14px | Medium (500) | `#111827` |
| Toggle description | 12px | Regular (400) | `#6B7280` |
| Button text | 14px | Medium (500) | `#FFFFFF` / `#374151` |
| Audit timestamp | 14px | Regular (Monospace) | `#6B7280` |
| Audit action | 14px | Regular (400) | `#111827` |

---

## Spacing xulosa jadvali

| Element | Qiymat |
|---------|--------|
| Page padding | 24px |
| Tab bar padding | 0 20px (har bir tab) |
| Content padding (tab ichida) | 32px |
| Section gap | 32px |
| Section title va content gap | 16px |
| Form field gap | 20px |
| Label va input gap | 6px |
| Toggle row height | 52px |
| Save bar padding | 16px 24px |
| Save bar buttons gap | 12px |
| Color preset gap | 8px |
| Radio card gap | 16px |
| IP list row height | 44px |
| Audit log row height | 44px |

---

## Figma AI uchun prompt

```
Create a comprehensive Settings page for a SaaS customer support platform called CHATFLOW.

Layout: Dashboard shell with sidebar (Settings active). Page title "Sozlamalar" at top.
White content card with 5 horizontal tabs: Workspace, Widget, Security, Notifications, Profile.

TAB 1 - Workspace:
- Workspace name text input
- Timezone select dropdown (default "GMT+5 Toshkent")
- Logo upload area with dashed border (120x120px)
- Company info fields: name, website, phone, address

TAB 2 - Widget:
- Color picker with hex input (#4F46E5) and 8 preset color circles
- Widget shape radio cards: Kvadrat (radius 12px) and Yumaloq (radius 50%)
- Position radio cards with mini page previews: bottom-left, bottom-right, right-center
- Welcome message textarea with character counter (max 100)
- Offline message textarea with character counter
- Input placeholder text field
- Dark code snippet block with syntax highlighting and copy button
- Domain whitelist with tag chips
- "Test widget" button opening a preview modal

TAB 3 - Security:
- IP blocking: input + add button, list of blocked IPs with delete
- Rate limiting: number input [10] per minute, flood protection checkbox
- 2FA toggle switch with status badge
- Audit log table: timestamp + action columns, "View more" link
- Session management cards
- Login history list

TAB 4 - Notifications:
- Desktop toggles: New chat, New message, Urgent chat
- Email toggles: Weekly report, Urgent alerts
- Sound: Enable toggle + volume slider (0-100%)

TAB 5 - Profile:
- Avatar upload (120px circle), name, phone, email (readonly)
- Change password section with strength indicator
- Theme radio cards: Light/Dark/Auto
- Font size segmented control: Small/Medium/Large
- Chat style cards: Classic/Modern/Compact
- Language and region selects

Sticky save bar at bottom with Cancel (outline) and Save (primary #4F46E5) buttons.

Style: Clean, professional SaaS. Font: Inter. Primary: #4F46E5.
Input height: 44px, border-radius: 8px. Toggle: 44x24px.
Background: #F9FAFB. Content card: white, radius 12px, shadow-md.
Desktop width: 1440px frame, 800px content max-width.
```
