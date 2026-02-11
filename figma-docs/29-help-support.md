# CHATFLOW — Help & Support Module

**Modul ID:** M-13  
**Yaratilgan:** 2026-02-11  
**Kirish:** All roles (Admin, Manager, Operator)  
**Maqsad:** Foydalanuvchilarga CHATFLOW platformasidan foydalanishda yordam berish, hujjatlar, video darsliklari va support ticket tizimi orqali.

---

## Umumiy Yondashuv

Help & Support moduli — CHATFLOW platformasidagi self-service yordam markazi. Foydalanuvchilar FAQ, video tutoriallar, documentation va to'g'ridan-to'g'ri support ticket system orqali yordam oladilar. Maqsad: operator va adminlarga platformadan samarali foydalanish uchun resurslar taqdim etish va muammolar yuzaga kelganda tez yordam olish.

**Key Features:**
- 📚 Knowledge Base (FAQs, How-tos, Guides)
- 🎥 Video Tutorials (Getting started, Advanced features)
- 📄 Documentation (API docs, Integration guides)
- 🎫 Support Tickets (Submit va track tickets)
- 💬 Live Chat with CHATFLOW Support Team
- 🔍 Contextual Help (tooltips, onboarding tour)

---

## 1. HELP CENTER HOME (SCR-HC01)

### Layout
Dashboard Shell (240px sidebar + 64px header) + Main Content

### UI Komponentlar

#### Header Section
- **Title:** "Yordam Markazi" 32px Bold #111827
- **Subtitle:** "CHATFLOW platformasidan foydalanish bo'yicha barcha ma'lumotlar" 16px Regular #6B7280
- **Search bar:** 600px width, center
  - Placeholder: "Savol yoki mavzu qidiring..." #9CA3AF
  - Search icon: 20px left, #6B7280
  - Height: 48px, Border radius: 8px
  - Border: 1px #E5E7EB
  - Focus: Border 2px #4F46E5, Shadow-md

#### Quick Access Cards (3 cards horizontal)
**Card size:** 360×160px each, gap 20px

**1. Getting Started**
- Icon: 🚀 RocketIcon 40px #4F46E5
- Title: "Boshlash" 18px Semibold #111827
- Description: "Platform bilan tanishish va asosiy sozlamalar" 14px #6B7280
- Link: "Ko'rish →" 14px Medium #4F46E5
- Hover: Shadow-sm → Shadow-lg, translateY(-4px) 200ms

**2. FAQs**
- Icon: ❓ HelpCircle 40px #10B981
- Title: "Tez-tez so'raladigan savollar" 18px Semibold
- Description: "Eng ko'p uchraydigan savollarga javoblar" 14px #6B7280
- Link: "Barcha savollar →" #10B981

**3. Contact Support**
- Icon: 💬 MessageCircle 40px #F59E0B
- Title: "Qo'llab-quvvatlash bilan bog'laning" 18px Semibold
- Description: "Ticket yuborish yoki live chat" 14px #6B7280
- Link: "Ticket ochish →" #F59E0B

#### Popular Topics (Grid 2×3)
**Title:** "Mashhur Mavzular" 20px Semibold #111827

**6 ta topic card (320×100px each):**
1. **Widget O'rnatish**
   - Icon: Code 24px #4F46E5
   - Title: "Widget O'rnatish" 16px Medium
   - Articles: "8 ta maqola" 13px #6B7280
   - Arrow → 16px right

2. **Chat Boshqarish**
   - Icon: MessageSquare 24px #10B981
   - "12 ta maqola"

3. **Jamoa Sozlamalari**
   - Icon: Users 24px #8B5CF6
   - "6 ta maqola"

4. **Automation**
   - Icon: Zap 24px #F59E0B
   - "10 ta maqola"

5. **Billing va Tarif**
   - Icon: CreditCard 24px #EF4444
   - "5 ta maqola"

6. **API Integratsiyalar**
   - Icon: Terminal 24px #6366F1
   - "15 ta maqola"

**Card hover:** Border #E5E7EB → #4F46E5, Shadow-sm → Shadow-md

#### Video Tutorials Section
**Title:** "Video Darsliklar" 20px Semibold

**3 ta video card horizontal (360×200px each):**
- Thumbnail: 360×180px with play button overlay (48px circle, white, center)
- Title: "CHATFLOW bilan Boshlash" 16px Semibold below thumbnail
- Duration: "5:30" badge top-right 12px #111827 bg rgba(0,0,0,0.7)
- Views: "👁 1,247 ko'rish" 13px #6B7280
- Hover: Play button scale 1→1.1, shadow-lg

**Videos:**
1. "CHATFLOW bilan Boshlash (5:30)"
2. "Widget O'rnatish va Sozlash (8:45)"
3. "Automation va Triggerlar (12:15)"

#### Recent Updates
**Title:** "Yangiliklar va Yangilanishlar" 20px Semibold

**Timeline list (5 items):**
- Date badge: "Feb 10, 2026" 12px Medium #6B7280 bg #F3F4F6 left
- Title: "Yangi funksiya: Team Chat" 14px Medium #111827
- Description: "Endi jamoa a'zolari o'rtasida ichki chat mavjud..." 14px #6B7280
- "Batafsil →" link 13px #4F46E5

---

## 2. KNOWLEDGE BASE (SCR-HC02)

### Layout
Left Sidebar (280px) + Main Content Area

### Left Sidebar: Categories

**Search input (top):**
- Width: 100%, 40px height
- Placeholder: "Maqola qidirish..." #9CA3AF
- Search icon 16px

