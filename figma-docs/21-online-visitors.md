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
**Lines:** 445 → 1800+ (expanded with API, WebSocket, Database, Components, Accessibility)

---

## 10. API ENDPOINTS

### GET /api/v1/visitors/online

**Query params:**
- `country`: UZ | RU | KZ
- `page_url`: /pricing | /features | /home
- `duration`: <1min | 1-5min | 5-15min | >15min
- `page`: 1
- `limit`: 30

**Response:**
```json
{
  "data": [
    {
      "id": "vis_abc123",
      "session_id": "sess_xyz789",
      "is_online": true,
      "anonymous_id": "anon_12847",
      "contact_id": "cnt_def456",
      "name": "Jahongir Otajonov",
      "email": "jahongir@example.com",
      "avatar_url": null,
      "location": {
        "country": "Uzbekistan",
        "country_code": "UZ",
        "city": "Tashkent",
        "region": "Toshkent",
        "coordinates": [41.2995, 69.2401],
        "timezone": "Asia/Tashkent"
      },
      "current_page": {
        "url": "/pricing",
        "title": "Narxlar — CHATFLOW",
        "timestamp": "2026-02-11T14:35:00Z",
        "time_on_page_seconds": 135
      },
      "session": {
        "started_at": "2026-02-11T14:30:00Z",
        "duration_seconds": 332,
        "pages_viewed": 3,
        "last_activity_at": "2026-02-11T14:35:32Z"
      },
      "device": {
        "type": "desktop",
        "os": "Windows",
        "os_version": "11",
        "browser": "Chrome",
        "browser_version": "120.0",
        "screen_resolution": "1920x1080",
        "language": "uz-UZ"
      },
      "referrer": {
        "source": "Google",
        "medium": "organic",
        "campaign": null,
        "url": "https://www.google.com/"
      },
      "ip_address": "95.142.XX.XX",
      "contacted": false
    }
  ],
  "meta": {
    "total_online": 47,
    "total_pages": 2,
    "current_page": 1,
    "per_page": 30
  }
}
```

### GET /api/v1/visitors/:id

**Response:** Full visitor object + page history array

### GET /api/v1/visitors/:id/page-history

**Response:**
```json
{
  "page_views": [
    {
      "url": "/pricing",
      "title": "Narxlar — CHATFLOW",
      "timestamp": "2026-02-11T14:35:00Z",
      "duration_seconds": 135,
      "interactions": 3,
      "scroll_depth": 65
    },
    {
      "url": "/features",
      "title": "Imkoniyatlar",
      "timestamp": "2026-02-11T14:33:00Z",
      "duration_seconds": 105
    }
  ]
}
```

### POST /api/v1/visitors/:id/message

**Request:**
```json
{
  "message": "Salom! Pricing haqida yordam kerakmi?",
  "agent_id": "usr_agent_1"
}
```

**Response:** 201 Created
```json
{
  "conversation_id": "conv_ghi789",
  "message_id": "msg_jkl012",
  "sent_at": "2026-02-11T14:38:00Z"
}
```

### GET /api/v1/visitors/geographic-data

**Response:**
```json
{
  "countries": [
    {
      "country_code": "UZ",
      "country": "Uzbekistan",
      "visitor_count": 32,
      "percentage": 68,
      "coordinates": [41.377491, 64.585262]
    },
    {
      "country_code": "RU",
      "country": "Russia",
      "visitor_count": 10,
      "percentage": 21,
      "coordinates": [61.52401, 105.318756]
    }
  ]
}
```

### GET /api/v1/visitors/stats

**Response:**
```json
{
  "total_online": 47,
  "total_today": 328,
  "avg_session_duration_seconds": 245,
  "top_pages": [
    {
      "url": "/pricing",
      "visitors": 18,
      "avg_time_seconds": 156
    }
  ],
  "device_breakdown": {
    "desktop": 30,
    "mobile": 15,
    "tablet": 2
  },
  "top_referrers": [
    {
      "source": "Google",
      "count": 25
    }
  ]
}
```

---

## 11. WEBSOCKET EVENTS

### Event 1: `visitor.online`

