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
**Lines:** 475 → 1650+ (expanded with API, Database, Components, Accessibility)  
**Holat:** ✅ COMPLETE

---

## 11. API ENDPOINTS

### GET /api/v1/marketplace/addons

Fetch all available add-ons in marketplace

**Query params:**
- `category`: communication | ai-automation | analytics | team | ecommerce | all
- `sort`: popular | price_low | price_high | newest
- `page`: 1
- `limit`: 12

**Response:**
```json
{
  "addons": [
    {
      "id": "addon_ai_assist",
      "name": "AI Assist",
      "slug": "ai-assist",
      "tagline": "GPT-powered chatbot",
      "description": "Automate customer support with AI...",
      "category": "ai-automation",
      "developer": {
        "name": "CHATFLOW Labs",
        "logo_url": "https://...",
        "verified": true
      },
      "logo_url": "https://cdn.../ai-assist-logo.png",
      "screenshot_url": "https://cdn.../ai-assist-screenshot.png",
      "rating": 4.8,
      "reviews_count": 127,
      "active_installs": 3420,
      "pricing": {
        "type": "subscription",
        "price_monthly": 49,
        "price_yearly": 490,
        "currency": "USD",
        "free_trial_days": 14
      },
      "features": [
        "GPT-4 powered responses",
        "Custom training data",
        "Multi-language support",
        "Handoff to agent"
      ],
      "badges": ["Popular", "CHATFLOW Verified"],
      "created_at": "2026-01-10T09:00:00Z"
    }
  ],
  "meta": {
    "total": 28,
    "page": 1,
    "per_page": 12
  }
}
```

### GET /api/v1/marketplace/addons/:slug

Fetch single add-on detail

**Response:**
```json
{
  "addon": {
    "id": "addon_ai_assist",
    "name": "AI Assist",
    "slug": "ai-assist",
    "tagline": "GPT-powered chatbot",
    "description": "Automate customer support with AI...",
    "long_description": "<p>AI Assist integrates GPT-4...</p>",
    "category": "ai-automation",
    "developer": { ... },
    "logo_url": "https://...",
    "screenshots": [
      "https://cdn.../screenshot1.png",
      "https://cdn.../screenshot2.png"
    ],
    "rating": 4.8,
    "reviews_count": 127,
    "active_installs": 3420,
    "pricing": {
      "type": "subscription",
      "plans": [
        {
          "id": "plan_starter",
          "name": "Starter",
          "price_monthly": 49,
          "price_yearly": 490,
          "features": ["1000 AI messages/month", "5 custom prompts"]
        },
        {
          "id": "plan_pro",
          "name": "Pro",
          "price_monthly": 99,
          "price_yearly": 990,
          "features": ["5000 AI messages/month", "Unlimited prompts", "Priority support"]
        }
      ],
      "free_trial_days": 14
    },
    "features": [ ... ],
    "requirements": {
      "min_plan": "Pro",
      "min_agents": 3
    },
    "permissions": [
      "read_conversations",
      "send_messages",
      "access_contacts"
    ],
    "support": {
      "email": "support@chatflow.uz",
      "docs_url": "https://docs.../ai-assist",
      "video_url": "https://youtube.com/..."
    },
    "changelog_url": "https://docs.../changelog",
    "privacy_policy_url": "https://...",
    "terms_url": "https://...",
    "created_at": "2026-01-10T09:00:00Z",
    "updated_at": "2026-02-05T10:00:00Z"
  }
}
```

### GET /api/v1/marketplace/reviews/:addon_id

Fetch reviews for add-on

**Query params:**
- `sort`: recent | helpful | rating_high | rating_low
- `page`: 1
- `limit`: 10

