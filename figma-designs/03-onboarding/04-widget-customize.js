// QULAY CHAT - Onboarding - 04 Widget Customize (Step 2/4)
// HTML source: figma-html-pages/03-onboarding/04-widget-customize.html

function rgb(hex) {
  const clean = hex.replace("#", "");
  const value = parseInt(clean, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255
  };
}

function textNode(name, text, style, size, colorHex) {
  const node = figma.createText();
  node.name = name;
  node.characters = text;
  node.fontName = { family: "Inter", style };
  node.fontSize = size;
  node.fills = [{ type: "SOLID", color: rgb(colorHex) }];
  return node;
}

function makeDot(type, label) {
  const wrap = figma.createFrame();
  wrap.name = "Step Dot";
  wrap.resize(24, 24);
  wrap.fills = [];

  const circle = figma.createEllipse();
  circle.resize(24, 24);
  circle.fills = [
    {
      type: "SOLID",
      color: type === "done" || type === "active" ? rgb("#4F46E5") : rgb("#D1D5DB")
    }
  ];
  wrap.appendChild(circle);

  if (label) {
    const labelNode = textNode("Label", label, "Bold", 12, type === "upcoming" ? "#9CA3AF" : "#FFFFFF");
    labelNode.textAlignHorizontal = "CENTER";
    labelNode.resize(24, 24);
    labelNode.x = 0;
    labelNode.y = 5;
    wrap.appendChild(labelNode);
  }

  return wrap;
}

