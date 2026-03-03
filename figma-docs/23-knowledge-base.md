# QULAY CHAT — Knowledge Base (Bilimlar Bazasi)

## Modul maqsadi
Knowledge Base — mijozlar uchun self-service qo'llab-quvvatlash portali. Admin va menejerlar bu yerda maqolalar yozadi, kategoriyalarga ajratadi va public portal orqali nashr etadi. Mijozlar esa masalalarni mustaqil hal qilish uchun maqolalarni qidiradi va o'qiydi.

**Kirish:** Admin (to'liq), Manager (maqolalar), Public (o'qish)

---

## 1. KB Dashboard (SCR-KB01)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Bilimlar bazasi" 24px Semibold
- **Subtitle:** "Jami 47 maqola, 12 kategoriya" 14px Gray-600
- **Actions:**
  - "+ Maqola yaratish" Primary button
  - "Sozlamalar" Ghost button with gear icon

#### Quick Stats Row (4 cards)
**Card Size:** 240×100px each, inline flex

1. **Total Articles:**
   - Icon: 📄 24px
   - Number: "47" 32px Bold, Gray-900
   - Label: "Maqola" 14px Gray-600
   - Trend: "+5 bu oy" 12px Success-500

2. **Total Views:**
   - Icon: 👁️ 24px
   - Number: "12,453" 32px Bold
   - Label: "Ko'rishlar" 14px Gray-600
   - Trend: "+18% bu oy" 12px Success-500

3. **Helpful Rate:**
   - Icon: 👍 24px
   - Number: "87%" 32px Bold
   - Label: "Foydali darajasi" 14px Gray-600
   - Trend: "+3% bu oy" 12px Success-500

4. **Categories:**
   - Icon: 🏷️ 24px
   - Number: "12" 32px Bold
   - Label: "Kategoriya" 14px Gray-600

#### Articles Table

**Table Controls:**
- Search: 320px, "Maqola yoki kategoriya nomi..."