```json
{
  "event": "visitor.online",
  "data": {
    "visitor_id": "vis_abc123",
    "session_id": "sess_xyz789",
    "anonymous_id": "anon_12847",
    "location": {
      "country": "Uzbekistan",
      "city": "Tashkent"
    },
    "current_page": "/pricing",
    "device_type": "desktop",
    "timestamp": "2026-02-11T14:30:00Z"
  }
}
```
**Trigger:** Add new visitor card to grid (slide-in animation)

### Event 2: `visitor.offline`

```json
{
  "event": "visitor.offline",
  "data": {
    "visitor_id": "vis_abc123",
    "session_duration_seconds": 332,
    "pages_viewed": 3,
    "timestamp": "2026-02-11T14:35:32Z"
  }
}
```
**Trigger:** Remove card from online list (fade-out 500ms), update counter

### Event 3: `visitor.page_change`

```json
{
  "event": "visitor.page_change",
  "data": {
    "visitor_id": "vis_abc123",
    "from_url": "/features",
    "to_url": "/pricing",
    "page_title": "Narxlar — CHATFLOW",
    "timestamp": "2026-02-11T14:35:00Z"
  }
}
```
**Trigger:** Update card current page + add to history timeline

### Event 4: `visitor.interaction`

```json
{
  "event": "visitor.interaction",
  "data": {
    "visitor_id": "vis_abc123",
    "interaction_type": "click",
    "element": "button.cta-pricing",
    "timestamp": "2026-02-11T14:36:00Z"
  }
}
```
**Trigger:** Update interaction count

### Event 5: `proactive_message.sent`

```json
{
  "event": "proactive_message.sent",
  "data": {
    "visitor_id": "vis_abc123",
    "conversation_id": "conv_ghi789",
    "agent_id": "usr_agent_1",
    "message": "Salom! Yordam kerakmi?",
    "timestamp": "2026-02-11T14:38:00Z"
  }
}
```
**Trigger:** Update visitor card "Contacted" badge, notify all agents

---

## 12. DATABASE SCHEMA

**Table: `visitor_sessions`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `session_id` | UUID | Unique session (from widget cookie) |
| `anonymous_id` | VARCHAR(50) | "anon_12847" |
| `contact_id` | UUID | FK → contacts.id (nullable, if identified) |
| `is_online` | BOOLEAN | Real-time status |
| `current_page_url` | TEXT | Current URL |
| `current_page_title` | VARCHAR(255) | Page title |
| `current_page_since` | TIMESTAMP | When landed on current page |
| `ip_address` | VARCHAR(45) | Masked IP (95.142.XX.XX) |
| `country` | VARCHAR(2) | ISO code UZ, RU... |
| `country_name` | VARCHAR(50) | Full name |
| `city` | VARCHAR(100) | City |
| `region` | VARCHAR(100) | Region/state |
| `latitude` | DECIMAL(10,8) | Coordinates |
| `longitude` | DECIMAL(11,8) | Coordinates |
| `timezone` | VARCHAR(50) | Asia/Tashkent |
| `device_type` | VARCHAR(20) | desktop/mobile/tablet |
| `os` | VARCHAR(50) | Windows, macOS, iOS... |
| `os_version` | VARCHAR(20) | 11 |
| `browser` | VARCHAR(50) | Chrome, Safari... |
| `browser_version` | VARCHAR(20) | 120.0 |
| `screen_resolution` | VARCHAR(20) | 1920x1080 |
| `language` | VARCHAR(10) | uz-UZ, en-US... |
| `referrer_source` | VARCHAR(50) | Google, Facebook, Direct |
| `referrer_medium` | VARCHAR(50) | organic, cpc, social... |
| `referrer_url` | TEXT | Full URL (nullable) |
| `session_started_at` | TIMESTAMP | Session start |
| `last_activity_at` | TIMESTAMP | Last action |
| `session_duration_seconds` | INTEGER | Total time |
| `pages_viewed` | INTEGER | Page count |
| `contacted` | BOOLEAN | Proactive message sent? |
| `contacted_at` | TIMESTAMP | When contacted (nullable) |
| `contacted_by` | UUID | FK → users.id (agent) |
| `created_at` | TIMESTAMP | Record created |
| `updated_at` | TIMESTAMP | Last updated |

