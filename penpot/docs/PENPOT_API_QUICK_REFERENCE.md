# Penpot API - Quick Reference & Answers

## ANSWERS TO YOUR QUESTIONS

### 1. Penpot API Capabilities

**Q: Can Penpot API create files, pages, frames, components programmatically?**
✅ **YES** - All via RPC API or Plugin API
- Files: `create-file` RPC method
- Pages: `create-page` via Plugin API
- Frames: `create-frame` via Plugin API
- Components: `create-component` via Plugin API
- Component Instances: Fully supported

**Q: What are the endpoints available?**
- RPC API Base: `https://design.penpot.app/api/rpc/command/<method-name>`
- Methods Reference: https://design.penpot.app/api/_doc
- 50+ operations available (create, read, update, delete operations)

**Q: REST API or GraphQL?**
🔴 **Neither** - Uses **RPC API** (Remote Procedure Call)
- HTTP POST method
- JSON payload format
- Similar to JSON-RPC 2.0
- More flexible than REST but not GraphQL

**Q: Can we set colors, fonts, spacing, styles via API?**
✅ **YES** - Full support via Plugin API
- Colors (fill, stroke, gradients)
- Typography (font family, size, weight, width)
- Spacing (padding, margin, gaps)
- Styles (shadows, blur, opacity, blend modes)
- All CSS-like properties

---

### 2. Authentication & Access

**Q: How to authenticate with Penpot API?**
1. Generate access token in Penpot UI (Account → Access tokens)
2. Use in requests: `Authorization: Token <token-string>`
3. Or use login session with cookies

**Q: What's needed (API key, token)?**
- **Access Token** (recommended) - 30/60/90/180 days expiration
- Each user can have multiple tokens
- Treat like passwords - secure storage required
- Supports team-level operations through authorizations

**Q: Can we work with local/self-hosted Penpot?**
✅ **YES** - Fully supported
- Same API endpoints work on any self-hosted instance
- Docker, Kubernetes, Elestio supported
- Replace `design.penpot.app` with your instance domain

---

### 3. Creating Design Elements

**Q: Can we create frames, rectangles, text, buttons?**
✅ **YES** - All supported
```
- Frames ✅
- Rectangles ✅
- Text ✅
- Circles/Ellipses ✅
- Paths ✅
- Groups ✅
- Buttons (as components) ✅
- Custom shapes ✅
```

**Q: Can we create components and component instances?**
✅ **YES** - Full support
- Create components from shapes
- Create instances from components
- Override properties on instances
- Library components available

**Q: Can we organize into pages and artboards?**
✅ **YES** - Full hierarchy
```
File
├── Page 1
│   ├── Frame (artboard)
│   ├── Frame
│   └── Shapes
├── Page 2
└── Asset Libraries
```

---

### 4. Design Tokens & Styles

**Q: Can we apply design tokens to elements?**
✅ **YES** - Native support (since v2.0)
- Create token sets
- Apply to shapes
- Export as JSON
- W3C Design Tokens format

**Q: Set colors, typography, spacing?**
✅ **YES** via Plugin API
```typescript
shape.fill = { color: '#FF0000' };
shape.fontSize = 14;
shape.fontFamily = 'Inter';
shape.padding = { top: 16, bottom: 16 };
```

**Q: Library components?**
✅ **YES** - Full support
- Create shared libraries
- Link files to libraries
- Use components across projects
- Sync and updates available

---

### 5. File Structure

**Q: How to structure file (Team → Project → File → Page → Frame)?**

**Correct hierarchy:**
```
Team (permissions boundary)
└── Project (collection)
    └── File (design document)
        └── Page (artboard)
            └── Frame (group)
                └── Shapes (elements)
```

**Q: Can we batch create multiple pages?**
✅ **YES** - Via Plugin API in loop or RPC sequential calls
```typescript
// Plugin API (faster)
for (let i = 0; i < 10; i++) {
  await penpot.file.createPage(`Page ${i}`);
}

// RPC API
for each page_name:
  POST create-page { file_id, name }
```

---

### 6. Examples & Libraries

**Q: Any npm packages for Penpot automation?**

