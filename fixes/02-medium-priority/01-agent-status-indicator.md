# 🟡 Agent Status Indicator Desktop-da yo'q

**Status:** 🟠 TODO  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 1 soat  
**Mas'ul:** UX Designer

---

## Muammo

Agent status indicator (online/offline/away) quyidagi sahifalarda:
- ✅ 14-team.md — Team member list da mavjud
- ✅ 18-chat-widget.md — Widget da ko'rsatiladi (visitor perspective)
- ❌ 11-inbox-chat.md — Agent assigned info da YO'Q
- ❌ 12-inbox-advanced.md — Team member select da statusni ko'rsatish yo'q

## Ta'sir

**Operator confusion:**
- "Bu conversation Johnга assigned, lekin u online mi hozir?"
- Manual ravishda Team sahifasiga borib status check qilish kerak → inefficient
- Conversation reassign qilishda kim online ekanligini bilmaydi

**Team collaboration:**
- Online agent ga assign qilish tezroq javob beradi
- Offline agentga assign qilsa — customer kutadi

## Tavsiya Etilgan Yechim

### 1. 11-inbox-chat.md — Info Panel "Assigned to" qismida status qo'shish

**Hozir:**
```
Assigned to: John Doe
```

**Keyin:**
```
Assigned to: 🟢 John Doe (Online)
```

**Status colors:**
- 🟢 Online: `#10B981`
- 🟡 Away: `#F59E0B`
- 🔴 Offline: `#EF4444`

### 2. 12-inbox-advanced.md — Assign modal da agent list

**Agent list item:**
```
[ ] John Doe         🟢 Online   (3 active)
[ ] Jane Smith       🟡 Away     (1 active)
[ ] Mike Johnson     🔴 Offline  (0 active)
```

**Sort order:**
1. Online agents (load az → ko'p)
2. Away agents
3. Offline agents

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] 11-inbox-chat.md — ASCII wireframe yangilash
  - [ ] Info panel "Assigned to" section
  - [ ] Status dot + text
- [ ] 12-inbox-advanced.md — Assign modal ni yangilash
  - [ ] Agent list item layout
  - [ ] Status indicator
  - [ ] Active conversation count
  - [ ] Sort logic (Online → Away → Offline)
- [ ] Real-time status yangilash — WebSocket
  - [ ] `agent.online` event → status dot green
  - [ ] `agent.offline` → red
  - [ ] `agent.away` → yellow
- [ ] Backend: Agent status API
  - [ ] `GET /api/agents/{id}/status` → `{ status: 'online', last_seen: '2026-02-12T10:30:00Z' }`

## Qo'shimcha Eslatmalar

**Status logic:**
- **Online:** Agent logged in, active ishlamoqda
- **Away:** 5+ daqiqa inaktiv (idle)
- **Offline:** Logged out yoki browser yopilgan

**WebSocket event:**
```javascript
socket.on('agent.online', (agentId) => {
  updateAgentStatus(agentId, 'online');
});

socket.on('agent.offline', (agentId) => {
  updateAgentStatus(agentId, 'offline');
});
```

## Bog'liq Fayllar

- `figma-docs/11-inbox-chat.md`
- `figma-docs/12-inbox-advanced.md`
- `figma-docs/14-team.md` (reference)
- `STATE_MANAGEMENT.md`
