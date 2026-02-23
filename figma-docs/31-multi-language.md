# QULAY CHAT — Multi-Language Support (Ko'p Tillilik)

**Module ID:** Settings → Language  
**Yaratilgan:** 2026-02-11  
**Kirish:** All roles (Admin, Manager, Operator)  
**Maqsad:** QULAY CHAT platformasini har xil tillarda foydalanish, interface va widget tilini sozlash

---

## Umumiy Yondashuv

Multi-Language Support — QULAY CHAT'ni global miqyosda foydalanish uchun zarur funksiya. Foydalanuvchilar o'z interface tilini tanlashlari mumkin, shuningdek chat widget uchun har xil tillarni sozlash mumkin. Bu modul faqat UI tilini o'zgartirish emas, balki to'liq i18n (internationalization) va l10n (localization) tizimini o'z ichiga oladi.

**Key Features:**
- 🌍 10+ til qo'llab-quvvatlash
- 🎨 Interface tili almashtirish
- 💬 Widget tili sozlash
- 🔄 Real-time til o'zgarishi (reload kerak emas)
- 📅 Sana/vaqt formatlari (locale-specific)
- 💰 Valyuta formatlari
- ⌨️ RTL (Right-to-Left) support (Arab, Ivrит)
- 🔍 Auto-detect browser language
- 📝 Translation management (Admin)

---

## Qo'llab-quvvatlanadigan Tillar

### Phase 1: Launch Tillar (6 ta)
1. **O'zbek** (uz) — Default, native
2. **Русский** (ru) — 2nd largest market
3. **English** (en) — International
4. **Türkçe** (tr) — Regional
5. **Қазақша** (kk) — Regional
6. **Italiano** (it) — Additional market

### Phase 2: Future Tillar (6 ta)
7. **Español** (es)
8. **Français** (fr)
9. **Deutsch** (de)
10. **العربية** (ar) — RTL support
11. **中文** (zh)
12. **日本語** (ja)

---

## 1. LANGUAGE SELECTOR (Global Component)

### Joylashuvlar

**1. Header (User Dropdown):**
- User avatar → dropdown menu
- Item: "🌍 Til / Language" 14px Regular #374151
- Click → Opens language selector modal

**2. Settings Page:**
- Settings → Profile tab → Language section
- Current language display + Change button

**3. Login/Signup:**
- Top-right corner language dropdown
- Small format: 🌍 + language code (EN/UZ/RU)

**4. Chat Widget:**
- Widget settings → Language selector
- Affects visitor-facing text

---

## 2. LANGUAGE SELECTOR MODAL (MODAL-LANG01)

### Trigger
Click "🌍 Til / Language" in user dropdown OR "Change" in Settings

### Modal Specs
- **Width:** 480px
- **Background:** White
- **Border-radius:** 12px
- **Shadow:** shadow-xl
- **Backdrop:** rgba(0,0,0,0.5) blur 4px

### UI Komponentlar

#### Header
- Title: "Til tanlang / Select Language" 20px Semibold #111827
- Close button: X 24×24px top-right

#### Search Input (optional, if > 10 languages)
- Width: 100%
- Placeholder: "Til qidirish / Search language..." 14px #9CA3AF
- Icon: Search 16px left
- Height: 40px
- Border: 1px #E5E7EB, focus: 2px #4F46E5

#### Languages Grid
**Layout:** 2 columns, gap 12px

**Language Card (216×72px each):**
```
┌────────────────────────┐
│ 🇺🇿 O'zbek            │
│    Uzbek              │ Selected: border 2px #4F46E5, bg #EEF2FF
│                   ✓   │ Not selected: border 1px #E5E7EB
└────────────────────────┘
```

**Card structure:**
- Flag emoji: 32px left (🇺🇿 🇷🇺 🇬🇧 🇹🇷 🇰🇿 🇮🇹)
- Native name: 16px Semibold #111827 ("O'zbek", "Русский", "English")
- English name: 13px Regular #6B7280 ("Uzbek", "Russian", "English")
- Checkmark: ✓ 20px #10B981 top-right (if selected)
- Background: White, hover: #F9FAFB
- Border: 1px #E5E7EB, selected: 2px #4F46E5, bg #EEF2FF
- Cursor: pointer

**Languages list:**
1. 🇺🇿 **O'zbek** — Uzbek
2. 🇷🇺 **Русский** — Russian
3. 🇬🇧 **English** — English
4. 🇹🇷 **Türkçe** — Turkish
5. 🇰🇿 **Қазақша** — Kazakh
6. 🇮🇹 **Italiano** — Italian

**Hover state:** bg #F9FAFB, border #D1D5DB

**Click behavior:**
- Select language (show checkmark)
- Instantly update UI text (no reload needed)
- Save to localStorage + backend
- Close modal after 500ms

#### Footer (optional)
- Text: "Interface tili o'zgaradi. Chatlar asl tilida qoladi." 13px #6B7280 center
- Or: "UI language will change. Chat messages stay in original language."

---

## 3. SETTINGS PAGE — LANGUAGE SECTION (SCR-S01-LANG)

### Location
Settings → Profile tab → Language section (below avatar and name)

### UI Komponentlar

#### Section Card
**Background:** White, border 1px #E5E7EB, padding 24px, radius 12px

**Title:** "Til Sozlamalari / Language Settings" 18px Semibold #111827

#### Current Language Display
- Label: "Interface Tili / Interface Language" 14px Medium #374151
- Current: Flag 24px + "O'zbek (Uzbek)" 16px Regular #111827 bg #F9FAFB padding 12px 16px radius 8px
- Button: "O'zgartirish / Change" 120×40px outline
- Click: Opens MODAL-LANG01

#### Auto-Detect Setting
- Checkbox: ☑️ "Browser tilini avtomatik aniqlash / Auto-detect browser language"
- Description: "Agar yoqilgan bo'lsa, browser tilingiz avtomatik tanlanadi" 13px #6B7280
- When checked: On next login, uses `navigator.language`

