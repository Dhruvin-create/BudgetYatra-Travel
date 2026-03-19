/**
 * Fails CI if common UTF-8 mojibake sequences are present in content files.
 *
 * Why: Prevents "â‚¹" / "â€“" / "CafÃ©" style issues from being deployed.
 */
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');

// Scan only project content sources (add more if needed)
const scanRoots = [
  path.join(repoRoot, 'src', 'lib', 'data'),
  path.join(repoRoot, 'src', 'app'),
  path.join(repoRoot, 'src', 'components'),
];

const allowedExts = new Set(['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx', '.json']);

// Common mojibake markers from UTF-8 mis-decoded as Windows-1252/ISO-8859-1
const patterns = [
  'â‚¹', // ₹
  'â€“', // –
  'â€”', // —
  'â€™', // ’
  'â€œ', // “
  'â€\u009d', // ” (sometimes appears with control char)
  'â€\u0098', // ‘
  'â€\u0099', // ’ (sometimes appears with control char)
  'â€', // generic quote mojibake prefix
  'Ã©', // é
  'Ã£', // ã
  'Ã¨', // è
  'Ã¹', // ù
  'Ã±', // ñ
  'Â',  // stray NBSP marker (often "Â " before symbol)
];

function isReadableDir(dirPath) {
  try {
    return fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

function walk(dirPath, outFiles) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      // Skip large/vendor dirs
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'dist' || entry.name === 'build') continue;
      walk(full, outFiles);
      continue;
    }
    const ext = path.extname(entry.name);
    if (!allowedExts.has(ext)) continue;
    outFiles.push(full);
  }
}

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = [];
  for (const p of patterns) {
    if (content.includes(p)) matches.push(p);
  }
  if (matches.length === 0) return null;
  return { filePath, matches: Array.from(new Set(matches)) };
}

const files = [];
for (const root of scanRoots) {
  if (!isReadableDir(root)) continue;
  walk(root, files);
}

const findings = [];
for (const f of files) {
  const result = scanFile(f);
  if (result) findings.push(result);
}

if (findings.length === 0) {
  process.stdout.write('OK: No mojibake patterns found.\n');
  process.exit(0);
}

process.stderr.write('ERROR: Mojibake patterns found (fix encoding / replace symbols):\n');
for (const item of findings) {
  const rel = path.relative(repoRoot, item.filePath);
  process.stderr.write(`- ${rel}: ${item.matches.join(', ')}\n`);
}
process.exit(1);

