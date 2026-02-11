# CHATFLOW — Knowledge Base (Bilimlar Bazasi)

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
- Input: "CHATFLOW Yordam Markazi" (shown on public portal)

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
- Default: `kb.chatflow.uz/workspace-name`
- Custom domain: Input "docs.mysite.com" + DNS setup instructions
- ☑ "Maxsus domen ulash" checkbox

**SEO:**
- Site title: "CHATFLOW Yordam Markazi"
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
- Homepage: `kb.chatflow.uz/workspace-name`
- Category: `kb.chatflow.uz/workspace-name/category-slug`
- Article: `kb.chatflow.uz/workspace-name/category-slug/article-slug`

### Homepage UI

#### Header (sticky)
- **Logo:** Left-aligned, links to homepage
- **Navigation:** Categories, Contact (if enabled)
- **Language selector:** O'zbek | Русский | English (flags)
- **"Chat yozish" button:** Opens widget (Primary button)

#### Hero Section
- **Background:** Primary gradient or solid Primary-50
- **Title:** "CHATFLOW Yordam Markazi" 48px Bold, Gray-900
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
- **Copyright:** "© 2026 CHATFLOW. Barcha huquqlar himoyalangan."

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
[Visitor] → [Public KB URL: kb.chatflow.uz/workspace]
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
**Holat:** Production Ready
