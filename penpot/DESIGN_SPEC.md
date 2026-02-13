# CHATFLOW — Penpot Design Specification (Master Doc)

> **Maqsad:** Har bir sahifani Penpot'da pixel-perfect chizish uchun yagona hujjat.
> **Ilhom:** Jivo, Tawk.to, Crisp.chat, Intercom, Linear
> **Canvas:** 1440×900 per board | **Font:** Inter | **Primary:** `#4F46E5`

---

## 📋 Sahifalar ro'yxati va holati

| # | Board nomi | Fayl | Holat |
|---|-----------|------|-------|
| 01 | Design System | `01-design-system.md` | ⏳ |
| 02 | Login | `02-login.md` | ⏳ |
| 03 | Register (Sign Up) | `03-register.md` | ⏳ |
| 04 | Email Verification | `04-email-verify.md` | ⏳ |
| 05 | Forgot Password | `05-forgot-password.md` | ⏳ |
| 06 | Welcome (First Login) | `06-welcome.md` | ⏳ |
| 07 | Onboarding — Workspace | `07-onboarding-workspace.md` | ⏳ |
| 08 | Onboarding — Widget | `08-onboarding-widget.md` | ⏳ |
| 09 | Onboarding — Install | `09-onboarding-install.md` | ⏳ |
| 10 | Dashboard Layout | `10-dashboard.md` | ⏳ |
| 11 | Inbox — Chat List | `11-inbox-list.md` | ⏳ |
| 12 | Inbox — Chat Room | `12-inbox-chat.md` | ⏳ |
| 13 | Contacts CRM | `13-contacts.md` | ⏳ |
| 14 | Online Visitors | `14-visitors.md` | ⏳ |
| 15 | Automation | `15-automation.md` | ⏳ |
| 16 | Team | `16-team.md` | ⏳ |
| 17 | Team Chat | `17-team-chat.md` | ⏳ |
| 18 | Analytics | `18-analytics.md` | ⏳ |
| 19 | Knowledge Base | `19-knowledge-base.md` | ⏳ |
| 20 | Settings | `20-settings.md` | ⏳ |
| 21 | Billing | `21-billing.md` | ⏳ |
| 22 | Add-ons | `22-addons.md` | ⏳ |
| 23 | Developer / API | `23-developer.md` | ⏳ |
| 24 | Chat Widget | `24-chat-widget.md` | ⏳ |
| 25 | Landing Page | `25-landing.md` | ⏳ |
| 26 | Error Pages | `26-errors.md` | ⏳ |

**Holat belgisi:** ✅ Tayyor | 🔄 Ish jarayonida | ⏳ Kutilmoqda

---

## 🎨 Design Tokens (Global)

### Ranglar

```
PRIMARY
  600  #4F46E5   ← Asosiy CTA, active, links
  500  #6366F1   ← Hover
  400  #818CF8   ← Light accent
  100  #E0E7FF   ← Selected bg
   50  #EEF2FF   ← Light bg

GRAY (Neutral)
  900  #111827   ← Headings, strong text
  700  #374151   ← Body text, labels
  500  #6B7280   ← Placeholder, caption
  300  #D1D5DB   ← Borders
  200  #E5E7EB   ← Dividers, subtle borders
  100  #F3F4F6   ← Card bg, hover
   50  #F9FAFB   ← Page bg

STATUS
  Success  #10B981  bg:#ECFDF5  ← Online, success
  Error    #EF4444  bg:#FEF2F2  ← Offline, delete, error
  Warning  #F59E0B  bg:#FFFBEB  ← Away, caution
  Info     #3B82F6  bg:#EFF6FF  ← Information

GRADIENTS
  Hero     linear-gradient(135deg, #4F46E5, #7C3AED)
  CTA      linear-gradient(135deg, #4F46E5, #6366F1)
  Widget   linear-gradient(180deg, #4F46E5, #6366F1)
```

### Typography (Inter)

```
LANDING
  H1       56px  Bold(700)   lh:64px   ls:-0.02em
  H2       40px  Bold(700)   lh:48px   ls:-0.01em
  H3       28px  Semi(600)   lh:36px
  H4       20px  Semi(600)   lh:28px
  Body-lg  18px  Reg(400)    lh:28px
  Body     16px  Reg(400)    lh:24px
  Body-sm  14px  Reg(400)    lh:20px
  Caption  12px  Med(500)    lh:16px   ls:0.01em

DASHBOARD
  Page     24px  Semi(600)   lh:32px
  Section  18px  Semi(600)   lh:24px
  Card     16px  Semi(600)   lh:24px
  Nav      14px  Med(500)    lh:20px
  Body     14px  Reg(400)    lh:20px
  Small    12px  Reg(400)    lh:16px
  Metric   32px  Bold(700)   lh:40px
  Table-h  12px  Semi(600)   lh:16px
```

### Spacing Scale

```
4px  8px  12px  16px  20px  24px  32px  40px  48px  64px  80px  120px
```

### Border Radius

```
sm:  4px   ← checkbox, small tags
md:  8px   ← inputs, buttons, cards
lg:  12px  ← modals, large cards
xl:  16px  ← hero sections
full: 9999px ← pills, avatars
```

