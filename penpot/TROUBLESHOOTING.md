# 🔧 Penpot Automation — Troubleshooting Guide

## ❌ Common Issues & Solutions

### Issue 1: "Error: PENPOT_API_KEY not set"

**Problem:** `.env` file topilmayapti yoki PENPOT_API_KEY bo'sh

**Solution:**
```bash
# Check .env mavjud mi?
ls -la .env

# Agar yo'q:
cp .env.example .env

# Keyin token paste qiling
nano .env
# Ctrl+X, Y, Enter (save)
```

---

### Issue 2: "Error: ENOENT: no such file or directory"

**Problem:** Scripts yo'q yoki path noto'g'ri

**Solution:**
```bash
# Hammasi to'g'ri joylashgan mi tekshirish:
ls -la penpot-automation.js
ls -la penpot-advanced.js
ls -la .env

# Agar error: onlinechat/ folder-da bo'riningni tekshiring
pwd
# Output: /path/to/onlinechat ← BO'LISHI KERAK

# Agar boshqa folder-daysan:
cd c:\Users\user\OneDrive\Desktop\onlinechat
```

---

### Issue 3: "Error: ECONNREFUSED 127.0.0.1:4000"

**Problem:** URL noto'g'ri (localhost ko'rsatilayapti o'rniga Penpot cloud)

**Solution:**
```
.env fayl-da PENPOT_API_URL ni check qiling:

NOTO'G'RI ❌
PENPOT_API_URL=http://localhost:4000/api/rpc/command

TO'G'RI ✅
PENPOT_API_URL=https://design.penpot.app/api/rpc/command
```

---

### Issue 4: Token Expired (Status 401)

**Problem:** Token expired yoki invalid (90 days old)

**Solution:**
```bash
# Yangi token generate qiling:
# https://design.penpot.app/ → Account → Access tokens → Generate new

# .env update qiling:
nano .env
# PENPOT_API_KEY=new_token_here

# Keyin qayta:
npm run penpot:full
```

---

### Issue 5: "Team not found" (400 Bad Request)

**Problem:** PENPOT_TEAM_ID noto'g'ri yoki yo'q

**Solution:**
```bash
# Barcha available teams ko'rish:
npm run penpot:list-teams

# Output:
# Available teams:
# - My Team (ID: xxx)
# - Other Team (ID: yyy)

# Tanlagan team ID-ni .env-ga add qiling:
nano .env
# PENPOT_TEAM_ID=xxx_from_list_above
```

---

### Issue 6: "npm: command not found"

**Problem:** Node.js / npm installed emas

**Solution:**
```bash
# Node.js download va install qiling:
# https://nodejs.org/ → Latest LTS version

# Keyin tekshiring:
node --version
npm --version

# Both should show versions
# v18.x.x
# 9.x.x
```

---

### Issue 7: "Module not found: axios"

**Problem:** npm packages installed emas

**Solution:**
```bash
# Install qiling:
npm install

# Check qiling:
ls node_modules/

# Should show: axios, dotenv, ...
```

---

### Issue 8: "EACCES: permission denied"

**Problem:** File permissions problem (Mac/Linux)

**Solution:**
```bash
# Permission change qiling:
chmod +x penpot-automation.js
chmod +x penpot-advanced.js

# Keyin:
npm run penpot:full
```

---

### Issue 9: "Cannot read property 'id' of undefined"

**Problem:** API response noto'g'ri, team/project create failed

**Solution:**
```bash
# Debug qiling:
npm run penpot:list-teams

# Agar teams ko'rinmasa → token noto'g'ri
# Agar teams ko'rsa → token to'g'ri

# Script output-ni copy-paste qiling
# Support uchun: PENPOT_SETUP.md → Troubleshooting
```

---

### Issue 10: Connection Timeout (>30 seconds)

**Problem:** Internet slow yoki Penpot server down

**Solution:**
```bash
# 1. Internet check qiling
ping google.com

# 2. Penpot status check qiling
# https://status.penpot.app

# 3. Timeout increase qiling (advanced):
# penpot-automation.js ichida bu line topib:
# const TIMEOUT = 30000;
# Change to: const TIMEOUT = 60000; (60 sekunday)

# 4. Qayta qilish:
npm run penpot:full
```

---

## ✅ Pre-Flight Checklist

Automation qilishdan avval bu checklist-ni complete qiling:

```bash
# 1. Current directory check
pwd
# ├─ /path/to/onlinechat (BO'LSHI KERAK)

# 2. Files present?
ls -la penpot-automation.js penpot-advanced.js .env package.json
# ├─ All 4 files shown ✅

# 3. Node.js installed?
node --version npm --version
# ├─ v18.x.x va 9.x.x+ ✅

# 4. npm packages installed?
ls node_modules/ | grep -E "axios|dotenv"
# ├─ Both shown ✅

# 5. .env configured?
cat .env
# ├─ PENPOT_API_KEY: token (token-123abc...) ✅
# ├─ PENPOT_API_URL: https://design.penpot.app/api/rpc/command ✅
# ├─ PENPOT_TEAM_ID: team-xyz... ✅

# 6. Internet working?
curl https://design.penpot.app -I
# ├─ HTTP 200 OK ✅
```

**All green? → `npm run penpot:full` 🚀**

---

## 🔍 Advanced Debugging

### Full Output Qo'rish (Verbose Mode)

```bash
# Script-ni modify qiling:
# Line 1-3 na top-ga add qiling:

const DEBUG = true;

// Then run:
node penpot-automation.js
```

### API Request/Response Logging

```javascript
// penpot-automation.js ichida PenpotAPI class-da,
// makeRequest method-ini modify qiling:

async makeRequest(method, params) {
  console.log(`[API] -> ${method}`, params); // Request log
  const response = await ...
  console.log(`[API] <- ${method}`, response.data); // Response log
  return response.data;
}
```

### Local Penpot Barcha Qadam Check Qilish

```bash
# 1. Token test:
npm run penpot:list-teams

# 2. Pages create test:
npm run penpot:create-pages

# 3. Design system test:
npm run penpot:setup-design-system

# Har bir step-ni separately run qiling va output check qiling
```

---

## 📞 Still Stuck?

### Step-by-step Debug Script

```bash
#!/bin/bash
echo "🔍 DEBUGGING PENPOT AUTOMATION"
echo ""
echo "1. Directory check:"
pwd
echo ""
echo "2. Files check:"
ls -la | grep -E "penpot|\.env|package\.json"
echo ""
echo "3. Node.js version:"
node --version
npm --version
echo ""
echo "4. .env content (hide token):"
grep "PENPOT_" .env | sed 's/=.*/=***/' 
echo ""
echo "5. npm packages:"
npm ls --depth=0
echo ""
echo "6. Internet test:"
curl -I https://design.penpot.app 2>&1 | head -1
echo ""
echo "✅ All checks done"
```

### Support Links

- **Penpot Help:** https://help.penpot.app/
- **Penpot Status:** https://status.penpot.app
- **Community:** https://github.com/penpot/penpot/discussions

---

## 🎯 Next Steps (Debug Complete)

Barcha issues fixed bo'lgandan keyin:

```bash
# Full automation:
npm run penpot:full

# Keyin Penpot-da check:
# https://design.penpot.app/dashboard/projects
```

---

**Agar ham hali stuck bo'lsangiz → PENPOT_SETUP.md detailed guide larni o'qing** 📖🚀
