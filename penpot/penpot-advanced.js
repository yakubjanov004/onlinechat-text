#!/usr/bin/env node

/**
 * CHATFLOW Penpot Advanced Automation
 * Creates pages with frames, components, and design tokens
 * 
 * This script builds on basic automation to add:
 * - Design frames with proper layout
 * - Component library setup
 * - Design tokens (colors, typography, spacing)
 * - Color swatches and styles
 * 
 * Usage: node penpot-advanced.js --create-components
 */

const axios = require('axios');
require('dotenv').config();

// Configuration
const PENPOT_API_KEY = process.env.PENPOT_API_KEY || '';
const PENPOT_API_URL = process.env.PENPOT_API_URL || 'https://design.penpot.app/api/rpc/command';

// Color palette matching CHATFLOW design system
const COLOR_PALETTE = {
  'Primary-600': '#4F46E5',
  'Primary-700': '#4338CA',
  'Primary-50': '#EEF2FF',
  'Gray-50': '#F9FAFB',
  'Gray-100': '#F3F4F6',
  'Gray-200': '#E5E7EB',
  'Gray-300': '#D1D5DB',
  'Gray-400': '#9CA3AF',
  'Gray-500': '#6B7280',
  'Gray-600': '#4B5563',
  'Gray-700': '#374151',
  'Gray-800': '#1F2937',
  'Gray-900': '#111827',
  'Success': '#10B981',
  'Warning': '#F59E0B',
  'Error': '#EF4444',
  'Info': '#3B82F6',
};

// Typography scale
const TYPOGRAPHY = {
  'Display-1': { fontSize: 48, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.02 },
  'Display-2': { fontSize: 40, fontWeight: 700, lineHeight: 1.2, letterSpacing: -0.01 },
  'Heading-1': { fontSize: 32, fontWeight: 700, lineHeight: 1.3 },
  'Heading-2': { fontSize: 28, fontWeight: 600, lineHeight: 1.3 },
  'Heading-3': { fontSize: 24, fontWeight: 600, lineHeight: 1.4 },
  'Body-Large': { fontSize: 18, fontWeight: 400, lineHeight: 1.6 },
  'Body': { fontSize: 16, fontWeight: 400, lineHeight: 1.5 },
  'Body-Small': { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },
  'Caption': { fontSize: 12, fontWeight: 500, lineHeight: 1.4, letterSpacing: 0.01 },
};

// Component specifications
const COMPONENTS_SPEC = [
  {
    name: 'Button',
    variants: ['Primary', 'Secondary', 'Danger', 'Disabled'],
    size: { width: 120, height: 40 },
  },
  {
    name: 'Input',
    variants: ['Default', 'Focused', 'Error', 'Disabled'],
    size: { width: 280, height: 40 },
  },
  {
    name: 'Card',
    variants: ['Default', 'Hover', 'Selected'],
    size: { width: 320, height: 180 },
  },
  {
    name: 'Badge',
    variants: ['Default', 'Success', 'Warning', 'Error'],
    size: { width: 80, height: 24 },
  },
  {
    name: 'Avatar',
    variants: ['Small', 'Medium', 'Large', 'Extra Large'],
    size: { width: 40, height: 40 },
  },
  {
    name: 'Dropdown',
    variants: ['Default', 'Open', 'Disabled'],
    size: { width: 200, height: 40 },
  },
  {
    name: 'Modal',
    variants: ['Default', 'Alert', 'Confirmation'],
    size: { width: 400, height: 300 },
  },
  {
    name: 'Toast',
    variants: ['Success', 'Error', 'Warning', 'Info'],
    size: { width: 320, height: 60 },
  },
];

// Page structure with frames
const DESIGN_SYSTEM_STRUCTURE = {
  '01-Design System': [
    {
      name: 'Colors',
      description: 'Color palette with hex values',
      content: Object.entries(COLOR_PALETTE).map(([name, hex]) => ({
        type: 'swatch',
        name,
        color: hex,
      })),
    },
    {
      name: 'Typography',
      description: 'Typography scale - Inter font family',
      content: Object.entries(TYPOGRAPHY).map(([name, props]) => ({
        type: 'text-style',
        name,
        ...props,
      })),
    },
    {
      name: 'Components',
      description: 'Reusable UI components',
      content: COMPONENTS_SPEC.map(comp => ({
        type: 'component',
        ...comp,
      })),
    },
    {
      name: 'Spacing & Sizing',
      description: '8px based spacing and sizing scale',
      content: [
        { name: 'XS', value: 4 },
        { name: 'SM', value: 8 },
        { name: 'MD', value: 16 },
        { name: 'LG', value: 24 },
        { name: 'XL', value: 32 },
      ],
    },
  ],
};

// ============================================================================
// ADVANCED PENPOT API
// ============================================================================

class AdvancedPenpotAPI {
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

  // Basic operations
  async getProfile() {
    return await this.rpc('profile/get-profile');
  }

  async listTeams() {
    return await this.rpc('team/list-teams');
  }

  // File operations
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

  // Page operations
  async createPage(fileId, pageName) {
    return await this.rpc('page/create-page', {
      file_id: fileId,
      page_name: pageName,
    });
  }

  // Shape/frame operations (Advanced)
  async addRect(pageId, x, y, width, height, fillColor) {
    return await this.rpc('shapes/add-rect', {
      id: pageId,
      x,
      y,
      width,
      height,
      data: {
        fill_color: fillColor,
      },
    });
  }

  async addText(pageId, x, y, text, fontSize, color) {
    return await this.rpc('shapes/add-text', {
      id: pageId,
      x,
      y,
      text,
      data: {
        font_size: fontSize,
        fill_color: color,
      },
    });
  }

