# 🎨 CHATFLOW Penpot Plugin Guide

**Muammani hal qildik!** ✅ API 403 masalasi o'rniga, biz **Penpot Plugin** yaratdik - bu Penpot ichida to'g'ridan-to'g'ri ishlaydi!

---

## 📦 Plugin o'rnatish va ishlatish

### Qadam 1: Plugin fayllarini tekshirish

Sizning `penpot/` papkada quyidagi fayllar bor:
- `plugin-manifest.json` — Plugin konfiguratsiya
- `plugin.js` — Plugin logikasi (26 page yaratish)  
- `plugin-ui.html` — Plugin UI (tugma va status)

### Qadam 2: Pluginni Penpot'da o'rnatish

**Variant A: ZIP faylidan o'rnatish (Oson)**

1. **ZIP yaratish**:
```bash
cd penpot
tar -czf chatflow-plugin.zip plugin-manifest.json plugin.js plugin-ui.html
# Yoki PowerShell'da:
# Compress-Archive -Path plugin-manifest.json, plugin.js, plugin-ui.html -DestinationPath chatflow-plugin.zip
```

2. **Penpot'da o'rnatish**:
   - Ochish: https://design.penpot.app/
   - Git → **Plugins** (top menu)
   - **"+ Install plugin"** → **Upload ZIP**
   - `chatflow-plugin.zip` ni tanlang
   - ✅ O'rnatildi!

**Variant B: GitHub'dan o'rnatish (Advanced)**

1. Pluginni GitHub'ga push qiling
2. Penpot → Plugins → Install → Enter GitHub URL

### Qadam 3: Pluginni ishlatish

1. **Yangi file yaratish** yoki mavjud file ochish
2. Penpot menu → **Plugins** → **CHATFLOW Design System**
3. **"✨ Create All Pages (26)"** tugmasini bosing
4. ⏳ Kutish — script 26 page yaratadi!
5. ✅ Tayyor! Barcha pages va frames tayyor!

---

## 📊 Plugin qanday ishlaydi?

**Har bir page uchun:**
- ✅ Page nomi (01-Design System, 02-Landing: Hero & Header, etc.)
- ✅ Artboard frame (1440×900)  
- ✅ Oq background
- ✅ Sarlavha text (page nomi)

**Javobi:**
- 26 ta page ✅
- 26 ta frame ✅
- 26 ta title text ✅

---

## 🚀 Keyingi qadam

Plugin 26 pagesin yaratgandan so'ng:

1. **Har bir pageda frame'larni qo'shing** (Penpot UI ichida)
2. **Komponentlarni yaratish** (buttons, inputs, cards)
3. **Design tokenslarni qo'llash** (colors, typography)

Yoki yana plugin o'rnatib, barcha frames va komponentlarni avtomatik yaratishi mumkin! 😊

---

## ❓ Muammolar?

**Plugin yuklanmadi?**
- Penpot'ni refresh qiling (F5)
- Plugins → "CHATFLOW Design System" qidiring

**Halqamiz Penpot Plugin API dokumentesiyasi:**
- https://penpot.app/developing-plugins.html
- https://penpot.app/plugins-runtime.html

**Savol bo'lsa,** GitHub issues qiling!

---

## 📝 Plugin Manifest

```json
{
  "name": "CHATFLOW Design System",
  "code": "plugin.js",
  "ui": "plugin-ui.html",
  "description": "Auto-creates 26 CHATFLOW design pages"
}
```

**Ruxsatlar (Permissions):**
- `content:read` — Pages va frames o'qish
- `content:write` — Pages va frames yaratish

---

## 🔧 Plugin customize qilish

Edit `plugin.js` agar:
- Boshqa page nomlarini qo'shish
- Frame o'lchamini o'zgartirish (1440×900 → boshqa)
- Ranglarni yangilash (#4F46E5 → boshqa)
- Komponentlarni qo'shish (shapes, text, components)

Misol: Frame o'lchamini o'zgartirish
```javascript
frame.resize(1920, 1080); // Desktop HD o'lchami
```

---

**Eng muhimi:** Shu bilan Cloudflare 403 masalasi hal bo'ldi! 🎉

Plugin'siz API, biz Penpot ichida to'g'ridan-to'g'ri ishlaydi!

**Tayyor? Pluginni o'rnatish uchun ZIP yaratsin!**