**Response:**
```json
{
  "reviews": [
    {
      "id": "rev_abc123",
      "user": {
        "name": "Jahongir O.",
        "avatar_url": "https://...",
        "workspace_size": "5-10 agents"
      },
      "rating": 5,
      "title": "AI Assist juda yaxshi!",
      "comment": "Chatbotni 3 kun ichida configure qildim...",
      "helpful_count": 45,
      "created_at": "2026-01-20T14:00:00Z"
    }
  ],
  "meta": {
    "total": 127,
    "page": 1,
    "per_page": 10,
    "avg_rating": 4.8
  }
}
```

### POST /api/v1/marketplace/reviews/:addon_id

Submit review (must be active subscriber)

**Request:**
```json
{
  "rating": 5,
  "title": "AI Assist juda yaxshi!",
  "comment": "Chatbotni 3 kun ichida configure qildim..."
}
```

**Response:** 201 Created

### POST /api/v1/marketplace/reviews/:review_id/helpful

Mark review as helpful

### GET /api/v1/addons/active

Fetch workspace's active add-ons

**Response:**
```json
{
  "addons": [
    {
      "id": "addon_ai_assist",
      "name": "AI Assist",
      "logo_url": "https://...",
      "status": "active",
      "plan": {
        "id": "plan_pro",
        "name": "Pro",
        "price": 99
      },
      "activated_at": "2026-02-01T10:00:00Z",
      "trial_ends_at": "2026-02-15T23:59:59Z",
      "next_billing_date": "2026-03-01T00:00:00Z",
      "usage": {
        "ai_messages_used": 2345,
        "ai_messages_limit": 5000,
        "usage_percent": 47
      },
      "settings_url": "/addons/ai-assist/settings"
    }
  ]
}
```

### POST /api/v1/addons/:addon_id/activate

Activate add-on

**Request:**
```json
{
  "plan_id": "plan_pro",
  "billing_cycle": "monthly",
  "config": {
    "api_key": "gpt_..."
  }
}
```

**Response:** 201 Created

### PUT /api/v1/addons/:addon_id/configure

Update add-on configuration

**Request:**
```json
{
  "config": {
    "api_key": "gpt_new_key...",
    "auto_handoff_threshold": 0.7
  }
}
```

### DELETE /api/v1/addons/:addon_id

Deactivate add-on

**Response:** 204 No Content

### POST /api/v1/addons/:addon_id/cancel-trial

Cancel trial early

### POST /api/v1/addons/:addon_id/upgrade

Upgrade plan

**Request:**
```json
{
  "plan_id": "plan_enterprise"
}
```

---

## 12. DATABASE SCHEMA

**Table: `marketplace_addons`**

(Add-on catalog)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `slug` | VARCHAR(100) | URL slug |
| `name` | VARCHAR(100) | Add-on name |
| `tagline` | VARCHAR(150) | Short tagline |
| `description` | TEXT | Short description |
| `long_description` | TEXT | HTML long description |
| `category` | VARCHAR(50) | Category |
| `developer_id` | UUID | FK → developers.id |
| `logo_url` | TEXT | Logo URL |
| `screenshot_url` | TEXT | Primary screenshot |
| `screenshots` | TEXT[] | Array of screenshot URLs |
| `rating` | DECIMAL(2,1) | Avg rating 0.0-5.0 |
| `reviews_count` | INTEGER | Total reviews |
| `active_installs` | INTEGER | Total active workspaces |
| `pricing_type` | ENUM | subscription/one-time/free |
| `pricing_data` | JSONB | Plans array with prices |
| `free_trial_days` | INTEGER | Trial days |
| `features` | TEXT[] | Features list |
| `badges` | TEXT[] | ["Popular", "Verified"] |
| `requirements` | JSONB | {min_plan, min_agents} |
| `permissions` | TEXT[] | Required permissions |
| `support_email` | VARCHAR(100) | Support email |
| `docs_url` | TEXT | Documentation URL |
| `video_url` | TEXT | Demo video |
| `changelog_url` | TEXT | Changelog URL |
| `privacy_policy_url` | TEXT | Privacy URL |
| `terms_url` | TEXT | Terms URL |
| `status` | ENUM | active/suspended |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |

