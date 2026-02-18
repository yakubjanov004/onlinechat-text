/**
 * Figma Bridge - CDP orqali Figma Plugin API kodini execute qiladi
 * Desktop Bridge plugin orqali ishlaydi
 */
const puppeteer = require('puppeteer-core');

// Allow overriding the CDP port with an env var or CLI flag (--port <num>)
const _argv = process.argv.slice(2);
const _portFlagIndex = _argv.indexOf('--port');
const FIGMA_CDP_PORT = process.env.FIGMA_CDP_PORT || process.env.FIGMA_CDP || (_portFlagIndex !== -1 ? _argv[_portFlagIndex + 1] : null) || '9229';
const FIGMA_CDP_URL = `http://localhost:${FIGMA_CDP_PORT}`;

async function connectToFigma() {
  console.log('Figma Desktop ga ulanmoqda...');

  const browser = await puppeteer.connect({
    browserURL: FIGMA_CDP_URL,
    defaultViewport: null
  });

  const pages = await browser.pages();

  // Design fayli ochiq sahifani topish
  let designPage = null;
  for (const page of pages) {
    const url = page.url();
    if (url.includes('figma.com/design/')) {
      designPage = page;
      console.log('Design fayli topildi:', page.url().substring(0, 80) + '...');
      break;
    }
  }

  if (!designPage) {
    throw new Error('Figma design fayli topilmadi! Figma da fayl ochiq bo lishi kerak.');
  }

  return { browser, page: designPage };
}

async function findPluginFrame(page) {
  console.log('Desktop Bridge plugin qidirilmoqda...');

  const frames = page.frames();

  for (const frame of frames) {
    try {
      const hasExecuteCode = await frame.evaluate('typeof window.executeCode === "function"').catch(() => false);
      if (hasExecuteCode) {
        console.log('Desktop Bridge plugin topildi!');
        return frame;
      }
    } catch (e) {
      // Frame accessible emas, keyingisiga o'tish
    }
  }

  return null;
}

async function executeInFigma(pluginFrame, code, timeout = 15000) {
  const result = await pluginFrame.evaluate(
    (code, timeout) => window.executeCode(code, timeout),
    code,
    timeout
  );
  return result;
}

async function runFigmaCode(code) {
  const { browser, page } = await connectToFigma();

  try {
    const pluginFrame = await findPluginFrame(page);

    if (!pluginFrame) {
      console.error('\nDesktop Bridge plugin topilmadi!');
      console.error('Figma da Plugins -> Development -> Figma Desktop Bridge ni ishga tushiring.');
      browser.disconnect();
      process.exit(1);
    }

    console.log('Kod execute qilinmoqda...');
    const result = await executeInFigma(pluginFrame, code);
    console.log('\nNatija:', JSON.stringify(result, null, 2));
    return result;
  } finally {
    browser.disconnect();
  }
}

// CLI dan ishga tushirish
const args = process.argv.slice(2);

if (args[0] === '--file') {
  // Fayl dan o'qish
  const fs = require('fs');
  const code = fs.readFileSync(args[1], 'utf-8');
  runFigmaCode(code).catch(console.error);
} else if (args[0] === '--test') {
  // Test: oddiy rectangle yaratish
  const testCode = `
    const frame = figma.createFrame();
    frame.name = "Test Frame from Agent";
    frame.resize(300, 200);
    frame.cornerRadius = 12;
    frame.fills = [{type: 'SOLID', color: {r: 0.95, g: 0.95, b: 1}}];
    frame.x = figma.viewport.center.x - 150;
    frame.y = figma.viewport.center.y - 100;

    var text = figma.createText();
    await figma.loadFontAsync({family: "Inter", style: "Bold"});
    text.characters = "Agent ishlayapti!";
    text.fontSize = 24;
    text.fills = [{type: 'SOLID', color: {r: 0.31, g: 0.27, b: 0.9}}];
    text.x = 40;
    text.y = 80;
    frame.appendChild(text);

    figma.currentPage.selection = [frame];
    figma.viewport.scrollAndZoomIntoView([frame]);

    return { success: true, frameId: frame.id, frameName: frame.name };
  `;
  runFigmaCode(testCode).catch(console.error);
} else if (args[0] === '--code') {
  // Inline kod
  runFigmaCode(args.slice(1).join(' ')).catch(console.error);
} else {
  console.log('Figma Bridge - Figma da dizayn yaratish');
  console.log('');
  console.log('Ishlatish:');
  console.log('  node figma-bridge.js --test              Test frame yaratish');
  console.log('  node figma-bridge.js --file <path>       Fayldan kod execute qilish');
  console.log('  node figma-bridge.js --code <code>       Inline kod execute qilish');
}
