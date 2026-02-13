# 🔴 File Upload Types va Size Limit Nomutanosibligi

**Status:** ✅ DONE  
**Prioritet:** 🔴 HIGH  
**Taxminiy vaqt:** 30 daqiqa  
**Mas'ul:** Product Manager + Hujjat muallifi

---

## Muammo

File upload ruxsati 2 ta faylda turlicha:

| Aspekt | 11-inbox-chat.md | 12-inbox-advanced.md |
|--------|-----------------|---------------------|
| **Allowed types** | JPG, PNG, PDF (3 ta) | JPG, PNG, PDF, DOCX, XLSX, SVG, GIF (7 ta) |
| **Max size** | 10MB (flat) | 10MB (Free) / 25MB (Pro+) |

## Ta'sir

**Foydalanuvchi confusion:**
- "Nima uchun DOCX yuklolmayapman? Agent menga DOCX yubora oladi-ku?"
- "Men Pro plan sotib oldim, lekin hali ham 10MB limit bormi?"

**Backend logic kelishmovchiligi:**
- Qaysi faylni implement qilish kerak?
- Plan-based checking yo'qmi?

## Tavsiya Etilgan Yechim 1: File Types

**7 formatni standart qilish** (12-inbox-advanced.md qiymati):
- JPG, PNG, PDF, DOCX, XLSX, SVG, GIF

**Yoki plan-based:**
- Free plan: JPG, PNG, PDF (3 ta)
- Pro+ plan: + DOCX, XLSX, SVG, GIF (7 ta)

## Tavsiya Etilgan Yechim 2: Max Size

**Plan-based limit** (12-inbox-advanced.md yondashuvi):
- Free: 10MB
- Pro: 25MB
- Business/Enterprise: 50MB

**Sabab:**
- Monetizatsiya imkoniyati
- Competitor analysis: Intercom (25MB Pro), Crisp (10MB free, unlimited pro)
- Storage cost optimizatsiya

## Bajarilishi Kerak Bo'lgan Ishlar

### Decision kerak:
- [ ] Product: File types faqat Pro+ uchunmi yoki hammaga?
- [ ] Product: Max size plan-based qilishmi?

### Hujjat yangilash:
- [ ] 11-inbox-chat.md ni yangilash (decision asosida)
  - [ ] Allowed types ro'yxati
  - [ ] Max size (plan-based bo'lsa, plan badge)
  - [ ] Error messages: "DOCX faqat Pro+ plan uchun"
- [ ] Backend validation logic
  - [ ] MIME type check
  - [ ] File size check (plan-based)
  - [ ] Error response standardize

### Frontend:
- [ ] File input accept attribute: `accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx,.svg,.gif"`
- [ ] Upload progress bar (12-inbox-advanced.md da bor)
- [ ] Plan upgrade CTA (Free user 25MB file upload qilmoqchi bo'lsa)

## Qo'shimcha Eslatmalar

**MIME types:**
```
JPG:  image/jpeg
PNG:  image/png
PDF:  application/pdf
DOCX: application/vnd.openxmlformats-officedocument.wordprocessingml.document
XLSX: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
SVG:  image/svg+xml
GIF:  image/gif
```

**Storage hisoblash (masalan):**
- Average file: 2MB
- 1000 conversations/month × 2 files = 2000 files = 4GB/month
- S3 storage: $0.023/GB = ~$0.10/month per 1000 conversations

## Bog'liq Fayllar

- `figma-docs/11-inbox-chat.md`
- `figma-docs/12-inbox-advanced.md`
- `figma-docs/17-billing.md` (plan features)
