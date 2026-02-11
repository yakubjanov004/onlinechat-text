# CHATFLOW — Notification Center (Bildirishnomalar Markazi)

**Module ID:** SCR-D01-S04 (Dashboard Shell component)  
**Yaratilgan:** 2026-02-11  
**Kirish:** All roles (Admin, Manager, Operator)  
**Maqsad:** Real-time bildirishnomalarni boshqarish, ko'rish va sozlash

---

## Umumiy Yondashuv

Notification Center — CHATFLOW'dagi barcha real-time bildirishnomalarni bir joyda ko'rish va boshqarish uchun dropdown panel. Header'dagi 🔔 bell icon'dan ochiladi va foydalanuvchiga yangi chatlar, mention'lar, team messages, system updates va billing alerts haqida xabar beradi.

**Key Features:**
- 🔴 Unread badge counter
- 📱 Real-time updates (WebSocket)
- 🔔 5 notification types
- ✅ Mark as read/unread
- 🗑️ Delete notifications
- ⚙️ Settings link
- 🔍 Filter by type
- 🔊 Sound & desktop notifications

---

## 1. NOTIFICATION BELL ICON (Header component)

### Joylashuv
Dashboard header, top-right, left of user avatar

### UI Komponentlar

**Bell Icon:**
- Icon: Bell 20px, #6B7280 (gray)
- Hover: #4F46E5 (primary), scale 1.1 100ms
- Click: Opens notification dropdown
- Active (dropdown open): #4F46E5

**Unread Badge:**
- Position: Absolute top-right of bell icon
- Size: 20×20px circle (or auto width if count >99)
- Background: #EF4444 (red)
- Text: White, 11px Bold
- Count: "3" or "99+" if > 99
- Animation: Pulse on new notification (scale 1 → 1.2 → 1, 400ms)
- Hidden: If count = 0

**New notification animation:**
- Bell icon: Shake animation (rotate -10deg → 10deg → 0, 500ms)
- Badge: Pulse scale
- Desktop notification: If enabled
- Sound: If enabled

---

## 2. NOTIFICATION DROPDOWN PANEL

### Trigger
Click bell icon in header

### Panel Specs
- **Width:** 420px
- **Max Height:** 600px (scrollable)
- **Position:** Absolute, top 64px (below header), right 16px
- **Background:** White #FFFFFF
- **Border:** 1px #E5E7EB
- **Border Radius:** 12px
- **Shadow:** 0 8px 16px rgba(0,0,0,0.1) (shadow-lg)
- **Animation:** Fade-in 150ms, slide-down 5px

### Header Section (sticky top)
**Background:** White, border-bottom 1px #E5E7EB, padding 16px

**Title + Actions row:**
- Left: "Bildirishnomalar" 18px Semibold #111827
- Right: 
  - "🔔 Barchasini belgilash" link 13px Medium #4F46E5 (Mark all as read)
  - "⚙️ Sozlamalar" link 13px Medium #6B7280

**Filter Tabs (below title):**
- 6 tabs horizontal, gap 12px, padding-top 12px
- Tabs: "Barchasi (12) | Chatlar (5) | Mention (3) | Jamoa (2) | Tizim (1) | Billing (1)"
- Style:
  - Inactive: 13px Medium #6B7280, bg transparent
  - Active: 13px Semibold #4F46E5, bg #EEF2FF, padding 6px 12px, radius 6px
  - Count badge: 13px inside parentheses
- Click: Filter notifications by type

### Notifications List (scrollable)

**Empty State (if no notifications):**
- Icon: Bell crossed 48px #D1D5DB center
- Title: "Hech qanday bildirishnoma yo'q" 16px Semibold #374151
- Description: "Yangi xabarlar bo'lganda bu yerda ko'rinadi" 14px #6B7280
- Padding: 60px vertical

**Notification Item (unread):**
- Height: auto, min 80px
- Padding: 16px
- Background: #F0F9FF (blue tint) — Unread
- Border-bottom: 1px #E5E7EB
- Hover: bg #E0F2FE (darker blue)
- Click: Mark as read + navigate to source

**Notification Item (read):**
- Background: White
- Hover: bg #F9FAFB

**Notification structure:**
```
┌────────────────────────────────────────────────────┐
│ 🟢 [Icon]  Title                         [•] [X]  │
│            Description                             │
│            ⏱️ 5 daqiqa oldin                       │
└────────────────────────────────────────────────────┘
```

**Left side:**
- **Icon:** 40×40px circle, left
  - Chat: 💬 MessageSquare #10B981 (green) bg #D1FAE5
  - Mention: @ At-sign #8B5CF6 (purple) bg #EDE9FE
  - Team: 👥 Users #3B82F6 (blue) bg #DBEAFE
  - System: ⚙️ Settings #6B7280 (gray) bg #F3F4F6
  - Billing: 💳 CreditCard #F59E0B (orange) bg #FEF3C7

