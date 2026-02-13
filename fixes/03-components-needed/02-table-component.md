# 📦 Table Component Spec

**Status:** ✅ DONE  
**Prioritet:** 🔴 CRITICAL  
**Taxminiy vaqt:** 4-5 soat (Design + Figma)  
**Mas'ul:** UI Designer  
**Foydalanish:** 8+ sahifa

---

## Muammo

Table component **Design System da yo'q**, lekin 8+ sahifada ishlatiladi:
- 14-team.md: Team member list (8 columns)
- 20-contacts-crm.md: Contact list (7 columns)
- 17-billing.md: Invoice history (5 columns)
- 25-advanced-analytics.md: Conversation report (6+ columns)
- 15-analytics.md: Agent performance (5 columns)
- 23-knowledge-base.md: Article list (4 columns)
- 13-automation.md: Flow list (5 columns)
- 21-online-visitors.md: Visitor list (6 columns)

**Inconsistency:**
- Har sahifada turli xil table style
- Pagination turlicha (10/page, 25/page, infinity scroll?)
- Sort icon turlicha
- Row hover effect turlicha

---

## Component Variants

### 1. Simple Table (default)
**Use case:** Article list, Invoice history

### 2. Sortable Table
**Use case:** Team members (sort by name, role, status)

### 3. Selectable Table (Checkbox)
**Use case:** Bulk actions (delete, export, assign)

### 4. Expandable Rows
**Use case:** Conversation details, nested data

---

## Full Specification

### Anatomy

```
┌─────────────────────────────────────────────────────────┐
│ Table Header                    Search     [+ Add]      │ ← Header actions
├─────────────────────────────────────────────────────────┤
│ ☐ | Name ↑     | Email          | Role    | Status |⋮ │ ← Column headers + Sort
├─────────────────────────────────────────────────────────┤
│ ☐ | John Doe   | john@..        | Admin   | 🟢     |⋮ │ ← Row data
│ ☐ | Jane Smith | jane@..        | Agent   | 🔴     |⋮ │
│ ☐ | Mike John  | mike@..        | Agent   | 🟢     |⋮ │
├─────────────────────────────────────────────────────────┤
│ Showing 1-10 of 245        [< 1 2 3 ... 25 >]          │ ← Pagination
└─────────────────────────────────────────────────────────┘
```

### States

| State | Description | Visual |
|-------|-------------|--------|
| **Default** | Normal row | `bg: white` |
| **Hover** | Mouse hover row | `bg: gray-50` |
| **Selected** | Checkbox checked | `bg: primary-50`, checkbox ✓ |
| **Loading** | Data fetch | Skeleton loader |
| **Empty** | No data | Empty state illustration |
| **Error** | Fetch fail | Error message + retry button |

### Styling

#### Table Container
```css
.table-container {
  width: 100%;
  overflow-x: auto; /* Horizontal scroll agar keng bo'lsa */
  background: white;
  border: 1px solid #E5E7EB; /* gray-200 */
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
```

#### Table Header
```css
.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #E5E7EB;
}

.table-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}
```

#### Column Headers
```css
.table thead th {
  padding: 12px 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  color: #6B7280; /* gray-500 */
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: #F9FAFB; /* gray-50 */
  border-bottom: 1px solid #E5E7EB;
}

.table thead th.sortable {
  cursor: pointer;
  user-select: none;
}

.table thead th.sortable:hover {
  color: #111827;
  background: #F3F4F6; /* gray-100 */
}

.table thead th .sort-icon {
  margin-left: 8px;
  opacity: 0.5;
  transition: opacity 150ms;
}

.table thead th.sorted .sort-icon {
  opacity: 1;
  color: #4F46E5; /* primary-600 */
}
```