**Categories Tree:**
```
📖 Getting Started
  ↳ Account Setup (4)
  ↳ First Steps (6)
  ↳ Widget Installation (8)
  
💬 Chatlar
  ↳ Suhbatlarni Boshqarish (12)
  ↳ Assign va Transfer (5)
  ↳ Chat History (3)
  
👥 Jamoa
  ↳ Agent Qo'shish (4)
  ↳ Rollar va Ruxsatlar (7)
  ↳ Performance (3)
  
⚙️ Automation
  ↳ Ish Vaqti (3)
  ↳ Auto-Reply (5)
  ↳ Triggers (10)
  
📊 Analytics
  ↳ Dashboard (4)
  ↳ Reports (6)
  ↳ Export (3)
  
💳 Billing
  ↳ Tariflar (4)
  ↳ To'lov (3)
  ↳ Invoices (2)
  
🔧 Advanced
  ↳ API (15)
  ↳ Webhooks (8)
  ↳ Integrations (10)
```

**Category style:**
- Parent: 14px Semibold, icon 20px, collapsible arrow
- Child: 14px Regular, indent 20px, count badge
- Hover: bg #F3F4F6
- Active: bg #EEF2FF, text #4F46E5, border-left 3px #4F46E5

### Main Content: Article List

**Breadcrumb:**
- "Yordam Markazi / Chatlar / Suhbatlarni Boshqarish" 13px #6B7280
- Separator: "/" #D1D5DB

**Title:** "Suhbatlarni Boshqarish" 28px Bold #111827

**Article List (12 articles, 2 columns):**

**Article Card (512×120px):**
- Icon: 🗨️ 32px left (Emoji or icon based on type)
- Title: "Chatni qanday assign qilish?" 16px Semibold #111827
- Excerpt: "Chatlarni qo'lda yoki avtomatik..." 14px #6B7280, 2 lines max
- Meta: "👁 245 ko'rish · ⏱️ 3 daqiqa o'qish" 12px #9CA3AF
- Helpful: "👍 89% Foydali" 12px #10B981
- Arrow → 20px right #D1D5DB
- Hover: Border #E5E7EB → #4F46E5

**Pagination:**
- Bottom center
- "1 2 3 ... 8" buttons 36×36px
- Active: bg #4F46E5, text white
- Hover: bg #EEF2FF

---

## 3. ARTICLE VIEW (SCR-HC03)

### Layout
Article content center, 800px max-width

### UI Komponentlar

#### Breadcrumb
"Yordam Markazi / Chatlar / Suhbatlarni Boshqarish / Chatni qanday assign qilish?"

#### Article Header
- Title: "Chatni qanday assign qilish?" 32px Bold #111827
- Meta row:
  - Last updated: "Feb 8, 2026" 14px #6B7280
  - Author: "CHATFLOW Jamoasi" 14px #6B7280
  - Reading time: "⏱️ 3 daqiqa" 14px #6B7280
  - Views: "👁 245" 14px #9CA3AF

#### Table of Contents (Right sidebar 240px)
- Title: "Mundarija" 14px Semibold
- Links: 14px Regular #6B7280
- Active: #4F46E5 Bold, border-left 2px
- Sticky position: top 80px

**TOC items:**
1. Qo'lda Assign
2. Avtomatik Assign
3. Round-robin
4. Transfer

#### Article Body
**Typography:**
- H2: 24px Bold #111827, margin-top 40px
- H3: 20px Semibold #374151, margin-top 32px
- Paragraph: 16px Regular #374151, line-height 1.7, margin-bottom 16px
- Code inline: `bg #F3F4F6, font mono, 14px, padding 2px 6px, radius 4px`
- Code block: bg #1E1E1E, text #E5E7EB, padding 20px, radius 8px, syntax highlight
- Image: max-width 100%, border 1px #E5E7EB, radius 8px, margin 24px 0
- List: margin-left 20px, disc bullets, 16px Regular
- Blockquote: border-left 4px #4F46E5, bg #F9FAFB, padding 16px, italic

**Content example:**
```markdown
## Qo'lda Assign

Chatni qo'lda assign qilish uchun quyidagi qadamlarni bajaring:

1. **Inbox sahifasiga o'ting**
2. Chatni tanlang
3. Info sidebar'da "Assign to" dropdown'ni oching
4. Agentni tanlang
5. "Assign" tugmasini bosing

![Screenshot: Assign dropdown](https://example.com/img.png)

> **Pro Tip:** Keyboard shortcut `Ctrl+A` orqali tezroq assign qilishingiz mumkin.

## Avtomatik Assign

Avtomatik assign 3 xil rejimda ishlaydi:
- **Round-robin**: Navbat bo'yicha
- **Least busy**: Eng kam band agent
- **Manual**: Qo'lda assign

`Automation → Settings → Assignment Rules` orqali sozlang.
```

#### Related Articles (Bottom)
**Title:** "Shunga o'xshash maqolalar" 20px Semibold

**3 ta card horizontal (350×100px):**
- Title: "Chatni qanday transfer qilish?" 16px Semibold
- Excerpt: "Transfer jarayoni..." 14px #6B7280
- Arrow → right

#### Feedback Section (Bottom card)
**Background:** #F9FAFB, padding 32px, radius 12px, center text

**Title:** "Bu maqola foydali bo'ldimi?" 18px Semibold #111827

**Rating buttons (2):**
- 👍 "Ha, foydali" 160×48px bg white border #E5E7EB
- 👎 "Yo'q, foydali emas" 160×48px bg white border #E5E7EB
- Hover: border #4F46E5, shadow-md
- Active: bg #EEF2FF

**After click:**
- Success: CheckCircle 48px green, "Rahmat! Fikringiz uchun tashakkur." 16px
- If 👎: Show textarea "Nimani yaxshilashimiz mumkin?" 300×100px + "Yuborish" button

---

## 4. VIDEO TUTORIALS (SCR-HC04)

### Layout
Grid view, 3 columns

### UI Komponentlar

