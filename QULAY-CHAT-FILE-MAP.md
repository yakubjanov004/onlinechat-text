# QULAY CHAT — Yangi Fayllar Xaritasi

**Hozirgi holat:** 25 papka, 132 HTML fayl
**Qo'shiladigan:** 3 yangi papka + 22 eskiga qo'shish = **88 ta yangi HTML fayl**
**Yakuniy holat:** 28 papka, ~220 HTML fayl

---

## YANGI PAPKALAR (3 ta)

---

### 📁 `26-integrations/` — YANGI PAPKA (20 ta fayl)

Hozir integratsiyalar faqat `16-addons` ichida 2 ta mention. Real product uchun alohida to'liq modul kerak.

```
26-integrations/
├── 01-channels-overview.html      ← Barcha ulangan kanallar ro'yxati, statuslari, on/off toggle
├── 02-telegram-setup.html         ← Telegram Bot token kiritish, webhook URL, bot username
├── 03-telegram-settings.html      ← Telegram kanal sozlamalari: welcome msg, auto-reply, routing
├── 04-telegram-test.html          ← Test xabar yuborish/qabul qilish, connection status check
├── 05-whatsapp-setup.html         ← WhatsApp Business API: BSP tanlash (360dialog/Twilio), number verify
├── 06-whatsapp-templates.html     ← WhatsApp message templates boshqaruvi (Meta approval kerak)
├── 07-whatsapp-settings.html      ← WhatsApp kanal sozlamalari, auto-reply, media limits
├── 08-instagram-setup.html        ← Instagram DM: Facebook App connect, page tanlash, permissions
├── 09-facebook-setup.html         ← Facebook Messenger: Page connect, greeting text, ice breakers
├── 10-viber-setup.html            ← Viber Bot: token, welcome message, keyboard buttons
├── 11-email-setup.html            ← Email-to-ticket: IMAP/SMTP credentials, forwarding address
├── 12-email-settings.html         ← Email kanal: signature, auto-reply, threading rules
├── 13-sms-setup.html              ← SMS gateway: Eskiz/PlayMobile API key, sender name
├── 14-sms-settings.html           ← SMS: template, character limit, delivery reports
├── 15-bitrix24-setup.html         ← Bitrix24 CRM: OAuth connect, field mapping, sync settings
├── 16-amocrm-setup.html           ← AmoCRM: API key, pipeline mapping, deal creation rules
├── 17-zapier-setup.html           ← Zapier/Make: trigger/action ro'yxati, API key, zap templates
├── 18-custom-webhook.html         ← Custom webhook: URL, headers, payload format, retry policy
├── 19-integration-logs.html       ← Barcha integratsiya event loglari: xatolar, muvaffaqiyatli, retry
├── 20-integration-status.html     ← Health dashboard: har bir kanalning holati, last sync, uptime
```

---

### 📁 `27-payments/` — YANGI PAPKA (8 ta fayl)

O'zbekiston/O'rta Osiyo uchun mahalliy to'lov tizimlari. `10-billing` dan alohida chunki bu **payment gateway integratsiyalari**.

```
27-payments/
├── 01-payment-overview.html       ← Ulangan to'lov tizimlari ro'yxati, default tanlash
├── 02-payme-setup.html            ← Payme merchant: ID, key, callback URL, test/production switch
├── 03-click-setup.html            ← Click: merchant ID, service ID, secret key, return URL
├── 04-uzum-setup.html             ← Uzum Bank / Uzcard: terminal ID, API credentials
├── 05-stripe-setup.html           ← Stripe: publishable/secret key, webhook endpoint, currency
├── 06-bank-transfer.html          ← Bank o'tkazma: invoice generation, INN/MFO, requisitlar
├── 07-payment-test.html           ← Test to'lov: sandbox rejimda to'lovni sinash, log ko'rish
├── 08-payment-logs.html           ← To'lov loglari: muvaffaqiyatli/rad/kutilmoqda, refund tarixi
```

---

### 📁 `28-mobile-agent/` — YANGI PAPKA (5 ta fayl)

Agent uchun mobile app sahifalari (responsive yoki PWA).

```
28-mobile-agent/
├── 01-mobile-inbox.html           ← Mobile inbox: chat ro'yxat, unread badge, pull-to-refresh
├── 02-mobile-chat.html            ← Mobile chat: xabar yozish, file attach, quick reply
├── 03-mobile-notifications.html   ← Push notification sozlamalari, sound, vibration, DND
├── 04-mobile-status.html          ← Agent status o'zgartirish: online/away/busy/offline
├── 05-mobile-settings.html        ← Mobile app sozlamalari: theme, language, cache clear
```

---

## MAVJUD PAPKALARGA QO'SHILADIGAN FAYLLAR (55 ta)