**Content (middle):**
- **Title:** 14px Medium #111827 (or #4F46E5 if unread)
  - Examples:
    - "Yangi chat: Sardor Azimov"
    - "Jahongir sizni mention qildi"
    - "Jamoa chatida yangi xabar"
    - "Tizim yangilandi"
    - "To'lov muddati tugadi"
- **Description:** 13px Regular #6B7280, 2 lines max, overflow ellipsis
  - Example: "Salom, widget ishlamayapti. Yordam bera..."
- **Timestamp:** 12px Regular #9CA3AF, icon ⏱️ 14px left
  - Relative time: "5 daqiqa oldin", "2 soat oldin", "Kecha", "3 kun oldin"

**Right side (actions):**
- **Unread dot:** 8×8px circle, #4F46E5, if unread
- **Delete button:** X icon 16px #9CA3AF, hover #EF4444, click deletes
- **Actions position:** Top-right, gap 8px

**Click behavior:**
- Click notification → Mark as read + navigate:
  - Chat notification → Open Inbox, select chat
  - Mention → Open Team Chat, scroll to message
  - Team message → Open Team Chat room
  - System → Open Settings or dashboard
  - Billing → Open Billing page

---

## 3. NOTIFICATION TYPES (5 xil)

### Type 1: New Chat (conversation.created)
```json
{
  "id": "notif_abc123",
  "type": "chat",
  "title": "Yangi chat: Sardor Azimov",
  "description": "Salom, widget ishlamayapti. Yordam bera olasizmi?",
  "icon": "message_square",
  "icon_color": "#10B981",
  "icon_bg": "#D1FAE5",
  "timestamp": "2026-02-11T14:35:00Z",
  "is_read": false,
  "action_url": "/inbox/conversations/conv_xyz789",
  "metadata": {
    "conversation_id": "conv_xyz789",
    "visitor_name": "Sardor Azimov",
    "message_preview": "Salom, widget ishlamayapti..."
  }
}
```

### Type 2: Mention (@mention in Team Chat)
```json
{
  "id": "notif_def456",
  "type": "mention",
  "title": "Jahongir sizni mention qildi",
  "description": "@Ali, bu chat'ni ko'rib chiqsang bo'ladimi?",
  "icon": "at_sign",
  "icon_color": "#8B5CF6",
  "icon_bg": "#EDE9FE",
  "timestamp": "2026-02-11T13:20:00Z",
  "is_read": false,
  "action_url": "/team-chat/rooms/room_123#message_456",
  "metadata": {
    "room_id": "room_123",
    "message_id": "message_456",
    "from_user": "Jahongir Otajonov",
    "from_user_avatar": "https://..."
  }
}
```

### Type 3: Team Message (team.message.new in rooms user is in)
```json
{
  "id": "notif_ghi789",
  "type": "team",
  "title": "Jamoa chatida yangi xabar",
  "description": "Jahongir: Ertaga sprint planning bor, unutmang!",
  "icon": "users",
  "icon_color": "#3B82F6",
  "icon_bg": "#DBEAFE",
  "timestamp": "2026-02-11T12:00:00Z",
  "is_read": true,
  "action_url": "/team-chat/rooms/general",
  "metadata": {
    "room_id": "general",
    "room_name": "#general",
    "from_user": "Jahongir Otajonov"
  }
}
```

### Type 4: System Notification
```json
{
  "id": "notif_jkl012",
  "type": "system",
  "title": "Tizim yangilandi",
  "description": "CHATFLOW v2.5 chiqdi! Yangi funksiyalar: Team Chat, Knowledge Base.",
  "icon": "settings",
  "icon_color": "#6B7280",
  "icon_bg": "#F3F4F6",
  "timestamp": "2026-02-10T10:00:00Z",
  "is_read": false,
  "action_url": "/changelog",
  "metadata": {
    "version": "2.5.0",
    "release_notes_url": "https://..."
  }
}
```

### Type 5: Billing Alert
```json
{
  "id": "notif_mno345",
  "type": "billing",
  "title": "To'lov muddati tugadi",
  "description": "Hisobingiz 5 kun ichida to'xtatiladi. To'lovni yangilang.",
  "icon": "credit_card",
  "icon_color": "#F59E0B",
  "icon_bg": "#FEF3C7",
  "timestamp": "2026-02-09T08:00:00Z",
  "is_read": false,
  "action_url": "/billing/payment",
  "metadata": {
    "alert_type": "payment_overdue",
    "days_remaining": 5,
    "amount_due": "$99.00"
  }
}
```

---

## 4. NOTIFICATION SETTINGS (SCR-NS01)

