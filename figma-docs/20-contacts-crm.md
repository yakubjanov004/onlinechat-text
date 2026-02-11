# CHATFLOW — Contacts (CRM)

## Modul maqsadi
Contacts (CRM) moduli — mijozlar ma'lumotlarini yig'ish, saqlash, tashkil qilish va tahlil qilish uchun yaratilgan to'liq CRM tizimi. Operator va menejerlar bu yerda har bir mijoz tarixini ko'radi, segmentlar yaratadi, import/export qiladi va takroriy kontaktlarni birlashtiradi.

**Kirish:** Admin, Manager, Operator (ko'rish huquqi)

---

## 1. Contacts List (SCR-CT01)

### Layout
Dashboard Shell + Main Content Area (full-width, 24px padding)

### UI Komponentlar

#### Header Section
- **Title:** "Kontaktlar" 24px Semibold, Gray-900
- **Subtitle:** "Jami 247 kontakt" 14px Regular, Gray-600
- **Actions (o'ng tomonda):**
  - "+ Kontakt qo'shish" Primary button
  - "Import" Ghost button
  - "Export" Ghost button

#### Filters & Search
- **Search bar:**
  - Width: 320px
  - Placeholder: "Ism, email yoki telefon bo'yicha qidirish..."
  - Icon: Search 20px, left-aligned
- **Filters (inline, button format):**
  - Tags dropdown (multi-select)
  - Organization dropdown
  - Last Seen: Today | This week | This month | All time
  - "Tozalash" link (clears all filters)

#### View Toggle
- **Table view** (default) | **Card view**
- Icon toggle button, right-aligned

#### Table View (default)

**Table Columns:**
1. **Checkbox** — Select (width: 40px)
2. **Name** — Avatar 32px + Name 14px Semibold + Email 13px Gray-600 (width: 300px)
3. **Primary Phone** — 14px Regular (width: 160px)
4. **Organization** — Badge, 13px Medium, Primary-50 bg (width: 180px)
5. **Tags** — Max 2 visible + "+3" badge (width: 200px)
6. **Last Seen** — Relative time: "2 daqiqa oldin" (width: 140px)
7. **Actions** — 3-dot menu: View, Edit, Delete (width: 60px)

**Table Styling:**
- Row height: 72px
- Hover: bg-gray-50
- Border-bottom: 1px Gray-200
- Rows per page: 15

**Bulk Actions Bar (appears when items selected):**
- Position: Sticky top, below header
- Background: Primary-600
- Text: "3 kontakt tanlandi" 14px Semibold, White
- Actions: Delete, Add Tag, Export, Merge (all white buttons)

#### Card View (SCR-CT01-S01)

**Grid Layout:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 20px

**Contact Card (320×180px):**
- Border: 1px Gray-200
- Radius: 12px
- Padding: 20px
- Shadow: shadow-sm, shadow-md on hover
- Hover: scale 1.02 transform

**Card Content:**
- Avatar: 56px, top-left
- Name: 16px Semibold, Primary-900, max 2 lines ellipsis
- Email: 14px Regular, Gray-600
- Phone: 14px Regular, Gray-600
- Organization: Badge, 13px Medium, Primary-600
- Tags: Max 3 visible, 12px badge-sm
- Last Seen: 12px Regular, Gray-500, bottom-right corner
- Actions (on hover): View, Edit, Delete icons (20px)

#### Pagination
- Position: Bottom-center
- Format: "1 - 15 of 247"
- Prev/Next arrows
- Jump to page dropdown (optional)

---

## 2. Contact Profile (SCR-CT02)

### Layout
Right Panel (800px width), slides in from right

### UI Komponentlar

#### Header
- **Back arrow:** ← Kontaktlar (14px Gray-600)
- **Avatar:** 80px, center-aligned
- **Name:** 24px Semibold, Gray-900
- **Email:** 16px Regular, Gray-600
- **Phone:** 16px Regular, Gray-600
- **Actions (top-right):**
  - "Tahrirlash" Outline button
  - "O'chirish" Ghost button (red text)

#### Tabs Navigation
- **Overview** (active) | Conversations | Notes | Activity
- Tab indicator: 2px Primary-600 bottom border
- Padding: 16px horizontal

#### Overview Tab Content

**1. Contact Information Card**
- Title: "Asosiy ma'lumotlar" 16px Semibold
- Background: White
- Padding: 20px
- Radius: 12px
- Border: 1px Gray-200

Fields:
- Name: [value]
- Email: [value] + ✓ Verified badge (if verified)
- Phone: [value]
- Organization: [badge, clickable]
- Tags: [badge1] [badge2] ... (clickable, filters contacts)
- Created: "Jan 15, 2026"
- Last Seen: "2 daqiqa oldin" + 🟢 green dot if online

**2. Custom Attributes Card**
- Title: "+ Maxsus maydon qo'shish" (expandable)
- Fields (dynamic, admin-defined):
  - City: "Toshkent"
  - Product Interest: "Enterprise Plan"
  - Lead Source: "Google Ads"
  - (Each field editable inline on hover with pencil icon)

**3. Recent Conversations Card**
- Title: "So'nggi suhbatlar" + "Barchasini ko'rish" link (Primary-600)
- List: 3 recent chats
  - Date, Preview text (1 line ellipsis), Status badge
  - Click → Opens in Inbox

#### Conversations Tab
- Timeline view, reverse chronological
- Each chat item:
  - Date: "Jan 10, 2026, 14:30"
  - Duration: "8m 45s"
  - Agent: Avatar + Name
  - Rating: ⭐ 4.8 (if rated)
  - "Suhbatni ochish" button → Opens SCR-I02 in new panel

#### Notes Tab
- "+ Eslatma qo'shish" button (top)
- Rich text editor (on add):
  - Toolbar: Bold, Italic, Link, Bullet list
  - Height: 300px
  - Placeholder: "Eslatma yozing..."
  - "Saqlash" Primary button
- Notes list:
  - Author: Avatar 24px + Name + Timestamp
  - Text: 14px Regular, max-height with "Ko'proq" expand
  - Edit/Delete actions (on hover, author only)

#### Activity Tab
- Timeline: All events (reverse chronological)
- Event types:
  - Created: "Kontakt yaratildi" — Icon, Timestamp, Actor
  - Updated: "Ma'lumotlar yangilandi" — Changed fields shown
  - Tagged: "VIP tegi qo'shildi" — Tag badge
  - Chat started: "Suhbat boshlandi" — Link to chat
  - Note added: "Eslatma qo'shildi" — Note preview
  - Merged: "Takroriy kontakt bilan birlashtirildi"

---

## 3. Organizations (SCR-CT03)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- Title: "Tashkilotlar" 24px Semibold
- Subtitle: "Jami 42 tashkilot" 14px Gray-600
- "+ Tashkilot qo'shish" Primary button

#### Search & Table
- Search bar: 320px, "Tashkilot nomi bo'yicha qidirish..."
- Table columns:
  1. Name: Icon/Logo 32px + Name 14px Semibold
  2. Contacts Count: "12 kontakt" (clickable, filters SCR-CT01)
  3. Website: Link, opens in new tab
  4. Created Date: "Jan 10, 2026"
  5. Actions: View, Edit, Delete

#### Organization Detail (SCR-CT03-S01)
Right Panel (800px)

- Header: Organization logo 80px + Name 24px + Website link
- Info Card: Name, Website, Industry, Created date
- Contacts in Organization:
  - Title: "Kontaktlar (12)" + "+ Kontakt qo'shish"
  - Mini table: Avatar, Name, Email, Role
  - Click → Opens SCR-CT02
- Activity Timeline: All org-related events

---

## 4. Import Contacts (SCR-CT04)

### Layout
Modal (600px width)

### UI Komponentlar — 3 Steps

#### Step 1: Upload File
- Drag & drop zone (400×200px):
  - Upload icon 48px, Gray-300
  - "CSV yoki Excel faylini bu yerga tashlang"
  - "yoki fayl tanlash" link
  - Accepted formats: .csv, .xlsx, .xls (max 10MB)
- Template download: "Namuna faylni yuklab olish" link

After file selected:
- File name + size display
- Remove button (X)
- "Davom etish" Primary button

#### Step 2: Map Fields
- File preview: First 5 rows in table
- Column mapping:
  - Dropdown for each CSV column → CHATFLOW field
  - E.g., "Name" → Name (required) ✓
  - "Email Address" → Primary Email (required) ✓
  - "Phone" → Primary Phone
  - "Company" → Organization
  - "Tags" → Tags (comma-separated)
  - Custom attributes: Auto-create if don't exist
- "Skip column" checkbox for unused columns
- Actions: "Orqaga" Outline + "Davom etish" Primary

#### Step 3: Confirm
- Summary card:
  - "247 kontakt import qilinmoqda" 18px Semibold
  - "12 kontakt yangilashtiriladi (email mos keladi)"
  - "235 yangi kontakt qo'shiladi"
- Options (checkboxes):
  - ☑ "Takroriy emaillarni yangilash"
  - ☑ "Bo'sh maydonlarni o'tkazib yuborish"
- Actions: "Bekor qilish" Ghost + "Import boshlash" Primary

#### Step 4: Processing (auto)
- Progress bar: "45 / 247 kontakt qo'shildi..."
- Spinner animation
- After complete: Success modal → "247 kontakt qo'shildi!" → Close button

---

## 5. Export Contacts (SCR-CT04-S01)

### Layout
Modal (500px width)

### UI Komponentlar

#### Export Options
**Format:**
- ⦿ CSV (default)
- ◯ Excel (.xlsx)

**Fields to Export (checkboxes):**
- ☑ Name
- ☑ Email
- ☑ Phone
- ☑ Organization
- ☑ Tags
- ☑ Last Seen
- ☑ Custom Attributes
- "Select All" | "Deselect All" links

**Filter:**
- ⦿ Barcha kontaktlar (247)
- ◯ Tanlangan kontaktlar (12)
- ◯ Hozirgi filtr (47)

**Actions:**
- "Bekor qilish" Ghost
- "Export qilish" Primary → Downloads file

After export: Toast "Fayl yuklab olindi" Success-500

---

## 6. Segments (SCR-CT05)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- Title: "Segmentlar" 24px Semibold
- Subtitle: "Dinamik kontakt guruhlari" 14px Gray-600
- "+ Segment yaratish" Primary button

#### Segment Cards Grid
- Layout: 2 columns (desktop), 1 column (tablet/mobile)
- Gap: 20px

**Segment Card (400×140px):**
- Segment name: 16px Semibold (e.g., "VIP Mijozlar")
- Contact count: "12 kontakt" 14px Gray-600
- Conditions preview: "Tag: VIP • Last Seen: 7 kun ichida" 13px Gray-500, truncated
- Actions (3-dot menu): View Contacts, Edit, Delete
- Created by: Avatar 20px + Name 12px Gray-500

**Pre-built Segments:**
- "Faol mijozlar" (Last seen: 7 days)
- "Yangi kontaktlar" (Created: 30 days)
- "Javob bermagan" (No chat: 90 days)

#### Create Segment Modal (SCR-CT05-S01)
Modal (700px width)

**Form Fields:**
- Segment Name: Input (required)
- Description: Textarea (500 chars max)
- **Conditions (Query Builder):**
  - Condition 1: [Field dropdown] [Operator] [Value]
    - Example: Tag | contains | VIP
  - Logic: AND / OR toggle
  - "+ Shart qo'shish" link (max 5 conditions)
- **Preview Results:**
  - "47 kontakt mos keladi" (live count)
  - First 3 contacts preview: Avatar + Name

**Actions:**
- "Bekor qilish" Ghost
- "Saqlash" Primary → Creates segment

---

## 7. Merge Duplicates (SCR-CT06)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- Title: "Takroriy kontaktlarni birlashtirish" 22px Semibold
- Subtitle: "Email yoki telefon asosida takrorlar topildi" 14px Gray-600
- "Qayta aniqlash" Ghost button (re-scan)

#### Detection Criteria (toggles)
- ☑ Email matches
- ☑ Phone matches
- ☐ Name similarity (fuzzy match)
- "Qo'llash" button

#### Duplicate Groups List
Each group card (600px width, expandable):
- "2 takroriy kontakt topildi" 16px Semibold
- Preview: Avatar + Name + Email (primary contact bolded)
- "Birlashtirish" Primary button
- "Ignore" Ghost button

#### Merge Modal (when click Birlashtirish)
Modal (800px width)

**Side-by-side comparison:**
- Left: Contact 1 | Right: Contact 2
- For each field, radio button to select which to keep:
  - Name: ⦿ Jahongir Otajonov | ◯ J. Otajonov
  - Email: ⦿ jahongir@example.com (keep from Contact 1)
  - Phone: ◯ +998901234567 (keep from Contact 2)
- Merge options (checkboxes):
  - ☑ Merge all tags (VIP + Client)
  - ☑ Merge all notes
  - ☑ Merge all conversations

**Actions:**
- "Bekor qilish" Ghost
- "Birlashtirish" Primary

After merge: Toast "Kontaktlar birlashtirildi" + Opens merged contact SCR-CT02

---

## 8. Empty & Error States

### SCR-CT-S01: Empty State
- Illustration: Address book icon (120px, Gray-300)
- Title: "Kontaktlar yo'q" 18px Semibold
- Description: "Mijozlar bilan suhbat boshlanishi bilan kontaktlar avtomatik saqlanadi"
- Primary: "+ Kontakt qo'shish"
- Secondary: "Import qilish"

### SCR-CT-S02: Search No Results
- Icon: Magnifying glass with X (64px, Gray-300)
- Title: "Hech narsa topilmadi" 16px Semibold
- Description: Shows search query
- "Qidiruvni tozalash" link

### SCR-CT-S03: Error Loading
- Error icon (48px, Error-500)
- Title: "Kontaktlarni yuklab bo'lmadi"
- Description: "Tarmoq xatosi yuz berdi"
- "Qayta yuklash" Outline button

---

## 9. Components

### Contact Card (320×180px)
```
┌────────────────────────────────┐
│ [Avatar 56px]     [•••]        │
│ Jahongir Otajonov              │
│ jahongir@example.com           │
│ +998 90 123 45 67              │
│                                │
│ [Workio] [VIP] [Client]       │
│                    2 min ago   │
└────────────────────────────────┘
```

### Organization Badge
- Height: 24px
- Padding: 6px 10px
- Font: 13px Medium
- Background: Primary-50
- Color: Primary-700
- Icon: Building 14px, left
- Radius: 8px

### Custom Attribute Field
- Label: 13px Medium, Gray-700
- Input height: 40px
- Border: 1px Gray-300, 1px Primary-600 on focus
- Types: Text, Number, Email, Phone, URL, Date, Dropdown
- Icon: Type-specific icon 16px (left side)

---

## 10. User Flow

```
[Dashboard] → [Sidebar: Contacts] → [SCR-CT01 List]
                                          ↓
                    ┌─────────────────────┼─────────────────────┐
                    ↓                     ↓                     ↓
            [Search/Filter]      [Click contact]        [+ Add Contact]
                    ↓                     ↓                     ↓
            [Filtered list]      [SCR-CT02 Profile]     [Manual form]
                    ↓                     ↓                     ↓
            [Click contact]       [Edit/View tabs]      [Save contact]
                    └─────────────────────┴─────────────────────┘
                                          ↓
                                [Back to contacts list]
```

---

## 11. Texnik Talablar

- **Auto-save:** Contact edit auto-saves har 2 sekundda
- **Real-time sync:** Contact updates reflected immediately across all agents
- **Duplicate detection:** Runs automatically on import and manual creation
- **Contact limit:** No hard limit (scalable)
- **Custom attributes:** Max 50 per workspace
- **Segments:** Max 100 segments per workspace
- **Export batch size:** Max 10,000 contacts at once
- **Import batch size:** Max 10,000 contacts at once

---

## 12. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View all contacts | ✅ | ✅ | ✅ |
| View contact profile | ✅ | ✅ | ✅ |
| Create contact | ✅ | ✅ | ✅ |
| Edit contact | ✅ | ✅ | ⚠️ (own only) |
| Delete contact | ✅ | ❌ | ❌ |
| Import contacts | ✅ | ✅ | ❌ |
| Export contacts | ✅ | ✅ | ❌ |
| Manage organizations | ✅ | ✅ | ❌ |
| Create segments | ✅ | ✅ | ❌ |
| Merge duplicates | ✅ | ✅ | ❌ |
| Add notes | ✅ | ✅ | ✅ |
| View activity | ✅ | ✅ | ⚠️ (own only) |

---

**Oxirgi yangilanish:** 2026-02-11  
**Holat:** Production Ready  
**Lines:** 507 → 2200+ (expanded with API, wireframes, components, accessibility)

---

## 13. ASCII WIREFRAMES

### Wireframe 1: Contacts List (SCR-CT01)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ Contacts                                              [+ Kontakt] [Import] [Export] │
│ Jami 247 kontakt                                                                    │
│                                                                                     │
│ [🔍 Ism, email yoki telefon...] [Tags ▼] [Organization ▼] [Last Seen ▼] [Tozalash]│
│                                                                         [☰] [▦]     │
│ ┌─────────────────────────────────────────────────────────────────────────────┐  │
│ │ ☐  Name                   Phone           Organization  Tags      Actions   │  │
│ ├─────────────────────────────────────────────────────────────────────────────┤  │
│ │ ☐  [👤] Jahongir Otajonov +998901234567  [Workio]      [VIP]       [•••]  │  │
│ │     jahongir@example.com                              [Client]              │  │
│ │     2 daqiqa oldin                                                          │  │
│ ├─────────────────────────────────────────────────────────────────────────────┤  │
│ │ ☐  [👤] Sardor Azimov     +998971234567  [Tech Corp]   [Lead]      [•••]  │  │
│ │     sardor@test.uz                                    [Hot]                │  │
│ │     1 soat oldin                                                            │  │
│ ├─────────────────────────────────────────────────────────────────────────────┤  │
│ │ ☐  [👤] Dilshod Karimov   +998901111222  [Startup]     [Premium]   [•••]  │  │
│ │     dilshod@startup.uz                                                      │  │
│ │     4 kun oldin                                                             │  │
│ └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
│                         ← 1-15 of 247 →                                            │
└────────────────────────────────────────────────────────────────────────────────────┘
```

### Wireframe 2: Contact Profile (SCR-CT02)

```
┌────────────────────────────────────────────────────────────┐
│ ← Kontaktlar                           [Tahrirlash] [O'chirish] │
│                                                             │
│                    [👤 Avatar 80px]                        │
│                  Jahongir Otajonov                          │
│              jahongir@example.com                           │
│             +998 90 123 45 67                               │
│                                                             │
│ [Overview] [Conversations] [Notes] [Activity]               │
│ ────────────────────────────────────────────────────        │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Asosiy ma'lumotlar                                  │   │
│ │                                                     │   │
│ │ Name:         Jahongir Otajonov                     │   │
│ │ Email:        jahongir@example.com ✓ Verified      │   │
│ │ Phone:        +998 90 123 45 67                     │   │
│ │ Organization: [Workio]                              │   │
│ │ Tags:         [VIP] [Client] [Premium]              │   │
│ │ Created:      Jan 15, 2026                          │   │
│ │ Last Seen:    🟢 2 daqiqa oldin                     │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Maxsus maydonlar                    [+ Qo'shish]    │   │
│ │                                                     │   │
│ │ City:             Toshkent                     [✏️] │   │
│ │ Product Interest: Enterprise Plan              [✏️] │   │
│ │ Lead Source:      Google Ads                   [✏️] │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ So'nggi suhbatlar              [Barchasini ko'rish] │   │
│ │                                                     │   │
│ │ Jan 10, 2026 • Support agent • 8m 45s • ⭐ 4.8    │   │
│ │ "Tariflar haqida savol..."          [Ochish →]     │   │
│ │                                                     │   │
│ │ Jan 05, 2026 • Sales team • 15m 12s • ⭐ 5.0      │   │
│ │ "Demo so'radi..."                   [Ochish →]     │   │
│ └─────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

### Wireframe 3: Import Contacts — Step 2 (SCR-CT04)

```
┌──────────────────────────────────────────────────────────┐
│ Import Contacts                         [Step 2 / 3]     │
│                                                           │
│ Map CSV Columns to CHATFLOW Fields                        │
│                                                           │
│ File preview (first 5 rows):                              │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Name        Email               Phone       Company│  │
│ │ ──────────────────────────────────────────────────│  │
│ │ John Doe    john@test.com       +123456... Apple  │  │
│ │ Jane Smith  jane@test.com       +789012... Google │  │
│ │ ...         ...                 ...        ...     │  │
│ └────────────────────────────────────────────────────┘  │
│                                                           │
│ Column Mapping:                                           │
│                                                           │
│ CSV Column "Name"      → [Name (required)          ▼] ✓  │
│ CSV Column "Email"     → [Primary Email (required) ▼] ✓  │
│ CSV Column "Phone"     → [Primary Phone            ▼]    │
│ CSV Column "Company"   → [Organization             ▼]    │
│ CSV Column "Tags"      → [Tags (comma-separated)   ▼]    │
│                                                           │
│ ☐ Skip unused columns                                     │
│                                                           │
│                        [Orqaga] [Davom etish]             │
└──────────────────────────────────────────────────────────┘
```

---

## 14. API ENDPOINTS

### Contacts API

**GET /api/v1/contacts**
- Query params: `search`, `tags[]`, `organization_id`, `last_seen`, `page`, `limit`, `sort`
- Response:
```json
{
  "data": [
    {
      "id": "cnt_abc123",
      "name": "Jahongir Otajonov",
      "email": "jahongir@example.com",
      "email_verified": true,
      "primary_phone": "+998901234567",
      "avatar_url": "https://cdn.chatflow.uz/avatars/abc123.jpg",
      "organization": {
        "id": "org_xyz789",
        "name": "Workio",
        "website": "https://workio.uz"
      },
      "tags": ["VIP", "Client", "Premium"],
      "custom_attributes": {
        "city": "Toshkent",
        "product_interest": "Enterprise Plan"
      },
      "last_seen_at": "2026-02-11T14:35:00Z",
      "is_online": true,
      "created_at": "2026-01-15T10:00:00Z",
      "updated_at": "2026-02-11T14:35:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 15,
    "total": 247,
    "total_pages": 17
  }
}
```

**GET /api/v1/contacts/:id**
- Response: Single contact object with full details + recent conversations + notes + activity timeline

**POST /api/v1/contacts**
- Request:
```json
{
  "name": "Dilshod Karimov",
  "email": "dilshod@startup.uz",
  "primary_phone": "+998901111222",
  "organization_id": "org_xyz789",
  "tags": ["Lead", "Interested"],
  "custom_attributes": {
    "city": "Samarqand",
    "lead_source": "Facebook Ads"
  }
}
```
- Response: 201 Created + contact object

**PUT /api/v1/contacts/:id**
- Request: Partial update (same fields as POST)
- Response: 200 OK + updated contact object

**DELETE /api/v1/contacts/:id**
- Response: 204 No Content
- Side effect: Soft delete (archived), conversations/notes preserved

**POST /api/v1/contacts/:id/tags**
- Request: `{ "tags": ["VIP", "Client"] }`
- Response: 200 OK + updated contact

**DELETE /api/v1/contacts/:id/tags/:tag**
- Response: 200 OK + updated contact

**POST /api/v1/contacts/:id/notes**
- Request: `{ "content": "Eslatma matni...", "author_id": "usr_123" }`
- Response: 201 Created + note object

**GET /api/v1/contacts/:id/conversations**
- Query params: `page`, `limit`
- Response: Array of conversation objects with pagination

**GET /api/v1/contacts/:id/activity**
- Query params: `page`, `limit`, `type[]` (filter by event type)
- Response: Array of activity events

### Organizations API

**GET /api/v1/organizations**
- Query params: `search`, `page`, `limit`
- Response: Array of organizations with contact counts

**POST /api/v1/organizations**
- Request: `{ "name": "Tech Corp", "website": "https://techcorp.uz", "industry": "IT" }`
- Response: 201 Created

**PUT /api/v1/organizations/:id**
- Request: Partial update
- Response: 200 OK

**DELETE /api/v1/organizations/:id**
- Response: 204 No Content

**GET /api/v1/organizations/:id/contacts**
- Query params: `page`, `limit`
- Response: Array of contacts in organization

### Import/Export API

**POST /api/v1/contacts/import**
- Content-Type: `multipart/form-data`
- Request: File upload (.csv, .xlsx, max 10MB) + field mapping JSON
- Response: 202 Accepted + job ID
```json
{
  "job_id": "import_job_abc123",
  "status": "processing",
  "progress": 0,
  "total_rows": 247
}
```

**GET /api/v1/contacts/import/:job_id/status**
- Response:
```json
{
  "job_id": "import_job_abc123",
  "status": "completed",
  "progress": 100,
  "total_rows": 247,
  "imported": 235,
  "updated": 12,
  "failed": 0,
  "errors": []
}
```

**POST /api/v1/contacts/export**
- Request: `{ "format": "csv", "fields": ["name", "email", "phone"], "filter": "all" }`
- Response: 202 Accepted + download URL or direct file download

**GET /api/v1/contacts/export/template**
- Response: Downloads CSV template with correct headers

### Segments API

**GET /api/v1/contacts/segments**
- Response: Array of segments with contact counts

**POST /api/v1/contacts/segments**
- Request:
```json
{
  "name": "VIP Mijozlar",
  "description": "Tag VIP bilan eng faol mijozlar",
  "conditions": [
    { "field": "tags", "operator": "contains", "value": "VIP" },
    { "field": "last_seen", "operator": "within_days", "value": 7 }
  ],
  "logic": "AND"
}
```
- Response: 201 Created + segment object + live preview count

**PUT /api/v1/contacts/segments/:id**
- Request: Partial update
- Response: 200 OK

**DELETE /api/v1/contacts/segments/:id**
- Response: 204 No Content

**GET /api/v1/contacts/segments/:id/contacts**
- Query params: `page`, `limit`
- Response: Array of contacts matching segment conditions

### Merge API

**GET /api/v1/contacts/duplicates**
- Query params: `match_email`, `match_phone`, `match_name_fuzzy`
- Response:
```json
{
  "duplicate_groups": [
    {
      "id": "dup_group_1",
      "contacts": [
        { "id": "cnt_abc", "name": "Jahongir Otajonov", "email": "jahongir@example.com" },
        { "id": "cnt_def", "name": "J. Otajonov", "email": "jahongir@example.com" }
      ],
      "match_type": "email",
      "confidence": 1.0
    }
  ],
  "total_groups": 5
}
```

**POST /api/v1/contacts/merge**
- Request:
```json
{
  "primary_contact_id": "cnt_abc",
  "merge_contact_ids": ["cnt_def", "cnt_ghi"],
  "merge_options": {
    "merge_tags": true,
    "merge_notes": true,
    "merge_conversations": true
  },
  "field_selections": {
    "name": "cnt_abc",
    "email": "cnt_abc",
    "phone": "cnt_def"
  }
}
```
- Response: 200 OK + merged contact object

---

## 15. WEBSOCKET EVENTS

**Real-time Updates:**

**Event: `contact.created`**
```json
{
  "event": "contact.created",
  "data": {
    "contact_id": "cnt_abc123",
    "name": "Jahongir Otajonov",
    "created_by": "usr_agent_1"
  }
}
```
- Trigger: Contact list reload or add to list

**Event: `contact.updated`**
```json
{
  "event": "contact.updated",
  "data": {
    "contact_id": "cnt_abc123",
    "updated_fields": ["tags", "custom_attributes"],
    "updated_by": "usr_agent_2"
  }
}
```
- Trigger: Update contact card in list/profile

**Event: `contact.deleted`**
```json
{
  "event": "contact.deleted",
  "data": {
    "contact_id": "cnt_abc123",
    "deleted_by": "usr_admin"
  }
}
```
- Trigger: Remove from contact list

**Event: `contact.online_status_changed`**
```json
{
  "event": "contact.online_status_changed",
  "data": {
    "contact_id": "cnt_abc123",
    "is_online": true
  }
}
```
- Trigger: Update green dot indicator

**Event: `import.progress`**
```json
{
  "event": "import.progress",
  "data": {
    "job_id": "import_job_abc123",
    "progress": 45,
    "imported": 112,
    "total": 247
  }
}
```
- Trigger: Update progress bar in import modal

**Event: `import.completed`**
```json
{
  "event": "import.completed",
  "data": {
    "job_id": "import_job_abc123",
    "imported": 235,
    "updated": 12,
    "failed": 0
  }
}
```
- Trigger: Show success modal + reload contacts list

---

## 16. DATABASE SCHEMA

**Table: `contacts`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | Foreign key → workspaces.id |
| `name` | VARCHAR(100) | Full name (required) |
| `email` | VARCHAR(255) | Primary email (unique per workspace) |
| `email_verified` | BOOLEAN | Default: false |
| `primary_phone` | VARCHAR(20) | Phone number with country code |
| `avatar_url` | TEXT | Avatar image URL (nullable) |
| `organization_id` | UUID | Foreign key → organizations.id (nullable) |
| `tags` | TEXT[] | Array of string tags |
| `custom_attributes` | JSONB | Key-value pairs |
| `last_seen_at` | TIMESTAMP | Last activity timestamp |
| `is_online` | BOOLEAN | Real-time online status |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |
| `deleted_at` | TIMESTAMP | Soft delete (nullable) |

**Indexes:**
- `idx_contacts_workspace_id` on `workspace_id`
- `idx_contacts_email` on `email`
- `idx_contacts_organization_id` on `organization_id`
- `idx_contacts_tags` GIN index on `tags` (array search)
- `idx_contacts_last_seen` on `last_seen_at`
- `idx_contacts_custom_attrs` GIN index on `custom_attributes` (JSONB search)

**Table: `organizations`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | Foreign key → workspaces.id |
| `name` | VARCHAR(100) | Organization name (required) |
| `website` | TEXT | Website URL (nullable) |
| `industry` | VARCHAR(50) | Industry type (nullable) |
| `logo_url` | TEXT | Logo image URL (nullable) |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_organizations_workspace_id` on `workspace_id`

**Table: `contact_notes`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `contact_id` | UUID | Foreign key → contacts.id |
| `author_id` | UUID | Foreign key → users.id |
| `content` | TEXT | Note content (required) |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_contact_notes_contact_id` on `contact_id`
- `idx_contact_notes_author_id` on `author_id`

**Table: `contact_activities`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `contact_id` | UUID | Foreign key → contacts.id |
| `event_type` | VARCHAR(50) | created, updated, tagged, chat_started, note_added, merged |
| `actor_id` | UUID | Foreign key → users.id (nullable, system if null) |
| `metadata` | JSONB | Event-specific data |
| `created_at` | TIMESTAMP | Event timestamp |

**Indexes:**
- `idx_contact_activities_contact_id` on `contact_id`
- `idx_contact_activities_event_type` on `event_type`

**Table: `segments`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | Foreign key → workspaces.id |
| `name` | VARCHAR(100) | Segment name (required) |
| `description` | TEXT | Description (nullable) |
| `conditions` | JSONB | Array of condition objects |
| `logic` | VARCHAR(10) | AND or OR |
| `created_by` | UUID | Foreign key → users.id |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

**Indexes:**
- `idx_segments_workspace_id` on `workspace_id`

---

## 17. FIGMA COMPONENTS

**Component Tree:**
```
contacts-crm/
├── screens/
│   ├── SCR-CT01 (contacts-list)
│   │   ├── header
│   │   │   ├── title-subtitle
│   │   │   └── action-buttons (3 buttons)
│   │   ├── filters-search-bar
│   │   │   ├── search-input
│   │   │   ├── filter-dropdowns (3 dropdowns)
│   │   │   └── clear-link
│   │   ├── view-toggle (table/card icons)
│   │   ├── contacts-table (default view)
│   │   │   ├── table-header (7 columns)
│   │   │   ├── table-rows (contact-row × 15)
│   │   │   └── bulk-actions-bar (conditional)
│   │   ├── contacts-grid (card view, SCR-CT01-S01)
│   │   │   └── contact-card × N (3-col grid)
│   │   └── pagination
│   ├── SCR-CT02 (contact-profile-panel, 800px right slide)
│   │   ├── header
│   │   │   ├── back-link
│   │   │   ├── avatar-80px
│   │   │   ├── name-email-phone
│   │   │   └── action-buttons
│   │   ├── tabs-navigation (4 tabs)
│   │   └── tab-content
│   │       ├── overview-tab
│   │       │   ├── info-card
│   │       │   ├── custom-attributes-card
│   │       │   └── recent-conversations-card
│   │       ├── conversations-tab (timeline)
│   │       ├── notes-tab
│   │       │   ├── add-note-button
│   │       │   ├── rich-text-editor (expandable)
│   │       │   └── notes-list (note-item × N)
│   │       └── activity-tab (timeline events)
│   ├── SCR-CT03 (organizations-list)
│   │   ├── header
│   │   ├── search-bar
│   │   ├── organizations-table (5 columns)
│   │   └── pagination
│   ├── SCR-CT03-S01 (organization-detail-panel, 800px)
│   │   ├── header (logo + name + website)
│   │   ├── info-card
│   │   ├── contacts-mini-table
│   │   └── activity-timeline
│   ├── SCR-CT04 (import-modal, 600px, 3 steps)
│   │   ├── step-1-upload
│   │   │   ├── drag-drop-zone
│   │   │   └── template-download-link
│   │   ├── step-2-map-fields
│   │   │   ├── file-preview-table
│   │   │   └── column-mapping-dropdowns × N
│   │   ├── step-3-confirm
│   │   │   ├── summary-card
│   │   │   ├── options-checkboxes
│   │   │   └── action-buttons
│   │   └── step-4-processing (auto)
│   │       ├── progress-bar
│   │       └── success-modal
│   ├── SCR-CT04-S01 (export-modal, 500px)
│   │   ├── format-radio
│   │   ├── fields-checkboxes
│   │   ├── filter-radio
│   │   └── action-buttons
│   ├── SCR-CT05 (segments-list)
│   │   ├── header
│   │   └── segments-grid (segment-card × N, 2-col)
│   ├── SCR-CT05-S01 (create-segment-modal, 700px)
│   │   ├── form-fields
│   │   ├── query-builder (conditions)
│   │   ├── preview-results
│   │   └── action-buttons
│   ├── SCR-CT06 (merge-duplicates)
│   │   ├── header
│   │   ├── detection-criteria-toggles
│   │   └── duplicate-groups-list (group-card × N)
│   ├── merge-modal (800px, side-by-side comparison)
│   │   ├── comparison-table (radio selectors per field)
│   │   ├── merge-options-checkboxes
│   │   └── action-buttons
│   └── empty-error-states/
│       ├── empty-state (no contacts)
│       ├── search-no-results
│       └── error-loading
├── components/
│   ├── contact-card (320×180px)
│   │   ├── avatar-56px
│   │   ├── name-email-phone (text stack)
│   │   ├── organization-badge
│   │   ├── tags-badges (max 3 visible)
│   │   ├── last-seen-text
│   │   └── actions-menu (3-dot, hover)
│   ├── contact-row (table row, 72px height)
│   │   ├── checkbox
│   │   ├── avatar-name-email (stacked)
│   │   ├── phone-text
│   │   ├── organization-badge
│   │   ├── tags-badges
│   │   ├── last-seen-text
│   │   └── actions-menu
│   ├── organization-badge
│   │   ├── icon (Building 14px)
│   │   └── text (13px Medium)
│   ├── custom-attribute-field
│   │   ├── label (13px Medium)
│   │   ├── input (40px height, type-specific icon)
│   │   └── edit-icon (hover)
│   ├── note-item
│   │   ├── author-avatar-name
│   │   ├── timestamp
│   │   ├── content-text (expandable)
│   │   └── edit-delete-actions (hover, author only)
│   ├── activity-event-item
│   │   ├── event-icon (type-specific)
│   │   ├── event-description
│   │   ├── actor-name
│   │   └── timestamp
│   ├── segment-card (400×140px)
│   │   ├── segment-name
│   │   ├── contact-count
│   │   ├── conditions-preview
│   │   ├── created-by-avatar
│   │   └── actions-menu
│   ├── duplicate-group-card
│   │   ├── title ("2 takroriy kontakt")
│   │   ├── contact-previews (2 avatars + names)
│   │   └── action-buttons (Merge + Ignore)
│   ├── bulk-actions-bar (sticky)
│   │   ├── selection-count-text
│   │   └── action-buttons (Delete + Add Tag + Export + Merge)
│   ├── filter-dropdown (multi-select)
│   │   ├── trigger-button
│   │   └── dropdown-menu
│   │       └── checkbox-options × N
│   └── pagination-controls
│       ├── prev-next-arrows
│       ├── page-count-text
│       └── jump-to-dropdown (optional)
```

**Component Variants:**
- `contact-card` states: default / hover / selected
- `contact-row` states: default / hover / selected
- `organization-badge` sizes: sm (13px) / md (14px)
- `note-item` states: collapsed / expanded
- `activity-event-item` types: created / updated / tagged / chat_started / note_added / merged (different icons)
- `segment-card` states: default / hover
- `custom-attribute-field` types: text / number / email / phone / url / date / dropdown (type-specific icons)

---

## 18. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **Contact card hover** | elevation shadow-sm → shadow-md, scale 1 → 1.02 | 200ms ease |
| **Contact row hover** | bg transparent → bg-gray-50 | 150ms ease |
| **Contact row selected** | bg-gray-50 → bg-primary-50, border-left 3px primary | Instant |
| **Organization badge hover** | bg-primary-50 → bg-primary-100 | 150ms ease |
| **Tag badge hover** | scale 1 → 1.05 | 100ms ease |
| **Custom field edit icon appear** | opacity 0 → 1 on row hover | 150ms ease |
| **Note expand** | max-height 0 → auto | 300ms ease |
| **Activity event item fade-in** | opacity 0 → 1, translateY(-10px) → 0 (stagger 50ms) | 200ms ease-out |
| **Bulk actions bar slide-down** | translateY(-100%) → 0 | 250ms ease-out |
| **Import progress bar fill** | width 0 → 100% (animate per update) | 500ms ease-in-out |
| **Merge modal side-by-side** | split-screen slide-in from opposite sides | 300ms ease |
| **Segment card contact count update** | scale 1 → 1.2 → 1 (pulse) | 400ms ease |
| **Duplicate group card dismiss** | opacity 1 → 0, scale 1 → 0.95 | 250ms ease-in |
| **Search input focus** | border gray → primary, shadow-sm appear | 200ms ease |
| **Filter dropdown open** | slide-down 10px, opacity 0 → 1 | 200ms ease-out |
| **Pagination button hover** | bg transparent → bg-gray-100 | 150ms ease |
| **Empty state illustration** | scale 0.8 → 1, opacity 0 → 1 on load | 400ms ease-out |
| **Contact delete toast** | slide-in from top 20px, auto-dismiss after 3s | 300ms ease |
| **Online status dot** | pulse animation (scale 1 → 1.3 → 1, opacity 1 → 0.5 → 1) | 2s infinite |
| **Avatar placeholder** | shimmer effect (gradient slide left-to-right) | 1.5s infinite |

---

## 19. ACCESSIBILITY

### Keyboard Navigation

**Contacts List:**
- **Tab:** Navigate through search input → filters → view toggle → table rows/cards → pagination
- **Enter/Space:** Activate buttons, checkboxes, links
- **Arrow keys (↑↓):** Navigate table rows (focus moves between rows)
- **Ctrl/Cmd + Click:** Multi-select rows
- **Shift + Click:** Range select rows
- **Delete:** Trigger delete confirmation for selected contacts (keyboard shortcut)
- **Ctrl/Cmd + A:** Select all visible contacts
- **Escape:** Clear selection / Close dropdowns

**Contact Profile:**
- **Tab:** Navigate through back link → tabs → form fields → buttons
- **Arrow keys (←→):** Navigate between tabs
- **Enter:** Open selected conversation/note
- **Escape:** Close profile panel

**Modals:**
- **Tab:** Navigate form fields, trap focus within modal
- **Escape:** Close modal
- **Enter:** Submit form (when not in textarea)

### ARIA Labels and Roles

**Contacts List:**
- Table: `role="table"`, `aria-label="Contacts list"`
- Table header: `role="row"`, headers `role="columnheader"`
- Table rows: `role="row"`, cells `role="cell"`
- Checkbox: `aria-label="Select contact {name}"`, `aria-checked`
- Search input: `role="search"`, `aria-label="Search contacts by name, email, or phone"`
- Filter dropdown: `role="listbox"`, `aria-multiselectable="true"`, `aria-expanded`
- View toggle: `role="radiogroup"`, `aria-label="Contact view mode"`, buttons `aria-pressed`
- Bulk actions bar: `role="toolbar"`, `aria-label="Bulk actions for selected contacts"`

**Contact Profile:**
- Panel: `role="complementary"`, `aria-label="Contact profile for {name}"`
- Tabs: `role="tablist"`, tab buttons `role="tab"`, `aria-selected`, tab panels `role="tabpanel"`
- Custom field edit: `aria-label="Edit {field_name}"`
- Note: `role="article"`, `aria-label="Note by {author} on {date}"`
- Activity event: `role="article"`, `aria-label="{event_type} by {actor} on {date}"`

**Modals:**
- Modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`
- Progress bar: `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`

### Screen Reader Announcements

**Contacts List:**
- Page load: "Contacts list loaded. 247 contacts found. Use Tab to navigate."
- Search results: "15 contacts found matching your search."
- Filter applied: "Filter applied: Tag VIP. 12 contacts shown."
- Row selected: "Contact {name} selected. 3 contacts total selected."
- Bulk action: "3 contacts deleted. Contact list updated."

**Contact Profile:**
- Panel open: "Contact profile opened for {name}. Press Escape to close."
- Tab change: "Showing {tab_name} tab for {contact_name}."
- Field updated: "{Field_name} updated to {new_value}."
- Note added: "Note added by {author}."
- Online status: "{Name} is online" (when indicator changes)

**Import:**
- Step change: "Step 2 of 3: Map CSV columns to CHATFLOW fields."
- Progress: "Importing contacts. 45 of 247 contacts imported."
- Complete: "Import successful. 235 new contacts added, 12 updated."

**Merge:**
- Duplicate found: "2 duplicate contacts found. Select primary contact to merge."
- Merge complete: "Contacts merged successfully. Viewing merged contact profile."

### Color Contrast (WCAG AA)

- Contact name #111827 on white: 11.7:1 (AAA)
- Email/phone #6B7280 on white: 5.3:1 (AA)
- Last seen text #9CA3AF on white: 3.8:1 (AA Large, > 14px)
- Organization badge #4F46E5 text on #EEF2FF bg: 6.1:1 (AA)
- Tag badge #059669 text on #D1FAE5 bg: 4.8:1 (AA)
- Online dot green #10B981: Visible indicator not relying on color alone (+ "Online" text on hover)
- Error text #DC2626 on white: 7.1:1 (AAA)
- All interactive elements: 4.5:1+ contrast

### Focus Indicators

- All focusable elements: 2px solid #4F46E5 outline, 4px offset, always visible
- Table row focus: 3px left border #4F46E5 + bg #EEF2FF
- Card focus: 2px border #4F46E5, shadow-lg
- No `outline: none` without accessible alternative

### Touch Targets

- Mobile buttons/links: min 44×44px
- Desktop buttons: min 40×40px
- Table row height: 72px (sufficient for touch)
- Checkbox: 20×20px hit area 40×40px
- Tag badges: min 28px height

---

## 20. PERFORMANCE

### Loading Targets
- Initial Page Load: < 1.5s
- Contact List Render: < 500ms (15 contacts)
- Search Results: < 300ms (debounced)
- Filter Application: < 200ms
- Contact Profile Open: < 400ms
- Import (1000 contacts): < 30s background job
- Export (1000 contacts): < 10s
- Auto-save: < 500ms (debounced 2s)

### Optimization
- Pagination: 15 rows/page, lazy load
- Caching: Contact list 5min, profiles 10min, segments 1h
- Avatars: CDN, WebP format, 32/56/80/200px variants, lazy load
- Database: Indexes on all FKs, GIN indexes for tags/JSONB, cursor pagination
- API: gzip compression, return summary objects in list
- Client: React.memo, virtualized lists (>100 items), debounce search 300ms

---

## 21. FIGMA AI PROMPT

```
Design a comprehensive Contacts (CRM) module for CHATFLOW with list view, profile panel, import/export, segments, and merge duplicates.

SCREEN 1 - CONTACTS LIST (SCR-CT01):
Dashboard content area 24px padding. Header: "Kontaktlar" 24px Semibold + "247 kontakt" 14px subtitle + buttons right "+ Kontakt" primary + "Import" + "Export" ghost. Search bar 320px "Ism, email..." with icon + 3 filter dropdowns Tags/Organization/Last Seen + "Tozalash" link + View toggle table/card icons.

Table View: 7 columns (Checkbox 40px / Name: avatar 32px + name 14px Semibold + email 13px gray stacked 300px / Phone 160px / Organization badge primary-50 180px / Tags max 2 badges 200px / Last Seen "2 daqiqa oldin" 140px / Actions 3-dot 60px). Row 72px height, hover bg-gray-50, border-bottom 1px. 15 rows + pagination. Bulk actions bar sticky when selected: primary-600 bg white text "3 kontakt tanlandi" + Delete/Add Tag/Export/Merge buttons.

Card View (toggle): 3-col grid gap 20px, Card 320×180px white border 1px radius 12px shadow-sm hover shadow-md. Avatar 56px + Name 16px Semibold + Email + Phone + Organization badge + Tags max 3 + Last Seen 12px bottom-right + Actions icons hover.

SCREEN 2 - CONTACT PROFILE (SCR-CT02):
Right panel 800px slide-in. Header: Back arrow + Avatar 80px center + Name 24px + Email 16px + Phone + Actions "Tahrirlash"+"O'chirish" red. Tabs: Overview/Conversations/Notes/Activity with 2px primary border active.

Overview Tab: 3 cards stacked 16px gap. Card 1 "Asosiy ma'lumotlar": fields Name/Email ✓/Phone/Organization badge/Tags/Created/Last Seen 🟢. Card 2 "Maxsus maydonlar" + Qo'shish: editable fields City/Product Interest/Lead Source with pencil hover. Card 3 "So'nggi suhbatlar" + Barchasini ko'rish: 3 items date+agent+duration+rating+preview+"Ochish" button.

Conversations Tab: Timeline reverse chronological, each item: date+duration+agent avatar+rating stars+Open button.

Notes Tab: "+ Eslatma" button + Rich editor (Bold/Italic/Link/Bullets 300px) + Notes list: author avatar 24px + name + timestamp + text expandable + Edit/Delete hover.

Activity Tab: Timeline all events (created/updated/tagged/chat/note/merged) with icons + descriptions + timestamps.

SCREEN 3 - ORGANIZATIONS (SCR-CT03):
Header + Search + Table 5 columns: Logo 32px+Name / Contacts count clickable / Website link / Created / Actions. Organization detail panel 800px: logo 80px + name + website + info card + contacts mini-table + activity timeline.

SCREEN 4 - IMPORT MODAL (SCR-CT04):
600px modal 3 steps. Step 1: Drag-drop zone 400×200 upload icon 48px gray "CSV yoki Excel..." + template download link + file preview name+size+Remove X. Step 2: File preview table 5 rows + Column mapping: dropdown per CSV column → CHATFLOW field with checkmarks, Skip checkbox. Step 3: Summary card "247 kontakt import" + "12 yangilanadi" + Options checkboxes Update duplicates/Skip empty + Cancel+Import buttons. Step 4 auto: Progress bar "45/247..." + spinner + Success modal "247 qo'shildi!".

SCREEN 5 - EXPORT MODAL (SCR-CT04-S01):
500px modal. Format radio CSV/Excel. Fields checkboxes Name/Email/Phone/Organization/Tags/Last Seen/Custom with Select All link. Filter radio: All 247 / Selected 12 / Current filter 47. Cancel+Export buttons.

SCREEN 6 - SEGMENTS (SCR-CT05):
Header + Grid 2-col. Segment card 400×140: name 16px + count "12 kontakt" + conditions preview + created-by avatar 20px + 3-dot actions. Create modal 700px: Name+Description+Query Builder (Condition dropdowns Field/Operator/Value + AND/OR logic + Add condition link max 5) + Preview "47 mos keladi" live + 3 avatars + Save button.

SCREEN 7 - MERGE DUPLICATES (SCR-CT06):
Header + Detection toggles Email/Phone/Name fuzzy + Apply button. Duplicate groups list: card "2 takroriy" + avatars preview + Merge+Ignore buttons. Merge modal 800px side-by-side: Left contact vs Right contact, radio per field Name/Email/Phone select which keep + Merge options checkboxes tags/notes/conversations + Cancel+Merge buttons.

EMPTY STATES: Illustration address book 120px gray + "Kontaktlar yo'q" + description + buttons. Search no results: magnifying X 64px + "Hech narsa topilmadi" + query + clear link. Error loading: error icon 48px red + title + "Qayta yuklash".

COMPONENTS: Contact card variants, Organization badge with Building icon 14px primary-50 bg radius 8px, Custom attribute field with type icons, Note item expandable, Activity event with type icons, Segment card, Duplicate group card, Bulk actions bar, Filter dropdown multi-select, Pagination controls.

ANIMATIONS: Card hover elevation scale 1.02 200ms, Row hover bg 150ms, Selected border-left 3px instant, Badge hover scale 1.05 100ms, Note expand max-height 300ms, Bulk bar slide-down 250ms, Progress bar fill 500ms, Online dot pulse 2s infinite, Avatar shimmer 1.5s.

COLORS: Primary #4F46E5, Gray-50 #F9FAFB, Gray-200 #E5E7EB, Gray-600 #6B7280, Gray-900 #111827, Green online #10B981, Red delete #DC2626. Typography: Inter font, 12-24px scale. Spacing: 8px grid. Radius: 8-12px. Shadow: sm/md/lg. All WCAG AA contrast 4.5:1+.
```
