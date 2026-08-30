import fs from "node:fs";
import path from "node:path";
import { Resvg } from "@resvg/resvg-js";

// Helper to create an ICO file from PNG buffers
function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const headerAndDirSize = headerSize + count * dirEntrySize;

  let currentOffset = headerAndDirSize;
  const entries = [];

  for (const item of pngBuffers) {
    const w = item.width >= 256 ? 0 : item.width;
    const h = item.height >= 256 ? 0 : item.height;
    entries.push({
      width: w,
      height: h,
      size: item.buffer.length,
      offset: currentOffset,
      buffer: item.buffer,
    });
    currentOffset += item.buffer.length;
  }

  const icoBuffer = Buffer.alloc(currentOffset);

  // Write ICO Header
  icoBuffer.writeUInt16LE(0, 0); // Reserved (must be 0)
  icoBuffer.writeUInt16LE(1, 2); // 1 = ICO image
  icoBuffer.writeUInt16LE(count, 4); // Number of images

  // Write Directory Entries
  let entryOffset = 6;
  for (const entry of entries) {
    icoBuffer.writeUInt8(entry.width, entryOffset + 0);
    icoBuffer.writeUInt8(entry.height, entryOffset + 1);
    icoBuffer.writeUInt8(0, entryOffset + 2); // Color palette (0 = no palette)
    icoBuffer.writeUInt8(0, entryOffset + 3); // Reserved (0)
    icoBuffer.writeUInt16LE(1, entryOffset + 4); // Color planes
    icoBuffer.writeUInt16LE(32, entryOffset + 6); // Bits per pixel
    icoBuffer.writeUInt32LE(entry.size, entryOffset + 8); // Size of image data
    icoBuffer.writeUInt32LE(entry.offset, entryOffset + 12); // Offset of image data
    entryOffset += dirEntrySize;
  }

  // Write PNG Image data
  for (const entry of entries) {
    entry.buffer.copy(icoBuffer, entry.offset);
  }

  return icoBuffer;
}

// 1. Standalone crystal mark SVG string
const markSvgInner = `
  <defs>
    <linearGradient id="facet-top" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="facet-left-outer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="facet-left-deep" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c4a6e" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
    <linearGradient id="facet-right-outer" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="facet-right-mid" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>
  <g>
    <!-- Top Apex Facet -->
    <polygon points="60,8 70,28 60,38 50,28" fill="url(#facet-top)" />

    <!-- Left Outer Upper Facet -->
    <polygon points="60,8 50,28 32,54 44,52" fill="#0ea5e9" />

    <!-- Left Upper-Mid Facet -->
    <polygon points="50,28 60,38 44,52" fill="#0284c7" />

    <!-- Left Deep Inner Facet -->
    <polygon points="60,38 44,52 48,72 58,58" fill="url(#facet-left-deep)" />

    <!-- Left Mid Facet -->
    <polygon points="44,52 32,54 20,86 38,78 48,72" fill="#0369a1" />

    <!-- Left Lower Base Facet -->
    <polygon points="20,86 12,104 36,104 38,78" fill="#0284c7" />
    <polygon points="12,104 22,96 36,104" fill="#0369a1" />

    <!-- Right Upper Outer Facet -->
    <polygon points="60,8 70,28 88,64 74,56" fill="url(#facet-right-outer)" />

    <!-- Right Upper Mid Facet -->
    <polygon points="70,28 60,38 74,56" fill="#0284c7" />

    <!-- Right Center Facet -->
    <polygon points="60,38 74,56 86,76 66,72" fill="url(#facet-right-mid)" />

    <!-- Right Lower Outer Facet -->
    <polygon points="74,56 88,64 108,104 88,96 86,76" fill="#0ea5e9" />

    <!-- Right Base Facet -->
    <polygon points="88,96 108,104 84,104" fill="#0284c7" />

    <!-- Circuit Trace Bar -->
    <rect x="36" y="80" width="46" height="5" rx="2.5" fill="url(#circuit-grad)" />

    <!-- Left Circuit Node Outer Ring & Inner Dot -->
    <circle cx="36" cy="82.5" r="9" fill="none" stroke="#38bdf8" stroke-width="4.5" />
    <circle cx="36" cy="82.5" r="3.5" fill="#ffffff" />

    <!-- Right Circuit Node Small Circle -->
    <circle cx="82" cy="82.5" r="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />

    <!-- Data Pixels / Tech Blocks -->
    <rect x="44" y="62" width="5.5" height="5.5" rx="1" fill="#ffffff" />
    <rect x="52" y="68" width="5" height="5" rx="1" fill="#38bdf8" />
    <rect x="42" y="70" width="4.5" height="4.5" rx="1" fill="#e0f2fe" />
  </g>
`;

// Standalone transparent SVG
const transparentMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">${markSvgInner}</svg>`;

// Apple Touch Icon / App Icon SVG (with modern deep navy background and subtle soft glow)
const appIconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <defs>
    <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1528" />
      <stop offset="50%" stop-color="#060d1d" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="mark-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>
  </defs>
  <!-- Background -->
  <rect width="180" height="180" fill="url(#bg-grad)" />
  <circle cx="90" cy="90" r="70" fill="url(#mark-glow)" />
  <!-- Scaled Mark in Center -->
  <g transform="translate(30, 26) scale(1.0)">
    ${markSvgInner}
  </g>