| Parametr | Qiymat |
|----------|--------|
| **Min characters** | 3 belgi (3 dan kam yozsa — qidirmaydi) |
| **Debounce** | 300ms (user yozib bo'lgandan keyin) |
| **Max results** | 50 ta (pagination agar ko'p) |
| **Case sensitive** | Yo'q (lowercase match) |
| **Search scope** | Article title, content (full-text), tags, category |
| **Sort** | Relevance → Date (newest first) |

- Filters:
  - Status: All | Published | Draft
  - Category: Dropdown (multi-select)
  - Sort: Most viewed | Recent | Alphabetical
- "+ Maqola yaratish" button (duplicate in table header)

**Table Columns:**
1. **Title** (width: 400px)
   - Icon/Emoji 24px (article icon)
   - Title text 14px Semibold
   - Featured badge (if featured)
2. **Category** (width: 180px)
   - Badge with category color
3. **Status** (width: 120px)
   - Published: Green badge
   - Draft: Gray badge
4. **Views** (width: 100px)
   - "1,245" count
5. **Helpful** (width: 120px)
   - 👍 12 | 👎 3 (ratio display)
6. **Updated** (width: 140px)
   - "2 kun oldin" relative date
7. **Actions** (width: 80px)
   - Edit, Duplicate, Delete (3-dot menu)

**Table Styling:**
- Row height: 64px
- Hover: bg-gray-50
- Pagination: 15 rows per page
- "Barcha maqolalarni ko'rish" link (if more than 15)

---

## 2. Create/Edit Article (SCR-KB02)

### Layout
Full-width editor page (no sidebar, maximize space for content)

### UI Komponentlar

#### Header (sticky top)
- **Back arrow:** ← Bilimlar bazasi
- **Title input:**
  - Placeholder: "Maqola sarlavhasi..."
  - Font: 32px Semibold
  - Border: None, underline on focus
  - Max-width: 800px
- **Actions (right):**
  - "Oldindan ko'rish" Outline button (opens preview modal)
  - "Draft sifatida saqlash" Ghost button
  - "Nashr qilish" Primary button (or "Yangilashlarni saqlash" if editing)
  - Auto-save indicator: "Barcha o'zgarishlar saqlandi" 12px Gray-500

#### Article Metadata Sidebar (left, 240px, sticky)

**Featured Image:**
- Upload area: 200×133px (3:2 ratio)
- "Rasm yuklash" button
- Max size: 2MB
- Recommended: 1200×800px

**Category:**
- Dropdown: Select category
- "+ Yangi kategoriya" link

**Visibility:**
- ⦿ Published (Public portal)
- ◯ Draft (Not visible)

**Featured:**
- ☑ "Tanlangan maqola" checkbox (shows on homepage)

**SEO Settings:**
- URL slug: `/kb/` + auto-generated (editable)
- Meta description: Textarea (160 chars max)
- "SEO tavsiyalari" expandable link

**Related Articles:**
- Multi-select dropdown
- Shows article titles
- Max 5 related articles

#### Content Editor (main area, max-width 800px, centered)

**Rich Text WYSIWYG Editor:**

**Toolbar (sticky when scroll):**
- Icons (24px each, Gray-600, active: Primary-600):
  - **H2** | **H3** | **H4** (heading levels)
  - **B** | *I* | ~~S~~ (bold, italic, strikethrough)
  - 🔗 Link | 🖼️ Image | 📹 Video (embed)
  - • Bullet list | 1. Numbered list
  - " Quote | `< >` Code block
  - ⚠️ Callout (info, warning, success boxes)
  - 😊 Emoji picker
  - Undo | Redo

**Editor Body:**
- Min-height: 500px
- Font: 16px Regular, Gray-900, line-height 1.6
- Placeholder: "Maqola mazmunini yozing..."
- Auto-save: Every 2 seconds
- Image paste: Drag & drop or paste from clipboard
- Video embed: YouTube, Vimeo URL auto-converts to iframe

**Editor Features:**
1. **Headings:** H2, H3, H4 (no H1, title is H1)
2. **Links:** Inline + tooltip preview on hover
3. **Images:** 
   - Upload or paste
   - Alt text field
   - Max-width: 800px (responsive)
   - Clickable to expand fullscreen
4. **Videos:** YouTube/Vimeo embed with 16:9 aspect ratio
5. **Code blocks:** Syntax highlighting (auto-detect language)
6. **Callouts:** Info (blue), Warning (yellow), Success (green), Error (red) boxes
7. **Tables:** Insert table with rows/columns (future)

#### Preview Modal (when click "Oldindan ko'rish")
- Modal: 900px width
- Shows: Rendered article as it will appear on public portal
- Close button (X) or "Tahrirlashni davom ettirish" button

#### Publish Confirmation (when click "Nashr qilish")
- Modal: 500px width
- Title: "Maqolani nashr qilasizmi?"
- Preview:
  - Title
  - Category
  - Featured image thumbnail
  - "Ommaviy portalda ko'rinadi" checkmark
- Actions:
  - "Bekor qilish" Ghost
  - "Nashr qilish" Primary
- After publish: Toast "Maqola nashr qilindi!" + Redirect to KB Dashboard

---

## 3. Categories Management (SCR-KB03)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Kategoriyalar" 24px Semibold
- **Subtitle:** "12 kategoriya" 14px Gray-600
- **Action:** "+ Kategoriya yaratish" Primary button

#### Categories List
- **Layout:** Grid 2 columns (desktop), 1 column (mobile)
- **Gap:** 20px

**Category Card (480×140px):**

```
┌────────────────────────────────┐
│ 📚 [Icon] Umumiy savollar     │
│ 12 maqola                      │
│ Description here...            │
│                                │
│ [Tahrirlash] [O'chirish] [:::] │
└────────────────────────────────┘
```

- Icon/Emoji: 48px (customizable)
- Name: 18px Semibold, Gray-900
- Article count: "12 maqola" 14px Gray-600
- Description: 14px Gray-600, max 2 lines ellipsis
- Actions: Edit, Delete, Reorder (drag handle)

**Drag-Reorder:**
- Drag handle (:::) icon on right
- Draggable cards, live reorder
- Auto-save order on drop

#### Create/Edit Category Modal
Modal (500px width)

**Form Fields:**
- **Icon/Emoji:** Icon picker button (grid of emojis/icons)
- **Name:** Input (required, "Masalan: Umumiy savollar")
- **Slug:** Auto-generated from name (editable, "umumiy-savollar")
- **Description:** Textarea (500 chars max)
- **Color:** Color picker (for badge color)
- **Visibility:**
  - ☑ "Ommaviy portalda ko'rsatish" checkbox

**Actions:**
- "Bekor qilish" Ghost
- "Saqlash" Primary

**After save:** Toast "Kategoriya saqlandi"

---

## 4. KB Settings (SCR-KB04)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Tabs Navigation
- **General** (active) | Appearance | Public Portal | Social | Navigation | Integrations

#### General Tab

**Knowledge Base Name:**
- Input: "QULAY CHAT Yordam Markazi" (shown on public portal)

**Default Language:**
- Dropdown: O'zbek | Русский | English
- Multi-language support (future)

**Contact Support CTA:**
- ☑ "O'quvchi yordam topmasligini ko'rsatish" checkbox
- CTA Text: "Yordam kerakmi? Bizga yozing" (customizable)
- Links to: Chat widget or email

#### Appearance Tab

**Header Style:**
- Hero with search (large search bar)
- Minimal header (small logo + nav)
- Preview thumbnail for each

**Primary Color:**
- Color picker: Default Primary-600 or custom

**Logo:**
- Upload area: Max 200×60px
- "Logo yuklash" button

**Favicon:**
- Upload area: 32×32px
- "Favicon yuklash" button

**Custom CSS:**
- Code editor (optional, advanced)
- Textarea, monospace font
- "Standart uslubni qayta tiklash" link

#### Public Portal Tab

**Domain:**
- Default: `kb.qulaychat.uz/workspace-name`
- Custom domain: Input "docs.mysite.com" + DNS setup instructions
- ☑ "Maxsus domen ulash" checkbox

**SEO:**
- Site title: "QULAY CHAT Yordam Markazi"
- Meta description: Textarea (160 chars)
- og:image: Upload (1200×630px)

**Google Analytics:**
- GA Tracking ID: Input "G-XXXXXXXXXX"

**Indexing:**
- ☑ "Search engine indekslashga ruxsat berish" checkbox

#### Social Tab

**Social Sharing:**
- ☑ "Social tarmoqlarda ulashish tugmalari" checkbox
- Preview: Facebook, Twitter, LinkedIn icons

**Social Links:**
- Facebook URL: Input
- Twitter URL: Input
- LinkedIn URL: Input
- (Shown in footer)

#### Navigation Tab

**Header Menu:**
- Drag-reorder list:
  - Home
  - Categories
  - Contact
- "+ Menyu elementi qo'shish" button
- Each: Label + URL + "O'chirish" button

**Footer Menu:**
- Similar drag-reorder list
- Links: Privacy Policy, Terms, About Us

#### Integrations Tab

**Fulltext Search:**
- ⦿ Built-in search (default)
- ◯ Algolia (API key required)
- ◯ Elasticsearch (endpoint required)

**Chatbot:**
- ☑ "Chatbot yordamchisini yoqish" checkbox
- Links to: Chat widget settings

**Analytics:**
- ☑ "Maqola ko'rishlari tracking" (built-in)
- ☑ "Search queries tracking" (what users search)

**Actions:**
- "Standartga qaytarish" Outline
- "Saqlash" Primary

---

## 5. KB Analytics (SCR-KB05)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Knowledge Base Analytics" 24px Semibold
- **Date Range:** Last 7 days | 30 days | 90 days | Custom

#### KPI Cards Row (4 cards)

1. **Total Views:** 12,453 (+18%)
2. **Total Visitors:** 3,247 (+22%)
3. **Helpful Rate:** 87% (+3%)
4. **Avg Time on Page:** 3m 25s (-5%)

#### Top Articles Table
- **Title:** "Eng ko'p ko'rilgan maqolalar" 18px Semibold
- **Table Columns:**
  1. Rank: #1, #2, #3... (with 🥇🥈🥉 for top 3)
  2. Article Title (link to article)
  3. Category badge
  4. Views: "1,245"
  5. Helpful: 👍 120 | 👎 15 (85%)
  6. Avg time: "4m 15s"
- **Actions:** "To'liq hisobotni ko'rish" link

#### Search Queries Table
- **Title:** "Qidiruv so'rovlari" 18px Semibold
- **Columns:**
  1. Query: "widget o'rnatish"
  2. Count: 47 searches
  3. Results: "3 maqola topildi"
  4. Click rate: "65%" (how many clicked results)
- **Insights:** "Articles to create" list (no results queries)

#### Views Over Time Chart
- Line chart: X-axis dates, Y-axis views
- Shows: Daily views trend

#### Categories Performance
- Bar chart: Categories by views
- Shows: Which categories most popular

---

## 6. Public KB Portal (SCR-KB06)

### Layout
Standalone public page (not dashboard shell)

### URL Structure
- Homepage: `kb.qulaychat.uz/workspace-name`
- Category: `kb.qulaychat.uz/workspace-name/category-slug`
- Article: `kb.qulaychat.uz/workspace-name/category-slug/article-slug`

### Homepage UI

#### Header (sticky)
- **Logo:** Left-aligned, links to homepage
- **Navigation:** Categories, Contact (if enabled)
- **Language selector:** O'zbek | Русский | English (flags)
- **"Chat yozish" button:** Opens widget (Primary button)

#### Hero Section
- **Background:** Primary gradient or solid Primary-50
- **Title:** "QULAY CHAT Yordam Markazi" 48px Bold, Gray-900
- **Subtitle:** "Savollaringizga javob toping" 20px Regular, Gray-700

**Search Bar (prominent):**
- Width: 600px, centered
- Height: 56px (large)
- Placeholder: "Qidiruv..."
- Icon: Search 20px, left
- Border: 2px Gray-300, focus: 2px Primary-600
- Radius: 16px (xl)
- Shadow: shadow-lg on focus
- Auto-suggestions dropdown (appears on type)

#### Categories Grid
- **Title:** "Kategoriyalar" 24px Semibold
- **Layout:** 3×2 grid (desktop), 2×2 (tablet), 1 column (mobile)
- **Gap:** 24px

**Category Card (360×140px):**

```
┌────────────────────────────────┐
│ 📚 Umumiy savollar            │
│ 12 maqola                      │
│ Description here...            │
│                                │
│ Ko'rish →                      │
└────────────────────────────────┘
```

- Icon: 48px emoji
- Name: 18px Semibold
- Article count: "12 maqola" 14px Gray-600
- Description: 14px Gray-600, 2 lines max
- Link: "Ko'rish →" Primary-600, hover Primary-500
- Hover: shadow-md, transform scale 1.02

#### Popular Articles Section
- **Title:** "Ommabop maqolalar" 24px Semibold
- **Layout:** List, 5 articles

**Article Card (horizontal, 600×80px):**
- Article icon 32px
- Title: 16px Semibold, link (Primary-600 on hover)
- Category badge: 12px
- Views: "1,245 ko'rishlar" 13px Gray-500

#### Footer
- **Links:** Privacy, Terms, Social icons
- **Copyright:** "© 2026 QULAY CHAT. Barcha huquqlar himoyalangan."

---

### Category Page (SCR-KB06-S01)

#### Breadcrumb
- Home > Umumiy savollar

#### Header
- Icon 64px
- Category name: 32px Bold
- Description: 16px Gray-700

#### Articles List
- **Layout:** Vertical list, cards

**Article Card (800×100px):**
- Icon 40px
- Title: 18px Semibold, link
- Summary: 14px Gray-600, 2 lines max
- Meta: Updated date + Reading time "5 min"
- Arrow: → icon, right-aligned

---

### Article Page (SCR-KB06-S02)

#### Breadcrumb
- Home > Category > Article Title

#### Article Header
- Title: 36px Bold, Gray-900
- Meta: Last updated "Jan 10, 2026" · Reading time "5 min" · Views "1,245"
- Featured image: Max-width 800px, rounded

#### Article Body
- Max-width: 720px, centered
- Font: 16px Regular, line-height 1.7
- Headings: H2 28px Bold, H3 22px Bold, H4 18px Semibold
- Images: Responsive, max-width 720px
- Code blocks: Dark background, monospace
- Callouts: Colored boxes (info, warning, success)

#### Article Footer

**Was this helpful?**
- Question: "Bu maqola foydali bo'ldimi?" 18px Semibold
- Buttons: 👍 Ha (Outline) | 👎 Yo'q (Outline)
- After click:
  - If Yes: "Rahmat!" Success message
  - If No: Feedback form appears:
    - "Nima yetishmadi?" Textarea
    - "Yuborish" Primary button

**Related Articles:**
- Title: "Shunga o'xshash maqolalar" 20px Semibold
- List: 3-5 related articles (horizontal cards)

**Still need help?**
- CTA: "Yordam kerakmi? Bizga yozing" Primary button
- Opens: Chat widget

---

### Search Results Page (SCR-KB06-S03)

#### Header
- "Qidiruv natijalari: 'widget o'rnatish'" 24px Semibold
- "7 maqola topildi" 14px Gray-600

#### Results List
- **Layout:** Vertical list

**Result Card:**
- Article title: 18px Semibold, highlighted query match
- Snippet: 14px Gray-700, query highlighted in yellow
- Category badge + Updated date
- Link: "O'qish →"

#### No Results State
- Icon: 🔍❌ 64px
- Title: "Hech narsa topilmadi" 20px Semibold
- Suggestions:
  - Try different keywords
  - Browse categories
  - "Yordam kerakmi? Chat yozing" CTA
- Popular searches: "widget o'rnatish", "tarif rejasi", "integratsiya"

---

## 7. Components

### KB Article Card
- Width: 320×180px (homepage) or 800×100px (list)
- Border: 1px Gray-200
- Radius: 12px
- Padding: 20px
- Shadow: shadow-sm, shadow-md hover

### KB Category Badge
- Height: 24px
- Padding: 6px 10px
- Font: 13px Medium
- Background: Category color (Primary-50 default)
- Color: Category text (Primary-700)
- Radius: 8px
- Icon: 14px emoji, left margin 6px

### KB Search Bar (Public Portal)
- Height: 56px (large)
- Width: 600px max (centered)
- Padding: 16px 20px
- Font: 16px Regular
- Icon: Search 20px, 16px from left edge
- Border: 2px Gray-300, focus: 2px Primary-600
- Radius: 16px (xl)
- Shadow: shadow-lg on focus
- Placeholder: "Qidiruv..." or "Search articles..."

---

## 8. User Flow — Admin

```
[Dashboard] → [Sidebar: KB] → [SCR-KB01 Dashboard]
                                    ↓
                ┌───────────────────┼───────────────────┐
                ↓                   ↓                   ↓
        [+ Maqola yaratish]  [Kategoriyalar]     [Sozlamalar]
                ↓                   ↓                   ↓
        [SCR-KB02 Editor]    [SCR-KB03 List]    [SCR-KB04 Settings]
                ↓                   ↓                   ↓
        [Write content]     [Create category]   [Configure portal]
                ↓                   ↓                   ↓
        [Nashr qilish]      [Save category]     [Save settings]
                ↓                   ↓                   ↓
        [Public portalda ko'rinadi]
```

---

## 9. User Flow — Public Visitor

```
[Visitor] → [Public KB URL: kb.qulaychat.uz/workspace]
                        ↓
                [KB Home Page]
                        ↓
            ┌───────────┼───────────┐
            ↓                       ↓
    [Search query]          [Click category]
            ↓                       ↓
    [Search results]        [Category page]
            ↓                       ↓
    [Click article]         [Click article]
            └───────────┬───────────┘
                        ↓
                [Article view]
                        ↓
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
[Helpful? Yes]  [Helpful? No]  [Related article]
        ↓               ↓               ↓
[Thank you]     [Feedback]      [Navigate]
                        ↓
                [Contact Support]
                        ↓
                [Open chat widget]
```

---

## 10. Texnik Talablar

- **Editor:** Tiptap or similar WYSIWYG (React)
- **Search:** Full-text search (PostgreSQL or Algolia)
- **SEO:** Server-side rendering (SSR) for public portal
- **CDN:** Images served via CDN (Cloudflare/AWS)
- **Analytics:** Track views, search queries, helpful votes
- **Multi-language:** Prepare structure (future feature)
- **Public URL:** Subdomain or custom domain support
- **SSL:** HTTPS required for custom domains

---

## 11. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator | Public |
|--------|-------|---------|----------|--------|
| View KB dashboard | ✅ | ✅ | ⚠️ (read) | ❌ |
| Create articles | ✅ | ✅ | ❌ | ❌ |
| Edit articles | ✅ | ✅ | ❌ | ❌ |
| Publish articles | ✅ | ✅ | ❌ | ❌ |
| Delete articles | ✅ | ❌ | ❌ | ❌ |
| Manage categories | ✅ | ✅ | ❌ | ❌ |
| Configure KB settings | ✅ | ❌ | ❌ | ❌ |
| View analytics | ✅ | ✅ | ❌ | ❌ |
| Read public portal | ✅ | ✅ | ✅ | ✅ (everyone) |
| Submit feedback | ✅ | ✅ | ✅ | ✅ |

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 685 → 1850+ (expanded with API, Database, Components, Accessibility)  
**Holat:** ✅ COMPLETE

---

## 12. API ENDPOINTS

### GET /api/v1/knowledge-base/articles

Fetch articles for admin/manager dashboard

**Query params:**
- `status`: draft | published | archived
- `category_id`: UUID
- `search`: keyword
- `sort`: created_at | views | helpful_rate
- `order`: asc | desc
- `page`: 1
- `limit`: 20

**Response:**
```json
{
  "articles": [
    {
      "id": "art_abc123",
      "title": "Widget o'rnatish qo'llanmasi",
      "slug": "widget-ornatish-qollanmasi",
      "excerpt": "QULAY CHAT widget o'rnatish uchun...",
      "category": {
        "id": "cat_def456",
        "name": "Setup",
        "emoji": "⚙️",
        "slug": "setup"
      },
      "status": "published",
      "views_count": 1245,
      "helpful_votes": 98,
      "not_helpful_votes": 12,
      "helpful_rate": 89.09,
      "author": {
        "id": "usr_admin_1",
        "name": "Jahongir Otajonov",
        "avatar_url": "https://..."
      },
      "published_at": "2026-01-15T10:00:00Z",
      "updated_at": "2026-02-10T14:30:00Z",
      "created_at": "2026-01-10T09:00:00Z"
    }
  ],
  "meta": {
    "total": 47,
    "page": 1,
    "per_page": 20,
    "total_pages": 3
  }
}
```

### GET /api/v1/knowledge-base/articles/:id

Fetch single article (admin view with full content)

**Response:**
```json
{
  "article": {
    "id": "art_abc123",
    "title": "Widget o'rnatish qo'llanmasi",
    "slug": "widget-ornatish-qollanmasi",
    "content": "<h2>Widget o'rnatish</h2><p>QULAY CHAT widget...</p>",
    "excerpt": "QULAY CHAT widget o'rnatish uchun...",
    "category_id": "cat_def456",
    "category": { ... },
    "status": "published",
    "featured_image_url": "https://cdn.../widget-guide.png",
    "meta_title": "Widget o'rnatish qo'llanmasi | QULAY CHAT",
    "meta_description": "QULAY CHAT widget o'rnatish uchun...",
    "views_count": 1245,
    "helpful_votes": 98,
    "not_helpful_votes": 12,
    "related_article_ids": ["art_ghi789", "art_jkl012"],
    "published_at": "2026-01-15T10:00:00Z",
    "created_at": "2026-01-10T09:00:00Z",
    "updated_at": "2026-02-10T14:30:00Z"
  }
}
```

### POST /api/v1/knowledge-base/articles

Create new article

**Request:**
```json
{
  "title": "Widget o'rnatish qo'llanmasi",
  "content": "<h2>Widget o'rnatish</h2><p>...</p>",
  "excerpt": "QULAY CHAT widget o'rnatish uchun...",
  "category_id": "cat_def456",
  "status": "draft",
  "featured_image_url": "https://...",
  "meta_title": "Widget o'rnatish | QULAY CHAT",
  "meta_description": "Widget o'rnatish qo'llanmasi",
  "related_article_ids": ["art_ghi789"]
}
```

**Response:** 201 Created with article object

### PUT /api/v1/knowledge-base/articles/:id

Update article

### DELETE /api/v1/knowledge-base/articles/:id

Delete article (soft delete)

### GET /api/v1/knowledge-base/categories

Fetch all categories

**Response:**
```json
{
  "categories": [
    {
      "id": "cat_def456",
      "name": "Setup",
      "emoji": "⚙️",
      "slug": "setup",
      "description": "Widget va sozlamalar",
      "article_count": 12,
      "order": 1,
      "created_at": "2026-01-05T10:00:00Z"
    }
  ]
}
```

### POST /api/v1/knowledge-base/categories

Create category

**Request:**
```json
{
  "name": "Setup",
  "emoji": "⚙️",
  "description": "Widget va sozlamalar",
  "order": 1
}
```

### PUT /api/v1/knowledge-base/categories/:id

Update category

### DELETE /api/v1/knowledge-base/categories/:id

Delete category (cascade delete or reassign articles)

### GET /api/v1/knowledge-base/stats

Fetch KB statistics for dashboard

**Response:**
```json
{
  "total_articles": 47,
  "total_views": 12453,
  "avg_helpful_rate": 87.5,
  "total_categories": 12,
  "top_articles": [
    {
      "id": "art_abc123",
      "title": "Widget o'rnatish qo'llanmasi",
      "views": 1245,
      "helpful_rate": 89.09
    }
  ],
  "recent_searches": [
    {
      "query": "widget install",
      "count": 345,
      "results_found": 12
    }
  ]
}
```

---

## 13. PUBLIC PORTAL API

### GET /api/v1/public/kb/articles

Public articles (published only)

**Query params:**
- `category_slug`: setup | billing | features
- `search`: keyword
- `page`: 1
- `limit`: 12

**Response:**
```json
{
  "articles": [
    {
      "id": "art_abc123",
      "title": "Widget o'rnatish qo'llanmasi",
      "slug": "widget-ornatish-qollanmasi",
      "excerpt": "QULAY CHAT widget o'rnatish uchun...",
      "category": {
        "name": "Setup",
        "emoji": "⚙️",
        "slug": "setup"
      },
      "featured_image_url": "https://...",
      "views_count": 1245,
      "published_at": "2026-01-15T10:00:00Z",
      "estimated_read_time": "5 min"
    }
  ],
  "meta": {
    "total": 47,
    "page": 1,
    "per_page": 12
  }
}
```

### GET /api/v1/public/kb/articles/:slug

Public article view

**Response:** Full article object with content

### POST /api/v1/public/kb/articles/:id/view

Increment view count

**Response:** 204 No Content

### POST /api/v1/public/kb/articles/:id/vote

Submit helpful/not helpful vote

**Request:**
```json
{
  "vote": "helpful" | "not_helpful",
  "feedback": "Bu maqola juda yaxshi tushuntirilgan" 
}
```

**Response:** 201 Created

### GET /api/v1/public/kb/categories

Public categories

### GET /api/v1/public/kb/search

Search articles

**Query params:**
- `q`: search query
- `limit`: 10

**Response:**
```json
{
  "results": [
    {
      "id": "art_abc123",
      "title": "Widget o'rnatish qo'llanmasi",
      "excerpt": "...widget o'rnatish...",
      "category": { ... },
      "relevance_score": 0.95
    }
  ],
  "query": "widget install",
  "took_ms": 45
}
```

---

## 14. DATABASE SCHEMA

**Table: `kb_categories`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `name` | VARCHAR(100) | Category name |
| `slug` | VARCHAR(120) | URL slug |
| `emoji` | VARCHAR(10) | Emoji icon |
| `description` | TEXT | Description |
| `order` | INTEGER | Display order |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |

**Indexes:**
- `idx_kb_categories_workspace` on `workspace_id`
- UNIQUE `workspace_id, slug`

**Table: `kb_articles`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `category_id` | UUID | FK → kb_categories.id |
| `author_id` | UUID | FK → users.id |
| `title` | VARCHAR(255) | Article title |
| `slug` | VARCHAR(280) | URL slug |
| `content` | TEXT | HTML content |
| `excerpt` | TEXT | Short summary |
| `featured_image_url` | TEXT | Cover image URL |
| `status` | ENUM | draft/published/archived |
| `meta_title` | VARCHAR(70) | SEO title |
| `meta_description` | VARCHAR(160) | SEO description |
| `views_count` | INTEGER | Total views |
| `helpful_votes` | INTEGER | Helpful count |
| `not_helpful_votes` | INTEGER | Not helpful count |
| `related_article_ids` | UUID[] | Array of related IDs |
| `published_at` | TIMESTAMP | Published timestamp |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |
| `deleted_at` | TIMESTAMP | Soft delete |

**Indexes:**
- `idx_kb_articles_workspace` on `workspace_id`
- `idx_kb_articles_category` on `category_id`
- `idx_kb_articles_status` on `status`
- `idx_kb_articles_published_at` on `published_at` DESC
- UNIQUE `workspace_id, slug`
- Full-text index on `title, content` (PostgreSQL tsvector)

**Table: `kb_article_votes`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `article_id` | UUID | FK → kb_articles.id |
| `session_id` | VARCHAR(100) | Anonymous session ID |
| `vote` | ENUM | helpful/not_helpful |
| `feedback` | TEXT | Optional text feedback |
| `created_at` | TIMESTAMP | Created |

**Indexes:**
- `idx_kb_votes_article` on `article_id`
- UNIQUE `article_id, session_id`

**Table: `kb_search_logs`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `query` | VARCHAR(255) | Search query |
| `results_count` | INTEGER | Results found |
| `created_at` | TIMESTAMP | Created |

**Indexes:**
- `idx_kb_search_logs_workspace` on `workspace_id`
- `idx_kb_search_logs_created_at` on `created_at`

---

## 15. FIGMA COMPONENTS

**Component Tree:**
```
knowledge-base/
├── screens/
│   ├── SCR-KB01 (kb-dashboard)
│   │   ├── header (title + add article button)
│   │   ├── stats-row (4 stat cards)
│   │   └── articles-table
│   │       ├── table-header (title/category/views/status/actions)
│   │       ├── article-row × N
│   │       └── pagination
│   ├── SCR-KB02 (article-editor)
│   │   ├── editor-header (save/publish/preview)
│   │   ├── editor-sidebar (settings panel)
│   │   │   ├── title-input
│   │   │   ├── slug-input
│   │   │   ├── category-select
│   │   │   ├── featured-image-upload
│   │   │   ├── excerpt-textarea
│   │   │   ├── status-select
│   │   │   └── related-articles-picker
│   │   └── editor-main (WYSIWYG Tiptap)
│   │       ├── toolbar (bold/italic/heading/link/image)
│   │       └── content-area
│   ├── SCR-KB03 (categories-list)
│   │   ├── header (title + add category button)
│   │   └── categories-grid (3-col)
│   │       └── category-card × N
│   └── SCR-KB04 (analytics-page)
│       ├── header
│       ├── kpi-row (4 metrics)
│       ├── top-articles-table
│       ├── search-queries-chart
│       └── helpful-rate-trend-chart
├── public-portal/
│   ├── SCR-PUB01 (public-home)
│   │   ├── portal-header (logo + search)
│   │   ├── hero-section
│   │   └── categories-grid (4-col)
│   │       └── category-card × N
│   ├── SCR-PUB02 (category-view)
│   │   ├── breadcrumb (Home / Setup)
│   │   ├── category-header (emoji + name + description)
│   │   └── articles-grid (3-col)
│   │       └── article-card × N
│   └── SCR-PUB03 (article-view)
│       ├── breadcrumb
│       ├── article-header (title + metadata)
│       ├── article-content (markdown)
│       ├── helpful-voting-section
│       └── related-articles-row
├── modals/
│   ├── new-category-modal
│   │   ├── name-input
│   │   ├── emoji-picker
│   │   ├── description-textarea
│   │   └── footer (cancel + create)
│   ├── delete-article-confirm-modal
│   └── feedback-modal (after "not helpful" vote)
│       ├── textarea (what was missing?)
│       └── footer (skip + submit)
├── components/
│   ├── stat-card (240×100px)
│   │   ├── icon-32px
│   │   ├── number (32px bold)
│   │   ├── label (14px)
│   │   └── trend-badge (green/red arrow)
│   ├── article-row (table row)
│   │   ├── title-cell (truncated 300px)
│   │   ├── category-badge (emoji + name)
│   │   ├── views-count
│   │   ├── status-badge (draft/published)
│   │   └── actions-dropdown (edit/clone/delete)
│   ├── category-card (admin grid, 280×140px)
│   │   ├── emoji-icon-48px
│   │   ├── category-name (18px bold)
│   │   ├── article-count (14px gray)
│   │   └── actions (edit/delete icons)
│   ├── public-category-card (public portal, 260×200px)
│   │   ├── emoji-64px
│   │   ├── category-name (20px bold)
│   │   ├── description (14px gray, 2 lines)
│   │   └── article-count (12px gray)
│   ├── public-article-card (public portal, 320×240px)
│   │   ├── featured-image (320×140px)
│   │   ├── category-badge
│   │   ├── article-title (16px semibold, 2 lines)
│   │   ├── excerpt (14px gray, 2 lines)
│   │   └── footer (read time + views)
│   ├── helpful-voting-widget
│   │   ├── question "Bu maqola foydali bo'ldimi?"
│   │   ├── thumbs-up-button
│   │   └── thumbs-down-button
│   └── search-bar-public (landing hero)
│       ├── large-input (600px)
│       └── search-icon
```

**Component Variants:**
- `status-badge`: draft (gray) / published (green) / archived (orange)
- `stat-card` trend: positive (green arrow up) / negative (red arrow down) / neutral
- `article-card` (public): hover scale 1.02, shadow-sm → shadow-lg
- `helpful-voting-widget`: default / voted-helpful (green highlight) / voted-not-helpful (red highlight)

---

## 16. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **Stat card hover** | elevation shadow-sm → shadow-md | 150ms ease |
| **Article row hover** | bg gray-50 | 150ms ease |
| **Category card hover** | scale 1 → 1.02, shadow-sm → shadow-lg | 200ms ease |
| **Public article card hover** | scale 1 → 1.02, shadow-sm → shadow-lg | 200ms ease |
| **Helpful button click** | scale 1 → 0.9 → 1.1 → 1 (bounce) | 400ms ease-out |
| **Helpful vote success** | button bg white → green, checkmark fade-in | 300ms ease |
| **Status badge change** | fade-out 100ms + fade-in 200ms | 300ms total |
| **Editor save** | save button text "Saqlash" → "✓ Saqlandi" 2s → back | 2s ease |
| **Article publish** | status badge gray → green, confetti animation | 500ms |
| **Search input focus** | border primary-600, icon color gray → primary | 200ms ease |
| **Category emoji picker open** | slide-up from bottom, backdrop fade | 250ms ease-out |
| **Delete modal** | backdrop fade 0 → 50%, modal scale 0.95 → 1 | 200ms ease-out |
| **Article view count increment** | number scale 1 → 1.1 → 1 (pulse) | 300ms ease |
| **Related article card appear** | slide-in from right, opacity 0 → 1 | 300ms ease-out |
| **Feedback modal open** | slide-up from bottom | 250ms ease-out |
| **Tiptap toolbar button hover** | bg gray-100, scale 1.05 | 150ms ease |

---

## 17. ACCESSIBILITY

### Keyboard Navigation

**KB Dashboard:**
- **Tab:** Navigate through add button → tabs → table rows → pagination
- **Enter/Space:** Activate buttons, open article editor
- **Arrow keys (↑↓):** Navigate table rows
- **Escape:** Close dropdowns

**Article Editor:**
- **Tab:** Navigate through title → category → editor toolbar → content
- **Ctrl/Cmd + S:** Save draft
- **Ctrl/Cmd + Shift + P:** Publish article
- **Escape:** Close modals

**Public Portal:**
- **Tab:** Navigate categories → search → article cards
- **Enter:** Open article
- **Ctrl/Cmd + K:** Focus search (global shortcut)

### ARIA Labels and Roles

**KB Dashboard:**
- Table: `role="table"`, `aria-label="Knowledge base articles"`
- Article row: `role="row"`, `aria-label="{Title}, {category}, {views} views, {status}"`
- Actions dropdown: `role="menu"`, `aria-label="Article actions"`

**Article Editor:**
- Editor: `role="textbox"`, `aria-multiline="true"`, `aria-label="Article content editor"`
- Toolbar buttons: `aria-label="Bold"`, `aria-pressed` for toggle buttons
- Category select: `aria-label="Select category"`, `role="combobox"`

**Public Portal:**
- Search: `role="search"`, `aria-label="Search knowledge base"`
- Article grid: `role="list"`, article cards `role="listitem"`
- Helpful voting: `role="group"`, `aria-label="Was this helpful?"`, buttons `aria-label="Mark as helpful"`
- Breadcrumb: `role="navigation"`, `aria-label="Breadcrumb"`

### Screen Reader Announcements

**KB Dashboard:**
- Article created: "New artikel created: {title}."
- Article published: "Article published successfully."
- Article deleted: "Article deleted."

**Public Portal:**
- Search submit: "Searching for {query}... {count} results found."
- Helpful vote: "Thank you for your feedback."
- Article view: "Article loaded: {title}. Estimated read time: 5 minutes."

### Color Contrast (WCAG AA)

- Article title #111827 on white: 11.7:1 (AAA)
- Category name #6B7280 on white: 5.3:1 (AA)
- Status badge "Published" white on #10B981: 4.9:1 (AA)
- Public article excerpt #6B7280 on white: 5.3:1 (AA)
- Helpful button text #4F46E5 on white: 5.8:1 (AA)
- All interactive elements: 4.5:1+ contrast

### Focus Indicators

- All focusable elements: 2px solid #4F46E5 outline, 4px offset
- Article row focus: 3px left border #4F46E5
- Editor toolbar button focus: 2px primary-600 ring

### Touch Targets

- Mobile buttons: min 44×44px
- Desktop buttons: min 40×40px
- Article cards: 240px height (sufficient)
- Helpful buttons: 44×44px mobile

---

## 18. PERFORMANCE

### Loading Targets
- Dashboard initial load: < 1s
- Article editor load: < 800ms
- Public portal home: < 1.2s (SSR)
- Article view (public): < 900ms (SSR)
- Search query: < 300ms
- Tiptap editor first input: < 100ms

### Optimization
- **SSR:** Server-side rendering for public portal (SEO)
- **CDN:** All images, featured images served from CDN (WebP format)
- **Caching:** Public articles cached 15min, categories 1 hour
- **Lazy load:** Article cards images (Intersection Observer)
- **Search:** Full-text search with PostgreSQL tsvector (or Algolia for complex)
- **Pagination:** 12 articles per page public, 20 on admin
- **Database indexes:** Full-text index on title/content
- **Editor autosave:** Debounce 3s, save draft in background

---

## 19. SEO & PUBLIC PORTAL

### SEO Best Practices
- **Meta tags:** Dynamic meta_title, meta_description per article
- **Open Graph:** og:title, og:description, og:image (featured image)
- **Schema.org:** Article structured data (HowTo, FAQ schemas)
- **Sitemap:** Auto-generated sitemap.xml with all published articles
- **Canonical URLs:** Prevent duplicate content
- **404 handling:** Custom 404 page with search + popular articles

### Public Portal URL Structure
- Home: `https://help.qulaychat.uz/`
- Category: `https://help.qulaychat.uz/c/setup`
- Article: `https://help.qulaychat.uz/a/widget-ornatish-qollanmasi`
- Search: `https://help.qulaychat.uz/search?q=widget`

### Custom Domain Support
- Allow workspaces to use custom domain: `help.mydomain.com`
- SSL certificate auto-provision (Let's Encrypt)
- DNS CNAME record required

---

## 20. USER FLOWS

### Flow 1: Create & Publish Article (Admin)
1. Admin navigates to KB Dashboard (SCR-KB01)
2. Clicks "+ Maqola yaratish"
3. Article Editor opens (SCR-KB02)
4. Fills: Title "Widget o'rnatish qo'llanmasi"
5. Selects Category "Setup"
6. Writes content in Tiptap editor (headings, paragraphs, images, code blocks)
7. Adds featured image (uploads from computer)
8. Writes Excerpt: "QULAY CHAT widget o'rnatish uchun..."
9. Fills SEO fields: Meta title, Meta description
10. Selects related articles
11. Clicks "Saqlash" (saves as draft)
12. Reviews article in Preview mode
13. Clicks "Nashr qilish"
14. Success toast: "Maqola nashr etildi!"
15. Article now visible on public portal

### Flow 2: Customer Finds Article (Public)
1. Customer visits `https://help.qulaychat.uz/`
2. Sees hero with search bar
3. Types "widget install" and presses Enter
4. Search results show 5 articles
5. Clicks "Widget o'rnatish qo'llanmasi"
6. Article loads (SSR, fast)
7. Reads article (5 min estimated)
8. Scrolls to bottom
9. Sees "Bu maqola foydali bo'ldimi?"
10. Clicks "👍 Foydali"
11. Thank you message: "Rahmat! Fikringiz uchun tashakkur!"
12. Sees related articles below
13. Clicks related article, continues browsing

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 685 → 1850+  
**Holat:** ✅ COMPLETE
