# QULAY CHAT — 04-dashboard: To'liq Sahifalar Rejasi

> **Maqsad:** 04-dashboard papkasi ichida Admin va Agent (Operator) rollari uchun barcha kerakli HTML sahifalarni ko'rsatish.
> **Manba:** Figma docs (10–30), sidebar navigatsiya, role access matrix.

---

## UMUMIY MA'LUMOT

| Parametr | Qiymat |
|----------|--------|
| **App Shell** | Header 64px + Sidebar 240px/64px + Main Content fluid |
| **Desktop** | 1440×900px |
| **Rollar** | Admin (to'liq), Manager (ko'rish/nazorat), Operator/Agent (cheklangan) |
| **Asosiy rang** | `#4F46E5` (Primary-600) |
| **Font** | Inter |
| **Sahifa background** | `#F9FAFB` |

### Sidebar Navigatsiya (to'liq ro'yxat)

```
ASOSIY:
  1. Inbox (badge: unread count)
  2. Contacts
  3. Online Visitors (badge: hozir saytda)
  4. Automation
  5. Team
  6. Team Chat (badge: unread)
  7. Analytics
  8. Knowledge Base
────────────────
SOZLAMALAR:
  9. Settings
  10. Billing
  11. Add-ons
  12. Developer
────────────────
QO'SHIMCHA:
  13. Docs (tashqi link)
  14. Support
```

---

## PAPKA TUZILISHI

```
04-dashboard/
│
├── 01-dashboard.html              ← ✅ MAVJUD (yangilanishi kerak)
├── 01-dashboard-admin.html        <- YANGI (Admin dashboard)
├── 02-dashboard-agent.html        <- YANGI (Agent dashboard)
│
├── 📂 inbox/
│   ├── 02-inbox.html
│   ├── 03-inbox-chat-open.html
│   └── 04-inbox-info-sidebar.html
│
├── 📂 contacts/
│   ├── 05-contacts-list.html
│   ├── 06-contact-profile.html
│   ├── 07-contacts-organizations.html
│   ├── 08-organization-detail.html
│   ├── 09-contacts-segments.html
│   └── 10-contacts-import-export.html
│
├── 📂 visitors/
│   ├── 11-online-visitors.html
│   ├── 12-visitor-profile.html
│   └── 13-visitors-map.html
│
├── 📂 automation/
│   ├── 14-automation-working-hours.html
│   ├── 15-automation-auto-reply.html
│   ├── 16-automation-triggers.html
│   └── 17-automation-greetings.html
│
├── 📂 team/
│   ├── 18-team-agents.html
│   ├── 19-team-agent-profile.html
│   ├── 20-team-roles.html
│   └── 21-team-invitations.html
│
├── 📂 team-chat/
│   ├── 22-team-chat.html
│   ├── 23-team-chat-room-settings.html
│   └── 24-team-chat-notifications.html
│
├── 📂 analytics/
│   ├── 25-analytics-overview.html
│   ├── 26-analytics-responsiveness.html
│   ├── 27-analytics-operators.html
│   ├── 28-analytics-operator-detail.html
│   ├── 29-analytics-sla.html
│   ├── 30-analytics-channels.html
│   ├── 31-analytics-segments.html
│   ├── 32-analytics-tags.html
│   ├── 33-analytics-custom-dashboard.html
│   ├── 34-analytics-export.html
│   └── 35-analytics-my-stats.html
│
├── 📂 knowledge-base/
│   ├── 36-kb-dashboard.html
│   ├── 37-kb-article-editor.html
│   ├── 38-kb-categories.html
│   ├── 39-kb-settings.html
│   └── 40-kb-analytics.html
│
├── 📂 settings/
│   ├── 41-settings-workspace.html
│   ├── 42-settings-widget.html
│   ├── 43-settings-security.html
│   ├── 44-settings-notifications.html
│   └── 45-settings-profile.html
│
├── 📂 billing/
│   ├── 46-billing-plan.html
│   ├── 47-billing-payment.html
│   ├── 48-billing-invoices.html
│   └── 49-billing-usage.html
│
├── 📂 addons/
│   ├── 50-addons-catalog.html
│   ├── 51-addons-active.html
│   ├── 52-addons-detail.html
│   └── 53-addons-settings.html
│
├── 📂 developer/
│   ├── 54-developer-api-keys.html
│   ├── 55-developer-webhooks.html
│   └── 56-developer-logs.html
│
├── 📂 help/
│   ├── 57-help-center.html
│   ├── 58-help-article.html
│   ├── 59-help-video-tutorials.html
│   ├── 60-help-tickets.html
│   └── 61-help-ticket-detail.html
│
├── 📂 system/
│   ├── 62-error-404.html
│   ├── 63-error-500.html
│   └── 64-error-403.html
│
├── 📂 shared/
│   ├── 65-global-search-modal.html
│   └── 66-notification-center.html
│
└── DASHBOARD-PAGES-PLAN.md        ← SHU FAYL
```

---

## JAMI FAYLLAR SONI

| Papka | Fayllar soni |
|-------|-------------|
| Root (dashboard) | 3 |
| inbox/ | 3 |
| contacts/ | 6 |
| visitors/ | 3 |
| automation/ | 4 |
| team/ | 4 |
| team-chat/ | 3 |
| analytics/ | 11 |
| knowledge-base/ | 5 |
| settings/ | 5 |
| billing/ | 4 |
| addons/ | 4 |
| developer/ | 3 |
| help/ | 5 |
| system/ | 3 |
| shared/ | 2 |
| **JAMI** | **68 ta HTML fayl** |

---

## ROLE ACCESS MATRIX

| Sahifa / Modul | Admin | Manager | Operator (Agent) |
|----------------|-------|---------|-------------------|
| Dashboard | ✅ To'liq | ✅ To'liq | ✅ To'liq |
| Inbox | ✅ To'liq | ✅ To'liq | ✅ O'z chatlari |
| Contacts | ✅ To'liq (delete) | ✅ CRUD | ⚠️ O'z kontaktlari |
| Contacts Import/Export | ✅ | ✅ | ❌ Ko'rinmaydi |
| Online Visitors | ✅ To'liq | ✅ Ko'rish | ✅ Ko'rish |
| Automation | ✅ To'liq | ✅ To'liq | ❌ Ko'rinmaydi |
| Team — Agents | ✅ To'liq (delete) | ✅ CRUD | ⚠️ Read-only |
| Team — Roles | ✅ To'liq | ⚠️ Ko'rish | ❌ Ko'rinmaydi |
| Team — Invitations | ✅ To'liq | ✅ Invite | ❌ Ko'rinmaydi |
| Team Chat | ✅ To'liq | ✅ Own rooms | ✅ Public rooms |
| Analytics — Overview | ✅ To'liq | ✅ To'liq | ❌ → My Stats |
| Analytics — My Stats | — | — | ✅ Faqat o'zi |
| Analytics — Custom | ✅ Create | ✅ Create | ❌ |
| Analytics — Export | ✅ | ✅ | ❌ |
| Knowledge Base | ✅ To'liq (delete) | ✅ CRUD | ❌ Ko'rinmaydi |
| Settings — Workspace | ✅ | ❌ | ❌ |
| Settings — Widget | ✅ | ❌ | ❌ |
| Settings — Security | ✅ | ❌ | ❌ |
| Settings — Notifications | ✅ | ✅ | ✅ |
| Settings — Profile | ✅ | ✅ | ✅ |
| Billing | ✅ To'liq | ⚠️ Ko'rish | ❌ → 403 |
| Add-ons | ✅ To'liq | ⚠️ Ko'rish | ⚠️ Read-only catalog |
| Developer | ✅ To'liq | ⚠️ Read-only | ❌ → 403 |
| Help & Support | ✅ | ✅ | ✅ |
| Error Pages | ✅ | ✅ | ✅ |
| Global Search | ✅ | ✅ | ✅ |
| Notifications | ✅ | ✅ | ✅ |

---

## HAR BIR FAYL TAFSILOTI

---

### 📄 01-dashboard.html — Asosiy Dashboard (Overview)
> **Update (split):** `01-dashboard.html` endi moslik/role tanlash sahifasi. Asosiy dashboard kontenti `01-dashboard-admin.html` (Admin/Manager) va `02-dashboard-agent.html` (Agent) ga ajratildi.

**Status:** ✅ Mavjud — yangilanishi kerak  
**Manba:** `10-dashboard-layout.md`  
**Role:** Admin, Manager, Operator — barchasi ko'radi  

