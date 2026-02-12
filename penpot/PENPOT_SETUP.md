# 🎨 Penpot Automation Setup & Usage Guide

> Otomatik CHATFLOW design system yaratuvchi script

## 🚀 Quick Start (5 min)

### Step 1: Get Penpot API Token

1. **Open Penpot:** https://design.penpot.app/
2. **Go to:** Account (top-left) → **Access tokens** tab
3. **Click:** "+ Generate new token"
4. **Copy:** The generated token (valid 90 days)

### Step 2: Configure Environment

```bash
# Create .env file (or copy from .env.example)
cp .env.example .env

# Edit .env and add your token:
PENPOT_API_KEY=your_copied_token_here
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
```

### Step 3: Find Your Team ID

```bash
# List available teams
node penpot-automation.js --list-teams

# Copy the Team ID you want to use
# Add to .env:
PENPOT_TEAM_ID=team-id-here
```

### Step 4: Run Automation

```bash
# Install dependencies (if not done)
npm install

# Run automation script
node penpot-automation.js
```

**Expected Output:**
```
🎨 CHATFLOW Penpot Automation Started

🔓 Testing Penpot API connection...
✅ Connected as: your@email.com

📁 Fetching teams...
📊 Creating project: "CHATFLOW Design System"...
✅ Project created (ID: abc123...)

📄 Creating master file: "CHATFLOW Design System"...
✅ File created (ID: xyz789...)

📑 Creating design pages...
  → Creating page: 01-Design System
    ✅ ID: page-001
  → Creating page: 02-Landing: Hero & Header
    ✅ ID: page-002
  [... 24 more pages ...]

🎉 Automation completed successfully!
```

### Step 5: Open in Penpot

1. Go to https://design.penpot.app/
2. Open project: **CHATFLOW Design System**
3. All 26 pages are created and ready for design! 🎉

---

## 📋 What Gets Created

### Project Structure
```
CHATFLOW Design System (Project)
└── CHATFLOW Design System (File)
    ├── 01-Design System
    ├── 02-Landing: Hero & Header
    ├── 03-Landing: Trust & Companies
    ├── 04-Landing: Features
    ├── 05-Landing: Integrations
    ├── 06-Landing: Pricing & Footer
    ├── 07-Auth: Sign Up & Login
    ├── 08-Onboarding: Welcome
    ├── 09-Onboarding: Widget Install
    ├── 10-Dashboard: Layout
    ├── 11-Inbox: Chat ⭐ (Most important)
    ├── 12-Inbox: Advanced
    ├── 13-Automation
    ├── 14-Team
    ├── 15-Analytics
    ├── 16-Settings
    ├── 17-Billing
    ├── 20-Contacts: CRM
    ├── 21-Online Visitors
    ├── 22-Team Chat
    ├── 23-Knowledge Base
    ├── 24-Addons: Marketplace
    ├── 25-Advanced Analytics
    └── 26-Developer
```

---

## 🔧 Advanced Usage

### Custom Configuration

Edit `penpot-automation.js` to customize:

```javascript
// Change project name
const PROJECT_NAME = 'My Custom Project Name';

// Add/remove pages
const PAGES_SPEC = [
  {
    id: '01-design-system',
    name: '01-Design System',
    description: 'Your description',
    sections: [
      { name: 'Colors', y: 0 },
      { name: 'Typography', y: 200 },
    ],
  },
  // Add more...
];

// Customize design tokens
const DESIGN_TOKENS = {
  colors: {
    primary: '#4F46E5',
    // ...
  },
};
```

### List Teams Only

```bash
node penpot-automation.js --list-teams
```

Output:
```
Available teams:
  - My Team (ID: team-123abc...)
  - Work Team (ID: team-456def...)
  - ..
```

### Troubleshooting

**Error: "PENPOT_API_KEY not set"**
- Copy `.env.example` to `.env`
- Add your token to `.env`

**Error: "RPC Error: Unauthorized"**
- Check token is correct
- Token might be expired (90-day limit)
- Generate new token and try again

**Error: "Team not found"**
- Run `node penpot-automation.js --list-teams`
- Copy correct Team ID
- Add to `.env` as `PENPOT_TEAM_ID`