### Shadows

```
sm:   0 1px 2px rgba(0,0,0,0.05)
md:   0 4px 6px -1px rgba(0,0,0,0.1)
lg:   0 10px 15px -3px rgba(0,0,0,0.1)
xl:   0 20px 25px -5px rgba(0,0,0,0.1)
```

---

## 🧩 Shared Components

### Button Variants

| Variant | Height | BG | Text | Border | Radius | Hover BG |
|---------|--------|-----|------|--------|--------|----------|
| Primary | 44px | `#4F46E5` | `#FFF` | none | 8px | `#4338CA` |
| Primary-lg | 56px | `#4F46E5` | `#FFF` | none | 8px | `#4338CA` |
| Secondary | 44px | `#FFF` | `#374151` | 1px `#D1D5DB` | 8px | `#F9FAFB` |
| Ghost | 44px | transparent | `#6B7280` | none | 8px | `#F3F4F6` |
| Danger | 44px | `#EF4444` | `#FFF` | none | 8px | `#DC2626` |
| **Font:** 14px Semi(600) | **Disabled:** opacity 0.5, cursor not-allowed |

### Input Fields

| Param | Value |
|-------|-------|
| Height | 44px |
| Radius | 8px |
| Padding | 12px 16px |
| Font | 14px Reg(400) `#111827` |
| Placeholder | 14px Reg(400) `#6B7280` |
| Label | 14px Med(500) `#374151` mb:6px |
| Border default | 1px `#D1D5DB` |
| Border focus | 2px `#4F46E5` + ring 3px rgba(79,70,229,0.1) |
| Border error | 2px `#EF4444` bg:`#FEF2F2` |
| Border success | 2px `#10B981` bg:`#ECFDF5` |
| Error text | 12px Reg(400) `#EF4444` mt:4px |

### Auth Card (Shared)

| Param | Value |
|-------|-------|
| Width | 480px |
| BG | `#FFFFFF` |
| Radius | 12px |
| Shadow | shadow-md |
| Padding | 40px |
| Page BG | `#F9FAFB` |
| Position | Center both axes |
| Logo | 140px wide, centered, mb:32px |

### Dashboard Shell

| Param | Value |
|-------|-------|
| Header height | 64px |
| Header BG | `#FFF` border-bottom 1px `#E5E7EB` |
| Sidebar expanded | 240px |
| Sidebar collapsed | 64px |
| Sidebar BG | `#FFF` border-right 1px `#E5E7EB` |
| Content BG | `#F9FAFB` |
| Content padding | 24px |

### Sidebar Menu Item

| State | BG | Text | Icon | Border |
|-------|-----|------|------|--------|
| Default | transparent | `#374151` | `#6B7280` | — |
| Hover | `#F3F4F6` | `#111827` | `#374151` | — |
| Active | `#E0E7FF` | `#4F46E5` | `#4F46E5` | left 3px `#4F46E5` |
| Height: 44px | Radius: 8px | Icon: 20px | Font: 14px Med(500) | Gap: 12px |

### Badge (Unread Count)

| Param | Value |
|-------|-------|
| BG | `#EF4444` |
| Text | `#FFF` 11px Bold |
| Min-width | 20px |
| Height | 20px |
| Radius | 9999px |
| Padding | 0 6px |

### Metric Card

| Param | Value |
|-------|-------|
| BG | `#FFF` |
| Border | 1px `#E5E7EB` |
| Radius | 12px |
| Padding | 24px |
| Shadow | shadow-sm |
| Label | 13px Med `#6B7280` |
| Value | 32px Bold `#111827` |
| Trend ↑ | 13px Med `#10B981` |
| Trend ↓ | 13px Med `#EF4444` |

---

## 📐 Layout Grid

```
Desktop: 1440px
  Auth pages:  480px centered card
  Onboarding:  600px centered card
  Dashboard:   Header(64) + Sidebar(240) + Content(fluid)

Mobile: 375px
  Auth:  full-width card, no radius, padding 24px
  Dashboard:  no sidebar, bottom nav 64px
```

---

## 🔗 User Flow: Login → Dashboard

```
[Login] → [Dashboard]
   ↓ forgot
[Forgot Password] → [Email Sent] → [Reset Password] → [Login]

[Register] → [Email Verification] → [Welcome] → [Onboarding 1/4]
  → [Onboarding 2/4] → [Onboarding 3/4] → [Onboarding 4/4] → [Dashboard]
```

---

## 📝 Sahifa yaratish qoidalari

Har bir sahifa `.md` fayli quyidagi strukturani bajariladi:

```markdown
# Page: [Sahifa nomi]
## Vazifasi
## Board: [o'lcham, position]
## Element tree (yuqoridan pastga)
  - Element nomi | turi | o'lcham | rang | font | pozitsiya
## Holatlar (states)
## Micro-interactions
## ASCII wireframe
```

---

## ⏭️ Keyingi qadam

1. `penpot/pages/02-login.md` — Login sahifasini batafsil chizish
2. `penpot/pages/03-register.md` — Register sahifasini chizish
3. Har bir sahifani Penpot plugin orqali avtomatik generate qilish

---

*Oxirgi yangilangan: 2026-02-13*
