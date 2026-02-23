# QULAY CHAT — Figma Design System

QULAY CHAT loyihasining dizayn tizimi. Har bir ekran uchun: HTML → Figma Plugin API kodi → Figma canvas.

---

## Loyiha tuzilishi

```
onlinechat/
├── README.md                      ← Shu fayl (agent qo'llanmasi)
├── figma-ws-bridge.js             ← ASOSIY SKRIPT: Figmaga dizayn yuborish
├── figma-bridge.js                ← Eski skript (CDP) — ISHLATMA
│
├── figma-docs/                    ← Dizayn spetsifikatsiyalari (34 ta .md fayl)
├── figma-html-pages/              ← HTML prototiplar (reference uchun)
├── figma-designs/                 ← Figma Plugin API kodlari (.js) — agent yozadi
│
└── figma-console-mcp/
    └── figma-desktop-bridge/      ← Figma plugin (manifest.json, code.js, ui.html)
```

---

## Ekranlar holati (Status)

Legend: ✅ Tayyor | 🔄 HTML bor, Figma yo'q | ⬜ Boshlanmagan

### 02 — Auth

| # | Ekran | HTML | Figma .js |
|---|-------|------|-----------|
| 01 | Login | ✅ | ✅ `figma-designs/02-auth/01-login.js` |
| 02 | Register | ✅ | 🔄 kerak: `figma-designs/02-auth/02-register.js` |
| 03 | Email Verify | ✅ | 🔄 kerak: `figma-designs/02-auth/03-email-verify.js` |
| 04 | Forgot Password | ✅ | 🔄 kerak: `figma-designs/02-auth/04-forgot-password.js` |
| 05 | Welcome (first login) | ✅ | ✅ `figma-designs/02-auth/05-welcome-first-login.js` |

### 03 — Onboarding

| # | Ekran | HTML | Figma .js |
|---|-------|------|-----------|
| 01 | Welcome | ✅ | ✅ `figma-designs/03-onboarding/01-welcome.js` |
| 02 | Setup (workspace name) | ✅ | ✅ `figma-designs/03-onboarding/02-onboarding-setup.js` |
| 03 | Workspace preview | ✅ | 🔄 kerak: `figma-designs/03-onboarding/03-workspace.js` |
| 04 | Widget Customize | ✅ | ✅ `figma-designs/03-onboarding/04-widget-customize.js` |
| 05 | Widget Install | ✅ | ✅ `figma-designs/03-onboarding/05-widget-install.js` |
| 06 | Widget Verify | ✅ | ✅ `figma-designs/03-onboarding/06-widget-verify.js` |

### 04 — Dashboard

| # | Ekran | HTML | Figma .js |
|---|-------|------|-----------|
| 01 | Dashboard | ✅ | 🔄 kerak: `figma-designs/04-dashboard/01-dashboard.js` |

### 05 — Inbox

| # | Ekran | HTML | Figma .js |
|---|-------|------|-----------|
| 01 | Inbox Chat | ✅ | ✅ `figma-designs/05-inbox/01-inbox-chat.js` |

### 06 — Automation

| # | Ekran | HTML | Figma .js |
|---|-------|------|-----------|
| 01 | Working Hours | ✅ | ✅ `figma-designs/06-automation/01-working-hours.js` |

### Qolgan bo'limlar (HTML ham, Figma ham yo'q)

| Bo'lim | Spec fayl | Ekranlar |
|--------|-----------|----------|
| 01-landing | `figma-docs/02-06-landing-*.md` | Hero, Trust, Features, Integrations, Pricing+CTA |
| 07-team | `figma-docs/14-team.md` | Team management |
| 08-analytics | `figma-docs/15,25-analytics.md` | Analytics, Advanced Analytics |
| 09-settings | `figma-docs/16-settings.md` | Settings |
| 10-billing | `figma-docs/17-billing.md` | Billing |
| 11-chat-widget | `figma-docs/18-chat-widget.md` | Chat widget (mijoz tomoni) |
| 12-contacts | `figma-docs/20-contacts-crm.md` | Contacts/CRM |
| 13-visitors | `figma-docs/21-online-visitors.md` | Online visitors |
| 14-team-chat | `figma-docs/22-team-chat.md` | Team chat (ichki) |
| 15-knowledge-base | `figma-docs/23-knowledge-base.md` | Knowledge base |
| 16-addons | `figma-docs/24-addons-marketplace.md` | Addons marketplace |
| 17-developer | `figma-docs/26-developer.md` | Developer portal |
| 18-system | `figma-docs/27-34-*.md` | Error, Search, Help, Notifications, Multi-lang, GDPR, Email, Dark mode |

---

## Keyingi qadam: Navbatdagi ekranlar

Hozir 🔄 holatdagi ekranlarni Figmaga o'tkazish kerak:

