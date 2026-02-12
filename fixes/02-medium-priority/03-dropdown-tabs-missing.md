# 🟡 Dropdown va Tabs Component Spec Yo'q

**Status:** 🟠 TODO  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 2 soat (har biri 1 soat)  
**Mas'ul:** UI Designer

---

## Muammo

2 ta juda keng ishlatiladigan UI component Design System da YO'Q:
1. **Dropdown** — Role select, filter, sorting
2. **Tabs** — Settings, Analytics, Automation

**Dropdown ishlatilgan joylar:**
- 11-inbox-chat.md: Conversation filter, sort
- 12-inbox-advanced.md: Assign agent dropdown, tag select
- 16-settings.md: Language select, timezone select
- 13-automation.md: Trigger action select

**Tabs ishlatilgan joylar:**
- 16-settings.md: General / Team / Widget / Integrations
- 15-analytics.md: Overview / Conversations / Agents
- 11-inbox-chat.md: All / Mine / Unassigned

## Ta'sir

- Figma designer turli variant yasaydi (inconsistency)
- Frontend 10+ joyda turli xil dropdown style
- Animation, hover, focus states har xil
- Accessibility spec yo'q

## Tavsiya Etilgan Spec — Dropdown

### States
- Default
- Hover
- Focused
- Open (expanded)
- Disabled
- Error

### Anatomy
```
┌─────────────────────────┐
│ Selected option      ▼  │ ← Trigger button
└─────────────────────────┘
  ↓ Open:
┌─────────────────────────┐
│ ✓ Option 1 (selected)   │ ← Checkmark
│   Option 2              │
│   Option 3              │
│   ─────────────         │ ← Divider (optional)
│   Option 4              │
└─────────────────────────┘
```

### Styling
| Element | Style |
|---------|-------|
| Trigger button | `background: white`, `border: 1px solid #E5E7EB`, `border-radius: 8px`, `padding: 10px 14px`, `height: 40px` |
| Dropdown panel | `background: white`, `border: 1px solid #E5E7EB`, `border-radius: 8px`, `box-shadow: shadow-lg`, `max-height: 240px` (scroll) |
| Option item | `padding: 10px 14px`, `hover: bg-gray-50`, `selected: bg-primary-50 + checkmark` |
| Icon (chevron) | `icon-20`, `color: gray-500`, `rotate: 180deg` (open) |

### Behavior
- Click trigger → open/close toggle
- Click outside → close
- Escape key → close
- Arrow Up/Down → navigate options
- Enter → select option
- Type to search (optional, agar 10+ option)

---

## Tavsiya Etilgan Spec — Tabs

### Variants
1. **Underline tabs** (default) — Analytics, Settings
2. **Pill tabs** — 11-inbox-chat.md filter (All / Mine / Unassigned)

### Underline Tabs

```
┌──────────────────────────────────────┐
│ General  |  Team  |  Widget      │ ← Tab list
  ━━━━━━━     (inactive)           
                                      ↓ Active indicator (border-bottom)
```

**Styling:**
| State | Style |
|-------|-------|
| Active | `color: primary-600`, `font-weight: 600`, `border-bottom: 2px solid primary-600` |
| Inactive | `color: gray-600`, `font-weight: 400`, `hover: color gray-900` |
| Disabled | `color: gray-400`, `cursor: not-allowed` |

### Pill Tabs

```
┌──────────────────────────────────────┐
│ [All (12)] [Mine (5)] [Unassigned (3)]│ ← Pill buttons
  ━━━━━━━   (inactive)   (inactive)    
  Active bg
```

**Styling:**
| State | Style |
|-------|-------|
| Active | `background: primary-600`, `color: white`, `border-radius: 6px`, `padding: 6px 12px` |
| Inactive | `background: gray-100`, `color: gray-700`, `hover: bg-gray-200` |

---

## Bajarilishi Kerak Bo'lgan Ishlar

### Dropdown
- [ ] `01-design-system.md` ga Dropdown component qo'shish
  - [ ] States (6 ta)
  - [ ] Anatomy diagram
  - [ ] Styling table
  - [ ] Behavior (keyboard navigation)
  - [ ] Accessibility (ARIA)
- [ ] Figma component yaratish
  - [ ] Master component (Default state)
  - [ ] Variants: Hover, Open, Error, Disabled
- [ ] Use cases document qilish
  - [ ] Single select
  - [ ] Multi-select (checkbox)
  - [ ] Search dropdown (10+ items)

### Tabs
- [ ] `01-design-system.md` ga Tabs component qo'shish
  - [ ] 2 variant (Underline, Pill)
  - [ ] States (Active, Inactive, Disabled)
  - [ ] Behavior
  - [ ] Accessibility
- [ ] Figma component yaratish
- [ ] Tab panel animation (fade/slide)

## Accessibility

### Dropdown
```html
<button aria-haspopup="listbox" 
        aria-expanded="false" 
        aria-labelledby="dropdown-label">
  Selected option
</button>

<ul role="listbox" 
    aria-labelledby="dropdown-label">
  <li role="option" aria-selected="true">Option 1</li>
  <li role="option">Option 2</li>
</ul>
```

### Tabs
```html
<div role="tablist" aria-label="Settings tabs">
  <button role="tab" 
          aria-selected="true" 
          aria-controls="panel-1">
    General
  </button>
  <button role="tab" 
          aria-selected="false" 
          aria-controls="panel-2">
    Team
  </button>
</div>

<div role="tabpanel" 
     id="panel-1" 
     aria-labelledby="tab-1">
  <!-- Panel content -->
</div>
```

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `figma-docs/11-inbox-chat.md`
- `figma-docs/12-inbox-advanced.md`
- `figma-docs/15-analytics.md`
- `figma-docs/16-settings.md`

## Keyingi Fix

Barcha sahifalar bu ikkala component dan foydalangan joyda yangilash kerak (tavsiya etilgan formatga moslashtirish).
