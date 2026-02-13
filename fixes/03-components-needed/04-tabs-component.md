# 📦 Tabs Component Spec

**Status:** ✅ DONE  
**Prioritet:** 🔴 CRITICAL  
**Taxminiy vaqt:** 2-3 soat (Design + Figma)  
**Mas'ul:** UI Designer  
**Foydalanish:** 10+ sahifa

---

## Muammo

Tabs component **Design System da yo'q**, lekin 10+ sahifada ishlatiladi:
- 16-settings.md: General / Team / Widget / Integrations (4 tabs)
- 15-analytics.md: Overview / Conversations / Agents / Reports
- 11-inbox-chat.md: All / Mine / Unassigned (filter tabs)
- 13-automation.md: Active / Paused / Draft
- 20-contacts-crm.md: All Contacts / Companies / Tags
- 17-billing.md: Methods / Invoices / Usage
- 23-knowledge-base.md: Articles / Categories / Settings
- 22-team-chat.md: Channels / Direct Messages

**Inconsistency:**
- Har sahifada turli xil tab style
- Active indicator turlicha (underline, pill, background)
- Badge (count) ba'zida bor, ba'zida yo'q

---

## Component Variants

### 1. Underline Tabs (default)
**Use case:** Settings, Analytics — formal content navigation

### 2. Pill Tabs
**Use case:** Filters (All/Mine/Unassigned) — compact toggle

### 3. Segmented Control
**Use case:** Binary choice (Active/Inactive, Grid/List view)

---

## Full Specification

### Variant 1: Underline Tabs

#### Anatomy
```
┌─────────────────────────────────────────────────────┐
│ General  |  Team  |  Widget  |  Integrations        │ ← Tab list
  ━━━━━━━                                              ← Active indicator
                                                       
  [Tab panel content here]                             ← Tab panel
└─────────────────────────────────────────────────────┘
```

#### States

| State | Description | Visual |
|-------|-------------|--------|
| **Active** | Current tab | `color: primary-600`, `font-weight: 600`, `border-bottom: 2px solid primary-600` |
| **Inactive** | Other tabs | `color: gray-600`, `font-weight: 400` |
| **Hover** | Mouse hover (inactive) | `color: gray-900` |
| **Disabled** | Cannot click | `color: gray-400`, `cursor: not-allowed` |

#### Styling

```css
.tabs-underline {
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #E5E7EB; /* gray-200 */
}

.tab-underline {
  position: relative;
  padding: 12px 4px;
  
  font-size: 14px;
  font-weight: 400;
  color: #6B7280; /* gray-500 */
  
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 150ms ease;
}

.tab-underline:hover {
  color: #111827; /* gray-900 */
}

.tab-underline[aria-selected="true"] {
  color: #4F46E5; /* primary-600 */
  font-weight: 600;
}

.tab-underline[aria-selected="true"]::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #4F46E5;
  border-radius: 2px 2px 0 0;
}

.tab-underline[disabled] {
  color: #D1D5DB; /* gray-300 */
  cursor: not-allowed;
}
```

#### With Badge (Count)

```
┌───────────────────────────────────────────┐
│ All (12)  |  Mine (5)  |  Unassigned (3) │
  ━━━━━━━
```

```css
.tab-badge {
  margin-left: 8px;
  padding: 2px 8px;
  
  font-size: 12px;
  font-weight: 600;
  color: #6B7280;
  background: #F3F4F6; /* gray-100 */
  border-radius: 12px;
  
  transition: all 150ms;
}

.tab-underline[aria-selected="true"] .tab-badge {
  color: #4F46E5;
  background: #EEF2FF; /* primary-50 */
}
```

---

### Variant 2: Pill Tabs

#### Anatomy
```
┌───────────────────────────────────────┐
│ [All (12)] [Mine (5)] [Unassigned (3)]│ ← Pill buttons
  ━━━━━━━                                 ← Active bg
```

#### Styling

```css
.tabs-pill {
  display: inline-flex;
  gap: 8px;
  padding: 4px;
  background: #F3F4F6; /* gray-100 */
  border-radius: 8px;
}

.tab-pill {
  padding: 6px 12px;
  
  font-size: 14px;
  font-weight: 500;
  color: #6B7280; /* gray-600 */
  
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 150ms ease;
}

.tab-pill:hover {
  color: #111827;
  background: #E5E7EB; /* gray-200 */
}

.tab-pill[aria-selected="true"] {
  color: #FFFFFF;
  background: #4F46E5; /* primary-600 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

**Use case:**
- 11-inbox-chat.md: All / Mine / Unassigned
- 13-automation.md: Active / Paused / Draft

---

### Variant 3: Segmented Control

**Binary yoki 3-option toggle**

```
┌─────────────────────────┐
│ [Active] | Inactive     │ ← 2-option
└─────────────────────────┘
     ↓
┌───────────────────────────────────┐
│ [Grid] | List | Kanban           │ ← 3-option
└───────────────────────────────────┘
```

#### Styling

```css
.tabs-segmented {
  display: inline-flex;
  padding: 4px;
  background: #F3F4F6;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
}

