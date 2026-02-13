# Penpot API - Code Examples & Templates

## Table of Contents
1. [JavaScript/NodeJS Examples](#javascript-nodejs-examples)
2. [Python Examples](#python-examples)
3. [Plugin Examples (TypeScript)](#plugin-examples-typescript)
4. [cURL Commands](#curl-commands)
5. [Complete Workflow Scripts](#complete-workflow-scripts)

---

## JavaScript/NodeJS Examples

### 1. Basic Setup & Authentication

```javascript
const axios = require('axios');

// Configuration
const CONFIG = {
  baseUrl: 'https://design.penpot.app/api/rpc/command',
  token: process.env.PENPOT_TOKEN || 'your-token-here'
};

// Create axios instance with auth headers
const api = axios.create({
  baseURL: CONFIG.baseUrl,
  headers: {
    'Authorization': `Token ${CONFIG.token}`,
    'Content-Type': 'application/json'
  }
});

// Error handler
api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
);

module.exports = api;
```

### 2. Get User Profile

```javascript
const api = require('./api');

async function getProfile() {
  try {
    const profile = await api.post('/get-profile');
    console.log('User:', profile.name);
    console.log('Email:', profile.email);
    console.log('Default Team:', profile['default-team-id']);
    return profile;
  } catch (error) {
    console.error('Failed to get profile:', error);
  }
}

getProfile();
```

### 3. Create Project

```javascript
async function createProject(teamId, projectName) {
  try {
    const project = await api.post('/create-project', {
      team_id: teamId,
      name: projectName
    });
    console.log(`Project created: ${project.name} (${project.id})`);
    return project;
  } catch (error) {
    console.error('Failed to create project:', error);
  }
}

// Usage
const profile = await getProfile();
const newProject = await createProject(profile['default-team-id'], 'My UI Kit');
```

### 4. Create File

```javascript
async function createFile(projectId, fileName) {
  try {
    const file = await api.post('/create-file', {
      project_id: projectId,
      name: fileName
    });
    console.log(`File created: ${file.name} (${file.id})`);
    return file;
  } catch (error) {
    console.error('Failed to create file:', error);
    throw error;
  }
}

// Usage
const file = await createFile(newProject.id, 'Component Library');
console.log('File ID:', file.id);
```

### 5. Get File Data

```javascript
async function getFileData(fileId) {
  try {
    const fileData = await api.post('/get-file', {
      file_id: fileId
    });
    console.log('Pages:', fileData.data?.pages?.length || 0);
    console.log('Assets:', Object.keys(fileData.data?.assets || {}).length);
    return fileData;
  } catch (error) {
    console.error('Failed to get file:', error);
  }
}

// Usage
const fileData = await getFileData(file.id);
```

### 6. Get File Pages

```javascript
async function getPages(fileId) {
  try {
    const fileData = await api.post('/get-file', { file_id: fileId });
    const pages = fileData.data.pages || [];
    
    pages.forEach(page => {
      console.log(`Page: ${page.name} (${page.id})`);
      console.log(`  Shapes: ${page.shapes?.length || 0}`);
    });
    
    return pages;
  } catch (error) {
    console.error('Failed to get pages:', error);
  }
}
```

### 7. Rename File

```javascript
async function renameFile(fileId, newName) {
  try {
    const result = await api.post('/rename-file', {
      file_id: fileId,
      name: newName
    });
    console.log(`File renamed to: ${newName}`);
    return result;
  } catch (error) {
    console.error('Failed to rename file:', error);
  }
}
```

### 8. Delete File

```javascript
async function deleteFile(fileId) {
  try {
    await api.post('/delete-file', {
      file_id: fileId
    });
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Failed to delete file:', error);
  }
}
```

### 9. Get All Team Files

```javascript
async function getTeamFiles(teamId) {
  try {
    const response = await api.post('/get-team-recent-files', {
      team_id: teamId
    });
    
    console.log(`Found ${response.length} recent files:`);
    response.forEach(file => {
      console.log(`  - ${file.name} (${file.id})`);
      console.log(`    Modified: ${new Date(file.updated_at).toLocaleString()}`);
    });
    
    return response;
  } catch (error) {
    console.error('Failed to get team files:', error);
  }
}
```

### 10. Create Webhook

```javascript
async function createWebhook(teamId, webhookUrl) {
  try {
    const webhook = await api.post('/create-webhook', {
      team_id: teamId,
      url: webhookUrl,
      format: 'json'  // or 'transit'
    });
    console.log(`Webhook created: ${webhook.id}`);
    return webhook;
  } catch (error) {
    console.error('Failed to create webhook:', error);
  }
}

// Usage
const webhook = await createWebhook(teamId, 'https://myapp.com/penpot-events');
```

### 11. Get Webhooks

```javascript
async function listWebhooks(teamId) {
  try {
    const webhooks = await api.post('/get-webhooks', {
      team_id: teamId
    });
    
    console.log(`Webhooks for team ${teamId}:`);
    webhooks.forEach(wh => {
      console.log(`  - ${wh.id}: ${wh.url}`);
      console.log(`    Active: ${wh.active}`);
    });
    
    return webhooks;
  } catch (error) {
    console.error('Failed to get webhooks:', error);
  }
}
```

### 12. Create Access Token (Programmatic)

```javascript
async function createAccessToken(name, expirationDays = 90) {
  try {
    const token = await api.post('/create-access-token', {
      name: name,
      expiration_date: calculateExpirationDate(expirationDays)
    });
    console.log(`Token created: ${token.name}`);
    console.log(`Token value: ${token.token}`);  // Save this securely
    return token;
  } catch (error) {
    console.error('Failed to create access token:', error);
  }
}

function calculateExpirationDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return Math.floor(date.getTime() / 1000);
}
```

### 13. Batch File Creation with Retry

```javascript
async function batchCreateFiles(projectId, fileNames, retries = 3) {
  const results = {
    success: [],
    failed: []
  };
  
  for (const fileName of fileNames) {
    let attempts = 0;
    let success = false;
    
    while (attempts < retries && !success) {
      try {
        const file = await createFile(projectId, fileName);
        results.success.push(file);
        success = true;
      } catch (error) {
        attempts++;
        if (attempts < retries) {
          // Exponential backoff
          const delay = Math.pow(2, attempts) * 1000;
          console.log(`Retrying in ${delay}ms...`);
          await new Promise(r => setTimeout(r, delay));
        } else {
          results.failed.push({ fileName, error: error.message });
        }
      }
    }
  }
  
  console.log(`Created ${results.success.length} files`);
  console.log(`Failed ${results.failed.length} files`);
  return results;
}

// Usage
const files = await batchCreateFiles(projectId, [
  'Dashboard',
  'Settings',
  'Profile',
  'Components'
]);
```

---

## Python Examples

### 1. Basic Setup

```python
import requests
import json
import os
from typing import Optional, Dict, Any

class PenpotAPI:
    def __init__(self, token: str = None):
        self.base_url = 'https://design.penpot.app/api/rpc/command'
        self.token = token or os.getenv('PENPOT_TOKEN')
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Token {self.token}',
            'Content-Type': 'application/json'
        })
    
    def call(self, method: str, **params) -> Dict[str, Any]:
        """Call RPC method"""
        url = f'{self.base_url}/{method}'
        try:
            response = self.session.post(url, json=params)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f'API Error: {e}')
            raise
```

### 2. Get Profile

```python
def get_profile(api: PenpotAPI):
    """Get current user profile"""
    profile = api.call('get-profile')
    print(f"User: {profile['name']}")
    print(f"Email: {profile['email']}")
    print(f"Teams: {len(profile['teams'])}")
    return profile
```

### 3. Create Project

```python
def create_project(api: PenpotAPI, team_id: str, name: str) -> Dict:
    """Create new project"""
    project = api.call('create-project', team_id=team_id, name=name)
    print(f"Created project: {project['name']}")
    return project
```

### 4. Create File

```python
def create_file(api: PenpotAPI, project_id: str, name: str) -> Dict:
    """Create new file"""
    file = api.call('create-file', project_id=project_id, name=name)
    print(f"Created file: {file['name']}")
    return file
```

### 5. Get File Info

```python
def get_file_info(api: PenpotAPI, file_id: str) -> Dict:
    """Get file information"""
    file_info = api.call('get-file-summary', file_id=file_id)
    print(f"File: {file_info['name']}")
    print(f"Pages: {len(file_info['pages'])}")
    print(f"Modified: {file_info['modified_at']}")
    return file_info
```

### 6. List Team Files

```python
def list_team_files(api: PenpotAPI, team_id: str):
    """List all recent files in team"""
    files = api.call('get-team-recent-files', team_id=team_id)
    
    print(f"Found {len(files)} recent files:")
    for file in files:
        print(f"  - {file['name']} ({file['id']})")
        print(f"    Modified: {file['updated_at']}")
```

### 7. Search Files

```python
def search_files(api: PenpotAPI, team_id: str, search_term: str):
    """Search for files by name"""
    results = api.call('search-files', team_id=team_id, search_term=search_term)
    
    print(f"Found {len(results)} files matching '{search_term}':")
    for file in results:
        print(f"  - {file['name']}")
```

### 8. Export File

```python
def export_file(api: PenpotAPI, file_id: str, output_path: str):
    """Export file as .penpot (ZIP)"""
    export = api.call('export-binfile', file_id=file_id)
    
    if 'data_uri' in export:
        # Handle base64 encoded data
        import base64
        data = base64.b64decode(export['data_uri'].split(',')[1])
        with open(output_path, 'wb') as f:
            f.write(data)
        print(f"File exported to: {output_path}")
```

### 9. Create Webhook

```python
def create_webhook(api: PenpotAPI, team_id: str, webhook_url: str) -> Dict:
    """Create webhook for team events"""
    webhook = api.call(
        'create-webhook',
        team_id=team_id,
        url=webhook_url,
        format='json'
    )
    print(f"Webhook created: {webhook['id']}")
    return webhook
```

### 10. Delete File

```python
def delete_file(api: PenpotAPI, file_id: str):
    """Delete file permanently"""
    api.call('delete-file', file_id=file_id)
    print(f"File {file_id} deleted")
```

### 11. Batch Create Files

```python
def batch_create_files(api: PenpotAPI, project_id: str, file_names: list[str]) -> Dict:
    """Create multiple files with error handling"""
    results = {'success': [], 'failed': []}
    
    for name in file_names:
        try:
            file = create_file(api, project_id, name)
            results['success'].append(file)
        except Exception as e:
            print(f"Failed to create {name}: {e}")
            results['failed'].append({'name': name, 'error': str(e)})
    
    print(f"Created {len(results['success'])} files, failed {len(results['failed'])}")
    return results
```

### 12. Complete Workflow

```python
def complete_workflow():
    """Full workflow: create team structure and files"""
    api = PenpotAPI()
    
    # Get profile
    profile = get_profile(api)
    team_id = profile['default_team_id']
    
    # Create project
    project = create_project(api, team_id, 'My Design System')
    print(f"Project ID: {project['id']}")
    
    # Create files
    files = batch_create_files(
        api,
        project['id'],
        ['Colors', 'Typography', 'Components', 'Patterns']
    )
    
    # Setup webhook
    webhook = create_webhook(
        api,
        team_id,
        'https://myapp.com/penpot-webhook'
    )
    
    print("\nWorkflow complete!")
    print(f"Files created: {len(files['success'])}")
    print(f"Webhook configured: {webhook['id']}")

if __name__ == '__main__':
    complete_workflow()
```

---

## Plugin Examples (TypeScript)

### 1. Basic Plugin Structure

```typescript
// plugin.ts - Main plugin file
penpot.ui.open('My Design Plugin', '', {
  width: 500,
  height: 600
});

penpot.ui.onMessage((message) => {
  if (message.type === 'create-shapes') {
    handleCreateShapes();
  } else if (message.type === 'apply-design-tokens') {
    handleApplyTokens();
  }
});

function handleCreateShapes() {
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
    },
    name: 'Red Box'
  });
  
  // Create text
  const text = page.createShape('text', {
    x: 110,
    y: 0,
    width: 200,
    height: 30,
    content: 'Hello World',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#000000'
  });
  
  // Group them
  const group = page.createGroup([rect, text], { name: 'Group 1' });
  
  penpot.ui.sendMessage({
    success: true,
    shapeCount: 3,
    groupId: group.id
  });
}
```

###  2. Plugin UI Communication

```typescript
// In plugin.ts (Penpot side)
penpot.ui.onMessage((message) => {
  if (message.command === 'create-button') {
    const button = createButton(message.label, message.color);
    penpot.ui.sendMessage({
      type: 'button-created',
      buttonId: button.id,
      dimensions: {
        width: button.width,
        height: button.height
      }
    });
  }
});

// In UI (React/Vue/etc)
function App() {
  const handleCreateButton = () => {
    parent.postMessage({
      command: 'create-button',
      label: 'Click me',
      color: '#3B82F6'
    }, '*');
  };
  
  window.addEventListener('message', (event) => {
    if (event.data.type === 'button-created') {
      console.log('Button created:', event.data.buttonId);
    }
  });
  
  return <button onClick={handleCreateButton}>Create Button</button>;
}
```

### 3. Create Component

```typescript
async function createButtonComponent() {
  const page = penpot.currentPage;
  
  // Create button base shape
  const bg = page.createShape('rect', {
    width: 100,
    height: 40,
    fill: { color: '#3B82F6' },
    radius: 4,
    name: 'Background'
  });
  
  // Create text label
  const label = page.createShape('text', {
    x: 10,
    y: 10,
    content: 'Label',
    fontSize: 14,
    color: '#FFFFFF',
    name: 'Label'
  });
  
  // Create component from shapes
  const component = page.createComponent(
    [bg, label],
    { name: 'Button' }
  );
  
  return component;
}

// Create instance
async function createButtonInstance(page, label, color) {
  const component = await getButtonComponent();
  
  const instance = page.createComponentInstance(component.id, {
    overrides: {
      'Label': { content: label },
      'Background': { fill: { color: color } }
    },
    name: `Button: ${label}`
  });
  
  return instance;
}
```

### 4. Apply Design Tokens

```typescript
async function applyDesignTokens(shape, tokens) {
  try {
    // Get all tokens
    const availableTokens = await shape.getDesignTokens?.();
    
    // Apply color token
    if (tokens.color) {
      shape.mainFill = {
        color: tokens.color.value,
        opacity: tokens.color.opacity || 1
      };
    }
    
    // Apply typography if text
    if (shape.type === 'text' && tokens.typography) {
      shape.fontSize = tokens.typography.size;
      shape.fontFamily = tokens.typography.family;
      shape.fontWeight = tokens.typography.weight;
    }
    
    // Apply spacing/padding if available
    if (shape.type === 'frame' && tokens.spacing) {
      shape.paddingTop = tokens.spacing.top;
      shape.paddingRight = tokens.spacing.right;
      shape.paddingBottom = tokens.spacing.bottom;
      shape.paddingLeft = tokens.spacing.left;
    }
    
    return true;
  } catch (error) {
    console.error('Failed to apply tokens:', error);
    return false;
  }
}
```

### 5. Iterate and Modify Shapes

```typescript
async function updateSelectedShapes(properties) {
  const selected = penpot.selection;
  
  for (const shape of selected) {
    // Update colors
    if (properties.fillColor) {
      shape.mainFill = {
        color: properties.fillColor,
        opacity: shape.mainFill?.opacity || 1
      };
    }
    
    // Update opacity
    if (properties.opacity) {
      if (shape.mainFill) {
        shape.mainFill.opacity = properties.opacity;
      }
    }
    
    // Update text properties
    if (shape.type === 'text' && properties.fontSize) {
      shape.fontSize = properties.fontSize;
    }
    
    // Update dimensions
    if (properties.width) {
      shape.width = properties.width;
    }
    if (properties.height) {
      shape.height = properties.height;
    }
  }
  
  penpot.ui.sendMessage({
    type: 'update-complete',
    shapesModified: selected.length
  });
}
```

### 6. Export Plugin Manifest

```json
{
  "name": "Advanced Designer",
  "description": "Powerful design automation and component management",
  "code": "/plugin.js",
  "icon": "/icon.png",
  "permissions": [
    "content:read",
    "content:write",
    "library:read",
    "library:write",
    "user:read",
    "comment:read",
    "comment:write",
    "allow:downloads"
  ]
}
```

---

## cURL Commands

### Get Profile
```bash
curl -X POST https://design.penpot.app/api/rpc/command/get-profile \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

### Create Project
```bash
curl -X POST https://design.penpot.app/api/rpc/command/create-project \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "team_id": "team-uuid",
    "name": "My Project"
  }'
```

### Create File
```bash
curl -X POST https://design.penpot.app/api/rpc/command/create-file \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": "project-uuid",
    "name": "My File"
  }'
```

### Get File
```bash
curl -X POST https://design.penpot.app/api/rpc/command/get-file \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": "file-uuid"
  }'
```

### Rename File
```bash
curl -X POST https://design.penpot.app/api/rpc/command/rename-file \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": "file-uuid",
    "name": "New Name"
  }'
```

### Delete File
```bash
curl -X POST https://design.penpot.app/api/rpc/command/delete-file \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": "file-uuid"
  }'
