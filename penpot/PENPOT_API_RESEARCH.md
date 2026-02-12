# Penpot API Research & Complete Documentation

## Executive Summary

Penpot is an open-source design tool similar to Figma. The API includes:
- **RPC API** (HTTP POST) - Backend API for file operations
- **Plugin API** - Direct design canvas manipulation (TypeScript)
- **Webhooks** - Event notifications
- **MCP Server** - LLM integration for AI-powered workflows

---

## 1. PENPOT API CAPABILITIES

### 1.1 API Types Available

#### **RPC API (HTTP POST)**
- REST/RPC-style HTTP API at `https://design.penpot.app/api/rpc/command/<method-name>`
- HTTP POST method (GET available for get-* methods)
- **NO GraphQL** - only RPC methods
- Supports both JSON and Transit+JSON content types
- Documentation: https://design.penpot.app/api/_doc (auto-generated)

#### **Plugin API (Browser/JavaScript)**
- Direct access to design canvas via Plugin System
- Runs in iframe within Penpot
- TypeScript types available: `@penpot/plugin-types`
- Full documentation: https://doc.plugins.penpot.app/

#### **MCP Server (Model Context Protocol)**
- Official AI/LLM integration
- Enables Claude, ChatGPT, and other LLM clients to interact with Penpot
- WebSocket-based communication
- Repository: https://github.com/penpot/penpot/tree/develop/mcp

### 1.2 File & Design Operations

**Can Create Programmatically:**
✅ Files (`create-file`)
✅ Projects (`create-project`)
✅ Pages (`create-page` via Plugin API)
✅ Frames/Boards (`create-frame` via Plugin API)
✅ Shapes (rectangles, text, circles, paths)
✅ Components & Component Instances
✅ Colors, Typography, Styles
✅ Design Tokens
✅ Design Systems

**Network Structure:**
```
Team → Project → File → Page → Frame → Shapes
       ↓
    (Multiple Files)
```

### 1.3 Available Endpoints (RPC Methods)

**Key Categories:**

| Category | Methods |
|----------|---------|
| **Files** | `create-file`, `rename-file`, `delete-file`, `get-file`, `update-file`, `get-page` |
| **Projects** | `create-project`, `rename-project`, `delete-project`, `get-project`, `get-project-files` |
| **Teams** | `create-team`, `get-team`, `get-team-members`, `update-team` |
| **Comments** | `create-comment`, `get-comment-threads`, `delete-comment`, `update-comment` |
| **Webhooks** | `create-webhook`, `delete-webhook`, `get-webhooks`, `update-webhook` |
| **Access Tokens** | `create-access-token`, `delete-access-token`, `get-access-tokens` |
| **Library/Assets** | `link-file-to-library`, `unlink-file-from-library`, `get-file-libraries` |
| **Media** | `upload-file-media-object`, `create-file-media-object-from-url` |
| **Design Tokens** | Design token operations via Penpot Plugin API |

**Full List:** https://design.penpot.app/api/_doc

### 1.4 Design Element Customization

Via Plugin API, you can set:
- **Colors** (fill, stroke, gradients)
- **Typography** (font, size, weight, line-height)
- **Spacing** (padding, margin, gaps)
- **Shadows** (blur, offset, color, opacity)
- **Borders** (stroke width, color, style)
- **Effects** (blur, opacity, blend modes)
- **Layout** (flex, grid positioning)
- **Rotation & Transforms**
- **Component Overrides**

---

## 2. AUTHENTICATION & ACCESS

### 2.1 Authentication Methods

**Method 1: Access Tokens (Recommended)**
```bash
# Generate token in Penpot UI:
# Account > Access tokens > Generate new token

# Use in requests:
curl -H "Authorization: Token <your-token-here>" \
  https://design.penpot.app/api/rpc/command/get-profile
```

**Token Generation:**
- Account Settings → Access tokens → Generate new token
- Set expiration: Never, 30, 60, 90, or 180 days
- Treat tokens like passwords
- Token format: `Token <token-string>` in Authorization header