**Indexes:**
- `idx_visitor_sessions_workspace` on `workspace_id`
- `idx_visitor_sessions_is_online` on `is_online`
- `idx_visitor_sessions_session_id` on `session_id` UNIQUE
- `idx_visitor_sessions_contact_id` on `contact_id`
- `idx_visitor_sessions_last_activity` on `last_activity_at`

**Table: `visitor_page_views`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `session_id` | UUID | FK → visitor_sessions.session_id |
| `url` | TEXT | Page URL |
| `title` | VARCHAR(255) | Page title |
| `timestamp` | TIMESTAMP | View time |
| `duration_seconds` | INTEGER | Time on page |
| `scroll_depth` | INTEGER | % scrolled 0-100 |
| `interactions` | INTEGER | Clicks/interactions |
| `exited_from_page` | BOOLEAN | User left site from this page |

**Indexes:**
- `idx_page_views_session` on `session_id`
- `idx_page_views_timestamp` on `timestamp`

---

## 13. FIGMA COMPONENTS

**Component Tree:**
```
online-visitors/
├── screens/
│   ├── SCR-OV01 (visitors-list)
│   │   ├── header
│   │   │   ├── title-counter (pulsing green dot + "47 online")
│   │   │   └── subtitle
│   │   ├── tabs-filters-bar
│   │   │   ├── tabs (Online/Offline/All)
│   │   │   ├── filter-dropdowns (Country/Page/Duration)
│   │   │   └── clear-link
│   │   ├── visitors-grid (3-col)
│   │   │   └── visitor-card × N
│   │   └── empty-state
│   ├── SCR-OV02 (visitor-profile-panel, 800px right slide)
│   │   ├── header (close button)
│   │   ├── visitor-info-card
│   │   │   ├── avatar-80px + name + location + online-badge
│   │   │   └── session-timer
│   │   ├── tabs-navigation (Activity/Device/History)
│   │   └── tab-content
│   │       ├── activity-tab
│   │       │   ├── current-page-card
│   │       │   └── behavior-insights
│   │       ├── device-tab (browser/os/network info)
│   │       └── history-tab (page-view timeline)
│   └── SCR-OV03 (geographic-map-view)
│       ├── world-map-canvas
│       │   └── country-markers (with visitor counts)
│       └── countries-list-sidebar
├── modals/
│   └── proactive-chat-modal
│       ├── modal-header
│       ├── visitor-preview-card
│       ├── message-textarea (with char counter)
│       └── modal-footer (cancel + send)
├── components/
│   ├── visitor-card (360×200px)
│   │   ├── status-row (online indicator + location + timer)
│   │   ├── visitor-info (avatar + name + email + device icon)
│   │   ├── current-page-display (title + URL + page views)
│   │   ├── history-expandable (collapsible timeline)
│   │   └── action-buttons (Xabar yuborish + Ko'rish)
│   ├── online-indicator-badge
│   │   └── pulsing-green-dot + "Online" text
│   ├── session-timer-display
│   │   └── real-time ticker "5m 32s onlayn" (updates every 1s)
│   ├── page-view-timeline-item
│   │   ├── page-title
│   │   ├── duration
│   │   └── timestamp
│   ├── geographic-map-marker
│   │   ├── dot-size-by-count
│   │   └── hover-tooltip (country + count)
│   └── empty-state-no-visitors
│       ├── illustration (people-slash icon)
│       └── tip-card (widget check)
```

**Component Variants:**
- `visitor-card` states: default / hover / contacted (orange badge) / selected
- `online-indicator-badge`: green (online) / gray (offline)
- `page-view-timeline-item`: current (bold) / past (regular)
- `session-timer-display`: updates every 1s via requestAnimationFrame

---