**Ichida nima bo'ladi:**
- App Shell: Header (logo, search Ctrl+K, status toggle, bell 🔔, user avatar+menu)
- Sidebar: 14 ta menu item (active = Dashboard)
- Main Content:
  - Page title: "Dashboard" 24px + "Bugungi umumiy ko'rinish"
  - 4 ta Metric Card (row): Jami chatlar, Faol chatlar, O'rtacha javob, Mijoz qoniqishi
  - 2 ta Chart placeholder: Chat faolligi (line), Kanallar bo'yicha (pie)
  - Eng yaxshi operatorlar (leaderboard)
  - So'nggi chatlar (last 5 chats table)

**Linklar:**
- Sidebar → har bir modulga (02–66)
- Search → 65-global-search-modal.html
- Bell → 66-notification-center.html
- User Menu → Settings, Profile, Help, Logout

---

### 📂 inbox/ — Inbox (Live Chat)

#### 📄 02-inbox.html — Inbox Chat List
**Manba:** `11-inbox-chat.md`  
**Role:** Barchasi (Operator o'ziga assign bo'lganlarni ko'radi)

**Ichida nima bo'ladi:**
- App Shell (sidebar active = Inbox)
- 2-panel layout: Chat List (360px) + Chat Window (fluid)
- Chat List:
  - Filter tabs: Active | Assigned to me | Closed
  - Search input: "Chat yoki mijoz qidirish..."
  - Chat cards: Avatar, name, last message preview, timestamp, unread badge, channel icon
  - Status dot (online/offline)
- Chat Window (default empty state):
  - "Chatni tanlang" placeholder with illustration
  - Yoki birinchi chatni avtomatik ochish
- Chat input area: Textarea, emoji, attach, canned responses, send button

**Linklar:**
- Chat card click → 03-inbox-chat-open.html
- 📎 Attach → file upload modal (inline)
- Quick/Canned → popup inline

---

#### 📄 03-inbox-chat-open.html — Chat Oynasi (Ochiq Chat)
**Manba:** `11-inbox-chat.md`, `12-inbox-advanced.md`  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- 3-panel layout: Chat List (360px) + Chat Window (fluid) + Info Sidebar (300px)
- Chat Window:
  - Chat header: Visitor name, status, channel, assign button, resolve button, actions (...) menu
  - Message bubbles: Visitor (chap, gray bg), Agent (o'ng, primary bg)
  - Timestamps, read receipts, typing indicator
  - Chat input: Rich text, emoji picker, file attach, canned responses
- Info Sidebar (o'ng panel):
  - Customer info card: name, email, phone, location
  - Tags section: tag list + "+" add button
  - Private notes: textarea for internal notes
  - Conversation details: assigned to, created at, channel
  - Customer activity: current page, referrer, device
  - Chat history: previous conversations list

**Modallar (ichida):**
- Transfer Chat modal (500px): Agent tanlash, note
- Resolve Chat modal (450px): Confirm + optional feedback request
- Add Tag modal (400px)
- Add Note modal (500px)
- File Upload drag-drop zone

**Linklar:**
- Visitor name → 06-contact-profile.html
- Transfer → agent list → 18-team-agents.html
- "Resolve" → chat closes → 02-inbox.html (Closed tab)

---

#### 📄 04-inbox-info-sidebar.html — Info Sidebar (Alohida)
**Manba:** `12-inbox-advanced.md` (SCR-I02-06)  
**Role:** Admin — block/delete; boshqalar — view/edit

**Ichida nima bo'ladi:**
- Standalone info sidebar component (300px)
- Sections:
  1. Customer Info (name, email, phone, company, location, custom fields)
  2. Tags (editable tag list, color badges)
  3. Private Notes (textarea, timestamped notes list)
  4. Conversation Details (assigned agent, created, channel, duration)
  5. Current Activity (current URL, browser, OS, IP)
  6. Chat History (previous conversations, clickable)
- Quick Actions: Block visitor (Admin only), Delete chat (Admin only)
- Canned Responses panel (400×500px popup)

**Linklar:**
- "Barcha chatlarni ko'rish" → 02-inbox.html
- Customer name → 06-contact-profile.html
- Assigned agent → 19-team-agent-profile.html

---

### 📂 contacts/ — Contacts CRM

#### 📄 05-contacts-list.html — Kontaktlar Ro'yxati
**Manba:** `20-contacts-crm.md` (SCR-CT01)  
**Role:** Admin (delete), Manager (CRUD), Operator (o'z kontaktlari)

**Ichida nima bo'ladi:**
- Page title: "Kontaktlar" + "Jami: 1,247 kontakt"
- View toggle: Table view | Card view (SCR-CT01-S01)
- Table Controls:
  - Search: "Ism, email yoki telefon..."
  - Filters: Status (All/Active/Inactive), Channel, Tags, Date range
  - Bulk actions: Select all, Delete selected, Export selected, Tag
  - "+ Kontakt qo'shish" Primary button
- Table Columns: Checkbox, Avatar+Name, Email, Phone, Channel, Tags, Last chat, Created, Actions (...)
  - Actions menu: View, Edit, Delete (Admin only)
- Card View variant: 3-column grid, contact cards (240×200px)
- Pagination: 25 rows per page

**Linklar:**
- Row click / "View" → 06-contact-profile.html
- "Import" → 10-contacts-import-export.html
- "Export" → 10-contacts-import-export.html
- "Segments" → 09-contacts-segments.html
- "Organizations" → 07-contacts-organizations.html

---

#### 📄 06-contact-profile.html — Kontakt Profili
**Manba:** `20-contacts-crm.md` (SCR-CT02)  
**Role:** Admin/Manager — to'liq, Operator — o'z kontaktlari

**Ichida nima bo'ladi:**
- Slide-in panel (800px) yoki alohida sahifa
- Header: Back ← Kontaktlar, Avatar (64px), Name, Status, Edit/Delete buttons
- Tabs: Overview | Conversations | Notes | Activity
- **Overview tab:**
  - Contact info: Email, phone, company, position, location, language
  - Custom fields (editable)
  - Tags
  - Social links
- **Conversations tab:**
  - List of past chats with date, channel, status, duration
  - Click → 03-inbox-chat-open.html
- **Notes tab:**
  - Internal notes (textarea + timestamped list)
  - Agent attribution
- **Activity tab:**
  - Timeline: all events (chats, page visits, form fills, email opens)
  - Filterable by type

**Linklar:**
- "Barcha chatlar" click → 03-inbox-chat-open.html (specific chat)
- "Delete" → confirm modal → 05-contacts-list.html
- Back ← → 05-contacts-list.html

---

#### 📄 07-contacts-organizations.html — Tashkilotlar
**Manba:** `20-contacts-crm.md` (SCR-CT03)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Page title: "Tashkilotlar" + count
- Table: Logo, Name, Domain, Contacts count, Last activity, Actions
- Search + filters
- "+ Tashkilot qo'shish" button
- Bulk actions

**Linklar:**
- Row click → 08-organization-detail.html
- Contact count click → 05-contacts-list.html (filtered)

---

#### 📄 08-organization-detail.html — Tashkilot Tafsiloti
**Manba:** `20-contacts-crm.md` (SCR-CT03-S01)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Slide-in panel (800px)
- Header: Back ←, Logo (64px), Name, Domain, Edit/Delete
- Organization info: Industry, size, website, address
- Members list: Contacts belonging to this org (table)
- Activity timeline: All org interactions
- Custom fields

**Linklar:**
- Members → 06-contact-profile.html
- Back ← → 07-contacts-organizations.html

---

#### 📄 09-contacts-segments.html — Segmentlar
**Manba:** `20-contacts-crm.md` (SCR-CT05)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Page title: "Segmentlar"
- Segments list: Name, Contacts count, Created by, Last updated, Actions
- "+ Segment yaratish" button → Create Segment modal/page (SCR-CT05-S01, 700px)
  - Query builder: Field + Operator + Value (AND/OR logic)
  - Preview: Matching contacts count
  - Save button

**Linklar:**
- Segment row click → 05-contacts-list.html (filtered by segment)
- Create → query builder modal

---

#### 📄 10-contacts-import-export.html — Import / Export
**Manba:** `20-contacts-crm.md` (SCR-CT04, SCR-CT04-S01)  
**Role:** Admin/Manager (Operator uchun ko'rinmaydi)

**Ichida nima bo'ladi:**
- Tabs: Import | Export
- **Import tab (SCR-CT04, 4-step wizard):**
  1. Fayl yuklash (CSV/XLSX, drag-drop)
  2. Ustunlarni mapping qilish (source → target fields)
  3. Preview (first 10 rows)
  4. Confirm + Import
- **Export tab (SCR-CT04-S01):**
  - Format: CSV | XLSX
  - Fields: Select fields to export (checkboxes)
  - Filters: Segment, date range
  - "Export" button → download

---

### 📂 visitors/ — Online Visitors

#### 📄 11-online-visitors.html — Online Visitorlar Ro'yxati
**Manba:** `21-online-visitors.md` (SCR-OV01)  
**Role:** Admin/Manager — to'liq, Operator — ko'rish

**Ichida nima bo'ladi:**
- Page title: "Online Visitors" + "Hozir saytda: 34 kishi"
- Header: Auto-refresh toggle (5s/15s/30s), View toggle (List/Grid/Map)
- Filter tabs: Online | Offline | All
- Visitor cards/table:
  - Avatar/initials, Name (yoki "Anonymous"), Country flag, Current page URL
  - Duration (on site), Pages viewed, Referrer, Browser/OS
  - Actions: "Chat boshlash" Primary button, "Ko'rish" Ghost button
- Real-time updates: New visitor = highlight animation, Left = fade out
- Stats bar: Total today, New visitors, Returning, Avg time on site

**Linklar:**
- "Chat boshlash" → Proactive Chat modal (500px) → 03-inbox-chat-open.html
- "Ko'rish" → 12-visitor-profile.html
- "Map" toggle → 13-visitors-map.html

---

#### 📄 12-visitor-profile.html — Visitor Profili
**Manba:** `21-online-visitors.md` (SCR-OV02)  
**Role:** Admin/Manager — to'liq, Operator — ko'rish

**Ichida nima bo'ladi:**
- Slide-in panel (800px)
- Header: Name/Anonymous, Status (online/offline), "Chat boshlash" button
- Tabs: Activity | Device | History
- **Activity tab:** Real-time page tracking (current URL, time on page, scroll depth)
- **Device tab:** Browser, OS, screen resolution, IP, ISP, location
- **History tab:** Previous visits (date, pages, duration, chat history)
- Proactive Chat modal (500px, SCR-OV03): Message template, delay settings

**Linklar:**
- "Chat boshlash" → 03-inbox-chat-open.html (yangi chat)
- Chat history → 03-inbox-chat-open.html (eski chat)
- Back ← → 11-online-visitors.html

---

#### 📄 13-visitors-map.html — Geographic Map View
**Manba:** `21-online-visitors.md` (SCR-OV04)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Full-width map (OpenStreetMap/Mapbox)
- Visitor markers: Clustered dots, color by status (green=active, gray=idle)
- Click marker → mini visitor info popup
- Sidebar (320px): Top countries list, visitor count by region
- Filters: Country, status

**Linklar:**
- Marker click → 12-visitor-profile.html
- Back → 11-online-visitors.html

---

### 📂 automation/ — Automation & Ish Vaqti

#### 📄 14-automation-working-hours.html — Ish Vaqti
**Manba:** `13-automation.md` (Tab 1: Ish Vaqti)  
**Role:** Admin/Manager (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Page title: "Automation"
- Tabs: **Ish Vaqti** (active) | Auto-Reply | Triggers | Greetings
- Content (split layout: settings 600px + preview 400px):
  - Toggle: "Ish vaqtini yoqish" switch
  - Hafta kunlari schedule (Mon-Sun):
    - Har bir kun: toggle + start time + end time
    - Copy to all days button
  - Timezone selector dropdown
  - Holiday/Exceptions: Date picker + label
  - Preview card: "Live Widget" mockup showing current status
- Save button

**Linklar:**
- Tab clicks → 15, 16, 17
- Save → confirmation toast

---

#### 📄 15-automation-auto-reply.html — Avtomatik Javob
**Manba:** `13-automation.md` (Tab 2: Auto-Reply)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: Ish Vaqti | **Auto-Reply** (active) | Triggers | Greetings
- Content:
  - Toggle: "Auto-reply yoqish" switch
  - "Ish vaqtida" message textarea + variable insertion ({name}, {queue_position})
  - "Ish vaqtidan tashqarida" message textarea
  - Delay: "Javob kechikishi" input (seconds)
  - Preview: Widget mockup showing auto-reply message
- Save button

**Linklar:**
- Tab clicks → 14, 16, 17

---

#### 📄 16-automation-triggers.html — Triggerlar
**Manba:** `13-automation.md` (Tab 3: Triggers)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: Ish Vaqti | Auto-Reply | **Triggers** (active) | Greetings
- Content:
  - "+ Yangi trigger" Primary button
  - Triggers list/table:
    - Name, Condition (visitor spent >30s, page URL contains...), Action (show message, auto-assign), Status toggle, Actions (edit/delete)
  - Empty state: "Hali trigger yo'q"
- New Trigger Modal (560px):
  - Name input
  - Condition builder: Type (time, URL, scroll, referrer) + Operator + Value
  - Action: Show popup message | Auto-assign agent | Send auto-message
  - Message template textarea
  - Target: All pages | Specific URL pattern
  - Active toggle
  - Save / Cancel

**Linklar:**
- Tab clicks → 14, 15, 17

---

#### 📄 17-automation-greetings.html — Kutib Olish Xabarlari
**Manba:** `13-automation.md` (Tab 4: Greetings)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: Ish Vaqti | Auto-Reply | Triggers | **Greetings** (active)
- Content:
  - "+ Yangi greeting" button
  - Greetings list:
    - Name, Message preview, Target pages, Status toggle, Actions
  - Greeting editor:
    - Message textarea with emoji
    - Display rules: Page URL, visitor type (new/returning), device
    - Delay: seconds after page load
    - Design: Button style, position, color
    - Preview mockup

**Linklar:**
- Tab clicks → 14, 15, 16

---

### 📂 team/ — Jamoa Boshqaruvi

#### 📄 18-team-agents.html — Agentlar Ro'yxati
**Manba:** `14-team.md` (Tab 1: Agents, SCR-T01)  
**Role:** Admin (delete), Manager (CRUD), Operator (read-only)

**Ichida nima bo'ladi:**
- Page title: "Jamoa"
- Tabs: **Agents** (active) | Roles | Invitations
- Content:
  - Search: "Agent nomi yoki email..."
  - Filters: Role (All/Admin/Manager/Operator), Status (Online/Offline/Away)
  - "+ Agent qo'shish" Primary button (Admin/Manager)
  - Agents Table:
    - Avatar+Name, Email, Role badge, Status dot+label, Chats today, Avg response, Last active, Actions (...)
    - Actions: View profile, Edit, Suspend (Admin), Delete (Admin only)
  - Stats row: Total agents, Online now, Away, Offline

**Modallar:**
- Add/Invite Agent modal: Name, Email, Role dropdown, Departments, "Taklif yuborish"
- Suspend Confirm modal
- Delete Confirm modal (Admin only)

**Linklar:**
- Row click / "View" → 19-team-agent-profile.html
- "+ Agent qo'shish" → invite modal → email sent
- Tab clicks → 20, 21

---

#### 📄 19-team-agent-profile.html — Agent Profili
**Manba:** `14-team.md` (SCR-T01-S01 through S06)  
**Role:** Admin — to'liq, Manager — ko'rish/edit, Operator — o'z profili

**Ichida nima bo'ladi:**
- Header: Back ← Jamoa, Avatar (80px), Name, Role badge, Status, Edit button
- Info sections:
  - Contact: Email, phone
  - Role & Permissions: Current role, last changed
  - Statistics: Total chats, Avg response time, CSAT score, Resolution rate
  - Activity: Online hours today, Last login, Chats today chart
  - Assigned departments/teams
- Edit Agent modal: Name, email, role change, departments, avatar upload
- Performance chart: Mini charts (line/bar)

**Linklar:**
- "Chatlarini ko'rish" → 02-inbox.html (filtered by agent)
- "Statistika" → 28-analytics-operator-detail.html
- Back ← → 18-team-agents.html

---

#### 📄 20-team-roles.html — Rollar Boshqaruvi
**Manba:** `14-team.md` (Tab 2: Roles, SCR-T02)  
**Role:** Admin (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Tabs: Agents | **Roles** (active) | Invitations
- Content:
  - Default roles list: Admin, Manager, Operator (not editable, details shown)
  - "+ Custom rol yaratish" button
  - Roles table: Name, Description, Agents count, Permissions summary, Actions (edit/delete)
  - Permissions Matrix (SCR-T02-S02):
    - Table: Modules (rows) × Permissions (columns: View, Create, Edit, Delete)
    - Checkboxes for each permission
- Create Custom Role modal (SCR-T02-S01):
  - Name, Description, Clone from existing role, Permissions checkboxes

**Linklar:**
- Tab clicks → 18, 21
- Agents count → 18-team-agents.html (filtered by role)

---

#### 📄 21-team-invitations.html — Takliflar
**Manba:** `14-team.md` (Tab 3: Invitations, SCR-T03)  
**Role:** Admin/Manager (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Tabs: Agents | Roles | **Invitations** (active)
- Content:
  - "+ Yangi taklif" Primary button
  - Invitations table: Email, Role, Invited by, Sent date, Status (Pending/Accepted/Expired), Actions (Resend/Cancel)
  - Empty state: "Hech kim taklif qilinmagan"
  - Invite modal: Email(s), Role selection, Optional message

**Linklar:**
- Tab clicks → 18, 20
- "Accepted" → 18-team-agents.html

---

### 📂 team-chat/ — Ichki Jamoa Chat

#### 📄 22-team-chat.html — Team Chat Inbox
**Manba:** `22-team-chat.md` (SCR-TC01)  
**Role:** Barchasi (Operator: public rooms only)

**Ichida nima bo'ladi:**
- Full-height panel layout (no sidebar padding, chat fills content area)
- Left panel (280px): Channel sidebar
  - Sections: DM | Rooms
  - DM list: Agent avatar + name + last message + timestamp + unread badge
  - Rooms list: # icon + room name + unread badge
  - "+ New" button → New DM/Room modal (SCR-TC01-S01, 500px)
    - Tab: DM (agent search) | Room (name, description, public/private toggle)
- Right panel (fluid): Chat area
  - Room/DM header: Name, members count, settings gear, pin, search
  - Messages: Agent bubbles with avatar, name, timestamp
  - Features: @mentions (autocomplete), emoji reactions, file sharing, link preview
  - Thread replies (inline)
  - Message input: Text, emoji, attach, @mention, send
  - Message actions (hover): Reply, React, Pin, Edit (own), Delete (own/admin)

**Linklar:**
- Settings gear → 23-team-chat-room-settings.html
- Notification bell → 24-team-chat-notifications.html
- Agent avatar click → 19-team-agent-profile.html

---

#### 📄 23-team-chat-room-settings.html — Room Sozlamalari
**Manba:** `22-team-chat.md` (SCR-TC02, 600px)  
**Role:** Admin (to'liq), Manager (own rooms), Operator (ko'rish)

**Ichida nima bo'ladi:**
- Modal/page (600px):
  - Tabs: General | Members | Permissions
  - **General:** Room name, description, avatar, public/private toggle, archive toggle
  - **Members:** Members list with role badges, "+ Add member" search, Remove member
  - **Permissions:** Who can post, who can mention @all, who can pin messages
  - "Delete room" button (Admin only, dangerous zone)

**Linklar:**
- Back → 22-team-chat.html
- Members → 19-team-agent-profile.html

---

#### 📄 24-team-chat-notifications.html — Chat Bildirishnoma Sozlamalari
**Manba:** `22-team-chat.md` (SCR-TC03)  
**Role:** Barchasi (o'z sozlamalari)

**Ichida nima bo'ladi:**
- Per-room notification settings:
  - All messages | Mentions only | Muted
  - Desktop notifications toggle
  - Sound toggle
  - Email digest (daily/weekly/off)
- Global defaults section

**Linklar:**
- Back → 22-team-chat.html

---

### 📂 analytics/ — Analitika

#### 📄 25-analytics-overview.html — Umumiy Ko'rinish
**Manba:** `15-analytics.md`, `25-advanced-analytics.md` (SCR-AN01)  
**Role:** Admin/Manager (Operator → 35-analytics-my-stats.html redirect)

**Ichida nima bo'ladi:**
- Page title: "Analitika"
- Date range selector: Last 7 days | 30 days | This month | Custom
- Export button: "Export PDF/CSV"
- Tabs: **Overview** (active) | Responsiveness | Operators | SLA | Channels | Segments | Tags | Custom
- 4 KPI Cards: Total Chats (1,247 +18%), Avg First Response (1m 23s -15%), CSAT Score (4.7/5 +0.3), Resolution Rate (87% +5%)
- Charts (2-column grid):
  - Chats Over Time (line chart, 30 days)
  - Chats by Channel (pie: Website 45%, FB 30%, TG 15%, WA 10%)
  - Response Time Distribution (bar chart)
  - Top Operators (horizontal bar)

**Linklar:**
- Tab clicks → 26-34
- Operator bar click → 28-analytics-operator-detail.html
- Export → download

---

#### 📄 26-analytics-responsiveness.html — Javob Berish Tezligi
**Manba:** `25-advanced-analytics.md` (SCR-AN06)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: Overview | **Responsiveness** (active) | ...
- 5 KPI Cards: First Response (1m 23s), Avg Response (45s), Max Response (12m 34s), Missed Chats (8), Response Rate (96.8%)
- Charts:
  - Response Time Breakdown histogram (color-coded: green <1m, yellow 1-2m, orange 2-5m, red >5m)
  - Response Time by Hour heatmap (days × hours, green→red)
- Tables: Fastest Operators | Slowest Operators (split view)

**Linklar:**
- Operator names → 28-analytics-operator-detail.html
- Tab clicks

---

#### 📄 27-analytics-operators.html — Operatorlar Performance
**Manba:** `25-advanced-analytics.md` (SCR-AN07)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: Overview | Responsiveness | **Operators** (active) | ...
- Search + Filters: Team, Status, Sort by
- Operators Table: Avatar+Name, Chats Handled, Avg Response Time, CSAT, Resolution Rate, Online Time, Actions
- "Compare operators" button → comparison modal
- Top Performers section: 3 podium-style cards (gold/silver/bronze)

**Linklar:**
- Row click → 28-analytics-operator-detail.html
- Compare → modal with side-by-side metrics
- Export → download

---

#### 📄 28-analytics-operator-detail.html — Operator Tafsiloti
**Manba:** `25-advanced-analytics.md` (SCR-AN07-S01)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Header: Back ← Operators, Avatar (80px), Name, Role, Online status
- Date range selector
- KPI Cards: Chats handled, Avg response, CSAT, Resolution rate, Online hours
- Charts: Performance over time (line), CSAT trend, Response time trend
- Recent chats table: Last 20 chats with details
- Comparison with team average

**Linklar:**
- Back ← → 27-analytics-operators.html
- Chat row → 03-inbox-chat-open.html

---

#### 📄 29-analytics-sla.html — SLA Monitoring
**Manba:** `25-advanced-analytics.md` (SCR-AN08)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: ... | **SLA** (active) | ...
- SLA compliance metrics:
  - First response SLA: Target <2m, Current 1m 23s, Compliance 94%
  - Resolution SLA: Target <4h, Current 2h 15m, Compliance 89%
- SLA trend chart (line, target line overlay)
- Breached chats table: Chats that missed SLA targets
- By agent breakdown

**Linklar:**
- Breached chat → 03-inbox-chat-open.html
- Agent name → 28-analytics-operator-detail.html

---

#### 📄 30-analytics-channels.html — Kanallar Analitikasi
**Manba:** `25-advanced-analytics.md` (SCR-AN09)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: ... | **Channels** (active) | ...
- Channel comparison: Website, Facebook, Telegram, WhatsApp, Instagram, Email
- Per-channel KPIs: Volume, Avg response, CSAT, Resolution rate
- Channel trend chart (multi-line)
- Channel distribution pie/donut chart

---

#### 📄 31-analytics-segments.html — Segmentlar Analitikasi
**Manba:** `25-advanced-analytics.md` (SCR-AN10)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: ... | **Segments** (active) | ...
- Segment comparison table: Name, Contacts, Chats, CSAT, Avg response
- Create segment for analytics → modal (600px)
- Segment performance charts

---

#### 📄 32-analytics-tags.html — Teglar Analitikasi
**Manba:** `25-advanced-analytics.md` (SCR-AN11)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Tabs: ... | **Tags** (active) | ...
- Tag cloud visualization
- Tags table: Tag name, Usage count, Avg response, CSAT, Trend
- Tag trend chart

---

#### 📄 33-analytics-custom-dashboard.html — Custom Dashboard
**Manba:** `25-advanced-analytics.md` (SCR-AN12)  
**Role:** Admin/Manager (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Tabs: ... | **Custom** (active)
- "Dashboard yaratish" button → Create modal (500px): Name, description
- Custom dashboards list: Name, created by, widgets count, last updated
- Dashboard canvas (when selected):
  - Drag-drop widget grid
  - Available widgets: KPI card, Line chart, Bar chart, Pie chart, Table, Heatmap
  - Each widget: Configure (metric, date range, filter)
  - "Widget qo'shish" button
  - Save layout button

---

#### 📄 34-analytics-export.html — Hisobotlar & Export
**Manba:** `25-advanced-analytics.md` (SCR-AN13)  
**Role:** Admin/Manager (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Export center:
  - Report type: Overview, Operators, SLA, Channels, Custom
  - Format: CSV, XLSX, PDF
  - Date range picker
  - Fields selection (checkboxes)
  - "Export" button → download
- Scheduled reports:
  - "+ Schedule" button
  - Scheduled list: Name, Type, Frequency (daily/weekly/monthly), Recipients, Next run, Actions
  - Schedule modal (700px): Type, Format, Frequency, Email recipients, Filters

---

#### 📄 35-analytics-my-stats.html — Mening Statistikam (Operator uchun)
**Manba:** `15-analytics.md` (My Stats tab)  
**Role:** ✅ Faqat Operator (Agent) ko'radi

**Ichida nima bo'ladi:**
- Page title: "Mening statistikam"
- Date range selector
- Personal KPI Cards: My chats today, My avg response, My CSAT, My resolution rate
- Charts: My performance trend (line), My response time distribution
- My recent chats table
- Comparison with team average (anonymized)
- Goals/Targets section: Personal targets vs actual

> **Muhim:** Bu sahifa Operator/Agent uchun Analytics bo'limining **yagona sahifasi**. Sidebar da "Analytics" bosganda Operator shu sahifaga tushadi.

---

### 📂 knowledge-base/ — Bilimlar Bazasi

#### 📄 36-kb-dashboard.html — KB Boshqaruv Paneli
**Manba:** `23-knowledge-base.md` (SCR-KB01)  
**Role:** Admin/Manager (Operator ko'rmaydi)

**Ichida nima bo'ladi:**
- Page title: "Bilimlar bazasi" + "Jami 47 maqola, 12 kategoriya"
- Actions: "+ Maqola yaratish" Primary, "Sozlamalar" Ghost
- 4 Quick Stats Cards: Total Articles (47), Total Views (12,453), Helpful Rate (87%), Categories (12)
- Articles Table:
  - Search, Filters (Status: Published/Draft, Category, Sort)
  - Columns: Title, Category badge, Status badge, Views, Helpful ratio, Updated, Actions (...)
  - Actions: Edit, Duplicate, Delete (Admin only)
  - Pagination: 15 rows

**Linklar:**
- "+ Maqola yaratish" → 37-kb-article-editor.html
- Row Edit → 37-kb-article-editor.html (edit mode)
- "Sozlamalar" → 39-kb-settings.html
- Categories in filter → 38-kb-categories.html

---

#### 📄 37-kb-article-editor.html — Maqola Yaratish/Tahrirlash
**Manba:** `23-knowledge-base.md` (SCR-KB02)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- Full-width editor (no sidebar, maximize space):
  - Header (sticky): Back ← KB, Title input (32px, no border), Actions: Preview, Draft, Publish
  - Metadata sidebar (left, 240px, sticky):
    - Featured image upload (200×133px)
    - Category dropdown + "+ Yangi kategoriya"
    - Visibility: Published / Draft radio
    - Featured checkbox
    - SEO: URL slug, meta description (160 chars)
    - Related articles multi-select (max 5)
  - Content Editor (center, max-width 800px):
    - WYSIWYG toolbar: H2/H3/H4, Bold/Italic/Strike, Link/Image/Video, Lists, Quote, Code block, Callout, Emoji
    - Editor body: 16px, line-height 1.6, auto-save every 2s
    - Image drag-drop, video embed (YouTube/Vimeo)
  - Auto-save indicator: "Barcha o'zgarishlar saqlandi"
- Preview modal (900px): Rendered article
- Publish confirmation modal (500px): Title, Category, Image preview, Confirm/Cancel

**Linklar:**
- Back ← → 36-kb-dashboard.html
- "Nashr qilish" → publish confirm → 36-kb-dashboard.html
- Preview → modal (inline)

---

#### 📄 38-kb-categories.html — Kategoriyalar Boshqaruvi
**Manba:** `23-knowledge-base.md` (SCR-KB03)  
**Role:** Admin (Manager ko'rish)

**Ichida nima bo'ladi:**
- Page title: "Kategoriyalar"
- "+ Kategoriya qo'shish" button
- Categories list/grid:
  - Icon/Emoji, Name, Description, Articles count, Order (drag to reorder), Actions (edit/delete)
- Create/Edit Category modal (500px):
  - Name, Description, Icon/Emoji picker, SEO slug, Parent category (for nesting)
- Delete confirm modal (with article reassignment)

**Linklar:**
- Articles count → 36-kb-dashboard.html (filtered)
- Back → 36-kb-dashboard.html

---

#### 📄 39-kb-settings.html — KB Sozlamalari
**Manba:** `23-knowledge-base.md` (SCR-KB04)  
**Role:** Admin only

**Ichida nima bo'ladi:**
- Tabs (6 sub-tabs): General | Appearance | Public Portal | Social | Navigation | Integrations
- **General:** KB name, description, default language, feedback toggle
- **Appearance:** Logo, brand color, custom CSS, font selection
- **Public Portal:** Enable/disable, custom domain, homepage layout
- **Social:** Social sharing buttons, Open Graph settings
- **Navigation:** Menu structure, footer links, breadcrumb settings
- **Integrations:** Chat widget in KB, analytics tracking code, third-party integrations

---

#### 📄 40-kb-analytics.html — KB Analitikasi
**Manba:** `23-knowledge-base.md` (SCR-KB05)  
**Role:** Admin/Manager

**Ichida nima bo'ladi:**
- KPI Cards: Total views, Unique visitors, Avg time on page, Bounce rate
- Charts: Views over time (line), Top articles (bar), Search queries (table)
- Helpful/Not helpful ratio per article
- Failed searches: Terms with no results → content gap analysis
- Export button

---

### 📂 settings/ — Sozlamalar

#### 📄 41-settings-workspace.html — Workspace Sozlamalari
**Manba:** `16-settings.md` (Tab 1: Workspace)  
**Role:** Admin only

**Ichida nima bo'ladi:**
- Page title: "Sozlamalar"
- Tabs: **Workspace** (active) | Widget | Security | Notifications | Profile
- Content (max-width 800px):
  - Company info: Name, Logo upload, Color scheme, Timezone, Language
  - Chat settings: Max concurrent chats per agent, Auto-assign rules, Default greeting
  - Business hours (link to Automation)
  - Data retention: Auto-archive after X days, Auto-delete after X months
  - Danger zone: "Workspaceni o'chirish" red button (confirm modal)
- Save button

**Linklar:**
- Tab clicks → 42-45
- "Business hours" → 14-automation-working-hours.html

---

#### 📄 42-settings-widget.html — Widget Sozlamalari
**Manba:** `16-settings.md` (Tab 2: Widget)  
**Role:** Admin only

**Ichida nima bo'ladi:**
- Tabs: Workspace | **Widget** (active) | ...
- Content:
  - Widget appearance: Color, position (bottom-right/left), size, border-radius
  - Widget text: Welcome message, placeholder, offline message
  - Widget behavior: Auto-open delay, mobile settings, pre-chat form toggle
  - Pre-chat form fields: Name, Email, Phone, Message (required/optional/hidden toggles)
  - Install code: Copy-paste snippet `<script>` tag
  - Widget test modal (560px): Preview in different states
- Live preview: Widget mockup (right side, 400px)

---

#### 📄 43-settings-security.html — Xavfsizlik
**Manba:** `16-settings.md` (Tab 3: Security)  
**Role:** Admin only

**Ichida nima bo'ladi:**
- Tabs: ... | **Security** (active) | ...
- Content:
  - 2FA: Enable/disable two-factor authentication for all users
  - Password policy: Min length, require uppercase/number/special
  - Session management: Max session duration, idle timeout
  - IP whitelist: Allowed IP addresses/ranges
  - Login history: Recent login attempts table
  - API security: Rate limits, CORS settings
  - GDPR: Data deletion requests, export user data

---

#### 📄 44-settings-notifications.html — Bildirishnoma Sozlamalari
**Manba:** `16-settings.md` (Tab 4: Notifications)  
**Role:** Barchasi (har kim o'zining sozlamalari)

**Ichida nima bo'ladi:**
- Tabs: ... | **Notifications** (active) | ...
- Content:
  - Push notifications: Enable/disable per type
  - Email notifications: New chat, assignment, mention, system alerts (toggles)
  - Sound: Enable/disable, volume, custom sound selection
  - Desktop notifications: Browser permission request
  - Quiet hours: Start/end time
  - Notification types table: Type × Channel (Push/Email/Sound) matrix of toggles

---

#### 📄 45-settings-profile.html — Shaxsiy Profil
**Manba:** `16-settings.md` (Tab 5: Profile)  
**Role:** Barchasi (har kim o'z profilini)

**Ichida nima bo'ladi:**
- Tabs: ... | **Profile** (active)
- Content:
  - Avatar upload (96px circle)
  - Full name, Display name
  - Email (read-only for non-admin)
  - Phone number
  - Bio/About (textarea, 200 chars)
  - Language preference
  - Theme: Light / Dark / System
  - Change password section: Current, New, Confirm
  - Deactivate my account (Operator only, for themselves)

---

### 📂 billing/ — Billing & To'lovlar

#### 📄 46-billing-plan.html — Tarif Rejasi
**Manba:** `17-billing.md` (Tab 1: Plan)  
**Role:** Admin (Manager ko'rish, Operator → 64-error-403.html)

**Ichida nima bo'ladi:**
- Page title: "Billing"
- Tabs: **Plan** (active) | Payment | Invoices | Usage
- Content:
  - Current plan card: Plan name (Pro), Price ($49/mo), Features list, Billing cycle, Next payment date
  - Plan comparison grid (4 columns):
    - Free ($0): 1 agent, 100 chats/mo, basic features
    - Pro ($49): 5 agents, unlimited chats, automation
    - Business ($99): 15 agents, API, advanced analytics
    - Enterprise (Custom): Unlimited, custom SLA, dedicated support
  - Feature comparison table: Rows = features, Columns = plans, Checkmarks
  - Current plan highlighted with "Sizning rejangiz" badge
- Upgrade modal (MODAL-B01, 600px): Plan selection, billing period (monthly/annual with discount), payment summary, confirm
- Downgrade modal (MODAL-B02, 520px): Warning about losing features, confirm
- Cancel modal (MODAL-B03, 520px): Reason selection, feedback, confirm with countdown

**Linklar:**
- Upgrade/Downgrade → modals
- "To'lov usuli" → 47-billing-payment.html
- Tab clicks → 47, 48, 49

---

#### 📄 47-billing-payment.html — To'lov Usullari
**Manba:** `17-billing.md` (Tab 2: Payment)  
**Role:** Admin

**Ichida nima bo'ladi:**
- Tabs: Plan | **Payment** (active) | Invoices | Usage
- Content:
  - Current payment method card: Card type icon, **** 4242, Expiry, Default badge
  - "+ To'lov usuli qo'shish" button
  - Payment methods list: Type, Last 4 digits, Expiry, Default toggle, Actions (edit/remove)
  - Add Payment modal (MODAL-B04, 560px):
    - Sub-tabs: Bank Card | Click | Payme
    - Card form: Number, Expiry, CVC, Cardholder name
    - Click/Payme: Phone number + OTP flow
- Billing address section: Country, City, Address, Zip
- Auto-renewal toggle

---

#### 📄 48-billing-invoices.html — Hisob-fakturalar
**Manba:** `17-billing.md` (Tab 3: Invoices)  
**Role:** Admin (Manager ko'rish)

**Ichida nima bo'ladi:**
- Tabs: Plan | Payment | **Invoices** (active) | Usage
- Content:
  - Invoices table: Invoice ID, Date, Amount, Status (Paid/Pending/Overdue), Actions (Download PDF, View)
  - Date range filter
  - Pagination
- Invoice Detail Drawer (DRAWER-B01, 480px, right slide):
  - Invoice header: ID, Date, Status badge
  - Line items table: Description, Qty, Unit price, Total
  - Subtotal, Tax, Total
  - Download PDF button
  - Payment status timeline

---

#### 📄 49-billing-usage.html — Foydalanish Statistikasi
**Manba:** `17-billing.md` (Tab 4: Usage)  
**Role:** Admin

**Ichida nima bo'ladi:**
- Tabs: Plan | Payment | Invoices | **Usage** (active)
- Content:
  - Usage overview cards: Agents (3/5 used), Chats (1,247/unlimited), Storage (2.3GB/10GB), API calls (8,247/50,000)
  - Progress bars for each limit
  - Usage trend chart (line, current billing period)
  - Breakdown table: Feature × Usage × Limit × Status
  - Export Usage modal (MODAL-B05, 480px): Date range, Format, Download
  - Alerts: Warning when >80% of limit

---

### 📂 addons/ — Qo'shimcha Xizmatlar

#### 📄 50-addons-catalog.html — Katalog
**Manba:** `24-addons-marketplace.md` (SCR-ADD01)  
**Role:** Admin (boshqarish), Manager (ko'rish, approval bilan aktivatsiya), Operator (read-only)

**Ichida nima bo'ladi:**
- Page title: "Qo'shimcha xizmatlar" + "Premium funksiyalarni faollashtiring"
- Actions: "Faol add-onlar" button, "Billing" link
- Category tabs: Barchasi | Communication | AI & Automation | Analytics | Team & Productivity | E-commerce
- Sort: Most popular | Price: Low→High | Newest
- Featured Banner (full-width, gradient): Promoted add-on with CTA
- Add-ons Grid (3 columns):
  - Card (360×420px): Screenshot, Logo, Name, Tagline, Rating (⭐ 4.8), Price ($49/mo), Trial badge
  - Actions: "Ko'proq" Outline → detail, "Faollashtirish" Primary
  - Badge overlays: Popular, New, Recommended

**Linklar:**
- "Ko'proq" → 52-addons-detail.html
- "Faollashtirish" → 52-addons-detail.html (activation flow)
- "Faol add-onlar" → 51-addons-active.html
- "Billing" → 46-billing-plan.html

---

#### 📄 51-addons-active.html — Faol Add-onlar
**Manba:** `24-addons-marketplace.md` (SCR-ADD02)  
**Role:** Admin

**Ichida nima bo'ladi:**
- Page title: "Faol add-onlar" + "Siz faollashtirgan qo'shimchalar"
- "← Katalogga qaytish" link
- Active Add-ons List (vertical cards, 800×120px):
  - Logo (64px), Name, Tagline, Status badge (✅ Faol / ⏸️ Paused)
  - Next billing date, Usage stats, Price
  - Actions: "Sozlamalar" → add-on settings, "Statistika" → usage, "O'chirish" → deactivate confirm
  - [...] Menu: Pause, Upgrade, Billing

**Linklar:**
- "Sozlamalar" → 53-addons-settings.html
- "← Katalogga qaytish" → 50-addons-catalog.html
- Name click → 52-addons-detail.html

---

#### 📄 52-addons-detail.html — Add-on Tafsiloti
**Manba:** `24-addons-marketplace.md` (SCR-ADD03)  
**Role:** Barchasi (ko'rish), Admin (aktivatsiya)

**Ichida nima bo'ladi:**
- Modal yoki full page (900px):
  - Header: Logo + Name + Tagline + Close (X)
  - Tabs: Overview | Features | Pricing | Reviews
  - **Overview:** Hero image/video, Description, Use cases, Screenshots carousel
  - **Features:** Checklist of features, Technical requirements
  - **Pricing:** Plans, Feature comparison, "Faollashtirish" CTA
  - **Reviews:** Rating summary (stars distribution), User reviews list, "Review yozish" button
- Activation Wizard (SCR-ADD03-S01, 600px, 4-step):
  1. Rejani tanlash (Free trial / Monthly / Annual)
  2. Sozlamalar (integration config)
  3. To'lov (if paid)
  4. Faollashtirish (success + next steps)

---

#### 📄 53-addons-settings.html — Add-on Sozlamalari
**Manba:** `24-addons-marketplace.md` (SCR-ADD04)  
**Role:** Admin

**Ichida nima bo'ladi:**
- Page for specific add-on configuration
- Tabs: General | API | Usage | Billing
- **General:** Enable/disable, basic config (varies per add-on)
- **API:** API key for this add-on, endpoints
- **Usage:** Charts showing add-on usage metrics
- **Billing:** Plan, next billing, payment method, cancel/downgrade

---

### 📂 developer/ — Developer & API

#### 📄 54-developer-api-keys.html — API Kalitlar
**Manba:** `26-developer.md` (SCR-DEV01)  
**Role:** Admin (to'liq), Manager (read-only)

**Ichida nima bo'ladi:**
- Page title: "Developer API" + "API kalitlari, webhook'lar va integratsiyalarni boshqaring"
- Tabs: **API Keys** (active) | Webhooks | Integrations | Logs
- Quick Start Guide card (collapsible): API docs link, getting started
- Plan Limits card (3 columns): API requests (8,247/50,000), Webhook endpoints (3/10), Rate limit (100 req/min)
- API Keys Table:
  - Columns: Name & Key (masked, copy button), Environment badge (Prod/Dev/Test), Last used, Status (Active/Revoked), Actions
  - Actions: Regenerate, More info, Revoke
- Create API Key modal (MODAL-DEV01, 560px):
  - Name, Environment (Prod/Dev/Test radio), Permissions (checkboxes), Expiration (30d/90d/1y/Custom)
- Key Created Success modal (MODAL-DEV02, 600px): Show full key once, copy warning
- Regenerate Confirm modal (MODAL-DEV03, 480px)
- Revoke Confirm modal (MODAL-DEV04, 480px)

**Linklar:**
- Tab clicks → 55, 56
- "API Hujjatini ko'rish" → tashqi docs link
- "Tarif rejangizni yangilash" → 46-billing-plan.html

---

#### 📄 55-developer-webhooks.html — Webhooklar
**Manba:** `26-developer.md` (SCR-DEV02)  
**Role:** Admin (to'liq), Manager (read-only)

**Ichida nima bo'ladi:**
- Tabs: API Keys | **Webhooks** (active) | Integrations | Logs
- "+ Webhook yaratish" button
- Webhooks Table:
  - Columns: Name, URL, Events (badges), Status (Active/Inactive/Error), Recent deliveries, Actions
  - Actions: Edit, Test, Delete
- Create Webhook modal (MODAL-DEV05, 640px, 2-step):
  1. Basic info: Name, URL, Secret key (auto-generate)
  2. Events selection: Checkboxes for all event types (chat.created, chat.resolved, contact.created, etc.)
- Test Webhook modal (MODAL-DEV06, 560px): Select event, Send test
- Test Success/Failed modals (MODAL-DEV07/08)

---

#### 📄 56-developer-logs.html — Webhook Loglar
**Manba:** `26-developer.md` (SCR-DEV03)  
**Role:** Admin (to'liq), Manager (read-only)

**Ichida nima bo'ladi:**
- Tabs: API Keys | Webhooks | Integrations | **Logs** (active)
- Filters: Webhook, Event type, Status (Success/Failed), Date range
- Logs Table:
  - Columns: Event, Webhook, Status (200/400/500 badges), Response time, Timestamp, Actions (View)
- Log Detail Drawer (480px, right slide):
  - Request tab: Method, URL, Headers, Body (JSON, syntax highlighted)
  - Response tab: Status, Headers, Body
  - Retry tab: Retry history, "Manual retry" button
  - Timeline: attempt history

---

### 📂 help/ — Yordam Markazi

#### 📄 57-help-center.html — Help Center Bosh sahifa
**Manba:** `29-help-support.md` (SCR-HC01)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Page title: "Yordam markazi"
- Search input (prominent, 560px): "Qanday yordam bera olamiz?"
- Popular articles quick links (6 cards)
- Categories grid (3 columns):
  - Getting Started, Inbox & Chats, Automation, Team, Analytics, Billing, API & Integrations, Widget Setup
  - Each: Icon, Title, Article count
- "Qo'llab-quvvatlashga yozish" button → 60-help-tickets.html
- Video tutorials link → 59-help-video-tutorials.html

**Linklar:**
- Category click → 58-help-article.html (article list filtered)
- Popular article → 58-help-article.html
- "Ticket yaratish" → 60-help-tickets.html
- "Video Tutorials" → 59-help-video-tutorials.html

---

#### 📄 58-help-article.html — Maqola Ko'rinishi
**Manba:** `29-help-support.md` (SCR-HC02, SCR-HC03)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Breadcrumb: Yordam Markazi > Category > Article Title
- Layout: Content (max-width 720px, centered) + TOC sidebar (200px, sticky)
- Article content: Title (28px), Author+Date, Rich content (headings, images, code blocks, callouts)
- TOC (Table of Contents): Auto-generated from H2/H3 headings, click to scroll
- Feedback: "Bu maqola foydali bo'ldimi?" 👍 / 👎
- Related articles: 3 cards at bottom
- "Muammoyingiz hal bo'lmadimi?" → 60-help-tickets.html

---

#### 📄 59-help-video-tutorials.html — Video Darsliklar
**Manba:** `29-help-support.md` (SCR-HC04)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Page title: "Video Darsliklar"
- Category tabs: Barchasi | Getting Started | Advanced | Integrations
- Video cards grid (3 columns):
  - Thumbnail (16:9, 340×190px), Play overlay, Duration badge
  - Title, Description (2 lines), Duration, Views count
- Video Player modal (MODAL-HC01, 1120px): 16:9 embed, Next/Previous, Chapters
- Featured video section (top, full-width)

---

#### 📄 60-help-tickets.html — Support Tiketlar
**Manba:** `29-help-support.md` (SCR-HC05)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Page title: "Qo'llab-quvvatlash"
- Tabs: My Tickets | Create New
- **My Tickets tab:**
  - Tickets table: ID, Subject, Status (Open/In Progress/Resolved/Closed), Priority, Created, Updated, Actions
  - Filters: Status, Priority
  - Empty state: "Tiketingiz yo'q"
- **Create New tab:**
  - Form: Subject, Category dropdown, Priority (Low/Medium/High/Critical), Description (rich text), Attachments (drag-drop), Screenshot capture
  - "Yuborish" Primary button

**Linklar:**
- Ticket row → 61-help-ticket-detail.html
- Submit → success toast → My Tickets tab

---

#### 📄 61-help-ticket-detail.html — Tiket Tafsiloti
**Manba:** `29-help-support.md` (SCR-HC06)  
**Role:** Barchasi (o'z tiketlari)

**Ichida nima bo'ladi:**
- Header: Back ← Tiketlar, Ticket #12345, Status badge, Priority badge
- Ticket info card: Subject, Category, Created, Updated, Assigned to
- Message thread:
  - User message (left): Content, attachments, timestamp
  - Support response (right): Content, attachments, timestamp
  - Internal notes (yellow bg, Admin only visible)
- Reply area: Rich text editor, Attachments, "Javob yuborish" button
- Actions: Close ticket, Reopen, Change priority

**Linklar:**
- Back ← → 60-help-tickets.html
- Attachments → download / preview modal

---

### 📂 system/ — Tizim Sahifalari

#### 📄 62-error-404.html — 404 Sahifa Topilmadi
**Manba:** `27-error-pages.md` (SCR-404)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Centered layout (640px max-width)
- QULAY CHAT logo (top center)
- Illustration (240×240px, friendly, minimalist)
- "404" badge (48px Bold, warning colors)
- Title: "Sahifa topilmadi" 32px Bold
- Description: "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan."
- Primary button: "🏠 Bosh sahifaga qaytish" → 01-dashboard.html
- Secondary link: "← Oldingi sahifaga qaytish" → browser back

---

#### 📄 63-error-500.html — 500 Server Xatosi
**Manba:** `27-error-pages.md` (SCR-500)  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Centered layout (640px max-width)
- Illustration (240×240px, server/technical issue metaphor)
- "500" badge (Error colors)
- Title: "Server xatosi" 32px Bold
- Description: "Kechirasiz, tizimda muammo yuz berdi. Jamoamiz bu muammoni hal qilmoqda."
- Primary: "Qayta yuklash" → reload page
- Secondary: "Bosh sahifaga qaytish" → 01-dashboard.html
- Support link: "Muammoni xabar qilish" → 60-help-tickets.html
- Error ID: "Xato ID: ERR-20260211-1423" monospace

---

#### 📄 64-error-403.html — 403 Ruxsat Yo'q
**Manba:** `27-error-pages.md` (SCR-403)  
**Role:** Barchasi (Operator uchun billing/developer sahifalarida)

**Ichida nima bo'ladi:**
- Centered layout (640px max-width)
- Illustration (240×240px, lock/forbidden metaphor)
- "403" badge (Error colors)
- Title: "Ruxsat yo'q" 32px Bold
- Description: "Bu sahifaga kirish uchun sizda yetarli ruxsat mavjud emas."
- Role info: "Sizning rolingiz: Operator" + "Talab qilingan: Admin yoki Manager"
- Primary: "Bosh sahifaga qaytish" → 01-dashboard.html
- Secondary: "Administratorga murojaat qilish" → 60-help-tickets.html

---

### 📂 shared/ — Umumiy Komponentlar

#### 📄 65-global-search-modal.html — Global Qidiruv (Ctrl+K)
**Manba:** `28-global-search.md`  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Modal overlay (rgba(0,0,0,0.5), backdrop blur)
- Modal (640px width, max 600px height, 80px margin-top)
- Search input (48px, auto-focus, full width)
- Loading spinner (while searching)
- Sections:
  - **Bo'sh holat:** Recent searches list + Quick Actions (Yangi chat, Kontakt, Sozlamalar, Yordam)
  - **Natijalar:** Categorized results:
    - Chatlar: Chat card (title, preview, time, status badge)
    - Kontaktlar: Contact card (name, email, phone)
    - Agentlar: Agent card (name, role, status)
    - KB Maqolalari: Article card (title, category)
    - Sahifalar: Page link (Settings > Profile, etc.)
  - Keyboard navigation: ↑↓ navigate, Enter select, Esc close
  - Highlight matching text in results
- Empty state: "Natija topilmadi" + "Boshqa so'z bilan qidiring"
- Footer: Keyboard hints — ↑↓ Navigate, ↵ Open, Esc Close

**Linklar:**
- Chat result → 03-inbox-chat-open.html
- Contact → 06-contact-profile.html
- Agent → 19-team-agent-profile.html
- KB Article → 37-kb-article-editor.html (or public KB page)
- Page → to'g'ridan-to'g'ri o'sha sahifaga

---

#### 📄 66-notification-center.html — Bildirishnomalar Markazi
**Manba:** `30-notification-center.md`  
**Role:** Barchasi

**Ichida nima bo'ladi:**
- Bell icon trigger (header component)
- Dropdown panel (420px width, max 600px height):
  - Header (sticky): Title "Bildirishnomalar", "Barchasini belgilash" link, "Sozlamalar" link
  - Filter tabs: Barchasi (12) | Chatlar (5) | Mention (3) | Jamoa (2) | Tizim (1) | Billing (1)
  - Notification items:
    - Unread: Blue tint bg (#F0F9FF), bold title
    - Read: White bg
    - Structure: Icon (40px circle, color-coded) + Title + Description + Timestamp + Actions (dot/delete)
  - 5 notification types:
    1. 💬 Chat: New chat → 02-inbox.html
    2. @ Mention: @mention → 22-team-chat.html
    3. 👥 Team: Team message → 22-team-chat.html
    4. ⚙️ System: System update → 41-settings-workspace.html
    5. 💳 Billing: Payment alert → 46-billing-plan.html
  - Empty state: "Hech qanday bildirishnoma yo'q"
- Animation: Bell shake on new notification, badge pulse

**Linklar:**
- Notification click → source page (see types above)
- "Sozlamalar" → 44-settings-notifications.html

---

## OPERATORGA (AGENT) KO'RINADIGAN SAHIFALAR

Operator/Agent login qilganda sidebar da faqat quyidagilar ko'rinadi:

```
ASOSIY:
  1. Dashboard (01-dashboard.html)
  2. Inbox (02-inbox.html) — o'ziga assign bo'lgan chatlar
  3. Contacts (05-contacts-list.html) — o'z kontaktlari
  4. Online Visitors (11-online-visitors.html) — ko'rish
  5. Team Chat (22-team-chat.html) — public rooms + DMs
  6. Analytics → My Stats (35-analytics-my-stats.html)
────────────────
SOZLAMALAR:
  7. Settings → Notifications (44-settings-notifications.html)
  8. Settings → Profile (45-settings-profile.html)
────────────────
QO'SHIMCHA:
  9. Help (57-help-center.html)
```

**Operator uchun ko'rinMAYdigan sahifalar:**
- ❌ Automation (14-17)
- ❌ Team Management — Roles, Invitations (20-21)
- ❌ Analytics — Overview, Advanced tabs (25-34)
- ❌ Knowledge Base (36-40)
- ❌ Settings — Workspace, Widget, Security (41-43)
- ❌ Billing (46-49) → 64-error-403.html
- ❌ Add-ons (50-53) → read-only catalog faqat
- ❌ Developer (54-56) → 64-error-403.html
- ❌ Contacts Import/Export (10)
- ❌ Contacts Segments (09)

**Agar Operator taqiqlangan sahifaga borsa → 64-error-403.html**

---

## SAHIFALAR ORASIDAGI BOG'LANISHLAR (NAVIGATSIYA XARITASI)

```
01-dashboard.html
├── → 02-inbox.html (Inbox sidebar click)
│   ├── → 03-inbox-chat-open.html (chat select)
│   │   ├── → 06-contact-profile.html (visitor name click)
│   │   ├── → 04-inbox-info-sidebar.html (info panel)
│   │   └── → 18-team-agents.html (transfer agent)
│   └── → 06-contact-profile.html (contact link)
│
├── → 05-contacts-list.html (Contacts)
│   ├── → 06-contact-profile.html (row click)
│   ├── → 07-contacts-organizations.html
│   │   └── → 08-organization-detail.html
│   ├── → 09-contacts-segments.html
│   └── → 10-contacts-import-export.html
│
├── → 11-online-visitors.html (Visitors)
│   ├── → 12-visitor-profile.html
│   ├── → 13-visitors-map.html
│   └── → 03-inbox-chat-open.html (proactive chat)
│
├── → 14-automation-working-hours.html (Automation)
│   ├── → 15-automation-auto-reply.html
│   ├── → 16-automation-triggers.html
│   └── → 17-automation-greetings.html
│
├── → 18-team-agents.html (Team)
│   ├── → 19-team-agent-profile.html
│   ├── → 20-team-roles.html
│   └── → 21-team-invitations.html
│
├── → 22-team-chat.html (Team Chat)
│   ├── → 23-team-chat-room-settings.html
│   └── → 24-team-chat-notifications.html
│
├── → 25-analytics-overview.html (Analytics)
│   ├── → 26-analytics-responsiveness.html
│   ├── → 27-analytics-operators.html
│   │   └── → 28-analytics-operator-detail.html
│   ├── → 29-analytics-sla.html
│   ├── → 30-analytics-channels.html
│   ├── → 31-analytics-segments.html
│   ├── → 32-analytics-tags.html
│   ├── → 33-analytics-custom-dashboard.html
│   ├── → 34-analytics-export.html
│   └── → 35-analytics-my-stats.html (Operator only)
│
├── → 36-kb-dashboard.html (Knowledge Base)
│   ├── → 37-kb-article-editor.html
│   ├── → 38-kb-categories.html
│   ├── → 39-kb-settings.html
│   └── → 40-kb-analytics.html
│
├── → 41-settings-workspace.html (Settings)
│   ├── → 42-settings-widget.html
│   ├── → 43-settings-security.html
│   ├── → 44-settings-notifications.html
│   └── → 45-settings-profile.html
│
├── → 46-billing-plan.html (Billing)
│   ├── → 47-billing-payment.html
│   ├── → 48-billing-invoices.html
│   └── → 49-billing-usage.html
│
├── → 50-addons-catalog.html (Add-ons)
│   ├── → 51-addons-active.html
│   ├── → 52-addons-detail.html
│   └── → 53-addons-settings.html
│
├── → 54-developer-api-keys.html (Developer)
│   ├── → 55-developer-webhooks.html
│   └── → 56-developer-logs.html
│
├── → 57-help-center.html (Help)
│   ├── → 58-help-article.html
│   ├── → 59-help-video-tutorials.html
│   ├── → 60-help-tickets.html
│   └── → 61-help-ticket-detail.html
│
├── → 62-error-404.html (System)
├── → 63-error-500.html
├── → 64-error-403.html
│
├── → 65-global-search-modal.html (Ctrl+K → any page)
└── → 66-notification-center.html (Bell → source pages)
```

---

## XULOSA

| Parametr | Qiymat |
|----------|--------|
| **Jami HTML fayllar** | **68 ta** |
| **Jami papkalar** | **16 ta** (+ root) |
| **Admin ko'radigan sahifalar** | 68 ta (100%) |
| **Manager ko'radigan sahifalar** | ~54 ta (~79%) |
| **Operator ko'radigan sahifalar** | ~19 ta (~28%) |
| **Modallar (inline)** | ~45+ ta (sahifalar ichida) |
| **Tashqi linklar** | Docs (external), API Docs (external) |

### Ishlash tartibi (tavsiya)

1. **01-dashboard-admin.html** + **02-dashboard-agent.html** + **01-dashboard.html (wrapper)** - dashboard split (mavjud bazadan)
2. **inbox/** — 3 fayl (eng muhim, core feature)
3. **contacts/** — 6 fayl
4. **visitors/** — 3 fayl
5. **automation/** — 4 fayl
6. **team/** — 4 fayl
7. **team-chat/** — 3 fayl
8. **analytics/** — 11 fayl
9. **knowledge-base/** — 5 fayl
10. **settings/** — 5 fayl
11. **billing/** — 4 fayl
12. **addons/** — 4 fayl
13. **developer/** — 3 fayl
14. **help/** — 5 fayl
15. **system/** — 3 fayl (error pages)
16. **shared/** — 2 fayl (global components)

> **Eslatma:** Har bir HTML faylda App Shell (Header + Sidebar) takrorlanadi. Sidebar da qaysi sahifa active bo'lsa, o'sha item `active` classga ega bo'ladi. Header har doim bir xil (logo, search, status, bell, user menu).
