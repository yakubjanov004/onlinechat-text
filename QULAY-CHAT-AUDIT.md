# QULAY CHAT v3 — To'liq Audit & Roadmap

## Hozirgi holat: 132 HTML sahifa, 25 modul, 2 rol (Admin/Agent)

Loyiha **demo/prototype** sifatida juda kuchli bazaga ega. Lekin **real production SaaS** uchun bir nechta muhim sohalar nazardan chetda qolgan. Quyida batafsil tahlil.

---

## 1. BILLING — Hozirgi holat va yetishmayotganlar

### Mavjud (4 sahifa):
- Plan tanlash (Starter/Pro/Enterprise)
- Payment Methods
- Invoices
- Usage

### Qo'shish kerak (real billing uchun):

**A) To'lov tizimlari integratsiyasi (O'zbekiston uchun muhim!):**
- **Payme** integratsiya sahifasi — O'zbekistonda eng keng tarqalgan
- **Click** integratsiya sahifasi — ikkinchi mashhur to'lov tizimi
- **Uzum Bank / Uzcard** — kartadan to'g'ridan-to'g'ri yechish
- **Stripe** — xalqaro mijozlar uchun (O'rta Osiyo tashqarisidan)
- **Xalqaro kartalar** (Visa/Mastercard) — Stripe orqali

**B) Billing sahifalari yetishmaydi:**
- `05-upgrade-downgrade.html` — Plan o'zgartirish jarayoni (confirmation, proration)
- `06-billing-alerts.html` — Limit yaqinlashganda ogohlantirish
- `07-coupon-promo.html` — Promo kodlar, chegirma tizimi
- `08-trial-management.html` — 14-kun trial boshqaruvi, trial tugash ogohlantirishi
- `09-payment-history.html` — To'lov tarixi batafsil (muvaffaqiyatli/rad etilgan)
- `10-billing-contacts.html` — Billing uchun alohida kontakt ma'lumotlari
- `11-tax-settings.html` — QQS (VAT) sozlamalari, O'zbekiston soliq tizimi

**C) Billing logika:**
- Subscription lifecycle: trial → active → past_due → canceled → churned
- Dunning management (to'lov o'tmasa nima bo'ladi?)
- Grace period (3-5 kun)
- Auto-downgrade to free plan
- Seat-based pricing (har bir agent uchun alohida narx)

---

## 2. KNOWLEDGE BASE — Yetishmayotganlar

### Mavjud (9 sahifa): Dashboard, Editor, Categories, Settings, Analytics, Public pages

### Qo'shish kerak:

- `10-kb-versioning.html` — Maqola versiyalari tarixi (revision history)
- `11-kb-multilingual.html` — Maqolalarni ko'p tilda boshqarish (UZ/RU/EN)
- `12-kb-ai-suggest.html` — AI orqali maqola taklif qilish (chat asosida)
- `13-kb-feedback.html` — "Bu maqola foydali bo'ldimi?" feedback tizimi (batafsil)
- `14-kb-internal.html` — Faqat agentlar uchun ichki KB (mijozlarga ko'rinmaydi)
- `15-kb-import.html` — Zendesk/Intercom/Crisp'dan maqolalarni import qilish
- `16-kb-custom-domain.html` — help.kompaniya.uz kabi custom domain sozlash
- `17-kb-seo.html` — SEO meta taglar, sitemap, og:image sozlamalari
- `18-kb-widget-integration.html` — Chat widget ichida KB maqolalarni ko'rsatish (mavjud lekin chuqurlashtirish kerak)

---

## 3. AUTOMATION — Yetishmayotganlar

### Mavjud (7 sahifa): Working Hours, Auto Reply, Triggers, Greetings, Chatbot Builder, Bot Templates, Routing Rules

### Qo'shish kerak:

**A) Chatbot Builder chuqurlashtirish:**
- `08-chatbot-flow-editor.html` — Drag & drop visual flow editor (hozir list ko'rinishida, real product uchun **canvas-based** bo'lishi kerak — Intercom/Crisp kabi)
- `09-chatbot-testing.html` — Botni test qilish sandbox muhiti
- `10-chatbot-analytics.html` — Bot samaradorligi: completion rate, drop-off nuqtalari
- `11-chatbot-variables.html` — O'zgaruvchilar: {{visitor.name}}, {{visitor.email}}, custom fields

**B) Automation qo'shimchalari:**
- `12-workflow-builder.html` — Murakkab workflow: IF chat tag = "billing" AND priority = "high" → assign to @Sardor + send Telegram notification
- `13-auto-tagging.html` — Chatni mazmuniga qarab avtomatik tag qo'yish
- `14-auto-assignment.html` — Round-robin, load-balanced, skill-based taqsimlash
- `15-sla-rules.html` — SLA qoidalari: 5 daqiqa ichida javob, 1 soat ichida hal qilish
- `16-escalation-rules.html` — Eskalatsiya: javob berilmasa → supervisor'ga, keyin manager'ga
- `17-business-rules.html` — Biznes qoidalari engine: shartlar + harakatlar kombinatsiyasi
- `18-scheduled-messages.html` — Rejalashtirilgan xabarlar (follow-up)