**Method 2: Login Session**
```bash
# POST login-with-password
# Returns auth-token cookie
```

### 2.2 Self-Hosted Penpot

✅ **YES** - Full API access available on self-hosted instances
- Docker installation
- Kubernetes deployment
- Elestio deployment
- Any private instance

**Same API endpoints work:**
```
https://your-penpot-instance.com/api/rpc/command/<method>
```

### 2.3 Rate Limiting

- Per-user basis (different tokens share same limits)
- Limits not officially documented
- Recommendation: Avoid abusive patterns
- Monitor usage to stay within reasonable bounds

---

## 3. CREATING DESIGN ELEMENTS

### 3.1 Elements via Plugin API

**Available Element Types:**

```typescript
// Rectangle
penpot.ui.sendMessage({
  type: 'create-rectangle',
  x: 0,
  y: 0,
  width: 100,
  height: 100
});

// Text
penpot.ui.sendMessage({
  type: 'create-text',
  content: 'Hello World',
  x: 0,
  y: 0
});

// Circle/Ellipse
penpot.ui.sendMessage({
  type: 'create-ellipse',
  rx: 50,
  ry: 50
});

// Group/Frame
penpot.ui.sendMessage({
  type: 'create-frame',
  width: 200,
  height: 200
});

// Components
penpot.ui.sendMessage({
  type: 'create-component',
  name: 'Button',
  shapes: [...shapes]
});

// Component Instance
penpot.ui.sendMessage({
  type: 'create-component-instance',
  componentId: 'component-id'
});
```

### 3.2 Organization Structure

```
File
├── Page 1
│   ├── Frame 1
│   │   ├── Rectangle
│   │   ├── Text
│   │   └── Group
│   └── Frame 2
├── Page 2
└── Assets (Colors, Typography, Components)
```

**Batch Operations:**
- Create multiple pages: Yes, via Plugin API in loops
- Create multiple frames: Yes, via Plugin API
- Bulk import: Use binary file import via RPC API

---

## 4. DESIGN TOKENS & STYLES

### 4.1 Design Tokens Support

✅ **Full Native Support** (since v2.0)
- Create design tokens programmatically
- Group tokens into sets
- Export as W3C format
- Single source of truth

**Token Types:**
- Colors
- Typography
- Spacing
- Sizing
- Border-radius
- Opacity
- Custom properties

### 4.2 Applying Tokens via API

**Via Plugin API:**
```typescript
// Get available tokens
const tokens = await penpot.selection[0].getDesignTokens();

// Apply token to shape
await penpot.selection[0].setDesignToken({
  tokenId: 'color-primary',
  group: 'colors'
});
```

**Via RPC API:**
- Use `update-file` method with design token data
- Edit file properties directly

### 4.3 Library Components

✅ **YES** - Full support
- Create shared libraries
- Link files to libraries
- Use library components across projects
- RPC Methods: `link-file-to-library`, `unlink-file-from-library`, `get-file-libraries`

---

## 5. FILE STRUCTURE & OPERATIONS

### 5.1 Hierarchy

```
Organization
└── Team (permissions level)
    └── Project (collection of files)
        └── File (design document)
            └── Page (artboard container)
                └── Frame/Shapes (actual elements)
                    ├── Text
                    ├── Rectangle
                    ├── Component
                    └── Groups
```

### 5.2 Batch Operations

**Creating Multiple Pages:**
```typescript
// Via Plugin API (recommended for batch)
const newPages = [];
for (let i = 0; i < 5; i++) {
  const page = await penpot.file.createPage(`Page ${i}`);
  newPages.push(page);
}
```

**Batch File Creation:**
```bash
# Via RPC API
for file in files_list:
  POST /api/rpc/command/create-file
    {fileId, projectId, name}
```

### 5.3 Key RPC Methods

```
create-file          : Create new design file
create-project       : Create project container
get-file             : Retrieve file data
update-file          : Update file contents
get-page             : Get page data
delete-file          : Remove file
rename-file          : Change file name
move-files           : Move files to different project
duplicate-file       : Clone file
```

---