**Access:** Click "⚙️ Sozlamalar" link in notification dropdown OR Settings → Notifications tab

### Layout
Dashboard Shell + Main Content (800px max-width center)

### UI Komponentlar

#### Header
- Title: "Bildirishnoma Sozlamalari" 28px Bold #111827
- Description: "Qaysi bildirishnomalarni olishni tanlang" 16px #6B7280

#### Section 1: Desktop Notifications

**Card:** White bg, border 1px #E5E7EB, padding 24px, radius 12px

**Title:** "Desktop Bildirishnomalari" 18px Semibold #111827

**Toggle row (5 items):**
| Notification Type | Toggle (ON/OFF) |
|-------------------|-----------------|
| Yangi chatlar | Switch 56×32px, ON (green) |
| Mention'lar | Switch ON |
| Jamoa xabarlari | Switch ON |
| Tizim yangilanishlari | Switch OFF |
| Billing alertlar | Switch ON |

**Toggle style:**
- ON: bg #10B981 (green), thumb white, left
- OFF: bg #D1D5DB (gray), thumb white, right
- Animation: Thumb slide 200ms ease-in-out
- Label: 16px Regular #374151, left of toggle

**Description (below toggles):**
- "Browser orqali desktop bildirishnomalarni olasiz" 14px #6B7280
- Link: "Browser ruxsatini yoqish →" 14px #4F46E5 (if not enabled)

**Test button:**
- "🔔 Test bildirishnoma yuborish" 160×40px outline button
- Click: Shows test notification
- Success: Toast "Test bildirishnoma yuborildi"

---

#### Section 2: Sound Notifications

**Card:** White bg, padding 24px

**Title:** "Ovozli Bildirishnomalar" 18px Semibold

**Toggle:** "Ovoz" Switch ON
- When ON: Shows sound selector below
- When OFF: Sound disabled

**Sound Selector (if ON):**
- Label: "Bildirishnoma ovozi" 14px Medium #374151
- Dropdown: 240px width
  - Options: "Chime" (default) | "Ding" | "Pop" | "Bell" | "Silent"
  - Selected: Shows icon 🔊 + name
- Test button: "🔊 Eshitib ko'rish" 120×36px ghost
  - Click: Plays selected sound

**Volume Slider:**
- Label: "Ovoz balandligi" 14px Medium
- Slider: 0-100%, default 70%
- Visual: 240px width, thumb 20px circle #4F46E5, track #E5E7EB

---

#### Section 3: Email Notifications

**Card:** White bg, padding 24px

**Title:** "Email Bildirishnomalar" 18px Semibold

**Description:** "Platformadan chiqib ketganingizda email orqali bildirishnomalar" 14px #6B7280

**Checkboxes (6 items):**
- ☑️ "Yangi chatlar (offline bo'lganingizda)" ON
- ☑️ "Mention'lar (har doim)" ON
- ☐ "Jamoa xabarlari (offline)" OFF
- ☑️ "Tizim yangilanishlari (muhim faqat)" ON
- ☑️ "Billing alertlar (har doim)" ON
- ☐ "Kunlik hisobot (har kuni 09:00)" OFF

**Checkbox style:**
- Checked: bg #4F46E5, checkmark white
- Unchecked: border 2px #D1D5DB
- Label: 16px Regular #374151

**Email preferences:**
- "Email manzilni o'zgartirish:" 14px Medium
- Display current email: "jahongir@company.uz" 14px #6B7280 bg #F9FAFB padding 8px 12px radius 6px
- Link: "Email'ni yangilash →" 14px #4F46E5 (opens profile settings)

---

#### Section 4: In-App Notification Preferences

**Card:** White bg, padding 24px

**Title:** "Platform Ichidagi Bildirishnomalar" 18px Semibold

**Options (radio group):**
- ⦿ "Barcha bildirishnomalar" — ON (default)
- ◯ "Muhim bildirishnomalar faqat" — (mention, billing, system critical)
- ◯ "Faqat mention'lar"
- ◯ "O'chirish" — No notifications

**Auto-clear setting:**
- Checkbox: ☑️ "Eski bildirishnomalarni avtomatik o'chirish"
- Description: "30 kundan eski bildirishnomalar o'chiriladi" 13px #6B7280

---

#### Section 5: Do Not Disturb (DND)

**Card:** White bg, padding 24px

**Title:** "Bezovta Qilmaslik Rejimi" 18px Semibold

**Toggle:** "DND rejimini yoqish" Switch OFF
- When ON: Shows schedule below

**DND Schedule (if ON):**
- Label: "Vaqt oralig'i" 14px Medium
- Start time: Time picker "22:00"
- End time: Time picker "08:00"
- Days: Checkboxes "Dushanba | ... | Yakshanba" (all selected)

