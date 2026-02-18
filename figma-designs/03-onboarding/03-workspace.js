// CHATFLOW - Onboarding - 03 Workspace Setup (Step 2/5)
// HTML source: figma-html-pages/03-onboarding/03-workspace.html

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

function createDot(type) {
  const dotWrap = figma.createFrame();
  dotWrap.name = type === "done" ? "Dot / Done" : type === "active" ? "Dot / Active" : "Dot / Upcoming";
  dotWrap.resize(24, 24);
  dotWrap.fills = [];

  const dot = figma.createEllipse();
  dot.resize(24, 24);

  if (type === "done" || type === "active") {
    dot.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
  } else {
    dot.fills = [{ type: "SOLID", color: rgb("#D1D5DB") }];
  }

  dotWrap.appendChild(dot);

  if (type === "done") {
    const checkmark = createText("Checkmark", "✓", "Bold", 12, "#FFFFFF");
    checkmark.textAlignHorizontal = "CENTER";
    checkmark.textAlignVertical = "CENTER";
    checkmark.x = 0;
    checkmark.y = 4;
    dotWrap.appendChild(checkmark);
  } else if (type === "active") {
    const number = createText("Number", "2", "Bold", 12, "#FFFFFF");
    number.textAlignHorizontal = "CENTER";
    number.textAlignVertical = "CENTER";
    number.x = 0;
    number.y = 4;
    dotWrap.appendChild(number);
  }

  return dotWrap;
}

