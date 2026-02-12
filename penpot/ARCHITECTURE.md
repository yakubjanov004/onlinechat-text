# 🏗️ Penpot Automation Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                     CHATFLOW Penpot Automation                       │
│                                                                       │
│  ┌──────────────┐    ┌────────────────┐    ┌──────────────────┐    │
│  │   .env       │───▶│  Node.js       │───▶│  Penpot Cloud    │    │
│  │   Config     │    │  Scripts       │    │  (RPC API)       │    │
│  └──────────────┘    └────────────────┘    └──────────────────┘    │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Detailed Flow

### 1️⃣ Configuration & Authentication

```
┌─────────────────────────────┐
│  .env (Environment Config)  │
├─────────────────────────────┤
│ PENPOT_API_KEY              │ ← 90-day token from Penpot
│ PENPOT_API_URL              │ ← RPC endpoint
│ PENPOT_TEAM_ID              │ ← Default team for projects
└──────────┬──────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  penpot-automation.js                │
├──────────────────────────────────────┤
│ require('dotenv').config()           │
│ → Loads PENPOT_API_KEY               │
│ → Loads PENPOT_API_URL               │
│ → Loads PENPOT_TEAM_ID               │
└──────────┬───────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│  PenpotAPI Class                     │
├──────────────────────────────────────┤
│ constructor(token, url)              │
│ → Sets this.token = token            │
│ → Sets this.url = url                │
│ → Initializes axios client           │
└──────────┬───────────────────────────┘
```

### 2️⃣ Pages Creation Flow

```
┌─────────────────────────────────────────────┐
│  Stage 1: Connection & Verification        │
├─────────────────────────────────────────────┤
│ 1. makeRequest('auth/me', {})              │
│    └─ Test token validity                  │
│    └─ Get current user profile             │
│    └─ Show "Connected as: username"        │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│  Stage 2: Team Access Verification         │
├─────────────────────────────────────────────┤
│ 2. makeRequest('teams/list', {})           │
│    └─ List all teams user has access to    │
│    └─ Verify PENPOT_TEAM_ID exists         │
│    └─ Show "Team found: xxx"               │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│  Stage 3: Project Creation                 │
├─────────────────────────────────────────────┤
│ 3. makeRequest('projects/create', {        │
│      team_id: TEAM_ID,                     │
│      name: 'CHATFLOW Design System'        │
│    })                                       │
│    └─ Returns: project_id                  │
│    └─ Show "Project: CHATFLOW-abc123"      │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│  Stage 4: File Creation                    │
├─────────────────────────────────────────────┤
│ 4. makeRequest('files/create', {           │
│      project_id: PROJECT_ID,               │
│      name: 'CHATFLOW Design System'        │
│    })                                       │
│    └─ Returns: file_id                     │
│    └─ Show "File: CHATFLOW-xyz789"         │
└────────────┬────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────┐
│  Stage 5: Pages Creation (26x)              │
├─────────────────────────────────────────────┤
│ 5. For each page in PAGES_SPEC:            │
│    makeRequest('pages/create', {           │
│      file_id: FILE_ID,                     │
│      name: page.name                       │
│    })                                       │
│    └─ Creates frames inside page           │
│    └─ Repeats 26 times                     │
│    └─ Progress: "Page 1/26... ✓"           │
└────────────┬────────────────────────────────┘
             │
             ▼
     ✅ DONE! 26 Pages Created
```

### 3️⃣ Design System Population Flow

```
┌─────────────────────────────────────────────┐
│  Stage 6: Design System Content             │
├─────────────────────────────────────────────┤
│ penpot-advanced.js runs after pages create  │
└────────────┬────────────────────────────────┘
             │
             ├─────────────────────────────┐
             │                             │
             ▼                             ▼
     ┌──────────────────┐      ┌──────────────────┐
     │  Color Swatches  │      │  Typography      │
     ├──────────────────┤      ├──────────────────┤
     │ • Primary-600    │      │ • Display-1      │
     │ • Gray-900       │      │ • Heading        │
     │ • Success        │      │ • Body           │
     │ • Warning        │      │ • Caption        │
     │ • Error          │      └──────────────────┘
     │ • Info           │              │
     │ (Total 16)       │              │
     └────────┬─────────┘              │
              │                         │
              └────────┬────────────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │  Add to Design      │
            │  System Page        │
            │  (01-Design System) │
            └─────────────────────┘
                       │
                       ▼
            ┌─────────────────────┐
            │  Component Library  │
            │  • Button           │
            │  • Input            │
            │  • Card             │
            │  • Badge            │
            │  • Avatar           │
            │  • Dropdown         │
            │  • Modal            │
            │  • Toast            │
            └─────────────────────┘
                       │
                       ▼
              ✅ Design System Ready!
```

