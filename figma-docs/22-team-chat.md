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
**Holat:** Production Ready
