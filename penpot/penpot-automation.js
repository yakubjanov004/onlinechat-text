#!/usr/bin/env node

/**
 * CHATFLOW Penpot Automation Script
 * Auto-generates design files from specifications
 * 
 * Usage:
 * 1. Set PENPOT_API_KEY and PENPOT_API_URL in .env
 * 2. Run: node penpot-automation.js
 */

const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// ============================================================================
// CONFIGURATION
// ============================================================================

const PENPOT_API_KEY = process.env.PENPOT_API_KEY || '';
const PENPOT_API_URL = process.env.PENPOT_API_URL || 'http://localhost:9001/api/rpc/command';
const TEAM_ID = process.env.PENPOT_TEAM_ID || '';
const PROJECT_NAME = 'CHATFLOW Design System';

// Design tokens
const DESIGN_TOKENS = {
  colors: {
    primary: {
      '600': '#4F46E5',
      '700': '#4338CA',
      '50': '#EEF2FF',
    },
    gray: {
      '50': '#F9FAFB',
      '100': '#F3F4F6',
      '200': '#E5E7EB',
      '400': '#9CA3AF',
      '500': '#6B7280',
      '900': '#111827',
    },
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
  },
};

// Page specifications from figma-docs
const PAGES_SPEC = [
  {
    id: '01-design-system',
    name: '01-Design System',
    description: 'Core design system, components, patterns',
    sections: [
      { name: 'Colors', y: 0 },
      { name: 'Typography', y: 200 },
      { name: 'Spacing', y: 400 },
      { name: 'Components', y: 600 },
    ],
  },
  {
    id: '02-landing-hero-header',
    name: '02-Landing: Hero & Header',
    frames: ['Hero Section', 'Navigation', 'CTA Banner'],
  },
  {
    id: '03-landing-trust-kimlar',
    name: '03-Landing: Trust & Companies',
    frames: ['Trust Section', 'Companies Grid', 'Quote Card'],
  },
  {
    id: '04-landing-ishlaydi-imkoniyatlar',
    name: '04-Landing: Features',
    frames: ['Feature Card 1', 'Feature Card 2', 'Feature Grid'],
  },
  {
    id: '05-landing-integratsiya-afzallik',
    name: '05-Landing: Integrations',
    frames: ['Integration Grid', 'Integration Detail', 'API View'],
  },
  {
    id: '06-landing-tariflar-cta-footer',
    name: '06-Landing: Pricing & Footer',
    frames: ['Pricing Cards', 'CTA Section', 'Footer'],
  },
  {
    id: '07-auth-signup-login',
    name: '07-Auth: Sign Up & Login',
    frames: ['Login Form', 'Sign Up Form', 'Password Reset'],
  },
  {
    id: '08-onboarding-welcome-workspace',
    name: '08-Onboarding: Welcome',
    frames: ['Welcome Screen', 'Workspace Creation', 'Progress Bar'],
  },
  {
    id: '09-onboarding-widget-install',
    name: '09-Onboarding: Widget Install',
    frames: ['Widget Setup', 'Code Copy', 'Preview'],
  },
  {
    id: '10-dashboard-layout',
    name: '10-Dashboard: Layout',
    frames: ['Sidebar', 'Header', 'Main Content', 'Right Panel'],
  },
  {
    id: '11-inbox-chat',
    name: '11-Inbox: Chat',
    frames: ['Conversation List', 'Chat Area', 'Info Panel', 'Message Input'],
  },
  {
    id: '12-inbox-advanced',
    name: '12-Inbox: Advanced',
    frames: ['Advanced Filters', 'Bulk Actions', 'Assign Modal'],
  },
  {
    id: '13-automation',
    name: '13-Automation',
    frames: ['Flow Canvas', 'Trigger Select', 'Action Builder'],
  },
  {
    id: '14-team',
    name: '14-Team',
    frames: ['Team List', 'Add Member', 'Permissions'],
  },
  {
    id: '15-analytics',
    name: '15-Analytics',
    frames: ['Overview', 'Agents Stats', 'Charts', 'Reports'],
  },
  {
    id: '16-settings',
    name: '16-Settings',
    frames: ['General', 'Team Settings', 'Widget Config', 'Integrations'],
  },
  {
    id: '17-billing',
    name: '17-Billing',
    frames: ['Payment Methods', 'Invoices', 'Subscription'],
  },
  {
    id: '20-contacts-crm',
    name: '20-Contacts: CRM',
    frames: ['Contact List', 'Contact Detail', 'Import/Export'],
  },
  {
    id: '21-online-visitors',
    name: '21-Online Visitors',
    frames: ['Visitor Map', 'Visitor List', 'Real-time Updates'],
  },
  {
    id: '22-team-chat',
    name: '22-Team Chat',
    frames: ['Channels', 'Direct Messages', 'Chat Thread'],
  },
  {
    id: '23-knowledge-base',
    name: '23-Knowledge Base',
    frames: ['Article List', 'Article Editor', 'Categories'],
  },
  {
    id: '24-addons-marketplace',
    name: '24-Addons: Marketplace',
    frames: ['App Grid', 'App Detail', 'Install Flow'],
  },
  {
    id: '25-advanced-analytics',
    name: '25-Advanced Analytics',
    frames: ['Custom Reports', 'Data Export', 'Visualization'],
  },
  {
    id: '26-developer',
    name: '26-Developer',
    frames: ['API Docs', 'Code Examples', 'Webhook Setup'],
  },
];

