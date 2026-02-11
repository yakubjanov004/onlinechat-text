# CHATFLOW — Developer & API Management Module

**Module ID:** M-15  
**Ekran ID:** `SCR-DEV01`, `SCR-DEV02`, `SCR-DEV03`  
**Fayl nomi:** `screen-developer-api.fig`, `screen-developer-webhooks.fig`, `screen-developer-integrations.fig`  
**Desktop:** 1440×900px (minimal height), Responsive scaling

## Umumiy konsepsiya
Developer moduli texnik foydalanuvchilar uchun API boshqaruvi, webhook'lar, integratsiyalar va developer tools'ni taqdim etadi. API keys yaratish, regenerate qilish, webhook'larni sozlash, so'rovlar loglarini ko'rish.

**Maqsad:** Dasturchilar CHATFLOW API'ni o'z ilovalariga integratsiya qilishda ishlatish uchun boshqaruv interfeysi.

**Role Access:** Admin (full access), Manager (read-only)

**Accessibility:** WCAG 2.1 AA, keyboard navigation, code blocks screen reader friendly.

---

## SCREEN 1: API KEYS MANAGEMENT (SCR-DEV01)

### Layout

**Container:** 1048px max-width, centered, padding 32px  
**Header:** 80px height, sticky top  
**Content:** Scrollable, min-height 600px

---

### Page Header

**Title:** "Developer API" — 28px Semibold #111827  
**Subtitle:** "API kalitlari, webhook'lar va integratsiyalarni boshqaring" — 16px Regular #6B7280  
**Actions:**
- Tab navigation: "API Keys" (active), "Webhooks", "Integrations", "Logs"
- Tab style: Height 48px, padding 0 20px, active bg #EEF2FF border-bottom 2px #4F46E5, inactive hover #F9FAFB

---

### API Keys Tab Content

#### Section 1: Quick Start Guide Card

**Position:** Top, 100% width, 160px height  
**Background:** Gradient #EEF2FF to #E0E7FF, border-radius 12px, padding 24px  
**Icon:** Icon/Code 48px #4F46E5, left  
**Title:** "API bilan ishlashni boshlang" — 18px Semibold #111827  
**Description:** "API key yaratib, CHATFLOW'ni o'z ilovangizga integratsiya qiling. To'liq hujjat va misollar bilan." — 14px Regular #6B7280  
**CTA Button:** 
- "API Hujjatini ko'rish →" — 140px × 40px, border 1px #4F46E5, text #4F46E5, hover bg #F5F3FF
- Click → Opens external link `https://docs.chatflow.uz/api` in new tab

**Collapse Toggle:** 
- Icon/ChevronUp 20px top-right, click → collapses card to 60px height (title only), saves state in localStorage

---

#### Section 2: Current Plan Limits Card

**Position:** Below Quick Start, 100% width, 100px height  
**Background:** White, border 1px #E5E7EB, border-radius 12px, padding 20px  
**Layout:** Horizontal flex, 3 columns

**Column 1: API Requests**
- Icon: Icon/Activity 24px #F59E0B
- Label: "API so'rovlar (bu oy)" — 13px Medium #6B7280
- Value: "8,247 / 50,000" — 20px Semibold #111827
- Progress bar: 164px width, 6px height, bg #F3F4F6, fill #F59E0B 16.5%
- Warning (if >80%): Badge "80% to'lgan" red #DC2626

**Column 2: Webhook Endpoints**
- Icon: Icon/Webhook 24px #8B5CF6
- Label: "Webhook endpoints" — 13px Medium #6B7280
- Value: "3 / 10" — 20px Semibold #111827
- Subtext: "7 ta qo'shishingiz mumkin" — 12px Regular #9CA3AF

**Column 3: Rate Limit**
- Icon: Icon/Zap 24px #10B981
- Label: "Rate limit" — 13px Medium #6B7280
- Value: "100 requests/min" — 18px Semibold #111827
- Subtext: "Plan: Pro" — 12px Regular #9CA3AF with tooltip "Enterprise rejada 500 req/min"

**Link:** "Tarif rejangizni yangilash" — 14px Medium #4F46E5, right-aligned, underline on hover

---

#### Section 3: API Keys List

**Header Bar:** 56px height, flex justify-between
- Left: "API Keys" — 20px Semibold #111827, count badge "(2)" gray
- Right: "Yangi key yaratish" button — 160px × 44px, primary #4F46E5, Icon/Plus 18px white

**Empty State (if no keys):**
- Icon: Icon/Key 64px #D1D5DB, center
- Title: "API key mavjud emas" — 18px Semibold #111827
- Description: "Birinchi API key yaratib, integratsiyani boshlang" — 14px Regular #6B7280
- Button: "Birinchi key yaratish" — 160px × 48px, primary

**Keys Table (if keys exist):**
- Table width: 100%, border 1px #E5E7EB, border-radius 12px
- Row height: 72px, padding 16px, border-bottom 1px #F3F4F6 (except last)
- Hover: bg #F9FAFB

**Table Columns:** 5 ta

**Column 1: Name & Key (60% width)**
- **Name:** 15px Semibold #111827, e.g. "Production API Key"
- **Key:** Monospace 'Fira Code' 13px #6B7280, masked format:
  - Display: `chatflow_live_pk_abc123••••••••••••••xyz789` (first 20 chars + 14 dots + last 6 chars)
  - Copy icon: Icon/Copy 18px #9CA3AF right of key, click → copies full key to clipboard
  - Tooltip: "Copy full key" on hover
- **Created:** 12px Regular #9CA3AF, "Yaratilgan: 15 yanvar 2026, 14:30"

**Column 2: Environment (15% width)**
- Badge: 80px × 28px, border-radius 6px
  - Production: bg #ECFDF5, text #065F46, "Production"
  - Development: bg #FEF3C7, text #92400E, "Development"
  - Test: bg #EEF2FF, text #3730A3, "Test"