#### Header
- Title: "Video Darsliklar" 28px Bold
- Filter tabs: "Barchasi | Getting Started | Advanced | Integrations" 14px Medium
- Active tab: bg #EEF2FF, text #4F46E5

#### Video Grid

**Video Card (360×280px):**
- Thumbnail: 360×200px
  - Play button overlay: 64px circle, white icon 32px, center
  - Duration badge: top-right 12px "8:45" bg rgba(0,0,0,0.8) text white
  - Category badge: top-left 12px "Getting Started" bg #4F46E5 text white
- Title: "Widget O'rnatish va Sozlash" 16px Semibold #111827, 2 lines max
- Meta row:
  - Views: "👁 1,247" 13px #6B7280
  - Date: "Feb 8, 2026" 13px #6B7280
- Hover: Shadow-sm → Shadow-xl, translateY(-4px), play button scale 1.1

**Grid:** 3 columns, gap 20px, auto rows

**Videos list:**
1. "CHATFLOW bilan Boshlash" (5:30) — Getting Started
2. "Widget O'rnatish va Sozlash" (8:45) — Getting Started
3. "Automation va Triggerlar" (12:15) — Advanced
4. "API Integratsiyalar" (15:30) — Advanced
5. "Jamoa Boshqaruvi" (10:20) — Getting Started
6. "Analytics va Hisobotlar" (9:45) — Advanced
7. "Billing va Tariflar" (6:30) — Getting Started
8. "Webhook Sozlash" (14:00) — Advanced
9. "Knowledge Base" (8:00) — Getting Started
10. "Team Chat" (7:15) — Getting Started

**Pagination:** Bottom center

---

## 5. VIDEO PLAYER MODAL (MODAL-HC01)

**Trigger:** Click video card

**Modal:** 1120px width, center, backdrop blur 8px

### UI Komponentlar

#### Video Player
- Width: 1120px, Height: 630px (16:9 aspect ratio)
- Video embed: YouTube/Vimeo player
- Controls: play/pause, timeline, volume, fullscreen, speed (0.5x, 1x, 1.25x, 1.5x, 2x)

#### Video Info (Below player)
- Title: "Widget O'rnatish va Sozlash" 24px Bold #111827
- Meta:
  - Views: "👁 1,247 ko'rish" 14px #6B7280
  - Published: "Feb 8, 2026" 14px #6B7280
  - Duration: "⏱️ 8:45" 14px #6B7280
- Description: 16px Regular #374151
  ```
  Bu videoda CHATFLOW widget'ini qanday o'rnatish va sozlashni ko'rsatamiz. 
  Siz web-saytingizga 5 daqiqada widget qo'shishni o'rganasiz.
  
  Mavzular:
  0:00 — Kirish
  0:45 — Widget yaratish
  2:30 — Customization
  5:15 — Installation code
  7:20 — Testing
  ```

#### Related Videos (Right sidebar 320px)
**Title:** "Keyingi videolar" 16px Semibold

**Video list (5 items, vertical):**
- Thumbnail: 320×180px (16:9)
- Duration badge: top-right
- Title: 14px Semibold, 2 lines max
- Views: "👁 523" 12px #9CA3AF
- Click: Load new video

**Close button:** X 32×32px top-right, hover scale 1.1

---

## 6. SUPPORT TICKETS (SCR-HC05)

### Layout
Tabs: "My Tickets | Create New"

### Tab 1: My Tickets

#### Tickets Table

**Filters (top):**
- Status dropdown: "All | Open | In Progress | Resolved | Closed" 160px
- Priority dropdown: "All | Low | Medium | High | Urgent" 160px
- Search: "Ticket qidirish..." 300px
- "New Ticket" button primary, right

**Table columns:**
| Column | Width | Info |
|--------|-------|------|
| **Ticket ID** | 100px | #T-1247 (link) |
| **Subject** | 300px | Truncated, hover tooltip |
| **Status** | 120px | Badge (Open/In Progress/Resolved/Closed) |
| **Priority** | 100px | Badge (Low/Medium/High/Urgent) |
| **Created** | 140px | "Feb 8, 2026" |
| **Last Updated** | 140px | "2 soat oldin" |
| **Actions** | 80px | "Ko'rish" button |

**Status Badge colors:**
- Open: bg #FEF3C7 text #92400E (Warning)
- In Progress: bg #DBEAFE text #1E40AF (Blue)
- Resolved: bg #D1FAE5 text #065F46 (Success)
- Closed: bg #F3F4F6 text #374151 (Gray)

**Priority Badge colors:**
- Low: bg #F3F4F6 text #6B7280
- Medium: bg #DBEAFE text #1E40AF
- High: bg #FEF3C7 text #92400E
- Urgent: bg #FEE2E2 text #991B1B

**Empty state:**
- Icon: Inbox 48px #D1D5DB
- Title: "Hech qanday ticket yo'q" 18px Semibold #374151
- Description: "Muammo yuzaga kelganda yangi ticket yarating" 14px #6B7280
- "Create New Ticket" button primary

---

### Tab 2: Create New Ticket

**Form (600px center):**

| Field | Type | Validation |
|-------|------|------------|
| **Mavzu*** | Text input | Required, 10-200 chars |
| **Kategoriya*** | Dropdown | Required, [Technical / Billing / Feature Request / Bug Report / Other] |
| **Muhimlik*** | Radio buttons | Required, [Low / Medium / High / Urgent] |
| **Tavsif*** | Textarea | Required, 50-2000 chars, 300px height |
| **Fayl ilova qilish** | File upload | Optional, max 5 files, 10MB each, [.png .jpg .pdf .txt .doc] |

**Muhimlik radio (horizontal 4 buttons):**
- Low: icon ℹ️, 140×56px
- Medium: icon ⚠️
- High: icon ⚠️⚠️
- Urgent: icon 🔥
- Selected: border 2px #4F46E5, bg #EEF2FF

