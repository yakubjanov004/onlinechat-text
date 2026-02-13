# 📦 Date Picker Component Spec

**Status:** ✅ DONE  
**Prioritet:** 🔴 CRITICAL  
**Taxminiy vaqt:** 4-5 soat (Design + Figma)  
**Mas'ul:** UI Designer  
**Foydalanish:** 6+ sahifa

---

## Muammo

Date picker component **Design System da yo'q**, lekin 6+ sahifada ishlatiladi:
- 15-analytics.md: Date range selector (Last 7 days, Last 30 days, Custom)
- 25-advanced-analytics.md: Custom report date filter
- 17-billing.md: Invoice date filter
- 13-automation.md: Schedule trigger (specific date/time)
- 20-contacts-crm.md: Contact filter by created date
- 16-settings.md: Free trial expiry date

**Inconsistency:**
- Date format turlicha (15-analytics: "Jan 1 - Jan 31", 25: "01.01.2024")
- Preset ranges turlicha ("Last 7 days" bor/yo'q)
- Time picker bor/yo'q noaniq

---

## Component Variants

### 1. Single Date Picker
**Use case:** Deadline select, specific date

### 2. Date Range Picker (default)
**Use case:** Analytics date filter, report period

### 3. Date + Time Picker
**Use case:** Automation schedule, event timestamp

### 4. Preset Range Picker
**Use case:** "Last 7 days", "This month", "Custom"

---

## Full Specification

### Anatomy (Date Range Picker)

```
┌─────────────────────────────────────┐
│ Jan 15, 2024 - Feb 14, 2024      ▼ │ ← Trigger input
└─────────────────────────────────────┘
               ↓ Click
┌─────────────────────────────────────────────────────┐
│ Presets          │  January 2024    February 2024  │
│                  │  Su Mo Tu We Th Fr Sa   ...      │
│ Last 7 days      │   1  2  3  4  5  6  7           │
│ Last 30 days     │   8  9 10 11 12 13 14           │
│ This month       │  15 [16 17 18 19 20] 21  ← Range│
│ Last month       │  22 23 24 25 26 27 28           │
│ Custom range     │  29 30 31                       │
│                  │                                  │
│                  │  [Cancel]          [Apply]       │
└─────────────────────────────────────────────────────┘
```

### States

| State | Description | Visual |
|-------|-------------|--------|
| **Default** | Rest state | `border: gray-200`, `bg: white` |
| **Hover** | Mouse hover | `border: gray-300`, `bg: gray-50` |
| **Focused** | Input focused | `border: primary-600`, `ring: 4px primary-100` |
| **Open** | Picker expanded | Calendar visible |
| **Disabled** | Cannot interact | `bg: gray-100`, `cursor: not-allowed` |
| **Error** | Invalid date | `border: red-500`, helper text red |

### Styling

#### Trigger Input
```css
.datepicker-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px 14px;
  height: 40px;
  min-width: 240px;
  
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  
  font-size: 14px;
  color: #111827;
  cursor: pointer;
  transition: all 150ms ease;
}

.datepicker-trigger:hover {
  border-color: #D1D5DB;
  background: #F9FAFB;
}

.datepicker-trigger:focus {
  border-color: #4F46E5;
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
  outline: none;
}
```

#### Calendar Panel
```css
.datepicker-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 50;
  
  display: flex;
  
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  padding: 16px;
}
```

#### Presets Sidebar (Optional)
```css
.datepicker-presets {
  width: 140px;
  padding-right: 16px;
  border-right: 1px solid #E5E7EB;
}

.preset-button {
  display: block;
  width: 100%;
  padding: 8px 12px;
  margin-bottom: 4px;
  
  text-align: left;
  font-size: 14px;
  color: #6B7280;
  
  border-radius: 6px;
  cursor: pointer;
  transition: all 100ms;
}

.preset-button:hover {
  background: #F3F4F6;
  color: #111827;
}

.preset-button.active {
  background: #EEF2FF;
  color: #4F46E5;
  font-weight: 500;
}
```

#### Calendar Grid
```css
.calendar-month {
  padding: 0 16px;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.calendar-month-name {
  font-size: 14px;
  font-weight: 600;
  color: #111827;
}

.calendar-nav-button {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  cursor: pointer;
}

.calendar-nav-button:hover {
  background: #F3F4F6;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.calendar-day-header {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 12px;
  font-weight: 600;
  color: #6B7280;
  text-transform: uppercase;
}

.calendar-day {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 14px;
  color: #111827;
  border-radius: 6px;
  cursor: pointer;
  transition: all 100ms;
}

.calendar-day:hover {
  background: #F3F4F6;
}

.calendar-day.today {
  border: 1px solid #4F46E5;
}

.calendar-day.selected {
  background: #4F46E5;
  color: white;
}

.calendar-day.in-range {
  background: #EEF2FF;
  color: #4F46E5;
}

.calendar-day.disabled {
  color: #D1D5DB;
  cursor: not-allowed;
}

.calendar-day.other-month {
  color: #D1D5DB;
}
```

#### Footer Actions
```css
.datepicker-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E5E7EB;
}
```

---

## Behavior

### Date Range Selection

| Action | Result |
|--------|--------|
| **Click first date** | Start date selected (blue) |
| **Hover dates** | Show preview range (light blue) |
| **Click second date** | End date selected, range complete |
| **Click Apply** | Close picker, update input |
| **Click Cancel** | Reset selection, close picker |

### Preset Selection

| Preset | Range |
|--------|-------|
| **Today** | Current date only |
| **Yesterday** | Previous day |
| **Last 7 days** | Today - 6 days ago |
| **Last 30 days** | Today - 29 days ago |
| **This month** | 1st of month - today |
| **Last month** | Full previous month |
| **This year** | Jan 1 - today |
| **Custom range** | Manual select (activate calendar) |

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Focus input |
| `Space`/`Enter` | Open picker |
| `Arrow keys` | Navigate dates |
| `Page Up/Down` | Previous/next month |
| `Home` | First day of month |
| `End` | Last day of month |
| `Escape` | Close picker |

---

## Variants Spec

### 1. Single Date Picker

```html
<DatePicker 
  label="Select deadline"
  value="2024-02-15"
  onChange={handleChange}
/>
```

**Visual:**
- Single calendar
- No range UI
- Click date → select → close

```
┌─────────────────────────────┐
│ Feb 15, 2024             ▼  │
└─────────────────────────────┘
            ↓
┌───────────────────────────────┐
│      February 2024      < >   │
│ Su Mo Tu We Th Fr Sa          │
│              1  2  3           │
│  4  5  6  7  8  9 10           │
│ 11 12 13 14 [15] 16 17        │ ← Selected
│ 18 19 20 21 22 23 24           │
│ 25 26 27 28 29                 │
└───────────────────────────────┘
```

---

### 2. Date Range Picker (Default)

```html
<DateRangePicker 
  label="Select period"
  value={{ start: '2024-01-15', end: '2024-02-14' }}
  presets={['last7days', 'last30days', 'thisMonth']}
  onChange={handleChange}
/>
```

**Visual:**
- 2 calendars (side-by-side)
- Start date + End date
- Range highlight (light blue between dates)

---

### 3. Date + Time Picker

```html
<DateTimePicker 
  label="Schedule automation"
  value="2024-02-15T10:30:00Z"
  onChange={handleChange}
/>
```

**Visual:**
```
┌─────────────────────────────────────┐
│ Feb 15, 2024  10:30 AM           ▼  │
└─────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│      February 2024      < >         │
│ Su Mo Tu We Th Fr Sa                │
│ ...                                 │
│ 11 12 13 14 [15] 16 17              │
│ ...                                 │
├─────────────────────────────────────┤
│ Time:  [10] : [30]  [AM ▼]          │ ← Time inputs
│                                     │
│           [Cancel]  [Apply]         │
└─────────────────────────────────────┘
```

**Time input:**
- Hour: 01-12 (12-hour) or 00-23 (24-hour)
- Minute: 00-59 (step: 5 min yoki 15 min)
- AM/PM dropdown (12-hour format)

---

### 4. Preset Range Picker (Analytics)

```html
<DateRangePicker 
  showPresets
  presets={[
    { label: 'Last 7 days', value: 'last7days' },
    { label: 'Last 30 days', value: 'last30days' },
    { label: 'This month', value: 'thisMonth' },
    { label: 'Custom range', value: 'custom' }
  ]}
  value="last30days"
/>
```

**Behavior:**
- Preset click → instantly apply (no Apply button)
- "Custom range" → activate calendar for manual selecting

---

## Date Format Standard

**Display format (UI):**
- Single date: `MMM D, YYYY` → "Feb 15, 2024"
- Date range: `MMM D - MMM D, YYYY` → "Jan 15 - Feb 14, 2024"
- Same month: `MMM D-D, YYYY` → "Feb 10-15, 2024"

**Value format (API):**
- ISO 8601: `2024-02-15T10:30:00Z`
- Date only: `2024-02-15`

**Multi-language support (future):**
- O'zbek: "15-fevral, 2024"
- Rus: "15 февраля 2024"
- English: "Feb 15, 2024"

---

## Empty/Edge States

### Invalid Date
```
┌─────────────────────────────────────┐
│ Invalid date                     ▼  │ ← Red border
└─────────────────────────────────────┘
  ⚠️ Please select a valid date
```

### Min/Max Date Restricted
```
Calendar days before minDate → disabled (gray, no cursor)
Calendar days after maxDate → disabled
```

---

## Responsive (Mobile)

Desktop: Floating panel
Mobile: **Fullscreen modal** (bottom sheet)

```
┌───────────────────────┐
│ Select date range  [×]│ ← Header
├───────────────────────┤
│ Last 7 days           │
│ Last 30 days          │
│ This month            │
│ Custom range          │ ← Tapping → show calendar
├───────────────────────┤
│   February 2024   < > │
│ Su Mo Tu We Th Fr Sa  │
│  ...                  │
├───────────────────────┤
│ [Cancel]    [Apply ✓] │
└───────────────────────┘
```

---

## Accessibility

### Keyboard
- `Tab` → Navigate dates
- `Arrow keys` → Move selection
- `Enter` → Select date
- `Escape` → Close picker

### ARIA
```html
<div role="dialog" aria-label="Date picker">
  <button 
    role="button" 
    aria-haspopup="dialog"
    aria-label="Select date, current value Feb 15, 2024">
    Feb 15, 2024
  </button>
  
  <div role="grid" aria-label="February 2024">
    <button role="gridcell" aria-selected="true">15</button>
  </div>
</div>
```

### Screen Reader
- "Date picker, Feb 15, 2024"
- "Calendar grid, February 2024"
- "15, selected, Thursday"
- "In range, February 16, Friday"

---

## Figma Component Structure

```
DatePicker/
├─ Trigger/
│  ├─ Default
│  ├─ Focused
│  └─ Error
├─ Panel/
│  ├─ Single-Date
│  ├─ Date-Range
│  └─ Date-Time
├─ Calendar/
│  ├─ Header (Month, Nav)
│  ├─ Grid (Day cells)
│  └─ Footer (Actions)
├─ Day-Cell/
│  ├─ Default
│  ├─ Hover
│  ├─ Today
│  ├─ Selected
│  ├─ In-Range
│  └─ Disabled
└─ Presets/
   └─ Sidebar
```

---

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] `01-design-system.md` ga "Date Picker Component" qo'shish
- [ ] Figma master component (4 variant)
- [ ] Date format standardize (MMM D, YYYY)
- [ ] Preset list approve (Product decision)
- [ ] Min/Max date logic (disable past dates?)
- [ ] Time picker (12-hour vs 24-hour)
- [ ] Responsive mobile version (fullscreen modal)
- [ ] Dark mode variant

## Priority Sahifalar

1. 15-analytics.md — Date range + presets
2. 25-advanced-analytics.md — Custom report date
3. 13-automation.md — Schedule date+time
4. 17-billing.md — Invoice date filter
5. 20-contacts-crm.md — Contact filter by date

## Testing Checklist

- [ ] Select date range (start → end)
- [ ] Preset click → instant apply
- [ ] Navigate months (< >)
- [ ] Keyboard navigation (Arrow keys)
- [ ] Min/Max date restrictions
- [ ] Leap year (Feb 29, 2024 ✅)
- [ ] Time picker validation (invalid time)
- [ ] Screen reader grid announcements
- [ ] Touch support (mobile tap, swipe months)

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `figma-docs/15-analytics.md`
- `figma-docs/25-advanced-analytics.md`
- `figma-docs/13-automation.md`
- `figma-docs/17-billing.md`
- `figma-docs/20-contacts-crm.md`