**Indexes:**
- `idx_marketplace_addons_category` on `category`
- `idx_marketplace_addons_status` on `status`
- UNIQUE `slug`

**Table: `workspace_addons`**

(Active add-ons per workspace)

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `workspace_id` | UUID | FK → workspaces.id |
| `addon_id` | UUID | FK → marketplace_addons.id |
| `plan_id` | VARCHAR(50) | Selected plan |
| `billing_cycle` | ENUM | monthly/yearly |
| `status` | ENUM | trial/active/suspended/cancelled |
| `config` | JSONB | Configuration data |
| `activated_at` | TIMESTAMP | Activation time |
| `trial_ends_at` | TIMESTAMP | Trial end (nullable) |
| `next_billing_date` | TIMESTAMP | Next billing |
| `cancelled_at` | TIMESTAMP | Cancellation time |
| `usage_data` | JSONB | Usage metrics |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |

**Indexes:**
- `idx_workspace_addons_workspace` on `workspace_id`
- `idx_workspace_addons_addon` on `addon_id`
- `idx_workspace_addons_status` on `status`
- UNIQUE `workspace_id, addon_id`

**Table: `addon_reviews`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `addon_id` | UUID | FK → marketplace_addons.id |
| `workspace_id` | UUID | FK → workspaces.id |
| `user_id` | UUID | FK → users.id |
| `rating` | INTEGER | 1-5 stars |
| `title` | VARCHAR(150) | Review title |
| `comment` | TEXT | Review text |
| `helpful_count` | INTEGER | Helpful votes |
| `created_at` | TIMESTAMP | Created |
| `updated_at` | TIMESTAMP | Updated |

**Indexes:**
- `idx_addon_reviews_addon` on `addon_id`
- `idx_addon_reviews_rating` on `rating`
- UNIQUE `addon_id, workspace_id` (one review per workspace)

**Table: `addon_review_votes`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `review_id` | UUID | FK → addon_reviews.id |
| `user_id` | UUID | FK → users.id |
| `vote_type` | ENUM | helpful |
| `created_at` | TIMESTAMP | Created |

**Indexes:**
- `idx_review_votes_review` on `review_id`
- UNIQUE `review_id, user_id`

---

## 13. FIGMA COMPONENTS