**File upload area:**
- Dashed border #D1D5DB, 600×120px
- "📎 Fayllarni shu yerga torting yoki tanlang" center 14px #6B7280
- Click opens file picker
- Uploaded files list below:
  - File icon + name + size
  - Remove X button red

**Actions:**
- "Bekor qilish" ghost button left
- "Ticket Yaratish" primary button right
  - Loading: "Yuborilmoqda..." + spinner
  - Success: Redirect to ticket detail + toast "Ticket yaratildi! #T-1248"

---

## 7. TICKET DETAIL VIEW (SCR-HC06)

**Layout:** Full page

### Header
- Back button: ← "Orqaga" 14px link
- Ticket ID: "#T-1247" 28px Bold #111827
- Status badge: "In Progress" large 32px badge
- Priority badge: "High" 28px badge
- Created: "Feb 8, 2026, 14:35" 14px #6B7280

### Info Card (Right sidebar 320px)
**Title:** "Ticket Ma'lumotlari"

- **Status:** Badge + "Change status" dropdown (Admin only)
- **Priority:** Badge
- **Category:** "Technical"
- **Created:** "Feb 8, 2026, 14:35"
- **Last Updated:** "2 soat oldin"
- **Assigned to:** Avatar + "CHATFLOW Support" (or "Unassigned")

### Messages Thread (Main content 800px)

**Initial Message:**
- Avatar: 48px circle, User
- Name: "Jahongir Otajonov" 16px Semibold
- Role badge: "Admin" 12px
- Time: "Feb 8, 2026, 14:35" 13px #6B7280
- Message bubble: bg #F9FAFB, padding 16px, border-radius 12px
  - Text: 16px Regular #374151
  - Attachments: File cards if any (icon + name + size + download)

**Reply Message (Support team):**
- Avatar: 48px, CHATFLOW logo
- Name: "CHATFLOW Support" 16px Semibold
- Badge: "Support Agent" 12px bg #4F46E5
- Time: "Feb 8, 2026, 15:10" 13px #6B7280
- Message bubble: bg #EEF2FF (primary light)

**Reply Form (Bottom):**
- Textarea: "Javob yozing..." 800×120px, border 1px #E5E7EB
- File attach button: 📎 icon, "Fayl ilova qilish"
- "Yuborish" primary button right
- "Close Ticket" outline button red left (sets status to Closed)

---

## 8. LIVE CHAT SUPPORT (Widget Integration)

### Trigger
- "💬 Live Chat" button floating bottom-right (similar to main CHATFLOW widget)
- Or "Contact Support → Live Chat" from Help Center

### Widget
- Opens CHATFLOW chat widget
- Pre-filled: User's name, email from account
- Chat routed to: CHATFLOW Support Team workspace
- Operator sees: User's workspace ID, plan, recent activity

**Chat window:**
- Standard CHATFLOW widget (360×520px)
- Header: "CHATFLOW Support" + status "Online"
- Message: "Salom! Sizga qanday yordam bera olamiz?" auto-greeting

---

## 9. CONTEXTUAL HELP (Tooltips)

### Implementation
- Question mark icon ⓘ 16px #9CA3AF next to labels
- Hover: Shows tooltip 280px max-width, bg #1F2937 text white, padding 12px, radius 8px
- Arrow: 8px pointing to icon
- Position: Auto (top/bottom/left/right) based on space

**Examples:**
- **Assign to** (Inbox): "Chatni agentga tayinlash. Faqat Admin/Manager."
- **Auto-Reply** (Automation): "Ish vaqtidan tashqarida avtomatik javob."
- **CSAT** (Analytics): "Customer Satisfaction Score — mijoz qoniqish darajasi."
- **Webhook** (Developer): "Hodisalar yuz berganda HTTP POST so'rovi yuborish."

### Onboarding Tour
- First login: "CHATFLOW ga xush kelibsiz! 5 daqiqada platformani o'rganing" banner top
- "Start Tour" button → Step-by-step overlay
- Steps (7):
  1. Dashboard overview
  2. Inbox — accept chat
  3. Widget settings
  4. Team — add agent
  5. Automation
  6. Analytics
  7. Help Center

**Tour step UI:**
- Spotlight: Element highlighted, rest darkened 80% overlay
- Tooltip: 360px card, arrow pointing to element
  - Step: "1 / 7" top-left 12px
  - Title: "Inbox" 18px Semibold
  - Description: "Barcha chatlar shu yerda. Javob berish uchun chatni oching." 14px
  - "Keyingi →" primary button
  - "Skip Tour" link gray
- Close X button

---

## ASCII Wireframes

### Wireframe 1: Help Center Home

