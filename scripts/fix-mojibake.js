/**
 * Fix double-encoded mojibake in data files.
 * The files were saved as UTF-8 BOM by PowerShell Set-Content,
 * causing UTF-8 chars to be stored as latin1-interpreted bytes.
 * Strategy: read raw buffer, strip BOM, re-interpret as latin1, then fix mojibake.
 */
const fs = require('fs');

const files = ['src/lib/data/blogs.js', 'src/lib/data/destinations.js'];

for (const file of files) {
  let buf = fs.readFileSync(file);

  // Strip UTF-8 BOM if present (EF BB BF)
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
    buf = buf.slice(3);
    console.log('Stripped BOM from:', file);
  }

  // Re-interpret bytes as latin1 to expose the mojibake as visible chars
  let content = buf.toString('latin1');

  // Now fix the mojibake sequences (latin1 view of double-encoded UTF-8)
  const replacements = [
    // ₹ (U+20B9) — encoded as UTF-8 E2 82 B9, mis-read as latin1 â‚¹
    ['â\u0082¹', '₹'],
    // – (U+2013) — E2 80 93
    ['â\u0080\u0093', '–'],
    // — (U+2014) — E2 80 94
    ['â\u0080\u0094', '—'],
    // ' (U+2019) — E2 80 99
    ['â\u0080\u0099', '\u2019'],
    // " (U+201C) — E2 80 9C
    ['â\u0080\u009c', '\u201C'],
    // " (U+201D) — E2 80 9D
    ['â\u0080\u009d', '\u201D'],
    // ' (U+2018) — E2 80 98
    ['â\u0080\u0098', '\u2018'],
    // leftover â€ prefix
    ['â\u0080', '–'],
    // é (U+00E9) — C3 A9
    ['Ã©', 'é'],
    // ã (U+00E3) — C3 A3
    ['Ã£', 'ã'],
    // è (U+00E8) — C3 A8
    ['Ã¨', 'è'],
    // ù (U+00F9) — C3 B9
    ['Ã¹', 'ù'],
    // ñ (U+00F1) — C3 B1
    ['Ã±', 'ñ'],
    // NBSP Â\u00A0
    ['Â\u00a0', ' '],
    ['Â', ''],
  ];

  for (const [bad, good] of replacements) {
    while (content.includes(bad)) {
      content = content.split(bad).join(good);
    }
  }

  // Write back as clean UTF-8 (no BOM)
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed:', file);
}
