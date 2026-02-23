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

  raw = raw.replace(/\s*<link\s+rel=["']stylesheet["']\s+href=["'][^"']*production-look\.css["']\s*\/?\s*>\s*/gi, "\n");

  const rel = path.relative(path.dirname(file), path.join(htmlRoot, "assets", "production-look.css")).replace(/\\/g, "/");
  const href = rel.startsWith(".") ? rel : `./${rel}`;
  const linkTag = `  <link rel="stylesheet" href="${href}" />`;

  const headClose = raw.toLowerCase().indexOf("</head>");
  if (headClose >= 0) {
    raw = `${raw.slice(0, headClose).trimEnd()}\n${linkTag}\n${raw.slice(headClose)}`;
  } else {
    raw = `${linkTag}\n${raw}`;
  }

  fs.writeFileSync(file, raw, "utf8");
  updated += 1;
}

process.stdout.write(`production-look injected into ${updated} pages\n`);