</svg>
`;

// Social Preview (OpenGraph / Twitter Card) 1200x630 Banner
const ogBannerSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="og-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1528" />
      <stop offset="40%" stop-color="#060d1d" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <radialGradient id="og-glow1" cx="25%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="og-glow2" cx="80%" cy="20%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </radialGradient>
    <pattern id="og-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.08" />
    </pattern>
  </defs>

  <!-- Background Layer -->
  <rect width="1200" height="630" fill="url(#og-bg)" />
  <rect width="1200" height="630" fill="url(#og-grid)" />
  <circle cx="300" cy="300" r="400" fill="url(#og-glow1)" />
  <circle cx="1000" cy="150" r="300" fill="url(#og-glow2)" />

  <!-- Outer Border Frame -->
  <rect x="24" y="24" width="1152" height="582" rx="24" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-opacity="0.8" />

  <!-- Left Side: Large Altair Crystal Logo -->
  <g transform="translate(100, 150) scale(2.6)">
    ${markSvgInner}
  </g>

  <!-- Right Side: Content Hierarchy -->
  <!-- Eyebrow Badge -->
  <g transform="translate(470, 140)">
    <rect width="330" height="38" rx="19" fill="#0369a1" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1.5" stroke-opacity="0.5" />
    <circle cx="20" cy="19" r="5" fill="#38bdf8" />
    <text x="35" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#7dd3fc">
      ENTERPRISE TECHNOLOGY
    </text>
  </g>

  <!-- Company Title -->
  <text x="470" y="235" font-family="'Space Grotesk', system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" letter-spacing="1" fill="#f8fafc">
    ALTAIR TECHNOLOGIES
  </text>
  <text x="470" y="278" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" letter-spacing="4" fill="#38bdf8">
    SOFTWARE · TALENT · INNOVATION
  </text>

  <!-- Description Body -->
  <text x="470" y="340" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
    Building secure software, delivering specialized IT staffing &amp; consulting,
  </text>
  <text x="470" y="372" font-family="'Inter', system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
    and engineering high-impact distributed systems.
  </text>

  <!-- Capabilities Pill Tags -->
  <g transform="translate(470, 430)">
    <!-- Pill 1: AI & ML -->
    <g>
      <rect width="180" height="42" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
      <text x="90" y="26" font-family="'Inter', system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#e2e8f0">
        AI &amp; Machine Learning
      </text>
    </g>
    <!-- Pill 2: Cybersecurity -->
    <g transform="translate(195, 0)">
      <rect width="170" height="42" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
      <text x="85" y="26" font-family="'Inter', system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#e2e8f0">
        Zero-Trust Defense
      </text>
    </g>
    <!-- Pill 3: IT Staffing -->
    <g transform="translate(380, 0)">
      <rect width="160" height="42" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
      <text x="80" y="26" font-family="'Inter', system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" fill="#e2e8f0">
        Specialized Staffing
      </text>
    </g>
  </g>

  <!-- Bottom Brand Footer -->
  <g transform="translate(470, 530)">
    <text x="0" y="0" font-family="'Space Grotesk', system-ui, sans-serif" font-size="16" font-weight="600" letter-spacing="1.5" fill="#38bdf8">
      ALTAIRTECHNOLOGIES.COM
    </text>
  </g>
</svg>
`;

async function main() {
  const publicDir = path.resolve("public");

  console.log("Generating brand assets in:", publicDir);

  // 1. apple-touch-icon.png (180x180 with navy background)
  const appIconResvg = new Resvg(appIconSvg, { fitTo: { mode: "width", value: 180 } });
  const appIconBuffer = appIconResvg.render().asPng();
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), appIconBuffer);
  console.log("✓ Created public/apple-touch-icon.png (180x180)");

  // 2. favicon-32x32.png
  const fav32Resvg = new Resvg(transparentMarkSvg, { fitTo: { mode: "width", value: 32 } });
  const fav32Buffer = fav32Resvg.render().asPng();
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), fav32Buffer);
  console.log("✓ Created public/favicon-32x32.png (32x32)");

  // 3. favicon-16x16.png
  const fav16Resvg = new Resvg(transparentMarkSvg, { fitTo: { mode: "width", value: 16 } });
  const fav16Buffer = fav16Resvg.render().asPng();
  fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), fav16Buffer);
  console.log("✓ Created public/favicon-16x16.png (16x16)");

  // 4. favicon-48x48.png
  const fav48Resvg = new Resvg(transparentMarkSvg, { fitTo: { mode: "width", value: 48 } });
  const fav48Buffer = fav48Resvg.render().asPng();

  // 5. favicon.ico (multi-res 16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: fav16Buffer },
    { width: 32, height: 32, buffer: fav32Buffer },
    { width: 48, height: 48, buffer: fav48Buffer },
  ]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("✓ Created public/favicon.ico (16, 32, 48)");

  // 6. og-image.png (1200x630)
  const ogResvg = new Resvg(ogBannerSvg, { fitTo: { mode: "width", value: 1200 } });
  const ogBuffer = ogResvg.render().asPng();
  fs.writeFileSync(path.join(publicDir, "og-image.png"), ogBuffer);
  console.log("✓ Created public/og-image.png (1200x630)");

  // 7. Large PWA icons
  const icon192Resvg = new Resvg(appIconSvg, { fitTo: { mode: "width", value: 192 } });
  fs.writeFileSync(path.join(publicDir, "icon-192.png"), icon192Resvg.render().asPng());
  const icon512Resvg = new Resvg(appIconSvg, { fitTo: { mode: "width", value: 512 } });
  fs.writeFileSync(path.join(publicDir, "icon-512.png"), icon512Resvg.render().asPng());
  console.log("✓ Created public/icon-192.png and public/icon-512.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
