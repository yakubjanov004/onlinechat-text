# 🔴 Info Sidebar Kengligi Nomutanosibligi

**Status:** 🟠 TODO  
**Prioritet:** 🔴 HIGH  
**Taxminiy vaqt:** 30 daqiqa  
**Mas'ul:** Hujjat muallifi

---

## Muammo

Info sidebar (customer info panel) kengligi 2 turli faylda turlicha belgilangan:

| Fayl | Kenglik |
|------|---------|
| 11-inbox-chat.md | 280px |
| 12-inbox-advanced.md | 300px |

## Ta'sir

- Figma dizayner 2 ta variant yasaydi
- Layout shift hosil bo'ladi (11 dan 12 ga o'tganda)
- Panel resize logic qiyinlashadi
- Responsive breakpoint hisoblari buziladi

## Tavsiya Etilgan Yechim

**300px ni standart qilish** (12-inbox-advanced.md qiymati)

**Sabab:**
- Ko'proq content sig'adi (contact info, tags, notes)
- Advanced features uchun zarur bo'lgan kenglik
- 300px hali ham 3-panel layout (320+flex+300) uchun oqilona

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] 11-inbox-chat.md da sidebar kengligini 280px → 300px ga o'zgartirish
- [ ] ASCII wireframe ni yangilash
- [ ] Figma component tree ni yangilash
- [ ] Responsive tablet spec ni tekshirish (2-panel: conversation 320px + chat area)

## Qo'shimcha Eslatmalar

Responsive:
- Desktop: `320px (conv) + flex (chat) + 300px (info)` ✅
- Tablet: `320px (conv) + flex (chat)` — info panel collapse ✅  
- Mobile: Stack vertikal ✅

## Bog'liq Fayllar

- `figma-docs/11-inbox-chat.md`
- `figma-docs/12-inbox-advanced.md`