```
1. figma-designs/02-auth/02-register.js
2. figma-designs/02-auth/03-email-verify.js
3. figma-designs/02-auth/04-forgot-password.js
4. figma-designs/03-onboarding/03-workspace.js
5. figma-designs/04-dashboard/01-dashboard.js
```

---

## Har bir ekran uchun ish tartibi

### Bitta ekranni Figmaga chizish (ketma-ketlik)

```
1. figma-docs/ dagi spec o'qi           → figma-docs/07-auth-signup-login.md
2. figma-html-pages/ dagi HTML ko'r    → figma-html-pages/02-auth/02-register.html
3. figma-designs/ ga .js fayl yoz      → figma-designs/02-auth/02-register.js
4. Terminal: server ishga tushir        → node figma-ws-bridge.js --file figma-designs/02-auth/02-register.js
5. Figmada: plugin Run/Restart
6. Natija tekshir → { "success": true }
7. Keyingi ekranga o't
```

### figma-ws-bridge.js — to'g'ri tartib (MUHIM)

```
BIRINCHI: node figma-ws-bridge.js --file <fayl>   ← terminal
IKKINCHI: Figmada plugin Run/Restart               ← Figma Desktop
```

Tartib buzilsa plugin ulanmaydi (60s timeout, keyin xato).

---

## figma-ws-bridge.js CLI

```bash
# Test (ishlashni tekshirish)
node figma-ws-bridge.js --test

# Fayl execute
node figma-ws-bridge.js --file figma-designs/02-auth/02-register.js

# Inline kod
node figma-ws-bridge.js --code "return figma.currentPage.name"
```

Muvaffaqiyatli natija:
```json
{ "success": true, "result": { "success": true, ... } }
```

---

## Plugin sozlash (bir martalik)

Figma Desktop → **Plugins** → **Development** → **Import plugin from manifest...**
```
C:\Users\user\OneDrive\Desktop\onlinechat\figma-console-mcp\figma-desktop-bridge\manifest.json
```

---

## figma-designs/ fayl shabloni

```javascript
// figma-designs/02-auth/02-register.js
// Spec: figma-docs/07-auth-signup-login.md
// HTML: figma-html-pages/02-auth/02-register.html
// Canvas: X=490, Y=0 (Auth qatori, 2-ekran)

(async () => {
  // 1. FONTLAR — har doim birinchi
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "SemiBold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  // 2. ASOSIY FRAME
  const screen = figma.createFrame();
  screen.name = "02 - Register";
  screen.resize(390, 844);
  screen.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  screen.x = 490;   // Auth qatori: Login(0), Register(490), Email(980), Forgot(1470)
  screen.y = 0;

  // 3. ELEMENTLAR
  // ... (HTML ga qarab yoziladi)

  // 4. QAYTARISH
  figma.currentPage.selection = [screen];
  figma.viewport.scrollAndZoomIntoView([screen]);
  return { success: true, screenId: screen.id, screenName: screen.name };
})();
```

**Qoidalar:**
- Fayl `(async () => { ... })();` shaklida bo'ladi
- `return` IIFE ichida bo'ladi
- Har bir text node uchun: yaratgandan KEYIN `await figma.loadFontAsync(text.fontName)`, keyin `.characters`
- X/Y pozitsiya Canvas grid ga mos bo'ladi (quyida)

---

## Canvas grid (X/Y pozitsiyalar)

Ekranlar 390×844, gap = 100px:

```
QATOR 0 — Auth (Y=0):
  Login       X=0
  Register    X=490
  Email Verify X=980
  Forgot PW   X=1470

QATOR 1 — Onboarding (Y=944):
  Welcome     X=0
  Setup       X=490
  Workspace   X=980
  Widget Customize X=1470
  Widget Install   X=1960
  Widget Verify    X=2450

QATOR 2 — Dashboard (Y=1888):
  Dashboard   X=0

QATOR 3 — Inbox (Y=2832):
  Inbox Chat  X=0

QATOR 4 — Automation (Y=3776):
  Working Hours X=0
```

---

## Kod namunalari

### Text node (MUHIM: font tartib)

```javascript
// TO'G'RI:
const t = figma.createText();
await figma.loadFontAsync(t.fontName);   // default font yukla
t.characters = "Matn";
t.fontSize = 16;

// Bold qilish uchun (oldin yukla, keyin o'rnat):
await figma.loadFontAsync({ family: "Inter", style: "Bold" });
t.fontName = { family: "Inter", style: "Bold" };
t.characters = "Bold matn";

// NOTO'G'RI (xato beradi):
const t = figma.createText();
t.characters = "Matn";  // ← font yuklanmagan, xato!
```

### Frame / Container

```javascript
const card = figma.createFrame();
card.name = "Card";
card.resize(358, 120);
card.cornerRadius = 12;
card.fills = [{ type: 'SOLID', color: { r: 0.97, g: 0.97, b: 1 } }];
card.x = 16;
card.y = 200;
screen.appendChild(card);
```

