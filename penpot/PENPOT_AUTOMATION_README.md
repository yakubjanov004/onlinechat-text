# 🎨 CHATFLOW Penpot Automation — Setup & Quick Start

> **Penpot API bilan otomatik design system yaratish**

## 🎯 Bu nima?

Men uchun 3 ta fayl yaratdim:
1. **penpot-automation.js** — 26 ta page otomatik create qiladi
2. **penpot-advanced.js** — Colors, typography, components qo'shadi
3. **PENPOT_SETUP.md** — Detailed setup guide

## ⚡ 5-minutlik Start

### 1️⃣ Penpot Token Olish

```
1. https://design.penpot.app/ ochish
2. Accountya kirish (top-left)
3. "Access tokens" → "+ Generate new token"
4. Token copy qilish (90 kun valid)
```

### 2️⃣ .env Fayl Yaratish

```bash
cp .env.example .env
```

`.env` ni edit qiling:
```
PENPOT_API_KEY=your_token_here
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
```

### 3️⃣ Team ID Topish

```bash
npm install
node penpot-automation.js --list-teams
```

Output:
```
Available teams:
  - My Team (ID: team-123abc...)
```

Team ID-ni `.env` ga add qiling:
```
PENPOT_TEAM_ID=team-123abc...
```

### 4️⃣ Automation Boshlash

```bash
# Barcha 26 page create qilish
node penpot-automation.js

# Advanced: Colors, typography, components qo'shish
node penpot-advanced.js
```

### 5️⃣ Penpot-da Tekshirish

```
https://design.penpot.app → Projectlarim → CHATFLOW Design System
```

✅ **26 ta page tayyor!** (01-Design System dan 26-Developer gacha)

---

## 📁 Yaratilgan Struktura

```
CHATFLOW Design System (Project)
└── CHATFLOW Design System (File)
    ├── 01-Design System          ← Colors, Typography, Components
    ├── 02-Landing: Hero & Header ← 3 frame
    ├── 03-Landing: Trust & Co.   ← 3 frame
    ├── ...
    └── 26-Developer              ← 3 frame
```

**Har bir page ichida:**
- Display-ready frames
- Colored background
- Typography examples
- Component placeholders

---

## 🔧 Qanday Ishlaydi?

### Automation Script Flow

```
┌──────────────┐
│  .env file   │  (Token, Team ID)
└──────┬───────┘
       ↓
┌──────────────────────┐
│  penpot-automation   │
│  Basic pages create  │
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│  penpot-advanced     │
│  Add colors, fonts   │
│  Add components      │
└──────┬───────────────┘
       ↓
┌──────────────────────┐
│  Penpot Dashboard    │
│  26 pages ready!     │
└──────────────────────┘
```

---

## 📋 Script Qilgan Narsalar

### penpot-automation.js

✅ **26 ta page yaratadi:**
- 01-Design System
- 02-06: Landing pages (5 ta)
- 07-09: Auth & Onboarding (3 ta)
- 10-26: Dashboard features (17 ta)

Har bir page **naming convention:**
```
01-Design System
02-Landing: Hero & Header
03-Landing: Trust & Companies
```

### penpot-advanced.js

✅ **Design System page-ga qo'shadi:**
- 🎨 17 ta color swatch (hex codes bilan)
- 📝 9 ta typography style (size, weight bilan)
- 🧩 8 ta component library item

```javascript
COLOR_PALETTE = {
  'Primary-600': '#4F46E5',
  'Gray-900': '#111827',
  'Success': '#10B981',
  ...
}

TYPOGRAPHY = {
  'Display-1': { fontSize: 48 },
  'Body': { fontSize: 16 },
  ...
}

COMPONENTS = ['Button', 'Input', 'Card', 'Badge', 'Avatar', 'Dropdown', 'Modal', 'Toast']
```

---

## ✨ Qollanilgan Texnologiya

