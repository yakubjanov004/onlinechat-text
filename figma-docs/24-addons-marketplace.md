# CHATFLOW — Add-ons & Marketplace (Qo'shimcha Xizmatlar)

## Modul maqsadi
Add-ons Marketplace — CHATFLOW platformasiga qo'shimcha funksiyalar va xizmatlar sotib olish uchun yaratilgan marketplace. Admin bu yerda platform imkoniyatlarini kengaytiruvchi premium add-onlarni ko'radi, sinab ko'radi va faollashtiradi.

**Kirish:** Admin, Manager (ko'rish, aktivatsiya qilish)

---

## 1. Add-ons Catalog (SCR-ADD01)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Qo'shimcha xizmatlar" 24px Semibold
- **Subtitle:** "Premium funksiyalarni faollashtiring" 14px Gray-600
- **Actions:**
  - "Faol add-onlar" Ghost button → SCR-ADD02
  - "Billing" Ghost button → SCR-B01

#### Filter Bar
- **Categories (tabs):**
  - Barchasi (active)
  - Communication (Video, Voice, SMS)
  - AI & Automation
  - Analytics & Reports
  - Team & Productivity
  - E-commerce
- **Sort:** Most popular | Price: Low to High | Newest

#### Add-ons Grid
- **Layout:** 3 columns (desktop), 2 (tablet), 1 (mobile)
- **Gap:** 24px

**Add-on Card (360×420px):**

```
┌──────────────────────────────────────┐
│ [Screenshot 360×180px]              │
│ ┌──────────────────────────────┐   │
│ │ [Logo 48px] AI Assist        │   │
│ │ GPT-powered chatbot          │   │
│ │ ⭐ 4.8 (127 reviews)         │   │
│ │                              │   │
│ │ $49/month                    │   │
│ │ [Free trial 14 kun]          │   │
│ │                              │   │
│ │ [Ko'proq] [Faollashtirish]  │   │
│ └──────────────────────────────┘   │
└──────────────────────────────────────┘
```

**Card Content:**
- **Screenshot:** Hero image 360×180px (feature preview)
- **Logo:** 48px circle or square, brand icon
- **Name:** 18px Semibold, Gray-900
- **Tagline:** 14px Regular, Gray-600, 1 line max
- **Rating:** ⭐ 4.8 (127 reviews) 13px Gray-600
- **Price:**
  - "$49/month" 20px Bold, Gray-900 (or "Free" if free)
  - Trial badge: "Free trial 14 kun" 12px Success-500 (if available)
- **Actions:**
  - "Ko'proq" Outline button → SCR-ADD03 (detail modal)
  - "Faollashtirish" Primary button → SCR-ADD03-S01 (activation flow)

**Card Styling:**
- Border: 1px Gray-200
- Radius: 12px
- Padding: 0 (screenshot full-width), 20px (content)
- Shadow: shadow-sm, shadow-md hover
- Hover: transform scale(1.02)

**Badge Overlays (on screenshot):**
- "Popular" — Primary-600 badge, top-left
- "New" — Success-500 badge, top-left
- "Recommended" — Warning-500 badge, top-left

#### Featured Banner (top of grid)
- Width: Full-width, 1100×200px
- Background: gradient Primary
- Content:
  - Title: "AI Assist — GPT Chatbot" 28px Bold, White
  - Description: "Mijozlarga 24/7 avtomatik javob bering" 16px White
  - Price: "$49/month" 24px White
  - CTA: "14 kun bepul sinab ko'ring" Primary button (white bg)
  - Screenshot: 400×320px float right

---

## 2. Active Add-ons (SCR-ADD02)

### Layout
Dashboard Shell + Main Content Area

### UI Komponentlar

#### Header
- **Title:** "Faol add-onlar" 24px Semibold
- **Subtitle:** "Siz faollashtirgan qo'shimchalar" 14px Gray-600
- **Link:** "← Katalogga qaytish" link to SCR-ADD01

#### Active Add-ons List
- **Layout:** List view (not grid), vertical cards

**Active Add-on Card (800×120px):**

```
┌─────────────────────────────────────────────────────────┐
│ [Logo 64px] AI Assist                          ⚙️ [•••] │
│             GPT-powered chatbot                         │
│             Status: ✅ Faol · Next billing: Feb 25      │
│             $49/month · 127 chats processed today       │
│                                                         │
│ [Sozlamalar] [Statistika] [O'chirish]                  │
└─────────────────────────────────────────────────────────┘
```

**Card Content:**
- **Logo:** 64px, left-aligned
- **Name:** 20px Semibold, Gray-900
- **Tagline:** 14px Gray-600
- **Status Row:**
  - Status: ✅ "Faol" Success badge or ⏸️ "Paused" Gray badge
  - Next billing: "Feb 25, 2026" 13px Gray-600
  - Usage stats: "127 chats processed today" (add-on specific)
- **Price:** "$49/month" 14px Gray-700
- **Actions:**
  - "Sozlamalar" Outline → Add-on settings page (e.g., SCR-AI01)
  - "Statistika" Ghost → Analytics/usage stats
  - "O'chirish" Ghost (Red) → Deactivate modal
  - [...] Menu: Pause, Upgrade plan, Manage billing

---

## 3. Add-on Detail Modal (SCR-ADD03)

### Layout
Modal (900px width), centered overlay

### UI Komponentlar

#### Header
- **Close button:** X top-right
- **Logo + Name:** 48px + 24px Semibold
- **Tagline:** 16px Gray-600

#### Tabs Navigation
- **Overview** (active) | Features | Pricing | Reviews

#### Overview Tab

**Hero Image/Video:**
- Width: 860px, height: auto (16:9 aspect)
- Screenshot or demo video
- Play button overlay (if video)

**Description:**
- Title: "What is AI Assist?" 20px Semibold
- Text: Long-form description, 16px Regular, line-height 1.6
- Bullet points: Key benefits
- Max-width: 720px

**Use Cases:**
- Title: "Ideal for..." 18px Semibold
- Icons + bullets:
  - E-commerce stores
  - SaaS products
  - High-volume support teams

**Screenshots Gallery:**
- Carousel: 3-5 screenshots
- Thumbnail navigation below
- Clickable to expand fullscreen

#### Features Tab

**Features List:**
- Title: "Features" 20px Semibold
- Checklist:
  - ✅ GPT-4 powered responses
  - ✅ 24/7 automated support
  - ✅ Custom training on your docs
  - ✅ Multilingual support
  - ✅ Analytics dashboard
  - ✅ Human handoff when needed
- Each: 16px Regular, Gray-900
- Checkmark: 20px Success-500

**Technical Requirements:**
- Title: "Requirements" 18px Semibold
- List:
  - CHATFLOW Plan: Pro or higher
  - API access: Required
  - Usage limits: 500 chats/month included

#### Pricing Tab

**Plans Table:**

| Feature | Starter | Pro | Enterprise |
|---------|---------|-----|------------|
| Price | $29/mo | $49/mo | $99/mo |
| Chats included | 200 | 500 | 2,000 |
| GPT model | GPT-3.5 | GPT-4 | GPT-4 + Custom |
| Training docs | 10 | 50 | Unlimited |
| Support | Email | Priority | Dedicated |

**Free Trial:**
- Badge: "14 kun bepul sinab ko'ring"
- No credit card required
- Full features during trial

#### Reviews Tab

**Rating Summary:**
- Stars: ⭐⭐⭐⭐⭐ 4.8 out of 5
- Total reviews: 127
- Bar chart: 5★ (85), 4★ (30), 3★ (8), 2★ (3), 1★ (1)

**Reviews List:**
- Sorted: Most helpful
- Each review:
  - Avatar + Name + Date
  - Stars: ⭐⭐⭐⭐⭐
  - Text: Review content, max 300 chars, expandable
  - Helpful: "12 ta kishi foydali deb topdi"
  - "Foydali" button (upvote)

#### Footer (sticky bottom)
- **Price:** "$49/month" 24px Bold, left
- **Action:** "Faollashtirish" Primary button (large), right
- **Trial:** "14 kun bepul" 12px Gray-600 below button

---

## 4. Activation Flow (SCR-ADD03-S01)

### Layout
Modal (600px width), multi-step wizard

### UI Komponentlar

#### Step 1: Choose Plan
- **Header:** "AI Assist — Rejani tanlang" 20px Semibold
- **Radio cards:** Starter | **Pro** (selected) | Enterprise
- Each card: Price, features list, "Tanlash" button
- "Davom etish" Primary button

#### Step 2: Configure (if needed)
- **Header:** "Sozlamalar" 20px Semibold
- **Form fields (add-on specific):**
  - For AI Assist:
    - Chatbot name: Input "AI Yordamchi"
    - Training docs: File upload or URL list
    - Greeting message: Textarea
  - For others: Different configs
- "Orqaga" Outline + "Davom etish" Primary

#### Step 3: Billing
- **Header:** "To'lov ma'lumotlari" 20px Semibold
- **Summary:**
  - Add-on: AI Assist — Pro plan
  - Price: $49/month
  - Trial: 14 days free, then $49/month
  - Next billing: Feb 25, 2026
- **Payment method:**
  - Existing card: •••• 4242 (Visa)
  - "Yangi karta qo'shish" link
- **Confirmation:**
  - ☑ "I agree to terms and conditions"
- "Faollashtirish" Primary button

#### Step 4: Success
- **Icon:** ✅ Success checkmark (64px, Success-500)
- **Title:** "AI Assist faollashtirildi!" 24px Semibold
- **Description:** "14 kun bepul sinab ko'ring. Keyingi to'lov: Feb 25, 2026"
- **Actions:**
  - "Sozlamalarni ko'rish" Primary → SCR-AI01
  - "Katalogga qaytish" Ghost → SCR-ADD01

---

## 5. Add-on Specific Settings (Examples)

### SCR-AI01: AI Assist Setup Wizard
- **Layout:** Full-width page (no sidebar)
- **Steps:** Welcome → Training → Configure → Test → Done

**Step 1: Welcome**
- Title: "Welcome to AI Assist!" 32px Bold
- Video: Setup tutorial (optional)
- "Boshlash" Primary button

**Step 2: Training**
- Title: "Train your AI" 24px Semibold
- Options:
  - Upload docs: PDF, DOCX, TXT (max 10MB each)
  - Connect Knowledge Base: ☑ "Use CHATFLOW KB articles"
  - Import from URL: Textarea (list of URLs to scrape)
- "Ma'lumotlar yuklandi: 5 hujjat, 1,240 sahifa" status
- "Davom etish" Primary (disabled until docs uploaded)

**Step 3: Configure**
- Chatbot name: "AI Yordamchi"
- Avatar: Upload 48×48px image
- Greeting: "Salom! Men AI Yordamchiman. Sizga qanday yordam bera olaman?"
- Fallback message: "Kechirasiz, tushunmadim. Operator bilan bog'lanasizmi?"
- Working hours: ☑ "24/7 faol" or Custom hours
- "Davom etish" Primary

**Step 4: Test**
- Title: "Test your AI" 24px Semibold
- Live chat preview: Chat widget simulation
- User can ask questions, AI responds
- "Test passed ✅" or "Adjust settings" feedback
- "Yakunlash" Primary

**Step 5: Done**
- ✅ "AI Assist ready!"
- "Go to dashboard" link

---

### SCR-RB01: Remove Branding
- **Layout:** Settings page
- **Toggle:** ☑ "Remove 'Powered by CHATFLOW' branding"
- **Preview:** Before/After screenshots
- **Price:** "$19/month or included in Pro plan"
- "Faollashtirish" Primary button

---

### SCR-HL01: Hire Live Agents — Dashboard
- **Layout:** Dashboard page
- **Title:** "Hire Live Agents" 24px Semibold
- **Marketplace:** List of available agents for hire
- **Agent Card:**
  - Avatar, Name, Rating ⭐ 4.9
  - Skills: Customer support, Technical, Sales
  - Languages: O'zbek, Русский, English
  - Hourly rate: "$1.5/hour"
  - "Hire now" Primary button
- **Your Agents:** List of hired agents
  - Name, Hours worked today, Cost today
  - "Pause" | "Extend hours" actions

---

## 6. Add-ons List (12 Add-ons)

### Communication
1. **Video + Voice + Screensharing** — $29/month
   - Video calls, voice calls, screen share with customers
2. **Phone Number** — $15/month + per-minute charges
   - Get local phone number, SMS & calls
3. **WhatsApp Business** — $25/month
   - WhatsApp Business API integration

### AI & Automation
4. **AI Assist** — $49/month
   - GPT-4 chatbot, 24/7 automated support
5. **Virtual Assistant** — $7.5/hour
   - Dedicated human virtual assistant for your team
6. **Hire Live Agents** — $1/hour per agent
   - Hire trained agents on-demand

### Team & Productivity
7. **Advanced Analytics** — $29/month
   - Custom reports, data export, advanced metrics
8. **Remove Branding** — $19/month
   - Remove "Powered by CHATFLOW" footer
9. **Multi-workspace** — $39/month
   - Manage multiple workspaces from one account

### E-commerce
10. **Shopping Cart** — $35/month
    - In-chat product catalog, cart, checkout
11. **In-Chat Payments** — $25/month + transaction fees
    - Accept payments in chat (Stripe, PayPal, Click, Payme)
12. **SMS Campaigns** — $29/month + per-SMS charges
    - Bulk SMS marketing campaigns

---

## 7. Components

### Add-on Card
- Size: 360×420px
- Screenshot: 360×180px (full-width)
- Content padding: 20px
- Border: 1px Gray-200
- Radius: 12px
- Shadow: shadow-sm, shadow-md hover

### Add-on Logo
- Size: 48px circle or square
- Border: 1px Gray-200 (optional)
- Background: White or brand color

### Price Badge
- Font: 20px Bold, Gray-900
- "/month" or "/hour" suffix: 14px Regular, Gray-600
- Trial badge below: "14 kun bepul" 12px Success-500, Success-50 bg

### Rating Display
- Stars: ⭐⭐⭐⭐⭐ (18px icons)
- Score: "4.8" 14px Semibold, Gray-700
- Reviews count: "(127 reviews)" 13px Gray-500

---

## 8. User Flow

```
[Dashboard] → [Sidebar: Add-ons] → [SCR-ADD01 Catalog]
                                          ↓
                    ┌─────────────────────┼─────────────────────┐
                    ↓                     ↓                     ↓
            [Browse catalog]      [Active add-ons]      [Search/Filter]
                    ↓                     ↓                     ↓
            [Click add-on]        [SCR-ADD02 List]      [Filtered results]
                    └─────────────────────┴─────────────────────┘
                                          ↓
                                [SCR-ADD03 Detail Modal]
                                          ↓
                        ┌─────────────────┼─────────────────┐
                        ↓                 ↓                 ↓
                [Overview]        [Features]        [Pricing]
                        └─────────────────┬─────────────────┘
                                          ↓
                                [Faollashtirish button]
                                          ↓
                                [SCR-ADD03-S01 Activation Wizard]
                                          ↓
                        [Step 1: Plan → Step 2: Config → Step 3: Billing]
                                          ↓
                                [Success! Add-on active]
                                          ↓
                                [Go to add-on settings or dashboard]
```

---

## 9. Texnik Talablar

- **Billing Integration:** Stripe + Click + Payme
- **Trial Management:** 14-day free trial, auto-convert to paid
- **Usage Tracking:** Track add-on usage (chats, minutes, SMS, etc.)
- **Webhooks:** Notify add-ons of events (chat started, message received)
- **API Access:** Add-ons can access CHATFLOW API
- **Sandbox Mode:** Test add-ons before going live
- **Marketplace API:** Third-party developers can submit add-ons (future)

---

## 10. Rollarga ko'ra Ruxsatlar

| Action | Admin | Manager | Operator |
|--------|-------|---------|----------|
| View add-ons catalog | ✅ | ✅ | ⚠️ (read) |
| Activate add-ons | ✅ | ⚠️ (with approval) | ❌ |
| Configure add-ons | ✅ | ⚠️ (limited) | ❌ |
| Deactivate add-ons | ✅ | ❌ | ❌ |
| Manage billing | ✅ | ❌ | ❌ |
| View usage stats | ✅ | ✅ | ⚠️ (own) |
| Submit reviews | ✅ | ✅ | ✅ |

---

**Oxirgi yangilanish:** 2026-02-11
**Holat:** Production Ready
