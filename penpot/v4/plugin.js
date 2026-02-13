// CHATFLOW Penpot Plugin v4 - DETAILED PAGE DRAWING
// Draws actual UI elements for Login → Dashboard flow
// Uses verified Penpot Plugin API: board.resize(), createText(str), fontSize as string

console.log('=== CHATFLOW Plugin v4 START ===');

// ─── DESIGN TOKENS ───
var C = {
  primary: '#4F46E5',
  primaryHover: '#4338CA',
  white: '#FFFFFF',
  bg: '#F9FAFB',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray500: '#6B7280',
  gray700: '#374151',
  gray900: '#111827',
  green: '#10B981',
  greenBg: '#D1FAE5',
  red: '#EF4444',
  yellow: '#F59E0B',
  yellowBg: '#FEF3C7',
  pink: '#EC4899',
  pinkBg: '#FCE7F3',
  indigoBg: '#EEF2FF'
};

var BOARD_W = 1440;
var BOARD_H = 900;
var GAP = 200;
var COLS = 5;

// ─── HELPERS ───
function makeRect(x, y, w, h, fill, radius, strokeColor, strokeWidth) {
  var r = penpot.createRectangle();
  r.x = x;
  r.y = y;
  r.resize(w, h);
  r.fills = [{ fillColor: fill || C.white, fillOpacity: 1 }];
  if (radius) r.borderRadius = radius;
  if (strokeColor) {
    r.strokes = [{ strokeColor: strokeColor, strokeWidth: strokeWidth || 1, strokeStyle: 'solid', strokeAlignment: 'center' }];
  }
  return r;
}

function makeText(content, x, y, size, weight, color) {
  var t = penpot.createText(content);
  if (!t) return null;
  t.growType = 'auto-width';
  t.fontId = 'gfont-inter';
  t.fontFamily = 'Inter';
  t.x = x;
  t.y = y;
  t.fontSize = String(size || 14);
  t.fontWeight = String(weight || 400);
  t.fills = [{ fillColor: color || C.gray900, fillOpacity: 1 }];
  return t;
}

function addToBoard(board, el) {
  if (el) {
    board.appendChild(el);
    return el;
  }
  return null;
}

// Card center position for auth pages
function cardX(bx) { return bx + (BOARD_W - 480) / 2; }

// ─── PAGE DRAWING FUNCTIONS ───

// ═══════════════════════════════════════
// PAGE: 02-Login
// ═══════════════════════════════════════
function drawLogin(board, bx, by) {
  var cx = cardX(bx);
  var cy = by + 170;

  // Card background
  var card = makeRect(cx, cy, 480, 560, C.white, 12);
  card.name = 'auth-card';
  card.shadows = [{ color: { r: 0, g: 0, b: 0, a: 0.1 }, offsetX: 0, offsetY: 4, blur: 6, spread: 0 }];
  addToBoard(board, card);

  // Logo placeholder
  var logo = makeRect(cx + 170, cy + 40, 140, 40, C.primary, 8);
  logo.name = 'logo';
  addToBoard(board, logo);
  var logoT = makeText('CHATFLOW', cx + 186, cy + 49, 18, 700, C.white);
  if (logoT) { logoT.name = 'logo-text'; addToBoard(board, logoT); }

  // Heading
  var heading = makeText('Kirish', cx + 200, cy + 100, 24, 600, C.gray900);
  if (heading) { heading.name = 'heading'; addToBoard(board, heading); }

  // Google button
  var gBtn = makeRect(cx + 40, cy + 148, 400, 44, C.white, 8, C.gray300, 1);
  gBtn.name = 'btn-google';
  addToBoard(board, gBtn);
  var gIcon = makeRect(cx + 56, cy + 160, 20, 20, '#4285F4', 4);
  gIcon.name = 'google-icon';
  addToBoard(board, gIcon);
  var gText = makeText('Google orqali kirish', cx + 130, cy + 159, 14, 500, C.gray700);
  if (gText) { gText.name = 'google-text'; addToBoard(board, gText); }

  // Divider
  var divL = makeRect(cx + 40, cy + 214, 164, 1, C.gray200);
  divL.name = 'divider-left';
  addToBoard(board, divL);
  var divText = makeText('yoki', cx + 217, cy + 206, 14, 400, C.gray500);
  if (divText) { divText.name = 'divider-text'; addToBoard(board, divText); }
  var divR = makeRect(cx + 276, cy + 214, 164, 1, C.gray200);
  divR.name = 'divider-right';
  addToBoard(board, divR);

  // Email field
  var emailLabel = makeText('Email', cx + 40, cy + 240, 14, 500, C.gray700);
  if (emailLabel) { emailLabel.name = 'email-label'; addToBoard(board, emailLabel); }
  var emailInput = makeRect(cx + 40, cy + 264, 400, 44, C.white, 8, C.gray300, 1);
  emailInput.name = 'email-input';
  addToBoard(board, emailInput);
  var emailPh = makeText('email@misol.com', cx + 56, cy + 276, 14, 400, C.gray500);
  if (emailPh) { emailPh.name = 'email-placeholder'; addToBoard(board, emailPh); }

  // Password field
  var passLabel = makeText('Parol', cx + 40, cy + 324, 14, 500, C.gray700);
  if (passLabel) { passLabel.name = 'password-label'; addToBoard(board, passLabel); }
  var passInput = makeRect(cx + 40, cy + 348, 400, 44, C.white, 8, C.gray300, 1);
  passInput.name = 'password-input';
  addToBoard(board, passInput);
  var passPh = makeText('\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022', cx + 56, cy + 360, 14, 400, C.gray500);
  if (passPh) { passPh.name = 'password-placeholder'; addToBoard(board, passPh); }
  // Eye icon
  var eyeIcon = makeRect(cx + 408, cy + 360, 20, 20, C.gray500, 4);
  eyeIcon.name = 'eye-toggle';
  addToBoard(board, eyeIcon);

  // Forgot link
  var forgot = makeText('Parolni unutdingizmi?', cx + 280, cy + 400, 14, 400, C.primary);
  if (forgot) { forgot.name = 'forgot-link'; addToBoard(board, forgot); }

  // Submit button
  var submitBtn = makeRect(cx + 40, cy + 430, 400, 44, C.primary, 8);
  submitBtn.name = 'btn-submit';
  addToBoard(board, submitBtn);
  var submitText = makeText('Kirish', cx + 200, cy + 442, 14, 600, C.white);
  if (submitText) { submitText.name = 'btn-submit-text'; addToBoard(board, submitText); }

  // Footer
  var footerText = makeText('Akkauntingiz yo\'qmi?', cx + 130, cy + 498, 14, 400, C.gray500);
  if (footerText) { footerText.name = 'footer-text'; addToBoard(board, footerText); }
  var footerLink = makeText('Ro\'yxatdan o\'tish', cx + 300, cy + 498, 14, 500, C.primary);
  if (footerLink) { footerLink.name = 'footer-link'; addToBoard(board, footerLink); }
}

