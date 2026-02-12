# 📦 Dropdown Component Spec

**Status:** 🟠 TODO  
**Prioritet:** 🔴 CRITICAL  
**Taxminiy vaqt:** 3-4 soat (Design + Figma)  
**Mas'ul:** UI Designer  
**Foydalanish:** 15+ sahifa

---

## Muammo

Dropdown component **Design System da yo'q**, lekin 15+ joyda ishlatiladi:
- 11-inbox-chat.md: Filter, Sort
- 12-inbox-advanced.md: Assign agent, Tag select
- 13-automation.md: Trigger select, Action select
- 14-team.md: Role select, Filter
- 16-settings.md: Language, Timezone, Plan select
- 20-contacts-crm.md: Filter, Tag
- 25-advanced-analytics.md: Date range preset

## Component Variants

### 1. Single Select Dropdown (default)
**Use case:** Language select, Role select

### 2. Multi-select Dropdown
**Use case:** Tags, Filters (multiple options)

### 3. Search Dropdown
**Use case:** 10+ option bo'lsa (Country select, Timezone)

### 4. Grouped Dropdown
**Use case:** Actions (Messaging / Automation / Integration)

---

## Full Specification

### Anatomy

```
┌─────────────────────────────┐
│ Selected option          ▼  │ ← Trigger button
└─────────────────────────────┘
            ↓ Click
┌─────────────────────────────┐
│ Search...                   │ ← Search input (optional)
├─────────────────────────────┤
│ ✓ Option 1 (selected)       │ ← Checkmark (single) or checkbox (multi)
│   Option 2                  │
│   Option 3                  │
│   ─────────────             │ ← Divider
│   Option 4                  │
└─────────────────────────────┘
```

### States

| State | Description | Visual |
|-------|-------------|--------|
| **Default** | Rest state | `border: gray-200`, `bg: white` |
| **Hover** | Mouse hover trigger | `border: gray-300`, `bg: gray-50` |
| **Focused** | Keyboard focus | `border: primary-600`, `ring: 4px primary-100` |
| **Open** | Dropdown expanded | `border: primary-600`, chevron rotated 180° |
| **Disabled** | Cannot interact | `bg: gray-100`, `text: gray-400`, `cursor: not-allowed` |
| **Error** | Validation error | `border: red-500`, `text: red-600` |

### Styling

#### Trigger Button
```css
.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px 14px;
  height: 40px;
  min-width: 200px;
  
  background: #FFFFFF;
  border: 1px solid #E5E7EB; /* gray-200 */
  border-radius: 8px;
  
  font-size: 14px;
  font-weight: 400;
  color: #111827; /* gray-900 */
  
  cursor: pointer;
  transition: all 150ms ease;
}

.dropdown-trigger:hover {
  border-color: #D1D5DB; /* gray-300 */
  background: #F9FAFB; /* gray-50 */
}

.dropdown-trigger:focus {
  border-color: #4F46E5; /* primary-600 */
  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.1);
  outline: none;
}

.dropdown-trigger[aria-expanded="true"] .chevron {
  transform: rotate(180deg);
}
```

#### Dropdown Panel
```css
.dropdown-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 50;
  
  min-width: 200px;
  max-height: 240px; /* ~6 items visible */
  overflow-y: auto;
  
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  
  padding: 6px;
}
```

#### Option Item
```css
.dropdown-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px 14px;
  border-radius: 6px;
  
  font-size: 14px;
  color: #111827;
  
  cursor: pointer;
  transition: background 100ms ease;
}

.dropdown-option:hover {
  background: #F3F4F6; /* gray-100 */
}

.dropdown-option[aria-selected="true"] {
  background: #EEF2FF; /* primary-50 */
  color: #4F46E5; /* primary-600 */
  font-weight: 500;
}

.dropdown-option .checkmark {
  width: 16px;
  height: 16px;
  color: #4F46E5;
}
```

### Behavior

| Action | Result |
|--------|--------|
| **Click trigger** | Toggle open/close |
| **Click outside** | Close dropdown |
| **Escape key** | Close dropdown |
| **Arrow Down** | Open (closed) / Navigate down (open) |
| **Arrow Up** | Navigate up |
| **Enter** | Select highlighted option |
| **Type letter** | Jump to first option starting with that letter |

### Accessibility

#### ARIA Attributes
```html
<button 
  role="combobox"
  aria-haspopup="listbox"
  aria-expanded="false"
  aria-labelledby="dropdown-label"
  aria-controls="dropdown-panel">
  Selected option
  <svg class="chevron">...</svg>
</button>

<ul 
  id="dropdown-panel"
  role="listbox"
  aria-labelledby="dropdown-label"
  hidden>
  <li role="option" aria-selected="false">Option 1</li>
  <li role="option" aria-selected="true">Option 2</li>
</ul>
```

#### Keyboard Navigation
- `Tab` → Focus trigger
- `Space` / `Enter` → Open dropdown
- `Arrow Up/Down` → Navigate options
- `Home` → First option
- `End` → Last option
- `Escape` → Close dropdown

