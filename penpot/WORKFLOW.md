# 🔄 CHATFLOW — Penpot Dizayn Workflow

> **Maqsad:** Har bir sahifani ketma-ket chizish, tayyorini archive'ga saqlash, keyingisiga o'tish.

---

## 📂 Papka Strukturasi

```
penpot/
├── DESIGN_SPEC.md              ← Master design tokens & specs
├── WORKFLOW.md                 ← SHU FAYL — ish tartibi
├── plugin-manifest.json        ← Penpot plugin config
├── plugin.js                   ← ❌ ESKI — ishlatilmasin
│
├── pages/                      ← Sahifa spec'lari (md format)
│   ├── 02-login.md
│   ├── 03-register.md
│   ├── 04-email-verify.md
│   ├── 05-forgot-password.md
│   ├── 06-welcome.md
│   ├── 07-10-onboarding.md
│   └── 11-dashboard.md
│
├── draw/                       ← AKTIV PLUGIN — hozir chizilayotgan sahifa
│   ├── plugin-manifest.json
│   └── plugin.js               ← Faqat BITTA sahifani chizadi
│
├── templates/                  ← Qayta ishlatiladigan komponentlar
│   └── components.js           ← Shared: makeRect, makeText, auth-card, ...
│
└── archive/                    ← Tayyor sahifalar saqlanadi
    ├── COMPLETED.md            ← Qaysi sahifalar tayyor — log
    ├── 02-login-plugin.js      ← Login tayyor bo'ldi → shu yerga
    ├── 03-register-plugin.js
    └── ...
```

---

## 🔁 Ish Jarayoni (Workflow)

### Qadam 1: Sahifa spec'ini o'qish
```
penpot/pages/02-login.md  →  O'qib, nima chizish kerakligini tushunish
```

### Qadam 2: Plugin yozish
```
penpot/draw/plugin.js  →  Faqat SHU sahifani chizadigan kod yoziladi
```

### Qadam 3: Penpot'da ishga tushirish
```
Plugin Manager → Load from URL → plugin-manifest.json
Natija: Board yaratiladi rangli, to'g'ri joylashgan
```

### Qadam 4: Tekshirish va to'g'rilash
```
Penpot'da ko'rib, kerak bo'lsa plugin.js ni o'zgartirib qayta ishga tushirish
```

### Qadam 5: Archive'ga saqlash
```
penpot/draw/plugin.js  →  penpot/archive/02-login-plugin.js (nusxa olish)
COMPLETED.md ga yozish: "02 Login ✅ 2026-02-14"
```

### Qadam 6: Keyingi sahifaga o'tish
```
penpot/draw/plugin.js ni tozalab, keyingi sahifa uchun yozish
```

---

## 📋 Sahifalar Tartibi (Priority)

| # | Sahifa | Spec fayl | Status |
|---|--------|-----------|--------|
| 02 | Login | `pages/02-login.md` | ⏳ Birinchi |
| 03 | Register | `pages/03-register.md` | ⏳ |
| 04 | Email Verify | `pages/04-email-verify.md` | ⏳ |
| 05 | Forgot Password | `pages/05-forgot-password.md` | ⏳ |
| 06 | Welcome | `pages/06-welcome.md` | ⏳ |
| 07-10 | Onboarding | `pages/07-10-onboarding.md` | ⏳ |
| 11 | Dashboard | `pages/11-dashboard.md` | ⏳ |

**Status:** ✅ Tayyor | 🔄 Ish jarayonida | ⏳ Kutilmoqda

---

## ⚠️ Muhim Qoidalar

1. **Bir vaqtda faqat BITTA sahifa** — `draw/plugin.js` da
2. **Rangsiz bo'lmasin** — Har doim `fillColor` va `fillOpacity: 1` ishlatish
3. **Penpot sandbox** — `window` ob'ekti mavjud emas, `globalThis` ishlatish
4. **createText uchun tartib:**
   - growType → fontId → fontFamily → fontSize → fontWeight → fills → x, y
5. **Archive shart** — Chizib bo'lgach doim archive'ga saqlash

---

*Yaratilgan: 2026-02-14*