```

### Create Webhook
```bash
curl -X POST https://design.penpot.app/api/rpc/command/create-webhook \
  -H "Authorization: Token YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "team_id": "team-uuid",
    "url": "https://yourdomain.com/webhook",
    "format": "json"
  }'
```

---

## Complete Workflow Scripts

### JavaScript: Full Project Setup

```javascript
// setup-project.js
const api = require('./api');

async function setupDesignSystemProject() {
  console.log('Starting Design System Setup...\n');
  
  try {
    // 1. Get user info
    console.log('1. Getting user profile...');
    const profile = await api.post('/get-profile');
    const teamId = profile['default-team-id'];
    console.log(`   ✓ Logged in as ${profile.name}\n`);
    
    // 2. Create project
    console.log('2. Creating project...');
    const project = await api.post('/create-project', {
      team_id: teamId,
      name: 'Design System v2'
    });
    console.log(`   ✓ Project created: ${project.name}\n`);
    
    // 3. Create files for design system
    console.log('3. Creating design files...');
    const fileNames = [
      'Colors & Tokens',
      'Typography',
      'Components',
      'Patterns',
      'Icons',
      'Documentation'
    ];
    
    const files = [];
    for (const fileName of fileNames) {
      const file = await api.post('/create-file', {
        project_id: project.id,
        name: fileName
      });
      files.push(file);
      console.log(`   ✓ Created: ${fileName}`);
    }
    console.log();
    
    // 4. Setup webhooks
    console.log('4. Setting up webhooks...');
    const webhook = await api.post('/create-webhook', {
      team_id: teamId,
      url: 'https://yourserver.com/api/penpot-events',
      format: 'json'
    });
    console.log(`   ✓ Webhook configured: ${webhook.id}\n`);
    
    // 5. Summary
    console.log('✅ Setup complete!');
    console.log(`\nProject ID: ${project.id}`);
    console.log(`Files created: ${files.length}`);
    console.log('Files:');
    files.forEach(f => console.log(`  - ${f.name} (${f.id})`));
    
    return { project, files, webhook };
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

setupDesignSystemProject();
```

### Python: File Synchronization

```python
# sync-files.py
import json
from penpot_api import PenpotAPI

def sync_with_git(api: PenpotAPI, project_id: str, output_dir: str):
    """Sync Penpot files with Git repository"""
    
    # Get all project files
    project = api.call('get-project', project_id=project_id)
    files = project.get('files', [])
    
    print(f"Found {len(files)} files to sync\n")
    
    for file in files:
        print(f"Syncing: {file['name']}...")
        
        # Get file data
        file_data = api.call('get-file', file_id=file['id'])
        
        # Save to JSON
        output_file = f"{output_dir}/{file['name']}.json"
        with open(output_file, 'w') as f:
            json.dump(file_data, f, indent=2)
        
        print(f"  ✓ Saved to {output_file}")
    
    print("\n✅ Sync complete!")

if __name__ == '__main__':
    api = PenpotAPI()
    sync_with_git(api, 'project-id', './design-files')
```

---

**Created:** February 2025
**Updated for Penpot:** v2.13.2
