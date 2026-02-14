// CHATFLOW — 02-Login Page Plugin
// Penpot Plugin API v2 — Sandbox Safe
// Spec: penpot/pages/02-login.md
// Board: 1440x900, bg #F9FAFB

// ─── Double-run guard (sandbox-safe, no window) ───
;(function() {
'use strict';

console.log('=== CHATFLOW: 02-Login START ===');

// ─── DESIGN TOKENS ───
var C = {
  primary:   '#4F46E5',
  hover:     '#4338CA',
  white:     '#FFFFFF',
  bg:        '#F9FAFB',
  gray50:    '#F9FAFB',
  gray100:   '#F3F4F6',
  gray200:   '#E5E7EB',
  gray300:   '#D1D5DB',
  gray500:   '#6B7280',
  gray700:   '#374151',
  gray900:   '#111827',
  google:    '#4285F4',
  red:       '#EF4444',
  redBg:     '#FEF2F2'
};

var BOARD_W = 1440;
var BOARD_H = 900;

// ─── HELPERS ───

function makeRect(x, y, w, h, fill, opts) {
  opts = opts || {};
  var r = penpot.createRectangle();
  r.x = x;
  r.y = y;
  r.resize(w, h);
  r.fills = [{ fillColor: fill || C.white, fillOpacity: 1 }];
  if (opts.radius) r.borderRadius = opts.radius;
  if (opts.stroke) {
    r.strokes = [{
      strokeColor: opts.stroke,
      strokeWidth: opts.strokeWidth || 1,
      strokeStyle: 'solid',
      strokeAlignment: 'center'
    }];
  }
  if (opts.shadow) {
    r.shadows = [{
      style: 'drop-shadow',
      color: { color: '#000000', opacity: opts.shadowOpacity || 0.1 },
      offsetX: opts.shadowX || 0,
      offsetY: opts.shadowY || 4,
      blur: opts.shadowBlur || 6,
      spread: 0
    }];
  }
  if (opts.name) r.name = opts.name;
  return r;
}

function makeText(content, x, y, size, weight, color, opts) {
  opts = opts || {};
  var t = penpot.createText(content);
  if (!t) {
    console.warn('createText failed for: ' + content);
    return null;
  }
  // Penpot required order: growType → fontId → fontFamily → fontSize → fontWeight → fills → position
  t.growType = opts.growType || 'auto-width';
  t.fontId = 'gfont-inter';
  t.fontFamily = 'Inter';
  t.fontSize = String(size || 14);
  t.fontWeight = String(weight || 400);
  t.fills = [{ fillColor: color || C.gray900, fillOpacity: 1 }];
  t.x = x;
  t.y = y;
  if (opts.name) t.name = opts.name;
  return t;
}

function add(board, el) {
  if (el && board) {
    board.appendChild(el);
  }
  return el;
}

// ─── DRAW LOGIN PAGE ───

try {
  // Board
  var board = penpot.createBoard();
  board.name = '02-Login';
  board.x = 0;
  board.y = 0;
  board.resize(BOARD_W, BOARD_H);
  board.fills = [{ fillColor: C.bg, fillOpacity: 1 }];
  console.log('  Board created: 02-Login');

  // ── Card position (centered) ──
  var cardW = 480;
  var cardH = 560;
  var cx = (BOARD_W - cardW) / 2;  // 480
  var cy = (BOARD_H - cardH) / 2;  // 170
  var pad = 40;  // card inner padding
  var innerW = cardW - (pad * 2);  // 400

  // ── Auth Card ──
  var card = makeRect(cx, cy, cardW, cardH, C.white, {
    name: 'auth-card',
    radius: 12,
    shadow: true, shadowY: 4, shadowBlur: 6, shadowOpacity: 0.1,
    stroke: C.gray200
  });
  add(board, card);

  // ── Logo ──
  var logoW = 140;
  var logoH = 40;
  var logoX = cx + (cardW - logoW) / 2;
  var logoY = cy + pad;

  var logo = makeRect(logoX, logoY, logoW, logoH, C.primary, {
    name: 'logo-bg', radius: 8
  });
  add(board, logo);

  var logoText = makeText('CHATFLOW', logoX + 20, logoY + 10, 18, 700, C.white, {
    name: 'logo-text'
  });
  add(board, logoText);

  // ── Heading "Kirish" ──
  var headY = logoY + logoH + 24;
  var heading = makeText('Kirish', cx + 195, headY, 24, 600, C.gray900, {
    name: 'heading'
  });
  add(board, heading);

  // ── Google Button ──
  var gBtnY = headY + 40;
  var gBtn = makeRect(cx + pad, gBtnY, innerW, 44, C.white, {
    name: 'btn-google', radius: 8, stroke: C.gray300
  });
  add(board, gBtn);

  // Google icon (colored square as placeholder)
  var gIcon = makeRect(cx + pad + 16, gBtnY + 12, 20, 20, C.google, {
    name: 'google-icon', radius: 4
  });
  add(board, gIcon);

  var gText = makeText('Google orqali kirish', cx + pad + 48 + 40, gBtnY + 13, 14, 500, C.gray700, {
    name: 'google-text'
  });
  add(board, gText);

  // ── Divider "yoki" ──
  var divY = gBtnY + 44 + 20;
  var lineW = (innerW - 60) / 2;  // space for "yoki" text

  var divL = makeRect(cx + pad, divY + 8, lineW, 1, C.gray200, { name: 'divider-left' });
  add(board, divL);

  var divText = makeText('yoki', cx + pad + lineW + 16, divY, 14, 400, C.gray500, {
    name: 'divider-text'
  });
  add(board, divText);

  var divR = makeRect(cx + pad + lineW + 60, divY + 8, lineW, 1, C.gray200, { name: 'divider-right' });
  add(board, divR);

  // ── Email Field ──
  var emailY = divY + 30;

  var emailLabel = makeText('Email', cx + pad, emailY, 14, 500, C.gray700, {
    name: 'email-label'
  });
  add(board, emailLabel);

  var emailInput = makeRect(cx + pad, emailY + 24, innerW, 44, C.white, {
    name: 'email-input', radius: 8, stroke: C.gray300
  });
  add(board, emailInput);

  var emailPh = makeText('email@misol.com', cx + pad + 16, emailY + 36, 14, 400, C.gray500, {
    name: 'email-placeholder'
  });
  add(board, emailPh);

  // ── Password Field ──
  var passY = emailY + 24 + 44 + 16;

  var passLabel = makeText('Parol', cx + pad, passY, 14, 500, C.gray700, {
    name: 'password-label'
  });
  add(board, passLabel);

  var passInput = makeRect(cx + pad, passY + 24, innerW, 44, C.white, {
    name: 'password-input', radius: 8, stroke: C.gray300
  });
  add(board, passInput);

  var passPh = makeText('\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', cx + pad + 16, passY + 36, 14, 400, C.gray500, {
    name: 'password-placeholder'
  });
  add(board, passPh);

  // Eye icon (toggle)
  var eyeIcon = makeRect(cx + pad + innerW - 36, passY + 36, 20, 20, C.gray500, {
    name: 'eye-toggle', radius: 10
  });
  add(board, eyeIcon);

  // ── Forgot Password Link ──
  var forgotY = passY + 24 + 44 + 8;
  var forgot = makeText('Parolni unutdingizmi?', cx + pad + innerW - 160, forgotY, 14, 400, C.primary, {
    name: 'forgot-link'
  });
  add(board, forgot);

  // ── Submit Button ──
  var submitY = forgotY + 30;
  var submitBtn = makeRect(cx + pad, submitY, innerW, 44, C.primary, {
    name: 'btn-submit', radius: 8
  });
  add(board, submitBtn);

  var submitText = makeText('Kirish', cx + pad + (innerW / 2) - 20, submitY + 13, 14, 600, C.white, {
    name: 'btn-submit-text'
  });
  add(board, submitText);

  // ── Footer ──
  var footerY = submitY + 44 + 24;

  var footerText = makeText("Akkauntingiz yo'qmi?", cx + pad + 70, footerY, 14, 400, C.gray500, {
    name: 'footer-text'
  });
  add(board, footerText);

  var footerLink = makeText("Ro'yxatdan o'tish", cx + pad + 230, footerY, 14, 500, C.primary, {
    name: 'footer-link'
  });
  add(board, footerLink);

  console.log('=== CHATFLOW: 02-Login DONE ✅ ===');

} catch(e) {
  console.error('=== CHATFLOW ERROR: ' + e.message + ' ===');
  console.error(e.stack);
}

})();