---

## 4. INTEGRATSIYALAR — Eng katta bo'shliq!

### Mavjud: Addons catalog (4 sahifa, faqat WhatsApp va SMS eslatilgan)

### Real product uchun zarur bo'lgan integratsiyalar:

**A) Kommunikatsiya kanallari (O'zbekiston/O'rta Osiyo uchun kritik):**

| Kanal | Prioritet | Sahifa kerakmi? |
|-------|-----------|-----------------|
| **Telegram Bot** | 🔴 ENG MUHIM | Ha — setup, webhook, test |
| **WhatsApp Business API** | 🔴 Muhim | Ha — BSP tanlash, template, test |
| **Instagram DM** | 🟡 O'rta | Ha — Facebook app connect |
| **Facebook Messenger** | 🟡 O'rta | Ha — Page connect |
| **Viber** | 🟡 O'rta (O'rta Osiyo) | Ha |
| **Email (IMAP/SMTP)** | 🔴 Muhim | Ha — email-to-ticket |
| **SMS (Eskiz, PlayMobile)** | 🟡 O'rta | Ha — O'zbekiston SMS provayderlar |

**B) CRM va biznes tizimlar:**

| Integratsiya | Prioritet | Izoh |
|-------------|-----------|------|
| **Bitrix24** | 🔴 Muhim | O'zbekistonda eng keng tarqalgan CRM |
| **AmoCRM** | 🟡 O'rta | Rossiya/O'rta Osiyo bozori |
| **HubSpot** | 🟢 Kelajak | Xalqaro bozor |
| **1C** | 🟡 O'rta | O'zbekiston biznes muhiti |

**C) Developer integratsiyalar:**

| Integratsiya | Sahifalar kerak |
|-------------|----------------|
| **Zapier / Make** | Setup sahifasi, trigger/action ro'yxati |
| **n8n** | Self-hosted workflow |
| **Custom Webhook** | Mavjud lekin chuqurlashtirish kerak |

**D) Har bir integratsiya uchun kerak bo'lgan sahifalar:**
- `XX-setup.html` — Ulanish jarayoni (token, OAuth)
- `XX-settings.html` — Kanal sozlamalari
- `XX-test.html` — Test xabar yuborish/qabul qilish
- `XX-status.html` — Ulanish holati, error log

**Yangi modul: `26-integrations/` (yoki `16-addons/` ni kengaytirish)**
Minimum 15-20 sahifa kerak bo'ladi.

---

## 5. ADMIN UCHUN YETISHMAYOTGANLAR

### Sidebar holati (hozirgi):
Admin sidebar 5 bo'limda 18 ta nav item. Bu yaxshi, lekin quyidagilar yo'q:

**Qo'shish kerak:**
- **Integrations** — sidebar'da alohida bo'lim (hozir faqat Addons ichida)
- **Audit Log** — GDPR ichida bor, lekin admin uchun alohida va batafsil bo'lishi kerak
- **Workspace Switcher** — Bir nechta workspace boshqarish (multi-tenant)
- **Account Management** — Owner transferi, workspace o'chirish
- **API Usage Dashboard** — API limitlar, so'rovlar soni, rate limiting holati
- **Custom Fields Manager** — Kontakt/chat uchun custom fieldlar yaratish
- **Tags Manager** — Taglarni markaziy boshqarish (hozir faqat chat ichida)
- **Canned Responses Manager** — Admin darajasida shablon javoblarni boshqarish
- **File Storage** — Yuklangan fayllar ombori va limiti
- **IP Whitelist / Blacklist** — Security sozlamasi
- **Activity Log** — Kim qachon nima qilgan (agent faoliyati)
- **Export Center** — Barcha ma'lumotlarni eksport qilish markazi

### Sahifalar kerak:
- `09-settings/09-custom-fields.html`
- `09-settings/10-tags-manager.html`
- `09-settings/11-canned-manager.html`
- `09-settings/12-ip-restriction.html`
- `09-settings/13-activity-log.html`
- `09-settings/14-file-storage.html`
- `09-settings/15-account-management.html`
- `09-settings/16-workspace-switcher.html`

---

## 6. AGENT UCHUN YETISHMAYOTGANLAR

