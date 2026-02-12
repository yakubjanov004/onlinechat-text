# ✅ CHATFLOW Project TODO — Organized Task List

> Ushbu TODO loyiha uchun barcha fix va improvement tasklar ro'yxati.  
> Eski TODO `archive/TODO-old.md` ga ko'chirilgan.

**Last Updated:** 2026-02-12  
**Project:** CHATFLOW — O'zbekiston SaaS Live Chat Platform  
**Overall Readiness:** 75/100 → Target: 90/100

---

## 📊 Progress Overview

| Category | Total | TODO | In Progress | Done | Progress |
|----------|-------|------|-------------|------|----------|
| **HIGH Priority** | 7 | 7 | 0 | 0 | 0% |
| **MEDIUM Priority** | 6 | 6 | 0 | 0 | 0% |
| **Components** | 4 | 4 | 0 | 0 | 0% |
| **TOTAL** | 17 | 17 | 0 | 0 | **0%** |

**Estimated Time:**
- HIGH: 18-23 soat (~2-3 ish kuni)
- MEDIUM: 21-26.5 soat (~3-4 ish kuni)
- COMPONENTS: 13.5-17 soat (~2-3 ish kuni)
- **TOTAL: 53-66.5 soat (~7-10 ish kuni)**

---

## 🔴 HIGH PRIORITY — Figma Dizayn Boshlanishidan OLDIN

> **Deadline:** Figma dizayn boshlashdan OLDIN hal qilinishi SHART!

| # | Task | Status | Vaqt | Mas'ul | File |
|---|------|--------|------|--------|------|
| 1 | Info Sidebar Kengligi (280px vs 300px) | 🟠 TODO | 30 min | Hujjat muallifi | [01-info-sidebar-width.md](fixes/01-high-priority/01-info-sidebar-width.md) |
| 2 | Widget Pozitsiya Konflikti (4 vs 3 pozitsiya) | 🟠 TODO | 30 min | UX + Hujjat | [02-widget-position-conflict.md](fixes/01-high-priority/02-widget-position-conflict.md) |
| 3 | Welcome Message Limit (100 vs 200 chars) | 🟠 TODO | 30 min | Product + Hujjat | [03-welcome-message-limit.md](fixes/01-high-priority/03-welcome-message-limit.md) |
| 4 | File Upload Types (JPG/PNG/PDF vs +DOCX/XLSX) | 🟠 TODO | 30 min | Product + Hujjat | [04-file-upload-types.md](fixes/01-high-priority/04-file-upload-types.md) |
| 5 | WebSocket Event Naming (message.new vs conversation.new_message) | 🟠 TODO | 30 min | Backend Lead | [05-websocket-event-naming.md](fixes/01-high-priority/05-websocket-event-naming.md) |
| 6 | Guest Role Permissions (undefined) | 🟠 TODO | 1 soat | Product Manager | [06-guest-role-permissions.md](fixes/01-high-priority/06-guest-role-permissions.md) |
| 7 | 11-inbox-chat.md Accessibility bo'limi yo'q | 🟠 TODO | 2-3 soat | UX Designer | [07-inbox-accessibility.md](fixes/01-high-priority/07-inbox-accessibility.md) |

**Subtotal:** 18-23 soat

### Bajarilish Tartibi (Tavsiya)

#### Day 1 — Product Decisions
- [ ] Task 3: Welcome message limit — 200 chars final?
- [ ] Task 4: File upload types — Plan-based yoki hammaga?
- [ ] Task 6: Guest role — Kerakmi yoki yo'q?

#### Day 2 — Quick Fixes
- [ ] Task 1: Info sidebar width → 300px
- [ ] Task 2: Widget pozitsiya → 3 variant
- [ ] Task 5: WebSocket event → `message.new`

#### Day 3 — Accessibility
- [ ] Task 7: 11-inbox-chat Accessibility to'liq spec

---