| Package | Purpose | NPM |
|---------|---------|-----|
| `@penpot/plugin-types` | TypeScript types | ✅ Official |
| `@penpot/plugin-styles` | Plugin styles | ✅ Official |
| `@penpot/plugins-runtime` | Plugin runtime | ✅ Official |
| `@penpot/library` | Create .penpot files | ✅ Official |
| `mcp-server-penpot` | MCP integration | ✅ Community |
| `@penpot-export/cli` | Export tokens | ✅ Community |

**Q: Code examples (NodeJS/Python)?**
✅ See **Section 7** in PENPOT_API_RESEARCH.md

Key examples:
- NodeJS: Axios HTTP calls to RPC API
- Python: Requests library for API integration
- TypeScript: Plugin API with full types
- Manifest configuration included

**Q: Webhook support?**
✅ **Full Support**
- Team-level webhooks
- JSON or Transit+JSON format
- Events: file changes, comments, permissions
- Test with webhook.site

---

## STEP-BY-STEP AUTOMATION WORKFLOW

### Phase 1: Setup (5 minutes)
1. Login to Penpot
2. Account → Access tokens
3. Generate new token (90-day expiration recommended)
4. Save token securely: `export PENPOT_TOKEN="..."`

### Phase 2: Create Infrastructure (2 minutes)
```javascript
// 1. Create Team
const team = await createTeam('Design System Team');

// 2. Create Project
const project = await createProject(team.id, 'Components');

// 3. Create File
const file = await createFile(project.id, 'Button Components');
```

### Phase 3: Design System Setup (5 minutes)
```typescript
// 1. Add design tokens
const tokens = {
  colors: { primary: '#3B82F6', danger: '#EF4444' },
  spacing: { xs: '4px', sm: '8px', md: '16px' },
  typography: { h1: { size: 32, weight: 700 } }
};

// 2. Create base components
await createButtonComponent(file, tokens);
await createIconComponent(file, tokens);

// 3. Link to library
await linkFileToLibrary(file.id);
```

### Phase 4: Document Generation (variable)
```javascript
// Loop through design requirements
for (const page of pages) {
  // Create page
  const newPage = await file.createPage(page.name);
  
  // Add frames
  for (const layout of page.layouts) {
    await newPage.createFrame(layout);
  }
  
  // Apply components
  for (const component of layout.components) {
    await applyComponentInstance(frame, component, tokens);
  }
}
```

### Phase 5: Version Control (1 minute)
```javascript
// Export to version control
await exportFileData(file.id);
```

### Phase 6: Monitoring (ongoing)
```javascript
// Setup webhook for changes
await createWebhook(team.id, 'https://myapp.com/webhook');

// Listen for events
app.post('/webhook', (req) => {
  if (req.body.name === 'create-file') {
    // Handle file creation
  }
});
```

---

## API ENDPOINT CHEAT SHEET

### File Operations
```bash
# Get file
POST /api/rpc/command/get-file { file_id }

# Create file
POST /api/rpc/command/create-file { project_id, name }

# Update file
POST /api/rpc/command/update-file { file_id, data }

# Delete file
POST /api/rpc/command/delete-file { file_id }

# Rename file
POST /api/rpc/command/rename-file { file_id, name }

# Get file page
POST /api/rpc/command/get-page { file_id, page_id }
```

### Project Operations
```bash
# Create project
POST /api/rpc/command/create-project { team_id, name }

# Get project files
POST /api/rpc/command/get-project-files { project_id }

# Rename project
POST /api/rpc/command/rename-project { project_id, name }

# Delete project
POST /api/rpc/command/delete-project { project_id }
```

### Authentication
```bash
# Get user profile
POST /api/rpc/command/get-profile

# Create access token
POST /api/rpc/command/create-access-token { name, expiration }

# Get access tokens
POST /api/rpc/command/get-access-tokens
```

### Webhooks
```bash
# Create webhook
POST /api/rpc/command/create-webhook { team_id, url, format }

# Delete webhook
POST /api/rpc/command/delete-webhook { webhook_id }

# Get webhooks
POST /api/rpc/command/get-webhooks { team_id }
```

---

## PLUGIN API QUICK START

### Plugin Setup
```typescript
// plugin.ts - Called when plugin starts
penpot.ui.open('My Plugin', '', {
  width: 500,
  height: 600
});
```

### Permissions (manifest.json)
```json
{
  "permissions": [
    "content:read",      // Read design
    "content:write",     // Modify design
    "library:read",      // Access libraries
    "library:write",     // Modify libraries
    "user:read",         // Get user info
    "comment:read",      // Read comments
    "comment:write"      // Create comments
  ]
}
```

