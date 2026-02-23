# QULAY CHAT — Team: Agentlar, Rollar, Takliflar

## Umumiy yondashuv
Team bo'limi workspace'dagi barcha agentlarni boshqarish uchun markaziy joy — agentlarni qo'shish, rollarini boshqarish, faoliyatini kuzatish va takliflarni nazorat qilish. Admin va Manager rollari uchun to'liq CRUD operatsiyalari, Operator uchun faqat read-only ko'rish imkoniyati. Professional SaaS tool sifatida, bu bo'lim minimal, lekin kuchli bo'lishi kerak — ortiqcha detallar emas, balki tezkor harakatlar.

**Maqsad:** 
- Agentlarni 30 soniyada takliflash
- Rollar va ruxsatlarni bir joyda boshqarish
- Agent faoliyatini real-time kuzatish
- Takliflar holatini nazorat qilish

**Layout Pattern:** Dashboard Shell + Tabs + Main Content Area (table-based)

---

## TABS NAVIGATION

**Tabs joylashuv:** Page header ostida, main content ustida  
**Tabs:** Agents (active by default) | Roles | Invitations

**Tab uslubi:**
- **Inactive tab:** 14px Medium, Gray-600, hover: Gray-900
- **Active tab:** 14px Semibold, Primary-600, pastki border 2px Primary-600
- **Tab balandligi:** 48px
- **Tab padding:** 0 24px
- **Gap between tabs:** 8px
- **Underline (active):** 2px solid Primary-600, width: 100% of tab text

---

## 1. AGENTS TAB — Jamoa a'zolari ro'yxati

### SCR-T01 Team Agents — List (Table View)

**Vazifasi:** Workspace'dagi barcha agentlarni ko'rsatish, statusini real-time kuzatish, tezkor amallar (edit, suspend, delete).

#### Layout va o'lchamlar
- **Container:** Dashboard Shell main content area
- **Header section:**
  - Title: "Jamoa a'zolari" 24px Semibold, Gray-900
  - Subtitle: "Jami 12 agent" 14px Regular, Gray-600
  - "+ Agent qo'shish" primary button (top-right)
  - "Import" ghost button (ixtiyoriy, future feature)

