const fs = require('fs');
const file = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';

let content = fs.readFileSync(file, 'utf8');

// HEX replacements
content = content.replace(/#FAF3E0/gi, '#F5EFE6'); // Champagne beige -> Warm Beige
content = content.replace(/#FFD27D/gi, '#C47A3A'); // Sand gold -> Copper Gold
content = content.replace(/#8B1A33/gi, '#D97742'); // Burgundy -> Burnt Orange
content = content.replace(/#6D0D1D/gi, '#485646'); // Dark maroon -> Lighter Olive
content = content.replace(/#3B010B/gi, '#3E4B3C'); // Deep wine -> Dark Moss Green

content = content.replace(/#1A0307/gi, '#2B2B2B'); // Text page dark -> Charcoal

content = content.replace(/#4e020e/gi, '#556552');
content = content.replace(/#4D020E/gi, '#556552');
content = content.replace(/#250205/gi, '#2F3A2E'); // Footer
content = content.replace(/#FFFDF7/gi, '#FDFBF7');
content = content.replace(/#F9F2E0/gi, '#EFE7D8');

// RGB replacements
content = content.replace(/250,\s*243,\s*224/g, '245, 239, 230');
content = content.replace(/255,\s*210,\s*125/g, '196, 122, 58');
content = content.replace(/139,\s*26,\s*51/g, '217, 119, 66');
content = content.replace(/109,\s*0,\s*29/g, '72, 86, 70');
content = content.replace(/59,\s*1,\s*11/g, '62, 75, 60');
content = content.replace(/242,\s*217,\s*160/g, '214, 153, 100');
content = content.replace(/117,\s*22,\s*45/g, '180, 95, 50');

// Specific overrides
content = content.replace(/(header\s*\{\s*background:\s*)var\(--bg-card\)/, '$1#2F3A2E');
content = content.replace(/rgba\(217,\s*119,\s*66,\s*0\.([0-9]+)\)/g, 'rgba(244, 199, 161, 0.$1)');
content = content.replace(/rgba\(196,\s*122,\s*58,\s*0\.([0-9]+)\)/g, 'rgba(244, 199, 161, 0.$1)');

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced colors via Node!');
