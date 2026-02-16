// CHATFLOW - Auth: Welcome / First Login
// Birinchi kirish - Xush kelibsiz holati

async function createWelcomeScreen() {
    const frame = figma.createFrame();
    frame.name = "02 - Auth - Welcome (First Login)";
    frame.resize(1440, 900);
    frame.fills = [{ type: 'SOLID', color: { r: 0.976, g: 0.980, b: 0.984 } }]; // #F9FAFB
    
    // Card container
    const card = figma.createFrame();
    card.name = "Card";
    card.resize(480, 400);
    card.x = (1440 - 480) / 2;
    card.y = (900 - 400) / 2;
    card.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    card.cornerRadius = 8;
    card.effects = [{
        type: 'DROP_SHADOW',
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 1 },
        radius: 3,
        visible: true,
        blendMode: 'NORMAL'
    }, {
        type: 'DROP_SHADOW',
        color: { r: 0, g: 0, b: 0, a: 0.06 },
        offset: { x: 0, y: 1 },
        radius: 2,
        visible: true,
        blendMode: 'NORMAL'
    }];
    
    // Celebration Icon (Party emoji - 64px)
    const icon = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    icon.fontName = { family: "Inter", style: "Regular" };
    icon.characters = "🎉";
    icon.fontSize = 64;
    icon.textAlignHorizontal = "CENTER";
    icon.resize(64, 64);
    icon.x = (480 - 64) / 2;
    icon.y = 48;
    card.appendChild(icon);
    
    // Title - "Xush kelibsiz!"
    const title = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    title.fontName = { family: "Inter", style: "Bold" };
    title.characters = "Xush kelibsiz!";
    title.fontSize = 24;
    title.fills = [{ type: 'SOLID', color: { r: 0.067, g: 0.161, b: 0.216 } }]; // #111827
    title.textAlignHorizontal = "CENTER";
    title.resize(384, 32);
    title.x = 48;
    title.y = 48 + 64 + 24; // 136
    card.appendChild(title);
    
    // Subtitle
    const subtitle = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    subtitle.fontName = { family: "Inter", style: "Regular" };
    subtitle.characters = "Akkauntingiz tayyor. Keling, platformani sozlaymiz.";
    subtitle.fontSize = 15;
    subtitle.fills = [{ type: 'SOLID', color: { r: 0.294, g: 0.337, b: 0.384 } }]; // #4B5563
    subtitle.textAlignHorizontal = "CENTER";
    subtitle.lineHeight = { value: 24, unit: "PIXELS" };
    subtitle.resize(384, 48);
    subtitle.x = 48;
    subtitle.y = 180;
    card.appendChild(subtitle);
    
    // CTA Button - "Dashboard'ga o'tish"
    const button = figma.createFrame();
    button.name = "Button - Primary";
    button.resize(384, 44);
    button.x = 48;
    button.y = 260;
    button.fills = [{ type: 'SOLID', color: { r: 0.310, g: 0.275, b: 0.898 } }]; // #4F46E5
    button.cornerRadius = 8;
    
    const buttonText = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    buttonText.fontName = { family: "Inter", style: "Semi Bold" };
    buttonText.characters = "Dashboard'ga o'tish";
    buttonText.fontSize = 15;
    buttonText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
    buttonText.textAlignHorizontal = "CENTER";
    buttonText.resize(384, 20);
    buttonText.x = 0;
    buttonText.y = 12;
    button.appendChild(buttonText);
    
    card.appendChild(button);
    frame.appendChild(card);
    
    // Footer text - "Yordam kerakmi? Qo'llab-quvvatlash markazi"
    const footer = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    footer.fontName = { family: "Inter", style: "Regular" };
    footer.characters = "Yordam kerakmi? ";
    footer.fontSize = 14;
    footer.fills = [{ type: 'SOLID', color: { r: 0.420, g: 0.447, b: 0.502 } }]; // #6B7280
    footer.textAlignHorizontal = "CENTER";
    footer.x = (1440 - 300) / 2;
    footer.y = card.y + 400 + 32;
    
    const footerLink = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    footerLink.fontName = { family: "Inter", style: "Medium" };
    footerLink.characters = "Qo'llab-quvvatlash markazi";
    footerLink.fontSize = 14;
    footerLink.fills = [{ type: 'SOLID', color: { r: 0.310, g: 0.275, b: 0.898 } }]; // #4F46E5
    footerLink.x = footer.x + footer.width;
    footerLink.y = footer.y;
    
    frame.appendChild(footer);
    frame.appendChild(footerLink);
    
    // Select and zoom to frame
    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);
    
    return frame;
}

// Execute
createWelcomeScreen().then(() => {
    console.log('✅ Welcome screen created successfully');
}).catch(err => {
    console.error('❌ Error:', err);
});
