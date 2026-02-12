# 🔴 WebSocket Event Naming Nomutanosibligi

**Status:** 🟠 TODO  
**Prioritet:** 🔴 HIGH (Real-time funksionallik buziladi!)  
**Taxminiy vaqt:** 30 daqiqa  
**Mas'ul:** Backend Lead + Hujjat muallifi

---

## Muammo

Yangi xabar uchun WebSocket event nomi 2 ta faylda turlicha:

| Fayl | Event nomi |
|------|-----------|
| STATE_MANAGEMENT.md | `conversation.new_message` |
| CHATFLOW_FIGMA_ARCHITECTURE.md | `message.new` |

## Ta'sir — KRITIK! ⚠️

**Frontend dasturchilar noto'g'ri event listener yozadi:**

```javascript
// Frontend developer STATE_MANAGEMENT.md ni o'qidi:
socket.on('conversation.new_message', (data) => {
  addMessageToBubble(data);
});

// Lekin backend CHATFLOW_FIGMA_ARCHITECTURE.md asosida:
socket.emit('message.new', messageData);

// Natija: HECH NARSA ISHLAMAYDI! ❌
```

**Debugging qiyinlashadi:**
- "WebSocket ishlayaptimi?"
- "Event kelayaptimi?"
- "Nima uchun real-time yangilanmayapti?"

## Tavsiya Etilgan Yechim

**`message.new` ni standart qilish** (CHATFLOW_FIGMA_ARCHITECTURE.md qiymati)

**Sabab:**
1. **Qisqa va tozza:** `message.new` > `conversation.new_message`
2. **REST API bilan mos:** `POST /messages` → `message.new` event
3. **Resource-based naming:** `{resource}.{action}` pattern
4. **Keng tarqalgan konventsiya:** Socket.io best practices

## Bajarilishi Kerak Bo'lgan Ishlar

### Backend:
- [ ] STATE_MANAGEMENT.md ni yangilash
  - [ ] Event nomi: `conversation.new_message` → `message.new`
  - [ ] Barcha event ro'yxatini tekshirish (conversation.assigned, message.read, etc.)
- [ ] WebSocket event emit standardize qilish
- [ ] Event naming convention hujjatlashtirish

### Event Naming Convention

| Resource | Event | Format |
|----------|-------|--------|
| Message | Yangi | `message.new` |
| Message | O'qildi | `message.read` |
| Conversation | Assign qilindi | `conversation.assigned` |
| Conversation | Tugadi | `conversation.closed` |
| Agent | Online | `agent.online` |
| Agent | Typing | `agent.typing` |

**Pattern:** `{resource}.{action}` (singular, kebab-case yoki dot notation)

### To'liq Event List (tavsiya):

```javascript
// Messages
'message.new'          // Yangi xabar keldi
'message.sent'         // Xabar yuborildi
'message.read'         // Xabar o'qildi
'message.deleted'      // Xabar o'chirildi

// Conversations
'conversation.new'     // Yangi conversation
'conversation.assigned' // Agent assign qilindi
'conversation.closed'  // Conversation tugadi
'conversation.reopened' // Qayta ochildi

// Agents
'agent.online'         // Agent online
'agent.offline'        // Agent offline
'agent.typing'         // Agent yozyapti

// Customer/Visitor
'visitor.new'          // Yangi visitor
'visitor.typing'       // Visitor yozyapti
```

## Qo'shimcha Eslatmalar

**Socket.io example:**
```javascript
// Backend emit
io.to(conversationId).emit('message.new', {
  id: 'msg_123',
  conversation_id: 'conv_456',
  sender: 'visitor',
  text: 'Hello!',
  timestamp: '2026-02-12T10:30:00Z'
});

// Frontend listen
socket.on('message.new', (message) => {
  appendMessageToChat(message);
});
```

## Bog'liq Fayllar

- `STATE_MANAGEMENT.md`
- `CHATFLOW_FIGMA_ARCHITECTURE.md`
