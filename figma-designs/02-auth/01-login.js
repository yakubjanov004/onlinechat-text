// CHATFLOW Login Page - Figma Design
var PRIMARY = {r: 79/255, g: 70/255, b: 229/255};
var BG = {r: 249/255, g: 250/255, b: 251/255};
var WHITE = {r: 1, g: 1, b: 1};
var GRAY900 = {r: 17/255, g: 24/255, b: 39/255};
var GRAY700 = {r: 55/255, g: 65/255, b: 81/255};
var GRAY500 = {r: 107/255, g: 114/255, b: 128/255};
var GRAY300 = {r: 209/255, g: 213/255, b: 219/255};
var GRAY200 = {r: 229/255, g: 231/255, b: 235/255};

await figma.loadFontAsync({family: "Inter", style: "Regular"});
await figma.loadFontAsync({family: "Inter", style: "Medium"});
await figma.loadFontAsync({family: "Inter", style: "Semi Bold"});
await figma.loadFontAsync({family: "Inter", style: "Bold"});

// Screen
var screen = figma.createFrame();
screen.name = "01 - Login";
screen.resize(1440, 900);
screen.fills = [{type: 'SOLID', color: BG}];
screen.layoutMode = "VERTICAL";
screen.primaryAxisAlignItems = "CENTER";
screen.counterAxisAlignItems = "CENTER";

// Card
var card = figma.createFrame();
card.name = "Card";
card.fills = [{type: 'SOLID', color: WHITE}];
card.strokes = [{type: 'SOLID', color: GRAY200}];
card.strokeWeight = 1;
card.cornerRadius = 12;
card.effects = [{type: 'DROP_SHADOW', color: {r: 17/255, g: 24/255, b: 39/255, a: 0.08}, offset: {x: 0, y: 10}, radius: 20, visible: true, blendMode: 'NORMAL'}];
card.layoutMode = "VERTICAL";
card.counterAxisAlignItems = "CENTER";
card.paddingTop = 40;
card.paddingBottom = 40;
card.paddingLeft = 40;
card.paddingRight = 40;
card.itemSpacing = 0;
card.primaryAxisSizingMode = "AUTO";
card.counterAxisSizingMode = "FIXED";
card.resize(480, 100);
screen.appendChild(card);

// Helper: create spacer
function spacer(h) {
  var s = figma.createFrame();
  s.name = "Spacer";
  s.resize(400, h);
  s.fills = [];
  card.appendChild(s);
  s.layoutSizingHorizontal = "FILL";
}

// Logo
var logo = figma.createFrame();
logo.name = "Logo";
logo.resize(140, 40);
logo.fills = [{type: 'SOLID', color: PRIMARY}];
logo.cornerRadius = 8;
logo.layoutMode = "HORIZONTAL";
logo.primaryAxisAlignItems = "CENTER";
logo.counterAxisAlignItems = "CENTER";
var logoText = figma.createText();
logoText.fontName = {family: "Inter", style: "Bold"};
logoText.characters = "CHATFLOW";
logoText.fontSize = 14;
logoText.letterSpacing = {value: 0.4, unit: "PIXELS"};
logoText.fills = [{type: 'SOLID', color: WHITE}];
logo.appendChild(logoText);
card.appendChild(logo);

spacer(24);

// Title
var title = figma.createText();
title.name = "Title";
title.fontName = {family: "Inter", style: "Semi Bold"};
title.characters = "Kirish";
title.fontSize = 24;
title.fills = [{type: 'SOLID', color: GRAY900}];
title.textAlignHorizontal = "CENTER";
card.appendChild(title);

spacer(24);