## 14. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **Visitor card hover** | elevation shadow-sm → shadow-lg, scale 1 → 1.02 | 200ms ease |
| **Visitor card appear (new)** | slide-in from top translateY(-20px) → 0, opacity 0 → 1 | 300ms ease-out |
| **Visitor card disappear (offline)** | fade-out opacity 1 → 0, scale 1 → 0.95 | 500ms ease-in |
| **Online counter update** | number change scale 1 → 1.2 → 1 (pulse) | 300ms ease |
| **Green dot pulse** | scale 1 → 1.3 → 1, opacity 1 → 0.5 → 1 | 2s infinite |
| **Session timer tick** | number change (no animation, smooth) | 1s interval |
| **Current page update** | fade-out 100ms → fade-in 200ms | 300ms total |
| **Filter dropdown open** | slide-down 10px, opacity 0 → 1 | 200ms ease-out |
| **Tab change** | underline slide left/right width transition | 250ms ease |
| **History expand/collapse** | max-height 0 ↔ auto, rotate arrow 0° ↔ 180° | 300ms ease |
| **Profile panel slide-in** | translateX(100%) → 0 from right | 300ms ease-out |
| **Profile panel slide-out** | translateX(0) → 100% to right | 300ms ease-in |
| **Map marker hover** | scale 1 → 1.5, tooltip fade-in | 150ms ease |
| **Map marker click** | ripple effect expand from center | 600ms |
| **"Xabar yuborish" button hover** | bg primary → primary-700, scale 1 → 1.05 | 150ms ease |
| **Proactive modal open** | backdrop fade 0 → 50%, modal scale 0.95 → 1 | 200ms ease-out |
| **Send message success** | modal close + toast slide-in from top | 300ms |
| **Contacted badge appear** | slide-in from right scale 0 → 1 | 200ms ease-out |
| **Empty state illustration** | scale 0.8 → 1, opacity 0 → 1 | 400ms ease-out |

---

## 15. ACCESSIBILITY

### Keyboard Navigation

**Visitors List (SCR-OV01):**
- **Tab:** Navigate through tabs → filters → visitor cards → action buttons
- **Enter/Space:** Activate buttons, open dropdowns, select visitor card
- **Arrow keys (↑↓):** Navigate between visitor cards (focus move)
- **Arrow keys (←→) in tabs:** Switch between Online/Offline/All tabs
- **Escape:** Close dropdowns, deselect card
- **Ctrl/Cmd + F:** Focus search/filter (keyboard shortcut)

**Visitor Profile Panel (SCR-OV02):**
- **Tab:** Navigate through close button → tabs → tab content
- **Arrow keys (←→):** Navigate between Activity/Device/History tabs
- **Escape:** Close panel
- **Home/End:** Jump to first/last tab

**Proactive Chat Modal:**
- **Tab:** Navigate textarea → cancel → send
- **Escape:** Close modal
- **Ctrl/Cmd + Enter:** Send message (shortcut)
- Focus trap: Tab cycles within modal

### ARIA Labels and Roles

**Visitors List:**
- Grid: `role="grid"`, `aria-label="Online visitors list"`
- Live counter: `aria-live="polite"`, ` aria-atomic="true"`, announces "47 visitors online"
- Tabs: `role="tablist"`, tab buttons `role="tab"`, `aria-selected`
- Filter dropdowns: `role="listbox"`, `aria-expanded`, `aria-label="Filter by country"`
- Visitor card: `role="button"`, `aria-label="View details for {name} from {location}, viewing {page}, online for {duration}"`, `tabindex="0"`
- Online indicator: `role="status"`, `aria-label="Visitor is online"`

**Visitor Profile Panel:**
- Panel: `role="complementary"`, `aria-label="Visitor profile for {name}"`
- Close button: `aria-label="Close visitor profile"`
- Tabs: `role="tablist"`, `aria-selected`, tab panels `role="tabpanel"`
- Session timer: `role="timer"`, `aria-live="off"` (too frequent for announcements)