### Button

```javascript
const btn = figma.createFrame();
btn.name = "Button / Primary";
btn.resize(358, 52);
btn.cornerRadius = 10;
btn.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
btn.x = 16;
btn.y = 700;

const label = figma.createText();
await figma.loadFontAsync({ family: "Inter", style: "SemiBold" });
label.fontName = { family: "Inter", style: "SemiBold" };
label.characters = "Ro'yxatdan o'tish";
label.fontSize = 16;
label.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
label.x = (358 - label.width) / 2;
label.y = 16;
btn.appendChild(label);
screen.appendChild(btn);
```

### Input field

```javascript
const input = figma.createFrame();
input.name = "Input / Email";
input.resize(358, 52);
input.cornerRadius = 10;
input.fills = [{ type: 'SOLID', color: { r: 0.97, g: 0.97, b: 0.97 } }];
input.strokes = [{ type: 'SOLID', color: { r: 0.88, g: 0.88, b: 0.9 } }];
input.strokeWeight = 1;
input.x = 16;
input.y = 300;

const ph = figma.createText();
await figma.loadFontAsync(ph.fontName);
ph.characters = "Email manzil";
ph.fontSize = 15;
ph.fills = [{ type: 'SOLID', color: { r: 0.6, g: 0.6, b: 0.65 } }];
ph.x = 16;
ph.y = 16;
input.appendChild(ph);
screen.appendChild(input);
```

### Shadow

```javascript
element.effects = [{
  type: 'DROP_SHADOW',
  color: { r: 0, g: 0, b: 0, a: 0.08 },
  offset: { x: 0, y: 4 },
  radius: 16,
  spread: 0,
  visible: true,
  blendMode: 'NORMAL'  // MAJBURIY — bo'lmasa xato
}];
```

### Ranglar

```javascript
// Primary blue   #4F46E5  → { r: 79/255,  g: 70/255,  b: 229/255 }
// Dark text      #111827  → { r: 17/255,  g: 24/255,  b: 39/255  }
// Gray text      #6B7280  → { r: 107/255, g: 114/255, b: 128/255 }
// Light gray bg  #F9FAFB  → { r: 249/255, g: 250/255, b: 251/255 }
// Border         #E5E7EB  → { r: 229/255, g: 231/255, b: 235/255 }
// White          #FFFFFF  → { r: 1, g: 1, b: 1 }
// Success green  #10B981  → { r: 16/255,  g: 185/255, b: 129/255 }
// Error red      #EF4444  → { r: 239/255, g: 68/255,  b: 68/255  }
```

---

## Xatoliklar va yechimlar

| Xatolik | Sabab | Yechim |
|---------|-------|--------|
| `Cannot write to node with unloaded font` | Font yuklanmagan | `await figma.loadFontAsync(text.fontName)` — characters dan OLDIN |
| Plugin ulanmadi (60s timeout) | Tartib noto'g'ri | Server BIRINCHI, keyin Figmada plugin Run/Restart |
| `blendMode` xatosi shadow'da | `blendMode` yo'q | `blendMode: 'NORMAL'` qo'sh |
| `FILL can only be set on children of auto-layout` | appenddan oldin FILL | `appendChild` KEYIN `layoutSizingHorizontal = "FILL"` |
| Port band xatosi | 9226 band | Avtomatik 9227-9232 sinab ko'radi |
| `result.success: false` | Plugin kodi xatosi | `result.error` xabarini o'qi va tuzat |

---

## Figma Plugin API — tez ma'lumotnoma

```javascript
// Yaratish
figma.createFrame()          // Frame/container
figma.createText()           // Text
figma.createRectangle()      // To'rtburchak
figma.createEllipse()        // Doira
figma.createLine()           // Chiziq
figma.createComponent()      // Component

// Qidirish
figma.currentPage.findOne(n => n.name === "Nom")
figma.currentPage.findAll(n => n.type === "TEXT")
figma.currentPage.children   // top-level nodelar

// Navigatsiya
figma.currentPage.selection = [node]
figma.viewport.scrollAndZoomIntoView([node])

// Font
await figma.loadFontAsync({ family: "Inter", style: "Regular" })
await figma.loadFontAsync(textNode.fontName)

// Sahifa
figma.createPage()
figma.currentPage
figma.root.children
```

---

## Texnik ma'lumot

| Parametr | Qiymat |
|----------|--------|
| Transport | WebSocket (CDP emas — Figma 126+ bloklaydi) |
| Server port | 9226 (band bo'lsa 9227…9232) |
| Plugin port skaneri | 9223–9232 |
| Ulanish timeout | 60 soniya |
| Ekran o'lchami | 390×844 (iPhone 14) |
| Gap ekranlar orasida | 100px |
| Font | Inter (Regular, Medium, SemiBold, Bold) |
| Rang format | `{ r: 0–1, g: 0–1, b: 0–1 }` |