**During DND:**
- Description: "Bildirishnomalar yig'iladi, lekin ko'rsatilmaydi. DND tamomlanganidan keyin ko'rinadi." 14px #6B7280

---

#### Actions (bottom)
- "Bekor qilish" ghost button left (reset to original)
- "Saqlash" primary button right
  - Loading: "Saqlanmoqda..." + spinner
  - Success: Toast "Sozlamalar saqlandi" + green check

---

## 5. WEBSOCKET EVENTS (Real-time)

### Connection
```javascript
// Client connects to WebSocket
const ws = new WebSocket('wss://api.chatflow.uz/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'auth',
    token: userToken
  }));
};
```

### Events Received

**1. New Notification**
```javascript
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  if (data.type === 'notification.new') {
    // Add notification to list
    notifications.unshift(data.notification);
    
    // Update unread count
    unreadCount++;
    
    // Show desktop notification (if enabled)
    if (settings.desktop_notifications[data.notification.type]) {
      showDesktopNotification(data.notification);
    }
    
    // Play sound (if enabled)
    if (settings.sound_enabled) {
      playSound(settings.sound_name);
    }
    
    // Animate bell icon
    animateBellIcon();
  }
};

// Example event payload
{
  "type": "notification.new",
  "notification": {
    "id": "notif_abc123",
    "type": "chat",
    "title": "Yangi chat: Sardor Azimov",
    "description": "Salom, widget ishlamayapti...",
    "timestamp": "2026-02-11T14:35:00Z",
    "is_read": false,
    "action_url": "/inbox/conversations/conv_xyz789"
  }
}
```

**2. Notification Read**
```javascript
{
  "type": "notification.read",
  "notification_id": "notif_abc123"
}

// Client updates local state
const notification = notifications.find(n => n.id === data.notification_id);
notification.is_read = true;
unreadCount--;
```

**3. Notification Deleted**
```javascript
{
  "type": "notification.deleted",
  "notification_id": "notif_abc123"
}

// Client removes from list
notifications = notifications.filter(n => n.id !== data.notification_id);
```

**4. Mark All as Read**
```javascript
{
  "type": "notifications.all_read"
}

// Client marks all as read
notifications.forEach(n => n.is_read = true);
unreadCount = 0;
```

---

## 6. API ENDPOINTS

```
# Get Notifications
GET /api/notifications
Query params:
  - type: 'chat' | 'mention' | 'team' | 'system' | 'billing' | 'all' (default)
  - is_read: true | false | omit (all)
  - limit: number (default 50, max 100)
  - offset: number (pagination)
Response:
{
  "notifications": [...],
  "unread_count": 12,
  "total_count": 247
}

# Mark as Read
PUT /api/notifications/:id/read
Response: { "success": true }

# Mark All as Read
PUT /api/notifications/read-all
Response: { "success": true, "count": 12 }

# Delete Notification
DELETE /api/notifications/:id
Response: { "success": true }

# Clear All (older than 30 days)
DELETE /api/notifications/clear-old
Response: { "success": true, "count": 56 }

# Get Notification Settings
GET /api/notifications/settings
Response:
{
  "desktop": {
    "chat": true,
    "mention": true,
    "team": true,
    "system": false,
    "billing": true
  },
  "sound_enabled": true,
  "sound_name": "chime",
  "sound_volume": 70,
  "email": {
    "chat_offline": true,
    "mention_always": true,
    "team_offline": false,
    "system_critical": true,
    "billing_always": true,
    "daily_digest": false
  },
  "in_app_level": "all", // 'all' | 'important' | 'mentions_only' | 'off'
  "auto_clear_old": true,
  "dnd": {
    "enabled": false,
    "start_time": "22:00",
    "end_time": "08:00",
    "days": [1,2,3,4,5,6,7] // 1=Monday, 7=Sunday
  }
}

# Update Notification Settings
PUT /api/notifications/settings
Body: { ...settings }
Response: { "success": true }

# Test Desktop Notification
POST /api/notifications/test
Response: { "success": true }
```

---

## 7. DATABASE SCHEMA

