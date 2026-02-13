# 🔴 Guest Role Permissionlari Aniqlanmagan

**Status:** ✅ DONE  
**Prioritet:** 🔴 HIGH  
**Taxminiy vaqt:** 1 soat  
**Mas'ul:** Product Manager

---

## Muammo

Guest role 2 ta faylda turlicha belgilangan:

| Fayl | Rollar |
|------|--------|
| CHATFLOW_FIGMA_ARCHITECTURE.md | 4 ta: Owner, Admin, Agent, **Guest** |
| PERMISSION_MATRIX.md | 3 ta: Owner, Admin, Agent (Guest yo'q) |

**Natija:** Guest uchun hech qanday permission aniqlanmagan — funksionallikni implement qilib bo'lmaydi!

## Ta'sir

- Backend dasturchi: "Guest nima qila oladi?"
- Frontend: Guest uchun UI ko'rsatish kerakmi?
- Guest funksionallik implement qilinmaydi yoki noto'g'ri qilinadi

## Guest Role Nima?

**Tavsiya etilgan definitsiya:**

**Guest** — Read-only foydalanuvchi. Ko'rish funksiyalari bor, o'zgartirish/yozish yo'q.

**Use case:**
- Stakeholder (CEO, Marketing manager) ning faqat statistika ko'rishi kerak
- External auditor analytics ko'rishi kerak
- Training/Demo maqsadi uchun read-only access

## Tavsiya Etilgan Guest Permissions

| Funksiya | Guest ruxsati | Izoh |
|----------|--------------|------|
| **Conversations** | | |
| Conversation list ko'rish | ✅ | Faqat ko'rish, assign/close qila olmaydi |
| Chat history o'qish | ✅ | Xabarlarni ko'rish (faqat o'qish) |
| Xabar yozish | ❌ | Faqat ko'rish |
| File download | ✅ | Conversation ichidagi fayllarni yuklab olish |
| **Contacts** | | |
| Contact list ko'rish | ✅ | Read-only |
| Contact detail ko'rish | ✅ | Phone, email ko'rish mumkin |
| Contact tahrirlash | ❌ | |
| **Analytics** | | |
| Dashboard ko'rish | ✅ | KPI, charts |
| Report eksport | ✅ | CSV/PDF yuklab olish |
| Custom report yaratish | ❌ | Faqat mavjud reportlar |
| **Team** | | |
| Team member list | ✅ | Kim ishlayotganini ko'rish |
| Team member invite | ❌ | |
| **Settings** | | |
| Settings ko'rish | ❌ | Hech qanday settings |
| Billing ko'rish | ❌ | |
| **Knowledge Base** | | |
| Article o'qish | ✅ | Public KB |
| Article yozish | ❌ | |
| **Automation** | | |
| Flow ko'rish | ✅ | Read-only |
| Flow tahrirlash | ❌ | |

## Bajarilishi Kerak Bo'lgan Ishlar

- [ ] Product decision: Guest role kerakmi? (Agar yo'q bo'lsa, CHATFLOW_FIGMA_ARCHITECTURE.md dan olib tashlash)
- [ ] Agar kerak bo'lsa — PERMISSION_MATRIX.md ga Guest row qo'shish
- [ ] Har bir permission uchun ✅/❌ belgilash
- [ ] Backend: `can('view_conversations', 'guest')` middleware
- [ ] Frontend: Guest UI restrictions (disabled buttons, hidden menus)

## Qo'shimcha Eslatmalar

**Backend permission check:**
```php
// Laravel example
if (auth()->user()->role === 'guest') {
    if (request()->isMethod('post') || request()->isMethod('put')) {
        abort(403, 'Guest users have read-only access');
    }
}
```

**Frontend example:**
```jsx
{user.role !== 'guest' && (
  <Button onClick={sendMessage}>Send</Button>
)}
```

## Bog'liq Fayllar

- `CHATFLOW_FIGMA_ARCHITECTURE.md`
- `PERMISSION_MATRIX.md`
