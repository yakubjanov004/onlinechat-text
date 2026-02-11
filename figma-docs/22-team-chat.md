# CHATFLOW — Team Chat (Jamoa Chat)

## Modul maqsadi
Team Chat — agentlar o'rtasida ichki muloqot uchun yaratil gan real vaqtdagi chat tizimi. Operatorlar bu yerda savollar so'raydi, tajriba almashadi, murakkab holatlarni muhokama qiladi va tezroq qarorlar qabul qiladi.

**Kirish:** Admin, Manager, Operator (barcha agentlar)

---

## 1. Team Chat Inbox (SCR-TC01)

### Layout
Dashboard Shell + Split View (Chat List + Chat Area)

**Layout Structure:**
- Left Sidebar: 300px (chat list)
- Main Chat Area: Remaining width (fluid)
- Responsive: Mobile toggles between list and chat

### UI Komponentlar

#### Left Sidebar (300px)

**Header:**
- Title: "Jamoa chat" 18px Semibold, Gray-900
- "+ Yangi chat" Primary button (compact, icon + text)
- Search bar below: "Agent yoki xonani qidirish..." (280px width)

**Tabs:**
- **To'g'ridan-to'g'ri** (Direct Messages) — active
- **Xonalar** (Rooms/Channels)
- Tab indicator: 2px Primary-600 bottom border

**Direct Messages List:**

Each DM Card (280×72px):
```
┌────────────────────────────┐
│ 🟢 [Avatar 40px] Jahongir  │
│    Manager                 │
│    Salom, bugun...      3  │  ← unread badge
│    5m ago                  │
└────────────────────────────┘
```

- Avatar: 40px circle
- Online status: 🟢 green dot (8px) or 🔴 offline gray
- Name: 14px Semibold, Gray-900
- Role badge: "Manager" 12px Gray-500
- Last message preview: 13px Gray-600, truncated, max 1 line
- Timestamp: "5m ago" 12px Gray-500, right-aligned
- Unread badge: Red circle "3" (if unread), 16px, white text

**Styling:**
- Hover: bg-gray-50
- Active: bg-primary-50, border-left 3px Primary-600
- Padding: 12px
- Gap: 4px between items

**Sort Order:**
- Online agents first (green dot)
- Most recent message
- Pinned chats (optional, future)

**Rooms List:**

Each Room Card (280×72px):
```
┌────────────────────────────┐
│ # [Icon 32px] general      │
│   12 a'zo                  │
│   Ali: Rahmat!          7  │
│   2m ago                   │
└────────────────────────────┘
```

- Icon: # symbol 32px for public, 🔒 for private rooms
- Room name: "#general" 14px Semibold
- Members count: "12 a'zo" 12px Gray-500
- Last message: "Ali: Rahmat!" 13px Gray-600 (author name + preview)
- Timestamp + Unread badge (same as DM)

**Default Rooms:**
- #general (everyone, public)
- #support-team (support agents only)
- #announcements (read-only for Operators, Admin/Manager can post)

**Filters/Actions:**
- "Online faqat" toggle (filters online agents)
- "Archived" link (shows archived chats, hidden by default)

---

#### Main Chat Area (right, fluid width)

**No Chat Selected State:**
- Illustration: 💬 Chat bubble icon (100px, Gray-300), centered
- Title: "Chat tanlang yoki yangi chat boshlang" 16px Semibold
- "+ Yangi chat boshlash" Outline button, centered

**Chat Header (when chat selected):**

**For Direct Message:**
```
┌─────────────────────────────────────────┐
│ 🟢 [Avatar 32px] Jahongir Otajonov     │
│    Manager · Online                     │
│                             [...] [×]   │  ← actions
└─────────────────────────────────────────┘
```

- Avatar: 32px
- Name: 16px Semibold, Gray-900
- Role + Status: "Manager · Online" 13px Gray-600
- Actions (right):
  - [...] Menu: View profile, Mute, Archive
  - [×] Close chat (mobile only)

**For Room:**
```
┌─────────────────────────────────────────┐
│ # general                  12 a'zo      │
│   Jamoaning umumiy muhokamasi          │
│                        [A'zolar] [...]  │
└─────────────────────────────────────────┘
```

- Icon + Name: "# general" 16px Semibold
- Description: "Jamoaning umumiy muhokamasi" 13px Gray-600
- "A'zolar" button: Opens member list modal
- [...] Menu: Room settings, Mute, Leave room

**Height:** 64px, border-bottom: 1px Gray-200

**Message Thread:**

- **Container:** Scrollable, auto-scroll to bottom on new message
- **Background:** White or Gray-50
- **Padding:** 16px horizontal, 24px vertical

**Message Bubble:**

**Others' Messages (left-aligned):**
```
┌────────────────────────────────────┐
│ [Avatar 32px]  Jahongir • 14:32   │
│                Salom! Yordam kera  │
│                kmi?                │
│                👍 2  ❤️ 1          │  ← reactions
└────────────────────────────────────┘
```