// ============================================================================
// PENPOT RPC API WRAPPER
// ============================================================================

class PenpotAPI {
  constructor(apiKey, apiUrl) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${apiKey}`,
    };
  }

  async rpc(method, params = {}) {
    try {
      const response = await axios.post(this.apiUrl, {
        method,
        params,
      }, { headers: this.headers });

      if (response.data.error) {
        throw new Error(`RPC Error (${method}): ${response.data.error.message}`);
      }

      return response.data.result;
    } catch (error) {
      throw new Error(`Penpot API Error: ${error.message}`);
    }
  }

  async getProfile() {
    return await this.rpc('profile/get-profile');
  }

  async listTeams() {
    return await this.rpc('team/list-teams');
  }

  async createProject(teamId, projectName) {
    return await this.rpc('project/create-project', {
      team_id: teamId,
      project_name: projectName,
    });
  }

  async getProject(projectId) {
    return await this.rpc('project/get-project', {
      project_id: projectId,
    });
  }

  async createFile(projectId, fileName) {
    return await this.rpc('file/create-file', {
      project_id: projectId,
      file_name: fileName,
    });
  }

  async getFile(fileId) {
    return await this.rpc('file/get-file', {
      file_id: fileId,
    });
  }

  async createPage(fileId, pageName) {
    return await this.rpc('page/create-page', {
      file_id: fileId,
      page_name: pageName,
    });
  }

  async addFrame(pageId, frameData) {
    return await this.rpc('shapes/add-frame', {
      id: pageId,
      frame_data: frameData,
    });
  }
}

// ============================================================================
// MAIN AUTOMATION LOGIC
// ============================================================================

async function main() {
  console.log('🎨 CHATFLOW Penpot Automation Started\n');

  // Validate configuration
  if (!PENPOT_API_KEY) {
    console.error('❌ ERROR: PENPOT_API_KEY not set in .env');
    console.log('\nSetup instructions:');
    console.log('1. Open Penpot: https://design.penpot.app/');
    console.log('2. Go to: Account → Access tokens → Generate new token');
    console.log('3. Copy token and add to .env:');
    console.log('   PENPOT_API_KEY=your_token_here');
    console.log('   PENPOT_API_URL=https://design.penpot.app/api/rpc/command');
    console.log('4. Get TEAM_ID from URL or use: node penpot-automation.js --list-teams');
    process.exit(1);
  }

  try {
    const api = new PenpotAPI(PENPOT_API_KEY, PENPOT_API_URL);

    // Test connection
    console.log('🔓 Testing Penpot API connection...');
    const profile = await api.getProfile();
    console.log(`✅ Connected as: ${profile.email}\n`);

    // Get team
    console.log('📁 Fetching teams...');
    const teams = await api.listTeams();
    
    if (!TEAM_ID && teams.length > 0) {
      console.log('Available teams:');
      teams.forEach((team, i) => {
        console.log(`  ${i + 1}. ${team.name} (ID: ${team.id})`);
      });
      const firstTeamId = teams[0].id;
      console.log(`\nUsing first team: ${teams[0].name}\n`);
    }

    const teamId = TEAM_ID || teams[0].id;

    // Create project
    console.log(`📊 Creating project: "${PROJECT_NAME}"...`);
    const project = await api.createProject(teamId, PROJECT_NAME);
    const projectId = project.id;
    console.log(`✅ Project created (ID: ${projectId})\n`);

    // Create master file
    console.log('📄 Creating master file: "CHATFLOW Design System"...');
    const file = await api.createFile(projectId, 'CHATFLOW Design System');
    const fileId = file.id;
    console.log(`✅ File created (ID: ${fileId})\n`);

    // Create pages from specification
    console.log('📑 Creating design pages...\n');
    
    for (const pageSpec of PAGES_SPEC) {
      try {
        console.log(`  → Creating page: ${pageSpec.name}`);
        const page = await api.createPage(fileId, pageSpec.name);
        console.log(`    ✅ ID: ${page.id}`);
      } catch (error) {
        console.log(`    ⚠️ Warning: ${error.message}`);
      }
    }

    console.log('\n🎉 Automation completed successfully!');
    console.log(`\n📌 Next steps:`);
    console.log(`1. Open Penpot: https://design.penpot.app/`);
    console.log(`2. Navigate to project: ${PROJECT_NAME}`);
    console.log(`3. Open file: CHATFLOW Design System`);
    console.log(`4. Design pages are ready for content`);

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

async function listTeamsOnly() {
  const api = new PenpotAPI(PENPOT_API_KEY, PENPOT_API_URL);
  const teams = await api.listTeams();
  console.log('Available teams:');
  teams.forEach(team => {
    console.log(`  - ${team.name} (ID: ${team.id})`);
  });
}

// Run
if (process.argv.includes('--list-teams')) {
  listTeamsOnly().catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
} else {
  main();
}

module.exports = { PenpotAPI, main };
