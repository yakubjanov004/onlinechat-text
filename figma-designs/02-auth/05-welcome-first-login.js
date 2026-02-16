// CHATFLOW - Auth - Welcome / First Login
// HTML source: figma-html-pages/02-auth/05-welcome-first-login.html

function rgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255
  };
}

function createText(name, text, style, size, colorHex) {
  const node = figma.createText();
  node.name = name;
  node.characters = text;
  node.fontName = { family: "Inter", style: style };
  node.fontSize = size;
  node.fills = [{ type: "SOLID", color: rgb(colorHex) }];
  return node;
}

function centerX(node, parentWidth) {
  node.x = (parentWidth - node.width) / 2;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "02 - Auth - 05 - Welcome First Login";
const existingFrame = figma.currentPage.findOne(
  (n) => n.type === "FRAME" && n.name === frameName
);
if (existingFrame) {
  existingFrame.remove();
}

const screen = figma.createFrame();
screen.name = frameName;
screen.resize(1440, 900);
screen.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];
screen.clipsContent = false;

const blobTopRight = figma.createEllipse();
blobTopRight.name = "Background Blob / Top Right";
blobTopRight.resize(620, 620);
blobTopRight.x = 1130;
blobTopRight.y = -324;
blobTopRight.fills = [{ type: "SOLID", color: rgb("#4F46E5"), opacity: 0.13 }];
blobTopRight.effects = [{ type: "LAYER_BLUR", radius: 120, visible: true }];
screen.appendChild(blobTopRight);

const blobBottomLeft = figma.createEllipse();
blobBottomLeft.name = "Background Blob / Bottom Left";
blobBottomLeft.resize(520, 520);
blobBottomLeft.x = -160;
blobBottomLeft.y = 620;
blobBottomLeft.fills = [{ type: "SOLID", color: rgb("#4F46E5"), opacity: 0.1 }];
blobBottomLeft.effects = [{ type: "LAYER_BLUR", radius: 110, visible: true }];
screen.appendChild(blobBottomLeft);

const card = figma.createFrame();
card.name = "Card";
card.resize(520, 442);
card.x = (screen.width - card.width) / 2;
card.y = 208;
card.cornerRadius = 16;
card.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
card.strokes = [{ type: "SOLID", color: rgb("#E5E7EB") }];
card.strokeWeight = 1;
card.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#111827"), a: 0.08 },
    offset: { x: 0, y: 14 },
    radius: 30,
    visible: true,
    blendMode: "NORMAL"
  }
];
screen.appendChild(card);

const status = figma.createFrame();
status.name = "Status Badge";
status.layoutMode = "HORIZONTAL";
status.primaryAxisSizingMode = "AUTO";
status.counterAxisSizingMode = "AUTO";
status.counterAxisAlignItems = "CENTER";
status.itemSpacing = 8;
status.paddingLeft = 12;
status.paddingRight = 12;
status.paddingTop = 6;
status.paddingBottom = 6;
status.cornerRadius = 999;
status.fills = [{ type: "SOLID", color: rgb("#EEF2FF") }];
status.strokes = [{ type: "SOLID", color: rgb("#C7D2FE") }];
status.strokeWeight = 1;
card.appendChild(status);

const statusDotWrap = figma.createFrame();
statusDotWrap.name = "Status Dot";
statusDotWrap.resize(14, 14);
statusDotWrap.fills = [];
status.appendChild(statusDotWrap);

const statusDotRing = figma.createEllipse();
statusDotRing.resize(14, 14);
statusDotRing.fills = [{ type: "SOLID", color: rgb("#22C55E"), opacity: 0.2 }];
statusDotWrap.appendChild(statusDotRing);

const statusDot = figma.createEllipse();
statusDot.resize(8, 8);
statusDot.x = 3;
statusDot.y = 3;
statusDot.fills = [{ type: "SOLID", color: rgb("#22C55E") }];
statusDotWrap.appendChild(statusDot);

const statusText = createText("Status Text", "Akkaunt faol", "Semi Bold", 13, "#4338CA");
status.appendChild(statusText);

centerX(status, card.width);
status.y = 40;