## File Structure

```
onlinechat/
│
├── 📄 penpot-automation.js
│   ├── PenpotAPI class (RPC wrapper)
│   ├── makeRequest(method, params) function
│   ├── Connection test
│   ├── Project/File creation  
│   ├── 26 pages creation loop
│   └── 318 lines, production-ready
│
├── 📄 penpot-advanced.js  
│   ├── AdvancedPenpotAPI extends PenpotAPI
│   ├── addLibraryColor(name, hex)
│   ├── addLibraryComponent(name, width, height)
│   ├── createColorSwatches() → 16 colors
│   ├── createTypographyGuide() → 9 styles
│   ├── createComponentLibrary() → 8 components
│   └── 365 lines, feature-rich
│
├── 📄 .env (CONFIGURATION)
│   ├── PENPOT_API_KEY (token from account)
│   ├── PENPOT_API_URL (https://design.penpot.app/api/rpc/command)
│   └── PENPOT_TEAM_ID (from --list-teams)
│
├── 📄 .env.example (TEMPLATE)
│   ├── Sample PENPOT_API_KEY
│   ├── Sample PENPOT_API_URL
│   └── Sample PENPOT_TEAM_ID
│
├── 📄 package.json (NPM PROJECT)
│   ├── name: "onlinechat"
│   ├── scripts: penpot:list-teams, penpot:create-pages, etc.
│   └── dependencies: axios, dotenv
│
├── 📋 QUICK_START.md (FAST GUIDE - 5 MINUTES)
├── 📋 PENPOT_SETUP.md (DETAILED GUIDE - 20+ SECTIONS)
├── 📋 PENPOT_AUTOMATION_README.md (FEATURE REFERENCE)
├── 📋 TROUBLESHOOTING.md (10+ ISSUES & SOLUTIONS)
├── 📋 THIS FILE (ARCHITECTURE.md)
│
└── 📁 docs/ (EXTENDED DOCUMENTATION)
    ├── PENPOT_API_RESEARCH.md (15 sections, 600+ lines)
    ├── PENPOT_API_QUICK_REFERENCE.md (API endpoints, methods)
    └── PENPOT_API_CODE_EXAMPLES.md (Code samples, snippets)
```

## Data Structures

### PAGES_SPEC (26 Pages)

```javascript
const PAGES_SPEC = [
  {
    id: 'design-system',
    name: '01-Design System',
    frames: ['Palette', 'Typography', 'Components'],
  },
  {
    id: 'landing-hero',
    name: '02-Landing: Hero & Header',
    frames: ['Hero', 'Navigation', 'CTA'],
  },
  // ... 24 more pages
  {
    id: 'developer',
    name: '26-Developer',
    frames: ['API Docs', 'Webhooks', 'SDK'],
  },
];
```

### COLOR_PALETTE (16 Colors)

```javascript
const COLOR_PALETTE = {
  'Primary-600': '#4F46E5',
  'Primary-500': '#6366F1',
  'Primary-400': '#818CF8',
  'Gray-900': '#111827',
  'Gray-700': '#374151',
  'Gray-500': '#6B7280',
  'Gray-300': '#D1D5DB',
  'Gray-100': '#F3F4F6',
  'Success': '#10B981',
  'Warning': '#FBBF24',
  'Error': '#EF4444',
  'Info': '#3B82F6',
  'Blue-600': '#2563EB',
  'Purple-600': '#7C3AED',
  'Green-600': '#16A34A',
  'Red-600': '#DC2626',
};
```

### TYPOGRAPHY (9 Styles)

```javascript
const TYPOGRAPHY = {
  'Display-1': { fontSize: 48, fontWeight: 700, lineHeight: 1.2 },
  'Display-2': { fontSize: 40, fontWeight: 700, lineHeight: 1.3 },
  'Heading-1': { fontSize: 32, fontWeight: 700, lineHeight: 1.3 },
  'Heading-2': { fontSize: 24, fontWeight: 700, lineHeight: 1.4 },
  'Heading-3': { fontSize: 20, fontWeight: 600, lineHeight: 1.4 },
  'Body-Large': { fontSize: 18, fontWeight: 400, lineHeight: 1.5 },
  'Body': { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
  'Body-Small': { fontSize: 14, fontWeight: 400, lineHeight: 1.6 },
  'Caption': { fontSize: 12, fontWeight: 400, lineHeight: 1.6 },
};
```

### COMPONENTS_SPEC (8 Components)

