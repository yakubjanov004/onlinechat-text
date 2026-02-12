# 🟡 Analytics Date Format Nomutanosibligi

**Status:** 🟠 TODO  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 30 min  
**Mas'ul:** Hujjat muallifi

---

## Muammo

Date format 3 ta faylda turlicha:

| Fayl | Format |
|------|--------|
| 15-analytics.md | "Jan 1 - Jan 31" |
| 25-advanced-analytics.md | "01.01.2024 - 31.01.2024" |
| 17-billing.md | "15 January 2024" |

## Ta'sir

- UI inconsistency
- Foydalanuvchi confusion — date picker qanday formatda yozsin?
- Multi-language support murakkablashadi
- Parsing/validation logic turlicha bo'ladi

## Tavsiya Etilgan Yechim

**Standard 1 ta formatni tanlash:**

### Tavsiya: "MMM D, YYYY" format

**Misol:**
- Jan 15, 2024
- Feb 1, 2024
- Dec 31, 2025

**Sabab:**
1. Human-readable (easy to scan)
2. Compact (3-letter month)
3. International standard (US style, lekin keng tarqalgan)
4. SaaS platformalarida keng ishlatiladi (Stripe, Intercom, Mixpanel)

### Range uchun: "MMM D - MMM D, YYYY"

**Misol:**
- Jan 1 - Jan 31, 2024
- Dec 15, 2025 - Jan 14, 2026

**Qisqa range (bir oy ichida):**
- Jan 1 - 31, 2024

## Alternativ (agar O'zbek audience uchun):

**"DD.MM.YYYY" format** (Evropa / O'zbekiston)
- 15.01.2024
- 01.02.2024

**Range:**
- 01.01.2024 - 31.01.2024

**Sabab:**
- O'zbekistonda qog'oz xujjatlarda ishlatiladi
- Evropa standardi (CIS davlatlari)

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] Product decision: Qaysi formatni standart qilish? (MMM D, YYYY yoki DD.MM.YYYY)
- [ ] 15-analytics.md ni yangilash
- [ ] 25-advanced-analytics.md ni yangilash
- [ ] 17-billing.md ni yangilash
- [ ] Date picker component spec (31-multi-language.md da locale-based format)
- [ ] Backend API response format standardize
  - [ ] ISO 8601 yuborish: `2024-01-15T10:30:00Z`
  - [ ] Frontend format qiladi

## Multi-Language Support

**Agar 31-multi-language.md implement qilinsa:**
- O'zbek: "15-yanvar, 2024"
- Rus: "15 января 2024"
- English: "Jan 15, 2024"

**Tavsiya:** `Intl.DateTimeFormat()` API ishlatish

```javascript
const formatter = new Intl.DateTimeFormat('uz-UZ', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});

formatter.format(new Date('2024-01-15')); 
// "15-yan, 2024"
```

## Qo'shimcha Eslatmalar

**Backend:**
- Database: `DATETIME` yoki `TIMESTAMP` (ISO 8601)
- API response: `"created_at": "2024-01-15T10:30:00Z"`
- Frontend formatLaydi: `formatDate(created_at, locale)`

**Figma:**
- Date picker componentda format example ko'rsatish
- Placeholder: "DD.MM.YYYY" yoki "MMM D, YYYY"

## Bog'liq Fayllar

- `figma-docs/15-analytics.md`
- `figma-docs/25-advanced-analytics.md`
- `figma-docs/17-billing.md`
- `figma-docs/31-multi-language.md`