### Two-Way Communication
```typescript
// From Plugin UI to Penpot
parent.postMessage({ command: 'create-shape' }, '*');

// From Penpot to Plugin UI
window.addEventListener('message', (event) => {
  console.log(event.data); // Receives data
});

// From Penpot API (in plugin.ts)
penpot.ui.sendMessage({ type: 'update', data });
```

---

## COMMON PATTERNS

### Pattern 1: Create Batch Frames
```typescript
async function createFrames(page, count) {
  const frames = [];
  for (let i = 0; i < count; i++) {
    const frame = page.createFrame({
      x: i * 200,
      y: 0,
      width: 200,
      height: 200,
      name: `Frame ${i}`
    });
    frames.push(frame);
  }
  return frames;
}
```

### Pattern 2: Apply Design Tokens
```typescript
async function applyTokens(shape, tokens) {
  shape.fill = { 
    color: tokens.colors.primary,
    opacity: 1
  };
  shape.setDesignToken(tokens.colorToken);
}
```

### Pattern 3: Create Component Instances
```typescript
async function createButtonVariant(page, variant) {
  const instance = page.createComponentInstance({
    componentId: 'button-component',
    overrides: {
      'text': variant.label,
      'color': variant.color,
      'size': variant.size
    }
  });
  return instance;
}
```

### Pattern 4: Error Handling
```typescript
async function safeApiCall(fn, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(r => setTimeout(r, 1000 * Math.pow(2, i)));
    }
  }
}
```

---

## TROUBLESHOOTING

### "Unauthorized" Error
- [ ] Check token is valid and not expired
- [ ] Verify correct format: `Authorization: Token xxx`
- [ ] Regenerate token in Penpot UI if needed

### Plugin Not Loading
- [ ] Check manifest.json is at correct path
- [ ] Verify manifest.json has proper JSON syntax
- [ ] Use shortcut Ctrl+Alt+P to open plugin manager
- [ ] Check browser console for errors

### Webhook Events Not Firing
- [ ] Verify webhook URL is accessible publicly
- [ ] Check webhook is enabled in team settings
- [ ] Use webhook.site to debug payloads
- [ ] Monitor team activity to trigger events

### Rate Limiting
- [ ] Implement exponential backoff
- [ ] Stagger API calls
- [ ] Cache file data when possible
- [ ] Contact Penpot for higher limits if needed

### Authentication with Self-Hosted
- [ ] Replace `design.penpot.app` with your domain
- [ ] Verify SSL certificate if HTTPS
- [ ] Check token generated on same instance
- [ ] Test access with curl first

---

## KEY METRICS

| Metric | Value |
|--------|-------|
| API Response Time | 100-500ms typical |
| Webhook Latency | 1-5 seconds |
| Batch Operation (100 files) | 2-10 minutes |
| Plugin Load Time | < 1 second |
| Token Expiration | 30-180 days max |
| Rate Limit | Not documented (reasonable use) |
| MCP Server Port | 4401 (HTTP), 4402 (WebSocket) |
| Plugin Server Port | 4400 |

---

## NEXT STEPS

1. **Generate Access Token** - Account → Access tokens
2. **Test Basic Call** - Use `/get-profile` endpoint
3. **Install Dev Tools** - `npm install @penpot/plugin-types`
4. **Create Test Plugin** - Use plugin-examples templates
5. **Deploy** - Package and distribute plugin
6. **Monitor** - Setup webhooks for event tracking
7. **Optimize** - Implement caching and batching

---

## RESOURCES

📚 **Documentation:**
- Full API: https://design.penpot.app/api/_doc
- Plugin API: https://doc.plugins.penpot.app/
- Integration: https://help.penpot.app/technical-guide/integration/

💻 **Code:**
- GitHub: https://github.com/penpot/penpot
- Plugins: https://github.com/penpot/plugin-examples
- MCP: https://github.com/penpot/penpot/tree/develop/mcp

📦 **Packages:**
- NPM Search: https://www.npmjs.com/search?q=penpot

🤝 **Community:**
- Forum: https://community.penpot.app/
- GitHub Issues: https://github.com/penpot/penpot/issues

---

**Created:** February 12, 2025
**Penpot Version:** 2.13.2
**API Version:** v2.13
