# QULAY CHAT — Global Search (CMD+K)

## Umumiy Ma'lumot

Global Search — QULAY CHAT platformasining barcha qismlarida mavjud bo'lgan tezkor qidiruv xususiyati. Foydalanuvchi istalgan vaqtda `Ctrl+K` (Windows/Linux) yoki `Cmd+K` (Mac) tugmasini bosib, qidiruv modalini ochishi va platformaning har qanday bo'limida tezkor qidirish mumkin.

**Ilhom:** Notion, Linear, Raycast, Spotlight kabi zamonaviy command palette dizaynlari

**Maqsad:**
- Tez va samarali navigatsiya platformada
- Chatlar, kontaktlar, agentlar, KB maqolalari, sozlamalarga tezkor kirish
- Keyboard-first workflow — minimal mouse ishlatish
- Professional user experience

---

## 1. MODAL TUZILISHI

### Trigger (Ochish)

**Keyboard Shortcut:**
- **Windows/Linux:** `Ctrl + K`
- **Mac:** `Cmd + K`
- **Alternative:** `Ctrl/Cmd + /` (slash)

**Trigger Button:**
- **Joylashuv:** Header'da markazda, logo va o'ng taraf elementlar orasida
- **Ko'rinishi:** Search input field placeholder "Qidirish... (Ctrl+K)"
- **Kenglik:** 320px (min), max 480px
- **Balandlik:** 40px
- **Background:** `#F3F4F6` (Gray-100)
- **Border:** none (default), 2px `#4F46E5` (focus)
- **Border-radius:** 8px
- **Icon:** Search (magnifying glass), 16px, `#6B7280`
- **Placeholder shrift:** 14px Regular, `#6B7280`
- **Shortcut badge:** "Ctrl+K" — 12px Medium, `#9CA3AF`, `#E5E7EB` background, 4px padding, 4px radius

**Click behavior:** Input field'ga klik qilsa ham modal ochiladi (agar qayta design qilmasdan)

### Modal Layout

**Overlay:**
- **Background:** `rgba(0, 0, 0, 0.5)` — 50% opacity qora
- **Backdrop blur:** 4px (optional, agar browser support qilsa)
- **Z-index:** 1000
- **Click:** Overlay'ga klik qilsa modal yopiladi

**Modal Container:**
- **O'lcham:** 640px kenglik × auto balandlik (max 600px)
- **Joylashuv:** Ekranning yuqori qismida markazlashgan, 80px margin-top
- **Background:** `#FFFFFF`
- **Border-radius:** 12px
- **Shadow:** `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` (large shadow)
- **Padding:** 0 (sections ichida padding bor)

### Modal Animation

**Open (ochilish):**
- Scale: 0.95 → 1
- Opacity: 0 → 1
- Transform: translateY(-10px) → translateY(0)
- Duration: 200ms
- Easing: ease-out

**Close (yopilish):**
- Scale: 1 → 0.95
- Opacity: 1 → 0
- Transform: translateY(0) → translateY(-10px)
- Duration: 150ms
- Easing: ease-in

---

## 2. MODAL TARKIBI

### Section 1: Search Input

**Layout:**
- **Padding:** 20px
- **Border-bottom:** 1px solid `#E5E7EB` (Gray-300)

**Input Field:**
| Parametr | Qiymat |
|----------|--------|
| Kenglik | 100% (600px) |
| Balandlik | 48px |
| Background | Transparent |
| Border | none |
| Shrift | 16px Regular |
| Placeholder | "Chatlar, kontaktlar, sahifalar va boshqalarni qidiring..." |
| Placeholder color | `#9CA3AF` (Gray-400) |
| Text color | `#111827` (Gray-900) |
| Icon | Search (magnifying glass), 20px, `#6B7280`, chap tomonda 16px |
| Icon padding | 0 12px 0 0 (icon va input orasida) |
| Auto-focus | Ha — modal ochilganda avtomatik fokus input'ga |
| Clear button | X icon, 16px, `#9CA3AF`, o'ng tomonda, faqat text mavjud bo'lsa ko'rinadi |

**Loading Indicator:**
- **Icon:** Spinner (rotating circle), 16px, `#4F46E5` (Primary-600)
- **Joylashuv:** Input o'ng tomonida, clear button o'rnida (agar qidiruv jarayonida)
- **Animation:** Rotate 360deg, 600ms linear infinite

### Section 2: Quick Actions / Recent Searches

Agar input bo'sh bo'lsa (hech narsa kiritilmagan), "Recent Searches" yoki "Quick Actions" ko'rsatiladi.

**Header:**
- **Text:** "So'nggi qidiruvlar" yoki "Tezkor harakatlar"
- **Shrift:** 12px Medium (500), `#6B7280` (Gray-500)
- **Padding:** 12px 20px 8px 20px
- **Text-transform:** uppercase
- **Letter-spacing:** 0.5px

**Recent Search Items:**

| Parametr | Qiymat |
|----------|--------|
| O'lcham | 100% kenglik × 48px balandlik |
| Padding | 12px 20px |
| Background | transparent (default), `#F3F4F6` (hover), `#E0E7FF` (selected) |
| Border-radius | 0 (full-width) |
| Gap | 12px (icon va text orasida) |

**Item tarkibi:**
- **Icon:** Clock (recent), 16px, `#9CA3AF` (Gray-400)
- **Text:** Search query matni — 14px Regular, `#374151` (Gray-700)
- **Delete icon:** X icon, 14px, `#9CA3AF`, o'ng tomonda, hover'da ko'rinadi
- **Keyboard hint:** Yo'q (recent items klaviatura bilan faqat navigate qilinadi)