## 6. NPM PACKAGES & LIBRARIES

### 6.1 Official Penpot Packages

| Package | Purpose | Version | Downloads |
|---------|---------|---------|-----------|
| `@penpot/plugin-types` | TypeScript types for Plugin API | 1.4.2+ | 16K+/week |
| `@penpot/plugin-styles` | CSS styles for plugins | 1.4.2+ | 2.3K+/week |
| `@penpot/plugins-runtime` | Plugin runtime system | 1.4.2+ | 14K+/week |
| `@penpot/library` | Create .penpot files programmatically | 1.2.0-RC1 | Low usage |

### 6.2 Community Packages

| Package | Purpose | Status |
|---------|---------|--------|
| `mcp-server-penpot` | MCP server for Penpot | Maintained |
| `@zcubekr/penpot-mcp-server` | Full MCP server with manipulation | Maintained |
| `@penpot-export/cli` | Export design tokens to JSON | Active |
| `penport` | Export Penpot themes to CSS | Active |
| `@betagouv/figpot` | Figma → Penpot converter | Maintained |
| `@a_ng_d/figmug-ui` | UI components for Figma/Penpot plugins | Active |

**Install Official Types:**
```bash
npm install @penpot/plugin-types @penpot/plugin-styles
```

---

## 7. CODE EXAMPLES

### 7.1 NodeJS - RPC API Call

```javascript
// Get File Data
const axios = require('axios');

const API_BASE = 'https://design.penpot.app/api/rpc/command';
const TOKEN = 'your-access-token';

async function getFile(fileId) {
  try {
    const response = await axios.post(`${API_BASE}/get-file`, {
      file_id: fileId
    }, {
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

getFile('your-file-id');
```

### 7.2 NodeJS - Create File

```javascript
async function createFile(projectId, fileName) {
  try {
    const response = await axios.post(`${API_BASE}/create-file`, {
      project_id: projectId,
      name: fileName
    }, {
      headers: {
        'Authorization': `Token ${TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Create file error:', error.response.data);
  }
}

createFile('project-id', 'New Design File');
```

### 7.3 Plugin API - Create Shapes

```typescript
// plugin.ts
penpot.ui.open('Design Creator', '', {
  width: 500,
  height: 600
});

// Message handler
penpot.ui.onMessage((message) => {
  if (message.type === 'create-shapes') {
    // Get current page
    const page = penpot.currentPage;
    
    // Create rectangle
    const rect = page.createShape('rect', {
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: {
        color: '#FF0000',
        opacity: 1
      }
    });
    
    // Create text
    const text = page.createShape('text', {
      x: 110,
      y: 0,
      width: 100,
      height: 30,
      content: 'Hello'
    });
    
    // Create frame
    const frame = page.createFrame([rect, text], {
      x: 0,
      y: 0,
      name: 'Frame 1'
    });
    
    penpot.ui.sendMessage({ 
      success: true,
      frameId: frame.id 
    });
  }
});
```

### 7.4 Plugin Manifest Configuration

```json
{
  "name": "Design Automation Tool",
  "description": "Create and manage designs programmatically",
  "code": "/plugin.js",
  "icon": "/icon.png",
  "permissions": [
    "content:read",
    "content:write",
    "library:read",
    "library:write",
    "user:read",
    "comment:read",
    "comment:write"
  ]
}
```

### 7.5 Python - API Integration

```python
import requests
import json

API_BASE = 'https://design.penpot.app/api/rpc/command'
TOKEN = 'your-access-token'

