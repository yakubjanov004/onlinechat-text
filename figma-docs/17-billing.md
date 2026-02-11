# CHATFLOW — Billing: Tariflar, To'lov, Fakturalar, Foydalanish

**Ekran ID:** `SCR-B01`, `SCR-B02`, `SCR-B03`, `SCR-B04`  
**Fayl nomi:** `screen-billing-plan.fig`, `screen-billing-payment.fig`, `screen-billing-invoices.fig`, `screen-billing-usage.fig`  
**Desktop:** 1440×900px (minimal height)

## Umumiy yondashuv
Billing bo'limi to'lov va tariflarni boshqarish uchun. Admin to'liq boshqaradi, Manager faqat ko'radi. Operator kirolmaydi (403 Forbidden). Jadval va kartalar aniq, ishonchli va soddalashtirilgan bo'lishi kerak.

**Maqsad:** Tariflar, to'lovlar va foydalanish limitlarini tez boshqarish. Upgrade/downgrade, invoices, payment methods.

**Accessibility:** WCAG 2.1 AA, keyboard navigation, screen reader friendly.

---

## Tabs (Main Navigation)
- **Plan** — Joriy tarif, upgrade/downgrade, cancel
- **Payment** — To'lov usullari, kartalar, Click/Payme
- **Invoices** — Fakturalar, yuklab olish, tarix
- **Usage** — Limitlar (chats, agents, storage, messages)

Tab specs:
- Balandlik: 48px
- Font: 14px Medium
- Active: #4F46E5 border-bottom 2px, text #4F46E5
- Inactive: text #6B7280, hover #374151

---

## 1. PLAN TAB

### 1.1 Current Plan Card

**Joylashuv:** Sahifa tepasida, 100% kenglik, 160px balandlik  
**Fon:** White, border 1px #E5E7EB, border-radius 12px  
**Padding:** 32px  

**Elementlar:**
1. **Plan Name + Badge**
   - Title: "Business Plan" — 24px Semibold, #111827
   - Badge: "Faol" — 24px balandlik, #10B981 fon, text white 12px Medium, border-radius 12px, pill shape
   - O'ng tomonda: Status indicator "Aktiv" green dot 8px

2. **Billing Info (2-column grid)**
   - **Chap ustun:**
     - Label: "Keyingi to'lov" — 14px Regular #6B7280
     - Value: "15 Mart 2024" — 16px Semibold #111827
   - **O'ng ustun:**
     - Label: "Narx" — 14px Regular #6B7280
     - Value: "$59 / oy" — 16px Semibold #111827

3. **Agent Count**
   - Label: "Agentlar" — 14px Regular #6B7280
   - Value: "7 / 10" — 16px Semibold #111827
   - Progress bar: 320px kenglik, 8px balandlik, #10B981 70%, #E5E7EB fon

