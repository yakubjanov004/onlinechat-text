const fs = require("fs");
const path = require("path");

const htmlRoot = path.join(process.cwd(), "html");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
      continue;
    }
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) {
      out.push(full);
    }
  }
  return out;
}

let updated = 0;
for (const file of walk(htmlRoot)) {
  let raw = fs.readFileSync(file, "utf8");
  if (raw.includes("qulay-chat-runtime.js")) {
    continue;
  }

  const scriptRel = path.relative(path.dirname(file), path.join(htmlRoot, "assets", "qulay-chat-runtime.js")).replace(/\\/g, "/");
  const href = scriptRel.startsWith(".") ? scriptRel : `./${scriptRel}`;
  const tag = `  <script src="${href}"></script>`;

  if (/<\/body>/i.test(raw)) {
    raw = raw.replace(/<\/body>/i, `${tag}\n</body>`);
  } else {
    raw += `\n${tag}\n`;
  }

  fs.writeFileSync(file, raw, "utf8");
  updated += 1;
  process.stdout.write(`runtime injected: ${path.relative(htmlRoot, file).replace(/\\/g, "/")}\n`);
}

process.stdout.write(`done ${updated} pages updated\n`);
