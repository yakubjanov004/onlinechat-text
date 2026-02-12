# 📦 COMPONENTS NEEDED — Critical UI Components

Ushbu papkada **Design System da mavjud emas**, lekin ko'p sahifalarda ishlatiladigan 4 ta kritik UI component spetsifikatsiyalari mavjud.

## Component List

| # | Component | Priority | Vaqt | Ishlatilgan sahifalar | Status |
|---|-----------|----------|------|----------------------|--------|
| 1 | Dropdown | 🔴 CRITICAL | 3-4 soat | 15+ sahifa | 🟠 TODO |
| 2 | Table | 🔴 CRITICAL | 4-5 soat | 8+ sahifa | 🟠 TODO |
| 3 | Date Picker | 🔴 CRITICAL | 4-5 soat | 6+ sahifa | 🟠 TODO |
| 4 | Tabs | 🔴 CRITICAL | 2-3 soat | 10+ sahifa | 🟠 TODO |

**JAMI taxminiy vaqt:** 13.5-17 soat (~2-3 ish kuni)

---

## Nima Uchun CRITICAL?

### 1. Dropdown Component
**15+ joyda ishlatiladi:**
- Assign agent (12-inbox-advanced)
- Filter, Sort (11-inbox-chat)
- Language, Timezone select (16-settings)
- Trigger/Action select (13-automation)
- Role filter (14-team)

**Hozirgi holat:** Har sahifada turli xil style, inconsistent UX.

**Ta'sir:** Agar implement qilinmasa:
- 15+ sahifa inconsistent ko'rinadi
- Frontend developer har safar boshidan yasaydi → time wasted
- Accessibility yo'q → WCAG fail

---

### 2. Table Component
**8+ joyda ishlatiladi:**
- Team member list (14-team)
- Contact list (20-contacts-crm)
- Invoice history (17-billing)
- Analytics reports (15, 25-advanced-analytics)
- Knowledge base articles (23-kb)
- Automation flows (13-automation)

**Hozirgi holat:** Table structure har sahifada turlicha.

**Ta'sir:**
- Sorting turlicha (arrow ↑ / ↓ / ↕ ?)
- Pagination turlicha (10/page, 25/page?)
- Bulk actions (checkbox) inconsistent

---

### 3. Date Picker Component
**6+ joyda ishlatiladi:**
- Analytics date range (15-analytics, 25-advanced)
- Billing date filter (17-billing)
- Automation schedule (13-automation)
- Contact filter (20-contacts)

**Hozirgi holat:** Date format turlicha ("Jan 1" vs "01.01.2024").

**Ta'sir:**
- Foydalanuvchi confusion
- Multi-language support qiyin
- Preset ranges ("Last 7 days") yo'q

---

### 4. Tabs Component
**10+ joyda ishlatiladi:**
- Settings (General/Team/Widget) — 16-settings
- Analytics (Overview/Conversations) — 15-analytics
- Inbox filters (All/Mine/Unassigned) — 11-inbox-chat
- Automation status (Active/Paused) — 13-automation
- Contacts (All/Companies/Tags) — 20-contacts

**Hozirgi holat:** 3 xil tab style (underline, pill, segmented).

**Ta'sir:**
- Har sahifa turli xil look
- Active indicator inconsistent
- Badge (count) ba'zi joyda bor, ba'zi joyda yo'q

---

## Bajarilish Tartibi (tavsiya)

### Day 1 — Quick Components (Priority: Functionality)
1. ✅ **04-tabs-component.md** (2-3 soat) — Oddiy, ko'p joyda kerak
2. ✅ **01-dropdown-component.md** (3-4 soat) — Eng ko'p ishlatiladigan

### Day 2-3 — Complex Components
3. ✅ **03-date-picker-component.md** (4-5 soat) — Calendar logic
4. ✅ **02-table-component.md** (4-5 soat) — Sorting, pagination, bulk actions

---

## Har Bir Component Fayl Strukturi

Har bir spec fayl quyidagilarni o'z ichiga oladi:

### 1. Muammo
- Nima uchun kerak?
- Qaysi sahifalarda ishlatiladi?
- Hozirgi inconsistency nima?

### 2. Component Variants
- Use case-specific variants (masalan, Dropdown: Single/Multi/Search)

