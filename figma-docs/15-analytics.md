# CHATFLOW — Analytics va Hisobotlar

**Ekran ID:** `SCR-A01`, `SCR-A02`, `SCR-A03`  
**Fayl nomi:** `screen-analytics-overview.fig`, `screen-analytics-performance.fig`, `screen-analytics-csat.fig`  
**Desktop:** 1440×900px (minimal height)

## Umumiy yondashuv
Analytics bo'limi operator samaradorligi, javob vaqti va mijoz qoniqishini ko'rsatadi. Grafiklar va metrikalar sodda va tushunarli bo'lsin. Admin va Manager to'liq ko'radi, Operator faqat o'z statistikasini ("My Stats") ko'radi.

**Maqsad:** Tez qaror qabul qilish uchun asosiy KPI'larni ko'rsatish. Real-time updates, export, compare periods.

**Accessibility:** WCAG 2.1 AA, keyboard navigation, screen reader friendly charts.

**⭐ Yangilandi:** Analytics moduli kengaytirildi! Advanced Analytics xususiyatlari qo'shildi (Responsiveness, Operators Performance, SLA Monitoring, Channels, Segments, Tags, Custom Dashboards). To'liq spetsifikatsiyalarni [25-advanced-analytics.md](25-advanced-analytics.md) faylida ko'ring.

---

## Tabs (Main Navigation)
- **Overview** — Asosiy KPI'lar, trendlar, kanallar
- **Performance** — Agent leaderboard, response time, activity
- **CSAT** — Customer satisfaction ratings, feedback
- **My Stats** — Operator shaxsiy statistikasi (faqat Operator role)
- **Export** — Hisobotlarni yuklab olish, scheduled reports
- **Advanced** → Responsiveness, Operators, SLA, Channels, Segments, Tags, Custom Dashboards ([25-advanced-analytics.md](25-advanced-analytics.md))

Tab specs:
- Balandlik: 48px
- Font: 14px Medium
- Active: #4F46E5 border-bottom 2px, text #4F46E5
- Inactive: text #6B7280, hover #374151

---

## Global Filters Panel

**Joylashuv:** Tabs ostida, 100% kenglik, 64px balandlik  
**Background:** White, border-bottom 1px #E5E7EB  
**Padding:** 16px 24px  

**Elementlar:**

1. **Date Range Picker**
   - Dropdown: 200px kenglik, 44px balandlik
   - Icon: Icon/Calendar 20px chap tomonda
   - Placeholder: "Oxirgi 30 kun" (default)
   - **Date format standard:** "MMM D, YYYY" (masalan: "Jan 15, 2024", range: "Jan 1 - Jan 31, 2024")
   - Presets: "Bugun", "Kecha", "Oxirgi 7 kun", "Oxirgi 30 kun", "Oxirgi 90 kun", "Bu oy", "O'tgan oy", "Custom range"
   - Custom range modal: 2 date inputs (From, To) with calendar picker, "Qo'llash" button

2. **Agent Filter (Admin/Manager only)**
   - Dropdown: 180px kenglik, 44px balandlik
   - Icon: Icon/Users 20px
   - Options: "Barcha agentlar" (default), then list of agents with avatar 24px + name
   - Multi-select: Checkboxes inside dropdown
   - Selected count badge: "3 ta agent" on dropdown

3. **Channel Filter**
   - Dropdown: 160px kenglik
   - Icon: Icon/Hash 20px
   - Options: "Barcha kanallar", "Website", "Telegram", "Facebook", "Instagram", "WhatsApp"
   - Multi-select

4. **Tags Filter**
   - Dropdown: 160px kenglik
   - Icon: Icon/Tag 20px
   - Options: "Barcha teglar", then list of tags (VIP, Bug, Billing, etc.)
   - Multi-select

5. **Compare Toggle (optional)**
   - Toggle: 140px kenglik, 44px balandlik
   - Text: "Taqqoslash" — 14px Medium
   - When ON: Date range picker shows 2 ranges (Current period, Previous period)

6. **Reset Button**
   - Icon-only button: Icon/X 20px, 36×36px, hover bg #F3F4F6
   - Tooltip: "Filtrlarni tozalash"

---

## 1. OVERVIEW TAB

### 1.1 Metric Cards

**Layout:** 4-column grid, gap 24px  
**Card size:** Auto width (1fr), 120px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 20px  
**Hover:** border #4F46E5, shadow-sm  

**Card 1: Total Chats**
- Icon: Icon/MessageCircle 32px, #4F46E5 fon circle 48px
- Label: "Jami chatlar" — 13px Medium #6B7280
- Value: "1,247" — 32px Bold #111827
- Trend: "+12.5%" — 13px Semibold #10B981 (green), Icon/TrendingUp 14px
- Comparison: "vs oxirgi oy" — 12px Regular #9CA3AF

**Card 2: Avg Response Time**
- Icon: Icon/Clock 32px, #F59E0B fon circle
- Label: "O'rtacha javob vaqti"
- Value: "2m 45s" — 32px Bold #111827
- Trend: "-8.2%" — 13px Semibold #10B981 (green, down is good)
- Comparison: "vs oxirgi oy"

**Card 3: Resolution Time**
- Icon: Icon/CheckCircle 32px, #8B5CF6 fon circle
- Label: "Hal qilish vaqti"
- Value: "18m 30s" — 32px Bold #111827
- Trend: "+3.1%" — 13px Semibold #DC2626 (red, up is bad)

