// CHATFLOW - Onboarding - 02 Workspace Setup
// HTML source: figma-html-pages/03-onboarding/02-onboarding-setup.html

function rgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255
  };
}

function makeText(name, text, style, size, colorHex) {
  const t = figma.createText();
  t.name = name;
  t.characters = text;
  t.fontName = { family: "Inter", style };
  t.fontSize = size;
  t.fills = [{ type: "SOLID", color: rgb(colorHex) }];
  return t;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "03 - Onboarding - 02 - Workspace Setup";
const existing = figma.currentPage.findOne((n) => n.type === "FRAME" && n.name === frameName);
if (existing) {
  existing.remove();
}

const screen = figma.createFrame();
screen.name = frameName;
screen.resize(1440, 900);
screen.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];
screen.clipsContent = false;

const wrapWidth = 600;
const wrapX = (screen.width - wrapWidth) / 2;

// Progress
const progress = figma.createFrame();
progress.name = "Progress";
progress.layoutMode = "HORIZONTAL";
progress.primaryAxisSizingMode = "AUTO";
progress.counterAxisSizingMode = "AUTO";
progress.counterAxisAlignItems = "CENTER";
progress.itemSpacing = 8;
progress.fills = [];
progress.y = 182;
screen.appendChild(progress);

function addDot(type, text) {
  const dot = figma.createEllipse();
  dot.name = "Dot";
  dot.resize(24, 24);
  dot.fills = [
    {
      type: "SOLID",
      color: type === "active" || type === "done" ? rgb("#4F46E5") : rgb("#D1D5DB")
    }
  ];
  progress.appendChild(dot);

  if (text) {
    const label = makeText("Dot Label", text, "Bold", 12, type === "next" ? "#9CA3AF" : "#FFFFFF");
    label.textAlignHorizontal = "CENTER";
    label.resize(24, 24);
    label.x = dot.x;
    label.y = dot.y + 5;
    progress.appendChild(label);
  }
}

function addLine(done) {
  const line = figma.createRectangle();
  line.name = "Line";
  line.resize(48, 2);
  line.fills = [{ type: "SOLID", color: done ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  progress.appendChild(line);
}

addDot("active", "1");
addLine(false);
addDot("next", "2");
addLine(false);
addDot("next", "3");
addLine(false);
addDot("next", "4");

const ratio = makeText("Ratio", "1/4", "Medium", 14, "#6B7280");
ratio.x = progress.width + 8;
ratio.y = 4;
progress.appendChild(ratio);
progress.x = (screen.width - progress.width) / 2;

// Card
const card = figma.createFrame();
card.name = "Card";
card.resize(600, 520);
card.x = wrapX;
card.y = 222;
card.cornerRadius = 12;
card.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
card.strokes = [{ type: "SOLID", color: rgb("#E5E7EB") }];
card.strokeWeight = 1;
card.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#111827"), a: 0.08 },
    offset: { x: 0, y: 10 },
    radius: 20,
    visible: true,
    blendMode: "NORMAL"
  }
];
screen.appendChild(card);

const step = makeText("Step", "1-qadam / 4", "Semi Bold", 13, "#4F46E5");
step.x = 40;
step.y = 40;
card.appendChild(step);

const title = makeText("Title", "Workspace yaratish", "Semi Bold", 24, "#111827");
title.x = 40;
title.y = 62;
card.appendChild(title);

const sub = makeText("Subtitle", "Kompaniyangiz uchun ishchi makonni sozlang.", "Regular", 14, "#6B7280");
sub.x = 40;
sub.y = 102;
card.appendChild(sub);

function fieldBlock(y, labelText, placeholder, options) {
  const label = makeText("Label", labelText, "Medium", 14, "#374151");
  label.x = 40;
  label.y = y;
  card.appendChild(label);

  const input = figma.createRectangle();
  input.name = "Input";
  input.resize(520, 44);
  input.x = 40;
  input.y = y + 24;
  input.cornerRadius = 8;
  input.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
  input.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
  input.strokeWeight = 1;
  card.appendChild(input);

  const place = makeText("Placeholder", placeholder, "Regular", 14, "#9CA3AF");
  place.x = 56;
  place.y = y + 39;
  card.appendChild(place);

  if (options && options.helper) {
    const helper = makeText("Helper", options.helper, "Regular", 12, "#6B7280");
    helper.x = 40;
    helper.y = y + 74;
    card.appendChild(helper);
  }

  if (options && options.select) {
    const arrow = makeText("Arrow", "v", "Semi Bold", 13, "#6B7280");
    arrow.x = 538;
    arrow.y = y + 38;
    card.appendChild(arrow);
    place.fills = [{ type: "SOLID", color: rgb("#111827") }];
  }
}

fieldBlock(146, "Workspace nomi *", "Masalan: TechUz Support", {
  helper: "Bu nom jamoangizga ko'rinadi."
});
fieldBlock(244, "Kompaniya veb-sayti", "https://kompaniya.uz");
fieldBlock(336, "Jamoa hajmi", "1-5", { select: true });

const actions = figma.createFrame();
actions.name = "Actions";
actions.layoutMode = "HORIZONTAL";
actions.primaryAxisSizingMode = "AUTO";
actions.counterAxisSizingMode = "AUTO";
actions.counterAxisAlignItems = "CENTER";
actions.itemSpacing = 12;
actions.fills = [];
actions.x = 40;
actions.y = 436;
card.appendChild(actions);

const ghost = figma.createFrame();
ghost.name = "Button / Ghost";
ghost.resize(254, 44);
ghost.cornerRadius = 8;
ghost.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
ghost.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
ghost.strokeWeight = 1;
ghost.layoutMode = "HORIZONTAL";
ghost.primaryAxisAlignItems = "CENTER";
ghost.counterAxisAlignItems = "CENTER";
ghost.setPluginData("destination", "../04-dashboard/01-dashboard.html");
ghost.setPluginData("analytics_label", "onboarding_workspace_skip");
actions.appendChild(ghost);

const ghostLabel = makeText("Label", "Keyinroq", "Semi Bold", 14, "#374151");
ghost.appendChild(ghostLabel);

const primary = figma.createFrame();
primary.name = "Button / Primary";
primary.resize(254, 44);
primary.cornerRadius = 8;
primary.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
primary.layoutMode = "HORIZONTAL";
primary.primaryAxisAlignItems = "CENTER";
primary.counterAxisAlignItems = "CENTER";
primary.setPluginData("destination", "./04-widget-customize.html");
primary.setPluginData("analytics_label", "onboarding_workspace_continue");
actions.appendChild(primary);

const primaryLabel = makeText("Label", "Davom etish", "Semi Bold", 14, "#FFFFFF");
primary.appendChild(primaryLabel);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return {
  success: true,
  frameId: screen.id,
  frameName: screen.name
};
