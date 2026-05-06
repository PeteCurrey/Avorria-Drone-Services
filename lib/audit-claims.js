/**
 * claim-audit.js
 * Automated validation script to prevent prohibited marketing claims.
 */

const fs = require('fs');
const path = require('path');

const PROHIBITED_PHRASES = [
  'millimetre-accurate',
  'millimeter-accurate',
  'eliminate risk',
  'eliminate scaffolding',
  'eliminate access risk',
  'eliminates that risk entirely',
  '70% cost saving',
  '48H report turnaround',
  '48 Hours',
  'detect moisture ingress',
  'detects moisture',
  'insulation failure',
  'detects insulation gaps',
  'energy loss mapped precisely',
  '±2°C',
  '±2C',
  'FLIR',
  'RICS compatible',
  'widely accepted by insurers',
  'accepted by insurers',
  'insurance-grade',
  'court-ready',
  'legal-grade',
  'Article 16',
  'over crowds',
  'Licensed for crowds',
  'operate safely and legally over people',
  'footage others cannot',
  '±1cm',
  '±15mm',
  '±0.5%',
  '1–3cm',
  '200ha',
  '5 day point cloud',
  'Reduce site walkdown time by 80%',
  'Real-time stakeholder site visibility',
  '400+ hectares',
  '98% Mapping Accuracy',
  'Unlimited max structure height',
  'CAA Approved',
  'CAA Licensed',
  'Trusted By',
  '500+ Missions'
];

const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist'];
const INCLUDE_EXTS = ['.ts', '.tsx', '.js', '.jsx', '.md', '.json'];

let findings = [];

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    PROHIBITED_PHRASES.forEach(phrase => {
      if (line.toLowerCase().includes(phrase.toLowerCase())) {
        // Double check for common false positives or excluded files
        if (filePath.endsWith('audit-claims.js')) return;
        
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

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.includes(file)) {
        walkDir(filePath);
      }
    } else {
      if (INCLUDE_EXTS.includes(path.extname(file))) {
        auditFile(filePath);
      }
    }
  });
}

console.log('--- STARTING CLAIM AUDIT ---');
walkDir(process.cwd());

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
