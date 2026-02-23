# QULAY CHAT — Chat Widget: Mijoz Tomoni Interfeys

**Widget ID:** `WIDGET-01`  
**Fayl nomi:** `widget-chat.fig`  
**Desktop:** 360×520px (chat window), Mobile: 100% screen  

## Umumiy yondashuv
Visitor interfeysi sodda va ishonchli bo'lishi kerak. Chat ochish, yozish, fayl yuborish va feedback jarayoni minimal bo'lsin. Widget har qanday saytga oson integratsiya qilinadi va branding customizable.

**Maqsad:** Mijozning savoli tez yetib kelishi va javob oson qabul qilinishi. Desktop va mobile responsive.

**Accessibility:** WCAG 2.1 AA, keyboard navigation, screen reader support.

---

## Widget States
1. **Online** — Agentlar onlayn, chat start mumkin
2. **Offline** — Barcha agentlar offline, faqat message qoldirish
3. **Away** — Agentlar band, javob kechikishi mumkin
4. **Typing** — Agent yozmoqda indicator

---

## 1. LAUNCHER BUTTON

### 1.1 Collapsed State (Default)

**Position:** Bottom-right (default), configurable (bottom-left, top-right, top-left)  
**Offset:** 24px bottom, 24px right (from viewport edge)  
**Size:** 56×56px circle  
**Z-index:** 9999 (always on top)  

**Styles:**
- Background: Primary #4F46E5 (customizable by workspace)
- Shadow: 0 4px 12px rgba(79, 70, 229, 0.4)
- Border: none
- Icon: Icon/MessageCircle 28px, white color
- Hover: scale 1.05, shadow grows to 0 6px 16px

**Unread Badge:**
- Position: Absolute top-right -4px, -4px
- Size: 24×24px circle (if count >99, then 32px width pill)
- Background: #DC2626 (red)
- Text: White, 12px Bold, center
- Content: "3" or "99+"
- Border: 2px solid white (for visibility)

**Animation:**
- Idle: Subtle pulse every 5s (scale 1 to 1.08 to 1, 800ms)
- New message: Stronger pulse + bounce (scale 1.15, 300ms, ease-out)
- Mount: Fade-in + slide-up from bottom, 400ms

---

### 1.2 Expanded Preview (Hover State — Optional)

**Trigger:** Hover for 500ms  
**Size:** 280×120px card (floating above button)  
**Position:** Above launcher button, 8px gap  
**Animation:** Fade-in + slide-down 200ms  

**Content:**
1. **Agent Avatar + Status**
   - Avatar: 40px circle, agent photo
   - Online dot: 10px circle, #10B981, absolute bottom-right of avatar
   - Name: "Dilshod" — 14px Semibold #111827
   - Role: "Qo'llab-quvvatlash" — 12px Regular #6B7280

2. **Greeting Message**
   - Text: "Salom! Sizga qanday yordam bera olamiz?" — 13px Regular #374151
   - Max 2 lines, ellipsis if longer

3. **Quick CTA**
   - Text: "Chat boshlash →" — 13px Medium #4F46E5
   - Hover: underline

**Card Style:**
- Background: White
- Border: 1px #E5E7EB
- Border-radius: 12px
- Shadow: 0 8px 24px rgba(0, 0, 0, 0.12)
- Padding: 16px

---

## 2. CHAT WINDOW

### 2.1 Window Specs

**Desktop:**
- Size: 360×520px
- Position: Fixed bottom-right, 88px from bottom, 24px from right (above launcher)
- Border-radius: 16px
- Shadow: 0 8px 32px rgba(0, 0, 0, 0.16)
- Background: White
- Animation: Slide-up + fade-in 300ms ease-out

**Mobile (<768px):**
- Size: 100% width, 100% height (full screen)
- Border-radius: 0
- Position: Fixed, covers entire viewport
- Animation: Slide-up from bottom, 300ms

---

### 2.2 Header

