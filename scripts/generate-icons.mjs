/**
 * Renders the site icon set into src/app/, where the Next.js App Router picks
 * these filenames up automatically and emits the right <link> tags:
 *
 *   icon.png        192x192  browser tab / Android
 *   apple-icon.png  180x180  iOS home screen (no transparency allowed)
 *   favicon.ico     32x32    legacy fallback
 *
 *   npm run generate:icons
 *
 * The mark is "JG" on the same violet gradient as the navbar badge, so the tab
 * icon and the on-page logo read as the same brand.
 */
import sharp from "sharp";
import pngToIco from "png-to-ico";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "src/app");

const FONT = "Segoe UI, Inter, Helvetica Neue, Arial, sans-serif";

/** Rounded-square badge with the initials, sized to the target box. */
const markSvg = (size, { radius = 0.22, padding = 0 } = {}) => {
  const inner = size - padding * 2;
  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c6cff"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect x="${padding}" y="${padding}" width="${inner}" height="${inner}"
        rx="${inner * radius}" fill="url(#g)"/>
  <text x="50%" y="50%" dy="0.35em" text-anchor="middle"
        font-family="${FONT}" font-size="${inner * 0.44}" font-weight="700"
        letter-spacing="${inner * 0.01}" fill="#ffffff">JG</text>
</svg>`;
};

const render = async (size, file, options) => {
  const out = path.join(APP_DIR, file);
  await sharp(Buffer.from(markSvg(size, options))).png({ compressionLevel: 9 }).toFile(out);
  console.log(`wrote src/app/${file}  ${size}x${size}`);
  return out;
};

await render(192, "icon.png");
// iOS composites the icon onto white if it has alpha, so keep it edge-to-edge.
await render(180, "apple-icon.png", { radius: 0.22 });

const ico32 = path.join(APP_DIR, "icon-32.tmp.png");
await sharp(Buffer.from(markSvg(32))).png().toFile(ico32);
fs.writeFileSync(path.join(APP_DIR, "favicon.ico"), await pngToIco([ico32]));
fs.unlinkSync(ico32);
console.log("wrote src/app/favicon.ico  32x32");
