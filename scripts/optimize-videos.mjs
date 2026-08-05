/**
 * Re-encodes the project demo videos under public/projects/videos, in place.
 *
 *   npm run optimize:videos
 *
 * These are screen recordings: mostly static UI with occasional movement, which
 * H.264 compresses extremely well once you stop shipping the camera-grade
 * bitrate the recorder produced. The originals were 16-32 MB each.
 *
 * Choices worth keeping:
 *   -crf 30        quality target; screen capture tolerates this without
 *                  visible artefacts on text
 *   -preset slow   spend encode time once, save bytes on every visit
 *   -vf scale      cap at 1280 wide; the player is never larger than that
 *   -g 120         a keyframe every ~4s so seeking actually works. The
 *                  originals had almost none, which is why extracting poster
 *                  frames required playing them through in real time.
 *   -an            drop audio; the videos play muted
 *   +faststart     move the index to the front so playback can begin before
 *                  the whole file arrives
 *
 * Re-running is safe: already-optimized files are skipped via a marker comment
 * in the container metadata.
 *
 * NOTE — MyAccountingApp-Video.mp4 is not reproducible from this script alone.
 * It was additionally trimmed (to drop a login screen and a Chrome
 * "save password?" prompt) and has its top-right corner blurred to redact a
 * real email address that the app renders in its header. If that recording is
 * ever replaced, redo both steps; see the README.
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const VIDEO_DIR = path.join(ROOT, "public/projects/videos");
const MARKER = "portfolio-optimized";

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)} MB`;

async function alreadyOptimized(file) {
  try {
    const { stdout } = await run(ffmpegPath, ["-i", file, "-f", "null", "-"], {
      maxBuffer: 1024 * 1024 * 8,
    });
    return stdout.includes(MARKER);
  } catch (error) {
    // ffmpeg writes stream info to stderr and exits non-zero for `-f null`.
    return String(error.stderr || "").includes(MARKER);
  }
}

const files = fs
  .readdirSync(VIDEO_DIR)
  .filter((name) => /\.mp4$/i.test(name))
  .map((name) => path.join(VIDEO_DIR, name));

if (files.length === 0) {
  console.log("No videos found.");
  process.exit(0);
}

let before = 0;
let after = 0;

for (const file of files) {
  const name = path.basename(file);

  if (await alreadyOptimized(file)) {
    console.log(`skip   ${name} (already optimized)`);
    continue;
  }

  const sourceSize = fs.statSync(file).size;
  const tmp = file.replace(/\.mp4$/i, ".tmp.mp4");

  process.stdout.write(`encode ${name} (${mb(sourceSize)}) ... `);

  await run(
    ffmpegPath,
    [
      "-y",
      "-i", file,
      "-c:v", "libx264",
      "-crf", "30",
      "-preset", "slow",
      "-profile:v", "high",
      "-pix_fmt", "yuv420p",
      "-vf", "scale='min(1280,iw)':-2",
      "-g", "120",
      "-an",
      "-movflags", "+faststart",
      "-metadata", `comment=${MARKER}`,
      tmp,
    ],
    { maxBuffer: 1024 * 1024 * 32 }
  );

  const outSize = fs.statSync(tmp).size;
  fs.renameSync(tmp, file);

  before += sourceSize;
  after += outSize;
  console.log(`${mb(outSize)}  (-${(100 - (outSize / sourceSize) * 100).toFixed(1)}%)`);
}

if (before > 0) {
  console.log("---");
  console.log(`total: ${mb(before)} -> ${mb(after)} (-${(100 - (after / before) * 100).toFixed(1)}%)`);
}
