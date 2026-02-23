# QULAY CHAT — Advanced Analytics (Kengaytirilgan Analitika)

## Modul maqsadi
Advanced Analytics — QULAY CHAT platformasida operatorlar va jamoa faoliyatini chuqur tahlil qilish uchun professional analitika moduli. Bu yerda Admin va Manager real-time metriklar, custom dashboardlar, SLA monitoring, va export funksiyalaridan foydalanadi.

**Kirish:** Admin (to'liq), Manager (to'liq), Operator (faqat o'z statistikasi)

---

## 1. Analytics Dashboard (SCR-AN01) — Asosiy Ko'rinish

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Analitika" 24px Semibold
- **Date range selector:** Last 7 days | 30 days | This month | Custom
- **Date format:** "MMM D, YYYY" standard (masalan: "Jan 15, 2024", range: "Jan 1 - Jan 31, 2024")
- **Export button:** "Export PDF/CSV" Outline button

#### Quick KPI Cards (4 cards)
**Card size:** 240×120px each, inline flex, gap 20px

1. **Total Chats:**
   - Icon: 💬 24px
   - Number: "1,247" 32px Bold, Gray-900
   - Change: "+18% vs last period" 12px Success-500

2. **Avg First Response:**
   - Icon: ⚡ 24px
   - Time: "1m 23s" 32px Bold
   - Change: "-15% (faster)" 12px Success-500

3. **CSAT Score:**
   - Icon: 😊 24px
   - Score: "4.7/5" 32px Bold
   - Change: "+0.3 vs last month" 12px Success-500

4. **Resolution Rate:**
   - Icon: ✅ 24px
   - Percentage: "87%" 32px Bold
   - Change: "+5% vs last period" 12px Success-500

#### Navigation Tabs (Secondary menu)
- **Overview** (current) | Responsiveness | Operators | SLA | Channels | Segments | Tags | Custom

*(Each tab links to respective advanced analytics sub-module)*

#### Main Charts Section

**Charts Grid (2 columns):**

1. **Chats Over Time (Line Chart)**
   - Width: 550px, Height: 280px
   - X-axis: Dates (last 30 days)
   - Y-axis: Number of chats
   - Line: Primary-600, shadow-md
   - Hover: Tooltip with date + count
   - Annotations: Peak hours marked

2. **Chats by Channel (Pie Chart)**
   - Width: 550px, Height: 280px
   - Segments: Website 45%, Facebook 30%, Telegram 15%, WhatsApp 10%
   - Colors: Brand colors for each channel
   - Legend: Below chart
   - Interactive: Click segment to filter

3. **Response Time Distribution (Bar Chart)**
   - Width: 550px, Height: 280px
   - X-axis: Time buckets (<1m, 1-5m, 5-15m, 15-30m, >30m)
   - Y-axis: Number of chats
   - Bars: Primary gradient
   - Target line: SLA target (5m) in Red

4. **Top Operators (Horizontal Bar Chart)**
   - Width: 550px, Height: 280px
   - Y-axis: Operator names + avatars
   - X-axis: Chats handled
   - Bars: Success-500
   - Click: Link to operator detail (SCR-AN07)

---

## 2. Responsiveness Analytics (SCR-AN06)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Responsiveness — Javob Berish Tezligi" 24px Semibold
- **Date range:** Selector
- **Benchmark:** "Industry avg: 2m 15s" 14px Gray-600 (reference)

#### KPI Cards Row (5 cards)

1. **First Response Time:**
   - "1m 23s" 32px Bold
   - Target: "Target: <2m" 13px Gray-600
   - Status: ✅ "Within SLA" Success badge

2. **Avg Response Time:**
   - "45s" 32px Bold
   - Trend: ⬇️ "-10% vs last week"

3. **Max Response Time:**
   - "12m 34s" 32px Bold
   - Context: "Today at 14:23"

4. **Missed Chats:**
   - "8" 32px Bold, Error-500
   - Percentage: "3.2% of total"

5. **Response Rate:**
   - "96.8%" 32px Bold
   - Target: "Target: >95%" Success

#### Response Time Breakdown Chart
- **Type:** Histogram (distribution)
- **X-axis:** Time buckets (0-30s, 30s-1m, 1-2m, 2-5m, >5m)
- **Y-axis:** Number of chats
- **Color coding:**
  - Green: <1m (excellent)
  - Yellow: 1-2m (good)
  - Orange: 2-5m (acceptable)
  - Red: >5m (needs improvement)

#### Response Time by Hour Heatmap
- **Type:** Heatmap grid
- **Y-axis:** Days of week (Mon-Sun)
- **X-axis:** Hours (0-23)
- **Cell color:** Green (fast) → Red (slow)
- **Hover:** Tooltip "Monday 14:00 — Avg 2m 15s"
- **Insights:** Identify peak hours with slow response

#### Top Fastest/Slowest Operators Table
- **Split view:** 2 columns

**Fastest Operators:**
- Avatar, Name, Avg Response: "35s", Badge: 🏆

**Slowest Operators:**
- Avatar, Name, Avg Response: "3m 45s", Note: "Needs coaching"

---

## 3. Operators Performance (SCR-AN07)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Operatorlar Performance" 24px Semibold
- **Date range:** Selector
- **Actions:**
  - "Export" Outline button
  - "Compare operators" Ghost button (opens comparison modal)

#### Operators Table

**Table Controls:**
- Search: "Operator nomi..."
- Filters:
  - Team: All teams | Support | Sales | Technical
  - Status: All | Online | Offline
  - Sort by: Chats | CSAT | Response time | Resolution rate

**Table Columns:**
1. **Operator** (width: 200px)
   - Avatar 32px
   - Name + Online status (green dot if online)
2. **Chats Handled** (width: 120px)
   - "87 chats"
3. **Avg Response Time** (width: 150px)
   - "1m 15s" + color badge (green/yellow/red)
4. **CSAT** (width: 100px)
   - "4.8/5" + ⭐ stars
5. **Resolution Rate** (width: 120px)
   - "92%" + progress bar visual
6. **Online Time** (width: 120px)
   - "7h 23m today"
7. **Actions** (width: 80px)
   - "Ko'rish" link → SCR-AN07-S01 (operator detail)

**Row Styling:**
- Height: 56px
- Hover: bg-gray-50
- Click row: Opens detail

#### Top Performers Section
- **Title:** "Eng yaxshi operatorlar (bu oy)" 18px Semibold
- **Layout:** 3 cards (podium style)

**Card:**
- Avatar 64px
- Name 16px Semibold
- Rank: 🥇 1st / 🥈 2nd / 🥉 3rd
- Stats:
  - "147 chats"
  - "4.9 CSAT"
  - "35s avg response"

---

### Operator Detail Page (SCR-AN07-S01)

#### Header
- **Back arrow:** ← Operatorlar
- **Avatar + Name:** 48px + 24px Semibold
- **Status:** Online (green badge) or Offline (gray badge)
- **Actions:** "Send feedback" | "View chat history"

#### KPI Cards Row (6 cards)

1. Total Chats: "147"
2. Avg Response: "1m 15s"
3. CSAT: "4.8/5"
4. Resolution Rate: "92%"
5. Online Time: "172h this month"
6. Missed Chats: "3 (2%)"

#### Performance Over Time Chart
- Line chart: X-axis dates, Y-axis multiple metrics (chats, response time, CSAT)
- Multi-line: Each metric different color
- Toggle metrics: Checkboxes to show/hide lines

#### Recent Chats Table
- **Columns:** Date, Customer, Duration, CSAT, Resolution
- **Actions:** "View transcript" link

#### Feedback & Notes Section
- **Title:** "Manager Notes" 18px Semibold
- Textarea: Add internal note about operator
- Previous notes: List with date + author

---

## 4. SLA Monitoring (SCR-AN08)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "SLA Monitoring" 24px Semibold
- **Subtitle:** "Service Level Agreement tracking" 14px Gray-600
- **Date range:** Selector

#### SLA Compliance Cards (3 cards)

1. **First Response SLA:**
   - Target: "Respond within 2 minutes"
   - Compliance: "94.5%" 32px Bold
   - Status: ⚠️ "Below target (95%)" Warning badge
   - Breaches today: "8 chats"

2. **Resolution SLA:**
   - Target: "Resolve within 30 minutes"
   - Compliance: "87%" 32px Bold
   - Status: ✅ "Within target" Success badge

3. **Availability SLA:**
   - Target: "99% uptime"
   - Compliance: "99.8%" 32px Bold
   - Status: ✅ "Excellent" Success badge

#### SLA Breaches Timeline
- **Type:** Timeline chart
- **X-axis:** Time (24 hours)
- **Events:** Red markers where SLA breached
- **Hover:** Tooltip "14:23 — First response 5m 12s (SLA: 2m)"
- **Filter:** By operator, team, channel

#### Breach Reasons (Pie Chart)
- **Segments:**
  - High volume (45%)
  - Operator unavailable (30%)
  - Complex issue (15%)
  - Technical issue (10%)
- **Colors:** Warning palette
- **Click:** Filter table below by reason

#### SLA Breaches Table
- **Columns:**
  1. Time: "14:23"
  2. Customer: Name + avatar
  3. Operator: Name or "Unassigned"
  4. SLA Type: "First Response"
  5. Target: "2m"
  6. Actual: "5m 12s" (red)
  7. Reason: Dropdown (manual select)
  8. Actions: "View chat" link

---

## 5. Channels Analytics (SCR-AN09)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Channels — Kanallar Bo'yicha" 24px Semibold
- **Date range:** Selector

#### Channels Overview Cards (Grid, 4 cards)

Each card:
- **Icon:** 48px (Website 🌐, Facebook 📘, Telegram ✈️, WhatsApp 💬)
- **Channel Name:** 18px Semibold
- **Total Chats:** "547 chats" 24px Bold
- **Percentage:** "45% of total" 14px Gray-600
- **Avg Response:** "1m 23s" 14px
- **CSAT:** "4.7/5" 14px
- **Click:** Expands to channel detail

#### Channel Performance Comparison Table
- **Columns:**
  1. Channel (icon + name)
  2. Total Chats: "547"
  3. Avg Response: "1m 23s"
  4. CSAT: "4.7/5"
  5. Resolution Rate: "87%"
  6. Peak Hours: "14:00-16:00"
  7. Trend: ⬆️ "+15%" or ⬇️ "-5%"

#### Traffic by Channel Over Time (Stacked Area Chart)
- **X-axis:** Dates
- **Y-axis:** Number of chats
- **Stacked areas:** Each channel different color
- **Legend:** Below chart, toggle channels on/off
- **Hover:** Tooltip with breakdown

#### Channel-Specific Insights
- **Title:** "Insights" 18px Semibold
- **Cards:**
  - "Facebook chats spike on weekends" 💡
  - "WhatsApp has highest CSAT (4.9)" ⭐
  - "Website response time improving (+12%)" 📈

---

## 6. Segments Analytics (SCR-AN10)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Segmentlar — Mijoz Segmentlari" 24px Semibold
- **Subtitle:** "Mijozlarni segment bo'yicha tahlil qiling" 14px Gray-600
- **Actions:** "+ Yangi segment yaratish" Primary button

#### What are Segments?
- **Info box (dismissible):**
  - Icon: 💡 24px
  - Text: "Segmentlar — mijozlarni guruhlarga ajratish (masalan: VIP, yangi, qaytgan). Har bir segment uchun alohida metrikalar ko'ring."
  - "Tushundim" button (dismisses box)

#### Predefined Segments Cards (Grid, 3 columns)

1. **VIP Customers:**
   - Icon: 👑 24px
   - Count: "47 mijoz"
   - Avg CSAT: "4.9/5"
   - Avg Response: "35s" (priority)
   - Click: Expand detail

2. **New Customers:**
   - Icon: 🆕 24px
   - Count: "127 mijoz"
   - Avg CSAT: "4.3/5"
   - Conversion: "12% to paid"

3. **Returning Customers:**
   - Icon: 🔄 24px
   - Count: "423 mijoz"
   - Avg CSAT: "4.7/5"
   - Retention: "87%"

#### Custom Segments Table
- **Title:** "Maxsus segmentlar" 18px Semibold
- **Columns:**
  1. Segment Name: "Savatni tashlaganlar"
  2. Criteria: "Cart value >$50, No purchase"
  3. Count: "87 mijoz"
  4. CSAT: "4.2/5"
  5. Actions: Edit | Delete | View

#### Segment Performance Comparison Chart
- **Type:** Bar chart (horizontal)
- **Y-axis:** Segment names
- **X-axis:** CSAT score (0-5)
- **Bars:** Color-coded by score (green = high, red = low)

#### Create Segment Modal
- **Modal:** 600px width
- **Form:**
  - Segment Name: Input
  - Criteria (multi-select):
    - Country: Dropdown
    - Plan: Free | Pro | Enterprise
    - Last chat: <7 days | 7-30 days | >30 days
    - CSAT history: >4.5 | <3.0
    - Tags: Multi-select
  - "+" Add rule (AND/OR logic)
- **Preview:** "87 mijoz matches these criteria"
- **Actions:** "Bekor qilish" | "Yaratish"

---

## 7. Tags Analytics (SCR-AN11)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Tags — Teglar Bo'yicha" 24px Semibold
- **Subtitle:** "Chat teglari tahlili" 14px Gray-600
- **Actions:** "Teglarni boshqarish" Outline → SCR-T02

#### Top Tags Cloud
- **Layout:** Tag cloud (word cloud style)
- **Tags:** Font size based on frequency (most used = largest)
- **Colors:** Primary-600 variants
- **Hover:** Tooltip "Texnik yordam — 127 chats"
- **Click:** Filter table below

#### Tags Usage Table
- **Columns:**
  1. Tag Name: "Texnik yordam" (with tag badge)
  2. Total Chats: "127"
  3. Percentage: "12% of total"
  4. Avg CSAT: "4.3/5"
  5. Avg Resolution Time: "15m 23s"
  6. Trend: ⬆️ "+8% bu oy"
  7. Actions: "Ko'rish" → Filter chats by tag

#### Tags by Operator Heatmap
- **Y-axis:** Operator names
- **X-axis:** Tag names
- **Cells:** Color intensity = frequency
- **Hover:** "Akmal — Texnik yordam — 23 chats"
- **Insights:** Which operators handle which issues most

#### Tag Combination Analysis
- **Title:** "Ko'p ishlatiladigan kombinatsiyalar" 18px Semibold
- **Table:**
  - Tag Combo: "Texnik yordam + Urgent" (2 badges)
  - Count: "23 chats"
  - Avg Time: "8m 12s" (faster for urgent)

---

## 8. Custom Dashboards (SCR-AN12)

### Layout
Dashboard Shell + Main Content Area (drag-drop canvas)

### UI Komponentlar

#### Header
- **Title:** "Custom Dashboard" 24px Semibold
- **Dropdown:** Select dashboard (My Dashboard | Sales Dashboard | Support Dashboard)
- **Actions:**
  - "+ Yangi dashboard" Link → Create modal
  - "Tahrirlash" Outline button → Edit mode
  - "Export PDF" Ghost button

#### Dashboard Canvas (Edit Mode)
- **Grid:** 12 columns, drag-drop widgets
- **Widget Library (left sidebar):**
  - Charts: Line, Bar, Pie, Donut, Heatmap
  - Metrics: KPI card, Number, Gauge
  - Data: Table, List
  - Text: Title, Description

**Drag Widget Flow:**
1. Drag widget from library to canvas
2. Resize: Drag corners (responsive grid)
3. Configure: Click widget → Settings panel (right sidebar)

#### Widget Settings Panel (Right Sidebar, 320px)
- **Widget Type:** Dropdown (change type)
- **Data Source:**
  - Metric: Dropdown (Total chats, CSAT, Response time, etc.)
  - Date range: Last 7 days | 30 days | Custom
  - Filter: By operator, team, channel, tag
- **Visualization:**
  - Chart type: Line | Bar | Pie
  - Color scheme: Primary | Success | Custom
- **Title:** Input "Total Chats by Channel"
- **Actions:**
  - "Amalga oshirish" Primary (apply changes)
  - "O'chirish" Ghost (remove widget)

#### Dashboard Examples (Templates)

**1. Executive Dashboard:**
- 4 KPI cards: Chats, CSAT, Response, Resolution
- Line chart: Chats over time
- Pie chart: Chats by channel
- Top operators table

**2. Sales Dashboard:**
- KPI: Leads, Conversions, Revenue
- Funnel chart: Lead → Chat → Sale
- Bar chart: Sales by product
- Table: Top sales operators

**3. Support Dashboard:**
- KPI: Tickets, Resolution rate, SLA compliance
- Heatmap: Support hours
- Bar chart: Issues by category
- Table: Open tickets

#### Save Dashboard Modal
- **Modal:** 500px width
- **Form:**
  - Dashboard Name: Input "Q1 Performance"
  - Description: Textarea (optional)
  - Visibility:
    - ⦿ Private (only me)
    - ◯ Team (my team)
    - ◯ Workspace (everyone)
  - Set as default: ☑ Checkbox
- **Actions:** "Bekor qilish" | "Saqlash"

---

## 9. Export & Reporting (SCR-AN13)

### Layout
Modal (700px width)

### UI Komponentlar

#### Header
- **Title:** "Export Analytics Report" 20px Semibold
- **Close:** X button

#### Report Configuration

**1. Report Type:**
- ⦿ Standard Report (predefined template)
- ◯ Custom Report (select metrics)

**2. Template (if Standard):**
- Dropdown: Daily Summary | Weekly Performance | Monthly Executive | Quarterly Review

**3. Metrics (if Custom):**
- Multi-select checkboxes:
  - ☑ Total chats
  - ☑ Avg response time
  - ☑ CSAT score
  - ☑ Operators performance
  - ☑ Channels breakdown
  - ☑ SLA compliance
  - ☑ Tags analytics

**4. Date Range:**
- Dropdown: Last 7 days | Last 30 days | This month | Custom
- Custom: From [date picker] To [date picker]

**5. Filters:**
- Operators: Multi-select
- Teams: Multi-select
- Channels: Multi-select
- Tags: Multi-select

**6. Format:**
- ⦿ PDF (visual report with charts)
- ◯ CSV (data export for Excel)
- ◯ Excel (.xlsx with charts)

**7. Delivery:**
- ⦿ Download now
- ◯ Email to: Input (multiple emails, comma-separated)
- ◯ Schedule: Daily | Weekly | Monthly (recurring report)

#### Preview
- Button: "Ko'rib chiqish" Outline → Opens preview modal
- Shows: Report cover page, sample charts

#### Actions
- "Bekor qilish" Ghost
- "Export" Primary button

#### After Export
- Progress: "Generating report... 45%"
- Success: "Report ready! Download" link
- Email sent: "Report emailed to admin@example.com" Toast

---

## 10. Components

### KPI Card (Advanced)
- Size: 240×120px
- Border: 1px Gray-200
- Radius: 12px
- Padding: 20px
- **Content:**
  - Icon: 24px, top-left
  - Label: 13px Gray-600, top-right
  - Value: 32px Bold, Gray-900, centered
  - Change: 12px Success/Error-500, below value
    - Format: "+18% vs last period" or "⬇️ -5s faster"
  - Spark line: Mini chart below (optional)

### Comparison Table Row
- Height: 56px
- Hover: bg-gray-50
- **Highlight best/worst:**
  - Best: bg-Success-50, Success-600 text, 🏆 icon
  - Worst: bg-Error-50, Error-600 text, icon

### Heatmap Cell
- Size: 40×40px
- Border: 1px White
- Background: Gradient intensity
  - Low: Primary-100
  - High: Primary-900
- Hover: Tooltip with exact value
- Click: Drill-down modal

---

## 11. Texnik Talablar

- **Real-time Updates:** WebSocket for live metrics (refresh every 5-10s)
- **Data Aggregation:** Pre-calculate metrics, cache for 1 minute
- **Export:** Generate reports asynchronously (background job)
- **Custom Dashboards:** Save layout as JSON (widget positions, configs)
- **Historical Data:** Store metrics for 12 months (daily aggregates)
- **Performance:** Load analytics page <2s, charts render <500ms

---

## 12. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View analytics dashboard | ✅ | ✅ | ⚠️ (own stats) |
| View operators performance | ✅ | ✅ | ⚠️ (read-only) |
| View SLA monitoring | ✅ | ✅ | ⚠️ (read-only) |
| Create custom dashboards | ✅ | ✅ | ❌ |
| Export reports | ✅ | ✅ | ⚠️ (own stats) |
| Schedule reports | ✅ | ✅ | ❌ |
| View segments analytics | ✅ | ✅ | ❌ |
| Compare operators | ✅ | ✅ | ❌ |

---

**Oxirgi yangilanish:** 2026-02-11
**Holat:** Production Ready
