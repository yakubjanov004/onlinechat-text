# CHATFLOW — Unified Permission Matrix

**Yaratilgan:** 2026-02-11  
**Maqsad:** Barcha modullar uchun yagona va izchil ruxsatlar tizimi

---

## Rollar Tavsifi

### 1. Admin
- **To'liq kirish:** Barcha modullar, sozlamalar va billing
- **CRUD:** Hamma narsani yaratish, o'qish, yangilash, o'chirish
- **Special:** Workspace settings, billing, API keys, delete agents

### 2. Manager
- **Kirish:** Jamoa boshqaruvi, analitika, chat nazorati
- **CRUD:** Operatorlarni boshqarish, chatlarni ko'rish
- **Cheklovlar:** Workspace settings yo'q, billing yo'q, rollarni o'zgartira olmaydi
- **Maqsad:** Team lead yoki supervisor role

### 3. Operator
- **Kirish:** Faqat chatlar va o'z statistikasi
- **CRUD:** Chatlarni javoblash, o'z profilini tahrirlash
- **Cheklovlar:** Jamoa, automation, settings ko'ra olmaydi
- **Maqsad:** Customer support agent

---

## PERMISSION MATRIX — To'liq Jadval

| Module | Action | Admin | Manager | Operator | Izoh |
|--------|--------|-------|---------|----------|------|
| **INBOX** |
| View all chats | ✅ | ✅ | ❌ (own only) | Manager assigns chats |
| View own chats | ✅ | ✅ | ✅ | |
| Reply to chat | ✅ | ✅ | ✅ | |
| Assign chat | ✅ | ✅ | ⚠️ (to self) | Manager assigns to anyone |
| Transfer chat | ✅ | ✅ | ✅ | |
| Resolve/Close chat | ✅ | ✅ | ✅ | |
| Reopen chat | ✅ | ✅ | ❌ | Only Admin/Manager |
| Delete chat | ✅ | ❌ | ❌ | Only Admin |
| Add tags | ✅ | ✅ | ✅ | |
| Add notes | ✅ | ✅ | ✅ | |
| View contact info | ✅ | ✅ | ✅ | |
| Export chat history | ✅ | ✅ | ⚠️ (own only) | |
| **AUTOMATION** |
| View rules/settings | ✅ | ✅ | ⚠️ (read-only) | Manager can view |
| Edit working hours | ✅ | ❌ | ❌ | Only Admin |
| Edit auto-reply | ✅ | ❌ | ❌ | Only Admin |
| Create/edit triggers | ✅ | ❌ | ❌ | Only Admin |
| Edit greetings | ✅ | ❌ | ❌ | Only Admin |
| Delete automation | ✅ | ❌ | ❌ | Only Admin |
| **TEAM** |
| View agents list | ✅ | ✅ | ⚠️ (list only) | Operator sees names |
| Invite agents | ✅ | ✅ | ❌ | Manager can invite |
| Edit agent profile | ✅ | ⚠️ (operators) | ❌ | Manager: operators only |
| Suspend agent | ✅ | ❌ | ❌ | Only Admin |
| Delete agent | ✅ | ❌ | ❌ | Only Admin |
| Manage roles | ✅ | ❌ | ❌ | Only Admin |
| View invitations | ✅ | ✅ | ❌ | |
| Cancel invitation | ✅ | ✅ | ❌ | |
| View agent stats | ✅ | ✅ | ⚠️ (own only) | |
| **ANALYTICS** |
| View dashboard | ✅ | ✅ | ⚠️ (own stats) | Operator: My Stats tab |
| View team performance | ✅ | ✅ | ❌ | Manager sees all |
| View SLA monitoring | ✅ | ✅ | ❌ | |
| Create custom dashboards | ✅ | ✅ | ❌ | Manager can customize |
| Export reports | ✅ | ✅ | ⚠️ (own only) | |
| Schedule reports | ✅ | ✅ | ❌ | Manager can schedule |
| View segments analytics | ✅ | ✅ | ❌ | |
| Compare operators | ✅ | ✅ | ❌ | Manager sees comparison |
| View CSAT | ✅ | ✅ | ⚠️ (own only) | |
| **CONTACTS / CRM** |
| View all contacts | ✅ | ✅ | ✅ | All see contacts |
| Create contact | ✅ | ✅ | ✅ | |
| Edit contact | ✅ | ✅ | ✅ | |
| Delete contact | ✅ | ✅ | ❌ | Only Admin/Manager |
| Import contacts | ✅ | ✅ | ❌ | CSV/Excel import |
| Export contacts | ✅ | ✅ | ❌ | |
| Merge duplicates | ✅ | ✅ | ❌ | |
| Create segments | ✅ | ✅ | ❌ | |
| View segments | ✅ | ✅ | ✅ | Operator read-only |
| **ONLINE VISITORS** |
| View visitors | ✅ | ✅ | ✅ | All see online visitors |
| Send proactive message | ✅ | ✅ | ✅ | All can initiate |
| View visitor details | ✅ | ✅ | ✅ | Page history, location |
| Track visitor activity | ✅ | ✅ | ⚠️ (own chats) | Manager sees all |
| **TEAM CHAT** |
| Send direct messages | ✅ | ✅ | ✅ | Internal chat |
| Create public rooms | ✅ | ✅ | ✅ | All can create |
| Create private rooms | ✅ | ✅ | ❌ | Admin/Manager only |
| Join public rooms | ✅ | ✅ | ✅ | |
| Edit room settings | ✅ | ⚠️ (own rooms) | ❌ | Manager: own rooms |
| Delete rooms | ✅ | ❌ | ❌ | Only Admin |
| Delete messages | ✅ | ⚠️ (own) | ⚠️ (own) | Own messages only |
| Create announcements | ✅ | ✅ | ❌ | #announcements channel |
| Generate invite links | ✅ | ✅ | ❌ | Room invite links |
| View all rooms | ✅ | ✅ | ⚠️ (joined) | Operator: joined only |
| **KNOWLEDGE BASE** |
| View articles | ✅ | ✅ | ✅ | Public articles |
| Create articles | ✅ | ✅ | ⚠️ (draft) | Operator: draft only |
| Publish articles | ✅ | ✅ | ❌ | Manager can publish |
| Edit articles | ✅ | ✅ | ⚠️ (own) | |
| Delete articles | ✅ | ✅ | ❌ | |
| Manage categories | ✅ | ✅ | ❌ | |
| View analytics | ✅ | ✅ | ⚠️ (own) | Article views, helpful |
| **ADD-ONS / MARKETPLACE** |
| View marketplace | ✅ | ✅ | ✅ | Browse add-ons |
| Activate add-ons | ✅ | ❌ | ❌ | Only Admin |
| Deactivate add-ons | ✅ | ❌ | ❌ | Only Admin |
| Configure add-ons | ✅ | ⚠️ (read-only) | ❌ | Manager: view config |
| View active add-ons | ✅ | ✅ | ✅ | |
| **SETTINGS** |
| Workspace settings | ✅ | ❌ | ❌ | Name, logo, timezone |
| Widget settings | ✅ | ❌ | ❌ | Color, position, text |
| Security settings | ✅ | ❌ | ❌ | 2FA, IP whitelist |
| Notification preferences | ✅ | ✅ | ✅ | Personal settings |
| Profile settings | ✅ | ✅ | ✅ | Avatar, name, password |
| Language settings | ✅ | ✅ | ✅ | Interface language |
| Advanced settings | ✅ | ❌ | ❌ | Data retention, GDPR |
| **BILLING** |
| View plan | ✅ | ⚠️ (read-only) | ❌ | Manager sees plan |
| Upgrade/downgrade plan | ✅ | ❌ | ❌ | Only Admin |
| View invoices | ✅ | ⚠️ (read-only) | ❌ | Manager can view |
| Download invoices | ✅ | ⚠️ (read-only) | ❌ | |
| Manage payment methods | ✅ | ❌ | ❌ | Only Admin |
| View usage stats | ✅ | ✅ | ❌ | API calls, storage |
| Cancel subscription | ✅ | ❌ | ❌ | Only Admin |
| **DEVELOPER / API** |
| View API keys | ✅ | ⚠️ (read-only) | ❌ | Manager sees masked |
| Create API keys | ✅ | ❌ | ❌ | Only Admin |
| Regenerate API keys | ✅ | ❌ | ❌ | Only Admin |
| Delete API keys | ✅ | ❌ | ❌ | Only Admin |
| View webhooks | ✅ | ⚠️ (read-only) | ❌ | Manager sees list |
| Create webhooks | ✅ | ❌ | ❌ | Only Admin |
| Edit webhooks | ✅ | ❌ | ❌ | Only Admin |
| Delete webhooks | ✅ | ❌ | ❌ | Only Admin |
| Test webhooks | ✅ | ⚠️ (limited) | ❌ | Manager can test |
| View webhook logs | ✅ | ✅ | ❌ | Manager monitors |
| View API documentation | ✅ | ✅ | ✅ | Public docs |

