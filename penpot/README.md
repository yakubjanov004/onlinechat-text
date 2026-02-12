# 🎨 Penpot Automation — Setup & Usage

Welcome to the **CHATFLOW Penpot Design System** automation!

## 🚀 Quick Start (5 minutes)

### 1️⃣ Setup .env File
```bash
# Copy template
cp .env.example .env

# Edit .env with your Penpot API token
nano .env
# Or on Windows: notepad .env
```

Add your token (get from https://design.penpot.app/):
```
PENPOT_API_KEY=your_token_here
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
PENPOT_TEAM_ID=your_team_id_here
```

### 2️⃣ Find Your Team ID
```bash
# Go back to parent directory
cd ..

# List your available teams
npm run penpot:list-teams

# Copy team ID from output and add to penpot/.env
```

### 3️⃣ Run Automation
```bash
# From project root, run:
npm run penpot:full

# Or run individually:
npm run penpot:create-pages
npm run penpot:setup-design-system
```

**Done!** Check your Penpot dashboard → 26 pages created! 🎉

---

## 📚 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| **WALKTHROUGH.md** ⭐ | Step-by-step guide | 10 min |
| **QUICK_START.md** | Fast commands | 2 min |
| **PENPOT_SETUP.md** | Detailed guide | 20 min |
| **ARCHITECTURE.md** | How it works | 15 min |
| **TROUBLESHOOTING.md** | Fix issues | 5 min |
| **PENPOT_AUTOMATION_README.md** | Features | 10 min |
| **COMPLETION_SUMMARY.md** | Status | 2 min |

---

## 🛠️ Available Scripts

Run from **project root** (`../`):

```bash
npm run penpot:list-teams              # Show teams
npm run penpot:create-pages            # Create 26 pages
npm run penpot:setup-design-system     # Add design content
npm run penpot:full                    # Do everything
```

---

## 📁 Folder Structure

```
penpot/
├── penpot-automation.js        ← Main script
├── penpot-advanced.js          ← Design system script
├── .env.example                ← Configuration template
├── .env                        ← Your config (git-ignored)
├── .gitignore                  ← Don't commit .env!
│
├── WALKTHROUGH.md              ← Start here!
├── QUICK_START.md
├── PENPOT_SETUP.md
├── ARCHITECTURE.md
├── TROUBLESHOOTING.md
├── PENPOT_AUTOMATION_README.md
├── COMPLETION_SUMMARY.md
│
└── docs/
    ├── PENPOT_API_RESEARCH.md
    ├── PENPOT_API_QUICK_REFERENCE.md
    └── PENPOT_API_CODE_EXAMPLES.md
```

---

## ✅ File Checklist

- [ ] Have Penpot account? (https://design.penpot.app/)
- [ ] Generated API token?
- [ ] Copied .env.example to .env?
- [ ] Added token to .env?
- [ ] Found team ID?
- [ ] Added team ID to .env?
- [ ] Ready to run npm scripts?

---

## ⚠️ Important!

**`.env` file contains your API token!**
- ✅ Never commit to git (already in .gitignore)
- ✅ Never share with others
- ✅ Store securely
- ✅ Rotate every 90 days (token expires)

---

## 🎯 Next Steps

1. **First time?** → Read `WALKTHROUGH.md`
2. **Need quick help?** → Read `QUICK_START.md`
3. **Troubleshooting?** → Read `TROUBLESHOOTING.md`
4. **Want full details?** → Read `PENPOT_SETUP.md`
5. **Understanding API?** → Read `ARCHITECTURE.md`

---

**Ready? Open WALKTHROUGH.md or run `npm run penpot:full` from project root!** 🚀

```bash
# From project root:
cd ..
npm run penpot:full
```