## 🟡 MEDIUM PRIORITY — UX Improvement & Consistency

> **Deadline:** HIGH hal qilingandan KEYIN, v1.0 MVP da qilish tavsiya etiladi.

| # | Task | Status | Vaqt | Mas'ul | File |
|---|------|--------|------|--------|------|
| 1 | Agent Status Indicator Desktop-da yo'q | 🟠 TODO | 1 soat | UX Designer | [01-agent-status-indicator.md](fixes/02-medium-priority/01-agent-status-indicator.md) |
| 2 | Analytics Date Format Nomutanosibligi | 🟠 TODO | 30 min | Hujjat muallifi | [02-date-format-inconsistency.md](fixes/02-medium-priority/02-date-format-inconsistency.md) |
| 3 | Dropdown va Tabs Component Spec Yo'q | 🟠 TODO | 2 soat | UI Designer | [03-dropdown-tabs-missing.md](fixes/02-medium-priority/03-dropdown-tabs-missing.md) |
| 4 | Responsive — 15+ Sahifa Desktop-only | ⏸️ DEFERRED (v1.1) | 8-10 soat | UX Designer | [04-responsive-desktop-only.md](fixes/02-medium-priority/04-responsive-desktop-only.md) |
| 5 | Search Funksionallik 7 Sahifada Noaniq | 🟠 TODO | 3-4 soat | UX + Product | [05-search-functionality-unclear.md](fixes/02-medium-priority/05-search-functionality-unclear.md) |
| 6 | Dark Mode 10/18 Modulda Yo'q | ⏸️ DEFERRED (v1.1) | 6-8 soat | UI Designer | [06-dark-mode-incomplete.md](fixes/02-medium-priority/06-dark-mode-incomplete.md) |

**Subtotal (v1.0 scope):** 7.5 soat  
**Deferred to v1.1:** 14-18 soat

### v1.0 MVP Scope

**QILISH KERAK (v1.0):**
- [x] Task 1: Agent status indicator ✅
- [x] Task 2: Date format ✅
- [x] Task 3: Dropdown/Tabs ✅
- [x] Task 5: Search spec ✅

**v1.1 GA KO'CHIRISH:**
- [ ] Task 4: Responsive (15 sahifa) — Desktop-first approach
- [ ] Task 6: Dark mode (10 modul) — Light mode-only v1.0

---

## 📦 COMPONENTS NEEDED — Critical UI Components