---

## Legend

- ✅ **To'liq ruxsat** — View, Create, Edit, Delete
- ⚠️ **Cheklangan ruxsat** — Qo'shimcha shartlar bilan (qavsda ko'rsatilgan)
- ❌ **Ruxsat yo'q** — Kirish imkoni yo'q

---

## Manager Role Summary

### ✅ Manager qila oladigan ishlar:
1. **Team Management:**
   - Operatorlarni invite qilish
   - Operatorlarni tahrirlash (rolni o'zgartirmasa)
   - Takliflarni bekor qilish
   - Jamoa statistikasini ko'rish

2. **Chat Oversight:**
   - Barcha chatlarni ko'rish (monitoring)
   - Chatlarni assign/transfer qilish
   - Tag va note qo'shish
   - Chat history export (barcha chatlar)

3. **Analytics & Reporting:**
   - To'liq analitika dashboard
   - Operator performance ko'rish
   - SLA monitoring
   - Custom dashboards yaratish
   - Reports schedule qilish
   - Segment va tag analytics

4. **Team Chat:**
   - Public va private rooms yaratish
   - O'z room'larini boshqarish
   - Announcements yaratish
   - Invite links yaratish

5. **Knowledge Base:**
   - Articles publish qilish
   - Categories boshqarish
   - KB analytics ko'rish

6. **Monitoring:**
   - API/Webhook logs ko'rish
   - Usage stats ko'rish
   - Billing plan ko'rish (read-only)
   - Online visitors monitoring

### ❌ Manager qila olmaydigan ishlar:
1. **System Configuration:**
   - Workspace settings (name, logo, timezone)
   - Widget customization
   - Security settings (2FA, IP whitelist)
   - Advanced settings (data retention)

2. **Automation:**
   - Working hours edit
   - Auto-reply messages
   - Triggers create/edit
   - Greeting messages

3. **Billing:**
   - Plan upgrade/downgrade
   - Payment methods manage
   - Subscription cancel
   - Invoice generation

4. **API/Developer:**
   - API keys create/regenerate/delete
   - Webhooks create/edit/delete

5. **Team Actions:**
   - Rollarni boshqarish (create/edit/delete roles)
   - Agentlarni suspend/delete qilish
   - Admin rollidan foydalanuvchilarni tahrirlash

6. **Add-ons:**
   - Add-on activate/deactivate
   - Add-on configuration

---

## Implementation Guidelines

### Frontend
```javascript
// Permission check example
const canEditAgent = (currentUser, targetAgent) => {
  if (currentUser.role === 'Admin') return true;
  if (currentUser.role === 'Manager') {
    return targetAgent.role === 'Operator';
  }
  return false;
};

// UI element visibility
{hasPermission('team.invite') && (
  <Button>+ Agent qo'shish</Button>
)}
```

### Backend
```javascript
// Middleware example
const requirePermission = (action) => {
  return (req, res, next) => {
    if (!req.user.hasPermission(action)) {
      return res.status(403).json({
        error: 'Forbidden',
        message: 'You do not have permission to perform this action'
      });
    }
    next();
  };
};

// Route protection
router.post('/automation/triggers', 
  requirePermission('automation.create'), 
  createTrigger
);
```

### Database Schema
```sql
-- roles table
CREATE TABLE roles (
  id UUID PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) UNIQUE NOT NULL, -- 'admin', 'manager', 'operator'
  is_system BOOLEAN DEFAULT FALSE,
  permissions JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- permissions column example
{
  "inbox": {
    "view_all": true,
    "assign": true,
    "delete": false
  },
  "team": {
    "view": true,
    "invite": true,
    "edit": "operators_only",
    "delete": false
  },
  "automation": {
    "view": true,
    "edit": false
  }
}
```

---

## Validation Rules

1. **Can't delete last Admin** — Workspace'da kamida 1 ta Admin bo'lishi shart
2. **Can't change own role** — Foydalanuvchi o'z rolini o'zgartira olmaydi
3. **Manager can't edit Admin/Manager** — Faqat Operatorlarni tahrirlaydi
4. **Operator can't see other's chats** — Faqat o'z chatlarini ko'radi
5. **Permission inheritance** — Admin barcha ruxsatlarga ega

---

## Testing Checklist

- [ ] Admin barcha funksiyalarni bajara oladi
- [ ] Manager Operator qo'sha oladi
- [ ] Manager Automation'ni o'zgartira olmaydi
- [ ] Manager Billing'ga kira olmaydi
- [ ] Manager API key yarata olmaydi
- [ ] Manager barcha chatlarni ko'ra oladi
- [ ] Manager analitika export qila oladi
- [ ] Operator faqat o'z chatlarini ko'radi
- [ ] Operator Team Chat'dan foydalana oladi
- [ ] Operator settings'ni o'zgartira olmaydi
- [ ] 403 error to'g'ri qaytariladi
- [ ] UI elementlar role'ga ko'ra hide/disable bo'ladi

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-02-11 | Initial unified permission matrix |

---

**Status:** ✅ Production Ready  
**Oxirgi yangilanish:** 2026-02-11

**Keyingi qadam:** Bu matritsani barcha figma-docs fayllariga reference qilish va izchillikni ta'minlash.
