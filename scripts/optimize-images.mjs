/**
 * Converts every raster asset under public/projects to WebP, in place.
 *
 * The site builds with `output: 'export'`, which forces `images.unoptimized: true`
 * — Next never touches these files at request time, so whatever is committed is
 * exactly what the browser downloads. Run this after adding new screenshots:
 *
 *   npm run optimize:images
 *
 * Originals are replaced. Re-running is safe: .webp inputs are skipped.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = [
  { dir: "public/projects/images", maxWidth: 1600, quality: 82 },
  { dir: "public/projects/slides", maxWidth: 1600, quality: 80 },
  { dir: "public/projects/posters", maxWidth: 1280, quality: 80 },
];

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

let before = 0;
let after = 0;
const rows = [];

for (const target of TARGETS) {
  const abs = path.join(ROOT, target.dir);
  if (!fs.existsSync(abs)) continue;

  for (const file of walk(abs)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;

    const sourceSize = fs.statSync(file).size;
    const out = file.replace(/\.(png|jpe?g)$/i, ".webp");

    const image = sharp(file);
    const { width } = await image.metadata();
    const resized =
      width && width > target.maxWidth ? image.resize({ width: target.maxWidth }) : image;

    await resized.webp({ quality: target.quality, effort: 6 }).toFile(out);

    const outSize = fs.statSync(out).size;
    before += sourceSize;
    after += outSize;
    rows.push({ file: path.relative(ROOT, file).replace(/\\/g, "/"), from: sourceSize, to: outSize });
    fs.unlinkSync(file);
  }
}

if (rows.length === 0) {
  console.log("Nothing to convert — every asset is already WebP.");
} else {
  for (const row of rows.sort((a, b) => b.from - a.from).slice(0, 12)) {
    console.log(`${kb(row.from).padStart(7)} -> ${kb(row.to).padStart(6)}  ${row.file}`);
  }
  console.log("---");
  console.log(`files: ${rows.length}`);
  console.log(
    `total: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB ` +
      `(-${(100 - (after / before) * 100).toFixed(1)}%)`
  );
}
