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

let touched = 0;
for (const file of walk(htmlRoot)) {
  let raw = fs.readFileSync(file, "utf8");

  raw = raw.replace(/\s*<script\s+src=["'][^"']*qulay-chat-runtime\.js["']><\/script>\s*/gi, "\n");

  const rel = path.relative(path.dirname(file), path.join(htmlRoot, "assets", "qulay-chat-runtime.js")).replace(/\\/g, "/");
  const href = rel.startsWith(".") ? rel : `./${rel}`;
  const tag = `  <script src="${href}"></script>`;

  const lower = raw.toLowerCase();
  const idx = lower.lastIndexOf("</body>");

  if (idx >= 0) {
    raw = `${raw.slice(0, idx).trimEnd()}\n${tag}\n${raw.slice(idx)}`;
  } else {
    raw = `${raw.trimEnd()}\n${tag}\n`;
  }

  fs.writeFileSync(file, raw, "utf8");
  touched += 1;
}

process.stdout.write(`normalized ${touched} html files\n`);
