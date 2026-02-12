# CHATFLOW — FIGMA ARCHITECTURE MAP

---

# DESIGN SYSTEM

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary-600 | `#4F46E5` | CTA, active states, links |
| Primary-500 | `#6366F1` | Hover states |
| Primary-400 | `#818CF8` | Light accent |
| Primary-100 | `#E0E7FF` | Background highlight, selected |
| Primary-50 | `#EEF2FF` | Subtle background |
| Gray-900 | `#111827` | Headings, primary text |
| Gray-700 | `#374151` | Secondary text, labels |
| Gray-500 | `#6B7280` | Placeholder, helper text |
| Gray-400 | `#9CA3AF` | Timestamps, muted text |
| Gray-300 | `#D1D5DB` | Borders, dividers |
| Gray-100 | `#F3F4F6` | Card hover, input bg |
| Gray-50 | `#F9FAFB` | Page background |
| White | `#FFFFFF` | Card background |
| Success-500 | `#10B981` | Online, success |
| Success-50 | `#ECFDF5` | Success bg |
| Error-500 | `#EF4444` | Offline, error, danger |
| Error-50 | `#FEF2F2` | Error bg |
| Warning-500 | `#F59E0B` | Away, warning |
| Warning-50 | `#FFFBEB` | Warning bg |
| Info-500 | `#3B82F6` | Info, links |
| Info-50 | `#EFF6FF` | Info bg |

## Dark Mode Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Dark-bg-primary | `#0F172A` | Main background |
| Dark-bg-secondary | `#1E293B` | Cards, elevated surfaces |
| Dark-bg-tertiary | `#334155` | Hover states, input backgrounds |
| Dark-text-primary | `#F1F5F9` | Main text, headings |
| Dark-text-secondary | `#CBD5E1` | Secondary text, labels |
| Dark-text-tertiary | `#94A3B8` | Muted text, placeholders |
| Dark-border | `#334155` | Borders, dividers |
| Dark-border-hover | `#475569` | Hover state borders |
| Dark-Primary-600 | `#6366F1` | CTA, active states (brighter for dark) |
| Dark-Primary-500 | `#818CF8` | Hover states |
| Dark-Primary-400 | `#A5B4FC` | Light accent |

**Note:** Dark mode uses same Success, Error, Warning colors with adjusted opacity/brightness for contrast.

## Gradients

| Token | Value | Usage |
|-------|-------|-------|
| Hero | `linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)` | Hero section |
| CTA | `linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)` | CTA section |
| Widget Header | `linear-gradient(180deg, #4F46E5 0%, #6366F1 100%)` | Chat widget header |

## Typography

| Token | Size | Weight | Line-height |
|-------|------|--------|-------------|
| H1 (Landing) | 56px | Bold 700 | 64px |
| H2 (Landing) | 40px | Bold 700 | 48px |
| H3 (Landing) | 28px | Semibold 600 | 36px |
| H4 (Landing) | 20px | Semibold 600 | 28px |
| Body Large | 18px | Regular 400 | 28px |
| Body | 16px | Regular 400 | 24px |
| Body Small | 14px | Regular 400 | 20px |
| Caption | 12px | Medium 500 | 16px |
| Page Title (Dash) | 24px | Semibold 600 | 32px |
| Section Title (Dash) | 18px | Semibold 600 | 24px |
| Card Title (Dash) | 16px | Semibold 600 | 24px |
| Table Header | 12px | Semibold 600 | 16px |
| Body (Dash) | 14px | Regular 400 | 20px |
| Small (Dash) | 12px | Regular 400 | 16px |
| Metric Value | 32px | Bold 700 | 40px |
| Nav Item | 14px | Medium 500 | 20px |

**Font family:** Inter (primary), JetBrains Mono (code), -apple-system fallback

## Spacing

| Token | Value |
|-------|-------|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-5 | 20px |
| space-6 | 24px |
| space-8 | 32px |
| space-10 | 40px |
| space-12 | 48px |
| space-16 | 64px |
| space-20 | 80px |
| space-24 | 96px |

## Layout Tokens

| Token | Value |
|-------|-------|
| Landing max-width | 1200px |
| Sidebar expanded | 240px |
| Sidebar collapsed | 64px |
| Header height | 64px |
| Chat list width | 360px |
| Info sidebar width | 280px |
| Onboarding container | 600px |
| Modal small | 400px |
| Modal medium | 560px |
| Modal large | 720px |
| Auth card | 480px |
| Settings content max-width | 800px |

## Border Radius

| Token | Value |
|-------|-------|
| radius-sm | 4px |
| radius-md | 8px |
| radius-lg | 12px |
| radius-xl | 16px |
| radius-2xl | 24px |
| radius-full | 9999px |

## Shadows

| Token | Value |
|-------|-------|
| shadow-sm | `0 1px 2px rgba(0,0,0,0.05)` |
| shadow-md | `0 4px 6px -1px rgba(0,0,0,0.1)` |
| shadow-lg | `0 10px 15px -3px rgba(0,0,0,0.1)` |
| shadow-xl | `0 20px 25px -5px rgba(0,0,0,0.1)` |
| shadow-inner | `inset 0 2px 4px rgba(0,0,0,0.06)` |

## Components

### Buttons
| Variant | Bg | Text | Border | Height |
|---------|------|------|--------|--------|
| Primary | #4F46E5 | #FFFFFF | none | 44px |
| Secondary | #FFFFFF | #4F46E5 | 1px #4F46E5 | 44px |
| Outline | transparent | #374151 | 1px #D1D5DB | 44px |
| Ghost | transparent | #374151 | none | 44px |
| Danger | #EF4444 | #FFFFFF | none | 44px |
| Small | — | — | — | 36px |
| Large | — | — | — | 52px |

States: Default → Hover → Active → Disabled → Loading

### Inputs
| State | Border | Background |
|-------|--------|------------|
| Default | 1px #D1D5DB | #FFFFFF |
| Focus | 2px #4F46E5 | #FFFFFF |
| Error | 2px #EF4444 | #FEF2F2 |
| Success | 2px #10B981 | #ECFDF5 |
| Disabled | 1px #E5E7EB | #F9FAFB |

Height: 44px, radius: 8px, padding: 12px 16px

### Cards
| Variant | Properties |
|---------|-----------|
| Default | White bg, radius-lg, shadow-md, padding 24px |
| Outlined | White bg, 1px #E5E7EB, radius-lg, padding 24px |
| Elevated | White bg, shadow-lg, radius-lg, padding 24px |
| Interactive | Hover: shadow-lg + translateY(-2px) |

### Badges
| Variant | Background | Text |
|---------|-----------|------|
| Default | #F3F4F6 | #374151 |
| Primary | #E0E7FF | #4F46E5 |
| Success | #ECFDF5 | #059669 |
| Error | #FEF2F2 | #DC2626 |
| Warning | #FFFBEB | #D97706 |

Pill shape (radius-full), 12px Medium, padding 4px 8px

### Avatars
| Size | Pixel |
|------|-------|
| XS | 24px |
| SM | 32px |
| MD | 40px |
| LG | 48px |
| XL | 64px |
| 2XL | 120px |

Fallback: initials on Primary-100 bg, Primary-600 text

### Toggle Switch
44px × 24px, Off: #D1D5DB, On: #4F46E5, Knob: 20px white

### Checkbox / Radio
20px × 20px, Checked: #4F46E5 bg + white mark, Checkbox radius: 4px, Radio radius: 50%

### Toast / Notification
| Variant | Color |
|---------|-------|
| Success | #10B981 |
| Error | #EF4444 |
| Warning | #F59E0B |
| Info | #3B82F6 |

Position: top-right, max-width 400px, radius-lg, slide-in, 2-3s auto-dismiss

### Icons
Style: Outline (Heroicons / Phosphor), Size: 20px default, Color: #6B7280 default / #4F46E5 active, Stroke: 1.5px

### Add-on Card
| Property | Value |
|----------|-------|
| Size | 560×280px (desktop), 100% width (mobile) |
| Structure | Illustration area (560×180px) + Content area (100px) |
| Illustration | Gradient background with centered icon/graphic |
| Title | 18px Semibold, Gray-900, margin-top 16px |
| Description | 14px Regular, Gray-600, 2 lines, line-clamp |
| Pricing | 16px Medium, Gray-900, margin-top 8px |
| Badge | "Coming soon" / "Popular" / "New" - top-right absolute |
| CTA Button | Primary 44px height, full-width in content area |
| Hover State | shadow-lg, translateY(-4px), transition 200ms |
| Radius | radius-xl (16px) |
| Padding | Content: 20px horizontal, 16px vertical |

Badge Variants:
- Popular: Primary-600 bg, white text
- New: Success-500 bg, white text
- Coming soon: Gray-400 bg, white text

### Knowledge Base Article Card
| Property | Value |
|----------|-------|
| Size | 100% width (responsive) |
| Min-height | 120px |
| Structure | Icon/Emoji + Title + Description + Meta |
| Icon | 40px circle, Primary-50 bg, emoji or icon |
| Title | 16px Semibold, Gray-900, 2 lines max |
| Description | 14px Regular, Gray-600, 3 lines max, line-clamp |
| Meta | Views count, Last updated, Reading time |
| Hover State | shadow-md, border Primary-200 |
| Radius | radius-lg (12px) |
| Padding | 20px |
| Border | 1px #E5E7EB default, 2px Primary-200 hover |

### Category Badge
| Property | Value |
|----------|-------|
| Size | Auto-width, 28px height |
| Padding | 6px 12px |
| Font | 12px Medium |
| Color | Gray-700 text, Gray-100 bg |
| Hover | Gray-800 text, Gray-200 bg |
| Radius | radius-full (pill) |
| Icon | Optional 16px icon left |

### KB Search Bar
| Property | Value |
|----------|-------|
| Height | 56px (large for prominence) |
| Width | 600px max (centered on public portal) |
| Padding | 16px 20px |
| Font | 16px Regular |
| Icon | Search 20px left, 16px from edge |
| Border | 2px #D1D5DB default, 2px Primary-600 focus |
| Radius | radius-xl (16px) |
| Shadow | shadow-lg on focus |
| Placeholder | "Qidiruv..." or "Search articles..." |

### Contact Card
| Property | Value |
|----------|-------|
| Card Size | 320px × 180px (horizontal layout) |
| Padding | 20px |
| Border | 1px #E5E7EB |
| Radius | radius-lg (12px) |
| Shadow | shadow-sm, shadow-md on hover |
| Avatar | 56px circle, left-aligned |
| Name | 16px Semibold, Primary-900, max 2 lines |
| Email | 14px Regular, Gray-600 |
| Phone | 14px Regular, Gray-600 |
| Organization | 13px Medium, Primary-600, badge style |
| Tags | 12px, badge-sm, max 3 visible |
| Last Seen | 12px Regular, Gray-500, bottom-right |
| Actions | Hover: view, edit, delete icons (20px) |

### Organization Badge
| Property | Value |
|----------|-------|
| Height | 24px |
| Padding | 6px 10px |
| Font | 13px Medium |
| Background | Primary-50 |
| Color | Primary-700 |
| Border | None |
| Radius | radius-md (8px) |
| Icon | Building 14px, 6px left margin |
| Max Width | 180px with ellipsis |

### Custom Attribute Field
| Property | Value |
|----------|-------|
| Label | 13px Medium, Gray-700, 6px bottom margin |
| Input Height | 40px |
| Padding | 10px 12px |
| Border | 1px #D1D5DB, 1px Primary-600 focus |
| Radius | radius-md (8px) |
| Font | 14px Regular |
| Icon | Custom icon 16px, left side (based on type) |
| Types | Text, Number, Email, Phone, URL, Date, Dropdown |
| Required Mark | Asterisk (*), Red-500 |

## Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile (sm) | 375px |
| Tablet (md) | 768px |
| Desktop (lg) | 1024px |
| Wide (xl) | 1440px |
| Ultra-wide (2xl) | 1920px |

## Animations

| Animation | Parameters |
|-----------|-----------|
| Fade in | opacity 0→1, 200ms ease |
| Slide up | translateY(20px→0), 300ms ease |
| Scale | scale(0.95→1), 150ms ease |
| Hover lift | translateY(-2px), 200ms cubic-bezier(0.4, 0, 0.2, 1) |
| Pulse | scale(1→1.1→1), 1s ease-in-out loop |
| Skeleton | gradient shimmer, 1.5s ease-in-out loop |
| Spinner | rotate(360deg), 1s linear loop |
| Confetti | particles, 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) |
| Slide in right | translateX(100%→0), 250ms ease-out |
| Slide out right | translateX(0→100%), 200ms ease-in |

## Keyboard Shortcuts

| Shortcut | Action | Context |
|----------|--------|--------|
| **Global** |
| `Ctrl/Cmd + K` | Open search | All pages |
| `Ctrl/Cmd + /` | Show shortcuts help | All pages |
| `Esc` | Close modal/dropdown | All pages |
| **Inbox** |
| `J` | Next chat | Chat list |
| `K` | Previous chat | Chat list |
| `U` | Jump to first unread | Chat list |
| `Enter` | Open selected chat | Chat list |
| `R` | Reply to chat | Chat window |
| `E` | Mark as resolved | Chat window |
| `T` | Transfer chat | Chat window |
| `Ctrl/Cmd + Enter` | Send message | Chat input |
| `/` | Open canned responses | Chat input |
| `@` | Mention agent | Chat input (future) |
| `Ctrl/Cmd + B` | Bold text | Chat input |
| `Ctrl/Cmd + I` | Italic text | Chat input |
| **Navigation** |
| `G then I` | Go to Inbox | Dashboard |
| `G then A` | Go to Analytics | Dashboard |
| `G then T` | Go to Team | Dashboard |
| `G then S` | Go to Settings | Dashboard |
| **Canned Responses** |
| `/hello` | Insert welcome response | Chat input |
| `/pricing` | Insert pricing info | Chat input |
| `/thanks` | Insert thank you message | Chat input |
| `/support` | Insert support info | Chat input |

## Accessibility Guidelines

### WCAG 2.1 AA Compliance