```javascript
const COMPONENTS_SPEC = [
  { 
    name: 'Button',
    variants: ['Default', 'Hover', 'Active', 'Disabled'],
  },
  { 
    name: 'Input',
    variants: ['Default', 'Focused', 'Error', 'Disabled'],
  },
  // ... 6 more components
  { 
    name: 'Toast',
    variants: ['Success', 'Error', 'Warning', 'Info'],
  },
];
```

## API Communication

### RPC Protocol

```
HTTP POST Request
├─ Endpoint: https://design.penpot.app/api/rpc/command
├─ Headers:
│  ├─ Content-Type: application/json
│  └─ Authorization: Bearer {PENPOT_API_KEY}
├─ Body: {
│    "method": "teams/list",
│    "params": {}
│  }
└─ Response: {
   "id": "1",
   "result": [...teams...]
 }
```

### Example: Create Page

```javascript
// Request
{
  "method": "pages/create",
  "params": {
    "file_id": "abc123",
    "name": "01-Design System"
  }
}

// Response
{
  "id": "1",
  "result": {
    "id": "page-xyz789",
    "name": "01-Design System",
    "file_id": "abc123"
  }
}
```

## Error Handling

```
┌─────────────────────────────────────────┐
│  makeRequest() Error Flow               │
├─────────────────────────────────────────┤
│ Try:                                    │
│   axios.post(url, payload, config)     │
│                                         │
│ Catch:                                  │
│   if (error.response) {                │
│     // 401, 400, 500, etc.             │
│     handle HTTP error                  │
│   } else if (error.request) {          │
│     // No response from server         │
│     handle connection error            │
│   } else {                             │
│     // Error building request          │
│     handle config error                │
│   }                                     │
└─────────────────────────────────────────┘
```

## Execution Timeline

```
Command: npm run penpot:full

Timeline:
├─ 0s     → Script starts
├─ 1s     → .env loaded
├─ 2s     → Connect to Penpot (auth/me)
├─ 3s     → List teams
├─ 4s     → Create project
├─ 5s     → Create file
├─ 6-70s  → Create 26 pages
│  ├─ Page 1/26 ✓
│  ├─ Page 2/26 ✓
│  ├─ ...
│  └─ Page 26/26 ✓
├─ 71s    → penpot-advanced.js starts
├─ 72s    → Create 16 color swatches
├─ 73s    → Create 9 typography styles
├─ 74s    → Create 8 components
├─ 75s    → ✅ Complete!
│
└─ Next: Open https://design.penpot.app
  → CHATFLOW Design System project
  → 26 pages ready!
```

## Technologies & Dependencies

| Technology | Purpose | Version |
|-----------|---------|---------|
| **Node.js** | Runtime environment | 18.x+ |
| **axios** | HTTP client for RPC calls | ^1.13.5 |
| **dotenv** | Environment variable loader | ^17.2.4 |
| **Penpot RPC API** | Design automation API | v2.0+ |

## Security

```
Security Layers:
├─ .env file (never commit to git)
│  └─ .gitignore: .env
├─ Token stored locally
│  └─ 90-day expiration
├─ HTTPS only (design.penpot.app)
│  └─ TLS 1.2+
└─ No sensitive data in logs
   └─ Token masked in output
```

## Performance

```
Pages Creation: O(n) where n=26
├─ Sequential API calls
├─ 1-2 sec per page
├─ Total: ~60-70 seconds

Design System Population: O(m) where m=colors+fonts+components
├─ ~16 + 9 + 8 = 33 items
├─ ~1-2 sec per item
├─ Total: ~30-60 seconds

Total Execution: ~2-3 minutes for full automation
```

## Next Steps

```
After automation script completes:

1. ✅ 26 Pages created
   └─ Each page has 3-4 frames
   
2. ✅ Design System page populated
   └─ Colors ready
   └─ Typography ready
   └─ Components ready
   
3. 🟠 Manual work starts
   ├─ Add content to frames
   ├─ Set up component variants
   ├─ Create prototypes
   ├─ Add interactions
   └─ Finalize designs

4. 📤 Export & Handoff
   ├─ Generate design tokens (CSS variables)
   ├─ Export components
   ├─ Create developer docs
   └─ Share with dev team
```

---

**Architecture Summary:**
- **Simple:** 2 Node.js scripts, standard RPC API
- **Secure:** Token-based auth, HTTPS only
- **Scalable:** Loop-based page creation, easy to extend
- **Documented:** 5 markdown guides, code comments
- **Tested:** Error handling, retry logic, debug mode

**Ready to build? → Run: `npm run penpot:full` 🚀**