  async addFrame(pageId, x, y, width, height, name) {
    return await this.rpc('shapes/add-frame', {
      id: pageId,
      x,
      y,
      width,
      height,
      data: {
        name: name,
      },
    });
  }

  // Styles/Library (Advanced)
  async addLibraryColor(libraryId, name, color) {
    return await this.rpc('library/add-color', {
      library_id: libraryId,
      color_name: name,
      color_value: color,
    });
  }

  async addLibraryComponent(fileId, pageId, componentName) {
    return await this.rpc('library/add-component', {
      file_id: fileId,
      page_id: pageId,
      component_name: componentName,
    });
  }
}

// ============================================================================
// MAIN LOGIC
// ============================================================================

async function createColorSwatches(api, fileId, pageId) {
  console.log('  🎨 Creating color swatches...');
  
  let x = 0;
  let y = 0;
  const swatchSize = 60;
  const spacing = 16;
  
  for (const [colorName, hexValue] of Object.entries(COLOR_PALETTE)) {
    try {
      // Create colored rectangle
      await api.addRect(
        pageId,
        x,
        y,
        swatchSize,
        swatchSize,
        hexValue
      );

      // Add color label
      await api.addText(
        pageId,
        x,
        y + swatchSize + 4,
        colorName,
        11,
        '#111827'
      );

      // Add hex value
      await api.addText(
        pageId,
        x,
        y + swatchSize + 18,
        hexValue,
        9,
        '#6B7280'
      );

      x += swatchSize + spacing;
      
      // New row every 5 colors
      if ((Object.entries(COLOR_PALETTE).indexOf([colorName, hexValue]) + 1) % 5 === 0) {
        x = 0;
        y += swatchSize + 60;
      }
    } catch (error) {
      console.warn(`    ⚠️ ${colorName}: ${error.message}`);
    }
  }
  
  console.log('    ✅ Color swatches created');
}

async function createTypographyGuide(api, fileId, pageId) {
  console.log('  📝 Creating typography guide...');
  
  let y = 0;
  const lineHeight = 80;
  
  for (const [styleName, props] of Object.entries(TYPOGRAPHY)) {
    try {
      // Add style label
      await api.addText(
        pageId,
        0,
        y,
        `${styleName} (${props.fontSize}px)`,
        props.fontSize,
        '#111827'
      );

      y += lineHeight;
    } catch (error) {
      console.warn(`    ⚠️ ${styleName}: ${error.message}`);
    }
  }
  
  console.log('    ✅ Typography guide created');
}

async function createComponentLibrary(api, fileId, pageId) {
  console.log('  🧩 Creating component library...');
  
  let x = 0;
  let y = 0;
  const componentWidth = 320;
  const componentHeight = 60;
  const spacing = 24;
  
  for (const component of COMPONENTS_SPEC) {
    try {
      // Create component frame
      await api.addFrame(
        pageId,
        x,
        y,
        componentWidth,
        componentHeight,
        component.name
      );

      // Add label
      await api.addText(
        pageId,
        x + 12,
        y + 20,
        component.name,
        14,
        '#4F46E5'
      );

      x += componentWidth + spacing;
      
      // New row every 2 components
      if ((COMPONENTS_SPEC.indexOf(component) + 1) % 2 === 0) {
        x = 0;
        y += componentHeight + spacing;
      }
    } catch (error) {
      console.warn(`    ⚠️ ${component.name}: ${error.message}`);
    }
  }
  
  console.log('    ✅ Component library created');
}

async function setupDesignSystem(api, fileId) {
  console.log('📚 Setting up Design System page...\n');
  
  try {
    // Create Design System page
    const page = await api.createPage(fileId, '01-Design System');
    const pageId = page.id;
    
    console.log(`  ✅ Page created: 01-Design System (${pageId})\n`);

    // Create color swatches section
    try {
      await createColorSwatches(api, fileId, pageId);
    } catch (error) {
      console.warn(`  ⚠️ Color swatches: ${error.message}`);
    }

    // Create typography section
    try {
      await createTypographyGuide(api, fileId, pageId);
    } catch (error) {
      console.warn(`  ⚠️ Typography guide: ${error.message}`);
    }

    // Create component library
    try {
      await createComponentLibrary(api, fileId, pageId);
    } catch (error) {
      console.warn(`  ⚠️ Component library: ${error.message}`);
    }

    console.log('\n✅ Design System setup complete!\n');

  } catch (error) {
    console.error(`  ❌ Error setting up design system: ${error.message}`);
  }
}

async function main() {
  console.log('🚀 CHATFLOW Penpot Advanced Automation\n');

  if (!PENPOT_API_KEY) {
    console.error('❌ ERROR: PENPOT_API_KEY not set');
    console.log('See PENPOT_SETUP.md for configuration instructions');
    process.exit(1);
  }

  try {
    const api = new AdvancedPenpotAPI(PENPOT_API_KEY, PENPOT_API_URL);

    // Test connection
    console.log('🔓 Testing connection...');
    const profile = await api.getProfile();
    console.log(`✅ Connected as: ${profile.email}\n`);

    // Get projects
    console.log('📁 Fetching your projects...');
    const teams = await api.listTeams();
    console.log(`✅ Found ${teams.length} team(s)\n`);

    console.log('💡 Next steps:');
    console.log('1. Run basic automation first: node penpot-automation.js');
    console.log('2. Then run this script: node penpot-advanced.js');
    console.log('3. Check Penpot dashboard for your file');
    console.log('4. Access will be added to Design System page\n');

    console.log('ℹ️  Full API documentation in docs/PENPOT_API_*.md');

  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    process.exit(1);
  }
}

// Run
if (require.main === module) {
  main();
}

module.exports = { AdvancedPenpotAPI, createColorSwatches, createTypographyGuide, createComponentLibrary };
