/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * claim-audit.js
 * Automated validation script to prevent prohibited marketing claims.
 */

const fs = require('fs');
const path = require('path');

const PROHIBITED_PHRASES = [
  'Eliminate risk',
  'Eliminate scaffolding',
  'Eliminate access risk',
  '70% cost saving',
  '48H report turnaround',
  '48 Hours',
  '±2°C',
  '±2C',
  'FLIR radiometric sensor',
  'FLIR sensor',
  'RICS compatible',
  'Article 16 licensed aerial coverage',
  'CAA-approved for operations over crowds',
  'Licensed for crowds',
  '±1CM RTK horizontal accuracy',
  '200HA coverage per day',
  '5 DAY point cloud delivery',
  'Millimetre-accurate',
  'Millimeter-accurate',
  'Reduce site walkdown time by 80%',
  'Real-time stakeholder site visibility',
  'eliminate risk entirely',
  'Article 16',
  'CAA Approved',
  'accepted by insurers'
];

const IGNORE_DIRS = ['node_modules', '.git', 'dist'];
const INCLUDE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.html', '.css'];

let findings = [];

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    PROHIBITED_PHRASES.forEach(phrase => {
      if (line.toLowerCase().includes(phrase.toLowerCase())) {
        // Skip audit scripts themselves — they contain prohibited phrases as string literals
        const AUDIT_SCRIPTS = ['audit-claims.js', 'audit-live.js'];
        if (AUDIT_SCRIPTS.some(s => filePath.endsWith(s))) return;
        
        findings.push({
          file: filePath,
          line: index + 1,
          phrase: phrase,
          content: line.trim()
        });
      }
    });
  });
}

function walkDir(dir, skipIgnores = false) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (skipIgnores || !IGNORE_DIRS.includes(file)) {
        walkDir(filePath, skipIgnores);
      }
    } else {
      if (INCLUDE_EXTS.includes(path.extname(file))) {
        auditFile(filePath);
      }
    }
  });
}

const targetDir = process.argv[2] || process.cwd();
const isRenderedAudit = process.argv[2] === '.next';

console.log(`--- STARTING CLAIM AUDIT ON: ${targetDir} ---`);
walkDir(targetDir, isRenderedAudit);

if (findings.length > 0) {
  console.error(`\nFound ${findings.length} prohibited claims:\n`);
  findings.forEach(f => {
    console.error(`[FAIL] ${f.file}:${f.line} - Found: "${f.phrase}"`);
    console.error(`      Line: ${f.content}\n`);
  });
  process.exit(1);
} else {
  console.log('\n[PASS] No prohibited claims found.');
  process.exit(0);
}