#### Filters & Search Bar
| Element | Spec |
|---------|------|
| **Search input** | 320px width, "Agent ismi yoki emaili bo'yicha qidirish..." placeholder |
| **Min characters** | 3 belgi (3 dan kam yozsa — qidirmaydi) |
| **Debounce** | 300ms (user yozib bo'lgandan keyin) |
| **Max results** | 50 ta (pagination agar ko'p) |
| **Case sensitive** | Yo'q (lowercase match) |
| **Search scope** | Agent full name, email, role (Owner, Admin, Agent) |
| **Sort** | Relevance → Date (newest first) |
| **Filter: Role** | Dropdown, "Barcha rollar" default, options: Admin / Manager / Operator |
| **Filter: Status** | Dropdown, "Barcha status" default, options: Online / Offline / Away / Busy |
| **Tozalash link** | 14px Medium, Primary-600, "Filtrlarni tozalash" (appears when filters active) |

**Filters margin-top:** 24px

#### Agents Table Structure

**Table uslubi:**
- **Table width:** 100% (responsive)
- **Row height:** 72px
- **Row hover:** background Gray-50, transition 150ms
- **Row border:** Bottom border 1px Gray-200
- **Header row:** background Gray-100, height 48px, text 13px Semibold, Gray-700
- **Pagination:** Bottom-center, "1 - 15 / 47 agents", prev/next arrows

**Table Columns:**

| Column | Width | Content | Alignment |
|--------|-------|---------|-----------|
| **Checkbox** | 48px | Select all (header) / Individual checkboxes | Center |
| **Agent** | 280px | Avatar 40px + Name + Email | Left |
| **Role** | 120px | Badge (Admin/Manager/Operator) | Left |
| **Status** | 120px | Status badge with dot | Left |
| **Last Active** | 140px | Relative time ("2 daqiqa oldin") | Left |
| **Workload** | 100px | Active chats count / % | Center |
| **Actions** | 80px | 3-dot menu button | Center |

**Column details:**

**1. Agent Column:**
- Avatar: 40px circle, border-radius 50%
- Name: 14px Semibold, Gray-900 (e.g., "Jahongir Otajonov")
- Email: 13px Regular, Gray-600 (e.g., "jahongir@company.uz")
- Online status indicator: 8px circle, absolute position bottom-right of avatar
  - Online: Success-500 (green) with pulse animation
  - Offline: Gray-400
  - Away: Warning-500 (yellow)
  - Busy: Error-500 (red)

**2. Role Column:**
- Badge style:
  - **Admin:** Primary-100 background, Primary-700 text, 12px Semibold
  - **Manager:** Indigo-100 background, Indigo-700 text
  - **Operator:** Gray-100 background, Gray-700 text
- Badge padding: 4px 12px
- Badge border-radius: 9999px (pill shape)

**3. Status Column:**
- Badge with dot + text:
  - **Online:** 🟢 "Online" — Success-500 dot + text
  - **Away:** 🟡 "Ketdi" — Warning-500 dot + text
  - **Busy:** 🔴 "Band" — Error-500 dot + text
  - **Offline:** ⚪ "Offline" — Gray-500 dot + text
- Dot: 8px circle, inline with text
- Text: 14px Medium

**4. Last Active Column:**
- Relative time format:
  - "Hozir" (if online now)
  - "2 daqiqa oldin"
  - "1 soat oldin"
  - "Kecha, 14:30"
  - "Jan 05, 2026"
- Color: Gray-600, 14px Regular
- Updates real-time for online users

**5. Workload Column:**
- Display format:
  - If online: "3 chat" or "0 chat"
  - If offline: "—" (em dash)
- Color:
  - 0 chats: Gray-500
  - 1-5 chats: Success-600
  - 6-10 chats: Warning-600
  - 11+ chats: Error-600
- Font: 14px Semibold

**6. Actions Column:**
- 3-dot menu button (⋯)
- Button: 32×32px, hover: Gray-100 bg
- Icon: 20px, Gray-700

#### Actions Menu (Dropdown)

**Trigger:** Click 3-dot button  
**Position:** Bottom-right aligned to button  
**Dropdown style:**
- Background: White
- Border-radius: 8px
- Shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
- Padding: 8px
- Width: 200px
- Z-index: 50

**Menu items:**

| Item | Icon | Action | Condition |
|------|------|--------|-----------|
| **Profilni ko'rish** | 👤 User icon | Opens agent profile modal (SCR-T01-S02) | Always |
| **Tahrirlash** | ✏️ Edit icon | Opens edit agent modal (SCR-T01-S03) | Admin/Manager |
| **Parolni tiklash** | 🔑 Key icon | Sends password reset email | Admin only |
| **Vaqtincha bloklash** | 🚫 Ban icon | Suspends agent (SCR-T01-S04) | Admin/Manager |
| **Faollashtirish** | ✓ Check icon | Reactivates suspended agent | Admin/Manager (if suspended) |
| **--- Separator ---** | — | — | — |
| **O'chirish** | 🗑️ Trash icon, **Red** | Deletes agent permanently (SCR-T01-S05) | Admin only |

**Menu item hover:** Gray-100 background  
**Menu item height:** 40px  
**Menu item padding:** 12px  
**Icon size:** 16px  
**Icon-text gap:** 12px  
**Text:** 14px Regular

#### Empty State (No Agents)

**Trigger:** 0 agents in workspace (freshly created workspace)

**UI:**
- Illustration: 👥 Team icon (120px, Gray-300)
- Title: "Hozircha agent yo'q" 18px Semibold, Gray-900
- Description: "Jamoangizni qo'shing va chatlarni birgalikda boshqaring" 14px Regular, Gray-600
- "+ Birinchi agentni qo'shish" primary button
- "Import agents" outline button (future feature)

**Alignment:** Center of content area  
**Vertical offset:** 120px from top

#### Loading State

**UI:**
- Skeleton table rows: 10 rows
- Each skeleton row: Avatar circle + 2 text lines + badge shape + text block
- Shimmer animation: 1.5s loop, gray gradient sweep
- Header: static (no skeleton)

#### Search No Results

**Trigger:** Search query returns 0 results

**UI:**
- Icon: 🔍 Magnifying glass with X (64px, Gray-300)
- Title: "Hech narsa topilmadi" 16px Semibold, Gray-900
- Description: "\"jahongir\" ga mos agent topilmadi" (shows search query)
- "Qidiruvni tozalash" link, Primary-600
- "Agent qo'shish" outline button

---

### SCR-T01-S01 Team Agents — Bulk Actions Bar

**Trigger:** Select 1+ agents via checkboxes

**UI:**
- Sticky bar: Top of table, 64px height
- Background: Primary-50, border 1px Primary-200
- Left side: "3 agent tanlandi" 14px Semibold, Primary-900
- Right side: Action buttons
  - "Role o'zgartirish" outline button
  - "Bloklash" outline button (danger)
  - "O'chirish" outline button (danger)
- "Bekor qilish" ghost button (far right, closes bar)

**Animation:** Slide down from top, 200ms ease-out

---

### SCR-T01-S02 Team Agents — Agent Profile Modal (View)

**Trigger:** Click "Profilni ko'rish" in actions menu

**Modal style:**
- Width: 600px
- Height: auto (max 80vh, scrollable)
- Background: White
- Border-radius: 12px
- Shadow: 0 20px 25px -5px rgba(0,0,0,0.1)
- Padding: 32px
- Overlay: rgba(0,0,0,0.5) backdrop-blur(4px)

**Header:**
- Title: "Agent profili" 20px Semibold, Gray-900
- Close X button (top-right, 32×32px, hover: Gray-100)

**Content:**

**Profile Section:**
- Avatar: 80px circle, center-aligned
- Name: 20px Semibold, Gray-900, center
- Email: 16px Regular, Gray-600, center
- Role badge: Below email, center
- Status badge: Below role, center

**Information Grid (2 columns):**

| Label | Value |
|-------|-------|
| **Qo'shilgan sana** | "Jan 10, 2026" |
| **Oxirgi faollik** | "5 daqiqa oldin" |
| **Jami chatlar** | "1,247" |
| **O'rtacha javob vaqti** | "2m 15s" |
| **CSAT reytingi** | "4.8 ⭐" |
| **Hozirgi yuklanish** | "3 active chats" |

**Grid style:**
- Label: 13px Medium, Gray-600
- Value: 14px Semibold, Gray-900
- Row gap: 16px
- Column gap: 24px

**Actions (Footer):**
- "Tahrirlash" outline button
- "Yopish" ghost button

---

### SCR-T01-S03 Team Agents — Edit Agent Modal

**Trigger:** Click "Tahrirlash" in actions menu or profile modal

**Modal width:** 500px

**Form fields:**

| Field | Type | Validation |
|-------|------|------------|
| **Ism** | Text input | Required, 2-50 chars |
| **Email** | Email input | Required, valid email, unique |
| **Rol** | Dropdown | Required, [Admin / Manager / Operator] |
| **Status** | Dropdown | Optional, [Online / Away / Busy / Offline] |

**Form style:**
- Label: 14px Medium, Gray-700, margin-bottom 8px
- Input: 44px height, border 1px Gray-300, focus: 2px Primary-600
- Input font: 14px Regular, Gray-900
- Error text: 12px Regular, Error-500, margin-top 4px

**Actions:**
- "Bekor qilish" ghost button
- "Saqlash" primary button
  - Loading state: "Saqlanmoqda..." + spinner
  - Success: Toast "Agent ma'lumotlari yangilandi" Green

**Auto-save indicator (future):**
- "Oxirgi saqlangan: 2 daqiqa oldin" 12px Gray-500, top-right

---

### SCR-T01-S04 Team Agents — Suspend Confirmation Modal

**Trigger:** Click "Vaqtincha bloklash"

**Modal width:** 400px

**Content:**
- Icon: ⚠️ Warning triangle (48px, Warning-500)
- Title: "Agentni bloklashni tasdiqlaysizmi?" 18px Semibold, Gray-900
- Description: "Jahongir Otajonov bloklanadi va tizimga kira olmaydi." 14px Regular, Gray-600
- Checkbox: "Faol chatlarni boshqa agentlarga o'tkazish" (checked by default)

**Actions:**
- "Bekor qilish" outline button
- "Bloklash" danger button (Error-600 bg)

**After confirm:**
- Toast: "Agent bloklandi" Success-500
- Agent row: Status → "Suspended" badge (Gray-500)
- Actions menu: "Faollashtirish" appears

---

### SCR-T01-S05 Team Agents — Delete Confirmation Modal

**Trigger:** Click "O'chirish" (Admin only)

**Modal width:** 450px

**Content:**
- Icon: 🗑️ Trash icon (48px, Error-500)
- Title: "Agentni o'chirishni tasdiqlaysizmi?" 18px Bold, Error-600
- Warning box (Red-50 bg, Red-600 text):
  - "Diqqat! Bu amalni bekor qilib bo'lmaydi."
  - "Barcha chat tarixi saqlanadi, lekin agent profili butunlay o'chiriladi."
- Input field: "Tasdiqlash uchun agent emailini kiriting"
  - Validation: Must match agent email exactly

**Actions:**
- "Bekor qilish" outline button
- "Qachongi o'chirish" danger button (disabled until email matches)

**After delete:**
- Toast: "Agent o'chirildi" Success-500
- Agent row: Fade out animation + remove from table

---

### SCR-T01-S06 Team Agents — Add Agent Modal (Invite)

**Trigger:** Click "+ Agent qo'shish" button

**Modal width:** 500px

**Header:**
- Title: "Yangi agent qo'shish" 20px Semibold, Gray-900
- Subtitle: "Taklifnoma email orqali yuboriladi" 14px Regular, Gray-600

**Form fields:**

| Field | Type | Placeholder | Validation |
|-------|------|-------------|------------|
| **Email** | Email input | "agent@company.uz" | Required, valid email, not already invited/member |
| **Rol** | Dropdown | "Rolni tanlang" | Required, [Admin / Manager / Operator] |
| **Shaxsiy xabar** | Textarea (optional) | "Salom! Bizning jamoaga qo'shiling..." | Optional, 500 chars max |

**Role descriptions (below dropdown when selected):**
- **Admin:** "To'liq kirish: barcha sozlamalar, billing, API"
- **Manager:** "Jamoa va analitika: agent boshqarish, hisobotlar"
- **Operator:** "Chat: faqat suhbatlar bilan ishlash"

**Actions:**
- "Bekor qilish" ghost button
- "Taklifnoma yuborish" primary button
  - Loading: "Yuborilmoqda..." + spinner
  - Success: Modal closes + Toast "Taklifnoma yuborildi"

**After send:**
- Agent appears in "Invitations" tab with status "Pending"
- Email sent to agent with invitation link

---

## ASCII wireframe — Agents Table

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ QULAY CHAT                    [Ctrl+K Qidirish...]         🔔(3)  [Avatar ▼]     │ Header
├─────────────────────────────────────────────────────────────────────────────────┤
│ [≡]│ Inbox (12)                                                                 │
│    │ Automation                                                                  │
│    │ ► Jamoa                                                    Sidebar          │
│    │ Analitika                                                                   │
│    │ ...                                                                         │
└────┴─────────────────────────────────────────────────────────────────────────────┘
      ┌───────────────────────────────────────────────────────────────────────────┐
      │                                                                            │
      │  Jamoa a'zolari (Jami 12 agent)                    [+ Agent qo'shish]    │
      │                                                                            │
      │  [ Agents | Roles | Invitations ]  ←  Tabs                                │
      │                                                                            │
      │  [🔍 Agent ismi...] [▼ Barcha rollar] [▼ Barcha status]  [Tozalash]     │
      │                                                                            │
      ├────┬──────────────────────┬─────────┬──────────┬──────────────┬─────┬────┤
      │ ☐  │ Agent                │ Role    │ Status   │ Last Active  │ Load│ ⋯  │ Table header
      ├────┼──────────────────────┼─────────┼──────────┼──────────────┼─────┼────┤
      │ ☐  │ [Avatar 🟢]          │ [Admin] │ 🟢Online │ Hozir        │ 3   │ ⋯  │
      │    │ Jahongir Otajonov    │         │          │              │     │    │
      │    │ jahongir@company.uz  │         │          │              │     │    │
      ├────┼──────────────────────┼─────────┼──────────┼──────────────┼─────┼────┤
      │ ☐  │ [Avatar ⚪]          │[Manager]│ ⚪Offline│ 2 soat oldin │  —  │ ⋯  │
      │    │ Sara Karimova        │         │          │              │     │    │
      │    │ sara@company.uz      │         │          │              │     │    │
      ├────┼──────────────────────┼─────────┼──────────┼──────────────┼─────┼────┤
      │ ☐  │ [Avatar 🟡]          │[Operator]│🟡Ketdi  │ 5 daqiqa oldin│ 1  │ ⋯  │
      │    │ Ali Toshmatov        │         │          │              │     │    │
      │    │ ali@company.uz       │         │          │              │     │    │
      ├────┴──────────────────────┴─────────┴──────────┴──────────────┴─────┴────┤
      │                                                                            │
      │                         ← 1 - 3 / 12 →                                     │ Pagination
      └────────────────────────────────────────────────────────────────────────────┘

                   Actions Menu Dropdown (on ⋯ click):
                   ┌────────────────────────┐
                   │ 👤 Profilni ko'rish    │
                   │ ✏️ Tahrirlash          │
                   │ 🔑 Parolni tiklash     │
                   │ 🚫 Bloklash            │
                   │ ────────────────────   │
                   │ 🗑️ O'chirish (red)      │
                   └────────────────────────┘
```

---

## 2. ROLES TAB — Rol va ruxsatlar boshqaruvi

### SCR-T02 Team Roles — List & Permissions Matrix

**Vazifasi:** Predefined va custom rollarni boshqarish, har bir rol uchun granular permissions o'rnatish.

#### Layout
- **Header:** "Rollar va ruxsatlar" 24px Semibold
- **Subtitle:** "Har bir rol uchun aniq ruxsatlarni belgilang" 14px Gray-600
- **"+ Yangi rol yaratish" button** (top-right) — Admin only

#### Default Roles (Read-only for system roles)

**3 ta system rol kartasi (horizontal row):**

Each card (360px × 280px):
- Title: "Admin" / "Manager" / "Operator" — 18px Semibold
- Description: Role ta'rifi — 14px Regular, Gray-600
- Permissions summary: "32 ruxsat" — 13px Medium, Primary-600
- "Ruxsatlarni ko'rish" outline button
- System badge: "Tizim roli" — can't be deleted/renamed

**Card hover:** Shadow-md → Shadow-lg, translateY(-2px)

**Card style:**
- Background: White
- Border: 1px Gray-300
- Border-radius: 12px
- Padding: 24px
- Gap between cards: 20px

#### Custom Roles (if any)

**Similar cards below system roles:**
- Same design
- No "System" badge
- Additional actions: Edit button, Delete button (icon only, top-right corner)

#### Empty State (No Custom Roles)

**UI:**
- Small illustration: 🔐 Lock icon (64px, Gray-300)
- Text: "Maxsus rollar yo'q" 16px Semibold
- "Yaratish" link, Primary-600

---

### SCR-T02-S01 Team Roles — Permissions Matrix Modal

**Trigger:** Click "Ruxsatlarni ko'rish" on role card

**Modal width:** 800px  
**Modal height:** 600px (scrollable)

**Header:**
- Title: "Admin roli ruxsatlari" 20px Semibold
- Close button

**Content: Permissions Table**

**Table structure:**

| Module | View | Create | Edit | Delete | Special |
|--------|------|--------|------|--------|---------|
| **Inbox** | ✓ | ✓ | ✓ | ✓ | Assign chats |
| **Automation** | ✓ | ✓ | ✓ | ✓ | — |
| **Team** | ✓ | ✓ | ✓ | ✓ | Invite agents |
| **Analytics** | ✓ | — | — | — | Export reports |
| **Settings** | ✓ | — | ✓ | — | Workspace config |
| **Billing** | ✓ | — | ✓ | ✓ | Payment methods |
| **Developer** | ✓ | ✓ | ✓ | ✓ | API keys |
| **Contacts** | ✓ | ✓ | ✓ | ✓ | Import/Export |
| **Online Visitors** | ✓ | — | — | — | Proactive chat |
| **Team Chat** | ✓ | ✓ | — | — | Create rooms |
| **Knowledge Base** | ✓ | ✓ | ✓ | ✓ | Publish articles |
| **Add-ons** | ✓ | — | ✓ | — | Activate/Config |

**Legend:**
- ✓ : Ruxsat berilgan (Success-500 checkmark)
- — : Ruxsat yo'q (Gray-300 dash)

**Table style:**
- Header row: Gray-100 bg, 13px Semibold
- Row height: 48px
- Cell: 14px Regular
- Checkmark icon: 16px
- Hover row: Gray-50 bg

**Footer:**
- "Yopish" outline button

---

### SCR-T02-S02 Team Roles — Create Custom Role Modal

**Trigger:** Click "+ Yangi rol yaratish"

**Modal width:** 700px

**Form:**

**Step 1: Basic Info**
- Role name: Text input, "Masalan: Support Lead"
- Description: Textarea, optional
- Color: Color picker (badge color)

**Step 2: Permissions Selection**
- Same table as SCR-T02-S01
- But with toggles instead of checkmarks
- Toggle: Each cell has ON/OFF switch
- Bulk actions: "Barchasini tanlash" / "Barchasini olib tashlash" per column

**Actions:**
- "Bekor qilish" ghost
- "Yaratish" primary
- Success: Toast "Yangi rol yaratildi"

---

## ASCII wireframe — Roles

```
┌────────────────────────────────────────────────────────────────────────────┐
│  Rollar va ruxsatlar                                    [+ Yangi rol]      │
│  Har bir rol uchun aniq ruxsatlarni belgilang                             │
│                                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                    │
│  │   Admin      │  │   Manager    │  │   Operator   │                    │
│  │ [Tizim roli] │  │ [Tizim roli] │  │ [Tizim roli] │                    │
│  │              │  │              │  │              │  System Roles       │
│  │ To'liq kirish│  │ Jamoa va     │  │ Chat bilan   │                    │
│  │ barcha       │  │ analitika    │  │ ishlash      │                    │
│  │ modullar     │  │ boshqaruvi   │  │              │                    │
│  │              │  │              │  │              │                    │
│  │ 32 ruxsat    │  │ 18 ruxsat    │  │ 8 ruxsat     │                    │
│  │              │  │              │  │              │                    │
│  │[Ruxsatlarni  │  │[Ruxsatlarni  │  │[Ruxsatlarni  │                    │
│  │ ko'rish]     │  │ ko'rish]     │  │ ko'rish]     │                    │
│  └──────────────┘  └──────────────┘  └──────────────┘                    │
│                                                                            │
│  Maxsus rollar                                                             │
│  ┌──────────────┐  ┌──────────────┐                                       │
│  │ Support Lead │  │ QA Manager   │  ✏️ 🗑️ (actions)                     │
│  │              │  │              │  Custom Roles                         │
│  │ 12 ruxsat    │  │ 15 ruxsat    │                                       │
│  │[Ruxsatlar]   │  │[Ruxsatlar]   │                                       │
│  └──────────────┘  └──────────────┘                                       │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. INVITATIONS TAB — Takliflar holati

### SCR-T03 Team Invitations — List (Table View)

**Vazifasi:** Yuborilgan takliflarni kuzatish, qayta yuborish, bekor qilish.

#### Layout
- Header: "Takliflar" 24px Semibold
- Subtitle: "Jami 5 ta kutilmoqda" 14px Gray-600

#### Invitations Table

**Table columns:**

| Column | Width | Content |
|--------|-------|---------|
| **Email** | 280px | Invited agent email |
| **Role** | 120px | Role badge |
| **Status** | 140px | Status badge |
| **Invited Date** | 140px | Relative time |
| **Expires In** | 100px | Days remaining |
| **Actions** | 120px | Resend / Cancel buttons |

**Status badges:**
- **Pending:** Warning-100 bg, Warning-700 text, "Kutilmoqda"
- **Accepted:** Success-100 bg, Success-700 text, "Qabul qilindi"
- **Expired:** Error-100 bg, Error-700 text, "Muddati o'tgan"
- **Cancelled:** Gray-100 bg, Gray-700 text, "Bekor qilingan"

**Actions:**
- **Pending:** "Qayta yuborish" ghost button + "Bekor qilish" ghost button (red)
- **Accepted:** No actions (read-only row)
- **Expired:** "Qayta yuborish" ghost button
- **Cancelled:** "Qayta taklif qilish" ghost button

**Row style:**
- Expired/Cancelled rows: Opacity 0.6
- Accepted rows: Green left border (3px)

#### Empty State

**UI:**
- Icon: ✉️ Envelope (80px, Gray-300)
- Title: "Takliflar yo'q" 18px Semibold
- Description: "Yangi agent qo'shing" 14px Gray-600
- "+ Agent qo'shish" outline button

---

## ASCII wireframe — Invitations

```
┌───────────────────────────────────────────────────────────────────────────┐
│  Takliflar (Jami 5 ta kutilmoqda)                                         │
│                                                                            │
├───────────────────┬─────────┬──────────────┬───────────┬────────┬────────┤
│ Email             │ Role    │ Status       │ Invited   │ Expires│ Actions│
├───────────────────┼─────────┼──────────────┼───────────┼────────┼────────┤
│ ali@example.com   │[Manager]│[Kutilmoqda]  │ 2 kun oldin│ 5 kun │[Qayta] │
│                   │         │  (yellow)    │           │        │[Bekor] │
├───────────────────┼─────────┼──────────────┼───────────┼────────┼────────┤
│ sara@example.com  │[Operator]│[Qabul        │ 1 hafta   │   —    │   —    │
│                   │         │  qilindi] ✓  │  oldin    │        │        │
├───────────────────┼─────────┼──────────────┼───────────┼────────┼────────┤
│ test@example.com  │[Admin]  │[Muddati      │ 10 kun    │ Expired│[Qayta] │
│                   │         │  o'tgan] ✗   │  oldin    │        │        │
└───────────────────┴─────────┴──────────────┴───────────┴────────┴────────┘
```

---

## Components Specification

### 1. Agent Card Component
**Usage:** Team list, search results  
**Props:** avatar, name, email, role, status, lastActive, workload  
**States:** Default, Hover, Selected  
**Size:** 280×72px (table row)

### 2. Role Badge Component
**Usage:** Throughout Team module  
**Variants:** Admin (Primary), Manager (Indigo), Operator (Gray), Custom (configurable)  
**Size:** auto × 24px  
**Props:** role, color

### 3. Status Badge Component
**Usage:** Agent status display  
**Variants:** Online (Green), Away (Yellow), Busy (Red), Offline (Gray)  
**Animation:** Pulse on online status  
**Props:** status, showDot

### 4. Actions Dropdown Component
**Usage:** 3-dot menu  
**Props:** items (array), position, agent  
**State:** Open/Closed  
**Animation:** Fade in 150ms

### 5. Permissions Matrix Component
**Usage:** Roles tab  
**Props:** role, permissions (object), editable (bool)  
**Interaction:** Toggle checkboxes if editable

---

## User Flow

```
[Team Tab Click] → [Agents List]
       ↓
  ┌────┼───────────┬──────────┬──────────┐
  ↓    ↓           ↓          ↓          ↓
[View][Edit]  [Suspend]  [Delete]  [+ Add]
  ↓    ↓           ↓          ↓          ↓
Modal Modal   Confirm     Confirm    Invite
       ↓           ↓          ↓        Modal
    [Save]    [Suspend]  [Delete]       ↓
       ↓           ↓          ↓      [Send]
    Success    Success    Success       ↓
                                    Invitation
                                       Sent

[Roles Tab] → [Role Cards]
       ↓
  ┌────┼───────────┐
  ↓    ↓           ↓
[View][Edit]  [+ Create]
  ↓    ↓           ↓
Matrix Modal  Create Modal
       ↓           ↓
    [Save]    [Create]
       ↓           ↓
    Success    Success

[Invitations Tab] → [Invitations List]
       ↓
  ┌────┼───────────┐
  ↓    ↓           ↓
[Resend][Cancel]  [View]
  ↓    ↓           ↓
Email Confirm   Details
Sent   ↓
    Success
```

---

## Technical Requirements

### Real-time Updates
- Agent status updates via WebSocket every 30s
- Online/offline indicators pulse animation
- Last active time updates every minute
- Workload updates when chat assigned/closed

### Permissions Enforcement
**Frontend:**
- Hide/disable UI elements based on user role
- Disable buttons if no permission

**Backend:**
- All mutations validated server-side
- API returns 403 if permission denied

### Data Refresh
- Auto-refresh table every 60s (configurable)
- Manual refresh button (top-right)
- Optimistic UI updates on actions

### Search & Filters
- Search: debounced input, 300ms delay
- Filters: client-side if < 100 agents, server-side if more
- URL params for shareable filtered views

### Validation Rules
- Email: RFC 5322 compliant
- Role: must be valid role ID
- Name: 2-50 characters
- Can't delete last admin
- Can't suspend self

---

## Accessibility

### Keyboard Navigation
- Tab order: Search → Filters → Table → Actions
- Arrow keys: Navigate table rows
- Enter: Open actions menu
- Escape: Close modals/dropdowns

### ARIA Labels
- Table: `aria-label="Agents list"`
- Checkboxes: `aria-label="Select agent Jahongir"`
- Actions menu: `aria-label="Agent actions"`
- Status badges: `aria-label="Status: Online"`

### Screen Reader
- Announce status changes: "Agent Jahongir is now online"
- Table row count: "Showing 3 of 12 agents"
- Form errors: Announced immediately

### Focus States
- All interactive elements: 2px Primary-600 outline
- Skip to content link
- Focus trap in modals

---

## Micro-interactions

1. **Status pulse:** Online status dot pulses (scale 1 → 1.2 → 1, 2s loop)
2. **Row hover:** Smooth bg transition 150ms, slight shadow
3. **Badge hover:** Tooltip shows full role description
4. **Checkbox select:** Ripple effect on click
5. **Bulk actions bar:** Slide down animation 200ms
6. **Modal open:** Fade in overlay 200ms + scale modal 0.95 → 1
7. **Button loading:** Spinner replaces text, button disabled
8. **Toast notifications:** Slide in from top-right, 3s auto-dismiss

---

## Figma uchun komponentlar

```
team/
├── agents/
│   ├── agent-row-component
│   ├── agent-card-component
│   ├── status-badge-component
│   ├── role-badge-component
│   ├── actions-dropdown-component
│   └── bulk-actions-bar-component
├── roles/
│   ├── role-card-component
│   ├── permissions-matrix-component
│   └── permission-toggle-component
├── invitations/
│   ├── invitation-row-component
│   └── invitation-status-badge
└── modals/
    ├── add-agent-modal
    ├── edit-agent-modal
    ├── agent-profile-modal
    ├── suspend-confirm-modal
    ├── delete-confirm-modal
    ├── create-role-modal
    └── permissions-view-modal
```

---

## Figma AI uchun prompt

```
Design a professional team management interface with 3 tabs: Agents, Roles, and Invitations.

Agents tab:
- Data table with columns: checkbox, agent (avatar + name + email), role badge, status badge with dot, last active, workload, 3-dot menu
- Real-time online status indicators with pulse animation
- Search bar and role/status filters
- Bulk actions bar when items selected
- Empty state with illustration

Roles tab:
- 3 system role cards (Admin, Manager, Operator) in horizontal row
- Custom role cards below
- Permissions matrix modal with module-based table
- Create role wizard modal

Invitations tab:
- Table with email, role, status badge (Pending/Accepted/Expired), invited date, expires in, actions
- Resend and cancel buttons
- Empty state

Modals:
- Add agent (email, role, message)
- Edit agent profile
- View agent full profile with stats
- Suspend confirmation
- Delete confirmation with email verification
- Permissions matrix view
- Create custom role

Color scheme: Primary #4F46E5, Success #10B981, Warning #F59E0B, Error #EF4444
Design system: Inter font, 8px grid, rounded corners, subtle shadows
Responsive: Desktop-first (1440px), tablet (768px), mobile (375px)

Include hover states, loading states, error states, and empty states for all components.
```

---

**Fayl oxiri — 14-team.md kengaytirilgan versiyasi**  
**Qatorlar:** ~1100+ (10x kengaydi)  
**Kiritilgan:** Pixel specs, 6 ta modal, 3 ta ASCII wireframe, Components, User Flow, Technical Requirements, Accessibility, Micro-interactions