// Google Button
var googleBtn = figma.createFrame();
googleBtn.name = "Button / Google";
googleBtn.resize(400, 44);
googleBtn.fills = [{type: 'SOLID', color: WHITE}];
googleBtn.strokes = [{type: 'SOLID', color: GRAY300}];
googleBtn.strokeWeight = 1;
googleBtn.cornerRadius = 8;
googleBtn.layoutMode = "HORIZONTAL";
googleBtn.primaryAxisAlignItems = "CENTER";
googleBtn.counterAxisAlignItems = "CENTER";
var googleText = figma.createText();
googleText.fontName = {family: "Inter", style: "Medium"};
googleText.characters = "Google orqali kirish";
googleText.fontSize = 14;
googleText.fills = [{type: 'SOLID', color: GRAY700}];
googleBtn.appendChild(googleText);
card.appendChild(googleBtn);
googleBtn.layoutSizingHorizontal = "FILL";

// Divider
var dividerFrame = figma.createFrame();
dividerFrame.name = "Divider";
dividerFrame.resize(400, 14);
dividerFrame.fills = [];
dividerFrame.layoutMode = "HORIZONTAL";
dividerFrame.counterAxisAlignItems = "CENTER";
dividerFrame.itemSpacing = 16;
dividerFrame.paddingTop = 20;
dividerFrame.paddingBottom = 20;
dividerFrame.primaryAxisSizingMode = "FIXED";
dividerFrame.counterAxisSizingMode = "AUTO";
var line1 = figma.createRectangle();
line1.name = "Line";
line1.resize(100, 1);
line1.fills = [{type: 'SOLID', color: GRAY200}];
dividerFrame.appendChild(line1);
line1.layoutGrow = 1;
var divText = figma.createText();
divText.fontName = {family: "Inter", style: "Regular"};
divText.characters = "yoki";
divText.fontSize = 14;
divText.fills = [{type: 'SOLID', color: GRAY500}];
dividerFrame.appendChild(divText);
var line2 = figma.createRectangle();
line2.name = "Line";
line2.resize(100, 1);
line2.fills = [{type: 'SOLID', color: GRAY200}];
dividerFrame.appendChild(line2);
line2.layoutGrow = 1;
card.appendChild(dividerFrame);
dividerFrame.layoutSizingHorizontal = "FILL";

// Email Field
var emailField = figma.createFrame();
emailField.name = "Field / Email";
emailField.resize(400, 70);
emailField.fills = [];
emailField.layoutMode = "VERTICAL";
emailField.itemSpacing = 6;
emailField.primaryAxisSizingMode = "AUTO";
var emailLabel = figma.createText();
emailLabel.fontName = {family: "Inter", style: "Medium"};
emailLabel.characters = "Email";
emailLabel.fontSize = 14;
emailLabel.fills = [{type: 'SOLID', color: GRAY700}];
emailField.appendChild(emailLabel);
var emailInput = figma.createFrame();
emailInput.name = "Input";
emailInput.resize(400, 44);
emailInput.fills = [{type: 'SOLID', color: WHITE}];
emailInput.strokes = [{type: 'SOLID', color: GRAY300}];
emailInput.strokeWeight = 1;
emailInput.cornerRadius = 8;
emailInput.layoutMode = "HORIZONTAL";
emailInput.counterAxisAlignItems = "CENTER";
emailInput.paddingLeft = 16;
emailInput.paddingRight = 16;
var emailPlaceholder = figma.createText();
emailPlaceholder.fontName = {family: "Inter", style: "Regular"};
emailPlaceholder.characters = "email@misol.com";
emailPlaceholder.fontSize = 14;
emailPlaceholder.fills = [{type: 'SOLID', color: GRAY500}];
emailInput.appendChild(emailPlaceholder);
emailField.appendChild(emailInput);
emailInput.layoutSizingHorizontal = "FILL";
card.appendChild(emailField);
emailField.layoutSizingHorizontal = "FILL";

spacer(16);