function makeConnector(done) {
  const line = figma.createRectangle();
  line.name = "Connector";
  line.resize(48, 2);
  line.fills = [{ type: "SOLID", color: done ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  return line;
}

function cardRect(w, h, radius, fillHex, strokeHex) {
  const frame = figma.createFrame();
  frame.resize(w, h);
  frame.cornerRadius = radius;
  frame.fills = [{ type: "SOLID", color: rgb(fillHex) }];
  if (strokeHex) {
    frame.strokes = [{ type: "SOLID", color: rgb(strokeHex) }];
    frame.strokeWeight = 1;
  }
  return frame;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "03 - Onboarding - 04 - Widget Customize (2/4)";
const oldFrame = figma.currentPage.findOne((n) => n.type === "FRAME" && n.name === frameName);
if (oldFrame) {
  oldFrame.remove();
}

const screen = figma.createFrame();
screen.name = frameName;
screen.resize(1440, 900);
screen.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];
screen.clipsContent = false;

// Top progress bar
const progressBar = cardRect(1440, 96, 0, "#FFFFFF", "#E5E7EB");
progressBar.name = "Progress Bar";
progressBar.x = 0;
progressBar.y = 0;
screen.appendChild(progressBar);

const progress = figma.createFrame();
progress.name = "Progress Indicator";
progress.layoutMode = "HORIZONTAL";
progress.primaryAxisSizingMode = "AUTO";
progress.counterAxisSizingMode = "AUTO";
progress.counterAxisAlignItems = "CENTER";
progress.itemSpacing = 16;
progress.fills = [];
progressBar.appendChild(progress);

const steps = figma.createFrame();
steps.name = "Steps";
steps.layoutMode = "HORIZONTAL";
steps.primaryAxisSizingMode = "AUTO";
steps.counterAxisSizingMode = "AUTO";
steps.counterAxisAlignItems = "CENTER";
steps.fills = [];
progress.appendChild(steps);

steps.appendChild(makeDot("done", "✓"));
steps.appendChild(makeConnector(true));
steps.appendChild(makeDot("active", "2"));
steps.appendChild(makeConnector(false));
steps.appendChild(makeDot("upcoming", ""));
steps.appendChild(makeConnector(false));
steps.appendChild(makeDot("upcoming", ""));

const ratio = textNode("Ratio", "2/4", "Medium", 14, "#6B7280");
progress.appendChild(ratio);

progress.x = (1440 - progress.width) / 2;
progress.y = 36;

// Main split
const leftPanel = cardRect(480, 804, 0, "#FFFFFF", "#E5E7EB");
leftPanel.name = "Settings Panel";
leftPanel.x = 0;
leftPanel.y = 96;
screen.appendChild(leftPanel);

const rightPanel = cardRect(960, 804, 0, "#F9FAFB", null);
rightPanel.name = "Preview Panel";
rightPanel.x = 480;
rightPanel.y = 96;
screen.appendChild(rightPanel);

// Left: header
const panelTitle = textNode("Title", "Widgetni sozlash", "Semi Bold", 24, "#111827");
panelTitle.x = 32;
panelTitle.y = 32;
leftPanel.appendChild(panelTitle);

const panelSub = textNode("Subtitle", "Brendingizga mos ranglar va matnlarni tanlang", "Regular", 14, "#6B7280");
panelSub.x = 32;
panelSub.y = 68;
leftPanel.appendChild(panelSub);

// Section 1 - color
const s1Label = textNode("Section Label", "Asosiy rang", "Medium", 14, "#374151");
s1Label.x = 32;
s1Label.y = 118;
leftPanel.appendChild(s1Label);

const s1Desc = textNode("Section Desc", "Widget header va tugmalarda ishlatiladi", "Regular", 13, "#6B7280");
s1Desc.x = 32;
s1Desc.y = 142;
leftPanel.appendChild(s1Desc);

const colors = ["#4F46E5", "#10B981", "#F59E0B", "#DC2626", "#8B5CF6", "#EC4899", "#0EA5E9", "#84CC16"];
for (let i = 0; i < colors.length; i += 1) {
  const col = i % 4;
  const row = Math.floor(i / 4);
  const swatch = cardRect(40, 40, 8, colors[i], "#E5E7EB");
  swatch.name = "Color Swatch";
  swatch.x = 32 + col * 48;
  swatch.y = 170 + row * 48;
  if (i === 0) {
    swatch.strokes = [{ type: "SOLID", color: rgb("#111827") }];
    swatch.strokeWeight = 3;
  }
  leftPanel.appendChild(swatch);
}

const hexInput = cardRect(416, 44, 8, "#FFFFFF", "#E5E7EB");
hexInput.name = "HEX Input";
hexInput.x = 32;
hexInput.y = 268;
leftPanel.appendChild(hexInput);

const hexText = textNode("HEX", "#4F46E5", "Regular", 14, "#111827");
hexText.x = 48;
hexText.y = 283;
leftPanel.appendChild(hexText);

// Section 2 - shape
const s2Label = textNode("Section Label", "Tugma shakli", "Medium", 14, "#374151");
s2Label.x = 32;
s2Label.y = 332;
leftPanel.appendChild(s2Label);

const shape1 = cardRect(200, 80, 8, "#FFFFFF", "#E5E7EB");
shape1.name = "Shape / Square";
shape1.x = 32;
shape1.y = 360;
leftPanel.appendChild(shape1);

const shape2 = cardRect(200, 80, 8, "#EEF2FF", "#4F46E5");
shape2.name = "Shape / Round";
shape2.x = 248;
shape2.y = 360;
shape2.strokeWeight = 2;
leftPanel.appendChild(shape2);

const sqLabel = textNode("Label", "Kvadrat", "Medium", 14, "#374151");
sqLabel.x = 104;
sqLabel.y = 410;
leftPanel.appendChild(sqLabel);

const rdLabel = textNode("Label", "Yumaloq", "Medium", 14, "#374151");
rdLabel.x = 320;
rdLabel.y = 410;
leftPanel.appendChild(rdLabel);

// Section 3 - position
const s3Label = textNode("Section Label", "Widget joylashuvi", "Medium", 14, "#374151");
s3Label.x = 32;
s3Label.y = 464;
leftPanel.appendChild(s3Label);

const posNames = ["Pastki o'ng", "Pastki chap", "O'ng markaz"];
for (let i = 0; i < 3; i += 1) {
  const option = cardRect(130, 80, 8, i === 0 ? "#EEF2FF" : "#FFFFFF", i === 0 ? "#4F46E5" : "#E5E7EB");
  option.name = "Position Option";
  option.x = 32 + i * 142;
  option.y = 492;
  if (i === 0) {
    option.strokeWeight = 2;
  }
  leftPanel.appendChild(option);

  const mock = cardRect(48, 48, 6, "#F9FAFB", "#E5E7EB");
  mock.x = option.x + 41;
  mock.y = option.y + 10;
  leftPanel.appendChild(mock);

  const dot = figma.createEllipse();
  dot.resize(8, 8);
  dot.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
  if (i === 0) {
    dot.x = mock.x + 36;
    dot.y = mock.y + 36;
  } else if (i === 1) {
    dot.x = mock.x + 4;
    dot.y = mock.y + 36;
  } else {
    dot.x = mock.x + 36;
    dot.y = mock.y + 20;
  }
  leftPanel.appendChild(dot);

  const lbl = textNode("Pos Label", posNames[i], "Regular", 12, "#374151");
  lbl.x = option.x + (130 - lbl.width) / 2;
  lbl.y = option.y + 62;
  leftPanel.appendChild(lbl);
}

// Footer actions
const actionsTop = 716;
const divider = figma.createRectangle();
divider.resize(416, 1);
divider.fills = [{ type: "SOLID", color: rgb("#E5E7EB") }];
divider.x = 32;
divider.y = actionsTop;
leftPanel.appendChild(divider);

const backBtn = cardRect(202, 44, 8, "#FFFFFF", "#E5E7EB");
backBtn.name = "Button / Back";
backBtn.x = 32;
backBtn.y = 736;
backBtn.layoutMode = "HORIZONTAL";
backBtn.primaryAxisAlignItems = "CENTER";
backBtn.counterAxisAlignItems = "CENTER";
backBtn.setPluginData("destination", "./02-onboarding-setup.html");
backBtn.setPluginData("analytics_label", "onboarding_customize_back");
leftPanel.appendChild(backBtn);

const backText = textNode("Label", "Orqaga", "Semi Bold", 14, "#374151");
backBtn.appendChild(backText);

const nextBtn = cardRect(214, 44, 8, "#4F46E5", null);
nextBtn.name = "Button / Next";
nextBtn.x = 234;
nextBtn.y = 736;
nextBtn.layoutMode = "HORIZONTAL";
nextBtn.primaryAxisAlignItems = "CENTER";
nextBtn.counterAxisAlignItems = "CENTER";
nextBtn.setPluginData("destination", "./05-widget-install.html");
nextBtn.setPluginData("analytics_label", "onboarding_customize_continue");
leftPanel.appendChild(nextBtn);

const nextText = textNode("Label", "Keyingisi", "Semi Bold", 14, "#FFFFFF");
nextBtn.appendChild(nextText);

// Right: preview
const previewTitle = textNode("Preview Title", "Jonli ko'rinish", "Semi Bold", 20, "#111827");
previewTitle.x = (960 - previewTitle.width) / 2;
previewTitle.y = 56;
rightPanel.appendChild(previewTitle);

const previewSub = textNode("Preview Subtitle", "O'zgarishlar darhol ko'rinadi", "Regular", 14, "#6B7280");
previewSub.x = (960 - previewSub.width) / 2;
previewSub.y = 88;
rightPanel.appendChild(previewSub);

const previewWindow = cardRect(480, 600, 12, "#FFFFFF", null);
previewWindow.name = "Preview Window";
previewWindow.x = (960 - 480) / 2;
previewWindow.y = 132;
previewWindow.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#111827"), a: 0.1 },
    offset: { x: 0, y: 10 },
    radius: 25,
    visible: true,
    blendMode: "NORMAL"
  }
];
rightPanel.appendChild(previewWindow);