// ═══════════════════════════════════════
// PAGE: 03-Register
// ═══════════════════════════════════════
function drawRegister(board, bx, by) {
  var cx = cardX(bx);
  var cy = by + 110;

  // Card
  var card = makeRect(cx, cy, 480, 680, C.white, 12);
  card.name = 'auth-card';
  addToBoard(board, card);

  // Logo
  var logo = makeRect(cx + 170, cy + 40, 140, 40, C.primary, 8);
  logo.name = 'logo';
  addToBoard(board, logo);
  var logoT = makeText('CHATFLOW', cx + 186, cy + 49, 18, 700, C.white);
  if (logoT) addToBoard(board, logoT);

  // Heading + subheading
  var h = makeText('Ro\'yxatdan o\'tish', cx + 150, cy + 100, 24, 600, C.gray900);
  if (h) addToBoard(board, h);
  var sub = makeText('CHATFLOW bilan mijozlar bilan muloqotni boshlang', cx + 80, cy + 132, 14, 400, C.gray500);
  if (sub) addToBoard(board, sub);

  // Google button
  var gBtn = makeRect(cx + 40, cy + 170, 400, 44, C.white, 8, C.gray300, 1);
  gBtn.name = 'btn-google';
  addToBoard(board, gBtn);
  var gText = makeText('Google orqali ro\'yxatdan o\'tish', cx + 110, cy + 181, 14, 500, C.gray700);
  if (gText) addToBoard(board, gText);

  // Divider
  var dL = makeRect(cx + 40, cy + 236, 164, 1, C.gray200);
  addToBoard(board, dL);
  var dT = makeText('yoki', cx + 217, cy + 228, 14, 400, C.gray500);
  if (dT) addToBoard(board, dT);
  var dR = makeRect(cx + 276, cy + 236, 164, 1, C.gray200);
  addToBoard(board, dR);

  // Email
  var eL = makeText('Email', cx + 40, cy + 258, 14, 500, C.gray700);
  if (eL) addToBoard(board, eL);
  var eI = makeRect(cx + 40, cy + 280, 400, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, eI);
  var ePh = makeText('email@misol.com', cx + 56, cy + 292, 14, 400, C.gray500);
  if (ePh) addToBoard(board, ePh);

  // Password
  var pL = makeText('Parol', cx + 40, cy + 338, 14, 500, C.gray700);
  if (pL) addToBoard(board, pL);
  var pI = makeRect(cx + 40, cy + 360, 400, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, pI);
  var pPh = makeText('Kamida 8 ta belgi', cx + 56, cy + 372, 14, 400, C.gray500);
  if (pPh) addToBoard(board, pPh);

  // Strength bar
  var sBg = makeRect(cx + 40, cy + 410, 400, 4, C.gray200, 2);
  addToBoard(board, sBg);
  var sFill = makeRect(cx + 40, cy + 410, 200, 4, C.yellow, 2);
  sFill.name = 'strength-fill';
  addToBoard(board, sFill);
  var sLabel = makeText('O\'rtacha', cx + 40, cy + 418, 12, 400, C.yellow);
  if (sLabel) addToBoard(board, sLabel);

  // Confirm password
  var cpL = makeText('Parolni tasdiqlash', cx + 40, cy + 440, 14, 500, C.gray700);
  if (cpL) addToBoard(board, cpL);
  var cpI = makeRect(cx + 40, cy + 462, 400, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, cpI);

  // Checkbox
  var cb = makeRect(cx + 40, cy + 522, 18, 18, C.white, 4, C.gray300, 1.5);
  cb.name = 'checkbox';
  addToBoard(board, cb);
  var cbText = makeText('Men Shartlari va Maxfiylik siyosatiga roziman', cx + 66, cy + 522, 14, 400, C.gray500);
  if (cbText) addToBoard(board, cbText);

  // Submit
  var btn = makeRect(cx + 40, cy + 560, 400, 44, C.primary, 8);
  addToBoard(board, btn);
  var btnT = makeText('Ro\'yxatdan o\'tish', cx + 155, cy + 572, 14, 600, C.white);
  if (btnT) addToBoard(board, btnT);

  // Footer
  var fT = makeText('Akkauntingiz bormi?', cx + 140, cy + 628, 14, 400, C.gray500);
  if (fT) addToBoard(board, fT);
  var fL = makeText('Kirish', cx + 310, cy + 628, 14, 500, C.primary);
  if (fL) addToBoard(board, fL);
}