```sql
-- Notifications table
CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) NOT NULL,
  workspace_id UUID REFERENCES workspaces(id) NOT NULL,
  type VARCHAR(20) NOT NULL, -- 'chat', 'mention', 'team', 'system', 'billing'
  title VARCHAR(200) NOT NULL,
  description TEXT,
  icon VARCHAR(50), -- Icon name
  icon_color VARCHAR(7), -- Hex color
  icon_bg VARCHAR(7), -- Hex color
  action_url VARCHAR(500), -- Where to navigate on click
  metadata JSONB, -- Additional data (conversation_id, room_id, etc.)
  is_read BOOLEAN DEFAULT FALSE,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX notifications_user_id_idx ON notifications(user_id);
CREATE INDEX notifications_is_read_idx ON notifications(user_id, is_read);
CREATE INDEX notifications_type_idx ON notifications(user_id, type);
CREATE INDEX notifications_created_at_idx ON notifications(created_at);

-- Notification Settings (per user)
CREATE TABLE notification_settings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) UNIQUE NOT NULL,
  desktop_chat BOOLEAN DEFAULT TRUE,
  desktop_mention BOOLEAN DEFAULT TRUE,
  desktop_team BOOLEAN DEFAULT TRUE,
  desktop_system BOOLEAN DEFAULT FALSE,
  desktop_billing BOOLEAN DEFAULT TRUE,
  sound_enabled BOOLEAN DEFAULT TRUE,
  sound_name VARCHAR(20) DEFAULT 'chime',
  sound_volume INT DEFAULT 70, -- 0-100
  email_chat_offline BOOLEAN DEFAULT TRUE,
  email_mention_always BOOLEAN DEFAULT TRUE,
  email_team_offline BOOLEAN DEFAULT FALSE,
  email_system_critical BOOLEAN DEFAULT TRUE,
  email_billing_always BOOLEAN DEFAULT TRUE,
  email_daily_digest BOOLEAN DEFAULT FALSE,
  in_app_level VARCHAR(20) DEFAULT 'all', -- 'all', 'important', 'mentions_only', 'off'
  auto_clear_old BOOLEAN DEFAULT TRUE,
  dnd_enabled BOOLEAN DEFAULT FALSE,
  dnd_start_time TIME,
  dnd_end_time TIME,
  dnd_days INT[], -- [1,2,3,4,5,6,7]
  updated_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 8. NOTIFICATION TRIGGERS (When to send)

### Chat Notifications
```javascript
// When: New conversation created
if (conversation.assigned_to === user.id) {
  createNotification({
    user_id: user.id,
    type: 'chat',
    title: `Yangi chat: ${conversation.visitor_name}`,
    description: conversation.last_message.content.substring(0, 100),
    action_url: `/inbox/conversations/${conversation.id}`,
    metadata: { conversation_id: conversation.id }
  });
}

// When: New message in assigned conversation (if user not active in that chat)
if (conversation.assigned_to === user.id && !user.is_viewing_conversation) {
  createNotification({...});
}
```

### Mention Notifications
```javascript
// When: User mentioned in team chat (@username)
const mentions = message.content.match(/@(\w+)/g);
if (mentions.includes(`@${user.username}`)) {
  createNotification({
    user_id: user.id,
    type: 'mention',
    title: `${message.sender.name} sizni mention qildi`,
    description: message.content.substring(0, 100),
    action_url: `/team-chat/rooms/${room.id}#message_${message.id}`,
    metadata: { room_id: room.id, message_id: message.id }
  });
}
```

### Team Notifications
```javascript
// When: New message in team chat room (if user is member but not active)
if (room.members.includes(user.id) && !user.is_viewing_room) {
  createNotification({
    user_id: user.id,
    type: 'team',
    title: 'Jamoa chatida yangi xabar',
    description: `${message.sender.name}: ${message.content.substring(0, 80)}`,
    action_url: `/team-chat/rooms/${room.id}`,
    metadata: { room_id: room.id }
  });
}
```

### System Notifications
```javascript
// When: System update/maintenance
workspace.members.forEach(user => {
  createNotification({
    user_id: user.id,
    type: 'system',
    title: 'Tizim yangilandi',
    description: 'CHATFLOW v2.5 chiqdi! Yangi funksiyalar...',
    action_url: '/changelog',
    metadata: { version: '2.5.0' }
  });
});

// When: Workspace limit reached
if (workspace.chats_count >= workspace.plan_limit) {
  workspace.admins.forEach(admin => {
    createNotification({
      user_id: admin.id,
      type: 'system',
      title: 'Limit tugamaydi',
      description: 'Bu oyda 80% chatlar limitiga yetdingiz.',
      action_url: '/billing',
      metadata: { limit_type: 'chats', percentage: 80 }
    });
  });
}
```

### Billing Notifications
```javascript
// When: Payment failed
if (payment.status === 'failed') {
  workspace.admins.forEach(admin => {
    createNotification({
      user_id: admin.id,
      type: 'billing',
      title: 'To\'lov muvaffaqiyatsiz',
      description: `$${payment.amount} to'lovda xatolik. Karta ma'lumotlarini yangilang.`,
      action_url: '/billing/payment',
      metadata: { payment_id: payment.id, amount: payment.amount }
    });
  });
}

// When: Subscription expiring soon
if (subscription.expires_in_days <= 7) {
  workspace.admins.forEach(admin => {
    createNotification({
      user_id: admin.id,
      type: 'billing',
      title: 'To\'lov muddati tugaydi',
      description: `Hisobingiz ${subscription.expires_in_days} kun ichida to'xtatiladi.`,
      action_url: '/billing',
      metadata: { expires_in_days: subscription.expires_in_days }
    });
  });
}

