# 🔴 Widget Pozitsiya Variantlari Nomutanosibligi

**Status:** 🟠 TODO  
**Prioritet:** 🔴 HIGH  
**Taxminiy vaqt:** 30 daqiqa  
**Mas'ul:** UX Designer + Hujjat muallifi

---

## Muammo

Widget pozitsiya tanlash 2 ta faylda turlicha:

| Fayl | Pozitsiyalar |
|------|-------------|
| 09-onboarding-widget-install.md | 4 ta: top-left, top-right, bottom-left, bottom-right |
| 16-settings.md | 3 ta: bottom-left, bottom-right, right-center |

**Farq:**
- Top pozitsiyalar (top-left, top-right) onboarding da bor, settings da yo'q
- Right-center faqat settings da bor

## Ta'sir

- Foydalanuvchi onboarding da 4 ta variant ko'radi, Settings da 3 ta
- Backend 2 xil pozitsiya setini saqlashi kerak
- UI confusion — onboarding da setup qilgan pozitsiya settings da yo'q bo'lishi mumkin
- Widget embed code turli pozitsiyalarni handle qilish qiyinlashadi

## Tavsiya Etilgan Yechim

**16-settings.md qiymatini (3 pozitsiya) standart qilish:**
- bottom-left
- bottom-right  
- right-center

**Sabab:**
- Top pozitsiyalar amaliyotda kam ishlatiladi (header bilan conflict, notification bilan qoplaydi)
- Right-center SaaS platformalarida keng tarqalgan (Intercom, Crisp)
- 3 ta variant foydalanuvchi uchun decision fatigue ni kamaytiradi

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] 09-onboarding-widget-install.md pozitsiya selector ni yangilash
  - [ ] ASCII wireframe (4 button → 3 button)
  - [ ] Position option description
  - [ ] Live preview examples
  - [ ] Figma component tree
- [ ] 13-automation.md da widget pozitsiya trigger ni tekshirish (agar mavjud bo'lsa)
- [ ] Backend API pozitsiya enum ni yangilash: `['bottom-left', 'bottom-right', 'right-center']`
- [ ] Widget embed code pozitsiya logic ni tekshirish

## Qo'shimcha Eslatmalar

**Position CSS:**
```css
/* bottom-left */
bottom: 20px;
left: 20px;

/* bottom-right */
bottom: 20px;
right: 20px;

/* right-center */
right: 20px;
top: 50%;
transform: translateY(-50%);
```

**Mobile (<480px):** Widget fullscreen bo'ladi, pozitsiya effect qilmaydi.

## Bog'liq Fayllar

- `figma-docs/09-onboarding-widget-install.md`
- `figma-docs/16-settings.md`
- `figma-docs/13-automation.md` (agar widget config bor bo'lsa)
