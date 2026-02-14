// CHATFLOW — Shared Components for Penpot Plugins
// Bu fayl har bir sahifa pluginiga copy qilib qo'shiladi
// Yoki reference sifatida ishlatiladi

// ─── DESIGN TOKENS ───
var C = {
  primary:     '#4F46E5',
  primaryHover:'#4338CA',
  primaryLight:'#818CF8',
  primaryBg:   '#E0E7FF',
  primaryBg50: '#EEF2FF',
  white:       '#FFFFFF',
  bg:          '#F9FAFB',
  gray50:      '#F9FAFB',
  gray100:     '#F3F4F6',
  gray200:     '#E5E7EB',
  gray300:     '#D1D5DB',
  gray500:     '#6B7280',
  gray700:     '#374151',
  gray900:     '#111827',
  green:       '#10B981',
  greenBg:     '#ECFDF5',
  red:         '#EF4444',
  redBg:       '#FEF2F2',
  yellow:      '#F59E0B',
  yellowBg:    '#FFFBEB',
  blue:        '#3B82F6',
  blueBg:      '#EFF6FF',
  google:      '#4285F4'
};

var BOARD_W = 1440;
var BOARD_H = 900;

// ─── HELPER: Rectangle ───
function makeRect(x, y, w, h, fill, opts) {
  opts = opts || {};
  var r = penpot.createRectangle();
  r.x = x; r.y = y;
  r.resize(w, h);
  r.fills = [{ fillColor: fill || C.white, fillOpacity: 1 }];
  if (opts.radius) r.borderRadius = opts.radius;
  if (opts.stroke) {
    r.strokes = [{ strokeColor: opts.stroke, strokeWidth: opts.strokeWidth || 1, strokeStyle: 'solid', strokeAlignment: 'center' }];
  }
  if (opts.shadow) {
    r.shadows = [{ style: 'drop-shadow', color: { color: '#000000', opacity: opts.shadowOpacity || 0.1 }, offsetX: 0, offsetY: opts.shadowY || 4, blur: opts.shadowBlur || 6, spread: 0 }];
  }
  if (opts.name) r.name = opts.name;
  return r;
}

// ─── HELPER: Text ───
function makeText(content, x, y, size, weight, color, opts) {
  opts = opts || {};
  var t = penpot.createText(content);
  if (!t) return null;
  t.growType = opts.growType || 'auto-width';
  t.fontId = 'gfont-inter';
  t.fontFamily = 'Inter';
  t.fontSize = String(size || 14);
  t.fontWeight = String(weight || 400);
  t.fills = [{ fillColor: color || C.gray900, fillOpacity: 1 }];
  t.x = x; t.y = y;
  if (opts.name) t.name = opts.name;
  return t;
}

// ─── HELPER: Add to board ───
function add(board, el) {
  if (el && board) board.appendChild(el);
  return el;
}

// ─── COMPONENT: Auth Card ───
// Centered card for Login, Register, Forgot Password, Email Verify
function makeAuthCard(board, bx, by, height) {
  var cardW = 480;
  var cx = bx + (BOARD_W - cardW) / 2;
  var cy = by + (BOARD_H - height) / 2;
  var card = makeRect(cx, cy, cardW, height, C.white, {
    name: 'auth-card', radius: 12,
    shadow: true, shadowY: 4, shadowBlur: 6,
    stroke: C.gray200
  });
  add(board, card);
  return { card: card, x: cx, y: cy, w: cardW, pad: 40, innerW: 400 };
}

// ─── COMPONENT: Logo ───
function makeLogo(board, cx, cy, cardW) {
  var logoW = 140, logoH = 40;
  var logoX = cx + (cardW - logoW) / 2;
  var logo = makeRect(logoX, cy, logoW, logoH, C.primary, { name: 'logo-bg', radius: 8 });
  add(board, logo);
  var logoT = makeText('CHATFLOW', logoX + 20, cy + 10, 18, 700, C.white, { name: 'logo-text' });
  add(board, logoT);
  return logoH;
}

// ─── COMPONENT: Input Field ───
function makeInputField(board, x, y, w, label, placeholder, opts) {
  opts = opts || {};
  var lbl = makeText(label, x, y, 14, 500, C.gray700, { name: (opts.prefix || '') + '-label' });
  add(board, lbl);
  var input = makeRect(x, y + 24, w, 44, C.white, {
    name: (opts.prefix || '') + '-input', radius: 8, stroke: C.gray300
  });
  add(board, input);
  var ph = makeText(placeholder, x + 16, y + 36, 14, 400, C.gray500, {
    name: (opts.prefix || '') + '-placeholder'
  });
  add(board, ph);
  return 24 + 44; // total height
}

// ─── COMPONENT: Button ───
function makeButton(board, x, y, w, text, variant, opts) {
  opts = opts || {};
  var btnFill = C.primary;
  var txtFill = C.white;
  var stroke = null;
  if (variant === 'secondary') { btnFill = C.white; txtFill = C.gray700; stroke = C.gray300; }
  if (variant === 'danger') { btnFill = C.red; txtFill = C.white; }
  if (variant === 'ghost') { btnFill = 'transparent'; txtFill = C.gray500; }

  var btn = makeRect(x, y, w, 44, btnFill, {
    name: opts.name || 'button', radius: 8, stroke: stroke
  });
  add(board, btn);
  var txt = makeText(text, x + (w / 2) - (text.length * 4), y + 13, 14, 600, txtFill, {
    name: (opts.name || 'button') + '-text'
  });
  add(board, txt);
  return 44;
}

// ─── COMPONENT: Divider with text ───
function makeDivider(board, x, y, w, text) {
  var textW = 50;
  var lineW = (w - textW - 32) / 2;
  add(board, makeRect(x, y + 8, lineW, 1, C.gray200, { name: 'divider-left' }));
  add(board, makeText(text || 'yoki', x + lineW + 16, y, 14, 400, C.gray500, { name: 'divider-text' }));
  add(board, makeRect(x + lineW + textW + 16, y + 8, lineW, 1, C.gray200, { name: 'divider-right' }));
  return 20;
}
