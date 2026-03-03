# QULAY CHAT — Inbox: Chat List + Chat Window

## Umumiy yondashuv
Inbox — QULAY CHAT platformasining eng asosiy va eng ko'p ishlatiladigan sahifasi. Agent bu yerda barcha mijoz chatlarini real vaqtda ko'radi, javob beradi, boshqaradi va yopadi. Layout 2 panelli: chap tomonda chat ro'yxati, o'ng tomonda ochiq suhbat oynasi. Ixtiyoriy ravishda o'ng tomonda Info Sidebar ham ko'rinadi (12-inbox-advanced.md da batafsil).

**Maqsad:** Chatlarni tez topish, tez javob berish, holatni nazorat qilish. Har bir amal minimal klik bilan bajarilishi shart.

**Muhim:** Bu real-time interfeys — yangi xabarlar kelganda avtomatik yangilanishi, typing indicator va online/offline statuslar jonli ko'rinishi kerak.

---

## 1. LAYOUT — Asosiy tuzilish

### Panel o'lchamlari

| Panel | Kenglik | Tavsif |
|-------|---------|--------|
| Chat List (chap) | 360px (fixed) | Barcha chatlar ro'yxati |
| Chat Window (o'ng) | fluid (qolgan joy) | Tanlangan chat suhbati |
| Info Sidebar (o'ng) | 300px (ixtiyoriy) | Mijoz ma'lumotlari (12-da batafsil) |

### ASCII Wireframe — Desktop (1440px)

```
┌──────────────────────────────────────────────────────────────────────┐
│  HEADER (64px) — Logo, Search, Status, Bell, Avatar                  │
├────────────────┬─────────────────────────────────┬───────────────────┤
│                │                                 │                   │
│  CHAT LIST     │       CHAT WINDOW               │   INFO SIDEBAR   │
│  (360px)       │       (fluid)                   │   (300px)        │
│                │                                 │                   │
│ ┌────────────┐ │  ┌─ Header ──────────────────┐  │  Mijoz ismi      │
│ │ Search     │ │  │ Ismi  Status  Agent  [X]  │  │  Email           │
│ │ Filter ▾   │ │  └───────────────────────────┘  │  Telefon         │
│ ├────────────┤ │                                 │  ─────────       │
│ │ Active  As │ │  ┌─ Incoming ──────────┐        │  Tags            │
│ │ signed Clo │ │  │ Salom, yordam kerak  │        │  Notes           │
│ ├────────────┤ │  └─────────────────────┘        │  History         │
│ │🟢 Ahmad V. │ │                                 │                   │
│ │ Salom, yo..│ │        ┌── Outgoing ──────────┐ │                   │
│ │ Sara · 2m  │ │        │ Assalomu alaykum!    │ │                   │
│ ├────────────┤ │        │ Qanday yordam...     │ │                   │
│ │⚪ Nodira R.│ │        └──────────────────────┘ │                   │
│ │ Narxlar h..│ │                                 │                   │
│ │ Bobur · 5m │ │  ┌─ Incoming ──────────┐        │                   │
│ ├────────────┤ │  │ Narxlar qancha?      │        │                   │
│ │⚫ Sardor T.│ │  └─────────────────────┘        │                   │
│ │ Rahmat!    │ │                                 │                   │
│ │ Ali · 1h   │ │  Ahmad yozyapti...              │                   │
│ ├────────────┤ │                                 │                   │
│ │            │ │  ┌─────────────────────────────┐│                   │
│ │            │ │  │😊 📎 💬  Xabar yozing...  [➤]││                   │
│ │            │ │  └─────────────────────────────┘│                   │
│                │                                 │                   │
├────────────────┴─────────────────────────────────┴───────────────────┤
│   360px              fluid (~780px)                  300px           │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 2. CHAT LIST — Chap panel (360px)

### Vazifasi
Barcha chatlarni kompakt ro'yxat shaklida ko'rsatish. Agent tezda kerakli chatni topib, tanlashi kerak.

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Kenglik | 360px (fixed) |
| Background | `#FFFFFF` |
| Border-right | 1px `#E5E7EB` |
| Balandlik | 100% (header ostidan pastgacha) |
| Overflow | Vertikal scroll |

### Top Bar — Qidiruv va Filter

#### Search input

| Parametr | Qiymat |
|----------|--------|
| Placeholder | "Mijoz ismi yoki xabar..." |
| Kenglik | 100% (padding 16px) |
| Balandlik | 40px |
| Background | `#F3F4F6` (Gray-100) |
| Border | none (default), 2px `#4F46E5` (focus) |
| Border-radius | 8px |
| Icon | Search, 16px, `#6B7280` |
| Shrift | 14px Regular, `#6B7280` placeholder |
| Padding | 0 12px 0 36px (icon uchun joy) |
| **Min characters** | 3 belgi (3 dan kam yozsa — qidirmaydi) |
| **Debounce** | 300ms (user yozib bo'lgandan keyin) |
| **Max results** | 50 ta (pagination agar ko'p) |
| **Case sensitive** | Yo'q (lowercase match) |
| **Search scope** | Customer name, email, conversation ID, last message (100 chars) |
| **Sort** | Relevance → Date (newest first) |

#### Filter Dropdown

| Parametr | Qiymat |
|----------|--------|
| Joylashuv | Search input yonida yoki pastida |
| Trigger | Dropdown button "Filter" + chevron |
| Background | `#FFFFFF` |
| Border | 1px `#E5E7EB` |
| Border-radius | 8px |
| Shadow | shadow-md |

**Filter variantlari:**

| Filter | Tavsif |
|--------|--------|
| Active | Faol chatlar (default) |
| Assigned | O'ziga tayinlangan chatlar |
| Closed | Yopilgan chatlar |
| Bugun | Bugungi chatlar |
| Kecha | Kechagi chatlar |
| Oxirgi 7 kun | So'nggi bir hafta |

### Filter Tabs — Chat turlari

| Tab | Vazifasi | Maxsus xulq-atvor |
|-----|----------|-------------------|
| **Active** | Faol chatlar (default tab) | Unassigned chatlar yuqorida ko'rinadi |
| **Assigned** | Agent o'ziga tayinlangan chatlar | Faqat o'ziga tegishli chatlar |
| **Closed** | Yopilgan chatlar | Arxivlangan chatlar |

**Tab uslubi:**
- Background (active): `#E0E7FF` (Primary-100)
- Matn (active): `#4F46E5` (Primary-600), 14px Medium
- Background (default): transparent
- Matn (default): `#6B7280`, 14px Regular
- Border-radius: 8px
- Padding: 8px 16px
- Gap: 4px

---

### Chat Card — Har bir chat elementi

#### Tarkibi (chapdan o'ngga, yuqoridan pastga)

| Element | Tavsif |
|---------|--------|
| **Status Icon** | Chat holati belgisi |
| **Unread Badge** | O'qilmagan xabarlar soni |
| **Mijoz ismi** | Suhbat egasi nomi |
| **Oxirgi xabar** | Oxirgi xabar matni (truncated) |
| **Agent nomi** | Tayinlangan agent |
| **Vaqt** | Oxirgi xabar vaqti |

#### Status Icon turlari

| Status | Icon | Rang |
|--------|------|------|
| Active (Faol) | Yashil doira | `#10B981` (Success-500) |
| Assigned (Tayinlangan) | Kulrang doira | `#D1D5DB` (Gray-300) |
| Closed (Yopilgan) | Qora doira | `#374151` (Gray-700) |

**Icon o'lchami:** 10px doira, chat card chap tomonida

#### Unread Badge

| Parametr | Qiymat |
|----------|--------|
| Namuna | [3] |
| Background | `#EF4444` (Error-500) |
| Matn | `#FFFFFF`, 11px Bold |
| O'lcham | min 20px kenglik, 20px balandlik |
| Border-radius | 9999px (pill) |
| Joylashuv | Chat card o'ng yuqori burchagida |

#### Tipografiya

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Mijoz ismi | 14px | Semibold (600) | `#111827` (Gray-900) |
| Oxirgi xabar | 13px | Regular (400) | `#6B7280` (Gray-500), truncated |
| Agent nomi | 12px | Medium (500) | `#6B7280` |
| Vaqt | 12px | Regular (400) | `#9CA3AF` (Gray-400) |

**Oxirgi xabar truncation:** Matn 1 qatorda, ortiqchasi `...` bilan kesiladi (text-overflow: ellipsis)

#### Chat Card holatlari

| Holat | Background | Border | Boshqa |
|-------|-----------|--------|--------|
| **Default** | `#FFFFFF` (White) | none | — |
| **Hover** | `#F9FAFB` (Gray-50) | none | cursor: pointer |
| **Selected** | `#EEF2FF` (Primary-50) | chap 3px `#4F46E5` | — |
| **Unread** | `#FFFFFF` | chap 3px `#4F46E5` | Mijoz ismi Bold |

#### Chat Card spetsifikatsiyalari

| Parametr | Qiymat |
|----------|--------|
| Balandlik | auto (~72px) |
| Padding | 12px 16px |
| Border-bottom | 1px `#F3F4F6` (Gray-100) |
| Gap (vertical) | 4px |
| Gap (horizontal, items) | 12px |
| Transition | background 150ms ease |

---

### Empty State — Chat ro'yxati bo'sh

| Element | Tavsif |
|---------|--------|
| Icon | Chat bubble illustration, 80px, `#D1D5DB` |
| Sarlavha | "Chatlar yo'q" — 16px Semibold, `#111827` |
| Tavsif | "Mijozlardan xabar kelishi bilan shu yerda ko'rinadi" — 14px Regular, `#6B7280` |
| Joylashuv | Markazda, vertikal stack, gap 12px |

---

## 3. CHAT WINDOW — O'ng panel (fluid)

### Vazifasi
Tanlangan chat suhbatini to'liq ko'rsatish: xabarlar tarixi, yozish maydoni va suhbat boshqaruvi.

### 3.1 Chat Window Header

#### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Balandlik | 64px |
| Background | `#FFFFFF` |
| Border-bottom | 1px `#E5E7EB` |
| Padding | 0 24px |

#### Tarkibi (chapdan o'ngga)

| Element | Tavsif |
|---------|--------|
| **Mijoz ismi** | 16px Semibold (600), `#111827` |
| **Status** | Real-time: "Online" (Success-500 yashil nuqta) yoki "Offline" (Gray-400 kulrang nuqta), 13px |
| **Agent Assignment** | Dropdown: O'zim, Sara, Bobur, Ali — agent tanlash/o'zgartirish |
| **Close button** | "X" icon yoki "Yopish" tugma — chatni yopish |

**Agent Assignment Dropdown:**
- Trigger: Agent nomi + status dot + chevron down (masalan: "🟢 Sara")
- Kenglik: 200px
- Itemlar: Agent ismi + Avatar (24px) + Online status dot + Active conversation count
- Selected: Checkmark icon
- Border-radius: 8px
- Shadow: shadow-md
- Sort order: Online agents (kam load) → Away → Offline

**Agent Status Colors:**
- 🟢 Online: `#10B981` (Success-500) — Agent active ishlayapti
- 🟡 Away: `#F59E0B` (Warning-500) — 5+ daqiqa inaktiv
- 🔴 Offline: `#EF4444` (Error-500) — Logged out yoki browser yopiq

**Agent List Item Format:**
```
[ ] 🟢 John Doe          (3 active)
[ ] 🟡 Jane Smith        (1 active)
[ ] 🔴 Mike Johnson      (0 active)
```

### 3.2 Messages Area — Xabarlar maydoni

#### Umumiy spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Background | `#FFFFFF` |
| Padding | 24px |
| Overflow | Vertikal scroll, auto-scroll pastga (yangi xabar kelganda) |
| Gap (xabarlar orasida) | 16px |

#### Message Bubble — Mijoz (Incoming)

| Parametr | Qiymat |
|----------|--------|
| Joylashuv | Chapga tekislangan (align: flex-start) |
| Background | `#F3F4F6` (Gray-100) |
| Matn rangi | `#111827` (Gray-900) |
| Border-radius | 12px (yuqori chap: 4px — "dumaloq burchak" ko'rinishi) |
| Padding | 12px |
| Max-width | 70% (chat window kengligining) |
| Shrift | 14px Regular (400) |
| Line-height | 20px |

#### Message Bubble — Agent (Outgoing)

| Parametr | Qiymat |
|----------|--------|
| Joylashuv | O'ngga tekislangan (align: flex-end) |
| Background | `#4F46E5` (Primary-600) |
| Matn rangi | `#FFFFFF` (White) |
| Border-radius | 12px (yuqori o'ng: 4px) |
| Padding | 12px |
| Max-width | 70% |
| Shrift | 14px Regular (400) |
| Line-height | 20px |

#### Timestamp (vaqt belgisi)

| Parametr | Qiymat |
|----------|--------|
| Format | "Ahmad: 14:23" yoki "Sara (agent): 14:25" |
| Shrift | 12px Regular (400) |
| Rang | `#9CA3AF` (Gray-400) |
| Joylashuv | Xabar bubble ostida, tekislanishi bubble tomonga qarab |
| Margin-top | 4px |

#### System Message (tizim xabari)

| Parametr | Qiymat |
|----------|--------|
| Ko'rinish | Markazda, border yo'q |
| Background | transparent |
| Matn | 12px Regular, `#9CA3AF`, italic |
| Namuna | "Ahmad chatga qo'shildi", "Chat yopildi" |
| Padding | 8px 0 |

#### Auto-scroll xulq-atvori
- Yangi xabar kelganda avtomatik pastga scroll
- Agar foydalanuvchi yuqoriga scroll qilgan bo'lsa — auto-scroll to'xtatiladi
- Pastda "Yangi xabar" tugmasi ko'rinadi (bosish = pastga qaytish)
- Tugma: pill shape, `#4F46E5` bg, oq matn, shadow-md, down arrow icon

#### Quick Actions (xabar ustida hover)

| Action | Icon | Tavsif |
|--------|------|--------|
| Reply | Reply arrow | Xabarga javob berish (quote) |
| Star | Star icon | Xabarni belgilash |
| Delete | Trash icon | Xabarni o'chirish |

**Quick Actions bar:**
- Ko'rinish: Faqat xabar ustida hover qilganda
- Joylashuv: Xabar bubble yuqori o'ng burchagida
- Background: `#FFFFFF`, shadow-sm, radius 8px
- Icon size: 16px, `#6B7280`
- Hover: icon `#111827`
- Gap: 4px
- Padding: 4px

---

### 3.3 Input Area — Xabar yozish maydoni

#### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Background | `#FFFFFF` |
| Border-top | 1px `#E5E7EB` |
| Padding | 16px 24px |

#### Toolbar Icons (chapda)

| Icon | Vazifasi |
|------|----------|
| Emoji | Emoji tanlash popup ochiladi |
| File attach (paperclip) | Fayl biriktirish dialog ochiladi |
| Canned responses (chat bubble) | Tayyor javoblar popup ochiladi |

**Icon spetsifikatsiyalari:**
- O'lcham: 20px
- Rang: `#6B7280` (default), `#4F46E5` (hover/active)
- Gap: 8px
- Padding: 8px (touch target uchun)

#### Textarea

| Parametr | Qiymat |
|----------|--------|
| Placeholder | "Xabar yozing..." |
| Shrift | 14px Regular, `#111827` |
| Placeholder rangi | `#9CA3AF` (Gray-400) |
| Min-height | 44px (1 qator) |
| Max-height | 120px (keyin scroll) |
| Auto-expand | Ha — matn yozilganda balandlik avtomatik oshadi |
| Border | none (kontent ichida) |
| Resize | Yo'q (manual resize disabled) |

#### Send Button

| Parametr | Qiymat |
|----------|--------|
| Joylashuv | O'ng tomonda |
| Background | `#4F46E5` (Primary-600) |
| Icon | Send arrow, 16px, `#FFFFFF` |
| O'lcham | 40px x 40px |
| Border-radius | 8px |
| Hover | `#4338CA` (Primary-700) |
| Disabled | `#D1D5DB` (Gray-300) — matn bo'sh paytida |

#### Keyboard Shortcuts

| Tugma | Amal |
|-------|------|
| **Enter** | Xabar yuborish (send) |
| **Shift + Enter** | Yangi qator (new line) |
| **Ctrl + K** | Global qidiruv |
| **Esc** | Joriy chatni yopish |
| **Arrow Up/Down** | Chat ro'yxatida navigatsiya |

---

## 4. CANNED RESPONSES — Tayyor javoblar popup

### Vazifasi
Agent tez-tez yuboriladigan javoblarni tezda tanlash va input maydoniga kiritish.

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Trigger | Toolbar icon bosish yoki "/" yozish |
| Kenglik | 360px |
| Max-height | 400px |
| Background | `#FFFFFF` |
| Border | 1px `#E5E7EB` |
| Border-radius | 12px |
| Shadow | shadow-lg |
| Joylashuv | Input area ustida, popup sifatida |

### Tarkibi

| Element | Tavsif |
|---------|--------|
| Search | "Javob qidirish..." input, 40px, yuqorida |
| List | Tayyor javoblar ro'yxati, har biri: title + preview text |
| Click amal | Tanlangan javob input maydoniga kiritiladi |
| "+ Yangi qo'shish" | Ro'yxat pastida, yangi shablon yaratish tugmasi |

### List Item

| Element | Tavsif |
|---------|--------|
| Title | 14px Semibold, `#111827` — "Salomlashish" |
| Preview | 13px Regular, `#6B7280` — "Assalomu alaykum! Qanday..." (truncated) |
| Hover | `#F3F4F6` background |
| Padding | 12px 16px |
| Border-bottom | 1px `#F3F4F6` |

---

## 5. FILE ATTACHMENT — Fayl biriktirish

### Trigger
Paperclip icon bosish yoki Drag & Drop

### Spetsifikatsiyalar

| Parametr | Qiymat |
|----------|--------|
| Max fayl hajmi | Free: 10MB, Pro: 25MB, Business: 50MB |
| Ruxsat formatlar | JPG, PNG, PDF, DOCX, XLSX, SVG, GIF |
| Upload usuli | Drag & Drop yoki "Browse Files" tugma |

### Drag & Drop maydon

| Parametr | Qiymat |
|----------|--------|
| Background | `#F9FAFB` (Gray-50), dashed border 2px `#D1D5DB` |
| Active (fayl ustida) | Border `#4F46E5`, bg `#EEF2FF` |
| Icon | Upload cloud, 48px, `#6B7280` |
| Matn | "Faylni bu yerga tashlang" — 14px Medium, `#374151` |
| Sub-matn | "yoki faylni tanlash uchun bosing" — 13px Regular, `#6B7280` |
| Format info | "JPG, PNG, PDF, DOCX, XLSX, SVG, GIF — max 10-50MB" — 12px Regular, `#9CA3AF` |

### Upload Preview Card

| Element | Tavsif |
|---------|--------|
| Fayl nomi | 14px Medium, `#111827` |
| Fayl hajmi | 12px Regular, `#6B7280` — "2.4 MB" |
| Progress bar | 4px balandlik, `#4F46E5` fill, `#E5E7EB` bg |
| Delete button | X icon, 16px, `#6B7280` |
| Success | Checkmark icon, `#10B981` |

---

## 6. CHAT ACTIONS — Chat boshqaruv amallar

### Chat Actions Dropdown (header yoki kontekst menu)

| Amal | Icon | Tavsif |
|------|------|--------|
| Mark as Resolved | Check circle | Chatni hal qilingan deb belgilash |
| Reopen | Refresh | Yopilgan chatni qayta ochish |
| Reassign | User switch | Boshqa agentga o'tkazish |
| Add Tag | Tag icon | Chat uchun teg qo'shish |
| Copy Link | Link icon | Chat havolasini nusxalash |
| Delete Chat | Trash icon | Chatni o'chirish (tasdiq kerak) |
| Block User | Block icon | Foydalanuvchini bloklash |

**Dropdown uslubi:**
- Kenglik: 240px
- Background: `#FFFFFF`
- Border: 1px `#E5E7EB`
- Border-radius: 12px
- Shadow: shadow-lg
- Item balandligi: 40px
- Icon: 16px, `#6B7280`
- Matn: 14px Regular, `#374151`
- Hover: `#F3F4F6`
- Xavfli amallar (Delete, Block): `#EF4444` matn rangi

---

## 7. REAL-TIME FEATURES — Jonli funksiyalar

### Typing Indicator

| Parametr | Qiymat |
|----------|--------|
| Ko'rinish | "Ahmad yozyapti..." matni + 3 ta animated dot |
| Joylashuv | Chat window pastki qismida, oxirgi xabar ostida |
| Matn | 13px Regular, `#6B7280`, italic |
| Dot animatsiya | 3 ta kichik doira (6px), ketma-ket bounce, `#6B7280` |
| Ko'rinish davomiyligi | Foydalanuvchi yozishni to'xtatgandan 3 soniya keyin yo'qoladi |

### Online/Offline Status

| Status | Ko'rinish | Rang |
|--------|-----------|------|
| Online | Yashil nuqta (8px) + "Online" matn | `#10B981` |
| Offline | Kulrang nuqta (8px) + "Offline" matn | `#9CA3AF` |
| Real-time | Status har 30 soniyada yangilanadi | — |

### Notifications

| Tur | Tavsif |
|-----|--------|
| **Browser notification** | Yangi xabar kelganda desktop notification |
| **Sound** | Qisqa notification ovozi |
| **Badge update** | Browser tab title: "(3) QULAY CHAT — Inbox", Inbox sidebar badge yangilanadi |

---

## 8. LOADING / ERROR HOLATLARI

### Chat List Loading
- 5-6 ta skeleton chat card: Avatar placeholder (doira) + 2 ta matn chizig'i
- Shimmer animatsiya: 1.5s loop
- Background: `#E5E7EB` shimmer

### Chat Window Loading
- Markazda spinner (24px, `#4F46E5`)
- "Xabarlar yuklanmoqda..." matn, 14px, `#6B7280`

### Error States

| Holat | Xabar | Tugma |
|-------|-------|-------|
| Chat list yuklanmadi | "Chatlarni yuklab bo'lmadi" | "Qayta yuklash" |
| Xabar yuborilmadi | "Xabar yuborilmadi" (xabar yonida xato icon) | "Qayta yuborish" |
| Ulanish uzildi | "Internet aloqasi uzildi" (banner) | Auto-reconnect |

### Connection Lost Banner

| Parametr | Qiymat |
|----------|--------|
| Joylashuv | Chat window yuqorisida, header ostida |
| Background | `#FEF2F2` (Error-50) |
| Border | 1px `#EF4444` (Error-500) |
| Icon | Wifi off, 16px, `#EF4444` |
| Matn | "Internet aloqasi uzildi. Qayta ulanmoqda..." 14px, `#991B1B` |
| Balandlik | 44px |

---

## 9. FIGMA COMPONENT TREE — To'liq komponent daraxti

```
inbox-chat/
├── inbox-layout (auto-layout, horizontal)
│   │
│   ├── chat-list-panel/ (360px, vertical)
│   │   ├── top-bar/ (auto-layout, vertical, padding: 16px)
│   │   │   ├── search-input (full width, 40px height)
│   │   │   │   ├── search-icon (16px, #6B7280)
│   │   │   │   └── placeholder ("Mijoz ismi yoki xabar...")
│   │   │   ├── filter-dropdown (trigger + panel)
│   │   │   │   ├── filter-item ("Active")
│   │   │   │   ├── filter-item ("Assigned")
│   │   │   │   ├── filter-item ("Closed")
│   │   │   │   ├── filter-item ("Bugun")
│   │   │   │   ├── filter-item ("Kecha")
│   │   │   │   └── filter-item ("Oxirgi 7 kun")
│   │   │   └── filter-tabs (auto-layout, horizontal, gap: 4px)
│   │   │       ├── tab ("Active", active state)
│   │   │       ├── tab ("Assigned")
│   │   │       └── tab ("Closed")
│   │   │
│   │   ├── chat-cards-list/ (scrollable, vertical)
│   │   │   ├── chat-card/ (variants below)
│   │   │   │   ├── status-icon (10px doira: yashil/kulrang/qora)
│   │   │   │   ├── content (auto-layout, vertical, gap: 4px)
│   │   │   │   │   ├── top-row (auto-layout, horizontal, space-between)
│   │   │   │   │   │   ├── customer-name (14px Semibold, #111827)
│   │   │   │   │   │   └── timestamp (12px Regular, #9CA3AF)
│   │   │   │   │   ├── message-preview (13px Regular, #6B7280, truncated)
│   │   │   │   │   └── bottom-row (auto-layout, horizontal, space-between)
│   │   │   │   │       ├── agent-name (12px Medium, #6B7280)
│   │   │   │   │       └── unread-badge (pill, #EF4444 bg, oq matn)
│   │   │   │   └── states: [default, hover, selected, unread]
│   │   │   ├── chat-card (variant: active)
│   │   │   ├── chat-card (variant: assigned)
│   │   │   └── chat-card (variant: closed)
│   │   │
│   │   └── empty-state/ (markazda)
│   │       ├── icon (chat-bubble, 80px, #D1D5DB)
│   │       ├── title ("Chatlar yo'q", 16px Semibold)
│   │       └── description ("Mijozlardan xabar kelishi bilan...")
│   │
│   ├── chat-window/ (fluid, vertical)
│   │   ├── chat-header/ (64px, auto-layout, horizontal, space-between)
│   │   │   ├── left-group (auto-layout, horizontal, gap: 12px)
│   │   │   │   ├── customer-name (16px Semibold, #111827)
│   │   │   │   └── online-status (dot + "Online"/"Offline")
│   │   │   └── right-group (auto-layout, horizontal, gap: 8px)
│   │   │       ├── agent-dropdown ("O'zim ▾", 200px panel)
│   │   │       │   ├── agent-item ("O'zim", avatar, checkmark)
│   │   │       │   ├── agent-item ("Sara", avatar)
│   │   │       │   ├── agent-item ("Bobur", avatar)
│   │   │       │   └── agent-item ("Ali", avatar)
│   │   │       ├── actions-dropdown (more icon, 240px panel)
│   │   │       └── close-button (X icon, 36px)
│   │   │
│   │   ├── messages-area/ (scrollable, vertical, padding: 24px)
│   │   │   ├── message-bubble-incoming/
│   │   │   │   ├── bubble (chap, #F3F4F6 bg, 12px radius, 12px padding)
│   │   │   │   │   └── text (14px Regular, #111827, max-width: 70%)
│   │   │   │   └── timestamp ("Ahmad: 14:23", 12px, #9CA3AF)
│   │   │   │
│   │   │   ├── message-bubble-outgoing/
│   │   │   │   ├── bubble (o'ng, #4F46E5 bg, 12px radius, 12px padding)
│   │   │   │   │   └── text (14px Regular, #FFFFFF, max-width: 70%)
│   │   │   │   └── timestamp ("Sara: 14:25", 12px, #9CA3AF)
│   │   │   │
│   │   │   ├── system-message ("Chat yopildi", center, 12px italic)
│   │   │   │
│   │   │   ├── typing-indicator/
│   │   │   │   ├── text ("Ahmad yozyapti...", 13px italic, #6B7280)
│   │   │   │   └── dots (3x 6px animated circles)
│   │   │   │
│   │   │   └── quick-actions-bar/ (hover overlay on message)
│   │   │       ├── reply-btn (reply icon, 16px)
│   │   │       ├── star-btn (star icon, 16px)
│   │   │       └── delete-btn (trash icon, 16px)
│   │   │
│   │   └── input-area/ (auto-layout, vertical, border-top)
│   │       ├── toolbar (auto-layout, horizontal, gap: 8px, padding: 8px 24px)
│   │       │   ├── emoji-btn (smile icon, 20px)
│   │       │   ├── attach-btn (paperclip icon, 20px)
│   │       │   └── canned-btn (chat-bubble icon, 20px)
│   │       │
│   │       ├── input-row (auto-layout, horizontal, gap: 12px, padding: 0 24px 16px)
│   │       │   ├── textarea (fluid, min 44px, max 120px, auto-expand)
│   │       │   │   └── placeholder ("Xabar yozing...")
│   │       │   └── send-button (44x44px, #4F46E5, send-arrow icon)
│   │       │
│   │       └── canned-responses-popup/ (360px, hidden by default)
│   │           ├── search ("Javob qidirish...")
│   │           ├── response-item (title + preview, click inserts)
│   │           └── add-new ("+ Yangi qo'shish")
│   │
│   └── info-sidebar/ (280px, optional — 12-inbox-advanced.md)
```

---

## 10. FIGMA COMPONENT VARIANTLARI

### Chat Card Component

| Property | Qiymatlari |
|----------|-----------|
| Type | `active` / `assigned` / `closed` |
| State | `default` / `hover` / `selected` |
| HasUnread | `true` / `false` |

### Message Bubble Component

| Property | Qiymatlari |
|----------|-----------|
| Direction | `incoming` / `outgoing` |
| HasTimestamp | `true` / `false` |
| HasQuickActions | `true` / `false` |

### Input Field Component

| Property | Qiymatlari |
|----------|-----------|
| State | `empty` / `typing` / `expanded` |
| HasAttachment | `true` / `false` |

---

## 11. RESPONSIVE XULQ-ATVOR

| Breakpoint | Chat List | Chat Window | Info Sidebar | Maxsus xulq-atvor |
|------------|-----------|-------------|-------------|-------------------|
| **Desktop (1440px)** | 360px | fluid | 280px | 3 panel yonma-yon |
| **Tablet (768px)** | 320px | fluid | overlay | Info sidebar overlay sifatida ochiladi (sliding panel) |
| **Mobile (< 768px)** | to'liq ekran | to'liq ekran | to'liq ekran | Stack navigatsiya — back tugma bilan qaytish |

### Mobile xulq-atvori batafsil
- **Chat list:** To'liq ekranni egallaydi
- **Chat tanlanganda:** Chat window to'liq ekranda ochiladi, yuqorida "< Orqaga" tugma
- **Info:** Alohida to'liq ekran sahifa sifatida ochiladi
- **Back button:** 40px, arrow-left icon, `#374151`
- **Swipe:** O'ngga swipe = orqaga qaytish (ixtiyoriy)

### Tablet xulq-atvori
- Chat list: 320px (kichikroq)
- Chat window: fluid
- Info sidebar: Overlay panel (o'ngdan sliding), 280px, shadow-xl
- Overlay trigger: Header dagi info icon tugma

---

## 12. RANG XULOSA JADVALI

| Element | Rang | Hex |
|---------|------|-----|
| Chat list bg | White | `#FFFFFF` |
| Chat window bg | White | `#FFFFFF` |
| Message incoming bg | Gray-100 | `#F3F4F6` |
| Message outgoing bg | Primary-600 | `#4F46E5` |
| Message incoming text | Gray-900 | `#111827` |
| Message outgoing text | White | `#FFFFFF` |
| Selected chat bg | Primary-50 | `#EEF2FF` |
| Hover chat bg | Gray-50 | `#F9FAFB` |
| Timestamp | Gray-400 | `#9CA3AF` |
| Preview text | Gray-500 | `#6B7280` |
| Unread badge | Error-500 | `#EF4444` |
| Online dot | Success-500 | `#10B981` |
| Offline dot | Gray-400 | `#9CA3AF` |
| Active status dot | Success-500 | `#10B981` |
| Assigned status dot | Gray-300 | `#D1D5DB` |
| Closed status dot | Gray-700 | `#374151` |
| Send button | Primary-600 | `#4F46E5` |
| Toolbar icon | Gray-500 | `#6B7280` |

---

## 13. TIPOGRAFIYA XULOSA JADVALI

| Element | O'lcham | Og'irlik | Rang |
|---------|---------|----------|------|
| Chat header mijoz ismi | 16px | Semibold (600) | `#111827` |
| Chat card mijoz ismi | 14px | Semibold (600) | `#111827` |
| Message text | 14px | Regular (400) | `#111827` / `#FFFFFF` |
| Oxirgi xabar preview | 13px | Regular (400) | `#6B7280` |
| Timestamp | 12px | Regular (400) | `#9CA3AF` |
| Agent nomi | 12px | Medium (500) | `#6B7280` |
| Typing indicator | 13px | Regular Italic | `#6B7280` |
| System message | 12px | Regular Italic | `#9CA3AF` |
| Badge raqam | 11px | Bold (700) | `#FFFFFF` |
| Search placeholder | 14px | Regular (400) | `#6B7280` |
| Filter tab | 14px | Medium (500) | `#4F46E5` / `#6B7280` |
| Input placeholder | 14px | Regular (400) | `#9CA3AF` |
| Canned title | 14px | Semibold (600) | `#111827` |
| Canned preview | 13px | Regular (400) | `#6B7280` |

---

## 14. SPACING XULOSA JADVALI

| Element | Qiymat |
|---------|--------|
| Chat list padding (top bar) | 16px |
| Chat card padding | 12px 16px |
| Chat card gap (vertical) | 4px |
| Chat card border-bottom | 1px `#F3F4F6` |
| Filter tabs gap | 4px |
| Filter tab padding | 8px 16px |
| Messages area padding | 24px |
| Messages gap | 16px |
| Bubble padding | 12px |
| Bubble max-width | 70% |
| Bubble border-radius | 12px |
| Timestamp margin-top | 4px |
| Input area padding | 16px 24px |
| Toolbar gap | 8px |
| Textarea min-height | 44px |
| Textarea max-height | 120px |
| Send button size | 44x44px |
| Quick actions gap | 4px |
| Canned popup width | 360px |
| Canned item padding | 12px 16px |

---

## 15. ACCESSIBILITY

### Keyboard Navigation

| Tugma | Amal | Tafsilot |
|-------|------|---------|
| **Tab** | Focus navbat | Conversation list → Chat input → Send button → Info panel actions |
| **Shift+Tab** | Orqaga focus | |
| **Arrow Up/Down** | Conversation list da yuqori/pastga | Conversation list focused bo'lganda |
| **Enter** | Tanlangan conversation ni ochish | Conversation list item focused |
| **Escape** | Info panel/emoji picker yopish | Active panel/overlay |
| **Cmd/Ctrl+Enter** | Xabar yuborish | Message input focused, multi-line |
| **Cmd/Ctrl+Shift+E** | Emoji picker ochish | Message input focused |
| **Cmd/Ctrl+K** | Global search | Dashboard level |

### ARIA Roles

| Element | ARIA | Label |
|---------|------|-------|
| Conversation list | `role="listbox"` | `aria-label="Conversations"` |
| Conversation item | `role="option"` | `aria-selected`, `aria-label="[name], [unread] unread"` |
| Chat area | `role="log"` | `aria-live="polite"`, `aria-label="Chat messages"` |
| Message input | `role="textbox"` | `aria-label="Type a message"`, `aria-multiline="true"` |
| Info sidebar | `role="complementary"` | `aria-label="Customer information"` |

### Screen Reader Announcements

| Event | Announcement | ARIA live region |
|-------|-------------|-----------------|
| Yangi xabar keldi | "[Name] sent a new message: [preview]" | `aria-live="polite"` |
| Conversation assigned | "Conversation assigned to you" | `aria-live="assertive"` |
| Xabar yuborildi | "Message sent" | `aria-live="polite"` |
| File received | "File received: [filename], [size]" | `aria-live="polite"` |
| Typing indicator | "[Name] is typing" | `aria-live="polite"` |
| Conversation closed | "Conversation closed" | `aria-live="assertive"` |

### Focus Management

| Scenario | Focus harakati |
|----------|---------------|
| Conversation ochilganda | Focus → Chat message input |
| Yangi xabar kelganda | Focus o'zgarmaydi (faqat announcement) |
| Info panel ochilganda | Focus → Panel dagi birinchi focusable element |
| Info panel yopilganda | Focus qaytadi → Trigger button |
| Emoji picker ochilganda | Focus → Emoji grid |
| Modal ochilganda | Focus trap — faqat modal ichida |

### Color Contrast (WCAG 2.1 AA)

| Element | Foreground | Background | Contrast ratio | WCAG AA |
|---------|-----------|------------|----------------|---------|
| Operator message text | `#FFFFFF` | `#4F46E5` | 5.8:1 | ✅ Pass |
| Visitor message text | `#111827` | `#F3F4F6` | 12.3:1 | ✅ Pass (AAA) |
| Unread badge | `#FFFFFF` | `#EF4444` | 4.5:1 | ✅ Pass |
| Timestamp | `#6B7280` | `#FFFFFF` | 4.8:1 | ✅ Pass |

### Touch Targets

| Element | Hajmi | WCAG minimum |
|---------|-------|-------------|
| Conversation list item | Full width × 64px height | ✅ 44px+ |
| Send button | 44px × 44px | ✅ |
| Emoji button | 44px × 44px | ✅ |
| File upload button | 44px × 44px | ✅ |
| Info panel toggle | 48px × 48px | ✅ |

---

## 16. FIGMA AI UCHUN PROMPT

```
Create a chat inbox interface for a SaaS customer support platform called QULAY CHAT.

LAYOUT: Two-panel design.
- Left panel (360px): Chat list with search bar, filter tabs (Active/Assigned/Closed), and conversation cards.
- Right panel (fluid): Active chat window with message area and input field.

CHAT LIST (left):
- Search input at top: placeholder "Mijoz ismi yoki xabar...", gray background (#F3F4F6)
- Filter tabs: Active (selected, indigo bg #E0E7FF), Assigned, Closed
- Chat cards: Each card shows a colored status dot (green=active, gray=assigned, dark=closed),
  customer name (14px semibold), message preview (13px gray, truncated),
  agent name, timestamp, and optional red unread badge [3]
- Selected card has light indigo background (#EEF2FF) with left indigo border
- Empty state: chat bubble icon + "Chatlar yo'q" centered message

CHAT WINDOW (right):
- Header (64px): Customer name (16px semibold), online/offline status with dot,
  agent assignment dropdown (O'zim, Sara, Bobur, Ali), close button
- Messages area: Incoming bubbles (left aligned, #F3F4F6 bg, dark text, 12px radius),
  outgoing bubbles (right aligned, #4F46E5 bg, white text, 12px radius),
  max-width 70%, timestamps below each bubble ("Ahmad: 14:23")
- Typing indicator: "Ahmad yozyapti..." with 3 animated dots
- Input area: Toolbar icons (emoji, attach, canned responses),
  auto-expanding textarea with placeholder "Xabar yozing...",
  indigo send button (44x44px) on the right

QUICK ACTIONS: On message hover show reply/star/delete icons in a floating bar.

Style: Clean, modern, professional. Font: Inter. Primary: #4F46E5.
Background: white. Desktop width: 1440px.
Include variants: chat card (active/assigned/closed x default/hover/selected),
message bubble (incoming/outgoing).
```