```
┌──────────────────────────────────────────────────────────────────────────┐
│ CHATFLOW                      [Ctrl+K Qidirish...]      🔔(3) [Avatar ▼]│
├──────────────────────────────────────────────────────────────────────────┤
│[≡]│                                                                       │
│   │    Yordam Markazi                                                    │
│ S │    CHATFLOW platformasidan foydalanish bo'yicha barcha ma'lumotlar  │
│ i │                                                                       │
│ d │    [          🔍 Savol yoki mavzu qidiring...                    ]  │
│ e │                                                                       │
│ b │    ┌────────────────┐  ┌────────────────┐  ┌────────────────┐      │
│ a │    │   🚀           │  │   ❓           │  │   💬           │      │
│ r │    │                │  │                │  │                │      │
│   │    │ Boshlash       │  │ FAQs           │  │ Qo'llab-quvvat │      │
│   │    │ Platform bilan │  │ Tez-tez        │  │ Ticket yuborish│      │
│   │    │ tanishish      │  │ so'raladigan   │  │ yoki live chat │      │
│   │    │ Ko'rish →      │  │ Barcha →       │  │ Ticket ochish →│      │
│   │    └────────────────┘  └────────────────┘  └────────────────┘      │
│   │                                                                       │
│   │    Mashhur Mavzular                                                  │
│   │    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│   │    │📝 Widget     │  │💬 Chat       │  │👥 Jamoa      │            │
│   │    │  O'rnatish   │  │  Boshqarish  │  │  Sozlamalari │            │
│   │    │  8 ta maqola │  │  12 ta maqola│  │  6 ta maqola │            │
│   │    └──────────────┘  └──────────────┘  └──────────────┘            │
│   │                                                                       │
│   │    Video Darsliklar                                                  │
│   │    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│   │    │[  PLAY ▶  ]  │  │[  PLAY ▶  ]  │  │[  PLAY ▶  ]  │            │
│   │    │              │  │              │  │              │            │
│   │    │ Boshlash     │  │ Widget       │  │ Automation   │            │
│   │    │ 5:30         │  │ 8:45         │  │ 12:15        │            │
│   │    │👁 1,247      │  │👁 856        │  │👁 523        │            │
│   │    └──────────────┘  └──────────────┘  └──────────────┘            │
└──────────────────────────────────────────────────────────────────────────┘
```