**Component Tree:**
```
addons-marketplace/
├── screens/
│   ├── SCR-ADD01 (marketplace-catalog)
│   │   ├── header (title + actions)
│   │   ├── filter-bar
│   │   │   ├── category-tabs
│   │   │   └── sort-dropdown
│   │   └── addons-grid (3-col)
│   │       └── addon-card × N
│   ├── SCR-ADD02 (active-addons-list)
│   │   ├── header
│   │   └── active-addons-table
│   │       ├── table-header (addon/plan/status/usage/actions)
│   │       └── addon-row × N
│   ├── SCR-ADD03 (addon-detail-page)
│   │   ├── addon-header
│   │   │   ├── logo-and-info
│   │   │   ├── rating-and-reviews
│   │   │   └── primary-cta (Faollashtirish)
│   │   ├── screenshots-carousel
│   │   ├── tabs-navigation (Overview/Features/Pricing/Reviews)
│   │   └── tab-content
│   │       ├── overview-tab (description + features)
│   │       ├── features-tab (detailed features list)
│   │       ├── pricing-tab (plans comparison table)
│   │       └── reviews-tab (reviews list)
│   └── SCR-ADD04 (addon-settings-page)
│       ├── header (addon name + deactivate button)
│       ├── sidebar-nav (General/API/Usage/Billing)
│       └── settings-content
│           ├── general-tab
│           ├── api-config-tab
│           ├── usage-metrics-tab
│           └── billing-tab
├── modals/
│   ├── activation-wizard-modal (3 steps)
│   │   ├── step-1-select-plan
│   │   │   └── plan-cards (radio select)
│   │   ├── step-2-configure
│   │   │   └── config-form (API keys, settings)
│   │   └── step-3-billing
│   │       └── payment-method-select + confirm
│   ├── deactivate-confirm-modal
│   │   ├── warning-message
│   │   └── checkbox "Data will be deleted"
│   ├── write-review-modal
│   │   ├── star-rating-input
│   │   ├── title-input
│   │   ├── comment-textarea
│   │   └── footer (cancel + submit)
│   └── upgrade-plan-modal
│       ├── current-plan-card
│       ├── new-plan-card
│       ├── proration-calculation
│       └── footer (cancel + confirm upgrade)
├── components/
│   ├── addon-card (marketplace, 360×420px)
│   │   ├── screenshot-image (360×180px)
│   │   ├── logo-48px + name + tagline
│   │   ├── rating-stars + reviews-count
│   │   ├── price-tag ($/month)
│   │   ├── free-trial-badge
│   │   └── cta-button (Faollashtirish)
│   ├── active-addon-row (table row)
│   │   ├── addon-cell (logo + name)
│   │   ├── plan-cell (Starter/Pro/Enterprise)
│   │   ├── status-badge (trial/active/suspended)
│   │   ├── usage-progress-bar (2345/5000)
│   │   └── actions (Settings/Deactivate)
│   ├── plan-card (pricing tab, 280×360px)
│   │   ├── plan-name (18px bold)
│   │   ├── price-display ($49/month)
│   │   ├── features-checklist (✓ items)
│   │   └── select-button (radio or CTA)
│   ├── review-card
│   │   ├── user-info (avatar + name + workspace size)
│   │   ├── rating-stars + date
│   │   ├── review-title (16px semibold)
│   │   ├── review-comment (14px)
│   │   └── helpful-button (👍 45)
│   ├── screenshot-carousel
│   │   ├── main-image (800×450px)
│   │   ├── thumbnail-strip (bottom)
│   │   └── prev/next-arrows
│   ├── usage-progress-bar
│   │   ├── label "AI messages: 2345 / 5000"
│   │   ├── progress-fill (47% width)
│   │   └── percentage-text "47%"
│   ├── badge-chip (Popular/Verified/New)
│   │   └── bg color + icon + text
│   └── star-rating-display (read-only)
│       └── filled/empty stars (⭐⭐⭐⭐☆)
```

**Component Variants:**
- `addon-card` states: default / hover (scale 1.02, shadow) / activated (green checkmark badge)
- `status-badge`: trial (blue) / active (green) / suspended (orange) / cancelled (red)
- `plan-card` states: default / selected (primary border 3px)
- `review-card` states: default / helpful-voted (green thumb)

---

## 14. MICRO-INTERACTIONS

| Element | Animation | Timing |
|---------|-----------|--------|
| **Addon card hover** | scale 1 → 1.02, shadow-sm → shadow-xl | 200ms ease |
| **Addon card click** | scale 1 → 0.98 → 1.02 (press effect) | 150ms ease |
| **Price tag hover** | bg primary-50 → primary-100 | 150ms ease |
| **Plan card select** | border gray → primary 3px, scale 1 → 1.03 → 1 | 250ms ease-out |
| **Activation wizard step** | fade-out left, fade-in right (slide transition) | 300ms ease |
| **Progress bar fill** | width animate from 0 → X% on mount | 800ms ease-out |
| **Star rating hover** | fill stars 1 by 1 on hover | 100ms ease |
| **Star rating click** | scale 1 → 1.3 → 1, fill color yellow | 300ms ease-out |
| **Badge appear** | scale 0 → 1.1 → 1 (bounce) | 300ms ease-out |
| **Helpful button click** | thumb scale 1 → 1.2 → 1 + increment count | 300ms ease |
| **Deactivate modal** | backdrop fade 0 → 50%, modal scale 0.95 → 1 | 200ms ease-out |
| **Usage warning (90%)** | progress bar flash red 3x | 1s ease |
| **Screenshot carousel transition** | slide left/right, fade cross-dissolve | 400ms ease-in-out |
| **Trial badge pulse** | scale 1 → 1.05 → 1, infinite loop | 2s ease |
| **Success checkmark** | path draw animation (stroke-dashoffset) | 500ms ease-out |
| **Addon activated toast** | slide-in from top, auto-dismiss 5s | 300ms ease-out |

