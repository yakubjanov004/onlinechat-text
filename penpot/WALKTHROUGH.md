# ✅ Step-by-Step Walkthrough

## 🎯 Your Mission (5 minutes)

Get Penpot token → Setup .env file → Run automation scripts → DONE! 🎉

---

## STEP 1️⃣: Get Penpot Token (2 minutes)

### In Browser:
```
1. Open: https://design.penpot.app/
   
2. Click TOP-LEFT (your profile icon or menu)
   └─ You'll see username/avatar
   
3. Click "Account" or "Settings"
   └─ Dropdown menu
   
4. Find "Access tokens" tab or "Security"
   └─ Left sidebar menu
   
5. Click "+ Generate new token"
   └─ Blue button
   
6. Name it: "CHATFLOW Automation" (optional)
   
7. Click "Generate" or "Create"
   
8. YOU'LL SEE YOUR TOKEN!
   ⚠️ COPY IT IMMEDIATELY (shows only once!)
   └─ Long string: abc123def456xyz...
   
9. Close dialog or click "Done"
```

**Token Format:**
```
abc123def456xyz789abc123def456xyz789abc123def456xyz789abc123def456xyz789...
(100+ characters, alphanumeric)
```

---

## STEP 2️⃣: Setup .env File (2 minutes)

### In Your Project Folder:

#### Windows (PowerShell):
```powershell
# Copy template
cp .env.example .env

# Open in Notepad
notepad .env
```

#### Mac/Linux (Terminal):
```bash
# Copy template
cp .env.example .env

# Open in nano
nano .env
```

### In Text Editor:

**Before:**
```
PENPOT_API_KEY=your_token_here
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
PENPOT_TEAM_ID=your_team_id_here
```

**After (paste your token):**
```
PENPOT_API_KEY=abc123def456xyz789abc123def456xyz789abc123def456xyz789abc123def456xyz789...
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
PENPOT_TEAM_ID=not_needed_yet
```

**Save File:**
- Windows: Ctrl+S
- Mac: Cmd+S
- Or: File → Save

---

## STEP 3️⃣: Find Team ID (1 minute)

### In Terminal/Command Prompt:

Navigate to project folder:
```bash
# Windows
cd C:\Users\user\OneDrive\Desktop\onlinechat

# Mac/Linux
cd ~/Desktop/onlinechat
```

Check you're in right folder:
```bash
pwd   # Shows full path
# Should end with: /onlinechat
```

Run list teams command:
```bash
npm run penpot:list-teams
```

**You'll see output:**
```
✅ Connected to Penpot
Available teams:
  - My Team (ID: abc123xyz789...)
  - Work Team (ID: def456uvw012...)
  - Other Team (ID: ghi789rst345...)
```

**Copy the ID** (copy bold part):
```
If your team is "My Team":
Copy: abc123xyz789...
```

### Update .env with Team ID:

Open `.env` file again:

**Before:**
```
PENPOT_TEAM_ID=your_team_id_here
```

**After (paste your team ID):**
```
PENPOT_TEAM_ID=abc123xyz789...
```

**Save File** (Ctrl+S or Cmd+S)

---

## STEP 4️⃣: Check Prerequisites (30 seconds)

### Verify Everything is Ready:

```bash
# Check Node.js installed
node --version
# Should show: v18.x.x or higher

# Check npm installed
npm --version
# Should show: 9.x.x or higher

# Check npm packages installed
npm ls axios dotenv
# Should show: both installed with versions

# Check .env file exists
cat .env
# Should show: 3 lines with your values
```

---

## STEP 5️⃣: Run Automation (2 minutes execution)

### Create All 26 Pages + Design System:

```bash
npm run penpot:full
```

**You'll see:**
```
✅ Connected to Penpot as: your_email@example.com
✅ Team found: My Team
✅ Project created: CHATFLOW Design System (ID: proj-123...)
✅ File created: CHATFLOW Design System (ID: file-456...)

Creating pages...
  ✓ Page 1/26: 01-Design System
  ✓ Page 2/26: 02-Landing: Hero & Header
  ✓ Page 3/26: 03-Landing: Trust & Companies
  ...
  ✓ Page 26/26: 26-Developer

✅ All pages created!

Adding design system content...
  ✓ Adding colors (Primary, Gray, Success, Warning, Error, Info)
  ✓ Adding typography (Display, Heading, Body, Caption)
  ✓ Adding components (Button, Input, Card, Badge, Avatar, Dropdown, Modal, Toast)

✅ Design system ready!
✅ Total time: ~2-3 minutes
```