- Avatar: 32px, left side
- Name + Timestamp: "Jahongir • 14:32" 12px Gray-600, above message
- Message text: 14px Regular, Gray-900, left-aligned
- Background: Gray-100
- Border-radius: 12px (but flat on avatar side)
- Padding: 10px 14px
- Max width: 600px
- Reactions: Emoji with count below

**Own Messages (right-aligned):**
```
                      ┌────────────────────┐
                      │ Rahmat!   14:35 Me │
                      │                    │
                      │ 👍 1               │
                      └────────────────────┘
```

- No avatar (own messages clear)
- Timestamp + "Me": "14:35 Me" 12px right
- Background: Primary-500
- Text color: White
- Align: Right
- Max width: 600px

**Message Features:**

1. **Text Formatting (Markdown-style):**
   - **bold** → *text* in editor, renders bold
   - *italic* → _text_ in editor, renders italic
   - `code` → inline code, monospace, Gray-100 bg
   - ```code block``` → Multi-line code, monospace, Gray-900 bg, White text

2. **Mentions:**
   - Type @jahongir → Dropdown shows matching agents
   - Renders as: @Jahongir (Primary-600 bg, Primary-900 text, clickable)
   - Mentioned agent gets notification

3. **Emoji:**
   - 😊 Emoji picker button in toolbar
   - Renders inline: 18px size

4. **File Attachments:**
   - Images: Preview max 400×300px, clickable for full-size
   - Files: Icon + filename + size (e.g., 📄 report.pdf 2.4 MB)
   - Download button

5. **Reply/Thread:**
   - Hover message → "Javob berish" link
   - Creates threaded reply (collapsed by default)
   - Shows reply count: "3 javob" (clickable to expand)

