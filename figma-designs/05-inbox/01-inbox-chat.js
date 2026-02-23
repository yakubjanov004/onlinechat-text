// QULAY CHAT - Inbox sahifasini Figma'da yaratish

async function createInboxScreen() {
  // Fontlarni yuklash
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  // Asosiy container (1440x900)
  const container = figma.createFrame();
  container.name = "05 - Inbox";
  container.resize(1440, 900);
  container.fills = [{ type: 'SOLID', color: { r: 249/255, g: 250/255, b: 251/255 } }];
  container.clipsContent = false;

  // ========== HEADER (64px) ==========
  const header = figma.createFrame();
  header.name = "Header";
  header.resize(1440, 64);
  header.x = 0;
  header.y = 0;
  header.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  header.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  header.strokeWeight = 1;
  header.strokeAlign = "OUTSIDE";
  container.appendChild(header);

  // Logo
  const logo = figma.createText();
  logo.name = "Logo";
  logo.x = 24;
  logo.y = 20;
  logo.characters = "QULAY CHAT";
  logo.fontSize = 20;
  logo.fontName = { family: "Inter", style: "Bold" };
  logo.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  header.appendChild(logo);

  // Search input
  const searchBg = figma.createRectangle();
  searchBg.name = "Search Background";
  searchBg.resize(400, 40);
  searchBg.x = 520;
  searchBg.y = 12;
  searchBg.fills = [{ type: 'SOLID', color: { r: 243/255, g: 244/255, b: 246/255 } }];
  searchBg.cornerRadius = 8;
  header.appendChild(searchBg);

  const searchText = figma.createText();
  searchText.name = "Search Placeholder";
  searchText.x = 560;
  searchText.y = 22;
  searchText.characters = "Qidirish... (Ctrl+K)";
  searchText.fontSize = 14;
  searchText.fontName = { family: "Inter", style: "Regular" };
  searchText.fills = [{ type: 'SOLID', color: { r: 156/255, g: 163/255, b: 175/255 } }];
  header.appendChild(searchText);

  // Status badge
  const statusText = figma.createText();
  statusText.name = "Status";
  statusText.x = 1260;
  statusText.y = 22;
  statusText.characters = "● Online";
  statusText.fontSize = 13;
  statusText.fontName = { family: "Inter", style: "Medium" };
  statusText.fills = [{ type: 'SOLID', color: { r: 16/255, g: 185/255, b: 129/255 } }];
  header.appendChild(statusText);

  // ========== SIDEBAR (240px width) ==========
  const sidebar = figma.createFrame();
  sidebar.name = "Sidebar";
  sidebar.resize(240, 836);
  sidebar.x = 0;
  sidebar.y = 64;
  sidebar.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  sidebar.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  sidebar.strokeWeight = 1;
  sidebar.strokeAlign = "OUTSIDE";
  container.appendChild(sidebar);

  // Sidebar items
  const sidebarItems = [
    { name: "Inbox", icon: "📥", active: true },
    { name: "Automation", icon: "🤖", active: false },
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
      [{ type: 'SOLID', color: { r: 238/255, g: 242/255, b: 255/255 } }] : 
      [];
    sidebar.appendChild(itemFrame);

    const iconText = figma.createText();
    iconText.x = 24;
    iconText.y = 13;
    iconText.characters = item.icon;
    iconText.fontSize = 18;
    iconText.fontName = { family: "Inter", style: "Regular" };
    itemFrame.appendChild(iconText);

    const labelText = figma.createText();
    labelText.x = 56;
    labelText.y = 14;
    labelText.characters = item.name;
    labelText.fontSize = 14;
    labelText.fontName = { family: "Inter", style: "Medium" };
    labelText.fills = item.active ? 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }] : 
      [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    itemFrame.appendChild(labelText);

    yPos += 44;
  });

  // ========== CHAT LIST PANEL (360px width) ==========
  const chatList = figma.createFrame();
  chatList.name = "Chat List Panel";
  chatList.resize(360, 836);
  chatList.x = 240;
  chatList.y = 64;
  chatList.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  chatList.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  chatList.strokeWeight = 1;
  chatList.strokeAlign = "OUTSIDE";
  container.appendChild(chatList);

  // Chat search
  const chatSearchBg = figma.createRectangle();
  chatSearchBg.name = "Chat Search";
  chatSearchBg.resize(328, 40);
  chatSearchBg.x = 16;
  chatSearchBg.y = 16;
  chatSearchBg.fills = [{ type: 'SOLID', color: { r: 243/255, g: 244/255, b: 246/255 } }];
  chatSearchBg.cornerRadius = 8;
  chatList.appendChild(chatSearchBg);

  // Chat tabs
  const tabs = ["Active", "Assigned", "Closed"];
  let tabX = 16;
  tabs.forEach((tab, i) => {
    const tabBg = figma.createRectangle();
    tabBg.name = `Tab ${tab}`;
    tabBg.resize(100, 36);
    tabBg.x = tabX;
    tabBg.y = 68;
    tabBg.fills = i === 0 ? 
      [{ type: 'SOLID', color: { r: 224/255, g: 231/255, b: 255/255 } }] : 
      [];
    tabBg.cornerRadius = 8;
    chatList.appendChild(tabBg);

    const tabText = figma.createText();
    tabText.x = tabX + 20;
    tabText.y = 78;
    tabText.characters = tab;
    tabText.fontSize = 14;
    tabText.fontName = { family: "Inter", style: "Medium" };
    tabText.fills = i === 0 ? 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }] : 
      [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    chatList.appendChild(tabText);

    tabX += 108;
  });

  // Chat cards
  const chats = [
    { name: "Ahmad Valiyev", message: "Salom, yordam kerak edi...", agent: "Sara", time: "2m", unread: 3, online: true },
    { name: "Nodira Rahimova", message: "Narxlar haqida ma'lumot...", agent: "Bobur", time: "5m", unread: 1, online: false },
    { name: "Sardor Tursunov", message: "Rahmat! Hammasi tushunarli", agent: "Ali", time: "1h", unread: 0, online: false },
  ];

  let chatY = 120;
  chats.forEach((chat, index) => {
    const chatCard = figma.createFrame();
    chatCard.name = `Chat Card ${index + 1}`;
    chatCard.resize(360, 76);
    chatCard.x = 0;
    chatCard.y = chatY;
    chatCard.fills = index === 0 ? 
      [{ type: 'SOLID', color: { r: 238/255, g: 242/255, b: 255/255 } }] : 
      [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    chatList.appendChild(chatCard);

    // Status dot
    const statusDot = figma.createEllipse();
    statusDot.resize(8, 8);
    statusDot.x = 16;
    statusDot.y = 20;
    statusDot.fills = chat.online ? 
      [{ type: 'SOLID', color: { r: 16/255, g: 185/255, b: 129/255 } }] : 
      [{ type: 'SOLID', color: { r: 209/255, g: 213/255, b: 219/255 } }];
    chatCard.appendChild(statusDot);

    // Customer name
    const nameText = figma.createText();
    nameText.x = 32;
    nameText.y = 16;
    nameText.characters = chat.name;
    nameText.fontSize = 14;
    nameText.fontName = { family: "Inter", style: "Semi Bold" };
    nameText.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
    chatCard.appendChild(nameText);

    // Time
    const timeText = figma.createText();
    timeText.x = 310;
    timeText.y = 18;
    timeText.characters = chat.time;
    timeText.fontSize = 12;
    timeText.fontName = { family: "Inter", style: "Regular" };
    timeText.fills = [{ type: 'SOLID', color: { r: 156/255, g: 163/255, b: 175/255 } }];
    chatCard.appendChild(timeText);

    // Last message
    const messageText = figma.createText();
    messageText.x = 16;
    messageText.y = 38;
    messageText.characters = chat.message;
    messageText.fontSize = 13;
    messageText.fontName = { family: "Inter", style: "Regular" };
    messageText.fills = [{ type: 'SOLID', color: { r: 107/255, g: 114/255, b: 128/255 } }];
    chatCard.appendChild(messageText);

    // Agent
    const agentText = figma.createText();
    agentText.x = 16;
    agentText.y = 56;
    agentText.characters = chat.agent;
    agentText.fontSize = 12;
    agentText.fontName = { family: "Inter", style: "Regular" };
    agentText.fills = [{ type: 'SOLID', color: { r: 156/255, g: 163/255, b: 175/255 } }];
    chatCard.appendChild(agentText);

    // Unread badge
    if (chat.unread > 0) {
      const badge = figma.createRectangle();
      badge.resize(20, 18);
      badge.x = 320;
      badge.y = 54;
      badge.fills = [{ type: 'SOLID', color: { r: 239/255, g: 68/255, b: 68/255 } }];
      badge.cornerRadius = 10;
      chatCard.appendChild(badge);

      const badgeText = figma.createText();
      badgeText.x = 326;
      badgeText.y = 56;
      badgeText.characters = chat.unread.toString();
      badgeText.fontSize = 11;
      badgeText.fontName = { family: "Inter", style: "Bold" };
      badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
      chatCard.appendChild(badgeText);
    }

    chatY += 76;
  });

  // ========== CHAT WINDOW (840px width) ==========
  const chatWindow = figma.createFrame();
  chatWindow.name = "Chat Window";
  chatWindow.resize(840, 836);
  chatWindow.x = 600;
  chatWindow.y = 64;
  chatWindow.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  container.appendChild(chatWindow);

  // Chat header
  const chatHeader = figma.createFrame();
  chatHeader.name = "Chat Header";
  chatHeader.resize(840, 64);
  chatHeader.x = 0;
  chatHeader.y = 0;
  chatHeader.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  chatHeader.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  chatHeader.strokeWeight = 1;
  chatHeader.strokeAlign = "OUTSIDE";
  chatWindow.appendChild(chatHeader);

  const customerName = figma.createText();
  customerName.x = 24;
  customerName.y = 16;
  customerName.characters = "Ahmad Valiyev";
  customerName.fontSize = 16;
  customerName.fontName = { family: "Inter", style: "Semi Bold" };
  customerName.fills = [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }];
  chatHeader.appendChild(customerName);

  const onlineStatus = figma.createText();
  onlineStatus.x = 24;
  onlineStatus.y = 38;
  onlineStatus.characters = "● Online";
  onlineStatus.fontSize = 13;
  onlineStatus.fontName = { family: "Inter", style: "Regular" };
  onlineStatus.fills = [{ type: 'SOLID', color: { r: 16/255, g: 185/255, b: 129/255 } }];
  chatHeader.appendChild(onlineStatus);

  // Action buttons
  const actions = ["Tag", "Transfer", "Resolve"];
  let actionX = 640;
  actions.forEach((action, i) => {
    const btn = figma.createRectangle();
    btn.resize(90, 36);
    btn.x = actionX;
    btn.y = 14;
    btn.fills = i === 2 ? 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }] : 
      [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    btn.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
    btn.strokeWeight = 1;
    btn.cornerRadius = 8;
    chatHeader.appendChild(btn);

    const btnText = figma.createText();
    btnText.x = actionX + 20;
    btnText.y = 24;
    btnText.characters = action;
    btnText.fontSize = 14;
    btnText.fontName = { family: "Inter", style: "Medium" };
    btnText.fills = i === 2 ? 
      [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }] : 
      [{ type: 'SOLID', color: { r: 55/255, g: 65/255, b: 81/255 } }];
    chatHeader.appendChild(btnText);

    actionX += 100;
  });

  // Messages
  const messages = [
    { text: "Salom, yordam kerak edi", sender: "Ahmad", time: "14:20", incoming: true },
    { text: "Chat widgetni qanday qilib o'rnatish mumkin?", sender: "Ahmad", time: "14:21", incoming: true },
    { text: "Assalomu alaykum! Albatta yordam beraman", sender: "Sara", time: "14:21", incoming: false },
    { text: "Chat widgetni o'rnatish juda oson. Settings → Widget → Install code dan kod olasiz va saytingiz HTML'iga joylashtiring", sender: "Sara", time: "14:22", incoming: false },
  ];

  let msgY = 100;
  messages.forEach(msg => {
    const bubble = figma.createRectangle();
    const bubbleWidth = Math.min(500, msg.text.length * 7 + 24);
    bubble.resize(bubbleWidth, 60);
    bubble.x = msg.incoming ? 24 : (840 - bubbleWidth - 24);
    bubble.y = msgY;
    bubble.fills = msg.incoming ? 
      [{ type: 'SOLID', color: { r: 243/255, g: 244/255, b: 246/255 } }] : 
      [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
    bubble.cornerRadius = 12;
    chatWindow.appendChild(bubble);

    const msgText = figma.createText();
    msgText.x = bubble.x + 12;
    msgText.y = msgY + 12;
    msgText.characters = msg.text;
    msgText.fontSize = 14;
    msgText.fontName = { family: "Inter", style: "Regular" };
    msgText.fills = msg.incoming ? 
      [{ type: 'SOLID', color: { r: 17/255, g: 24/255, b: 39/255 } }] : 
      [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    msgText.resize(bubbleWidth - 24, 40);
    chatWindow.appendChild(msgText);

    msgY += 80;
  });

  // Input area
  const inputArea = figma.createFrame();
  inputArea.name = "Input Area";
  inputArea.resize(840, 80);
  inputArea.x = 0;
  inputArea.y = 756;
  inputArea.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  inputArea.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  inputArea.strokeWeight = 1;
  inputArea.strokeAlign = "OUTSIDE";
  chatWindow.appendChild(inputArea);

  const inputBg = figma.createRectangle();
  inputBg.resize(740, 44);
  inputBg.x = 24;
  inputBg.y = 18;
  inputBg.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  inputBg.strokes = [{ type: 'SOLID', color: { r: 229/255, g: 231/255, b: 235/255 } }];
  inputBg.strokeWeight = 1;
  inputBg.cornerRadius = 8;
  inputArea.appendChild(inputBg);

  const inputPlaceholder = figma.createText();
  inputPlaceholder.x = 36;
  inputPlaceholder.y = 30;
  inputPlaceholder.characters = "Xabar yozing...";
  inputPlaceholder.fontSize = 14;
  inputPlaceholder.fontName = { family: "Inter", style: "Regular" };
  inputPlaceholder.fills = [{ type: 'SOLID', color: { r: 156/255, g: 163/255, b: 175/255 } }];
  inputArea.appendChild(inputPlaceholder);

  const sendBtn = figma.createRectangle();
  sendBtn.resize(40, 40);
  sendBtn.x = 776;
  sendBtn.y = 20;
  sendBtn.fills = [{ type: 'SOLID', color: { r: 79/255, g: 70/255, b: 229/255 } }];
  sendBtn.cornerRadius = 8;
  inputArea.appendChild(sendBtn);

  const sendIcon = figma.createText();
  sendIcon.x = 788;
  sendIcon.y = 30;
  sendIcon.characters = "➤";
  sendIcon.fontSize = 16;
  sendIcon.fontName = { family: "Inter", style: "Regular" };
  sendIcon.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  inputArea.appendChild(sendIcon);

  figma.currentPage.appendChild(container);
  figma.currentPage.selection = [container];
  figma.viewport.scrollAndZoomIntoView([container]);

  return { success: true, frameId: container.id, frameName: container.name };
}

createInboxScreen();