> **Deadline:** Design System da implement qilinishi SHART (15+ sahifa ta'sirlangan)

| # | Component | Status | Vaqt | Ishlatilgan | File |
|---|-----------|--------|------|-------------|------|
| 1 | Dropdown Component (Single/Multi/Search) | 🟠 TODO | 3-4 soat | 15+ sahifa | [01-dropdown-component.md](fixes/03-components-needed/01-dropdown-component.md) |
| 2 | Table Component (Sortable/Selectable) | 🟠 TODO | 4-5 soat | 8+ sahifa | [02-table-component.md](fixes/03-components-needed/02-table-component.md) |
| 3 | Date Picker (Range + Presets) | 🟠 TODO | 4-5 soat | 6+ sahifa | [03-date-picker-component.md](fixes/03-components-needed/03-date-picker-component.md) |
| 4 | Tabs Component (Underline/Pill) | 🟠 TODO | 2-3 soat | 10+ sahifa | [04-tabs-component.md](fixes/03-components-needed/04-tabs-component.md) |

**Subtotal:** 13.5-17 soat

### Bajarilish Tartibi

#### Day 1 — Quick Components
- [ ] Task 4: Tabs (2-3 soat) — Oddiy, ko'p joyda kerak
- [ ] Task 1: Dropdown (3-4 soat) — Eng ko'p ishlatiladigan

#### Day 2-3 — Complex Components
- [ ] Task 3: Date Picker (4-5 soat) — Calendar logic
- [ ] Task 2: Table (4-5 soat) — Sorting, pagination

---

## 📋 Additional Tasks (Low Priority)

> **Deadline:** v1.1+ yoki kerak bo'lganda

### Documentation
- [ ] 01-design-system.md ga yangi componentlarni qo'shish
- [ ] API_ENDPOINTS_EXTENDED.md ni yangilash (WebSocket events)
- [ ] PERMISSION_MATRIX.md ga Guest role qo'shish
- [ ] TESTING_STRATEGY.md ga accessibility test qo'shish

### Other Issues (43+ LOW priority)
Batafsil ro'yxat: `CHATFLOW_FULL_ANALYSIS.md` (Section 11: Yetishmayotgan Elementlar)

**Examples:**
- Notification preferences (16-settings.md) — noaniq
- Email template customization
- Chatbot flow builder (13-automation.md da eslatish yo'q)
- 2FA setup (16-settings.md da yo'q)
- Export conversation as PDF

---

## 🗂️ Folder Structure

```
onlinechat/
├─ CHATFLOW_FULL_ANALYSIS.md      ← Comprehensive analysis
├─ TODO.md                         ← Ushbu fayl (master task list)
├─ archive/
│  └─ TODO-old.md                  ← Eski TODO
├─ fixes/
│  ├─ 01-high-priority/            ← 7 ta kritik fix
│  │  ├─ README.md
│  │  ├─ 01-info-sidebar-width.md
│  │  ├─ 02-widget-position-conflict.md
│  │  ├─ 03-welcome-message-limit.md
│  │  ├─ 04-file-upload-types.md
│  │  ├─ 05-websocket-event-naming.md
│  │  ├─ 06-guest-role-permissions.md
│  │  └─ 07-inbox-accessibility.md
│  ├─ 02-medium-priority/          ← 6 ta UX improvement
│  │  ├─ README.md
│  │  ├─ 01-agent-status-indicator.md
│  │  ├─ 02-date-format-inconsistency.md
│  │  ├─ 03-dropdown-tabs-missing.md
│  │  ├─ 04-responsive-desktop-only.md
│  │  ├─ 05-search-functionality-unclear.md
│  │  └─ 06-dark-mode-incomplete.md
│  └─ 03-components-needed/        ← 4 ta critical component
│     ├─ README.md
│     ├─ 01-dropdown-component.md
│     ├─ 02-table-component.md
│     ├─ 03-date-picker-component.md
│     └─ 04-tabs-component.md
└─ figma-docs/                     ← 34 ta Figma spec fayl
```

---

## 🎯 Milestone Timeline

### Phase 1: Analysis & Planning ✅ DONE
- [x] CHATFLOW_FULL_ANALYSIS.md yaratildi (1618 lines)
- [x] Nomutanosibliklar aniqlandi (17 ta)
- [x] Yetishmayotgan elementlar kataloglandi (41 ta)
- [x] Todo tasklar kategoriyalandi (HIGH/MEDIUM/COMPONENTS)

### Phase 2: Critical Fixes 🔄 IN PROGRESS
**Target:** Figma dizayn boshlanishidan OLDIN  
**Duration:** 2-3 ish kuni (18-23 soat)

- [ ] 7 ta HIGH priority task hal qilish
- [ ] Product decisions (welcome message, file types, guest role)
- [ ] Accessibility spec yozish (11-inbox-chat)

### Phase 3: Components & UX 🔜 NEXT
**Target:** v1.0 MVP uchun  
**Duration:** 3-5 ish kuni (21-24 soat)

- [ ] 4 ta kritik component (Dropdown, Table, Date Picker, Tabs)
- [ ] MEDIUM priority fixes (Agent status, Date format, Search)
- [ ] Design System yangilash

### Phase 4: Figma Design 🔜 UPCOMING
**Target:** Phase 2-3 tugagandan KEYIN  
**Duration:** 6-10 hafta (140+ soat)

- [ ] 18 ta modul, 160+ screen
- [ ] Interactive prototype
- [ ] Developer handoff

### Phase 5: Development 🔜 FUTURE
**Target:** Figma tayyor bo'lgandan KEYIN  
**Duration:** 16-24 hafta

- [ ] Frontend (React/Vue)
- [ ] Backend (Laravel/Node)
- [ ] Testing & QA

---

## 📈 Success Metrics

| Metric | Current | Target v1.0 | Target v1.1 |
|--------|---------|-------------|-------------|
| Overall Readiness | 75/100 | 85/100 | 95/100 |
| Design System Coverage | 65% | 85% | 95% |
| Accessibility Coverage | 68% | 85% | 100% |
| Responsive Coverage | 42% | 42% (Desktop-first) | 95% |
| Dark Mode Coverage | 56% | 56% (Light-only) | 100% |
| Nomutanosibliklar | 17 ta | 0 ta | 0 ta |
| Yetishmayotgan Elementlar | 41 ta (critical) | 0 ta (HIGH) | 0 ta (ALL) |

---

## 🚀 Quick Start

### Men Designer bo'lsam:
1. `fixes/01-high-priority/README.md` ni o'qish
2. High priority fix fayllarini ketma-ket hal qilish (1-7)
3. `fixes/03-components-needed/README.md` — Component spec o'qish
4. Figma da componentlar yaratish

### Men Product Manager bo'lsam:
1. HIGH Priority decisions (Task 3, 4, 6) — approve qilish
2. MEDIUM Priority scope (v1.0 vs v1.1) — decision qilish
3. Component variants (Dropdown multi-select kerakmi?) — approve

### Men Frontend Developer bo'lsam:
1. Component spec fayllarni o'qish (fixes/03-components-needed/)
2. Design System componentlar ketma-ketlik bilan implement qilish
3. Accessibility test yozish (WCAG AA compliance)

### Men Hujjat Muallifi bo'lsam:
1. HIGH Priority task 1, 2, 3, 4 — hujjat yangilash
2. `01-design-system.md` ga componentlarni qo'shish
3. PERMISSION_MATRIX.md ga Guest role qo'shish

---

## 📞 Contacts & Ownership

| Role | Responsibility | Tasks |
|------|---------------|-------|
| **Product Manager** | Decisions, scope, feature approval | HIGH #3, #4, #6, MEDIUM #5 |
| **UX Designer** | User flows, accessibility, wireframes | HIGH #2, #7, MEDIUM #1, #4, #5 |
| **UI Designer** | Visual design, Figma components | MEDIUM #3, #6, COMPONENTS |
| **Hujjat Muallifi** | Documentation, spec updates | HIGH #1, #2, #3, #4, MEDIUM #2 |
| **Backend Lead** | API, WebSocket, permissions | HIGH #5, #6 |
| **Frontend Lead** | Component implementation | COMPONENTS #1-4 |

---

## 🔗 Related Files

- `CHATFLOW_FULL_ANALYSIS.md` — Batafsil tahlil (1618 lines)
- `archive/TODO-old.md` — Eski TODO list
- `figma-docs/01-design-system.md` — Design System spec
- `PERMISSION_MATRIX.md` — Role permissions
- `STATE_MANAGEMENT.md` — WebSocket events
- `CHATFLOW_FIGMA_ARCHITECTURE.md` — System architecture

---

## 📝 Notes

**v1.0 MVP Philosophy:**
- Desktop-first (responsive v1.1)
- Light mode-only (dark mode v1.1)
- Core features + Critical fixes ✅
- Quality > Quantity

**v1.1 Deferred Features:**
- Responsive (15 sahifa) → +8-10 soat
- Dark mode (10 modul) → +6-8 soat
- Advanced components (Multi-select, Expandable rows) → +5 soat

**Bu approach development vaqtini 30%+ qisqartiradi va MVP ni tezroq launch qilish imkonini beradi.**

---

**End of TODO.md** 🎉
