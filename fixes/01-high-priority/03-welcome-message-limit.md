# 🔴 Welcome Message Character Limit Nomutanosibligi

**Status:** 🟠 TODO  
**Prioritet:** 🔴 HIGH (Ma'lumot yo'qolish xavfi!)  
**Taxminiy vaqt:** 30 daqiqa  
**Mas'ul:** Product Manager + Hujjat muallifi

---

## Muammo

Welcome message char limit 3 ta faylda turlicha:

| Fayl | Limit |
|------|-------|
| 09-onboarding-widget-install.md | 200 chars |
| 13-automation.md | 200 chars |
| 16-settings.md | 100 chars |

## Ta'sir — KRITIK! ⚠️

**Data truncation xavfi:**
1. Foydalanuvchi onboarding da 150 belgili welcome message yozadi ✅
2. Automation flow da 200 char limitga mos ✅
3. Settings sahifasida o'zgartirmoqchi bo'lsa → faqat 100 char ko'rinadi ❌
4. 50 belgi yo'qoladi! ❌

**Foydalanuvchi ishonchini yo'qotish:**
- "Mening xabarim qayerda? Bug bormi?"
- Support ticket hosil bo'ladi
- Professional imaj zarar ko'radi

## Tavsiya Etilgan Yechim

**200 chars ni standart qilish** (09 va 13 qiymati)

**Sabab:**
- 100 char juda qisqa — to'liq greeting + company name + CTA sig'maydi
- 200 char yaxshi balans (qisqa lekin kifoya)
- Intercom, Crisp kabi platformalar 200-300 char ishlatadi
- Mobile widget da 3-4 qator (~200 char) optimal ko'rinadi

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] Product decision: 200 chars final mi?
- [ ] 16-settings.md da limit 100 → 200 ga o'zgartirish
  - [ ] Textarea maxlength="200"
  - [ ] Character counter: "45/200"
  - [ ] Helper text: "Qisqa va do'stona greeting yozing"
- [ ] Backend validation yangilash (FormRequest rule: max:200)
- [ ] Database migration agar column length 100 bo'lsa (VARCHAR(100) → VARCHAR(200))
- [ ] Existing data check — 100+ chars welcome message bormi?

## Qo'shimcha Eslatmalar

**200 chars — namuna:**
```
Salom! 👋 Kompaniyamizga xush kelibsiz. 
Savolingiz bormi? Biz 24/7 yordam berishga tayyormiz. 
Quyidagi tugmani bosib, darhol chat boshlang!
(182 belgi)
```

**100 chars — juda qisqa:**
```
Salom! Savolingiz bormi? 
Biz yordam berishga tayyormiz.
(54 belgi — yetarli, lekin qisqa)
```

## Bog'liq Fayllar

- `figma-docs/09-onboarding-widget-install.md`
- `figma-docs/13-automation.md`
- `figma-docs/16-settings.md`