// ═══════════════════════════════════════
// PAGE: 04-Email Verify
// ═══════════════════════════════════════
function drawEmailVerify(board, bx, by) {
  var cx = cardX(bx);
  var cy = by + 210;

  // Card
  var card = makeRect(cx, cy, 480, 480, C.white, 12);
  card.name = 'auth-card';
  addToBoard(board, card);

  // Icon circle
  var iconBg = makeRect(cx + 208, cy + 40, 64, 64, C.indigoBg, 32);
  iconBg.name = 'icon-circle';
  addToBoard(board, iconBg);
  var iconRect = makeRect(cx + 222, cy + 54, 36, 36, C.primary, 8);
  addToBoard(board, iconRect);
  var iconT = makeText('\u2709', cx + 228, cy + 58, 24, 400, C.white);
  if (iconT) addToBoard(board, iconT);

  // Heading
  var h = makeText('Emailni tasdiqlang', cx + 140, cy + 120, 24, 600, C.gray900);
  if (h) addToBoard(board, h);

  // Description
  var desc = makeText('Biz user@email.com emailga 6 xonali kod yubordik', cx + 60, cy + 156, 14, 400, C.gray500);
  if (desc) addToBoard(board, desc);

  // 6 code input boxes
  var codeY = cy + 200;
  for (var i = 0; i < 6; i++) {
    var boxX = cx + 68 + (i * 60);
    var cBox = makeRect(boxX, codeY, 48, 56, C.white, 8, C.gray300, 1.5);
    cBox.name = 'code-box-' + (i + 1);
    addToBoard(board, cBox);
    // Show digits in first 3
    if (i < 3) {
      var digits = ['5', '2', '8'];
      var dT = makeText(digits[i], boxX + 16, codeY + 12, 24, 600, C.gray900);
      if (dT) addToBoard(board, dT);
    }
  }

  // Verify button
  var vBtn = makeRect(cx + 40, cy + 290, 400, 44, C.primary, 8);
  addToBoard(board, vBtn);
  var vText = makeText('Tasdiqlash', cx + 180, cy + 302, 14, 600, C.white);
  if (vText) addToBoard(board, vText);

  // Resend
  var resend = makeText('Kodni qayta yuborish 0:45', cx + 140, cy + 358, 14, 400, C.gray500);
  if (resend) addToBoard(board, resend);

  // Change email
  var changeEmail = makeText('Emailni o\'zgartirish', cx + 170, cy + 386, 14, 400, C.gray500);
  if (changeEmail) addToBoard(board, changeEmail);
}

// ═══════════════════════════════════════
// PAGE: 05-Forgot Password
// ═══════════════════════════════════════
function drawForgotPassword(board, bx, by) {
  var cx = cardX(bx);
  var cy = by + 210;

  // Card
  var card = makeRect(cx, cy, 480, 480, C.white, 12);
  card.name = 'auth-card';
  addToBoard(board, card);

  // Back link
  var backArrow = makeText('\u2190 Orqaga', cx + 40, cy + 30, 14, 500, C.gray500);
  if (backArrow) { backArrow.name = 'back-link'; addToBoard(board, backArrow); }

  // Icon circle
  var iconBg = makeRect(cx + 208, cy + 70, 64, 64, C.yellowBg, 32);
  addToBoard(board, iconBg);
  var iconRect = makeRect(cx + 222, cy + 84, 36, 36, C.yellow, 8);
  addToBoard(board, iconRect);

  // Heading
  var h = makeText('Parolni tiklash', cx + 150, cy + 155, 24, 600, C.gray900);
  if (h) addToBoard(board, h);

  // Description
  var desc = makeText('Email manzilingizni kiriting. Biz sizga', cx + 75, cy + 192, 14, 400, C.gray500);
  if (desc) addToBoard(board, desc);
  var desc2 = makeText('parolni tiklash havolasini yuboramiz.', cx + 80, cy + 212, 14, 400, C.gray500);
  if (desc2) addToBoard(board, desc2);

  // Email field
  var eL = makeText('Email', cx + 40, cy + 256, 14, 500, C.gray700);
  if (eL) addToBoard(board, eL);
  var eI = makeRect(cx + 40, cy + 278, 400, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, eI);
  var ePh = makeText('email@misol.com', cx + 56, cy + 290, 14, 400, C.gray500);
  if (ePh) addToBoard(board, ePh);

  // Submit
  var btn = makeRect(cx + 40, cy + 342, 400, 44, C.primary, 8);
  addToBoard(board, btn);
  var btnT = makeText('Havola yuborish', cx + 168, cy + 354, 14, 600, C.white);
  if (btnT) addToBoard(board, btnT);

  // Footer
  var fT = makeText('Parolingiz esingizdami?', cx + 120, cy + 410, 14, 400, C.gray500);
  if (fT) addToBoard(board, fT);
  var fL = makeText('Kirish', cx + 310, cy + 410, 14, 500, C.primary);
  if (fL) addToBoard(board, fL);
}