#### Table Row
```css
.table tbody tr {
  border-bottom: 1px solid #E5E7EB;
  transition: background 100ms ease;
}

.table tbody tr:hover {
  background: #F9FAFB; /* gray-50 */
}

.table tbody tr.selected {
  background: #EEF2FF; /* primary-50 */
}

.table tbody td {
  padding: 16px;
  font-size: 14px;
  color: #111827;
  vertical-align: middle;
}
```

#### Actions Column (⋮)
```css
.table-actions {
  width: 48px;
  text-align: center;
}

.table-actions .menu-button {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 150ms;
}

.table tbody tr:hover .menu-button {
  opacity: 1;
}

.menu-button:hover {
  background: #E5E7EB;
}
```

#### Pagination
```css
.table-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-top: 1px solid #E5E7EB;
}

.pagination-info {
  font-size: 14px;
  color: #6B7280;
}

.pagination-buttons button {
  width: 32px;
  height: 32px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  margin: 0 4px;
  cursor: pointer;
  transition: all 150ms;
}

.pagination-buttons button:hover {
  background: #F3F4F6;
  border-color: #D1D5DB;
}

.pagination-buttons button.active {
  background: #4F46E5;
  color: white;
  border-color: #4F46E5;
}
```

---

## Behavior

### Sorting

| Action | Result |
|--------|--------|
| **Click column header** | Sort ascending (↑) |
| **Click again** | Sort descending (↓) |
| **Click third time** | Remove sort (default order) |

**Visual indicator:**
- Default: `↕` (gray, 50% opacity)
- Asc: `↑` (primary-600, 100%)
- Desc: `↓` (primary-600, 100%)

### Selection

| Action | Result |
|--------|--------|
| **Click row checkbox** | Select/deselect row |
| **Click header checkbox** | Select/deselect all visible rows |
| **Shift+Click** | Select range (row A → row B) |

**Bulk actions bar (selected rows > 0):**
```
┌─────────────────────────────────────────────────────────┐
│ 5 selected    [Delete] [Export] [Assign]      [Cancel] │ ← Sticky top
└─────────────────────────────────────────────────────────┘
```

### Pagination

**Options:**
- 10 per page (default)
- 25 per page
- 50 per page
- 100 per page

**Logic:**
- Show first 3 pages + current + last 3
- Example: `< 1 2 3 ... 12 [13] 14 ... 23 24 25 >`

---

## Variants Spec

### 1. Simple Table

```html
<Table 
  columns={[
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' }
  ]}
  data={users}
/>
```

**Visual:** Basic table, no sorting, no checkbox.

---

### 2. Sortable Table

```html
<Table 
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'created_at', label: 'Created', sortable: true },
    { key: 'status', label: 'Status', sortable: true }
  ]}
  data={users}
  defaultSort={{ key: 'created_at', order: 'desc' }}
/>
```

**Visual:**
- Sortable columns: hover → cursor pointer
- Sort icon: `↕` → `↑` / `↓`

---

### 3. Selectable Table (Bulk Actions)

```html
<Table 
  selectable
  columns={columns}
  data={users}
  bulkActions={[
    { label: 'Delete', action: handleDelete, variant: 'danger' },
    { label: 'Export', action: handleExport }
  ]}
/>
```

**Visual:**
- Checkbox column (first)
- Selected rows → primary-50 background
- Bulk action bar appears (selected > 0)

---

### 4. Expandable Rows

```html
<Table 
  expandable
  columns={columns}
  data={conversations}
  renderExpanded={(row) => <ConversationDetails id={row.id} />}
/>
```

**Visual:**
```
┌─────────────────────────────────────────────┐
│ > | John Doe | 2024-01-15 | Open           │ ← Click > to expand
├─────────────────────────────────────────────┤
│ ∨ | Jane Smith | 2024-01-14 | Closed       │ ─┐
│   ┌─────────────────────────────────────┐   │  │ Expanded content
│   │ Last message: "Thanks!"             │   │  │
│   │ Agent: Mike                         │   │  │
│   │ [View Full Chat]                    │   │  │
│   └─────────────────────────────────────┘   │ ─┘
└─────────────────────────────────────────────┘
```

