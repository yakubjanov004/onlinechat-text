// CHATFLOW Penpot Plugin v3 - CORRECTED API
// Creates 26 design boards on the current page
// Uses verified Penpot Plugin API methods

console.log('=== CHATFLOW Plugin v3 START ===');

var PAGES = [
  '01-Design System',
  '02-Landing Hero & Header',
  '03-Landing Trust & Companies',
  '04-Landing Features',
  '05-Landing Integrations',
  '06-Landing Pricing & Footer',
  '07-Auth Sign Up & Login',
  '08-Onboarding Welcome & Workspace',
  '09-Onboarding Widget Install',
  '10-Dashboard Layout',
  '11-Inbox Chat',
  '12-Inbox Advanced',
  '13-Automation',
  '14-Team',
  '15-Analytics',
  '16-Settings',
  '17-Billing',
  '18-Chat Widget',
  '19-Flowcharts & Userflows',
  '20-Contacts CRM',
  '21-Online Visitors',
  '22-Team Chat',
  '23-Knowledge Base',
  '24-Addons Marketplace',
  '25-Advanced Analytics',
  '26-Developer'
];

var BOARD_W = 1440;
var BOARD_H = 900;
var GAP_X = 200;
var GAP_Y = 200;
var COLS = 5;

var created = 0;

for (var i = 0; i < PAGES.length; i++) {
  var name = PAGES[i];
  var col = i % COLS;
  var row = Math.floor(i / COLS);
  var bx = col * (BOARD_W + GAP_X);
  var by = row * (BOARD_H + GAP_Y);

  try {
    console.log('[' + (i + 1) + '/' + PAGES.length + '] ' + name);

    // 1. Create board - penpot.createBoard() returns Board
    var board = penpot.createBoard();
    board.name = name;
    board.x = bx;
    board.y = by;
    // width/height are READONLY - must use resize()
    board.resize(BOARD_W, BOARD_H);
    board.fills = [{ fillColor: '#FFFFFF', fillOpacity: 1 }];

    // 2. Title text - createText() takes string argument
    var title = penpot.createText(name);
    if (title) {
      title.growType = 'auto-width';
      // fontSize and fontWeight must be STRINGS
      title.fontSize = '32';
      title.fontWeight = '700';
      title.fills = [{ fillColor: '#111827', fillOpacity: 1 }];
      // Position is absolute on canvas
      title.x = bx + 48;
      title.y = by + 48;
      board.appendChild(title);
    }

    // 3. Subtitle text
    var sub = penpot.createText('Design wireframes and components');
    if (sub) {
      sub.growType = 'auto-width';
      sub.fontSize = '14';
      sub.fontWeight = '400';
      sub.fills = [{ fillColor: '#6B7280', fillOpacity: 1 }];
      sub.x = bx + 48;
      sub.y = by + 96;
      board.appendChild(sub);
    }

    // 4. Placeholder rectangle
    var box = penpot.createRectangle();
    box.name = name + ' - Content Area';
    box.x = bx + 48;
    box.y = by + 140;
    // width/height are READONLY - must use resize()
    box.resize(1344, 700);
    box.fills = [{ fillColor: '#F3F4F6', fillOpacity: 1 }];
    box.strokes = [{
      strokeColor: '#E5E7EB',
      strokeWidth: 2,
      strokeStyle: 'solid',
      strokeAlignment: 'center'
    }];
    box.borderRadius = 8;
    board.appendChild(box);

    created++;
    console.log('  OK: ' + name);

  } catch (e) {
    console.error('  ERROR ' + name + ': ' + e.message);
  }
}

console.log('=== DONE: ' + created + '/' + PAGES.length + ' boards created ===');
