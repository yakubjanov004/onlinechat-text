// QULAY CHAT - Automation (Working Hours) sahifasini Figma'da yaratish

async function createAutomationScreen() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  const container = figma.createFrame();
  container.name = "06 - Automation - Working Hours";
  container.resize(1440, 1024);
  container.fills = [{ type: 'SOLID', color: { r: 249/255, g: 250/255, b: 251/255 } }];
  container.clipsContent = false;

  // Header
  const header = figma.createFrame();
  header.name = "Header";
  header.resize(1440, 64);
  header.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  header.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  header.strokeWeight = 1;
  header.strokeAlign = "OUTSIDE";
  container.appendChild(header);

  const logo = figma.createText();
  logo.name = "Logo";
  logo.x = 24;
  logo.y = 20;
  logo.characters = "QULAY CHAT";
  logo.fontSize = 20;
  logo.fontName = { family: "Inter", style: "Bold" };
  logo.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  header.appendChild(logo);

  // Sidebar
  const sidebar = figma.createFrame();
  sidebar.name = "Sidebar";
  sidebar.resize(240, 960);
  sidebar.x = 0;
  sidebar.y = 64;
  sidebar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  sidebar.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  sidebar.strokeWeight = 1;
  sidebar.strokeAlign = "OUTSIDE";
  container.appendChild(sidebar);

  const sidebarItems = [
    { name: "Inbox", icon: "📥", active: false },
    { name: "Automation", icon: "🤖", active: true },
    { name: "Team", icon: "👥", active: false },
    { name: "Analytics", icon: "📊", active: false },
  ];

  let yPos = 16;
  sidebarItems.forEach(item => {
    const itemFrame = figma.createFrame();
    itemFrame.name = item.name;
    itemFrame.resize(240, 44);
    itemFrame.x = 0;
    itemFrame.y = yPos;
    itemFrame.fills = item.active ? 
      [{ type: 'SOLID', color: { r: 238/255, g: 242/255, b: 255/255 } }] : [];
    sidebar.appendChild(itemFrame);

    const icon = figma.createText();
    icon.x = 24;
    icon.y = 13;
    icon.characters = item.icon;
    icon.fontSize = 18;
    icon.fontName = { family: "Inter", style: "Regular" };
    itemFrame.appendChild(icon);

    const label = figma.createText();
    label.x = 56;
    label.y = 14;
    label.characters = item.name;
    label.fontSize = 14;
    label.fontName = { family: "Inter", style: "Medium" };
    label.fills = item.active ? 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }] : 
      [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    itemFrame.appendChild(label);

    yPos += 44;
  });

  // Content Area
  const contentX = 272;
  const contentY = 96;

  // Page Title
  const pageTitle = figma.createText();
  pageTitle.x = contentX;
  pageTitle.y = contentY;
  pageTitle.characters = "Automation & Availability";
  pageTitle.fontSize = 28;
  pageTitle.fontName = { family: "Inter", style: "Bold" };
  pageTitle.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  container.appendChild(pageTitle);

  const pageSubtitle = figma.createText();
  pageSubtitle.x = contentX;
  pageSubtitle.y = contentY + 40;
  pageSubtitle.characters = "Ish vaqti, avtomatik javoblar va triggerlarni boshqarish";
  pageSubtitle.fontSize = 14;
  pageSubtitle.fontName = { family: "Inter", style: "Regular" };
  pageSubtitle.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
  container.appendChild(pageSubtitle);

  // Tabs
  const tabs = ["Ish Vaqti", "Auto-Reply", "Triggers", "Greetings"];
  const tabsY = contentY + 88;
  let tabX = contentX;

  tabs.forEach((tab, i) => {
    const tabText = figma.createText();
    tabText.x = tabX;
    tabText.y = tabsY;
    tabText.characters = tab;
    tabText.fontSize = 14;
    tabText.fontName = { family: "Inter", style: "Medium" };
    tabText.fills = i === 0 ? 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }] : 
      [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    container.appendChild(tabText);

    if (i === 0) {
      const underline = figma.createRectangle();
      underline.resize(70, 2);
      underline.x = tabX;
      underline.y = tabsY + 30;
      underline.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
      container.appendChild(underline);
    }

    tabX += 130;
  });

  // Tab separator line
  const tabLine = figma.createRectangle();
  tabLine.resize(900, 1);
  tabLine.x = contentX;
  tabLine.y = tabsY + 32;
  tabLine.fills = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  container.appendChild(tabLine);

  // Settings Panel
  const settingsPanel = figma.createFrame();
  settingsPanel.name = "Settings Panel";
  settingsPanel.resize(650, 700);
  settingsPanel.x = contentX;
  settingsPanel.y = tabsY + 64;
  settingsPanel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  settingsPanel.cornerRadius = 12;
  settingsPanel.effects = [
    { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 1 }, radius: 3, blendMode: 'NORMAL', visible: true }
  ];
  container.appendChild(settingsPanel);

  // Toggle Switch
  const toggleBg = figma.createRectangle();
  toggleBg.resize(44, 24);
  toggleBg.x = 32;
  toggleBg.y = 32;
  toggleBg.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  toggleBg.cornerRadius = 12;
  settingsPanel.appendChild(toggleBg);

  const toggleKnob = figma.createEllipse();
  toggleKnob.resize(20, 20);
  toggleKnob.x = 54;
  toggleKnob.y = 34;
  toggleKnob.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  settingsPanel.appendChild(toggleKnob);

  const toggleLabel = figma.createText();
  toggleLabel.x = 88;
  toggleLabel.y = 34;
  toggleLabel.characters = "Ish vaqtini faollashtirish";
  toggleLabel.fontSize = 16;
  toggleLabel.fontName = { family: "Inter", style: "Medium" };
  toggleLabel.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  settingsPanel.appendChild(toggleLabel);

  const toggleDesc = figma.createText();
  toggleDesc.x = 88;
  toggleDesc.y = 60;
  toggleDesc.characters = "Agar o'chirilgan bo'lsa, vidjet doimo online holatda ko'rinadi";
  toggleDesc.fontSize = 14;
  toggleDesc.fontName = { family: "Inter", style: "Regular" };
  toggleDesc.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
  settingsPanel.appendChild(toggleDesc);

  // Schedule Section Title
  const scheduleTitle = figma.createText();
  scheduleTitle.x = 32;
  scheduleTitle.y = 112;
  scheduleTitle.characters = "Haftalik jadval";
  scheduleTitle.fontSize = 16;
  scheduleTitle.fontName = { family: "Inter", style: "Semi Bold" };
  scheduleTitle.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  settingsPanel.appendChild(scheduleTitle);

  // Schedule Table
  const days = [
    { name: "Dushanba", working: true },
    { name: "Seshanba", working: true },
    { name: "Chorshanba", working: true },
    { name: "Payshanba", working: true },
    { name: "Juma", working: true },
    { name: "Shanba", working: false },
    { name: "Yakshanba", working: false }
  ];

  const scheduleTable = figma.createFrame();
  scheduleTable.name = "Schedule Table";
  scheduleTable.resize(586, 364);
  scheduleTable.x = 32;
  scheduleTable.y = 148;
  scheduleTable.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  scheduleTable.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  scheduleTable.strokeWeight = 1;
  scheduleTable.cornerRadius = 8;
  settingsPanel.appendChild(scheduleTable);

  let rowY = 0;
  days.forEach((day, index) => {
    const row = figma.createFrame();
    row.name = `Row ${day.name}`;
    row.resize(586, 52);
    row.x = 0;
    row.y = rowY;
    row.fills = [];
    if (index < days.length - 1) {
      row.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
      row.strokeWeight = 1;
      row.strokeAlign = "OUTSIDE";
    }
    scheduleTable.appendChild(row);

    const dayName = figma.createText();
    dayName.x = 16;
    dayName.y = 16;
    dayName.characters = day.name;
    dayName.fontSize = 14;
    dayName.fontName = { family: "Inter", style: "Medium" };
    dayName.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
    row.appendChild(dayName);

    // Radio buttons
    const workingRadio = figma.createEllipse();
    workingRadio.resize(16, 16);
    workingRadio.x = 140;
    workingRadio.y = 18;
    workingRadio.strokes = [{ type: 'SOLID', color: day.working ? { r: 79/255, g: 70/255, b: 229/255 } : { r: 209/255, g: 213/255, b: 219/255 } }];
    workingRadio.strokeWeight = 2;
    workingRadio.fills = [];
    row.appendChild(workingRadio);

    if (day.working) {
      const radioDot = figma.createEllipse();
      radioDot.resize(8, 8);
      radioDot.x = 144;
      radioDot.y = 22;
      radioDot.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
      row.appendChild(radioDot);
    }

    const workingLabel = figma.createText();
    workingLabel.x = 162;
    workingLabel.y = 17;
    workingLabel.characters = "Ishlash";
    workingLabel.fontSize = 13;
    workingLabel.fontName = { family: "Inter", style: "Regular" };
    workingLabel.fills = [{ type: 'SOLID', color: { r: 55/255, g: 65/255, b: 81/255 } }];
    row.appendChild(workingLabel);

    // Off day radio
    const offRadio = figma.createEllipse();
    offRadio.resize(16, 16);
    offRadio.x = 230;
    offRadio.y = 18;
    offRadio.strokes = [{ type: 'SOLID', color: !day.working ? { r: 79/255, g: 70/255, b: 229/255 } : { r: 209/255, g: 213/255, b: 219/255 } }];
    offRadio.strokeWeight = 2;
    offRadio.fills = [];
    row.appendChild(offRadio);

    if (!day.working) {
      const radioDot = figma.createEllipse();
      radioDot.resize(8, 8);
      radioDot.x = 234;
      radioDot.y = 22;
      radioDot.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
      row.appendChild(radioDot);
    }

    const offLabel = figma.createText();
    offLabel.x = 252;
    offLabel.y = 17;
    offLabel.characters = "Dam olish";
    offLabel.fontSize = 13;
    offLabel.fontName = { family: "Inter", style: "Regular" };
    offLabel.fills = [{ type: 'SOLID', color: { r: 55/255, g: 65/255, b: 81/255 } }];
    row.appendChild(offLabel);

    // Time pickers
    if (day.working) {
      const startTime = figma.createRectangle();
      startTime.resize(80, 32);
      startTime.x = 340;
      startTime.y = 10;
      startTime.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      startTime.strokes = [{ type: 'SOLID', color: { r: 209/255, g: 213/255, b: 219/255 } }];
      startTime.strokeWeight = 1;
      startTime.cornerRadius = 6;
      row.appendChild(startTime);

      const startLabel = figma.createText();
      startLabel.x = 360;
      startLabel.y = 18;
      startLabel.characters = "09:00";
      startLabel.fontSize = 14;
      startLabel.fontName = { family: "Inter", style: "Regular" };
      startLabel.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
      row.appendChild(startLabel);

      const separator = figma.createText();
      separator.x = 430;
      separator.y = 18;
      separator.characters = "—";
      separator.fontSize = 14;
      separator.fontName = { family: "Inter", style: "Regular" };
      separator.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
      row.appendChild(separator);

      const endTime = figma.createRectangle();
      endTime.resize(80, 32);
      endTime.x = 450;
      endTime.y = 10;
      endTime.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      endTime.strokes = [{ type: 'SOLID', color: { r: 209/255, g: 213/255, b: 219/255 } }];
      endTime.strokeWeight = 1;
      endTime.cornerRadius = 6;
      row.appendChild(endTime);

      const endLabel = figma.createText();
      endLabel.x = 470;
      endLabel.y = 18;
      endLabel.characters = "18:00";
      endLabel.fontSize = 14;
      endLabel.fontName = { family: "Inter", style: "Regular" };
      endLabel.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
      row.appendChild(endLabel);
    }

    rowY += 52;
  });

  // Apply to all button
  const applyBtn = figma.createRectangle();
  applyBtn.resize(160, 36);
  applyBtn.x = 32;
  applyBtn.y = 532;
  applyBtn.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  applyBtn.strokes = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  applyBtn.strokeWeight = 1;
  applyBtn.cornerRadius = 8;
  settingsPanel.appendChild(applyBtn);

  const applyLabel = figma.createText();
  applyLabel.x = 56;
  applyLabel.y = 542;
  applyLabel.characters = "Barchaga qo'llash";
  applyLabel.fontSize = 14;
  applyLabel.fontName = { family: "Inter", style: "Medium" };
  applyLabel.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  settingsPanel.appendChild(applyLabel);

  // Save button
  const saveBtn = figma.createRectangle();
  saveBtn.resize(120, 44);
  saveBtn.x = 32;
  saveBtn.y = 636;
  saveBtn.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  saveBtn.cornerRadius = 8;
  settingsPanel.appendChild(saveBtn);

  const saveLabel = figma.createText();
  saveLabel.x = 62;
  saveLabel.y = 648;
  saveLabel.characters = "Saqlash";
  saveLabel.fontSize = 14;
  saveLabel.fontName = { family: "Inter", style: "Medium" };
  saveLabel.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  settingsPanel.appendChild(saveLabel);

  // Preview Sidebar
  const previewSidebar = figma.createFrame();
  previewSidebar.name = "Preview Sidebar";
  previewSidebar.resize(400, 500);
  previewSidebar.x = contentX + 682;
  previewSidebar.y = tabsY + 64;
  previewSidebar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  previewSidebar.cornerRadius = 12;
  previewSidebar.effects = [
    { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.1 }, offset: { x: 0, y: 1 }, radius: 3, blendMode: 'NORMAL', visible: true }
  ];
  container.appendChild(previewSidebar);

  // Preview title
  const previewTitle = figma.createText();
  previewTitle.x = 24;
  previewTitle.y = 24;
  previewTitle.characters = "Joriy holat";
  previewTitle.fontSize = 16;
  previewTitle.fontName = { family: "Inter", style: "Semi Bold" };
  previewTitle.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  previewSidebar.appendChild(previewTitle);

  // Status card
  const statusCard = figma.createFrame();
  statusCard.resize(352, 72);
  statusCard.x = 24;
  statusCard.y = 56;
  statusCard.fills = [{ type: 'SOLID', color: { r: 249/255, g: 250/255, b: 251/255 } }];
  statusCard.cornerRadius = 8;
  previewSidebar.appendChild(statusCard);

  const statusLabel = figma.createText();
  statusLabel.x = 16;
  statusLabel.y = 16;
  statusLabel.characters = "Hozirgi holat";
  statusLabel.fontSize = 13;
  statusLabel.fontName = { family: "Inter", style: "Regular" };
  statusLabel.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
  statusCard.appendChild(statusLabel);

  const statusValue = figma.createText();
  statusValue.x = 16;
  statusValue.y = 40;
  statusValue.characters = "● Online";
  statusValue.fontSize = 18;
  statusValue.fontName = { family: "Inter", style: "Semi Bold" };
  statusValue.fills = [{ type: 'SOLID', color: { r: 16/255, g: 185/255, b: 129/255 } }];
  statusCard.appendChild(statusValue);

  // Schedule preview title
  const schedPreviewTitle = figma.createText();
  schedPreviewTitle.x = 24;
  schedPreviewTitle.y = 156;
  schedPreviewTitle.characters = "Haftalik jadval";
  schedPreviewTitle.fontSize = 16;
  schedPreviewTitle.fontName = { family: "Inter", style: "Semi Bold" };
  schedPreviewTitle.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  previewSidebar.appendChild(schedPreviewTitle);

  // Schedule preview list
  const schedulePreview = figma.createFrame();
  schedulePreview.resize(352, 280);
  schedulePreview.x = 24;
  schedulePreview.y = 188;
  schedulePreview.fills = [];
  schedulePreview.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  schedulePreview.strokeWeight = 1;
  schedulePreview.cornerRadius = 8;
  previewSidebar.appendChild(schedulePreview);

  const previewDays = [
    { name: "Dushanba", time: "09:00 — 18:00" },
    { name: "Seshanba", time: "09:00 — 18:00" },
    { name: "Chorshanba", time: "09:00 — 18:00" },
    { name: "Payshanba", time: "09:00 — 18:00" },
    { name: "Juma", time: "09:00 — 18:00" },
    { name: "Shanba", time: "Dam olish" },
    { name: "Yakshanba", time: "Dam olish" }
  ];

  let prevY = 16;
  previewDays.forEach((day, i) => {
    const dayLabel = figma.createText();
    dayLabel.x = 16;
    dayLabel.y = prevY;
    dayLabel.characters = day.name;
    dayLabel.fontSize = 13;
    dayLabel.fontName = { family: "Inter", style: "Medium" };
    dayLabel.fills = [{ type: 'SOLID', color: { r: 55/255, g: 65/255, b: 81/255 } }];
    schedulePreview.appendChild(dayLabel);

    const timeLabel = figma.createText();
    timeLabel.x = 250;
    timeLabel.y = prevY;
    timeLabel.characters = day.time;
    timeLabel.fontSize = 13;
    timeLabel.fontName = { family: "Inter", style: "Regular" };
    timeLabel.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    schedulePreview.appendChild(timeLabel);

    if (i < previewDays.length - 1) {
      const line = figma.createRectangle();
      line.resize(320, 1);
      line.x = 16;
      line.y = prevY + 28;
      line.fills = [{ type: 'SOLID', color: { r: 243/255, g: 244/255, b: 246/255 } }];
      schedulePreview.appendChild(line);
    }

    prevY += 40;
  });

  figma.currentPage.appendChild(container);
  figma.currentPage.selection = [container];
  figma.viewport.scrollAndZoomIntoView([container]);

  return { success: true, frameId: container.id, frameName: container.name };
}

createAutomationScreen();