// Password Field
var passField = figma.createFrame();
passField.name = "Field / Password";
passField.resize(400, 70);
passField.fills = [];
passField.layoutMode = "VERTICAL";
passField.itemSpacing = 6;
passField.primaryAxisSizingMode = "AUTO";
var passLabel = figma.createText();
passLabel.fontName = {family: "Inter", style: "Medium"};
passLabel.characters = "Parol";
passLabel.fontSize = 14;
passLabel.fills = [{type: 'SOLID', color: GRAY700}];
passField.appendChild(passLabel);
var passInput = figma.createFrame();
passInput.name = "Input";
passInput.resize(400, 44);
passInput.fills = [{type: 'SOLID', color: WHITE}];
passInput.strokes = [{type: 'SOLID', color: GRAY300}];
passInput.strokeWeight = 1;
passInput.cornerRadius = 8;
passInput.layoutMode = "HORIZONTAL";
passInput.counterAxisAlignItems = "CENTER";
passInput.paddingLeft = 16;
passInput.paddingRight = 16;
var passPlaceholder = figma.createText();
passPlaceholder.fontName = {family: "Inter", style: "Regular"};
passPlaceholder.characters = "Parolingizni kiriting";
passPlaceholder.fontSize = 14;
passPlaceholder.fills = [{type: 'SOLID', color: GRAY500}];
passInput.appendChild(passPlaceholder);
passField.appendChild(passInput);
passInput.layoutSizingHorizontal = "FILL";
card.appendChild(passField);
passField.layoutSizingHorizontal = "FILL";

// Forgot Password
var forgotFrame = figma.createFrame();
forgotFrame.name = "Forgot Link";
forgotFrame.resize(400, 14);
forgotFrame.fills = [];
forgotFrame.layoutMode = "HORIZONTAL";
forgotFrame.primaryAxisAlignItems = "MAX";
forgotFrame.counterAxisAlignItems = "CENTER";
forgotFrame.paddingTop = 4;
forgotFrame.paddingBottom = 20;
forgotFrame.counterAxisSizingMode = "AUTO";
var forgotText = figma.createText();
forgotText.fontName = {family: "Inter", style: "Regular"};
forgotText.characters = "Parolni unutdingizmi?";
forgotText.fontSize = 14;
forgotText.fills = [{type: 'SOLID', color: PRIMARY}];
forgotFrame.appendChild(forgotText);
card.appendChild(forgotFrame);
forgotFrame.layoutSizingHorizontal = "FILL";

// Primary Button
var primaryBtn = figma.createFrame();
primaryBtn.name = "Button / Primary";
primaryBtn.resize(400, 44);
primaryBtn.fills = [{type: 'SOLID', color: PRIMARY}];
primaryBtn.cornerRadius = 8;
primaryBtn.layoutMode = "HORIZONTAL";
primaryBtn.primaryAxisAlignItems = "CENTER";
primaryBtn.counterAxisAlignItems = "CENTER";
var btnText = figma.createText();
btnText.fontName = {family: "Inter", style: "Semi Bold"};
btnText.characters = "Kirish";
btnText.fontSize = 14;
btnText.fills = [{type: 'SOLID', color: WHITE}];
primaryBtn.appendChild(btnText);
card.appendChild(primaryBtn);
primaryBtn.layoutSizingHorizontal = "FILL";

// Footer
var footerFrame = figma.createFrame();
footerFrame.name = "Footer";
footerFrame.resize(400, 14);
footerFrame.fills = [];
footerFrame.layoutMode = "HORIZONTAL";
footerFrame.primaryAxisAlignItems = "CENTER";
footerFrame.counterAxisAlignItems = "CENTER";
footerFrame.itemSpacing = 4;
footerFrame.paddingTop = 24;
footerFrame.counterAxisSizingMode = "AUTO";
var footerText = figma.createText();
footerText.fontName = {family: "Inter", style: "Regular"};
footerText.characters = "Akkauntingiz yo'qmi?";
footerText.fontSize = 14;
footerText.fills = [{type: 'SOLID', color: GRAY500}];
footerFrame.appendChild(footerText);
var footerLink = figma.createText();
footerLink.fontName = {family: "Inter", style: "Medium"};
footerLink.characters = "Ro'yxatdan o'tish";
footerLink.fontSize = 14;
footerLink.fills = [{type: 'SOLID', color: PRIMARY}];
footerFrame.appendChild(footerLink);
card.appendChild(footerFrame);
footerFrame.layoutSizingHorizontal = "FILL";

// Final
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);
return { success: true, name: screen.name, id: screen.id };
