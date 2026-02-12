# 🟡 Responsive Breakpoint 15+ Sahifada Desktop-only

**Status:** 🟠 TODO  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 8-10 soat (40 min/sahifa × 15 sahifa)  
**Mas'ul:** UX Designer

---

## Muammo

**15 ta sahifa Desktop-only** — Tablet va Mobile spec mavjud emas:
1. 02-landing-hero-header.md ✅ (Responsive bor)
2. 03-landing-trust-kimlar.md ✅
3. 04-landing-ishlaydi-imkoniyatlar.md ✅
4. 05-landing-integratsiya-afzallik.md ✅
5. 06-landing-tariflar-cta-footer.md ✅
6. 08-onboarding-welcome-workspace.md ❌ **Desktop-only**
7. 09-onboarding-widget-install.md ❌ **Desktop-only**
8. 10-dashboard-layout.md ✅ (Responsive bor)
9. 12-inbox-advanced.md ❌ **Desktop-only**
10. 13-automation.md ❌ **Desktop-only**
11. 14-team.md ❌ **Desktop-only**
12. 20-contacts-crm.md ❌ **Desktop-only**
13. 21-online-visitors.md ❌ **Desktop-only**
14. 22-team-chat.md ❌ **Desktop-only**
15. 23-knowledge-base.md ❌ **Desktop-only**
16. 24-addons-marketplace.md ❌ **Desktop-only**
17. 25-advanced-analytics.md ❌ **Desktop-only**
18. 26-developer.md ❌ **Desktop-only**

## Ta'sir

**Business impact:**
- Mobile traffic: ~40-50% (global average)
- O'zbekistonda mobile-first audience (Telegram, Instagram habits)
- Operator tashqarida (coffee shop, uyda) dashboard ochishi mumkin — Desktop-only bo'lsa, ishlamaydi

**Development risk:**
- Responsive design keyinroq qo'shish — refactor qiyin
- CSS media queries boshidan rejalashtirish lozim

## Tavsiya Etilgan Breakpoints

| Breakpoint | Width | Device | Layout strategy |
|-----------|-------|--------|-----------------|
| Desktop | 1280px+ | Laptop, PC | Full multi-column layout |
| Tablet | 768px - 1279px | iPad, Android tablet | 2-column, collapsible sidebar |
| Mobile | 320px - 767px | Phone | Single column, bottom tabs |

## Har Bir Sahifa Uchun Responsive Strategy

### 1. Onboarding (08, 09)
- **Desktop:** 2-panel (progress sidebar + main content)
- **Tablet:** Progress stepper on top, content below
- **Mobile:** Just stepper + content, no sidebar

### 2. Inbox Advanced (12)
- **Desktop:** 3-panel (conversation + chat + info)
- **Tablet:** 2-panel (conversation + chat), info collapse
- **Mobile:** Stack vertical, info bottom sheet

### 3. Automation (13)
- **Desktop:** Flow canvas (1200px+ width)
- **Tablet:** Canvas zoom/pan controls
- **Mobile:** List view (trigger → action steps)

### 4. Team (14)
- **Desktop:** Table view (8 columns)
- **Tablet:** Table scroll horizontal yoki 5 column
- **Mobile:** Card view (stack vertical)

### 5. Contacts/CRM (20)
- **Desktop:** Table + sidebar
- **Tablet:** Table, sidebar collapse
- **Mobile:** Card list, detail modal

### 6. Online Visitors (21)
- **Desktop:** Map + list
- **Tablet:** Map on top, list below
- **Mobile:** List only, map optional toggle

### 7. Team Chat (22)
- **Desktop:** Sidebar + chat
- **Tablet:** Sidebar collapse, chat full
- **Mobile:** Fullscreen chat, back button to list

### 8. Knowledge Base (23)
- **Desktop:** Sidebar + article + TOC
- **Tablet:** Sidebar collapse, TOC bottom
- **Mobile:** Article only, back to folder

### 9. Addons Marketplace (24)
- **Desktop:** Grid (4 columns)
- **Tablet:** Grid (2-3 columns)
- **Mobile:** Vertical list (1 column)

### 10. Advanced Analytics (25)
- **Desktop:** Multi-chart layout
- **Tablet:** 2 charts per row
- **Mobile:** 1 chart per row, scroll

### 11. Developer (26)
- **Desktop:** Code + sidebar
- **Tablet:** Code full, sidebar collapse
- **Mobile:** Code block scroll, syntax highlight

## Bajarilishi Kerak Bo'lgan Ishlar

### Global:
- [ ] `01-design-system.md` da breakpoint standard hujjatlashtirish
- [ ] Grid system (12-column Desktop, 8-column Tablet, 4-column Mobile)

### Har sahifa uchun (15 ta):
- [ ] ASCII wireframe yangilash (Desktop + Tablet + Mobile)
- [ ] Layout strategy qo'shish
- [ ] Touch-friendly elements (button 44px+)
- [ ] Bottom navigation (Mobile)
- [ ] Collapsible sidebar logic

### Priority Order (eng muhim 5 ta):
1. **12-inbox-advanced.md** — Operatorlar tashqarida ishlatadi
2. **15-analytics.md** — Manager mobile dan report ko'radi
3. **14-team.md** — Team management
4. **13-automation.md** — Flow check qilish
5. **20-contacts-crm.md** — Customer info mobile dan

## Namuna Responsive Section

```markdown
## RESPONSIVE BREAKPOINTS

### Desktop (1280px+)
- 3-panel layout: Conversation list (320px) + Chat area (flex) + Info panel (300px)
- All features visible

### Tablet (768px - 1279px)
- 2-panel: Conversation (320px) + Chat (flex)
- Info panel → Collapsible overlay (slide from right)
- Touch-optimized buttons (44px height)

### Mobile (<768px)
- Single panel: Stack vertical
- Bottom navigation: Inbox / Contacts / Settings
- Chat fullscreen
- Info panel → Bottom sheet

**ASCII Wireframe (Mobile):**
```
┌─────────────────┐
│ ← Back   John   │ ← Header (fixed)
├─────────────────┤
│                 │
│  Chat messages  │ ← Scroll area
│  (bubbles)      │
│                 │
├─────────────────┤
│ Type message... │ ← Input (fixed)
└─────────────────┘
```
```

## Qo'shimcha Eslatmalar

**CSS Media Queries:**
```css
/* Mobile first */
.container {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1280px) {
  .container {
    padding: 32px;
  }
}
```

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- 15 ta Desktop-only sahifa (yuqorida ro'yxat)

## Keyingi Qadamlar

1. Breakpoint standardini approve qilish
2. Priority 5 ta sahifani responsive qilish
3. Qolgan 10 tasini ketma-ket