function createConnector(done) {
  const line = figma.createRectangle();
  line.name = "Connector";
  line.resize(48, 2);
  line.fills = [{ type: "SOLID", color: done ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  return line;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "03 - Onboarding - 03 - Workspace Setup (2/5)";
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
progress.itemSpacing = 0;
progress.fills = [];
progress.x = shellX + 60;
progress.y = 128;
screen.appendChild(progress);

const progressTrack = figma.createFrame();
progressTrack.name = "Progress Track";
progressTrack.layoutMode = "HORIZONTAL";
progressTrack.primaryAxisSizingMode = "AUTO";
progressTrack.counterAxisSizingMode = "AUTO";
progressTrack.counterAxisAlignItems = "CENTER";
progressTrack.itemSpacing = 0;
progressTrack.fills = [];
progress.appendChild(progressTrack);

// Add progress dots: done, active, upcoming, upcoming, upcoming
progressTrack.appendChild(createDot("done"));
progressTrack.appendChild(createConnector(true));
progressTrack.appendChild(createDot("active"));
progressTrack.appendChild(createConnector(false));
progressTrack.appendChild(createDot("upcoming"));
progressTrack.appendChild(createConnector(false));
progressTrack.appendChild(createDot("upcoming"));
progressTrack.appendChild(createConnector(false));
progressTrack.appendChild(createDot("upcoming"));

const stepLabel = createText("Step Label", "2/5", "Medium", 14, "#6B7280");
stepLabel.x = 16;
stepLabel.y = 0;
progress.appendChild(stepLabel);

// Card
const card = figma.createFrame();
card.name = "Card";
card.resize(600, 550);
card.x = shellX;
card.y = 210;
card.cornerRadius = 12;
card.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
card.strokes = [{ type: "SOLID", color: rgb("#E5E7EB") }];
card.strokeWeight = 1;
card.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#111827"), a: 0.08 },
    offset: { x: 0, y: 4 },
    radius: 6,
    visible: true,
    blendMode: "NORMAL"
  }
];
screen.appendChild(card);

const stepBadge = createText("Step", "2-qadam / 5", "Semi Bold", 13, "#4F46E5");
stepBadge.x = 40;
stepBadge.y = 40;
card.appendChild(stepBadge);

const title = createText("Title", "Workspace yaratish", "Semi Bold", 24, "#111827");
title.x = 40;
title.y = 65;
card.appendChild(title);

const subtitle = createText(
  "Subtitle",
  "Kompaniyangiz uchun ishchi makonni sozlang.",
  "Regular",
  14,
  "#6B7280"
);
subtitle.resize(400, 40);
subtitle.x = 40;
subtitle.y = 105;
card.appendChild(subtitle);

// Form fields
let fieldY = 160;
const fieldGap = 28;

// Workspace name field
const workspaceLabel = createText("Label", "Workspace nomi", "Medium", 14, "#374151");
workspaceLabel.x = 40;
workspaceLabel.y = fieldY;
card.appendChild(workspaceLabel);

const workspaceInput = figma.createRectangle();
workspaceInput.name = "Input / Workspace Name";
workspaceInput.resize(520, 44);
workspaceInput.cornerRadius = 8;
workspaceInput.x = 40;
workspaceInput.y = fieldY + 30;
workspaceInput.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
workspaceInput.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
workspaceInput.strokeWeight = 1;
card.appendChild(workspaceInput);

const workspacePlaceholder = createText(
  "Placeholder",
  "Masalan: TechUz Support",
  "Regular",
  14,
  "#9CA3AF"
);
workspacePlaceholder.x = 56;
workspacePlaceholder.y = fieldY + 40;
card.appendChild(workspacePlaceholder);

fieldY += 90;

// Website URL field
const websiteLabel = createText("Label", "Kompaniya veb-sayti", "Medium", 14, "#374151");
websiteLabel.x = 40;
websiteLabel.y = fieldY;
card.appendChild(websiteLabel);

const websiteInput = figma.createRectangle();
websiteInput.name = "Input / Website URL";
websiteInput.resize(520, 44);
websiteInput.cornerRadius = 8;
websiteInput.x = 40;
websiteInput.y = fieldY + 30;
websiteInput.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
websiteInput.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
websiteInput.strokeWeight = 1;
card.appendChild(websiteInput);

const websitePlaceholder = createText(
  "Placeholder",
  "https://kompaniya.uz",
  "Regular",
  14,
  "#9CA3AF"
);
websitePlaceholder.x = 56;
websitePlaceholder.y = fieldY + 40;
card.appendChild(websitePlaceholder);

fieldY += 90;

// Team size field
const teamLabel = createText("Label", "Jamoa hajmi", "Medium", 14, "#374151");
teamLabel.x = 40;
teamLabel.y = fieldY;
card.appendChild(teamLabel);

const teamSelect = figma.createRectangle();
teamSelect.name = "Select / Team Size";
teamSelect.resize(520, 44);
teamSelect.cornerRadius = 8;
teamSelect.x = 40;
teamSelect.y = fieldY + 30;
teamSelect.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
teamSelect.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
teamSelect.strokeWeight = 1;
card.appendChild(teamSelect);

const teamPlaceholder = createText(
  "Placeholder",
  "1-5",
  "Regular",
  14,
  "#111827"
);
teamPlaceholder.x = 56;
teamPlaceholder.y = fieldY + 40;
card.appendChild(teamPlaceholder);

// Buttons container
const buttonsContainer = figma.createFrame();
buttonsContainer.name = "Buttons";
buttonsContainer.layoutMode = "HORIZONTAL";
buttonsContainer.primaryAxisSizingMode = "FIXED";
buttonsContainer.primaryAxisAlignItems = "CENTER";
buttonsContainer.counterAxisAlignItems = "CENTER";
buttonsContainer.resize(240, 44);
buttonsContainer.itemSpacing = 12;
buttonsContainer.x = 40;
buttonsContainer.y = card.height - 84;
buttonsContainer.fills = [];
card.appendChild(buttonsContainer);

// Back button
const backButton = figma.createRectangle();
backButton.name = "Button / Back";
backButton.resize(110, 44);
backButton.cornerRadius = 8;
backButton.fills = [{ type: "SOLID", color: rgb("#FFFFFF") }];
backButton.strokes = [{ type: "SOLID", color: rgb("#D1D5DB") }];
backButton.strokeWeight = 1;
backButton.setPluginData("destination", "./01-welcome.html");
backButton.setPluginData("action", "back");
buttonsContainer.appendChild(backButton);

const backLabel = createText("Label", "Orqaga", "Semi Bold", 14, "#6B7280");
backLabel.textAlignHorizontal = "CENTER";
backLabel.resize(110, 44);
backLabel.y = 2;
backButton.appendChild(backLabel);

// Continue button
const continueButton = figma.createRectangle();
continueButton.name = "Button / Continue";
continueButton.resize(130, 44);
continueButton.cornerRadius = 8;
continueButton.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
continueButton.setPluginData("destination", "./04-widget-customize.html");
continueButton.setPluginData("action", "continue");
buttonsContainer.appendChild(continueButton);

const continueLabel = createText("Label", "Davom etish", "Semi Bold", 14, "#FFFFFF");
continueLabel.textAlignHorizontal = "CENTER";
continueLabel.resize(130, 44);
continueLabel.y = 2;
continueButton.appendChild(continueLabel);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return {
  success: true,
  frameId: screen.id,
  frameName: screen.name
};