#### Date & Time Format
- Label: "Sana va vaqt formati / Date & Time Format" 14px Medium
- Dropdown: 240px width
  - Options based on selected language:
    - **O'zbek:** "11-Fev, 2026, 14:30" (dd-MMM, yyyy, HH:mm)
    - **English:** "Feb 11, 2026, 2:30 PM" (MMM dd, yyyy, h:mm a)
    - **Русский:** "11 фев, 2026, 14:30" (dd MMM, yyyy, HH:mm)
- Preview: "Namuna / Preview: 11-Fev, 2026, 14:30" 14px #6B7280

#### Number Format
- Label: "Raqam formati / Number Format" 14px Medium
- Radio buttons (2):
  - ⦿ "1,234.56" (Comma thousands, period decimal) — International
  - ◯ "1 234,56" (Space thousands, comma decimal) — Regional
- Preview: "Namuna: 1,234.56"

#### Time Zone
- Label: "Vaqt zonasi / Time Zone" 14px Medium
- Dropdown: 240px width
  - Options: "(GMT+5) Tashkent" (auto-detect from browser)
  - List: Common zones + "Boshqa / Other..." opens full list modal
- Description: "Barcha sanalar ushbu vaqt zonasida ko'rsatiladi" 13px #6B7280

#### Actions
- "Bekor qilish / Cancel" ghost left
- "Saqlash / Save" primary right
  - Loading: "Saqlanmoqda... / Saving..."
  - Success: Toast "Sozlamalar saqlandi ✓ / Settings saved ✓"

---

## 4. WIDGET LANGUAGE SETTINGS (SCR-W-LANG)

### Location
Settings → Widget tab → Language section

### UI Komponentlar

#### Section Card
**Title:** "Widget Tili / Widget Language" 18px Semibold

**Description:** "Tashrif buyuruvchilar ko'radigan til. Chat widgetida ko'rsatiladigan barcha matnlar." 14px #6B7280

