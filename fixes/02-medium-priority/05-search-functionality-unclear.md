# 🟡 Search Funksionallik 7 Sahifada Noaniq

**Status:** ✅ DONE  
**Prioritet:** 🟡 MEDIUM  
**Taxminiy vaqt:** 3-4 soat  
**Mas'ul:** UX Designer + Product Manager

---

## Muammo

7 ta sahifada "Search" input mavjud, lekin **aniq spec yo'q:**

| Sahifa | Search input bor? | Search scope | Debounce | Min chars |
|--------|------------------|--------------|----------|-----------|
| 11-inbox-chat.md | ✅ | "Search conversations" | ❓ | ❓ |
| 12-inbox-advanced.md | ✅ | "Search by customer name / ID" | ❓ | ❓ |
| 14-team.md | ✅ | "Search team members" | ❓ | ❓ |
| 20-contacts-crm.md | ✅ | "Search contacts" | ❓ | ❓ |
| 21-online-visitors.md | ✅ | "Search visitors" | ❓ | ❓ |
| 23-knowledge-base.md | ✅ | "Search articles" | ❓ | ❓ |
| 28-global-search.md | ✅ | "All (conv, contacts, KB, files)" | ❓ | ❓ |

**Noaniq spec:**
- Search qaysi fieldlarda qidiradi? (Name, email, phone, message text?)
- Qancha belgi yozganda qidirishni boshlaydi? (1 char, 3 char?)
- Real-time search (debounce) bormi yoki Enter key press?
- Fuzzy match (typo tolerance) bormi?
- Search result birlikda qanday sort qilinadi? (Relevance, date, alphabetical?)

## Ta'sir

**User experience:**
- Foydalanuvchi 1 belgi yozadi — 1000 ta result → slow UI
- Backend ga har bir keystroke uchun request → server overload
- Typo qilsa, hech narsa topolmaydi

**Development:**
- Frontend dasturchi: "Qanday logic yozaman?"
- Backend: "SQL LIKE mi yoki Full-text search?"

## Tavsiya Etilgan Search Spec (Standard)

### Global Rules

| Parameter | Value | Izoh |
|-----------|-------|------|
| **Min characters** | 3 | 1-2 belgi — juda ko'p result |
| **Debounce** | 300ms | User yozib bo'lgandan 300ms keyin search |
| **Max results** | 50 | Pagination agar ko'p bo'lsa |
| **Fuzzy match** | ❌ (v1.0) | Aniq match, v2.0 da AI-powered |
| **Case sensitive** | ❌ | Lowercase match |
| **Sort** | Relevance → Date (newest) | |

### Sahifa-specific Scope

#### 11-inbox-chat.md — "Search conversations"
**Qidiriladigan fieldlar:**
- Customer name
- Customer email
- Conversation ID
- Last message text (first 100 chars)

**Noaniq qoldirish:**
- Barcha message history ichini qidirishmi? (Slow!)

**Tavsiya:** Faqat customer info + last message (fast).

---

#### 12-inbox-advanced.md — "Search by customer name / ID"
**Qidiriladigan fieldlar:**
- Customer full name
- Customer email
- Customer phone
- Customer ID (exact match)

---

#### 14-team.md — "Search team members"
**Qidiriladigan fieldlar:**
- Agent full name
- Agent email
- Role (Owner, Admin, Agent)

---

#### 20-contacts-crm.md — "Search contacts"
**Qidiriladigan fieldlar:**
- Contact name
- Email
- Phone
- Company name
- Tags

---

#### 21-online-visitors.md — "Search visitors"
**Qidiriladigan fieldlar:**
- IP address
- Country
- Current page URL
- Session ID

---

#### 23-knowledge-base.md — "Search articles"
**Qidiriladigan fieldlar:**
- Article title
- Article content (full-text)
- Tags
- Category

**Special:** Full-text search — PostgreSQL `to_tsvector` yoki Elasticsearch.

---

#### 28-global-search.md — "Search everywhere"
**Qidiriladigan resource:**
- Conversations
- Contacts
- Knowledge Base articles
- Files (filename only, NOT file content)
- Team members

**Result grouping:**
```
Conversations (12)
  - John Doe: "Hello, I need help..."
  - Jane Smith: "Order #12345"

Contacts (3)
  - Mike Johnson (mike@example.com)

Articles (5)
  - "How to reset password"
```

## Bajarilishi Kerak Bo'lgan Ishlar

### Decision kerak:
- [ ] Product: Full message history search kerakmi? (Performance impact)
- [ ] Product: Fuzzy match (typo tolerance) v1.0 da kerakmi?

### Design System:
- [ ] `01-design-system.md` ga Search component qo'shish
  - [ ] Search input style
  - [ ] Loading spinner (debounce paytida)
  - [ ] Empty state: "No results found"
  - [ ] Search result item layout

### Har sahifa uchun:
- [ ] 11, 12, 14, 20, 21, 23, 28 — Search scope document qilish
- [ ] ASCII wireframe: Search result dropdown
- [ ] Backend: Search API spec
  - [ ] `GET /api/conversations/search?q=john&limit=50`
  - [ ] Response: `{ results: [...], total: 120 }`

### Backend Implementation:
- [ ] SQL LIKE vs Full-text search decision
  - [ ] PostgreSQL: `to_tsvector` + `to_tsquery` (KB articles)
  - [ ] MySQL: `FULLTEXT` index
  - [ ] Elasticsearch (optional, advanced)
- [ ] Search indexing strategy

## Qo'shimcha Eslatmalar

**Frontend Debounce Example:**
```javascript
const [query, setQuery] = useState('');

const debouncedSearch = useMemo(
  () => debounce((q) => {
    if (q.length >= 3) {
      fetchSearchResults(q);
    }
  }, 300),
  []
);

const handleChange = (e) => {
  setQuery(e.target.value);
  debouncedSearch(e.target.value);
};
```

**Backend PostgreSQL Full-text:**
```sql
-- Create index
CREATE INDEX idx_articles_search ON articles 
USING GIN(to_tsvector('english', title || ' ' || content));

-- Search query
SELECT * FROM articles
WHERE to_tsvector('english', title || ' ' || content) 
@@ to_tsquery('english', 'help & password');
```

## Bog'liq Fayllar

- `figma-docs/01-design-system.md`
- `figma-docs/11-inbox-chat.md`
- `figma-docs/12-inbox-advanced.md`
- `figma-docs/14-team.md`
- `figma-docs/20-contacts-crm.md`
- `figma-docs/21-online-visitors.md`
- `figma-docs/23-knowledge-base.md`
- `figma-docs/28-global-search.md`