---

### 📁 `05-inbox/` — +3 ta fayl (7 → 10)

```
05-inbox/
├── 01-07 ← MAVJUD (7 ta)
├── 08-omnichannel-view.html       ← Barcha kanallar yagona inboxda: Telegram/WhatsApp/Email/Web icon badge
├── 09-channel-filter.html         ← Kanallar bo'yicha filter: faqat Telegram, faqat Email va h.k.
├── 10-internal-notes.html         ← Chat ichida ichki eslatmalar (mijozga ko'rinmaydi, faqat agentlar)
```

---

### 📁 `06-automation/` — +11 ta fayl (7 → 18)

```
06-automation/
├── 01-07 ← MAVJUD (7 ta)
├── 08-chatbot-flow-editor.html    ← Drag & drop visual flow canvas (node-based, Intercom kabi)
├── 09-chatbot-testing.html        ← Bot sandbox: real vaqtda botni test qilish, step-by-step debug
├── 10-chatbot-analytics.html      ← Bot samaradorligi: completion rate, drop-off, avg duration
├── 11-chatbot-variables.html      ← O'zgaruvchilar: {{visitor.name}}, {{order.id}}, custom fields
├── 12-workflow-builder.html       ← Murakkab workflow: IF condition → action chain (multi-step)
├── 13-auto-tagging.html           ← Mazmun asosida avtomatik tag: "billing" so'zi → billing tag
├── 14-auto-assignment.html        ← Round-robin, load-balanced, skill-based chat taqsimlash
├── 15-sla-rules.html              ← SLA: birinchi javob 5 daqiqa, hal qilish 1 soat, ogohlantirish
├── 16-escalation-rules.html       ← Eskalatsiya: 10 min javob yo'q → supervisor, 30 min → manager
├── 17-business-rules.html         ← Biznes qoidalar engine: shartlar + harakatlar kombinatsiyasi
├── 18-scheduled-messages.html     ← Rejalashtirilgan follow-up xabarlar: vaqt, shablon, takrorlash
```

---

### 📁 `08-analytics/` — +4 ta fayl (13 → 17)

```
08-analytics/
├── 01-13 ← MAVJUD (13 ta)
├── 14-agent-goals.html            ← Agent KPI maqsadlari: target vs actual, progress bar
├── 15-csat-trends.html            ← CSAT vaqt bo'yicha tendentsiya: kunlik/haftalik/oylik grafik
├── 16-nps-survey.html             ← Net Promoter Score: so'rovnoma, natijalar, segment bo'yicha
├── 17-feedback-wall.html          ← Barcha mijoz feedbacklari: yulduzlar, izohlar, filtrlash
```

---

### 📁 `09-settings/` — +10 ta fayl (10 → 20)

```
09-settings/
├── 01-08 ← MAVJUD (10 ta)
├── 09-custom-fields.html          ← Custom fieldlar yaratish: kontakt/chat uchun, turi, required/optional
├── 10-tags-manager.html           ← Markaziy tag boshqaruvi: rang, guruh, arxivlash, merge
├── 11-canned-manager.html         ← Admin darajasida shablon javoblar: kategoriya, shortcut, tizim bo'ylab
├── 12-ip-restriction.html         ← IP whitelist/blacklist: faqat ofis IP'dan kirish ruxsati
├── 13-activity-log.html           ← Agent faoliyati: kim qachon login/logout, nima o'zgartirgan
├── 14-file-storage.html           ← Yuklangan fayllar ombori: hajm, limit, tozalash, fayl turlari
├── 15-account-management.html     ← Workspace owner transfer, workspace o'chirish, export all data
├── 16-workspace-switcher.html     ← Multi-workspace: bir accountda bir nechta workspace boshqarish
├── 17-agent-availability.html     ← Agent ish jadvali: hafta kunlari, soatlar, timezone
├── 18-agent-canned-personal.html  ← Agentning shaxsiy shablon javoblari (faqat o'zi uchun)
```

---

### 📁 `10-billing/` — +8 ta fayl (4 → 12)

```
10-billing/
├── 01-04 ← MAVJUD (4 ta)
├── 05-upgrade-downgrade.html      ← Plan o'zgartirish: confirmation modal, proration hisob, effective date
├── 06-billing-alerts.html         ← Limit ogohlantirish: 80% usage, to'lov muddati, card expiry
├── 07-coupon-promo.html           ← Promo kod kiritish: validate, chegirma %, amal qilish muddati
├── 08-trial-management.html       ← Trial: necha kun qoldi, trial features, upgrade CTA
├── 09-payment-history.html        ← To'lov tarixi batafsil: summa, holat, receipt, refund button
├── 10-billing-contacts.html       ← Billing kontakt: buxgalter email, kompaniya nomi, INN, yuridik manzil
├── 11-tax-settings.html           ← Soliq: QQS (VAT) 12%, soliq hisoboti, chek formati
├── 12-seat-management.html        ← Seat boshqaruvi: har bir agent narxi, add/remove seat, cost preview
```

