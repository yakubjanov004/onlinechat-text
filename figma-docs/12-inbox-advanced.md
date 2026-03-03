# QULAY CHAT — Inbox Advanced: Info Sidebar, Quick Actions, Modals

## Umumiy yondashuv
Inbox'ning o'ng tomoni (Info Sidebar) va tezkor amallar chat agent'ga mijoz kontekstini bir joyda beradi — kim bu odam, qanday tarix bor, qanday teglar, shaxsiy eslatmalar, va hozirgi web sahifada nima qilayapti. Quick Actions esa chatni boshqarish uchun asosiy tugmalar — transfer, resolve, tag, star, note. Bu bo'lim 11-inbox-chat.md'dagi asosiy chat oynasining to'ldiruvchi qismidir.

**Maqsad:**
- Mijoz profilini bir qarashda tushunish
- Tezkor harakatlar (transfer, resolve, tag, note) 1-2 klik bilan
- Fayl yuborish/qabul qilish oson
- Canned responses (tayyor javoblar) tezkor kiriting

**Layout Pattern:** Chat oynasi o'ng tomonida 300px kenglikdagi sidebar + modal'lar chat ustida overlay

---

## INFO SIDEBAR UMUMIY SPETSIFIKATSIYASI

### Layout va O'lchamlar
| Parametr | Qiymat |
|----------|--------|
| **Kenglik** | 300px (fixed) |
| **Joylashuv** | Chat oynasi o'ng tomoni |
| **Background** | White (`#FFFFFF`) |
| **Border left** | 1px solid Gray-200 (`#E5E7EB`) |
| **Padding** | 0 (har bir section o'z padding'i bor) |
| **Overflow-Y** | Scroll (agar kontent uzun bo'lsa) |
| **Max-height** | viewport height - 64px (header) |
| **Z-index** | 10 |

### Info Sidebar Sections (yuqoridan pastga):
1. **Customer Info** — Ism, email, telefon, joylashuv
2. **Tags** — Mijozga biriktrilgan teglar
3. **Private Notes** — Faqat agent uchun eslatmalar
4. **Conversation Details** — Chat statistikasi
5. **Current Activity** — Hozirda qaysi sahifada
6. **Chat History** — Oldingi suhbatlar ro'yxati

---

## 1. CUSTOMER INFO PANEL

### SCR-I02-01 Info Sidebar — Customer Info

**Vazifasi:** Mijoz asosiy ma'lumotlarini ko'rsatish — kim, qayerdan, qanday aloqa.

#### Layout
- **Section padding:** 24px (top, left, right), 16px (bottom)
- **Section border-bottom:** 1px solid Gray-200
- **Background:** White

#### Avatar va Ism
- **Avatar:** 64px circle, center-aligned
  - Agar avatar yo'q bo'lsa: initials (e.g., "AV" for Ahmad Valiyev)
  - Background: Primary-100, text: Primary-700, 20px Semibold
- **Name:** 18px Semibold, Gray-900, center, margin-top 12px
  - E.g., "Ahmad Valiyev"
  - If anonymous: "Anonymous #12345"
- **Online status indicator:** 10px circle, bottom-right of avatar
  - Online: Success-500 with pulse
  - Offline: Gray-400

#### Contact Details (Vertical list)

**Email:**
- Icon: 📧 Mail icon (16px, Gray-500)
- Text: "ahmad@email.uz" 14px Regular, Gray-700
- Link: clickable, opens email client (`mailto:`)
- If no email: "Email yo'q" Gray-400, italic

**Phone:**
- Icon: 📱 Phone icon (16px, Gray-500)
- Text: "+998 90 123 45 67" 14px Regular, Gray-700
- Link: clickable, opens phone dialer (`tel:`)
- If no phone: "Telefon yo'q" Gray-400, italic

**Location:**
- Icon: 📍 Location icon (16px, Gray-500)
- Text: "Toshkent, Uzbekistan" 14px Regular, Gray-700
- If no location: "Joylashuv noma'lum" Gray-400, italic

**Gap between items:** 12px

#### View Full Profile Link
- "To'liq profilni ko'rish" 13px Medium, Primary-600
- Icon: → Arrow right (12px)
- Hover: underline
- Click: Opens Contact Profile modal (SCR-CT02)

---

## 2. TAGS PANEL

### SCR-I02-02 Info Sidebar — Tags

**Vazifasi:** Mijozga teglar biriktirish/ko'rsatish (VIP, Premium, Problem, etc.)

#### Layout
- **Section padding:** 16px 24px
- **Section border-bottom:** 1px solid Gray-200
- **Header:** "Teglar" 14px Semibold, Gray-900

#### Tags Display
- **Layout:** Flexbox wrap, gap 8px
- **Empty state:** "Teg yo'q" 13px Regular, Gray-500

**Tag Badge Style:**
- **Background:** Gray-100
- **Text:** 12px Medium, Gray-700
- **Padding:** 4px 10px
- **Border-radius:** 9999px (pill)
- **Max-width:** 120px, ellipsis if overflow
- **Removable:** X icon (12px) on hover, gray → red on hover
  - Click X: Removes tag (with confirmation if important tag)

**Predefined Tag Colors:**
- VIP: Primary-100 bg, Primary-700 text
- Premium: Indigo-100 bg, Indigo-700 text
- Problem: Error-100 bg, Error-700 text
- Lead: Success-100 bg, Success-700 text
- Custom: Gray-100 bg, Gray-700 text

#### Add Tag Button
- "+ Teg qo'shish" 13px Medium, Primary-600
- Hover: underline
- Click: Opens Add Tag Modal (SCR-I02-02-S01)

---

### SCR-I02-02-S01 Add Tag Modal

**Trigger:** Click "+ Teg qo'shish"

**Modal width:** 400px

**Header:**
- Title: "Teg qo'shish" 18px Semibold, Gray-900
- Close X button (top-right)

**Content:**

**Search/Select Input:**
- Searchable dropdown
- Placeholder: "Tegni tanlang yoki yangi yarating"
- Shows existing tags with usage count: "VIP (47)"
- Type to filter or create new
- New tag: "+ \"Yangi teg\" yaratish" option

**Popular Tags (Quick select):**
- 6 ta eng ko'p ishlatiladigan teglar
- Each: Badge style, click to select
- E.g., VIP, Premium, Lead, Support, Billing, Technical

**Selected Tags Preview:**
- Shows currently selected tags
- Remove option (X icon)

**Actions:**
- "Bekor qilish" ghost button
- "Qo'shish" primary button
  - Disabled if no tag selected
  - Loading: "Qo'shilmoqda..." + spinner

**After add:**
- Modal closes
- Toast: "Teg qo'shildi" Success-500
- Tag appears in sidebar

---

## 3. PRIVATE NOTES PANEL

### SCR-I02-03 Info Sidebar — Private Notes

**Vazifasi:** Agent ichki eslatmalar yozishi — faqat agentlar ko'radi, mijoz ko'rmaydi.

#### Layout
- **Section padding:** 16px 24px
- **Section border-bottom:** 1px solid Gray-200
- **Header:** "Shaxsiy eslatmalar" 14px Semibold, Gray-900
- **Subtext:** "Faqat jamoa uchun" 11px Regular, Gray-500

#### Notes Display

**If no notes:**
- "Eslatma yo'q" 13px Regular, Gray-500, italic
- "+ Eslatma qo'shish" link, Primary-600

**If notes exist:**
- **Notes list:** Vertical stack, gap 12px
- **Each note card:**
  - **Author avatar:** 24px circle, left
  - **Author name:** 13px Medium, Gray-900
  - **Timestamp:** 11px Regular, Gray-500, right-aligned
  - **Note text:** 13px Regular, Gray-700, margin-top 4px
  - **Actions (on hover):** Edit icon, Delete icon (12px, Gray-500)
  - **Card padding:** 12px
  - **Card background:** Gray-50
  - **Card border-radius:** 8px
  - **Max 3 notes visible,** "Ko'proq ko'rish" link if more

#### Add Note Button
- "+ Eslatma" 13px Medium, Primary-600, bottom of section
- Click: Opens Add Note Modal (SCR-I02-03-S01)

---

### SCR-I02-03-S01 Add Private Note Modal

**Trigger:** Click "+ Eslatma qo'shish"

**Modal width:** 500px

**Header:**
- Title: "Shaxsiy eslatma qo'shish" 18px Semibold, Gray-900
- Subtitle: "Bu eslatma faqat jamoangiz ko'radi" 13px Regular, Gray-600

**Content:**

**Textarea:**
- Height: 120px (expandable to 300px)
- Placeholder: "Masalan: Mijoz narx bo'yicha savol berdi..."
- Border: 1px Gray-300, focus: 2px Primary-600
- Font: 14px Regular, Gray-900
- Character count: "0 / 1000" 12px Gray-500, bottom-right

**Rich text options (optional, simple):**
- **Bold** (Ctrl+B)
- *Italic* (Ctrl+I)
- Link (Ctrl+K)

**Pin to top checkbox:**
- ☐ "Eslatmani yuqoriga mahkamlash" 13px Regular
- If checked: Note appears first in list with 📌 icon

**Actions:**
- "Bekor qilish" ghost button
- "Saqlash" primary button
  - Disabled if empty
  - Loading: "Saqlanmoqda..."

**After save:**
- Modal closes
- Note appears in sidebar
- Toast: "Eslatma qo'shildi" Success-500

---

## 4. CONVERSATION DETAILS PANEL

### SCR-I02-04 Info Sidebar — Conversation Details

**Vazifasi:** Joriy chat statistikasi va umumiy ma'lumotlar.

#### Layout
- **Section padding:** 16px 24px
- **Section border-bottom:** 1px solid Gray-200
- **Header:** "Suhbat tafsilotlari" 14px Semibold, Gray-900

#### Stats Grid (2 columns)

| Label | Value Example |
|-------|---------------|
| **Boshlangan** | "15-Jan-2026, 14:30" |
| **Davomiyligi** | "12m 35s" (live timer if ongoing) |
| **Xabarlar soni** | "18 xabar" |
| **Agent** | "Jahongir Otajonov" (avatar 20px + name) |
| **Birinchi javob vaqti** | "1m 45s" |
| **CSAT reytingi** | "⭐ 5.0" (if rated) or "Baholanmagan" |

**Grid style:**
- Label: 12px Medium, Gray-600
- Value: 13px Semibold, Gray-900
- Row gap: 10px
- Column gap: 16px

#### Customer Summary (below grid)

**First Contact:**
- "Birinchi murojaat: 15-Jan-2026" 12px Regular, Gray-600

**Total Chats:**
- "Jami suhbatlar: 3" 12px Regular, Gray-600

**Average CSAT:**
- "O'rtacha CSAT: 4.8 ⭐" 12px Regular, Gray-600

---

## 5. CURRENT ACTIVITY PANEL

### SCR-I02-05 Info Sidebar — Current Activity (Real-time)

**Vazifasi:** Mijoz hozir qaysi sahifada ekanligi, brauzer, qurilma.

#### Layout
- **Section padding:** 16px 24px
- **Section border-bottom:** 1px solid Gray-200
- **Header:** "Hozirgi faollik" 14px Semibold, Gray-900
- **Subtext:** "Real-time kuzatuv" 11px Regular, Primary-600 (with live dot 🔴)

#### Current Page
- **Icon:** 🌐 Globe icon (16px, Gray-500)
- **Page title:** "/pricing — Narxlar sahifasi" 14px Medium, Gray-900
- **Page URL:** "https://company.uz/pricing" 12px Regular, Primary-600, clickable (opens in new tab)
- **Time on page:** "3m 45s" 12px Regular, Gray-500 (live timer)

#### Browser & Device
- **Icon:** 💻 Device icon (16px, Gray-500)
- **Browser:** "Chrome 120.0.6099" 13px Regular, Gray-700
- **OS:** "Windows 11" 13px Regular, Gray-700
- **Device:** "Desktop" badge (Gray-100 bg, 11px)

#### Location (IP-based)
- **Icon:** 📍 Location icon (16px, Gray-500)
- **City/Country:** "Tashkent, Uzbekistan" 13px Regular, Gray-700
- **Timezone:** "GMT+5" 12px Regular, Gray-500

#### Referrer Source
- **Icon:** 🔗 Link icon (16px, Gray-500)
- **Source:** "Google Search" 13px Regular, Gray-700
- **Landing page:** "/homepage" 12px Regular, Gray-500

**Auto-update:** Data updates every 10s via WebSocket

---

## 6. CHAT HISTORY PANEL

### SCR-I02-06 Info Sidebar — Chat History

**Vazifasi:** Mijozning oldingi suhbatlari tarixi.

#### Layout
- **Section padding:** 16px 24px
- **No border-bottom** (oxirgi section)
- **Header:** "Suhbatlar tarixi" 14px Semibold, Gray-900
- **Subtext:** "Jami 3 suhbat" 12px Regular, Gray-600

#### Chat History List

**List style:**
- Vertical stack, gap 12px
- Max 5 items visible, "Barchasini ko'rish" link if more

**Each chat item card:**
- **Date:** "15-Jan-2026" 12px Semibold, Gray-900
- **Subject/Preview:** "Narx bo'yicha savol" 13px Regular, Gray-700 (first message preview, truncated 50 chars)
- **Status badge:** "Resolved" (Success-100 bg), "Active" (Primary-100 bg), "Closed" (Gray-100 bg)
- **Agent:** Avatar 20px + name 11px Gray-600
- **CSAT:** ⭐ 5.0 (if rated)
- **View link:** "Ko'rish →" 12px Primary-600, right-aligned
- **Card style:**
  - Background: Gray-50 on hover
  - Border-radius: 6px
  - Padding: 10px
  - Cursor: pointer
  - Click: Opens that chat in main area (or new tab if different)

**Empty state:**
- "Oldingi suhbatlar yo'q" 13px Regular, Gray-500, italic

---

## ASCII wireframe — Info Sidebar

```
┌──────────── INFO SIDEBAR (300px) ────────────┐
│                                               │
│           [Avatar 64px 🟢]                    │ Customer Info
│         Ahmad Valiyev                         │
│                                               │
│  📧 ahmad@email.uz                            │
│  📱 +998 90 123 45 67                         │
│  📍 Toshkent, Uzbekistan                      │
│  → To'liq profilni ko'rish                    │
├───────────────────────────────────────────────┤
│  Teglar                                       │ Tags Panel
│  [VIP] [Premium] [+ Teg qo'shish]            │
├───────────────────────────────────────────────┤
│  Shaxsiy eslatmalar (Faqat jamoa uchun)      │ Notes Panel
│  ┌─────────────────────────────────────────┐ │
│  │ [Avatar] Jahongir • 2m ago              │ │
│  │ Mijoz narx bo'yicha savol berdi...      │ │
│  └─────────────────────────────────────────┘ │
│  + Eslatma qo'shish                           │
├───────────────────────────────────────────────┤
│  Suhbat tafsilotlari                          │ Conversation
│  Boshlangan: 15-Jan, 14:30                    │ Details
│  Davomiyligi: 12m 35s                         │
│  Xabarlar: 18 xabar                           │
│  Agent: Jahongir Otajonov                     │
│  Birinchi javob: 1m 45s                       │
│  CSAT: ⭐ 5.0                                  │
├───────────────────────────────────────────────┤
│  Hozirgi faollik 🔴 Real-time                 │ Current Activity
│  🌐 /pricing — Narxlar sahifasi               │
│     https://company.uz/pricing                │
│     Time on page: 3m 45s                      │
│  💻 Chrome 120, Windows 11, Desktop           │
│  📍 Tashkent, Uzbekistan (GMT+5)              │
│  🔗 Source: Google Search                     │
├───────────────────────────────────────────────┤
│  Suhbatlar tarixi (Jami 3)                    │ Chat History
│  ┌─────────────────────────────────────────┐ │
│  │ 15-Jan-2026 [Resolved]                  │ │
│  │ Narx bo'yicha savol                     │ │
│  │ [Avatar] Sara  ⭐ 5.0  Ko'rish →         │ │
│  └─────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────┐ │
│  │ 10-Jan-2026 [Closed]                    │ │
│  │ Texnik yordam                           │ │
│  │ [Avatar] Ali  ⭐ 4.5  Ko'rish →          │ │
│  └─────────────────────────────────────────┘ │
│  Barchasini ko'rish →                         │
└───────────────────────────────────────────────┘
```

---

## QUICK ACTIONS PANEL

### SCR-I03 Quick Actions — Action Bar

**Vazifasi:** Chat ustidagi tezkor amallar — transfer, resolve, tag, star, note, link.

#### Layout
- **Joylashuv:** Chat message area ustida, horizontal bar
- **Height:** 56px
- **Background:** White
- **Border-bottom:** 1px solid Gray-200
- **Padding:** 0 24px
- **Display:** Flexbox, space-between

#### Actions (Left side, horizontal)

**6 ta action button:**

| Button | Icon | Label | Shortcut | Action |
|--------|------|-------|----------|--------|
| **Transfer** | 🔄 Transfer icon | "Transfer" | T | Opens Transfer Modal |
| **Resolve** | ✓ Checkmark | "Yopish" | R | Opens Resolve Modal |
| **Tag** | 🏷️ Tag icon | "Teg" | G | Opens Add Tag Modal |
| **Note** | 📝 Note icon | "Eslatma" | N | Opens Add Note Modal |
| **Star** | ⭐ Star icon | "Yulduz" | S | Toggles star (instant) |
| **More** | ⋯ Three dots | "Ko'proq" | — | Dropdown menu |

**Button style:**
- Width: auto, padding 10px 16px
- Height: 36px
- Background: transparent, hover: Gray-100
- Border: 1px Gray-300
- Border-radius: 6px
- Font: 13px Medium, Gray-700
- Icon size: 16px, left of text
- Gap between icon and text: 8px

**Star button active state:**
- Icon: filled star (yellow)
- Background: Warning-50

#### More Dropdown Menu

**Trigger:** Click "Ko'proq" button

**Menu items:**
- Copy chat link 🔗
- Print chat 🖨️
- Export chat 📤
- Mute notifications 🔕
- Block visitor 🚫 (danger, Admin only)
- Delete chat 🗑️ (danger, Admin only)

**Menu style:**
- Width: 200px
- Background: White
- Shadow: 0 10px 15px rgba(0,0,0,0.1)
- Border-radius: 8px
- Padding: 8px
- Item height: 40px, padding 12px
- Item hover: Gray-100

---

## MODALS

### SCR-I04-M01 Transfer Chat Modal

**Trigger:** Click "Transfer" or press `T`

**Modal width:** 500px

**Header:**
- Title: "Chatni boshqa agentga o'tkazish" 20px Semibold, Gray-900
- Subtitle: "Agent tanlang va sababni kiriting" 13px Regular, Gray-600
- Close X button

**Content:**

**Step 1: Select Agent**
- **Agent dropdown (searchable):**
  - Shows online agents first (green dot), then away (yellow), then offline (red)
  - Avatar 32px + Name + Role badge + Status dot + Active chat count
  - Online status indicator: 🟢 Online (`#10B981`), 🟡 Away (`#F59E0B`), 🔴 Offline (`#EF4444`)
  - Search to filter
  - Sort: Online (load az→ko'p) → Away → Offline
  - "Hamma agentlar ko'ring" link (shows offline agents too)

**Agent availability indicator:**
- "3 faol chat" — Success-600 (low load)
- "7 faol chat" — Warning-600 (medium load)
- "12 faol chat" — Error-600 (high load)

**Step 2: Reason (optional)**
- **Textarea:** 80px height
- Placeholder: "Transfer sababi (ixtiyoriy)"
- Character count: 0 / 200

**Step 3: Internal Note (optional)**
- **Textarea:** 60px height
- Placeholder: "Yangi agent uchun eslatma"
- Character count: 0 / 200

**Options:**
- ☑ "Mijozga xabar yuborish: Sizni boshqa agent bilan bog'layman"
- ☐ "Chatni o'zimda ham saqlash" (copy chat, not transfer)

**Actions:**
- "Bekor qilish" ghost button
- "Transfer qilish" primary button
  - Disabled if no agent selected
  - Loading: "Transfer qilinmoqda..."

**After transfer:**
- Modal closes
- Chat disappears from current agent's queue
- Toast: "Chat Sariga transfer qilindi" Success-500
- Message sent to customer: "Sizni Sara bilan bog'layapman"

---

### SCR-I04-M02 Resolve Chat Modal

**Trigger:** Click "Yopish" or press `R`

**Modal width:** 450px

**Header:**
- Title: "Chatni yopish" 20px Semibold, Gray-900
- Subtitle: "Muammo hal qildingizmi?" 13px Regular, Gray-600

**Content:**

**Resolution Status:**
- ⦿ **Hal qilindi** (default selected)
- ◯ **Hal qilinmadi** (with reason dropdown)
  - Reasons: "Mijoz javob bermadi", "Muammo takrorlanishi mumkin", "Qo'shimcha tekshiruv kerak"

**Final Message (optional):**
- **Textarea:** 100px height
- Placeholder: "Oxirgi xabar (ixtiyoriy)"
- Quick inserts: "Rahmat!", "Xayr!", "Yordam uchun rahmat"
- Character count: 0 / 500

**CSAT Survey Option:**
- ☑ "CSAT so'rovnomasi yuborish" (default checked)
- Info text: "Mijozdan 1-5 yulduz baholash so'raladi"

**Tags:**
- Auto-suggest tags based on conversation keywords
- E.g., "Billing", "Technical", "Pricing"
- Click to add tag to chat

**Actions:**
- "Bekor qilish" ghost button
- "Yopish" primary button (Success-600 bg)
  - Loading: "Yopilmoqda..."

**After resolve:**
- Modal closes
- Chat moves to "Closed" tab
- If CSAT enabled: CSAT message sent to customer
- Toast: "Chat yopildi" Success-500
- Optional final message sent

---

### SCR-I04-M03 File Upload Modal

**Trigger:** 
- Click 📎 attachment icon in message input
- Drag & drop file onto chat area
- Paste image (Ctrl+V)

**Modal width:** 520px

**Header:**
- Title: "Fayl yuborish" 18px Semibold, Gray-900
- Close X

**Content:**

**Upload Area:**
- **Drag & drop zone:** 480×200px
  - Dashed border: 2px Gray-300
  - Icon: 📁 Folder icon (48px, Gray-400)
  - Text: "Faylni bu yerga tashlang" 16px Medium, Gray-700
  - Subtext: "yoki fayl tanlash uchun bosing" 13px Regular, Gray-500
  - **On drag-over:** Border: Primary-600, background: Primary-50
- **Click to browse:** Opens file picker

**Allowed file types:**
- Images: JPG, PNG, GIF, WebP
- Documents: PDF, DOC, DOCX, XLS, XLSX, TXT
- Archives: ZIP (future)
- Max size: 10 MB (Free plan), 25 MB (Pro+)

**File Preview (after select):**
- **Image files:** Thumbnail 120×120px
- **Document files:** File icon + name + size
- **File card style:**
  - Border: 1px Gray-300
  - Border-radius: 8px
  - Padding: 16px
  - Background: Gray-50
- **File info:**
  - Filename: 14px Semibold, Gray-900, truncated
  - File size: "2.4 MB" 13px Regular, Gray-600
  - File type: "PDF" badge (Gray-100 bg)
- **Remove button:** X icon (16px, Gray-500, top-right)

**Multiple files:**
- Grid layout, 2 columns
- Max 5 files per upload
- "Yana fayl qo'shish" link (if < 5 files)

**Caption (optional):**
- **Textarea:** 60px height, below preview
- Placeholder: "Fayl haqida izoh (ixtiyoriy)"
- Character count: 0 / 200

**Actions:**
- "Bekor qilish" ghost button
- "Yuborish" primary button
  - Shows file count: "1 fayl yuborish"
  - Loading: Progress bar (0-100%)
  - Disabled during upload

**Upload progress:**
- Progress bar below each file card
- Percentage: "45%" center
- Speed: "1.2 MB/s" right side
- Cancel upload: X icon

**After upload:**
- Modal closes
- File appears in chat as message
- Toast: "Fayl yuborildi" Success-500

**Error handling:**
- File too large: "Fayl 10 MB dan oshmasligi kerak" Error-500
- Unsupported format: "Fayl formati qo'llab-quvvatlanmaydi" Error-500
- Upload failed: "Yuklab bo'lmadi. Qayta urinib ko'ring" Error-500

---

### SCR-I04-M04 Canned Responses (Saved Replies) Popup

**Trigger:** 
- Type `/` in message input
- Click 📋 Saved replies icon
- Keyboard shortcut: `/` then text to search

**Popup style:**
- Width: 400px
- Height: auto (max 500px, scrollable)
- Position: Above message input (floating)
- Background: White
- Border-radius: 12px
- Shadow: 0 20px 25px rgba(0,0,0,0.15)
- Z-index: 100

**Header:**
- Title: "Tayyor javoblar" 16px Semibold, Gray-900
- Search input: "Qidirish..." placeholder, icon 🔍
- Close X button

**Content:**

**Category Tabs:**
- Horizontal tabs: Barchasi | Support | Sales | Billing | Technical
- Active tab: Primary-600 text, bottom border 2px

**Responses List:**
- Vertical list, gap 8px
- Each response card:
  - **Shortcode:** "/hello" 12px Semibold, Primary-600, monospace
  - **Title:** "Salomlashish" 14px Medium, Gray-900
  - **Preview:** "Salom! Sizga qanday yordam..." 13px Regular, Gray-600, truncated 100 chars
  - **Usage count:** "47 marta ishlatilgan" 11px Regular, Gray-500, right
  - **Card style:**
    - Padding: 12px
    - Border-radius: 6px
    - Hover: Gray-100 background
    - Cursor: pointer
- **Max 10 visible,** scroll for more

**Popular responses (quick access, top of list):**
- 3 most used responses as chips
- Pill badges: "Salom" "Rahmat" "Kuting"
- Click chip: Instantly inserts text

**Actions:**
- Click response card: Inserts text + closes popup
- Hover: "Ko'rish" and "Tahrirlash" icons appear (12px, right side)
- "+ Yangi javob yaratish" link, bottom

**Keyboard navigation:**
- Arrow keys: Navigate list
- Enter: Select response
- Esc: Close popup
- Type to search: Real-time filter

**Empty state (no results):**
- "Hech narsa topilmadi" 14px Regular, Gray-600
- "Yangi javob yaratish" link

---

## ASCII wireframe — Transfer Modal

```
┌────────────────────────────────────┐
│  Chatni boshqa agentga o'tkazish  │  Modal Header
│  Agent tanlang va sababni kiriting│  Subtitle
│                               [X]  │  Close button
├────────────────────────────────────┤
│                                    │
│  Agent tanlash *                   │  Dropdown label
│  ┌──────────────────────────────┐ │
│  │ [▼] Sarani tanlang...        │ │  Agent dropdown
│  └──────────────────────────────┘ │
│                                    │
│  ┌──────────────────────────────┐ │  Dropdown expanded:
│  │ [Avatar🟢] Jahongir Otajonov │ │
│  │            Manager (3 chat)  │ │
│  │ [Avatar🟢] Sara Karimova     │ │
│  │            Operator (1 chat) │ │
│  │ [Avatar⚪] Ali Toshmatov      │ │
│  │            Operator (Offline)│ │
│  └──────────────────────────────┘ │
│                                    │
│  Transfer sababi (ixtiyoriy)       │
│  ┌──────────────────────────────┐ │
│  │ [textarea 80px height]       │ │
│  │                              │ │
│  └──────────────────────────────┘ │
│                              0/200│
│                                    │
│  Yangi agent uchun eslatma         │
│  ┌──────────────────────────────┐ │
│  │ [textarea 60px]              │ │
│  └──────────────────────────────┘ │
│                              0/200│
│                                    │
│  ☑ Mijozga xabar yuborish          │  Checkbox
│  ☐ Chatni o'zimda ham saqlash      │  Checkbox
│                                    │
├────────────────────────────────────┤
│          [Bekor qilish]            │  Actions
│                [Transfer qilish]   │
└────────────────────────────────────┘
```

---

## ASCII wireframe — Resolve Modal

```
┌────────────────────────────────┐
│  Chatni yopish                 │
│  Muammo hal qildingizmi?  [X]  │
├────────────────────────────────┤
│                                │
│  ⦿ Hal qilindi                 │  Radio selected
│  ◯ Hal qilinmadi               │  Radio
│                                │
│  Oxirgi xabar (ixtiyoriy)      │
│  ┌──────────────────────────┐ │
│  │ [textarea 100px]         │ │
│  │                          │ │
│  │                          │ │
│  └──────────────────────────┘ │
│  [Rahmat!] [Xayr!] [Yordam]  │  Quick inserts
│                        0/500  │
│                                │
│  ☑ CSAT so'rovnomasi yuborish  │  Checkbox
│  ℹ️ Mijozdan 1-5 yulduz         │  Info text
│     baholash so'raladi         │
│                                │
│  Auto-suggested tags:          │
│  [+ Billing] [+ Technical]     │  Tag suggestions
│                                │
├────────────────────────────────┤
│    [Bekor qilish]    [Yopish] │  Actions
└────────────────────────────────┘
```

---

## Components Specification

### 1. Info Sidebar Component
**Usage:** Chat detail right panel  
**Props:** contactId, chatId  
**Sections:** 6 collapsible sections  
**State:** Expanded/Collapsed per section  
**Refresh:** Real-time via WebSocket

### 2. Customer Info Card Component
**Usage:** Info sidebar section  
**Props:** name, email, phone, location, avatar, status  
**Actions:** View profile, Edit contact  
**Size:** 300×260px

### 3. Tag Badge Component
**Usage:** Tags panel, throughout app  
**Props:** label, color, removable, onClick  
**Variants:** 5 color schemes  
**Size:** auto × 24px

### 4. Note Card Component
**Usage:** Private notes list  
**Props:** author, timestamp, text, editable, deletable  
**Actions:** Edit, Delete  
**Size:** 276×auto

### 5. Chat History Item Component
**Usage:** Chat history list  
**Props:** date, subject, status, agent, csat, chatId  
**Actions:** View chat  
**Size:** 276×80px

### 6. Quick Action Button Component
**Usage:** Action bar  
**Props:** icon, label, shortcut, onClick, variant  
**States:** Default, Hover, Active, Disabled  
**Size:** auto × 36px

### 7. Transfer Modal Component
**Usage:** Transfer chat action  
**Props:** currentAgent, availableAgents, chatId  
**Form:** Agent select, reason, note, options  
**Size:** 500×auto modal

### 8. Resolve Modal Component
**Usage:** Close chat action  
**Props:** chatId, enableCSAT  
**Form:** Status, message, tags  
**Size:** 450×auto modal

### 9. File Upload Modal Component
**Usage:** Send files  
**Props:** maxSize, allowedTypes, multiple  
**Features:** Drag-drop, preview, progress  
**Size:** 520×auto modal

### 10. Canned Responses Popup Component
**Usage:** Quick replies  
**Props:** responses (array), categories  
**Features:** Search, keyboard nav  
**Size:** 400×500px popup

---

## User Flow

```
[Open Chat] → [Info Sidebar loads]
       ↓
  ┌────┼────────────┬─────────┬─────────┬─────────┐
  ↓    ↓            ↓         ↓         ↓         ↓
[View][Transfer][Resolve][Add Tag][Add Note][Star]
Info     ↓            ↓         ↓         ↓         ↓
       Modal       Modal     Modal     Modal    Toggle
         ↓            ↓         ↓         ↓         ↓
      [Select     [Status] [Select]  [Write]   [Starred]
       Agent]        ↓      Tag]     Note]
         ↓        [Message]   ↓         ↓
      [Reason]      ↓      [Save]   [Save]
         ↓        [CSAT?]     ↓         ↓
      [Transfer]    ↓      Success  Success
         ↓        [Close]
      Success       ↓
                 Success

[Attach File] → [Upload Modal]
       ↓               ↓
  [Drag/Browse]   [Preview]
       ↓               ↓
  [Select File]   [Caption?]
       ↓               ↓
  [Preview]       [Send]
       ↓               ↓
  [Upload Progress]  Success
       ↓
  [Sent in Chat]

[Type /] → [Canned Responses Popup]
       ↓               ↓
  [List appears]  [Search/Filter]
       ↓               ↓
  [Select]        [Text inserted]
       ↓               ↓
  [Popup closes]  [Continue typing]
```

---

## Technical Requirements

### Real-time Data Sync
- WebSocket connection for:
  - Customer online status
  - Current page tracking (updates every 5s)
  - Chat duration timer
  - New notes from other agents
  - Chat transfers
- Optimistic UI updates for instant feedback

### API Endpoints
- `GET /chats/:id/contact` — Contact info
- `POST /chats/:id/tags` — Add tag
- `DELETE /chats/:id/tags/:tagId` — Remove tag
- `POST /chats/:id/notes` — Add private note
- `GET /chats/:id/history` — Chat history
- `POST /chats/:id/transfer` — Transfer chat
- `POST /chats/:id/resolve` — Resolve chat
- `POST /chats/:id/files` — Upload file
- `GET /canned-responses` — Saved replies list

### Performance
- Info sidebar lazy load sections (visible viewport only)
- Chat history pagination (5 items, load more)
- File upload: chunked upload for large files
- Image optimization: compress before upload
- Debounce search inputs (300ms)

### Caching Strategy
- Contact info: cache 5 minutes
- Tags: cache 10 minutes, invalidate on change
- Saved responses: cache 30 minutes
- Chat history: cache 2 minutes

### Validation
- Email: RFC 5322
- Phone: E.164 format
- File size: Client-side check before upload
- Note length: 1000 chars max
- Reason: 200 chars max

---

## Accessibility

### Keyboard Navigation
- Tab order: Sidebar sections → Quick actions → Message input
- Shortcuts:
  - `T` — Transfer modal
  - `R` — Resolve modal
  - `G` — Add tag
  - `N` — Add note
  - `S` — Toggle star
  - `A` — Attach file
  - `/` — Canned responses
- Esc: Close modals/popups
- Enter: Submit forms

### ARIA Labels
- Info sidebar: `aria-label="Customer information"`
- Quick actions: `aria-label="Chat actions"`
- Modals: `role="dialog"`, `aria-modal="true"`
- Form fields: `aria-required`, `aria-invalid`
- Live regions: `aria-live="polite"` for status updates

### Screen Reader
- Announce chat transfers: "Chat transferred to Sara"
- Announce chat resolved: "Chat closed successfully"
- Announce file upload: "File uploading... 45%"
- Note added: "Private note added"
- Tag added: "Tag VIP added"

### Focus Management
- Modal open: Focus first input
- Modal close: Return focus to trigger button
- Dropdown open: Focus search input
- Error: Focus first invalid field

---

## Micro-interactions

1. **Info sidebar sections:** Smooth expand/collapse (300ms)
2. **Tag add:** Fade in + slight scale (200ms)
3. **Tag remove:** Fade out + scale down (150ms)
4. **Note save:** Success checkmark animation
5. **Star toggle:** Scale pulse + color change (200ms)
6. **Modal open:** Backdrop fade (200ms) + modal scale 0.95→1 (250ms)
7. **File upload:** Progress bar smooth fill + percentage count-up
8. **Canned response select:** Highlight + insert with typing effect
9. **Quick action hover:** Lift shadow + slight scale (150ms)
10. **Transfer success:** Confetti animation (optional)
11. **Resolve success:** Checkmark animation + fade out chat (400ms)
12. **Real-time page update:** Subtle pulse on "Current Activity" section

---

## Figma uchun komponentlar

```
inbox-advanced/
├── info-sidebar/
│   ├── customer-info-card
│   ├── tags-panel
│   ├── notes-panel
│   ├── conversation-details-panel
│   ├── current-activity-panel
│   └── chat-history-panel
├── quick-actions/
│   ├── action-bar
│   ├── action-button
│   └── more-dropdown
├── modals/
│   ├── transfer-modal
│   ├── resolve-modal
│   ├── add-tag-modal
│   ├── add-note-modal
│   ├── file-upload-modal
│   └── canned-responses-popup
├── components/
│   ├── tag-badge
│   ├── note-card
│   ├── chat-history-item
│   ├── agent-select-dropdown
│   └── file-preview-card
└── states/
    ├── loading-skeleton
    ├── empty-state
    └── error-state
```

---

## Figma AI uchun prompt

```
Design an advanced inbox system with a right sidebar and modal overlays for a customer support platform.

Info Sidebar (300px wide):
- 6 collapsible sections: Customer Info, Tags, Private Notes, Conversation Details, Current Activity, Chat History
- Customer Info: 64px avatar with online status, name, email, phone, location, "View profile" link
- Tags: Pill badges with colors (VIP=primary, Premium=indigo, etc.), removable X, "+ Add tag" button
- Private Notes: Note cards with author avatar, timestamp, text, edit/delete actions, "+ Add note" button
- Conversation Details: 2-column stats grid (Started, Duration, Messages, Agent, Response time, CSAT)
- Current Activity: Real-time page tracking with live dot, browser/device info, location, referrer
- Chat History: Previous chat cards with date, preview, status badge, agent, CSAT, "View" link

Quick Actions Bar (above chat, 56px height):
- 6 horizontal buttons: Transfer, Resolve, Tag, Note, Star (toggle), More (dropdown)
- Button style: transparent bg, gray border, icon+text, hover gray-100
- Star active: filled yellow star, warning-50 bg

Modals:
1. Transfer Modal (500px): Agent searchable dropdown with avatars/status/load, reason textarea, internal note textarea, 2 checkboxes (notify customer, keep copy), actions: Cancel + Transfer
2. Resolve Modal (450px): Radio buttons (Resolved/Unresolved), final message textarea with quick inserts, CSAT survey checkbox with info text, auto-suggested tags, actions: Cancel + Close (green)
3. File Upload Modal (520px): Drag-drop zone (480×200px, dashed border), file preview cards with thumbnail/name/size/remove, multiple files grid (2 cols), caption textarea, progress bars, actions: Cancel + Send
4. Canned Responses Popup (400×500px): Search input, category tabs (All, Support, Sales, Billing, Technical), responses list with shortcode/title/preview/usage count, keyboard navigation, "+ Create new" link
5. Add Tag Modal (400px): Searchable dropdown with existing tags + create new, popular tags quick select, selected tags preview, actions: Cancel + Add
6. Add Note Modal (500px): Textarea 120px with rich text options (bold, italic, link), "Pin to top" checkbox, character count 0/1000, actions: Cancel + Save

Design system:
- Primary: #4F46E5, Success: #10B981, Warning: #F59E0B, Error: #EF4444
- Inter font, 8px grid, 6-12px border-radius
- Shadows: modals shadow-xl, cards shadow-md, hovers shadow-lg
- Animations: 150-300ms ease transitions
- Responsive: Desktop-first (1440px)

Include:
- Hover states (gray-100 bg, shadow lift)
- Loading states (skeletons, spinners, progress bars)
- Error states (red border, error text)
- Empty states (icon, text, CTA)
- Online status indicators (green pulse animation)
- Real-time live dot (red pulse)
- Keyboard shortcuts hints
- WCAG 2.1 AA compliant contrast ratios
```

---

**Fayl oxiri — 12-inbox-advanced.md kengaytirilgan versiyasi**  
**Qatorlar:** ~1400+ (10x kengaydi)  
**Kiritilgan:** 6 ta panel batafsil, 6 ta modal, 3 ta ASCII wireframe, 10 ta component, User flow, Technical requirements, Accessibility, Micro-interactions
