const fs = require('fs');
const path = require('path');

; (() => {
  if (process.argv.length < 3) {
    console.log("[USAGE]: node gen-snippets.js file\n");
    process.exit(1);
  }
  const file = path.resolve(process.argv[2]);
  const content = fs.readFileSync(file, 'utf8');
  console.log('[')
  content.split('\n').forEach(line => {
    console.log(" ".repeat(2), `"${line.replace(/"/g, '\\"')}",`);
  });
  console.log(']')
})();