**If something errors:**
- Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Most common: Wrong team ID or expired token

---

## STEP 6️⃣: Verify in Penpot (1 minute)

### In Browser:

```
1. Open: https://design.penpot.app/

2. Click "Projects" (if not already there)
   └─ Dashboard shows all projects

3. You should see:
   ✅ "CHATFLOW Design System" project
   
4. Click on it to open

5. You should see:
   ✅ 26 pages in left sidebar:
   • 01-Design System
   • 02-Landing: Hero & Header
   • ...
   • 26-Developer

6. Click "01-Design System" page

7. You should see:
   ✅ Color swatches (16 colors)
   ✅ Typography guide (9 text styles)
   ✅ Component library (8 components)
```

---

## ✨ DONE! You Now Have:

```
✅ 26 design pages
✅ Professional names (matching figma-docs)
✅ Pre-created frames (ready for content)
✅ Color system (16 colors)
✅ Typography system (9 text styles)
✅ Component library (8 UI components)
✅ All in Penpot cloud (accessible anywhere)
```

---

## 🎨 Next Actions

### You Can Now:

1. **Add Content to Pages**
   - Click each page
   - Add design content to frames
   - Use colors/typography from Design System

2. **Create Component Variants**
   - Go to Design System page
   - Create main components
   - Create variants (Hover, Focused, etc.)

3. **Design Landing Pages**
   - Go to page 02-06
   - Add hero sections, features, CTA
   - Link to design system

4. **Design App Screens**
   - Go to pages 10-26
   - Add layouts, forms, dashboards
   - Use components for consistency

5. **Create Prototypes**
   - Add interactions
   - Link pages together
   - Create clickable flows

6. **Export & Handoff**
   - Export design tokens (CSS variables)
   - Export components as SVG
   - Share with developers

---

## 📚 If You Need Help

| Situation | Find Help In |
|-----------|--------------|
| Script crashes/errors | [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) |
| How things work | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| Commands reference | [QUICK_START.md](./QUICK_START.md) |
| Setup problems | [PENPOT_SETUP.md](./PENPOT_SETUP.md) |
| Feature details | [PENPOT_AUTOMATION_README.md](./PENPOT_AUTOMATION_README.md) |
| API details | [docs/PENPOT_API_RESEARCH.md](./docs/PENPOT_API_RESEARCH.md) |

---

## 🆘 Common Issues

### "Token invalid" after copy-paste
- Make sure there's no extra spaces
- Token should be one continuous string
- No quotes around it

### "Team ID not found"
- Run: `npm run penpot:list-teams`
- Copy exact ID (everything in parentheses after ID:)
- Paste into .env

### "Script never completes"
- Check internet connection
- Wait 2-3 minutes (it creates 26 pages)
- Check Penpot dashboard while waiting
- See pages adding in real-time

### "Can't find onlinechat folder"
- Make sure you're in right directory
- Use: `cd C:\Users\user\OneDrive\Desktop\onlinechat`
- Check with: `pwd` or `cd` (should confirm path)

### ".env not working"
- Make sure file is named `.env` (not `.env.txt`)
- No spaces around `=` sign
- File should be in root of onlinechat folder
- Save file after editing

---

## ⏱️ Timing Reference

| Task | Time |
|------|------|
| Get token | 2 min |
| Setup .env | 2 min |
| Find team ID | 1 min |
| Run automation | 2-3 min |
| Verify in Penpot | 1 min |
| **TOTAL** | **~8-9 minutes** |

---

## 🚀 Ready?

```
1. Get token:         ✅ Copy from Penpot
2. Update .env:       ✅ Paste token + team ID
3. Run automation:    ✅ npm run penpot:full
4. Check in Penpot:   ✅ 26 pages visible

🎉 TEAMAIL! You're ready to design!
```

---

## 💡 Pro Tips

- **Create backup of .env before sharing** (never commit to git!)
- **Use same token for all team members** (share .env privately)
- **Check Penpot status page if it's slow** (https://status.penpot.app)
- **Each page takes ~1 second to create** (26 pages = ~30 seconds)
- **Don't close terminal while script running** (let it complete)
- **You can add more pages later** (edit PAGES_SPEC in penpot-automation.js)

---

**You've got this! 🎨✨**

Next time you need design pages → Just run `npm run penpot:full` again!

---