**Height:** 64px  
**Background:** Gradient (Primary #4F46E5 to #6366F1), or solid Primary (configurable)  
**Padding:** 16px  

**Layout (3 sections):**

1. **Left: Agent Info**
   - Avatar: 40px circle, white border 2px, agent photo
   - Status dot: 10px circle, #10B981 (online), absolute bottom-right of avatar
   - Name: "Dilshod" — 15px Semibold White
   - Status text: "Onlayn" — 12px Regular White opacity 80%

2. **Center: Workspace Branding (optional)**
   - Logo: 32px height, white version (if provided)

3. **Right: Actions**
   - Minimize button: Icon/Minus 20px white, 32×32px touch target
   - Close button: Icon/X 20px white, 32×32px touch target
   - Gap: 8px
   - Hover: bg rgba(255,255,255,0.2), border-radius 6px

---

### 2.3 Body (Messages Container)

**Height:** 356px (520px total - 64px header - 100px footer)  
**Background:** #F9FAFB (light gray)  
**Padding:** 16px  
**Overflow:** Auto scroll  
**Scroll behavior:** Smooth, auto-scroll to bottom on new message  

**Content:**

#### System Message (First message)
- Background: White, border 1px #E5E7EB, border-radius 8px
- Padding: 12px
- Width: 100%
- Icon: Icon/Info 16px #4F46E5, chap tomonda
- Text: "Chat boshlandi. Operator javob berguncha kuting." — 13px Regular #6B7280
- Timestamp: "14:30" — 11px Regular #9CA3AF, o'ng tomonda

#### Greeting Bubble (Agent's first message)
- Same as Agent Message below

---

### 2.4 Message Bubbles

#### Agent Message
**Layout:**
- Avatar: 32px circle, left-aligned
- Bubble: Max-width 70%, float left, 8px gap from avatar
- Background: White
- Border: 1px #E5E7EB
- Border-radius: 12px (top-right), 12px (bottom-right), 12px (bottom-left), 4px (top-left) — organic shape
- Padding: 10px 14px
- Text: 14px Regular #111827, line-height 1.5
- Shadow: 0 1px 2px rgba(0,0,0,0.04)

**Timestamp:**
- Text: "14:32" — 11px Regular #9CA3AF
- Position: Below bubble, 4px gap, left-aligned

**Multiple consecutive messages:**
- Same agent within 2 minutes → hide avatar, reduce gap to 4px
- Show avatar only on first message of sequence

#### Visitor Message
**Layout:**
- Avatar: None (or optional visitor initials 32px circle, right-aligned)
- Bubble: Max-width 70%, float right
- Background: Primary #4F46E5
- Border: none
- Border-radius: 12px (top-left), 12px (bottom-left), 12px (bottom-right), 4px (top-right)
- Padding: 10px 14px
- Text: 14px Regular White, line-height 1.5
- Shadow: none

**Timestamp:**
- Text: "14:35" — 11px Regular #9CA3AF
- Position: Below bubble, 4px gap, right-aligned

---

### 2.5 Message Types

#### 1. Text Message
- (Standard bubble specs above)

#### 2. File Attachment (from Agent)
**Card inside bubble:**
- Background: #F9FAFB, border 1px #E5E7EB, border-radius 8px
- Padding: 12px
- Icon: File type icon 32px (Icon/FileText for PDF, Icon/Image for image, etc.)
- File name: "document.pdf" — 13px Medium #111827, max 1 line ellipsis
- File size: "2.4 MB" — 12px Regular #6B7280
- Download button: Icon/Download 16px #4F46E5, 28×28px, hover bg #EEF2FF
- Layout: Horizontal flex, gap 12px

#### 3. Image Attachment
**Display:**
- Image: Max-width 200px, max-height 200px, border-radius 8px, object-fit cover
- Border: 1px #E5E7EB
- Click to open lightbox (full-size image modal)
- Loading: Skeleton shimmer 200×200px
- Error: Icon/ImageOff 32px #D1D5DB, "Rasm yuklanmadi" text

#### 4. Quick Replies (Agent sends options)
**Layout:**
- Text message from agent: "Qaysi bo'limga murojaat qilmoqchisiz?"
- Quick reply chips: Below message, horizontal scroll
- Chip specs:
  - Min-width: 80px, auto width, 36px height
  - Background: White, border 1px #4F46E5
  - Text: 13px Medium #4F46E5, padding 0 16px
  - Border-radius: 18px (pill)
  - Hover: bg #EEF2FF
  - Click: Sends as visitor message, chips disappear
- Examples: "Texnik", "Billing", "Umumiy"

#### 5. System Message (status updates)
**Layout:**
- Center-aligned, 100% width
- Background: transparent
- Text: 12px Regular #6B7280, center
- Icon: Optional (Icon/UserPlus 14px for agent joined)
- Examples: "Dilshod chatga qo'shildi", "Chat yakunlandi"
- Padding: 8px 0

---

### 2.6 Typing Indicator

**Trigger:** Received WebSocket event `agent_typing`  
**Position:** After last agent message, left-aligned  
**Layout:**
- Avatar: 32px circle, agent photo
- Bubble: 56×32px, white bg, border 1px #E5E7EB, border-radius 16px
- Content: 3 dots animation
  - Dots: 6px circle each, #9CA3AF color
  - Animation: Bounce up-down, 1.2s infinite, stagger 150ms each
  - Dots positioned: 12px, 24px, 36px from left

---

### 2.7 Footer (Input Bar)

**Height:** 100px (if single-line input), auto-expand up to 200px (if multi-line)  
**Background:** White  
**Border-top:** 1px #E5E7EB  
**Padding:** 16px  

**Layout:**

1. **Textarea**
   - Width: 100%, auto-expand height (min 44px, max 120px)
   - Border: 1px #D1D5DB, border-radius 8px
   - Padding: 10px 12px
   - Placeholder: "Xabar yozing..." — 14px Regular #9CA3AF
   - Font: 14px Regular #111827
   - Focus: border #4F46E5, shadow 0 0 0 3px rgba(79,70,229,0.1)
   - Resize: none (auto-expand on newline)

2. **Actions Bar (below textarea, 8px gap)**
   - Layout: Horizontal flex, space-between
   - Left side: 2 buttons
     - **Emoji Picker:** Icon/Smile 20px #6B7280, 36×36px, hover bg #F3F4F6, border-radius 6px
     - **File Upload:** Icon/Paperclip 20px #6B7280, 36×36px, hover bg #F3F4F6
     - Gap: 8px
   - Right side:
     - **Send Button:** 80px width, 36px height, bg #4F46E5, text white "Yuborish" 14px Medium, border-radius 6px, disabled state (gray) if input empty

**File Upload Preview (after selecting file):**
- Position: Above actions bar, 8px gap
- Card: 100% width, 64px height, bg #F9FAFB, border 1px #E5E7EB, border-radius 8px, padding 12px
- Icon: File type icon 40px
- File info: Name + size — 13px Regular #374151
- Remove button: Icon/X 16px #DC2626, 24×24px, absolute top-right 4px

---

### 2.8 Emoji Picker Panel

**Trigger:** Click emoji button  
**Position:** Floating above input bar, anchored to emoji button  
**Size:** 320×360px  
**Background:** White, border 1px #E5E7EB, border-radius 12px, shadow-lg  
**Animation:** Fade-in + scale 200ms  

**Layout:**

1. **Search Input (optional)**
   - Width: 100%, 44px height
   - Placeholder: "Emoji qidirish..."
   - Sticky top

2. **Categories Tabs**
   - Tabs: Smileys, People, Nature, Food, Activity, Travel, Objects, Symbols
   - Icon-based tabs, 32px each, horizontal scroll
   - Active: bg #EEF2FF, border-bottom 2px #4F46E5

3. **Emoji Grid**
   - Grid: 8 columns, auto rows
   - Each emoji: 36×36px button, 28px emoji size, hover bg #F3F4F6, border-radius 6px
   - Click: Insert emoji to textarea cursor position

---

## 3. PRE-CHAT FORM (before chat starts)

**Trigger:** Visitor clicks launcher, no previous chat session  
**Position:** Inside chat window (replaces body)  
**Background:** White  

**Header:** Same as chat window header, but title "Chat boshlash" instead of agent name  

**Form (Padding 24px):**

1. **Title**
   - Text: "Fikr-mulohazangizni bildiring" — 18px Semibold #111827
   - Subtext: "Tez orada javob beramiz" — 14px Regular #6B7280

2. **Ism (Name) Input**
   - Label: "Ismingiz" — 14px Medium #374151
   - Input: 100%, 44px, border 1px #D1D5DB, border-radius 8px, placeholder "Ismingizni kiriting"
   - Required: red asterisk *

3. **Email Input**
   - Label: "Email" — 14px Medium #374151
   - Input: 100%, 44px, type email, validation icon (checkmark green if valid)
   - Required: red asterisk *

4. **Mavzu (Subject) Input (optional)**
   - Label: "Mavzu" — 14px Medium #374151
   - Input: 100%, 44px
   - Placeholder: "Nimaga yordam kerak?"

5. **Xabar (Message) Textarea**
   - Label: "Xabar" — 14px Medium #374151
   - Textarea: 100%, 100px, border-radius 8px
   - Placeholder: "Savolingizni yozing..."
   - Character count: 0 / 1000 — 12px Regular #9CA3AF, below textarea

6. **Submit Button**
   - Width: 100%, 44px height
   - Background: Primary #4F46E5, white text "Chat boshlash" 14px Medium
   - Disabled: Gray bg if required fields empty
   - Loading state: Spinner 20px when submitting

**Footer (optional):**
- Privacy text: "Shaxsiy ma'lumotlaringiz xavfsiz" — 12px Regular #9CA3AF, center
- Icon: Icon/Lock 14px, inline

**Validation:**
- Real-time validation on blur
- Error state: red border, error message below field — 13px Regular #DC2626
- Example error: "Email noto'g'ri formatda"

---

## 4. OFFLINE FORM (when agents offline)

**Trigger:** All agents offline, visitor clicks launcher  
**Layout:** Same as Pre-chat Form  

**Changes:**

1. **Header Icon:** Icon/MoonStars 24px (instead of agent avatar)
2. **Title:** "Agentlar hozir offline" — 18px Semibold #111827
3. **Subtext:** "Xabar qoldiring, tez orada javob beramiz (email orqali)" — 14px Regular #6B7280
4. **Email field:** Required (red border if empty)
5. **Submit Button:** Text "Xabar yuborish"
6. **Success state (after submit):** 
   - Icon: Icon/CheckCircle 64px #10B981
   - Text: "Xabaringiz qabul qilindi!" — 18px Semibold #111827
   - Subtext: "24 soat ichida email orqali javob beramiz" — 14px Regular #6B7280
   - Button: "Yopish" — Close widget

---

## 5. FEEDBACK FORM (end of chat)

**Trigger:** Agent clicks "Resolve" or visitor clicks "End chat" button  
**Position:** Replaces chat body  

**Layout:**

1. **Title**
   - Text: "Xizmatimizni baholang" — 18px Semibold #111827
   - Subtext: "Fikringiz biz uchun muhim" — 14px Regular #6B7280

2. **Star Rating**
   - 5 stars: 40px each, gap 12px
   - Inactive: #D1D5DB (gray)
   - Hover: #FBBF24 (yellow)
   - Selected: #FBBF24 (yellow), filled
   - Icon: Icon/Star 40px
   - Center-aligned

3. **Rating Labels (below stars)**
   - Text: "Juda yomon" (1 star), "Ajoyib" (5 stars) — 12px Regular #6B7280
   - Position: Below stars, space-between

4. **Comment Textarea (optional)**
   - Label: "Izoh (ixtiyoriy)" — 14px Medium #374151
   - Textarea: 100%, 100px, border-radius 8px
   - Placeholder: "Nimani yaxshilashimiz mumkin?"
   - Character count: 0 / 500

5. **Submit Button**
   - Width: 100%, 44px
   - Text: "Yuborish" — Primary #4F46E5
   - Loading state: Spinner

6. **Skip Button**
   - Width: 100%, 44px
   - Text: "O'tkazib yuborish" — border 1px #D1D5DB, text #6B7280
   - Gap: 8px above

**Success State (after submit):**
- Icon: Icon/Heart 64px #DC2626 (red heart), center
- Text: "Rahmat!" — 20px Semibold #111827
- Subtext: "Fikringiz uchun tashakkur" — 14px Regular #6B7280
- Auto-close widget after 2s

---

## 6. POWERED BY BRANDING (Footer bottom)

**Position:** Fixed bottom of chat window, inside footer  
**Height:** 24px  
**Background:** White, border-top 1px #E5E7EB (optional)  
**Padding:** 4px 16px  

**Content:**
- Text: "Powered by" — 11px Regular #9CA3AF
- Logo: "QULAY CHAT" — 11px Semibold #4F46E5
- Link: Opens qulaychat.uz in new tab
- Layout: Center-aligned, inline

**Hide Option:**
- Enterprise plan can hide this branding via settings

---

## 7. MOBILE VARIANT (<768px)

**Differences from Desktop:**

1. **Size:** 100% width × 100% height (full screen)
2. **Border-radius:** 0
3. **Header:** 
   - Back button: Icon/ChevronLeft 24px (instead of minimize), closes chat
   - Close button removed
4. **Body height:** calc(100vh - 64px header - 100px footer - env(safe-area-inset-bottom))
5. **Footer:** 
   - Bottom padding: env(safe-area-inset-bottom) for iPhone notch
   - Emoji picker: Full-width modal from bottom
6. **Animation:** Slide-up from bottom (instead of fade-in)
7. **Scroll behavior:** Overscroll-behavior: contain (prevent page scroll)

---

## 8. POSITIONING OPTIONS (Admin Configuration)

Widget can be positioned at 4 corners:

1. **Bottom-Right (default)** — 24px bottom, 24px right
2. **Bottom-Left** — 24px bottom, 24px left
3. **Top-Right** — 24px top, 24px right (uncommon)
4. **Top-Left** — 24px top, 24px left (uncommon)

**Configuration:** Set in widget install code via `position: 'bottom-right'` parameter.

---

## 9. CUSTOMIZATION OPTIONS (Admin Settings)

### Theme Customization:
- **Primary Color:** Default #4F46E5, support any hex color
- **Agent Avatar:** Upload custom photo or use default
- **Workspace Logo:** Show in header (optional)
- **Greeting Message:** Custom text, default "Salom! Sizga qanday yordam bera olamiz?"
- **Language:** Uzbek (default), Russian, English

### Behavior:
- **Auto-open:** Open chat window after X seconds on page load
- **Sound Notification:** Enable/disable sound alert on new message
- **Pre-chat Form:** Enable/disable (if disabled, chat starts immediately)
- **Powered by Branding:** Show/hide (Enterprise only)

### Appearance:
- **Launcher Icon:** Default MessageCircle, can upload custom SVG icon
- **Header Gradient:** Enable/disable, default enabled
- **Avatar Display:** Show/hide agent avatars in messages

---

## 10. NOTIFICATION SYSTEM

### Browser Push Notification

**Trigger:** New message received while chat window closed/minimized  
**Permission:** Request on first visitor message sent  

**Content:**
- Title: "QULAY CHAT — Yangi xabar"
- Body: "Dilshod: Salom, sizga qanday yordam..." (first 50 chars)
- Icon: Agent avatar 64px or workspace logo
- Click action: Open/focus chat window

**Permission Modal:**
- Text: "Chat xabarlari uchun bildirishnoma yoqilsinmi?" — 14px Medium #374151
- Buttons: "Ha, yoqish" (primary), "Yo'q, kerak emas" (secondary)

### Sound Alert

**Trigger:** New message received (if enabled in settings)  
**Sound:** Gentle "ding" sound, 0.3s duration, <100KB file size  
**Toggle:** User can disable via small speaker icon in header (desktop only)

### Visual Notification (Tab Title)

**Trigger:** New message while page in background tab  
**Behavior:** Tab title changes to "(1) Yangi xabar — [Original Title]"  
**Reset:** When user focuses tab

---

## Empty / Loading / Error States

### Loading Messages
- **State:** Initial chat load, fetching message history
- **Display:** 3 skeleton bubbles (2 agent, 1 visitor), shimmer animation
- **Text:** "Xabarlar yuklanmoqda..." — 13px Regular #9CA3AF, center

### Connection Error
- **State:** WebSocket disconnected
- **Display:** Alert banner top of body
  - Background: #FEE2E2, border-left 4px #DC2626
  - Icon: Icon/WifiOff 20px #DC2626
  - Text: "Ulanish uzildi. Qayta ulanmoqda..." — 13px Medium #991B1B
  - Retry button: "Qayta urinish" — 80px, 32px, border 1px #DC2626
- **Auto-retry:** Every 5s until reconnected

### Empty Chat (no messages)
- **State:** Chat just started, no messages sent yet
- **Display:** 
  - Icon: Icon/MessageCircle 64px #D1D5DB, center
  - Text: "Birinchi xabaringizni yuboring" — 14px Regular #6B7280, center
  - Subtext: "Operator tez orada javob beradi" — 13px Regular #9CA3AF

### File Upload Error
- **State:** File too large (>10MB) or unsupported type
- **Display:** Toast notification bottom of window
  - Background: #FEE2E2, border-left 4px #DC2626
  - Icon: Icon/AlertCircle 20px #DC2626
  - Text: "Fayl juda katta (max 10MB)" — 13px Medium #991B1B
  - Duration: 4s auto-hide

---

## Micro-interactions

1. **Launcher pulse** — Idle: scale 1.05 every 5s, 800ms. New message: bounce + pulse animation
2. **Chat window slide-in** — Slide-up + fade-in 300ms ease-out on open
3. **Message send** — Textarea clears, message appears instantly (gray, pending), confirmed checkmark after WebSocket ACK
4. **Typing indicator** — 3 dots bounce animation, 1.2s infinite, stagger 150ms
5. **Emoji hover** — Scale 1.2, 150ms ease-out
6. **Emoji insert** — Emoji fade-in in textarea, 200ms
7. **File upload** — File preview card slide-down 200ms
8. **Send button pulse** — Subtle glow when input has text, 2s infinite
9. **Star rating hover** — Stars fill from left to hovered star, 150ms, yellow color
10. **Feedback submit** — Success icon scale-in + bounce, 400ms
11. **Scroll to bottom** — Smooth scroll 400ms when new message
12. **Avatar status dot** — Pulse animation when online, 2s infinite
13. **Close button hover** — Rotate 90° (X icon), 200ms
14. **Minimize button hover** — Translate-y -2px, 150ms
15. **Quick reply chip select** — Scale 0.95 on click, 100ms, then fade-out 200ms
16. **Image lightbox** — Backdrop fade-in, image scale-in from center, 300ms
17. **Pre-chat form submit** — Button text changes to spinner, 600ms loading
18. **Offline form success** — Checkmark icon scale-in + bounce, confetti animation (optional), 600ms
19. **Browser notification request** — Modal slide-down from top, 300ms
20. **Skeleton shimmer** — Left-to-right shimmer gradient, 1.5s infinite

---

## Accessibility

**Keyboard Navigation:**
- Tab order: Launcher → Header actions → Message list (focusable) → Input textarea → Emoji/File/Send buttons
- Enter: Send message (if textarea focused), submit form
- Escape: Close chat window, close emoji picker, close modal
- Arrow keys: Navigate message history (when message list focused)
- Shortcuts:
  - `Ctrl/Cmd + K` — Focus textarea
  - `Ctrl/Cmd + E` — Open emoji picker
  - `Ctrl/Cmd + U` — Open file upload

**ARIA Labels:**
- `aria-label="Open chat"` on launcher button
- `aria-label="Close chat"` on close button
- `aria-label="Minimize chat"` on minimize button
- `aria-label="Chat messages"` on messages container
- `aria-label="Type your message"` on textarea
- `aria-label="Send message"` on send button
- `aria-label="Upload file"` on file button
- `aria-label="Select emoji"` on emoji button
- `aria-label="Rate 5 stars"` on star rating buttons
- `aria-live="polite"` on message list (announces new messages)
- `aria-live="assertive"` on connection error banner

**Screen Reader Announcements:**
- "New message from Dilshod: [message text]"
- "Sending message..."
- "Message sent successfully"
- "Agent is typing..."
- "Connection lost, trying to reconnect"
- "Chat window opened"
- "Chat window closed"
- "File uploaded successfully"
- "Rating submitted, thank you"

**Focus Management:**
- Chat window opens: focus to textarea
- Modal opens: focus to first input or close button
- Chat window closes: return focus to launcher button
- Form submit success: announce success, focus to close button

**Color Contrast:**
- All text meets WCAG AA: 4.5:1 minimum
- Visitor bubble (white on Primary #4F46E5): 4.6:1
- Agent bubble (black #111827 on white): 21:1
- Error text (#991B1B on #FEE2E2): 7.2:1

**Touch Targets:**
- All interactive elements: minimum 44×44px
- Launcher button: 56×56px
- Message bubbles: min height 44px

---

## ASCII Wireframes

### 1. Desktop: Closed State
```
                                         ┌────────┐
                                         │   □    │  Unread Badge (3)
                                         └───┬────┘
                                             │
                                         ┌───┴────┐
                                         │   💬   │  Launcher Button (56px)
                                         │        │
                                         └────────┘
                                        (Bottom-right)
```

### 2. Desktop: Chat Window Open
```
                                         ┌──────────────────────────────┐
                                         │ ┌──┐ Dilshod    [Onlayn]  [─][×]│ Header (64px)
                                         │ │👤│ Qo'llab-quvvatlash         │
                                         ├──────────────────────────────┤
                                         │                              │
                                         │  ⓘ Chat boshlandi. Kuting... │ System msg
                                         │                              │
                                         │ ┌──┐ ┌──────────────────┐   │ Agent
                                         │ │👤│ │Salom! Yordam     │   │
                                         │ └──┘ │bera olamanmi?    │   │
                                         │      └──────────────────┘   │
                                         │      14:30                  │
                                         │                              │
                                         │           ┌──────────────┐  │ Visitor
                                         │           │Ha, kerak edi │  │
                                         │           └──────────────┘  │
                                         │                      14:32  │
                                         │                              │
                                         │ ┌──┐ ●●●                    │ Typing...
                                         │ │👤│                        │
                                         │ └──┘                        │
                                         │                              │ Body (356px)
                                         ├──────────────────────────────┤
                                         │ ┌──────────────────────────┐ │
                                         │ │Xabar yozing...           │ │ Input
                                         │ └──────────────────────────┘ │
                                         │ [😊] [📎]         [Yuborish] │ Actions
                                         │                              │ Footer (100px)
                                         │   Powered by QULAY CHAT        │ Branding
                                         └──────────────────────────────┘
                                                (360×520px)
```

### 3. Pre-chat Form
```
┌──────────────────────────────────┐
│   Chat boshlash            [×]   │ Header
├──────────────────────────────────┤
│                                  │
│  Fikr-mulohazangizni bildiring   │ Title
│  Tez orada javob beramiz         │ Subtitle
│                                  │
│  Ismingiz *                      │
│  ┌────────────────────────────┐  │
│  │Ismingizni kiriting         │  │ Input
│  └────────────────────────────┘  │
│                                  │
│  Email *                         │
│  ┌────────────────────────────┐  │
│  │email@example.com           │  │
│  └────────────────────────────┘  │
│                                  │
│  Mavzu                           │
│  ┌────────────────────────────┐  │
│  │Nimaga yordam kerak?        │  │
│  └────────────────────────────┘  │
│                                  │
│  Xabar                           │
│  ┌────────────────────────────┐  │
│  │Savolingizni yozing...      │  │
│  │                            │  │
│  │                            │  │
│  └────────────────────────────┘  │
│                          0 / 1000│
│                                  │
│  ┌────────────────────────────┐  │
│  │   Chat boshlash            │  │ Submit
│  └────────────────────────────┘  │
│                                  │
│  🔒 Shaxsiy ma'lumotlaringiz     │
│     xavfsiz                      │ Privacy
│                                  │
└──────────────────────────────────┘
```

### 4. Feedback Form
```
┌──────────────────────────────────┐
│   Feedback                 [×]   │
├──────────────────────────────────┤
│                                  │
│  Xizmatimizni baholang           │ Title
│  Fikringiz biz uchun muhim       │
│                                  │
│     ★   ★   ★   ★   ★            │ Stars (40px each)
│                                  │
│  Juda yomon      Ajoyib          │ Labels
│                                  │
│  Izoh (ixtiyoriy)                │
│  ┌────────────────────────────┐  │
│  │Nimani yaxshilashimiz mumkin│  │ Textarea
│  │                            │  │
│  └────────────────────────────┘  │
│                          0 / 500 │
│                                  │
│  ┌────────────────────────────┐  │
│  │   Yuborish                 │  │ Submit
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │   O'tkazib yuborish        │  │ Skip
│  └────────────────────────────┘  │
│                                  │
└──────────────────────────────────┘
```

### 5. Mobile: Full Screen
```
┌──────────────────────────────────┐
│ [<]  Dilshod  [Onlayn]           │ Header (64px)
├──────────────────────────────────┤
│                                  │
│  ⓘ Chat boshlandi...             │
│                                  │
│ ┌──┐ ┌────────────────────┐     │
│ │👤│ │Salom! Yordam       │     │
│ └──┘ │bera olamanmi?      │     │
│      └────────────────────┘     │
│                                  │
│               ┌──────────────┐   │
│               │Ha, kerak edi │   │
│               └──────────────┘   │
│                                  │
│ ┌──┐ ●●●                         │
│ │👤│                             │
│ └──┘                             │
│                                  │
│                                  │
│                                  │
│                                  │
│                                  │
│                                  │
│                                  │
│                                  │
├──────────────────────────────────┤
│ ┌──────────────────────────────┐ │
│ │Xabar yozing...               │ │
│ └──────────────────────────────┘ │
│ [😊] [📎]         [Yuborish]     │
└──────────────────────────────────┘
      (100% width × 100% height)
```

---

## Figma uchun komponentlar (20 ta)

```
widget/
├── launcher/
│   ├── button-collapsed           # 56px circle with badge
│   ├── button-expanded            # Hover preview card
│   └── unread-badge               # Red badge with count
├── window/
│   ├── chat-window-frame          # 360×520 container
│   ├── header                     # Agent info + actions
│   ├── body-container             # Messages scrollable area
│   ├── footer-input               # Textarea + actions
│   └── powered-by                 # Branding footer
├── messages/
│   ├── agent-bubble               # White bubble, left-aligned
│   ├── visitor-bubble             # Primary bubble, right-aligned
│   ├── system-message             # Center, gray text
│   ├── typing-indicator           # 3 dots animation
│   ├── file-attachment            # File card inside bubble
│   ├── image-attachment           # Image with lightbox
│   └── quick-reply-chip           # Pill button
├── forms/
│   ├── pre-chat-form              # Name/Email/Subject/Message
│   ├── offline-form               # Same as pre-chat, different text
│   └── feedback-form              # Star rating + comment
├── tools/
│   ├── emoji-picker               # 320×360 panel with grid
│   ├── file-upload-preview        # File card with remove
│   └── send-button                # Primary CTA
├── notifications/
│   ├── browser-push               # Permission modal
│   ├── connection-error           # Red alert banner
│   └── toast-notification         # Bottom toast for errors
└── mobile/
    ├── mobile-header              # With back button
    └── mobile-fullscreen          # 100% variant
```

---

## User Flows

### 1. First-time Visitor Qulay Chat
```
1. Visitor lands on website
2. Widget launcher appears (bottom-right, pulse animation)
3. Visitor clicks launcher
4. Pre-chat form opens (if enabled)
5. Visitor fills: Name, Email, Message
6. Clicks "Chat boshlash"
7. Form submits → Chat window opens
8. System message: "Chat boshlandi"
9. Agent receives notification
10. Agent joins → System message "Dilshod chatga qo'shildi"
11. Agent sends greeting: "Salom! Yordam bera olamanmi?"
12. Visitor replies
13. Conversation continues...
14. Agent clicks "Resolve"
15. Feedback form opens
16. Visitor rates 5 stars, adds comment
17. Clicks "Yuborish"
18. Success message: "Rahmat!"
19. Widget auto-closes after 2s
```

### 2. Returning Visitor Flow
```
1. Visitor returns to website
2. Widget launcher shows unread badge (3)
3. Visitor clicks launcher
4. Chat window opens (no pre-chat form)
5. Previous message history loads (last 20 messages)
6. Visitor sees agent's last message
7. Visitor types reply
8. Agent receives notification (if online)
9. Conversation resumes...
```

### 3. Offline Message Flow
```
1. Visitor clicks launcher (all agents offline)
2. Offline form opens
3. Title: "Agentlar hozir offline"
4. Visitor fills: Name, Email, Message
5. Clicks "Xabar yuborish"
6. Success screen: "Xabaringiz qabul qilindi!"
7. Visitor clicks "Yopish"
8. Widget closes
9. Email sent to visitor with confirmation
10. When agent online, message appears in Inbox
11. Agent replies via email
```

### 4. File Upload Flow
```
1. Visitor in active chat
2. Clicks file upload button (paperclip icon)
3. File picker opens
4. Visitor selects file (image or PDF)
5. File preview card appears above input
   - Shows file name, size, thumbnail (if image)
6. Visitor adds caption text (optional)
7. Clicks "Yuborish"
8. File uploads (progress bar if >1MB)
9. Message sent with file attachment
10. Agent receives file, can download or view
```

### 5. Emoji Insert Flow
```
1. Visitor typing message
2. Clicks emoji button (smiley icon)
3. Emoji picker panel opens (320×360)
4. Visitor clicks emoji (😊)
5. Emoji inserts at cursor position in textarea
6. Picker stays open (can insert multiple)
7. Visitor clicks outside or presses Escape
8. Picker closes
9. Visitor finishes message, clicks "Yuborish"
```

---

## Technical Requirements

### Frontend (Embedded Widget)

**Technology:**
- Pure JavaScript (ES6+), no framework dependency
- Vanilla CSS with CSS variables for theming
- WebSocket for real-time messaging
- LocalStorage for session persistence

**Bundle Size:**
- Target: <100KB (minified + gzipped)
- Lazy-load emoji picker (~30KB) only when opened

**Embed Code (for customers):**
```html
<script>
  (function(w,d,s,o,f,js,fjs){
    w['Qulay chatWidget']=o;w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);
  }(window,document,'script','qulaychat','https://cdn.qulaychat.uz/widget.js'));
  qulaychat('init', {
    workspaceId: 'ws_abc123',
    position: 'bottom-right',
    primaryColor: '#4F46E5',
    language: 'uz'
  });
</script>
```

### API Endpoints

**Widget API:**
- `POST /api/v1/widget/init` — Initialize widget session, get config
- `POST /api/v1/widget/conversation/start` — Start new conversation (pre-chat submit)
- `GET /api/v1/widget/conversation/:id` — Get conversation history
- `POST /api/v1/widget/conversation/:id/message` — Send message
- `POST /api/v1/widget/conversation/:id/file` — Upload file
- `POST /api/v1/widget/conversation/:id/feedback` — Submit feedback
- `POST /api/v1/widget/offline-message` — Send offline message

**WebSocket Events:**
- `message:new` — New message from agent
- `agent:typing` — Agent is typing
- `agent:joined` — Agent joined conversation
- `conversation:resolved` — Chat ended by agent
- `connection:lost` — WebSocket disconnected

### LocalStorage Keys
- `qulaychat_session_id` — Unique session ID (UUID)
- `qulaychat_conversation_id` — Current conversation ID
- `qulaychat_visitor_info` — Cached name/email from pre-chat
- `qulaychat_unread_count` — Unread messages count
- `qulaychat_settings` — User preferences (sound on/off, etc.)

### Performance

- **First Load:** <2s (including WebSocket connection)
- **Message Send Latency:** <100ms (optimistic UI update)
- **File Upload:** Max 10MB, chunked upload for >1MB files
- **Image Optimization:** Auto-resize images >1920px width, compress to <500KB
- **Lazy Loading:** Emoji picker loads on first open (not on init)
- **Message History:** Load last 20 messages, infinite scroll for older
- **WebSocket Reconnect:** Exponential backoff (1s, 2s, 4s, 8s, max 30s)

### Security

- **HTTPS Only:** Widget served over HTTPS, API requires HTTPS
- **CORS:** Strict origin checking (only allowed workspace domains)
- **Rate Limiting:** 60 messages per minute per visitor
- **XSS Protection:** All user input sanitized, no `<script>` execution
- **File Validation:** MIME type checking, virus scan on server
- **Session Timeout:** 30 days inactive, then auto-expire

### Browser Support

- **Minimum:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS 14+, Android 8+
- **Fallback:** Older browsers show link to email contact form

---

## Figma AI uchun prompt

```
Design a modern customer chat widget for a SaaS platform with desktop (360×520px) and mobile (full-screen) variants.

Launcher Button:
- 56px circle, Primary #4F46E5 background, white message icon, soft shadow
- Unread badge: 24px red circle (#DC2626) with white number, top-right corner of launcher
- Idle animation: subtle pulse every 5s
- Hover state: expanded preview card (280×120px) showing agent avatar, name "Dilshod", status "Onlayn", greeting message, "Chat boshlash" CTA

Chat Window (Desktop):
- Size: 360×520px, border-radius 16px, white background, shadow
- Header (64px): Gradient Primary #4F46E5 to #6366F1, agent avatar 40px with online dot, name + status white text, minimize and close buttons (white icons)
- Body (356px): Light gray #F9FAFB background, messages scrollable
  - Agent message: left-aligned, white bubble with gray border, agent avatar 32px, organic border-radius, timestamp below
  - Visitor message: right-aligned, Primary #4F46E5 bubble, white text, no avatar, timestamp below
  - Typing indicator: 3 gray dots bouncing animation in white bubble
  - System message: centered, gray text, small size
- Footer (100px): White background, top border #E5E7EB
  - Textarea: expandable, border #D1D5DB, placeholder "Xabar yozing...", border-radius 8px
  - Actions bar: emoji button (smile icon), file upload (paperclip), Send button (Primary, 80px width "Yuborish")
  - Powered by QULAY CHAT: small text at bottom

Message Types:
- Text bubble: standard specs above
- File attachment: card with file icon, name, size, download button inside bubble
- Image attachment: max 200×200px, rounded corners, click to enlarge
- Quick replies: horizontal scrollable chips below agent message, pill shape, Primary border, white background

Pre-chat Form:
- Replace chat body with form, white background, padding 24px
- Title: "Fikr-mulohazangizni bildiring", subtitle below
- 4 inputs: Name (required *), Email (required *, email validation), Subject (optional), Message (textarea, 100px, character count 0/1000)
- Submit button: full-width, 44px, Primary "Chat boshlash"
- Privacy text: lock icon + "Shaxsiy ma'lumotlaringiz xavfsiz" at bottom

Offline Form:
- Same as pre-chat but title "Agentlar hozir offline", moon icon in header
- Subtitle: "Xabar qoldiring, tez orada javob beramiz"
- Submit button: "Xabar yuborish"
- Success state: large green checkmark icon, "Xabaringiz qabul qilindi!" text, "Yopish" button

Feedback Form:
- Title: "Xizmatimizni baholang", subtitle "Fikringiz biz uchun muhim"
- 5 stars: 40px each, yellow #FBBF24 when selected, gray #D1D5DB inactive, labels "Juda yomon" and "Ajoyib" below
- Comment textarea: 100px, optional, placeholder "Nimani yaxshilashimiz mumkin?", 0/500 counter
- Submit button: full-width "Yuborish", Skip button below
- Success state: red heart icon 64px, "Rahmat!" title, auto-close after 2s

Emoji Picker:
- Floating panel 320×360px, white, rounded corners, shadow
- Tabs at top: icon-based categories (Smileys, People, Nature, Food, etc.)
- 8-column emoji grid, each 36px button, hover bg light gray
- Search input at top (optional)

Mobile Variant:
- Full-screen 100% width × 100% height, no border-radius
- Header: back button (chevron left) instead of minimize, closes chat
- Body: adjusted height with safe-area-inset for iPhone notch
- Emoji picker: full-width modal from bottom

Positioning:
- Show 4 examples: bottom-right (default), bottom-left, top-right, top-left
- 24px offset from viewport edges

Notifications:
- Browser push permission modal: "Chat xabarlari uchun bildirishnoma yoqilsinmi?" with Yes/No buttons
- Connection error banner: red #FEE2E2 background, "Ulanish uzildi" text, "Qayta urinish" button

Style:
- Primary color: #4F46E5 (Indigo)
- Font: Inter, 11-18px sizes
- Border-radius: 8-16px
- Spacing: 8px grid
- Shadows: soft, elevation-based
- Animations: smooth 200-400ms
- Icons: 16-28px, Heroicons style
- All buttons: min 44×44px touch target
- Desktop-first, responsive mobile
```