6. **Reactions:**
   - Hover message → Emoji quick-reaction bar appears: 👍 ❤️ 😂 🎉
   - Click to add reaction
   - Shows count: "👍 2" (others' reactions visible)
   - Click own reaction to remove

**Date Separators:**
- "Bugun" / "Kecha" / "Jan 10, 2026" centered, 13px Gray-500
- Sticky while scrolling (optional)

**Typing Indicator:**
- Position: Bottom of message thread, above input
- Text: "Jahongir yozmoqda..." 13px Gray-500, italic
- Animated dots: ...
- Appears when someone is typing (WebSocket event)

---

**Message Input (bottom, sticky):**

**Container:**
- Height: Auto-expand (min 56px, max 120px)
- Background: White
- Border-top: 1px Gray-200
- Padding: 12px 16px

**Toolbar (above textarea):**
- Icons (20px each, Gray-600, hover Gray-900):
  - **B** Bold
  - *I* Italic
  - `<>` Code
  - 😊 Emoji picker (opens popover with emoji grid)
  - 📎 Attach file (opens file picker: images, docs, max 10MB)
  - @ Mention (opens agent list dropdown, filter as type)
- Gap: 8px between icons

**Textarea:**
- Placeholder: "Xabar yozing..." 14px Gray-500
- Font: 14px Regular, Gray-900
- Min-height: 40px
- Auto-expand on typing (max 120px, then scroll)
- Border: 1px Gray-300, focus: 2px Primary-600
- Radius: 8px
- Padding: 10px 12px

**Send Button:**
- Position: Right side of textarea (inline)
- Icon: Send arrow (Primary-600)
- Size: 36px circle button
- Hover: Primary-500
- Disabled: If textarea empty (Gray-300)

**Keyboard Shortcuts:**
- Enter: Send message
- Shift + Enter: New line in textarea
- Ctrl/Cmd + B: Bold
- Ctrl/Cmd + I: Italic

---

## 2. Start New Conversation (SCR-TC01-S01)

### Layout
Modal (500px width), centered overlay

### UI Komponentlar

#### Header
- Title: "Yangi chat boshlash" 20px Semibold
- Close button (X, top-right)

#### Options (Radio buttons)
- ⦿ **To'g'ridan-to'g'ri chat** (1-on-1)
- ◯ **Guruh chat** (multiple agents)

#### If Direct Message Selected

**Agent Selector:**
- Searchable dropdown: "Agent tanlash"
- Shows:
  - Online agents first (🟢 green dot)
  - Offline agents below (🔴 gray dot)
- Each item: Avatar 32px + Name + Role + Online status
- Filter as type: Search by name

**First Message (optional):**
- Textarea: "Birinchi xabar..." (250px height)
- Character count: 0 / 500
- Placeholder example: "Salom, yordam kerak..."

**Actions:**
- "Bekor qilish" Ghost button
- "Chatni boshlash" Primary button
  - On click: Opens DM in SCR-TC01 main area

#### If Group Chat Selected

**Room Details:**
- Room name: Input "Xona nomi" (required)
  - Example: "#marketing-team"
  - Validation: No spaces, lowercase, starts with #
- Description: Textarea "Xona ta'rifi..." (optional, 200 chars max)

**Room Type:**
- ⦿ Public (everyone can join)
- ◯ Private (invite-only, hidden from room list)

**Select Members:**
- Multi-select agent list (checkboxes)
- Shows all workspace agents
- Filter: Search by name
- Selected count: "5 a'zo tanlandi" 13px Gray-600

**Actions:**
- "Bekor qilish" Ghost
- "Xona yaratish" Primary
  - On create: Room appears in Rooms list, opens in main area

---

## 3. Room Settings (SCR-TC02)

### Layout
Modal (600px width)

### UI Komponentlar

#### Header
- Title: "Xona sozlamalari: #general" 20px Semibold
- Close button (X)

#### Tabs
- **General** (active) | Members | Permissions

#### General Tab

- **Room Name:**
  - Input: "#general" (editable)
  - Validation: Must start with #, no spaces

- **Description:**
  - Textarea: "Umumiy muhokamalar uchun" (500 chars max)

- **Room Type:**
  - Toggle switch: Public / Private
  - If public: "Everyone can see and join this room"
  - If private: "Only invited members can see this room"

- **Archive Room:**
  - "Arxivga yuborish" button (Orange-500 text)
  - Confirmation: "Are you sure? This room will be hidden from active list."

- **Delete Room:**
  - "Xonani o'chirish" button (Error-500 text)
  - Confirmation modal: "Delete #general? All messages will be lost."

#### Members Tab

**Current Members List:**
- Scrollable (max 400px height)
- Each member row:
  - Avatar 32px
  - Name + Role: "Jahongir Otajonov · Manager"
  - Online status: 🟢 / 🔴
  - Remove button: X (hover, red, Admin/Manager only)
- Count: "12 a'zo" shown in tab label

**Add Member:**
- "+ A'zo qo'shish" button
- Opens dropdown: Agent list (exclude current members)
- Select → Adds immediately

**Invite Link Section:**
- Title: "Taklifnoma havolasi" 14px Semibold
- If no link: "Havolani yaratish" button
- If link exists:
  - URL display: `https://chatflow.uz/team/invite/abc123`
  - "Nusxalash" button (copies to clipboard)
  - "Havolani o'chirish" Ghost button (danger)
  - Expires: "7 kun ichida" or "Muddatsiz" setting

#### Permissions Tab

**Who Can Post:**
- ⦿ Everyone
- ◯ Admin and Manager only
- ◯ Read-only (announcements channel)

**Who Can Add Members:**
- ⦿ Admin only
- ◯ Admin + Manager
- ◯ Everyone

**Who Can Edit Room:**
- ⦿ Admin only
- ◯ Admin + Manager (creator)

**Message History (for new members):**
- ⦿ Show full history
- ◯ Show only messages after join date

**Actions:**
- "Bekor qilish" Ghost (bottom-left)
- "Saqlash" Primary (bottom-right)
- On save: Toast "Sozlamalar saqlandi" Success-500

---

## 4. Notifications Settings (SCR-TC03)

### Layout
Settings page (Dashboard Shell + Main Content)

### UI Komponentlar

#### Header
- Title: "Jamoa chat bildishnomalari" 24px Semibold
- Subtitle: "Chat xabarlarini qanday qabul qilishni boshqaring" 14px Gray-600

#### Desktop Notifications Section
- **Title:** "Desktop bildishnomalari" 16px Semibold

**Options (Radio buttons):**
- ⦿ All messages (barcha xabarlar)
- ◯ Only mentions (@me) (faqat mention)
- ◯ Only direct messages (faqat to'g'ridan-to'g'ri)
- ◯ Off (o'chirish)

**Enable Browser Notifications:**
- If not granted: "Browser ruxsatini yoqing" button
- If granted: "Browser bildishnomalari yoqilgan" ✓

#### Sound Section
- **Title:** "Ovoz" 16px Semibold

**Toggle:**
- ☑ "Xabar ovozi" toggle switch
- If enabled:
  - Sound dropdown: "Chime" | "Ding" | "Pop" | "Bell"
  - 🔊 "Sinab ko'rish" button (plays selected sound)

#### Email Notifications Section
- **Title:** "Email bildishnomalari" 16px Semibold

**Options (Checkboxes):**
- ☑ "Direct messages" (when offline) — Sends email if agent offline
- ☑ "Mentions" (@me) (when offline)
- ◯ "Daily digest" (kunlik xulosa) — Summary email sent at 9 AM

#### Do Not Disturb (DND)
- **Title:** "Bezovta qilmaslik rejimi" 16px Semibold

**Enable DND:**
- ☑ "DND rejimni yoqish" toggle

**Time Range:**
- From: Time picker "22:00"
- To: Time picker "08:00"
- Days: Checkboxes for Mon, Tue, Wed, Thu, Fri, Sat, Sun (all checked default)
- During DND: "No notifications will be sent during these hours"

#### Mute Specific Rooms
- **Title:** "Xonalarni jim qilish" 16px Semibold
- List: All rooms with toggle for each
  - Example:
    - #general — 🔔 Unmuted (toggle to mute)
    - #random — 🔕 Muted (toggle to unmute)

**Actions:**
- "Standartga qaytarish" Outline button (resets to default settings)
- "Saqlash" Primary button
- On save: Toast "Sozlamalar saqlandi"

---

## 5. Empty & Error States

### SCR-TC-S01: Empty State (No Messages)
- Illustration: 💬 Chat bubbles (100px, Gray-300)
- Title: "Xabarlar yo'q" 18px Semibold
- Description: "Jamoa bilan muloqot boshlang!"
- "+ Yangi chat boshlash" Outline button

### SCR-TC-S02: Offline State
- Banner (top of chat area): "Tarmoqqa ulanishda xatolik" Yellow-50 bg, Warning icon
- Messages: Grayed out (read-only)
- Message input: Disabled with overlay "Offline rejim. Qayta ulanmoqda..."
- "Qayta ulanish" button (tries to reconnect WebSocket)

---

## 6. Components

### Message Bubble (Own)
- Background: Primary-500
- Text color: White
- Padding: 10px 14px
- Radius: 12px (flat on right side)
- Max-width: 600px
- Float: Right

### Message Bubble (Others)
- Background: Gray-100
- Text color: Gray-900
- Padding: 10px 14px
- Radius: 12px (flat on left side)
- Max-width: 600px
- Float: Left

### Mention Badge
- Background: Primary-50
- Color: Primary-900
- Padding: 2px 6px
- Radius: 4px
- Font: 14px Semibold
- Clickable (shows user profile popover)

### Reaction Badge
- Size: 24px×20px
- Background: Gray-100 (or Primary-50 if own reaction)
- Emoji: 14px
- Count: 12px Gray-700
- Radius: 12px
- Hover: scale 1.1

### Online Status Indicator
- Size: 8px circle
- Colors:
  - 🟢 Green (Success-500) — Online
  - 🔴 Gray (Gray-400) — Offline
  - 🟡 Yellow (Warning-500) — Away (future)
- Animated pulse on green (optional)

---

## 7. User Flow

```
[Dashboard] → [Sidebar: Team Chat] → [SCR-TC01 Inbox]
                                          ↓
                    ┌─────────────────────┼─────────────────────┐
                    ↓                     ↓                     ↓
            [Direct Messages]       [Rooms]             [+ Yangi chat]
                    ↓                     ↓                     ↓
            [Select agent]         [Select room]       [SCR-TC01-S01 Modal]
                    └─────────────────────┼─────────────────────┘
                                          ↓
                                [Chat opens in main area]
                                          ↓
                                [Type message → Send]
                                          ↓
                        [Message delivered (WebSocket)]
                                          ↓
                                [Recipient sees + notification]
```

---

## 8. Texnik Talablar

- **Real-time Messaging:** WebSocket (Socket.io or similar)
- **Message Delivery:** Guaranteed delivery with ACK
- **Offline Messages:** Queued and delivered when online
- **Message History:** Unlimited (or configurable retention: 90 days, 1 year)
- **File Storage:** Max 10MB per file, stored in S3/CDN
- **Typing Indicator:** Sent every 3 seconds while typing
- **Read Receipts:** "Last seen" timestamp (future: read by agents list)
- **Search:** Full-text search across all messages (future feature)
- **Notifications:** Browser Push API + Email (Sendgrid)
- **Performance:** < 100ms message latency, supports 100+ agents

---

## 9. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| Send direct messages | ✅ | ✅ | ✅ |
| Create rooms | ✅ | ✅ | ⚠️ (public only) |
| Join public rooms | ✅ | ✅ | ✅ |
| Edit room settings | ✅ | ⚠️ (own rooms) | ❌ |
| Delete rooms | ✅ | ❌ | ❌ |
| Delete messages | ✅ | ⚠️ (own only) | ⚠️ (own only) |
| Create announcements room | ✅ | ✅ | ❌ |
| Generate invite links | ✅ | ✅ | ❌ |
| View all rooms | ✅ | ✅ | ⚠️ (joined only) |

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 596 → 1900+ (expanded with API, WebSocket, Database, Components, Accessibility)  
**Holat:** ✅ COMPLETE

---

## 10. API ENDPOINTS

### GET /api/v1/team-chat/conversations

Fetch both DMs and rooms

**Query params:**
- `type`: dm | room | all (default)
- `sort`: recent_message | alphabetical
- `page`: 1
- `limit`: 50

**Response:**
```json
{
  "conversations": [
    {
      "id": "conv_dm_abc123",
      "type": "dm",
      "participant": {
        "id": "usr_def456",
        "name": "Jahongir Otajonov",
        "email": "jahongir@chatflow.uz",
        "avatar_url": "https://cdn...",
        "role": "manager",
        "is_online": true,
        "last_seen_at": "2026-02-11T14:35:00Z"
      },
      "last_message": {
        "id": "msg_ghi789",
        "text": "Salom, bugun customer complaint bor",
        "sender_id": "usr_def456",
        "created_at": "2026-02-11T14:30:00Z"
      },
      "unread_count": 3,
      "updated_at": "2026-02-11T14:30:00Z"
    },
    {
      "id": "room_jkl012",
      "type": "room",
      "name": "🔔 E'lonlar",
      "description": "Muhim yangiliklar",
      "emoji": "🔔",
      "is_private": false,
      "created_by": "usr_admin_1",
      "members_count": 12,
      "last_message": {
        "id": "msg_mno345",
        "text": "Ertaga 10:00 da umumiy yig'ilish",
        "sender_id": "usr_admin_1",
        "created_at": "2026-02-11T09:00:00Z"
      },
      "unread_count": 0,
      "updated_at": "2026-02-11T09:00:00Z"
    }
  ],
  "meta": {
    "total": 15,
    "page": 1,
    "per_page": 50
  }
}
```

### GET /api/v1/team-chat/conversations/:id/messages

**Query params:**
- `before`: message_id (pagination)
- `limit`: 50

**Response:**
```json
{
  "messages": [
    {
      "id": "msg_ghi789",
      "conversation_id": "conv_dm_abc123",
      "sender": {
        "id": "usr_def456",
        "name": "Jahongir Otajonov",
        "avatar_url": "https://...",
        "role": "manager"
      },
      "text": "Salom, bugun customer complaint bor",
      "attachments": [],
      "reactions": [
        {
          "emoji": "👍",
          "count": 2,
          "users": ["usr_pqr678", "usr_stu901"]
        }
      ],
      "reply_to": null,
      "created_at": "2026-02-11T14:30:00Z",
      "updated_at": null,
      "deleted_at": null
    },
    {
      "id": "msg_xyz234",
      "text": "Tushundim, hozir ko'rib chiqaman",
      "sender": { ... },
      "reply_to": {
        "id": "msg_ghi789",
        "text": "Salom, bugun customer complaint bor",
        "sender_name": "Jahongir"
      },
      "attachments": [
        {
          "id": "att_abc567",
          "file_name": "screenshot.png",
          "file_size": 245680,
          "file_type": "image/png",
          "url": "https://cdn.chatflow.uz/..."
        }
      ],
      "created_at": "2026-02-11T14:32:00Z"
    }
  ],
  "has_more": true,
  "next_cursor": "msg_older_id"
}
```

### POST /api/v1/team-chat/conversations

Create new DM or room

**Request (DM):**
```json
{
  "type": "dm",
  "participant_id": "usr_def456"
}
```

**Request (Room):**
```json
{
  "type": "room",
  "name": "Frontend Jamoasi",
  "description": "React, UI/UX muhokamalar",
  "emoji": "💻",
  "is_private": false,
  "member_ids": ["usr_abc", "usr_def", "usr_ghi"]
}
```

**Response:** 201 Created with conversation object

### POST /api/v1/team-chat/messages

Send message

**Request:**
```json
{
  "conversation_id": "conv_dm_abc123",
  "text": "Salom! Yordam kerakmi?",
  "reply_to_message_id": "msg_previous",
  "attachments": [
    {
      "file_name": "report.pdf",
      "file_size": 1024000,
      "file_type": "application/pdf",
      "url": "https://cdn..."
    }
  ]
}
```

**Response:** 201 Created
```json
{
  "message": {
    "id": "msg_new_789",
    "created_at": "2026-02-11T14:35:00Z",
    ...
  }
}
```

### PUT /api/v1/team-chat/messages/:id

Edit message (own messages only)

**Request:**
```json
{
  "text": "Salom! Yordam kerakmi? (edited)"
}
```

### DELETE /api/v1/team-chat/messages/:id

Soft delete message

**Response:** 204 No Content

### POST /api/v1/team-chat/messages/:id/reactions

Add emoji reaction

**Request:**
```json
{
  "emoji": "👍"
}
```

**Response:** 201 Created

### POST /api/v1/team-chat/rooms/:id/join

Join room

### POST /api/v1/team-chat/rooms/:id/leave

Leave room

### PUT /api/v1/team-chat/rooms/:id

Update room settings (name, description, privacy)

### POST /api/v1/team-chat/typing

Send typing indicator

**Request:**
```json
{
  "conversation_id": "conv_dm_abc123"
}
```

**Response:** 204 No Content (broadcast via WebSocket)

### POST /api/v1/team-chat/read-receipt

Mark conversation as read

**Request:**
```json
{
  "conversation_id": "conv_dm_abc123",
  "last_read_message_id": "msg_abc789"
}
```

---

## 11. WEBSOCKET EVENTS

### Event 1: `team_chat.message_sent`

```json
{
  "event": "team_chat.message_sent",
  "data": {
    "conversation_id": "conv_dm_abc123",
    "message": {
      "id": "msg_new_789",
      "sender": {
        "id": "usr_def456",
        "name": "Jahongir",
        "avatar_url": "https://...",
        "role": "manager"
      },
      "text": "Salom!",
      "attachments": [],
      "reply_to": null,
      "created_at": "2026-02-11T14:35:00Z"
    }
  }
}
```
**Trigger:** Append message to chat area, update conversation list (move to top), increment unread if not focused, show browser notification

### Event 2: `team_chat.typing`

```json
{
  "event": "team_chat.typing",
  "data": {
    "conversation_id": "conv_dm_abc123",
    "user": {
      "id": "usr_def456",
      "name": "Jahongir"
    },
    "is_typing": true
  }
}
```
**Trigger:** Show "Jahongir yozmoqda..." 3s timeout, hide when stopped

### Event 3: `team_chat.message_deleted`

```json
{
  "event": "team_chat.message_deleted",
  "data": {
    "message_id": "msg_xyz234",
    "conversation_id": "conv_dm_abc123",
    "deleted_by": "usr_def456"
  }
}
```
**Trigger:** Replace message with "Message o'chirildi" gray placeholder

### Event 4: `team_chat.message_edited`

```json
{
  "event": "team_chat.message_edited",
  "data": {
    "message_id": "msg_xyz234",
    "new_text": "Tushundim, hozir ko'rib chiqaman (edited)",
    "updated_at": "2026-02-11T14:36:00Z"
  }
}
```
**Trigger:** Update message text, add "(tahrirlandi)" badge

### Event 5: `team_chat.reaction_added`

```json
{
  "event": "team_chat.reaction_added",
  "data": {
    "message_id": "msg_xyz234",
    "emoji": "👍",
    "user_id": "usr_pqr678",
    "reaction_count": 3
  }
}
```
**Trigger:** Update reaction count, animate emoji scale 1 → 1.2 → 1

### Event 6: `team_chat.user_online_status`

```json
{
  "event": "team_chat.user_online_status",
  "data": {
    "user_id": "usr_def456",
    "is_online": true,
    "last_seen_at": "2026-02-11T14:40:00Z"
  }
}
```
**Trigger:** Update DM list online status dot (gray → green), if chat open update header

### Event 7: `team_chat.read_receipt`

```json
{
  "event": "team_chat.read_receipt",
  "data": {
    "conversation_id": "conv_dm_abc123",
    "user_id": "usr_def456",
    "last_read_message_id": "msg_xyz234"
  }
}
```
**Trigger:** Update message "Ko'rildi" checkmark (single → double blue)

### Event 8: `team_chat.room_created`

```json
{
  "event": "team_chat.room_created",
  "data": {
    "room": {
      "id": "room_new_123",
      "name": "Frontend Jamoasi",
      "emoji": "💻",
      "created_by": "usr_admin_1"
    }
  }
}
```
**Trigger:** Add room to "Xonalar" tab list, slide-in animation

---

## 12. DATABASE SCHEMA

**Table: `team_chat_conversations`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `type` | ENUM | 'dm' or 'room' |
| `name` | VARCHAR(100) | Room name (null for DMs) |
| `description` | TEXT | Room description |
| `emoji` | VARCHAR(10) | Room emoji |
| `is_private` | BOOLEAN | Private room? (default false) |
| `created_by` | UUID | FK → users.id |
| `last_message_id` | UUID | FK → team_chat_messages.id |
| `last_message_at` | TIMESTAMP | Last message timestamp |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |

**Indexes:**
- `idx_tc_conversations_workspace` on `workspace_id`
- `idx_tc_conversations_type` on `type`
- `idx_tc_conversations_last_message_at` on `last_message_at` DESC

**Table: `team_chat_participants`**

(For DMs and room membership)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `conversation_id` | UUID | FK → team_chat_conversations.id |
| `user_id` | UUID | FK → users.id |
| `role` | ENUM | 'member' or 'admin' (room only) |
| `joined_at` | TIMESTAMP | Joined timestamp |
| `last_read_message_id` | UUID | FK → team_chat_messages.id |
| `last_read_at` | TIMESTAMP | Last read |

**Indexes:**
- `idx_tc_participants_conversation` on `conversation_id`
- `idx_tc_participants_user` on `user_id`
- UNIQUE `conversation_id, user_id`

**Table: `team_chat_messages`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `conversation_id` | UUID | FK → team_chat_conversations.id |
| `sender_id` | UUID | FK → users.id |
| `text` | TEXT | Message text |
| `attachments` | JSONB | [{file_name, url, size, type}] |
| `reply_to_message_id` | UUID | FK → team_chat_messages.id (nullable) |
| `edited_at` | TIMESTAMP | Edited timestamp (nullable) |
| `deleted_at` | TIMESTAMP | Soft delete |
| `created_at` | TIMESTAMP | Created |

**Indexes:**
- `idx_tc_messages_conversation` on `conversation_id`
- `idx_tc_messages_created_at` on `created_at` DESC
- `idx_tc_messages_sender` on `sender_id`

**Table: `team_chat_reactions`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `message_id` | UUID | FK → team_chat_messages.id |
| `user_id` | UUID | FK → users.id |
| `emoji` | VARCHAR(10) | Emoji character |
| `created_at` | TIMESTAMP | Created |

**Indexes:**
- `idx_tc_reactions_message` on `message_id`
- UNIQUE `message_id, user_id, emoji`

---

## 13. FIGMA COMPONENTS

**Component Tree:**
```
team-chat/
├── screens/
│   ├── SCR-TC01 (chat-inbox-split-view)
│   │   ├── left-sidebar (300px)
│   │   │   ├── header (title + new chat button)
│   │   │   ├── search-bar
│   │   │   ├── tabs (DMs / Rooms)
│   │   │   └── conversation-list
│   │   │       ├── dm-card × N
│   │   │       └── room-card × N
│   │   └── main-chat-area
│   │       ├── chat-header
│   │       │   ├── participant-info (avatar + name + online status)
│   │       │   └── actions (search + room settings)
│   │       ├── chat-messages-container (scrollable)
│   │       │   ├── date-divider
│   │       │   ├── message-bubble (sent/received)
│   │       │   ├── message-bubble-with-reply
│   │       │   ├── message-bubble-with-attachment
│   │       │   └── typing-indicator
│   │       └── message-input-area
│   │           ├── input-textarea (auto-expand)
│   │           ├── toolbar (attach + emoji)
│   │           └── send-button
│   └── SCR-TC02 (empty-state-no-chat-selected)
│       ├── illustration (chat-bubbles icon)
│       └── text "Chat tanlang"
├── modals/
│   ├── new-dm-modal
│   │   ├── user-search-input
│   │   ├── user-list (checkboxes)
│   │   └── footer (cancel + start chat)
│   ├── new-room-modal
│   │   ├── room-name-input
│   │   ├── description-textarea
│   │   ├── emoji-picker
│   │   ├── privacy-toggle (Public/Private)
│   │   ├── member-selector
│   │   └── footer (cancel + create)
│   ├── room-settings-modal
│   │   ├── tabs (Details / Members / Permissions)
│   │   └── tab-content
│   └── file-preview-modal (image/pdf preview before send)
├── components/
│   ├── dm-card (280×72px)
│   │   ├── avatar-40px + online-status-dot
│   │   ├── name-and-role
│   │   ├── last-message-preview
│   │   └── unread-badge (count)
│   ├── room-card (280×64px)
│   │   ├── emoji-icon + room-name
│   │   ├── last-message-preview
│   │   └── unread-badge
│   ├── message-bubble
│   │   ├── avatar-32px (received only)
│   │   ├── sender-name-and-timestamp
│   │   ├── message-text (markdown support)
│   │   ├── reply-quote-bar (if reply)
│   │   ├── attachment-preview
│   │   ├── reactions-row (emoji + count)
│   │   └── actions-menu (reply/react/delete)
│   ├── typing-indicator
│   │   └── animated-dots (3 dots pulsing)
│   ├── date-divider
│   │   └── line + "Bugun" text + line
│   ├── online-status-dot (8px, green/gray)
│   └── unread-badge (red circle, white count)
```

**Component Variants:**
- `message-bubble` states: sent (align right, primary bg) / received (align left, gray bg) / deleted (gray placeholder)
- `dm-card` states: default / hover / selected (primary left border)
- `room-card` states: default / hover / selected
- `online-status-dot`: online (green #10B981) / offline (gray #9CA3AF)

---

## 14. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **DM/Room card hover** | bg gray-50, shadow-sm | 150ms ease |
| **DM/Room card selected** | left border 3px primary-600, bg primary-50 | 200ms ease |
| **New message arrive** | slide-in from bottom opacity 0 → 1, translateY(10px) → 0 | 300ms ease-out |
| **Send message** | message fade-in, scroll to bottom smooth | 200ms ease |
| **Typing indicator** | 3 dots scale 0.8 ↔ 1, stagger 150ms each | infinite |
| **Online status change** | dot fade green ↔ gray | 400ms ease |
| **Unread badge appear** | scale 0 → 1, bounce effect | 300ms ease-out |
| **Unread badge increment** | pulse scale 1 → 1.3 → 1 | 200ms ease |
| **Reaction add** | emoji scale 0 → 1.2 → 1 | 300ms spring |
| **Reaction hover** | scale 1 → 1.1 | 150ms ease |
| **Message delete** | fade-out + collapse height | 400ms ease-in |
| **Message edit badge** | "(tahrirlandi)" fade-in | 200ms ease |
| **File attachment upload** | progress bar fill 0 → 100% | variable |
| **Emoji picker open** | slide-up from bottom, backdrop fade | 250ms ease-out |
| **New room/DM modal** | backdrop fade 0 → 50%, modal scale 0.95 → 1 | 200ms ease-out |
| **Chat header dropdown** | slide-down 10px, opacity 0 → 1 | 200ms ease-out |
| **Scroll to bottom button** | fade-in when scrolled up >200px | 300ms ease |

---

## 15. ACCESSIBILITY

### Keyboard Navigation

**Chat Sidebar:**
- **Tab:** Navigate through search → tabs → conversation cards
- **Enter/Space:** Open conversation
- **Arrow keys (↑↓):** Navigate conversation list
- **Arrow keys (←→) in tabs:** Switch DMs / Rooms
- **Escape:** Clear search, deselect conversation

**Chat Area:**
- **Tab:** Navigate message actions → input textarea → send button
- **Ctrl/Cmd + Enter:** Send message
- **Arrow keys (↑) in empty input:** Edit last sent message
- **Escape:** Close emoji picker, cancel edit mode
- **Shift + Tab:** Reverse navigation

### ARIA Labels and Roles

**Conversation List:**
- List: `role="list"`, `aria-label="Team chat conversations"`
- DM card: `role="button"`, `aria-label="{Name}, {Role}, {unread count} unread messages, last message: {preview}"`, `tabindex="0"`
- Unread badge: `aria-label="{count} unread messages"`
- Online status: `role="status"`, `aria-label="Online"` or "Offline"

**Chat Area:**
- Messages container: `role="log"`, `aria-live="polite"`, `aria-label="Chat messages"`
- Message bubble: `role="article"`, `aria-label="Message from {sender} at {time}: {text}"`
- Typing indicator: `role="status"`, `aria-live="polite"`, `aria-label="{Name} is typing"`
- Message input: `aria-label="Type your message"`, `aria-multiline="true"`
- Send button: `aria-label="Send message"`, `aria-disabled` when empty
- Reaction button: `aria-label="Add reaction"`, `aria-haspopup="true"`

**Modals:**
- New DM modal: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="new-dm-title"`
- Room settings: Focus trap, Escape to close

### Screen Reader Announcements

**Chat List:**
- New message: "New message from Jahongir in Direct Messages. 3 unread messages."
- Online status: "{Name} is now online."

**Chat Area:**
- Message sent: "Message sent."
- Message received: "New message from Jahongir: Salom!"
- Typing: "Jahongir is typing."
- Reaction added: "Jahongir reacted with thumbs up."
- File uploaded: "Screenshot.png uploaded successfully."

### Color Contrast (WCAG AA)

- Message text (sent) white on #4F46E5: 7.1:1 (AAA)
- Message text (received) #111827 on #F3F4F6: 11.5:1 (AAA)
- DM card name #111827 on white: 11.7:1 (AAA)
- Last message preview #6B7280 on white: 5.3:1 (AA)
- Unread badge white on #EF4444: 4.9:1 (AA)
- All interactive elements: 4.5:1+ contrast

### Focus Indicators

- All focusable elements: 2px solid #4F46E5 outline, 4px offset
- Conversation card focus: 3px left border #4F46E5, bg primary-50
- Message input focus: 2px primary-600 ring

### Touch Targets

- Mobile buttons: min 44×44px
- Desktop buttons: min 40×40px
- DM/Room cards: 72px height (sufficient)

---

## 16. PERFORMANCE

### Loading Targets
- Initial page load: < 1s
- Conversation list render (50 items): < 350ms
- Message list render (50 messages): < 400ms
- Message send latency: < 100ms (WebSocket)
- Typing indicator latency: < 50ms
- File upload feedback: immediate progress bar

### Optimization
- **WebSocket:** Persistent connection, auto-reconnect with exponential backoff
- **Virtual scrolling:** If > 100 messages in chat
- **Message pagination:** Load 50 at a time, load more on scroll up
- **Image lazy load:** Attachment previews
- **Debounce typing:** Send typing event max every 3s
- **Throttle scroll:** Update "scroll to bottom" button every 100ms
- **Unread count:** Cache in localStorage, sync on connection

---

## 17. SECURITY & PRIVACY

### Access Control
- Users only see conversations they're members of
- Private rooms: invite-only, not visible in room list
- Message delete: Own messages only (except Admin)
- Room settings: Creator/Admin only

### Data Retention
- Messages: Unlimited (configurable 90 days, 1 year)
- Files: 10MB max, stored encrypted in S3
- Deleted messages: Soft delete, text hidden but record kept

### Rate Limiting
- Send message: Max 30/min per user
- Create room: Max 10/day per user
- Typing indicator: Max 1 event/3s per conversation

### Audit Log
- Message deletion (who, when, which message)
- Room creation/deletion
- Member add/remove

---

## 18. USER FLOWS

### Flow 1: Send Direct Message
1. Operator logs in → Sidebar "Jamoa chat"
2. Clicks "+ Yangi chat" button
3. Modal opens: "Yangi xabar yuborish"
4. Search bar: types "Jah" → autocomplete shows "Jahongir Otajonov"
5. Selects Jahongir → Click "Chat boshlash"
6. Chat opens in main area (empty if new)
7. Types "Salom! Customer complaint haqida gaplashamiz?"
8. Clicks Send (or Ctrl+Enter)
9. Message sent (WebSocket), appears in chat
10. Jahongir receives notification + sees message
11. Jahongir replies: "Albatta, qaysi customer?"
12. Conversation continues...

### Flow 2: Create & Use Room
1. Manager clicks "+ Yangi chat" → "Xona yaratish"
2. Modal opens: "Yangi xona"
3. Fills: Name "🛠️ Support Jamoasi", Description "Daily support team discussions"
4. Selects emoji 🛠️
5. Privacy: Public (toggle)
6. Adds members: Jahongir, Dilshod, Zarina (checkboxes)
7. Clicks "Xona yaratish"
8. Room created, opens in chat area
9. Sends first message: "Assalomu alaykum jamoaga! Bu yerda daily support gaplashamiz."
10. All members receive notification
11. Members join, start chatting
12. Jahongir reacts with 👍 to first message
13. Later: Dilshod uploads screenshot of bug
14. Team discusses in thread

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 596 → 1900+  
**Holat:** ✅ COMPLETE