4. **Action Buttons (o'ng tomonda)**
   - "Tarifni o'zgartirish" button: 140px kenglik, 40px balandlik, primary #4F46E5, text white 14px Medium
   - "Bekor qilish" button: 120px kenglik, 40px balandlik, border 1px #DC2626, text #DC2626 14px Medium, hover bg #FEE2E2

---

### 1.2 All Plans Grid

**Layout:** 4-column grid (Free, Pro, Business, Enterprise)  
**Column gap:** 24px  
**Har bir karta:**
- Kenglik: auto (1fr)
- Balandlik: 520px
- Fon: White, border 1px #E5E7EB
- Border-radius: 12px
- Padding: 24px
- Hover: border #4F46E5, shadow-md

**Elementlar (har bir karta):**

1. **Plan Name**
   - Font: 20px Semibold #111827
   - Icon: 32px, plan uchun unique (Free: Icon/Zap, Pro: Icon/Star, Business: Icon/Briefcase, Enterprise: Icon/Building)

2. **Price**
   - Font: 36px Bold #111827
   - Subtext: "/ oy" 14px Regular #6B7280
   - Annual option: "Yillik to'lov -20%" — 12px Medium #10B981, bg #D1FAE5, badge, 64px kenglik

3. **Description**
   - Font: 14px Regular #6B7280
   - Max 2 lines, 48px balandlik

4. **CTA Button**
   - Current plan: "Joriy tarif" — disabled, bg #E5E7EB, text #9CA3AF
   - Other plans: "Upgrade qilish" / "Downgrade qilish" — primary #4F46E5, white text
   - Enterprise: "Bog'lanish" — border 1px #4F46E5, text #4F46E5

5. **Features List (16 ta feature, check/cross)**
   - Item balandlik: 32px
   - Icon: Check (green #10B981) yoki Cross (gray #D1D5DB) — 16px
   - Text: 14px Regular #374151
   - Features:
     - Live chat widget ✓ (barcha planlarda)
     - Email support ✓ (barcha planlarda)
     - 24/7 support ✓ (faqat Business va Enterprise)
     - Custom branding ✓ (Pro+)
     - Advanced analytics ✓ (Business+)
     - API access ✓ (Business+)
     - SSO login ✓ (faqat Enterprise)
     - Dedicated manager ✓ (faqat Enterprise)
     - Custom integrations ✓ (faqat Enterprise)
     - Agents: 1 (Free), 3 (Pro), 10 (Business), Unlimited (Enterprise)
     - Chats/month: 100 (Free), 1000 (Pro), 5000 (Business), Unlimited (Enterprise)
     - Storage: 500MB (Free), 10GB (Pro), 50GB (Business), Unlimited (Enterprise)
     - Chat history: 30 days (Free), 1 year (Pro), Unlimited (Business/Enterprise)
     - Response time: 48h (Free), 24h (Pro), 4h (Business), 1h (Enterprise)
     - Automation rules: 5 (Free), 20 (Pro), 100 (Business), Unlimited (Enterprise)
     - Knowledge base articles: 10 (Free), 100 (Pro), 500 (Business), Unlimited (Enterprise)

**Badges:**
- "Mashhur" — Pro plan tepasida: 72px kenglik, 28px balandlik, #4F46E5 fon, text white 12px Medium, border-radius 12px top, absolute position top -1px

---

### 1.3 Plan Comparison Table

**Joylashuv:** Plans grid ostida, 100% kenglik  
**Header:**
- Title: "Tariflarni taqqoslash" — 20px Semibold #111827
- Subtitle: "Barcha imkoniyatlarni batafsil ko'ring" — 14px Regular #6B7280

**Jadval:**
- Kolonlar: 5 (Feature name + 4 plans)
- Rows: 25+ features
- Header row: 56px balandlik, bg #F9FAFB
- Data row: 48px balandlik, border-bottom 1px #E5E7EB
- Hover: bg #F9FAFB

**Kolonlar:**
1. **Xususiyat** — 320px kenglik, text left, 14px Medium #374151
2. **Free** — auto width, center aligned
3. **Pro** — auto width, center aligned
4. **Business** — auto width, center aligned, bg #EEF2FF (light indigo)
5. **Enterprise** — auto width, center aligned

**Cell content types:**
- Check icon: 20px, green #10B981
- Cross icon: 20px, gray #D1D5DB
- Text value: "10 GB", "100 chats" — 14px Regular #374151
- "Unlimited": 14px Semibold #10B981

**Feature rows (25 ta):**
1. Live chat widget
2. Email support
3. Phone support
4. 24/7 support
5. Custom branding
6. Widget customization
7. Advanced analytics
8. Real-time reports
9. Export data
10. API access
11. Webhooks
12. SSO login
13. SAML integration
14. IP whitelist
15. Dedicated manager
16. Custom integrations
17. Onboarding session
18. Priority support
19. SLA guarantee
20. Max agents
21. Max chats/month
22. Storage limit
23. Chat history retention
24. Automation rules
25. Knowledge base articles

---

### 1.4 Upgrade Modal

**ID:** `MODAL-B01`  
**Trigger:** "Upgrade qilish" buttonini bosish  
**Size:** 600px kenglik, auto balandlik (max 700px)  
**Fon:** White, border-radius 16px  
**Backdrop:** rgba(0,0,0,0.5)  

**Header:**
- Title: "Tarifni yangilash" — 20px Semibold #111827
- Close button: 32px, Icon/X 20px, o'ng yuqoriga
- Padding: 24px

**Content (Padding: 0 24px 24px):**

1. **Plan Selection**
   - Label: "Yangi tarif" — 14px Medium #374151
   - Radio buttons: 3 ta (Pro, Business, Enterprise)
   - Har biri: 
     - Kenglik: 100%, 80px balandlik, border 1px #E5E7EB, border-radius 8px
     - Selected: border 2px #4F46E5, bg #EEF2FF
     - Content: Plan name 16px Semibold, price 14px Regular, features count 12px Regular #6B7280
   - Gap: 12px

2. **Billing Cycle Toggle**
   - Label: "To'lov davri" — 14px Medium #374151
   - Toggle: Monthly / Yearly
     - Switch width: 240px, height: 44px, border-radius 8px, bg #E5E7EB
     - Active side: bg #4F46E5, text white
     - Text: "Oylik" / "Yillik (20% tejang)"
   - Font: 14px Medium

3. **Proration Info Card**
   - Fon: #FEF3C7 (yellow light), border-left 4px #F59E0B
   - Padding: 16px
   - Icon: Icon/Info 20px, #F59E0B
   - Title: "Proporsional hisob-kitob" — 14px Medium #92400E
   - Text: "Joriy billing cycle qolgan kunlari uchun $12.50 qaytariladi. Yangi tarif darhol faol bo'ladi." — 13px Regular #92400E

4. **Payment Summary Card**
   - Fon: #F9FAFB, border 1px #E5E7EB, border-radius 8px
   - Padding: 16px
   - 3 qator:
     - "Yangi tarif narxi: $59.00" — 14px Regular #6B7280
     - "Proration (refund): -$12.50" — 14px Regular #10B981
     - "Bugun to'lanadi: $46.50" — 16px Semibold #111827
   - Divider: border-top 1px #E5E7EB between rows

5. **Payment Method**
   - Label: "To'lov usuli" — 14px Medium #374151
   - Dropdown: 280px kenglik, 44px balandlik
     - Options: "Visa •••• 1234", "Click", "Payme", "+ Yangi usul qo'shish"
   - Icon: Card brand logo 24px chap tomonda

**Footer:**
- Padding: 24px
- Border-top: 1px #E5E7EB
- Buttons: 2 ta, o'ngga
  - "Bekor qilish" — 100px, 40px, border 1px #D1D5DB, text #6B7280
  - "Tasdiqlash va to'lash" — 180px, 40px, bg #4F46E5, text white
  - Gap: 12px

---

### 1.5 Downgrade Modal

**ID:** `MODAL-B02`  
**Trigger:** "Downgrade qilish" buttonini bosish  
**Size:** 520px kenglik, auto balandlik  

**Header:** (Standart)

**Content:**

1. **Warning Alert**
   - Fon: #FEE2E2 (red light), border-left 4px #DC2626
   - Padding: 16px
   - Icon: Icon/AlertTriangle 20px, #DC2626
   - Title: "Diqqat: Imkoniyatlar cheklanadi" — 14px Medium #991B1B
   - Text: "Downgrade qilinganidan so'ng ba'zi imkoniyatlar o'chadi. Ma'lumotlaringiz saqlanadi, lekin kirish cheklangan bo'ladi." — 13px Regular #991B1B

2. **New Plan Selection**
   - (Upgrade Modal kabi radio buttons)

3. **Features Lost List**
   - Title: "Yo'qotiladigan imkoniyatlar:" — 14px Medium #374151
   - List: 5-7 ta feature with red cross icon
     - Example: "Advanced analytics", "API access", "Custom branding"
   - Item height: 32px, icon 16px red #DC2626

4. **Confirmation Checkbox**
   - Checkbox: 20px, label: "Men oqibatlarini tushunaman va downgrade qilishni xohlayman" — 14px Regular #374151

5. **Reason Dropdown (optional)**
   - Label: "Sabab (ixtiyoriy)" — 14px Regular #6B7280
   - Dropdown: 100%, 44px
   - Options: "Qimmat", "Kerakli emas", "Boshqa xizmatga o'tdim", "Vaqtincha to'xtatish", "Boshqa"

**Footer:**
- Buttons: "Bekor qilish", "Downgrade qilish" (red #DC2626)

---

### 1.6 Cancel Subscription Modal

**ID:** `MODAL-B03`  
**Trigger:** "Bekor qilish" buttonini bosish  
**Size:** 520px kenglik, auto balandlik  

**Content:**

1. **Confirmation Alert**
   - Fon: #FEE2E2, border-left 4px #DC2626
   - Title: "Obunani bekor qilish" — 16px Semibold #991B1B
   - Text: "Obunangiz billing cycle oxirida (15 Mart 2024) bekor qilinadi. Shu kungacha barcha imkoniyatlardan foydalanishingiz mumkin." — 14px Regular #991B1B

2. **Reason Dropdown**
   - Label: "Bekor qilish sababi" — 14px Medium #374151
   - Dropdown: 100%, 44px
   - Options: "Qimmat", "Kerakli funksiyalar yo'q", "Qiyin foydalanish", "Boshqa xizmat", "Vaqtincha to'xtatish", "Boshqa"

3. **Feedback Textarea**
   - Label: "Fikr-mulohazangiz (ixtiyoriy)" — 14px Regular #6B7280
   - Textarea: 100%, 100px balandlik, border-radius 8px
   - Placeholder: "Xizmatni yaxshilash uchun fikringizni bildiring..."
   - Character count: 0 / 500

4. **Export Data Checkbox**
   - Checkbox: 20px
   - Label: "Barcha ma'lumotlarimni eksport qilish (email orqali yuboriladi)" — 14px Regular #374151

5. **Alternative Offers (optional)**
   - Title: "Yoki bunday qilib ko'ring:" — 14px Medium #374151
   - 2 ta card:
     - "1 oy bepul oling" — 14px Semibold, bg #EEF2FF, padding 12px, border-radius 8px
     - "Free planiga o'ting" — 14px Semibold, bg #D1FAE5, padding 12px, border-radius 8px

**Footer:**
- Buttons: "Ortga", "Ha, bekor qilish" (red #DC2626)

---

## 2. PAYMENT TAB

### 2.1 Payment Methods Section

**Title:** "To'lov usullari" — 20px Semibold #111827  
**Subtitle:** "Bank kartalari va lokal to'lov usullari" — 14px Regular #6B7280  

**Card List:**
- Layout: Grid 2 columns, gap 16px
- Har bir karta: 360px × 180px, border 1px #E5E7EB, border-radius 12px, padding 20px

**Card Element (Visa example):**
1. **Brand Logo + Badge**
   - Logo: Visa icon 48px (chap yuqorida)
   - Badge: "Asosiy" — 64px kenglik, 24px balandlik, #10B981 fon, white text 12px Medium, o'ng yuqorida

2. **Card Number**
   - Text: "•••• •••• •••• 1234" — 18px Mono, #111827
   - Spacing: letter-spacing 2px

3. **Expiry + Name**
   - 2 column grid
   - Chap: "Amal qilish: 12/25" — 13px Regular #6B7280
   - O'ng: "J. Doe" — 13px Regular #6B7280

4. **Actions (bottom, 2 buttons)**
   - "Asosiy qilish" button: 120px, 36px, border 1px #4F46E5, text #4F46E5 (agar asosiy bo'lmasa)
   - "O'chirish" button: 36px × 36px, Icon/Trash 18px, hover bg #FEE2E2, hover text #DC2626

**Click Card:**
- Layout: Same as card, but different content
- Logo: Click logo 64px
- Phone: "+998 90 123 45 67"
- Status: "Tasdiqlangan" badge green

**Payme Card:**
- Logo: Payme logo 64px
- Phone: "+998 90 123 45 67"
- Status: "Tasdiqlangan" badge green

**Add New Button:**
- Kenglik: 360px, balandlik: 180px
- Border: 2px dashed #D1D5DB
- Border-radius: 12px
- Icon: Icon/Plus 32px, #9CA3AF
- Text: "+ Yangi usul qo'shish" — 16px Medium #6B7280
- Hover: border #4F46E5, text #4F46E5, bg #F9FAFB

---

### 2.2 Add Payment Method Modal

**ID:** `MODAL-B04`  
**Size:** 560px kenglik, auto balandlik  

**Header:** "Yangi to'lov usuli" — 20px Semibold #111827  

**Content:**

**Tabs (3 ta):**
- Card
- Click
- Payme

**Tab 1: Card**

Form fields:
1. **Card Number**
   - Input: 100%, 44px, border-radius 8px
   - Placeholder: "1234 5678 9012 3456"
   - Icon: Dynamic card brand logo 24px (o'ng tomonda)
   - Validation: Luhn algorithm, 16 digits
   - Error: "Karta raqami noto'g'ri" — 13px Regular #DC2626

2. **Expiry + CVV (2 column grid)**
   - Expiry: Input 50%, placeholder "MM/YY"
   - CVV: Input 50%, placeholder "123", type password
   - Gap: 16px

3. **Cardholder Name**
   - Input: 100%, 44px
   - Placeholder: "John Doe"

4. **Checkbox: "Asosiy to'lov usuli qilish"**
   - 20px checkbox, 14px Regular label

5. **3D Secure Info**
   - Fon: #EEF2FF, padding 12px, border-radius 8px
   - Icon: Icon/Shield 20px, #4F46E5
   - Text: "To'lov 3D Secure orqali tekshiriladi. Bank SMS yuboradi." — 13px Regular #4F46E5

6. **3DS Iframe Placeholder (hidden until submit)**
   - Kenglik: 100%, balandlik: 400px
   - Border: 1px #E5E7EB, border-radius 8px
   - Text: "Bank tasdiqlash oynasi..." — 14px Regular #6B7280, center

**Tab 2: Click**

Form fields:
1. **Phone Number**
   - Input: 100%, 44px
   - Placeholder: "+998 90 123 45 67"
   - Icon: Flag icon (UZ) 24px chap tomonda
   - Mask: +998 XX XXX XX XX

2. **Info Card**
   - Text: "Click ilovasida tasdiqlash kerak bo'ladi. SMS kodni kiriting." — 14px Regular #6B7280

**Tab 3: Payme**

Form fields (same as Click):
- Phone number input
- Info: "Payme ilovasida tasdiqlash..."

**Footer:**
- Buttons: "Bekor qilish", "Qo'shish va tasdiqlash" (primary)

---

### 2.3 Transaction History

**Joylashuv:** Payment Methods ostida  
**Title:** "To'lov tarixi" — 20px Semibold #111827  
**Subtitle:** "Oxirgi 10 ta tranzaksiya" — 14px Regular #6B7280  

**Jadval:**
- Kolonlar: 6 (Date, Amount, Status, Method, Invoice, Actions)
- Row height: 56px
- Header: bg #F9FAFB, 14px Medium #6B7280
- Data: 14px Regular #374151

**Kolonlar:**
1. **Sana** — 140px, "15 Mart 2024, 14:30"
2. **Summa** — 100px, "$59.00" (bold)
3. **Status** — 120px, badge (Paid green, Pending yellow, Failed red, Refunded blue)
4. **Usul** — 120px, card brand icon + last 4 digits "Visa •••• 1234"
5. **Faktura** — 100px, "INV-2024-03-001" link
6. **Amallar** — 80px, "Ko'rish" button 70px × 32px

**Empty state:**
- Text: "Tranzaksiyalar yo'q" — 14px Regular #6B7280
- Icon: Icon/CreditCard 48px, #D1D5DB

---

## 3. INVOICES TAB

### 3.1 Filters

**Layout:** Horizontal, 3 ta filter dropdown + search  
**Balandlik:** 44px  

1. **Date Range Picker**
   - Dropdown: 180px kenglik
   - Placeholder: "Oxirgi 30 kun"
   - Options: "Oxirgi 7 kun", "Oxirgi 30 kun", "Oxirgi 90 kun", "Oxirgi 1 yil", "Barchasi", "Custom range"
   - Custom range modal: 2 date inputs (From, To) with calendar picker

2. **Status Filter**
   - Dropdown: 140px kenglik
   - Options: "Barchasi", "Paid", "Pending", "Failed", "Refunded"

3. **Plan Filter**
   - Dropdown: 140px kenglik
   - Options: "Barchasi", "Free", "Pro", "Business", "Enterprise"

4. **Search**
   - Input: 280px kenglik, 44px balandlik
   - Placeholder: "Faktura raqami yoki summa qidiring..."
   - Icon: Icon/Search 20px chap tomonda

---

### 3.2 Invoices Table

**Jadval:**
- Kolonlar: 8 (ID, Date, Period, Plan, Amount, Status, Method, Actions)
- Row height: 56px
- Sortable: ID, Date, Amount
- Pagination: 10 rows per page

**Kolonlar:**
1. **ID** — 140px, "INV-2024-03-001" (link, underline on hover)
2. **Sana** — 120px, "15 Mart 2024"
3. **Davr** — 140px, "15 Feb - 14 Mar"
4. **Tarif** — 100px, "Business"
5. **Summa** — 100px, "$59.00" (bold)
6. **Status** — 100px, badge 
   - Paid: bg #D1FAE5, text #065F46, "To'langan"
   - Pending: bg #FEF3C7, text #92400E, "Kutilmoqda"
   - Failed: bg #FEE2E2, text #991B1B, "Xato"
   - Refunded: bg #DBEAFE, text #1E40AF, "Qaytarilgan"
7. **Usul** — 120px, icon + text "Visa •••• 1234"
8. **Amallar** — 120px, 2 ta button
   - "Yuklab olish" — Icon/Download 18px, 36px × 36px, border 1px #D1D5DB
   - "Ko'rish" — Icon/Eye 18px, 36px × 36px, border 1px #D1D5DB
   - Gap: 8px

**Row hover:** bg #F9FAFB

**Empty state:**
- Icon: Icon/FileText 64px, #D1D5DB
- Text: "Fakturalar yo'q" — 16px Medium #6B7280
- Subtext: "To'lovlar amalga oshirilgandan keyin bu yerda ko'rinadi" — 14px Regular #9CA3AF

---

### 3.3 Invoice Detail Drawer

**ID:** `DRAWER-B01`  
**Trigger:** "Ko'rish" buttonini bosish  
**Size:** 480px kenglik, 100% balandlik, o'ng tomondan slide-in  
**Animation:** 300ms ease-out  

**Header:**
- Title: "Faktura #INV-2024-03-001" — 20px Semibold #111827
- Close button: Icon/X 24px
- Padding: 24px
- Border-bottom: 1px #E5E7EB

**Content (Padding: 24px, scrollable):**

1. **Invoice Header Card**
   - Fon: #F9FAFB, border-radius 8px, padding 16px
   - 2 column grid:
     - Chap: "Faktura sanasi: 15 Mart 2024"
     - O'ng: "Amal qilish muddati: 22 Mart 2024"
   - Status badge: Paid (green) o'ng yuqorida

2. **Company Info**
   - Logo: 48px
   - Name: "CHATFLOW LLC" — 16px Semibold
   - Address: "Toshkent, O'zbekiston" — 14px Regular #6B7280
   - INN: "123456789" — 14px Regular #6B7280

3. **Customer Info**
   - Title: "Mijoz" — 14px Medium #374151
   - Workspace: "Acme Corp" — 14px Regular #6B7280
   - Email: "john@acme.com" — 14px Regular #6B7280
   - Phone: "+998 90 123 45 67" — 14px Regular #6B7280

4. **Line Items Table**
   - Header: "Xizmatlar" — 16px Semibold #111827
   - Kolonlar: Description, Quantity, Price, Total
   - Row: 
     - "Business Plan (15 Feb - 14 Mar)" — 14px Regular
     - "1" — center
     - "$59.00" — right
     - "$59.00" — right, bold

5. **Totals Section**
   - Fon: #F9FAFB, border-radius 8px, padding 16px
   - 4 qator:
     - "Subtotal: $59.00"
     - "Tax (13%): $7.67"
     - "Discount: -$0.00"
     - "Total: $66.67" — bold, 16px
   - Right aligned

6. **Payment Info**
   - Title: "To'lov ma'lumotlari" — 14px Medium #374151
   - Method: "Visa •••• 1234" — icon + text
   - Date: "15 Mart 2024, 14:30"
   - Transaction ID: "TXN-2024-03-001"

**Footer:**
- Padding: 16px 24px
- Border-top: 1px #E5E7EB
- 2 ta button:
   - "Chop etish" — Icon/Printer 18px, 120px, 40px, border 1px #D1D5DB
   - "PDF yuklab olish" — Icon/Download 18px, 160px, 40px, primary #4F46E5
   - Gap: 12px

---

## 4. USAGE TAB

### 4.1 Usage Overview Cards

**Layout:** 4-column grid, gap 24px  
**Har bir karta:** 280px × 180px, border 1px #E5E7EB, border-radius 12px, padding 20px  

**Card 1: Chats**
- Icon: Icon/MessageCircle 32px, #4F46E5 fon circle 48px
- Title: "Chats" — 14px Medium #6B7280
- Value: "847 / 5,000" — 24px Semibold #111827
- Progress bar: 100% kenglik, 8px balandlik, #4F46E5 17%, #E5E7EB fon
- Subtext: "17% foydalanilgan" — 12px Regular #6B7280

**Card 2: Agents**
- Icon: Icon/Users 32px, #10B981 fon circle
- Title: "Agents"
- Value: "7 / 10"
- Progress bar: #10B981 70%
- Subtext: "70% foydalanilgan"

**Card 3: Storage**
- Icon: Icon/Database 32px, #F59E0B fon circle
- Title: "Storage"
- Value: "28.4 GB / 50 GB"
- Progress bar: #F59E0B 57%
- Subtext: "57% foydalanilgan"

**Card 4: Messages**
- Icon: Icon/Send 32px, #8B5CF6 fon circle
- Title: "Messages"
- Value: "12,847 / Unlimited"
- Progress bar: hidden (unlimited)
- Subtext: "Cheklanmagan"

**Warning State (when >80%):**
- Banner: 100% kenglik, 56px balandlik, #FEF3C7 fon, border-left 4px #F59E0B
- Icon: Icon/AlertTriangle 24px, #F59E0B
- Text: "Storage limitga yaqinlashdi (90%). Iltimos, tarifingizni yangilang yoki fayllarni tozalang." — 14px Medium #92400E
- Action button: "Tarifni ko'rish" — 120px, 36px, border 1px #F59E0B, text #F59E0B

---

### 4.2 Usage History Chart

**Title:** "Oylik foydalanish" — 20px Semibold #111827  
**Subtitle:** "Oxirgi 30 kun" — 14px Regular #6B7280  

**Chart:**
- Type: Bar chart (vertical bars)
- Kenglik: 100%, balandlik: 320px
- X-axis: Dates (30 days), labels har 5 kunda
- Y-axis: Chats count (0 - 100), labels har 20 da
- Bar color: #4F46E5, hover #3730A3
- Bar width: 16px, border-radius 4px top
- Grid: horizontal, 1px #E5E7EB

**Tooltip (hover on bar):**
- Size: 160px × 80px, fon white, shadow-lg, border-radius 8px
- Content:
  - Date: "15 Mart 2024" — 12px Medium #111827
  - Chats: "47 chats" — 14px Semibold #4F46E5
  - Messages: "342 messages" — 12px Regular #6B7280
  - Agents active: "5 agents" — 12px Regular #6B7280

**Filters (chart tepasida, o'ng tomonda):**
- Dropdown: "Oxirgi 30 kun" — 140px kenglik
- Options: "7 kun", "30 kun", "90 kun", "1 yil"

---

### 4.3 Export Usage Report

**Button:** "Hisobotni eksport qilish" — 180px, 40px, border 1px #4F46E5, text #4F46E5, Icon/Download 18px  
**Joylashuv:** Chart ostida, o'ng tomonda  

**Modal (trigger click):**
**ID:** `MODAL-B05`  
**Size:** 480px kenglik  

**Content:**
1. **Report Type**
   - Radio buttons: "PDF", "CSV", "Excel"
2. **Date Range**
   - 2 date inputs: From, To
   - Default: Last 30 days
3. **Include Data**
   - Checkboxes (4 ta):
     - "Chats statistics"
     - "Agents activity"
     - "Storage usage"
     - "Messages breakdown"
   - Default: all checked

**Footer:**
- Buttons: "Bekor qilish", "Eksport qilish" (primary)
- Success toast: "Hisobot emailga yuborildi" — 3s auto-hide

---

## Empty / Loading / Error States

### Empty States
**Plan tab:**
- "Sizda hozircha aktiv tarif yo'q. Boshlaish uchun tarif tanlang."
- Icon: Icon/Package 64px #D1D5DB

**Payment tab:**
- "To'lov usullari yo'q. Birinchi usulni qo'shing."
- Icon: Icon/CreditCard 64px #D1D5DB
- CTA: "+ Usul qo'shish" button

**Invoices tab:**
- "Fakturalar yo'q. To'lovlar amalga oshirilgandan keyin bu yerda ko'rinadi."
- Icon: Icon/FileText 64px #D1D5DB

**Usage tab:**
- "Foydalanish ma'lumotlari yo'q. Chatflow'dan foydalanishni boshlang."
- Icon: Icon/BarChart 64px #D1D5DB

### Loading States
- **Skeleton cards:** 4 cards, shimmer animation
- **Skeleton table:** 5 rows, shimmer animation
- **Chart loading:** Spinner 32px center

### Error States
- Alert banner: #FEE2E2 fon, border-left 4px #DC2626
- Icon: Icon/AlertCircle 24px #DC2626
- Text: "Billing ma'lumotlari yuklanmadi. Iltimos, qaytadan urinib ko'ring."
- Button: "Qayta yuklash" — 120px, 36px, border 1px #DC2626

---

## Micro-interactions

1. **Plan card hover** — Border #4F46E5, shadow-md, scale 1.02, 200ms
2. **Progress bar animate** — Width from 0 to value, 600ms ease-out on mount
3. **Upgrade button hover** — Bg darker #4338CA, shadow-md, 150ms
4. **Modal fade-in** — Opacity 0 to 1, scale 0.95 to 1, 200ms ease-out
5. **Backdrop fade** — Opacity 0 to 1, 200ms
6. **Checkbox toggle** — Check icon scale 0 to 1, 150ms bounce
7. **Tab switch** — Border-bottom slide, 200ms ease-in-out
8. **Badge pulse** — "Faol" badge pulse animation when payment successful, 3s
9. **Toast slide-in** — Slide from top, 300ms ease-out
10. **Drawer slide-in** — Slide from right, 300ms ease-out
11. **Chart bar hover** — Scale 1.05, bg darker, 150ms
12. **Button ripple** — Ripple effect on click, 400ms
13. **Dropdown expand** — Height auto, opacity 0 to 1, 200ms
14. **Alert banner slide-down** — Slide from top, 300ms when usage >80%
15. **Card flip** — Payment card flip animation when "O'chirish" confirm, 400ms
16. **Skeleton shimmer** — Left to right shimmer, 1.5s infinite
17. **3DS iframe load** — Fade-in 300ms after submit
18. **Invoice row hover** — Bg #F9FAFB, 100ms
19. **Logo spin** — Card brand logo spin 360° when adding new card, 600ms
20. **Success confetti** — Confetti animation on successful upgrade, 2s

---

## Accessibility

**Keyboard Navigation:**
- Tab order: Tabs → Filters → Cards → Buttons → Table rows
- Enter: Open modal, submit form
- Escape: Close modal/drawer
- Arrow keys: Navigate table rows, dropdown options
- Space: Toggle checkbox/radio
- Shortcuts:
  - `U` — Upgrade modal
  - `P` — Payment tab
  - `I` — Invoices tab
  - `S` — Usage (stats) tab
  - `N` — Add new payment method
  - `E` — Export usage report

**ARIA Labels:**
- `aria-label="Upgrade to Business plan"`
- `aria-label="Close modal"`
- `aria-label="Current plan: Business"` on plan card
- `aria-label="Payment method: Visa ending 1234, Primary"`
- `aria-label="Invoice INV-2024-03-001, Status: Paid"`
- `aria-label="Usage: 847 out of 5000 chats, 17% used"`
- `aria-live="polite"` on progress bars
- `aria-invalid="true"` on form errors

**Screen Reader Announcements:**
- "Plan upgraded to Business successfully"
- "Payment method added successfully"
- "Invoice downloaded"
- "Usage report exported and sent to email"
- "Warning: Storage limit approaching"
- "Modal opened: Upgrade plan"
- "Modal closed"

**Focus Management:**
- Modal open: focus to first input
- Modal close: return focus to trigger button
- Drawer open: focus to close button
- Error: focus to first error field

**Color Contrast:**
- Text on white: #111827 (21:1), #6B7280 (7:1)
- Button text: white on #4F46E5 (4.5:1+)
- Status badges: WCAG AA compliant

**Touch Targets:**
- Minimum: 44×44px (all buttons, checkboxes, radio, table rows)

---

## ASCII Wireframes

### 1. Plan Tab Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Billing                                           [ Plan | Payment | Invoices | Usage ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Business Plan    [Faol]                          [Tarifni o'zgartirish] │
│  │                                                   [Bekor qilish]     │
│  │ Keyingi to'lov: 15 Mart 2024        Narx: $59 / oy                │
│  │ Agentlar: 7 / 10   [████████░░] 70%                                │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                           │
│  ┌──────────┬──────────┬──────────┬──────────┐                          │
│  │   Free   │   Pro    │ Business │Enterprise│                          │
│  │  [Mashhur]                                │                          │
│  │          │          │          │          │                          │
│  │  $0/mo   │  $29/mo  │  $59/mo  │ Custom   │                          │
│  │          │          │          │          │                          │
│  │ 1 agent  │ 3 agents │ 10 agents│Unlimited │                          │
│  │ 100 chats│1000 chats│5000 chats│Unlimited │                          │
│  │          │          │          │          │                          │
│  │ [Joriy]  │[Upgrade] │[Upgrade] │[Bog'lanish]│                         │
│  └──────────┴──────────┴──────────┴──────────┘                          │
│                                                                           │
│  Tariflarni taqqoslash                                                   │
│  ┌────────────────────────┬──────┬──────┬──────────┬──────────┐        │
│  │ Xususiyat              │ Free │ Pro  │ Business │Enterprise│        │
│  ├────────────────────────┼──────┼──────┼──────────┼──────────┤        │
│  │ Live chat widget       │  ✓   │  ✓   │    ✓     │    ✓     │        │
│  │ 24/7 support           │  ✗   │  ✗   │    ✓     │    ✓     │        │
│  │ Advanced analytics     │  ✗   │  ✗   │    ✓     │    ✓     │        │
│  │ API access             │  ✗   │  ✗   │    ✓     │    ✓     │        │
│  │ SSO login              │  ✗   │  ✗   │    ✗     │    ✓     │        │
│  │ Max agents             │  1   │  3   │    10    │Unlimited │        │
│  │ Chat history           │30 days│1 year│Unlimited │Unlimited │        │
│  └────────────────────────┴──────┴──────┴──────────┴──────────┘        │
└─────────────────────────────────────────────────────────────────────────┘
```

### 2. Upgrade Modal
```
┌─────────────────────────────────────────────────┐
│ Tarifni yangilash                           [×] │
├─────────────────────────────────────────────────┤
│                                                 │
│ Yangi tarif:                                    │
│ ┌─────────────────────────────────────────────┐ │
│ │ ○ Pro Plan        $29/mo    3 agents, ...  │ │
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ ● Business Plan   $59/mo    10 agents, ... │ │ (selected)
│ └─────────────────────────────────────────────┘ │
│ ┌─────────────────────────────────────────────┐ │
│ │ ○ Enterprise      Custom    Unlimited      │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ To'lov davri:                                   │
│ ┌───────────────────────────────────────────┐   │
│ │   Oylik   │   Yillik (20% tejang)    │   │   │
│ │   [──●────────────────────────────]     │   │
│ └───────────────────────────────────────────┘   │
│                                                 │
│ ⚠️  Proporsional hisob-kitob                    │
│ Joriy cycle qolgan kunlari uchun $12.50        │
│ qaytariladi. Yangi tarif darhol faol bo'ladi.  │
│                                                 │
│ ┌─────────────────────────────────────────────┐ │
│ │ Yangi tarif narxi:     $59.00               │ │
│ │ Proration (refund):   -$12.50               │ │
│ │ ────────────────────────────────────────    │ │
│ │ Bugun to'lanadi:       $46.50               │ │
│ └─────────────────────────────────────────────┘ │
│                                                 │
│ To'lov usuli:                                   │
│ [ Visa •••• 1234              ▼ ]               │
│                                                 │
├─────────────────────────────────────────────────┤
│                  [Bekor qilish] [Tasdiqlash]    │
└─────────────────────────────────────────────────┘
```

### 3. Payment Tab Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Billing                                [ Plan | Payment | Invoices | Usage ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ To'lov usullari                                                          │
│                                                                           │
│ ┌────────────────────────┬────────────────────────┬────────────────────┐ │
│ │ [VISA]       [Asosiy]  │ [CLICK]                │ [PAYME]            │ │
│ │                        │                        │                    │ │
│ │ •••• •••• •••• 1234    │ +998 90 123 45 67      │ +998 90 123 45 67  │ │
│ │ 12/25      J. Doe      │ [Tasdiqlangan]         │ [Tasdiqlangan]     │ │
│ │                        │                        │                    │ │
│ │ [Asosiy qilish] [🗑]   │ [Asosiy qilish] [🗑]   │ [Asosiy qilish] [🗑] │ │
│ └────────────────────────┴────────────────────────┴────────────────────┘ │
│                                                                           │
│ ┌────────────────────────┐                                               │
│ │      + Yangi usul      │                                               │
│ │      qo'shish          │  (dashed border)                              │
│ └────────────────────────┘                                               │
│                                                                           │
│ To'lov tarixi                                                            │
│ ┌─────────────────────────────────────────────────────────────────────┐ │
│ │ Sana         Summa   Status    Usul           Faktura     Amallar  │ │
│ ├─────────────────────────────────────────────────────────────────────┤ │
│ │ 15 Mar 14:30 $59.00  [Paid]   Visa 1234  INV-2024-001  [↓] [👁] │ │
│ │ 15 Feb 10:15 $59.00  [Paid]   Visa 1234  INV-2024-002  [↓] [👁] │ │
│ │ 15 Jan 09:30 $29.00  [Paid]   Click      INV-2024-003  [↓] [👁] │ │
│ └─────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4. Invoices Tab Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Billing                                [ Plan | Payment | Invoices | Usage ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ Filters: [Oxirgi 30 kun ▼] [Barchasi ▼] [Barchasi ▼] [🔍 Qidiruv...]   │
│                                                                           │
│ ┌───────────────────────────────────────────────────────────────────────┐│
│ │ ID          Sana    Davr        Plan    Summa Status  Usul    Amallar││
│ ├───────────────────────────────────────────────────────────────────────┤│
│ │INV-2024-001 15 Mar  15Feb-14Mar Business $59  [Paid] Visa1234 [↓][👁]││
│ │INV-2024-002 15 Feb  15Jan-14Feb Business $59  [Paid] Visa1234 [↓][👁]││
│ │INV-2024-003 15 Jan  15Dec-14Jan Pro      $29  [Paid] Click    [↓][👁]││
│ │INV-2024-004 15 Dec  15Nov-14Dec Pro      $29 [Failed]Visa1234 [↓][👁]││
│ │INV-2024-005 15 Nov  15Oct-14Nov Free     $0   [Paid] -        [↓][👁]││
│ └───────────────────────────────────────────────────────────────────────┘│
│                                                                           │
│ Showing 1-5 of 12        [< Previous]  1 2 [3]  [Next >]                │
└─────────────────────────────────────────────────────────────────────────┘
```

### 5. Usage Tab Layout
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Billing                                [ Plan | Payment | Invoices | Usage ]
├─────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│ ⚠️  Storage limitga yaqinlashdi (90%). Tarifni yangilang. [Tarifni ko'rish] │
│                                                                           │
│ ┌───────────┬───────────┬───────────┬───────────┐                       │
│ │  [💬]     │  [👥]     │  [🗄]     │  [📤]     │                       │
│ │  Chats    │  Agents   │  Storage  │ Messages  │                       │
│ │           │           │           │           │                       │
│ │ 847/5,000 │   7/10    │28.4/50 GB │  12,847   │                       │
│ │ [████░░░] │ [███████░]│ [█████░░░]│ Unlimited │                       │
│ │ 17%       │   70%     │   57%     │           │                       │
│ └───────────┴───────────┴───────────┴───────────┘                       │
│                                                                           │
│ Oylik foydalanish                         [Oxirgi 30 kun ▼]             │
│ ┌───────────────────────────────────────────────────────────────────┐   │
│ │ 100│                                                              │   │
│ │  80│                                                              │   │
│ │  60│        ▄                                                     │   │
│ │  40│     ▄  █  ▄  ▄     ▄  ▄                                     │   │
│ │  20│  ▄  █  █  █  █  ▄  █  █  ▄  ▄  ▄                            │   │
│ │   0└───────────────────────────────────────────────────────────┘ │   │
│ │     1   5   10  15  20  25  30 (days)                            │   │
│ └───────────────────────────────────────────────────────────────────┘   │
│                                                                           │
│                                         [Hisobotni eksport qilish]       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Figma uchun komponentlar (15 ta)

```
billing/
├── plan/
│   ├── current-plan-card         # Current subscription status
│   ├── plan-card                 # Free/Pro/Business/Enterprise cards
│   ├── comparison-table          # Feature comparison 25 rows
│   ├── upgrade-modal             # Plan upgrade with proration
│   ├── downgrade-modal           # Downgrade confirmation
│   └── cancel-modal              # Subscription cancellation
├── payment/
│   ├── payment-card              # Visa/Click/Payme card display
│   ├── add-payment-modal         # 3 tabs (Card/Click/Payme)
│   └── transaction-row           # Transaction history item
├── invoices/
│   ├── invoice-filters           # Date/Status/Plan filters
│   ├── invoice-table-row         # Single invoice row
│   └── invoice-drawer            # Invoice detail slide-out
├── usage/
│   ├── usage-card                # Chats/Agents/Storage/Messages card
│   ├── usage-chart               # 30-day bar chart
│   └── export-modal              # Usage report export
└── shared/
    ├── progress-bar              # Animated usage progress
    ├── status-badge              # Paid/Pending/Failed/Refunded
    └── warning-banner            # 80%+ usage alert
```

---

## User Flows

### 1. Upgrade Flow
```
Current Plan Card → Click "Upgrade" → Upgrade Modal opens
→ Select new plan (Pro/Business/Enterprise)
→ Toggle billing cycle (Monthly/Yearly)
→ See proration calculation
→ Select payment method
→ Click "Tasdiqlash va to'lash"
→ (If 3DS required) → 3DS iframe modal
→ Success toast "Plan upgraded"
→ Plan Card updates with new plan
→ Invoice generated → Invoices tab
```

### 2. Add Payment Method Flow
```
Payment Tab → Click "+ Yangi usul qo'shish"
→ Add Payment Modal opens
→ Select tab (Card / Click / Payme)
→ If Card: Fill card number, expiry, CVV, name → Toggle "Asosiy qilish"
→ If Click/Payme: Fill phone number
→ Click "Qo'shish va tasdiqlash"
→ (If Card) → 3DS verification iframe
→ (If Click/Payme) → SMS code confirmation (external app)
→ Success toast "To'lov usuli qo'shildi"
→ Card appears in Payment Methods list
```

### 3. View Invoice Flow
```
Invoices Tab → Click "Ko'rish" on invoice row
→ Invoice Drawer slides in from right
→ View invoice details (line items, totals, payment info)
→ Click "PDF yuklab olish" → PDF downloads
→ OR Click "Chop etish" → Print dialog opens
→ Close drawer
```

### 4. Cancel Subscription Flow
```
Plan Tab → Current Plan Card → Click "Bekor qilish"
→ Cancel Modal opens
→ Select reason from dropdown
→ (Optional) Write feedback in textarea
→ Toggle "Export ma'lumotlarimni" checkbox
→ Click "Ha, bekor qilish"
→ Confirmation toast "Obuna 15 Mart 2024 da bekor qilinadi"
→ Current Plan Card updates: Status "Bekor qilinmoqda", countdown
→ On effective date → Plan reverts to Free
```

### 5. Export Usage Report Flow
```
Usage Tab → Click "Hisobotni eksport qilish"
→ Export Modal opens
→ Select format (PDF / CSV / Excel)
→ Select date range (From, To)
→ Toggle checkboxes (Chats / Agents / Storage / Messages)
→ Click "Eksport qilish"
→ Success toast "Hisobot emailga yuborildi"
→ Check email → Download report attachment
```

---

## Technical Requirements

### API Endpoints (15+ ta)

**Plan Endpoints:**
- `GET /api/v1/billing/plan` — Get current plan
- `POST /api/v1/billing/plan/upgrade` — Upgrade plan
- `POST /api/v1/billing/plan/downgrade` — Downgrade plan
- `POST /api/v1/billing/plan/cancel` — Cancel subscription
- `GET /api/v1/billing/plan/comparison` — Get feature comparison data

**Payment Endpoints:**
- `GET /api/v1/billing/payment-methods` — List payment methods
- `POST /api/v1/billing/payment-methods` — Add payment method
- `DELETE /api/v1/billing/payment-methods/:id` — Remove payment method
- `PUT /api/v1/billing/payment-methods/:id/primary` — Set as primary
- `GET /api/v1/billing/transactions` — Transaction history

**Invoice Endpoints:**
- `GET /api/v1/billing/invoices` — List invoices (with filters)
- `GET /api/v1/billing/invoices/:id` — Get single invoice
- `GET /api/v1/billing/invoices/:id/pdf` — Download PDF
- `POST /api/v1/billing/invoices/:id/email` — Email invoice

**Usage Endpoints:**
- `GET /api/v1/billing/usage` — Current usage stats
- `GET /api/v1/billing/usage/history` — 30-day usage history
- `POST /api/v1/billing/usage/export` — Export usage report

### Third-party Integrations

**Payment Gateways:**
1. **Stripe** (for international cards)
   - 3D Secure 2.0
   - Webhooks: payment_intent.succeeded, payment_intent.failed, customer.subscription.updated
   - Frontend: Stripe.js Elements for card input

2. **Click** (Uzbekistan)
   - API: Click Merchant API 2.0
   - Webhooks: payment.success, payment.failed
   - Redirect flow for phone confirmation

3. **Payme** (Uzbekistan)
   - API: Payme Merchant API
   - Webhooks: payment.success, payment.cancelled
   - Redirect flow for phone confirmation

### Proration Logic

**Upgrade (mid-cycle):**
```
Remaining days = (Next billing date - Today)
Daily rate old = Old plan price / 30
Daily rate new = New plan price / 30
Refund = Daily rate old × Remaining days
Charge today = (Daily rate new × Remaining days) - Refund
```

**Downgrade:**
```
Apply on next billing cycle
No immediate charge/refund
Notify user: "Downgrade effective on [date]"
```

---

### 1.7 PRORATED BILLING LOGIC UI — Batafsil

**ID:** `FEATURE-PRORATION`  
**Maqsad:** Foydalanuvchiga plan o'zgartirish narxini aniq va shaffof ko'rsatish

#### Proration Calculator — Upgrade Modal Ichida

**Joylashuv:** Upgrade modal (MODAL-B01) ning "Payment Summary Card" bo'limida

#### Calculator Komponenti Spetsifikatsiyasi

**Container:**
- Kenglik: 100% (modal ichida)
- Padding: 20px
- Background: `#F0F9FF` (Blue-50)
- Border: 1px `#BAE6FD` (Blue-200)
- Border-left: 4px `#0284C7` (Blue-600)
- Border-radius: 8px

**Header:**
- Icon: Calculator (20px, `#0284C7`)
- Title: "Proporsional hisob-kitob" — 14px Semibold #0C4A6E (Blue-900)
- Tooltip icon: Info circle (16px, `#6B7280`) → Hover shows: "Joriy billing cycle qolgan kunlari uchun hisob-kitob"

**Calculation Breakdown (4 qator):**

| Row | Label | Value | Style |
|-----|-------|-------|-------|
| 1 | Hozirgi tarif (Free) | $0.00 | 14px Regular #475569 |
| 2 | Yangi tarif (Pro oylik) | $29.00 | 14px Regular #475569 |
| 3 | Qolgan kunlar | 18 / 30 kun | 14px Regular #475569 + Progress bar |
| 4 | Bugungi to'lov | **$17.40** | 18px Semibold #0C4A6E |

**Progress Bar (Qolgan kunlar):**
- Kenglik: 120px
- Balandlik: 6px
- Background: `#E0E7FF` (Indigo-100)
- Fill: `#4F46E5` (Primary-600)
- Fill width: 60% (18/30)
- Border-radius: 999px
- Joylashuv: Value yonida, inline

**Divider:** 1px `#BAE6FD` border-top (qator 3 va 4 orasida)

**Detailed Calculation Collapsible (Ixtiyoriy):**

**Trigger:** "Hisob-kitobni ko'rish" link — 13px Medium `#0284C7`, underline hover
**Joylashuv:** Calculator container pastida, 8px gap

**Expanded Content:**
```
Qolgan kunlar: 18 kun
Kunlik narx (yangi tarif): $29.00 ÷ 30 = $0.97
Hisob: $0.97 × 18 kun = $17.40
```
- Font: 13px mono (Courier/Fira Code), `#475569`
- Background: `#FFFFFF`
- Padding: 12px
- Border: 1px `#BAE6FD`
- Border-radius: 6px

**Animation:** Expand/collapse with max-height transition 300ms ease

---

#### Proration Scenarios — UI Examples

**Scenario 1: Free → Pro (Upgrade)**

**Current Plan:** Free ($0/month)  
**New Plan:** Pro ($29/month)  
**Remaining Days:** 18 / 30  
**Calculation:**
- Daily rate (Pro): $29 ÷ 30 = $0.97
- Charge today: $0.97 × 18 = **$17.40**
- Next billing: Full $29.00 on March 15

**UI Display:**
```
┌──────────────────────────────────────────────┐
│ 🧮 Proporsional hisob-kitob               ⓘ │
│                                              │
│ Hozirgi tarif (Free)              $0.00     │
│ Yangi tarif (Pro oylik)          $29.00     │
│ Qolgan kunlar         18/30 ▓▓▓▓▓▓░░░░ 60%  │
│ ───────────────────────────────────────────  │
│ Bugungi to'lov                  $17.40       │
│                                              │
│ 📅 Keyingi to'lov: 15-Mart 2024 ($29.00)    │
│ Hisob-kitobni ko'rish ↓                     │
└──────────────────────────────────────────────┘
```

---

**Scenario 2: Pro → Business (Upgrade with Refund)**

**Current Plan:** Pro ($29/month), paid 12 days ago  
**New Plan:** Business ($59/month)  
**Remaining Days:** 18 / 30  
**Calculation:**
- Daily rate (Pro): $29 ÷ 30 = $0.97
- Daily rate (Business): $59 ÷ 30 = $1.97
- Refund: $0.97 × 18 = $17.40
- New charge: $1.97 × 18 = $35.40
- Charge today: $35.40 - $17.40 = **$18.00**

**UI Display:**
```
┌──────────────────────────────────────────────┐
│ 🧮 Proporsional hisob-kitob               ⓘ │
│                                              │
│ Hozirgi tarif (Pro)               $29.00    │
│ Yangi tarif (Business oylik)     $59.00     │
│ Qolgan kunlar         18/30 ▓▓▓▓▓▓░░░░ 60%  │
│                                              │
│ ✅ Qaytariladi (Pro)            -$17.40      │
│ ➕ Yangi tarif (18 kun)         +$35.40      │
│ ───────────────────────────────────────────  │
│ Bugungi to'lov                  $18.00       │
│                                              │
│ 📅 Keyingi to'lov: 15-Mart 2024 ($59.00)    │
│ Hisob-kitobni ko'rish ↓                     │
└──────────────────────────────────────────────┘
```

**Refund Row Style:**
- Icon: CheckCircle (16px, `#10B981` green)
- Text: `-$17.40` — 14px Medium `#10B981`

**New Charge Row Style:**
- Icon: Plus (16px, `#6B7280`)
- Text: `+$35.40` — 14px Regular `#6B7280`

---

**Scenario 3: Pro → Free (Downgrade)**

**Current Plan:** Pro ($29/month), paid 12 days ago  
**New Plan:** Free ($0/month)  
**Remaining Days:** 18 / 30  
**Calculation:** No immediate charge. Plan downgrade effective on next billing date.

**UI Display (Downgrade Modal):**
```
┌──────────────────────────────────────────────┐
│ ⚠️  Downgrade ma'lumoti                      │
│                                              │
│ Hozirgi tarif (Pro)               $29.00    │
│ Yangi tarif (Free)                 $0.00    │
│                                              │
│ ⏰ Downgrade sanasi: 15-Mart 2024            │
│    (18 kun qoldi)                            │
│                                              │
│ ℹ️  Hech qanday qaytarilmaydi. Siz 15-Mart  │
│    gacha Pro imkoniyatlardan foydalanishda  │
│    davom etasiz.                             │
│                                              │
│ Bugungi to'lov                   $0.00       │
└──────────────────────────────────────────────┘
```

**Downgrade Notice Style:**
- Background: `#FEF3C7` (Yellow-100)
- Border-left: 4px `#F59E0B` (Yellow-500)
- Icon: Clock (20px, `#F59E0B`)
- Text: 14px Regular `#92400E` (Yellow-800)

---

**Scenario 4: Monthly → Yearly (Switch with Discount)**

**Current Plan:** Pro Monthly ($29/month), paid 5 days ago  
**New Plan:** Pro Yearly ($290/year = $24.17/month, 20% discount)  
**Remaining Days:** 25 / 30  
**Calculation:**
- Refund (monthly unused): $29 × (25/30) = $24.17
- Charge (yearly full): $290.00
- Today: $290 - $24.17 = **$265.83**

**UI Display:**
```
┌──────────────────────────────────────────────┐
│ 🧮 Yillik tarifga o'tish                  ⓘ │
│                                              │
│ 🔄 Oylikdan yillikka o'tish                  │
│                                              │
│ Hozirdagi tarif (Pro oylik)      $29.00     │
│ Yangi tarif (Pro yillik)        $290.00     │
│                                              │
│ 🎉 Tejovingiz: $58.00/yil (20% chegirma)    │
│                                              │
│ Qolgan kunlar         25/30 ▓▓▓▓▓▓▓▓░░ 83%  │
│ ✅ Qaytariladi (oylik)          -$24.17      │
│ ───────────────────────────────────────────  │
│ Bugungi to'lov                 $265.83       │
│                                              │
│ 📅 Keyingi to'lov: 25-Fev 2025 ($290.00)    │
│    (1 yildan keyin)                          │
└──────────────────────────────────────────────┘
```

**Discount Highlight:**
- Background: `#D1FAE5` (Green-100)
- Border: 1px `#34D399` (Green-400)
- Icon: Sparkles (16px, `#10B981`)
- Text: 14px Semibold `#065F46` (Green-800)

---

#### Live Calculator Interaction

**Real-time Update:**
1. Foydalanuvchi plan tanlaydi (radio button) → Calculator instant update
2. Billing cycle toggle (oylik/yillik) → Calculator recalculate < 100ms
3. Plan o'zgartirilganda → Background color pulse animation (300ms)

**Animation Sequence:**
- **Plan change:**
  - Old values: fade-out 150ms → opacity 0
  - Calculator: scale 0.98 + blur 2px for 100ms
  - New values: fade-in 200ms → opacity 1
  - Total: < 450ms
  
- **Pulse effect:**
  - Background: `#F0F9FF` → `#E0F2FE` → `#F0F9FF`
  - Duration: 600ms ease-in-out
  - Scale: 1 → 1.01 → 1

**Loading State:**
- Skeleton loader (shimmer effect) while calculating
- Duration: < 100ms (usually instant)
- Only shown if calculation takes > 100ms

---

#### Proration Edge Cases

**Edge Case 1: Upgrade on Last Day of Billing Cycle**

**Remaining Days:** 1 / 30  
**Calculation:**
- Charge: New plan daily rate × 1 day (very small amount, rounding applied)
- UI Note: "Keyingi kun yangi billing cycle boshlanadi. To'liq narx to'lanadi."

**Edge Case 2: Upgrade Immediately After Payment**

**Remaining Days:** 29 / 30 (almost full cycle)  
**Calculation:**
- High refund amount (most of old plan price)
- UI Highlight: "Siz yaqinda to'lov qildingiz. Qaytarish miqdori yuqori."

**Edge Case 3: Downgrade with Premium Features Active**

**Warning Card:**
```
┌──────────────────────────────────────────────┐
│ ⚠️  Aktiv premium funksiyalar               │
│                                              │
│ Siz hozirda quyidagi funksiyalardan         │
│ foydalanyapsiz:                              │
│                                              │
│ • 8/10 agentlar faol (Free: 2 agent)        │
│ • API ulanishlari mavjud (Free: yo'q)       │
│ • Custom branding faol (Free: yo'q)         │
│                                              │
│ ⚠️  Downgrade qilinganidan so'ng bu          │
│    funksiyalar ishlamay qoladi. Ma'lumotlar │
│    saqlanadi, lekin kirish cheklangan.      │
│                                              │
│ ✅ Tavsiya: Avval sozlamalarni tekshiring   │
└──────────────────────────────────────────────┘
```

---

#### Proration API Endpoints

**POST /api/v1/billing/calculate-proration**

**Request:**
```json
{
  "current_plan": "pro_monthly",
  "new_plan": "business_monthly",
  "billing_cycle": "monthly"
}
```

**Response:**
```json
{
  "current_plan": {
    "id": "pro_monthly",
    "name": "Pro",
    "price": 29.00,
    "billing_cycle": "monthly"
  },
  "new_plan": {
    "id": "business_monthly",
    "name": "Business",
    "price": 59.00,
    "billing_cycle": "monthly"
  },
  "proration": {
    "remaining_days": 18,
    "total_days": 30,
    "percentage": 60,
    "daily_rate_old": 0.97,
    "daily_rate_new": 1.97,
    "refund_amount": 17.40,
    "new_charge_amount": 35.40,
    "total_charge_today": 18.00
  },
  "next_billing_date": "2024-03-15T00:00:00Z",
  "next_billing_amount": 59.00,
  "discount": null
}
```

**Error Cases:**
- `400 Bad Request` — Invalid plan IDs
- `409 Conflict` — Already on the requested plan
- `403 Forbidden` — User cannot access requested plan (e.g., Enterprise requires contact)

---

#### Figma Components — Proration

**Component Tree:**
```
proration-calculator/
├── container (auto-layout, vertical, padding: 20px, bg: #F0F9FF, border-left: 4px #0284C7)
│   ├── header (horizontal, gap: 8px)
│   │   ├── icon (Calculator 20px, #0284C7)
│   │   ├── title (text: "Proporsional hisob-kitob", 14px Semibold)
│   │   └── tooltip-icon (Info 16px, hover shows tooltip)
│   ├── calculation-rows (vertical, gap: 8px)
│   │   ├── row-current-plan (horizontal, space-between)
│   │   │   ├── label ("Hozirgi tarif (Free)", 14px Regular)
│   │   │   └── value ("$0.00", 14px Medium)
│   │   ├── row-new-plan (horizontal, space-between)
│   │   │   ├── label ("Yangi tarif (Pro oylik)", 14px Regular)
│   │   │   └── value ("$29.00", 14px Medium)
│   │   ├── row-remaining-days (horizontal, space-between, with progress)
│   │   │   ├── label ("Qolgan kunlar", 14px Regular)
│   │   │   └── value-with-progress
│   │   │       ├── text ("18/30 kun", 14px Regular)
│   │   │       └── progress-bar (120×6px, 60% fill)
│   │   ├── divider (border-top: 1px #BAE6FD, margin: 8px 0)
│   │   ├── row-refund (optional, horizontal, gap: 8px)
│   │   │   ├── icon (CheckCircle 16px, green)
│   │   │   ├── label ("Qaytariladi", 14px Regular)
│   │   │   └── value ("-$17.40", 14px Medium green)
│   │   ├── row-new-charge (optional, horizontal, gap: 8px)
│   │   │   ├── icon (Plus 16px, gray)
│   │   │   ├── label ("Yangi tarif", 14px Regular)
│   │   │   └── value ("+$35.40", 14px Regular)
│   │   └── row-total (horizontal, space-between)
│   │       ├── label ("Bugungi to'lov", 14px Medium)
│   │       └── value ("$17.40", 18px Semibold blue)
│   ├── next-billing-info (horizontal, gap: 8px, margin-top: 12px)
│   │   ├── icon (Calendar 16px, gray)
│   │   └── text ("Keyingi to'lov: 15-Mart 2024 ($29.00)", 13px Regular gray)
│   └── collapsible-details (optional, expandable)
│       ├── trigger-link ("Hisob-kitobni ko'rish ↓", 13px Medium blue, underline hover)
│       └── expanded-content (mono font, white bg, padding: 12px, code-like)
```

**Variants:**
1. `upgrade-no-refund` — Free → Paid (only new charge)
2. `upgrade-with-refund` — Paid → Higher tier (refund + new charge)
3. `downgrade` — Paid → Lower tier (warning, effective next billing)
4. `cycle-change` — Monthly → Yearly or vice versa (discount highlight)

**States:**
- `default` — Static display
- `calculating` — Skeleton/shimmer loader
- `updated` — Pulse animation on value change
- `expanded` — Collapsible details open

---

#### Accessibility — Proration Calculator

**Keyboard Navigation:**
- **Tab:** Focus through calculator elements (tooltip icon → collapse link)
- **Enter/Space:** Activate tooltip or expand/collapse details
- **Escape:** Close tooltip

**ARIA Labels:**
- Calculator container: `role="region"`, `aria-label="Proration calculation"`
- Tooltip icon: `aria-label="What is proration?"`, `aria-describedby="tooltip-proration"`
- Collapse trigger: `aria-expanded="false"`, `aria-controls="proration-details"`
- Progress bar: `role="progressbar"`, `aria-valuenow="60"`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="18 days remaining out of 30"`

**Screen Reader Announcements:**
- Plan change: "Plan changed to Pro. Calculating proration..."
- Calculation complete: "Proration calculated. Today's charge: 17 dollars and 40 cents. Next billing: March 15, 2024, 29 dollars."
- Refund: "Refund of 17 dollars and 40 cents will be applied."
- Details expand: "Detailed calculation shown. Daily rate: 97 cents. 18 days remaining equals 17 dollars 40 cents."

**Color Contrast:**
- Calculator bg #F0F9FF vs text #0C4A6E: 9.2:1 (AAA)
- Refund green #10B981 vs bg: 4.8:1 (AA)
- Warning yellow bg #FEF3C7 vs text #92400E: 8.1:1 (AAA)

**Touch Targets:**
- Tooltip icon: 40×40px (16px icon + 12px padding)
- Collapse link: min 44px height (text + padding)
- All interactive elements: ≥ 44×44px mobile

### Real-time Updates (WebSocket)

**Events:**
- `billing:payment_success` — Payment processed, update plan card
- `billing:payment_failed` — Show error banner
- `billing:usage_warning` — Usage >80%, show warning banner
- `billing:subscription_cancelled` — Update plan status

### Performance

- **Table pagination:** 10 rows per page, lazy load on scroll
- **Chart data:** Cache last 30 days, refresh every 5 minutes
- **Invoice PDF:** Generate on-demand, cache for 24 hours
- **Payment method list:** Cache 1 hour

### Validation

**Card validation:**
- Luhn algorithm for card number
- Expiry: MM/YY format, not past date
- CVV: 3-4 digits
- Name: 2-50 characters, letters and spaces only

**Phone validation (Click/Payme):**
- Format: +998 XX XXX XX XX
- Must be valid Uzbekistan number

### Security

- **PCI DSS compliance:** Never store full card numbers
- **3D Secure:** Required for all card transactions >$50
- **CSRF protection:** Tokens on all POST/PUT/DELETE
- **Rate limiting:** 10 payment attempts per hour per workspace

---

## Figma AI uchun prompt

```
Design a comprehensive billing and subscription management system for a SaaS platform with 4 tabs: Plan, Payment, Invoices, and Usage.

Plan Tab:
- Current plan card showing Business plan status, pricing $59/mo, next billing date, agent count 7/10 with progress bar
- 4 pricing cards in a grid: Free ($0), Pro ($29), Business ($59), Enterprise (Custom), each showing price, features list with checkmarks, and CTA button
- Add "Mashhur" badge on Pro plan card
- Create a detailed comparison table with 25+ features comparing all 4 plans
- Design upgrade modal (600px) with plan selection radio buttons, billing cycle toggle (Monthly/Yearly), proration info card in yellow, payment summary card, and payment method dropdown
- Design downgrade modal with warning alert in red, features lost list, confirmation checkbox
- Design cancel subscription modal with red alert, reason dropdown, feedback textarea, export data checkbox

Payment Tab:
- Payment methods grid showing 3 cards: Visa card with last 4 digits and "Asosiy" badge, Click with phone number, Payme with phone number
- Add new payment method card with dashed border and + icon
- Design add payment modal with 3 tabs (Card/Click/Payme), card form with number/expiry/CVV/name fields, 3D Secure info card in light indigo
- Transaction history table with 6 columns: Date, Amount, Status, Method, Invoice, Actions

Invoices Tab:
- Filter bar with 3 dropdowns (date range, status, plan) and search input
- Invoice table with 8 columns: ID, Date, Period, Plan, Amount, Status badge (Paid green/Pending yellow/Failed red), Payment Method, Actions (download/view icons)
- Design invoice detail drawer (480px) sliding from right with invoice header, company info, customer info, line items table, totals section in gray background, payment info, footer with print and download PDF buttons

Usage Tab:
- Warning banner at top in yellow: "Storage limitga yaqinlashdi (90%)" with action button
- 4 usage cards in grid showing Chats (847/5000, 17% progress), Agents (7/10, 70%), Storage (28.4/50 GB, 57%), Messages (unlimited)
- Bar chart showing 30-day chat usage with vertical bars in indigo, grid lines, hover tooltip
- Export usage report button

Style:
- Primary color: #4F46E5 (Indigo)
- Success: #10B981, Warning: #F59E0B, Error: #DC2626
- Font: Inter, sizes 12-36px
- Border radius: 8-16px
- Spacing: 8px grid system
- Cards: white background, 1px border #E5E7EB, shadow on hover
- Buttons: 40-44px height, minimum 44px touch target
- Progress bars: 8px height, rounded ends
- Status badges: 24px height, pill shape, colored backgrounds
- Modals: 16px border radius, backdrop rgba(0,0,0,0.5)
- Desktop layout: 1440×900px minimum
```