def get_profile():
    """Retrieve user profile"""
    headers = {
        'Authorization': f'Token {TOKEN}',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(
        f'{API_BASE}/get-profile',
        headers=headers
    )
    
    return response.json()

def create_project(team_id, project_name):
    """Create new project"""
    headers = {
        'Authorization': f'Token {TOKEN}',
        'Content-Type': 'application/json'
    }
    
    payload = {
        'team_id': team_id,
        'name': project_name
    }
    
    response = requests.post(
        f'{API_BASE}/create-project',
        headers=headers,
        json=payload
    )
    
    return response.json()

def get_team_files(team_id):
    """Get all files in team"""
    headers = {
        'Authorization': f'Token {TOKEN}',
        'Content-Type': 'application/json'
    }
    
    response = requests.post(
        f'{API_BASE}/get-team-recent-files',
        headers=headers,
        json={'team_id': team_id}
    )
    
    return response.json()

# Usage
profile = get_profile()
project = create_project(profile['default_team_id'], 'New Project')
files = get_team_files(profile['default_team_id'])
```

---

## 8. WEBHOOKS

### 8.1 Webhook Support

✅ **Full Support**
- Configured at Team level
- Triggered on design events
- POST requests to your endpoint
- Formats: JSON or Transit+JSON

### 8.2 Setup

```bash
# RPC Method: create-webhook
POST /api/rpc/command/create-webhook
{
  "team_id": "team-id",
  "url": "https://your-domain.com/webhook",
  "format": "json"
}
```

### 8.3 Webhook Examples

**Events triggered:**
- File created/modified/deleted
- Page added/removed
- Comment created/updated
- Permissions changed
- Library updated
- Font uploaded

**Payload Structure:**
```json
{
  "id": "event-id-uuid",
  "name": "rename-file",
  "props": {
    "file_id": "...",
    "name": "New Name",
    "modified_at": 1234567890
  },
  "profileId": "user-id"
}
```

### 8.4 Setup & Testing

**Via Penpot UI:**
1. Team Settings → Webhooks
2. Add webhook URL
3. Choose format (JSON preferred)
4. Monitor in your application

**Testing Webhook:**
- Use https://webhook.site/ for testing
- Generate temporary URL
- Set in Penpot
- Trigger event and see payload

---

## 9. MCP SERVER (AI INTEGRATION)

### 9.1 What is MCP?

Model Context Protocol - allows LLMs (Claude, ChatGPT) to interact with Penpot.

**Architecture:**
```
LLM Client (Claude)
    ↓ HTTP/WebSocket
MCP Server (localhost:4401)
    ↓ WebSocket
Penpot MCP Plugin (localhost:4400)
    ↓ Plugin API
Penpot Design Canvas
```

### 9.2 Setup (Local Development)

```bash
# Clone/Navigate to MCP directory
cd penpot/mcp

# Install dependencies
./scripts/setup
pnpm -r install

# Build and start servers
pnpm run bootstrap

# Servers start on:
# - MCP Server: localhost:4401 (HTTP/SSE)
# - Plugin Server: localhost:4400 (plugin manifest)
# - WebSocket: localhost:4402 (plugin connection)
```

### 9.3 Connect Claude Desktop

```json
// ~/.config/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "penpot": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "http://localhost:4401/sse", "--allow-http"]
    }
  }
}
```

**Or use Claude Code:**
```bash
claude mcp add penpot -t http http://localhost:4401/mcp
```

### 9.4 MCP Tools Available

- File operations (list, read, create)
- Design element creation
- Property manipulation
- Data queries
- Batch operations

---

## 10. COMPLETE AUTOMATION WORKFLOW

### Step 1: Authenticate
```bash
# Generate token in Penpot UI
# Store securely in environment variable
export PENPOT_TOKEN="your-token"
```

### Step 2: Create Team Structure
```javascript
const team = await createTeam('My Design Team');
const project = await createProject(team.id, 'Product UI');
```

### Step 3: Create File & Pages
```javascript
const file = await createFile(project.id, 'Dashboard');
const pages = await createPages(file.id, ['Home', 'Settings', 'Profile']);
```

### Step 4: Create Design Elements (Plugin)
```typescript
// Load plugin and send design commands
penpot.ui.open('Designer', '', { width: 500, height: 600 });