// ═══════════════════════════════════════
// PAGE: 06-Welcome
// ═══════════════════════════════════════
function drawWelcome(board, bx, by) {
  var cx = bx + (BOARD_W - 600) / 2;
  var cy = by + 130;
  var cardW = 600;

  // Card
  var card = makeRect(cx, cy, cardW, 640, C.white, 16);
  card.name = 'welcome-card';
  addToBoard(board, card);

  // Celebration icon
  var iconBg = makeRect(cx + 260, cy + 40, 80, 80, C.primary, 40);
  addToBoard(board, iconBg);
  var iconT = makeText('\uD83C\uDF89', cx + 284, cy + 56, 36, 400, C.white);
  if (iconT) addToBoard(board, iconT);

  // Heading
  var h = makeText('Xush kelibsiz, Aziz!', cx + 160, cy + 140, 28, 700, C.gray900);
  if (h) addToBoard(board, h);

  // Subheading
  var sub = makeText('Akkauntingiz muvaffaqiyatli yaratildi', cx + 130, cy + 178, 16, 400, C.gray500);
  if (sub) addToBoard(board, sub);

  // Steps preview bg
  var stepsBg = makeRect(cx + 48, cy + 218, cardW - 96, 220, C.bg, 12);
  addToBoard(board, stepsBg);

  // Step rows
  var steps = [
    { icon: C.indigoBg, color: C.primary, title: 'Workspace yaratish', desc: 'Kompaniya ma\'lumotlari', time: '~1 min' },
    { icon: C.yellowBg, color: C.yellow, title: 'Widget o\'rnatish', desc: 'Saytga chat qo\'shish', time: '~2 min' },
    { icon: C.greenBg, color: C.green, title: 'Jamoani taklif qilish', desc: 'Agentlarni qo\'shish', time: '~1 min' },
    { icon: C.pinkBg, color: C.pink, title: 'Avtomatlashtirishni sozlash', desc: 'Auto-javoblar', time: '~2 min' }
  ];

  for (var i = 0; i < steps.length; i++) {
    var sy = cy + 232 + (i * 52);
    var s = steps[i];
    // Icon square
    var sIcon = makeRect(cx + 68, sy, 32, 32, s.icon, 8);
    addToBoard(board, sIcon);
    var sIconInner = makeRect(cx + 76, sy + 8, 16, 16, s.color, 4);
    addToBoard(board, sIconInner);
    // Title
    var sTitle = makeText(s.title, cx + 112, sy + 2, 14, 600, C.gray900);
    if (sTitle) addToBoard(board, sTitle);
    // Desc
    var sDesc = makeText(s.desc, cx + 112, sy + 20, 13, 400, C.gray500);
    if (sDesc) addToBoard(board, sDesc);
    // Time
    var sTime = makeText(s.time, cx + 460, sy + 8, 12, 400, '#9CA3AF');
    if (sTime) addToBoard(board, sTime);
  }

  // Total time
  var totalT = makeText('Taxminan 6 daqiqa', cx + 220, cy + 456, 14, 400, C.gray500);
  if (totalT) addToBoard(board, totalT);

  // Start button (larger, 56h)
  var startBtn = makeRect(cx + 48, cy + 490, cardW - 96, 56, C.primary, 12);
  addToBoard(board, startBtn);
  var startT = makeText('Boshlash \u2192', cx + 240, cy + 506, 16, 600, C.white);
  if (startT) addToBoard(board, startT);

  // Skip
  var skip = makeText('Keyinroq sozlash', cx + 230, cy + 564, 14, 400, C.gray500);
  if (skip) addToBoard(board, skip);
}