**Proactive Chat Modal:**
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`
- Textarea: `aria-label="Message text"`, `aria-required="true"`, `aria-describedby="char-counter"`
- Character counter: `id="char-counter"`, `aria-live="polite"`
- Send button: `aria-label="Send proactive message to visitor"`, `aria-disabled` when empty

### Screen Reader Announcements

**Visitors List:**
- Page load: "Online Visitors page loaded. 47 visitors currently online."
- New visitor: "New visitor from Tashkent, Uzbekistan, viewing features page."
- Visitor offline: "Visitor from Tashkent went offline. 46 visitors remaining."
- Filter applied: "Filter applied: Showing visitors from Uzbekistan only. 32 visitors."
- Tab change: "Showing all visitors."

**Visitor Profile:**
- Panel open: "Visitor profile opened for {name} from {location}."
- Tab change: "Showing device information tab."
- Page change: "{Name} navigated to pricing page."

**Proactive Chat:**
- Modal open: "Send proactive message dialog opened."
- Send success: "Message sent successfully. New conversation created in Inbox."
- Send error: "Failed to send message. Please try again."

### Color Contrast (WCAG AA)

- Visitor name #111827 on white: 11.7:1 (AAA)
- Location text #6B7280 on white: 5.3:1 (AA)
- Online indicator #10B981 text on #D1FAE5 bg: 4.9:1 (AA)
- Page URL #4F46E5 on #F9FAFB: 5.8:1 (AA)
- All interactive elements: 4.5:1+ contrast

### Focus Indicators

- All focusable elements: 2px solid #4F46E5 outline, 4px offset
- Visitor card focus: 3px border #4F46E5, shadow-lg
- No `outline: none` without accessible alternative

### Touch Targets

- Mobile buttons: min 44×44px
- Desktop buttons: min 40×40px
- Visitor cards: 200px height (sufficient)
- Filter dropdowns: 40px height

---

## 16. PERFORMANCE

### Loading Targets
- Initial page load: < 1s
- Visitor grid render (30 cards): < 400ms
- Filter application: < 150ms
- Profile panel load: < 350ms
- WebSocket update: < 50ms display
- Session timer update: < 16ms (60fps)
- Map render: < 800ms (with 50+ markers)

### Optimization
- **WebSocket:** Persistent connection, auto-reconnect exponential backoff
- **Virtual scrolling:** If > 50 visitor cards
- **Real-time throttle:** Max 10 updates/sec (prevent flooding)
- **Session timer:** requestAnimationFrame for smooth ticking
- **Map:** Canvas rendering for performance, cluster markers if > 100
- **Lazy load:** Avatar images, device icons
- **Pagination:** Load first 30, infinite scroll for more

---

## 17. SECURITY & PRIVACY

### Data Protection
- **IP masking:** Last octet hidden (95.142.XX.XX)
- **GDPR compliance:** Visitor data retention 90 days, delete after
- **Consent:** Widget shows privacy notice, opt-out available
- **No PII:** Don't capture passwords, credit cards, sensitive forms

### Access Control
- All roles view visitors
- Only Admin/Manager export data
- Soft-delete sessions after 90 days
- Audit log proactive messages

### Rate Limiting
- Proactive messages: Max 5 per visitor per day
- API: 120 req/min per workspace
- WebSocket: Max 100 concurrent connections

---

## 18. USER FLOWS

### Flow 1: Monitor Visitor & Send Proactive Message
1. Operator navigates to Online Visitors (SCR-OV01)
2. Sees 47 visitors online, grid view
3. Notices visitor on /pricing for 5+ minutes
4. Clicks card → Detail panel (SCR-OV02) opens
5. Views Activity tab: Current page /pricing, 3 clicks, 65% scroll
6. Sees behavior insight: "High intent - pricing page 5min"
7. Closes panel, clicks "Xabar yuborish" on card
8. Proactive Chat Modal opens
9. Types: "Salom! Pricing haqida yordam kerakmi?"
10. Clicks "Yuborish"
11. Success toast: "Xabar yuborildi!"
12. Card updates: "Contacted" badge orange appears
13. Visitor receives message in widget
14. Visitor replies →  New conversation in Inbox

### Flow 2: Track Visitor Journey Real-time
1. Operator on Online Visitors page
2. New visitor card slides in: "Anonymous #12847 from Tashkent"
3. Current page: "/home", 0m 15s timer ticking
4. After 30s: Card updates → "/features" (WebSocket)
5. After 2m: Card updates → "/pricing"
6. Operator clicks card → Profile panel opens
7. Switches to History tab
8. Sees timeline: Home (30s) → Features (1m 30s) → Pricing (current)
9. Switches to Device tab: Chrome 120, Windows 11, Desktop
10. Closes panel
11. After 5m: Visitor goes offline, card fades out
12. Counter updates: 47 → 46

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 445 → 1800+  
**Holat:** ✅ COMPLETE