// Create frames with shapes
for (const pageId of pages) {
  await createFrames(pageId, designs);
}
```

### Step 5: Apply Design System
```javascript
// Apply tokens and components
await applyDesignTokens(file.id);
await linkToLibrary(file.id, libraryFileId);
```

### Step 6: Setup Webhooks
```javascript
await createWebhook(team.id, 'https://myapp.com/penpot-webhook');
```

### Step 7: Monitor Changes
```javascript
// Listen for webhook events
app.post('/penpot-webhook', (req, res) => {
  const event = req.body;
  console.log(`Event: ${event.name}`);
  // Handle event
});
```

---

## 11. LIMITATIONS & WORKAROUNDS

### Limitation 1: No GraphQL API
**Workaround:** Use RPC API (fully functional, just different format)

### Limitation 2: Plugin API Limited to Single File Context
**Workaround:** Use RPC API for cross-file operations

### Limitation 3: Batch File Creation Slower than Figma
**Workaround:** Use Plugin API for bulk operations within single file

### Limitation 4: Design Tokens Export Limited
**Workaround:** Use community package `@penpot-export/cli` for advanced export

### Limitation 5: No Native REST for All Operations
**Workaround:** Combine Plugin API (for UI) + RPC API (for backend)

### Limitation 6: Rate Limiting Not Documented
**Workaround:** Implement exponential backoff and request throttling

---

## 12. DOCUMENTATION LINKS

### Official Documentation
- **Main API Docs:** https://design.penpot.app/api/_doc
- **Plugin API:** https://doc.plugins.penpot.app/
- **Integration Guide:** https://help.penpot.app/technical-guide/integration/
- **Technical Guide:** https://help.penpot.app/technical-guide/
- **Plugin Development:** https://help.penpot.app/plugins/

### Community Resources
- **GitHub Repository:** https://github.com/penpot/penpot
- **Plugin Examples:** https://github.com/penpot/plugin-examples
- **MCP Server:** https://github.com/penpot/penpot/tree/develop/mcp
- **Community:** https://community.penpot.app/

### NPM Packages
- `@penpot/plugin-types`: https://npmjs.com/package/@penpot/plugin-types
- `@penpot/plugin-styles`: https://npmjs.com/package/@penpot/plugin-styles
- `mcp-server-penpot`: https://npmjs.com/package/mcp-server-penpot

---

## 13. QUICK START CHECKLIST

- [ ] Generate access token in Penpot account settings
- [ ] Test API with curl request to `get-profile`
- [ ] Create test project and file
- [ ] Install `@penpot/plugin-types` for development
- [ ] Create manifest.json with required permissions
- [ ] Develop plugin with message-based communication
- [ ] Deploy plugin or run locally
- [ ] Setup webhooks for event monitoring
- [ ] Test end-to-end workflow
- [ ] Implement error handling and retries
- [ ] Document team's automation procedures

---

## 14. COMPARISON: API vs PLUGIN vs MCP

| Feature | RPC API | Plugin API | MCP Server |
|---------|---------|-----------|------------|
| **Use Case** | Backend operations | UI/Canvas operations | LLM integration |
| **Transport** | HTTP POST | Message passing | WebSocket/HTTP |
| **Auth** | Access Token | Built-in | Plugin runs within Penpot |
| **Types Available** | Basic | Full TypeScript | Full TypeScript |
| **Rate Limit** | Yes | No | Per-request |
| **File Access** | Full | Current file only | Current file via plugin |
| **Batch Operations** | Slower | Faster | Via LLM logic |
| **Real-time** | No | Yes | Via WebSocket |

---

## 15. PRODUCTION CONSIDERATIONS

### Security
- Store tokens in secure environment variables
- Use HTTPS for webhooks
- Implement request validation
- Rate limit incoming webhooks

### Error Handling
```javascript
// Implement retries
async function apiCallWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await delay(Math.pow(2, i) * 1000); // exponential backoff
    }
  }
}
```

### Monitoring
- Log all API calls
- Monitor webhook delivery
- Track file modifications
- Set up alerts for errors

### Self-Hosted Considerations
- Use same API endpoints as cloud
- Ensure authentication is configured
- Allow sufficient storage for files
- Plan for data backups
- Monitor resource usage

---

**Last Updated:** February 2025
**Penpot Version:** 2.13+
**API Version:** v2.13 (latest)