---

### 📁 `15-knowledge-base/` — +9 ta fayl (9 → 18)

```
15-knowledge-base/
├── 01-09 ← MAVJUD (9 ta)
├── 10-kb-versioning.html          ← Maqola versiyalar tarixi: diff ko'rish, revert, kim o'zgartirgan
├── 11-kb-multilingual.html        ← Ko'p tilli maqolalar: UZ/RU/EN, tarjima holati, sync indicator
├── 12-kb-ai-suggest.html          ← AI taklif: chat mazmuniga qarab maqola tavsiya, auto-draft
├── 13-kb-feedback-detail.html     ← "Foydali bo'ldimi?" batafsil: sabablar, commentlar, trend
├── 14-kb-internal.html            ← Ichki KB: faqat agentlar ko'radi, SOP, troubleshooting guide
├── 15-kb-import.html              ← Import: Zendesk/Intercom/CSV/MD dan maqolalar import qilish
├── 16-kb-custom-domain.html       ← Custom domain: help.kompaniya.uz DNS sozlash, SSL
├── 17-kb-seo.html                 ← SEO: meta title, description, og:image, sitemap, robots.txt
├── 18-kb-widget-link.html         ← Widget ichida KB: qaysi maqolalar ko'rinadi, suggest logic
```

---

### 📁 `03-onboarding/` — +3 ta fayl (6 → 9)

```
03-onboarding/
├── 01-06 ← MAVJUD (6 ta)
├── 07-progress-checklist.html     ← "3/7 qadamni bajardingiz" progress tracker, skip/complete
├── 08-interactive-tutorial.html   ← Spotlight tooltip tour: inbox, chat, settings step-by-step
├── 09-first-chat-demo.html        ← Demo chat simulation: soxta mijoz bilan mashq qilish
```

---

### 📁 `16-addons/` — +3 ta fayl (4 → 7)

```
16-addons/
├── 01-04 ← MAVJUD (4 ta)
├── 05-developer-sdk.html          ← SDK documentation: API endpoints, auth, code examples
├── 06-submit-app.html             ← App yuborish: form, screenshot, description, review jarayoni
├── 07-app-reviews.html            ← App sharhlar: yulduz, izoh, developer javob, report
```

---

### 📁 `17-developer/` — +2 ta fayl (3 → 5)

```
17-developer/
├── 01-03 ← MAVJUD (3 ta)
├── 04-api-usage.html              ← API usage dashboard: so'rovlar soni, rate limit, quota
├── 05-sandbox.html                ← API sandbox: test endpoint, request/response preview
```

---

### 📁 `04-dashboard/` — +2 ta fayl (4 → 6)

```
04-dashboard/
├── 01-03 ← MAVJUD (4 ta, 01-dashboard duplikat o'chiriladi)
├── 04-agent-quick-actions.html    ← Agent tezkor harakatlar: yangi chat, kontakt qo'shish, status
├── 05-manager-dashboard.html      ← Manager dashboard: team overview, SLA status, escalations
```

---

## UMUMIY HISOBOT

```
┌─────────────────────────┬──────────┬──────────┬──────────┐
│ Papka                   │ Hozir    │ Yangi    │ Jami     │
├─────────────────────────┼──────────┼──────────┼──────────┤
│ 03-onboarding           │    6     │   +3     │    9     │
│ 04-dashboard            │    4     │   +2     │    6     │
│ 05-inbox                │    7     │   +3     │   10     │
│ 06-automation           │    7     │  +11     │   18     │
│ 08-analytics            │   13     │   +4     │   17     │
│ 09-settings             │   10     │  +10     │   20     │
│ 10-billing              │    4     │   +8     │   12     │
│ 15-knowledge-base       │    9     │   +9     │   18     │
│ 16-addons               │    4     │   +3     │    7     │
│ 17-developer            │    3     │   +2     │    5     │
│ 26-integrations (YANGI) │    0     │  +20     │   20     │
│ 27-payments (YANGI)     │    0     │   +8     │    8     │
│ 28-mobile-agent (YANGI) │    0     │   +5     │    5     │
├─────────────────────────┼──────────┼──────────┼──────────┤
│ O'zgarishsiz papkalar   │   65     │    0     │   65     │
├─────────────────────────┼──────────┼──────────┼──────────┤
│ JAMI                    │  132     │  +88     │  220     │
└─────────────────────────┴──────────┴──────────┴──────────┘
```

**3 ta yangi papka + 10 ta eskiga qo'shish = 88 ta yangi HTML fayl**