**Error: "Cannot connect to Penpot"**
- Check internet connection
- Verify `PENPOT_API_URL` is correct (should be `https://design.penpot.app/api/rpc/command`)
- If using self-hosted, update URL to your instance

---

## 📚 Penpot API Methods

Automatsiyada qo'llanilgan asosiy API metodlar:

| Method | Purpose |
|--------|---------|
| `profile/get-profile` | Current user info |
| `team/list-teams` | Get all teams |
| `project/create-project` | Create project |
| `project/get-project` | Get project info |
| `file/create-file` | Create file (in project) |
| `file/get-file` | Get file structure |
| `page/create-page` | Create page (in file) |
| `shapes/add-frame` | Add frame/shape |

**Full API Docs:** https://github.com/penpot/penpot/blob/main/docs/rpc_api.md

---

## 🎯 Next Steps After Automation

### 1. Design System (Page 01)
- Add color swatches
- Define typography
- Create component library
- Set spacing/sizing rules

### 2. Create Components
- Button variants
- Input fields
- Dropdown
- Table
- Modal
- Card
- (See `/fixes/03-components-needed/` for specs)

### 3. Create Pages
- Add frames for each screen
- Apply components
- Set responsive breakpoints
- Add interactions (if needed)

### 4. Design Tokens
- Export color palette
- Export typography scale
- Export spacing system
- Create token file for development

### 5. Developer Handoff
- Add specs to components
- Create CSS export
- Generate code examples
- Document usages

---

## 🔄 Workflow Automation

### Full CI/CD Pipeline

```bash
#!/bin/bash
# deploy-design.sh - Automated design deployment

# 1. Generate design from specs
node penpot-automation.js

# 2. Export tokens
npm run export-tokens

# 3. Generate React components
npm run generate-components

# 4. Build documentation
npm run build-docs

# 5. Deploy
git add . && git commit -m "Auto: Design update" && git push
```

### Continuous Sync

```javascript
// Watch for spec changes and auto-update Penpot
const chokidar = require('chokidar');

chokidar.watch('figma-docs/**/*.md').on('change', () => {
  console.log('Spec changed! Syncing to Penpot...');
  require('./penpot-automation.js').main();
});
```

---

## 📊 API Rate Limits

- **No strict limits** on Penpot RPC API (self-paced)
- **Recommended:** Max 10-20 RPC calls/second
- **Large files:** May timeout (increase timeout if needed)

---

## 🔐 Security Best Practices

1. **Never commit `.env`** - Add to `.gitignore`
2. **Use `.env.example`** - Share without secrets
3. **Token rotation** - Regenerate tokens periodically
4. **Team isolation** - Use separate tokens per team
5. **Monitor access** - Check token usage in Penpot UI

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Token expired | Generate new token in Penpot account |
| Can't find Team ID | Run `--list-teams` command |
| API timeout | Increase wait time, reduce batch size |
| Permission denied | Check token has correct permissions |
| File already exists | Change FILE_NAME or delete old file |

---

## 📖 Learn More

- **Penpot Docs:** https://help.penpot.app/
- **API Reference:** https://github.com/penpot/penpot/blob/main/docs/rpc_api.md
- **Penpot Plugins:** https://github.com/penpot/plugins
- **Community:** https://community.penpot.app/

---

## 📝 Script Code Structure

```
penpot-automation.js
├── Configuration
│   ├── API credentials
│   ├── Design tokens
│   └── Page specifications
├── PenpotAPI Class
│   ├── RPC method wrapper
│   ├── Authentication
│   └── API endpoints
└── Main Logic
    ├── Test connection
    ├── Create project
    ├── Create file
    └── Generate all pages
```

---

## ✅ Checklist

- [ ] Penpot account created
- [ ] API token generated
- [ ] `.env` file configured
- [ ] `npm install` completed
- [ ] `node penpot-automation.js` ran successfully
- [ ] Project visible in Penpot dashboard
- [ ] 26 pages created
- [ ] Ready to design!

---

**Questions?** Check the API research docs in `/docs/`:
- `docs/PENPOT_API_RESEARCH.md` - Complete research
- `docs/PENPOT_API_QUICK_REFERENCE.md` - Quick reference
- `docs/PENPOT_API_CODE_EXAMPLES.md` - Code samples

🎨 **Happy designing!** 🚀
