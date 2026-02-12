# CHATFLOW LOYIHASI — CHUQUR TAHLIL PROMPT

Salom! Men sizga **CHATFLOW** loyihasi hujjatlarini taqdim etaman. Bu SaaS live chat platformasi bo'lib, juda ko'p hujjatlarga ega.

## Sizdan so'rayotgan vazifa:

Loyihaning **BARCHA** hujjatlarini (`figma-docs/` papkasida 34+ fayl, shuningdek `CHATFLOW_FIGMA_ARCHITECTURE.md`, `TODO.md`, va boshqalar) **to'liq chuqur o'qib chiqing** va quyidagilarni tekshirib, bitta batafsil **CHATFLOW_FULL_ANALYSIS.md** faylini yarating:

### Tekshirish kerak bo'lgan narsalar:

1. **Design System izchilligi** 
   - Ranglar (Primary-600: #4F46E5, Gray-900, Success-500, etc.) barcha sahifalarda bir xil va to'g'ri ishlatilganmi?
   - Typography (Inter font, sizes, weights, line-heights) izchilmi?
   - Spacing (8px grid: 8, 12, 16, 24, 32, 48, 80, 120) har joyda bir xil sistemaga asoslanganmi?
   - Border radius (4px, 6px, 8px, 12px) qiymatlari nomutanosibmi?

2. **Har bir sahifa to'liqligini baholash**
   - Landing pages (02-06)
   - Auth & Onboarding (07-09)  
   - Dashboard core (10-17)
   - Advanced features (20-26)
   - Support pages (27-34)
   - Chat Widget (18)
   
   Har birida: Layout specs, pixel o'lchamlari, ranglar, hover states, micro-interactions, responsive design, dark mode bor-yo'qligi

3. **Nomutanosibliklar topish** (Inconsistencies)
   - Bir xil komponent (masalan, Button yoki Input) turli sahifalarda turli o'lcham/rang/spacing bilan tasvirlangan joylar
   - Bir xil vazifa uchun turli yondashuvlar

4. **Edge case'lar va xatolik holatlari**
   - Empty states (bo'sh inbox, contacts, etc.)
   - Loading states (skeletons, spinners)
   - Error states (network error, validation error)
   - Permission denied screens
   - Offline mode
   - Maxsus holatlar (chat transfer paytida user yozsa, payment fail, etc.)

5. **Komponentlar to'liqligi**
   - Har bir komponent uchun variants, sizes, states, colors mavjudmi?
   - Button, Input, Modal, Dropdown, Badge, Tag, Tooltip - barchasi to'liq spetsifikatsiya qilinganmi?

6. **Accessibility**
   - Keyboard navigation (Tab, Enter, Escape, Arrow keys)
   - ARIA labels
   - Screen reader announcements
   - Color contrast (WCAG AA: 4.5:1)
   - Touch targets (44x44px minimum)
   - Focus indicators

7. **Responsive design**
   - Desktop (1200px+), Tablet (768-1199px), Mobile (320-767px) uchun spetsifikatsiyalar bormi?
   - Har bir sahifa uchun

8. **Dark mode**
   - Qaysi sahifalarda dark mode variant mavjud?
   - Dark-bg-primary, Dark-text-primary va boshqa dark ranglar izchil ishlatilganmi?

9. **Micro-interactions va animatsiyalar**
   - Hover effects, focus states, click animations
   - Modal open/close, toast notification slide-in
   - Animation duration (150ms, 200ms, 300ms) va easing functions

10. **Figma dizaynga tayyorlik**
    - Hozirgi hujjatlar asosida Figma dizayn chizish mumkinmi?
    - Yetarli pixel-level specs bormi?
    - Nimalar yetishmayapti?

---

## Natija qanday bo'lishi kerak:

**`CHATFLOW_FULL_ANALYSIS.md`** nomli fayl yarating va unda quyidagi bo'limlar bo'lsin:

---

# CHATFLOW LOYIHASI — TO'LIQ TAHLIL HISOBOTI

**Tahlil sanasi:** [YYYY-MM-DD]  
**Tekshirilgan fayllar:** 34+ hujjat  
**Tahlil qilingan aspektlar:** 10 kategoriya  

---

## 1. UMUMIY XULOSA

**Loyiha holati (0-100%):** [raqam]%

**Qisqacha baholash:**
- ✅ Yaxshi jihatlari (3-5 punkt)
- ⚠️ Muammoli joylar (3-5 punkt)
- ❌ Kritik kamchiliklar (1-3 punkt)

**Figma dizaynga tayyorligi:** [Tayyor / Qisman tayyor / Tayyor emas]

---

## 2. DESIGN SYSTEM TAHLILI

### 2.1 Ranglar

**Holat:** [✅ To'liq / ⚠️ Qisman / ❌ Tugallanmagan]

**Topilgan muammolar:**
1. [Muammo tavsifi] — [Qaysi faylda] — [Line raqami]
2. [Muammo tavsifi] — [Qaysi faylda]
...

**Tavsiyalar:**
- [Nima qilish kerak]
- [Nima qilish kerak]

#### 2.2 Tipografiya

**Holat:** [✅ To'liq / ⚠️ Qisman / ❌ Tugallanmagan]

**Topilgan muammolar:**
1. ...
2. ...

**Tavsiyalar:**
- ...

---

#**Holat:** [✅ To'liq / ⚠️ Qisman / ❌ Tugallanmagan]

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

### 2.4 Komponentlar

#**Komponentlar ro'yxati va holatlar:**

| Komponent | Variants | Sizes | States | Colors | Holat |
|-----------|----------|-------|--------|--------|-------|
| Button | ✅ | ✅ | ⚠️ | ✅ | 75% |
| Input | ✅ | ❌ | ✅ | ✅ | 66% |
| ... | ... | ... | ... | ... | ... |

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

## 3. SAHIFALAR TAHLILI

### 3.1 Landing Page (02-06 fayllar)

### 3. SAHIFALAR TAHLILI (har bir page uchun to'liqlik %olors | Spacing | Icons | CTA | Responsive | Holat |
|---------|--------|------------|--------|---------|-------|-----|------------|-------|
| Hero | ✅ | ✅ | ✅ | ⚠️ | ✅ | ✅ | ❌ | 85% |
| Trust Bar | ✅ | ✅ | ✅ | ✅ | ✅ | N/A | ⚠️ | 90% |
| Kimlar uchun | ... | ... | ... | ... | ... | ... | ... | ...% |
| Qanday ishlaydi | ... | ... | ... | ... | ... | ... | ... | ...% |
| Imkoniyatlar | ... | ... | ... | ... | ... | ... | ... | ...% |
| Integratsiyalar | ... | ... | ... | ... | ... | ... | ... | ...% |
| Tariflar | ... | ... | ... | ... | ... | ... | ... | ...% |
| Footer | ... | ... | ... | ... | ... | ... | ... | ...% |

**Topilgan muammolar:**
1. [Hero section] — Responsive mobile layout aniq ko'rsatilmagan (02-landing-hero-header.md)
2. [Tariflar section] — Card shadow qiymati belgilanmagan (06-landing-tariflar-cta-footer.md)
...

**Tavsiyalar:**
- Hero section uchun mobile breakpoint (320px, 375px, 425px) layout qo'shish
- Pricing card hover effect va shadow spesifikatsiyalarini qo'shish
...

---

### 3.2 Auth & Onboarding (07-09 fayllar)

**Umumiy holat:** [Raqam]% tayyor

[Xuddi yuqoridagi kabi batafsil jadval va tahlil]

---

### 4. NOMUTANOSIBLIKLAR (Inconsistencies

[Har bir page — 10, 11, 12, 13, 14, 15, 16, 17 — uchun alohida baholash]

Rang, spacing, typography, komponentlardagi nomutanosibliklarni aniq fayl va line raqami bilan ko'rsating.

### 5. EDGE CASE'LAR VA XATOLIK HOLATLAR

### 5.2 Maxsus Edge Case'lar

**Chat:**
- [✅/❌] Mijoz typing + Operator typing
- [✅/❌] Message send failed retry
...

**Onboarding:**
- [✅/❌] Widget verification failed troubleshooting
...

[Barcha kategoriyalar uchun]

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

## 6. ACCESSIBILITY TAHLILI

**Umumiy accessibility coverage:** [Raqam]%

| Mezon | Holat | Izoh |
|-------|-------|------|
| Keyboard navigation | ⚠️ | Ayrim sahifalarda Tab order noaniq |
| ARIA labels | ✅ | Ko'pchilik sahifalarda mavjud |
| Screen reader | ⚠️ | Announcement'lar qisman |
| Color contrast | ✅ | WCAG AA standard bajarilgan |
| Touch targets | ✅ | 44x44px minimum |
| Focus indicators | ⚠️ | Ba'zi buttonlarda yo'q |
| Reduced motion | ❌ | Hisobga olinmagan |

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

## 7. MICRO-INTERACTIONS VA ANIMATSIYALAR

**Umumiy coverage:** [Raqam]%

| Interaction turi | Mavjud sahifalar | Yetishmayotgan sahifalar |
|------------------|-----------------|-------------------------|
| Button hover | 11, 12, 14 | 13, 16, 20-26 |
| Modal animation | 11, 12, 14 | 15, 17, 21 |
| Toast notification | 09, 11 | 10, 13-17 |
| ... | ... | ... |

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

## 8. RESPONSIVE DESIGN TAHLILI

**Umumiy responsive coverage:** [Raqam]%

| Sahifa kategoriyasi | Desktop | Tablet | Mobile | Holat |
|---------------------|---------|--------|--------|-------|
| Landing | ✅ | ⚠️ | ❌ | 66% |
| Auth & Onboarding | ✅ | ✅ | ⚠️ | 83% |
| Dashboard Core | ✅ | ⚠️ | ❌ | 50% |
| Advanced Features | ⚠️ | ❌ | ❌ | 33% |
| Support Pages | ✅ | ✅ | ✅ | 100% |

**Topilgan muammolar:**
1. ...

**Tavsiyalar:**
- ...

---

## 9. DARK MODE TAHLILI

**Holat:** [Mavjud / Qisman / Yo'q]

**Dark mode coverage:** [Raqam]%

| Sahifa | Dark variant | Rang izchilligi | Holat |
|--------|-------------|----------------|-------|
| Landing | ❌ | N/A | 0% |
| Auth | ⚠️ | ⚠️ | 50% |
| Dashboard | ✅ | ✅ | 100% |
| ... | ... | ... | ... |
Qaysi holatlar ko'rib chiqilgan, qaysilari yo'q? Jadval bilan.

### 6. KOMPONENTLAR TO'LIQLIGI

Har bir komponent uchun variants, sizes, states mavjudligini baholang.

### 7. ACCESSIBILITY

Keyboard nav, ARIA, screen reader, color contrast tekshiring.

### 8. RESPONSIVE DESIGN

Desktop/Tablet/Mobile uchun har bir sahifa tahlili.

### 9. DARK MODE

Qaysi sahifalarda mavjud, qayerda yo'q.

### 10. MICRO-INTERACTIONS

Hover, focus, animations qayerda belgilangan.

### 11. YETISHMAYOTGAN ELEMENTLAR

Nima qo'shish kerak? Ro'yxatini tuzing.

### 12. FIGMAGA TAYYORLIK

0-100% ball bering va nima qilish kerak deb yozing.

### 13. TAVSIYA

**ESLATMA:** Ushbu tahlil juda batafsil bo'lishi kerak. Har bir topilgan muammo uchun **aniq fayl nomi** va **misol** keltirish majburiy. Umumiy so'zlar bilan emas, balki **konkret masalalar** ko'rsatilishi kerak.

**Natija:** Bitta to'liq **CHATFLOW_FULL_ANALYSIS.md** fayli yaratiladi, va bu fayl 5000-10000+ qator bo'lishi mumkin, chunki loyiha juda katta va chuqur tahlil talab qilinadi.
🔴 **HIGH PRIORITY** — Figma boshlanishidan oldin albatta qilish kerak
🟡 **MEDIUM PRIORITY** — Dizayn jarayonida qilish mumkin  
🟢 **LOW PRIORITY** — Keyinroq yangilash mumkin

---

## 📝 MUHIM ESLATMALAR:

- **Har bir muammo uchun aniq fayl nomi va misol keltiring**
- **Nomutanosibliklarni konkret ko'rsating** (masalan: "Button height 11-inbox-chat.md da 40px, 14-team.md da 44px")
- **Yetishmayotgan narsalarni aniq yozing** ("Empty state uchun illustration yo'q 20-contacts-crm.md da")
- **Figma tayyorlik foizini haqiqiy hisoblab bering**
- **Jadvallar yasab, vizual ko'rsating**

Tahlil **5000-10000+ qator** bo'lishi kerak, chunki loyiha katta va chuqur tekshirish zarur! 

Juda batafsil, hech narsani o'tkazib yubormasdan yozing. Har bir sahifa, har bir komponent, har bir edge case tekshirilsin!