#### Screen Reader
- Trigger: "Sort by, button, collapsed"
- Open: "Sort by, listbox, expanded, 5 options"
- Navigate: "Date (newest first), 2 of 5"
- Select: "Date (newest first), selected"

### Touch Support (Mobile)

```css
.dropdown-option {
  min-height: 44px; /* WCAG touch target */
  padding: 12px 16px; /* Larger padding */
}
```

---

## Variants Spec

### 1. Single Select (Default)

```html
<Dropdown 
  label="Sort by"
  options={[
    { value: 'newest', label: 'Date (newest first)' },
    { value: 'oldest', label: 'Date (oldest first)' },
    { value: 'priority', label: 'Priority' }
  ]}
  value="newest"
  onChange={handleChange}
/>
```

**Visual:**
- Single checkmark (✓) on selected item
- Click option → select + close dropdown

---

### 2. Multi-Select

```html
<Dropdown 
  multiple
  label="Select tags"
  options={[
    { value: 'bug', label: 'Bug' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'question', label: 'Question' }
  ]}
  value={['bug', 'feature']}
  onChange={handleChange}
/>
```

**Visual:**
- Checkbox on each item
- Selected count badge: "(2 selected)"
- Click option → toggle selection (dropdown ostaydi)
- "Apply" button dropdown bottom

```
┌─────────────────────────────┐
│ 2 tags selected          ▼  │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│ ☑ Bug                       │
│ ☑ Feature Request           │
│ ☐ Question                  │
├─────────────────────────────┤
│           [Apply]           │
└─────────────────────────────┘
```

---

### 3. Search Dropdown (10+ options)

```html
<Dropdown 
  searchable
  label="Select country"
  options={countries}
  placeholder="Search countries..."
/>
```

**Visual:**
- Search input panel top
- Filter options real-time
- "No results" empty state

```
┌─────────────────────────────┐
│ Select country           ▼  │
└─────────────────────────────┘
            ↓
┌─────────────────────────────┐
│ 🔍 Search...                │ ← Search input
├─────────────────────────────┤
│   United States             │
│   United Kingdom            │
│   Uzbekistan                │
│   ...                       │
└─────────────────────────────┘
```

---

### 4. Grouped Dropdown

```html
<Dropdown 
  grouped
  label="Select action"
  options={[
    {
      group: 'Messaging',
      options: [
        { value: 'send-email', label: 'Send email' },
        { value: 'send-sms', label: 'Send SMS' }
      ]
    },
    {
      group: 'Automation',
      options: [
        { value: 'assign-agent', label: 'Assign to agent' },
        { value: 'add-tag', label: 'Add tag' }
      ]
    }
  ]}
/>
```

**Visual:**
```
┌─────────────────────────────┐
│ Messaging                   │ ← Group header (gray, bold)
│   Send email                │
│   Send SMS                  │
│ ─────────────               │
│ Automation                  │
│   Assign to agent           │
│   Add tag                   │
└─────────────────────────────┘
```

---

## Empty States

### No Options
```
┌─────────────────────────────┐
│                             │
│     No options available    │
│                             │
└─────────────────────────────┘
```

### Search No Results
```
┌─────────────────────────────┐
│ 🔍 xyz                      │
├─────────────────────────────┤
│                             │
│  No results found for "xyz" │
│                             │
└─────────────────────────────┘
```

---

## Figma Component Structure

```
Dropdown/
├─ Trigger/
│  ├─ Default
│  ├─ Hover
│  ├─ Focused
│  ├─ Open
│  ├─ Disabled
│  └─ Error
├─ Panel/
│  ├─ Default
│  └─ With-Search
├─ Option/
│  ├─ Default
│  ├─ Hover
│  ├─ Selected
│  └─ With-Checkbox (multi)
└─ Empty/
   ├─ No-Options
   └─ No-Results
```

---

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] `01-design-system.md` ga "Dropdown Component" section qo'shish
- [ ] Figma master component yaratish (4 variant: Single, Multi, Search, Grouped)
- [ ] All states design (6 ta: Default, Hover, Focused, Open, Disabled, Error)
- [ ] Interactive prototype (click → open animation)
- [ ] Dark mode variant
- [ ] Responsive mobile version (fullscreen bottom sheet?)

## Priority Sahifalar

Dropdown implement qilingandan keyin yangilanishi kerak:
1. 12-inbox-advanced.md — Assign agent dropdown
2. 11-inbox-chat.md — Sort dropdown
3. 16-settings.md — Language, timezone dropdown
4. 13-automation.md — Trigger/action select
5. 14-team.md — Role filter

## Testing Checklist

- [ ] Keyboard navigation (Arrow keys, Enter, Escape)
- [ ] Screen reader announcements
- [ ] Focus trap (Tabbing ichida)
- [ ] Touch support (44px target)
- [ ] Long option text (ellipsis yoki wrap?)
- [ ] 100+ options (virtualization kerakmi?)
- [ ] Overflow (panel ekrandan chiqib ketsa — position adjust)

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- 15+ sahifa (yuqorida ro'yxat)