---

## 15. ACCESSIBILITY

### Keyboard Navigation

**Marketplace Catalog:**
- **Tab:** Navigate through filter tabs → sort → addon cards
- **Enter/Space:** Open addon detail, select plan
- **Arrow keys (←→) in tabs:** Switch category tabs
- **Escape:** Close modals

**Addon Detail Page:**
- **Tab:** Navigate through tabs → screenshots → reviews
- **Arrow keys (←→):** Navigate screenshot carousel
- **Ctrl/Cmd + Enter:** Activate addon (quick action)

**Activation Wizard:**
- **Tab:** Navigate form fields → next button
- **Enter:** Submit current step
- **Escape:** Cancel wizard
- Focus trap: Tab cycles within modal

### ARIA Labels and Roles

**Marketplace:**
- Grid: `role="list"`, `aria-label="Available add-ons"`
- Addon card: `role="article"`, `aria-label="{Name}, {tagline}, {price}/month, rated {rating} stars"`
- Category tabs: `role="tablist"`, `aria-selected`
- Sort dropdown: `role="combobox"`, `aria-expanded`

**Addon Detail:**
- Star rating: `role="img"`, `aria-label="Rated 4.8 out of 5 stars"`
- Reviews section: `role="list"`, review card `role="listitem"`
- Helpful button: `aria-label="Mark review as helpful"`, `aria-pressed` after click
- Screenshot carousel: `role="region"`, `aria-label="Add-on screenshots"`, `aria-live="polite"` for current slide

