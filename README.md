# CHATFLOW — Figma Design System

CHATFLOW loyihasining dizayn tizimi. HTML sahifalar yaratiladi va Figma'da avtomatik chiziladi.

---

## Loyiha tuzilishi

```
onlinechat/
├── README.md                  ← Shu fayl (qo'llanma)
├── figma-bridge.js            ← Figma'ga dizayn yuborish skripti
├── package.json
│
├── figma-docs/                ← Dizayn spetsifikatsiyalari (34 sahifa)
│   ├── 00-loyiha-umumiy.md
│   ├── 01-design-system.md
│   ├── 02-06: Landing sahifalari
│   └── 07-34: App sahifalari
│
figma-html-pages/
├── 01-landing/          ← docs 02-06: Landing sahifalar (Hero, Trust, Features, Integration, Pricing)
├── 02-auth/             ← doc 07: Login, Register, Email Verify, Forgot Password
├── 03-onboarding/       ← docs 08-09: Welcome, Workspace, Widget, Install
├── 04-dashboard/        ← doc 10: Dashboard layout
├── 05-inbox/            ← docs 11-12: Inbox chat, Advanced
├── 06-automation/       ← doc 13: Automation & Availability
├── 07-team/             ← doc 14: Team management
├── 08-analytics/        ← docs 15,25: Analytics, Advanced Analytics
├── 09-settings/         ← doc 16: Settings
├── 10-billing/          ← doc 17: Billing
├── 11-chat-widget/      ← doc 18: Chat widget (mijoz tomoni)
├── 12-contacts/         ← doc 20: Contacts/CRM
├── 13-visitors/         ← doc 21: Online visitors
├── 14-team-chat/        ← doc 22: Team chat (ichki)
├── 15-knowledge-base/   ← doc 23: Knowledge base
├── 16-addons/           ← doc 24: Addons marketplace
├── 17-developer/        ← doc 26: Developer portal
└── 18-system/           ← docs 27-34: Error, Search, Help, Notifications, Multi-lang, GDPR, Email, Dark mode
│
├── figma-designs/             ← Figma Plugin API kodlari (avtomatik yaratiladi)
│   ├── 01-login.js
│   └── ...
│
├── figma-console-mcp/         ← MCP server (Desktop Bridge plugin)
│   └── figma-desktop-bridge/  ← Figma plugin fayllari
│
└── resources/                 ← Rasmlar va resurslar
```

---

## Ish jarayoni (Workflow)

Har bir sahifa uchun ketma-ketlik:

```
1. figma-docs/ dagi spec o'qiladi
2. figma-html-pages/ da HTML yaratiladi
3. figma-designs/ da Figma Plugin API kodi yaratiladi
4. figma-bridge.js orqali Figma'da chiziladi
```

### Figma'dagi tuzilish

Figma faylida sahifalar **qatorlar** bo'yicha joylashadi (chapdan o'ngga):

```
Figma Canvas:
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  [01-Login]  [02-Register]  [03-Email Verify]  ...      │  ← 1-qator: Auth sahifalari
│                                                         │
│  [05-Welcome]  [06-Onboarding]  ...                     │  ← 2-qator: Onboarding
│                                                         │
│  [07-Dashboard]  [08-Inbox]  [09-Chat]  ...             │  ← 3-qator: App sahifalari
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Har bir qator — **bitta papka** (folder/section). Figma'da Section yaratiladi va nom beriladi.

---

## Figma Bridge — sozlash va ishlatish

### 1-qadam: Figma Desktop'ni debug port bilan ochish

```powershell
# Avval Figma'ni yoping, keyin:
"C:\Users\user\AppData\Local\Figma\Figma.exe" --remote-debugging-port=9222
```

### 2-qadam: Desktop Bridge pluginni import qilish (bir martalik)

1. Figma'da → **Plugins** → **Development** → **Import plugin from manifest...**
2. Yo'l: `onlinechat/figma-console-mcp/figma-desktop-bridge/manifest.json`
3. Plugin import bo'lgach → **Plugins** → **Development** → **Figma Desktop Bridge** → ishga tushiring

### 3-qadam: Dizayn yaratish

```bash
# Test (bitta frame yaratish)
node figma-bridge.js --test

