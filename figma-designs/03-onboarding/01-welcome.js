// QULAY CHAT - Onboarding - Welcome (Step 1/4)
// HTML source: figma-html-pages/03-onboarding/01-welcome.html

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
  node.fontName = { family: "Inter", style };
  node.fontSize = size;
  node.fills = [{ type: "SOLID", color: rgb(colorHex) }];
  return node;
}

function centerX(node, width) {
  node.x = (width - node.width) / 2;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "03 - Onboarding - 01 - Welcome";
const existing = figma.currentPage.findOne((n) => n.type === "FRAME" && n.name === frameName);
if (existing) {
  existing.remove();
}

const screen = figma.createFrame();
screen.name = frameName;
screen.resize(1440, 900);
screen.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];
screen.clipsContent = false;

const shellX = (screen.width - 600) / 2;

// Progress indicator
const progress = figma.createFrame();
progress.name = "Progress";
progress.layoutMode = "HORIZONTAL";
progress.primaryAxisSizingMode = "AUTO";
progress.counterAxisSizingMode = "AUTO";
progress.counterAxisAlignItems = "CENTER";
progress.itemSpacing = 16;
progress.fills = [];
progress.x = shellX + 126;
progress.y = 168;
screen.appendChild(progress);

const progressTrack = figma.createFrame();
progressTrack.name = "Progress Track";
progressTrack.layoutMode = "HORIZONTAL";
progressTrack.primaryAxisSizingMode = "AUTO";
progressTrack.counterAxisSizingMode = "AUTO";
progressTrack.counterAxisAlignItems = "CENTER";
progressTrack.fills = [];
progress.appendChild(progressTrack);

function addDot(active) {
  const dotWrap = figma.createFrame();
  dotWrap.name = active ? "Dot / Active" : "Dot";
  dotWrap.resize(24, 24);
  dotWrap.fills = [];
  progressTrack.appendChild(dotWrap);

  if (active) {
    const ring = figma.createEllipse();
    ring.resize(24, 24);
    ring.fills = [{ type: "SOLID", color: rgb("#4F46E5"), opacity: 0.18 }];
    dotWrap.appendChild(ring);
  }

  const dot = figma.createEllipse();
  dot.resize(active ? 16 : 24, active ? 16 : 24);
  dot.x = active ? 4 : 0;
  dot.y = active ? 4 : 0;
  dot.fills = [{ type: "SOLID", color: active ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  dotWrap.appendChild(dot);
}

function addLine() {
  const line = figma.createRectangle();
  line.resize(48, 2);
  line.fills = [{ type: "SOLID", color: rgb("#D1D5DB") }];
  progressTrack.appendChild(line);
}

addDot(true);
addLine();
addDot(false);
addLine();
addDot(false);
addLine();
addDot(false);

const stepLabel = createText("Step Label", "1/4", "Medium", 14, "#6B7280");
progress.appendChild(stepLabel);

// Card
const card = figma.createFrame();
card.name = "Card";
card.resize(600, 582);
card.x = shellX;
card.y = 220;
card.cornerRadius = 12;
card.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
card.strokes = [{ type: "SOLID", color: rgb("#E5E7EB") }];
card.strokeWeight = 1;
card.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#111827"), a: 0.08 },
    offset: { x: 0, y: 10 },
    radius: 24,
    visible: true,
    blendMode: "NORMAL"
  }
];
screen.appendChild(card);

const icon = figma.createFrame();
icon.name = "Icon";
icon.resize(64, 64);
icon.cornerRadius = 20;
icon.fills = [
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
icon.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#4F46E5"), a: 0.28 },
    offset: { x: 0, y: 12 },
    radius: 24,
    visible: true,
    blendMode: "NORMAL"
  }
];
icon.x = (card.width - icon.width) / 2;
icon.y = 48;
card.appendChild(icon);

const star = figma.createVector();
star.name = "Star";
star.vectorPaths = [
  {
    windingRule: "NONZERO",
    data: "M 12 2 L 13.8 7.2 L 19 9 L 14.8 11.2 L 16.2 16.6 L 12 13.8 L 7.8 16.6 L 9.2 11.2 L 5 9 L 10.2 7.2 L 12 2 Z"
  }
];
star.resize(36, 36);
star.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
star.x = 14;
star.y = 14;
icon.appendChild(star);

const title = createText("Title", "Xush kelibsiz, Ulug'bek!", "Semi Bold", 24, "#111827");
title.textAlignHorizontal = "CENTER";
title.resize(520, 38);
title.x = 40;
title.y = 136;
card.appendChild(title);

const subtitle = createText(
  "Subtitle",
  "Keling, 5 daqiqada platformani sozlaymiz",
  "Regular",
  16,
  "#6B7280"
);
subtitle.textAlignHorizontal = "CENTER";
subtitle.resize(400, 24);
subtitle.x = (card.width - subtitle.width) / 2;
subtitle.y = 182;
card.appendChild(subtitle);

const steps = figma.createFrame();
steps.name = "Steps";
steps.resize(504, 218);
steps.x = 48;
steps.y = 230;
steps.cornerRadius = 10;
steps.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];
steps.strokes = [{ type: "SOLID", color: rgb("#EEF2F7") }];
steps.strokeWeight = 1;
card.appendChild(steps);

const stepRows = [
  { label: "Workspace yaratish", time: "~1 min", color: "#4F46E5" },
  { label: "Widgetni sozlash", time: "~2 min", color: "#F59E0B" },
  { label: "Widgetni o'rnatish", time: "~1 min", color: "#10B981" },
  { label: "Test xabar yuborish", time: "~1 min", color: "#3B82F6" }
];

for (let i = 0; i < stepRows.length; i += 1) {
  const row = stepRows[i];
  const rowY = 18 + i * 50;

  const bullet = figma.createEllipse();
  bullet.name = "Bullet";
  bullet.resize(10, 10);
  bullet.x = 16;
  bullet.y = rowY + 8;
  bullet.fills = [{ type: "SOLID", color: rgb(row.color) }];
  steps.appendChild(bullet);

  const label = createText("Step Label", row.label, "Regular", 14, "#374151");
  label.x = 36;
  label.y = rowY + 4;
  steps.appendChild(label);

  const time = createText("Time", row.time, "Regular", 12, "#6B7280");
  time.x = steps.width - time.width - 16;
  time.y = rowY + 6;
  steps.appendChild(time);

  if (i < stepRows.length - 1) {
    const divider = figma.createRectangle();
    divider.name = "Divider";
    divider.resize(steps.width - 32, 1);
    divider.x = 16;
    divider.y = rowY + 38;
    divider.fills = [{ type: "SOLID", color: rgb("#EEF2F7") }];
    steps.appendChild(divider);
  }
}

const startButton = figma.createFrame();
startButton.name = "Button / Start";
startButton.resize(504, 56);
startButton.x = 48;
startButton.y = 480;
startButton.cornerRadius = 8;
startButton.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
startButton.layoutMode = "HORIZONTAL";
startButton.primaryAxisAlignItems = "CENTER";
startButton.counterAxisAlignItems = "CENTER";
startButton.setPluginData("destination", "./02-onboarding-setup.html");
startButton.setPluginData("analytics_label", "onboarding_welcome_start");
card.appendChild(startButton);

const startLabel = createText("Label", "Boshlash", "Semi Bold", 16, "#FFFFFF");
startButton.appendChild(startLabel);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return {
  success: true,
  frameId: screen.id,
  frameName: screen.name
};
