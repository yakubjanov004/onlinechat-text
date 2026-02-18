/**
 * Figma WS Bridge - WebSocket orqali Figma Plugin API kodini execute qiladi
 * Desktop Bridge plugin WebSocket CLIENT sifatida ulanadi (portlar 9223-9232)
 * Bu skript WebSocket SERVER bo'lib ishlaydi — port 9226 dan boshlab
 */
const { WebSocketServer } = require('ws');
const { randomUUID } = require('crypto');
const fs = require('fs');

const PORT_START = 9226;
const PORT_END = 9232;
const PLUGIN_CONNECT_TIMEOUT = 60000; // 60 soniya

// ------ Port topish ------
function tryListen(port) {
  return new Promise((resolve) => {
    const wss = new WebSocketServer({ port });
    wss.once('listening', () => resolve(wss));
    wss.once('error', () => resolve(null));
  });
}

async function createServer() {
  for (let port = PORT_START; port <= PORT_END; port++) {
    const wss = await tryListen(port);
    if (wss) {
      console.log(`WebSocket server ishga tushdi: ws://localhost:${port}`);
      return wss;
    }
    console.log(`Port ${port} band, keyingisini urinib ko'rilmoqda...`);
  }
  throw new Error(`${PORT_START}-${PORT_END} oralig'idagi barcha portlar band!`);
}

// ------ Plugin ulanishini kutish ------
function waitForPlugin(wss) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(
        `Figma Desktop Bridge plugin ${PLUGIN_CONNECT_TIMEOUT / 1000}s ichida ulanmadi!\n` +
        'Quyidagilarni tekshiring:\n' +
        '  1. Figma Desktop ilovasi ochiq bo\'lsin\n' +
        '  2. Dizayn fayli ochiq bo\'lsin\n' +
        '  3. Plugins → Development → Figma Desktop Bridge → Run\n' +
        '  4. Agar plugin avval ishga tushgan bo\'lsa — qayta ishga tushiring'
      ));
    }, PLUGIN_CONNECT_TIMEOUT);

    wss.once('connection', (ws, req) => {
      clearTimeout(timer);
      console.log('Figma Desktop Bridge plugin ulandi!', req.socket.remoteAddress);
      resolve(ws);
    });
  });
}

// ------ Kod execute qilish ------
function executeCode(ws, code, timeout = 15000) {
  return new Promise((resolve, reject) => {
    const id = randomUUID();
    const message = JSON.stringify({
      id,
      method: 'EXECUTE_CODE',
      params: { code, timeout }
    });

    const timer = setTimeout(() => {
      ws.removeListener('message', onMessage);
      reject(new Error(`Javob ${timeout}ms ichida kelmadi (id: ${id})`));
    }, timeout + 5000);

    function onMessage(raw) {
      let msg;
      try {
        msg = JSON.parse(raw.toString());
      } catch (e) {
        // JSON parse xatosi — bu xabarni e'tiborsiz qoldirish
        return;
      }

      // ID mos kelmasa — bu push xabar (VARIABLES_DATA, FILE_INFO, etc.), e'tiborsiz qoldirish
      if (msg.id !== id) return;

      clearTimeout(timer);
      ws.removeListener('message', onMessage);

      if (msg.error) {
        reject(new Error(msg.error));
      } else {
        resolve(msg.result);
      }
    }

    ws.on('message', onMessage);
    ws.send(message);
    console.log('Kod yuborildi, javob kutilmoqda...');
  });
}

// ------ Asosiy funksiya ------
async function runFigmaCode(code) {
  const wss = await createServer();

  try {
    console.log('Figma Desktop Bridge plugin ulanishi kutilmoqda... (60s)');
    console.log('');
    console.log('  → Figmada: Plugins → Development → Figma Desktop Bridge → Run');
    console.log('  → Agar avval ishga tushgan bo\'lsa — uni QAYTA ishga tushiring (yoping, qayta oching)');
    console.log('');
    const ws = await waitForPlugin(wss);

    console.log('Kod execute qilinmoqda...');
    const result = await executeCode(ws, code);

    console.log('\nNatija:', JSON.stringify(result, null, 2));
    return result;
  } finally {
    wss.close();
  }
}

// ------ CLI ------
const args = process.argv.slice(2);

if (args[0] === '--test') {
  const testCode = `
    const frame = figma.createFrame();
    frame.name = "Test Frame from Agent";
    frame.resize(300, 200);
    frame.cornerRadius = 12;
    frame.fills = [{type: 'SOLID', color: {r: 0.95, g: 0.95, b: 1}}];
    frame.x = figma.viewport.center.x - 150;
    frame.y = figma.viewport.center.y - 100;

    var text = figma.createText();
    await figma.loadFontAsync(text.fontName);
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
  runFigmaCode(testCode).catch((err) => { console.error('Xato:', err.message); process.exit(1); });

} else if (args[0] === '--file') {
  if (!args[1]) { console.error('Fayl yo\'li ko\'rsatilmadi: --file <path>'); process.exit(1); }
  const code = fs.readFileSync(args[1], 'utf-8');
  runFigmaCode(code).catch((err) => { console.error('Xato:', err.message); process.exit(1); });

} else if (args[0] === '--code') {
  const code = args.slice(1).join(' ');
  if (!code) { console.error('Kod ko\'rsatilmadi: --code "<kod>"'); process.exit(1); }
  runFigmaCode(code).catch((err) => { console.error('Xato:', err.message); process.exit(1); });

} else {
  console.log('Figma WS Bridge - WebSocket orqali Figma da dizayn yaratish');
  console.log('');
  console.log('Ishlatish:');
  console.log('  node figma-ws-bridge.js --test              Test frame yaratish');
  console.log('  node figma-ws-bridge.js --file <path>       Fayldan kod execute qilish');
  console.log('  node figma-ws-bridge.js --code "<kod>"      Inline kod execute qilish');
  console.log('');
  console.log('Arxitektura:');
  console.log('  Bu skript WebSocket SERVER (port 9226+) bo\'lib ishlaydi.');
  console.log('  Figma Desktop Bridge Plugin CLIENT sifatida ulanadi.');
}