const iconWrap = figma.createFrame();
iconWrap.name = "Icon Wrapper";
iconWrap.resize(72, 72);
iconWrap.cornerRadius = 20;
iconWrap.fills = [
  {
    type: "GRADIENT_LINEAR",
    gradientStops: [
      { position: 0, color: { ...rgb("#4F46E5"), a: 1 } },
      { position: 1, color: { ...rgb("#7C3AED"), a: 1 } }
    ],
    gradientTransform: [
      [0.766, 0.643, -0.205],
      [-0.643, 0.766, 0.439]
    ]
  }
];
iconWrap.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#4F46E5"), a: 0.3 },
    offset: { x: 0, y: 12 },
    radius: 24,
    visible: true,
    blendMode: "NORMAL"
  }
];
card.appendChild(iconWrap);
centerX(iconWrap, card.width);
iconWrap.y = status.y + status.height + 20;

const iconStar = figma.createVector();
iconStar.name = "Star";
  iconStar.vectorPaths = [
  {
    windingRule: "NONZERO",
    data: "M 12 2 L 13.8 7.2 L 19 9 L 14.8 11.2 L 16.2 16.6 L 12 13.8 L 7.8 16.6 L 9.2 11.2 L 5 9 L 10.2 7.2 L 12 2 Z"
  }
];
iconStar.resize(40, 40);
iconStar.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
iconStar.x = 16;
iconStar.y = 16;
iconWrap.appendChild(iconStar);

const title = createText("Title", "Xush kelibsiz!", "Bold", 28, "#111827");
title.textAlignHorizontal = "CENTER";
title.resize(440, 40);
title.x = 40;
title.y = iconWrap.y + iconWrap.height + 20;
card.appendChild(title);

const subtitle = createText(
  "Subtitle",
  "Akkauntingiz tayyor. Endi qisqa onboarding orqali CHATFLOW'ni ishga tushiramiz.",
  "Regular",
  15,
  "#4B5563"
);
subtitle.textAlignHorizontal = "CENTER";
subtitle.lineHeight = { unit: "PIXELS", value: 23 };
subtitle.textAutoResize = "HEIGHT";
subtitle.resize(380, 10);
subtitle.x = (card.width - subtitle.width) / 2;
subtitle.y = title.y + 50;
card.appendChild(subtitle);

const primaryButton = figma.createFrame();
primaryButton.name = "Button / Primary";
primaryButton.resize(440, 46);
primaryButton.x = 40;
primaryButton.y = subtitle.y + subtitle.height + 28;
primaryButton.cornerRadius = 10;
primaryButton.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
primaryButton.layoutMode = "HORIZONTAL";
primaryButton.primaryAxisAlignItems = "CENTER";
primaryButton.counterAxisAlignItems = "CENTER";
primaryButton.setPluginData("destination", "../03-onboarding/01-welcome.html");
primaryButton.setPluginData("analytics_label", "start_onboarding");
card.appendChild(primaryButton);

const primaryText = createText("Label", "Onboardingni boshlash", "Semi Bold", 15, "#FFFFFF");
primaryButton.appendChild(primaryText);

const secondaryButton = figma.createFrame();
secondaryButton.name = "Button / Secondary";
secondaryButton.resize(440, 46);
secondaryButton.x = 40;
secondaryButton.y = primaryButton.y + primaryButton.height + 12;
secondaryButton.cornerRadius = 10;
secondaryButton.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
secondaryButton.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
secondaryButton.strokeWeight = 1;
secondaryButton.layoutMode = "HORIZONTAL";
secondaryButton.primaryAxisAlignItems = "CENTER";
secondaryButton.counterAxisAlignItems = "CENTER";
secondaryButton.setPluginData("destination", "../04-dashboard/01-dashboard.html");
secondaryButton.setPluginData("analytics_label", "skip_to_dashboard");
card.appendChild(secondaryButton);

const secondaryText = createText("Label", "Hozircha dashboardga o'tish", "Semi Bold", 15, "#374151");
secondaryButton.appendChild(secondaryText);

const footer = figma.createFrame();
footer.name = "Footer";
footer.layoutMode = "HORIZONTAL";
footer.primaryAxisSizingMode = "AUTO";
footer.counterAxisSizingMode = "AUTO";
footer.counterAxisAlignItems = "CENTER";
footer.itemSpacing = 4;
footer.fills = [];
screen.appendChild(footer);

const footerText = createText("Footer Text", "Yordam kerakmi?", "Regular", 14, "#6B7280");
footer.appendChild(footerText);

const footerLink = createText("Footer Link", "Qo'llab-quvvatlash markazi", "Semi Bold", 14, "#4F46E5");
footer.appendChild(footerLink);

centerX(footer, screen.width);
footer.y = card.y + card.height + 24;

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return {
  success: true,
  frameId: screen.id,
  frameName: screen.name
};