// ═══════════════════════════════════════
// PAGE: 07-Onboarding Step 1
// ═══════════════════════════════════════
function drawOnboarding1(board, bx, by) {
  var cx = bx + (BOARD_W - 560) / 2;
  var cy = by + 110;

  // Progress indicator (4 dots)
  var dotXStart = bx + (BOARD_W - 280) / 2;
  // Dot 1 active
  var d1 = makeRect(dotXStart, by + 40, 24, 24, C.primary, 12);
  addToBoard(board, d1);
  var d1t = makeText('1', dotXStart + 7, by + 44, 12, 700, C.white);
  if (d1t) addToBoard(board, d1t);
  // Connector 1
  var c1 = makeRect(dotXStart + 32, by + 51, 48, 2, C.primary);
  addToBoard(board, c1);
  // Dots 2-4 upcoming
  for (var di = 1; di < 4; di++) {
    var dx = dotXStart + di * 80;
    var dotBg = makeRect(dx, by + 40, 24, 24, C.gray200, 12);
    addToBoard(board, dotBg);
    var dotNum = makeText(String(di + 1), dx + 7, by + 44, 12, 700, '#9CA3AF');
    if (dotNum) addToBoard(board, dotNum);
    if (di < 3) {
      var connUp = makeRect(dx + 32, by + 51, 48, 2, C.gray200);
      addToBoard(board, connUp);
    }
  }

  // Card
  var card = makeRect(cx, cy, 560, 500, C.white, 16);
  card.name = 'onboarding-card';
  addToBoard(board, card);

  // Step label
  var stepL = makeText('1-qadam / 4', cx + 40, cy + 30, 13, 500, C.primary);
  if (stepL) addToBoard(board, stepL);

  // Heading
  var h = makeText('Workspace yarating', cx + 40, cy + 55, 24, 600, C.gray900);
  if (h) addToBoard(board, h);
  var desc = makeText('Kompaniyangiz uchun ish muhitini sozlang', cx + 40, cy + 88, 14, 400, C.gray500);
  if (desc) addToBoard(board, desc);

  // Workspace name
  var wnL = makeText('Workspace nomi *', cx + 40, cy + 130, 14, 500, C.gray700);
  if (wnL) addToBoard(board, wnL);
  var wnI = makeRect(cx + 40, cy + 152, 480, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, wnI);
  var wnPh = makeText('Masalan: ChatFlow Team', cx + 56, cy + 164, 14, 400, C.gray500);
  if (wnPh) addToBoard(board, wnPh);

  // Website
  var wsL = makeText('Kompaniya veb-sayti', cx + 40, cy + 216, 14, 500, C.gray700);
  if (wsL) addToBoard(board, wsL);
  // Prefix
  var wsPrefix = makeRect(cx + 40, cy + 238, 76, 44, C.gray100, 0, C.gray300, 1);
  addToBoard(board, wsPrefix);
  var wsPrefT = makeText('https://', cx + 48, cy + 250, 14, 400, C.gray500);
  if (wsPrefT) addToBoard(board, wsPrefT);
  var wsI = makeRect(cx + 116, cy + 238, 404, 44, C.white, 0, C.gray300, 1);
  addToBoard(board, wsI);
  var wsPh = makeText('your-company.com', cx + 132, cy + 250, 14, 400, C.gray500);
  if (wsPh) addToBoard(board, wsPh);

  // Team size
  var tsL = makeText('Jamoa hajmi', cx + 40, cy + 302, 14, 500, C.gray700);
  if (tsL) addToBoard(board, tsL);
  var tsI = makeRect(cx + 40, cy + 324, 480, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, tsI);
  var tsPh = makeText('1-5', cx + 56, cy + 336, 14, 400, C.gray700);
  if (tsPh) addToBoard(board, tsPh);
  var tsChev = makeText('\u25BC', cx + 496, cy + 336, 12, 400, C.gray500);
  if (tsChev) addToBoard(board, tsChev);

  // Buttons
  var skipBtn = makeRect(cx + 40, cy + 400, 230, 44, C.white, 8, C.gray300, 1);
  addToBoard(board, skipBtn);
  var skipT = makeText('O\'tkazib yuborish', cx + 90, cy + 412, 14, 500, C.gray700);
  if (skipT) addToBoard(board, skipT);
  var contBtn = makeRect(cx + 290, cy + 400, 230, 44, C.primary, 8);
  addToBoard(board, contBtn);
  var contT = makeText('Davom etish \u2192', cx + 346, cy + 412, 14, 600, C.white);
  if (contT) addToBoard(board, contT);

  // Help
  var helpT = makeText('Yordam kerakmi? Qo\'llanmani ko\'ring', cx + 150, cy + 462, 13, 400, C.gray500);
  if (helpT) addToBoard(board, helpT);
}

