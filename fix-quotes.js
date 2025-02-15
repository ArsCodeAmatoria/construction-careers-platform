const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/careers.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace smart quotes with regular quotes
content = content.replace(/['']/g, "'");
content = content.replace(/[""]/g, '"');

fs.writeFileSync(filePath, content); 