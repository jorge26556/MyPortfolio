/**
 * Renders public/og-image.png — the 1200x630 card shown when the site is
 * shared on LinkedIn, WhatsApp, Slack, X, etc.
 *
 *   npm run generate:og
 *
 * Re-run after changing the name, role, or brand colours in src/data/profile.ts.
 */
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "public/og-image.png");

const NAME = "Jorge Gaitán";
const ROLE = "Full-Stack &amp; Power Platform Developer";
const TAGLINE = "Aplicaciones, automatizaciones y soluciones empresariales";
const DOMAIN = "dyangotech.com";

const FONT = "Segoe UI, Inter, Helvetica Neue, Arial, sans-serif";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b0d1c"/>
      <stop offset="55%" stop-color="#141833"/>
      <stop offset="100%" stop-color="#1b1543"/>
    </linearGradient>
    <radialGradient id="glowA" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7c6cff" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#7c6cff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#4aa8ff" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#4aa8ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b7cff"/>
      <stop offset="100%" stop-color="#5ec8ff"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1010" cy="180" r="330" fill="url(#glowA)"/>
  <circle cx="180" cy="560" r="300" fill="url(#glowB)"/>

  <g stroke="#ffffff" stroke-opacity="0.05" stroke-width="1">
    ${Array.from({ length: 15 }, (_, i) => `<line x1="${i * 80}" y1="0" x2="${i * 80}" y2="630"/>`).join("")}
    ${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${i * 80}" x2="1200" y2="${i * 80}"/>`).join("")}
  </g>

  <rect x="88" y="150" width="64" height="5" rx="2.5" fill="url(#accent)"/>

  <text x="88" y="118" font-family="${FONT}" font-size="22" font-weight="600"
        fill="#a5b4fc" letter-spacing="6">PORTAFOLIO</text>

  <text x="88" y="268" font-family="${FONT}" font-size="88" font-weight="800"
        fill="#ffffff" letter-spacing="-2">${NAME}</text>

  <text x="88" y="336" font-family="${FONT}" font-size="38" font-weight="600"
        fill="#c7d2fe">${ROLE}</text>

  <text x="88" y="392" font-family="${FONT}" font-size="26" font-weight="400"
        fill="#94a3b8">${TAGLINE}</text>

  <g transform="translate(88, 470)">
    ${["React", "Next.js", "TypeScript", "Django", "Power Apps"]
      .map((tag, i) => {
        const x = i * 172;
        return `
      <rect x="${x}" y="0" width="156" height="48" rx="24"
            fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.14"/>
      <text x="${x + 78}" y="31" font-family="${FONT}" font-size="20" font-weight="600"
            fill="#e2e8f0" text-anchor="middle">${tag}</text>`;
      })
      .join("")}
  </g>

  <text x="88" y="580" font-family="${FONT}" font-size="24" font-weight="600"
        fill="#8b7cff">${DOMAIN}</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(OUT);
console.log(`wrote ${path.relative(ROOT, OUT)}`);