### 3. Full Specification
- **Anatomy:** Visual structure (ASCII wireframe)
- **States:** Default, Hover, Focused, Active, Disabled, Error
- **Styling:** CSS classes, colors, spacing
- **Behavior:** Clicks, keyboard navigation, animations

### 4. Accessibility
- **Keyboard navigation:** Tab, Arrow keys, Enter, Escape
- **ARIA attributes:** `role`, `aria-*` attributes
- **Screen reader:** Announcements

### 5. Responsive
- Desktop, Tablet, Mobile variants

### 6. Figma Component Structure
- Master component, Variants, States

### 7. Bajarilishi Kerak Bo'lgan Ishlar
- Checklist for Design, Figma, Development

### 8. Testing Checklist
- Functional tests, Accessibility tests

---

## Status Legend

- 🟠 **TODO** — Hali boshlanmagan (spec yozilgan, design yo'q)
- 🔵 **IN DESIGN** — Figma da design qilinmoqda
- 🟡 **READY FOR DEV** — Design tayyor, development boshlash mumkin
- 🟢 **DONE** — Implemented, tested, approved

---

## Design System Integration

Barcha component spetsifikatsiyalari **`01-design-system.md`** ga qo'shilishi kerak:

```markdown
## COMPONENTS

### Dropdown
[Link to 01-dropdown-component.md]

### Table
[Link to 02-table-component.md]

### Date Picker
[Link to 03-date-picker-component.md]

### Tabs
[Link to 04-tabs-component.md]
```

---

## Priority Matrix

| Component | Foydalanish | Murakkablik | Priority Score |
|-----------|-------------|-------------|----------------|
| Dropdown | 15+ sahifa | Oddiy | 🔴 10/10 |
| Tabs | 10+ sahifa | Oddiy | 🔴 9/10 |
| Table | 8+ sahifa | O'rta | 🔴 8/10 |
| Date Picker | 6+ sahifa | Murakkab | 🔴 7/10 |

**Xulosa:** Hammasi CRITICAL — barchasi implement qilinishi shart.

---

## Keyingi Qadamlar

### 1. Review & Approve (Product + Design Lead)
- [ ] Har bir component spec ni o'qish
- [ ] Variant ustida kelishish (Single/Multi dropdown kerakmi?)
- [ ] Styling approve qilish (color, spacing)

### 2. Figma Design (UI Designer)
- [ ] Master component yaratish
- [ ] All variants va states (Hover, Focused, etc.)
- [ ] Interactive prototype (click animation)
- [ ] Dark mode variant

### 3. Documentation (Hujjat muallifi)
- [ ] `01-design-system.md` ni yangilash
- [ ] Component usage guidelines
- [ ] Do's and Don'ts

### 4. Development (Frontend)
- [ ] Component implementation (React/Vue/etc.)
- [ ] Storybook stories (component showcase)
- [ ] Unit tests
- [ ] Accessibility tests

---

## MVP Scope

**v1.0 uchun:**
- ✅ Dropdown (Single select)
- ✅ Table (Sortable)
- ✅ Date Picker (Range + presets)
- ✅ Tabs (Underline + Pill)

**v1.1 ga ko'chirish mumkin:**
- ⏸️ Dropdown Multi-select
- ⏸️ Table Expandable rows
- ⏸️ Date Picker Time picker
- ⏸️ Tabs Scrollable (6+ tabs)

Bu approach development vaqtini 30% qisqartiradi.

---

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `CHATFLOW_FULL_ANALYSIS.md` (Section 6: Komponentlar)
- Barcha sahifa speklari (01-34)

---

## Tooling Tavsiyalari

**Design:**
- Figma Auto Layout ✅
- Component variants & properties ✅
- Design tokens (color, spacing) ✅

**Development:**
- Headless UI librarylari (Radix, HeadlessUI) — Accessibility built-in
- TailwindCSS — Utility-first, tez styling
- Storybook — Component showcase & testing

**Accessibility:**
- ARIA Authoring Practices Guide
- axe DevTools (Chrome extension)
- Screen reader testing (NVDA, VoiceOver)

---

## Contacts

**Savol bormi?**
- UI Designer: [Component visual inconsistency]
- Frontend Lead: [Implementation approach]
- Product Manager: [Variant decision, feature scope]