### Wireframe 2: Knowledge Base (Article List)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ CHATFLOW                                              🔔(3)  [Avatar ▼]  │
├──────────────────────────────────────────────────────────────────────────┤
│                Yordam Markazi / Chatlar / Suhbatlarni Boshqarish        │
├───────────────┬──────────────────────────────────────────────────────────┤
│               │                                                           │
│ [🔍 Qidirish] │  Suhbatlarni Boshqarish                                  │
│               │                                                           │
│ 📖 Getting    │  ┌───────────────────────┐  ┌───────────────────────┐   │
│   Started     │  │ 🗨️                    │  │ 📤                    │   │
│                │  │ Chatni qanday assign  │  │ Chatni transfer qilish│   │
│ 💬 Chatlar ▼  │  │ qilish?               │  │                       │   │
│   ↳ Boshqarish│  │ Chatlarni qo'lda...   │  │ Chat boshqa agent...  │   │
│   ↳ Assign    │  │ 👁 245 · ⏱️ 3 min     │  │ 👁 187 · ⏱️ 2 min     │   │
│   ↳ History   │  │ 👍 89% Foydali        │  │ 👍 92% Foydali        │   │
│               │  └───────────────────────┘  └───────────────────────┘   │
│ 👥 Jamoa      │                                                           │
│   ↳ Qo'shish  │  ┌───────────────────────┐  ┌───────────────────────┐   │
│   ↳ Rollar    │  │ ⚡                    │  │ 📊                    │   │
│   ↳ Stats     │  │ Avtomatik assign      │  │ Chat history          │   │
│               │  │                       │  │                       │   │
│ ⚙️ Automation │  │ Round-robin va...     │  │ Eski chatlar...       │   │
│               │  │ 👁 198 · ⏱️ 4 min     │  │ 👁 156 · ⏱️ 2 min     │   │
│ 📊 Analytics  │  │ 👍 85% Foydali        │  │ 👍 88% Foydali        │   │
│               │  └───────────────────────┘  └───────────────────────┘   │
│ 💳 Billing    │                                                           │
│               │                      [1] [2] [3] ... [8]                 │
│ 🔧 Advanced   │                                                           │
│               │                                                           │
└───────────────┴──────────────────────────────────────────────────────────┘
```

### Wireframe 3: Support Tickets

```
┌──────────────────────────────────────────────────────────────────────────┐
│ CHATFLOW                                              🔔(3)  [Avatar ▼]  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  [ My Tickets | Create New ]                      [+ New Ticket]         │
│                                                                           │
│  [Status: All ▼] [Priority: All ▼]  [🔍 Ticket qidirish...]             │
│                                                                           │
│  ┌─────┬────────────────────┬──────────┬──────────┬─────────┬─────────┐ │
│  │ ID  │ Subject            │ Status   │ Priority │ Created │ Actions │ │
│  ├─────┼────────────────────┼──────────┼──────────┼─────────┼─────────┤ │
│  │T-1248│Widget not loading │[In Prog] │[High]    │Feb 10   │[Ko'rish]│ │
│  ├─────┼────────────────────┼──────────┼──────────┼─────────┼─────────┤ │
│  │T-1247│Billing question   │[Open]    │[Medium]  │Feb 8    │[Ko'rish]│ │
│  ├─────┼────────────────────┼──────────┼──────────┼─────────┼─────────┤ │
│  │T-1246│API integration    │[Resolved]│[Low]     │Feb 5    │[Ko'rish]│ │
│  ├─────┼────────────────────┼──────────┼──────────┼─────────┼─────────┤ │
│  │T-1245│Feature request    │[Closed]  │[Medium]  │Feb 3    │[Ko'rish]│ │
│  └─────┴────────────────────┴──────────┴──────────┴─────────┴─────────┘ │
│                                                                           │
│                          [1] [2] [3]                                      │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## Figma Components

```
help-support/
├── help-center-home/
│   ├── search-bar-large
│   ├── quick-access-card (3 variants: getting-started, faqs, support)
│   ├── topic-card (6 topics with icons)
│   └── video-card (thumbnail + play overlay + meta)
├── knowledge-base/
│   ├── category-sidebar
│   │   ├── category-tree-item (collapsible)
│   │   └── category-search-input
│   ├── article-card (icon + title + excerpt + meta)
│   ├── breadcrumb-navigation
│   └── pagination-bar
├── article-view/
│   ├── article-header (title + meta)
│   ├── table-of-contents (sticky sidebar)
│   ├── article-body (typography styles)
│   ├── code-block-component
│   ├── related-articles-section
│   └── feedback-section (thumbs up/down + textarea)
├── video-tutorials/
│   ├── filter-tabs
│   ├── video-grid-card (thumbnail + overlay + badges)
│   └── video-player-modal (embed + info + related)
├── support-tickets/
│   ├── tickets-table
│   │   ├── ticket-row (status/priority badges)
│   │   └── filter-controls
│   ├── create-ticket-form
│   │   ├── priority-radio-buttons (4 options)
│   │   └── file-upload-area
│   └── ticket-detail-view
│       ├── ticket-header (ID + badges)
│       ├── ticket-info-card (sidebar)
│       ├── message-thread
│       │   ├── initial-message-bubble
│       │   └── reply-message-bubble (support)
│       └── reply-form
└── contextual-help/
    ├── tooltip-component (dark bg, arrow)
    ├── help-icon (ⓘ with hover state)
    └── onboarding-tour
        ├── tour-spotlight-overlay
        └── tour-step-tooltip (step counter + navigation)
```

---

## Figma AI Prompt

```
Design a comprehensive Help & Support module for CHATFLOW SaaS platform with multiple screens:

Screen 1: Help Center Home
- Large search bar 600px center with icon
- 3 quick access cards (360×160px): 🚀 Getting Started / ❓ FAQs / 💬 Contact Support
- Popular Topics grid 2×3 (320×100px cards): Widget O'rnatish / Chat / Jamoa / Automation / Billing / API
- Video Tutorials section: 3 videos (360×200px) with thumbnails + play button overlay
- Recent Updates timeline: 5 items with date badges

Screen 2: Knowledge Base (Article List)
- Left sidebar 280px: Category tree with icons 📖💬👥⚙️📊💳🔧
- Main content: Article cards 512×120px with icon, title, excerpt, meta (views, reading time, helpful %)
- Breadcrumb navigation top
- 2-column grid, pagination bottom

Screen 3: Article View
- Article header: Title 32px, meta row (updated, author, reading time, views)
- Right sidebar 240px: Table of contents (sticky, active item highlighted)
- Article body: H2/H3 typography, paragraphs line-height 1.7, code blocks dark #1E1E1E syntax highlighted, images bordered
- Bottom: Related articles (3 cards horizontal), Feedback section (👍👎 buttons + textarea)

Screen 4: Video Tutorials
- Filter tabs: Barchasi / Getting Started / Advanced / Integrations
- Video grid 3 columns (360×280px cards): Thumbnail 360×200 + play button 64px + duration badge + category badge + title + meta
- Pagination

Screen 5: Video Player Modal
- Modal 1120px: Video embed 1120×630 (16:9) with controls
- Video info below: Title, meta, description with timestamps
- Right sidebar 320px: Related videos list (5 items)

Screen 6: Support Tickets (My Tickets tab)
- Filters: Status/Priority dropdowns + Search input
- Table: Ticket ID / Subject / Status badge / Priority badge / Created / Actions
- Status badges: Open (orange) / In Progress (blue) / Resolved (green) / Closed (gray)
- Priority badges: Low (gray) / Medium (blue) / High (orange) / Urgent (red)
- Empty state: Inbox icon + "Hech qanday ticket yo'q"

Screen 7: Create New Ticket
- Form 600px center: Mavzu input / Kategoriya dropdown / Muhimlik 4 radio buttons (Low/Medium/High/Urgent) / Tavsif textarea 300px / Fayl ilova qilish (dashed border upload area)
- Actions: Bekor qilish ghost / Ticket Yaratish primary

Screen 8: Ticket Detail View
- Header: Back link / Ticket ID #T-1247 / Status badge / Priority badge / Created date
- Right sidebar 320px: Info card (Status, Priority, Category, Dates, Assigned to)
- Main content 800px: Message thread (User message bg #F9FAFB / Support reply bg #EEF2FF with avatars)
- Bottom: Reply form (textarea + file attach + Yuborish / Close Ticket buttons)

Contextual Help:
- Question mark icon ⓘ 16px #9CA3AF next to labels
- Tooltip: 280px max-width, bg #1F2937 text white, arrow pointing to icon
- Onboarding tour: Spotlight overlay 80% dark, tooltip card 360px with step counter "1/7", Keyingi → button

Color scheme: Primary #4F46E5, Success #10B981, Warning #F59E0B, Error #EF4444, Gray shades
Typography: Inter font, 32px/28px/24px/20px/18px/16px/14px/13px/12px sizes
Spacing: 8px grid, cards gap 20px
Shadows: sm/md/lg/xl for depth
Rounded corners: 8px/12px
Hover states: Shadow lift, translateY(-4px), scale 1.1 for play buttons

Include all states: default, hover, active, loading, success, error, empty
Responsive: Desktop 1440px, Tablet 768px, Mobile 375px
Accessibility: WCAG AA contrast, keyboard focus indicators, ARIA labels

Create Figma frames for all 8 screens + modals + components with auto-layout, proper spacing, and annotations for developers.
```

---

## Technical Requirements

### API Endpoints

```
# Knowledge Base
GET    /api/help/articles               # List articles (with category filter)
GET    /api/help/articles/:id           # Get article
POST   /api/help/articles/search        # Search articles (query, filters)
GET    /api/help/categories             # List categories
POST   /api/help/articles/:id/feedback  # Submit helpful/not helpful + comment

# Videos
GET    /api/help/videos                 # List videos (with category filter)
GET    /api/help/videos/:id             # Get video details

# Support Tickets
GET    /api/support/tickets              # List user's tickets
GET    /api/support/tickets/:id          # Get ticket details
POST   /api/support/tickets              # Create new ticket
PUT    /api/support/tickets/:id          # Update ticket (status/priority by Admin)
POST   /api/support/tickets/:id/messages # Add message to ticket
POST   /api/support/tickets/:id/close    # Close ticket

# Search
GET    /api/help/search?q=widget         # Global search (articles + videos)

# Contextual Help
GET    /api/help/tooltips                # Get all tooltips
GET    /api/help/onboarding-tour         # Get tour steps
POST   /api/help/onboarding-complete     # Mark tour as completed
```

### Database Schema

```sql
-- Help Articles
CREATE TABLE help_articles (
  id UUID PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(250) UNIQUE NOT NULL,
  category_id UUID REFERENCES help_categories(id),
  content TEXT NOT NULL, -- Markdown
  excerpt VARCHAR(500),
  author VARCHAR(100),
  views_count INT DEFAULT 0,
  helpful_count INT DEFAULT 0,
  not_helpful_count INT DEFAULT 0,
  reading_time_minutes INT,
  published_at TIMESTAMP,
  updated_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Help Categories
CREATE TABLE help_categories (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(50), -- Emoji or icon name
  parent_id UUID REFERENCES help_categories(id), -- For subcategories
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Videos
CREATE TABLE help_videos (
  id UUID PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(250) UNIQUE NOT NULL,
  description TEXT,
  embed_url VARCHAR(500) NOT NULL, -- YouTube/Vimeo URL
  thumbnail_url VARCHAR(500),
  duration_seconds INT,
  category VARCHAR(50), -- 'getting-started', 'advanced', 'integrations'
  views_count INT DEFAULT 0,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Support Tickets
CREATE TABLE support_tickets (
  id UUID PRIMARY KEY,
  ticket_number VARCHAR(20) UNIQUE NOT NULL, -- T-1247
  user_id UUID REFERENCES users(id),
  workspace_id UUID REFERENCES workspaces(id),
  subject VARCHAR(200) NOT NULL,
  category VARCHAR(50), -- 'technical', 'billing', 'feature_request', 'bug_report', 'other'
  priority VARCHAR(20), -- 'low', 'medium', 'high', 'urgent'
  status VARCHAR(20), -- 'open', 'in_progress', 'resolved', 'closed'
  assigned_to UUID REFERENCES users(id), -- Support agent
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Ticket Messages
CREATE TABLE support_ticket_messages (
  id UUID PRIMARY KEY,
  ticket_id UUID REFERENCES support_tickets(id),
  user_id UUID REFERENCES users(id),
  message TEXT NOT NULL,
  is_support_reply BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ticket Attachments
CREATE TABLE support_ticket_attachments (
  id UUID PRIMARY KEY,
  ticket_id UUID REFERENCES support_tickets(id),
  message_id UUID REFERENCES support_ticket_messages(id),
  file_name VARCHAR(255) NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  file_size_bytes INT,
  mime_type VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Article Feedback
CREATE TABLE help_article_feedback (
  id UUID PRIMARY KEY,
  article_id UUID REFERENCES help_articles(id),
  user_id UUID REFERENCES users(id),
  is_helpful BOOLEAN, -- true = helpful, false = not helpful
  comment TEXT, -- Optional feedback comment
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Search Implementation

**Algolia Integration:**
```javascript
// Index articles
const algoliaIndex = algolia.initIndex('help_articles');
algoliaIndex.saveObjects(articles, { autoGenerateObjectIDIfNotExist: true });

// Search
const results = await algoliaIndex.search(query, {
  attributesToRetrieve: ['title', 'excerpt', 'category', 'slug'],
  hitsPerPage: 20,
  filters: `category:${category}` // Optional filter
});
```

**Or PostgreSQL Full-Text Search:**
```sql
-- Add search column
ALTER TABLE help_articles ADD COLUMN search_vector tsvector;

-- Create index
CREATE INDEX help_articles_search_idx ON help_articles USING GIN(search_vector);

-- Update search vector
UPDATE help_articles SET search_vector = 
  setweight(to_tsvector('english', title), 'A') ||
  setweight(to_tsvector('english', content), 'B');

-- Search query
SELECT * FROM help_articles
WHERE search_vector @@ plainto_tsquery('english', 'widget installation')
ORDER BY ts_rank(search_vector, plainto_tsquery('english', 'widget installation')) DESC
LIMIT 20;
```

### Performance Optimization

- **Caching:** Redis cache for articles (TTL 1 hour), categories (TTL 24 hours)
- **CDN:** Serve images, video thumbnails from CDN
- **Lazy loading:** Infinite scroll for article list
- **Search debounce:** 300ms delay
- **Video embed:** Lazy load iframe on modal open

### Analytics Tracking

```javascript
// Track article views
track('help_article_viewed', {
  article_id: article.id,
  article_title: article.title,
  category: article.category,
  views_count: article.views_count
});

// Track article feedback
track('help_article_feedback', {
  article_id: article.id,
  is_helpful: true/false,
  has_comment: true/false
});

// Track video views
track('help_video_viewed', {
  video_id: video.id,
  video_title: video.title,
  category: video.category
});

// Track ticket creation
track('support_ticket_created', {
  ticket_id: ticket.id,
  category: ticket.category,
  priority: ticket.priority
});

// Track search queries
track('help_search', {
  query: searchQuery,
  results_count: results.length,
  filter_category: category
});
```

---

## Accessibility

### Keyboard Navigation
- **Tab:** Navigate between elements
- **Enter:** Open article, play video, submit form
- **Escape:** Close modal, clear search
- **Arrow keys:** Navigate category tree, table rows
- **Ctrl+K:** Focus search bar (global)
- **/:** Focus search bar (alternative)

### ARIA Labels
```html
<!-- Search bar -->
<input 
  type="search" 
  aria-label="Yordam markazida qidirish" 
  aria-describedby="search-hint"
  role="searchbox"
/>

<!-- Article card -->
<article 
  role="article" 
  aria-labelledby="article-title-123"
>
  <h3 id="article-title-123">Chatni qanday assign qilish?</h3>
</article>

<!-- Video card -->
<button 
  aria-label="Widget O'rnatish va Sozlash videosini ko'rish, davomiyligi 8 daqiqa 45 soniya"
  onclick="openVideoModal()"
>
  Play
</button>

<!-- Support ticket table -->
<table role="table" aria-label="Mening ticketlarim">
  <caption class="sr-only">Support ticketlar ro'yxati</caption>
  ...
</table>

<!-- Tooltip -->
<button aria-describedby="tooltip-assign">
  <HelpCircle />
</button>
<div id="tooltip-assign" role="tooltip">
  Chatni agentga tayinlash. Faqat Admin/Manager.
</div>
```

### Screen Reader Announcements
```javascript
// Search results
announce(`${results.length} ta natija topildi`);

// Article feedback submitted
announce("Rahmat! Fikringiz qabul qilindi.");

// Ticket created
announce("Ticket yaratildi. Ticket raqami T-1248. Siz tez orada javob olasiz.");

// Video started
announce("Video boshlandi. Widget O'rnatish va Sozlash.");
```

### Color Contrast (WCAG AA)
- Title #111827 on #FFFFFF: 18.71:1 (AAA)
- Body text #374151 on #FFFFFF: 10.82:1 (AAA)
- Meta text #6B7280 on #FFFFFF: 5.26:1 (AA)
- Links #4F46E5 on #FFFFFF: 5.68:1 (AA)
- Badge: Tested for each variant (all pass AA)

### Touch Targets
- Buttons: 48×48px minimum (mobile)
- Links: 44×44px tap area
- Play button: 64px circle
- Icons: 44×44px touch area

---

## Micro-interactions

1. **Search bar focus:** Border color #E5E7EB → #4F46E5 200ms, shadow-md fade-in
2. **Quick access card hover:** translateY(0 → -4px) 200ms, shadow-sm → shadow-lg
3. **Topic card hover:** Border #E5E7EB → #4F46E5 150ms, shadow-sm → shadow-md
4. **Video play button hover:** Scale 1 → 1.1 200ms, shadow grows
5. **Article card hover:** Border highlight, title color #111827 → #4F46E5 150ms
6. **Category item click:** Expand/collapse animation 200ms ease-out
7. **Feedback button click:** Scale 1 → 0.95 → 1 200ms, then success state fade-in
8. **Thumbs up/down:** Icon scale 1 → 1.2 100ms, color change, particle effect optional
9. **Ticket status badge:** Subtle pulse on "In Progress" (infinite 2s)
10. **File upload:** Drag over effect, border dashed → solid, bg tint
11. **Tooltip appear:** Fade-in 150ms, slide 5px from arrow direction
12. **Tour spotlight:** Fade-in 300ms, element highlighted with shadow-2xl
13. **Modal open:** Backdrop fade 200ms, modal scale 0.95 → 1 ease-out
14. **Live chat widget:** Slide up from bottom-right 300ms, bounce effect
15. **Pagination click:** Active page scale 1 → 1.1 → 1 150ms

---

## User Flows

### Flow 1: Find Article via Search
1. User enters Help Center
2. Clicks search bar (or Ctrl+K)
3. Types "widget"
4. Debounce 300ms → API call
5. Results appear (articles + videos)
6. User clicks "Widget O'rnatish nasil qilish?" article
7. Article opens, TOC on right
8. User reads (track view count increment)
9. Scrolls to bottom
10. Clicks 👍 "Ha, foydali"
11. Success message: "Rahmat!"
12. Helpful count increments

### Flow 2: Create Support Ticket
1. User clicks "Contact Support" card
2. "Create New Ticket" tab opens
3. Fills form:
   - Mavzu: "Widget saytda ko'rinmayapti"
   - Kategoriya: Technical
   - Muhimlik: High
   - Tavsif: "Widget kodini qo'shdim lekin..."
   - Attach screenshot
4. Clicks "Ticket Yaratish"
5. Validation: All required fields OK
6. Loading: "Yuborilmoqda..." + spinner
7. API POST /api/support/tickets
8. Success: Redirect to ticket detail #T-1248
9. Toast: "Ticket yaratildi! #T-1248"
10. Email notification sent to support team

### Flow 3: Watch Video Tutorial
1. User enters Help Center
2. Scrolls to "Video Darsliklar"
3. Clicks "Widget O'rnatish va Sozlash"
4. Modal opens 1120px
5. Video player loads (YouTube embed)
6. User clicks play
7. Video starts (track view count)
8. User watches
9. Video ends
10. Related videos list on right
11. User clicks next video
12. New video loads in same modal

---

## Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View Help Center | ✅ | ✅ | ✅ |
| Search articles | ✅ | ✅ | ✅ |
| Read articles | ✅ | ✅ | ✅ |
| Submit article feedback | ✅ | ✅ | ✅ |
| Watch videos | ✅ | ✅ | ✅ |
| Create support ticket | ✅ | ✅ | ✅ |
| View own tickets | ✅ | ✅ | ✅ |
| Reply to ticket | ✅ | ✅ | ✅ |
| View all workspace tickets | ✅ | ✅ | ❌ |
| Close any ticket | ✅ | ✅ | ⚠️ (own only) |
| Change ticket priority | ✅ | ❌ | ❌ |
| Access live chat support | ✅ | ✅ | ✅ |
| View onboarding tour | ✅ | ✅ | ✅ |
| Skip onboarding tour | ✅ | ✅ | ✅ |

---

**Status:** ✅ Production Ready  
**Oxirgi yangilanish:** 2026-02-11  
**Fayl nomi:** `figma-docs/29-help-support.md`  
**Qatorlar:** ~1600+

**Keyingi qadam:** Figma dizaynlarini yaratish va API endpoints'larni implement qilish.
