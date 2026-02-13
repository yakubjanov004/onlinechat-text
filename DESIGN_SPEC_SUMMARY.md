# CHATFLOW — Consolidated Design Specification

> **Generated:** 2026-02-11  
> **Source:** 35 figma-docs markdown files (00-34 + README.md)  
> **Platform:** CHATFLOW — Enterprise SaaS Customer Support Platform  
> **Target Market:** Uzbekistan & Central Asia  
> **Languages:** O'zbek (primary), Русский, English + 3 more  
> **Inspiration:** Crisp.chat, Intercom, Linear, JivoChat, Tawk.to, HubSpot, Chatwoot

---

## TABLE OF CONTENTS

1. [File Index](#1-file-index)
2. [Design System](#2-design-system)
3. [Authentication Flow](#3-authentication-flow)
4. [Onboarding Flow](#4-onboarding-flow)
5. [Dashboard Layout](#5-dashboard-layout)
6. [Chat / Inbox](#6-chat--inbox)
7. [All Other Modules](#7-all-other-modules)
8. [Dark Mode](#8-dark-mode)
9. [Multi-Language / i18n](#9-multi-language--i18n)
10. [Email Templates](#10-email-templates)
11. [GDPR & Data Privacy](#11-gdpr--data-privacy)
12. [Technical Architecture](#12-technical-architecture)

---

## 1. FILE INDEX

| # | File | Covers |
|---|------|--------|
| 00 | `loyiha-umumiy.md` | Project overview, sitemap, 12 modules, roles (Admin/Manager/Operator) |
| 01 | `design-system.md` | Colors, typography, spacing, buttons, inputs, cards, badges, avatars, toggles, dropdowns, tabs, tables, date pickers, icons, animations, toasts |
| 02 | `landing-hero-header.md` | Sticky header 72px + Hero section (2-column, H1 56px, CTA 52px) |
| 03 | `landing-trust-kimlar.md` | Trust bar (3 variants), "Kimlar Uchun" role cards |
| 04 | `landing-ishlaydi-imkoniyatlar.md` | 4-step timeline "How It Works" + 6 feature cards (3×2 grid) |
| 05 | `landing-integratsiya-afzallik.md` | 3 integration channels, 6 advantages (2×3 grid, #10B981 checkmarks) |
| 06 | `landing-tariflar-cta-footer.md` | 4 pricing plans (Free/Pro $29/Business $59/Enterprise), CTA gradient, Footer #111827 |
| 07 | `auth-signup-login.md` | Sign Up (480px card), Email Verification, Login, Forgot Password, First Login celebration |
| 08 | `onboarding-welcome-workspace.md` | Progress dots, Welcome screen 600px, Workspace setup, Skip/Resume modal |
| 09 | `onboarding-widget-install.md` | Widget customization (480px+960px split), 8 platform tabs installation, Verification states |
| 10 | `dashboard-layout.md` | Header 64px, Sidebar 240/64px, Mobile bottom nav, Search Ctrl+K |
| 11 | `inbox-chat.md` | 2-panel inbox, Chat List 360px, Message bubbles, Composer |
| 12 | `inbox-advanced.md` | Info sidebar 300px, Quick actions 56px, Transfer/Resolve/Upload/Canned modals |
| 13 | `automation.md` | Working Hours, Auto-Reply, Triggers, Greetings (60% settings + 40% preview) |
| 14 | `team.md` | Agents table (7 cols), 6 modals, roles/permissions matrix, invitations |
| 15 | `analytics.md` | 6 tabs: Overview/Performance/CSAT/My Stats/Export/Advanced |
| 16 | `settings.md` | 5 tabs: Workspace/Widget/Security/Notifications/Profile |
| 17 | `billing.md` | 4 tabs: Plan/Payment/Invoices/Usage. Click/Payme/Stripe gateways |
| 18 | `chat-widget.md` | Visitor-side widget: Launcher 56×56px, Window 360×520px, Pre-chat/Offline/Feedback |
| 19 | `flowcharts-userflows.md` | 6 user flows with Mermaid + API endpoints |
| 20 | `contacts-crm.md` | CRM: contacts, orgs, import/export, segments, merge |
| 21 | `online-visitors.md` | Real-time visitor tracking, map view, proactive chat, WebSocket |
| 22 | `team-chat.md` | Internal agent chat: DM + Rooms, reactions, threads, typing indicators |
| 23 | `knowledge-base.md` | KB dashboard, WYSIWYG editor, categories, public portal, KB analytics |
| 24 | `addons-marketplace.md` | 12 add-ons catalog, detail modal, activation wizard, pricing |
| 25 | `advanced-analytics.md` | 8 tabs: Overview/Responsiveness/Operators/SLA/Channels/Segments/Tags/Custom Dashboards |
| 26 | `developer.md` | API keys management, webhooks, webhook logs, developer tools |
| 27 | `error-pages.md` | 404/500/403 pages with SVG illustrations, animations, WCAG AAA |
| 28 | `global-search.md` | Cmd+K modal (640px), 6 search categories, keyboard navigation |
| 29 | `help-support.md` | Help Center, KB, Video Tutorials, Support Tickets, Contextual Help, Onboarding Tour |
| 30 | `notification-center.md` | Bell icon, Dropdown 420×600px, 5 notification types, Settings, WebSocket |
| 31 | `multi-language.md` | 12 languages, i18n JSON, RTL support, Translation Manager admin |
| 32 | `gdpr-data-deletion.md` | Data Export, Account Deletion (multi-step confirmation), Privacy Settings, Cookie consent |
| 33 | `email-templates.md` | 15 email templates, Email Design System, HTML/Plain Text, Mailgun integration |
| 34 | `dark-mode.md` | Full dark mode color system, surface elevation, 10 screen variants, CSS variables |
| README | `README.md` | File index, module statistics (18 modules, 160+ screens, 50+ components), roadmap |

---

## 2. DESIGN SYSTEM

### 2.1 Color Palette

#### Primary (Indigo)
| Token | Hex | Usage |
|-------|-----|-------|
| Primary-600 (main) | `#4F46E5` | CTAs, active states, links, brand |
| Primary-500 (hover) | `#6366F1` | Hover states |
| Primary-400 (light) | `#818CF8` | Light accents |
| Primary-100 (selected) | `#E0E7FF` | Selected backgrounds |
| Primary-50 (bg) | `#EEF2FF` | Light backgrounds, badges |

#### Neutrals (Gray)
| Token | Hex | Usage |
|-------|-----|-------|
| Gray-900 | `#111827` | Headings, primary text, footer bg |
| Gray-800 | `#1F2937` | Dark tooltips, code blocks |
| Gray-700 | `#374151` | Body text |
| Gray-500 | `#6B7280` | Secondary text, icons, placeholders |
| Gray-400 | `#9CA3AF` | Muted text, timestamps |
| Gray-300 | `#D1D5DB` | Borders, dividers |
| Gray-200 | `#E5E7EB` | Light borders |
| Gray-100 | `#F3F4F6` | Hover backgrounds, input bg |
| Gray-50 | `#F9FAFB` | Section backgrounds |
| White | `#FFFFFF` | Card/page backgrounds |

#### Status Colors
| Status | Hex | Usage |
|--------|-----|-------|
| Success | `#10B981` | Online, resolved, positive trends |
| Error | `#EF4444` | Errors, danger, negative trends |
| Warning | `#F59E0B` | Warnings, pending, away status |
| Info | `#3B82F6` | Information, in-progress |

#### Gradients
| Name | CSS | Usage |
|------|-----|-------|
| Hero | `linear-gradient(135deg, #4F46E5, #7C3AED)` | Hero section, email headers |
| CTA | `linear-gradient(135deg, #4F46E5, #6366F1)` | CTA sections |

### 2.2 Typography

**Font Families:**
- **Inter** — Primary UI font (all text)
- **JetBrains Mono** — Code blocks
- **Fira Code** — API key displays

#### Landing Page Typography
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 56px | 700 (Bold) | 1.1 |
| H2 | 40px | 700 (Bold) | 1.2 |
| H3 | 28px | 600 (Semibold) | 1.3 |
| Body | 16px | 400 (Regular) | 1.6 |
| Small | 14px | 400 (Regular) | 1.5 |

#### Dashboard Typography
| Element | Size | Weight |
|---------|------|--------|
| Page Title | 24px | 600 (Semibold) |
| Section Title | 18-20px | 600 (Semibold) |
| Card Title | 16px | 600 (Semibold) |
| Body | 14px | 400 (Regular) |
| Small/Meta | 12-13px | 400-500 |
| Metric / Large Number | 28-32px | 700 (Bold) |

### 2.3 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| space-1 | 4px | Tight gaps, inline spacing |
| space-2 | 8px | Icon gaps, input padding |
| space-3 | 12px | Card padding, list gaps |
| space-4 | 16px | Section padding, gaps |
| space-5 | 20px | Card padding |
| space-6 | 24px | Section gaps |
| space-8 | 32px | Large section spacing |
| space-10 | 40px | Page padding |
| space-12 | 48px | Hero section spacing |
| space-16 | 64px | Major section breaks |
| space-20 | 80px | Landing section padding |
| space-30 | 120px | Hero vertical padding |

### 2.4 Layout Dimensions

| Element | Dimension |
|---------|-----------|
| Landing max-width | 1200px |
| Dashboard sidebar (expanded) | 240px |
| Dashboard sidebar (collapsed) | 64px |
| Dashboard header | 64px height |
| Landing header | 72px height |
| Chat list panel | 360px |
| Chat info sidebar | 280-300px |
| Mobile bottom nav | 64px |
| Onboarding container | 600px |
| Modal Small | 400-480px |
| Modal Medium | 560-640px |
| Modal Large | 720-900px |
| Email template width | 600px |

### 2.5 Breakpoints

| Name | Width | Notes |
|------|-------|-------|
| sm | 375px | Mobile (primary mobile target) |
| md | 768px | Tablet |
| lg | 1024px | Small desktop |
| xl | 1440px | Desktop (primary design target) |
| 2xl | 1920px | Large desktop |

### 2.6 Buttons

#### Variants
| Variant | Background | Text | Border |
|---------|------------|------|--------|
| Primary | `#4F46E5` | `#FFFFFF` | none |
| Secondary | `#EEF2FF` | `#4F46E5` | none |
| Outline | transparent | `#4F46E5` | 1px `#4F46E5` |
| Ghost | transparent | `#6B7280` | none |
| Danger | `#EF4444` | `#FFFFFF` | none |

#### Sizes
| Size | Height | Padding | Font |
|------|--------|---------|------|
| SM | 36px | 8px 16px | 14px |
| MD | 44px | 10px 20px | 14px |
| LG | 52px | 14px 32px | 16px |

#### States
- **Default:** as specified
- **Hover:** Primary → `#4338CA`, shadow-md, translateY(-1px)
- **Active/Pressed:** scale(0.98), darker shade
- **Focus:** 2px outline `#4F46E5`, 2px offset
- **Disabled:** opacity 0.5, cursor not-allowed
- **Loading:** spinner 16px replacing icon, text "Loading...", disabled

### 2.7 Inputs

| Property | Value |
|----------|-------|
| Height | 44px |
| Border-radius | 8px |
| Border | 1px `#D1D5DB` |
| Background | `#FFFFFF` |
| Font | 14px Regular |
| Padding | 10px 12px |

#### States
| State | Border | Background | Shadow |
|-------|--------|------------|--------|
| Default | 1px `#D1D5DB` | `#FFFFFF` | none |
| Focus | 2px `#4F46E5` | `#FFFFFF` | `0 0 0 3px rgba(79,70,229,0.1)` |
| Error | 1px `#EF4444` | `#FEF2F2` | none |
| Success | 1px `#10B981` | `#F0FDF4` | none |
| Disabled | 1px `#E5E7EB` | `#F9FAFB` | none, opacity 0.6 |

### 2.8 Cards

| Variant | Background | Border | Shadow |
|---------|------------|--------|--------|
| Default | `#FFFFFF` | 1px `#E5E7EB` | none |
| Outlined | `#FFFFFF` | 1px `#D1D5DB` | none |
| Elevated | `#FFFFFF` | none | shadow-md |
| Interactive | `#FFFFFF` | 1px `#E5E7EB` | hover: shadow-lg, translateY(-2px) |

### 2.9 Badges

| Variant | Background | Text |
|---------|------------|------|
| Default | `#F3F4F6` | `#374151` |
| Primary | `#EEF2FF` | `#4F46E5` |
| Success | `#D1FAE5` | `#065F46` |
| Error | `#FEE2E2` | `#991B1B` |
| Warning | `#FEF3C7` | `#92400E` |

Sizes: SM (20px height), MD (24px), LG (28px). Shape: pill (9999px radius).

### 2.10 Avatars

| Size | Dimension | Usage |
|------|-----------|-------|
| XS | 24px | Inline mentions |
| SM | 32px | Chat messages, search results |
| MD | 40px | Header, list items |
| LG | 48px | Chat list items |
| XL | 64px | Team cards, profiles |
| 2XL | 120px | Profile settings |

### 2.11 Toggle Switch
- Size: 44×24px
- Off: `#D1D5DB` track, white thumb
- On: `#4F46E5` track, white thumb shifted right
- Animation: thumb slide 200ms ease-in-out

### 2.12 Icons
- **Primary library:** Heroicons (outline + solid)
- **Alternative:** Phosphor Icons
- **Sizes:** 16px, 20px, 24px
- **Default color:** `#6B7280`
- **Active color:** `#4F46E5`

### 2.13 Shadows
| Level | CSS |
|-------|-----|
| sm | `0 1px 2px rgba(0,0,0,0.05)` |
| md | `0 4px 6px -1px rgba(0,0,0,0.1)` |
| lg | `0 10px 15px -3px rgba(0,0,0,0.1)` |
| xl | `0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)` |

### 2.14 Border Radius
| Usage | Value |
|-------|-------|
| Buttons, inputs | 8px |
| Cards, modals | 12px |
| Badges (pill) | 9999px |
| Avatars | 50% (circle) |
| Small elements | 4-6px |

### 2.15 Animations (12 core patterns)

| Pattern | Duration | Easing |
|---------|----------|--------|
| Fade-in | 200ms | ease-out |
| Slide-up | 300ms | cubic-bezier(0.4,0,0.2,1) |
| Scale-in | 200ms | ease-out |
| Skeleton shimmer | 1.5s | linear infinite |
| Toast slide-in | 300ms | ease-out |
| Modal open | 200ms | ease-out (scale 0.95→1, opacity 0→1) |
| Modal close | 150ms | ease-in |
| Spinner | 600ms | linear infinite rotate 360deg |
| Button hover | 150ms | background transition |
| Page transition | 200ms | fade |
| Bell shake | 500ms | rotate -10→10→0deg |
| Confetti | 2s | optional, subtle |

**Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all animations.

### 2.16 Toast Notifications
- Max-width: 400px
- Slide-in from right
- 4 variants: success (green), error (red), warning (yellow), info (blue)
- Auto-dismiss: 3-5 seconds
- Stacking: 12px gap between multiple toasts

---

## 3. AUTHENTICATION FLOW

### 3.1 Sign Up (SCR-AUTH01)

**Layout:** Centered card 480px on gradient background  
**Steps:** Form → Email Verification → First Login

**Form Fields:**
| Field | Type | Validation |
|-------|------|------------|
| Full Name | Text | Required, 2-50 chars |
| Email | Email | Required, valid format |
| Password | Password | 8+ chars, uppercase+lowercase+number required |
| Terms checkbox | Checkbox | Required |

**Buttons:**
- Google Sign Up: 52px height, white bg, Google logo 20px, `#374151` text
- Email Sign Up: 52px height, `#4F46E5` bg, white text

**Password Strength Indicator:**
- 4-segment bar below password input
- Weak (1 seg red), Fair (2 seg orange), Good (3 seg yellow), Strong (4 seg green)
- Labels: "Juda kuchsiz" / "Kuchsiz" / "Yaxshi" / "Kuchli"

**Validation:** Error text 12px `#EF4444` below field, input border turns red

### 3.2 Email Verification (SCR-AUTH02)

**Layout:** Centered content, 480px card

**Elements:**
- Icon: 64px circle with envelope icon, `#EEF2FF` background
- Title: "Email manzilingizni tasdiqlang" 28px Bold
- 6-digit code input: 6 separate input boxes, 48×56px each, 12px gap, `#4F46E5` focus border
- "Qayta yuborish" timer link: 60-second countdown, becomes clickable when expired
- Resend: Max 3 attempts per email per hour

**Token:** JWT, 24-hour expiry, single-use

### 3.3 Login (SCR-AUTH03)

**Layout:** Same centered card 480px

**Fields:** Email + Password + "Meni eslab qol" checkbox + "Parolni unutdingizmi?" link  
**2FA (if enabled):** 6-digit code, 5-minute expiry, "Zaxira kodni ishlatish" fallback

### 3.4 Forgot Password (SCR-AUTH04)

**Flow:** Enter email → Receive reset link (1-hour expiry, single-use) → New password form → Success confirmation  
**Security:** Rate limit 3 requests/hour/email, IP logging, all sessions invalidated on reset

### 3.5 First Login (SCR-AUTH05)

**Celebration:** Confetti animation, "Tabriklaymiz! 🎉" title, then redirect to onboarding

### 3.6 Authentication Technical

- **JWT Token:** 7 days expiry, httpOnly cookie + localStorage backup
- **Session Management:** JWT refresh on each authenticated request
- **Password Storage:** bcrypt hash
- **OAuth:** Google (primary), Facebook/GitHub (future)

---

## 4. ONBOARDING FLOW

### 4.1 Progress Indicator
- 4 dots, 24px each, horizontal, connected by line
- Active: `#4F46E5` filled
- Completed: `#10B981` filled with checkmark
- Upcoming: `#D1D5DB` outline

### 4.2 Step 1: Welcome (SCR-ONB01)

**Container:** 600px centered, white card, 40px padding
- Illustration: 280×200px top
- Title: "CHATFLOW ga xush kelibsiz!" 28px Bold
- Subtitle: Role-based description
- "Boshlash" button 52px primary
- "Keyinroq sozlash" ghost link

### 4.3 Step 2: Workspace Setup (SCR-ONB02)

**Fields:**
| Field | Type | Details |
|-------|------|---------|
| Workspace Name | Text input | Required, 3-50 chars |
| Website URL | URL input | Optional, auto-detected |
| Industry | Dropdown | 10 options |
| Team Size | Radio cards | 1-5 / 6-20 / 21-50 / 51+ |

### 4.4 Step 3: Widget Customization (SCR-ONB03)

**Layout:** Split-screen — 480px settings left + 960px live preview right

**8 Customizable Settings:**
1. Widget Color (color picker with hex input, default `#4F46E5`)
2. Position (Bottom-right / Bottom-left radio)
3. Welcome Message (textarea, max 200 chars)
4. Agent Name (text, max 30 chars)
5. Agent Avatar (upload or select)
6. Pre-chat Form toggle (Name/Email fields)
7. Offline Message (textarea)
8. Language (dropdown: uz/ru/en)

**Live Preview:** 360×520px widget mockup, updates in real-time

### 4.5 Step 4: Installation (SCR-ONB04)

**Container:** 800px centered

**Platform Tabs (8):**
HTML / React / Vue / Angular / WordPress / Shopify / Wix / Other

**Code Snippet:** Dark background `#1E1E1E`, monospace font, copy button

**Verification States:**
1. ⏳ "Widget kutilmoqda..." — Checking animation
2. ✅ "Widget topildi!" — Green success with checkmark
3. ❌ "Widget topilmadi" — Red error with retry button + manual skip

### 4.6 Skip & Resume Modal (480px)
- Title: "Keyinroq sozlashni xohlaysizmi?"
- Warning: skipped steps can be completed later in Settings
- "Ha, o'tkazib yuborish" outline button + "Davom etish" primary button

---

## 5. DASHBOARD LAYOUT

### 5.1 Header (64px)

| Element | Specs |
|---------|-------|
| Logo | 120×28px, left |
| Search | 320-480px, center, Ctrl+K shortcut badge |
| Status Toggle | Online (green) / Away (yellow) / Busy (red) dropdown |
| Notification Bell | 20px icon, red badge with count (99+ max) |
| User Avatar | 32px circle, dropdown menu |

### 5.2 Sidebar (240px expanded / 64px collapsed)

**Background:** White, border-right 1px `#E5E7EB`

**12 Menu Items:**
1. 💬 Inbox (unread badge)
2. 📊 Dashboard
3. 👥 Contacts
4. 👁 Online Visitors
5. 🤖 Automation
6. 📚 Knowledge Base
7. 🏪 Add-ons
8. 👤 Team
9. 💬 Team Chat
10. 📈 Analytics
11. ⚙️ Settings
12. 💳 Billing

**Menu Item States:**
- Default: `#6B7280` icon + text, transparent bg
- Hover: `#F3F4F6` bg, `#111827` text
- Active: `#EEF2FF` bg, `#4F46E5` text + icon, border-left 3px `#4F46E5`

**Collapse:** Toggle button at bottom, icons-only mode at 64px

### 5.3 Mobile Navigation (bottom tab bar, 64px)

5 tabs: Inbox, Contacts, Dashboard, Team, More (hamburger)
- Active: `#4F46E5` icon + label
- Inactive: `#6B7280` icon + label

### 5.4 Global Search (Cmd+K)

**Trigger:** Ctrl+K / Cmd+K or click header search
**Modal:** 640px width × 600px max-height, 80px margin-top, 12px radius, shadow-xl

**Search Input:** 48px height, 16px font, auto-focus, 300ms debounce, 2-char minimum

**6 Search Categories (priority order):**
1. Chats (5 results max, ChatIcon `#10B981`)
2. Contacts (5 results max, avatar circle)
3. Agents (3 results max, avatar + status)
4. KB Articles (3 results max, BookIcon `#8B5CF6`)
5. Pages (3 results max, page-specific icons)
6. Commands (optional, ZapIcon `#F59E0B`)

**Result Item:** 56px height, 32px icon/avatar, 14px Medium title, 13px Regular subtitle
- Hover: `#F3F4F6` bg, border-left 3px `#4F46E5`
- Selected: `#E0E7FF` bg

**Keyboard:** ↑↓ navigate, Enter select, Esc close, Tab next category

**Footer:** `#F9FAFB` bg, keyboard hint icons (↑↓ Navigate, ↵ Select, Esc Close)

**Mobile (<480px):** Fullscreen modal, slide-up animation, 60px result height

---

## 6. CHAT / INBOX

### 6.1 Inbox Layout (SCR-I01)

**3-panel layout:**
1. **Chat List** — 360px width
2. **Message Area** — flexible remaining width
3. **Info Sidebar** — 280-300px (collapsible)

### 6.2 Chat List (360px)

**Header:** Search input + filter tabs (All / Mine / Unassigned / Resolved)

**Chat Item:**
- Height: ~72px
- Avatar: 48px circle, online indicator 8px green dot
- Name: 14px Semibold `#111827`
- Message preview: 14px Regular `#6B7280`, 2-line truncate
- Timestamp: 12px `#9CA3AF`, top-right
- Unread badge: pill `#4F46E5` bg, white text, min-width 20px
- Channel icon: 16px (website/facebook/telegram/whatsapp)

**States:**
- Default: white bg
- Hover: `#F9FAFB` bg
- Active/Selected: `#EEF2FF` bg, border-left 3px `#4F46E5`

### 6.3 Message Area

**Chat Header (64px):**
- Avatar 40px + Name 16px Semibold + Status (Online/Offline)
- Actions: Assign dropdown, Resolve button, More menu

**Message Bubbles:**
| Type | Background | Text | Radius | Max-width |
|------|------------|------|--------|-----------|
| Incoming (visitor) | `#F3F4F6` | `#111827` | 12px (flat bottom-left) | 70% |
| Outgoing (agent) | `#4F46E5` | `#FFFFFF` | 12px (flat bottom-right) | 70% |
| System | transparent | `#6B7280` 12px center | — | — |

**Message Metadata:** Timestamp 12px `#9CA3AF`, read receipts (✓✓), delivery status

**Typing Indicator:** "Yozmoqda..." + animated 3 dots

**Date Separators:** "Bugun" / "Kecha" / date, centered, horizontal lines

### 6.4 Message Composer

- Min height: 56px, auto-expand to 120px
- Toolbar: Bold/Italic/Emoji/Attach/Canned Responses (20px icons)
- Send button: 36px circle `#4F46E5`
- Enter = send, Shift+Enter = newline
- File attachments: drag-drop or click, max 10MB

### 6.5 Info Sidebar (300px)

**6 Sections (collapsible):**
1. **Contact Info** — Avatar 64px, name, email, phone, location
2. **Chat Details** — Status, assigned agent, channel, created/updated times
3. **Tags** — Multi-select pills, add with "+"
4. **Notes** — Internal notes textarea
5. **Previous Chats** — History list
6. **Custom Data** — Key-value pairs from pre-chat form or API

### 6.6 Quick Actions Bar (56px)
Horizontal bar above composer: Assign / Tag / Resolve / Canned / Transfer

### 6.7 Key Modals

| Modal | Width | Contents |
|-------|-------|----------|
| Transfer Chat | 480px | Agent dropdown (online first), reason textarea |
| Resolve Chat | 400px | Confirmation + optional CSAT trigger |
| File Upload | 560px | Drag-drop area, file type/size validation |
| Canned Responses | 480px | Search + list, Markdown preview, insert button |

### 6.8 Chat Widget (Visitor Side)

**Launcher:** 56×56px circle, `#4F46E5` bg, chat icon 24px white, position bottom-right 24px  
**Badge:** Unread count, `#EF4444` bg, 18px

**Chat Window:** 360×520px
- Header: 56px, agent avatar + name + status
- Messages: auto-scroll, same bubble styles
- Pre-chat Form: Name + Email (optional Phone), validation, "Boshlash" button
- Offline Form: Name + Email + Message textarea
- Feedback/CSAT: 5-star rating + comment textarea
- Powered by: "ChatFlow" link, bottom-center, 12px

**Responsive:**
- Mobile: fullscreen overlay
- Tablet: standard widget

---

## 7. ALL OTHER MODULES

### 7.1 Landing Page (Files 02-06)

**Header:** Sticky 72px, blur-on-scroll, transparent → white bg
- Logo 120×28px + 5 nav links + Language selector + "Kirish" outline + "Boshlash" primary buttons

**Hero:** 2-column 50/50
- Left: H1 56px Bold, H2 20px Regular `#6B7280`, 2 CTA buttons (52px primary + outline)
- Right: Dashboard screenshot/illustration with floating elements

**Trust Bar:** 5 company logos, grayscale, 2px opacity hover → color

**"Kimlar Uchun":** 3 role cards (Operators/Managers/Admins), 360px each, icon 48px

**"Qanday Ishlaydi":** 4-step vertical timeline with icons + descriptions

**Features:** 6 cards 3×2 grid, icon 48px `#EEF2FF` bg, title + description

**Integrations:** 3 channel cards (Website/Telegram/Facebook) + code snippet preview

**Pricing:** 4 plans in horizontal cards
| Plan | Price | Featured |
|------|-------|----------|
| Free | $0/mo | — |
| Pro | $29/mo | ⭐ shadow-lg, translateY(-8px), "Mashhur" badge |
| Business | $59/mo | — |
| Enterprise | Custom | "Biz bilan bog'laning" |

**Footer:** `#111827` bg, 4-column grid (Company/Product/Resources/Legal), social icons, copyright

### 7.2 Automation (File 13)

**4-tab layout** with 60% settings + 40% live preview split:

1. **Working Hours** — Weekly schedule, timezone dropdown, holiday exceptions
2. **Auto-Reply** — Offline message editor, delay settings, form fields toggle
3. **Triggers** — Visual rule builder (IF condition → THEN action), 10+ trigger types
4. **Greetings** — Welcome message per page/URL, targeting rules, A/B testing

### 7.3 Team Management (File 14)

**Agents Table (7 columns):** Avatar+Name / Email / Role badge / Status / Invited Date / Last Active / Actions

**6 Modals:**
1. Invite Agent (480px): Email + Role radio cards
2. Edit Agent (480px): Name + Email + Role
3. Agent Profile (560px): Full stats, permissions
4. Delete Agent (400px): Confirmation with type-name
5. Change Role (400px): Role dropdown + permissions preview
6. Bulk Actions (480px): Multi-select operations

**Roles & Permissions Matrix:**
| Permission | Operator | Manager | Admin |
|------------|----------|---------|-------|
| Answer chats | ✅ | ✅ | ✅ |
| View all chats | ❌ | ✅ | ✅ |
| Manage team | ❌ | ✅ | ✅ |
| Billing | ❌ | ❌ | ✅ |
| Delete workspace | ❌ | ❌ | ✅ |

### 7.4 Analytics (Files 15 + 25)

**Basic Analytics (6 tabs):**
- Overview: 4 metric cards + line/bar/pie charts
- Performance: Resolution time, first response time
- CSAT: Satisfaction scores, trends
- My Stats: Individual operator stats
- Export: PDF/CSV/Excel with date range
- Advanced: Link to Advanced Analytics

**Advanced Analytics (8 tabs):**
- Overview: 4 KPIs (240×120px cards) + 4 charts (550×280px each)
- Responsiveness: Response time histogram + hour heatmap
- Operators: Table + podium + detail page with manager notes
- SLA Monitoring: 3 compliance cards + breach timeline + reasons pie
- Channels: 4 channel cards (Website/Facebook/Telegram/WhatsApp) + stacked area chart
- Segments: VIP/New/Returning + custom segments with AND/OR logic
- Tags: Tag cloud + usage heatmap + combination analysis
- Custom Dashboards: Drag-drop 12-col grid canvas, widget library, 3 templates, share/export

### 7.5 Settings (File 16)

**5 tabs:**
1. **Workspace:** Name, logo upload, timezone, delete workspace (danger zone)
2. **Widget:** Appearance, behavior, pre-chat form, custom CSS
3. **Security:** 2FA toggle, password policy, login history, API key management
4. **Notifications:** Desktop/email/sound toggles per type
5. **Profile:** Name, avatar, email, password change, language

### 7.6 Billing (File 17)

**4 tabs:**
1. **Current Plan:** Plan card, usage indicators, upgrade/downgrade buttons
2. **Payment Methods:** Card list, Click/Payme (Uzbekistan), Stripe, add/remove
3. **Invoices:** Table with download PDF, status badges (Paid/Pending/Failed)
4. **Usage & Limits:** Progress bars for chats/agents/storage, overage warnings

**Payment Gateways:** Stripe (international), Click.uz + Payme.uz (local Uzbekistan)

### 7.7 Contacts / CRM (File 20)

**Features:**
- Contact list with search, filters, bulk actions
- Contact profile page: Info + Activity timeline + Chat history + Notes + Tags
- Organizations: Company profiles with associated contacts
- Import/Export: CSV upload/download, field mapping wizard
- Segments: Dynamic rules (VIP if total_chats > 50), auto-update
- Merge Contacts: Side-by-side comparison, select primary fields

### 7.8 Online Visitors (File 21)

**Real-time tracking:**
- Table: Current page, referrer, country flag, time on site, browser/OS, status
- Map View: OpenStreetMap/Mapbox with visitor pins color-coded by country
- Proactive Chat: Initiate chat from visitor row, custom greeting
- Visitor Detail Drawer: 480px slide-in, full info + activity timeline

**WebSocket Events:** `visitor.new`, `visitor.update`, `visitor.leave`, `visitor.page_change`
**Polling Fallback:** 5-second intervals

### 7.9 Team Chat (File 22)

**Layout:** Left 300px chat list + Main chat area (fluid)

**Features:**
- Direct Messages + Rooms (public #channels + 🔒 private)
- Default rooms: #general, #support-team, #announcements (read-only for Operators)
- Message formatting: Markdown (bold/italic/code), @mentions, emoji picker
- File attachments: Images 400×300px preview, files with icon+size, max 10MB
- Reply threads: Collapsed, "3 javob" clickable
- Reactions: Quick-bar 👍❤️😂🎉, custom from emoji picker, counts, removable
- Typing indicator: "Jahongir yozmoqda..." with animated dots
- Date separators: "Bugun" / "Kecha" / date, sticky

**Input Area:** Auto-expand min 56px → max 120px, toolbar (B/I/Code/Emoji/Attach/Mention)

### 7.10 Knowledge Base (File 23)

**Admin Dashboard:** 4 stat cards + Articles table (sort/filter/search) + Categories management

**Article Editor:**
- WYSIWYG: Tiptap recommended, toolbar (H2-H4/B/I/S/Link/Image/Video/Lists/Quote/Code/Callout)
- Auto-save every 2 seconds
- Metadata sidebar 240px: Featured image, category, visibility, SEO slug, related articles
- Preview modal 900px

**Public Portal (SSR):**
- URL: `kb.chatflow.uz/workspace-name/category-slug/article-slug`
- Homepage: Hero with 56px search bar (600px, 16px radius, shadow-lg), Category grid 3×2, Popular articles
- Article page: Max-width 720px, 16px font, line-height 1.7
- "Was this helpful?" 👍/👎 buttons + feedback textarea
- "Still need help?" → opens chat widget

### 7.11 Add-ons Marketplace (File 24)

**Catalog:** Category tabs + 3-column grid, cards 360×420px (screenshot + logo + name + rating + price)

**12 Add-ons:**
| Add-on | Price | Category |
|--------|-------|----------|
| Video+Voice+Screen | $29/mo | Communication |
| Phone Integration | $15+/mo | Communication |
| WhatsApp Business | $25/mo | Communication |
| AI Assist | $49/mo | AI |
| Virtual Assistant | $7.50/hr | AI |
| Hire Agents | $1/hr | AI |
| Advanced Analytics | $29/mo | Team |
| Remove Branding | $19/mo | Team |
| Multi-workspace | $39/mo | Team |
| Shopping Cart | $35/mo | E-commerce |
| In-Chat Payments | $25+/mo | E-commerce |
| SMS Campaigns | $29+/mo | E-commerce |

**Activation:** 4-step wizard: Choose Plan → Configure → Billing → Success

### 7.12 Developer / API (File 26)

**API Keys:** Table with masked keys (Fira Code mono), environment badges (Production/Development/Test), create/regenerate/revoke modals
**Webhooks:** 2-column card grid, create wizard (2 steps: URL+Secret → Event selection), test webhook with result display
**Webhook Logs:** Filterable table, detail drawer 480px with full request/response (JSON syntax highlighted)

### 7.13 Error Pages (File 27)

**Shared Layout:** Container 640px centered, Illustration 240×240px SVG, error badge + title + description + CTA buttons

| Page | Badge Color | Title |
|------|-------------|-------|
| 404 | `#FEF3C7` bg, `#F59E0B` border | "Sahifa topilmadi" |
| 500 | `#FEE2E2` bg, `#EF4444` border | "Nimadir xato ketdi" |
| 403 | `#FEF3C7` bg, `#F59E0B` border | "Kirish taqiqlangan" |

**WCAG AAA** contrast ratios verified. Page load animation ~800ms staggered sequence.

### 7.14 Help & Support (File 29)

**Help Center Home:** Large search 600px + 3 quick-access cards (360×160px) + Popular Topics 2×3 grid + Video Tutorials + Recent Updates

**Knowledge Base (internal):** Left sidebar 280px category tree + Article list cards 512×120px + Article view (max-width 800px, TOC sidebar 240px sticky)

**Video Tutorials:** 3-column grid (360×280px cards), Player modal 1120×630px (16:9)

**Support Tickets:** Table with Status/Priority badges + Create form (600px) + Ticket detail with message thread

**Contextual Help:** ⓘ icons → tooltips 280px dark bg  
**Onboarding Tour:** 7-step spotlight overlay with tooltips

### 7.15 Notification Center (File 30)

**Bell Icon:** 20px, unread badge 20px circle `#EF4444`, pulse animation on new

**Dropdown Panel:** 420px wide, max 600px height
- Header: Title + "Mark all read" + Settings link
- Filter tabs: All / Chats / Mentions / Team / System / Billing
- Notification item: 80px min-height, 40px icon circle, title + description + timestamp

**5 Notification Types:**
| Type | Icon Color | Icon BG |
|------|------------|---------|
| Chat | `#10B981` | `#D1FAE5` |
| Mention | `#8B5CF6` | `#EDE9FE` |
| Team | `#3B82F6` | `#DBEAFE` |
| System | `#6B7280` | `#F3F4F6` |
| Billing | `#F59E0B` | `#FEF3C7` |

**Unread Item:** `#F0F9FF` bg (blue tint)
**Read Item:** white bg

**Settings:** Desktop toggles, Sound selector (Chime/Ding/Pop/Bell + volume slider), Email checkboxes, DND schedule

---

## 8. DARK MODE

### 8.1 Color Mapping

| Token | Light | Dark |
|-------|-------|------|
| bg-primary | `#FFFFFF` | `#111827` |
| bg-secondary | `#F9FAFB` | `#1F2937` |
| bg-tertiary | `#F3F4F6` | `#374151` |
| bg-elevated | `#FFFFFF` | `#1F2937` |
| bg-hover | `#F3F4F6` | `#374151` |
| bg-active | `#E5E7EB` | `#4B5563` |
| text-primary | `#111827` | `#F9FAFB` |
| text-secondary | `#6B7280` | `#D1D5DB` |
| text-tertiary | `#9CA3AF` | `#9CA3AF` |
| border | `#E5E7EB` | `#374151` |
| border-strong | `#D1D5DB` | `#4B5563` |
| primary | `#4F46E5` | `#6366F1` (lighter for dark bg) |
| success | `#10B981` | `#34D399` |
| danger | `#EF4444` | `#F87171` |
| warning | `#F59E0B` | `#FBBF24` |
| info | `#3B82F6` | `#60A5FA` |

### 8.2 Surface Elevation System

| Level | Color | Usage |
|-------|-------|-------|
| 0 (Base) | `#111827` | App background, sidebar bg |
| 1 (Elevated) | `#1F2937` | Cards, modals, dropdowns, input fields |
| 2 (Hover) | `#374151` | Card hover, table row hover, button hover |
| 3 (Active) | `#4B5563` | Button pressed, selected row, active sidebar item |
| 4 (Tooltip) | `#6B7280` | Tooltips, popover bg (rare) |

### 8.3 Shadow System (Dark Mode)
- Darker shadows with higher alpha for depth
- `shadow-sm-dark: 0 1px 2px rgba(0,0,0,0.4)`
- `shadow-lg-dark: 0 10px 15px -3px rgba(0,0,0,0.6)`

### 8.4 Brand Color Adjustments
- All semantic colors shift 1 shade lighter (500→400) for dark bg
- Alpha backgrounds use 15% opacity: `rgba(color, 0.15)`

### 8.5 Message Bubbles (Dark)
- Incoming: `#1F2937` bg, `#F9FAFB` text, 1px `#374151` border
- Outgoing: `#6366F1` bg, `#FFFFFF` text

### 8.6 Theme Toggle
- Located in header (user area) + Settings → Profile
- 3 options: Light / Dark / System (auto-detect via `prefers-color-scheme`)
- Smooth transition: `transition: background-color 200ms, color 200ms, border-color 200ms`
- Persistence: `localStorage.setItem('theme', 'dark')` + backend save
- FOUC prevention: inline `<script>` in `<head>` reads localStorage before paint

### 8.7 10 Screen Variants Documented
Dashboard Shell, Inbox, Contacts, Settings, Analytics, Team, Widget, Auth Pages, Knowledge Base, Billing

---

## 9. MULTI-LANGUAGE / i18n

### 9.1 Supported Languages

**Phase 1 (Launch):** O'zbek (uz), Русский (ru), English (en), Türkçe (tr), Қазақша (kk), Italiano (it)  
**Phase 2 (Future):** Español, Français, Deutsch, العربية (RTL), 中文, 日本語

### 9.2 Language Selector

**Locations:** Header user dropdown, Settings → Profile, Login/Signup top-right, Chat Widget settings

**Modal (480px):** 2-column grid, Language cards 216×72px each (flag emoji 32px + native name 16px Semibold + English name 13px + checkmark if selected)

**Real-time switching:** No page reload needed (i18next `changeLanguage()`)

### 9.3 i18n Structure

JSON files per language: `locales/uz.json`, `locales/en.json`, `locales/ru.json`

**Key categories:** common, auth, dashboard, inbox, team, settings, widget, dates, validation

**Variable interpolation:** `"{{name}}"` syntax (e.g., "Xush kelibsiz, {{name}}!")

### 9.4 Date/Time/Number Formatting

| Language | Date Format | Number Format |
|----------|-------------|---------------|
| O'zbek | 11-Fev, 2026, 14:30 | 1 234 567,89 |
| English | Feb 11, 2026, 2:30 PM | 1,234,567.89 |
| Русский | 11 фев, 2026, 14:30 | 1 234 567,89 |

**Libraries:** `date-fns` with locale, `Intl.NumberFormat`

### 9.5 RTL Support
- CSS logical properties: `padding-inline-start`, `margin-inline-end`
- `html[dir="rtl"]` attribute
- Sidebar flips to right, icons mirror, text right-aligned

### 9.6 Widget Language
- 15 customizable text strings per language (welcome, greeting, status labels, send button, placeholders, CSAT, pre-chat, offline)
- Multi-language widget: visitor can switch language
- Detection: Browser language → IP geolocation → Manual → Default (uz)

### 9.7 Translation Manager (Admin Only)
- Table view: translation keys × languages
- Missing translations highlighted yellow (`#FEF3C7`)
- Inline editing with auto-save
- Import/Export: JSON or CSV format

---

## 10. EMAIL TEMPLATES

### 10.1 Email Design System

| Property | Value |
|----------|-------|
| Max-width | 600px |
| Font | System fonts stack (-apple-system, Segoe UI, Roboto, Helvetica, Arial) |
| Header height | 80px |
| Header bg | Gradient `#4F46E5` → `#7C3AED` |
| CTA button | 200-240px × 48px, `#4F46E5` bg, 8px radius, 16px Semibold white |
| Info card | `#F9FAFB` bg, 1px `#E5E7EB` border, 8px radius, 20px padding |
| Footer | `#F9FAFB` bg, 13px `#6B7280`, links `#4F46E5` |
| Logo | 120-140px × 28px white on gradient header |

### 10.2 15 Core Templates

| # | Template | Trigger | Expiry |
|---|----------|---------|--------|
| 1 | Email Verification | Sign up | 24 hours |
| 2 | Password Reset | Forgot password | 1 hour |
| 3 | Team Invitation | Admin invites agent | 7 days |
| 4 | New Chat Assignment | Chat assigned to agent | — |
| 5 | Chat Mention | @mention in team chat | — |
| 6 | CSAT Feedback | Chat resolved | — |
| 7 | Weekly Digest | Scheduled (Monday 9AM) | — |
| 8 | Monthly Report | Scheduled (1st of month) | — |
| 9 | Invoice / Payment Receipt | Payment processed | — |
| 10 | Payment Failed | Payment fails | — |
| 11 | Plan Change | Upgrade/downgrade | — |
| 12 | Data Export Ready | GDPR data export complete | 7 days |
| 13 | Account Deleted | Account deletion | — |
| 14 | Maintenance Notice | System maintenance scheduled | — |
| 15 | Feature Announcement | New feature released | — |

**All templates:** HTML + Plain Text versions, 3 language variants (uz/ru/en), variable placeholders, CAN-SPAM compliant unsubscribe links

**Email Service:** Mailgun / SendGrid / AWS SES  
**Tracking:** Open rates, click rates, delivery status via webhooks

---

## 11. GDPR & DATA PRIVACY

### 11.1 Data Export (SCR-GDPR01)

**Format Options:** JSON (recommended, ~2.5MB) or PDF (~8.1MB)
**12 data categories** included: profile, settings, chats (2 years), contacts, notes, files, activity logs, billing, automation rules, team messages, CSAT, API keys

**Processing:**
- 2-5 minute preparation time
- 4-step progress indicator: Collect → Create file → Encrypt → Email
- Download link valid 7 days
- Email notification when ready

### 11.2 Account Deletion (SCR-GDPR02)

**Multi-step safety process:**
1. Danger warning card (`#FEF2F2` bg, `#DC2626` icon)
2. "What will be deleted" list (10 items with trash icons)
3. Pre-deletion checklist (4 recommended actions)
4. Email confirmation input (must match exact email)
5. Reason textarea (optional, 500 chars)
6. Final confirmation checkbox (required, red text)
7. **Final modal:** 10-second countdown timer + type "DELETE" (case-sensitive) to confirm
8. Success modal with 5-second auto-redirect to login

**Workspace Owner:** Must transfer ownership before deleting account

### 11.3 Privacy Settings (SCR-GDPR03)

**6 Sections:**
1. Data Access & Export links
2. Account Deletion with danger zone
3. Cookie Preferences (4 types: Required/Functional/Analytics/Marketing toggles)
4. Data Retention Timeline (6 items: Active/Chats 2yr/Billing 7yr/Logs 90d/Deleted immediate/Legal 60-90d)
5. Data Processing Agreements (Privacy Policy, ToS, DPA links)
6. Third-Party Data Sharing (Google Analytics/Stripe/Sentry/Intercom/Mailgun with toggles)

### 11.4 Admin GDPR Requests (SCR-GDPR04)
- Internal admin table for managing user GDPR requests
- Filters: Type/Status/Date/Search
- Row detail: Request ID, User, Type badge, Status badge, timestamps, actions

---

## 12. TECHNICAL ARCHITECTURE

### 12.1 Frontend Stack
- **Framework:** Next.js (SSR for public KB portal) / React SPA
- **Routing:** React Router or Next.js pages
- **State:** React Context / Redux / Zustand
- **Styling:** Tailwind CSS + CSS Variables for theming
- **Animations:** CSS transitions (micro), Framer Motion (complex, ~60KB)
- **i18n:** react-i18next
- **Editor:** Tiptap (WYSIWYG for Knowledge Base)
- **Charts:** Recharts or Chart.js
- **Date:** date-fns with locale support
- **Search:** Algolia or Fuse.js (client-side fuzzy) or PostgreSQL full-text

### 12.2 Real-time
- **WebSocket:** Socket.io
  - Chat messages, typing indicators
  - Visitor tracking (new/update/leave/page_change)
  - Team chat messages, reactions, typing
  - Notifications (new/read/deleted/all_read)
- **Fallback:** 5-second polling
- **Latency target:** <100ms

### 12.3 Authentication
- **JWT:** 7-day expiry, httpOnly cookie + localStorage
- **2FA:** 6-digit TOTP, 5-minute expiry, backup codes
- **OAuth:** Google (primary)
- **Password:** bcrypt hash, 8+ chars, complexity requirements
- **Rate Limiting:** 3 password resets/hour/email, 5 login attempts before lockout

### 12.4 API
- **Base URL:** `https://api.chatflow.uz/v1/`
- **Auth:** Bearer token header
- **Pagination:** Cursor-based or offset (`limit`, `offset`, `cursor`)
- **Search:** `?q=query&limit=10`
- **Rate Limit:** 100 requests/minute per API key
- **Formats:** JSON request/response

### 12.5 Database
- **Primary:** PostgreSQL
- **Schema features:** UUID primary keys, JSONB for metadata, TEXT[] for tags/permissions, TIMESTAMP with timezone
- **Full-text search:** PostgreSQL `tsvector` or Algolia
- **File storage:** S3/CDN (Cloudflare/AWS)
- **Indexes:** On foreign keys, timestamps, status fields, unique slugs

### 12.6 Performance Targets
| Metric | Target |
|--------|--------|
| Page load | <2s |
| Chart render | <500ms |
| Error page render | <300ms |
| Error page interactive | <500ms |
| WebSocket message | <100ms |
| Search debounce | 300ms |
| Animation complete | <800ms |
| Email send | Queued via Bull/BullMQ |
| Data export | 2-5 minutes |
| Historical data retention | 12 months for analytics |

### 12.7 Compliance
- **WCAG AA** contrast ratios across all UI (AAA for critical text)
- **GDPR Art. 15-22** (data access, deletion, portability)
- **CCPA** compliance
- **CAN-SPAM** email compliance with unsubscribe links
- **SOC 2 Type II** readiness
- **Touch targets:** Minimum 44×48px on mobile

---

## STATISTICS

| Metric | Value |
|--------|-------|
| Total modules | 18 |
| Total screens | 160+ (with variants) |
| Documentation files | 35 |
| Design components | 50+ |
| User flows | 10+ |
| User roles | 3 (Admin, Manager, Operator) |
| Email templates | 15 |
| Add-ons | 12 |
| Dark mode screen variants | 10 |
| Supported languages | 6 (Phase 1) + 6 (Phase 2) |
| API endpoint groups | 20+ |
| WebSocket event types | 15+ |
| WCAG compliance | AA (AAA for critical text) |

---

*Generated from 35 figma-docs files in `c:\Users\user\OneDrive\Desktop\onlinechat\figma-docs\`*