### Hozirgi Agent sidebar: Dashboard, Inbox, Contacts, Team Chat, KB, My Stats, Profile, Notifications, Help

### Qo'shish kerak:

- **Agent Status Toggle** — Online/Away/Busy/Offline holat almashtirish (sidebar footer'da, hozir faqat "Online" ko'rsatadi)
- **Quick Actions Panel** — Tezkor harakatlar: yangi chat boshlash, kontakt qo'shish
- **Personal Canned Responses** — Agentning shaxsiy shablon javoblari
- **Agent Availability Schedule** — "Men 14:00-18:00 da ishlayman" shaxsiy jadval
- **Agent Performance Goals** — Shaxsiy KPI maqsadlari va progress
- **Keyboard Shortcuts Reference** — "?" modal mavjud, lekin sidebar'dan ham kirish kerak
- **Internal Notes** — Chat ichida ichki eslatmalar (mijozga ko'rinmaydi)
- **Visitors** — Agent ham online visitorlarni ko'rishi kerakmi? (role permission bilan)

### Sahifalar kerak:
- `04-dashboard/04-agent-quick-actions.html`
- `09-settings/17-agent-availability.html`
- `09-settings/18-agent-canned-personal.html`
- `08-analytics/14-agent-goals.html`

---

## 7. SIDEBAR — TAKLIF QILINADIGAN O'ZGARISHLAR

### Hozirgi muammolar:
1. **Collapse/Expand** — Sidebar kichraytirish mavjud, lekin state saqlanmaydi (localStorage kerak)
2. **Badge'lar statik** — Hamma badge hardcoded (12, 5, 3...), real-time bo'lishi kerak
3. **Subnav** — Har bir sahifada subnav tabs bor, lekin sidebar'da nested nav yo'q
4. **Mobile** — Hamburger menu holati noma'lum

### Taklif:
- Sidebar **collapse state** localStorage'da saqlash
- **Nested navigation** — Automation, Analytics, Settings kabi katta bo'limlar uchun
- **Favorites / Pinned** — Tez-tez foydalaniladigan sahifalarni pin qilish
- **Recent Pages** — Oxirgi ko'rilgan sahifalar
- Sidebar footer'da **Agent status picker** (Online → Away → Offline dropdown)

---

## 8. REAL PRODUCT UCHUN YANA KERAK BO'LGAN MODULLAR

### 8.1 Omnichannel Inbox
Hozir inbox faqat web chat uchun. Real omnichannel uchun:
- Har bir kanaldan kelgan xabarlar **yagona inbox**da
- Kanal badge'i (Telegram icon, WhatsApp icon, Email icon)
- Kanallar bo'yicha filter
- Cross-channel conversation (bir mijoz Telegramdan boshladi, WhatsApp'dan davom ettirdi)
- `05-inbox/08-omnichannel-view.html`
- `05-inbox/09-channel-filter.html`

### 8.2 CSAT va Feedback Tizimi
- Post-chat survey (mavjud — 04-widget-csat), lekin:
- `CSAT trends dashboard` — vaqt bo'yicha qoniqish tendentsiyasi
- `NPS survey` — Net Promoter Score
- `Agent rating` — Har bir agent uchun reyting
- `Feedback wall` — Barcha feedbacklar bir sahifada

### 8.3 Mobile App sahifalari
- Agent uchun mobile app dizayni (hozir faqat widget mobile bor)
- Push notification sozlamalari
- Mobile inbox
- Mobile quick reply

### 8.4 Onboarding Checklist (post-registration)
Mavjud (03-onboarding), lekin:
- **Progress tracker** — "Siz 3/7 qadamni bajardingiz"
- **Interactive tutorial** — Spotlight/tooltip asosida
- **First chat simulation** — Demo chat bilan mashq

### 8.5 Marketplace / App Store
Hozir Addons bor, lekin real marketplace uchun:
- Developer SDK documentation
- App submission flow
- App review/rating
- Revenue sharing settings
- `16-addons/05-developer-sdk.html`
- `16-addons/06-submit-app.html`
- `16-addons/07-app-reviews.html`

---

## 9. O'ZBEKISTON VA O'RTA OSIYO UCHUN MAXSUS TALABLAR

### 9.1 Til va Lokalizatsiya
- **O'zbek tili** — Hozir aralash (UZ/EN). To'liq UZ lokalizatsiya kerak
- **Rus tili** — O'rta Osiyoda majburiy
- **Qozoq, Tojik, Qirg'iz** — Kelajak uchun
- **RTL** support (kelajakda arab bozori uchun)

### 9.2 To'lov tizimlari
- Payme, Click, Uzum — yuqorida aytilgan
- **UZS valyutasi** — Narxlar so'mda ko'rsatilishi kerak
- **Bank o'tkazma** — Invoice asosida to'lash imkoniyati (korporativ mijozlar)

### 9.3 Regulyativ talablar
- O'zbekiston **Shaxsiy ma'lumotlar to'g'risidagi qonun** (2019)
- Ma'lumotlarni O'zbekiston serverlarida saqlash (data residency)
- Eksport cheklovi — foydalanuvchi ma'lumotlarini chet elga chiqarmaslik

### 9.4 Mahalliy integratsiyalar
- **Eskiz SMS** — O'zbekiston SMS gateway
- **PlayMobile SMS** — Alternativ SMS
- **Telegram** — O'rta Osiyoda asosiy messenger (#1 prioritet)
- **MyID** — Identifikatsiya tizimi (korporativ uchun)

---

## 10. OLIB TASHLASH YOKI BIRLASHTIRISH MUMKIN BO'LGANLAR

### Birlashtirish taklifi:
1. **09-settings/06, 07, 08** (privacy-export, privacy-delete, privacy-settings) → **Bitta `privacy-center.html`** sahifaga birlashtirish
2. **04-dashboard/01-dashboard.html** va **01-dashboard-admin.html** → Duplikat, bittasini o'chirish
3. **21-help-support/01, 02** (help-center, video-tutorials) → Bitta help sahifaga birlashtirish mumkin
4. **20-notifications** — 3 sahifa kerakmi? 2 taga qisqartirish (dropdown + preferences)
5. **25-dark-mode** — Bu alohida modul emas, global toggle bo'lishi kerak (Settings ichida)

### Olib tashlash:
- Hozircha hech narsa o'chirmaslik. 132 sahifa barchasi kerakli. Faqat yuqoridagi birlashtirish taklifi.

---

## 11. XULOSA VA PRIORITET XARITASI

### 🔴 P0 — Darhol kerak (MVP uchun):
| # | Nima | Taxminiy sahifalar |
|---|------|--------------------|
| 1 | Telegram integratsiya (setup/test/status) | 3-4 |
| 2 | Payme/Click to'lov integratsiyasi | 3-4 |
| 3 | Agent status toggle (online/away/offline) | Sidebar fix |
| 4 | Chatbot visual flow editor (canvas) | 1-2 |
| 5 | Omnichannel inbox (kanal filtri) | 2-3 |
| 6 | Trial management | 1-2 |
| 7 | SLA qoidalari | 1 |

### 🟡 P1 — Launch uchun kerak:
| # | Nima | Taxminiy sahifalar |
|---|------|--------------------|
| 1 | WhatsApp Business integratsiya | 3-4 |
| 2 | Email-to-ticket (IMAP) | 2-3 |
| 3 | Bitrix24 CRM integratsiya | 2-3 |
| 4 | KB versioning + multilingual | 2-3 |
| 5 | Workflow builder | 2-3 |
| 6 | Custom fields manager | 1-2 |
| 7 | Activity/Audit log (batafsil) | 1-2 |
| 8 | Billing alerts + dunning | 2-3 |
| 9 | Workspace switcher | 1-2 |
| 10 | UZS valyuta + mahalliy pricing | 1 |

### 🟢 P2 — Kelajakda:
| # | Nima |
|---|------|
| 1 | Instagram DM, Facebook Messenger, Viber |
| 2 | Zapier/Make integratsiya |
| 3 | NPS survey |
| 4 | Mobile agent app |
| 5 | Marketplace / App Store |
| 6 | AI-powered auto-responses (GPT) |
| 7 | AmoCRM, HubSpot, 1C |
| 8 | Advanced workflow automation |
| 9 | Custom domain KB |
| 10 | Multi-workspace management |

---

## 12. RAQAMLAR

| Ko'rsatkich | Hozir | Real product uchun kerak |
|-------------|-------|--------------------------|
| HTML sahifalar | 132 | ~200-220 |
| Modullar | 25 | ~30-32 |
| Integratsiya sahifalari | 2 (WhatsApp, SMS mention) | 25-30 |
| Billing sahifalari | 4 | 10-12 |
| Automation sahifalari | 7 | 15-18 |
| KB sahifalari | 9 | 15-18 |
| Admin-only sahifalar | ~40 | ~60-70 |
| Agent sahifalar | ~15 | ~25-30 |

**Yetishmayotgan sahifalar soni: taxminan 70-90 ta yangi sahifa.**

---

*Tayyorlangan: 2026-yil, 3-mart*
*Loyiha: QULAY CHAT v3 — O'zbekiston va O'rta Osiyo uchun SaaS chat platformasi*
