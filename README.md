# QULAY CHAT v3 — Demo loyiha

Bu repo hozir **static HTML/CSS/JS demo** holatida.

## Hozirgi holat

- Asosiy kod: `html/`
- Assetlar: `html/assets/`
- Qo‘shimcha materiallar: `resources/`, `figma-docs/`
- Role tizimi: faqat **admin** va **agent**

Shu holatda loyiha ishlaydi (statik preview uchun).

---

## Papka tuzilishi

```text
onlinechat-text/
├── html/
│   ├── index.html
│   ├── 01-landing ... 25-dark-mode
│   └── assets/
├── resources/
├── figma-docs/
├── node_modules/        # lokal qolgan dependencylar (hozir majburiy emas)
├── .gitignore
└── README.md
```

---

## Ishga tushirish (local)

### Variant 1 (tavsiya): Python server

`html` ichidan server oching:

```powershell
cd html
python -m http.server 5500
```

Brauzerda:

- `http://127.0.0.1:5500/index.html`

### Variant 2: Live Server (VS Code)

`html/index.html` ni Live Server bilan oching.

---

## Asosiy funksiyalar

- Admin/Agent role switch
- Role bo‘yicha sidebar dinamik almashadi
- `data-roles` orqali kontent ko‘rinishi farqlanadi
- Inbox/Automation/Analytics/Widget subnavlar yangilangan
- KB/landing/help sahifalari boyitilgan
- Empty state, skeleton, shortcuts modal (`?`), breadcrumb qo‘shilgan
- Chat-open’da demo: typing indicator, emoji picker, file attachment

---

## Muhim fayllar

- `html/assets/qulay-chat-shell.js` — shell va sidebar
- `html/assets/qulay-chat-runtime.js` — role runtime, modal/tab/action logika
- `html/assets/qulay-chat-design-system.css` — umumiy dizayn tizimi
- `html/assets/inbox-realism.js` — chat demo interaksiyalar

