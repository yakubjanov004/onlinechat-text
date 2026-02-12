# 🟡 Dark Mode 10/18 Modulda Yo'q

**Status:** 🟠 TODO  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 6-8 soat  
**Mas'ul:** UI Designer

---

## Muammo

Dark mode **faqat 8 ta modulda** mavjud:
1. ✅ 02-06: Landing pages (barchasi)
2. ✅ 07: Auth (sign up, login)
3. ✅ 10: Dashboard layout
4. ✅ 11: Inbox chat

**Yo'q bo'lgan 10 ta modul:**
1. ❌ 12-inbox-advanced.md
2. ❌ 13-automation.md
3. ❌ 14-team.md
4. ❌ 15-analytics.md
5. ❌ 16-settings.md
6. ❌ 17-billing.md
7. ❌ 20-contacts-crm.md
8. ❌ 21-online-visitors.md
9. ❌ 22-team-chat.md
10. ❌ 23-knowledge-base.md
11. ❌ 24-addons-marketplace.md
12. ❌ 25-advanced-analytics.md
13. ❌ 26-developer.md

## Ta'sir

**User experience:**
- Operator dashboard-da dark mode ✅, lekin Settings-ga kirsa → light mode ❌ (jarring switch)
- Night shift operatorlar uchun eye strain
- Professional branding inconsistency

**Development:**
- Dark mode uchun CSS variables, component variants rejalashtirish kerak
- Keyinroq qo'shish — refactor qiyin

## Tavsiya Etilgan Yechim

### Option 1: Dark Mode Ni To'liq Implement Qilish (18/18)

**Sabab:**
- Modern SaaS platformalarning 90%+ dark mode bor
- User preference — localStorage da saqlanadi
- Professional feature

### Option 2: Light Mode-ni Default Qilish (Dark Mode Yo'q)

**Sabab:**
- Design effort kam
- Testing kam
- Light mode dasturchi-friendly (code review, debugging)

**Tavsiya:** **Option 1** — To'liq dark mode. SaaS platformalar uchun standard feature.

## Design System — Dark Mode Color Palette

**34-dark-mode.md da noaniq:** Color palette juda umumiy.

**Tavsiya etilgan palette:**

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Background** | | |
| Page bg | `#FFFFFF` | `#0F172A` (slate-900) |
| Card bg | `#FFFFFF` | `#1E293B` (slate-800) |
| Hover bg | `#F3F4F6` | `#334155` (slate-700) |
| **Text** | | |
| Primary text | `#111827` (gray-900) | `#F1F5F9` (slate-100) |
| Secondary text | `#6B7280` (gray-500) | `#94A3B8` (slate-400) |
| Muted text | `#9CA3AF` (gray-400) | `#64748B` (slate-500) |
| **Borders** | | |
| Border | `#E5E7EB` (gray-200) | `#334155` (slate-700) |
| Border hover | `#D1D5DB` (gray-300) | `#475569` (slate-600) |
| **Primary** | | |
| Primary-600 | `#4F46E5` | `#6366F1` (lighter) |
| Primary-700 | `#4338CA` | `#4F46E5` |
| **Status** | | |
| Success | `#10B981` | `#34D399` (lighter) |
| Warning | `#F59E0B` | `#FBBF24` |
| Error | `#EF4444` | `#F87171` |

**KRITIK:** Dark mode da ranglar biroz lightroq bo'lishi kerak (contrast uchun).

## Bajarilishi Kerak Bo'lgan Ishlar

### Design System:
- [ ] `34-dark-mode.md` ni yangilash
  - [ ] To'liq color palette table (yuqoridagi kabi)
  - [ ] Component-specific dark mode rules
  - [ ] Shadow values (light mode: strong, dark mode: subtle)
  - [ ] Image/Icon invert rules

### Har sahifa uchun (10 ta):
- [ ] Dark mode color palette apply qilish
- [ ] Screenshot/ASCII wireframe dark variant
- [ ] Contrast check (WCAG AA: 4.5:1 text, 3:1 UI)

### Frontend:
- [ ] CSS variables setup
```css
:root {
  --bg-page: #FFFFFF;
  --text-primary: #111827;
}

[data-theme="dark"] {
  --bg-page: #0F172A;
  --text-primary: #F1F5F9;
}
```
- [ ] Theme toggle component
- [ ] localStorage: `theme` preference

### Priority Order (muhim 5 ta):
1. 12-inbox-advanced.md (operator tool)
2. 15-analytics.md (kechqurun report)
3. 16-settings.md (toggle location)
4. 13-automation.md
5. 14-team.md

## Qo'shimcha Eslatmalar

**Theme toggle location:**
- Dashboard header (top-right)
- Settings → Preferences

**Auto mode (optional v2.0):**
- OS preference detect: `prefers-color-scheme: dark`
- Time-based: 6 PM - 6 AM → auto dark

**Images:**
- Logo: SVG (fill color change)
- Illustrations: Invert yoki dark variant

**Syntax highlighting (26-developer.md):**
- Light mode: `github-light` theme
- Dark mode: `dracula` yoki `nord`

## Bog'liq Fayllar

- `figma-docs/34-dark-mode.md`
- 10 ta dark mode yo'q sahifalar (yuqorida ro'yxat)

## Testing Checklist

- [ ] All text contrast >= 4.5:1 (WCAG AA)
- [ ] Border visible (dark bg da ko'rinmas bo'lmasligi kerak)
- [ ] Shadow subtle (dark mode da juda ko'p shadow jarring)
- [ ] Icon color adjusted
- [ ] Image/illustration visibility