---

## Empty State

```
┌─────────────────────────────────────────────┐
│                                             │
│               📭                            │
│         No data available                   │
│   Add your first item to get started        │
│                                             │
│            [+ Add Item]                     │
│                                             │
└─────────────────────────────────────────────┘
```

---

## Loading State (Skeleton)

```
┌─────────────────────────────────────────────┐
│ ▭▭▭▭▭  | ▭▭▭▭▭▭▭▭▭ | ▭▭▭▭ | ▭▭▭          │ ← Shimmer animation
│ ▭▭▭▭▭  | ▭▭▭▭▭▭▭▭▭ | ▭▭▭▭ | ▭▭▭          │
│ ▭▭▭▭▭  | ▭▭▭▭▭▭▭▭▭ | ▭▭▭▭ | ▭▭▭          │
└─────────────────────────────────────────────┘
```

---

## Responsive (Mobile)

Desktop: Full table
Tablet: Horizontal scroll
Mobile: **Card view** (stack)

```
┌─────────────────────┐
│ John Doe            │
│ john@example.com    │
│ Role: Admin         │
│ Status: 🟢 Online   │
│          [Edit] [⋮] │
├─────────────────────┤
│ Jane Smith          │
│ jane@example.com    │
│ Role: Agent         │
│ Status: 🔴 Offline  │
│          [Edit] [⋮] │
└─────────────────────┘
```

---

## Accessibility

### Keyboard Navigation
- `Tab` → Navigate cells
- `Space` → Select row (checkbox)
- `Enter` → Open row action menu / expand
- `Arrow Up/Down` → Navigate rows

### ARIA
```html
<table role="table" aria-label="Team members">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">Name ↑</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr aria-selected="false">
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

### Screen Reader
- Header: "Name, sortable column, currently sorted ascending"
- Row: "John Doe, john@example.com, Admin, Online"
- Selection: "Row selected, 5 of 10 rows selected"

---

## Figma Component Structure

```
Table/
├─ Container
├─ Header/
│  ├─ Title
│  └─ Actions
├─ Column-Header/
│  ├─ Default
│  ├─ Sortable
│  └─ Sorted (asc/desc)
├─ Row/
│  ├─ Default
│  ├─ Hover
│  ├─ Selected
│  └─ Expanded
├─ Cell/
│  ├─ Text
│  ├─ Badge
│  ├─ Avatar
│  └─ Actions
├─ Pagination
├─ Empty-State
└─ Loading (Skeleton)
```

---

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] `01-design-system.md` ga "Table Component" section qo'shish
- [ ] Figma master component (4 variant: Simple, Sortable, Selectable, Expandable)
- [ ] All states (Default, Hover, Selected, Loading, Empty)
- [ ] Pagination component
- [ ] Bulk action bar
- [ ] Responsive card view (Mobile)
- [ ] Dark mode variant

## Priority Sahifalar

1. 14-team.md — Team table (sortable, selectable)
2. 20-contacts-crm.md — Contact list
3. 17-billing.md — Invoice history (simple)
4. 15-analytics.md — Agent performance (sortable)
5. 25-advanced-analytics.md — Report table (sortable, export)

## Testing Checklist

- [ ] Sort 3 times (asc → desc → default)
- [ ] Select all → deselect all
- [ ] Shift+Click range selection
- [ ] Keyboard navigation (Tab, Arrow keys)
- [ ] Screen reader table semantics
- [ ] Pagination logic (edge cases: page 1, last page)
- [ ] Long text overflow (ellipsis or wrap?)
- [ ] 1000+ rows performance (virtualization?)
- [ ] Horizontal scroll (many columns)

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `figma-docs/14-team.md`
- `figma-docs/20-contacts-crm.md`
- `figma-docs/17-billing.md`
- `figma-docs/15-analytics.md`
- `figma-docs/25-advanced-analytics.md`