| Tool | Maqsad |
|------|--------|
| **Penpot RPC API** | Programmatic design creation |
| **Node.js** | Automation script runner |
| **axios** | HTTP requests |
| **.env** | Secret management |

---

## 🚀 Advanced Features

### Custom Colors Qo'shish

`penpot-advanced.js` edit qiling:

```javascript
const COLOR_PALETTE = {
  'MyColor': '#FF5733',  // New color
};
```

Keyin:
```bash
node penpot-advanced.js
```

### Custom Pages Qo'shish

`penpot-automation.js` edit qiling:

```javascript
const PAGES_SPEC = [
  // Existing pages...
  {
    id: 'custom-page',
    name: 'My Custom Page',
    frames: ['Frame 1', 'Frame 2'],
  },
];
```

### Custom Components

`penpot-advanced.js` edit qiling:

```javascript
const COMPONENTS_SPEC = [
  {
    name: 'MyComponent',
    variants: ['Default', 'Hover'],
    size: { width: 200, height: 100 },
  },
];
```

---

## 🐛 Xatoliklar va Yechimlar

| Error | Yechim |
|-------|--------|
| "PENPOT_API_KEY not set" | `.env` fayl qo'shish |
| "Token expired" | Yangi token generate qilish |
| "Team not found" | `--list-teams` commands |
| "Cannot connect" | URL va token to'g'ri tekshirish |

---

## 📚 Qo'shimcha Resurslari

```
📁 onlinechat/
├── penpot-automation.js        ← Basic page creation
├── penpot-advanced.js          ← Colors, fonts, components
├── PENPOT_SETUP.md             ← Detailed setup guide
├── .env.example                ← Template
├── docs/
│   ├── PENPOT_API_RESEARCH.md        ← Full research (15 sections)
│   ├── PENPOT_API_QUICK_REFERENCE.md ← Quick ref
│   └── PENPOT_API_CODE_EXAMPLES.md   ← Code samples
└── figma-docs/
    ├── 01-design-system.md
    ├── 02-06: landing pages
    └── 07-34: app features
```

---

## ✅ Checklist

- [ ] Penpot account create qilish
- [ ] API token generate qilish
- [ ] `.env` file setup qilish
- [ ] `npm install` qilish
- [ ] `node penpot-automation.js --list-teams` test qilish
- [ ] Team ID topishi
- [ ] `node penpot-automation.js` qilish
- [ ] Penpot-da 26 page tekshirashi
- [ ] **DESIGN SHURULISHI!** 🎉

---

## 🎯 Keyingi Qadamlar

**Pages tayyor bo'lgandan keyin:**

1. **Design System Page-ni complete qilish** (01)
   - Color styles set qilish
   - Typography apply qilish
   - Component library organize qilish

2. **Har bir page-ni design qilish**
   - Frames add qilish
   - Content place qilish
   - Components use qilish

3. **Export & handoff**
   - Design tokens export qilish
   - Code generate qilish
   - Developer docs

---

## 🤔 FAQ

**Q: Men Figma xohlarman, Penpot emas?**
A: Figma API LIMITED (read-only). Penpot API FULL (create-write). Penpot better for automation.

**Q: HTML-dan Penpot-ga convert qilsa bo'ladimi?**
A: Ha! Penpot plugin market-iga bor Figma-dan import qiluvchi pluginlar.

**Q: Responsive design qanday?**
A: Penpot artboards/breakpoints support qiladi. Manual setup kerak.

**Q: Component instances qanday?**
A: Penpot library components support qiladi (v2.0+).

---

## 📞 Support

**Savol bormi?**
- PENPOT_SETUP.md - Detailed step-by-step
- docs/PENPOT_API_RESEARCH.md - Full documentation
- https://help.penpot.app/ - Official help

---

## 📝 License

Open source - Ozod ishlatish!

---

**🎨 Hozir Penpot-da design bo'lsangiz bo'ldi!** 🚀

Next: Page-larni content bilan to'ldirish.

Qanday ketayapti?