# HTML asosidagi dizaynni Figma'ga chizish
node figma-bridge.js --file figma-designs/01-login.js

# Inline kod
node figma-bridge.js --code "var f = figma.createFrame(); f.name = 'Test'; f.resize(200,200);"
```

---

## Dizaynni tahrirlash (Edit)

Figma'dagi mavjud elementlarni topish va o'zgartirish:

```javascript
// Nom bo'yicha topish
var node = figma.currentPage.findOne(n => n.name === "Button / Primary");
if (node) {
  node.fills = [{type: 'SOLID', color: {r: 1, g: 0, b: 0}}]; // Qizilga o'zgartirish
}

// Barcha textlarni topish
var texts = figma.currentPage.findAll(n => n.type === "TEXT");

// Barcha framelarni topish
var frames = figma.currentPage.findAll(n => n.type === "FRAME" && n.parent === figma.currentPage);
```

Faylga yozib, execute qilish:
```bash
node figma-bridge.js --file figma-designs/edit-colors.js
```

---

## Dizaynni ko'rish (View)

```javascript
// Sahifadagi barcha top-level framelarni ro'yxatlash
var frames = figma.currentPage.children.filter(n => n.type === "FRAME");
return frames.map(f => ({ name: f.name, id: f.id, w: f.width, h: f.height }));

// Bitta frameni topib, unga zoom qilish
var target = figma.currentPage.findOne(n => n.name === "01 - Login");
if (target) {
  figma.viewport.scrollAndZoomIntoView([target]);
  figma.currentPage.selection = [target];
}

// Screenshot olish (MCP orqali)
// MCP server ishlayotgan bo'lsa, screenshot avtomatik saqlanadi
```

---

## Foydali buyruqlar

### Yangi sahifa qo'shish
```javascript
// Yangi Figma page yaratish
var page = figma.createPage();
page.name = "Auth Screens";
figma.currentPage = page;
```

### Component yaratish
```javascript
var comp = figma.createComponent();
comp.name = "Button/Primary";
comp.resize(200, 48);
comp.cornerRadius = 8;
comp.fills = [{type: 'SOLID', color: {r: 79/255, g: 70/255, b: 229/255}}];
comp.layoutMode = "HORIZONTAL";
comp.primaryAxisAlignItems = "CENTER";
comp.counterAxisAlignItems = "CENTER";
```

### O'chirish
```javascript
// Nom bo'yicha o'chirish
var node = figma.currentPage.findOne(n => n.name === "Test Frame from Agent");
if (node) node.remove();

// Barcha "Test" nomli nodelarni o'chirish
var tests = figma.currentPage.findAll(n => n.name.includes("Test"));
tests.forEach(n => n.remove());
```

### Ranglar (RGB 0-1 format)
```javascript
// HEX -> Figma RGB
// #4F46E5 -> {r: 79/255, g: 70/255, b: 229/255}
// #FFFFFF -> {r: 1, g: 1, b: 1}
// #111827 -> {r: 17/255, g: 24/255, b: 39/255}
```

---

## Texnik ma'lumot

- **Figma API:** Plugin API (sandbox ichida ishlaydi)
- **Ulanish:** CDP (Chrome DevTools Protocol) port 9222
- **Bridge:** Desktop Bridge plugin — WebSocket orqali buyruq qabul qiladi
- **Limitlar:** Yo'q! Bu o'z pluginingiz — cheksiz dizayn yaratish mumkin
- **Font:** Inter (Figma default) — Regular, Medium, Semi Bold, Bold

---

## Xatoliklar va yechimlar

| Xatolik | Yechim |
|---------|--------|
| "Desktop Bridge plugin topilmadi" | Figma'da plugin ishga tushirilmagan. Plugins → Development → Figma Desktop Bridge |
| "Cannot write to node with unloaded font" | `await figma.loadFontAsync(...)` qo'shing |
| "FILL can only be set on children of auto-layout" | Elementni avval `appendChild` qiling, keyin `layoutSizingHorizontal = "FILL"` o'rnating |
| CDP port 9222 ga ulanmayapti | Figma'ni `--remote-debugging-port=9222` bilan qayta oching |
| "blendMode" xatosi shadow'da | `blendMode: 'NORMAL'` qo'shing: `{type: 'DROP_SHADOW', ..., blendMode: 'NORMAL'}` |