**Quick Actions (agar recent searches bo'lmasa):**

| Action | Icon | Text | Destination |
|--------|------|------|-------------|
| Yangi chat | MessageSquare | Yangi chat boshlash | Inbox (yangi chat modal) |
| Kontakt qo'shish | UserPlus | Yangi kontakt yaratish | Contacts (create modal) |
| Sozlamalarga o'tish | Settings | Sozlamalarga o'tish | Settings page |
| Yordam | HelpCircle | Yordam markazini ochish | Help/Documentation |

### Section 3: Search Results

Foydalanuvchi biror narsa kiritganda, real-time search results ko'rsatiladi.

**Category Header:**
- **Text:** Category nomi — "Chatlar", "Kontaktlar", "Agentlar", "KB Maqolalari", "Sahifalar"
- **Shrift:** 12px Medium (500), `#6B7280` (Gray-500)
- **Padding:** 12px 20px 8px 20px
- **Text-transform:** uppercase
- **Letter-spacing:** 0.5px
- **Background:** `#F9FAFB` (Gray-50)
- **Border-top:** 1px solid `#E5E7EB` (agar birinchi category bo'lmasa)

**Result Item:**

| Parametr | Qiymat |
|----------|--------|
| O'lcham | 100% kenglik × 56px balandlik |
| Padding | 12px 20px |
| Background | transparent (default), `#F3F4F6` (hover), `#E0E7FF` (selected/focused) |
| Border-left | 3px solid transparent (default), 3px solid `#4F46E5` (selected) |
| Cursor | pointer |

**Item tarkibi (layout: horizontal, gap 12px):**

1. **Icon / Avatar:**
   - **O'lcham:** 32px × 32px
   - **Type:** Category'ga qarab — Chat icon, Contact avatar/initials, Agent avatar, Article icon, Page icon
   - **Border-radius:** 6px (chat/page icons), 9999px (avatars)
   - **Background:** Icon uchun `#F3F4F6`, avatar uchun Primary-100 yoki image

2. **Content (flex: 1):**
   - **Title:** Result nomi — 14px Medium (500), `#111827` (Gray-900)
   - **Subtitle:** Qo'shimcha ma'lumot — 13px Regular, `#6B7280` (Gray-500)
     - **Chat:** "2 daqiqa oldin • Sardor Azimov"
     - **Contact:** "sardor@example.com • +998 90 123 45 67"
     - **Agent:** "Operator • Online" (status badge yashil)
     - **KB Article:** "Sozlamalar bo'limida"
     - **Page:** "Settings › Profile"
   - **Title highlight:** Qidiruv so'zi match qilgan qism bold yoki `#4F46E5` rangda
   - **Layout:** Vertical, gap 2px

3. **Metadata (o'ng tomonda):**
   - **Badge (ixtiyoriy):** Status yoki type badge
     - **Chat:** "Active" (green), "Resolved" (gray)
     - **Agent:** "Online" (green), "Away" (yellow), "Offline" (gray)
   - **Keyboard shortcut hint:** `↵` (Enter) icon — 20px, `#9CA3AF`

**Result Item hover/focus:**
- Background: `#F3F4F6` (Gray-100)
- Border-left: 3px solid `#4F46E5` (Primary-600)
- Title color: `#4F46E5`
- Transition: 100ms ease

**Result Item selected (keyboard navigation):**
- Background: `#E0E7FF` (Primary-100)
- Border-left: 3px solid `#4F46E5`
- Title color: `#4F46E5`

### Section 4: Empty State

Agar qidiruv natijalari topilmasa.

**Layout:**
- **Padding:** 60px 40px
- **Text-align:** center

**Tarkibi:**
- **Icon:** Search (magnifying glass) + X, 48px, `#D1D5DB` (Gray-300)
- **Title:** "Hech narsa topilmadi" — 16px Medium (500), `#374151` (Gray-700)
- **Description:** "Boshqa kalit so'z bilan qidiring yoki filter'larni o'zgartiring" — 14px Regular, `#9CA3AF` (Gray-400)
- **Margin:** icon → title: 16px, title → description: 8px

### Section 5: Footer

**Layout:**
- **Background:** `#F9FAFB` (Gray-50)
- **Border-top:** 1px solid `#E5E7EB` (Gray-300)
- **Padding:** 12px 20px
- **Display:** flex, justify-between, align-center

**Chap tomon — Keyboard Hints:**

Horizontal gap 16px, har bir hint:
- **Icon + Text:** Keyboard icon 14px + text 12px Regular `#6B7280`
- **Hint 1:** `↑↓` + "Navigate"
- **Hint 2:** `↵` + "Select"
- **Hint 3:** `Esc` + "Close"

**O'ng tomon — Powered by / Settings:**

- **Text:** "Powered by Algolia" — 12px Regular, `#9CA3AF`, link (underline on hover)
- **Settings icon (ixtiyoriy):** Settings gear icon, 16px, `#9CA3AF`, click → search settings modal

---

## 3. SEARCH CATEGORIES

### Chat Results (Chatlar)

**Icon:** MessageSquare, 32px, `#10B981` background (Success-50), `#059669` icon color

**Title:** Chat participant nomi yoki chat subject
- Misol: "Sardor Azimov bilan chat"

**Subtitle:** Oxirgi xabar snippet + timestamp
- Misol: "Men sizga keyinroq qo'ng'iroq qilaman... • 2 daqiqa oldin"

**Badge:** Chat status — Active (green), Resolved (gray), Pending (yellow)

**Click action:** Chat oynasini ochadi (Inbox modulida)

### Contact Results (Kontaktlar)

**Icon:** Contact avatar yoki initials, 32px, doira

**Title:** Contact full name
- Misol: "Sardor Azimov"

**Subtitle:** Email + Phone
- Misol: "sardor@example.com • +998 90 123 45 67"

**Badge:** Contact segment yoki tag (ixtiyoriy)
- Misol: "VIP", "O'zbekiston"

**Click action:** Contact detail page'ni ochadi (Contacts modulida)

### Agent Results (Agentlar / Team Members)

**Icon:** Agent avatar, 32px, doira

**Title:** Agent full name
- Misol: "Alisher Karimov"

**Subtitle:** Role + Status
- Misol: "Operator • Online" (status badge yashil dot bilan)

**Badge:** Status badge — Online (green), Away (yellow), Offline (gray)

**Click action:** Agent profile page'ni ochadi (Team modulida)

### Knowledge Base Articles (KB Maqolalari)

**Icon:** Book yoki Document icon, 32px, `#8B5CF6` background (Purple-50), `#7C3AED` icon color

**Title:** Article title
- Misol: "Yangi chat qanday boshlanadi?"

**Subtitle:** Category + views count (ixtiyoriy)
- Misol: "Sozlamalar bo'limida • 234 ko'rilgan"

**Badge:** Helpful rate (ixtiyoriy)
- Misol: "87% foydali" (green)

**Click action:** Article page'ni ochadi (Knowledge Base modulida yoki yangi tab'da public portal)

### Pages (Sahifalar / Modules)

**Icon:** Page-specific icon (Settings, Analytics, Billing, etc.), 32px

**Title:** Page nomi
- Misol: "Tariflar va to'lovlar"

**Subtitle:** Breadcrumb path
- Misol: "Settings › Billing › Subscription"

**Badge:** Yo'q

**Click action:** Ushbu sahifaga navigatsiya qiladi

### Commands (Buyruqlar)

Agar command palette kabi buyruqlar qo'shilsa (ixtiyoriy).

**Icon:** Lightning bolt yoki Zap icon, 32px, `#F59E0B` background (Warning-50), `#D97706` icon color

**Title:** Command nomi
- Misol: "Yangi chat boshlash"

**Subtitle:** Command description
- Misol: "Tezkor yangi chat oynasini ochish"

**Badge:** Keyboard shortcut (ixtiyoriy)
- Misol: `Ctrl + N`

**Click action:** Commandni bajaradi (modal ochadi, action trigger qiladi, etc.)

---

## 4. KEYBOARD NAVIGATION

### Shortcut'lar

| Tugma | Action |
|-------|--------|
| `Ctrl/Cmd + K` | Modal'ni ochish |
| `Ctrl/Cmd + /` | Modal'ni ochish (alternative) |
| `Esc` | Modal'ni yopish |
| `↑` (Arrow Up) | Yuqoridagi result'ga o'tish |
| `↓` (Arrow Down) | Pastdagi result'ga o'tish |
| `Enter` | Selected result'ni ochish |
| `Ctrl/Cmd + ↵` | Result'ni yangi tab'da ochish (agar qo'llab-quvvatlansa) |
| `Backspace` | Input'dan text o'chirish (agar cursor boshida bo'lsa, recent search'ni o'chirish) |
| `Tab` | Keyingi category'ga o'tish (ixtiyoriy) |
| `Shift + Tab` | Oldingi category'ga o'tish (ixtiyoriy) |

### Navigation Behavior

**Initial state (modal ochilganda):**
- Input field avtomatik fokusda
- Agar recent searches bo'lsa, birinchi item selected

**Arrow navigation:**
- `↓` bosish: keyingi item'ga o'tadi, agar oxirgi item bo'lsa, birinchi item'ga qaytadi (circular)
- `↑` bosish: oldingi item'ga o'tadi, agar birinchi item bo'lsa, oxirgi item'ga o'tadi (circular)
- Category header'lar skip qilinadi (faqat result items navigate qilinadi)

**Enter key:**
- Selected item'ni ochadi (navigatsiya yoki action trigger)
- Agar hech narsa selected bo'lmasa (faqat input fokusda), birinchi result'ni ochadi

**Esc key:**
- Modal'ni yopadi
- Input text clear qilinmaydi (keyingi ochilganda saqlanadi — ixtiyoriy)

---

## 5. SEARCH LOGIC

### Real-time Search

**Debounce:**
- **Delay:** 300ms — foydalanuvchi yozishni to'xtatgandan keyin 300ms kutadi, so'ng qidiruvni boshlaydi
- **Purpose:** Har bir keystroke'da API call qilmaslik, server load'ni kamaytirish

**Minimum characters:**
- **Min:** 2 characters — 2 belgidan kam bo'lsa qidirmaydi
- **Reason:** 1 character juda ko'p noise natija beradi

**Live update:**
- Har safar input o'zgarganda (debounce'dan keyin) yangi qidiruv boshlanadi
- Eski natijalar o'chiriladi, yangilari ko'rsatiladi
- Loading spinner ko'rsatiladi

### Search Scope

**Default scope:** Barcha categories (Chats, Contacts, Agents, KB, Pages)

**Category order (priority):**
1. Chats — eng ko'p ishlatiladi
2. Contacts — ikkinchi priority
3. Agents — team collaboration uchun
4. KB Articles — help uchun
5. Pages — navigatsiya uchun

**Max results per category:**
- **Chats:** 5 results
- **Contacts:** 5 results
- **Agents:** 3 results
- **KB Articles:** 3 results
- **Pages:** 3 results
- **Total:** ~19 results max (scroll'sa ko'proq)

### Search Algorithm

**Matching:**
- **Exact match:** To'g'ridan-to'g'ri match qilgan natijalar birinchi
- **Partial match:** Qisman match (substring) ikkinchi
- **Fuzzy match (ixtiyoriy):** Typo yoki yaqin so'zlar (Algolia, Fuse.js kabi)

**Ranking factors:**
1. **Relevance:** Match quality (exact > partial > fuzzy)
2. **Recency:** Yangi chatlar/contacts yuqorida
3. **Frequency:** Ko'proq ishlatiladigan items yuqorida (user-specific)
4. **Manual boost:** VIP contacts yoki pinned chats yuqorida

**Highlight:**
- Search query match qilgan text qismi bold yoki primary color'da highlight qilinadi
- Misol: Query "sardor" → Result title "**Sardor** Azimov"

### API Endpoints

**GET /api/v1/search:**
- **Query params:**
  - `q` — Search query (string, min 2 characters)
  - `categories` — Comma-separated list: `chats,contacts,agents,kb,pages` (default: all)
  - `limit` — Max results per category (default: 5)
- **Response:**
  ```json
  {
    "query": "sardor",
    "results": {
      "chats": [
        {
          "id": "chat_123",
          "type": "chat",
          "title": "Sardor Azimov bilan chat",
          "subtitle": "Men sizga keyinroq qo'ng'iroq qilaman...",
          "timestamp": "2 daqiqa oldin",
          "status": "active",
          "avatar": "https://...",
          "url": "/inbox/chat/chat_123"
        }
      ],
      "contacts": [...],
      "agents": [...],
      "kb_articles": [...],
      "pages": [...]
    },
    "total": 12
  }
  ```

**POST /api/v1/search/recent:**
- **Body:** `{ "query": "sardor" }`
- **Purpose:** Save recent search for user (max 10 recent searches)

**GET /api/v1/search/recent:**
- **Response:**
  ```json
  {
    "recent_searches": [
      { "query": "sardor", "timestamp": "2024-02-11T14:30:00Z" },
      { "query": "analytics", "timestamp": "2024-02-11T12:15:00Z" }
    ]
  }
  ```

**DELETE /api/v1/search/recent/:query:**
- **Purpose:** Delete a specific recent search

---

## 6. ACCESSIBILITY

### Keyboard Navigation (Full Support)

**Focus Management:**
- Modal ochilganda: input field avtomatik fokusda
- Modal yopilganda: fokus trigger button'ga qaytadi (agar button'dan ochilgan bo'lsa)
- Arrow navigation: fokus vizual ravishda ko'rsatiladi (selected item background)

**Focus Indicators:**
- **Input field:** 2px solid `#4F46E5` outline, 2px offset
- **Result items:** Selected background `#E0E7FF`, border-left 3px solid `#4F46E5`
- **No focus trap:** Esc tugmasi har doim modal'ni yopadi

### ARIA Labels

**Modal:**
- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby="search-title"` (yashirin title element)
- `aria-describedby="search-description"` (yashirin description)

**Input:**
- `role="combobox"`
- `aria-expanded="true"` (agar results ko'rsatilsa)
- `aria-controls="search-results-list"`
- `aria-activedescendant="result-item-1"` (selected item ID)
- `aria-label="Global search"`

**Results List:**
- `role="listbox"`
- `id="search-results-list"`

**Result Item:**
- `role="option"`
- `id="result-item-{index}"`
- `aria-selected="true"` (agar selected bo'lsa)
- `aria-label="{title} - {subtitle}"` (to'liq ma'lumot screen reader uchun)

**Category Headers:**
- `role="separator"` yoki `role="group"`
- `aria-label="Chatlar category"`

### Screen Reader Announcements

**Modal ochilganda:**
- "Global search dialog opened. Use arrow keys to navigate results, Enter to select, Escape to close."

**Search results yangilanganda:**
- "12 results found in 4 categories."
- Agar empty: "No results found. Try a different search term."

**Item selected (arrow navigation):**
- "Sardor Azimov bilan chat. Active. 2 minutes ago. 1 of 5 in Chats category."

**Item activated (Enter bosilganda):**
- "Opening Sardor Azimov chat."

### Color Contrast (WCAG AA)

| Element | Foreground | Background | Ratio | Status |
|---------|------------|------------|-------|--------|
| Input text | `#111827` | `#FFFFFF` | 11.7:1 | AAA ✓ |
| Placeholder | `#9CA3AF` | `#FFFFFF` | 3.9:1 | AA Large ✓ |
| Result title | `#111827` | `#F3F4F6` (hover) | 10.8:1 | AAA ✓ |
| Result subtitle | `#6B7280` | `#F3F4F6` | 5.1:1 | AA ✓ |
| Selected title | `#4F46E5` | `#E0E7FF` | 5.8:1 | AA ✓ |
| Category header | `#6B7280` | `#F9FAFB` | 5.3:1 | AA ✓ |
| Footer hints | `#6B7280` | `#F9FAFB` | 5.3:1 | AA ✓ |

**Barcha critical text 4.5:1+ contrast ratio — WCAG AA compliant ✓**

### Touch Targets

**Mobile (375px):**
- Result items: 56px balandlik (44px minimum touch target ✓)
- Input: 48px balandlik ✓
- Clear button: 40px × 40px tappable area ✓

---

## 7. RESPONSIVE DESIGN

### Desktop (1440px - 768px)

- Modal: 640px kenglik, 80px margin-top
- Results: 56px balandlik
- Footer: Keyboard hints ko'rsatiladi
- Animation: Smooth

### Tablet (768px - 480px)

- Modal: 90% kenglik (max 600px), 60px margin-top
- Results: 56px balandlik
- Footer: Faqat "Esc to close" hint

### Mobile (<480px, 375px)

- Modal: 100% kenglik, 100% balandlik (fullscreen)
- Margin: 0
- Border-radius: 0 (fullscreen mode)
- Results: 60px balandlik (easier tapping)
- Footer: Faqat "Close" button (X icon) o'ng yuqorida
- Animation: Slide-up from bottom (0 → 100% translateY)

**Mobile-specific changes:**
- Input: 48px balandlik (larger touch target)
- Clear button: 48px × 48px
- Category headers: Sticky (scroll qilganda ko'rinadi)
- Close button: X icon, 44px × 44px, fixed position top-right

---

## 8. MICRO-INTERACTIONS

### Modal Open Animation

**Sequence:**
1. Overlay fade-in: 0% → 50% opacity, 200ms
2. Modal scale-in: 0.95 → 1, opacity 0 → 1, translateY(-10px) → 0, 200ms ease-out
3. Input auto-focus + cursor blink

**Timing:** Total 200ms

### Modal Close Animation

**Sequence:**
1. Modal scale-out: 1 → 0.95, opacity 1 → 0, translateY(0) → translateY(-10px), 150ms ease-in
2. Overlay fade-out: 50% → 0% opacity, 150ms

**Timing:** Total 150ms

### Search Input Interactions

**Typing:**
- Real-time character input, no lag
- Debounce 300ms before search starts
- Loading spinner appears after 100ms (if search takes longer)

**Clear button:**
- Fade-in: opacity 0 → 1, 150ms (when text appears)
- Hover: scale 1 → 1.1, 100ms
- Click: scale 1.1 → 0.9 → 1, 200ms, input clears instantly

### Result Item Interactions

**Hover (mouse):**
- Background: transparent → `#F3F4F6`, 100ms ease
- Border-left: transparent → 3px solid `#4F46E5`, 100ms
- Title color: `#111827` → `#4F46E5`, 100ms

**Selected (keyboard):**
- Background: instant change to `#E0E7FF`
- Border-left: instant 3px solid `#4F46E5`
- Scroll into view: smooth scroll if item is outside viewport

**Click/Enter:**
- Scale: 1 → 0.98, 100ms
- Opacity: 1 → 0.8, 100ms
- Then navigate (modal closes)

### Loading State

**Spinner:**
- Rotate: 360deg, 600ms linear infinite
- Fade-in: opacity 0 → 1, 150ms (appears after 100ms debounce)

**Results loading:**
- Skeleton screens: 5 items, shimmer effect (light gray waves)
- Fade-in: Results appear with 150ms fade-in, stagger 30ms per item

### Empty State

**Icon:**
- Scale-in: 0.8 → 1, 300ms ease-out, delay 100ms

**Text:**
- Fade-in: opacity 0 → 1, 200ms, delay 200ms

---

## 9. ASCII WIREFRAMES

### Wireframe 1: Modal Default State (Empty Input / Recent Searches)

```
┌──────────────────────────────────────────────────────────────┐
│                        Overlay (50% black)                    │
│                                                              │
│      ┌─────────────────────────────────────────────────┐    │
│      │  🔍  Chatlar, kontaktlar... qidiring   [×]      │    │ ← Input (48px)
│      ├─────────────────────────────────────────────────┤    │
│      │  SO'NGGI QIDIRUVLAR                              │    │ ← Header
│      ├─────────────────────────────────────────────────┤    │
│      │  🕐  Sardor Azimov                           ×   │    │ ← Recent item
│      │  🕐  analytics                               ×   │    │
│      │  🕐  Yangi chat                              ×   │    │
│      │  🕐  tarif                                   ×   │    │
│      │                                                  │    │
│      │  TEZKOR HARAKATLAR                               │    │ ← Quick actions
│      ├─────────────────────────────────────────────────┤    │
│      │  💬  Yangi chat boshlash                         │    │
│      │  👤  Kontakt qo'shish                            │    │
│      │  ⚙️  Sozlamalarga o'tish                         │    │
│      │  ❓  Yordam markazini ochish                     │    │
│      ├─────────────────────────────────────────────────┤    │
│      │  ↑↓ Navigate  ↵ Select  Esc Close         ⚙️    │    │ ← Footer
│      └─────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Wireframe 2: Modal Active Search with Results

```
┌──────────────────────────────────────────────────────────────┐
│                        Overlay (50% black)                    │
│                                                              │
│      ┌─────────────────────────────────────────────────┐    │
│      │  🔍  sardor                             [×]  ⟳  │    │ ← Input (loading)
│      ├─────────────────────────────────────────────────┤    │
│      │  CHATLAR                                         │    │ ← Category header
│      ├─────────────────────────────────────────────────┤    │
│      │  💬  Sardor Azimov bilan chat     [Active] ↵    │    │ ← Selected result
│      │      Men sizga keyinroq... • 2 daqiqa oldin      │    │
│      │                                                  │    │
│      │  💬  Sardor va Alisher group                    │    │
│      │      Ertaga uchrashuvimiz... • 1 soat oldin      │    │
│      │                                                  │    │
│      │  KONTAKTLAR                                      │    │
│      ├─────────────────────────────────────────────────┤    │
│      │  👤  Sardor Azimov                               │    │
│      │      sardor@example.com • +998 90 123 45 67      │    │
│      │                                                  │    │
│      │  👤  Sardorbek Karimov                           │    │
│      │      sardorbek@test.uz • +998 91 234 56 78       │    │
│      │                                                  │    │
│      │  AGENTLAR                                        │    │
│      ├─────────────────────────────────────────────────┤    │
│      │  👨‍💼  Sardor Rahimov               [Online] 🟢   │    │
│      │      Operator • Active                           │    │
│      ├─────────────────────────────────────────────────┤    │
│      │  ↑↓ Navigate  ↵ Select  Esc Close         ⚙️    │    │ ← Footer
│      └─────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Wireframe 3: Modal Empty State (No Results)

```
┌──────────────────────────────────────────────────────────────┐
│                        Overlay (50% black)                    │
│                                                              │
│      ┌─────────────────────────────────────────────────┐    │
│      │  🔍  asdfghjkl                          [×]      │    │ ← Input
│      ├─────────────────────────────────────────────────┤    │
│      │                                                  │    │
│      │                                                  │    │
│      │                  🔍❌  (Icon)                     │    │ ← Empty icon 48px
│      │                                                  │    │
│      │              Hech narsa topilmadi                │    │ ← Title
│      │                                                  │    │
│      │     Boshqa kalit so'z bilan qidiring yoki        │    │ ← Description
│      │          filter'larni o'zgartiring                │    │
│      │                                                  │    │
│      │                                                  │    │
│      ├─────────────────────────────────────────────────┤    │
│      │  ↑↓ Navigate  ↵ Select  Esc Close         ⚙️    │    │ ← Footer
│      └─────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 10. FIGMA COMPONENTS

### Component Tree

```
global-search/
├── search-modal/
│   ├── overlay (100vw × 100vh, rgba(0,0,0,0.5), blur 4px)
│   ├── modal-container (640×auto max-600, white, radius 12px, shadow large)
│   │   │
│   │   ├── search-input-section/ (padding 20px, border-bottom 1px #E5E7EB)
│   │   │   ├── search-icon (magnifying glass, 20px, #6B7280)
│   │   │   ├── input-field (100%, 48px, 16px Regular, placeholder)
│   │   │   ├── loading-spinner (16px, #4F46E5, rotate animation)
│   │   │   └── clear-button (X icon, 16px, #9CA3AF, fade-in when text present)
│   │   │
│   │   ├── content-section/ (overflow-y scroll, max-height 440px)
│   │   │   │
│   │   │   ├── recent-searches-list/ (when input empty)
│   │   │   │   ├── section-header ("SO'NGGI QIDIRUVLAR", 12px uppercase)
│   │   │   │   └── recent-item × N (100%×48, Clock icon 16px, text 14px, delete X)
│   │   │   │
│   │   │   ├── quick-actions-list/ (when no recent searches)
│   │   │   │   ├── section-header ("TEZKOR HARAKATLAR", 12px uppercase)
│   │   │   │   └── action-item × 4 (100%×48, icon 16px, text 14px)
│   │   │   │
│   │   │   ├── search-results-list/ (when searching)
│   │   │   │   │
│   │   │   │   ├── category-chats/
│   │   │   │   │   ├── category-header ("CHATLAR", 12px uppercase, #F9FAFB bg)
│   │   │   │   │   └── result-item-chat × N
│   │   │   │   │       ├── chat-icon-or-avatar (32×32, radius 6px)
│   │   │   │   │       ├── content-wrapper (flex-1)
│   │   │   │   │       │   ├── title (14px Medium, #111827, highlight query)
│   │   │   │   │       │   └── subtitle (13px Regular, #6B7280)
│   │   │   │   │       ├── status-badge (Active/Resolved, green/gray)
│   │   │   │   │       └── enter-hint (↵ icon, 20px, #9CA3AF)
│   │   │   │   │
│   │   │   │   ├── category-contacts/
│   │   │   │   │   ├── category-header ("KONTAKTLAR")
│   │   │   │   │   └── result-item-contact × N
│   │   │   │   │       ├── contact-avatar (32×32, circle, initials or image)
│   │   │   │   │       ├── content-wrapper
│   │   │   │   │       │   ├── title (14px Medium, contact name)
│   │   │   │   │       │   └── subtitle (13px Regular, email + phone)
│   │   │   │   │       └── tag-badge (segment/tag, ixtiyoriy)
│   │   │   │   │
│   │   │   │   ├── category-agents/
│   │   │   │   │   ├── category-header ("AGENTLAR")
│   │   │   │   │   └── result-item-agent × N
│   │   │   │   │       ├── agent-avatar (32×32, circle)
│   │   │   │   │       ├── content-wrapper
│   │   │   │   │       │   ├── title (14px Medium, agent name)
│   │   │   │   │       │   └── subtitle (13px Regular, role + status)
│   │   │   │   │       └── status-badge (Online/Away/Offline, dot + text)
│   │   │   │   │
│   │   │   │   ├── category-kb-articles/
│   │   │   │   │   ├── category-header ("KB MAQOLALARI")
│   │   │   │   │   └── result-item-kb × N
│   │   │   │   │       ├── kb-icon (Book icon, 32×32, purple bg)
│   │   │   │   │       ├── content-wrapper
│   │   │   │   │       │   ├── title (14px Medium, article title)
│   │   │   │   │       │   └── subtitle (13px Regular, category + views)
│   │   │   │   │       └── helpful-badge (87% foydali, green)
│   │   │   │   │
│   │   │   │   └── category-pages/
│   │   │   │       ├── category-header ("SAHIFALAR")
│   │   │   │       └── result-item-page × N
│   │   │   │           ├── page-icon (specific icon 32×32)
│   │   │   │           ├── content-wrapper
│   │   │   │           │   ├── title (14px Medium, page name)
│   │   │   │           │   └── subtitle (13px Regular, breadcrumb)
│   │   │   │           └── (no badge)
│   │   │   │
│   │   │   └── empty-state/ (when no results)
│   │   │       ├── empty-icon (Search + X, 48px, #D1D5DB)
│   │   │       ├── empty-title ("Hech narsa topilmadi", 16px Medium)
│   │   │       └── empty-description (14px Regular, #9CA3AF)
│   │   │
│   │   └── footer-section/ (padding 12px 20px, #F9FAFB bg, border-top)
│   │       ├── keyboard-hints/ (left side, gap 16px)
│   │       │   ├── hint-navigate (↑↓ icon + "Navigate", 12px, #6B7280)
│   │       │   ├── hint-select (↵ icon + "Select", 12px, #6B7280)
│   │       │   └── hint-close (Esc icon + "Close", 12px, #6B7280)
│   │       │
│   │       └── footer-right/ (right side)
│   │           ├── powered-by ("Powered by Algolia", 12px, #9CA3AF, link)
│   │           └── settings-icon (gear icon 16px, #9CA3AF, optional)
│   │
│   └── mobile-close-button/ (mobile only, X icon 24px, 44×44, top-right fixed)
│
└── states/
    ├── default (empty input, recent searches)
    ├── searching (input has text, loading spinner)
    ├── results (categories with items)
    ├── empty (no results found)
    ├── selected (keyboard navigation, item highlighted)
    └── mobile (fullscreen, adjusted layout)
```

### Component Variants

**search-modal (Master Component):**
- Variant 1: state=default (recent searches)
- Variant 2: state=searching (loading)
- Variant 3: state=results (search results shown)
- Variant 4: state=empty (no results)
- Properties: input text, results array, selected index

**result-item (Component with Variants):**
- Variant 1: type=chat (MessageSquare icon, chat-specific layout)
- Variant 2: type=contact (User avatar, contact layout)
- Variant 3: type=agent (Agent avatar, status badge)
- Variant 4: type=kb (Book icon, helpful badge)
- Variant 5: type=page (Page icon, breadcrumb)
- State: default, hover, selected
- Properties: title, subtitle, icon/avatar, badge (optional)

**category-header (Component):**
- Text: category name (uppercase)
- Style: 12px Medium, #6B7280, #F9FAFB bg, padding 12/20/8/20

---

## 11. COMPREHENSIVE FIGMA AI PROMPT

**Prompt for AI (Figma Plugin yoki ChatGPT/Claude):**

"Create a global search modal design for QULAY CHAT enterprise SaaS dashboard. Design system: Primary #4F46E5 (Indigo-600), Success #10B981, Warning #F59E0B, Gray scale #111827 to #F9FAFB. Typography: Inter font. Layout: 640px width × auto height (max 600px), center-aligned with 80px margin-top, white background, 12px border-radius, large shadow (0 20px 25px -5px rgba(0,0,0,0.1)).

**Section 1: Search Input (padding 20px, border-bottom 1px #E5E7EB)**
- Search icon magnifying glass 20px #6B7280 on left with 12px padding-right
- Input field 100% width 48px height, transparent background, no border, 16px Regular Inter text, placeholder 'Chatlar, kontaktlar, sahifalar va boshqalarni qidiring...' #9CA3AF color, auto-focus on modal open
- Clear button X icon 16px #9CA3AF on right, fade-in when text present
- Loading spinner rotating circle 16px #4F46E5 replaces clear button when searching, rotate 360deg 600ms linear infinite

**Section 2: Content (max-height 440px, overflow-y scroll)**
State A: Recent Searches (when input empty)
- Section header 'SO'NGGI QIDIRUVLAR' 12px Medium uppercase #6B7280 letter-spacing 0.5px padding 12/20/8/20
- Recent items: Clock icon 16px #9CA3AF + query text 14px Regular #374151, delete X icon 14px hover-visible, 100% × 48px padding 12/20, hover #F3F4F6 background
- Quick Actions section: 'TEZKOR HARAKATLAR' header same style
- Action items: Icon 16px (MessageSquare/UserPlus/Settings/HelpCircle) + text 14px Regular, same 48px height layout

State B: Search Results (when user types, debounce 300ms)
- Category header: category name (CHATLAR/KONTAKTLAR/AGENTLAR/KB MAQOLALARI/SAHIFALAR) 12px Medium uppercase #6B7280 #F9FAFB background padding 12/20/8/20
- Result items 100% × 56px padding 12/20, horizontal flex gap 12px:
  - Left: Icon/Avatar 32×32 (Chat icon green bg, Contact avatar circle, Agent avatar circle, KB Book icon purple bg, Page specific icon)
  - Center flex-1: Title 14px Medium #111827 (highlight search query in bold or #4F46E5) + Subtitle 13px Regular #6B7280 (chat: message snippet + timestamp, contact: email + phone, agent: role + status, kb: category + views, page: breadcrumb), vertical gap 2px
  - Right: Badge optional (Active green/Resolved gray for chats, Online green/Away yellow/Offline gray for agents, 87% foydali green for KB) + Enter hint ↵ icon 20px #9CA3AF
- Hover state: background #F3F4F6, border-left 3px solid #4F46E5, title color #4F46E5, 100ms ease transition
- Selected state (keyboard nav): background #E0E7FF, border-left 3px solid #4F46E5, title #4F46E5

State C: Empty State (no results)
- Center-aligned padding 60/40: Search + X icon 48px #D1D5DB, title 'Hech narsa topilmadi' 16px Medium #374151, description 'Boshqa kalit so'z bilan qidiring yoki filter'larni o'zgartiring' 14px Regular #9CA3AF, vertical gaps 16/8

**Section 3: Footer (padding 12/20, #F9FAFB background, border-top 1px #E5E7EB)**
- Left: Keyboard hints horizontal gap 16px: ↑↓ icon 14px + 'Navigate' 12px Regular #6B7280, ↵ icon + 'Select', Esc icon + 'Close'
- Right: 'Powered by Algolia' 12px Regular #9CA3AF underline on hover link

**Overlay:** Full viewport width/height rgba(0,0,0,0.5) backdrop blur 4px optional, click closes modal

**Animations:**
- Modal open: scale 0.95→1, opacity 0→1, translateY(-10px)→0, 200ms ease-out
- Modal close: scale 1→0.95, opacity 1→0, translateY(0)→(-10px), 150ms ease-in
- Result item hover: background/border/color change 100ms ease
- Clear button: fade-in opacity 0→1 150ms when text appears
- Loading spinner: rotate infinite

**Mobile (<480px):**
- Modal fullscreen 100% width/height, margin 0, border-radius 0
- Slide-up animation from bottom translateY(100%)→0
- Close button X icon 24px 44×44 fixed top-right
- Input 48px height, results 60px height (larger touch targets)
- Footer shows only close button, no keyboard hints

**Accessibility WCAG AA:**
- All text 4.5:1 contrast minimum (title 11.7:1, subtitle 5.1:1, selected title 5.8:1)
- Focus indicators 2px solid #4F46E5
- ARIA: modal role='dialog' aria-modal='true', input role='combobox' aria-expanded, results role='listbox', items role='option' aria-selected
- Keyboard navigation: Ctrl/Cmd+K open, Esc close, ↑↓ navigate, Enter select, Tab between sections

Create Figma frames with all states (default/searching/results/empty/selected), auto-layout for responsive behavior, reusable components (search-input, result-item variants, category-header, empty-state, footer), component states (default/hover/selected), animations noted with timing specs. Style: professional, modern, clean, command palette aesthetic like Notion/Linear/Raycast."

---

## 12. TECHNICAL IMPLEMENTATION NOTES

### Frontend Stack (React + Next.js)

**Component structure:**
```jsx
// components/GlobalSearch.jsx
export default function GlobalSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  
  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 2) {
        searchAPI(query);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);
  
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') handleArrowDown();
      if (e.key === 'ArrowUp') handleArrowUp();
      if (e.key === 'Enter') handleSelect();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="search-modal-overlay" onClick={onClose}>
          <motion.div className="search-modal" onClick={(e) => e.stopPropagation()}>
            {/* Search input section */}
            <SearchInput value={query} onChange={setQuery} loading={loading} />
            
            {/* Content section */}
            {query.length === 0 ? (
              <RecentSearches />
            ) : results === null ? (
              <LoadingSkeleton />
            ) : results.total === 0 ? (
              <EmptyState />
            ) : (
              <SearchResults results={results} selectedIndex={selectedIndex} />
            )}
            
            {/* Footer */}
            <SearchFooter />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

### Backend (Node.js + Express yoki Next.js API Routes)

**Search endpoint:**
```javascript
// pages/api/search.js or routes/search.js
export default async function handler(req, res) {
  const { q, categories, limit = 5 } = req.query;
  const userId = req.user.id; // from auth middleware
  
  if (!q || q.length < 2) {
    return res.status(400).json({ error: 'Query too short' });
  }
  
  try {
    // Parallel search across categories
    const [chats, contacts, agents, kbArticles, pages] = await Promise.all([
      searchChats(userId, q, limit),
      searchContacts(userId, q, limit),
      searchAgents(userId, q, limit),
      searchKB(userId, q, limit),
      searchPages(userId, q, limit)
    ]);
    
    // Save to recent searches (async, don't wait)
    saveRecentSearch(userId, q);
    
    return res.json({
      query: q,
      results: { chats, contacts, agents, kb_articles: kbArticles, pages },
      total: chats.length + contacts.length + agents.length + kbArticles.length + pages.length
    });
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ error: 'Search failed' });
  }
}
```

### Performance Optimization

**Debouncing:**
- 300ms delay prevents excessive API calls
- Cancel previous requests if new query starts (AbortController)

**Caching:**
- Cache results in memory (LRU cache, max 100 entries)
- Cache key: `search:${userId}:${query}`
- TTL: 5 minutes

**Database indexing:**
- Full-text search indexes on chat messages, contact names, KB content
- Use PostgreSQL `tsvector` yoki Elasticsearch for advanced search

**Lazy loading:**
- Initial load: 5 results per category
- "Show more" button loads next 10 results

---

## 13. TESTING SCENARIOS

### Unit Tests

1. Search input debounce works (300ms delay)
2. Keyboard shortcuts trigger correctly (Ctrl+K opens, Esc closes)
3. Arrow navigation cycles through results correctly
4. Enter key selects current item and navigates
5. Clear button clears input and resets results
6. Results categorize correctly by type

### Integration Tests

1. API call made with correct query params
2. Loading state shows during search
3. Results render with correct data structure
4. Empty state shows when no results found
5. Recent searches saved and retrieved correctly
6. Navigation to clicked/selected item works

### E2E Tests (Cypress/Playwright)

1. **Happy path:** Open modal → type "sardor" → see results → click first chat → chat opens
2. **Keyboard navigation:** Open with Ctrl+K → type → arrow down 3 times → Enter → navigates
3. **Empty state:** Type "asdfghjkl" → empty state shows
4. **Recent searches:** Open modal → see recent searches → click recent → results show
5. **Clear button:** Type query → click X → input clears → recent searches show
6. **Close modal:** Open → type → Esc → modal closes → query persists (or clears, based on design)
7. **Mobile:** Open on 375px → fullscreen modal → tap result → navigates

### Accessibility Tests

1. **Keyboard only:** Complete full workflow without mouse
2. **Screen reader:** NVDA/JAWS announces modal opened, results found, item selected
3. **Focus visible:** Tab through all elements, focus outlines visible
4. **Color contrast:** Axe-core reports no violations
5. **Touch targets:** Mobile tap targets all ≥44px

---

## XULOSA

Global Search (CMD+K) — QULAY CHAT platformasining eng muhim foydalanuvchi tajribasi xususiyatlaridan biri. Professional, tez va intuitiv qidiruv interfeysiga ega bo'lish platformaning sifatini sezilarli darajada oshiradi.

**Asosiy afzalliklar:**
1. **Keyboard-first workflow:** Minimal mouse ishlatish, maksimum samaradorlik
2. **Universal access:** Platform bo'ylab barcha narsani bir joydan qidirish
3. **Real-time results:** 300ms debounce bilan tez va efficient qidiruv
4. **Smart categorization:** Chats, Contacts, Agents, KB, Pages — aniq category'lar
5. **Recent searches:** Tez-tez ishlatiladigan qidiruvlarga tezkor kirish
6. **Full accessibility:** WCAG AA compliant, keyboard va screen reader support

Ushbu spec bo'yicha implementation qilingandan so'ng, QULAY CHAT foydalanuvchilari Notion, Linear, Raycast kabi zamonaviy platformalardagi tajribaga o'xshash professional qidiruv imkoniyatiga ega bo'lishadi.