.tab-segment {
  flex: 1;
  padding: 8px 16px;
  
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 150ms;
}

.tab-segment[aria-selected="true"] {
  color: #111827;
  background: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
```

**Use case:**
- View switcher (Grid / List)
- Status toggle (Active / Inactive)

---

## Behavior

### Tab Switching

| Action | Result |
|--------|--------|
| **Click tab** | Switch to that tab, show panel |
| **Keyboard Arrow → / ←** | Navigate tabs (focus only) |
| **Enter / Space** | Activate focused tab |
| **Tab key** | Move focus to panel content |

### Animation

**Tab panel transition:**
- Fade in: `opacity: 0 → 1` (150ms)
- Slide (optional): `translateX(-20px) → 0` (200ms ease-out)

```css
.tab-panel {
  animation: fadeIn 150ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Scrollable Tabs (Many tabs)

Agar tablar ko'p bo'lsa (6+ tabs), horizontal scroll:

```
┌─────────────────────────────────────────┐
│ ← Tab1 Tab2 Tab3 Tab4 Tab5 Tab6... →   │ ← Scroll arrows
└─────────────────────────────────────────┘
```

```css
.tabs-scrollable {
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
}

.tabs-scrollable::-webkit-scrollbar {
  display: none; /* Chrome */
}
```

---

## Accessibility

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Focus tab list |
| `Arrow →` | Focus next tab |
| `Arrow ←` | Focus previous tab |
| `Home` | Focus first tab |
| `End` | Focus last tab |
| `Enter` / `Space` | Activate focused tab |

### ARIA

```html
<div role="tablist" aria-label="Settings navigation">
  <button 
    role="tab" 
    id="tab-1"
    aria-selected="true"
    aria-controls="panel-1"
    tabindex="0">
    General
  </button>
  
  <button 
    role="tab" 
    id="tab-2"
    aria-selected="false"
    aria-controls="panel-2"
    tabindex="-1">
    Team
  </button>
</div>

<div 
  role="tabpanel" 
  id="panel-1"
  aria-labelledby="tab-1"
  tabindex="0">
  <!-- Panel content -->
</div>
```

### Screen Reader

- Tab list: "Settings navigation, tab list, 4 tabs"
- Active tab: "General, tab 1 of 4, selected"
- Inactive tab: "Team, tab 2 of 4"
- Panel: "General settings, tab panel"

---

## Responsive (Mobile)

Desktop: Horizontal tabs
Mobile (narrow): **Dropdown select**

```
Desktop:
┌─────────────────────────────────────┐
│ General | Team | Widget | Integr... │
  ━━━━━━━
```

```
Mobile (<640px):
┌─────────────────────────────┐
│ General                  ▼  │ ← Dropdown trigger
└─────────────────────────────┘
            ↓ Click
┌─────────────────────────────┐
│ ✓ General                   │
│   Team                      │
│   Widget                    │
│   Integrations              │
└─────────────────────────────┘
```

**Yoki:**
Scrollable tabs (swipe gesture)

---

## Tab Types Summary

| Type | Use Case | Visual | Badge |
|------|----------|--------|-------|
| **Underline** | Settings, Analytics | Border bottom | Optional |
| **Pill** | Filters, Status | Full background | ✅ Yes |
| **Segmented** | View switcher | Border + bg | ❌ No |

---

## Figma Component Structure

```
Tabs/
├─ Underline/
│  ├─ Tab/
│  │  ├─ Default
│  │  ├─ Hover
│  │  ├─ Active
│  │  └─ Disabled
│  └─ With-Badge
├─ Pill/
│  ├─ Tab/
│  │  ├─ Default
│  │  ├─ Hover
│  │  └─ Active
│  └─ With-Count
└─ Segmented/
   ├─ 2-Options
   └─ 3-Options
```

---

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] `01-design-system.md` ga "Tabs Component" section qo'shish
- [ ] Figma master component (3 variant: Underline, Pill, Segmented)
- [ ] All states (Default, Hover, Active, Disabled)
- [ ] Badge component (count)
- [ ] Tab panel animation (fade in)
- [ ] Scrollable tabs (many tabs)
- [ ] Responsive mobile version (dropdown)
- [ ] Dark mode variant

## Priority Sahifalar

1. 16-settings.md — Underline tabs (4 tabs)
2. 15-analytics.md — Underline tabs (4 tabs)
3. 11-inbox-chat.md — Pill tabs (filter)
4. 13-automation.md — Pill tabs (status)
5. 20-contacts-crm.md — Underline tabs

## Testing Checklist

- [ ] Tab click → switch panel
- [ ] Keyboard navigation (Arrow →/←)
- [ ] Badge count update (real-time)
- [ ] Tab panel animation smooth
- [ ] Screen reader role="tablist"
- [ ] Focus visible (keyboard users)
- [ ] Scrollable tabs (6+ tabs)
- [ ] Mobile dropdown (narrow screen)
- [ ] Touch support (tap, swipe)

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `figma-docs/16-settings.md`
- `figma-docs/15-analytics.md`
- `figma-docs/11-inbox-chat.md`
- `figma-docs/13-automation.md`
- `figma-docs/20-contacts-crm.md`