#### Widget Language Selector
- Label: "Widget Tili / Widget Language" 14px Medium
- Dropdown: 240px width
  - Options: Same 6 languages (O'zbek, Русский, English, Türkçe, Қазақша, Italiano)
  - Selected: Flag + name "🇺🇿 O'zbek"

#### Customizable Texts (per language)
**Expandable accordions for each language:**

**Accordion: "🇺🇿 O'zbek Matnlari / Uzbek Texts"**
- Click expands → Shows editable fields

**Fields (15 ta):**
| Field | Default (O'zbek) | Placeholder |
|-------|------------------|-------------|
| **Welcome Message** | "Salom! Sizga qanday yordam bera olamiz?" | Max 200 chars |
| **Greeting** | "Xush kelibsiz!" | Max 50 chars |
| **Agent Name** | "Operator" | Max 30 chars |
| **Online Status** | "Onlayn" | Max 20 chars |
| **Offline Status** | "Oflayn" | Max 20 chars |
| **Away Status** | "Biroz kutib turing" | Max 30 chars |
| **Typing Indicator** | "Yozmoqda..." | Max 20 chars |
| **Send Button** | "Yuborish" | Max 15 chars |
| **Placeholder** | "Xabar yozing..." | Max 30 chars |
| **File Upload** | "Fayl yuklash" | Max 20 chars |
| **CSAT Question** | "Xizmat qandaydi?" | Max 50 chars |
| **CSAT Thanks** | "Rahmat!" | Max 20 chars |
| **Pre-chat Name** | "Ismingiz" | Max 20 chars |
| **Pre-chat Email** | "Email" | Max 20 chars |
| **Offline Message** | "Hozir oflaynmiz. Xabar qoldiring." | Max 100 chars |

**Each field:**
- Input: 100% width, 40px height
- Character counter: "145 / 200" 12px #9CA3AF right
- "Reset to default" link: 12px #4F46E5 below input (resets to default translation)

**Live Preview (Right sidebar 360px):**
- Title: "Oldindan ko'rish / Preview" 16px Semibold
- Widget mockup: 360×520px real widget preview
- Language changes reflect instantly
- Toggle language selector: Dropdown to preview different languages

#### Multi-Language Widget (Advanced)
- Toggle: "Ko'p tillarni yoqish / Enable Multi-Language Widget"
- When ON: Shows language selector in widget (dropdown or flags)
- Visitor can switch language in chat
- Default: Use browser language or IP-based detection

**Language Detection:**
- Radio group:
  - ⦿ "Browser tilidan / From browser language" (navigator.language)
  - ◯ "IP manzilidan / From IP address" (GeoIP API)
  - ◯ "Qo'lda tanlash / Manual selection" (shows dropdown in widget)

---

## 5. TRANSLATION KEYS & STRUCTURE

### i18n JSON Structure

**File:** `locales/uz.json`
```json
{
  "common": {
    "save": "Saqlash",
    "cancel": "Bekor qilish",
    "delete": "O'chirish",
    "edit": "Tahrirlash",
    "close": "Yopish",
    "search": "Qidirish",
    "loading": "Yuklanmoqda...",
    "success": "Muvaffaqiyatli",
    "error": "Xatolik",
    "confirm": "Tasdiqlash",
    "yes": "Ha",
    "no": "Yo'q"
  },
  "auth": {
    "login": "Kirish",
    "signup": "Ro'yxatdan o'tish",
    "logout": "Chiqish",
    "email": "Email",
    "password": "Parol",
    "forgot_password": "Parolni unutdingizmi?",
    "remember_me": "Meni eslab qol",
    "login_success": "Muvaffaqiyatli kirdingiz",
    "invalid_credentials": "Email yoki parol noto'g'ri"
  },
  "dashboard": {
    "title": "Boshqaruv paneli",
    "welcome": "Xush kelibsiz, {{name}}!",
    "quick_stats": "Tezkor statistika"
  },
  "inbox": {
    "title": "Kiruvchi xabarlar",
    "all_conversations": "Barcha suhbatlar",
    "assigned_to_me": "Menga tayinlangan",
    "unassigned": "Tayinlanmagan",
    "open": "Ochiq",
    "resolved": "Yechilgan",
    "search_placeholder": "Suhbatlarni qidirish...",
    "no_conversations": "Hech qanday suhbat yo'q",
    "assign_to": "Tayinlash",
    "resolve": "Yechish",
    "reopen": "Qayta ochish",
    "transfer": "O'tkazish",
    "typing": "Yozmoqda..."
  },
  "team": {
    "title": "Jamoa",
    "agents": "Operatorlar",
    "add_agent": "Operator qo'shish",
    "roles": "Rollar",
    "invitations": "Takliflar",
    "online": "Onlayn",
    "offline": "Oflayn",
    "away": "Ketdi",
    "busy": "Band"
  },
  "settings": {
    "title": "Sozlamalar",
    "profile": "Profil",
    "workspace": "Ish maydoni",
    "widget": "Widget",
    "security": "Xavfsizlik",
    "notifications": "Bildirishnomalar",
    "language": "Til",
    "change_language": "Tilni o'zgartirish",
    "auto_detect": "Avtomatik aniqlash",
    "save_changes": "O'zgarishlarni saqlash"
  },
  "widget": {
    "welcome": "Salom! Sizga qanday yordam bera olamiz?",
    "greeting": "Xush kelibsiz!",
    "online": "Onlayn",
    "offline": "Oflayn",
    "away": "Biroz kutib turing",
    "typing": "Yozmoqda...",
    "send": "Yuborish",
    "placeholder": "Xabar yozing...",
    "file_upload": "Fayl yuklash",
    "csat_question": "Xizmat qandaydi?",
    "csat_thanks": "Rahmat!",
    "pre_chat_name": "Ismingiz",
    "pre_chat_email": "Email",
    "offline_message": "Hozir oflaynmiz. Xabar qoldiring."
  },
  "dates": {
    "today": "Bugun",
    "yesterday": "Kecha",
    "days_ago": "{{count}} kun oldin",
    "just_now": "Hozirgina",
    "minutes_ago": "{{count}} daqiqa oldin",
    "hours_ago": "{{count}} soat oldin"
  },
  "validation": {
    "required": "Ushbu maydon majburiy",
    "invalid_email": "Noto'g'ri email manzil",
    "min_length": "Kamida {{count}} ta belgi",
    "max_length": "Ko'pi bilan {{count}} ta belgi",
    "passwords_not_match": "Parollar mos kelmaydi"
  }
}
```

**File:** `locales/en.json`
```json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit",
    "close": "Close",
    "search": "Search",
    "loading": "Loading...",
    "success": "Success",
    "error": "Error",
    "confirm": "Confirm",
    "yes": "Yes",
    "no": "No"
  },
  "auth": {
    "login": "Log In",
    "signup": "Sign Up",
    "logout": "Log Out",
    "email": "Email",
    "password": "Password",
    "forgot_password": "Forgot password?",
    "remember_me": "Remember me",
    "login_success": "Successfully logged in",
    "invalid_credentials": "Invalid email or password"
  },
  // ... other sections
}
```

**File:** `locales/ru.json`
```json
{
  "common": {
    "save": "Сохранить",
    "cancel": "Отменить",
    "delete": "Удалить",
    "edit": "Редактировать",
    "close": "Закрыть",
    "search": "Поиск",
    "loading": "Загрузка...",
    "success": "Успешно",
    "error": "Ошибка",
    "confirm": "Подтвердить",
    "yes": "Да",
    "no": "Нет"
  },
  // ... other sections
}
```

---

## 6. RTL (Right-to-Left) SUPPORT

### RTL Languages
- **العربية** (ar) — Arabic
- **עברית** (he) — Hebrew
- **فارسی** (fa) — Persian/Farsi

### CSS Implementation

```css
/* Root HTML attribute */
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

/* Flip layout components */
html[dir="rtl"] .sidebar {
  left: auto;
  right: 0;
}

html[dir="rtl"] .chat-message.agent {
  float: right;
}

html[dir="rtl"] .chat-message.visitor {
  float: left;
}

/* Flip icons */
html[dir="rtl"] .icon-arrow-right {
  transform: scaleX(-1);
}

/* Flip padding/margin using logical properties */
.element {
  padding-inline-start: 16px; /* padding-left in LTR, padding-right in RTL */
  padding-inline-end: 8px;    /* padding-right in LTR, padding-left in RTL */
  margin-inline-start: 24px;
}

/* Border radius */
html[dir="rtl"] .card {
  border-radius: 0 12px 12px 0; /* Flipped from 12px 0 0 12px */
}
```

### React Component

```jsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const isRTL = ['ar', 'he', 'fa'].includes(i18n.language);

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language, isRTL]);

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      {/* App content */}
    </div>
  );
}
```

---

## 7. DATE & TIME LOCALIZATION

### Date Formatting (using date-fns)

```javascript
import { format } from 'date-fns';
import { uz, ru, enUS, tr, kk, it } from 'date-fns/locale';

const locales = { uz, ru, en: enUS, tr, kk, it };

function formatDate(date, formatString, language) {
  return format(date, formatString, { locale: locales[language] });
}

// Examples:
formatDate(new Date(), 'PPP', 'uz'); // "11-fev, 2026-yil"
formatDate(new Date(), 'PPP', 'ru'); // "11 февр. 2026 г."
formatDate(new Date(), 'PPP', 'en'); // "February 11th, 2026"

// Relative time
import { formatDistanceToNow } from 'date-fns';
formatDistanceToNow(date, { addSuffix: true, locale: locales[language] });
// uz: "5 daqiqa oldin"
// en: "5 minutes ago"
// ru: "5 минут назад"
```

### Custom Relative Time Translations

```json
// locales/uz.json
{
  "dates": {
    "just_now": "Hozirgina",
    "minutes_ago": "{{count}} daqiqa oldin",
    "hours_ago": "{{count}} soat oldin",
    "yesterday": "Kecha",
    "days_ago": "{{count}} kun oldin",
    "weeks_ago": "{{count}} hafta oldin",
    "months_ago": "{{count}} oy oldin"
  }
}
```

---

## 8. NUMBER & CURRENCY FORMATTING

### Number Formatting

```javascript
// Using Intl.NumberFormat
function formatNumber(number, language) {
  return new Intl.NumberFormat(language).format(number);
}

formatNumber(1234567.89, 'uz');  // "1 234 567,89"
formatNumber(1234567.89, 'en');  // "1,234,567.89"
formatNumber(1234567.89, 'ru');  // "1 234 567,89"
```

### Currency Formatting

```javascript
function formatCurrency(amount, currency, language) {
  return new Intl.NumberFormat(language, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

formatCurrency(99.99, 'USD', 'en');  // "$99.99"
formatCurrency(99.99, 'USD', 'uz');  // "99,99 US$"
formatCurrency(99.99, 'RUB', 'ru');  // "99,99 ₽"
formatCurrency(99.99, 'UZS', 'uz');  // "99,99 soʻm" (if supported)
```

---

## 9. TRANSLATION MANAGEMENT (Admin Panel)

### SCR-TM01: Translation Manager (Admin only)

**Access:** Settings → Advanced → Translation Management

### UI Komponentlar

#### Header
- Title: "Translation Management" 28px Bold
- Description: "Manage translations for all languages" 16px #6B7280
- Button: "+ Add Language" primary (opens add language modal)

#### Language Tabs
- Horizontal tabs: O'zbek | Русский | English | Türkçe | Қazақша | Italiano
- Active tab: underline 2px #4F46E5

#### Translation Table

**Table columns:**
| Key | O'zbek (uz) | English (en) | Русский (ru) | Actions |
|-----|-------------|--------------|--------------|---------|
| common.save | Saqlash | Save | Сохранить | Edit |
| common.cancel | Bekor qilish | Cancel | Отменить | Edit |
| inbox.title | Kiruvchi xabarlar | Inbox | Входящие | Edit |

**Features:**
- Search: "Search keys or values..." 300px
- Filter by: Category dropdown (Common/Auth/Inbox/Team/etc.)
- Filter by: Status (Translated/Missing/Needs review)
- Pagination: 50 per page
- Bulk actions: Select multiple → Export CSV / Import CSV

**Edit Inline:**
- Click cell → Input appears
- Type → Auto-save on blur
- Validation: Max length, required fields
- Success: Green checkmark fade-in
- Error: Red border + error message

**Missing Translations:**
- Cell bg: #FEF3C7 (yellow) if translation missing
- Text: "— Missing —" italic #9CA3AF
- Icon: AlertTriangle 16px orange

**Actions column:**
- Edit: Opens modal with all languages side-by-side
- History: Shows translation history (who changed, when)
- Suggest: AI-powered translation suggestion (optional)

---

#### Export/Import

**Export:**
- Button: "Export Translations" outline
- Format: JSON or CSV
- Options: All languages or specific language
- Download: `qulay-chat-translations-uz-2026-02-11.json`

**Import:**
- Button: "Import Translations" outline
- Upload: JSON or CSV file
- Preview: Shows changes before applying
- Validation: Checks for missing keys, invalid format
- Apply: Merge with existing or overwrite

---

## 10. LANGUAGE DETECTION & SWITCHING

### Auto-Detect Flow

```javascript
// On first visit or login
function detectLanguage() {
  // 1. Check user preference (from database)
  const userLang = user?.settings?.language;
  if (userLang) return userLang;
  
  // 2. Check localStorage (previous selection)
  const storedLang = localStorage.getItem('qulaychat_language');
  if (storedLang) return storedLang;
  
  // 3. Check browser language
  const browserLang = navigator.language.split('-')[0]; // 'en-US' → 'en'
  const supportedLangs = ['uz', 'ru', 'en', 'tr', 'kk', 'it'];
  if (supportedLangs.includes(browserLang)) return browserLang;
  
  // 4. Check IP-based location (optional, via GeoIP API)
  const ipLang = await detectLanguageFromIP();
  if (ipLang) return ipLang;
  
  // 5. Default fallback
  return 'uz';
}

// GeoIP example
async function detectLanguageFromIP() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const countryCode = data.country_code; // 'UZ', 'RU', 'US', etc.
    
    const countryToLang = {
      'UZ': 'uz',
      'RU': 'ru',
      'US': 'en',
      'GB': 'en',
      'TR': 'tr',
      'KZ': 'kk',
      'IT': 'it'
    };
    
    return countryToLang[countryCode] || null;
  } catch (error) {
    console.error('GeoIP detection failed:', error);
    return null;
  }
}
```

### Language Switch (Real-time, no reload)

```javascript
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();
  
  const changeLanguage = async (lang) => {
    // 1. Change i18n language (updates UI instantly)
    await i18n.changeLanguage(lang);
    
    // 2. Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRTL(lang) ? 'rtl' : 'ltr');
    
    // 3. Save to localStorage
    localStorage.setItem('qulaychat_language', lang);
    
    // 4. Save to backend (async)
    await fetch('/api/users/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: lang })
    });
    
    // 5. Update date-fns locale
    updateDateLocale(lang);
    
    // 6. Show success toast
    toast.success(i18n.t('settings.language_changed'));
  };
  
  return (
    <select value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="uz">🇺🇿 O'zbek</option>
      <option value="ru">🇷🇺 Русский</option>
      <option value="en">🇬🇧 English</option>
      <option value="tr">🇹🇷 Türkçe</option>
      <option value="kk">🇰🇿 Қазақша</option>
      <option value="it">🇮🇹 Italiano</option>
    </select>
  );
}
```

---

## 11. WIDGET LANGUAGE IMPLEMENTATION

### Widget Initialization with Language

```javascript
// Widget embed code
<script>
  window.Qulay chatConfig = {
    workspaceId: 'ws_abc123',
    language: 'uz', // or 'auto' for detection
    multiLanguage: true, // Enable language switcher in widget
    availableLanguages: ['uz', 'ru', 'en']
  };
</script>
<script src="https://cdn.qulaychat.uz/widget.js"></script>
```

### Widget Language Detection

```javascript
// In widget.js
function detectWidgetLanguage() {
  const config = window.Qulay chatConfig;
  
  // 1. Check explicit config
  if (config.language && config.language !== 'auto') {
    return config.language;
  }
  
  // 2. Check browser language
  const browserLang = navigator.language.split('-')[0];
  const available = config.availableLanguages || ['uz', 'en'];
  if (available.includes(browserLang)) {
    return browserLang;
  }
  
  // 3. Default to workspace language
  return config.defaultLanguage || 'uz';
}
```

### Multi-Language Widget Switcher

```html
<!-- Widget with language switcher -->
<div class="qulay-chat-widget">
  <div class="widget-header">
    <span class="agent-name">Operator</span>
    <div class="language-switcher">
      <button class="lang-btn active" data-lang="uz">O'z</button>
      <button class="lang-btn" data-lang="ru">Ru</button>
      <button class="lang-btn" data-lang="en">En</button>
    </div>
  </div>
  <div class="widget-body">
    <!-- Chat messages -->
  </div>
</div>
```

---

## 12. ASCII WIREFRAMES

### Wireframe 1: Language Selector Modal

```
┌──────────────────────────────────────────────────────┐
│ Til tanlang / Select Language               [X]      │
├──────────────────────────────────────────────────────┤
│                                                       │
│  [🔍 Til qidirish / Search language...]              │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │  🇺🇿 O'zbek      │  │  🇷🇺 Русский     │         │
│  │     Uzbek        │  │     Russian      │         │
│  │              ✓   │  │                  │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │  🇬🇧 English     │  │  🇹🇷 Türkçe      │         │
│  │     English      │  │     Turkish      │         │
│  │                  │  │                  │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────┐         │
│  │  🇰🇿 Қазақша     │  │  🇮🇹 Italiano    │         │
│  │     Kazakh       │  │     Italian      │         │
│  │                  │  │                  │         │
│  └──────────────────┘  └──────────────────┘         │
│                                                       │
│  Interface tili o'zgaradi. Chatlar asl tilida qoladi │
│                                                       │
└──────────────────────────────────────────────────────┘
```

### Wireframe 2: Settings Language Section

```
┌────────────────────────────────────────────────────────────┐
│  Til Sozlamalari / Language Settings                       │
├────────────────────────────────────────────────────────────┤
│                                                             │
│  Interface Tili / Interface Language                       │
│  ┌─────────────────────────────────┐  ┌──────────────┐    │
│  │ 🇺🇿 O'zbek (Uzbek)              │  │ O'zgartirish │    │
│  └─────────────────────────────────┘  └──────────────┘    │
│                                                             │
│  ☑ Browser tilini avtomatik aniqlash                       │
│     Auto-detect browser language                           │
│                                                             │
│  Sana va vaqt formati / Date & Time Format                │
│  ┌─────────────────────────────────┐                      │
│  │ 11-Fev, 2026, 14:30        ▼   │                      │
│  └─────────────────────────────────┘                      │
│  Namuna / Preview: 11-Fev, 2026, 14:30                    │
│                                                             │
│  Raqam formati / Number Format                            │
│  ⦿ 1,234.56  (International)                              │
│  ◯ 1 234,56  (Regional)                                   │
│                                                             │
│  Vaqt zonasi / Time Zone                                  │
│  ┌─────────────────────────────────┐                      │
│  │ (GMT+5) Tashkent           ▼   │                      │
│  └─────────────────────────────────┘                      │
│                                                             │
│  [Bekor qilish / Cancel]      [Saqlash / Save]            │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### Wireframe 3: Widget Language Settings

```
┌────────────────────────────────────────────────────────────┐
│  Widget Tili / Widget Language                             │
├────────────────────────────────────────────────────────────┤
│  Tashrif buyuruvchilar ko'radigan til                     │
│                                                             │
│  Widget Tili / Widget Language                            │
│  ┌─────────────────────────────────┐                      │
│  │ 🇺🇿 O'zbek                 ▼   │                      │
│  └─────────────────────────────────┘                      │
│                                                             │
│  ▼ 🇺🇿 O'zbek Matnlari / Uzbek Texts                      │
│                                                             │
│    Welcome Message                                         │
│    ┌─────────────────────────────────────────────┐ 145/200│
│    │ Salom! Sizga qanday yordam bera olamiz?    │        │
│    └─────────────────────────────────────────────┘        │
│    Reset to default                                        │
│                                                             │
│    Greeting                                         28/50 │
│    ┌─────────────────────────────────────────────┐        │
│    │ Xush kelibsiz!                              │        │
│    └─────────────────────────────────────────────┘        │
│                                                             │
│    Online Status                                    6/20  │
│    ┌─────────────────────────────────────────────┐        │
│    │ Onlayn                                      │        │
│    └─────────────────────────────────────────────┘        │
│                                                             │
│    ... (12 more fields)                                   │
│                                                             │
│  ☑ Ko'p tillarni yoqish / Enable Multi-Language Widget   │
│                                                             │
│  Til aniqlash / Language Detection                        │
│  ⦿ Browser tilidan / From browser                         │
│  ◯ IP manzilidan / From IP address                        │
│  ◯ Qo'lda tanlash / Manual selection                      │
│                                                             │
│  [Save Changes]                                            │
│                                                             │
└────────────────────────────────────────────────────────────┘

┌─────────────────────────────┐
│ Oldindan ko'rish / Preview  │←─ Live Preview (sticky)
├─────────────────────────────┤
│  ┌─────────────────────────┐│
│  │ 💬 Xush kelibsiz!       ││
│  │                         ││
│  │ 👤 Operator (Onlayn)    ││
│  │                         ││
│  │ Salom! Sizga qanday     ││
│  │ yordam bera olamiz?     ││
│  │                         ││
│  │ [Xabar yozing...]  [>] ││
│  └─────────────────────────┘│
│                             │
│  Til:                       │
│  [O'z] [Ru] [En]            │
│                             │
└─────────────────────────────┘
```

---

## 13. FIGMA COMPONENTS

```
multi-language/
├── language-selector-modal/
│   ├── modal-backdrop (blur)
│   ├── modal-container (480px)
│   ├── modal-header (title + close)
│   ├── search-input (optional)
│   ├── language-grid (2-col)
│   │   └── language-card (6 variants: uz/ru/en/tr/kk/it)
│   │       ├── flag-emoji (32px)
│   │       ├── native-name (16px Semibold)
│   │       ├── english-name (13px Regular)
│   │       ├── checkmark (if selected)
│   │       └── states: default/hover/selected
│   └── modal-footer (description text)
├── settings-language-section/
│   ├── section-card (white bg, border)
│   ├── current-language-display
│   │   ├── flag-icon (24px)
│   │   ├── language-name
│   │   └── change-button (outline)
│   ├── auto-detect-checkbox
│   ├── date-time-format-dropdown
│   ├── date-time-preview
│   ├── number-format-radio (2 options)
│   ├── timezone-dropdown
│   └── action-buttons (cancel/save)
├── widget-language-settings/
│   ├── section-card
│   ├── widget-language-dropdown
│   ├── customizable-texts-accordion
│   │   └── accordion-item (per language)
│   │       ├── accordion-header (flag + language name)
│   │       └── accordion-body
│   │           └── text-field (15 fields)
│   │               ├── input (with counter)
│   │               └── reset-link
│   ├── multi-language-toggle
│   ├── language-detection-radio (3 options)
│   └── live-preview-widget (sticky sidebar 360px)
│       ├── widget-mockup (360×520px)
│       └── language-switcher-buttons
└── translation-manager/ (Admin)
    ├── page-header (title + add language button)
    ├── language-tabs (horizontal)
    ├── translation-table
    │   ├── table-header (columns: Key + Languages + Actions)
    │   ├── table-row (editable cells)
    │   │   ├── key-cell (readonly)
    │   │   ├── translation-cell (editable, inline edit)
    │   │   │   └── states: default/editing/saved/missing(yellow)
    │   │   └── actions-cell (edit/history buttons)
    │   └── pagination
    ├── filters-bar
    │   ├── search-input
    │   ├── category-filter-dropdown
    │   └── status-filter-dropdown
    └── export-import-section
        ├── export-button (modal)
        └── import-button (modal with preview)
```

---

## 14. API ENDPOINTS

```
# Get Supported Languages
GET /api/languages
Response: [
  { "code": "uz", "name": "O'zbek", "native": "O'zbek", "flag": "🇺🇿", "rtl": false },
  { "code": "ru", "name": "Russian", "native": "Русский", "flag": "🇷🇺", "rtl": false },
  { "code": "en", "name": "English", "native": "English", "flag": "🇬🇧", "rtl": false },
  { "code": "tr", "name": "Turkish", "native": "Türkçe", "flag": "🇹🇷", "rtl": false },
  { "code": "kk", "name": "Kazakh", "native": "Қазақша", "flag": "🇰🇿", "rtl": false },
  { "code": "it", "name": "Italian", "native": "Italiano", "flag": "🇮🇹", "rtl": false }
]

# Get User Language Settings
GET /api/users/settings/language
Response: {
  "language": "uz",
  "auto_detect": true,
  "date_format": "dd-MMM, yyyy, HH:mm",
  "number_format": "1,234.56",
  "timezone": "Asia/Tashkent"
}

# Update User Language Settings
PUT /api/users/settings/language
Body: {
  "language": "en",
  "auto_detect": false,
  "date_format": "MMM dd, yyyy, h:mm a",
  "number_format": "1,234.56",
  "timezone": "America/New_York"
}
Response: { "success": true }

# Get Widget Language Settings
GET /api/workspaces/:id/widget/language
Response: {
  "language": "uz",
  "multi_language_enabled": true,
  "available_languages": ["uz", "ru", "en"],
  "language_detection": "browser", // 'browser' | 'ip' | 'manual'
  "translations": {
    "uz": {
      "welcome": "Salom! Sizga qanday yordam bera olamiz?",
      "greeting": "Xush kelibsiz!",
      // ... other fields
    },
    "en": {
      "welcome": "Hello! How can we help you?",
      "greeting": "Welcome!",
      // ... other fields
    }
  }
}

# Update Widget Language Settings
PUT /api/workspaces/:id/widget/language
Body: { ...settings }
Response: { "success": true }

# Get Translation Keys (Admin)
GET /api/translations?lang=uz&category=inbox
Response: {
  "inbox.title": "Kiruvchi xabarlar",
  "inbox.all_conversations": "Barcha suhbatlar",
  "inbox.search_placeholder": "Suhbatlarni qidirish...",
  // ... other keys
}

# Update Translation (Admin)
PUT /api/translations/:key
Body: {
  "uz": "Yangi tarjima",
  "en": "New translation",
  "ru": "Новый перевод"
}
Response: { "success": true }

# Bulk Import Translations (Admin)
POST /api/translations/import
Body: FormData with JSON/CSV file
Response: {
  "success": true,
  "imported": 245,
  "updated": 123,
  "errors": []
}

# Export Translations (Admin)
GET /api/translations/export?lang=uz&format=json
Response: JSON file download

# Auto-Translate (AI-powered, optional)
POST /api/translations/auto-translate
Body: {
  "key": "inbox.new_feature_desc",
  "source_lang": "en",
  "source_text": "Assign chats automatically based on agent availability",
  "target_langs": ["uz", "ru", "tr"]
}
Response: {
  "uz": "Operatorlarning mavjudligiga qarab chatlarni avtomatik tayinlash",
  "ru": "Автоматически назначать чаты на основе доступности агентов",
  "tr": "Temsilci müsaitliğine göre sohbetleri otomatik olarak atayın"
}
```

---

## 15. DATABASE SCHEMA

```sql
-- User Language Settings
ALTER TABLE users ADD COLUMN language VARCHAR(5) DEFAULT 'uz';
ALTER TABLE users ADD COLUMN auto_detect_language BOOLEAN DEFAULT TRUE;
ALTER TABLE users ADD COLUMN date_format VARCHAR(50) DEFAULT 'dd-MMM, yyyy, HH:mm';
ALTER TABLE users ADD COLUMN number_format VARCHAR(20) DEFAULT '1,234.56';
ALTER TABLE users ADD COLUMN timezone VARCHAR(50) DEFAULT 'Asia/Tashkent';

-- Widget Language Settings (per workspace)
CREATE TABLE widget_language_settings (
  id UUID PRIMARY KEY,
  workspace_id UUID REFERENCES workspaces(id) UNIQUE NOT NULL,
  language VARCHAR(5) DEFAULT 'uz',
  multi_language_enabled BOOLEAN DEFAULT FALSE,
  available_languages VARCHAR(5)[] DEFAULT ARRAY['uz', 'en'],
  language_detection VARCHAR(20) DEFAULT 'browser', -- 'browser' | 'ip' | 'manual'
  translations JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Example translations JSONB structure
{
  "uz": {
    "welcome": "Salom! Sizga qanday yordam bera olamiz?",
    "greeting": "Xush kelibsiz!",
    "online": "Onlayn",
    "offline": "Oflayn",
    "away": "Biroz kutib turing",
    "typing": "Yozmoqda...",
    "send": "Yuborish",
    "placeholder": "Xabar yozing...",
    "file_upload": "Fayl yuklash",
    "csat_question": "Xizmat qandaydi?",
    "csat_thanks": "Rahmat!",
    "pre_chat_name": "Ismingiz",
    "pre_chat_email": "Email",
    "offline_message": "Hozir oflaynmiz. Xabar qoldiring."
  },
  "en": {
    "welcome": "Hello! How can we help you?",
    "greeting": "Welcome!",
    // ... other fields
  }
}

-- Translation Keys (for Translation Manager, Admin)
CREATE TABLE translation_keys (
  id UUID PRIMARY KEY,
  key VARCHAR(200) UNIQUE NOT NULL, -- e.g., 'inbox.title'
  category VARCHAR(50), -- 'common', 'auth', 'inbox', 'team', etc.
  description TEXT, -- What this key represents
  created_at TIMESTAMP DEFAULT NOW()
);

-- Translations (per language)
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  key_id UUID REFERENCES translation_keys(id),
  language VARCHAR(5) NOT NULL,
  value TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'translated', -- 'translated' | 'missing' | 'needs_review'
  updated_by UUID REFERENCES users(id),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(key_id, language)
);

-- Translation History (audit log)
CREATE TABLE translation_history (
  id UUID PRIMARY KEY,
  key_id UUID REFERENCES translation_keys(id),
  language VARCHAR(5) NOT NULL,
  old_value TEXT,
  new_value TEXT,
  changed_by UUID REFERENCES users(id),
  changed_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX translations_language_idx ON translations(language);
CREATE INDEX translation_keys_category_idx ON translation_keys(category);
CREATE INDEX translation_history_key_lang_idx ON translation_history(key_id, language);
```

---

## 16. FRONTEND IMPLEMENTATION (React + i18next)

### Setup i18next

```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

### i18n Configuration

```javascript
// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Load translations from backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    fallbackLng: 'uz',
    supportedLngs: ['uz', 'ru', 'en', 'tr', 'kk', 'it'],
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // React already escapes
    },
    
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files
      // Or load from API: '/api/translations?lang={{lng}}'
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
```

### Usage in Components

```jsx
import { useTranslation } from 'react-i18next';

function InboxPage() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('inbox.title')}</h1>
      <p>{t('inbox.all_conversations')}</p>
      <input 
        placeholder={t('inbox.search_placeholder')} 
      />
      
      {/* With interpolation */}
      <p>{t('dashboard.welcome', { name: user.name })}</p>
      
      {/* With plurals */}
      <p>{t('inbox.conversations_count', { count: 5 })}</p>
    </div>
  );
}
```

### Language Switcher Component

```jsx
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const languages = [
    { code: 'uz', flag: '🇺🇿', name: "O'zbek", native: "O'zbek" },
    { code: 'ru', flag: '🇷🇺', name: 'Russian', native: 'Русский' },
    { code: 'en', flag: '🇬🇧', name: 'English', native: 'English' },
    { code: 'tr', flag: '🇹🇷', name: 'Turkish', native: 'Türkçe' },
    { code: 'kk', flag: '🇰🇿', name: 'Kazakh', native: 'Қазақша' },
    { code: 'it', flag: '🇮🇹', name: 'Italian', native: 'Italiano' },
  ];
  
  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    
    // Update HTML attributes
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute(
      'dir', 
      ['ar', 'he', 'fa'].includes(lang) ? 'rtl' : 'ltr'
    );
    
    // Save to backend
    await fetch('/api/users/settings/language', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language: lang })
    });
  };
  
  return (
    <div className="language-grid">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-card ${i18n.language === lang.code ? 'selected' : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          <span className="flag">{lang.flag}</span>
          <span className="native">{lang.native}</span>
          <span className="english">{lang.name}</span>
          {i18n.language === lang.code && <span className="checkmark">✓</span>}
        </button>
      ))}
    </div>
  );
}
```

---

## 17. ACCESSIBILITY

### Keyboard Navigation
- **Tab:** Navigate language cards
- **Enter/Space:** Select language
- **Escape:** Close modal
- **Arrow keys:** Navigate grid (optional enhancement)

### ARIA Labels

```jsx
<div 
  role="dialog" 
  aria-labelledby="language-modal-title"
  aria-modal="true"
>
  <h2 id="language-modal-title">
    {t('settings.select_language')}
  </h2>
  
  <div role="radiogroup" aria-label="Language selection">
    {languages.map((lang) => (
      <button
        key={lang.code}
        role="radio"
        aria-checked={i18n.language === lang.code}
        aria-label={`${lang.native} - ${lang.name}`}
        onClick={() => changeLanguage(lang.code)}
      >
        {/* Card content */}
      </button>
    ))}
  </div>
</div>
```

### Screen Reader Announcements

```javascript
// After language change
const announce = (message) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 3000);
};

// Usage
changeLanguage('en').then(() => {
  announce('Language changed to English');
});
```

---

## 18. MICRO-INTERACTIONS

1. **Language card hover:** bg transparent → #F9FAFB, border #E5E7EB → #D1D5DB, 100ms
2. **Language card click:** scale 1 → 0.98 → 1, 200ms, show checkmark fade-in
3. **Checkmark appear:** scale 0 → 1.2 → 1, 300ms ease-out, color fade #10B981
4. **Modal open:** backdrop fade 0→50% 200ms, modal scale 0.95→1 + translateY(-10px)→0 200ms
5. **Modal close:** reverse animation 150ms
6. **Language switch:** Stagger fade-out all text 100ms → change language → stagger fade-in 100ms delay 50ms each
7. **Flag emoji pulse:** On hover, scale 1→1.15→1, 300ms (playful)
8. **Save button:** Click scale 0.98, spinner appears, success checkmark green fade-in
9. **Auto-detect checkbox:** Check/uncheck with smooth slide animation 200ms
10. **Dropdown open:** Fade-in 150ms + slide-down 5px
11. **Text input focus:** Border #E5E7EB → #4F46E5, shadow-md fade-in 150ms
12. **Character counter:** Color change: #9CA3AF → #F59E0B (warn at 90%) → #EF4444 (limit)
13. **Live preview update:** Widget text fade-out 100ms → update → fade-in 200ms
14. **Translation table cell save:** Green checkmark scale-in 0→1.2→1, 300ms, fade-out after 2s
15. **RTL switch:** Smooth 300ms transition all layout shifts (padding, margins, positions)

---

## 19. USER FLOWS

### Flow 1: Change Interface Language
1. User sees interface in O'zbek (default)
2. Clicks user avatar → dropdown opens
3. Clicks "🌍 Til / Language"
4. Language selector modal opens (480px, 6 cards)
5. User clicks "🇬🇧 English" card
6. Card scales, checkmark appears
7. Modal closes after 500ms
8. All text in interface fades out 100ms
9. Language changes to English
10. All text fades in with new translations 200ms
11. Save to localStorage + backend (async)
12. Toast: "Language changed to English ✓"

### Flow 2: Auto-Detect Language on First Login
1. New user signs up
2. No language preference in database
3. System checks `navigator.language`: "ru-RU"
4. Extracts language code: "ru"
5. Checks if supported: Yes
6. Sets interface to Russian
7. HTML lang attribute: `<html lang="ru">`
8. Loads Russian translations
9. User sees dashboard in Russian
10. Modal prompt: "Мы выбрали русский язык. Изменить?" with "Change" button (optional)

### Flow 3: Configure Widget Language (Multi-Language)
1. Admin goes to Settings → Widget → Language
2. Sees current widget language: O'zbek
3. Enables "Ko'p tillarni yoqish" toggle
4. Selects available languages: O'zbek, Русский, English (checkboxes)
5. Selects detection method: "Browser tilidan" (radio)
6. Expands "🇺🇿 O'zbek Matnlari" accordion
7. Edits "Welcome Message": "Assalomu alaykum! Sizga yordam kerakmi?"
8. Sees live preview update instantly on right sidebar
9. Switches preview language dropdown to "English"
10. Preview shows English texts
11. Clicks "Save Changes"
12. Loading: "Saving..."
13. Success toast: "Widget settings saved ✓"
14. Visitors now see language selector in widget (🇺🇿 | 🇷🇺 | 🇬🇧 buttons)

---

## 20. TESTING CHECKLIST

### Functional Testing
- [ ] Language selector modal opens and closes correctly
- [ ] All 6 languages can be selected
- [ ] Selected language shows checkmark
- [ ] Interface text updates without page reload
- [ ] Language preference saves to localStorage
- [ ] Language preference saves to backend (API call)
- [ ] Auto-detect works on first login
- [ ] Browser language detection works correctly
- [ ] Date formatting changes with language
- [ ] Number formatting changes with language
- [ ] RTL layout works for Arabic (if implemented)
- [ ] Widget language settings save correctly
- [ ] Multi-language widget shows language switcher
- [ ] Translation Manager (Admin) loads and edits translations
- [ ] Export/import translations works

### UI/UX Testing
- [ ] Language cards have proper hover states
- [ ] Selected card has visible highlight
- [ ] Modal animations smooth (open/close)
- [ ] Text fade transitions smooth
- [ ] Responsive on mobile (stacked cards)
- [ ] Touch targets 44×44px minimum
- [ ] All text readable (WCAG AA contrast)

### Browser Testing
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS/iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Accessibility Testing
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Screen reader announces language change
- [ ] ARIA labels present and correct
- [ ] Focus indicators visible
- [ ] Color contrast WCAG AA compliant

### Performance Testing
- [ ] Translation files load < 500ms
- [ ] Language switch updates UI < 200ms
- [ ] No layout shift during switch
- [ ] Lazy load translation files (only active language)

---

## 21. ROLLARGA KO'RA RUXSATLAR

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| Change own interface language | ✅ | ✅ | ✅ |
| Change widget language | ✅ | ❌ | ❌ |
| Enable multi-language widget | ✅ | ❌ | ❌ |
| Edit widget translations | ✅ | ❌ | ❌ |
| Access Translation Manager | ✅ | ❌ | ❌ |
| Add new language | ✅ | ❌ | ❌ |
| Export translations | ✅ | ⚠️ (view only) | ❌ |
| Import translations | ✅ | ❌ | ❌ |
| Auto-translate (AI) | ✅ | ❌ | ❌ |

---

**Status:** ✅ Production Ready  
**Oxirgi yangilanish:** 2026-02-11  
**Fayl nomi:** `figma-docs/31-multi-language.md`  
**Qatorlar:** ~2100+

**Keyingi qadam:** GDPR/Data deletion spec yaratish.