// When: Plan upgraded
workspace.members.forEach(user => {
  createNotification({
    user_id: user.id,
    type: 'billing',
    title: 'Plan yangilandi',
    description: `Workspace ${new_plan.name} planiga o'tdi!`,
    action_url: '/billing',
    metadata: { plan_name: new_plan.name }
  });
});
```

---

## 9. DESKTOP NOTIFICATION API

### Request Permission
```javascript
// Request browser notification permission
async function requestNotificationPermission() {
  if ('Notification' in window) {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted');
      return true;
    } else {
      console.log('Notification permission denied');
      return false;
    }
  }
  return false;
}
```

### Show Desktop Notification
```javascript
function showDesktopNotification(notification) {
  if (Notification.permission !== 'granted') return;
  
  const n = new Notification(notification.title, {
    body: notification.description,
    icon: '/chatflow-icon.png',
    badge: '/chatflow-badge.png',
    tag: notification.id, // Replaces old notification with same tag
    requireInteraction: false, // Auto-close after 5s
    silent: false // Play system sound (or we play custom sound separately)
  });
  
  n.onclick = () => {
    window.focus();
    navigateTo(notification.action_url);
    n.close();
  };
  
  // Auto-close after 5 seconds
  setTimeout(() => n.close(), 5000);
}
```

### Service Worker (for background notifications)
```javascript
// sw.js
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  const options = {
    body: data.description,
    icon: '/chatflow-icon.png',
    badge: '/chatflow-badge.png',
    tag: data.id,
    data: { url: data.action_url }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
```

---

## 10. SOUND IMPLEMENTATION

### Sound Files
- **Chime:** chime.mp3 (500ms, soft bell)
- **Ding:** ding.mp3 (300ms, single ding)
- **Pop:** pop.mp3 (200ms, bubble pop)
- **Bell:** bell.mp3 (800ms, traditional bell)

### Play Sound Function
```javascript
function playNotificationSound(soundName, volume) {
  const audio = new Audio(`/sounds/${soundName}.mp3`);
  audio.volume = volume / 100; // 0-1 range
  audio.play().catch(err => {
    console.error('Failed to play sound:', err);
  });
}

// Call when new notification arrives
if (settings.sound_enabled) {
  playNotificationSound(settings.sound_name, settings.sound_volume);
}
```

---

## 11. ASCII WIREFRAME

### Wireframe: Notification Dropdown

```
┌────────────────────────────────────────────────────────────┐
│ CHATFLOW Header                       🔔(3)  [Avatar ▼]   │
└────────────────────────────────────────┬───────────────────┘
                                         │
                     ┌───────────────────▼───────────────────┐
                     │ Bildirishnomalar      🔔 Barchasini   │
                     │                       ⚙️ Sozlamalar   │
                     ├───────────────────────────────────────┤
                     │ [Barchasi(12)][Chatlar(5)][Mention(3)]│
                     │ [Jamoa(2)][Tizim(1)][Billing(1)]      │
                     ├───────────────────────────────────────┤
                     │ 💬 Yangi chat: Sardor Azimov      • X │
                     │    Salom, widget ishlamayapti...     │
                     │    ⏱️ 5 daqiqa oldin                  │
                     │───────────────────────────────────────│
                     │ @ Jahongir sizni mention qildi      X │
                     │   @Ali, bu chat'ni ko'rib chiq...    │
                     │   ⏱️ 2 soat oldin                     │
                     │───────────────────────────────────────│
                     │ 👥 Jamoa chatida yangi xabar        X │
                     │    Jahongir: Ertaga sprint...        │
                     │    ⏱️ Kecha                           │
                     │───────────────────────────────────────│
                     │ ⚙️ Tizim yangilandi             • X  │
                     │    CHATFLOW v2.5 chiqdi! Yangi...    │
                     │    ⏱️ 2 kun oldin                     │
                     │───────────────────────────────────────│
                     │ 💳 To'lov muddati tugaydi       • X  │
                     │    Hisobingiz 5 kun ichida...        │
                     │    ⏱️ 3 kun oldin                     │
                     └───────────────────────────────────────┘

Legend:
• = Unread dot (blue)
X = Delete button
Blue background = Unread notification
White background = Read notification
```

---

## 12. FIGMA COMPONENTS

```
notification-center/
├── bell-icon-component
│   ├── icon-bell (20px)
│   ├── unread-badge (circle, count, pulse animation)
│   └── states: default / hover / active / unread(1) / unread(99+)
├── notification-dropdown
│   ├── dropdown-header
│   │   ├── title "Bildirishnomalar"
│   │   ├── mark-all-read-link
│   │   └── settings-link
│   ├── filter-tabs (6 tabs with counts)
│   ├── notifications-list-scrollable
│   │   ├── notification-item-unread (5 variants: chat/mention/team/system/billing)
│   │   ├── notification-item-read (5 variants)
│   │   └── empty-state (bell-crossed icon + text)
│   └── dropdown-footer (optional)
├── notification-item
│   ├── icon-circle (40px, 5 color variants)
│   ├── content-wrapper
│   │   ├── title (14px Medium)
│   │   ├── description (13px Regular, 2 lines)
│   │   └── timestamp (12px with clock icon)
│   ├── unread-dot (8px circle, blue)
│   ├── delete-button (X icon, hover red)
│   └── states: unread / read / hover
├── notification-settings-page
│   ├── page-header
│   │   ├── title "Bildirishnoma Sozlamalari"
│   │   └── subtitle
│   ├── desktop-notifications-card
│   │   ├── toggle-row-component (5 rows)
│   │   ├── test-button
│   │   └── description-text
│   ├── sound-notifications-card
│   │   ├── sound-toggle-switch
│   │   ├── sound-dropdown (4 options)
│   │   ├── test-sound-button
│   │   └── volume-slider
│   ├── email-notifications-card
│   │   ├── checkbox-row (6 checkboxes)
│   │   └── email-display-card
│   ├── in-app-preferences-card
│   │   ├── radio-group (4 options)
│   │   └── auto-clear-checkbox
│   ├── dnd-card
│   │   ├── dnd-toggle
│   │   ├── time-pickers (start/end)
│   │   └── days-checkboxes (7 days)
│   └── action-buttons (cancel / save)
└── shared-components
    ├── toggle-switch (ON green / OFF gray)
    ├── checkbox-component
    ├── radio-button-component
    ├── time-picker-input
    └── dropdown-selector
```

---

## 13. ACCESSIBILITY

### Keyboard Navigation
- **Bell icon:** Tab focus, Enter/Space to open dropdown
- **Dropdown open:** 
  - Esc: Close dropdown
  - Tab: Navigate through notifications
  - Enter: Open notification (navigate to action_url)
  - Delete: Delete focused notification
  - Arrow Down/Up: Navigate list
  - Home/End: First/last notification
- **Settings page:**
  - Tab: Navigate toggles, checkboxes, buttons
  - Space: Toggle switch/checkbox
  - Enter: Activate button

### ARIA Labels
```html
<!-- Bell icon -->
<button 
  aria-label="Bildirishnomalar, 3 ta o'qilmagan" 
  aria-expanded="false"
  aria-controls="notification-dropdown"
>
  <Bell />
  <span class="badge" aria-label="3 ta o'qilmagan bildirishnoma">3</span>
</button>

<!-- Dropdown -->
<div 
  id="notification-dropdown"
  role="menu"
  aria-label="Bildirishnomalar ro'yxati"
>
  <!-- Notification item -->
  <div 
    role="menuitem"
    aria-label="Yangi chat: Sardor Azimov, 5 daqiqa oldin, o'qilmagan"
    tabindex="0"
  >
    ...
  </div>
</div>

<!-- Toggle switch -->
<label>
  <span>Yangi chatlar</span>
  <input 
    type="checkbox" 
    role="switch" 
    aria-checked="true"
    aria-label="Desktop bildirishnomalar: yangi chatlar"
  />
</label>
```

### Screen Reader Announcements
```javascript
// New notification arrives
announce("Yangi bildirishnoma: Yangi chat Sardor Azimov dan");

// Mark as read
announce("Bildirishnoma o'qilgan deb belgilandi");

// Mark all as read
announce("Barcha bildirishnomalar o'qilgan deb belgilandi. 12 ta bildirishnoma");

// Delete notification
announce("Bildirishnoma o'chirildi");

// Settings saved
announce("Sozlamalar saqlandi");
```

### Color Contrast (WCAG AA)
- Title #111827 on white #FFFFFF: 18.71:1 (AAA)
- Description #6B7280 on white: 5.26:1 (AA)
- Unread bg #F0F9FF: sufficient contrast with text
- Icons: All tested for contrast with background

---

## 14. MICRO-INTERACTIONS

1. **New notification arrives:** Bell shake (-10deg → 10deg → 0, 500ms) + badge pulse (scale 1→1.2→1)
2. **Bell icon hover:** color #6B7280 → #4F46E5, scale 1→1.1, 100ms
3. **Dropdown open:** Fade-in 150ms + slide-down 5px
4. **Dropdown close:** Fade-out 100ms + slide-up 5px
5. **Notification hover:** bg change 100ms (unread: #F0F9FF → #E0F2FE, read: white → #F9FAFB)
6. **Notification click:** Scale 1 → 0.98 100ms, then navigate
7. **Unread dot:** Pulse animation (scale 1→1.2→1, 1.5s infinite) for new notifications
8. **Delete button hover:** Color #9CA3AF → #EF4444, scale 1→1.1, 100ms
9. **Delete button click:** Icon rotate 90deg + scale 0.8 200ms, then fade-out notification
10. **Mark all as read:** All unread notifications fade bg #F0F9FF → white 300ms stagger 50ms each
11. **Filter tab click:** Active tab slide underline 200ms, bg fade-in #EEF2FF 150ms
12. **Toggle switch:** Thumb slide left↔right 200ms ease-in-out, bg color change
13. **Checkbox check:** Checkmark draw animation 200ms
14. **Test notification button click:** Button scale 1→0.95→1 200ms, then show notification
15. **Save button click:** Button scale 1→0.98, spinner appears, success green check fade-in

---

## 15. USER FLOWS

### Flow 1: View New Notification
1. New chat created → Backend sends WebSocket event
2. Client receives `notification.new` event
3. Bell badge updates: increment count, show number
4. Bell icon shakes (-10°→10°→0)
5. Desktop notification shown (if enabled)
6. Sound plays (if enabled)
7. User clicks bell icon
8. Dropdown opens (fade-in + slide-down 150ms)
9. User sees unread notification (blue bg, unread dot)
10. User clicks notification
11. Notification marked as read (dot disappears, bg → white)
12. Navigate to `/inbox/conversations/conv_xyz`
13. Dropdown closes

### Flow 2: Mark All as Read
1. User has 12 unread notifications
2. Bell badge shows "12"
3. User clicks bell → dropdown opens
4. User clicks "🔔 Barchasini belgilash"
5. API call: PUT /api/notifications/read-all
6. Response: success, 12 notifications marked
7. All notifications: blue bg → white bg (stagger animation)
8. All unread dots disappear
9. Bell badge count: 12 → 0 (fade-out)
10. Toast: "Barcha bildirishnomalar o'qildi"

### Flow 3: Configure Notification Settings
1. User clicks bell → dropdown opens
2. User clicks "⚙️ Sozlamalar"
3. Navigate to Settings page /settings/notifications
4. User sees 5 cards (Desktop/Sound/Email/In-App/DND)
5. User toggles "Jamoa xabarlari" OFF in Desktop section
6. User changes Sound from "Chime" to "Ding"
7. User clicks "🔊 Eshitib ko'rish" → Ding sound plays
8. User checks "Kunlik hisobot" in Email section
9. User enables DND: toggle ON
10. User sets: 22:00 - 08:00, all days
11. User clicks "Saqlash"
12. API call: PUT /api/notifications/settings
13. Loading: "Saqlanmoqda..." spinner
14. Response: success
15. Toast: "Sozlamalar saqlandi ✓"
16. Button returns to "Saqlash" state

---

## 16. TECHNICAL REQUIREMENTS

### Real-time Updates
- WebSocket connection for instant notification delivery (<100ms latency)
- Reconnection with exponential backoff if connection lost
- Queue notifications while offline, sync when back online

### Performance
- Notification list: Virtual scrolling for 1000+ items (only render visible)
- API pagination: Load 50 notifications per request
- Lazy load older notifications on scroll
- Debounce filter changes: 200ms

### Caching
- Cache recent 100 notifications in localStorage
- Sync with server on app load
- Cache settings in localStorage, update on change

### Data Retention
- Auto-delete notifications older than 30 days (if setting enabled)
- Keep critical notifications (billing, system) for 90 days
- Database cleanup job runs daily

### Rate Limiting
- Prevent spam: Max 100 notifications per user per hour
- Throttle: Group similar notifications (e.g., 5 new chats → "5 new chats")

---

## 17. ROLLARGA KO'RA RUXSATLAR

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View notifications | ✅ | ✅ | ✅ |
| Receive chat notifications | ✅ | ✅ | ✅ (own chats) |
| Receive mention notifications | ✅ | ✅ | ✅ |
| Receive team notifications | ✅ | ✅ | ✅ (joined rooms) |
| Receive system notifications | ✅ | ✅ | ✅ |
| Receive billing notifications | ✅ | ⚠️ (view only) | ❌ |
| Mark as read/unread | ✅ | ✅ | ✅ |
| Delete notification | ✅ | ✅ | ✅ (own) |
| Configure settings | ✅ | ✅ | ✅ (personal) |
| Disable all notifications | ✅ | ✅ | ✅ |

---

**Status:** ✅ Production Ready  
**Oxirgi yangilanish:** 2026-02-11  
**Qatorlar:** ~1800+

**Keyingi qadam:** Frontend implementation (React component) va WebSocket integration.