**Color Contrast:**
- Normal text (16px): Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- UI components: Minimum 3:1
- Primary (#4F46E5) on white: 8.2:1 ✓
- Gray-700 (#374151) on white: 10.8:1 ✓
- Error (#EF4444) on white: 4.5:1 ✓

**Focus Indicators:**
- All interactive elements MUST have visible focus ring
- Focus ring: 2px solid #4F46E5, 2px offset
- Dark mode focus: 2px solid #818CF8
- Skip focus on decorative elements

**ARIA Labels:**
- All buttons: `aria-label` or visible text
- Icon-only buttons: Required `aria-label`
- Form inputs: Associated `<label>` or `aria-label`
- Status indicators: `aria-live="polite"` for updates
- Modals: `role="dialog"`, `aria-modal="true"`
- Toasts: `role="alert"`, `aria-live="assertive"`

**Keyboard Navigation:**
- All functionality accessible via keyboard
- Tab order follows visual flow (left→right, top→bottom)
- Modal: Focus trap (Tab cycles within modal)
- Dropdown: Arrow keys for navigation, Enter to select, Esc to close
- Chat list: Arrow up/down, Enter to open

**Screen Reader Support:**
- Semantic HTML: `<nav>`, `<main>`, `<aside>`, `<article>`
- Headings hierarchy: H1 → H2 → H3 (no skipping)
- Alt text for images: Descriptive, max 125 chars
- Loading states: `aria-busy="true"` + announcement
- Error messages: `aria-describedby` linked to error text

**RTL Support:**
- Text direction: `dir="rtl"` for Arabic/Hebrew (future)
- Layout mirroring: Flex-direction reverse
- Icons: Do NOT mirror directional indicators

---

# MODULE MAP

## M-01 Landing Page
- **Role:** Public (unauthenticated)
- **Sub-modules:** Header, Hero, Trust Bar, Kimlar Uchun, Qanday Ishlaydi, Imkoniyatlar, Integratsiyalar, Nega Biz, Tariflar, Final CTA, Footer

## M-02 Auth
- **Role:** Public (unauthenticated)
- **Sub-modules:** Sign Up, Email Verification, Login, Forgot Password, Reset Password, First Login Welcome

## M-03 Onboarding
- **Role:** Admin (first-time)
- **Sub-modules:** Welcome Screen, Workspace Setup, Widget Customization, Widget Installation, Verification/Success

## M-04 Dashboard Shell
- **Role:** Admin, Agent
- **Sub-modules:** Header, Sidebar, Main Content Area, Mobile Bottom Nav

## M-05 Inbox
- **Role:** Admin, Agent
- **Sub-modules:** Chat List, Chat Window, Info Sidebar, Transfer Modal, Resolve Modal, Canned Responses, File Upload, Chat Actions

## M-06 Automation
- **Role:** Admin
- **Sub-modules:** Ish Vaqti (Working Hours), Auto-Reply, Triggers, Greetings

## M-07 Team
- **Role:** Admin, Manager
- **Sub-modules:** Agents Table, Roles & Permissions, Invitations

## M-08 Analytics
- **Role:** Admin, Manager, Agent (My Stats only)
- **Sub-modules:** Overview, Performance, CSAT, My Stats, Goals, Export, Responsiveness, Operators, SLA, Channels, Segments, Tags, Custom Dashboards

## M-09 Settings
- **Role:** Admin (all tabs), Agent (Profile only)
- **Sub-modules:** Workspace, Widget, Security, Notifications, Profile, Advanced

## M-10 Billing
- **Role:** Admin
- **Sub-modules:** Plan, Payment, Invoices, Usage

## M-11 Developer
- **Role:** Admin
- **Sub-modules:** API Keys, Webhooks, Integrations, API Docs

## M-12 Chat Widget (Visitor Side)
- **Role:** Visitor
- **Sub-modules:** Launcher, Chat Window, Pre-chat Form, Offline Form, Chat View, Feedback, Notifications

## M-13 Help & Support
- **Role:** Admin, Agent
- **Sub-modules:** Docs Link, Support Link, Knowledge Base

## M-14 Add-ons & Marketplace
- **Role:** Admin
- **Sub-modules:** Add-ons Catalog, Active Add-ons, Add-on Configuration, Billing Integration

## M-15 Knowledge Base
- **Role:** Admin (management), Public (viewing)
- **Sub-modules:** Articles Management, Categories, Settings, Public Portal, Search, Analytics

## M-16 Contacts (CRM)
- **Role:** Admin, Manager, Operator (viewing contacts)
- **Sub-modules:** Contact List, Contact Profile, Organizations, Import/Export, Segments, Attributes, Merge

## M-17 Online Visitors
- **Role:** Admin, Manager, Operator (viewing visitors)
- **Sub-modules:** Visitor List, Visitor Profile, Real-time Tracking, Geolocation, Activity History, Proactive Chat

## M-18 Team Chat
- **Role:** Admin, Manager, Operator (all agents)
- **Sub-modules:** Team Chat List, Chat Rooms, Direct Messages, File Sharing, Mentions, Notifications

---

# FIGMA FRAME MAP

---

## LANDING PAGE

### SCR-L01 Landing — Header (Sticky)
- **ID:** SCR-L01
- **Nom:** Landing Header
- **Role:** Public
- **State:** Default
- **UI:**
  - Logo (120px, link to hero)
  - Nav links: Imkoniyatlar, Tariflar, Haqimizda, Bog'lanish
  - CTA buttons: "Kirish" (outline), "Bepul boshlash" (primary)
  - Sticky top, 72px height, white bg, shadow-sm
- **Entry Condition:** Page load
- **Exit Action:** Scroll to section / Navigate to Auth

### SCR-L01-S01 Landing — Header (Mobile Hamburger)
- **ID:** SCR-L01-S01
- **Nom:** Landing Header Mobile Menu Open
- **Role:** Public
- **State:** Mobile menu expanded
- **UI:**
  - Hamburger icon → X icon
  - Full-screen overlay or slide-down menu
  - Nav links stacked vertically
  - CTA buttons stacked
- **Entry Condition:** Hamburger tap on mobile
- **Exit Action:** Close menu / Navigate

### SCR-L02 Landing — Hero Section
- **ID:** SCR-L02
- **Nom:** Hero Section
- **Role:** Public
- **State:** Default
- **UI:**
  - 2-column layout: left text, right product screenshot
  - H1: 56px Bold, "Mijozlar bilan aloqani osonlashtiring" [inferred]
  - Subtitle: 18px Regular, Gray-500
  - CTA: "Bepul boshlash" (primary large) + "Demo ko'rish" (outline)
  - Background: Hero gradient (#4F46E5 → #7C3AED)
  - Product screenshot with shadow-xl, radius-xl
- **Entry Condition:** Page load
- **Exit Action:** Click CTA → Auth / Scroll down

### SCR-L03 Landing — Trust Bar
- **ID:** SCR-L03
- **Nom:** Trust Bar
- **Role:** Public
- **State:** Default
- **UI:**
  - 3 variants: metrics row, social proof quotes, company logos
  - Metrics: "1000+ kompaniyalar", "50K+ chatlar", "99.9% uptime"
  - Centered, horizontal layout
- **Entry Condition:** Scroll
- **Exit Action:** None (informational)

### SCR-L04 Landing — Kimlar Uchun
- **ID:** SCR-L04
- **Nom:** Kimlar Uchun Section
- **Role:** Public
- **State:** Default
- **UI:**
  - Section title H2
  - 3 role cards: Operator, Menejer, Administrator
  - Each card: icon, title, description, features list
  - Warning block: "Bu platforma mijozlar uchun emas"
- **Entry Condition:** Scroll
- **Exit Action:** None

### SCR-L05 Landing — Qanday Ishlaydi
- **ID:** SCR-L05
- **Nom:** Qanday Ishlaydi Section
- **Role:** Public
- **State:** Default
- **UI:**
  - 4-step horizontal timeline
  - Each step: number, icon, title, description
  - Steps: 1. Vidjet o'rnating, 2. Chatlar tushadi, 3. Agent javob beradi, 4. Natija tahlil
  - Connecting line between steps
- **Entry Condition:** Scroll
- **Exit Action:** None

### SCR-L06 Landing — Asosiy Imkoniyatlar
- **ID:** SCR-L06
- **Nom:** Asosiy Imkoniyatlar Section
- **Role:** Public
- **State:** Default
- **UI:**
  - Section title H2
  - 6 feature cards in 3×2 grid
  - Each card: icon (48px), title (H4), description
  - Cards: interactive hover (lift + shadow)
- **Entry Condition:** Scroll
- **Exit Action:** None

### SCR-L07 Landing — Integratsiyalar
- **ID:** SCR-L07
- **Nom:** Integratsiyalar Section
- **Role:** Public
- **State:** Default
- **UI:**
  - 3 channel cards: Widget, Email, Messenger/WhatsApp
  - Each: icon, channel name, description, status badge
- **Entry Condition:** Scroll
- **Exit Action:** None

### SCR-L08 Landing — Nega Biz
- **ID:** SCR-L08
- **Nom:** Nega Biz (Advantages) Section
- **Role:** Public
- **State:** Default
- **UI:**
  - 6 advantages in 2×3 grid
  - Each: icon, title, description
- **Entry Condition:** Scroll
- **Exit Action:** None

### SCR-L09 Landing — Tariflar
- **ID:** SCR-L09
- **Nom:** Tariflar (Pricing) Section
- **Role:** Public
- **State:** Default
- **UI:**
  - 3 pricing cards: Free ($0), Pro ($29), Enterprise (Custom)
  - Pro card: "Mashhur" badge, highlighted border
  - Each card: plan name, price, feature list, CTA button
  - "Contact Sales" for Enterprise
  - Monthly/Annual toggle [inferred]
- **Entry Condition:** Scroll
- **Exit Action:** Click CTA → Auth

### SCR-L10 Landing — Final CTA
- **ID:** SCR-L10
- **Nom:** Final CTA Section
- **Role:** Public
- **State:** Default
- **UI:**
  - Gradient background (#4F46E5 → #7C3AED)
  - H2 white text
  - "Bepul boshlash" large button (white bg, primary text)
  - Subtitle text
- **Entry Condition:** Scroll
- **Exit Action:** Click CTA → Auth

### SCR-L11 Landing — Footer
- **ID:** SCR-L11
- **Nom:** Footer
- **Role:** Public
- **State:** Default
- **UI:**
  - Dark background (#111827)
  - 5 columns: Logo+description, Mahsulot, Kompaniya, Resurslar, Ijtimoiy
  - Bottom: copyright, privacy link, terms link
- **Entry Condition:** Scroll
- **Exit Action:** Navigate links

---

## AUTH

### SCR-A01 Sign Up — Default
- **ID:** SCR-A01
- **Nom:** Sign Up
- **Role:** Public
- **State:** Default
- **UI:**
  - Page bg: #F9FAFB, centered card 480px, white, radius-lg, shadow-md, padding 40px
  - Logo (140px, centered)
  - Title: "Ro'yxatdan o'tish" 24px Semibold
  - Google button (full-width, Google icon + text)
  - Divider "yoki"
  - Fields: Email, Parol (eye toggle), Parolni tasdiqlash (eye toggle)
  - Checkbox: Shartlarga rozilik (with links)
  - Submit: "Ro'yxatdan o'tish" primary full-width
  - Footer: "Akkauntingiz bormi? Kirish" link
- **Entry Condition:** Click "Bepul boshlash" or "Sign Up" link
- **Exit Action:** Submit → SCR-A02 Email Verification

### SCR-A01-S01 Sign Up — Validation Errors
- **ID:** SCR-A01-S01
- **Nom:** Sign Up Validation
- **Role:** Public
- **State:** Error
- **UI:**
  - Input borders: 2px #EF4444, bg: #FEF2F2
  - Error messages below inputs (12px #EF4444)
  - Messages: "Email noto'g'ri formatda", "Parol kamida 8 ta belgi", "Parollar mos kelmayapti"
  - Submit disabled until valid
  - Error shake animation on inputs
- **Entry Condition:** Submit with invalid data
- **Exit Action:** Fix errors → Re-submit

### SCR-A01-S02 Sign Up — Loading
- **ID:** SCR-A01-S02
- **Nom:** Sign Up Loading
- **Role:** Public
- **State:** Loading
- **UI:**
  - Submit button: "Akkaunt yaratilmoqda..." + 16px spinner
  - All inputs disabled
  - Button opacity maintained, spinner visible
- **Entry Condition:** Valid form submitted
- **Exit Action:** Success → SCR-A02 / Error → SCR-A01-S03

### SCR-A01-S03 Sign Up — Email Already Exists [inferred]
- **ID:** SCR-A01-S03
- **Nom:** Sign Up Email Exists
- **Role:** Public
- **State:** Error
- **UI:**
  - Email input: error border
  - Error text: "Bu email allaqachon ro'yxatdan o'tgan"
  - "Kirish" link highlighted
- **Entry Condition:** Existing email submitted
- **Exit Action:** Navigate to Login / Change email

### SCR-A02 Email Verification
- **ID:** SCR-A02
- **Nom:** Email Verification
- **Role:** Public
- **State:** Default
- **UI:**
  - Same card layout as Sign Up
  - Mail icon (48px) in Primary-50 circle (64px)
  - Title: "Email manzilini tasdiqlang"
  - Description: "Tasdiqlash havolasi emailingizga yuborildi"
  - Email display: semibold, Gray-100 bg pill
  - "Qayta yuborish" primary button
  - "Emailni o'zgartirish" ghost button
- **Entry Condition:** Successful sign up
- **Exit Action:** Click email link → SCR-A05 / Resend / Change email → SCR-A01

### SCR-A02-S01 Email Verification — Resend Loading
- **ID:** SCR-A02-S01
- **Nom:** Email Verification Resend Loading
- **Role:** Public
- **State:** Loading
- **UI:**
  - Button: "Yuborilmoqda..." + spinner
- **Entry Condition:** Click "Qayta yuborish"
- **Exit Action:** Success state → "Yuborildi!" + checkmark (3s)

### SCR-A02-S02 Email Verification — Link Expired [inferred]
- **ID:** SCR-A02-S02
- **Nom:** Email Verification Expired
- **Role:** Public
- **State:** Error
- **UI:**
  - Warning icon
  - Title: "Havola muddati tugagan" [inferred]
  - Description: "Yangi tasdiqlash havolasi yuborilsin" [inferred]
  - "Qayta yuborish" button
- **Entry Condition:** Expired verification link clicked
- **Exit Action:** Resend → SCR-A02

### SCR-A03 Login — Default
- **ID:** SCR-A03
- **Nom:** Login
- **Role:** Public
- **State:** Default
- **UI:**
  - Same card layout
  - Title: "Kirish"
  - Google button
  - Divider "yoki"
  - Fields: Email, Parol (eye toggle)
  - "Parolni unutdingizmi?" link (right-aligned)
  - Submit: "Kirish" primary full-width
  - Footer: "Akkauntingiz yo'qmi? Ro'yxatdan o'tish" link
- **Entry Condition:** Click "Kirish" link
- **Exit Action:** Submit → Dashboard (SCR-D01) or Onboarding (SCR-O01)

### SCR-A03-S01 Login — Validation Errors
- **ID:** SCR-A03-S01
- **Nom:** Login Validation
- **Role:** Public
- **State:** Error
- **UI:**
  - Error borders, error messages
  - "Email yoki parol noto'g'ri" [inferred]
- **Entry Condition:** Invalid credentials
- **Exit Action:** Fix → Re-submit

### SCR-A03-S02 Login — Loading
- **ID:** SCR-A03-S02
- **Nom:** Login Loading
- **Role:** Public
- **State:** Loading
- **UI:**
  - Button: "Kirilmoqda..." + spinner
- **Entry Condition:** Valid submit
- **Exit Action:** Success → Dashboard

### SCR-A03-S03 Login — Account Locked [inferred]
- **ID:** SCR-A03-S03
- **Nom:** Login Account Locked
- **Role:** Public
- **State:** Error
- **UI:**
  - Error banner at top of card
  - "Akkaunt vaqtincha bloklangan. 30 daqiqadan keyin qayta urinib ko'ring." [inferred]
  - "Parolni tiklash" link
- **Entry Condition:** Multiple failed login attempts
- **Exit Action:** Wait / Reset password

### SCR-A04 Forgot Password
- **ID:** SCR-A04
- **Nom:** Forgot Password
- **Role:** Public
- **State:** Default
- **UI:**
  - Same card layout
  - Back link: "← Kirish sahifasiga qaytish"
  - Title: "Parolni tiklash"
  - Description text
  - Email input
  - Submit: "Tiklash havolasini yuborish" primary
- **Entry Condition:** Click "Parolni unutdingizmi?" on Login
- **Exit Action:** Submit → Success message

### SCR-A04-S01 Forgot Password — Success
- **ID:** SCR-A04-S01
- **Nom:** Forgot Password Success
- **Role:** Public
- **State:** Success
- **UI:**
  - Button replaced with success message
  - Green bg (#ECFDF5), border #10B981
  - Text: "Havola yuborildi! Emailingizni tekshiring."
  - Checkmark icon
- **Entry Condition:** Valid email submitted
- **Exit Action:** Check email / Navigate to Login

### SCR-A04-S02 Reset Password [inferred]
- **ID:** SCR-A04-S02
- **Nom:** Reset Password Form
- **Role:** Public
- **State:** Default
- **UI:**
  - Same card layout
  - Title: "Yangi parol yaratish" [inferred]
  - Fields: Yangi parol, Parolni tasdiqlash (eye toggles)
  - Password strength bar
  - Submit: "Parolni yangilash" [inferred]
- **Entry Condition:** Valid reset link from email
- **Exit Action:** Submit → Login

### SCR-A05 First Login Welcome
- **ID:** SCR-A05
- **Nom:** First Login Welcome
- **Role:** Admin (first-time)
- **State:** Default
- **UI:**
  - Card padding: 48px
  - Celebration icon (64px, confetti animation)
  - Title: "Xush kelibsiz!" 24px Bold
  - Subtitle: "Akkauntingiz tayyor. Keling, platformani sozlaymiz."
  - CTA: "Dashboard'ga o'tish" primary (min 200px)
- **Entry Condition:** First login / Email verified
- **Exit Action:** Click CTA → Onboarding SCR-O01

---

## ONBOARDING

### SCR-O01 Onboarding — Welcome Screen
- **ID:** SCR-O01
- **Nom:** Onboarding Welcome
- **Role:** Admin
- **State:** Default (Step 1/4)
- **UI:**
  - Page bg: #F9FAFB, no header/sidebar
  - Progress indicator: 4 dots, step 1 active (#4F46E5), rest gray
  - Card: 600px, white, radius-lg, shadow-md, padding 48px
  - Celebration icon (64px, scale animation + confetti)
  - Title: "Xush kelibsiz, {Ism}!" 24px Semibold
  - Subtitle: "Keling, 5 daqiqada platformani sozlaymiz"
  - Steps preview list (4 items with icons)
  - CTA: "Boshlash" 56px primary full-width
- **Entry Condition:** First Login Welcome → click CTA
- **Exit Action:** Click "Boshlash" → SCR-O02

### SCR-O02 Onboarding — Workspace Setup
- **ID:** SCR-O02
- **Nom:** Workspace Setup
- **Role:** Admin
- **State:** Default (Step 1/4)
- **UI:**
  - Progress indicator: step 1 active
  - Card: 600px, padding 40px
  - Title: "Workspace yaratish" 24px Semibold (left-aligned)
  - Description text
  - Field 1: "Workspace nomi *" (required, helper: "Bu nom jamoangizga ko'rinadi")
  - Field 2: "Kompaniya veb-sayti" + "Tavsiya etiladi" badge, https:// prefix
  - Buttons: "Keyinroq" ghost + "Davom etish" primary 56px
- **Entry Condition:** Welcome → Boshlash
- **Exit Action:** Davom etish → SCR-O03

### SCR-O02-S01 Onboarding — Workspace Validation Error
- **ID:** SCR-O02-S01
- **Nom:** Workspace Validation
- **Role:** Admin
- **State:** Error
- **UI:**
  - Workspace nomi empty: error border, "Workspace nomi majburiy maydon"
  - URL warning: yellow border, "URL formati noto'g'ri"
  - Davom etish disabled
- **Entry Condition:** Submit without workspace name
- **Exit Action:** Fill required field

### SCR-O02-S02 Onboarding — Workspace Loading
- **ID:** SCR-O02-S02
- **Nom:** Workspace Saving
- **Role:** Admin
- **State:** Loading
- **UI:**
  - "Davom etish" → "Saqlanmoqda..." + spinner
- **Entry Condition:** Valid form submitted
- **Exit Action:** Success → SCR-O03

### SCR-O03 Onboarding — Widget Customization
- **ID:** SCR-O03
- **Nom:** Widget Customization
- **Role:** Admin
- **State:** Default (Step 2/4)
- **UI:**
  - Progress: step 2 active
  - Split layout: settings panel (left) + live preview (right)
  - Settings: Color picker (primary + presets), shape (Kvadrat/Yumaloq), position (chap/o'ng), button text input, welcome message textarea, status toggle
  - Live preview: real-time widget simulation (button 56×56 + chat window 360×480)
  - Buttons: "Orqaga" ghost + "Davom etish" primary
- **Entry Condition:** Workspace Setup complete
- **Exit Action:** Davom etish → SCR-O04

### SCR-O04 Onboarding — Widget Installation
- **ID:** SCR-O04
- **Nom:** Widget Installation
- **Role:** Admin
- **State:** Default (Step 3/4)
- **UI:**
  - Progress: step 3 active
  - Title: "Vidjetni o'rnatish"
  - Code snippet block (dark bg, monospace, syntax highlighted)
  - Copy button ("Nusxalash" → "Nusxalandi ✓")
  - Instruction: "</body> dan oldin joylashtiring"
  - Verification status: "Tekshirilmoqda..." loading spinner
- **Entry Condition:** Widget customization done
- **Exit Action:** Widget found → SCR-O05

### SCR-O04-S01 Onboarding — Widget Not Found
- **ID:** SCR-O04-S01
- **Nom:** Widget Installation Failed
- **Role:** Admin
- **State:** Error
- **UI:**
  - Status: "Vidjet topilmadi" with error icon
  - Troubleshooting tips: kod joylashtirilmagan, cache, noto'g'ri joy
  - "Qayta tekshirish" button
  - "O'tkazib yuborish" ghost link
- **Entry Condition:** Verification failed
- **Exit Action:** Retry / Skip

### SCR-O04-S02 Onboarding — Widget Found
- **ID:** SCR-O04-S02
- **Nom:** Widget Installation Success
- **Role:** Admin
- **State:** Success
- **UI:**
  - Status: "Vidjet muvaffaqiyatli topildi" with success icon
  - Checklist: script yuklandi ✓, widget ko'rinmoqda ✓
  - "Davom etish" primary button
- **Entry Condition:** Widget verified
- **Exit Action:** → SCR-O05

### SCR-O05 Onboarding — Verification / Test Message
- **ID:** SCR-O05
- **Nom:** Verification & Success
- **Role:** Admin
- **State:** Default (Step 4/4)
- **UI:**
  - Progress: step 4 active
  - "Test xabar yuborish" button
  - Checklist: kod nusxalandi, script yuklandi, widget ko'rinmoqda, xabar inbox'ga tushdi
  - Success state: "Test xabar qabul qilindi!" celebration
  - CTA: "Dashboard'ga o'tish" primary
- **Entry Condition:** Widget installed
- **Exit Action:** → Dashboard SCR-D01

### SCR-O05-S01 Onboarding — Test Message Success
- **ID:** SCR-O05-S01
- **Nom:** Onboarding Complete
- **Role:** Admin
- **State:** Success
- **UI:**
  - Confetti animation
  - All checklist items green
  - "Dashboard'ga o'tish" highlighted
- **Entry Condition:** Test message received
- **Exit Action:** → Dashboard

---

## DASHBOARD SHELL

### SCR-D01 Dashboard — Default (Inbox Active)
- **ID:** SCR-D01
- **Nom:** Dashboard Shell
- **Role:** Admin, Agent
- **State:** Default
- **UI:**
  - Header: 64px, white, logo, search (Ctrl+K), status toggle (Online/Away/Busy), notification bell + badge, user menu (avatar + name + chevron)
  - Sidebar: 240px, white, nav items: Inbox (badge), Automation, Jamoa (Team), Analitika (Analytics), Kontaktlar (Contacts), Onlayn Tashrif Buyuruvchilar (Online Visitors), Jamoa Chat (Team Chat), Bilimlar Bazasi (Knowledge Base), Qo'shimchalar (Add-ons) / separator / Sozlamalar (Settings), Billing, Developer (Admin only) / separator / Hujjatlar (Docs), Qo'llab-quvvatlash (Support)
  - Active item: Primary-100 bg, Primary-600 text, left 3px border
  - Main content: fluid, #F9FAFB bg, 24px padding
- **Entry Condition:** Login / Onboarding complete
- **Exit Action:** Navigate via sidebar / header

### SCR-D01-S01 Dashboard — Sidebar Collapsed
- **ID:** SCR-D01-S01
- **Nom:** Dashboard Sidebar Collapsed
- **Role:** Admin, Agent
- **State:** Collapsed sidebar
- **UI:**
  - Sidebar: 64px, icons only
  - Tooltip on hover (dark bg, white text)
  - Badge: small dot (8px) on icon for unread
  - Content area wider (~1328px)
- **Entry Condition:** Click collapse toggle
- **Exit Action:** Click expand / hover

### SCR-D01-S02 Dashboard — Header Search Focused
- **ID:** SCR-D01-S02
- **Nom:** Search Focused
- **Role:** Admin, Agent
- **State:** Search active
- **UI:**
  - Search input: 2px #4F46E5 border, focus ring
  - Search dropdown/overlay with results [inferred]
  - Keyboard shortcut: Ctrl+K
- **Entry Condition:** Click search or Ctrl+K
- **Exit Action:** Select result / Esc

### SCR-D01-S03 Dashboard — Status Toggle Dropdown
- **ID:** SCR-D01-S03
- **Nom:** Status Toggle Open
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - 3 options: Online (green dot), Away (yellow dot), Busy (red dot)
  - Selected: checkmark
  - Dropdown: white, radius-lg, shadow-lg
- **Entry Condition:** Click status area
- **Exit Action:** Select status

### SCR-D01-S04 Dashboard — Notification Bell Dropdown
- **ID:** SCR-D01-S04
- **Nom:** Notifications Panel
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - Notification list [inferred]
  - Each: avatar, message preview, timestamp
  - Unread: bold text, blue dot
  - "Barchasini o'qilgan deb belgilash" link [inferred]
  - Empty: "Bildirishnoma yo'q" [inferred]
- **Entry Condition:** Click bell icon
- **Exit Action:** Click notification / Close

### SCR-D01-S05 Dashboard — User Menu Dropdown
- **ID:** SCR-D01-S05
- **Nom:** User Menu Open
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - Menu items: Sozlamalar (gear), Profil (user), Yordam (help), divider, Chiqish (logout, #EF4444)
  - Dropdown: white, radius-lg, shadow-lg, padding 8px
  - Items: 40px height, 12px padding, hover Gray-100
- **Entry Condition:** Click avatar/name
- **Exit Action:** Navigate / Close

### SCR-D01-S06 Dashboard — Logout Confirm [inferred]
- **ID:** SCR-D01-S06
- **Nom:** Logout Confirmation
- **Role:** Admin, Agent
- **State:** Modal
- **UI:**
  - Small modal (400px)
  - Title: "Chiqishni tasdiqlaysizmi?" [inferred]
  - Description: "Tizimdan chiqasiz" [inferred]
  - Buttons: "Bekor qilish" outline + "Chiqish" danger
- **Entry Condition:** Click "Chiqish" in user menu
- **Exit Action:** Confirm → Login / Cancel → Close

### SCR-D01-S07 Dashboard — Loading
- **ID:** SCR-D01-S07
- **Nom:** Dashboard Loading
- **Role:** Admin, Agent
- **State:** Loading
- **UI:**
  - Sidebar: 8 skeleton rectangles
  - Header: 2 skeleton areas
  - Content: 3 metric card skeletons + large content skeleton
  - Shimmer animation 1.5s loop
- **Entry Condition:** Initial page load
- **Exit Action:** Data loaded → Default

### SCR-D01-S08 Dashboard — Error
- **ID:** SCR-D01-S08
- **Nom:** Dashboard Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - Alert circle icon 48px #EF4444
  - "Xatolik yuz berdi" 18px Semibold
  - "Ma'lumotlarni yuklab bo'lmadi. Qayta urinib ko'ring."
  - "Qayta yuklash" outline button
- **Entry Condition:** API error
- **Exit Action:** Retry

### SCR-D01-S09 Dashboard — Mobile Layout
- **ID:** SCR-D01-S09
- **Nom:** Dashboard Mobile
- **Role:** Admin, Agent
- **State:** Mobile (<768px)
- **UI:**
  - No sidebar → Bottom navigation bar (64px + safe area)
  - Bottom tabs: Inbox (badge), Team, Analytics, Settings, Profile
  - Active: #4F46E5 icon + label
  - Default: #6B7280 icon + label
  - Header: minimal (logo + bell + avatar)
- **Entry Condition:** Screen < 768px
- **Exit Action:** Tap tab → Navigate

### SCR-D01-S10 Dashboard — Permission Denied [inferred]
- **ID:** SCR-D01-S10
- **Nom:** Permission Denied
- **Role:** Agent (accessing Admin-only page)
- **State:** Error
- **UI:**
  - Lock icon (48px, #6B7280) [inferred]
  - Title: "Ruxsat yo'q" [inferred]
  - Description: "Bu sahifaga kirish uchun admin huquqi kerak" [inferred]
  - "Bosh sahifaga qaytish" button [inferred]
- **Entry Condition:** Agent tries to access Billing/Settings/etc
- **Exit Action:** Navigate to Inbox

---

## INBOX

### SCR-I01 Inbox — Full Layout (3-Panel)
- **ID:** SCR-I01
- **Nom:** Inbox Default
- **Role:** Admin, Agent
- **State:** Default (chat selected)
- **UI:**
  - Chat List (360px): search, filter dropdown, filter tabs (Active/Assigned/Closed), chat cards
  - Chat Window (fluid): header (customer name, status, agent dropdown, close), messages area (incoming #F3F4F6 / outgoing #4F46E5 bubbles), typing indicator, input area (emoji, attach, canned, textarea, send 40×40)
  - Info Sidebar (280px): customer details, tags, notes, history
- **Entry Condition:** Dashboard → Inbox / Default page
- **Exit Action:** Continue chatting / Navigate away

### SCR-I01-S01 Inbox — No Chat Selected
- **ID:** SCR-I01-S01
- **Nom:** Inbox No Selection
- **Role:** Admin, Agent
- **State:** Empty selection
- **UI:**
  - Chat list visible with items
  - Chat window area: centered illustration
  - "Chatni tanlang" message [inferred]
  - Info sidebar hidden
- **Entry Condition:** Inbox opened, no chat selected
- **Exit Action:** Select a chat

### SCR-I01-S02 Inbox — Empty (No Chats)
- **ID:** SCR-I01-S02
- **Nom:** Inbox Empty
- **Role:** Admin, Agent
- **State:** Empty
- **UI:**
  - Chat list: chat bubble icon (80px, #D1D5DB), "Chatlar yo'q" 16px Semibold, "Mijozlardan xabar kelishi bilan shu yerda ko'rinadi" 14px Gray-500
  - Chat window: empty
- **Entry Condition:** No chats exist
- **Exit Action:** Wait for incoming chats

### SCR-I01-S03 Inbox — Loading
- **ID:** SCR-I01-S03
- **Nom:** Inbox Loading
- **Role:** Admin, Agent
- **State:** Loading
- **UI:**
  - Chat list: 5-6 skeleton cards (avatar circle + 2 text lines), shimmer
  - Chat window: spinner (24px #4F46E5), "Xabarlar yuklanmoqda..."
- **Entry Condition:** Initial load
- **Exit Action:** Data loaded

### SCR-I01-S04 Inbox — Error
- **ID:** SCR-I01-S04
- **Nom:** Inbox Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - "Chatlarni yuklab bo'lmadi" with retry button
- **Entry Condition:** API failure
- **Exit Action:** Retry

### SCR-I01-S05 Inbox — Connection Lost Banner
- **ID:** SCR-I01-S05
- **Nom:** Inbox Connection Lost
- **Role:** Admin, Agent
- **State:** Error (connectivity)
- **UI:**
  - Banner: top of chat window, 44px, #FEF2F2 bg, 1px #EF4444 border
  - Wifi off icon (16px) + "Internet aloqasi uzildi. Qayta ulanmoqda..." #991B1B
  - Auto-reconnect attempt
- **Entry Condition:** WebSocket disconnected
- **Exit Action:** Auto-reconnect → Banner dismissed

### SCR-I02 Inbox — Chat List Filter Dropdown Open
- **ID:** SCR-I02
- **Nom:** Chat List Filter Open
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - Filter options: Active, Assigned, Closed, Bugun, Kecha, Oxirgi 7 kun
  - Dropdown: white, radius-8, shadow-md
- **Entry Condition:** Click filter button
- **Exit Action:** Select filter → List updates

### SCR-I03 Inbox — Chat Window Header Agent Dropdown
- **ID:** SCR-I03
- **Nom:** Agent Assignment Dropdown
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - Agent list: O'zim, Sara, Bobur, Ali (each with avatar 24px + online dot)
  - Selected: checkmark icon
  - Width: 200px, radius-8, shadow-md
- **Entry Condition:** Click agent name in chat header
- **Exit Action:** Select agent → Chat reassigned

### SCR-I04 Inbox — Chat Actions Dropdown
- **ID:** SCR-I04
- **Nom:** Chat Actions Menu
- **Role:** Admin, Agent
- **State:** Dropdown open
- **UI:**
  - Items: Mark as Resolved, Reopen, Reassign, Add Tag, Copy Link, Delete Chat (#EF4444), Block User (#EF4444)
  - Width: 240px, radius-lg, shadow-lg
- **Entry Condition:** Click more/actions icon in chat header
- **Exit Action:** Select action

### SCR-I05 Inbox — Canned Responses Popup
- **ID:** SCR-I05
- **Nom:** Canned Responses
- **Role:** Admin, Agent
- **State:** Popup open
- **UI:**
  - Trigger: toolbar icon or "/" in input
  - Popup: 360px, max-height 400px, radius-lg, shadow-lg
  - Search: "Javob qidirish..." 40px input
  - List: title (14px Semibold) + preview (13px Gray-500), hover Gray-100
  - Categories: Support, Sales, Billing, Technical, General
  - Shortcodes: /hello, /pricing, /thanks
  - "+ Yangi qo'shish" at bottom
- **Entry Condition:** Click canned icon or type "/"
- **Exit Action:** Select → Text inserted into input

### SCR-I06 Inbox — File Upload
- **ID:** SCR-I06
- **Nom:** File Upload Dialog
- **Role:** Admin, Agent
- **State:** Active
- **UI:**
  - Drag & Drop area: #F9FAFB bg, dashed 2px #D1D5DB border
  - Active: border #4F46E5, bg #EEF2FF
  - Upload cloud icon (48px), "Faylni bu yerga tashlang", "yoki faylni tanlash uchun bosing"
  - Format: "JPG, PNG, GIF, PDF, Word, Excel — max 10MB"
  - Upload preview card: filename, size, progress bar (4px #4F46E5), delete X
  - Success: checkmark #10B981
- **Entry Condition:** Click paperclip / Drag file
- **Exit Action:** File uploaded → Send with message

### SCR-I06-S01 File Upload — Error [inferred]
- **ID:** SCR-I06-S01
- **Nom:** File Upload Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - Error message: "Fayl hajmi 10MB dan oshmasligi kerak" [inferred]
  - Or: "Bu fayl formati qo'llab-quvvatlanmaydi" [inferred]
  - Red border on upload area
- **Entry Condition:** Invalid file selected
- **Exit Action:** Select valid file

### SCR-I07 Inbox — Transfer Modal
- **ID:** SCR-I07
- **Nom:** Transfer Chat Modal
- **Role:** Admin, Agent
- **State:** Modal open
- **UI:**
  - Modal: 400px, white, radius-lg, shadow-xl, overlay rgba(0,0,0,0.5)
  - Title: "Chatni o'tkazish" [inferred]
  - Select agent dropdown
  - Reason textarea (optional)
  - Buttons: "Bekor qilish" outline + "O'tkazish" primary
- **Entry Condition:** Chat Actions → Reassign / Transfer
- **Exit Action:** Transfer → Chat reassigned, toast confirmation

### SCR-I08 Inbox — Resolve Modal
- **ID:** SCR-I08
- **Nom:** Resolve Chat Modal
- **Role:** Admin, Agent
- **State:** Modal open
- **UI:**
  - Modal: 400px
  - Title: "Chatni yopish" [inferred]
  - Checkbox: "CSAT so'rovnomasi yuborish"
  - Final message textarea (optional)
  - Buttons: "Bekor qilish" outline + "Yopish" primary
- **Entry Condition:** Chat Actions → Resolve / Mark as Resolved
- **Exit Action:** Resolve → Chat moved to Closed, CSAT sent if checked

### SCR-I09 Inbox — Delete Chat Confirm [inferred]
- **ID:** SCR-I09
- **Nom:** Delete Chat Confirmation
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - Danger modal: warning icon
  - "Bu chatni o'chirishni tasdiqlaysizmi?" [inferred]
  - "Bu amalni qaytarib bo'lmaydi" [inferred]
  - Buttons: "Bekor qilish" outline + "O'chirish" danger
- **Entry Condition:** Chat Actions → Delete
- **Exit Action:** Confirm → Chat deleted / Cancel

### SCR-I10 Inbox — Message Send Failed
- **ID:** SCR-I10
- **Nom:** Message Send Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - Failed message bubble with error icon (red circle)
  - "Xabar yuborilmadi" text below bubble
  - "Qayta yuborish" link
- **Entry Condition:** Network error during send
- **Exit Action:** Retry → Message sent

### SCR-I11 Inbox — Info Sidebar
- **ID:** SCR-I11
- **Nom:** Info Sidebar
- **Role:** Admin, Agent
- **State:** Default
- **UI:**
  - Width: 280px
  - Customer info: name, email, phone, location
  - First contact date, total chats, CSAT score
  - Current page, browser info
  - Tags: pill badges (VIP, Premium, etc.)
  - Private notes: textarea
  - Chat history: list (date, subject, status, view link)
- **Entry Condition:** Chat selected (desktop) / Info icon tap (tablet)
- **Exit Action:** Edit info / View history

### SCR-I11-S01 Info Sidebar — Loading
- **ID:** SCR-I11-S01
- **Nom:** Info Sidebar Loading
- **Role:** Admin, Agent
- **State:** Loading
- **UI:**
  - Skeleton sidebar: shimmer blocks for each section
- **Entry Condition:** Chat selected, data loading
- **Exit Action:** Data loaded

### SCR-I11-S02 Info Sidebar — Error
- **ID:** SCR-I11-S02
- **Nom:** Info Sidebar Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - "Mijoz ma'lumotlari yuklanmadi" with retry
- **Entry Condition:** API failure
- **Exit Action:** Retry

### SCR-I12 Inbox — Message Quick Actions (Hover)
- **ID:** SCR-I12
- **Nom:** Message Quick Actions
- **Role:** Admin, Agent
- **State:** Hover overlay
- **UI:**
  - Floating bar on message bubble: Reply, Star, Delete icons (16px)
  - White bg, shadow-sm, radius-8, padding 4px
  - Appears top-right of bubble on hover
- **Entry Condition:** Hover over message bubble
- **Exit Action:** Click action

### SCR-I13 Inbox — Emoji Picker [inferred]
- **ID:** SCR-I13
- **Nom:** Emoji Picker
- **Role:** Admin, Agent
- **State:** Popup open
- **UI:**
  - Standard emoji picker popup [inferred]
  - Categories, search, recent
  - Position: above toolbar
- **Entry Condition:** Click emoji icon in toolbar
- **Exit Action:** Select emoji → Insert in input

### SCR-I14 Inbox — Mobile Chat List
- **ID:** SCR-I14
- **Nom:** Inbox Mobile — Chat List
- **Role:** Admin, Agent
- **State:** Mobile full screen
- **UI:**
  - Full screen chat list
  - Search + filter at top
  - Chat cards full width
- **Entry Condition:** Mobile Inbox tab
- **Exit Action:** Tap chat → Full screen chat window

### SCR-I15 Inbox — Mobile Chat Window
- **ID:** SCR-I15
- **Nom:** Inbox Mobile — Chat Window
- **Role:** Admin, Agent
- **State:** Mobile full screen
- **UI:**
  - Full screen chat
  - "< Orqaga" button (40px, arrow-left, #374151) at top
  - Messages + input area
  - Info sidebar: separate full screen page
  - Swipe right = back (optional)
- **Entry Condition:** Tap chat card on mobile
- **Exit Action:** Back → Chat list

---

## AUTOMATION

### SCR-AU01 Automation — Ish Vaqti Tab
- **ID:** SCR-AU01
- **Nom:** Automation Working Hours
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab bar: Ish Vaqti (active) | Auto-Reply | Triggers | Greetings
  - Split layout: Settings 60% + Preview 40%
  - Toggle: "Ish vaqtini faollashtirish"
  - Weekly grid: 7 rows (Mon-Sun), each: day name, radio (Ishlash/Dam olish), time pickers (09:00-18:00), "+ Break qo'shish"
  - "Barchaga qo'llash" outline button
  - Timezone dropdown (GMT+5 Toshkent)
  - Bayram kunlari section with list
  - Preview sidebar: Joriy Holat (Online/Offline), keyingi o'zgarish, jadval summary
  - "Saqlash" primary button
- **Entry Condition:** Sidebar → Automation
- **Exit Action:** Save → toast "Sozlamalar saqlandi"

### SCR-AU01-S01 Automation — Holiday Modal
- **ID:** SCR-AU01-S01
- **Nom:** Add Holiday Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - 400px modal, white, radius-lg, shadow-xl
  - Title: "Bayram qo'shish"
  - Date picker + Bayram nomi input
  - Buttons: "Bekor qilish" ghost + "Qo'shish" primary
- **Entry Condition:** Click "+ Bayram qo'shish"
- **Exit Action:** Add → Holiday added to list

### SCR-AU02 Automation — Auto-Reply Tab
- **ID:** SCR-AU02
- **Nom:** Automation Auto-Reply
- **Role:** Admin
- **State:** Default
- **UI:**
  - 3 sections stacked: Offline, Away, First Response
  - Each: title + toggle, textarea (char counter), variables badges ({working_hours}, {company_name}, {agent_name})
  - Offline: checkbox "Ish vaqtini ko'rsatish"
  - Away: kutish vaqti number input (5 daqiqa)
  - First Response: kechikish number input (3 soniya)
  - Preview sidebar: widget preview with auto-reply message
  - "Saqlash" button
- **Entry Condition:** Tab switch to Auto-Reply
- **Exit Action:** Save

### SCR-AU03 Automation — Triggers Tab
- **ID:** SCR-AU03
- **Nom:** Automation Triggers
- **Role:** Admin
- **State:** Default
- **UI:**
  - Header: "Triggerlar" + "+ Yangi trigger" primary button
  - Trigger cards list: each with name + toggle, name input, condition dropdown (Page Load, Time on Page, Scroll, Exit Intent, Specific Page, URL Match), delay input, message textarea, checkboxes, URL pattern, Save + Test buttons
  - Welcome Message and Exit Intent triggers shown
- **Entry Condition:** Tab switch to Triggers
- **Exit Action:** Save trigger / Create new

### SCR-AU03-S01 Automation — New Trigger Modal
- **ID:** SCR-AU03-S01
- **Nom:** New Trigger Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - 560px modal, white, radius-xl, shadow-xl
  - Title: "Yangi trigger yaratish"
  - 5 trigger type cards (2×3 grid): Welcome, Exit Intent, Time Based, Scroll Based, Custom
  - Each: 160×140px, icon 32px, name, description
  - Selected: 2px #4F46E5 border
  - Buttons: "Bekor qilish" ghost + "Yaratish" primary (disabled until selection)
- **Entry Condition:** Click "+ Yangi trigger"
- **Exit Action:** Create → New trigger card added

### SCR-AU03-S02 Automation — Triggers Empty
- **ID:** SCR-AU03-S02
- **Nom:** Triggers Empty State
- **Role:** Admin
- **State:** Empty
- **UI:**
  - Robot/zap icon + "Triggerlar yo'q" + "Birinchi triggeringizni yarating"
  - "+ Yangi trigger" button
- **Entry Condition:** No triggers exist
- **Exit Action:** Create trigger

### SCR-AU04 Automation — Greetings Tab
- **ID:** SCR-AU04
- **Nom:** Automation Greetings
- **Role:** Admin
- **State:** Default
- **UI:**
  - Split: settings 60% + live preview 40%
  - 5 inputs: Widget button text (30 char), Chat window title (40 char), Welcome message textarea (200 char counter), Input placeholder (50 char), Agent typing indicator (40 char)
  - Live preview: scaled 0.75 widget simulation, real-time update
  - "Saqlash" + "Test qilish" buttons
- **Entry Condition:** Tab switch to Greetings
- **Exit Action:** Save / Test

### SCR-AU-S01 Automation — Save Error
- **ID:** SCR-AU-S01
- **Nom:** Automation Save Error
- **Role:** Admin
- **State:** Error
- **UI:**
  - Toast: "Sozlamalarni saqlab bo'lmadi. Qayta urinib ko'ring." #EF4444, 4s
- **Entry Condition:** Save API failure
- **Exit Action:** Retry

### SCR-AU-S02 Automation — Loading
- **ID:** SCR-AU-S02
- **Nom:** Automation Loading
- **Role:** Admin
- **State:** Loading
- **UI:**
  - Skeleton forms: shimmer on schedule rows, textareas
- **Entry Condition:** Tab switch / initial load
- **Exit Action:** Data loaded

---

## TEAM

### SCR-T01 Team — Agents Tab
- **ID:** SCR-T01
- **Nom:** Team Agents
- **Role:** Admin, Manager [inferred]
- **State:** Default
- **UI:**
  - Tab bar: Agents (active) | Roles | Invitations
  - "+ Agent qo'shish" primary button (top-right)
  - Table: Name (avatar + ism), Role, Status (badge), Last Active, Workload, Actions (⋯)
  - Status badges: Online (#10B981), Away (#F59E0B), Busy (#EF4444), Offline (#6B7280)
  - Actions menu: Edit profile, Suspend/Activate, Reset password, Delete
  - Row min-height: 48px
- **Entry Condition:** Sidebar → Team
- **Exit Action:** Manage agents

### SCR-T01-S01 Team — Add Agent Modal
- **ID:** SCR-T01-S01
- **Nom:** Add Agent Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal (medium)
  - Fields: Email, Role select (Admin/Manager/Operator), Personal message (optional)
  - CTA: "Taklif yuborish" primary
  - "Bekor qilish" outline
- **Entry Condition:** Click "+ Agent qo'shish"
- **Exit Action:** Invite sent → Agent added to Invitations tab

### SCR-T01-S02 Team — Agent Actions Menu
- **ID:** SCR-T01-S02
- **Nom:** Agent Actions Dropdown
- **Role:** Admin
- **State:** Dropdown open
- **UI:**
  - Edit profile, Suspend/Activate, Reset password [inferred], Delete (#EF4444)
  - Dropdown: 200px, white, radius-lg, shadow-lg
- **Entry Condition:** Click ⋯ on table row
- **Exit Action:** Select action

### SCR-T01-S03 Team — Delete Agent Confirm [inferred]
- **ID:** SCR-T01-S03
- **Nom:** Delete Agent Confirmation
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - Warning modal: "Bu agentni o'chirishni tasdiqlaysizmi?" [inferred]
  - Buttons: Cancel + Delete (danger)
- **Entry Condition:** Actions → Delete
- **Exit Action:** Confirm → Agent removed

### SCR-T01-S04 Team — Empty Agents
- **ID:** SCR-T01-S04
- **Nom:** Agents Empty State
- **Role:** Admin
- **State:** Empty
- **UI:**
  - "Hozircha agent yo'q. Birinchi agentni taklif qiling."
  - "+ Agent qo'shish" button
- **Entry Condition:** No agents
- **Exit Action:** Add agent

### SCR-T02 Team — Roles Tab
- **ID:** SCR-T02
- **Nom:** Team Roles
- **Role:** Admin
- **State:** Default
- **UI:**
  - Default roles: Admin, Manager, Operator (non-deletable)
  - "+ Yangi rol" button
  - Custom role: name field
  - Permissions matrix table: rows = permissions, columns = roles
  - Permissions: View (Inbox, Analytics, Billing, Settings), Edit (Team, Automation, Integrations), Delete (Chats, Users, Billing)
  - Checkboxes in matrix cells
- **Entry Condition:** Tab → Roles
- **Exit Action:** Save permissions

### SCR-T02-S01 Team — Create Role Modal [inferred]
- **ID:** SCR-T02-S01
- **Nom:** Create Custom Role
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: role name input, permissions checklist [inferred]
  - Buttons: Cancel + Create
- **Entry Condition:** Click "+ Yangi rol"
- **Exit Action:** Create → New role added

### SCR-T03 Team — Invitations Tab
- **ID:** SCR-T03
- **Nom:** Team Invitations
- **Role:** Admin
- **State:** Default
- **UI:**
  - Table: Email, Role, Status (Pending/Accepted/Expired badges), Invited date, Actions
  - Actions: Resend, Cancel
  - Status badges: Pending (warning), Accepted (success), Expired (gray)
- **Entry Condition:** Tab → Invitations
- **Exit Action:** Resend / Cancel invitation

### SCR-T03-S01 Team — Invitations Empty
- **ID:** SCR-T03-S01
- **Nom:** Invitations Empty
- **Role:** Admin
- **State:** Empty
- **UI:**
  - "Takliflar yo'q."
- **Entry Condition:** No invitations
- **Exit Action:** Go to Agents tab → Invite

### SCR-T-S01 Team — Loading
- **ID:** SCR-T-S01
- **Nom:** Team Loading
- **Role:** Admin
- **State:** Loading
- **UI:**
  - Skeleton table rows with shimmer
- **Entry Condition:** Initial load
- **Exit Action:** Data loaded

### SCR-T-S02 Team — Error
- **ID:** SCR-T-S02
- **Nom:** Team Error
- **Role:** Admin
- **State:** Error
- **UI:**
  - "Jamoa ma'lumotlari yuklanmadi" with retry
- **Entry Condition:** API failure
- **Exit Action:** Retry

---

## ANALYTICS

### SCR-AN01 Analytics — Overview Tab
- **ID:** SCR-AN01
- **Nom:** Analytics Overview
- **Role:** Admin, Manager [inferred]
- **State:** Default
- **UI:**
  - Tab bar: Overview (active) | Performance | CSAT | Export
  - Metric cards row: Total chats, Avg response, Resolution time, CSAT (value 32px bold, label 12px, trend arrow)
  - Line chart: chats per day
  - Bar chart: channel split
- **Entry Condition:** Sidebar → Analytics
- **Exit Action:** Switch tabs / Export

### SCR-AN02 Analytics — Performance Tab
- **ID:** SCR-AN02
- **Nom:** Analytics Performance
- **Role:** Admin, Manager [inferred]
- **State:** Default
- **UI:**
  - Agent leaderboard (top agents table)
  - Response time distribution chart
  - Activity timeline
- **Entry Condition:** Tab → Performance
- **Exit Action:** View details

### SCR-AN03 Analytics — CSAT Tab
- **ID:** SCR-AN03
- **Nom:** Analytics CSAT
- **Role:** Admin, Manager [inferred]
- **State:** Default
- **UI:**
  - Rating distribution chart (5★ → 1★)
  - Feedback list with tags
- **Entry Condition:** Tab → CSAT
- **Exit Action:** View feedback details

### SCR-AN04 Analytics — My Stats (Agent View)
- **ID:** SCR-AN04
- **Nom:** Agent My Stats
- **Role:** Agent
- **State:** Default
- **UI:**
  - Today: Chats 12, Resolved 10, Avg response 2m 15s, CSAT 4.8
  - This Week: Chats 58, CSAT 4.7
  - This Month: Chats 245, CSAT 4.6
  - Goals: Chats > 600, CSAT > 4.5, Response < 2 min, Transfer < 5%
- **Entry Condition:** Agent opens Analytics
- **Exit Action:** None

### SCR-AN05 Analytics — Export Tab
- **ID:** SCR-AN05
- **Nom:** Analytics Export
- **Role:** Admin
- **State:** Default
- **UI:**
  - Export as PDF button
  - Export as Excel button
  - "Email to me" button
  - Scheduled report toggle
- **Entry Condition:** Tab → Export
- **Exit Action:** Download / Schedule

### SCR-AN06 Analytics — Responsiveness
- **ID:** SCR-AN06
- **Nom:** Responsiveness Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Javob berish tezligi" 24px Semibold
  - **Subtitle:** "Qo'llab-quvvatlash samaradorligi" 14px Gray-600
  - **Date Range Picker:** Last 7 days | 30 days | 90 days | Custom
  - **KPI Cards Row (4 cards):**
    1. First Response Time: "2m 34s" (avg), Trend: -12% ↓ Green (better)
    2. Avg Response Time: "4m 18s", Trend: -8% ↓
    3. Resolution Time: "15m 42s", Trend: +5% ↑ Red (worse)
    4. Response Rate: "92%" (% of chats with response < 5 min)
  - **Response Time Distribution Chart:**
    - Histogram: X-axis: Time ranges (0-1m, 1-3m, 3-5m, 5-10m, 10+m)
    - Y-axis: Number of conversations
    - Goal line: 5 min (dashed red line)
  - **Response Time by Hour Heatmap:**
    - X-axis: Hours (0-23)
    - Y-axis: Days of week (Mon-Sun)
    - Color gradient: Green (fast) → Yellow → Red (slow)
  - **Response Time by Agent Table:**
    - Columns: Agent, First Response, Avg Response, Chats Count, % Under Goal
    - Sort by any column
    - Top 3 agents highlighted with 🥇🥈🥉 badges
  - **Slowest Conversations List:**
    - "Eng sekin javob berilgan suhbatlar" 16px Semibold
    - Each row: Contact name, Agent, Response time, Date, "Ko'rish" link
    - Max 10 rows, paginated
- **Entry Point:** Analytics submenu > Responsiveness
- **Exit Action:** View conversation details

### SCR-AN07 Analytics — Operators Performance
- **ID:** SCR-AN07
- **Nom:** Operators Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Operatorlar ishlashi" 24px Semibold
  - **Date Range Picker:** Last 7 days | 30 days | Custom
  - **View Toggle:** List | Comparison
  - **Operators Table (List View):**
    - Columns:
      1. Operator (Avatar 32px + Name + Status: Online/Offline/Away)
      2. Chats Handled (total count)
      3. First Response Time (avg)
      4. Avg Response Time
      5. Resolution Time (avg)
      6. CSAT Rating (★4.8, with count)
      7. Messages Sent (total)
      8. Active Time (hours:minutes)
    - Actions: View Details (opens SCR-AN07-S01)
    - Sort by any column
    - Export as CSV button
  - **Comparison View (when toggle active):**
    - Multi-select: Choose 2-4 operators
    - Side-by-side bar charts comparing:
      - Chats handled
      - Response times
      - CSAT scores
      - Active hours
    - "O'xshashliklar" and "Farqlar" summary text
  - **Performance Goals Card:**
    - "Maqsadlar" 16px Semibold
    - Each goal: Name, Target, % of agents meeting goal
    - E.g., "First Response < 3 min: 7/12 agents (58%)"
  - **Top Performers Section:**
    - "Eng yaxshi operatorlar" 18px Semibold
    - 3 cards (gold, silver, bronze):  - Agent name, avatar
      - Key metric: "245 suhbat", "★ 4.9 CSAT"
      - Badge: "Top Performer"
- **Entry Point:** Analytics submenu > Operators
- **Exit Action:** View individual operator details

### SCR-AN07-S01 Operator Detail — Individual Stats
- **ID:** SCR-AN07-S01
- **Nom:** Operator Detail Analytics
- **Role:** Admin, Manager
- **Layout:** Right Panel (800px width)
- **UI:**
  - **Header:**
    - Back arrow: ← Operatorlar
    - Avatar 64px
    - Name 20px Semibold
    - Role badge: "Manager" or "Operator"
    - Status: Online/Offline with dot
  - **Date Range:** Last 30 days dropdown
  - **Performance Summary Cards (4):**
    1. Chats: 245 (trend vs last period)
    2. CSAT: ★ 4.8 (87 ratings)
    3. First Response: 2m 12s
    4. Resolution: 14m 35s
  - **Activity Timeline Chart:**
    - Line chart: Daily chat volume over selected period
    - Highlight: Peak days
  - **Response Time Distribution:**
    - Pie chart: % of responses in each time bucket
  - **CSAT Breakdown:**
    - Bar chart: 5★ to 1★ distribution
    - Recent feedback comments (last 5)
  - **Tags Used:**
    - Word cloud or list: Most used tags by this operator
  - **Working Hours Heatmap:**
    - When this operator is most active (hour × day)
  - **Recent Conversations:**
    - List: Last 10 chats handled
    - Each: Contact, Date, Duration, Rating
    - "Ko'rish" link to open conversation
- **Entry Condition:** Click operator from SCR-AN07
- **Exit Action:** Close panel or view conversation

### SCR-AN08 Analytics — SLA Tracking
- **ID:** SCR-AN08
- **Nom:** SLA Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "SLA Monitoring" 24px Semibold
  - **Subtitle:** "Service Level Agreement ko'rsatkichlari" 14px Gray-600
  - **Date Range:** Today | This Week | This Month | Custom
  - **SLA Overview Cards (3):**
    1. **First Response SLA:**
       - Goal: "< 3 min" 18px Bold
       - Achievement: "87%" 32px Bold, Green-500
       - Trend: +5% ↑ vs last period
       - Progress bar: 87/100%
    2. **Resolution SLA:**
       - Goal: "< 30 min"
       - Achievement: "72%" Orange-500 (warning)
       - Trend: -3% ↓
    3. **Overall SLA:**
       - Goal: "90%+"
       - Achievement: "79.5%" Red-500 (critical)
       - Trend: +1% ↑
  - **SLA Violations Table:**
    - "SLA buzilishlari" 18px Semibold
    - Columns:
      1. Conversation ID (link)
      2. Contact Name
      3. Agent
      4. SLA Type (First Response / Resolution)
      5. Target Time
      6. Actual Time (red if exceeded)
      7. Delay (how much over)
      8. Date
    - Filters: All | First Response Only | Resolution Only
    - Sort by: Delay (largest first)
    - Export violations as CSV
  - **SLA by Agent Bar Chart:**
    - X-axis: Agent names
    - Y-axis: SLA compliance %
    - Color: Green (>90%), Orange (70-90%), Red (<70%)
    - Goal line: 90% (dashed)
  - **Hourly SLA Compliance Heatmap:**
    - X-axis: Hours of day (0-23)
    - Y-axis: Days of week
    - Color: Green (high compliance) → Red (low compliance)
    - Identify: When SLA is most often violated
  - **SLA Trends Line Chart:**
    - X-axis: Date (daily or weekly)
    - 3 lines: First Response %, Resolution %, Overall %
    - Goal line: 90%
- **Entry Point:** Analytics submenu > SLA
- **Exit Action:** View violation details or adjust SLA settings

### SCR-AN09 Analytics — Channel Analytics
- **ID:** SCR-AN09
- **Nom:** Channel Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Kanal tahlili" 24px Semibold
  - **Subtitle:** "Har bir kanal bo'yicha ko'rsatkichlar" 14px Gray-600
  - **Date Range:** Last 30 days dropdown
  - **Channel Overview Cards Grid (2×2 or 3×2):**
    Each card:
    - Icon 40px (Chat bubble, Email, Telegram, WhatsApp, FB Messenger)
    - Channel name 16px Semibold
    - Total conversations: 1,245
    - % of total: "42%"
    - Avg response time: "3m 45s"
    - CSAT: ★ 4.7
    - Trend: +12% ↑ vs last period
    - View Details link
  - **Channel Distribution Pie Chart:**
    - "Kanallar bo'yicha taqsimot" 18px Semibold
    - Segments: Live Chat 42%, Email 28%, Telegram 18%, WhatsApp 12%
    - Legend with colors
  - **Channel Trends Line Chart:**
    - X-axis: Date (daily)
    - Multiple lines: One per channel
    - Y-axis: Number of conversations
    - Toggle: Show/hide individual channels
  - **Channel Comparison Table:**
    - Columns:
      1. Channel Icon + Name
      2. Conversations (total)
      3. % of Total
      4. First Response Time
      5. Avg Response Time
      6. Resolution Time
      7. CSAT Rating
      8. Active Agents (how many agents handle this channel)
    - Sort by any column
  - **Peak Hours by Channel:**
    - Stacked bar chart
    - X-axis: Hours of day (0-23)
    - Y-axis: Conversations count
    - Each bar stacked by channel color
    - Identify: When each channel is busiest
  - **Channel-Specific Insights Card:**
    - "Tavsiyalar" 16px Semibold
    - Auto-generated insights:
      - "Email javob berish vaqti juda uzoq (12m). Maqsad: < 5m"
      - "Telegram kanalida suhbatlar +45% o'sdi. Ko'proq agent kerak."
      - "Live Chat CSAT eng yuqori (★4.9). Eng yaxshi kanal!"
- **Entry Point:** Analytics submenu > Channels
- **Exit Action:** Deep dive into channel or adjust resources

### SCR-AN10 Analytics — Segments Analytics
- **ID:** SCR-AN10
- **Nom:** Segments Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Segment tahlili" 24px Semibold
  - **Subtitle:** "Kontakt segmentlari bo'yicha ko'rsatkichlar" 14px Gray-600
  - **Date Range:** Last 30 days
  - **Segment Selector:**
    - Dropdown: All Segments | VIP Mijozlar | Yangi Kontaktlar | Faol Foydalanuvchilar | Custom...
    - or "Segmentlar" tab navigation
  - **Selected Segment Overview Card:**
    - Segment name 20px Semibold
    - Icon/color indicator
    - Total contacts in segment: 247
    - Conversations from this segment: 1,042
    - % of total conversations: 35%
  - **Segment Performance Metrics (4 cards):**
    1. Avg CSAT: ★ 4.9 (VIP segments usually higher)
    2. Avg Response Time: "2m 15s"
    3. Resolution Rate: "94%"
    4. Conversation Frequency: "4.2 chats/contact" (avg)
  - **Segment Comparison Table:**
    - Columns:
      1. Segment Name (with color badge)
      2. Contacts Count
      3. Conversations
      4. % of Total
      5. Avg CSAT
      6. Response Time
      7. Resolution Rate
    - Highlight: Best performing segment (green row)
  - **Segment Trends Line Chart:**
    - X-axis: Date
    - Multiple lines: One per segment (max 5 shown, toggle others)
    - Y-axis: Conversations count
    - Legend
  - **Segment Conversion Funnel:**
    - Funnel chart:
      - New Contact → First Chat → Repeat Chat → VIP Status
    - Show: How contacts move between segments
  - **Segment CSAT Distribution:**
    - Box plot or violin plot
    - Compare: CSAT distribution across segments
    - Identify: Which segments are happiest
  - **Insights & Recommendations:**
    - "VIP Mijozlar segmenti eng yuqori CSAT ga ega (★4.9). Shu strategiyani boshqa segmentlarga qo'llang."
    - "Yangi Kontaktlar segmentida javob berish vaqti uzoqroq (5m vs 2m). Onboarding jarayonini optimallashtiring."
- **Entry Point:** Analytics submenu > Segments
- **Exit Action:** View segment details or adjust segment rules

### SCR-AN11 Analytics — Tags Analytics
- **ID:** SCR-AN11
- **Nom:** Tags Analytics
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Teglar tahlili" 24px Semibold
  - **Subtitle:** "Eng ko'p ishlatiladigan teglar" 14px Gray-600
  - **Date Range:** Last 30 days
  - **Tags Overview Cards (3):**
    1. Total Unique Tags: 47
    2. Total Tagged Conversations: 1,842
    3. Avg Tags per Conversation: 1.8
  - **Top Tags List (or Word Cloud):**
    - **Option 1: List View (default)**
      - Table:
        1. Rank (#1, #2, #3...)
        2. Tag Name (with badge color)
        3. Usage Count (e.g., 342 times)
        4. % of Total (e.g., 18%)
        5. Trend (↑↓ vs last period)
      - Top 20 tags shown
      - "Barcha teglarni ko'rish" link
    - **Option 2: Word Cloud (toggle)**
      - Visual: Larger text = more used
      - Colors: Different colors for tag categories
      - Interactive: Click tag → filter by tag
  - **Tags Usage Over Time:**
    - Stacked area chart or line chart
    - X-axis: Date
    - Y-axis: Number of times tag used
    - Show: Top 5-7 tags as separate lines/areas
    - Toggle: Show/hide specific tags
  - **Tags by Agent:**
    - Heatmap or table
    - Rows: Agents
    - Columns: Top tags
    - Cells: Count (how many times agent used this tag)
    - Identify: Which agents use which tags most
  - **Tags Co-occurrence Matrix:**
    - Heatmap: Which tags appear together frequently
    - E.g., "Bug" often appears with "Technical Support"
    - Rows × Columns: Tags × Tags
    - Color intensity: Frequency of co-occurrence
  - **Tag Performance Metrics Table:**
    - Columns:
      1. Tag Name
      2. Usage Count
      3. Avg Resolution Time (for conversations with this tag)
      4. Avg CSAT (for tagged conversations)
      5. Most Frequent Agent (who uses it most)
    - Sort by: Any column
    - Insights: "'Bug' tagi CSAT pastroq (3.8). Texnik muammolarni tezroq hal qilish kerak."
  - **Untagged Conversations:**
    - Warning card: "247 suhbat teglanmagan (13%)"
    - "Tag qo'shish uchun ko'rish" link
  - **Tag Suggestions:**
    - "Tavsiya etiladigan yangi teglar" 16px Semibold
    - AI-suggested tags based on conversation patterns
    - E.g., "'Billing Issue' tegi ko'p uchraydi. Qo'shishni xohlaysizmi?"
- **Entry Point:** Analytics submenu > Tags
- **Exit Action:** Manage tags or view tagged conversations

### SCR-AN12 Analytics — Custom Dashboards
- **ID:** SCR-AN12
- **Nom:** Custom Dashboards
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content
- **UI:**
  - **Title:** "Maxsus panellar" 24px Semibold
  - **Dashboard Tabs:**
    - Default dashboards: Overview | My Dashboard | Custom 1 | Custom 2 | ...
    - "+ Yangi panel yaratish" button (opens SCR-AN12-S01)
  - **Dashboard Canvas (Drag-and-Drop Grid):**
    - Grid layout: 12 columns
    - Drag widgets to arrange
    - Resize widgets (1x1, 2x1, 2x2, 3x2, etc.)
  - **Available Widgets (in sidebar or "+ Add Widget" button):**
    1. **Metric Card:** Single KPI with trend
    2. **Line Chart:** Time series data
    3. **Bar Chart:** Comparison data
    4. **Pie Chart:** Distribution
    5. **Table:** Data table with sorting
    6. **Heatmap:** Hour × Day activity
    7. **Leaderboard:** Top agents
    8. **Goal Progress:** Progress bar to target
    9. **Recent Conversations:** List of chats
    10. **Tags Cloud:** Tag visualization
  - **Each Widget Has:**
    - Title (editable)
    - Settings gear icon → Opens config modal:
      - Data source: Which metric/data to show
      - Date range: Last 7/30/90 days, custom
      - Filters: By agent, channel, tag, segment
      - Visualization options: Colors, axis labels
    - Refresh button (manual refresh)
    - Fullscreen button
    - Delete button (X)
  - **Dashboard Actions (top-right):**
    - "Edit mode" toggle (enable drag-drop)
    - "Save" button (saves layout)
    - "Export as PDF" button
    - "Share" button → Copy link or email dashboard
    - "Reset to default" link
  - **Auto-refresh Options:**
    - Toggle: "Auto-refresh every 5 minutes" checkbox
  - **Example Custom Dashboard Layouts:**
    - **Executive Summary:** 4 metric cards + 1 large trend chart + agent leaderboard
    - **Agent Performance:** Individual agent stats + charts + goals
    - **Channel Monitor:** All channel widgets + trends
- **Entry Point:** Analytics submenu > Custom Dashboards
- **Exit Action:** Save dashboard or add more widgets

### SCR-AN12-S01 Create Custom Dashboard — Wizard
- **ID:** SCR-AN12-S01
- **Nom:** Create Dashboard
- **Role:** Admin, Manager
- **Layout:** Modal (700px width)
- **UI:**
  - **Header:** "Maxsus panel yaratish" 20px Semibold, close X
  - **Step 1: Basic Info:**
    - Dashboard Name: Input (required, "Masalan: Agent Performance")
    - Description: Textarea (optional)
    - Icon: Icon picker (optional)
  - **Step 2: Choose Template:**
    - ⦿ Blank Dashboard (start from scratch)
    - ◯ Executive Summary Template (4 metrics + 2 charts)
    - ◯ Agent Performance Template
    - ◯ Channel Monitoring Template
    - ◯ Customer Insights Template
    - Preview: Small thumbnail for each template
  - **Step 3: Add Initial Widgets (if template selected):**
    - Shows: Which widgets will be added
    - Checkboxes: Enable/disable each widget
    - "Customize later" option
  - **Actions:**
    - "Bekor qilish" ghost button
    - "Orqaga" outline button (back to previous step)
    - "Yaratish" primary button → Creates dashboard, opens SCR-AN12 in edit mode
  - **After creation:**
    - Toast: "Panel yaratildi!" Success-500
    - Dashboard opens in edit mode with selected widgets
- **Entry Condition:** Click "+ Yangi panel yaratish" from SCR-AN12
- **Exit Action:** Dashboard created, start editing

### SCR-AN-S01 Analytics — Empty
- **ID:** SCR-AN-S01
- **Nom:** Analytics Empty
- **Role:** Admin, Agent
- **State:** Empty
- **UI:**
  - "Statistika yo'q"
  - Chart placeholder icons
- **Entry Condition:** No data yet
- **Exit Action:** Wait for data

### SCR-AN-S02 Analytics — Loading
- **ID:** SCR-AN-S02
- **Nom:** Analytics Loading
- **Role:** Admin, Agent
- **State:** Loading
- **UI:**
  - Skeleton charts with shimmer
  - Skeleton metric cards
- **Entry Condition:** Initial load
- **Exit Action:** Data loaded

### SCR-AN-S03 Analytics — Error
- **ID:** SCR-AN-S03
- **Nom:** Analytics Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - "Analitika yuklanmadi" with retry
- **Entry Condition:** API failure
- **Exit Action:** Retry

---

## SETTINGS

### SCR-S01 Settings — Workspace Tab
- **ID:** SCR-S01
- **Nom:** Settings Workspace
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Sozlamalar" 24px
  - Tab bar: Workspace (active) | Widget | Security | Notifications | Profile
  - Content max-width: 800px
  - Sections: Workspace nomi input, Timezone dropdown, Branding (logo upload 120×120 dashed area), Kompaniya info (name, website, phone, address)
  - Sticky save bar: "Bekor qilish" outline + "Saqlash" primary
- **Entry Condition:** Sidebar → Settings
- **Exit Action:** Save → toast

### SCR-S02 Settings — Widget Tab
- **ID:** SCR-S02
- **Nom:** Settings Widget
- **Role:** Admin
- **State:** Default
- **UI:**
  - Color picker: 40px circle + hex input (#4F46E5) + 8 preset circles (32px)
  - Widget shape: radio cards (Kvadrat r:12px, Yumaloq r:50%)
  - Position: radio cards with mini previews (bottom-left, bottom-right, right-center)
  - Welcome message textarea (100 char counter)
  - Offline message textarea (100 char counter)
  - Input placeholder input
  - Code snippet: dark block (#1F2937), monospace, syntax highlighted, copy button
  - Domain whitelist: input + add button + tag chips (removable)
  - "Widget'ni test qilish" outline button
  - Sticky save bar
- **Entry Condition:** Tab → Widget
- **Exit Action:** Save / Test

### SCR-S02-S01 Settings — Widget Test Modal
- **ID:** SCR-S02-S01
- **Nom:** Widget Test Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - 560px modal
  - Simulated website background (grid/dots)
  - Widget rendered bottom-right with current settings
  - Close X button, Esc to close
- **Entry Condition:** Click "Widget'ni test qilish"
- **Exit Action:** Close modal

### SCR-S03 Settings — Security Tab
- **ID:** SCR-S03
- **Nom:** Settings Security
- **Role:** Admin
- **State:** Default
- **UI:**
  - IP Blocking: input + "+ IP qo'shish" button, blocked IPs list (IP + date + delete)
  - Rate Limiting: number input (10) + "/daqiqa", flood checkbox
  - 2FA: toggle + description + status badge (Faol/Nofaol)
  - Audit Log: table (timestamp monospace + action), "Ko'proq ko'rish →"
  - Session Management: session cards (device, IP, last active), "Joriy sessiya" badge, "Sessiyani tugatish" danger buttons
  - Login History: last 10 logins (date, IP, device, Success/Failed)
  - Sticky save bar
- **Entry Condition:** Tab → Security
- **Exit Action:** Save / Manage

### SCR-S03-S01 Settings — Delete Session Confirm [inferred]
- **ID:** SCR-S03-S01
- **Nom:** End Session Confirmation
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - "Bu sessiyani tugatishni tasdiqlaysizmi?" [inferred]
  - Buttons: Cancel + "Tugatish" danger
- **Entry Condition:** Click "Sessiyani tugatish"
- **Exit Action:** Confirm → Session ended

### SCR-S04 Settings — Notifications Tab
- **ID:** SCR-S04
- **Nom:** Settings Notifications
- **Role:** Admin, Agent
- **State:** Default
- **UI:**
  - Desktop section: toggles for Yangi chat, Yangi xabar, Shoshilinch chat (each 52px row)
  - Email section: toggles for Haftalik hisobot, Shoshilinch ogohlantirish
  - Sound section: enable toggle, volume slider (0-100%, thumb 20px), "Test" ghost button
  - Sticky save bar
- **Entry Condition:** Tab → Notifications
- **Exit Action:** Save

### SCR-S05 Settings — Profile Tab
- **ID:** SCR-S05
- **Nom:** Settings Profile
- **Role:** Admin, Agent
- **State:** Default
- **UI:**
  - Avatar: 120px circle, hover overlay "O'zgartirish" + camera icon
  - Fields: To'liq ism, Telefon, Email (readonly, gray bg)
  - Password change: Joriy parol, Yangi parol, Tasdiqlash (eye toggles), strength bar (weak red / medium yellow / strong green), requirements checklist
  - Theme: radio cards (Light ☀, Dark 🌙, Auto ⚙) 100×80px
  - Font size: segmented control (Small/Medium/Large) 36px
  - Chat style: radio cards (Classic/Modern/Compact) 120×90px with previews
  - Language: select (O'zbek/Русский/English)
  - Region: select (O'zbekiston/Rossiya/Global)
  - Date format: select (DD.MM.YYYY / MM/DD/YYYY / YYYY-MM-DD)
  - Sticky save bar
- **Entry Condition:** Tab → Profile
- **Exit Action:** Save

### SCR-S06 Settings — Advanced (Collapsible)
- **ID:** SCR-S06
- **Nom:** Settings Advanced
- **Role:** Admin
- **State:** Expanded
- **UI:**
  - Collapsible section with chevron
  - Auto-close: number input (30 daqiqa)
  - Auto-away: number input (10 daqiqa)
  - Auto-offline: time picker (18:00)
  - Auto-online: time picker (09:00)
  - Chat history toggle
- **Entry Condition:** Expand advanced section
- **Exit Action:** Save

### SCR-S-S01 Settings — Loading
- **ID:** SCR-S-S01
- **Nom:** Settings Loading
- **Role:** Admin, Agent
- **State:** Loading
- **UI:**
  - Skeleton forms: shimmer inputs, toggles, text blocks
- **Entry Condition:** Tab switch / initial load
- **Exit Action:** Data loaded

### SCR-S-S02 Settings — Save Error
- **ID:** SCR-S-S02
- **Nom:** Settings Save Error
- **Role:** Admin, Agent
- **State:** Error
- **UI:**
  - Red banner: "Sozlamalarni saqlab bo'lmadi. Qayta urinib ko'ring."
  - Validation errors: input border 2px #EF4444, "Majburiy maydon" text
- **Entry Condition:** Save failure
- **Exit Action:** Fix → Retry

### SCR-S-S03 Settings — Save Success
- **ID:** SCR-S-S03
- **Nom:** Settings Save Success
- **Role:** Admin, Agent
- **State:** Success
- **UI:**
  - Toast: "Sozlamalar muvaffaqiyatli saqlandi ✓" success, 3s, top-right
- **Entry Condition:** Successful save
- **Exit Action:** Auto-dismiss

---

## BILLING

### SCR-B01 Billing — Plan Tab
- **ID:** SCR-B01
- **Nom:** Billing Plans
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab bar: Plan (active) | Payment | Invoices | Usage
  - 4 plan cards: Free, Pro, Business, Enterprise
  - Comparison table: features × plans
  - Upgrade + Cancel buttons
  - Plan comparison modal [inferred]
  - "Contact Sales" button for Enterprise
- **Entry Condition:** Sidebar → Billing
- **Exit Action:** Upgrade / Contact Sales

### SCR-B01-S01 Billing — Plan Comparison Modal [inferred]
- **ID:** SCR-B01-S01
- **Nom:** Plan Comparison Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Large modal with full comparison table [inferred]
  - All features listed with checkmarks per plan
  - CTA buttons per plan
- **Entry Condition:** Click "Taqqoslash" [inferred]
- **Exit Action:** Select plan / Close

### SCR-B01-S02 Billing — Cancel Plan Confirm [inferred]
- **ID:** SCR-B01-S02
- **Nom:** Cancel Plan Confirmation
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - Warning: "Obunani bekor qilishni tasdiqlaysizmi?" [inferred]
  - Impact description [inferred]
  - Buttons: "Davom etish" outline + "Bekor qilish" danger
- **Entry Condition:** Click Cancel plan
- **Exit Action:** Confirm → Downgraded

### SCR-B02 Billing — Payment Tab
- **ID:** SCR-B02
- **Nom:** Billing Payment Methods
- **Role:** Admin
- **State:** Default
- **UI:**
  - Cards list: card type icon, last 4 digits, expiry
  - "Primary" badge on default card
  - Click + Payme logos
  - "+ Yangi karta" button
- **Entry Condition:** Tab → Payment
- **Exit Action:** Add / Remove card

### SCR-B02-S01 Billing — Add Card Modal [inferred]
- **ID:** SCR-B02-S01
- **Nom:** Add Payment Method
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Card number, expiry, CVV inputs [inferred]
  - Or Click/Payme integration [inferred]
  - Buttons: Cancel + Add
- **Entry Condition:** Click "+ Yangi karta"
- **Exit Action:** Card added

### SCR-B03 Billing — Invoices Tab
- **ID:** SCR-B03
- **Nom:** Billing Invoices
- **Role:** Admin
- **State:** Default
- **UI:**
  - Table: Sana, Summa, Status (Paid/Pending/Failed badges), Download
  - Status: Paid (success), Pending (warning), Failed (error)
  - Download: PDF icon link
- **Entry Condition:** Tab → Invoices
- **Exit Action:** Download invoice

### SCR-B03-S01 Billing — Invoices Empty
- **ID:** SCR-B03-S01
- **Nom:** Invoices Empty
- **Role:** Admin
- **State:** Empty
- **UI:**
  - "Invoice yo'q"
- **Entry Condition:** No invoices
- **Exit Action:** None

### SCR-B04 Billing — Usage Tab
- **ID:** SCR-B04
- **Nom:** Billing Usage
- **Role:** Admin
- **State:** Default
- **UI:**
  - Limits: chats, agents, storage
  - Progress bars for each (animated fill)
  - Warning state: 80%+ → yellow bar + warning text
  - Over limit: red bar + "Limit oshib ketdi" [inferred]
- **Entry Condition:** Tab → Usage
- **Exit Action:** Upgrade plan if needed

### SCR-B-S01 Billing — Loading
- **ID:** SCR-B-S01
- **Nom:** Billing Loading
- **Role:** Admin
- **State:** Loading
- **UI:**
  - Skeleton table + skeleton cards
- **Entry Condition:** Initial load
- **Exit Action:** Data loaded

### SCR-B-S02 Billing — Error
- **ID:** SCR-B-S02
- **Nom:** Billing Error
- **Role:** Admin
- **State:** Error
- **UI:**
  - "Billing ma'lumotlari yuklanmadi"
- **Entry Condition:** API failure
- **Exit Action:** Retry

---

## DEVELOPER [inferred]

### SCR-DEV01 Developer — API Keys
- **ID:** SCR-DEV01
- **Nom:** Developer API Keys
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "API Keys" 24px Semibold
  - Tab bar: API Keys (active) | Webhooks | Integrations
  - "+ Generate New Key" primary button (top-right)
  - API keys table:
    - Columns: Name, Key (masked: sk_live_•••••••••abc123), Created, Last used, Actions (⋯)
    - Key display: Monospace font, Gray-100 bg, padding 8px 12px, radius-md
    - Actions menu: Copy key, Regenerate, Rename, Delete (danger)
  - Empty state: "No API keys yet" + "Generate your first key" CTA
  - Warning banner: "Keep your keys secret. Never share in client-side code."
- **Entry Condition:** Sidebar → Developer
- **Exit Action:** Generate / Manage keys

### SCR-DEV02 Developer — Webhooks
- **ID:** SCR-DEV02
- **Nom:** Developer Webhooks
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Webhooks (active)
  - "+ Create Webhook" primary button
  - Webhooks table:
    - Columns: URL, Events (badge count), Status (Active/Inactive toggle), Last delivery, Actions (⋯)
    - URL: Monospace, truncated with tooltip
    - Events: "5 events" badge, click to expand list
    - Actions: Edit, Test webhook, View logs, Delete
  - Webhook detail panel (when row clicked):
    - URL input (editable)
    - Events checkboxes: chat.created, message.sent, chat.assigned, chat.closed, csat.submitted
    - Secret key (masked, copy button)
    - Recent deliveries table: Timestamp, Event, Status (200/400/500), Response time, View payload
  - Empty state: "No webhooks configured"
- **Entry Condition:** Tab → Webhooks
- **Exit Action:** Add / Edit / Test webhooks

### SCR-DEV03 Developer — Integrations
- **ID:** SCR-DEV03
- **Nom:** Developer Integrations
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Integrations (active)
  - Grid layout: 3×2 cards (desktop)
  - Each integration card (360×200px):
    - Logo (64px, centered at top)
    - Name 18px Semibold
    - Description 14px Regular, 2 lines
    - Status badge: Connected (success) / Not connected (gray)
    - CTA: "Connect" primary / "Configure" outline / "Disconnect" danger
  - Available integrations:
    - Slack (team notifications)
    - Google Analytics (visitor tracking)
    - Zapier (workflow automation)
    - Make.com (automation)
    - Telegram (channel notifications)
    - Email (SMTP/IMAP)
  - "Request Integration" link at bottom
- **Entry Condition:** Tab → Integrations
- **Exit Action:** Connect / Disconnect

---

## ADD-ONS & MARKETPLACE

### SCR-ADD01 Add-ons — Catalog
- **ID:** SCR-ADD01
- **Nom:** Add-ons Catalog
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Add-ons" 24px Semibold
  - Tab bar: Catalog (active) | Active | Billing
  - Grid layout: 2×4 cards (on desktop), 1 column (mobile)
  - Each card (560×280px):
    - Illustration/icon area (560×180px, gradient bg)
    - Title 18px Semibold
    - Description 14px Regular, 2 lines max
    - Pricing: "$X/month" or "$X/hr" or "Coming soon"
    - CTA: "Get Started" / "Activate Now" / "Learn More" primary button
  - Categories filter: All, Communication, AI, Analytics, E-commerce, Productivity
  - Search bar: "Add-on qidirish..." with icon
- **Entry Condition:** Sidebar → Add-ons / Dashboard → Explore Add-ons
- **Exit Action:** Click card → SCR-ADD02 Details

**Available Add-ons:**
1. **AI Assist** - AI chatbot builder, "Get Started" CTA
2. **Remove Branding** - $29/month - Remove tawk.to branding
3. **Hire Live Agents** - $1/hr - Professional trained agents
4. **Virtual Assistant** - $7.5/hr - Dedicated assistant service
5. **Video + Voice + Screen** - $29/month - Video calls, voice, screensharing
6. **Phone Number** - SMS and phone call support
7. **Shopping Cart** - E-commerce widget integration
8. **In-Chat Payments** - Accept payments in chat
9. **SMS Campaigns** - Bulk SMS marketing (future)
10. **Email Marketing** - Email automation (future)
11. **CRM Integration** - Connect to Salesforce, HubSpot (future)
12. **Advanced Analytics** - Custom reports, export (future)

### SCR-ADD01-S01 Add-ons — Category Filter
- **ID:** SCR-ADD01-S01
- **Nom:** Add-ons Category Filtered
- **Role:** Admin
- **State:** Filtered
- **UI:**
  - Active category highlighted (Primary-600 bg, white text)
  - Grid shows only matching add-ons
  - Empty state: "Bu kategoriyada add-on yo'q" with illustration
- **Entry Condition:** Click category filter
- **Exit Action:** Change filter / Clear filter

### SCR-ADD01-S02 Add-ons — Search Results
- **ID:** SCR-ADD01-S02
- **Nom:** Add-ons Search
- **Role:** Admin
- **State:** Search active
- **UI:**
  - Search input focused with 2px Primary border
  - Results grid filtered in real-time
  - "X natija topildi" at top
  - Empty: "Hech narsa topilmadi" + "Barcha add-on'larni ko'rish" link
- **Entry Condition:** Type in search
- **Exit Action:** Select result / Clear search

### SCR-ADD02 Add-ons — Detail View
- **ID:** SCR-ADD02
- **Nom:** Add-on Detail Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 720px width, white, radius-xl, shadow-xl, overlay
  - Header: Add-on name 24px Bold, close X
  - Hero image/video: 720×320px
  - Tabs: Overview | Features | Pricing | Reviews
  - Overview tab:
    - Description (expanded)
    - Key features (bulleted list with checkmarks)
    - Screenshots carousel (3-5 images)
    - "How it works" section
    - Requirements: "Pro plan or higher" badge
  - Features tab: Detailed feature list with icons
  - Pricing tab: Pricing tiers table, billing cycle toggle
  - Reviews tab: User reviews (5-star, comment, date) [future]
  - Sticky footer: Price + "Activate Now" primary button + "Contact Sales" outline
- **Entry Condition:** Click add-on card
- **Exit Action:** Activate → SCR-ADD03 / Close modal

### SCR-ADD02-S01 Add-ons — Video Playing
- **ID:** SCR-ADD02-S01
- **Nom:** Add-on Video Demo
- **Role:** Admin
- **State:** Video player active
- **UI:**
  - Video player overlay on hero section
  - Play/pause, volume, fullscreen controls
  - Close X to return to static image
- **Entry Condition:** Click play button on hero image
- **Exit Action:** Close video / Video ends

### SCR-ADD03 Add-ons — Activation Flow
- **ID:** SCR-ADD03
- **Nom:** Add-on Activation
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 560px, white, radius-xl, shadow-xl
  - Title: "Activate [Add-on Name]" 20px Semibold
  - Step 1: Confirm pricing
    - Pricing summary card: Price, billing cycle, total
    - "You will be charged $X/month starting today"
  - Step 2: Configuration (if needed)
    - Add-on specific settings (e.g., phone number selection, agent preferences)
  - Step 3: Confirmation
    - Checkbox: "Shartlarga roziman" with link
    - Payment method: Credit card ending in ****1234 (change link)
  - Buttons: "Bekor qilish" outline + "Activate & Pay" primary
  - Loading state: "Faollashtrilmoqda..." + spinner
- **Entry Condition:** Click "Activate Now" in detail view
- **Exit Action:** Success → SCR-ADD03-S01 / Cancel → Close

### SCR-ADD03-S01 Add-ons — Activation Success
- **ID:** SCR-ADD03-S01
- **Nom:** Add-on Activated
- **Role:** Admin
- **State:** Success
- **UI:**
  - Success icon (checkmark in Primary-100 circle, 64px) + confetti animation
  - Title: "[Add-on] faollashtirildi!" 24px Semibold
  - Description: "Endi foydalanishingiz mumkin"
  - CTA: "Configure Settings" primary + "Close" ghost
- **Entry Condition:** Successful activation
- **Exit Action:** Configure → Add-on settings / Close → Active tab

### SCR-ADD03-S02 Add-ons — Activation Failed
- **ID:** SCR-ADD03-S02
- **Nom:** Add-on Activation Error
- **Role:** Admin
- **State:** Error
- **UI:**
  - Error icon (X in Error-50 circle, 64px)
  - Title: "Faollashtirish amalga oshmadi" 20px Semibold
  - Error message: "To'lov muvaffaqiyatsiz" / "Limitdan oshib ketdingiz"
  - Buttons: "Qayta urinish" primary + "Bekor qilish" ghost
- **Entry Condition:** Activation API error
- **Exit Action:** Retry → SCR-ADD03 / Cancel → Close

### SCR-ADD04 Add-ons — Active Tab
- **ID:** SCR-ADD04
- **Nom:** Active Add-ons
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Active (active)
  - List view (not grid):
    - Each row: Icon 48px, Name, Status badge (Active green dot), Price, Actions (⋯)
    - Actions menu: Configure, View Usage, Deactivate, Support
  - Empty state: "Hech qanday add-on faollashtirilmagan" + "Browse Add-ons" CTA
  - Total monthly cost at bottom: "Jami: $58/month" (sum of all active add-ons)
- **Entry Condition:** Tab → Active
- **Exit Action:** Configure / Deactivate

### SCR-ADD04-S01 Add-ons — Actions Menu
- **ID:** SCR-ADD04-S01
- **Nom:** Add-on Actions Dropdown
- **Role:** Admin
- **State:** Dropdown open
- **UI:**
  - Dropdown: 200px, white, radius-lg, shadow-lg
  - Items: Configure (gear), View Usage (chart), Deactivate (power-off), Contact Support (help)
  - Deactivate in #EF4444 color
- **Entry Condition:** Click ⋯ on active add-on row
- **Exit Action:** Select action

### SCR-ADD05 Add-ons — Deactivate Confirm
- **ID:** SCR-ADD05
- **Nom:** Deactivate Add-on
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - Modal: 400px, white, radius-lg, shadow-xl
  - Warning icon (48px, Warning-500)
  - Title: "[Add-on]ni o'chirishni xohlaysizmi?" 18px Semibold
  - Description: "Barcha sozlamalar va ma'lumotlar saqlanadi, lekin funksiyalar ishlamaydi."
  - Note: "Keyingi billing cycle'da to'lov olinmaydi"
  - Buttons: "Ortga" outline + "O'chirish" danger
- **Entry Condition:** Actions → Deactivate
- **Exit Action:** Confirm → Add-on deactivated, toast / Cancel → Close

### SCR-ADD06 Add-ons — Configuration (Generic)
- **ID:** SCR-ADD06
- **Nom:** Add-on Settings
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "[Add-on Name] Settings" 24px Semibold
  - Breadcrumb: Add-ons > Active > [Add-on Name]
  - Sidebar: Add-on icon + name, Status: Active badge, "Deactivate" danger button
  - Main content: Add-on specific settings (varies by add-on)
  - Sticky save bar: "Bekor qilish" outline + "Saqlash" primary
- **Entry Condition:** Active tab → Configure / Detail → Configure
- **Exit Action:** Save → Toast / Back → Active tab

### SCR-ADD07 Add-ons — Billing Tab
- **ID:** SCR-ADD07
- **Nom:** Add-ons Billing
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Billing (active)
  - Summary card: Total add-ons cost per month, next billing date
  - Table: Add-on name, Price, Status, Next charge date, Actions (view invoice)
  - Export button: "Export CSV"
  - Link to main Billing page: "Manage payment methods →"
- **Entry Condition:** Tab → Billing
- **Exit Action:** View invoices / Manage payment

### SCR-ADD-S01 Add-ons — Loading
- **ID:** SCR-ADD-S01
- **Nom:** Add-ons Loading
- **Role:** Admin
- **State:** Loading
- **UI:**
  - 8 skeleton cards with shimmer animation
  - Search bar skeleton
  - Category filters skeleton
- **Entry Condition:** Initial page load
- **Exit Action:** Data loaded → Default

### SCR-ADD-S02 Add-ons — Error
- **ID:** SCR-ADD-S02
- **Nom:** Add-ons Error
- **Role:** Admin
- **State:** Error
- **UI:**
  - Error icon (48px, Error-500)
  - "Add-on'larni yuklab bo'lmadi" 18px Semibold
  - "Iltimos, qayta urinib ko'ring" 14px Regular
  - "Qayta yuklash" outline button
- **Entry Condition:** API failure
- **Exit Action:** Retry → Reload page

---

## CHAT WIDGET (Visitor Side)

### SCR-W01 Widget — Launcher Button
- **ID:** SCR-W01
- **Nom:** Widget Launcher
- **Role:** Visitor
- **State:** Default (closed)
- **UI:**
  - 56px circle, Primary-600 bg
  - Chat icon (white)
  - Badge: unread count (Error-500 bg, white text)
  - Shadow: soft
  - Position: bottom-right (configurable)
  - Pulse animation on new message
- **Entry Condition:** Page load (visitor website)
- **Exit Action:** Click → Widget opens (SCR-W02 or SCR-W03)

### SCR-W02 Widget — Pre-chat Form
- **ID:** SCR-W02
- **Nom:** Widget Pre-chat Form
- **Role:** Visitor
- **State:** Online, first interaction
- **UI:**
  - Chat window: 360×520, header gradient Primary
  - Online status dot (Success-500)
  - Close icon (top-right)
  - Form: Ism, Email, Mavzu inputs
  - Submit: "Yuborish" primary
- **Entry Condition:** Launcher click (first time, online)
- **Exit Action:** Submit → SCR-W04 Chat View

### SCR-W03 Widget — Offline Form
- **ID:** SCR-W03
- **Nom:** Widget Offline Form
- **Role:** Visitor
- **State:** Offline
- **UI:**
  - Chat window: 360×520
  - Status text: "Offline holatda javob beramiz"
  - Xabar qoldirish textarea
  - Email required input
  - Submit button
- **Entry Condition:** Launcher click (offline hours)
- **Exit Action:** Submit → Confirmation → Email notify to agents

### SCR-W04 Widget — Chat View
- **ID:** SCR-W04
- **Nom:** Widget Chat View
- **Role:** Visitor
- **State:** Active chat
- **UI:**
  - Header: gradient, company name, close icon
  - Agent profile mini card
  - Message bubbles (incoming/outgoing)
  - Typing indicator (dots animation)
  - Message history (scrollable)
  - Input: emoji picker, file upload, send button
- **Entry Condition:** Pre-chat form submitted / Returning visitor
- **Exit Action:** Continue chat / Close / End chat

### SCR-W05 Widget — Feedback
- **ID:** SCR-W05
- **Nom:** Widget Feedback (CSAT)
- **Role:** Visitor
- **State:** Chat ended
- **UI:**
  - Star rating (1-5, hover animation)
  - Comment box (textarea)
  - "End chat" / "Yuborish" button
- **Entry Condition:** Chat resolved by agent (CSAT enabled)
- **Exit Action:** Submit feedback → Thank you message [inferred]

### SCR-W05-S01 Widget — Feedback Thank You [inferred]
- **ID:** SCR-W05-S01
- **Nom:** Widget Feedback Thanks
- **Role:** Visitor
- **State:** Success
- **UI:**
  - "Rahmat!" message [inferred]
  - Checkmark icon
  - Auto-close after 3s [inferred]
- **Entry Condition:** Feedback submitted
- **Exit Action:** Widget closes

### SCR-W06 Widget — Proactive Message [inferred]
- **ID:** SCR-W06
- **Nom:** Widget Proactive Message
- **Role:** Visitor
- **State:** Trigger-based popup
- **UI:**
  - Small bubble above launcher button [inferred]
  - Welcome/trigger message text
  - Click → Opens chat window
  - Close X to dismiss
- **Entry Condition:** Trigger condition met (welcome, exit intent, etc.)
- **Exit Action:** Click → Chat / Dismiss

### SCR-W-S01 Widget — Loading
- **ID:** SCR-W-S01
- **Nom:** Widget Loading
- **Role:** Visitor
- **State:** Loading
- **UI:**
  - "Xabarlar yuklanmoqda" text with spinner
- **Entry Condition:** Chat window opened
- **Exit Action:** Data loaded

### SCR-W-S02 Widget — Error
- **ID:** SCR-W-S02
- **Nom:** Widget Error
- **Role:** Visitor
- **State:** Error
- **UI:**
  - "Ulanish uzildi" message
  - Retry button [inferred]
- **Entry Condition:** Connection failure
- **Exit Action:** Retry

---

## SPECIFIC ADD-ON CONFIGURATIONS

### SCR-AI01 AI Assist — Setup Wizard
- **ID:** SCR-AI01
- **Nom:** AI Chatbot Setup
- **Role:** Admin
- **State:** Step 1 of 4
- **UI:**
  - Modal: 720px, white, radius-xl, shadow-xl
  - Progress: 4 steps indicator (dots at top)
  - Step 1: Welcome & Purpose
    - Title: "Create Your AI Assistant" 24px Bold
    - Radio options: Customer Support, Lead Generation, FAQ Bot, Custom
    - "Next" primary button
  - Step 2: Knowledge Base
    - Upload documents (PDF, DOCX, TXT)
    - Or paste website URLs to crawl
    - Or connect to existing Knowledge Base
    - "Previous" outline + "Next" primary
  - Step 3: Personality & Tone
    - Name input: "Bot nomi"
    - Tone select: Professional, Friendly, Formal, Casual
    - Example responses preview
    - "Previous" outline + "Next" primary
  - Step 4: Training & Testing
    - Training progress bar
    - Test chatbot interface (mini widget)
    - "Test a question" input
    - "Previous" outline + "Launch Bot" primary
- **Entry Condition:** AI Assist → Get Started
- **Exit Action:** Launch → Bot activated, integrated into widget

### SCR-RB01 Remove Branding — Configuration
- **ID:** SCR-RB01
- **Nom:** Remove Branding Settings
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Remove Branding" 24px Semibold
  - Card: "Active" success badge, billing info "$29/month"
  - Toggle: "Hide 'Powered by CHATFLOW' badge" - ON
  - Widget preview (real-time):
    - Before: Widget with "Powered by CHATFLOW" footer
    - After: Widget without branding (clean)
  - Custom branding options:
    - Upload custom logo (optional, max 200×60px)
    - Custom footer text input (optional, max 50 chars)
  - "Saqlash" primary button
  - Note: "Changes apply instantly to all widgets"
- **Entry Condition:** Active Add-ons → Remove Branding → Configure
- **Exit Action:** Save → Toast success

### SCR-HL01 Hire Live Agents — Dashboard
- **ID:** SCR-HL01
- **Nom:** Live Agents Management
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Hire Live Agents" 24px Semibold
  - Pricing: "$1/hour per agent" card
  - Metric cards:
    - Total hours: 24h this month
    - Active agents: 2 online now
    - Total cost: $24.00 so far
    - Upcoming shift: 3:00 PM today (2 agents)
  - Schedule calendar:
    - Weekly grid view (Mon-Sun, 24h)
    - Each shift: Agent name, duration, status (Scheduled/Completed)
    - "+ Schedule New Shift" button
  - Agent profiles section:
    - Each card: Avatar, name, rating (4.8★), chats handled, languages
    - "Request Agent" primary button
- **Entry Condition:** Active Add-ons → Hire Live Agents → Configure
- **Exit Action:** Schedule shift / Request agent

### SCR-HL02 Hire Live Agents — Schedule Modal
- **ID:** SCR-HL02
- **Nom:** Schedule Agent Shift
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 560px
  - Title: "Schedule Live Agent" 20px Semibold
  - Form:
    - Date picker: Select date
    - Time range: Start time, End time (dropdowns, 30min intervals)
    - Number of agents: 1-5 select
    - Agent preference: Auto-assign / Specific agent dropdown
    - Special instructions: Textarea (optional)
  - Estimated cost: "$X for Y hours"
  - Buttons: "Bekor qilish" outline + "Confirm Booking" primary
- **Entry Condition:** "+ Schedule New Shift" clicked
- **Exit Action:** Confirm → Shift added, confirmation email

### SCR-VA01 Virtual Assistant — Onboarding
- **ID:** SCR-VA01
- **Nom:** Virtual Assistant Setup
- **Role:** Admin
- **State:** Step 1 of 3
- **UI:**
  - Modal: 720px
  - Step 1: Choose Plan
    - Part-time: 20 hrs/week, $600/month
    - Full-time: 40 hrs/week, $1,200/month
    - Enterprise: Custom hours, Custom pricing
    - Radio selection
  - Step 2: Preferences
    - Industry: Dropdown (E-commerce, SaaS, Education, etc.)
    - Languages: Checkboxes (English, O'zbek, Русский)
    - Tasks: Checkboxes (Chat support, Email support, Phone calls, Data entry)
    - Timezone: GMT+5 default
  - Step 3: Billing & Confirmation
    - Billing summary
    - Contract: 1 month, 3 months, 6 months (discount), 12 months (20% off)
    - "Confirm & Hire" primary button
- **Entry Condition:** Virtual Assistant → Activate Now
- **Exit Action:** Confirm → VA assigned within 24h, onboarding call scheduled

### SCR-VV01 Video+Voice — Settings
- **ID:** SCR-VV01
- **Nom:** Video+Voice Configuration
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Video + Voice + Screensharing" 24px Semibold
  - Status: Active badge, "$29/month"
  - Settings sections:
    1. **Video Calls**
       - Toggle: Enable video calls - ON
       - Max call duration: 30 min default (select: 15/30/60/unlimited)
       - Video quality: Auto / HD / SD
       - Recording: Toggle (extra $10/month) + "Recorded calls stored 30 days"
    2. **Voice Calls**
       - Toggle: Enable voice calls - ON
       - Forwarding number: Phone input (optional, for when offline)
       - Voicemail: Toggle - ON
    3. **Screen Sharing**
       - Toggle: Enable screen sharing - ON
       - Permission: Auto-allow / Request permission
       - Security: "Only agents can initiate screen sharing" checkbox
    4. **Widget Button**
       - Show video/voice button in widget: Toggle - ON
       - Button text: "Call us" input
       - Button position: Top-right / Bottom-right radio
  - Live preview: Widget with video/voice button
  - "Saqlash" primary button
- **Entry Condition:** Active Add-ons → Video+Voice → Configure
- **Exit Action:** Save → Settings applied

### SCR-PN01 Phone Number — Activation
- **ID:** SCR-PN01
- **Nom:** Activate Phone Number
- **Role:** Admin
- **State:** Setup wizard
- **UI:**
  - Modal: 720px
  - Step 1: Choose Number
    - Country: Uzbekistan +998 (locked for now)
    - City: Tashkent dropdown
    - Number type: Local / Toll-free
    - Available numbers list: 5 options with checkmarks
    - "Next" primary button
  - Step 2: Forwarding Settings
    - Forward calls to: Agent assignment (auto / specific agent)
    - Voicemail: Toggle - ON
    - Voicemail greeting: Upload audio or text-to-speech input
    - SMS notifications: Toggle - ON
    - "Next" primary button
  - Step 3: Billing & Confirmation
    - Setup fee: $0
    - Monthly fee: $15/month
    - Usage: Incoming calls free, outgoing $0.05/min
    - SMS: $0.02 per SMS
    - "Activate Number" primary button
- **Entry Condition:** Phone Number → Activate Now
- **Exit Action:** Activate → Number active within 24h, confirmation SMS

### SCR-SC01 Shopping Cart — Integration
- **ID:** SCR-SC01
- **Nom:** Shopping Cart Setup
- **Role:** Admin
- **State:** Coming soon
- **UI:**
  - Page title: "Shopping Cart Integration" 24px Semibold
  - Status: "Coming soon" gray badge
  - Preview: Illustration of widget with shopping cart icon
  - Description: "Allow visitors to browse products and add to cart directly in the chat window"
  - Features list:
    - Product catalog sync
    - Add to cart in chat
    - Checkout link generation
    - Order tracking
  - "Notify me when available" outline button + email input
- **Entry Condition:** Add-ons Catalog → Shopping Cart
- **Exit Action:** Notify me → Email saved

### SCR-IP01 In-Chat Payments — Integration
- **ID:** SCR-IP01
- **Nom:** In-Chat Payments Setup
- **Role:** Admin
- **State:** Coming soon
- **UI:**
  - Page title: "In-Chat Payments" 24px Semibold
  - Status: "Coming soon" gray badge
  - Preview: Illustration of payment modal in chat
  - Description: "Accept payments from visitors directly in the chat window"
  - Supported gateways:
    - Click (Uzbekistan) - logo
    - Payme (Uzbekistan) - logo
    - Stripe (International) - logo
    - PayPal (International) - logo
  - Features:
    - Secure payment links
    - Invoice generation
    - Payment confirmation in chat
    - Automatic receipt sent to visitor
  - "Notify me when available" outline button + email input
- **Entry Condition:** Add-ons Catalog → In-Chat Payments
- **Exit Action:** Notify me → Email saved

---

## KNOWLEDGE BASE

### SCR-KB01 Knowledge Base — Dashboard
- **ID:** SCR-KB01
- **Nom:** Knowledge Base Overview
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "Knowledge Base" 24px Semibold
  - "+ New Article" primary button (top-right)
  - Tab bar: Articles (active) | Categories | Settings | Analytics
  - Quick stats cards row:
    - Total articles: 24
    - Published: 20
    - Drafts: 4
    - Total views: 1,245
  - Search bar: "Maqola qidirish..." with filter dropdown
  - Articles table:
    - Columns: Title, Category badge, Status badge, Views, Last updated, Actions (⋯)
    - Status: Published (green), Draft (gray), Scheduled (blue)
    - Sortable by: Title, Views, Date
    - Pagination: 20 per page
  - Empty state: "Maqolalar yo'q" + "Birinchi maqolani yarating" CTA
- **Entry Condition:** Sidebar → Knowledge Base
- **Exit Action:** New article / Edit article / Manage categories

### SCR-KB01-S01 KB — Article Actions Menu
- **ID:** SCR-KB01-S01
- **Nom:** Article Actions Dropdown
- **Role:** Admin
- **State:** Dropdown open
- **UI:**
  - Dropdown: 200px, white, radius-lg, shadow-lg
  - Items: Edit (pencil), Duplicate (copy), View Public (eye), Analytics (chart), Delete (trash, #EF4444)
  - Divider before Delete
- **Entry Condition:** Click ⋯ on article row
- **Exit Action:** Select action

### SCR-KB01-S02 KB — Filter Dropdown
- **ID:** SCR-KB01-S02
- **Nom:** Articles Filter
- **Role:** Admin
- **State:** Dropdown open
- **UI:**
  - Filter by status: All, Published, Draft, Scheduled
  - Filter by category: All categories + list
  - Sort by: Newest, Oldest, Most viewed, Recently updated
  - "Apply" primary button
- **Entry Condition:** Click filter icon
- **Exit Action:** Apply filters → Table updates

### SCR-KB02 Knowledge Base — Create/Edit Article
- **ID:** SCR-KB02
- **Nom:** Article Editor
- **Role:** Admin
- **State:** Default
- **UI:**
  - Page title: "New Article" or "Edit: [Article Title]"
  - Breadcrumb: Knowledge Base > Articles > New
  - Sidebar (right, 280px):
    - Status: Draft/Published toggle
    - Category: Dropdown select
    - Featured image: Upload area (600×400px recommended)
    - Tags: Input + chips
    - SEO: Meta title, Meta description textareas
    - Emoji/Icon: Picker (40px display)
    - "Preview" outline button
    - "Save Draft" outline button
    - "Publish" primary button
  - Main editor (fluid):
    - Title input: 56px font, "Maqola sarlavhasi..." placeholder
    - Rich text editor:
      - Toolbar: Bold, Italic, Link, H2, H3, List, Ordered, Quote, Code, Image, Video
      - Editor area: WYSIWYG, min-height 500px
      - Markdown support toggle
    - Auto-save indicator: "Saved at 14:23"
- **Entry Condition:** "+ New Article" clicked / Edit action
- **Exit Action:** Save draft / Publish / Cancel

### SCR-KB02-S01 KB — Preview Modal
- **ID:** SCR-KB02-S01
- **Nom:** Article Preview
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Full-screen modal (overlay rgba(0,0,0,0.8))
  - Preview area: 800px centered, white bg, public portal styling
  - Top bar: "Preview" title + "Close" X + "Edit" button
  - Article rendered as visitors see it
  - Scrollable content
- **Entry Condition:** Click "Preview" button
- **Exit Action:** Close → Back to editor / Edit → Focus editor

### SCR-KB02-S02 KB — Emoji Picker
- **ID:** SCR-KB02-S02
- **Nom:** Emoji/Icon Picker
- **Role:** Admin
- **State:** Popup open
- **UI:**
  - Popup: 320×400px, white, radius-lg, shadow-xl
  - Tabs: Emoji | Icons
  - Emoji tab: Categories (smileys, objects, nature, etc.), search
  - Icons tab: Heroicons library, categories, search
  - Grid: 40px icons, hover highlight
  - Selected: checkmark overlay
- **Entry Condition:** Click emoji/icon selector in sidebar
- **Exit Action:** Select → Icon applied

### SCR-KB02-S03 KB — Image Upload
- **ID:** SCR-KB02-S03
- **Nom:** Insert Image
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 560px
  - Tabs: Upload | Link | Gallery
  - Upload: Drag & drop area, "Browse files" button, 5MB limit
  - Link: URL input + "Insert" button
  - Gallery: Recently uploaded images grid (select from existing)
  - Preview: Thumbnail + filename + size
  - "Insert" primary button + "Cancel" outline
- **Entry Condition:** Click image icon in editor toolbar
- **Exit Action:** Insert → Image added to editor

### SCR-KB03 Knowledge Base — Categories
- **ID:** SCR-KB03
- **Nom:** Categories Management
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Categories (active)
  - "+ New Category" primary button
  - Categories list (card view):
    - Each card: Category icon/emoji 48px, Name, Description (1 line), Article count badge, Actions (⋯)
    - Grid: 3 columns on desktop, 1 on mobile
    - Drag handle (reorder categories)
  - Empty state: "Kategoriyalar yo'q" + "Birinchi kategoriyani yarating"
- **Entry Condition:** Tab → Categories
- **Exit Action:** New category / Edit / Delete

### SCR-KB03-S01 KB — New/Edit Category Modal
- **ID:** SCR-KB03-S01
- **Nom:** Category Modal
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 480px
  - Title: "New Category" or "Edit Category"
  - Form:
    - Category name: Input, required
    - Description: Textarea, 200 chars
    - Icon/Emoji: Picker (48px)
    - Color: Color picker (for badge/accent)
    - Parent category: Dropdown (for subcategories, optional)
  - Buttons: "Cancel" outline + "Save" primary
- **Entry Condition:** "+ New Category" / Edit category
- **Exit Action:** Save → Category added/updated

### SCR-KB03-S02 KB — Delete Category Confirm
- **ID:** SCR-KB03-S02
- **Nom:** Delete Category
- **Role:** Admin
- **State:** Confirm modal
- **UI:**
  - Modal: 400px
  - Warning icon (48px, Warning-500)
  - Title: "Bu kategoriyani o'chirish?"
  - Description: "Bu kategoriyada 12ta maqola bor. Ularni boshqa kategoriyaga o'tkazing yoki o'chiring."
  - Dropdown: "Maqolalarni shu kategoriyaga o'tkazish:" + category select
  - Checkbox: "Barcha maqolalarni ham o'chirish" (danger)
  - Buttons: "Bekor qilish" outline + "O'chirish" danger
- **Entry Condition:** Actions → Delete category
- **Exit Action:** Confirm → Category deleted / Cancel

### SCR-KB04 Knowledge Base — Settings
- **ID:** SCR-KB04
- **Nom:** Knowledge Base Settings
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Settings (active)
  - Sections:
    1. **General**
       - KB Title: Input ("Yordam Markazi" default)
       - Heading: Input ("Default Heading")
       - Sub-heading: Textarea (100 chars)
       - Default Language: Dropdown (O'zbek, Русский, English)
    2. **Appearance**
       - Primary Color: Color picker (#4F46E5 default) + 8 presets
       - Font: Dropdown (Inter, Arial, Roboto, etc.)
       - Cards Layout: Radio (Grid 📱 / List 📋)
       - Show article views: Toggle - ON
       - Show reading time: Toggle - ON
    3. **Public Portal**
       - Enable public KB: Toggle - ON
       - Custom domain: Input + "Connect" button (Pro feature)
       - Public URL: Display only "https://kb.chatflow.uz/your-workspace"
       - SEO: Meta title, description, image upload
    4. **Social Media**
       - Facebook URL: Input
       - Twitter URL: Input
       - LinkedIn URL: Input
       - Instagram URL: Input
    5. **Navigation Links**
       - + Add Link: Label + URL inputs (max 5 links)
       - Displayed in KB header
    6. **Integrations**
       - Google Analytics ID: Input (Format: UA-XXXXXX-X)
       - Chat Widget: Toggle "Show widget on KB portal" - ON
       - Ticket Form: Toggle "Show ticket submission form" - ON
  - Sticky save bar: "Cancel" + "Save Changes" primary
- **Entry Condition:** Tab → Settings
- **Exit Action:** Save → Settings applied, cache cleared

### SCR-KB04-S01 KB — Custom Domain Setup
- **ID:** SCR-KB04-S01
- **Nom:** Connect Custom Domain
- **Role:** Admin
- **State:** Modal open
- **UI:**
  - Modal: 560px
  - Title: "Custom Domain Setup" 20px Semibold
  - Step 1: Enter domain
    - Input: "help.yourcompany.com"
    - "Next" button
  - Step 2: DNS Records
    - Instructions: "Add these DNS records to your domain provider"
    - Table: Type (CNAME), Name (@), Value (kb.chatflow.uz)
    - "Copy" buttons for each value
    - "Next" button
  - Step 3: Verification
    - "We're checking your DNS records..."
    - Loading spinner or Success checkmark
    - "Verify" button / "Done" button
  - Note: "DNS propagation may take up to 24 hours"
- **Entry Condition:** Click "Connect" next to custom domain
- **Exit Action:** Complete → Domain connected

### SCR-KB05 Knowledge Base — Analytics
- **ID:** SCR-KB05
- **Nom:** KB Analytics
- **Role:** Admin
- **State:** Default
- **UI:**
  - Tab: Analytics (active)
  - Date range picker: Last 7 days / 30 days / 90 days / Custom
  - Metric cards:
    - Total views: 1,245 (+12%)
    - Unique visitors: 432 (+8%)
    - Avg. time on page: 3m 24s (+15%)
    - Search queries: 89
  - Charts:
    - Line chart: Views over time (daily) [inferred]
    - Bar chart: Top 10 articles by views
    - Pie chart: Views by category
  - Tables:
    - Top articles: Title, Views, Avg. time, Bounce rate
    - Top search queries: Query, Count, Results found, Click-through rate
    - Referrers: Source, Visits
  - Export button: "Export Report" (CSV/PDF)
- **Entry Condition:** Tab → Analytics
- **Exit Action:** Export / View article details

### SCR-KB06 Knowledge Base — Public Portal (Visitor)
- **ID:** SCR-KB06
- **Nom:** Public Knowledge Base
- **Role:** Public (visitor)
- **State:** Default
- **UI:**
  - Header:
    - Logo + KB Title
    - Nav links (Home, Contact, etc.)
    - Language switcher dropdown
    - Search bar: Large 56px, centered, prominent
  - Hero section:
    - Heading (H1, 40px Bold)
    - Sub-heading (18px Regular, Gray-600)
    - Background: Gradient or solid Primary-50
  - Categories grid:
    - 3×2 cards (desktop), 1 column (mobile)
    - Each: Icon 64px, Category name, Description, Article count badge
    - Hover: shadow-lg, scale(1.02)
  - Popular articles section:
    - "Popular Articles" H2
    - 6 article cards (2×3 grid)
    - Each: Icon/emoji, Title, Description (2 lines), Views badge, Reading time
  - Footer:
    - Copyright, Privacy, Terms links
    - Social media icons
    - "Powered by CHATFLOW" (removable with Remove Branding add-on)
- **Entry Condition:** Visit public KB URL
- **Exit Action:** Click category / article / search

### SCR-KB06-S01 KB Public — Category View
- **ID:** SCR-KB06-S01
- **Nom:** Category Articles List
- **Role:** Public
- **State:** Category selected
- **UI:**
  - Breadcrumb: Home > Category Name
  - Category header: Icon + Name + Description
  - Articles list: All articles in category
  - Each article: Title, Description, Views, Reading time
  - Sidebar (desktop only):
    - "In this category" - article list (clickable)
    - "Related categories" - links
  - Empty: "Bu kategoriyada maqolalar yo'q"
- **Entry Condition:** Click category card
- **Exit Action:** Click article → Article view

### SCR-KB06-S02 KB Public — Article View
- **ID:** SCR-KB06-S02
- **Nom:** Article Detail Page
- **Role:** Public
- **State:** Default
- **UI:**
  - Breadcrumb: Home > Category > Article Title
  - Article header:
    - Icon/emoji 56px
    - Title (H1, 32px Bold)
    - Meta: Last updated, Views, Reading time
  - Article content:
    - Rich text formatted content
    - Images full-width (max 800px)
    - Code blocks with syntax highlighting
    - Headings H2, H3 for structure
    - Table of contents (auto-generated from H2, sticky sidebar)
  - Article footer:
    - "Was this helpful?" - Yes 👍 / No 👎 buttons
    - Feedback textarea (if No clicked)
    - Social share: Facebook, Twitter, LinkedIn, Copy link
  - Sidebar:
    - Table of contents (sticky)
    - "Related articles" - 5 suggestions
    - "Contact support" CTA button
  - Bottom: "Related Articles" section - 3 cards
- **Entry Condition:** Click article from list / category
- **Exit Action:** Feedback / Contact support / Related article

### SCR-KB06-S03 KB Public — Search Results
- **ID:** SCR-KB06-S03
- **Nom:** KB Search Results
- **Role:** Public
- **State:** Search active
- **UI:**
  - Search bar: Focused, query displayed
  - Results count: "24 ta natija topildi: 'chat setup'"
  - Results list:
    - Each: Title (highlighted query), Description snippet with matches, Category badge, Relevance score
    - Sortable: Relevance / Date / Views
  - Filters sidebar:
    - Filter by category: Checkboxes
    - Filter by date: Last week / month / year
  - Pagination: 10 results per page
  - Empty: "Hech narsa topilmadi" + Search tips + "Browse all categories" link
  - "Did you mean: [suggestion]" for typos
- **Entry Condition:** Submit search query
- **Exit Action:** Click result → Article view / Refine search

### SCR-KB06-S04 KB Public — Feedback Submitted
- **ID:** SCR-KB06-S04
- **Nom:** Article Feedback Thanks
- **Role:** Public
- **State:** Success
- **UI:**
  - Toast notification: "Fikringiz uchun rahmat!" Success-500, 3s
  - Or inline message below buttons: Success checkmark + "Thank you for your feedback"
  - Counter updated: 👍 12 | 👎 3
- **Entry Condition:** Click Yes/No + Submit feedback
- **Exit Action:** Auto-dismiss after 3s

### SCR-KB-S01 Knowledge Base — Empty State
- **ID:** SCR-KB-S01
- **Nom:** KB Empty State
- **Role:** Admin
- **State:** Empty
- **UI:**
  - Illustration: Book/Document icon (120px, Gray-300)
  - Title: "Knowledge Base bo'sh" 18px Semibold
  - Description: "Mijozlaringizga yordam berish uchun maqolalar yarating"
  - "Birinchi maqolani yaratish" primary button
  - Or "Import from file" outline button (CSV/JSON)
- **Entry Condition:** No articles exist
- **Exit Action:** Create article / Import

### SCR-KB-S02 Knowledge Base — Loading
- **ID:** SCR-KB-S02
- **Nom:** KB Loading
- **Role:** Admin, Public
- **State:** Loading
- **UI:**
  - Skeleton table rows (admin)
  - Skeleton cards (public portal)
  - Shimmer animation 1.5s
- **Entry Condition:** Page load
- **Exit Action:** Data loaded

### SCR-KB-S03 Knowledge Base — Error
- **ID:** SCR-KB-S03
- **Nom:** KB Error
- **Role:** Admin, Public
- **State:** Error
- **UI:**
  - Error icon (48px, Error-500)
  - "Maqolalarni yuklab bo'lmadi" 18px Semibold
  - "Qayta yuklash" outline button
- **Entry Condition:** API failure
- **Exit Action:** Retry

---

## CONTACTS (CRM)

### SCR-CT01 Contacts — List (Table View)
- **ID:** SCR-CT01
- **Nom:** Contacts List Table
- **Role:** Admin, Manager, Operator
- **Layout:** Dashboard Shell + Main Content Area
- **UI:**
  - **Header:**
    - Title: "Kontaktlar" 24px Semibold, Gray-900
    - Subtitle: "Jami 247 kontakt" 14px Regular, Gray-600
    - "+ Kontakt qo'shish" primary button, right-aligned
    - "Import" ghost button
    - "Export" ghost button
  - **Filters & Search Bar:**
    - Search input: 320px width, "Ism, email yoki telefon bo'yicha qidirish..."
    - Filter: Tags dropdown (multi-select)
    - Filter: Organization dropdown
    - Filter: Last Seen (Today, This week, This month, All time)
    - "Tozalash" link (clear all filters)
  - **Table Columns:**
    1. Checkbox (select all header)
    2. Name (Avatar 32px + Name 14px Semibold + Email 13px Gray-600)
    3. Primary Phone (14px Regular)
    4. Organization (badge, 13px Medium)
    5. Tags (max 2 visible + "+3" badge)
    6. Last Seen (relative time: "2 daqiqa oldin")
    7. Actions (3-dot menu: View, Edit, Delete)
  - **Table Body:**
    - Row height: 72px
    - Hover: bg-gray-50
    - 15 rows per page
  - **Pagination:** Bottom-center, "1 - 15 of 247", prev/next arrows
  - **Bulk Actions Bar (appears when items selected):**
    - "3 kontakt tanlandi" (sticky top)
    - Actions: Delete, Add Tag, Export, Merge
- **Entry Point:** Sidebar > Contacts
- **Exit Action:** Click contact → SCR-CT02

### SCR-CT01-S01 Contacts — Card View
- **ID:** SCR-CT01-S01
- **Nom:** Contacts Card View
- **Role:** Admin, Manager, Operator
- **State:** Alternative Layout
- **UI:**
  - View toggle: Table | **Cards** (active)
  - Grid layout: 3 columns (desktop), 2 (tablet), 1 (mobile)
  - Contact Card (320×180px each):
    - Avatar 56px top-left
    - Name 16px Semibold
    - Email + Phone 14px Gray-600
    - Organization badge
    - Tags (max 3 visible)
    - Last Seen bottom-right corner 12px Gray-500
    - Hover: shadow-md, scale 1.02
  - Gap: 20px between cards
- **Entry Condition:** Toggle to Card view
- **Exit Action:** Click card → SCR-CT02

### SCR-CT01-S02 Contacts — Filter Active
- **ID:** SCR-CT01-S02
- **Nom:** Contacts Filtered
- **Role:** Admin, Manager, Operator
- **State:** Filtered
- **UI:**
  - Active filter chips above table:
    - "Tag: VIP" (with X icon to remove)
    - "Organization: Workio" (with X icon)
    - "Last Seen: This week" (with X icon)
  - Subtitle: "47 kontakt topildi" (filtered count)
  - "Barcha filtrlarni olib tashlash" link, Primary-600
- **Entry Condition:** Apply any filter
- **Exit Action:** Remove filters or view contacts

### SCR-CT02 Contact Profile — Detail View
- **ID:** SCR-CT02
- **Nom:** Contact Detail
- **Role:** Admin, Manager, Operator
- **Layout:** Dashboard Shell + Right Panel (800px width)
- **UI:**
  - **Header:**
    - Back arrow (← Kontaktlar)
    - Avatar 80px, center-aligned
    - Name 24px Semibold
    - Email 16px Regular, Gray-600
    - Phone 16px Regular, Gray-600
    - "Tahrirlash" outline button, top-right
    - "O'chirish" ghost button (red), top-right
  - **Tabs Navigation:**
    - **Overview** (active) | Conversations | Notes | Activity
  - **Overview Tab Content:**
    - **Contact Information Card:**
      - Title: "Asosiy ma'lumotlar" 16px Semibold
      - Fields:
        - Name: [value]
        - Email: [value] (with verified badge ✓)
        - Phone: [value]
        - Organization: [badge] (clickable)
        - Tags: [badge1] [badge2] ... (clickable to filter)
        - Created: "Jan 15, 2026"
        - Last Seen: "2 daqiqa oldin" (green dot if online)
    - **Custom Attributes Card:**
      - Title: "+ Maxsus maydon qo'shish" (expandable)
      - Fields (dynamic):
        - City: "Toshkent"
        - Product Interest: "Enterprise Plan"
        - Lead Source: "Google Ads"
        - (Each field editable inline on hover)
    - **Recent Conversations Card:**
      - Title: "So'nggi suhbatlar" + "Barchasini ko'rish" link
      - List: 3 most recent chats
        - Each: Date, Preview text (1 line), Status badge
  - **Conversations Tab:**
    - Timeline view of all chats (reverse chronological)
    - Each chat: Date, Duration, Agent name, Rating (if any)
    - "Suhbatni ochish" button to open in Inbox
  - **Notes Tab:**
    - "+ Eslatma qo'shish" button
    - Notes list:
      - Each note: Author avatar, Text, Timestamp, Edit/Delete actions
    - Rich text editor for new note
  - **Activity Tab:**
    - Timeline: All events (created, updated, tagged, chat started, etc.)
    - Each event: Icon, Description, Timestamp, Actor (who did it)
- **Entry Point:** Click contact from SCR-CT01
- **Exit Action:** Close panel or navigate to other contact

### SCR-CT02-S01 Contact Profile — Edit Mode
- **ID:** SCR-CT02-S01
- **Nom:** Edit Contact
- **Role:** Admin, Manager, Operator
- **State:** Edit Mode
- **UI:**
  - Header: "Kontaktni tahrirlash" 20px Semibold
  - Form fields (all editable):
    - Avatar upload (click to change, 80×80px)
    - Name input (required)
    - Email input (validated, with verification status)
    - Phone input (formatted)
    - Organization dropdown (searchable)
    - Tags multi-select (with "+ Yangi tag" option)
    - Custom attributes (each field editable)
  - Actions:
    - "Bekor qilish" ghost button
    - "Saqlash" primary button
  - Auto-save indicator: "Oxirgi saqlangan: 2 daqiqa oldin"
- **Entry Condition:** Click "Tahrirlash" from SCR-CT02
- **Exit Action:** Save → Back to detail view

### SCR-CT02-S02 Contact Profile — Add Note
- **ID:** SCR-CT02-S02
- **Nom:** Add Note to Contact
- **Role:** Admin, Manager, Operator
- **State:** Adding Note
- **UI:**
  - Notes tab active
  - Expanded rich text editor (300px height):
    - Toolbar: Bold, Italic, Link, Bullet list
    - Placeholder: "Eslatma yozing..."
    - Character count: 0 / 2000
  - Actions:
    - "Bekor qilish" ghost button
    - "Saqlash" primary button
  - After save: Toast "Eslatma qo'shildi" Success-500
- **Entry Condition:** Click "+ Eslatma qo'shish" in Notes tab
- **Exit Action:** Save note, editor collapses

### SCR-CT03 Organizations — List
- **ID:** SCR-CT03
- **Nom:** Organizations List
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content Area
- **UI:**
  - **Header:**
    - Title: "Tashkilotlar" 24px Semibold
    - Subtitle: "Jami 42 tashkilot" 14px Gray-600
    - "+ Tashkilot qo'shish" primary button
  - **Search Bar:** 320px, "Tashkilot nomi bo'yicha qidirish..."
  - **Table Columns:**
    1. Name (Icon 32px + Name 14px Semibold)
    2. Contacts Count ("12 kontakt")
    3. Website (link, opens in new tab)
    4. Created Date
    5. Actions (View, Edit, Delete)
  - **Table Body:**
    - Row height: 64px
    - Hover: bg-gray-50
    - 15 rows per page
  - **Pagination:** Bottom
- **Entry Point:** Contacts submenu > Organizations
- **Exit Action:** Click organization → SCR-CT03-S01

### SCR-CT03-S01 Organization — Detail View
- **ID:** SCR-CT03-S01
- **Nom:** Organization Detail
- **Role:** Admin, Manager
- **Layout:** Right Panel (800px)
- **UI:**
  - **Header:**
    - Back arrow (← Tashkilotlar)
    - Organization icon/logo 80px
    - Name 24px Semibold
    - Website link 16px, Gray-600
    - "Tahrirlash" button
    - "O'chirish" button
  - **Info Card:**
    - Name: [value]
    - Website: [value]
    - Industry: [dropdown value or custom]
    - Created: "Jan 10, 2026"
  - **Contacts in Organization:**
    - Title: "Kontaktlar (12)" + "+ Kontakt qo'shish" button
    - Mini table: Avatar, Name, Email, Role (if custom attribute)
    - Click contact → Opens SCR-CT02
  - **Activity Timeline:**
    - All organization-related events
- **Entry Condition:** Click organization from SCR-CT03
- **Exit Action:** Close panel

### SCR-CT04 Import Contacts — Upload
- **ID:** SCR-CT04
- **Nom:** Import Contacts
- **Role:** Admin, Manager
- **Layout:** Modal (600px width)
- **UI:**
  - **Header:** "Kontaktlarni import qilish" 20px Semibold, close X
  - **Steps indicator:** 1. Upload → 2. Map → 3. Confirm
  - **Step 1: Upload**
    - Drag & drop zone (400×200px):
      - "CSV yoki Excel faylini bu yerga tashlang"
      - "yoki fayl tanlash" link
      - Accepted: .csv, .xlsx, .xls (max 10MB)
    - Template download link: "Namuna faylni yuklab olish" (CSV template)
  - **After file selected:**
    - File name + size + X (remove)
    - "Davom etish" primary button → Step 2
  - **Step 2: Map Fields**
    - File preview: First 5 rows shown in table
    - Mapping dropdowns for each column:
      - CSV Column → CHATFLOW Field
      - E.g., "Name" → Name (required)
      - "Email Address" → Primary Email (required)
      - "Phone" → Primary Phone
      - "Company" → Organization
      - "Tags" → Tags (comma-separated)
      - Custom attributes (auto-create if not exist)
    - Skip column checkbox for unused columns
    - "Orqaga" + "Davom etish" buttons
  - **Step 3: Confirm**
    - Summary:
      - "247 kontakt import qilinmoqda"
      - "12 kontakt yangilashtiriladi (email mos keladi)"
      - "235 yangi kontakt qo'shiladi"
    - Options:
      - ☑ "Takroriy emaillarni yangilash"
      - ☑ "Bo'sh maydonlarni o'tkazib yuborish"
    - "Bekor qilish" + "Import boshlash" primary button
  - **Step 4: Processing (auto-advances)**
    - Progress bar: "45 / 247 kontakt qo'shildi..."
    - After complete: Success message modal → Close
- **Entry Point:** Contacts > Import button
- **Exit Action:** Import complete → Back to SCR-CT01

### SCR-CT04-S01 Export Contacts — Options
- **ID:** SCR-CT04-S01
- **Nom:** Export Contacts
- **Role:** Admin, Manager
- **Layout:** Modal (500px width)
- **UI:**
  - **Header:** "Kontaktlarni export qilish" 20px Semibold
  - **Options:**
    - **Export Format:**
      - ⦿ CSV (takrorlangan)
      - ◯ Excel (.xlsx)
    - **Fields to Export:** (Checkboxes)
      - ☑ Name
      - ☑ Email
      - ☑ Phone
      - ☑ Organization
      - ☑ Tags
      - ☑ Last Seen
      - ☑ Custom Attributes
      - Select All | Deselect All
    - **Filter:**
      - ⦿ Barcha kontaktlar (247)
      - ◯ Tanlangan kontaktlar (12)
      - ◯ Hozirgi filtr (47)
  - **Actions:**
    - "Bekor qilish" ghost
    - "Export qilish" primary → Downloads file
  - **After export:** Toast "Fayl yuklab olindi" Success-500
- **Entry Point:** Contacts > Export button or bulk actions
- **Exit Action:** File downloads, modal closes

### SCR-CT05 Segments — Dynamic Groups
- **ID:** SCR-CT05
- **Nom:** Contact Segments
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content Area
- **UI:**
  - **Header:**
    - Title: "Segmentlar" 24px Semibold
    - Subtitle: "Dinamik kontakt guruhlari" 14px Gray-600
    - "+ Segment yaratish" primary button
  - **Segment Cards Grid (2 columns):**
    - Each card (400×140px):
      - Segment name 16px Semibold (e.g., "VIP Mijozlar")
      - Contact count: "12 kontakt" 14px Gray-600
      - Conditions preview: "Tag: VIP • Last Seen: 7 kun ichida" 13px Gray-500
      - Actions: View Contacts, Edit, Delete (3-dot menu)
      - Created by: Avatar + Name 12px Gray-500
  - **Pre-built Segments:**
    - "Faol mijozlar" (Last seen: 7 days)
    - "Yangi kontaktlar" (Created: 30 days)
    - "Javob bermagan" (No chat: 90 days)
- **Entry Point:** Contacts submenu > Segments
- **Exit Action:** Click segment → Filters contacts in SCR-CT01

### SCR-CT05-S01 Create Segment — Conditions
- **ID:** SCR-CT05-S01
- **Nom:** Create Segment
- **Role:** Admin, Manager
- **Layout:** Modal (700px width)
- **UI:**
  - **Header:** "Segment yaratish" 20px Semibold
  - **Form:**
    - **Segment Name:** Input (required, "Masalan: VIP Mijozlar")
    - **Description:** Textarea (optional, 500 chars max)
    - **Conditions (Query Builder):**
      - "Kontaktlar quyidagi shartlarga mos kelsin:"
      - Condition 1:
        - [Field dropdown: Tag] [Operator: contains] [Value: VIP]
        - "+ Shart qo'shish" link
      - Logic: AND / OR toggle between conditions
      - Condition 2 (optional):
        - [Field: Last Seen] [Operator: within last] [Value: 30 days]
      - Max 5 conditions
    - **Preview Results:**
      - "47 kontakt mos keladi" (live count)
      - Mini list: First 3 contacts preview (avatar + name)
  - **Actions:**
    - "Bekor qilish" ghost
    - "Saqlash" primary → Creates segment
  - **After save:** Toast "Segment yaratildi" Success-500
- **Entry Condition:** Click "+ Segment yaratish"
- **Exit Action:** Save → Back to SCR-CT05

### SCR-CT06 Merge Duplicates — Detection
- **ID:** SCR-CT06
- **Nom:** Merge Duplicate Contacts
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content Area
- **UI:**
  - **Header:**
    - Title: "Takroriy kontaktlarni birlashtirish" 22px Semibold
    - Subtitle: "Email yoki telefon asosida takrorlar topildi" 14px Gray-600
    - "Qayta aniqlash" ghost button (re-scan)
  - **Detection Criteria Toggle:**
    - ☑ Email matches
    - ☑ Phone matches
    - ☐ Name similarity (fuzzy match)
    - "Qo'llash" button
  - **Duplicate Groups List:**
    - Each group card (600px width, expandable):
      - "2 takroriy kontakt topildi" (or 3, 4, etc.)
      - Preview: Avatar + Name + Email (primary contact bolded)
      - "Birlashtirish" primary button
      - "Ignore" ghost button (mark as not duplicate)
  - **Merge Modal (when click "Birlashtirish"):**
    - Title: "Kontaktlarni birlashtirish"
    - Side-by-side comparison:
      - **Contact 1** (left) | **Contact 2** (right)
      - Radio buttons to select which value to keep for each field:
        - Name: ⦿ Jahongir Otajonov | ◯ J. Otajonov
        - Email: ⦿ jahongir@example.com (keep)
        - Phone: ◯ +998901234567 (keep from Contact 2)
        - Tags: ☑ Merge all tags (VIP + Client)
        - Notes: ☑ Merge all notes
        - Conversations: ☑ Merge all conversations
    - "Bekor qilish" + "Birlashtirish" primary button
  - **After merge:** 
    - Toast "Kontaktlar birlashtirildi" Success-500
    - Merged contact opens in SCR-CT02
    - Duplicate removed from list
- **Entry Point:** Contacts submenu > Merge Duplicates or bulk actions
- **Exit Action:** All duplicates resolved → "Takroriy kontaktlar topilmadi" empty state

### SCR-CT-S01 Contacts — Empty State
- **ID:** SCR-CT-S01
- **Nom:** Contacts Empty
- **Role:** Admin, Manager, Operator
- **State:** Empty
- **UI:**
  - Illustration: Address book icon (120px, Gray-300)
  - Title: "Kontaktlar yo'q" 18px Semibold, Gray-900
  - Description: "Mijozlar bilan suhbat boshlanishi bilan kontaktlar avtomatik saqlanadi" 14px Gray-600
  - Primary button: "+ Kontakt qo'shish"
  - Secondary button: "Import qilish"
- **Entry Condition:** 0 contacts in workspace
- **Exit Action:** Add contact or import

### SCR-CT-S02 Contacts — Search No Results
- **ID:** SCR-CT-S02
- **Nom:** Contacts Search Empty
- **Role:** Admin, Manager, Operator
- **State:** No Results
- **UI:**
  - Icon: Magnifying glass with X (64px, Gray-300)
  - Title: "Hech narsa topilmadi" 16px Semibold
  - Description: "\"jahongir\" ga mos kontakt topilmadi" (shows search query)
  - "Qidiruvni tozalash" link, Primary-600
- **Entry Condition:** Search returns 0 results
- **Exit Action:** Clear search or modify query

### SCR-CT-S03 Contacts — Error Loading
- **ID:** SCR-CT-S03
- **Nom:** Contacts Error
- **Role:** Admin, Manager, Operator
- **State:** Error
- **UI:**
  - Error icon (48px, Error-500)
  - Title: "Kontaktlarni yuklab bo'lmadi" 18px Semibold
  - Description: "Tarmoq xatosi yuz berdi" 14px Gray-600
  - "Qayta yuklash" outline button
- **Entry Condition:** API failure when loading contacts
- **Exit Action:** Retry load

---

## ONLINE VISITORS

### SCR-OV01 Online Visitors — List (Real-time)
- **ID:** SCR-OV01
- **Nom:** Visitors List
- **Role:** Admin, Manager, Operator
- **Layout:** Dashboard Shell + Main Content Area
- **UI:**
  - **Header:**
    - Title: "Onlayn tashrif buyuruvchilar" 24px Semibold, Gray-900
    - Live indicator: 🟢 "47 онлайн" (animated pulse, updates real-time)
    - Subtitle: "Hozir saytingizda" 14px Gray-600
    - "Proaktiv chat boshlash" primary button (disabled if no visitor selected)
  - **Filters & Tabs:**
    - Tabs: **Онлайн** (47) | Офлайн (last 24h) | Barchasi
    - Filter: Country dropdown (🇺🇿 Uzbekistan, 🇷🇺 Russia, etc.)
    - Filter: Page URL dropdown (Homepage, Pricing, Blog, etc.)
    - Filter: Visit duration (< 1 min, 1-5 min, 5-15 min, 15+ min)
    - "Tozalash" link
  - **Visitor Cards Grid (3 columns desktop, 2 tablet, 1 mobile):**
    Each card (360×200px):
    - **Header Row:**
      - Status: 🟢 Online (green dot, 8px, pulsing)
      - IP/Location: "Tashkent, Uzbekistan" 13px Gray-600 + 🇺🇿 flag
      - Time: "5m 32s onlayn" 12px Gray-500, updating every second
    - **Visitor Info:**
      - Avatar: 48px (anonymous icon if no contact data, or actual avatar)
      - Name: "Anonymous" or "Jahongir Otajonov" 16px Semibold
      - Email: "jahongir@example.com" 14px Gray-600 (if known)
      - Device: 💻 Desktop / 📱 Mobile / 📲 Tablet icon 14px
      - Browser: Chrome icon + "Chrome 120" 13px Gray-500
    - **Current Activity:**
      - Page title: "Narxlar — CHATFLOW" 14px Medium, Primary-600, truncated
      - Page URL: "/pricing" 13px Gray-500, monospace font
      - Page views: "3 sahifa ko'rdi" 12px Gray-500
    - **Visitor History (expandable):**
      - Previous pages: Timeline (3 latest)
        - E.g., "Homepage → Features → Pricing"
        - Each with timestamp
    - **Actions (bottom of card):**
      - "Xabar yuborish" outline button (proactive chat)
      - "Profilni ko'rish" ghost button → Opens SCR-OV02
      - "Kontakt sifatida saqlash" ghost button (if not already contact)
    - **Hover Effect:** shadow-lg, scale 1.02
  - **Empty State (0 visitors online):**
    - Icon: 👥 64px Gray-300
    - "Hozir tashrif buyuruvchilar yo'q" 18px Semibold
    - "Kutib turing yoki widget sozlamalarini tekshiring" 14px Gray-600
  - **Auto-refresh:** Every 5 seconds (shown in footer: "5 soniya oldin yangilandi")
- **Entry Point:** Sidebar > Online Visitors
- **Exit Action:** Start proactive chat or view visitor profile

### SCR-OV02 Visitor Profile — Detail View
- **ID:** SCR-OV02
- **Nom:** Visitor Detail
- **Role:** Admin, Manager, Operator
- **Layout:** Right Panel (800px width)
- **UI:**
  - **Header:**
    - Back arrow: ← Tashrif buyuruvchilar
    - Status: 🟢 Online / 🔴 Offline
    - "Xabar yuborish" primary button (proactive chat)
  - **Visitor Summary Card:**
    - Avatar 80px (centered)
    - Name: "Anonymous #12847" or actual name 20px Semibold
    - Location: "Tashkent, Uzbekistan" 🇺🇿 16px Gray-600
    - IP Address: "82.215.xxx.xxx" 14px Gray-500 (masked for privacy)
    - First seen: "Jan 10, 2026" 14px Gray-600
    - Last seen: "2 daqiqa oldin" 14px Gray-600
    - Total visits: "12 marta" 14px Gray-600
  - **Current Session Info:**
    - Session started: "5m 32s oldin" + timer (live)
    - Device: 💻 Desktop, Windows 11
    - Browser: Chrome 120.0.6099
    - Screen: 1920×1080
    - Referrer: "Google Search" or direct URL
    - Landing page: "/homepage"
    - Pages viewed this session: 4
  - **Page View Timeline (Scrollable):**
    - Vertical timeline (most recent top):
      - Each page:
        - Page title + URL
        - Time spent: "2m 15s"
        - Timestamp: "14:32"
        - Thumbnail: Page screenshot (optional, 120×80px)
  - **Browsing Behavior:**
    - Total page views (all time): 47
    - Avg session duration: "8m 45s"
    - Bounce rate: "25%" (single page visits)
    - Most viewed pages: Top 3 list
  - **Geographic & Tech Info:**
    - Country/City: Map icon + "Tashkent, Uzbekistan"
    - Timezone: "UTC+5"
    - Language: "uz-UZ, ru-RU"
    - OS: Windows 11
    - Device type: Desktop
  - **Contact Information (if available):**
    - Email: [value] (if submitted via chat or form)
    - Phone: [value]
    - "Kontakt sifatida saqlash" button → Creates contact in SCR-CT01
  - **Conversation History:**
    - List: Previous chats with this visitor (if any)
    - Each: Date, Agent, Status, Rating
    - "Suhbatni ochish" link
  - **Custom Events (if tracked via API):**
    - E.g., "Signed up for trial" — timestamp
    - "Downloaded whitepaper" — timestamp
- **Entry Condition:** Click visitor from SCR-OV01
- **Exit Action:** Start chat or close panel

### SCR-OV03 Online Visitors — Proactive Chat Initiate
- **ID:** SCR-OV03
- **Nom:** Proactive Chat Start
- **Role:** Admin, Manager, Operator
- **Layout:** Modal (500px width)
- **UI:**
  - **Header:** "Proaktiv chat boshlash" 20px Semibold, close X
  - **Visitor Preview:**
    - Avatar 48px
    - Name: "Anonymous #12847"
    - Current page: "/pricing"
    - Time on page: "3m 45s"
  - **Message to Send:**
    - Textarea (250px height):
      - Placeholder: "Salom! Sizga yordam kerakmi?"
      - Character count: 0 / 500
    - Canned responses dropdown:
      - "Sizga yordam berishim mumkinmi?"
      - "Savollaringiz bormi?"
      - "Pricing haqida ma'lumot olishni xohlaysizmi?"
      - Select → auto-fills textarea
  - **Send Options:**
    - ☑ "Agent sifatida yuborish" (shows agent name + avatar)
    - ◯ "Chatbot sifatida yuborish" (shows bot icon)
  - **Actions:**
    - "Bekor qilish" ghost button
    - "Xabar yuborish" primary button
      - On send: Opens Inbox with new conversation (SCR-I01)
      - Visitor sees popup on their screen
      - If visitor doesn't respond in 30s: Toast "Javob yo'q"
  - **After send:**
    - Modal closes
    - Redirects to Inbox with active chat
    - Agent can continue conversation
- **Entry Condition:** Click "Xabar yuborish" from SCR-OV01 or SCR-OV02
- **Exit Action:** Chat conversation starts in Inbox

### SCR-OV04 Online Visitors — Map View
- **ID:** SCR-OV04
- **Nom:** Visitors Geographic Map
- **Role:** Admin, Manager
- **Layout:** Dashboard Shell + Main Content (Full Width)
- **UI:**
  - **Header:**
    - Title: "Joylashuv xaritasi" 24px Semibold
    - Live count: "🟢 47 онлайн" animated
    - View toggle: **Map** | List (switches to SCR-OV01)
  - **Interactive World Map:**
    - Centered map (OpenStreetMap or Mapbox)
    - Markers: Pin icons at visitor locations
    - Cluster pins: If multiple visitors in same city (e.g., "12" badge)
    - Marker colors:
      - Green: Online visitor
      - Gray: Offline (recent)
    - Click marker → Shows popup:
      - Visitor avatar + name
      - Current page
      - "Ko'rish" link → SCR-OV02
      - "Chat boshlash" link → SCR-OV03
  - **Live Activity Sidebar (right, 300px):**
    - "So'nggi faollik" 16px Semibold
    - Real-time feed (scrollable):
      - "Anonymous #12847 — Tashkent → /pricing sahifasiga o'tdi" 2s ago
      - "Jahongir — Homepage sahifasidan chiqdi" 15s ago
      - Updates every 3-5 seconds
  - **Stats Panel (bottom overlay or top):**
    - Total visitors today: 1,247
    - Online now: 47
    - Top countries: 🇺🇿 Uzbekistan (28), 🇷🇺 Russia (12), 🇰🇿 Kazakhstan (7)
- **Entry Point:** Online Visitors > Map View toggle
- **Exit Action:** Toggle to List view or view visitor profile

### SCR-OV-S01 Online Visitors — Empty State
- **ID:** SCR-OV-S01
- **Nom:** Visitors Empty
- **Role:** Admin, Manager, Operator
- **State:** Empty
- **UI:**
  - Illustration: 👥 Monitor icon (120px, Gray-300)
  - Title: "Tashrif buyuruvchilar yo'q" 18px Semibold, Gray-900
  - Description: "Widget o'rnatilganligini tekshiring yoki trafik kutib turing" 14px Gray-600
  - "Widget sozlamalari" outline button → SCR-S03 Widget Settings
- **Entry Condition:** 0 visitors (online or offline)
- **Exit Action:** Configure widget

### SCR-OV-S02 Online Visitors — Loading
- **ID:** SCR-OV-S02
- **Nom:** Visitors Loading
- **Role:** Admin, Manager, Operator
- **State:** Loading
- **UI:**
  - Skeleton cards (3 columns)
  - Pulsing shimmer effect
  - "Yuklanmoqda..." text or spinner
- **Entry Condition:** Initial page load or refresh
- **Exit Action:** Data loads → SCR-OV01

---

## TEAM CHAT

### SCR-TC01 Team Chat — Inbox (Internal)
- **ID:** SCR-TC01
- **Nom:** Team Chat Inbox
- **Role:** Admin, Manager, Operator (all agents)
- **Layout:** Dashboard Shell + Split View (similar to customer Inbox)
- **UI:**
  - **Left Sidebar (300px):**
    - **Header:**
      - Title: "Jamoa chat" 18px Semibold
      - "+ Yangi chat" button (opens SCR-TC01-S01)
    - **Tabs:**
      - **To'g'ridan-to'g'ri** (Direct Messages) — 1-on-1 chats
      - **Xonalar** (Rooms/Channels) — Group chats
    - **Direct Messages List:**
      - Each item (DM card, 280×72px):
        - Avatar 40px (online status: 🟢 green dot or 🔴 offline)
        - Name: "Jahongir Otajonov" 14px Semibold
        - Role badge: "Manager" 12px Gray-500
        - Last message preview: "Salom, bugun..." 13px Gray-600, truncated
        - Timestamp: "5m ago" 12px Gray-500
        - Unread badge: "3" (red badge if unread)
      - Sort: Most recent first
      - Online agents highlighted (green border or top of list)
    - **Rooms List:**
      - Each room card (280×72px):
        - Icon: # or 🔒 (private room) 32px
        - Room name: "#general" 14px Semibold
        - Members count: "12 a'zo" 12px Gray-500
        - Last message: "Ali: Rahmat!" 13px Gray-600
        - Timestamp: "2m ago"
        - Unread badge: "7"
      - Default rooms:
        - #general (everyone)
        - #support-team
        - #announcements (read-only for Operators)
    - **Search Bar:**
      - Input: "Agent yoki xonani qidirish..."
      - Filters: Online Only toggle
  - **Main Chat Area (right, remaining width):**
    - **Selected Chat Header:**
      - If DM: Avatar 32px + Name + Online status + Role
      - If Room: Icon + Room name + Members count + "A'zolar" link (opens member list modal)
    - **Message Thread:**
      - Messages displayed in reverse chronological order (scroll to bottom)
      - Each message bubble:
        - Avatar 32px (left)
        - Name + Timestamp above message: "Jahongir • 14:32" 12px Gray-600
        - Message text: 14px Regular, Gray-900
        - Max width: 600px
        - Own messages: Aligned right, Primary-500 background, white text
        - Others: Aligned left, Gray-100 background, Gray-900 text
      - **Message Features:**
        - Text formatting: *bold*, _italic_, `code`, ```code block```
        - Mentions: @Jahongir (highlights mentioned agent, sends notification)
        - Emoji: 😊 picker button
        - File attachments: Image preview (max 400×300px) or file icon + name + size
        - Reply/Thread: Click message → "Javob berish" → creates threaded reply (collapsed by default)
        - Reactions: Hover message → 👍 ❤️ 😂 emoji quick reactions
      - **Date separators:** "Bugun", "Kecha", "Jan 10"
    - **Message Input (bottom, sticky):**
      - Textarea: "Xabar yozing..." auto-expand (max 120px height)
      - Keyboard shortcut: Enter to send, Shift+Enter for new line
      - Toolbar (above textarea):
        - Bold, Italic, Code buttons
        - 😊 Emoji picker
        - 📎 Attach file button (opens file picker: images, docs, max 10MB)
        - @Mention dropdown (shows agent list, filter as type)
      - "Yuborish" primary button (or press Enter)
      - Typing indicator: "Jahongir yozmoqda..." 13px Gray-500, animated dots
  - **No Chat Selected State:**
    - Illustration: 💬 Chat bubble icon (100px, Gray-300)
    - "Chat tanlang yoki yangi chat boshlang" 16px Semibold
    - "+ Yangi chat boshlash" button
- **Entry Point:** Sidebar > Team Chat
- **Exit Action:** Send message or switch chat

### SCR-TC01-S01 Team Chat — Start New Conversation
- **ID:** SCR-TC01-S01
- **Nom:** Start Team Chat
- **Role:** Admin, Manager, Operator
- **Layout:** Modal (500px width)
- **UI:**
  - **Header:** "Yangi chat boshlash" 20px Semibold, close X
  - **Options:**
    - ⦿ **To'g'ridan-to'g'ri chat** (1-on-1)
    - ◯ **Guruh chat** (multiple agents)
  - **If Direct Message selected:**
    - Agent selector (searchable dropdown):
      - Shows: Online agents first (green dot)
      - Each: Avatar + Name + Role + Online status
      - Search: Filter by name
    - First message textarea (optional): "Birinchi xabar..."
    - "Chatni boshlash" primary button
      - On click: Opens DM in main area (SCR-TC01)
  - **If Group Chat selected:**
    - Room name input: "Xona nomi" (required, e.g., "#marketing-team")
    - Description: Textarea (optional, "Xona ta'rifi...")
    - Room type:
      - ⦿ Public (everyone can join)
      - ◯ Private (invite-only)
    - Select members: Multi-select agent list (checkboxes)
      - Shows all agents
      - Selected count: "5 a'zo tanlandi"
    - "Xona yaratish" primary button
      - On create: Room appears in Rooms list, opens in main area
  - **Actions:**
    - "Bekor qilish" ghost
    - "Boshlash/Yaratish" primary
- **Entry Condition:** Click "+ Yangi chat" from SCR-TC01
- **Exit Action:** Chat/Room created and opened

### SCR-TC02 Team Chat — Room Settings
- **ID:** SCR-TC02
- **Nom:** Room Settings
- **Role:** Admin, Manager (room creator)
- **Layout:** Modal (600px width)
- **UI:**
  - **Header:** "Xona sozlamalari: #general" 20px Semibold, close X
  - **Tabs:** General | Members | Permissions
  - **General Tab:**
    - Room name: Input "#general" (editable)
    - Description: Textarea "Umumiy muhokamalar uchun"
    - Room type: Public / Private toggle
    - Archive room: "Arxivga yuborish" button (danger)
    - Delete room: "Xonani o'chirish" button (danger, confirmation modal)
  - **Members Tab:**
    - Current members list (scrollable):
      - Each: Avatar 32px + Name + Role + "O'chirish" button (X)
      - Online status indicator
    - "+ A'zo qo'shish" button (opens agent selector dropdown)
    - "Invite link" section:
      - "Taklifnoma havolasini yaratish" button
      - Generated link: https://chatflow.uz/team/invite/abc123
      - "Nusxalash" button + "Havolani o'chirish" link
  - **Permissions Tab:**
    - Who can post:
      - ⦿ Everyone
      - ◯ Admin and Manager only
      - ◯ Read-only (announcements channel)
    - Who can add members:
      - ⦿ Admin only
      - ◯ Admin + Manager
      - ◯ Everyone
    - Message history:
      - ⦿ Show full history to new members
      - ◯ Show only messages after join
  - **Actions:**
    - "Bekor qilish" ghost
    - "Saqlash" primary
  - **After save:** Toast "Sozlamalar saqlandi"
- **Entry Condition:** Click room name → Settings icon (gear)
- **Exit Action:** Settings saved, modal closes

### SCR-TC03 Team Chat — Notifications Settings
- **ID:** SCR-TC03
- **Nom:** Team Chat Notifications
- **Role:** Admin, Manager, Operator
- **Layout:** Settings page (Dashboard Shell + Main Content)
- **UI:**
  - **Header:** "Jamoa chat bildishnomalari" 24px Semibold
  - **Notification Preferences:**
    - **Desktop Notifications:**
      - ⦿ All messages
      - ◯ Only mentions (@me)
      - ◯ Only direct messages
      - ◯ Off
    - **Sound:**
      - ☑ "Xabar ovozi" toggle
      - Sound: "Chime" dropdown (3-4 options)
      - Test button: "🔊 Sinab ko'rish"
    - **Email Notifications:**
      - ☑ "Direct messages" (when offline)
      - ☑ "Mentions" (when offline)
      - ◯ "Daily digest" (summary email)
    - **Do Not Disturb:**
      - ☑ "DND rejimni yoqish" toggle
      - Time range: "22:00 - 08:00" (custom range picker)
      - Days: Mon-Sun checkboxes
    - **Mute Specific Rooms:**
      - List: All rooms with Mute toggle for each
      - E.g., "#general" — 🔕 Muted / 🔔 Unmuted
  - **Actions:**
    - "Standartga qaytarish" outline button
    - "Saqlash" primary button
  - **After save:** Toast "Sozlamalar saqlandi"
- **Entry Point:** Team Chat > Settings icon (top-right) or User menu > Notification Settings
- **Exit Action:** Settings saved

### SCR-TC-S01 Team Chat — Empty State (No Messages)
- **ID:** SCR-TC-S01
- **Nom:** Team Chat Empty
- **Role:** Admin, Manager, Operator
- **State:** Empty
- **UI:**
  - Illustration: 💬 Chat bubbles (100px, Gray-300)
  - Title: "Xabarlar yo'q" 18px Semibold
  - Description: "Jamoa bilan muloqot boshlang!" 14px Gray-600
  - "+ Yangi chat boshlash" outline button
- **Entry Condition:** No team chats yet
- **Exit Action:** Start first chat

### SCR-TC-S02 Team Chat — Offline State
- **ID:** SCR-TC-S02
- **Nom:** Team Chat Offline
- **Role:** Admin, Manager, Operator
- **State:** Error/Offline
- **UI:**
  - Banner (top): "Tarmoqqa ulanishda xatolik" Yellow-50 background, Warning icon
  - Messages grayed out (read-only)
  - Message input disabled with overlay: "Offline rejim. Qayta ulanmoqda..."
  - Retry button: "Qayta ulanish"
- **Entry Condition:** WebSocket connection lost
- **Exit Action:** Reconnects automatically or manual retry

---

# FULL USER FLOWS

---

## FLOW 1 — ADMIN FLOW

```
[Landing Page] → [Sign Up] → [Email Verification] → [First Login Welcome]
       ↓
[Onboarding Welcome] → [Workspace Setup] → [Widget Customization] → [Widget Installation] → [Verification]
       ↓
[Dashboard Shell]
       ↓
  ┌────┼────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
  ↓    ↓        ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓          ↓
[Inbox] [Automation] [Team] [Analytics] [Settings] [Billing] [Developer] [Add-ons] [KB] [Contacts] [Visitors] [Team Chat]
  ↓         ↓          ↓         ↓          ↓          ↓          ↓          ↓        ↓        ↓          ↓           ↓
Chat    Ish Vaqti   Agents    Overview   Workspace   Plan    API Keys   Catalog   Dashboard  List      Online     Inbox
Manage  Auto-Reply  Roles     Perform.   Widget      Payment Webhooks   Active    Articles   Profile    Map       DM/Rooms
        Triggers    Invites   CSAT       Security    Invoices Integr.   Config    Categories Orgs      Proactive  Mentions
        Greetings             Export     Notif.      Usage              Billing   Settings   Import    Profile    Files
                              SLA        Profile                                  Analytics  Segments  Tracking   Notif
                              Channels                                            Public     Merge
                              Segments
                              Tags
                              Custom
```

### Decision Points
- Invite success? → Yes: Agent added / No: Error toast
- Payment success? → Yes: Plan upgraded / No: Error, retry
- Widget found? → Yes: Continue onboarding / No: Troubleshoot

---

## FLOW 1B — ADD-ONS ACTIVATION FLOW

```
[Dashboard] → [Sidebar: Add-ons] → [Add-ons Catalog]
                                          ↓
                                  [Filter / Search]
                                          ↓
                                    [Card click]
                                          ↓
                                  [Detail Modal]
                                          ↓
                          ┌───────────────┼───────────────┐
                          ↓               ↓               ↓
                    [Overview]      [Features]      [Pricing]
                          └───────────────┬───────────────┘
                                          ↓
                                  [Activate Now]
                                          ↓
                                [Activation Modal]
                                          ↓
                          ┌───────────────┼───────────────┐
                          ↓                               ↓
                  [Configure if needed]           [Skip config]
                          └───────────────┬───────────────┘
                                          ↓
                              [Confirm pricing & payment]
                                          ↓
                          ┌───────────────┼───────────────┐
                          ↓                               ↓
                    [Success ✓]                     [Error ✗]
                          ↓                               ↓
              [Moves to Active tab]              [Retry / Cancel]
                          ↓
                [Configure settings]
                          ↓
                  [Start using]
```

### Add-on Specific Flows

**AI Assist:**
```
[Activate] → [4-step wizard] → [Upload knowledge] → [Train] → [Test] → [Launch]
```

**Hire Live Agents:**
```
[Activate] → [Schedule shift] → [Select date/time] → [Choose agents] → [Confirm] → [Agents assigned]
```

**Virtual Assistant:**
```
[Activate] → [Choose plan] → [Set preferences] → [Billing] → [VA assigned 24h] → [Onboarding call]
```

**Video+Voice:**
```
[Activate] → [Enable features] → [Set quality] → [Configure widget] → [Live preview] → [Save]
```

**Phone Number:**
```
[Activate] → [Choose number] → [Set forwarding] → [Voicemail] → [Billing] → [Number active 24h]
```

### Decision Points
- Payment success? → Yes: Add-on activated / No: Error, retry
- Configuration required? → Yes: Show config screen / No: Activate immediately
- Trial available? → Yes: Start 14-day trial / No: Charge immediately

---

## FLOW 2 — AGENT FLOW

```
[Login] → [Dashboard Shell (Inbox default)]
               ↓
         [Status: Online/Away/Busy]
               ↓
         [Inbox Queue]
               ↓
    ┌──────────┼──────────┐
    ↓          ↓          ↓
[Accept]  [Transfer]  [Resolve]
    ↓          ↓          ↓
[Chat]    [Transfer   [Resolve
 ↓        Modal]      Modal]
 ├── Add note          ↓
 ├── Add tag       [CSAT sent
 ├── Saved replies  to visitor]
 ├── Star chat
 ├── File upload
 └── Quick actions
```

### Agent Available Modules
- Inbox (full access)
- Analytics → My Stats only
- Settings → Profile tab only [inferred]
- Docs, Support links

### Quick Actions in Chat
- Add note
- Add tag
- Saved replies / Canned responses
- Star chat
- Transfer
- Resolve

---

## FLOW 3 — VISITOR FLOW

```
[Website with Widget Launcher]
               ↓
         [Click Launcher]
               ↓
    ┌──────────┴──────────┐
    ↓                     ↓
[Online]              [Offline]
    ↓                     ↓
[Pre-chat Form]     [Offline Form]
    ↓                     ↓
[Chat View]         [Email Notify
    ↓                to Agents]
[Conversation]
    ↓
[Agent Resolves]
    ↓
[Feedback / CSAT]
    ↓
[Thank You]
    ↓
[Widget Closes / New Chat Option]
```

### Trigger-based Branch
```
[Visitor on page] → [Trigger condition met] → [Proactive Message Bubble]
                                                      ↓
                                              [Click → Chat View]
                                              [Dismiss → Hidden]
```

### Offline Branch
```
[Offline Form submitted] → [Confirmation shown] → [Agent receives email]
                                                         ↓
                                                   [Agent responds
                                                    when online]
```

---

## FLOW 4 — FIRST-TIME ADMIN SETUP (End-to-End) [inferred]

```
[Landing] → [CTA: Bepul boshlash] → [Sign Up (Google/Email)]
     ↓
[Email Verification] → [Click link in email] → [First Login Welcome]
     ↓
[Onboarding Step 1: Welcome] → [Boshlash]
     ↓
[Onboarding Step 2: Workspace Setup] → [Davom etish]
     ↓
[Onboarding Step 3: Widget Customization] → [Davom etish]
     ↓
[Onboarding Step 4: Widget Installation] → [Code copied, widget verified]
     ↓
[Onboarding Step 5: Test Message] → [Test sent, received in inbox]
     ↓
[Dashboard → Inbox (first chat visible)]
     ↓
[Admin explores: Team → Invite agents, Settings → Configure, Billing → Upgrade]
```

---

## FLOW 5 — CHAT LIFECYCLE [inferred]

```
[Visitor sends message via Widget]
     ↓
[Message arrives in Inbox queue]
     ↓
[Auto-assign to available agent OR unassigned pool]
     ↓
[Agent sees in Active tab with unread badge]
     ↓
[Agent opens chat → Status: Active]
     ↓
[Conversation: messages, files, canned responses]
     ↓
  ┌──┴──────────────┐
  ↓                 ↓
[Resolve]        [Transfer]
  ↓                 ↓
[Resolve Modal]  [Transfer Modal → New agent]
  ↓
[Optional CSAT → Visitor rates]
  ↓
[Chat → Closed tab]
  ↓
[Available in Analytics]
```

---

## FLOW 6 — KNOWLEDGE BASE MANAGEMENT

```
[Admin Dashboard] → [Sidebar: Knowledge Base] → [KB Dashboard]
                                                      ↓
                                          ┌───────────┴───────────┐
                                          ↓                       ↓
                                    [Articles Tab]         [Categories Tab]
                                          ↓                       ↓
                                  [+ New Article]          [+ New Category]
                                          ↓                       ↓
                                  [Article Editor]         [Category Modal]
                                          ↓                       ↓
                              ┌───────────┼───────────┐          ↓
                              ↓           ↓           ↓      [Save Category]
                        [Title]    [Content]    [Metadata]       ↓
                        [Emoji]     [WYSIWYG]   [Category]  [Category created]
                                          └───────┬───────┘
                                                  ↓
                                          [Preview article]
                                                  ↓
                                        ┌─────────┼─────────┐
                                        ↓                   ↓
                                  [Save Draft]        [Publish]
                                        ↓                   ↓
                              [Back to dashboard]   [Article live]
                                                            ↓
                                                    [Visible on public KB]
```

### Knowledge Base Settings Flow
```
[KB Dashboard] → [Settings Tab]
       ↓
  ┌────┼─────────┬──────────┬──────────┬──────────┐
  ↓    ↓         ↓          ↓          ↓          ↓
[General] [Appearance] [Public] [Social] [Nav] [Integrations]
  ↓         ↓         ↓          ↓        ↓          ↓
Title    Color    Toggle   URLs    Links   GA ID
Heading   Font    Domain   Input   Input   Toggle
Lang     Layout   SEO                       Widget
         Views
```

### Public KB Visitor Flow
```
[Visitor] → [Public KB URL: kb.chatflow.uz/workspace]
                        ↓
                [KB Home Page]
                        ↓
            ┌───────────┼───────────┐
            ↓                       ↓
    [Search query]          [Click category]
            ↓                       ↓
    [Search results]        [Category page]
            ↓                       ↓
    [Click article]         [Click article]
            └───────────┬───────────┘
                        ↓
                [Article view]
                        ↓
        ┌───────────────┼───────────────┐
        ↓               ↓               ↓
[Helpful? Yes]  [Helpful? No]  [Related article]
        ↓               ↓               ↓
[Thank you]     [Feedback]      [Navigate]
                        ↓
                [Contact Support]
                        ↓
                [Open chat widget]
```

### Decision Points
- Article published? → Yes: Visible on public KB / No: Saved as draft
- Custom domain? → Yes: Connect domain flow / No: Use default subdomain
- Search found results? → Yes: Display list / No: Show suggestions + browse link
- Article helpful? → Yes: Log positive feedback / No: Show feedback form

---

## FLOW 7 — CONTACTS (CRM) FLOW

### Contact Management Flow (Admin/Manager)
```
[Dashboard] → [Sidebar: Contacts] → [SCR-CT01 Contacts List]
                                            ↓
                    ┌───────────────────────┼───────────────────────┐
                    ↓                       ↓                       ↓
            [Search/Filter]         [View Toggle]         [+ Add Contact]
                    ↓                       ↓                       ↓
            [Filtered results]      [Table ⟷ Cards]        [Manual form]
                    ↓                       ↓                       ↓
            [Click contact]         [Click contact]         [Fill details]
                    └───────────────────────┼───────────────────────┘
                                            ↓
                                [SCR-CT02 Contact Profile]
                                            ↓
                        ┌───────────────────┼───────────────────┐
                        ↓                   ↓                   ↓
                [Overview Tab]      [Conversations]      [Notes Tab]
                        ↓                   ↓                   ↓
                [View details]      [Chat history]      [+ Add note]
                [Edit inline]       [Open in Inbox]     [Save note]
                        ↓
                [Edit Mode S01]
                        ↓
            [Update fields → Save]
```

### Import/Export Flow
```
[Contacts List] → [Import button] → [SCR-CT04 Import Modal]
                                            ↓
                                    [Upload CSV/Excel]
                                            ↓
                                    [Map columns]
                                            ↓
                                    [Confirm import]
                                            ↓
                                    [Processing...]
                                            ↓
                                [Success: X contacts added]
                                            ↓
                                [Back to Contacts List]

[Contacts List] → [Export button] → [SCR-CT04-S01 Export Modal]
                                            ↓
                                    [Select format: CSV/Excel]
                                            ↓
                                    [Choose fields]
                                            ↓
                                    [Select filter scope]
                                            ↓
                                [File downloads]
```

### Organizations & Segments Flow
```
[Contacts Submenu] → [Organizations] → [SCR-CT03 Org List]
                                            ↓
                                    [+ Add Organization]
                                            ↓
                                    [Fill form: Name, Website]
                                            ↓
                                    [Save → SCR-CT03-S01]
                                            ↓
                                [View org details + contacts]
                                            ↓
                                [+ Add contact to org]

[Contacts Submenu] → [Segments] → [SCR-CT05 Segments]
                                            ↓
                                    [+ Create Segment]
                                            ↓
                                    [SCR-CT05-S01 Query Builder]
                                            ↓
                                    [Add conditions: Tag, Date, etc.]
                                            ↓
                                    [Preview results: X contacts]
                                            ↓
                                    [Save segment]
                                            ↓
                                [Click segment → Filter contacts]
```

### Merge Duplicates Flow
```
[Contacts Submenu] → [Merge Duplicates] → [SCR-CT06 Detection]
                                                ↓
                                    [Auto-detect by email/phone]
                                                ↓
                                    [Show duplicate groups]
                                                ↓
                                    [Click "Birlashtirish"]
                                                ↓
                                    [Merge Modal opens]
                                                ↓
                                    [Select which values to keep]
                                                ↓
                                [☑ Merge tags, notes, chats]
                                                ↓
                                    [Confirm merge]
                                                ↓
                                [Success → Merged contact opens]
                                                ↓
                                [Continue or resolve next duplicate]
```

### Automatic Contact Creation Flow (Visitor Chat)
```
[Visitor] → [Opens chat widget] → [Starts conversation]
                                        ↓
                                [Widget asks: Email?]
                                        ↓
                        ┌───────────────┼───────────────┐
                        ↓                               ↓
            [Visitor provides email]        [Skip email]
                        ↓                               ↓
            [Check: Email exists?]          [Anonymous contact]
                        ↓                               ↓
        ┌───────────────┼───────────────┐               ↓
        ↓                               ↓               ↓
[Yes: Link to existing]     [No: Create new contact]    ↓
        └───────────────┬───────────────┴───────────────┘
                        ↓
        [Contact auto-created in SCR-CT01]
                        ↓
        [Admin/Agent sees contact in Contacts List]
                        ↓
        [Contact shows: Name, Email, First message, Last seen]
                        ↓
        [Admin can enrich: Add tags, organization, notes]
```

### Decision Points
- **Email exists?** → Yes: Link conversation to existing contact / No: Create new contact
- **Duplicate detected?** → Yes: Prompt admin to merge / No: Keep as separate
- **Import file valid?** → Yes: Proceed to mapping / No: Show error + format help
- **Export scope?** → All contacts / Selected contacts / Filtered contacts
- **Segment conditions met?** → Yes: Show count + preview / No: "0 contacts match"
- **Organization selected?** → Yes: Filter contacts by org / No: Show all contacts

---

# ERROR CODES REGISTRY

## Authentication Errors (AUTH-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| AUTH-001 | 401 | Email yoki parol noto'g'ri | Invalid email or password |
| AUTH-002 | 401 | Sessiya muddati tugagan | Session expired |
| AUTH-003 | 403 | Email tasdiqlanmagan | Email not verified |
| AUTH-004 | 403 | Akkaunt bloklangan | Account suspended |
| AUTH-005 | 429 | Haddan tashqari urinishlar | Too many login attempts |
| AUTH-006 | 400 | Parol talablarga mos kelmaydi | Password does not meet requirements |
| AUTH-007 | 409 | Bu email allaqachon ro'yxatdan o'tgan | Email already registered |
| AUTH-008 | 400 | Tasdiqlash havolasi muddati tugagan | Verification link expired |

## Validation Errors (VAL-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| VAL-001 | 400 | Majburiy maydon | Required field |
| VAL-002 | 400 | Email formati noto'g'ri | Invalid email format |
| VAL-003 | 400 | Telefon raqami noto'g'ri | Invalid phone number |
| VAL-004 | 400 | URL formati noto'g'ri | Invalid URL format |
| VAL-005 | 413 | Fayl hajmi 10MB dan oshmasligi kerak | File size exceeds 10MB |
| VAL-006 | 415 | Fayl formati qo'llab-quvvatlanmaydi | Unsupported file format |
| VAL-007 | 400 | Parol kamida 8 ta belgi bo'lishi kerak | Password must be at least 8 characters |
| VAL-008 | 400 | Parollar mos kelmayapti | Passwords do not match |

## Permission Errors (PERM-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| PERM-001 | 403 | Ruxsat yo'q | Permission denied |
| PERM-002 | 403 | Faqat admin ruxsati | Admin access required |
| PERM-003 | 403 | Workspace ruxsati yo'q | No access to this workspace |
| PERM-004 | 403 | Bu amalni bajarish huquqi yo'q | Not authorized to perform this action |

## Resource Errors (RES-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| RES-001 | 404 | Topilmadi | Not found |
| RES-002 | 404 | Chat topilmadi | Chat not found |
| RES-003 | 404 | Agent topilmadi | Agent not found |
| RES-004 | 404 | Workspace topilmadi | Workspace not found |
| RES-005 | 409 | Resursa allaqachon mavjud | Resource already exists |
| RES-006 | 410 | Resurs o'chirilgan | Resource has been deleted |

## Billing Errors (BILL-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| BILL-001 | 402 | To'lov talab qilinadi | Payment required |
| BILL-002 | 403 | Limitdan oshib ketdingiz | Usage limit exceeded |
| BILL-003 | 402 | To'lov muvaffaqiyatsiz | Payment failed |
| BILL-004 | 403 | Obuna tugagan | Subscription expired |
| BILL-005 | 400 | Noto'g'ri to'lov usuli | Invalid payment method |

## Network/System Errors (SYS-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| SYS-001 | 500 | Server xatosi | Internal server error |
| SYS-002 | 503 | Xizmat vaqtincha mavjud emas | Service temporarily unavailable |
| SYS-003 | 504 | So'rov vaqti tugadi | Request timeout |
| SYS-004 | 429 | Juda ko'p so'rovlar | Too many requests |
| SYS-005 | 0 | Internet aloqasi yo'q | No internet connection |
| SYS-006 | 0 | WebSocket uzildi | WebSocket disconnected |

## Chat/Inbox Errors (CHAT-xxx)

| Code | HTTP | Message (O'zbek) | Message (English) |
|------|------|------------------|-------------------|
| CHAT-001 | 400 | Xabar bo'sh bo'lishi mumkin emas | Message cannot be empty |
| CHAT-002 | 403 | Bu chatni ko'rish huquqingiz yo'q | No access to this chat |
| CHAT-003 | 409 | Chat allaqachon yopilgan | Chat already closed |
| CHAT-004 | 400 | Fayl yuklab bo'lmadi | File upload failed |
| CHAT-005 | 429 | Xabar yuborish limiti oshib ketdi | Message rate limit exceeded |

---

# PERMISSION MATRIX (DETAILED)

## Roles Definition

| Role | Description | Use Case |
|------|-------------|----------|
| **Admin** | Full system access | Workspace owner, technical manager |
| **Manager** | Team oversight, analytics | Team lead, QA manager |
| **Operator** | Day-to-day chat handling | Support agent, customer service |
| **Guest** | Read-only, limited analytics | Contractor, observer (future) |

## Permissions Grid

| Module | Action | Admin | Manager | Operator | Guest |
|--------|--------|-------|---------|----------|-------|
| **Inbox** |
| View all chats | ✅ | ✅ | ❌ (own only) | ❌ |
| View own chats | ✅ | ✅ | ✅ | ❌ |
| Reply to chat | ✅ | ✅ | ✅ | ❌ |
| Assign chat | ✅ | ✅ | ⚠️ (to self) | ❌ |
| Close chat | ✅ | ✅ | ✅ | ❌ |
| Reopen chat | ✅ | ✅ | ❌ | ❌ |
| Delete chat | ✅ | ❌ | ❌ | ❌ |
| Add tags | ✅ | ✅ | ✅ | ❌ |
| Add notes | ✅ | ✅ | ✅ | ❌ |
| **Team** |
| View agents | ✅ | ✅ | ⚠️ (list only) | ❌ |
| Invite agents | ✅ | ✅ | ❌ | ❌ |
| Edit agents | ✅ | ⚠️ (operators) | ❌ | ❌ |
| Suspend agents | ✅ | ❌ | ❌ | ❌ |
| Delete agents | ✅ | ❌ | ❌ | ❌ |
| Manage roles | ✅ | ❌ | ❌ | ❌ |
| View invitations | ✅ | ✅ | ❌ | ❌ |
| **Automation** |
| View automation | ✅ | ✅ | ⚠️ (read) | ❌ |
| Edit working hours | ✅ | ❌ | ❌ | ❌ |
| Edit auto-reply | ✅ | ❌ | ❌ | ❌ |
| Create triggers | ✅ | ❌ | ❌ | ❌ |
| Edit greetings | ✅ | ❌ | ❌ | ❌ |
| **Analytics** |
| View overview | ✅ | ✅ | ❌ | ⚠️ (limited) |
| View team perf. | ✅ | ✅ | ❌ | ❌ |
| View CSAT | ✅ | ✅ | ❌ | ❌ |
| View my stats | ✅ | ✅ | ✅ | ❌ |
| Export reports | ✅ | ✅ | ❌ | ❌ |
| **Settings** |
| Workspace settings | ✅ | ❌ | ❌ | ❌ |
| Widget settings | ✅ | ❌ | ❌ | ❌ |
| Security settings | ✅ | ❌ | ❌ | ❌ |
| Notification prefs | ✅ | ✅ | ✅ | ❌ |
| Profile settings | ✅ | ✅ | ✅ | ❌ |
| **Billing** |
| View plan | ✅ | ⚠️ (read) | ❌ | ❌ |
| Upgrade/downgrade | ✅ | ❌ | ❌ | ❌ |
| Payment methods | ✅ | ❌ | ❌ | ❌ |
| View invoices | ✅ | ⚠️ (read) | ❌ | ❌ |
| View usage | ✅ | ✅ | ❌ | ❌ |
| **Developer** |
| View API keys | ✅ | ❌ | ❌ | ❌ |
| Generate API keys | ✅ | ❌ | ❌ | ❌ |
| Manage webhooks | ✅ | ❌ | ❌ | ❌ |
| View integrations | ✅ | ⚠️ (read) | ❌ | ❌ |

**Legend:**
- ✅ Full access
- ❌ No access
- ⚠️ Limited/conditional access (details in parentheses)

---

# WEBHOOK SCHEMAS

## Webhook Security
- **Signature Header:** `X-Chatflow-Signature`
- **Algorithm:** HMAC SHA-256
- **Payload:** `timestamp.request_body`
- **Verification:** Compare signature with HMAC(secret, payload)

## Event: chat.created

```json
{
  "event": "chat.created",
  "timestamp": "2026-02-11T14:35:00Z",
  "data": {
    "chat_id": "chat_abc123",
    "visitor": {
      "name": "Ali",
      "email": "ali@example.com"
    },
    "initial_message": "Salom, yordam kerak",
    "source": "website_widget",
    "url": "https://company.uz/pricing"
  }
}
```

## Event: message.sent

```json
{
  "event": "message.sent",
  "timestamp": "2026-02-11T14:36:00Z",
  "data": {
    "message_id": "msg_def456",
    "chat_id": "chat_abc123",
    "sender": {
      "type": "visitor",
      "name": "Ali"
    },
    "text": "Tariflar haqida ma'lumot bering",
    "attachments": []
  }
}
```

## Event: chat.assigned

```json
{
  "event": "chat.assigned",
  "timestamp": "2026-02-11T14:37:00Z",
  "data": {
    "chat_id": "chat_abc123",
    "assigned_to": {
      "agent_id": "agent_xyz789",
      "name": "Sara",
      "email": "sara@company.uz"
    },
    "assigned_by": "auto"
  }
}
```

## Event: chat.closed

```json
{
  "event": "chat.closed",
  "timestamp": "2026-02-11T15:00:00Z",
  "data": {
    "chat_id": "chat_abc123",
    "closed_by": "agent_xyz789",
    "resolution_time_seconds": 1380,
    "message_count": 12,
    "csat_requested": true
  }
}
```

## Event: csat.submitted

```json
{
  "event": "csat.submitted",
  "timestamp": "2026-02-11T15:05:00Z",
  "data": {
    "chat_id": "chat_abc123",
    "rating": 5,
    "comment": "Juda yaxshi xizmat, rahmat!",
    "agent_id": "agent_xyz789"
  }
}
```

---

# ANALYTICS METRICS DEFINITIONS

## Core Metrics

### Total Chats
- **Definition:** Count of all chat conversations in period
- **Formula:** `COUNT(chats WHERE created_at BETWEEN start_date AND end_date)`
- **Includes:** Active, Assigned, Closed
- **Excludes:** Spam, Deleted

### Average Response Time
- **Definition:** Mean time from visitor's first message to agent's first reply
- **Formula:** `AVG(first_agent_reply_timestamp - first_visitor_message_timestamp)`
- **Unit:** Seconds (display as MM:SS)
- **Goal:** < 2 minutes (120 seconds)
- **Calculation:** Only business hours (if enabled)

### Average Resolution Time
- **Definition:** Mean time from chat creation to chat closure
- **Formula:** `AVG(closed_at - created_at)`
- **Unit:** Minutes
- **Goal:** < 20 minutes
- **Excludes:** Reopened chats (counted from last reopened time)

### CSAT Score
- **Definition:** Customer Satisfaction score (1-5 stars)
- **Formula:** `AVG(rating) WHERE rating IS NOT NULL`
- **Display:** X.X format (e.g., 4.7)
- **Goal:** > 4.5
- **Response Rate:** `(CSAT responses / CSAT requests) * 100`

### First Contact Resolution (FCR)
- **Definition:** Percentage of chats resolved without transfer or reopening
- **Formula:** `(resolved_without_transfer / total_resolved) * 100`
- **Goal:** > 70%

### Chat Volume by Channel
- **Channels:** Widget, Email, Messenger (future), WhatsApp (future)
- **Display:** Pie chart or bar chart
- **Formula:** `COUNT(chats) GROUP BY source`

## Agent Performance Metrics

### Chats Handled
- **Definition:** Total chats assigned to agent
- **Formula:** `COUNT(chats WHERE assigned_to = agent_id)`

### Chats Resolved
- **Definition:** Chats closed by agent
- **Formula:** `COUNT(chats WHERE closed_by = agent_id AND status = 'closed')`

### Average Handle Time (AHT)
- **Definition:** Mean active time spent on chat
- **Formula:** `AVG(SUM(agent_active_duration) per chat)`
- **Unit:** Minutes

### Transfer Rate
- **Definition:** Percentage of chats transferred to another agent
- **Formula:** `(transferred_chats / total_chats) * 100`
- **Goal:** < 5%

### Agent CSAT
- **Definition:** CSAT score for chats handled by specific agent
- **Formula:** `AVG(csat.rating WHERE chat.assigned_to = agent_id)`

## Time-based Metrics

### Peak Hours
- **Definition:** Hours with highest chat volume
- **Display:** Heatmap (day × hour grid)

### Chat Volume Trend
- **Display:** Line chart (daily, weekly, monthly)
- **Y-axis:** Chat count
- **X-axis:** Time period

### Response Time Distribution
- **Buckets:** < 1m, 1-2m, 2-5m, 5-10m, 10-30m, 30m+
- **Display:** Bar chart

---

# TECHNICAL SPECIFICATIONS

## WebSocket Connection

### Connection URL
- **Production:** `wss://ws.chatflow.uz`
- **Protocol:** WebSocket (RFC 6455)

### Authentication
```json
{
  "type": "auth",
  "token": "user_session_token"
}
```

### Heartbeat
- **Interval:** 30 seconds
- **Client sends:** `{"type": "ping"}`
- **Server responds:** `{"type": "pong"}`

### Reconnection Strategy
- **1st attempt:** Immediate
- **2nd attempt:** 1 second
- **3rd attempt:** 2 seconds
- **4th+ attempt:** Exponential backoff (max 30 seconds)
- **Max attempts:** Infinite (with exponential backoff cap)

### Events

**Incoming (Server → Client):**
- `chat.new` — New chat assigned
- `message.new` — New message in chat
- `chat.updated` — Chat status/assignment changed
- `agent.typing` — Another agent typing (future)
- `visitor.typing` — Visitor typing

**Outgoing (Client → Server):**
- `message.send` — Send message
- `typing.start` — Agent started typing
- `typing.stop` — Agent stopped typing
- `chat.view` — Agent viewed chat (mark as read)

## File Upload Specifications

### Allowed File Types
- **Images:** JPG, JPEG, PNG, GIF, WebP
- **Documents:** PDF, DOC, DOCX, XLS, XLSX, TXT
- **Archives:** ZIP, RAR (future)

### File Size Limits
- **Free Plan:** 5 MB per file
- **Pro Plan:** 10 MB per file
- **Business+ Plan:** 25 MB per file

### Upload Process
1. Client requests signed URL: `POST /files/upload-url`
2. Server responds with presigned S3 URL
3. Client uploads directly to S3
4. Client confirms upload: `POST /files/confirm`
5. Server processes and attaches to message

### Storage
- **CDN:** CloudFlare CDN
- **Origin:** AWS S3 (or compatible)
- **Retention:** Based on plan (30/90/365 days)

## Security Headers

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'
Referrer-Policy: strict-origin-when-cross-origin
```

## Password Requirements

- Minimum length: 8 characters
- Maximum length: 128 characters
- Must contain:
  - At least 1 uppercase letter (A-Z)
  - At least 1 lowercase letter (a-z)
  - At least 1 digit (0-9)
  - At least 1 special character (!@#$%^&*)
- Cannot contain:
  - Email address
  - Common passwords (checked against list)
  - Repeating characters (aaa, 111)

## Session Management

- **Session Duration:** 7 days (default)
- **Inactivity Timeout:** 30 minutes
- **Refresh Token:** Valid for 30 days
- **Concurrent Sessions:** Max 5 per user
- **Session Storage:** Redis

---

# BROWSER & DEVICE SUPPORT

## Supported Browsers

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |
| Opera | 76+ | ✅ Full |
| Mobile Safari | iOS 13+ | ✅ Full |
| Chrome Mobile | Android 8+ | ✅ Full |
| Samsung Internet | 14+ | ⚠️ Partial |
| IE 11 | — | ❌ Not supported |

## Responsive Breakpoints (Reiterated)

- **Mobile:** 375px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px - 1439px
- **Wide Desktop:** 1440px+

## Widget Browser Support

- Same as dashboard + IE 11 (degraded experience)
- Fallback: Email form for unsupported browsers

---

# FUTURE ENHANCEMENTS & ROADMAP

## Phase 1 (v1.0 - Launch) ✅
- Core chat functionality
- Basic automation (working hours, auto-reply)
- Team management (Admin, Manager, Operator roles)
- Analytics overview
- Widget integration
- Email notifications
- Click/Payme payment integration
- **Contacts (CRM) Module (M-16):** Contact management, organizations, import/export, segments, merge duplicates
- **Online Visitors Module (M-17):** Real-time visitor tracking, proactive chat, geographic map, session monitoring
- **Team Chat Module (M-18):** Internal agent communication, direct messages, rooms, file sharing, mentions
- **Add-ons Marketplace infrastructure**
- **Remove Branding add-on**

## Phase 2 (v1.5 - Q2 2026)
- **Multi-channel support:** Email integration, Telegram bot
- **Advanced automation:** Conditional routing, chatbot builder
- **Enhanced analytics:** Goals tracking, custom reports
- **Mobile apps:** iOS/Android native apps
- **Advanced CSAT:** NPS surveys, follow-up emails
- **Knowledge Base Module (M-15):** Self-service portal, rich text editor, categories, analytics, public KB
- **Add-ons: Video + Voice + Screensharing** ($29/month)
- **Add-ons: Phone Number** (SMS & calls)
- **Add-ons: Hire Live Agents** ($1/hr)

## Phase 3 (v2.0 - Q4 2026)
- **Add-ons: AI Assist** (chatbot builder with GPT)
- **Add-ons: Virtual Assistant** ($7.5/hr dedicated support)
- **Add-ons: Advanced Analytics** (custom reports, export)
- **WhatsApp Business API integration**
- **Facebook Messenger integration**
- **Advanced permissions:** Custom roles, granular permissions
- **SLA tracking:** Response time SLAs, escalation rules
- **Multi-workspace:** Single account, multiple workspaces
- **Knowledge Base Advanced:** Multi-language KB, AI-powered search, suggested articles

## Phase 4 (v3.0 - 2027)
- **Add-ons: Shopping Cart** (e-commerce integration)
- **Add-ons: In-Chat Payments** (Stripe, PayPal, Click, Payme)
- **Add-ons: SMS Campaigns** (bulk messaging)
- **Add-ons: Email Marketing** (automation campaigns)
- **Add-ons: CRM Integrations** (Salesforce, HubSpot, Pipedrive)
- **Co-browsing:** Screen sharing with visitors
- **Product tours:** Interactive onboarding for visitors
- **Marketplace API:** Third-party developers can create add-ons

---

# CHANGELOG

## Version 2.5 (2026-02-11 - Real-time & Collaboration)
**Added:**
- **Online Visitors Module (M-17)** — Real-time visitor tracking and monitoring
- **Team Chat Module (M-18)** — Internal agent communication system
- **8+ Online Visitors Screens (SCR-OV01 - SCR-OV-S02):**
  - Visitor List with real-time updates (every 5 seconds)
  - Visitor Profile with session tracking, page view timeline, geographic info
  - Proactive Chat Initiate (agent can message visitors first)
  - Geographic Map View with interactive markers and live activity feed
  - Empty and loading states
- **6+ Team Chat Screens (SCR-TC01 - SCR-TC-S02):**
  - Team Chat Inbox with Direct Messages and Rooms (channels)
  - Start New Conversation (1-on-1 or group)
  - Room Settings with members, permissions management
  - Notifications Settings (desktop, email, DND, mute rooms)
  - Empty and offline states
- **Online Visitors Features:**
  - Live visitor counter with 🟢 animated pulse
  - Real-time tracking: IP, location, device, browser, current page, time on site
  - Page view timeline with duration tracking
  - Proactive chat initiation (agent messages visitor first)
  - Geographic map with clustered pins
  - Visitor-to-contact conversion
  - Filters: Online/Offline, Country, Page URL, Visit duration
  - Auto-refresh every 5 seconds
- **Team Chat Features:**
  - Direct Messages (1-on-1) and Rooms (group channels)
  - Text formatting: bold, italic, code blocks
  - Mentions: @agent with notifications
  - Emoji reactions and picker
  - File attachments (images, docs, max 10MB)
  - Threaded replies
  - Typing indicators
  - Online/offline status (real-time with WebSocket)
  - Read receipts and unread badges
  - Room management: Public/Private, permissions, invite links
  - Notification settings: Desktop, Email, DND, per-room muting
- **Updated FLOW 1** — Added Visitors and Team Chat branches to admin navigation

**Improved:**
- Module count: 16 → 18 modules
- Screen count: 145+ → 160+ screens
- Real-time collaboration capabilities added
- Agent productivity improved with internal chat
- Proactive support enabled with visitor tracking

**Technical Features:**
- WebSocket real-time updates for visitors and team chat
- Geolocation tracking with map visualization
- Push notifications for team chat
- Markdown-style text formatting
- File storage integration for chat attachments

**References:**
- Inspired by Chatra (Online Visitors + Team Chat)
- Proactive chat patterns from LiveChat, Intercom
- Team chat UX from Slack, Microsoft Teams

---

## Version 2.4 (2026-02-11 - Analytics Expansion)
**Added:**
- **Advanced Analytics Module Expansion (M-08)** — 7 new professional analytics screens
- **9+ New Analytics Screens (SCR-AN06 - SCR-AN12)** with advanced metrics
- **7 Advanced Analytics Sub-modules:**
  1. **Responsiveness Analytics (SCR-AN06):** First response time, response time distribution, hourly heatmap, slowest conversations
  2. **Operators Performance (SCR-AN07 + SCR-AN07-S01):** Individual agent stats, comparison view, top performers, detailed drill-down
  3. **SLA Tracking (SCR-AN08):** SLA compliance monitoring, violations table, SLA by agent, hourly compliance heatmap
  4. **Channel Analytics (SCR-AN09):** Multi-channel metrics, distribution charts, peak hours by channel, channel-specific insights
  5. **Segments Analytics (SCR-AN10):** Segment performance comparison, conversion funnel, CSAT by segment, recommendations
  6. **Tags Analytics (SCR-AN11):** Tag usage trends, word cloud, co-occurrence matrix, tag performance metrics, AI suggestions
  7. **Custom Dashboards (SCR-AN12 + SCR-AN12-S01):** Drag-and-drop widget builder, 10 widget types, templates, auto-refresh
- **Advanced Analytics Features:**
  - Response time heatmaps (hour × day)
  - Agent leaderboards with 🥇🥈🥉 badges
  - SLA violation tracking with delay metrics
  - Multi-channel comparison charts
  - Segment conversion funnels
  - Tag co-occurrence analysis
  - Customizable dashboards with 12-column grid
  - Widget library (10 types: metric cards, charts, tables, heatmaps, etc.)
  - Dashboard templates (Executive, Agent Performance, Channel Monitoring)
  - Export to PDF/CSV functionality
- **AI-Powered Insights:**
  - Auto-generated recommendations based on data patterns
  - Tag suggestions from conversation analysis
  - Performance anomaly detection

**Improved:**
- M-08 Analytics sub-modules: 6 → 13 sub-modules
- Analytics screen count: 7 → 16+ screens
- Total screen count: 130+ → 145+ screens
- Professional-grade analytics comparable to Crisp, Intercom, Zendesk
- Granular operator performance tracking
- Multi-dimensional data analysis capabilities

**References:**
- Inspired by Crisp Analytics (Responsiveness, Operators, Segments)
- SLA tracking patterns from Zendesk
- Custom dashboards inspired by Mixpanel, Amplitude

---

## Version 2.3 (2026-02-11 - Final Update)
**Added:**
- **Contacts (CRM) Module (M-16)** — Complete contact management system
- **16+ Contact Screens (SCR-CT01 - SCR-CT06)** with variants
- **3 Contacts Component Specifications:**
  - Contact Card (320×180px, horizontal layout)
  - Organization Badge (with building icon)
  - Custom Attribute Field (7 field types)
- **6 Main CRM Screens:**
  - Contacts List (Table + Card view, filters, bulk actions)
  - Contact Profile (Overview, Conversations, Notes, Activity tabs)
  - Organizations List + Detail view
  - Import/Export Tools (CSV/Excel with field mapping)
  - Segments (Dynamic groups with query builder)
  - Merge Duplicates (Detection + side-by-side comparison)
- **FLOW 7 — Contacts (CRM) Flow** with 5 sub-flows:
  - Contact Management Flow (Admin/Manager perspective)
  - Import/Export Flow (bulk operations)
  - Organizations & Segments Flow
  - Merge Duplicates Flow
  - Automatic Contact Creation Flow (from visitor chat)
- **Updated FLOW 1** — Added Contacts branch to admin navigation
- **Updated Roadmap** — CRM positioned in Phase 1 (Launch) as core feature

**Improved:**
- Module count: 15 → 16 modules
- Screen count: 115+ → 130+ screens
- Complete CRM functionality for contact management
- Auto-contact creation from chat widget
- Advanced segmentation with query builder
- Duplicate detection and merge capabilities

**References:**
- Inspired by tawk.to Contacts module
- Common CRM patterns: Salesforce, HubSpot, Intercom

---

## Version 2.2 (2026-02-11 - Late Evening Update)
**Added:**
- **Knowledge Base Module (M-15)** — Complete KB system with admin & public portal
- **15+ KB Screens (SCR-KB01 - SCR-KB06)** with variants
- **3 KB Component Specifications:**
  - KB Article Card
  - KB Category Badge
  - KB Search Bar
- **6 KB Management Screens:**
  - KB Dashboard (articles table, quick stats)
  - Create/Edit Article (WYSIWYG editor, 500px min-height)
  - Categories Management (drag-reorder, icon picker)
  - KB Settings (6 tabs: General, Appearance, Public Portal, Social, Navigation, Integrations)
  - KB Analytics (views, visitors, top articles, search queries)
  - Public KB Portal (visitor-facing with search, categories, breadcrumbs)
- **FLOW 6 — Knowledge Base Management Flow** with 3 sub-flows:
  - KB Management Flow (admin perspective)
  - KB Settings Flow (6 settings categories)
  - Public KB Visitor Flow (search/browse → article → feedback)
- **Updated Roadmap** — KB positioned in Phase 2 (Q2 2026) as core feature

**Improved:**
- Module count: 14 → 15 modules
- Screen count: 100+ → 115+ screens
- Self-service support capabilities added
- Public portal with SEO optimization

**References:**
- Inspired by tawk.to Knowledge Base
- Rich text editor with modern toolbar (Bold, Italic, Headers, Links, Images)

---

# PERFORMANCE OPTIMIZATION

## 1. Bundle Size Optimization

### 1.1. Code Splitting

**Route-based splitting:**
```typescript
// Lazy load routes
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Inbox = lazy(() => import('./pages/Inbox'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Settings = lazy(() => import('./pages/Settings'));
const Analytics = lazy(() => import('./pages/Analytics'));

// Wrap with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/inbox" element={<Inbox />} />
  </Routes>
</Suspense>
```

**Component-based splitting:**
```typescript
// Heavy components lazy load
const RichTextEditor = lazy(() => import('./components/RichTextEditor'));
const ChartComponent = lazy(() => import('./components/Chart'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
```

**Bundle targets:**
- Initial bundle: **< 200 KB** (gzipped)
- Route chunks: **< 100 KB** each
- Vendor chunk: **< 300 KB** (React, React Router, Zustand, React Query)
- Total initial load: **< 500 KB**

### 1.2. Tree Shaking

**Import strategy:**
```typescript
// ❌ Bad - imports entire library
import _ from 'lodash';

// ✅ Good - imports only needed function
import debounce from 'lodash/debounce';
```

**Named imports:**
```typescript
// ✅ Only import what you need
import { useQuery, useMutation } from '@tanstack/react-query';
import { Search, Bell, User } from 'lucide-react'; // Icon library
```

**Package optimization:**
- Use `date-fns` instead of `moment.js` (smaller bundle)
- Use `axios` tree-shakable requests
- Avoid importing entire UI libraries

### 1.3. Dynamic Imports

**Conditional features:**
```typescript
// Load heavy feature only when needed
if (user.hasPermission('advanced_analytics')) {
  const AdvancedAnalytics = await import('./pages/AdvancedAnalytics');
  renderComponent(AdvancedAnalytics);
}

// Load add-ons dynamically
async function loadAddon(addonId: string) {
  const addon = await import(`./addons/${addonId}`);
  return addon.default;
}
```

**Third-party scripts:**
```typescript
// Load Stripe only on billing page
const loadStripe = () => {
  return new Promise((resolve) => {
    if (window.Stripe) return resolve(window.Stripe);
    
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.onload = () => resolve(window.Stripe);
    document.head.appendChild(script);
  });
};
```

### 1.4. Webpack Bundle Analyzer

**Monitoring:**
```bash
npm run build -- --analyze
# Opens webpack-bundle-analyzer in browser
```

**Action items:**
- Identify large dependencies (> 50 KB)
- Replace or split large libraries
- Check for duplicate packages
- Remove unused dependencies

---

## 2. Rendering Performance

### 2.1. React.memo

**Memoize expensive components:**
```typescript
// Avatar component (frequently re-rendered)
export const Avatar = React.memo(({ src, name, size }: AvatarProps) => {
  return (
    <div className={`avatar avatar-${size}`}>
      {src ? <img src={src} alt={name} /> : <span>{getInitials(name)}</span>}
    </div>
  );
});

// Message component in chat list
export const MessageItem = React.memo(({ message, isSelected }: Props) => {
  return <div className={isSelected ? 'selected' : ''}>{message.text}</div>;
}, (prevProps, nextProps) => {
  // Custom comparison - only re-render if these change
  return prevProps.message.id === nextProps.message.id &&
         prevProps.isSelected === nextProps.isSelected;
});
```

**When to use React.memo:**
- Components rendered in lists (chat messages, contacts)
- Components with expensive rendering logic
- Components that receive same props frequently
- Pure functional components with stable props

### 2.2. useMemo & useCallback

**useMemo for expensive calculations:**
```typescript
function ChatList({ chats, filter, sortBy }: Props) {
  // Memoize filtered and sorted chats
  const filteredChats = useMemo(() => {
    return chats
      .filter(chat => matchesFilter(chat, filter))
      .sort((a, b) => sortChats(a, b, sortBy));
  }, [chats, filter, sortBy]);

  return <List items={filteredChats} />;
}

// Analytics dashboard - expensive calculation
const chartData = useMemo(() => {
  return processAnalyticsData(rawData, dateRange, metrics);
}, [rawData, dateRange, metrics]);
```

**useCallback for stable function references:**
```typescript
function SearchBar({ onSearch }: Props) {
  // Debounced search - stable reference
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 300),
    [onSearch]
  );

  return <input onChange={(e) => debouncedSearch(e.target.value)} />;
}
```

### 2.3. Virtual Scrolling

**For large lists (1000+ items):**
```typescript
import { FixedSizeList } from 'react-window';

function ContactsList({ contacts }: { contacts: Contact[] }) {
  return (
    <FixedSizeList
      height={600}
      itemCount={contacts.length}
      itemSize={64} // Each contact row 64px
      width="100%"
    >
      {({ index, style }) => (
        <ContactRow contact={contacts[index]} style={style} />
      )}
    </FixedSizeList>
  );
}
```

**Use cases:**
- Chat message history (1000+ messages)
- Contact list (5000+ contacts)
- Analytics tables (large datasets)
- Search results (many items)

### 2.4. Debounce & Throttle

**Debounce input:**
```typescript
// Search input - wait 300ms after typing stops
const [searchQuery, setSearchQuery] = useState('');
const debouncedQuery = useDebounce(searchQuery, 300);

useEffect(() => {
  if (debouncedQuery) {
    searchAPI(debouncedQuery);
  }
}, [debouncedQuery]);
```

**Throttle scroll:**
```typescript
// Scroll event - max once per 100ms
const handleScroll = throttle(() => {
  // Check if near bottom for infinite scroll
  if (isNearBottom()) {
    loadMoreMessages();
  }
}, 100);
```

---

## 3. Network Optimization

### 3.1. HTTP/2 & Compression

**Server configuration:**
- Enable HTTP/2 (multiplexing multiple requests)
- Enable gzip/brotli compression (text files 70-80% reduction)
- Compression levels: Brotli level 4 (balance speed/size)

**Compression targets:**
- HTML, CSS, JS, JSON, SVG: Compress (70-80% reduction)
- Images (JPEG, PNG): Already compressed, skip
- Fonts (WOFF2): Already compressed

### 3.2. CDN (Content Delivery Network)

**Static assets on CDN:**
- JS bundles: `https://cdn.chatflow.uz/js/app.bundle.js`
- CSS files: `https://cdn.chatflow.uz/css/main.css`
- Images: `https://cdn.chatflow.uz/img/logo.svg`
- Fonts: `https://cdn.chatflow.uz/fonts/Inter.woff2`

**CDN provider:** CloudFront (AWS) or Cloudflare
**Cache strategy:**
- Static assets: Cache 1 year (`Cache-Control: public, max-age=31536000, immutable`)
- With hash in filename: `app.a3f8b9c1.js` (cache busting on deploy)

### 3.3. Image Optimization

**Format strategy:**
```typescript
// Use WebP with fallback
<picture>
  <source srcSet="avatar.webp" type="image/webp" />
  <img src="avatar.jpg" alt="Avatar" />
</picture>
```

**Responsive images:**
```html
<img 
  src="chat-bg-800.jpg"
  srcSet="chat-bg-400.jpg 400w, chat-bg-800.jpg 800w, chat-bg-1600.jpg 1600w"
  sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  alt="Background"
/>
```

**Lazy loading:**
```tsx
<img src="image.jpg" loading="lazy" alt="Lazy loaded" />
```

**Optimization targets:**
- WebP format (30% smaller than JPEG)
- Resize to actual display size (no 4K images for 200px avatars)
- Lazy load below-the-fold images
- Compress quality 80-85% (imperceptible loss)

### 3.4. API Request Optimization

**Request deduplication:**
```typescript
// React Query automatically deduplicates
const { data } = useQuery(['chat', chatId], () => fetchChat(chatId));
// If 5 components request same chat, only 1 network request
```

**Parallel requests:**
```typescript
// Fetch multiple resources in parallel
const [user, chats, contacts] = await Promise.all([
  fetchUser(),
  fetchChats(),
  fetchContacts(),
]);
```

**Pagination:**
```typescript
// Don't fetch all 10,000 chats at once
GET /api/chats?page=1&limit=20 // Fetch 20 at a time
```

---

## 4. Database Optimization

### 4.1. Indexes

**Critical indexes:**
```sql
-- Conversations table
CREATE INDEX idx_conversations_workspace_status 
  ON conversations (workspace_id, status, updated_at DESC);

CREATE INDEX idx_conversations_agent 
  ON conversations (assigned_agent_id, status);

-- Messages table  
CREATE INDEX idx_messages_conversation 
  ON messages (conversation_id, created_at DESC);

-- Contacts table
CREATE INDEX idx_contacts_workspace_email 
  ON contacts (workspace_id, email);

CREATE INDEX idx_contacts_phone 
  ON contacts (phone);

-- Full-text search
CREATE INDEX idx_contacts_search 
  ON contacts USING GIN (to_tsvector('english', name || ' ' || email));
```

**Index strategy:**
- Index foreign keys (workspace_id, agent_id, etc.)
- Index frequently filtered columns (status, created_at)
- Composite indexes for common WHERE clauses
- Full-text search indexes (PostgreSQL GIN)

### 4.2. Query Optimization

**Use EXPLAIN ANALYZE:**
```sql
EXPLAIN ANALYZE
SELECT * FROM conversations 
WHERE workspace_id = 'ws_123' 
  AND status = 'active'
ORDER BY updated_at DESC 
LIMIT 20;
```

**Optimize queries:**
- Select only needed columns (`SELECT id, name` not `SELECT *`)
- Use LIMIT for pagination
- Avoid N+1 queries (use JOIN or batch fetch)
- Use prepared statements (prevent SQL injection + faster)

**N+1 query fix:**
```typescript
// ❌ Bad - N+1 query
const chats = await db('conversations').where({ workspace_id });
for (const chat of chats) {
  chat.agent = await db('users').where({ id: chat.assigned_agent_id }).first();
}

// ✅ Good - Single query with JOIN
const chats = await db('conversations')
  .leftJoin('users', 'conversations.assigned_agent_id', 'users.id')
  .select('conversations.*', 'users.name as agent_name')
  .where({ 'conversations.workspace_id': workspaceId });
```

### 4.3. Connection Pooling

**PostgreSQL connection pool:**
```typescript
// Use PgBouncer or built-in pooling
const pool = new Pool({
  host: 'localhost',
  database: 'chatflow',
  max: 20, // Max 20 connections
  min: 5,  // Keep 5 connections idle
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

**Pool sizing:**
- Max connections: 20-50 (depends on server CPU cores)
- Idle timeout: 30 seconds
- Connection timeout: 2 seconds

### 4.4. Read Replicas

**For heavy read workload:**
- Master: Write operations (INSERT, UPDATE, DELETE)
- Replica: Read operations (SELECT queries)
- Analytics queries run on replica (don't slow down master)

```typescript
// Route analytics queries to replica
const analyticsData = await replicaDB('conversations')
  .select(db.raw('DATE(created_at) as date, COUNT(*) as count'))
  .groupBy('date');
```

---

## 5. Caching Strategy

### 5.1. Redis Cache

**Cache hot data:**
```typescript
// Cache user session (30 min TTL)
await redis.set(`session:${userId}`, JSON.stringify(user), 'EX', 1800);

// Cache workspace settings (1 hour TTL)
await redis.set(`workspace:${workspaceId}:settings`, JSON.stringify(settings), 'EX', 3600);

// Rate limiting (store request count)
const count = await redis.incr(`rate:${ip}:${endpoint}`);
await redis.expire(`rate:${ip}:${endpoint}`, 60); // 1 minute window
```

**Cache strategy:**
- User sessions: 30 min TTL
- Workspace settings: 1 hour TTL
- Widget config: 5 min TTL
- Analytics data: 15 min TTL
- Rate limit counters: 1 min window

### 5.2. Browser Cache

**Service Worker caching:**
```typescript
// sw.js - Cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('chatflow-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/app.js',
        '/styles.css',
        '/logo.svg',
        '/offline.html',
      ]);
    })
  );
});

// Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
```

**LocalStorage cache:**
```typescript
// Cache user preferences (theme, language)
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'uz');

// Cache recent searches (max 10)
const recentSearches = JSON.parse(localStorage.getItem('recent_searches') || '[]');
```

### 5.3. React Query Cache

**Cache configuration:**
```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,     // 30 seconds (chats)
      cacheTime: 300000,    // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

// Custom staleTime per query
useQuery(['contacts'], fetchContacts, {
  staleTime: 300000, // 5 minutes (contacts less frequent updates)
});

useQuery(['settings'], fetchSettings, {
  staleTime: Infinity, // Never refetch (until manual invalidate)
});

useQuery(['analytics'], fetchAnalytics, {
  staleTime: 60000, // 1 minute (analytics can tolerate slight delay)
});
```

**Cache invalidation:**
```typescript
// After creating new chat
queryClient.invalidateQueries(['chats']);

// After updating contact
queryClient.invalidateQueries(['contacts', contactId]);
queryClient.invalidateQueries(['contacts']); // Invalidate list too
```

### 5.4. Database Query Cache

**PostgreSQL query cache:**
- Use materialized views for heavy analytics queries
- Refresh periodically (every 15 minutes)

```sql
-- Create materialized view
CREATE MATERIALIZED VIEW daily_chat_stats AS
SELECT 
  DATE(created_at) as date,
  COUNT(*) as total_chats,
  AVG(EXTRACT(EPOCH FROM (resolved_at - created_at))) as avg_response_time
FROM conversations
WHERE created_at >= NOW() - INTERVAL '90 days'
GROUP BY DATE(created_at);

-- Refresh every 15 minutes (cron job)
REFRESH MATERIALIZED VIEW CONCURRENTLY daily_chat_stats;
```

---

## 6. Monitoring & Metrics

### 6.1. APM (Application Performance Monitoring)

**Tools:**
- **Sentry** (error tracking, performance monitoring)
- **Datadog** (full-stack observability)
- **New Relic** (APM + infrastructure)

**Metrics to track:**
```typescript
// Track page load time
const navigationTiming = performance.timing;
const pageLoadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
Sentry.addBreadcrumb({ message: `Page load: ${pageLoadTime}ms` });

// Track API response time
const startTime = Date.now();
const response = await fetch('/api/chats');
const duration = Date.now() - startTime;
Sentry.captureMessage(`API /chats: ${duration}ms`);
```

### 6.2. Core Web Vitals

**Target metrics (Google):**
- **LCP (Largest Contentful Paint):** < 2.5s (Good)
- **FID (First Input Delay):** < 100ms (Good)
- **CLS (Cumulative Layout Shift):** < 0.1 (Good)

**Measurement:**
```typescript
import { getLCP, getFID, getCLS } from 'web-vitals';

getLCP(console.log); // Largest Contentful Paint
getFID(console.log); // First Input Delay
getCLS(console.log); // Cumulative Layout Shift
```

**Optimization targets:**
- LCP: Optimize hero image, server response time
- FID: Reduce JavaScript execution time, use code splitting
- CLS: Reserve space for images, avoid layout shifts

### 6.3. Real User Monitoring (RUM)

**Track real user experience:**
```typescript
// Browser, device, location
const userContext = {
  browser: navigator.userAgent,
  screen: `${window.screen.width}x${window.screen.height}`,
  connection: navigator.connection?.effectiveType, // 4g, 3g, etc.
  location: await getUserLocation(),
};

// Send to analytics
analytics.track('page_load', {
  page: '/inbox',
  loadTime: pageLoadTime,
  ...userContext,
});
```

### 6.4. Error Tracking

**Sentry configuration:**
```typescript
Sentry.init({
  dsn: 'https://...@sentry.io/...',
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1, // 10% of transactions
  beforeSend(event, hint) {
    // Filter out non-critical errors
    if (event.exception?.values?.[0]?.type === 'ChunkLoadError') {
      return null; // Ignore chunk load errors (user refreshed during deploy)
    }
    return event;
  },
});
```

**Error boundaries:**
```typescript
<ErrorBoundary fallback={<ErrorScreen />}>
  <Dashboard />
</ErrorBoundary>
```

---

## 7. Performance Budgets

| Metric | Target | Critical Threshold |
|--------|--------|--------------------|
| **Initial JS bundle** | < 200 KB | 300 KB |
| **Initial CSS** | < 50 KB | 100 KB |
| **Total initial load** | < 500 KB | 1 MB |
| **Time to Interactive (TTI)** | < 3.5s | 5s |
| **First Contentful Paint (FCP)** | < 1.5s | 2.5s |
| **Largest Contentful Paint (LCP)** | < 2.5s | 4s |
| **Cumulative Layout Shift (CLS)** | < 0.1 | 0.25 |
| **First Input Delay (FID)** | < 100ms | 300ms |
| **API response time (p95)** | < 500ms | 1s |
| **Database query time (p95)** | < 100ms | 500ms |

**Enforcement:**
- CI/CD pipeline fails if bundle > 300 KB
- Lighthouse CI fails if performance score < 90
- Alert if API p95 latency > 500ms

---

## 8. Performance Checklist

**Frontend:**
- [ ] Code splitting by route (React.lazy)
- [ ] Tree shaking enabled (Webpack/Vite)
- [ ] Dynamic imports for heavy features
- [ ] React.memo for frequently rendered components
- [ ] useMemo for expensive calculations
- [ ] useCallback for stable function references
- [ ] Virtual scrolling for large lists (react-window)
- [ ] Debounce search inputs (300ms)
- [ ] Throttle scroll events (100ms)
- [ ] Image lazy loading (loading="lazy")
- [ ] WebP image format with fallback
- [ ] Responsive images (srcSet)

**Backend:**
- [ ] Database indexes on foreign keys
- [ ] Database indexes on filtered columns
- [ ] Full-text search indexes (GIN)
- [ ] Query optimization (EXPLAIN ANALYZE)
- [ ] Connection pooling (PgBouncer)
- [ ] Read replicas for analytics
- [ ] Redis cache for hot data
- [ ] API response caching (React Query)
- [ ] Rate limiting (Redis)
- [ ] Background job queue (Bull + Redis)

**Network:**
- [ ] HTTP/2 enabled
- [ ] Gzip/Brotli compression
- [ ] CDN for static assets (CloudFront/Cloudflare)
- [ ] Cache-Control headers (1 year for immutable assets)
- [ ] Request deduplication (React Query)
- [ ] Parallel API requests (Promise.all)
- [ ] Pagination for large datasets

**Monitoring:**
- [ ] Sentry error tracking
- [ ] Core Web Vitals monitoring
- [ ] Real User Monitoring (RUM)
- [ ] APM (Datadog/New Relic)
- [ ] Lighthouse CI in pipeline
- [ ] Performance budgets enforced
- [ ] Alerting for p95 latency > 500ms

---

## Version 2.1 (2026-02-11 - Evening Update)
**Added:**
- **Add-ons & Marketplace Module (M-14)** — Complete add-on system
- **12 Add-on Screens (SCR-ADD01 - SCR-ADD07)** with variants
- **Add-on Card Component** specification
- **8 Specific Add-on Configurations:**
  - AI Assist Setup Wizard (SCR-AI01)
  - Remove Branding Settings (SCR-RB01)
  - Hire Live Agents Dashboard (SCR-HL01-02)
  - Virtual Assistant Onboarding (SCR-VA01)
  - Video+Voice Settings (SCR-VV01)
  - Phone Number Activation (SCR-PN01)
  - Shopping Cart Integration (SCR-SC01)
  - In-Chat Payments Integration (SCR-IP01)
- **FLOW 1B — Add-ons Activation Flow** with decision points
- **Add-on specific flows** (5 detailed flows)
- **Updated Roadmap** with add-ons phasing across 4 releases

**Improved:**
- Module count: 13 → 14 modules
- Screen count: 80+ → 100+ screens
- Roadmap clarity with specific add-on release schedule

**References:**
- Inspired by tawk.to Add-ons marketplace
- Pricing aligned with market standards

---

## Version 2.0 (2026-02-11)
**Added:**
- Dark Mode color scheme
- Keyboard shortcuts comprehensive list
- Accessibility Guidelines (WCAG 2.1 AA)
- Error Codes Registry (50+ codes)
- Permission Matrix (detailed 70+ permissions)
- Webhook Schemas (5 events)
- Analytics Metrics Definitions (15+ metrics)
- Technical Specifications (WebSocket, File Upload, Security)
- Browser & Device Support matrix
- API Endpoints documentation reference
- Future Roadmap (4 phases)

**Improved:**
- Animation timing functions expanded
- Module Map [inferred] flags removed
- Component specifications clarified
- RTL support guidelines added

**Fixed:**
- Inconsistent spacing in tables
- Missing units in metrics
- Incomplete mobile variants

---

# DOCUMENT METADATA

- **Document Version:** 2.5
- **Last Updated:** 2026-02-11 (Real-time & Collaboration)
- **Author:** CHATFLOW Design Team
- **Status:** Production Ready — Enterprise Grade
- **Total Screens:** 160+ (with variants)
- **Total Modules:** 18
- **Total Add-ons:** 12 (8 detailed)
- **Total Error Codes:** 50+
- **Total Components:** 18 (12 standard + 3 KB-specific + 3 CRM-specific)
- **Total User Flows:** 7 comprehensive flows
- **Total Analytics Sub-modules:** 13 (including 7 advanced)
- **Total API Endpoints:** 20+ (see API_ENDPOINTS_EXTENDED.md)
- **Real-time Features:** Visitor tracking, Team Chat (WebSocket-based)
- **Review Cycle:** Monthly
- **Next Review:** 2026-03-11

---

**END OF DOCUMENT**
