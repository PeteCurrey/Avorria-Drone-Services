const fs = require('fs');
const path = require('path');

const hooks = ['useRef', 'useEffect', 'useState', 'useMemo', 'useCallback'];

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const results = [];

walk('app', checkFile);
walk('components', checkFile);

function checkFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
  const content = fs.readFileSync(filePath, 'utf8');

  hooks.forEach(hook => {
    // Check for hook usage: hook( or hook<
    const hookUsage = new RegExp(`\\b${hook}\\s*[<\\(]`, 'g');
    if (hookUsage.test(content)) {
      // Check if it's imported from react
      const importPattern = new RegExp(`import.*\\b${hook}\\b.*from ['"]react['"]`, 's');
      if (!importPattern.test(content)) {
        results.push({ file: filePath, missing: hook });
      }
    }
  });

  // Check for <Link usage
  if (/<Link\b/.test(content)) {
    if (!/import.*Link.*from ['"]next\/link['"]/.test(content)) {
      results.push({ file: filePath, missing: 'Link' });
    }
  }

  // Check for <Image usage
  // Be careful not to match <ImageIcon (lucide)
  if (/<Image\b/.test(content)) {
    // But check if it's NOT <ImageIcon
    if (/<Image\s/.test(content) || /<Image\/>/.test(content) || /<Image>/.test(content)) {
       if (!/import.*Image.*from ['"]next\/image['"]/.test(content)) {
         results.push({ file: filePath, missing: 'Image' });
       }
    }
  }
}

console.log(JSON.stringify(results, null, 2));
