// CHATFLOW Penpot Plugin - SIMPLIFIED & WORKING
// Auto-creates 26 design pages

console.log('=== CHATFLOW Plugin Started ===');

// Page list
const PAGES = [
  '01-Design System', '02-Landing Hero & Header', '03-Landing Trust & Companies',
  '04-Landing Features', '05-Landing Integrations', '06-Landing Pricing & Footer',
  '07-Auth Sign Up & Login', '08-Onboarding Welcome & Workspace', 
  '09-Onboarding Widget Install', '10-Dashboard Layout', '11-Inbox Chat',
  '12-Inbox Advanced', '13-Automation', '14-Team', '15-Analytics',
  '16-Settings', '17-Billing', '18-Chat Widget', '19-Flowcharts & Userflows',
  '20-Contacts CRM', '21-Online Visitors', '22-Team Chat', '23-Knowledge Base',
  '24-Addons Marketplace', '25-Advanced Analytics', '26-Developer',
];

// Colors
const WHITE = '#FFFFFF';
const DARK = '#111827';
const GRAY = '#6B7280';
const LIGHT = '#F3F4F6';
const BORDER = '#E5E7EB';

console.log(`Creating ${PAGES.length} pages...`);

let count = 0;

// Main plugin function
for (const pageName of PAGES) {
  try {
    console.log(`[${count + 1}/${PAGES.length}] ${pageName}`);
    
    // Create board (frame) directly on current page
    const board = penpot.createBoard();
    board.name = pageName;
    board.x = 0;
    board.y = 0;
    board.width = 1440;
    board.height = 900;
    board.fills = [{ fillColor: WHITE, fillOpacity: 1 }];
    
    // Add title
    const title = penpot.createText();
    title.content = pageName;
    title.x = 48;
    title.y = 48;
    title.fontSize = 32;
    title.fontWeight = 600;
    title.fills = [{ fillColor: DARK, fillOpacity: 1 }];
    
    // Add subtitle
    const subtitle = penpot.createText();
    subtitle.content = 'Design wireframes and components here';
    subtitle.x = 48;
    subtitle.y = 88;
    subtitle.fontSize = 14;
    subtitle.fills = [{ fillColor: GRAY, fillOpacity: 1 }];
    
    // Add placeholder box
    const box = penpot.createRectangle();
    box.x = 48;
    box.y = 140;
    box.width = 1000;
    box.height = 700;
    box.fills = [{ fillColor: LIGHT, fillOpacity: 1 }];
    box.strokes = [{ strokeColor: BORDER, strokeWidth: 2 }];
    box.borderRadius = 8;
    
    // Append to board
    board.appendChild(title);
    board.appendChild(subtitle);
    board.appendChild(box);
    
    count++;
    
  } catch (error) {
    console.error(`ERROR creating ${pageName}:`, error.message);
  }
}

console.log(`=== DONE! Created ${count}/${PAGES.length} pages ===`);