// ═══════════════════════════════════════
// PAGE: 11-Dashboard
// ═══════════════════════════════════════
function drawDashboard(board, bx, by) {

  // === HEADER (64px) ===
  var header = makeRect(bx, by, BOARD_W, 64, C.white, 0, C.gray200, 1);
  header.name = 'header';
  addToBoard(board, header);

  // Logo
  var logoT = makeText('CHATFLOW', bx + 16, by + 18, 18, 700, C.primary);
  if (logoT) { logoT.name = 'logo'; addToBoard(board, logoT); }

  // Search
  var search = makeRect(bx + 152, by + 12, 320, 40, C.gray100, 8);
  search.name = 'search-bar';
  addToBoard(board, search);
  var searchPh = makeText('Qidirish... (Ctrl+K)', bx + 184, by + 22, 14, 400, '#9CA3AF');
  if (searchPh) addToBoard(board, searchPh);
  // Search icon placeholder
  var searchIcon = makeRect(bx + 160, by + 22, 16, 16, '#9CA3AF', 4);
  addToBoard(board, searchIcon);

  // Status
  var statusDot = makeRect(bx + 1100, by + 28, 8, 8, C.green, 4);
  addToBoard(board, statusDot);
  var statusT = makeText('Online', bx + 1114, by + 22, 13, 500, C.green);
  if (statusT) addToBoard(board, statusT);

  // Bell
  var bell = makeRect(bx + 1340, by + 14, 36, 36, C.white, 8);
  bell.name = 'bell';
  addToBoard(board, bell);
  var bellIcon = makeText('\uD83D\uDD14', bx + 1346, by + 18, 20, 400, C.gray500);
  if (bellIcon) addToBoard(board, bellIcon);
  // Badge
  var badge = makeRect(bx + 1360, by + 10, 18, 18, C.red, 9);
  addToBoard(board, badge);
  var badgeT = makeText('3', bx + 1365, by + 12, 10, 700, C.white);
  if (badgeT) addToBoard(board, badgeT);

  // Avatar
  var avatar = makeRect(bx + 1392, by + 16, 32, 32, C.primary, 16);
  avatar.name = 'avatar';
  addToBoard(board, avatar);
  var avatarT = makeText('AK', bx + 1399, by + 23, 13, 700, C.white);
  if (avatarT) addToBoard(board, avatarT);

  // === SIDEBAR (240px) ===
  var sidebar = makeRect(bx, by + 64, 240, BOARD_H - 64, C.white, 0, C.gray200, 1);
  sidebar.name = 'sidebar';
  addToBoard(board, sidebar);

  // Section label
  var secL = makeText('ASOSIY', bx + 20, by + 80, 11, 600, '#9CA3AF');
  if (secL) addToBoard(board, secL);

  // Menu items
  var menuItems = [
    { icon: '\u25A3', name: 'Dashboard', active: true, badge: null },
    { icon: '\u2709', name: 'Inbox', active: false, badge: '12' },
    { icon: '\u263A', name: 'Kontaktlar', active: false, badge: null },
    { icon: '\u25CE', name: 'Tashrif buyuruvchilar', active: false, badge: null }
  ];

  for (var mi = 0; mi < menuItems.length; mi++) {
    var item = menuItems[mi];
    var my = by + 100 + (mi * 42);

    if (item.active) {
      var activeBg = makeRect(bx + 12, my, 216, 40, C.indigoBg, 8);
      addToBoard(board, activeBg);
    }

    var mIcon = makeText(item.icon, bx + 24, my + 10, 18, 400, item.active ? C.primary : C.gray500);
    if (mIcon) addToBoard(board, mIcon);
    var mText = makeText(item.name, bx + 52, my + 10, 14, item.active ? 600 : 400, item.active ? C.primary : C.gray700);
    if (mText) addToBoard(board, mText);

    if (item.badge) {
      var mBadge = makeRect(bx + 200, my + 10, 28, 20, C.red, 10);
      addToBoard(board, mBadge);
      var mBadgeT = makeText(item.badge, bx + 207, my + 12, 12, 700, C.white);
      if (mBadgeT) addToBoard(board, mBadgeT);
    }
  }

  // Divider
  var div1 = makeRect(bx + 20, by + 272, 200, 1, C.gray200);
  addToBoard(board, div1);

  // Section 2
  var sec2 = makeText('VOSITALAR', bx + 20, by + 286, 11, 600, '#9CA3AF');
  if (sec2) addToBoard(board, sec2);

  var tools = [
    { icon: '\u26A1', name: 'Avtomatlashtirish' },
    { icon: '\u2261', name: 'Bilim bazasi' },
    { icon: '\u25AC', name: 'Jamoa chat' },
    { icon: '\u2197', name: 'Analitika' }
  ];
  for (var ti = 0; ti < tools.length; ti++) {
    var ty = by + 306 + (ti * 42);
    var tIcon = makeText(tools[ti].icon, bx + 24, ty + 10, 18, 400, C.gray500);
    if (tIcon) addToBoard(board, tIcon);
    var tText = makeText(tools[ti].name, bx + 52, ty + 10, 14, 400, C.gray700);
    if (tText) addToBoard(board, tText);
  }

  // Divider
  var div2 = makeRect(bx + 20, by + 478, 200, 1, C.gray200);
  addToBoard(board, div2);

  // Section 3
  var sec3 = makeText('BOSHQARISH', bx + 20, by + 492, 11, 600, '#9CA3AF');
  if (sec3) addToBoard(board, sec3);

  var manage = [
    { icon: '\u263A', name: 'Jamoa' },
    { icon: '\u2699', name: 'Sozlamalar' },
    { icon: '\u2B50', name: 'Tariflar' }
  ];
  for (var gi = 0; gi < manage.length; gi++) {
    var gy = by + 512 + (gi * 42);
    var gIcon = makeText(manage[gi].icon, bx + 24, gy + 10, 18, 400, C.gray500);
    if (gIcon) addToBoard(board, gIcon);
    var gText = makeText(manage[gi].name, bx + 52, gy + 10, 14, 400, C.gray700);
    if (gText) addToBoard(board, gText);
  }
  // PRO badge on Tariflar
  var proBadge = makeRect(bx + 150, by + 606, 36, 20, C.yellowBg, 4);
  addToBoard(board, proBadge);
  var proT = makeText('PRO', bx + 155, by + 608, 11, 700, C.yellow);
  if (proT) addToBoard(board, proT);

  // Collapse
  var collapseT = makeText('\u00AB Yig\'ish', bx + 20, by + 850, 13, 400, C.gray500);
  if (collapseT) addToBoard(board, collapseT);

  // === CONTENT AREA ===
  var contentBg = makeRect(bx + 240, by + 64, BOARD_W - 240, BOARD_H - 64, C.bg);
  contentBg.name = 'content-bg';
  addToBoard(board, contentBg);

  // Page title
  var pageTitle = makeText('Dashboard', bx + 264, by + 88, 24, 600, C.gray900);
  if (pageTitle) addToBoard(board, pageTitle);
  var pageSub = makeText('Bugungi umumiy ko\'rinish', bx + 264, by + 118, 14, 400, C.gray500);
  if (pageSub) addToBoard(board, pageSub);

  // Date filters
  var filterLabels = ['Bugun', 'Hafta', 'Oy'];
  for (var fi = 0; fi < filterLabels.length; fi++) {
    var fx = bx + 1200 + (fi * 70);
    var fBg = makeRect(fx, by + 88, 60, 32, fi === 0 ? C.primary : C.white, 6, fi === 0 ? null : C.gray300, fi === 0 ? 0 : 1);
    addToBoard(board, fBg);
    var fT = makeText(filterLabels[fi], fx + 10, by + 94, 13, 500, fi === 0 ? C.white : C.gray700);
    if (fT) addToBoard(board, fT);
  }

  // === METRIC CARDS (4) ===
  var metrics = [
    { icon: C.indigoBg, iconC: C.primary, label: 'Jami chatlar', value: '1,247', trend: '\u2191 12%', trendC: C.green },
    { icon: C.greenBg, iconC: C.green, label: 'Faol chatlar', value: '23', trend: '\u2191 8%', trendC: C.green },
    { icon: C.yellowBg, iconC: C.yellow, label: 'O\'rtacha javob', value: '2m 34s', trend: '\u2193 15%', trendC: C.green },
    { icon: C.pinkBg, iconC: C.pink, label: 'Mijoz qoniqishi', value: '4.8/5', trend: '\u2191 3%', trendC: C.green }
  ];

  var metricW = 267;
  for (var mc = 0; mc < metrics.length; mc++) {
    var mx = bx + 264 + (mc * (metricW + 16));
    var mCard = makeRect(mx, by + 150, metricW, 120, C.white, 12, C.gray200, 1);
    addToBoard(board, mCard);
    // Icon
    var mIconBg = makeRect(mx + 20, by + 170, 40, 40, metrics[mc].icon, 10);
    addToBoard(board, mIconBg);
    var mIconIn = makeRect(mx + 32, by + 182, 16, 16, metrics[mc].iconC, 4);
    addToBoard(board, mIconIn);
    // Label
    var mLabel = makeText(metrics[mc].label, mx + 76, by + 166, 13, 400, C.gray500);
    if (mLabel) addToBoard(board, mLabel);
    // Value
    var mVal = makeText(metrics[mc].value, mx + 76, by + 188, 28, 700, C.gray900);
    if (mVal) addToBoard(board, mVal);
    // Trend
    var mTrend = makeText(metrics[mc].trend, mx + 76, by + 224, 13, 600, metrics[mc].trendC);
    if (mTrend) addToBoard(board, mTrend);
  }

  // === CHARTS ROW ===
  var chartW = 576;
  var chartH = 260;

  // Activity chart
  var actChart = makeRect(bx + 264, by + 290, chartW, chartH, C.white, 12, C.gray200, 1);
  actChart.name = 'chart-activity';
  addToBoard(board, actChart);
  var actTitle = makeText('Chat faoliyati', bx + 284, by + 308, 16, 600, C.gray900);
  if (actTitle) addToBoard(board, actTitle);
  var actSub = makeText('Oxirgi 7 kun', bx + 284, by + 330, 13, 400, C.gray500);
  if (actSub) addToBoard(board, actSub);
  // Chart area placeholder with gradient line
  var chartArea = makeRect(bx + 284, by + 356, chartW - 40, chartH - 86, C.gray50, 8);
  addToBoard(board, chartArea);
  // Simple line representation
  var linePoints = [60, 45, 70, 35, 80, 55, 65]; // % of height
  for (var lp = 0; lp < linePoints.length; lp++) {
    var lpx = bx + 310 + (lp * 72);
    var lpy = by + 500 - Math.round(linePoints[lp] * 1.1);
    var dot = makeRect(lpx, lpy, 8, 8, C.primary, 4);
    addToBoard(board, dot);
    // X labels
    var days = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
    var dayT = makeText(days[lp], lpx - 4, by + 520, 11, 400, '#9CA3AF');
    if (dayT) addToBoard(board, dayT);
  }

  // Channels chart
  var chChart = makeRect(bx + 856, by + 290, chartW, chartH, C.white, 12, C.gray200, 1);
  chChart.name = 'chart-channels';
  addToBoard(board, chChart);
  var chTitle = makeText('Kanallar bo\'yicha', bx + 876, by + 308, 16, 600, C.gray900);
  if (chTitle) addToBoard(board, chTitle);
  // Donut placeholder
  var donut = makeRect(bx + 920, by + 360, 120, 120, C.primary, 60);
  addToBoard(board, donut);
  var donutInner = makeRect(bx + 940, by + 380, 80, 80, C.white, 40);
  addToBoard(board, donutInner);
  var donutVal = makeText('247', bx + 956, by + 404, 24, 700, C.gray900);
  if (donutVal) addToBoard(board, donutVal);
  var donutLabel = makeText('bugun', bx + 958, by + 430, 12, 400, C.gray500);
  if (donutLabel) addToBoard(board, donutLabel);
  // Legend
  var channels = [
    { color: C.primary, name: 'Web chat', pct: '55%' },
    { color: '#3B82F6', name: 'Telegram', pct: '25%' },
    { color: C.pink, name: 'Instagram', pct: '12%' },
    { color: C.yellow, name: 'Email', pct: '8%' }
  ];
  for (var ci = 0; ci < channels.length; ci++) {
    var cly = by + 360 + (ci * 28);
    var clDot = makeRect(bx + 1100, cly, 12, 12, channels[ci].color, 3);
    addToBoard(board, clDot);
    var clName = makeText(channels[ci].name, bx + 1120, cly - 2, 13, 400, C.gray700);
    if (clName) addToBoard(board, clName);
    var clPct = makeText(channels[ci].pct, bx + 1200, cly - 2, 13, 600, C.gray900);
    if (clPct) addToBoard(board, clPct);
  }

  // === BOTTOM ROW ===
  // Recent chats
  var recentCard = makeRect(bx + 264, by + 570, chartW, 300, C.white, 12, C.gray200, 1);
  recentCard.name = 'recent-chats';
  addToBoard(board, recentCard);
  var rcTitle = makeText('Oxirgi chatlar', bx + 284, by + 588, 16, 600, C.gray900);
  if (rcTitle) addToBoard(board, rcTitle);
  var rcLink = makeText('Hammasini ko\'rish \u2192', bx + 740, by + 590, 13, 500, C.primary);
  if (rcLink) addToBoard(board, rcLink);

  var chats = [
    { name: 'Ali Valiyev', msg: 'Salom, buyurtma haqida...', time: '2 min', color: C.green },
    { name: 'Dilnoza K.', msg: 'To\'lov qachon amalga...', time: '5 min', color: C.green },
    { name: 'Bobur S.', msg: 'Widget sozlamalari...', time: '12 min', color: C.yellow },
    { name: 'Madina R.', msg: 'Yangi tarifga o\'tmoqchi...', time: '1 soat', color: C.gray300 }
  ];
  for (var chi = 0; chi < chats.length; chi++) {
    var chy = by + 620 + (chi * 56);
    // Avatar
    var chAvatar = makeRect(bx + 284, chy, 36, 36, C.primary, 18);
    addToBoard(board, chAvatar);
    var chInitial = makeText(chats[chi].name.charAt(0), bx + 296, chy + 8, 14, 700, C.white);
    if (chInitial) addToBoard(board, chInitial);
    // Name
    var chName = makeText(chats[chi].name, bx + 332, chy, 14, 500, C.gray900);
    if (chName) addToBoard(board, chName);
    // Message
    var chMsg = makeText(chats[chi].msg, bx + 332, chy + 20, 13, 400, C.gray500);
    if (chMsg) addToBoard(board, chMsg);
    // Time
    var chTime = makeText(chats[chi].time, bx + 770, chy + 6, 12, 400, '#9CA3AF');
    if (chTime) addToBoard(board, chTime);
    // Status dot
    var chDot = makeRect(bx + 818, chy + 10, 8, 8, chats[chi].color, 4);
    addToBoard(board, chDot);
    // Divider
    if (chi < 3) {
      var chDiv = makeRect(bx + 332, chy + 48, 486, 1, C.gray100);
      addToBoard(board, chDiv);
    }
  }

  // Agent status
  var agentCard = makeRect(bx + 856, by + 570, chartW, 300, C.white, 12, C.gray200, 1);
  agentCard.name = 'agent-status';
  addToBoard(board, agentCard);
  var agTitle = makeText('Agent holati', bx + 876, by + 588, 16, 600, C.gray900);
  if (agTitle) addToBoard(board, agTitle);

  var agents = [
    { name: 'Aziz K.', role: 'Admin', chats: '5 chat', status: 'Online', statusBg: C.greenBg, statusC: C.green },
    { name: 'Sanjar T.', role: 'Agent', chats: '3 chat', status: 'Online', statusBg: C.greenBg, statusC: C.green },
    { name: 'Dilnoza M.', role: 'Agent', chats: '0', status: 'Tashqarida', statusBg: C.yellowBg, statusC: C.yellow }
  ];
  for (var ai = 0; ai < agents.length; ai++) {
    var ay = by + 620 + (ai * 56);
    // Avatar
    var aAvatar = makeRect(bx + 876, ay, 32, 32, C.primary, 16);
    addToBoard(board, aAvatar);
    // Ring
    var aRing = makeRect(bx + 900, ay + 22, 10, 10, agents[ai].statusC, 5);
    addToBoard(board, aRing);
    // Name
    var aName = makeText(agents[ai].name, bx + 920, ay, 14, 500, C.gray900);
    if (aName) addToBoard(board, aName);
    var aRole = makeText(agents[ai].role, bx + 920, ay + 20, 12, 400, C.gray500);
    if (aRole) addToBoard(board, aRole);
    // Active chats
    var aChats = makeText(agents[ai].chats, bx + 1100, ay + 6, 13, 500, C.primary);
    if (aChats) addToBoard(board, aChats);
    // Status badge
    var sBadge = makeRect(bx + 1200, ay + 4, 80, 24, agents[ai].statusBg, 12);
    addToBoard(board, sBadge);
    var sBadgeT = makeText(agents[ai].status, bx + 1210, ay + 8, 12, 600, agents[ai].statusC);
    if (sBadgeT) addToBoard(board, sBadgeT);
  }
}


