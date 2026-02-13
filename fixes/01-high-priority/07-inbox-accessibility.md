# 🔴 11-inbox-chat.md — Accessibility Bo'limi YO'Q

**Status:** ✅ DONE  
**Prioritet:** 🔴 HIGH (Eng ko'p ishlatiladigan sahifa!)  
**Taxminiy vaqt:** 2-3 soat  
**Mas'ul:** UX Designer

---

## Muammo

`11-inbox-chat.md` — operatorlarning 90%+ vaqti o'tadigan DEFAULT sahifa, lekin **HECH QANDAY accessibility spetsifikatsiyasi YO'Q!**

**Mavjud bo'lmagan narsalar:**
- ❌ Keyboard navigation (Tab order, Enter, Escape, Arrow keys)
- ❌ ARIA roles va labels
- ❌ Screen reader announcements
- ❌ Focus management
- ❌ Color contrast tekshiruvi
- ❌ Touch target sizes

## Ta'sir

**Keyboard-only foydalanuvchilar:**
- Conversation list da navigate qila olmaydi
- Xabar yuborishda Enter key ishlamasa — frustration

**Screen reader foydalanuvchilar:**
- "Bu nima? Chat area? Conversation list?"
- Yangi xabar kelganda hech narsa eshitmaydi
- Typing indicator screen reader ga ko'rinmaydi

**WCAG 2.1 Level AA compliance:** ❌ Fail

## Tavsiya Etilgan Accessibility Spec

### 1. Keyboard Navigation

| Tugma | Amal | Tafsilot |
|-------|------|---------|
| **Tab** | Focus navbat: `Conversation list → Chat input → Send button → Info panel actions` | Standard tab order |
| **Shift+Tab** | Orqaga focus | |
| **Arrow Up/Down** | Conversation list da yuqori/pastga | Conversation list focused bo'lganda |
| **Enter** | Tanlangan conversation ni ochish | Conversation list item focused |
| **Escape** | Info panel/emoji picker yopish | Active panel/overlay |
| **Cmd/Ctrl+Enter** | Xabar yuborish | Message input focused, multi-line |
| **Cmd/Ctrl+Shift+E** | Emoji picker ochish | Message input focused |
| **Cmd/Ctrl+K** | Global search (dashboard level) | |

### 2. ARIA Roles va Labels

```html
<!-- Conversation List -->
<div role="listbox" 
     aria-label="Conversations list" 
     aria-activedescendant="conv-123">
  
  <div role="option" 
       id="conv-123" 
       aria-selected="true"
       aria-label="Conversation with John Doe, 2 unread messages, last message 5 minutes ago">
    <!-- Conversation item content -->
  </div>
</div>

<!-- Chat Area -->
<div role="log" 
     aria-live="polite" 
     aria-label="Chat messages" 
     aria-atomic="false">
  <!-- Message bubbles -->
</div>

<!-- Message Input -->
<textarea role="textbox" 
          aria-label="Type a message" 
          aria-multiline="true"
          placeholder="Type your message..."></textarea>

<!-- Info Sidebar -->
<aside role="complementary" 
       aria-label="Customer information">
  <!-- Customer details -->
</aside>
```

### 3. Screen Reader Announcements

| Event | Announcement | ARIA live region |
|-------|-------------|-----------------|
| Yangi xabar keldi | "[Visitor name] sent a new message: [first 50 chars]" | `aria-live="polite"` |
| Conversation assigned | "Conversation assigned to you" | `aria-live="assertive"` |
| Xabar yuborildi | "Message sent" | `aria-live="polite"` |
| File received | "File received: [filename], [size]" | `aria-live="polite"` |
| Typing indicator | "[Name] is typing" | `aria-live="polite"` |
| Conversation closed | "Conversation closed" | `aria-live="assertive"` |

### 4. Focus Management

| Scenario | Focus harakati |
|----------|---------------|
| Conversation ochilganda | Focus → Chat message input |
| Yangi xabar kelganda | Focus o'zgarmaydi (faqat announcement) |
| Info panel ochilganda | Focus → Panel dagi birinchi focusable element |
| Info panel yopilganda | Focus qaytadi → Trigger button |
| Emoji picker ochilganda | Focus → Emoji grid |
| Modal ochilganda | Focus trap — faqat modal ichida |

### 5. Color Contrast

| Element | Foreground | Background | Contrast ratio | WCAG AA |
|---------|-----------|------------|----------------|---------|
| Operator message text | `#FFFFFF` | `#4F46E5` | 5.8:1 | ✅ Pass |
| Visitor message text | `#111827` | `#F3F4F6` | 12.3:1 | ✅ Pass (AAA!) |
| Unread badge | `#FFFFFF` | `#EF4444` | 4.5:1 | ✅ Pass |
| Timestamp | `#6B7280` | `#FFFFFF` | 4.8:1 | ✅ Pass |
| Online status (green dot) | `#10B981` | `#FFFFFF` | 3.2:1 | ⚠️ Fail (decorative only) |

### 6. Touch Targets

| Element | Size | WCAG minimum |
|---------|------|-------------|
| Conversation list item | Full width × 64px height | ✅ 44px+ |
| Send button | 40px × 40px | ⚠️ 44px tavsiya (40px acceptable) |
| Emoji button | 40px × 40px | ⚠️ |
| File upload button | 40px × 40px | ⚠️ |
| Info panel toggle | 48px × 48px | ✅ |

**Tavsiya:** Barcha action buttons 44px+ qilish.

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] `11-inbox-chat.md` ga yangi bo'lim qo'shish: "ACCESSIBILITY"
- [ ] Yuqoridagi 6 ta kategoriyani yozish
- [ ] Figma component tree ga ARIA annotations qo'shish
- [ ] Contrast ratio tekshirish (WebAIM Contrast Checker)
- [ ] Touch target sizes 44px+ ga oshirish (design adjust)
- [ ] ASCII wireframe ga keyboard navigation hints qo'shish

## Namuna Accessibility Bo'limi (copy-paste)

```markdown
## ACCESSIBILITY

### Keyboard Navigation

| Key | Action |
|-----|--------|
| Tab | Navigate forward through conversations, input, buttons |
| Shift+Tab | Navigate backward |
| Arrow Up/Down | Scroll conversation list |
| Enter | Open selected conversation |
| Escape | Close info panel / emoji picker |
| Cmd/Ctrl+Enter | Send message |

### ARIA Roles

- Conversation list: `role="listbox"`, `aria-label="Conversations"`
- Chat area: `role="log"`, `aria-live="polite"`, `aria-label="Chat messages"`
- Message input: `role="textbox"`, `aria-label="Type a message"`
- Info sidebar: `role="complementary"`, `aria-label="Customer information"`

### Screen Reader Announcements

- New message: "[Name] sent a new message: [preview]"
- Assigned: "Conversation assigned to you"
- Typing: "[Name] is typing"
- File received: "File received: [filename]"

### Focus Management

- Open conversation → focus chat input
- Close modal → focus returns to trigger
- Panel opens → focus first interactive element

### Color Contrast (WCAG AA)

- Operator message: 5.8:1 ✅
- Visitor message: 12.3:1 ✅
- Timestamps: 4.8:1 ✅

### Touch Targets

- Conversation item: 64px height ✅
- Buttons: 44px minimum ✅
```

## Bog'liq Fayllar

- `figma-docs/11-inbox-chat.md`

## Qo'shimcha Resurslar

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
