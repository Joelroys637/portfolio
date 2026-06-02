const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');
code = code.replace(/onclick="window\.open\('([^']+)', '_blank'\)"/g, 'data-url="$1"');
fs.writeFileSync('index.html', code);
