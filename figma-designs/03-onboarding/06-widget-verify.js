// QULAY CHAT - Onboarding - 06 Widget Verify (Step 4/4)
// HTML source: figma-html-pages/03-onboarding/06-widget-verify.html

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

const frameName = "03 - Onboarding - 06 - Widget Verify (4/4)";
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
track.appendChild(dot("done", "✓"));
track.appendChild(connector(true));
track.appendChild(dot("active", "4"));

const ratio = textNode("Ratio", "4/4", "Medium", 14, "#6B7280");
progress.appendChild(ratio);
progress.x = (1440 - progress.width) / 2;

const card = rectFrame(860, 660, 12, "#FFFFFF", "#E5E7EB");
card.name = "Verify Card";
card.x = (1440 - 860) / 2;
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

const title = textNode("Title", "Tekshirish va test", "Semi Bold", 28, "#111827");
title.x = 32;
title.y = 32;
card.appendChild(title);

const sub = textNode("Subtitle", "Widget to'g'ri ishlayotganini tekshiring va onboardingni yakunlang.", "Regular", 15, "#6B7280");
sub.x = 32;
sub.y = 74;
card.appendChild(sub);

const list = rectFrame(796, 238, 10, "#FFFFFF", "#E5E7EB");
list.name = "Checklist";
list.x = 32;
list.y = 120;
card.appendChild(list);

const rows = [
  { text: "Workspace yaratildi", ok: true },
  { text: "Widget dizayni sozlandi", ok: true },
  { text: "Install kodi tayyorlandi", ok: true },
  { text: "Birinchi test xabar yuborish", ok: false }
];

for (let i = 0; i < rows.length; i += 1) {
  const y = 12 + i * 56;
  if (i > 0) {
    const div = figma.createRectangle();
    div.resize(764, 1);
    div.x = 16;
    div.y = y - 10;
    div.fills = [{ type: "SOLID", color: rgb("#E5E7EB") }];
    list.appendChild(div);
  }

  const badge = figma.createEllipse();
  badge.resize(20, 20);
  badge.x = 16;
  badge.y = y;
  badge.fills = [{ type: "SOLID", color: rows[i].ok ? rgb("#10B981") : rgb("#F59E0B") }];
  list.appendChild(badge);

  const badgeText = textNode("Badge", rows[i].ok ? "✓" : "!", "Bold", 12, "#FFFFFF");
  badgeText.textAlignHorizontal = "CENTER";
  badgeText.resize(20, 20);
  badgeText.x = 16;
  badgeText.y = y + 4;
  list.appendChild(badgeText);

  const label = textNode("Item", rows[i].text, "Regular", 14, "#374151");
  label.x = 46;
  label.y = y + 2;
  list.appendChild(label);

  const state = textNode("State", rows[i].ok ? "Bajarildi" : "Kutilmoqda", "Regular", 12, "#6B7280");
  state.x = 720;
  state.y = y + 4;
  list.appendChild(state);
}

const testInput = rectFrame(626, 44, 8, "#FFFFFF", "#D1D5DB");
testInput.name = "Test Input";
testInput.x = 32;
testInput.y = 386;
card.appendChild(testInput);

const placeholder = textNode("Placeholder", "Masalan: Salom, test xabar", "Regular", 14, "#9CA3AF");
placeholder.x = 46;
placeholder.y = 401;
card.appendChild(placeholder);

const sendBtn = rectFrame(170, 44, 8, "#4F46E5", null);
sendBtn.name = "Button / Send Test";
sendBtn.x = 658;
sendBtn.y = 386;
sendBtn.layoutMode = "HORIZONTAL";
sendBtn.primaryAxisAlignItems = "CENTER";
sendBtn.counterAxisAlignItems = "CENTER";
sendBtn.setPluginData("action", "send_test_message");
card.appendChild(sendBtn);
const sendText = textNode("Label", "Test yuborish", "Semi Bold", 14, "#FFFFFF");
sendBtn.appendChild(sendText);

const result = textNode("Result", "Test xabar yuborilgandan keyin holat yangilanadi.", "Regular", 13, "#6B7280");
result.x = 32;
result.y = 444;
card.appendChild(result);

const backBtn = rectFrame(170, 44, 8, "#FFFFFF", "#D1D5DB");
backBtn.name = "Button / Back";
backBtn.x = 32;
backBtn.y = 580;
backBtn.layoutMode = "HORIZONTAL";
backBtn.primaryAxisAlignItems = "CENTER";
backBtn.counterAxisAlignItems = "CENTER";
backBtn.setPluginData("destination", "./05-widget-install.html");
backBtn.setPluginData("analytics_label", "onboarding_verify_back");
card.appendChild(backBtn);
const backText = textNode("Label", "Orqaga", "Semi Bold", 14, "#374151");
backBtn.appendChild(backText);

const finishBtn = rectFrame(210, 44, 8, "#4F46E5", null);
finishBtn.name = "Button / Finish";
finishBtn.x = 618;
finishBtn.y = 580;
finishBtn.layoutMode = "HORIZONTAL";
finishBtn.primaryAxisAlignItems = "CENTER";
finishBtn.counterAxisAlignItems = "CENTER";
finishBtn.setPluginData("destination", "../04-dashboard/01-dashboard.html");
finishBtn.setPluginData("analytics_label", "onboarding_complete");
card.appendChild(finishBtn);
const finishText = textNode("Label", "Dashboardga o'tish", "Semi Bold", 14, "#FFFFFF");
finishBtn.appendChild(finishText);

figma.currentPage.appendChild(screen);
figma.currentPage.selection = [screen];
figma.viewport.scrollAndZoomIntoView([screen]);

return { success: true, frameId: screen.id, frameName: screen.name };