// ═══════════════════════════════════════
// MAIN: Draw all detailed pages
// ═══════════════════════════════════════

// These pages get detailed drawings (mapped to existing board positions)
// Place detailed boards BELOW all 26 original boards (originals end ~y:6400)
var DETAIL_START_Y = 7200;

var DETAILED_PAGES = [
  { name: '02-Login',            col: 0, row: 0, draw: drawLogin },
  { name: '03-Register',         col: 1, row: 0, draw: drawRegister },
  { name: '04-Email-Verify',     col: 2, row: 0, draw: drawEmailVerify },
  { name: '05-Forgot-Password',  col: 3, row: 0, draw: drawForgotPassword },
  { name: '06-Welcome',          col: 4, row: 0, draw: drawWelcome },
  { name: '07-Onboarding-1',     col: 0, row: 1, draw: drawOnboarding1 },
  { name: '11-Dashboard',        col: 1, row: 1, draw: drawDashboard }
];

var created = 0;

for (var i = 0; i < DETAILED_PAGES.length; i++) {
  var pg = DETAILED_PAGES[i];
  var bx = pg.col * (BOARD_W + GAP);
  var by = pg.row * (BOARD_H + GAP);

  try {
    console.log('[' + (i + 1) + '/' + DETAILED_PAGES.length + '] Drawing: ' + pg.name);

    // Create board — placed in separate area below originals
    var board = penpot.createBoard();
    board.name = pg.name + ' [DETAILED]';
    var boardX = bx;
    var boardY = DETAIL_START_Y + pg.row * (BOARD_H + GAP);
    board.x = boardX;
    board.y = boardY;
    board.resize(BOARD_W, BOARD_H);
    board.fills = [{ fillColor: C.bg, fillOpacity: 1 }];

    // Draw page content
    pg.draw(board, boardX, boardY);

    created++;
    console.log('  OK: ' + pg.name);
  } catch (e) {
    console.error('  ERROR ' + pg.name + ': ' + e.message);
  }
}

console.log('=== DONE: ' + created + '/' + DETAILED_PAGES.length + ' detailed pages drawn ===');
