# ⚡ Quick Start — Penpot Automation

## 1️⃣ Birma-bir: Token va .env Setup

### Token Olish

```
1. https://design.penpot.app/ ochish
2. Accountya kirish (top-left corner)
3. "Access tokens" tab
4. "+ Generate new token" click
5. Token copy qilish
```

### .env Yaratish

Terminal-da:
```bash
cp .env.example .env
```

Text editor-da `.env` open qilish va paste qilish:
```
PENPOT_API_KEY=your_token_here
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
```

---

## 2️⃣ Team ID Topish

Terminal-da:
```bash
npm run penpot:list-teams
```

Output:
```
Available teams:
- My Team (ID: abc123def456...)
- Another Team (ID: xyz789...)
```

Copy qilgan team ID-ni `.env` ga add qilish:
```
PENPOT_TEAM_ID=abc123def456...
```

---

## 3️⃣ Full Automation Run Qilish

Barcha 26 page + design system content auto-create qiladi:

```bash
npm run penpot:full
```

**Yoki separate qilish:**

```bash
# Faqat pages create qilish (1-2 minut)
npm run penpot:create-pages

# Keyin colors, typography, components add qilish (30-60 sekunday)
npm run penpot:setup-design-system
```

---

## 4️⃣ Penpot-da Tekshirish

```
https://design.penpot.app/dashboard/projects
```

"CHATFLOW Design System" project ichida:
- ✅ 26 ta pages (01-Design System ~ 26-Developer)
- ✅ Design System page ichida colors, typography, components
- ✅ Har bir page ichida 3-4 ta frame hozirlangan

---

## 🎯 Commands Reference

| Command | Nima qiladi |
|---------|---------|
| `npm run penpot:list-teams` | Teams ro'yhatini show qiladi |
| `npm run penpot:create-pages` | 26 ta page create qiladi |
| `npm run penpot:setup-design-system` | Colors, fonts, components add qiladi |
| `npm run penpot:full` | Barcha (pages + content) |

---

## ✅ Checklist

- [ ] Token generate qilish
- [ ] Token `.env`-ga paste qilish
- [ ] `npm run penpot:list-teams` qilish
- [ ] Team ID `.env`-ga add qilish
- [ ] `npm run penpot:full` qilish
- [ ] Penpot-da 26 pages tekshirish
- [ ] ✨ DONE!

---

## 🚀 Endi Nima?

Pages tayyor bo'lgandan keyin:

1. **Design system page ichini dekorate qilish** (colors, fonts, components)
2. **Har bir page-ni design qilish** (frames, content)
3. **Components set up qilish** (library, main components)
4. **Prototype qilish** (clickable prototype)
5. **Export qilish** (code, resources)

---

## 💡 Tips

- **Problem: Token expired?**
  ```bash
  # Yangi token generate qiling va .env update qiling
  ```

- **Problem: Scripts ishlamayapti?**
  ```bash
  # npm packages install qilish
  npm install
  
  # Keyin qayta:
  npm run penpot:full
  ```

- **Problem: Penpot-da proyekt ko'rinmayapti?**
  ```bash
  # Browser refresh qiling (F5)
  # Yoki logout/login qiling
  ```

---

## 📚 Details Kerak Bo'lsam

- [PENPOT_SETUP.md](./PENPOT_SETUP.md) — Detailed step-by-step
- [PENPOT_AUTOMATION_README.md](./PENPOT_AUTOMATION_README.md) — Feature reference
- [docs/](./docs/) — Full API documentation

---

**🎨 Shunchaki start qiling va design bo'lsang bo'ldi!** 🚀