**Activation Wizard:**
- Wizard: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="wizard-title"`
- Steps: Progress indicator `role="progressbar"`, `aria-valuenow="2"`, `aria-valuemax="3"`
- Plan cards: `role="radio"`, `aria-checked`

### Screen Reader Announcements

**Marketplace:**
- Page load: "Add-ons marketplace loaded. 28 add-ons available."
- Filter applied: "Showing 12 AI & Automation add-ons."
- Addon activated: "AI Assist activated successfully. 14-day trial started."

**Addon Detail:**
- Tab change: "Showing Features tab."
- Review submitted: "Review submitted successfully. Thank you!"
- Screenshot changed: "Screenshot 2 of 5."

**Activation Wizard:**
- Step change: "Step 2 of 3: Configure settings."
- Success: "Add-on activated. Redirecting to settings page."

### Color Contrast (WCAG AA)

- Addon name #111827 on white: 11.7:1 (AAA)
- Price text #4F46E5 on white: 5.8:1 (AA)
- Status badge "Active" white on #10B981: 4.9:1 (AA)
- Review comment #6B7280 on white: 5.3:1 (AA)
- All interactive elements: 4.5:1+ contrast

### Focus Indicators

- All focusable elements: 2px solid #4F46E5 outline, 4px offset
- Addon card focus: 3px primary-600 border
- Plan card focus: 3px primary-600 border + shadow-lg

### Touch Targets

- Mobile buttons: min 44×44px
- Desktop buttons: min 40×40px
- Addon cards: 420px height (sufficient)
- Star rating: each star 40×40px

---

## 16. PERFORMANCE

### Loading Targets
- Marketplace page load: < 1.2s
- Addon detail page: < 900ms
- Activation wizard: < 600ms
- Screenshot carousel transition: < 400ms
- Review submit: < 500ms

### Optimization
- **CDN:** All addon logos, screenshots served from CDN (WebP format)
- **Lazy load:** Screenshot images below fold, addon cards (Intersection Observer)
- **Caching:** Addon catalog cached 1 hour, addon detail 15min
- **Pagination:** 12 addons per page
- **Database indexes:** Category, status, rating indexes
- **Search:** Full-text search on name, tagline, description (PostgreSQL)

---

## 17. BUSINESS LOGIC

### Trial Management
- 14-day free trial for all subscription add-ons
- Trial starts on activation
- Auto-convert to paid subscription after trial (Stripe subscription)
- Email reminders: 7 days before, 1 day before trial end
- Cancel trial anytime (revert to free/original state)

### Billing
- Monthly/yearly billing cycles
- Proration on plan upgrade/downgrade
- Add-on charges separate from workspace plan
- Invoice includes: Workspace plan + Add-on 1 + Add-on 2...
- Payment methods: Stripe (card), Click, Payme

### Usage Tracking
- Track metrics per add-on (AI messages, SMS sent, video minutes)
- Usage limits enforced per plan
- Soft limit: 90% usage warning email
- Hard limit: 100% usage blocks feature + upgrade prompt

### Reviews & Ratings
- Only active subscribers can submit reviews
- One review per workspace per add-on
- Edit review anytime
- Helpful votes (anonymous, one per user)
- Avg rating recalculated on each review submit/update

### Developer Program (Future)
- Third-party developers submit add-ons
- Approval process (CHATFLOW review)
- Revenue share: 70% developer, 30% CHATFLOW
- Sandbox environment for testing
- Webhook notifications for events

---

## 18. USER FLOWS

### Flow 1: Browse & Activate Add-on (Admin)
1. Admin navigates to "Qo'shimcha xizmatlar" (SCR-ADD01)
2. Sees marketplace with 28 add-ons
3. Clicks "AI & Automation" category tab
4. Sees 12 AI add-ons
5. Notices "AI Assist" card with 4.8 stars, $49/month, "14 kun trial"
6. Clicks "Batafsil" button
7. Addon detail page (SCR-ADD03) opens
8. Views screenshots carousel (5 images)
9. Switches to "Features" tab: reads feature list
10. Switches to "Pricing" tab: sees 3 plans (Starter $49, Pro $99, Enterprise $299)
11. Selects "Pro" plan (radio button)
12. Clicks "Faollashtirish" button
13. Activation Wizard Modal opens (Step 1: Plan confirmed)
14. Step 2: Configure - fills API key field
15. Step 3: Billing - payment method already saved (Stripe card)
16. Clicks "Faollashtir va trial boshlash"
17. Success toast: "AI Assist faollashtirildi! 14 kunlik trial boshlandi."
18. Redirected to addon settings page (SCR-ADD04)
19. Configures additional settings (auto-handoff threshold, custom prompts)
20. Saves settings
21. AI Assist now active in conversations (widget shows AI suggestions)

### Flow 2: Monitor Usage & Upgrade Plan
1. Admin checks active add-ons (SCR-ADD02)
2. Sees "AI Assist" row: Pro plan, Active status, Usage bar 4750/5000 (95% used)
3. Warning badge "Limit yaqinlashdi"
4. Clicks "Sozlamalar" action
5. Goes to addon settings (SCR-ADD04)
6. Switches to "Usage" tab: sees chart showing 4750 AI messages used this month
7. Realizes needs more quota
8. Clicks "Planini yangilash" button
9. Upgrade Plan Modal opens
10. Current: Pro ($99, 5000 messages) → New: Enterprise ($299, 20,000 messages)
11. Shows proration: $155 prorated charge (remaining 18 days)
12. Confirms upgrade
13. Success: Plan upgraded to Enterprise, quota now 20,000
14. Can continue using AI Assist without limits

---

**Oxirgi yangilanish:** 2026-02-11  
**Lines:** 475 → 1650+  
**Holat:** ✅ COMPLETE