**Card 4: CSAT Score**
- Icon: Icon/Star 32px, #FBBF24 fon circle
- Label: "CSAT"
- Value: "4.6 / 5" — 32px Bold #111827
- Trend: "+0.2" — 13px Semibold #10B981 (green)
- Visual: 5 stars below value, 4.6 filled (partial fill on 5th star)

**Additional Metrics (if space allows, 2nd row):**
- **Resolved Chats:** "1,024 / 1,247" with progress bar 82%
- **Missed Chats:** "23" — red color #DC2626
- **Transfer Rate:** "4.8%" — green if <5%, yellow if 5-10%, red if >10%

---

### 1.2 Chats Over Time Line Chart

**Joylashuv:** Metric cards ostida, 100% kenglik, 360px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Chatlar dinamikasi" — 18px Semibold #111827
- Subtitle: "Oxirgi 30 kun" — 14px Regular #6B7280
- Legend (o'ng tomonda): "Barcha chatlar" #4F46E5, "Resolved" #10B981, "Missed" #DC2626

**Chart:**
- Type: Line chart (multi-line if compare mode)
- X-axis: Dates (30 days), labels har 5 kunda (1, 5, 10, 15, 20, 25, 30)
- Y-axis: Chat count (0-100), labels har 20 da
- Grid: Horizontal lines, 1px #F3F4F6
- Line 1: "Barcha chatlar" — 2px width, #4F46E5, smooth curve
- Line 2: "Resolved" — 2px width, #10B981, smooth curve
- Line 3: "Missed" — 2px width, #DC2626, smooth curve
- Data points: 6px circles on lines, visible on hover

**Tooltip (hover on data point):**
- Size: 160px × 100px, white bg, shadow-lg, border-radius 8px
- Content:
  - Date: "15 Mart 2024" — 13px Semibold #111827
  - Barcha: "47 chats" — 14px Regular #4F46E5
  - Resolved: "42 chats" — 14px Regular #10B981
  - Missed: "5 chats" — 14px Regular #DC2626
  - Resolution rate: "89%" — 13px Regular #6B7280

---

### 1.3 Channels Breakdown Bar Chart

**Joylashuv:** Line chart yonida (o'ng tomonda), 360px kenglik, 360px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Kanal bo'yicha" — 18px Semibold #111827
- Total: "1,247 chats" — 14px Regular #6B7280

**Chart:**
- Type: Horizontal bar chart (5 channels)
- Bars: 52px balandlik each, 16px gap
- Bar colors: Unique per channel (Website #4F46E5, Telegram #0088CC, Facebook #1877F2, Instagram #E4405F, WhatsApp #25D366)
- Bar width: Percentage based (max 100% = 500px)

**Bar Structure:**
1. **Channel Icon + Name** (chap tomonda)
   - Icon: 24px (channel-specific logo)
   - Name: "Website" — 14px Medium #111827
   - Position: Absolute left, outside bar

2. **Bar Background**
   - Background: Channel color at 10% opacity
   - Filled bar: Channel color at 100%
   - Border-radius: 8px

3. **Value + Percentage** (o'ng tomonda bar ichida)
   - Text: "584 chats (47%)" — 14px Semibold white
   - Position: Right-aligned inside bar, 12px padding

**Channels (example data):**
- Website: 584 (47%)
- Telegram: 312 (25%)
- Facebook: 187 (15%)
- Instagram: 124 (10%)
- WhatsApp: 40 (3%)

---

## 2. PERFORMANCE TAB

### 2.1 Agent Leaderboard

**Joylashuv:** Sahifa tepasida, 100% kenglik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  

**Header:**
- Title: "Agent samaradorligi" — 20px Semibold #111827
- Subtitle: "Top 10 agentlar (oxirgi 30 kun)" — 14px Regular #6B7280

**Jadval:**
- Kolonlar: 8 (Rank, Agent, Chats, Resolved, Avg Response, Resolution Time, CSAT, Transfers)
- Row height: 56px
- Header row: 48px balandlik, bg #F9FAFB
- Sortable: All columns clickable

**Kolonlar:**
1. **Rank** — 60px kenglik, "1", "2", "3", ... (Medal icons 🥇🥈🥉 for top 3)
2. **Agent** — 200px, avatar 40px + name 14px Semibold + status dot (online green)
3. **Chats** — 100px, "124" — bold, trend arrow if compare mode
4. **Resolved** — 100px, "118" (95%) — green 13px Regular
5. **Avg Response** — 120px, "1m 45s" — 14px Regular, color-coded (green <2min, yellow 2-5min, red >5min)
6. **Resolution Time** — 140px, "12m 30s" — 14px Regular
7. **CSAT** — 100px, "4.8 / 5" — 14px Bold, 5 stars icon 12px
8. **Transfers** — 100px, "6 (5%)" — red if >10%

**Row hover:** bg #F9FAFB

**Pagination:** 10 rows per page, bottom pagination "1 2 [3] 4 5"

---

### 2.2 Response Time Distribution Chart

**Joylashuv:** Leaderboard ostida, 50% kenglik (chap tomonda), 320px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Javob vaqti taqsimoti" — 18px Semibold #111827

**Chart:**
- Type: Donut chart (pie chart with center hole)
- Size: 240px diameter, 80px center hole
- 5 segments:
  - < 1 min: 35% — #10B981 (green)
  - 1-2 min: 28% — #84CC16 (lime)
  - 2-5 min: 22% — #FBBF24 (yellow)
  - 5-10 min: 10% — #F59E0B (orange)
  - > 10 min: 5% — #DC2626 (red)

**Center Text:**
- Value: "2m 45s" — 24px Bold #111827
- Label: "O'rtacha" — 13px Regular #6B7280

**Legend (below chart):**
- 5 items: Color swatch 12px + label + percentage
- Example: "🟢 < 1 min: 35% (437 chats)"

---

### 2.3 Activity Timeline (by hour)

**Joylashuv:** Response time chart yonida (o'ng tomonda), 50% kenglik, 320px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Soatlik faollik" — 18px Semibold #111827
- Subtitle: "Bugun" — 14px Regular #6B7280

**Chart:**
- Type: Bar chart (vertical bars)
- X-axis: Hours (0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22)
- Y-axis: Chat count (0-50)
- Bars: 16px width, border-radius 4px top, #4F46E5
- Peak hours highlighted: Darker color #3730A3

**Tooltip:**
- "14:00 — 42 chats"
- "Eng aktiv soat" — if peak

---

### 2.4 Top Tags Table

**Joylashuv:** Activity timeline ostida, 100% kenglik, 240px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Eng ko'p ishlatiladigan teglar" — 18px Semibold #111827

**Jadval:**
- Kolonlar: 3 (Tag, Count, Percentage bar)
- Rows: 5-7 tags
- Row height: 40px

**Kolonlar:**
1. **Tag** — 200px, badge pill (tag color bg, white text)
2. **Count** — 100px, "87 chats" — 14px Regular #111827
3. **Percentage** — Auto, progress bar (percentage based, tag color), "7%" text

**Example data:**
- VIP: 87 (7%)
- Billing: 124 (10%)
- Bug: 54 (4%)
- Feature Request: 42 (3%)
- General: 940 (75%)

---

## 3. CSAT TAB

### 3.1 CSAT Overview Card

**Joylashuv:** Sahifa tepasida, 100% kenglik, 160px balandlik  
**Background:** Gradient (#FFFBEB to white), border 1px #F59E0B  
**Padding:** 32px  

**Content:**
1. **Average CSAT**
   - Icon: Icon/Star 48px, #FBBF24
   - Value: "4.6 / 5" — 48px Bold #111827
   - 5 stars: 32px each, 4.6 filled (partial 5th star)
   - Trend: "+0.2 vs oxirgi oy" — 14px Semibold #10B981

2. **Response Rate**
   - Label: "Javob berish foizi" — 14px Regular #6B7280
   - Value: "68%" — 20px Semibold #111827
   - Text: "847 / 1,247 chats" — 13px Regular #9CA3AF

3. **Promoters (Net Promoter Score — optional)**
   - Label: "NPS" — 14px Regular #6B7280
   - Value: "+42" — 20px Semibold #10B981
   - Text: "Promoters 58%, Detractors 16%" — 13px Regular #9CA3AF

---

### 3.2 Rating Distribution Chart

**Joylashuv:** Overview card ostida, 60% kenglik (chap tomonda), 320px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Baholash taqsimoti" — 18px Semibold #111827
- Total: "847 baholash" — 14px Regular #6B7280

**Chart:**
- Type: Horizontal bar chart (5 bars for 5★ to 1★)
- Bars: 48px balandlik each, 12px gap
- Colors: Gradient from green (5★) to red (1★)

**Bar Structure:**
1. **Star Icon + Count** (chap)
   - "5 ★": 16px icon, 14px Medium #111827, count "(487)"
2. **Bar**
   - Background: #F3F4F6
   - Filled: Color (5★: #10B981, 4★: #84CC16, 3★: #FBBF24, 2★: #F59E0B, 1★: #DC2626)
   - Width: Percentage based (max 500px)
   - Border-radius: 8px
3. **Percentage** (o'ng, inside bar)
   - "58%" — 14px Semibold white

**Example data:**
- 5★: 487 (58%) — #10B981
- 4★: 234 (28%) — #84CC16
- 3★: 84 (10%) — #FBBF24
- 2★: 28 (3%) — #F59E0B
- 1★: 14 (1%) — #DC2626

---

### 3.3 Feedback List

**Joylashuv:** Rating chart yonida (o'ng tomonda), 40% kenglik, 320px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Oxirgi fikr-mulohazalar" — 18px Semibold #111827

**List:**
- Items: 4-5 feedback cards, scrollable
- Card balandlik: 64px, padding 12px, border-bottom 1px #E5E7EB

**Card Structure:**
1. **Rating Stars** (top left)
   - 5 stars 12px, filled based on rating
2. **Customer Name** (top right)
   - "John Doe" — 13px Medium #111827
   - Date: "15 Mart" — 12px Regular #9CA3AF
3. **Feedback Text**
   - Max 2 lines, ellipsis: "Service was great, quick response..." — 13px Regular #6B7280
4. **Tags** (if any)
   - Badge pill: "VIP" — 20px height, 10px font

**"Barchasini ko'rish" link bottom:**
- Text: "Barcha fikrlarni ko'rish →" — 14px Medium #4F46E5
- Opens full feedback list modal/page

---

## 4. MY STATS TAB (Operator shaxsiy dashboard)

**Faqat Operator role ko'radi. Admin/Manager ko'rmaydi.**

### 4.1 Today's Performance Cards

**Layout:** 4-column grid, gap 24px  
**Card style:** Same as Overview metric cards but smaller (100px height)  

**Cards:**
1. **Chats Today**
   - Value: "12" — 28px Bold
   - Label: "Bugungi chatlar"
   - Icon: Icon/MessageCircle 28px #4F46E5

2. **Resolved Today**
   - Value: "10" — 28px Bold
   - Label: "Hal qilingan"
   - Percentage: "83%" — 13px Regular #10B981

3. **Avg Response**
   - Value: "1m 45s" — 28px Bold
   - Label: "O'rtacha javob"
   - Trend: "-15s vs kecha" — 12px #10B981

4. **CSAT Today**
   - Value: "4.8" — 28px Bold
   - Label: "Bugungi CSAT"
   - Stars: 5 stars 14px, 4.8 filled

---

### 4.2 Weekly/Monthly Stats Tabs

**Tabs:** "Bu hafta" | "Bu oy"  
**Layout:** 2-column grid, 6 metric cards  

**Cards (This Week example):**
- **Total Chats:** "58"
- **Resolved:** "54 (93%)"
- **Avg Response:** "2m 10s"
- **Resolution Time:** "15m 30s"
- **CSAT:** "4.7 / 5"
- **Transfers:** "3 (5%)"

---

### 4.3 Goals & Progress

**Joylashuv:** Stats cards ostida, 100% kenglik, 240px balandlik  
**Background:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 24px  

**Header:**
- Title: "Maqsadlarim" — 18px Semibold #111827
- Subtitle: "Bu oy" — 14px Regular #6B7280

**Goals (4 ta progress bar):**

1. **Chats Goal**
   - Label: "Chatlar" — 14px Medium #374151
   - Value: "245 / 300" — 14px Regular #6B7280
   - Progress bar: 82%, #4F46E5, 8px height, border-radius 4px
   - Status: "18% qoldi" — 12px #F59E0B (yellow if <90%)

2. **CSAT Goal**
   - Label: "CSAT"
   - Value: "4.6 / 4.5" — achieved, show green checkmark ✓
   - Progress bar: 100%, #10B981

3. **Response Time Goal**
   - Label: "Javob vaqti < 2 min"
   - Value: "2m 10s / 2m 0s"
   - Progress bar: 95% (near goal), #FBBF24 (yellow)
   - Status: "10s ortiq" — 12px #F59E0B

4. **Transfer Rate Goal**
   - Label: "Transfer < 5%"
   - Value: "5.2% / 5.0%"
   - Progress bar: 104% (exceeded, bad), #DC2626 (red)
   - Status: "Maqsaddan oshib ketgan" — 12px #DC2626

**Gamification (optional):**
- Badges earned: "⭐ Top Performer", "🏆 CSAT Champion", "⚡ Speed Demon"
- Display as small badges below progress bars

---

### 4.4 Daily Activity Chart

**Joylashuv:** Goals ostida, 100% kenglik, 280px balandlik  
**Chart:** Line chart, chats per hour (last 7 days overlayed or current day only)

---

## 5. EXPORT TAB

**Layout:** Centered, 600px kenglik, vertically centered  

### Export Wizard

**Background:** White, border 1px #E5E7EB, border-radius 12px, padding 32px  

**Title:** "Hisobotni eksport qilish" — 24px Semibold #111827  
**Subtitle:** "Analitik ma'lumotlarni yuklab oling" — 14px Regular #6B7280  

**Form:**

1. **Format Selection**
   - Radio buttons: 3 ta (PDF, Excel, CSV)
   - Each: 100% width, 56px height, border 1px #E5E7EB, border-radius 8px
   - Selected: border 2px #4F46E5, bg #EEF2FF
   - Content: Icon + format name + description
     - PDF: Icon/FileText, "PDF", "Vizual hisobotlar (chartlar bilan)"
     - Excel: Icon/FileSpreadsheet, "Excel", "Jadval formatida, pivot uchun"
     - CSV: Icon/File, "CSV", "Oddiy ma'lumot (import uchun)"

2. **Date Range**
   - Same date range picker as global filters
   - Default: "Oxirgi 30 kun"

3. **Metrics Selection**
   - Label: "Qaysi metrikalarni qo'shish?" — 14px Medium #374151
   - Checkboxes: 10+ options
     - "Overview (umumiy KPI'lar)" — checked
     - "Agent performance" — checked
     - "CSAT scores va feedback" — checked
     - "Chatlar ro'yxati (batafsil)" — unchecked
     - "Response time distribution" — checked
     - "Kanallar bo'yicha" — checked
     - "Teglar bo'yicha" — unchecked
     - "Hourly activity" — unchecked
     - "Goals progress (My Stats)" — unchecked (only for Operator)
   - "Barchasini tanlash" link top-right

4. **Email Option**
   - Checkbox: "Email orqali yuborish" — 14px Regular #374151
   - If checked: Email input appears (default: user's email, disabled)

5. **Scheduled Reports (optional)**
   - Toggle: "Muntazam hisobotlar" — 14px Medium
   - If ON: Show frequency dropdown
     - Options: "Har kuni", "Har hafta (Dushanba)", "Har oy (1-kun)", "Har chorak"
   - Next date: "Keyingi yuborish: 1 Aprel 20 24" — 13px Regular #6B7280

**Buttons:**
- "Bekor qilish" — 120px, 44px, border 1px #D1D5DB
- "Eksport qilish" — 160px, 44px, primary #4F46E5
- Gap: 12px

**Success Toast:**
- "Hisobot yaratilmoqda... Email yuboriladi" — 3s auto-hide
- Or "Yuklab olish boshlandi" — if immediate download

---

## Empty / Loading / Error States

### Empty State (no data)
- Icon: Icon/BarChart 64px #D1D5DB
- Text: "Statistika hali yo'q" — 16px Medium #6B7280
- Subtext: "Chatlar boshlanganidan keyin bu yerda ko'rinadi" — 14px Regular #9CA3AF

### Loading State
- **Metric cards:** Skeleton cards, shimmer animation
- **Charts:** Skeleton bars/lines, shimmer
- **Tables:** Skeleton rows (5 rows)

### Error State
- Alert banner: #FEE2E2 bg, border-left 4px #DC2626
- Icon: Icon/AlertCircle 24px #DC2626
- Text: "Analitika yuklanmadi. Iltimos, qaytadan urinib ko'ring." — 14px Medium #991B1B
- Button: "Qayta yuklash" — 120px, 36px, border 1px #DC2626

---

## Micro-interactions

1. **Metric card hover** — Border #4F46E5, shadow-sm, 200ms
2. **Chart hover** — Tooltip fade-in 150ms, data point scale 1.3
3. **Line chart animate** — Lines draw from left to right on mount, 800ms ease-out
4. **Bar chart animate** — Bars grow from 0 to value on mount, 600ms ease-out, stagger 50ms
5. **Donut chart animate** — Segments draw clockwise, 800ms ease-out
6. **Tab switch** — Content fade-out/in 200ms
7. **Filter apply** — Metric cards pulse/refresh animation 300ms
8. **Export button** — Loading spinner inside button when clicked
9. **Date range picker open** — Calendar slide-down 200ms
10. **Agent row hover** — Bg #F9FAFB, 100ms
11. **Star rating fill** — Fill animation 150ms when value updates
12. **Progress bar fill** — Animate from 0 to percentage on mount, 600ms ease-out
13. **Goal achieved** — Green checkmark scale-in + bounce, 400ms, confetti (optional)
14. **Leaderboard rank change** — Row highlight + pulse when rank improves (real-time)
15. **Toast notification** — Slide-in from top, 300ms, auto-hide 3s

---

## Accessibility

**Keyboard Navigation:**
- Tab order: Filters → Tabs → Charts (focusable) → Tables → Export form
- Arrow keys: Navigate between data points in charts (focus mode)
- Enter: Apply filter, open dropdown, submit export
- Escape: Close dropdown, close modal
- Shortcuts:
  - `1` — Overview tab
  - `2` — Performance tab
  - `3` — CSAT tab
  - `4` — My Stats tab (if Operator)
  - `E` — Export tab
  - `D` — Date range picker open
  - `R` — Reset filters

**ARIA Labels:**
- `aria-label="Total chats metric: 1247, up 12.5% from last month"`
- `aria-label="Line chart showing chats over time"`
- `aria-label="Agent leaderboard table, sortable columns"`
- `aria-label="Export report form"`
- `aria-label="Date range picker"`
- Charts: `role="img"`, `aria-label="[Chart description]"`

**Screen Reader Announcements:**
- "Filters applied, data updated"
- "Chart data loaded, 30 data points"
- "Export started, report will be emailed"
- "Goal achieved: CSAT 4.6 out of 4.5"
- "Live update: 3 new chats"

**Focus Management:**
- Chart entered: focus to first data point
- Modal opens: focus to first input
- Toast appears: announce but no focus steal

**Color Contrast:**
- All text: WCAG AA compliant (4.5:1 minimum)
- Chart colors: Distinguishable (not only color-based, add patterns/labels)
- Trend indicators: Icon + color (up/down arrow + green/red)

**Touch Targets:**
- All interactive elements: 44×44px minimum
- Chart data points: 44px tap area (even if visual is 6px)

---

## ASCII Wireframes

### 1. Overview Tab
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Analytics                        [ Overview | Performance | CSAT | Export ]
├─────────────────────────────────────────────────────────────────────────┤
│ Filters: [📅 Oxirgi 30 kun ▼] [👥 Barcha agentlar ▼] [# Kanallar ▼] [🔄] │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  ┌────────────┬────────────┬────────────┬────────────┐                  │
│  │  💬 Jami   │  ⏱ Javob   │  ✅ Hal    │  ⭐ CSAT   │  Metric Cards    │
│  │  1,247     │  2m 45s    │  18m 30s   │  4.6 / 5   │                  │
│  │  +12.5% ↑  │  -8.2% ↓   │  +3.1% ↑   │  +0.2 ↑    │                  │
│  └────────────┴────────────┴────────────┴────────────┘                  │
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Chatlar dinamikasi (Oxirgi 30 kun)                               │  │
│  │ ───── Barcha  ───── Resolved  ───── Missed                       │  │
│  │ 100│                                                              │  │
│  │  80│                      ●                                       │  │
│  │  60│           ●         ╱ ╲                                      │  │
│  │  40│      ●   ╱ ╲   ●  ╱   ╲  ●                                  │  │
│  │  20│ ●   ╱ ╲ ╱   ╲ ╱ ╲╱     ╲╱ ╲ ●                               │  │
│  │   0└──────────────────────────────────────────────────────────┘ │  │
│  │     1   5   10  15  20  25  30 (days)                            │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│  ┌───────────────────────────┐                                           │
│  │ Kanal bo'yicha (1,247)    │  Channels Bar Chart                      │
│  │ 💻 Website   ████████████████████ 584 (47%)                         │
│  │ ✈️ Telegram  ██████████ 312 (25%)                                    │
│  │ 📘 Facebook  ██████ 187 (15%)                                         │
│  │ 📷 Instagram ████ 124 (10%)                                           │
│  │ 💬 WhatsApp ██ 40 (3%)                                                │
│  └───────────────────────────┘                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2. Performance Tab
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Analytics                        [ Overview | Performance | CSAT | Export ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  Agent samaradorligi (Top 10 - Oxirgi 30 kun)                           │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ Rank  Agent         Chats Resolved  AvgResp  ResTime  CSAT Transfer││
│  ├────────────────────────────────────────────────────────────────────┤ │
│  │ 🥇  [👤] Dilshod   124   118(95%)  1m 45s   12m 30s  4.8   6(5%)  ││
│  │ 🥈  [👤] Aziza     118   112(95%)  2m 10s   15m 00s  4.7   8(7%)  ││
│  │ 🥉  [👤] Sardor    112   104(93%)  2m 30s   18m 15s  4.6   10(9%) ││
│  │  4  [👤] Malika     98    92(94%)  1m 55s   14m 00s  4.9   5(5%)  ││
│  │  5  [👤] Bekzod     87    80(92%)  3m 00s   20m 00s  4.5   12(14%)││
│  └────────────────────────────────────────────────────────────────────┘ │
│                                                                     [1][2][3]
│                                                                           │
│  ┌────────────────────────┬────────────────────────┐                    │
│  │ Javob vaqti taqsimoti  │  Soatlik faollik       │                    │
│  │      ╱───╲             │ 50│                    │                    │
│  │     ╱     ╲            │ 40│     ▄              │                    │
│  │    │ 2m45s │           │ 30│  ▄  █  ▄           │                    │
│  │     ╲     ╱            │ 20│  █  █  █  ▄  ▄     │                    │
│  │      ╲───╱             │ 10│▄ █  █  █  █  █  ▄  │                    │
│  │   🟢 <1min: 35%        │  0└──────────────────┘ │                    │
│  │   🟡 1-2min: 28%       │    0  4  8  12 16 20   │                    │
│  │   🟡 2-5min: 22%       │                        │                    │
│  │   🟠 5-10min: 10%      │  ⭐ Peak: 14:00 (42)   │                    │
│  │   🔴 >10min: 5%        │                        │                    │
│  └────────────────────────┴────────────────────────┘                    │
│                                                                           │
│  Eng ko'p ishlatiladigan teglar                                          │
│  ┌────────────────────────────────────────────────────────────────────┐ │
│  │ [VIP]            87 chats   ████░░░░░░░░░░░░ 7%                    │ │
│  │ [Billing]       124 chats   ██████████░░░░░░ 10%                   │ │
│  │ [Bug]            54 chats   ███░░░░░░░░░░░░░ 4%                    │ │
│  │ [Feature Req]    42 chats   ██░░░░░░░░░░░░░░ 3%                    │ │
│  │ [General]       940 chats   ████████████████ 75%                   │ │
│  └────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### 3. CSAT Tab
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Analytics                        [ Overview | Performance | CSAT | Export ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │  ⭐ 4.6 / 5     ★★★★½                                            │  │
│  │  +0.2 vs oxirgi oy                                                │  │
│  │                                                                    │  │
│  │  Javob berish: 68% (847 / 1,247 chats)     NPS: +42               │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│  ┌───────────────────────────────────┬───────────────────────────┐      │
│  │ Baholash taqsimoti (847 baholash) │ Oxirgi fikr-mulohazalar   │      │
│  │                                    │ ┌───────────────────────┐ │      │
│  │ 5 ★ (487) ████████████████ 58%    │ │⭐⭐⭐⭐⭐ John Doe     │ │      │
│  │ 4 ★ (234) ████████ 28%            │ │15 Mart                │ │      │
│  │ 3 ★ (84)  ███ 10%                 │ │Service was great...   │ │      │
│  │ 2 ★ (28)  █ 3%                    │ │[VIP]                  │ │      │
│  │ 1 ★ (14)  ░ 1%                    │ ├───────────────────────┤ │      │
│  │                                    │ │⭐⭐⭐⭐ Jane Smith     │ │      │
│  │                                    │ │14 Mart                │ │      │
│  │                                    │ │Quick response but...  │ │      │
│  │                                    │ ├───────────────────────┤ │      │
│  │                                    │ │⭐⭐⭐⭐⭐ Ali Karimov  │ │      │
│  │                                    │ │13 Mart                │ │      │
│  │                                    │ │Perfect! Helped me...  │ │      │
│  │                                    │ └───────────────────────┘ │      │
│  │                                    │ Barchasini ko'rish →      │      │
│  └───────────────────────────────────┴───────────────────────────┘      │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4. Export Tab
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Analytics                        [ Overview | Performance | CSAT | Export ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│                    ┌─────────────────────────────────┐                   │
│                    │ Hisobotni eksport qilish        │                   │
│                    │ Analitik ma'lumotlarni yuklab   │                   │
│                    │ oling                           │                   │
│                    │                                 │                   │
│                    │ Format:                         │                   │
│                    │ ○ 📄 PDF (Vizual hisobotlar)   │                   │
│                    │ ● 📊 Excel (Jadval, pivot)     │ (selected)        │
│                    │ ○ 📁 CSV (Oddiy ma'lumot)      │                   │
│                    │                                 │                   │
│                    │ Davr:                           │                   │
│                    │ [📅 Oxirgi 30 kun           ▼] │                   │
│                    │                                 │                   │
│                    │ Metrikalar:                     │                   │
│                    │ ☑ Overview (umumiy KPI'lar)    │                   │
│                    │ ☑ Agent performance             │                   │
│                    │ ☑ CSAT scores va feedback       │                   │
│                    │ ☐ Chatlar ro'yxati (batafsil)  │                   │
│                    │ ☑ Response time distribution    │                   │
│                    │ ☑ Kanallar bo'yicha             │                   │
│                    │                                 │                   │
│                    │ ☑ Email orqali yuborish         │                   │
│                    │   user@example.com              │                   │
│                    │                                 │                   │
│                    │ ☐ Muntazam hisobotlar           │                   │
│                    │                                 │                   │
│                    │   [Bekor qilish] [Eksport]     │                   │
│                    └─────────────────────────────────┘                   │
│                                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Figma uchun komponentlar (12 ta)

```
analytics/
├── cards/
│   ├── metric-card                # KPI card with trend
│   ├── csat-overview-card         # Large CSAT display
│   └── goal-progress-card         # Goal with progress bar
├── charts/
│   ├── line-chart                 # Multi-line time series
│   ├── bar-chart-horizontal       # Channels, rating distribution
│   ├── bar-chart-vertical         # Activity timeline
│   └── donut-chart                # Response time distribution
├── tables/
│   ├── leaderboard-row            # Agent performance row
│   └── tag-row                    # Tag with progress bar
├── filters/
│   ├── date-range-picker          # Calendar dropdown
│   ├── agent-filter               # Multi-select dropdown
│   └── channel-filter             # Multi-select with icons
└── export/
    ├── format-selector            # Radio cards for PDF/Excel/CSV
    └── metrics-checklist          # Checkbox list
```

---

## User Flows

### 1. View Analytics Flow
```
1. User opens Analytics page
2. Default tab: Overview
3. Default filters: Last 30 days, All agents, All channels
4. Metric cards load (shimmer → data)
5. Charts load (animate from 0 to value)
6. User changes date range → "Last 7 days"
7. All data refreshes (fade-out/in 200ms)
8. User switches to Performance tab
9. Leaderboard loads
10. User hovers on agent row → tooltip shows additional stats
11. User sorts by CSAT column (descending)
12. User clicks on agent name → Opens agent profile (14-team.md)
```

### 2. Export Report Flow
```
1. User clicks Export tab
2. Export wizard opens
3. User selects format: Excel
4. User selects date range: Last 30 days
5. User checks metrics: Overview, Agent performance, CSAT
6. User toggles "Email orqali yuborish" ON
7. User clicks "Eksport qilish"
8. Button shows loading spinner
9. Success toast: "Hisobot yaratilmoqda... Email yuboriladi"
10. Export completes in background (30s-1min)
11. Email arrives with Excel attachment
12. User downloads and opens Excel file
```

### 3. Compare Periods Flow
```
1. User on Overview tab
2. User toggles "Taqqoslash" ON
3. Date range picker shows 2 ranges:
   - Current: Last 30 days (Mar 1-30)
   - Previous: Feb 1-28
4. Metric cards now show 2 values:
   - Current: 1,247 chats
   - Previous: 1,104 chats
   - Trend: +12.9% ↑ (green)
5. Line chart shows 2 lines:
   - Current period: #4F46E5 (solid)
   - Previous period: #9CA3AF (dashed, 50% opacity)
6. User hovers on chart → tooltip shows both values
7. User analyzes: "Current month performing better"
8. User turns compare OFF → back to single period view
```

---

## Technical Requirements

### API Endpoints (10+ ta)

**Analytics Endpoints:**
- `GET /api/v1/analytics/overview` — Overview metrics (query: date_from, date_to, agent_id, channel_id)
- `GET /api/v1/analytics/chats-over-time` — Line chart data (returns time series)
- `GET /api/v1/analytics/channels` — Channel breakdown
- `GET /api/v1/analytics/agents` — Agent leaderboard (query: sort_by, order)
- `GET /api/v1/analytics/response-time-distribution` — Donut chart data
- `GET /api/v1/analytics/activity-timeline` — Hourly activity (query: date)
- `GET /api/v1/analytics/tags` — Top tags
- `GET /api/v1/analytics/csat` — CSAT overview + rating distribution
- `GET /api/v1/analytics/feedback` — Feedback list (pagination, filters)
- `GET /api/v1/analytics/my-stats` — Operator personal stats (authenticated user)
- `POST /api/v1/analytics/export` — Generate export (returns job_id)
- `GET /api/v1/analytics/export/:job_id/status` — Check export status
- `POST /api/v1/analytics/scheduled-reports` — Create scheduled report
- `GET /api/v1/analytics/goals` — Get user goals (Operator)

### Real-time Updates (WebSocket)

**Events:**
- `analytics:update` — New chat created/resolved → metric cards update
- `analytics:csat_new` — New feedback submitted → CSAT card updates
- `analytics:agent_rank_change` — Leaderboard position changed → row highlight

### Performance

- **Initial load:** <3s (all charts + data)
- **Filter apply:** <1s (data fetch + re-render)
- **Chart animation:** 600-800ms (smooth, not instant)
- **Export generation:** 30s-1min (background job, email delivery)
- **Real-time updates:** Throttled to 1 per 10s (avoid excessive re-renders)
- **Data caching:** Cache filtered results for 2 minutes (reduce API calls)
- **CSV export:** Max 100,000 rows (paginate if more)

### Export Formats

**PDF:**
- Layout: A4 portrait, 3 pages (Overview + Performance + CSAT)
- Charts: Rendered as images (SVG or PNG export)
- Header: Workspace logo + name + date range
- Footer: Page numbers + "Generated by CHATFLOW"

**Excel:**
- Sheet 1: Overview (metrics table)
- Sheet 2: Agent performance (leaderboard)
- Sheet 3: CSAT (feedback list)
- Sheet 4: Chats over time (time series data)
- Sheet 5: Raw data (all chats if "Chatlar ro'yxati" checked)
- Formatting: Headers bold, freeze first row, auto-fit columns

**CSV:**
- Single file or ZIP with multiple CSVs (one per metric)
- UTF-8 encoding
- Comma delimiter
- Headers in first row

---

## Figma AI uchun prompt

```
Design a comprehensive analytics dashboard for a customer support SaaS platform with 5 main tabs: Overview, Performance, CSAT, My Stats, and Export.

Global Filters Bar:
- Date range picker 200px (icon + dropdown with presets: Today, Yesterday, Last 7/30/90 days, This month, Custom range)
- Agent filter 180px (multi-select with avatars)
- Channel filter 160px (Website, Telegram, Facebook, Instagram, WhatsApp icons)
- Tags filter 160px (multi-select)
- Compare toggle 140px (show previous period comparison)
- Reset button (X icon)
- White background, 64px height, border-bottom 1px #E5E7EB

Overview Tab:
- 4 metric cards in grid: Total Chats (1,247, +12.5% green arrow), Avg Response (2m 45s, -8.2% green), Resolution Time (18m 30s, +3.1% red), CSAT (4.6/5 stars, +0.2 green)
- Each card: white, 120px height, icon 32px in colored circle, value 32px bold, trend 13px with arrow, "vs oxirgi oy" 12px gray
- Line chart 360px height: 3 lines (All chats #4F46E5, Resolved #10B981, Missed #DC2626), 30 days X-axis, grid lines, hover tooltip showing date + values
- Horizontal bar chart 360px: 5 channel bars (Website/Telegram/Facebook/Instagram/WhatsApp), each with colored icon 24px + percentage + value inside bar, gradient bars

Performance Tab:
- Agent leaderboard table 8 columns: Rank (medals 🥇🥈🥉 for top 3), Agent (avatar 40px + name + online dot), Chats, Resolved %, Avg Response (color-coded green/yellow/red), Resolution Time, CSAT (stars), Transfers %
- Row height 56px, sortable columns, hover bg #F9FAFB, pagination 10 per page
- Donut chart 240px diameter: Response time distribution (5 segments <1min 35% green, 1-2min 28% lime, 2-5min 22% yellow, 5-10min 10% orange, >10min 5% red), center text "2m 45s O'rtacha", legend below
- Vertical bar chart: 24-hour activity timeline, bars 16px width, peak hours darker color
- Top tags table: 5 rows, tag badge + count + horizontal progress bar with tag color

CSAT Tab:
- Large CSAT card 160px height: gradient bg (#FFFBEB), large "4.6 / 5" 48px bold, 5 stars 32px each (4.6 filled), trend +0.2 green, response rate 68%, NPS +42
- Horizontal bar chart: 5 rating bars (5★ to 1★), colors gradient green to red, percentage + count on each bar
- Feedback list: scrollable cards, each 64px with stars + name + date + comment preview (2 lines ellipsis) + tags
- "Barchasini ko'rish →" link at bottom

My Stats Tab (Operator view):
- 4 small metric cards 100px height: Chats Today, Resolved, Avg Response, CSAT Today
- Tabs: Bu hafta / Bu oy
- 6 metric cards in 2-col grid: Total Chats, Resolved %, Avg Response, Resolution Time, CSAT, Transfers
- Goals section: 4 progress bars (Chats 245/300 82%, CSAT 4.6/4.5 100% achieved green, Response time 2m10s/2m near goal yellow, Transfer 5.2%/5% exceeded red), status text below each
- Daily activity line chart

Export Tab:
- Centered wizard 600px width, white card, border-radius 12px
- Format selector: 3 radio cards (PDF/Excel/CSV), each 56px height, icon + name + description, selected state border #4F46E5 + bg #EEF2FF
- Date range picker: same as global filter
- Metrics checklist: 10 checkboxes (Overview, Agent performance, CSAT, Chatlar ro'yxati, Response time, Channels, Tags, etc.), "Barchasini tanlash" link
- Email toggle: checkbox + email input (disabled, pre-filled)
- Scheduled reports toggle: ON shows frequency dropdown (Daily/Weekly/Monthly/Quarterly), next date text below
- Buttons: Bekor qilish (120px, border) + Eksport qilish (160px, primary #4F46E5)

Empty State:
- Icon BarChart 64px #D1D5DB
- "Statistika hali yo'q" 16px medium gray
- "Chatlar boshlanganidan keyin..." 14px light gray

Loading State:
- Skeleton cards and charts with shimmer animation

Error State:
- Red alert banner #FEE2E2, border-left #DC2626, error icon + text + "Qayta yuklash" button

Style:
- Primary: #4F46E5 (charts, buttons, active states)
- Success: #10B981 (positive trends, resolved, high ratings)
- Warning: #F59E0B, #FBBF24 (medium performance, 3★)
- Error: #DC2626 (negative trends, missed chats, low ratings)
- Font: Inter, 12-48px sizes
- Border-radius: 8-12px
- Spacing: 8px grid, 24px gaps
- Shadows: soft, elevation-based
- Charts: Clean, minimal, data-focused
- Tooltips: white, shadow-lg, 160×100px
- Desktop-first, 1440px min width
```