**Column 3: Last Used (10% width)**
- Text: 13px Regular #6B7280
  - Recent: "2 daqiqa oldin" (green dot 6px #10B981)
  - Old: "15 kun oldin" (gray dot 6px #9CA3AF)
  - Never: "Hech qachon" (no dot)

**Column 4: Status (10% width)**
- Badge: 70px × 28px
  - Active: bg #ECFDF5, text #065F46, dot 6px #10B981, "Active"
  - Revoked: bg #FEE2E2, text #991B1B, dot 6px #DC2626, "Revoked"

**Column 5: Actions (5% width)**
- Dropdown button: Icon/DotsVertical 20px #6B7280
- Menu: 200px width, white bg, shadow-lg, border-radius 8px, padding 8px
  - "Regenerate" — Icon/RefreshCw 16px #F59E0B, text #F59E0B 14px
  - "Ko'proq ma'lumot" — Icon/Info 16px #6B7280
  - Divider 1px #E5E7EB
  - "Revoke (o'chirish)" — Icon/Trash 16px #DC2626, text #DC2626 14px

**Row Example:**
```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Production API Key                         Production   2 min ago   ● Active │
│ chatflow_live_pk_abc123••••••••••••••xyz  [Copy]                        [⋮] │
│ Yaratilgan: 15 yanvar 2026, 14:30                                            │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### Modal: Create API Key (MODAL-DEV01)

**Trigger:** "Yangi key yaratish" button click  
**Size:** 560px width, auto height  
**Background:** White, border-radius 16px, shadow-2xl  

**Header:** 64px padding 24px
- Title: "Yangi API key yaratish" — 20px Semibold #111827
- Close: Icon/X 24px #9CA3AF, top-right

**Content:** padding 24px

**Form Fields:** 4 ta

**1. Key Name***
- Label: "Key nomi" — 14px Medium #374151, red asterisk
- Input: 100% width, 44px height, placeholder "Production API Key"
- Helper: "Keyni identifikatsiya qilish uchun tushunarli nom" — 12px Regular #9CA3AF

**2. Environment***
- Label: "Muhit" — 14px Medium #374151
- Radio buttons: 3 ta, horizontal, gap 12px
  - Production: Icon/Server 20px + "Production" — Selected by default
  - Development: Icon/Code 20px + "Development"
  - Test: Icon/Flask 20px + "Test"
- Each option: 160px × 56px, border 1px #E5E7EB, border-radius 8px, padding 12px
- Selected: border 2px #4F46E5, bg #EEF2FF

**3. Permissions (optional)**
- Label: "Ruxsatlar (ixtiyoriy)" — 14px Medium #374151
- Checkboxes: 6 ta, 2-column grid, gap 12px
  - ☑ Read conversations
  - ☑ Write conversations
  - ☑ Read contacts
  - ☐ Write contacts
  - ☐ Read analytics
  - ☐ Manage team
- Default: First 2 checked (Read/Write conversations)
- Helper: "Belgilanmasa, barcha ruxsatlar beriladi" — 12px Regular #9CA3AF

**4. Expiration (optional)**
- Label: "Amal qilish muddati (ixtiyoriy)" — 14px Medium #374151
- Dropdown: 180px width, 44px height
  - Options: "Muddatsiz (tavsiya etilmaydi)", "30 kun", "90 kun", "1 yil", "Custom date"
  - Default: "90 kun"
- Helper: "Xavfsizlik uchun muddatli key tavsiya etiladi" — 12px Regular #9CA3AF

**Footer:** 56px padding 24px, border-top 1px #E5E7EB
- "Bekor qilish" — 100px × 40px, border 1px #D1D5DB
- "Key yaratish" — 140px × 40px, primary #4F46E5, Icon/Key 18px
- Gap: 12px

---

### Modal: API Key Created Success (MODAL-DEV02)

**Auto-shows after key creation, replaces create modal**  
**Size:** 600px width, auto height  

**Header:** 
- Icon: Icon/CheckCircle 48px #10B981, center
- Title: "API key muvaffaqiyatli yaratildi!" — 24px Semibold #10B981, center

**Warning Alert:** 
- Background: #FEF3C7, border-left 4px #F59E0B, padding 16px, border-radius 8px
- Icon: Icon/AlertTriangle 20px #F59E0B
- Text: "Diqqat! Bu keyni faqat bir marta ko'rasiz. Keyinroq ko'rishning imkoni yo'q. Xavfsiz joyda saqlang." — 14px Medium #92400E

**Key Display Card:**
- Background: #1E1E1E, border-radius 12px, padding 24px, margin-top 20px
- Label: "Sizning API key:" — 13px Medium #9CA3AF, above
- Key: Monospace 'Fira Code' 14px #E5E7EB, word-break all
  ```
  chatflow_live_pk_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z
  ```
- Copy button: 120px × 40px, bg rgba(255,255,255,0.1), text white, Icon/Copy 18px, top-right absolute
  - Click states: "Nusxalash" → "Nusxalandi ✓" (2s) → revert

**Usage Example Card:**
- Title: "Ishlatish misoli:" — 14px Medium #111827, margin-top 20px
- Code block: JavaScript example
  ```javascript
  // Node.js misoli
  const chatflow = require('chatflow-sdk');
  
  const client = new chatflow.Client({
    apiKey: 'chatflow_live_pk_...'
  });
  
  // Barcha suhbatlarni olish
  const conversations = await client.conversations.list();
  ```
- Syntax highlighting: keywords blue, strings green, comments gray
- Background: #F9FAFB, padding 16px, border-radius 8px

**Links:**
- "API Documentation →" — 14px Medium #4F46E5, underline
- "SDK kutubxonalari →" — 14px Medium #4F46E5, underline

**Footer:**
- "Yopish" button — 120px × 44px, primary #4F46E5, center

---

### Modal: Regenerate API Key (MODAL-DEV03)

**Trigger:** "Regenerate" menu click  
**Size:** 480px width, auto height  

**Header:**
- Icon: Icon/AlertTriangle 48px #F59E0B, center
- Title: "API key'ni regenerate qilish" — 20px Semibold #111827, center

**Warning:**
- Background: #FEE2E2, border-left 4px #DC2626, padding 16px, border-radius 8px
- Text: "Eski key darhol bekor qilinadi va yangi key yaratiladi. Barcha ilovalar yangi key bilan yangilanishi kerak." — 14px Regular #991B1B

**Key Info:**
- Name: "Production API Key" — 16px Medium #111827
- Current key (masked): `chatflow_live_pk_abc123••••••••••••••xyz` — 14px Mono #6B7280
- Last used: "2 daqiqa oldin" — 13px Regular #9CA3AF

**Confirmation Checkbox:**
- ☐ "Men ilovalarimni yangi key bilan yangilashim kerakligini tushunaman" — 14px Regular #374151
- Required to enable "Regenerate" button

**Footer:**
- "Bekor qilish" — 100px × 40px, border
- "Regenerate qilish" — 160px × 40px, bg #F59E0B (warning orange), disabled until checkbox checked
- Gap: 12px

---

### Modal: Revoke API Key (MODAL-DEV04)

**Trigger:** "Revoke (o'chirish)" menu click  
**Size:** 480px width, auto height  

**Header:**
- Icon: Icon/Trash 48px #DC2626, center
- Title: "API key'ni o'chirish" — 20px Semibold #111827, center

**Danger Alert:**
- Background: #FEE2E2, border-left 4px #DC2626, padding 16px
- Text: "Bu keydan foydalanadigan barcha ilovalar darhol ishlamay qoladi. Ushbu amalni bekor qilish mumkin emas." — 14px Medium #991B1B

**Key Info:**
- Name: "Development API Key" — 16px Medium #111827
- Key (masked): `chatflow_test_pk_abc123••••••••••••••xyz` — 14px Mono #6B7280
- Created: "30 kun oldin" — 13px Regular #9CA3AF
- Last used: "15 kun oldin" — 13px Regular #9CA3AF

**Confirmation Input:**
- Label: "Tasdiqlash uchun key nomini kiriting:" — 14px Medium #374151
- Input: 100% width, 44px height, placeholder "Development API Key"
- Validation: Must exactly match key name to enable delete button

**Footer:**
- "Bekor qilish" — 100px × 40px, border
- "O'chirish" — 120px × 40px, bg #DC2626 (danger red), disabled until name matches
- Gap: 12px

---

## SCREEN 2: WEBHOOKS MANAGEMENT (SCR-DEV02)

### Layout

**Same layout as API Keys screen, different tab active**

---

### Webhooks Tab Content

#### Section 1: What are Webhooks? Info Card

**Position:** Top, 100% width, 120px height  
**Background:** #F0FDF4 (light green), border-left 4px #10B981, padding 20px  
**Icon:** Icon/Webhook 32px #10B981, left  
**Title:** "Webhook'lar nima?" — 16px Semibold #065F46  
**Description:** "Webhook'lar CHATFLOW'da event yuz berganda avtomatik HTTP POST so'rovi yuboradi. Masalan: yangi chat kelganda, xabar jo'natilganda, CSAT qabul qilinganda." — 14px Regular #166534  
**Link:** "Webhook hujjatini o'qish →" — 14px Medium #10B981, underline  
**Collapse:** Icon/ChevronUp top-right

---

#### Section 2: Webhooks List

**Header Bar:** 56px height
- Left: "Webhook Endpoints" — 20px Semibold #111827, count "(3)"
- Right: "Yangi webhook qo'shish" — 180px × 44px, primary #4F46E5, Icon/Plus 18px

**Empty State:**
- Icon: Icon/Webhook 64px #D1D5DB
- Title: "Webhook endpoint mavjud emas" — 18px Semibold #111827
- Description: "Event'larni qabul qilish uchun webhook yarating" — 14px Regular #6B7280
- Button: "Birinchi webhook yaratish" — 180px × 48px, primary

**Webhooks Cards Grid:** 2-column grid, gap 20px

**Each Card:** 512px width, auto height, border 1px #E5E7EB, border-radius 12px, padding 20px, hover shadow-md

**Card Header:**
- Status badge: Left, 70px × 28px
  - Active: bg #ECFDF5, text #065F46, dot 6px #10B981, "Active"
  - Inactive: bg #F3F4F6, text #6B7280, "Inactive"
  - Error: bg #FEE2E2, text #991B1B, dot 6px #DC2626, "Error"
- Actions: Right, Icon/DotsHorizontal 20px #9CA3AF
  - Menu: Edit, Test, Logs, Disable/Enable, Delete

**Card Body:**

**1. URL:**
- Label: "Endpoint URL" — 12px Medium #6B7280
- URL: 14px Regular #111827, word-break, `https://example.com/webhooks/chatflow`
- Copy icon: Icon/Copy 16px #9CA3AF, inline, click → copy URL

**2. Events:**
- Label: "Event'lar" — 12px Medium #6B7280, margin-top 12px
- Badges: Horizontal wrap, gap 6px
  - Each badge: 28px height, padding 0 10px, bg #EEF2FF, text #3730A3, border-radius 6px
  - Examples: "conversation.created", "message.sent", "csat.submitted"
  - If >4 events: show first 4 + badge "+3 ta ko'proq"

**3. Stats Row:**
- 3 columns, margin-top 16px
  - **Success Rate:** Icon/CheckCircle 16px #10B981 + "98.5%" green — 13px Medium
  - **Last Delivery:** Icon/Clock 16px #6B7280 + "2 min ago" — 13px Regular #6B7280
  - **Total Calls:** Icon/Activity 16px #6B7280 + "1,247" — 13px Regular #6B7280

**4. Created Info:**
- Text: "Yaratilgan: 10 yanvar 2026 tomonidan Sardor Azimov" — 12px Regular #9CA3AF, margin-top 12px

**Card Footer:** Border-top 1px #F3F4F6, padding-top 12px, margin-top 12px
- Link: "Delivery logs →" — 13px Medium #4F46E5, underline

**Card Example:**
```
┌──────────────────────────────────────────────────────┐
│ ● Active                                         [⋮] │
│                                                      │
│ Endpoint URL                                         │
│ https://example.com/webhooks/chatflow       [Copy]  │
│                                                      │
│ Event'lar                                            │
│ [conversation.created] [message.sent] [csat] [+2]   │
│                                                      │
│ ✓ 98.5%      ⏰ 2 min ago      📊 1,247 calls        │
│                                                      │
│ Yaratilgan: 10 yanvar 2026 — Sardor Azimov          │
│ ──────────────────────────────────────────────────   │
│ Delivery logs →                                      │
└──────────────────────────────────────────────────────┘
```

---

### Modal: Create Webhook (MODAL-DEV05)

**Size:** 640px width, auto height  

**Header:**
- Title: "Yangi webhook yaratish" — 20px Semibold #111827
- Close: Icon/X 24px

**Content:** padding 24px

**Step Indicator:** 2 ta step
- Step 1: "Endpoint sozlash" — active
- Step 2: "Event'larni tanlash"
- UI: 2 dots, current #4F46E5, completed green checkmark

---

**STEP 1: Endpoint sozlash**

**1. Webhook URL***
- Label: "Endpoint URL" — 14px Medium #374151
- Input: 100% width, 44px height, placeholder "https://example.com/webhook"
- Validation: Must be valid HTTPS URL (HTTP not allowed for security)
- Error: "HTTPS URL kiriting. HTTP qabul qilinmaydi." — red text below

**2. Webhook Name (optional)**
- Label: "Nom (ixtiyoriy)" — 14px Medium #374151
- Input: 100% width, 44px height, placeholder "Production Webhook"
- Helper: "Identifikatsiya uchun" — 12px Regular #9CA3AF

**3. Secret Key (optional)**
- Label: "Secret key (ixtiyoriy)" — 14px Medium #374151
- Input: 100% width, 44px height, type password, placeholder "••••••••••••••••"
- Helper: "Webhook imzosini tekshirish uchun. Tavsiya etiladi." — 12px Regular #9CA3AF
- Link: "Secret key nima?" — 13px Medium #4F46E5, inline, opens tooltip
  - Tooltip: "CHATFLOW har bir webhook POST so'roviga X-Chatflow-Signature header qo'shadi. Secret key bilan HMAC SHA256 imzoni tekshirishingiz mumkin."

**Generate Button:** "Tasodifiy key yaratish" — 160px × 36px, border 1px #4F46E5, text #4F46E5
- Click → generates random 32-char key, fills input

**Footer:**
- "Bekor qilish" — 100px × 40px
- "Keyingisi: Event'lar →" — 180px × 40px, primary, disabled until URL valid

---

**STEP 2: Event'larni tanlash**

**Event Categories:** 5 ta category, accordion style

**1. Conversations (conversation.*)**
- Checkbox "Barchasini tanlash" — checks all 4 below
- ☑ conversation.created — Yangi chat yaratilganda
- ☑ conversation.assigned — Chat operatorga tayinlanganda
- ☐ conversation.resolved — Chat hal qilinganda
- ☐ conversation.deleted — Chat o'chirilganda

**2. Messages (message.*)**
- ☑ message.sent — Xabar yuborilganda
- ☐ message.delivered — Xabar yetkazilganda
- ☐ message.read — Xabar o'qilganda

**3. CSAT (csat.*)**
- ☑ csat.submitted — CSAT baholash yuborilganda
- ☐ csat.updated — CSAT baholash yangilanganda

**4. Team (team.*)**
- ☐ agent.created — Yangi operator qo'shilganda
- ☐ agent.status_changed — Operator status o'zgarganda

**5. Billing (billing.*)**
- ☐ subscription.upgraded — Tarifrejasi yangilanganda
- ☐ payment.succeeded — To'lov muvaffaqiyatli bo'lganda
- ☐ payment.failed — To'lov xato bo'lganda

**Footer:**
- "← Orqaga" — 100px × 40px, border
- "Webhook yaratish" — 160px × 40px, primary, disabled until at least 1 event selected

---

### Modal: Test Webhook (MODAL-DEV06)

**Trigger:** "Test" action from card menu  
**Size:** 560px width, auto height  

**Header:**
- Title: "Webhook'ni test qilish" — 20px Semibold #111827
- Close: Icon/X 24px

**Content:**

**Endpoint Info:**
- URL: `https://example.com/webhooks/chatflow` — 14px Mono #6B7280
- Status: Badge "Active" green

**Test Configuration:**

**1. Event Type Selector**
- Label: "Test event turi" — 14px Medium #374151
- Dropdown: 200px width, 44px height
  - Options populated from webhook's selected events
  - Example: "conversation.created", "message.sent", etc.

**2. Sample Payload Preview**
- Label: "Test payload (JSON)" — 14px Medium #374151
- Code editor: 100% width, 300px height, readonly, JSON syntax highlighting
- Example payload:
  ```json
  {
    "event": "conversation.created",
    "timestamp": "2026-02-11T14:30:00Z",
    "data": {
      "conversation_id": "conv_123abc",
      "visitor": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "source": "website",
      "status": "unassigned"
    }
  }
  ```
- Edit button: "Tahrirlash" — 100px × 36px, allows editing payload for custom test

**3. Expected Response:**
- Label: "Kutilayotgan javob:" — 14px Medium #6B7280
- Text: "HTTP 200-299 status code" — 13px Regular #9CA3AF

**Footer:**
- "Bekor qilish" — 100px × 40px
- "Test yuborish" — 140px × 40px, primary #4F46E5, Icon/Send 18px
  - Click → sends POST request, shows loading spinner 2s

---

### Modal: Test Result Success (MODAL-DEV07)

**Auto-shows after test succeeds, replaces test modal**  
**Size:** 560px width, auto height  

**Header:**
- Icon: Icon/CheckCircle 48px #10B981, center
- Title: "Webhook test muvaffaqiyatli!" — 24px Semibold #10B981, center

**Response Details Card:**
- Background: #F9FAFB, border 1px #E5E7EB, border-radius 8px, padding 16px

**Row 1: Status Code**
- Label: "Status code" — 13px Medium #6B7280
- Value: "200 OK" — 16px Semibold #10B981

**Row 2: Response Time**
- Label: "Javob vaqti" — 13px Medium #6B7280
- Value: "247 ms" — 16px Semibold #111827

**Row 3: Response Headers**
- Label: "Headers" — 13px Medium #6B7280, collapsible
- Code block: Monospace
  ```
  content-type: application/json
  x-request-id: req_abc123
  ```

**Row 4: Response Body**
- Label: "Javob (body)" — 13px Medium #6B7280
- Code block: JSON formatted
  ```json
  {
    "success": true,
    "message": "Webhook received"
  }
  ```

**Footer:**
- "Yopish" — 120px × 44px, primary, center

---

### Modal: Test Result Failed (MODAL-DEV08)

**Shows if test fails (status code 400+, timeout, network error)**  
**Size:** 560px width, auto height  

**Header:**
- Icon: Icon/XCircle 48px #DC2626, center
- Title: "Webhook test xato" — 24px Semibold #DC2626, center

**Error Card:**
- Background: #FEE2E2, border-left 4px #DC2626, padding 16px

**Error Details:**
- **Status Code:** "500 Internal Server Error" — 16px Semibold #991B1B
- **Response Time:** "5,032 ms (timeout)" — 14px Regular #991B1B
- **Error Message:** "Connection timeout after 5 seconds" — 14px Regular #991B1B

**Response Body (if any):**
- Label: "Xato matni:" — 13px Medium #991B1B
- Code block:
  ```json
  {
    "error": "Internal server error",
    "code": 500
  }
  ```

**Troubleshooting Tips:**
- Title: "Muammoni hal qilish:" — 14px Medium #111827, margin-top 16px
- Checklist:
  - "✓ Endpoint URL to'g'riligini tekshiring"
  - "✓ Server ishlab turganini tasdiqlang"
  - "✓ Firewall webhook IP'larni bloklamaganini tekshiring"
  - "✓ HTTPS sertifikat amal qilishini tasdiqlang"

**Footer:**
- "Qaytadan urinish" — 140px × 40px, border 1px #DC2626, text #DC2626
- "Yopish" — 100px × 40px, primary

---

## SCREEN 3: WEBHOOK LOGS (SCR-DEV03)

### Layout

**Accessible via:** "Delivery logs →" link in webhook card OR "Logs" tab in Developer nav

---

### Page Header

**Title:** "Webhook Delivery Logs" — 24px Semibold #111827  
**Subtitle:** "Barcha webhook so'rovlari va javoblar tarixi" — 14px Regular #6B7280  

**Filters Bar:** 56px height, flex gap 12px

**Filter 1: Webhook Selector**
- Dropdown: 220px width, 44px height, Icon/Webhook 18px
- Label: "Barcha webhook'lar" — default
- Options: List of all webhook names + "Barchasini ko'rish"

**Filter 2: Event Type**
- Dropdown: 200px width, 44px height
- Options: "Barcha event'lar", "conversation.*", "message.*", "csat.*", etc.

**Filter 3: Status**
- Dropdown: 140px width, 44px height
- Options: "Barcha", "Success (2xx)", "Failed (4xx, 5xx)", "Timeout"

**Filter 4: Date Range**
- Date picker: 200px width, 44px height
- Presets: "Bugun", "Oxirgi 7 kun", "Oxirgi 30 kun", "Custom"

**Search:**
- Input: 240px width, 44px height, Icon/Search 18px, placeholder "Log qidirish..."

**Actions:**
- "Export CSV" button: 120px × 40px, border 1px #D1D5DB, Icon/Download 16px
- "Tozalash" button: 100px × 40px (clears old logs, confirmation required)

---

### Logs Table

**Table:** 100% width, border 1px #E5E7EB, border-radius 12px  
**Row height:** 64px, padding 12px, hover bg #F9FAFB  
**Sticky header:** bg #F9FAFB, 48px height

**Columns:** 7 ta

**Column 1: Timestamp (15%)**
- Format: "11 Feb 2026, 14:35:42" — 13px Regular #111827
- Relative: "2 daqiqa oldin" — 12px Regular #9CA3AF below

**Column 2: Webhook Name (20%)**
- Text: "Production Webhook" — 14px Medium #111827
- URL: `https://example.com/...` — 12px Regular #6B7280, truncated with tooltip on hover

**Column 3: Event (15%)**
- Badge: 28px height, bg #EEF2FF, text #3730A3, e.g. "conversation.created"

**Column 4: Status (10%)**
- Badge: 70px × 28px
  - Success: bg #ECFDF5, text #065F46, "200 OK"
  - Client Error: bg #FEF3C7, text #92400E, "400"
  - Server Error: bg #FEE2E2, text #991B1B, "500"
  - Timeout: bg #F3F4F6, text #6B7280, "Timeout"

**Column 5: Response Time (10%)**
- Text: "247 ms" — 13px Regular #111827
- Color-coded: <300ms green, 300-1000ms yellow, >1000ms red

**Column 6: Retry Status (10%)**
- Badge: If retried
  - "Retry 2/3" — 12px Regular #F59E0B, indicates 2nd attempt out of max 3
  - "Final success" — 12px Regular #10B981, succeeded after retry
  - No badge if first attempt succeeded

**Column 7: Actions (5%)**
- Button: "Ko'rish" — 80px × 32px, border 1px #D1D5DB, text #6B7280
- Click → Opens log detail drawer

---

### Log Detail Drawer

**Trigger:** "Ko'rish" button click in table  
**Size:** 480px width, 100% height, slides from right  
**Background:** White, shadow-2xl  

**Header:** 64px padding 20px, border-bottom 1px #E5E7EB
- Title: "Delivery Details" — 18px Semibold #111827
- Close: Icon/X 24px top-right

**Content:** Scrollable, padding 20px

**Section 1: Overview**

**Status Badge:** Large, 120px × 40px, center
- Success: bg #ECFDF5, text #065F46, Icon/CheckCircle 24px, "200 OK"
- Failed: bg #FEE2E2, text #991B1B, Icon/XCircle 24px, "500 Error"

**Details Grid:** 2-column, gap 16px, margin-top 20px
- **Webhook:** "Production Webhook"
- **Event:** "conversation.created"
- **Timestamp:** "11 Feb 2026, 14:35:42"
- **Response Time:** "247 ms"
- **Attempt:** "1 / 1" (or "2 / 3" if retried)
- **Request ID:** `req_1a2b3c` — Monospace, copy icon

---

**Section 2: Request**

**Title:** "Request ↗" — 16px Semibold #111827, margin-top 24px

**Subsection: Request URL**
- Label: "URL" — 13px Medium #6B7280
- Value: `https://example.com/webhooks/chatflow` — 13px Mono #111827, copy icon

**Subsection: Request Headers**
- Label: "Headers" — 13px Medium #6B7280
- Code block: 100% width, bg #F9FAFB, padding 12px, border-radius 8px, Monospace 12px
  ```
  POST /webhooks/chatflow HTTP/1.1
  Host: example.com
  Content-Type: application/json
  X-Chatflow-Signature: sha256=abc123...
  User-Agent: Chatflow-Webhooks/1.0
  ```

**Subsection: Request Body (Payload)**
- Label: "Body (JSON)" — 13px Medium #6B7280
- Code editor: 100% width, 300px height, JSON syntax highlighting, readonly
- Copy button: Top-right, copies entire payload
- Example:
  ```json
  {
    "event": "conversation.created",
    "timestamp": "2026-02-11T14:35:42Z",
    "workspace_id": "ws_abc123",
    "data": {
      "conversation_id": "conv_456def",
      "visitor": {
        "id": "vis_789ghi",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "source": "website",
      "status": "unassigned",
      "created_at": "2026-02-11T14:35:40Z"
    }
  }
  ```

---

**Section 3: Response**

**Title:** "Response ↙" — 16px Semibold #111827, margin-top 24px

**Subsection: Response Status**
- Label: "Status Code" — 13px Medium #6B7280
- Value: "200 OK" — 18px Semibold #10B981 (or #DC2626 if error)

**Subsection: Response Headers**
- Label: "Headers" — 13px Medium #6B7280
- Code block: Monospace
  ```
  HTTP/1.1 200 OK
  Content-Type: application/json
  X-Request-ID: req_abc123
  Content-Length: 45
  ```

**Subsection: Response Body**
- Label: "Body" — 13px Medium #6B7280
- Code block: JSON formatted
  ```json
  {
    "success": true,
    "message": "Webhook received and processed"
  }
  ```

---

**Section 4: Retry History (if retried)**

**Title:** "Retry History" — 16px Semibold #111827, margin-top 24px

**Timeline:** Vertical, 3 attempts max

**Each Attempt:**
- Icon: Circle with number (1, 2, 3), connected with vertical line
- Timestamp: "14:35:42" — 13px Regular #6B7280
- Status: Badge "Failed: 500" or "Success: 200"
- Delay: "Retry after 2 seconds" — 12px Regular #9CA3AF

**Example:**
```
● 1  14:35:42  [Failed: 500]
│   Retry after 2 seconds
│
● 2  14:35:44  [Failed: 500]
│   Retry after 4 seconds
│
● 3  14:35:48  [Success: 200]
    Final attempt successful
```

---

**Footer:** 56px padding 20px, border-top 1px #E5E7EB
- "Qayta yuborish" button: 140px × 40px, border 1px #4F46E5, text #4F46E5
  - Click → Resends same payload to webhook, useful for debugging
- "Yopish" button: 100px × 40px, primary

---

## Empty / Loading / Error States

### Empty States

**1. No API Keys**
- Icon: Icon/Key 64px #D1D5DB, center
- Title: "API key mavjud emas" — 18px Semibold #111827
- Description: "Birinchi API key yaratib, integratsiyani boshlang" — 14px Regular #6B7280
- Button: "Birinchi key yaratish" — 160px × 48px, primary

**2. No Webhooks**
- Icon: Icon/Webhook 64px #D1D5DB, center
- Title: "Webhook endpoint mavjud emas" — 18px Semibold #111827
- Description: "Event'larni qabul qilish uchun webhook yarating" — 14px Regular #6B7280
- Button: "Birinchi webhook yaratish" — 180px × 48px, primary

**3. No Webhook Logs**
- Icon: Icon/FileText 64px #D1D5DB, center
- Title: "Hech qanday log mavjud emas" — 18px Semibold #111827
- Description: "Webhook so'rovlari tarixi bu yerda ko'rinadi" — 14px Regular #6B7280

---

### Loading States

**API Keys Loading:**
- Skeleton: 3 rows, each 100% × 72px, shimmer animation
- Structure: Circular avatar + 2 text lines + badge + button

**Webhooks Loading:**
- Skeleton: 2-column grid, each card 512px × 200px, shimmer

**Logs Loading:**
- Skeleton: Table rows, 5 rows × 64px height, shimmer

---

### Error States

**1. API Keys Load Error**
- Icon: Icon/AlertTriangle 48px #F59E0B, center
- Title: "API keys yuklanmadi" — 18px Semibold #111827
- Description: "Ma'lumotlarni yuklashda xatolik yuz berdi" — 14px Regular #6B7280
- Button: "Qayta urinish" — 140px × 40px, border 1px #F59E0B, text #F59E0B

**2. Webhook Test Timeout**
- Icon: Icon/Clock 48px #F59E0B
- Title: "So'rov vaqti o'tdi" — 18px Semibold #F59E0B
- Description: "Endpoint 5 soniyada javob bermadi. Server ishlab turganini tekshiring." — 14px Regular #92400E

**3. Rate Limit Exceeded**
- Banner: Top of page, bg #FEE2E2, border-left 4px #DC2626, padding 16px
- Icon: Icon/AlertOctagon 20px #DC2626
- Text: "API rate limit oshib ketdi (100 req/min). 1 daqiqadan so'ng qayta urinib ko'ring yoki rejani yangilang." — 14px Medium #991B1B
- Link: "Rejani yangilash →" — 14px Medium #DC2626, underline

---

## ASCII Wireframes

### 1. API Keys List Screen
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Developer API                       [API Keys][Webhooks][Integrations] │
│ API kalitlari, webhook'lar va integratsiyalarni boshqaring             │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ 💻 API bilan ishlashni boshlang           [API Hujjatini ko'rish]│   │
│ │ API key yaratib, CHATFLOW'ni o'z ilovangizga integratsiya qiling │   │
│ └──────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ 📊 8,247/50,000   🔗 3/10 endpoints   ⚡ 100 req/min (Pro)      │   │
│ │ [████████░░░░░░░░] 16.5%                                         │   │
│ └──────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│ API Keys (2)                                  [Yangi key yaratish]     │
│ ┌──────────────────────────────────────────────────────────────────┐   │
│ │ Production API Key                    [Production] 2 min  ●Active│   │
│ │ chatflow_live_pk_abc123••••••••••xyz [Copy]                  [⋮]│   │
│ │ Yaratilgan: 15 yanvar 2026, 14:30                               │   │
│ ├──────────────────────────────────────────────────────────────────┤   │
│ │ Development API Key                  [Development] 15 kun  ●Active│   │
│ │ chatflow_test_pk_def456••••••••••123 [Copy]                  [⋮]│   │
│ │ Yaratilgan: 1 yanvar 2026, 10:20                                │   │
│ └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2. Webhooks Grid
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Webhook Endpoints (3)                         [Yangi webhook qo'shish]  │
├─────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────┐  ┌──────────────────────────────┐     │
│ │ ● Active                 [⋮] │  │ ⚠ Error                  [⋮] │     │
│ │                              │  │                              │     │
│ │ Endpoint URL                 │  │ Endpoint URL                 │     │
│ │ https://example.com/webhook  │  │ https://app.com/chatflow     │     │
│ │ [Copy]                       │  │ [Copy]                       │     │
│ │                              │  │                              │     │
│ │ Event'lar                    │  │ Event'lar                    │     │
│ │ [conversation.created]       │  │ [message.sent] [csat] [+1]   │     │
│ │ [message.sent] [+2]          │  │                              │     │
│ │                              │  │                              │     │
│ │ ✓ 98.5%  ⏰ 2 min  📊 1,247  │  │ ✗ 45.2%  ⏰ 1 hour  📊 523   │     │
│ │                              │  │                              │     │
│ │ Yaratilgan: 10 yan — Sardor  │  │ Yaratilgan: 5 yan — Aziza    │     │
│ │ Delivery logs →              │  │ Delivery logs →              │     │
│ └──────────────────────────────┘  └──────────────────────────────┘     │
│                                                                         │
│ ┌──────────────────────────────┐                                       │
│ │ ○ Inactive               [⋮] │                                       │
│ │ Endpoint URL                 │                                       │
│ │ https://staging.com/hook     │                                       │
│ │ Event'lar: [conversation.*]  │                                       │
│ │ 0 calls                      │                                       │
│ └──────────────────────────────┘                                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3. Webhook Logs Table
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Webhook Delivery Logs                                                   │
│ Barcha webhook so'rovlari va javoblar tarixi                            │
├─────────────────────────────────────────────────────────────────────────┤
│ [All webhooks ▾] [All events ▾] [All ▾] [Last 7 days ▾] [Search...]    │
│                                                      [Export CSV] [Clear]│
├─────────────────────────────────────────────────────────────────────────┤
│ Timestamp          Webhook         Event          Status  Time  Retry   │
│ 11 Feb, 14:35:42   Production      conversation   200 OK  247ms  -     │
│ 2 min ago          example.com     .created                   [Ko'rish]│
│ ───────────────────────────────────────────────────────────────────────│
│ 11 Feb, 14:32:18   Production      message.sent   200 OK  183ms  -     │
│ 5 min ago          example.com                                [Ko'rish]│
│ ───────────────────────────────────────────────────────────────────────│
│ 11 Feb, 14:28:05   Staging         csat.submitted 500     2.1s  2/3    │
│ 9 min ago          staging.com                                [Ko'rish]│
│ ───────────────────────────────────────────────────────────────────────│
│ 11 Feb, 14:15:33   Production      conversation   200 OK  312ms  -     │
│ 22 min ago         example.com     .resolved                  [Ko'rish]│
│ ───────────────────────────────────────────────────────────────────────│
│ [<] Page 1 of 45 [>]                                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Micro-interactions (20 ta)

1. **API key copy button** — Click: icon changes Copy → Checkmark green "Nusxalandi" 2s → revert
2. **Key masked/unmask toggle** — Click eye icon: `abc123••••••xyz` → full key → mask back
3. **Regenerate confirmation checkbox** — Enable → "Regenerate" button animates from gray to orange
4. **Status badge pulse** — Active badges: green dot pulses scale 1-1.2 every 2s
5. **Card hover elevation** — Webhook cards: shadow-sm → shadow-md 200ms ease-out
6. **Dropdown menu slide** — Actions menu: slide-down 150ms + fade-in
7. **Modal backdrop blur** — Background blurs 8px when modal opens, 300ms transition
8. **Success animation** — API key created: checkmark scales in from 0 with bounce 400ms
9. **Progress bar fill** — API usage bar: animates from 0 to current % on page load, 800ms
10. **Webhook test loading** — "Test yuborish" button: text fades, spinner rotates, 2s
11. **Log detail drawer slide** — Drawer slides from right 300ms ease-out
12. **Event badge hover** — Event badges: scale 1.05 + slight lift shadow 150ms
13. **Copy code block** — Hover code block: copy button fades in top-right 200ms
14. **Table row expand** — Click log row: row height animates 64px → 200px (inline details)
15. **Filter badge count** — Applied filters: badge appears with scale-in animation "+2 filters"
16. **URL validation** — Webhook URL input: real-time validation, green checkmark if valid HTTPS
17. **Secret key generate** — Click "Tasodifiy key yaratish": text scrambles 500ms → settles
18. **Retry timeline animate** — Timeline dots: appear sequentially with 200ms stagger
19. **Error shake** — Failed webhook card: gentle shake animation 400ms on hover
20. **Tab switch underline** — Active tab: underline slides from previous to current tab 250ms

---

## Accessibility

**Keyboard Navigation:**
- Tab order: Page tabs → filters → action buttons → table/cards → modals
- Enter: Open dropdown, submit form, trigger action
- Escape: Close modal, close dropdown
- Arrow keys: Navigate table rows, dropdown options, tab navigation
- Space: Toggle checkbox, open dropdown
- Shortcuts:
  - `Ctrl/Cmd + K` — Focus search input
  - `N` — New API key / New webhook (context-aware)
  - `R` — Refresh logs
  - `E` — Export logs

**ARIA Labels:**
- `aria-label="Create new API key"`
- `aria-label="Copy API key to clipboard"`
- `aria-label="Webhook actions menu"`
- `aria-label="Webhook delivery logs table"`
- Table: `role="table"` with `aria-colcount`, `aria-rowcount`
- Modals: `role="dialog"`, `aria-labelledby="modal-title"`, `aria-modal="true"`
- Dropdowns: `role="listbox"`, `aria-expanded="true/false"`
- Code blocks: `role="textbox"`, `aria-readonly="true"`, `aria-label="API request payload"`

**Screen Reader Announcements:**
- "API key created successfully"
- "API key copied to clipboard"
- "Webhook test sent. Waiting for response."
- "Webhook test successful. Status 200 OK."
- "Webhook test failed. Status 500 error."
- "Filters applied. Showing 23 results."
- "Log detail drawer opened"

**Focus Management:**
- Modal opens: focus moves to first interactive element (input or button)
- Modal closes: focus returns to trigger button
- Dropdown opens: focus to first option
- Toast notification: focus trap not applied (allows background interaction)

**Color Contrast:**
- All text on white: WCAG AA compliant (4.5:1 minimum)
- Code blocks: #E5E7EB on #1E1E1E (12:1 ratio)
- Status badges: Contrast tested for all color combinations
- Error text: #991B1B on #FEE2E2 background (7:1 ratio)

**Touch Targets:**
- All buttons: 44×44px minimum
- Dropdowns: 44px height
- Table action buttons: 32×32px (acceptable for secondary actions)
- Copy icons: 24×24px tappable area (padding extends hitbox)

---

## Technical Requirements

### API Endpoints

**API Keys:**
- `GET /api/v1/developer/api-keys` — List all API keys
- `POST /api/v1/developer/api-keys` — Create new API key
  - Body: `{name, environment, permissions[], expiration}`
  - Returns: `{id, key, name, environment, created_at}` — key shown only once
- `POST /api/v1/developer/api-keys/:id/regenerate` — Regenerate API key
  - Returns new key, old key invalidated immediately
- `DELETE /api/v1/developer/api-keys/:id` — Revoke (delete) API key
- `GET /api/v1/developer/api-keys/:id/usage` — Get usage stats for key

**Webhooks:**
- `GET /api/v1/developer/webhooks` — List all webhooks
- `POST /api/v1/developer/webhooks` — Create new webhook
  - Body: `{url, name?, secret?, events[]}`
- `PUT /api/v1/developer/webhooks/:id` — Update webhook
- `DELETE /api/v1/developer/webhooks/:id` — Delete webhook
- `POST /api/v1/developer/webhooks/:id/test` — Send test payload
  - Body: `{event_type, payload?}`
  - Returns: `{status_code, response_time, response_body}`
- `GET /api/v1/developer/webhooks/:id/logs` — Get delivery logs for webhook
  - Query: `?page=1&limit=20&status=success|failed&from=date&to=date`
- `POST /api/v1/developer/webhooks/logs/:log_id/retry` — Retry failed delivery

**Logs:**
- `GET /api/v1/developer/logs` — Get all webhook delivery logs
  - Query params: `?webhook_id, event_type, status, date_from, date_to, page, limit`
- `GET /api/v1/developer/logs/:id` — Get single log detail
- `POST /api/v1/developer/logs/export` — Export logs as CSV
- `DELETE /api/v1/developer/logs` — Clear old logs (>90 days, requires confirmation)

### Webhook Delivery Logic

**Delivery Process:**
1. Event occurs in system (e.g., chat created)
2. Find all webhooks subscribed to that event
3. For each webhook, prepare payload:
   ```json
   {
     "event": "conversation.created",
     "timestamp": "ISO8601",
     "workspace_id": "ws_abc",
     "data": { ... event-specific data ... }
   }
   ```
4. Add signature header: `X-Chatflow-Signature: sha256=HMAC_SHA256(payload, secret)`
5. Send POST request to webhook URL
6. Log request + response
7. If failed (status 4xx/5xx or timeout):
   - Retry after 2s (attempt 2)
   - Retry after 4s (attempt 3)
   - Mark as failed after 3 attempts
8. If 3 consecutive failures → disable webhook + email admin

**Retry Strategy:** Exponential backoff
- Attempt 1: Immediate
- Attempt 2: +2 seconds
- Attempt 3: +4 seconds
- Max attempts: 3
- Timeout per attempt: 5 seconds

**Security:**
- Signature verification: `HMAC_SHA256(request_body, secret_key)`
- HTTPS only (HTTP rejected)
- IP whitelisting: Optional setting per webhook
- Request signing: Include timestamp to prevent replay attacks

### Performance

- **API key creation:** <500ms
- **Webhook test:** <6s (5s timeout + processing)
- **Logs page load:** <1s for 20 rows
- **Export CSV:** <10s for 10,000 rows
- **Real-time log updates:** WebSocket push new logs every 2s (optional, toggle in settings)

### Rate Limiting

**API Key Usage Limits (by plan):**
- Free: 1,000 requests/month, 10 req/min
- Pro: 50,000 requests/month, 100 req/min
- Business: 200,000 requests/month, 300 req/min
- Enterprise: Unlimited, 500 req/min

**Webhook Limits:**
- Free: 2 webhook endpoints
- Pro: 10 webhook endpoints
- Business: 50 webhook endpoints
- Enterprise: Unlimited

**Delivery Timeout:** 5 seconds per attempt  
**Max Payload Size:** 1MB per webhook delivery  
**Log Retention:** 90 days (auto-delete older)

---

## Figma uchun komponentlar

```
developer-api-webhooks/
├── api-keys-list                    # Keys table with pagination
│   ├── key-row                      # Single key row with copy button
│   ├── status-badge                 # Active/Revoked badge
│   ├── environment-badge            # Production/Development/Test
│   └── actions-dropdown             # Regenerate/Info/Revoke menu
├── api-key-create-modal             # Create key modal with form
├── api-key-success-modal            # Success with key display (once)
├── api-key-regenerate-modal         # Confirmation with warning
├── api-key-revoke-modal             # Delete confirmation
├── webhooks-grid                    # 2-column webhook cards
│   ├── webhook-card                 # Single webhook card
│   ├── event-badge                  # Event type badge
│   └── stats-row                    # Success rate/Last/Total
├── webhook-create-modal             # 2-step wizard (URL + Events)
├── webhook-test-modal               # Test with payload preview
├── webhook-test-result-modal        # Success/Failed result
├── webhook-logs-table               # Delivery logs table
├── log-detail-drawer                # 480px drawer with request/response
├── quick-start-card                 # Gradient card with CTA
├── plan-limits-card                 # API usage progress bars
└── code-block                       # Syntax highlighted code display
```

---

## Figma AI uchun prompt

```
Design a comprehensive Developer API Management module for a SaaS customer support platform with 3 main screens: API Keys, Webhooks, Logs.

SCREEN 1: API KEYS
- Quick Start Card: gradient #EEF2FF, 160px height, icon Code 48px, title + description + "API Hujjatini ko'rish" button, collapsible
- Plan Limits Card: white border, 100px, 3 columns (API Requests 8,247/50,000 with progress bar 16.5% orange, Webhook Endpoints 3/10, Rate Limit 100 req/min Pro badge)
- Keys Table: rows 72px, 5 columns (Name+Key masked `chatflow_live_pk_abc123••••••xyz` with Copy icon, Environment badge Production green/Development yellow/Test blue, Last Used "2 min ago" with green dot, Status Active/Revoked, Actions dropdown)
- Create Modal 560px: form (Name* input, Environment 3 radio options horizontal 160×56, Permissions checkboxes 2-col grid 6 items, Expiration dropdown), footer "Key yaratish" primary
- Success Modal 600px: CheckCircle 48px green center, warning alert yellow "faqat bir marta ko'rasiz", Key display card dark bg #1E1E1E mono font with copy button, usage example code block JavaScript syntax highlighted
- Regenerate Modal 480px: AlertTriangle 48px orange, warning "eski key bekor qilinadi", confirmation checkbox required, "Regenerate qilish" button orange
- Revoke Modal 480px: Trash 48px red, danger alert "barcha ilovalar ishlamay qoladi", text input must match key name to enable delete button red

SCREEN 2: WEBHOOKS
- Info Card: #F0FDF4 green, 120px, border-left 4px #10B981, "Webhook'lar nima?" title + description
- Webhooks Grid: 2-column, cards 512px width, border 1px #E5E7EB radius 12px padding 20px
  - Each card: Status badge top-left Active/Inactive/Error, actions dropdown top-right
  - URL section: label + `https://example.com/webhook` with copy icon
  - Events section: horizontal wrap badges "conversation.created" "message.sent" "+3 ta ko'proq"
  - Stats row: 3 items (Success Rate 98.5% green + Last Delivery 2 min + Total Calls 1,247)
  - Footer: "Delivery logs →" link
- Create Modal 640px: 2-step wizard with dots indicator
  - Step 1: Webhook URL* HTTPS input, Name optional, Secret key optional with "Tasodifiy key yaratish" button, "Keyingisi: Event'lar →" button
  - Step 2: Event categories accordion (Conversations 4 events, Messages 3, CSAT 2, Team 2, Billing 3), each with "Barchasini tanlash" checkbox
- Test Modal 560px: Endpoint URL display, Event Type dropdown, Sample Payload JSON code editor 300px height readonly syntax highlighted, "Test yuborish" button with loading state
- Test Success Modal 560px: CheckCircle 48px green, response card (Status 200 OK green, Response Time 247ms, Headers collapsible, Body JSON)
- Test Failed Modal 560px: XCircle 48px red, error card #FEE2E2 (Status 500, Response Time timeout, Error Message), Troubleshooting Tips checklist

SCREEN 3: WEBHOOK LOGS
- Filters Bar 56px: 4 dropdowns (Webhook Selector 220px, Event Type 200px, Status 140px, Date Range 200px), Search input 240px, "Export CSV" + "Tozalash" buttons
- Logs Table: sticky header #F9FAFB, rows 64px, 7 columns (Timestamp "11 Feb 2026 14:35:42" + relative "2 min ago", Webhook Name + URL truncated, Event badge blue, Status badge 200 OK green/500 red/Timeout gray, Response Time 247ms color-coded, Retry "2/3" badge if applicable, "Ko'rish" button)
- Log Detail Drawer: 480px width slides from right, header "Delivery Details" with close X
  - Section 1 Overview: Large status badge center 120×40, details grid 2-col (Webhook/Event/Timestamp/Response Time/Attempt/Request ID mono with copy)
  - Section 2 Request: URL with copy, Headers code block, Body JSON 300px syntax highlighted
  - Section 3 Response: Status code large, Headers code block, Body JSON
  - Section 4 Retry History: vertical timeline, 3 attempts with circle numbers connected by line, each showing timestamp/status/delay
  - Footer: "Qayta yuborish" button + "Yopish"

Visual Style:
- Colors: Primary #4F46E5, Success #10B981, Warning #F59E0B, Danger #DC2626
- Code blocks: Dark bg #1E1E1E, syntax highlighting (keywords blue, strings green, comments gray), Fira Code font 13px
- Badges: 28px height, border-radius 6px, various colors per type
- Monospace text: API keys/URLs/payloads in 'Fira Code' or 'Monaco'
- Spacing: 8px grid, 16-32px padding, 12-20px gaps
- Shadows: sm for cards, md on hover, lg for modals, 2xl for drawer
- Animations: smooth 200-300ms transitions, copy button state change 2s

Empty States: Icon 64px #D1D5DB center, title 18px Semibold, description 14px Regular, CTA button 160×48 primary
Loading States: Skeleton shimmer for table rows/cards, spinner for button loading
Error States: AlertTriangle icon, error banner #FEE2E2 with retry button

Accessibility: WCAG 2.1 AA, keyboard nav Tab/Enter/Escape/Arrows, ARIA labels for all interactive elements, focus visible ring 2px #4F46E5, screen reader announcements, code blocks accessible with role="textbox" readonly
```
