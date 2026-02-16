// CHATFLOW - Onboarding - 05 Widget Install (Step 3/4)
// HTML source: figma-html-pages/03-onboarding/05-widget-install.html

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

function rectFrame(w, h, radius, fillHex, strokeHex) {
  const f = figma.createFrame();
  f.resize(w, h);
  f.cornerRadius = radius;
  f.fills = [{ type: "SOLID", color: rgb(fillHex) }];
  if (strokeHex) {
    f.strokes = [{ type: "SOLID", color: rgb(strokeHex) }];
    f.strokeWeight = 1;
  }
  return f;
}

function dot(type, label) {
  const wrap = figma.createFrame();
  wrap.resize(24, 24);
  wrap.fills = [];

  const c = figma.createEllipse();
  c.resize(24, 24);
  c.fills = [{ type: "SOLID", color: type === "done" || type === "active" ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  wrap.appendChild(c);

  if (label) {
    const t = textNode("Dot Label", label, "Bold", 12, "#FFFFFF");
    t.textAlignHorizontal = "CENTER";
    t.resize(24, 24);
    t.y = 5;
    wrap.appendChild(t);
  }
  return wrap;
}

function connector(done) {
  const line = figma.createRectangle();
  line.resize(48, 2);
  line.fills = [{ type: "SOLID", color: done ? rgb("#4F46E5") : rgb("#D1D5DB") }];
  return line;
}

await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });

const frameName = "03 - Onboarding - 05 - Widget Install (3/4)";
const existing = figma.currentPage.findOne((n) => n.type === "FRAME" && n.name === frameName);
if (existing) {
  existing.remove();
}

const screen = figma.createFrame();
screen.name = frameName;
screen.resize(1440, 900);
screen.fills = [{ type: "SOLID", color: rgb("#F9FAFB") }];

const progress = figma.createFrame();
progress.layoutMode = "HORIZONTAL";
progress.primaryAxisSizingMode = "AUTO";
progress.counterAxisSizingMode = "AUTO";
progress.counterAxisAlignItems = "CENTER";
progress.itemSpacing = 16;
progress.fills = [];
progress.y = 74;
screen.appendChild(progress);

const track = figma.createFrame();
track.layoutMode = "HORIZONTAL";
track.primaryAxisSizingMode = "AUTO";
track.counterAxisSizingMode = "AUTO";
track.counterAxisAlignItems = "CENTER";
track.fills = [];
progress.appendChild(track);

track.appendChild(dot("done", "✓"));
track.appendChild(connector(true));
track.appendChild(dot("done", "✓"));
track.appendChild(connector(true));
track.appendChild(dot("active", "3"));
track.appendChild(connector(false));
track.appendChild(dot("upcoming", ""));

const ratio = textNode("Ratio", "3/4", "Medium", 14, "#6B7280");
progress.appendChild(ratio);
progress.x = (1440 - progress.width) / 2;

const card = rectFrame(920, 660, 12, "#FFFFFF", "#E5E7EB");
card.name = "Install Card";
card.x = (1440 - 920) / 2;
card.y = 120;
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

const title = textNode("Title", "Widgetni saytingizga o'rnating", "Semi Bold", 28, "#111827");
title.x = 32;
title.y = 32;
card.appendChild(title);

const sub = textNode("Subtitle", "Platformangizga mos kodni nusxalab, </body> dan oldin joylashtiring.", "Regular", 15, "#6B7280");
sub.x = 32;
sub.y = 74;
card.appendChild(sub);

const tabs = ["Website (HTML)", "WordPress", "Shopify", "React", "Next.js"];
for (let i = 0; i < tabs.length; i += 1) {
  const tab = rectFrame(120, 40, 8, i === 0 ? "#4F46E5" : "#FFFFFF", i === 0 ? null : "#E5E7EB");
  if (i === 0) {
    tab.resize(130, 40);
  }
  tab.x = 32 + (i === 0 ? 0 : 138 + (i - 1) * 128);
  tab.y = 118;
  card.appendChild(tab);

  const t = textNode("Tab", tabs[i], "Medium", 14, i === 0 ? "#FFFFFF" : "#374151");
  t.x = tab.x + (tab.width - t.width) / 2;
  t.y = tab.y + 12;
  card.appendChild(t);
}

const snippetWrap = rectFrame(856, 190, 12, "#0F172A", null);
snippetWrap.name = "Snippet";
snippetWrap.x = 32;
snippetWrap.y = 176;
card.appendChild(snippetWrap);

const copyBtn = rectFrame(86, 32, 8, "#1E293B", "#475569");
copyBtn.name = "Copy";
copyBtn.x = snippetWrap.x + snippetWrap.width - 98;
copyBtn.y = snippetWrap.y + 12;
copyBtn.setPluginData("action", "copy_snippet");
card.appendChild(copyBtn);
const copyText = textNode("Copy Label", "Nusxalash", "Semi Bold", 12, "#E2E8F0");
copyText.x = copyBtn.x + (copyBtn.width - copyText.width) / 2;
copyText.y = copyBtn.y + 9;
card.appendChild(copyText);

const codeLines = [
  "<script>",
  "  window.CHATFLOW_CONFIG = {",
  "    workspace: \"TechUz Support\",",
  "    primaryColor: \"#4F46E5\"",
  "  };",
  "</script>",
  "<script src=\"https://cdn.chatflow.uz/widget.js\" async></script>"
];
for (let i = 0; i < codeLines.length; i += 1) {
  const line = textNode("Code", codeLines[i], "Regular", 13, "#CBD5E1");
  line.x = 48;
  line.y = 194 + i * 22;
  card.appendChild(line);
}

const inst = [
  "1. Kodni nusxalang.",
  "2. Asosiy template faylini oching.",
  "3. Snippetni </body> oldidan joylashtiring.",
  "4. Deploy qiling va keyingi qadamda tekshiring."
];
for (let i = 0; i < inst.length; i += 1) {
  const line = textNode("Instruction", inst[i], "Regular", 14, "#374151");
  line.x = 40;
  line.y = 386 + i * 28;
  card.appendChild(line);
}

const status = textNode("Status", "Snippet hali nusxalanmadi.", "Regular", 13, "#6B7280");
status.x = 32;
status.y = 504;
card.appendChild(status);

const backBtn = rectFrame(170, 44, 8, "#FFFFFF", "#D1D5DB");
backBtn.name = "Button / Back";
backBtn.x = 32;
backBtn.y = 560;
backBtn.layoutMode = "HORIZONTAL";
backBtn.primaryAxisAlignItems = "CENTER";
backBtn.counterAxisAlignItems = "CENTER";
backBtn.setPluginData("destination", "./04-widget-customize.html");
backBtn.setPluginData("analytics_label", "onboarding_install_back");
card.appendChild(backBtn);
const backText = textNode("Label", "Orqaga", "Semi Bold", 14, "#374151");
backBtn.appendChild(backText);

const nextBtn = rectFrame(220, 44, 8, "#4F46E5", null);
nextBtn.name = "Button / Next";
nextBtn.x = 668;
nextBtn.y = 560;
nextBtn.layoutMode = "HORIZONTAL";
nextBtn.primaryAxisAlignItems = "CENTER";
nextBtn.counterAxisAlignItems = "CENTER";
nextBtn.setPluginData("destination", "./06-widget-verify.html");
nextBtn.setPluginData("analytics_label", "onboarding_install_continue");
card.appendChild(nextBtn);
const nextText = textNode("Label", "Tekshirishga o'tish", "Semi Bold", 14, "#FFFFFF");
nextBtn.appendChild(nextText);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return { success: true, frameId: screen.id, frameName: screen.name };
