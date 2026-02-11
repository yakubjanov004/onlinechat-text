# CHATFLOW — Online Visitors (Onlayn Tashrif Buyuruvchilar)

## Modul maqsadi
Online Visitors moduli — saytga hozir tashrif buyurayotgan real vaqtdagi foydalanuvchilarni kuzatish, ularning harakatlarini monitoring qilish va proaktiv chat boshlash imkoniyatini beradi. Bu orqali agentlar mijozlarga eng to'g'ri vaqtda yordam taklif qiladi.

**Kirish:** Admin, Manager, Operator (ko'rish + proaktiv chat huquqi)

---

## 1. Visitors List — Real-time (SCR-OV01)

### Layout
Dashboard Shell + Main Content Area (full-width, 24px padding)

### UI Komponentlar

#### Header Section
- **Title:** "Onlayn tashrif buyuruvchilar" 24px Semibold, Gray-900
- **Live Counter:** 🟢 "47 онлайн" 
  - Font: 18px Semibold, Success-500
  - Animated pulse effect on green dot (8px circle)
  - Updates real-time (WebSocket)
- **Subtitle:** "Hozir saytingizda" 14px Regular, Gray-600
- **Action Button:**
  - "Proaktiv chat boshlash" Primary button
  - Disabled if no visitor selected
  - Enabled when visitor card is clicked

#### Filters & Tabs
- **Tabs:**
  - **Онлайн** (47) — active, Primary-600 indicator
  - Офлайн (last 24h, shows recent)
  - Barchasi (all visitors)
- **Filters (inline dropdown buttons):**
  - Country: 🇺🇿 Uzbekistan, 🇷🇺 Russia, 🇰🇿 Kazakhstan, etc.
  - Page URL: Homepage, /pricing, /features, /blog, etc.
  - Visit Duration: < 1 min, 1-5 min, 5-15 min, 15+ min
  - "Tozalash" link (clear filters, Primary-600)

#### Visitor Cards Grid
- **Grid Layout:**
  - Desktop (1440px+): 3 columns
  - Tablet (768px): 2 columns
  - Mobile (375px): 1 column
  - Gap: 20px between cards

**Visitor Card (360×200px):**

```
┌──────────────────────────────────────┐
│ 🟢 Online    Tashkent, Uzbekistan 🇺🇿 │  ← Header row
│              5m 32s onlayn (updating) │
│                                      │
│ [Avatar 48px]  Anonymous #12847     │  ← Visitor info
│                jahongir@example.com  │
│                💻 Desktop · Chrome   │
│                                      │
│ 📄 Narxlar — CHATFLOW                │  ← Current page
│    /pricing                          │
│    3 sahifa ko'rdi                   │
│                                      │
│ [Xabar yuborish] [Profilni ko'rish] │  ← Actions
└──────────────────────────────────────┘
```

**Card Styling:**
- Background: White
- Border: 1px Gray-200
- Radius: 12px
- Padding: 20px
- Shadow: shadow-sm default, shadow-lg on hover
- Hover: scale 1.02, cursor pointer

**Card Content Details:**

**Status Row (top):**
- 🟢 Online badge (8px green dot + "Online" 12px Semibold Success-500)
- Location: "Tashkent, Uzbekistan" 13px Gray-600 + 🇺🇿 flag icon
- Time online: "5m 32s onlayn" 12px Gray-500, updates every second

**Visitor Info:**
- Avatar: 48px circle (anonymous icon if no contact data, or actual photo)
- Name: "Anonymous #12847" or "Jahongir Otajonov" 16px Semibold Gray-900
- Email: "jahongir@example.com" 14px Gray-600 (if known from previous chat)
- Device: 💻 Desktop / 📱 Mobile / 📲 Tablet icon 14px + Browser: Chrome icon + "Chrome 120" 13px Gray-500

**Current Activity:**
- Page title: "Narxlar — CHATFLOW" 14px Medium Primary-600, truncated with ellipsis
- Page URL: "/pricing" 13px Gray-500, monospace font
- Page views: "3 sahifa ko'rdi" 12px Gray-500

**Visitor History (expandable, collapsed by default):**
- Click "▼ Tarix" to expand
- Previous 3 pages timeline:
  - "Homepage" — 2m 15s — 14:25
  - "Features" — 1m 45s — 14:27
  - "Pricing" — current — 14:29

**Action Buttons (bottom):**
- "Xabar yuborish" Outline button (primary color)
- "Profilni ko'rish" Ghost button
- "Kontakt sifatida saqlash" Ghost button (if not already a contact)

#### Empty State (0 visitors)
- Icon: 👥 People icon (64px, Gray-300)
- Title: "Hozir tashrif buyuruvchilar yo'q" 18px Semibold
- Description: "Kutib turing yoki widget sozlamalarini tekshiring"
- "Widget sozlamalari" Outline button → SCR-S03 Widget Settings

#### Auto-refresh Indicator
- Position: Footer (sticky bottom or floating)
- Text: "5 soniya oldin yangilandi" 12px Gray-500
- Auto-refresh: Every 5 seconds (configurable in settings)

---

## 2. Visitor Profile — Detail View (SCR-OV02)

### Layout
Right Panel (800px width), slides from right

### UI Komponentlar

#### Header
- **Back arrow:** ← Tashrif buyuruvchilar (14px Gray-600, clickable)
- **Status:** 🟢 Online / 🔴 Offline badge (16px, Semibold)
- **Actions:**
  - "Xabar yuborish" Primary button → Opens SCR-OV03 modal
  - "Kontakt sifatida saqlash" Ghost button (if not saved)

#### Visitor Summary Card
- **Avatar:** 80px circle, center-aligned
- **Name:** "Anonymous #12847" or actual name 20px Semibold
- **Location:** "Tashkent, Uzbekistan" 🇺🇿 16px Gray-600
- **IP Address:** "82.215.xxx.xxx" 14px Gray-500 (partially masked for privacy)
- **Quick Stats Grid (2×3):**
  - First seen: "Jan 10, 2026"
  - Last seen: "2 daqiqa oldin"
  - Total visits: "12 marta"
  - Session time: "5m 32s" (live timer)
  - Pages viewed (total): 47
  - Avg session: "8m 45s"

#### Current Session Section
- **Title:** "Hozirgi sessiya" 16px Semibold
- Card background: Primary-50, padding 16px, radius 8px

**Session Info:**
- Session started: "5m 32s oldin" + Live timer
- Device: 💻 Desktop, Windows 11
- Browser: Chrome 120.0.6099
- Screen resolution: 1920×1080
- Referrer: "Google Search" or direct URL
- Landing page: "/homepage"
- Pages viewed this session: 4

#### Page View Timeline
- **Title:** "Sahifalar tarixi" 16px Semibold
- Scrollable vertical timeline (most recent top)

**Each Page Entry:**
```
┌─────────────────────────────────┐
│ 📄 Narxlar — CHATFLOW          │
│    /pricing                    │
│    ⏱ 2m 15s · 🕐 14:32        │
│    [Thumbnail 120×80px]        │ (optional)
└─────────────────────────────────┘
```

- Page title: 14px Semibold, Gray-900
- URL: 13px Gray-600, monospace
- Time spent: "2m 15s" + Timestamp: "14:32"
- Thumbnail: Page screenshot (if available, 120×80px)

#### Browsing Behavior Card
- **Title:** "Xatti-harakati" 16px Semibold
- **Metrics:**
  - Total page views: 47
  - Avg session duration: "8m 45s"
  - Bounce rate: "25%" (single page visits / total visits)
  - Most viewed pages: Top 3 list with visit count

#### Geographic & Tech Info Card
- **Title:** "Texnik ma'lumotlar" 16px Semibold
- **Fields:**
  - Country/City: 🗺️ Icon + "Tashkent, Uzbekistan"
  - Timezone: "UTC+5"
  - Language: "uz-UZ, ru-RU"
  - OS: Windows 11
  - Device type: Desktop
  - Browser: Chrome 120
  - Screen: 1920×1080

#### Contact Information (if available)
- **Title:** "Aloqa ma'lumotlari" 16px Semibold
- Email: [value] (if submitted via chat or form)
- Phone: [value]
- "Kontakt sifatida saqlash" Primary button → Creates in SCR-CT01

#### Conversation History
- **Title:** "Suhbat tarixi" 16px Semibold
- List: Previous chats (if any)
  - Date, Agent, Status, Rating
  - "Suhbatni ochish" link → Opens in Inbox

#### Custom Events (if tracked)
- **Title:** "Hodisalar" 16px Semibold
- Timeline of tracked events:
  - "Signed up for trial" — Jan 10, 14:25
  - "Downloaded whitepaper" — Jan 08, 10:15
  - Event icon + Description + Timestamp

---

## 3. Proactive Chat Initiate (SCR-OV03)

### Layout
Modal (500px width), centered overlay

### UI Komponentlar

#### Header
- Title: "Proaktiv chat boshlash" 20px Semibold
- Close button (X, top-right)

#### Visitor Preview Section
- Avatar: 48px
- Name: "Anonymous #12847"
- Current page: "/pricing" 13px Gray-600
- Time on page: "3m 45s" 13px Gray-500

#### Message Composer
- **Label:** "Xabar matn" 14px Medium
- **Textarea:**
  - Height: 250px (multi-line)
  - Placeholder: "Salom! Sizga yordam kerakmi?"
  - Character count: "0 / 500" 12px Gray-500
  - Border: 1px Gray-300, focus: 2px Primary-600

#### Canned Responses Dropdown
- **Label:** "Tezkor javoblar" 14px Medium
- **Dropdown button:** "Shablon tanlash" (Ghost button with dropdown icon)
- **Options:**
  - "Sizga yordam berishim mumkinmi?"
  - "Savollaringiz bormi?"
  - "Pricing haqida ma'lumot olishni xohlaysizmi?"
  - "Demo ko'rishni xohlaysizmi?"
- Select → auto-fills textarea (overwrites current content)

#### Send Options
- **Radio buttons:**
  - ⦿ "Agent sifatida yuborish" (shows agent name + avatar to visitor)
  - ◯ "Chatbot sifatida yuborish" (shows bot icon)

#### Actions
- "Bekor qilish" Ghost button (left)
- "Xabar yuborish" Primary button (right)
  - Disabled if textarea empty
  - On click:
    - Modal closes
    - Opens Inbox (SCR-I01) with new conversation
    - Visitor sees popup on their screen
    - If visitor doesn't respond in 30s: Toast "Javob yo'q"

#### After Send
- Redirects to Inbox with active chat
- Agent can continue conversation in real-time
- Visitor card in OV01 updated with chat status badge

---

## 4. Geographic Map View (SCR-OV04)

### Layout
Dashboard Shell + Main Content (Full Width, no sidebar padding)

### UI Komponentlar

#### Header
- **Title:** "Joylashuv xaritasi" 24px Semibold
- **Live Count:** "🟢 47 онлайн" (animated)
- **View Toggle:** Map | List (switches between SCR-OV04 and SCR-OV01)
  - Icon toggle, right-aligned

#### Interactive World Map
- **Map Provider:** OpenStreetMap or Mapbox
- **Map Styling:** Light theme, minimal labels
- **Zoom controls:** + / - buttons (left side)
- **Full-screen button:** Top-right
- **Center button:** Reset to default view (all visitors)

#### Map Markers
- **Pin Icons:** Location pins at visitor coordinates
- **Cluster Pins:** If multiple visitors in same city
  - Circle badge with count: "12" (Primary-600 background)
  - Click cluster → Zooms in to show individual pins
- **Pin Colors:**
  - Green: Online visitor (🟢)
  - Gray: Offline/recent visitor (🔴)
- **Pin Size:** 24px default, 32px on hover

#### Marker Popup (on click)
```
┌───────────────────────────┐
│ [Avatar 32px] Anonymous   │
│ Tashkent, Uzbekistan      │
│ 📄 /pricing (3m 45s)      │
│                           │
│ [Ko'rish] [Chat boshlash] │
└───────────────────────────┘
```

- Visitor avatar + name (truncated)
- Location
- Current page + time on page
- Actions:
  - "Ko'rish" → Opens SCR-OV02
  - "Chat boshlash" → Opens SCR-OV03

#### Live Activity Sidebar (right, 300px)
- **Title:** "So'nggi faollik" 16px Semibold
- **Scrollable Feed (real-time updates):**
  - "Anonymous #12847 — Tashkent → /pricing sahifasiga o'tdi" — 2s ago
  - "Jahongir — Homepage sahifasidan chiqdi" — 15s ago
  - "Dilshod — Chat boshladi" — 1m ago
  - Max 20 items, oldest removed as new arrive
- Each item: Icon + Description + Timestamp
- Updates every 3-5 seconds (WebSocket)

#### Stats Panel (top overlay or bottom)
- **Background:** White card, shadow-lg, padding 16px
- **Position:** Top-center or bottom-left (floating)
- **Stats:**
  - Total visitors today: 1,247
  - Online now: 47
  - Top countries:
    - 🇺🇿 Uzbekistan (28)
    - 🇷🇺 Russia (12)
    - 🇰🇿 Kazakhstan (7)
    - (List, max 5)

---

## 5. Empty & Loading States

### SCR-OV-S01: Empty State
- Illustration: 👥 Monitor with people icon (120px, Gray-300)
- Title: "Tashrif buyuruvchilar yo'q" 18px Semibold
- Description: "Widget o'rnatilganligini tekshiring yoki trafik kutib turing"
- "Widget sozlamalari" Outline button → SCR-S03

### SCR-OV-S02: Loading State
- Skeleton cards (3 columns)
- Shimmer animation (left to right sweep)
- "Yuklanmoqda..." text or spinner overlay

---

## 6. Components

### Visitor Card (360×200px)
- Border: 1px Gray-200
- Radius: 12px
- Padding: 20px
- Shadow: shadow-sm, shadow-lg hover
- Hover: transform scale(1.02)

### Online Badge
- Width: auto (fit-content)
- Height: 24px
- Padding: 4px 8px
- Background: Success-50
- Color: Success-700
- Dot: 8px green circle, animated pulse
- Font: 12px Semibold

### Location Display
- Country flag: 18px emoji
- Text: 13px Gray-600
- Icon: Map pin 14px (optional)

### Live Timer
- Font: 12px Monospace, Gray-500
- Updates: Every 1 second
- Format: "Xm Ys" (e.g., "5m 32s")

---

## 7. User Flow

```
[Dashboard] → [Sidebar: Online Visitors] → [SCR-OV01 List]
                                                ↓
                        ┌───────────────────────┼───────────────────────┐
                        ↓                       ↓                       ↓
                [Filter visitors]       [Click card]          [Map view toggle]
                        ↓                       ↓                       ↓
                [Filtered results]      [SCR-OV02 Profile]      [SCR-OV04 Map]
                        ↓                       ↓                       ↓
                [Select visitor]        [Xabar yuborish]    [Click marker]
                        └───────────────────────┼───────────────────────┘
                                                ↓
                                        [SCR-OV03 Proactive Chat Modal]
                                                ↓
                                        [Send message]
                                                ↓
                                        [Opens in Inbox SCR-I02]
                                                ↓
                                        [Continue conversation]
```

---

## 8. Texnik Talablar

- **Real-time Updates:** WebSocket connection (5-second fallback to polling)
- **Data Retention:** Online status: Real-time, Offline visitors: 24 hours
- **Privacy:** IP masking (last octet), GDPR compliance
- **Geolocation:** IP-based (GeoIP2 or similar)
- **Tracking Script:** JavaScript widget auto-tracks page views
- **Visitor ID:** Cookie-based (persistent) or session-based (anonymous)
- **Proactive Chat:** Push notification to visitor browser (if permissions granted)
- **Analytics Integration:** Events sent to Analytics module
- **Performance:** Handles 1000+ concurrent visitors without lag

---

## 9. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View online visitors | ✅ | ✅ | ✅ |
| View visitor profile | ✅ | ✅ | ✅ |
| Send proactive chat | ✅ | ✅ | ✅ |
| View geographic map | ✅ | ✅ | ✅ |
| Track custom events | ✅ | ✅ | ❌ |
| Export visitor data | ✅ | ✅ | ❌ |
| Configure tracking settings | ✅ | ❌ | ❌ |

---

**Oxirgi yangilanish:** 2026-02-11
**Holat:** Production Ready