const mockHeader = cardRect(480, 54, 0, "#1F2937", null);
mockHeader.name = "Mock Header";
mockHeader.x = previewWindow.x;
mockHeader.y = previewWindow.y;
rightPanel.appendChild(mockHeader);

const siteText = textNode("Site Title", "Sizning saytingiz", "Semi Bold", 14, "#FFFFFF");
siteText.x = mockHeader.x + 24;
siteText.y = mockHeader.y + 18;
rightPanel.appendChild(siteText);

const p1 = textNode("Paragraph", "Bu yerda saytingiz kontenti joylashadi...", "Regular", 14, "#6B7280");
p1.x = previewWindow.x + 24;
p1.y = previewWindow.y + 86;
rightPanel.appendChild(p1);

const p2 = textNode("Paragraph", "Chat widgeti o'ng pastki burchakda ko'rinadi.", "Regular", 14, "#6B7280");
p2.x = previewWindow.x + 24;
p2.y = previewWindow.y + 112;
rightPanel.appendChild(p2);

const widget = figma.createEllipse();
widget.name = "Chat Widget";
widget.resize(60, 60);
widget.x = previewWindow.x + 480 - 84;
widget.y = previewWindow.y + 600 - 84;
widget.fills = [{ type: "SOLID", color: rgb("#4F46E5") }];
widget.effects = [
  {
    type: "DROP_SHADOW",
    color: { ...rgb("#4F46E5"), a: 0.4 },
    offset: { x: 0, y: 4 },
    radius: 12,
    visible: true,
    blendMode: "NORMAL"
  }
];
rightPanel.appendChild(widget);

const widgetIcon = textNode("Icon", "...", "Bold", 20, "#FFFFFF");
widgetIcon.x = widget.x + 22;
widgetIcon.y = widget.y + 19;
rightPanel.appendChild(widgetIcon);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return {
  success: true,
  frameId: screen.id,
  frameName: screen.name
};
