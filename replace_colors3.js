const fs = require('fs');
const file = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';

let content = fs.readFileSync(file, 'utf8');

// 1. HEX replacements
// Background: Soft Light Gray -> Light Blue
content = content.replace(/#E2E2E0/gi, '#C3E7F1');
// Navbar/Footer/Text: Deep Ocean Teal -> Gunmetal Dark
content = content.replace(/#0E2931/gi, '#20373B');
// Cards: Dark Teal -> Moonstone Teal
content = content.replace(/#12484C/gi, '#519CAB');
// Buttons: Rich Crimson Red -> Saffron Yellow
content = content.replace(/#861211/gi, '#FFC64F');
// Hover/Accent: Soft Aqua Teal -> Saffron Yellow or Darker Teal
content = content.replace(/#2B7574/gi, '#FFC64F'); // We will use yellow for accents
// Misc Alt Backgrounds
content = content.replace(/#EAEAE8/gi, '#D6EDF5');
content = content.replace(/#D1D1D0/gi, '#B1DCEB');

// Override Text on cards if they were E2E2E0 to F8FAFC
content = content.replace(/--text-card-main:\s*#C3E7F1;/g, '--text-card-main: #F8FAFC;');

// 2. RGB replacements (Opacity preservation)
// Background: 226, 226, 224 -> 195, 231, 241
content = content.replace(/226,\s*226,\s*224/g, '195, 231, 241');
// Navbar/Footer: 14, 41, 49 -> 32, 55, 59
content = content.replace(/14,\s*41,\s*49/g, '32, 55, 59');
// Cards: 18, 72, 76 -> 81, 156, 171
content = content.replace(/18,\s*72,\s*76/g, '81, 156, 171');
// Buttons: 134, 18, 17 -> 255, 198, 79
content = content.replace(/134,\s*18,\s*17/g, '255, 198, 79');
// Accent/Hover: 43, 117, 116 -> 255, 198, 79 (Saffron Yellow glow)
content = content.replace(/43,\s*117,\s*116/g, '255, 198, 79');

// Make sure shadows use Gunmetal Dark instead of old teal
content = content.replace(/rgba\(14,\s*41,\s*49,\s*0\.15\)/g, 'rgba(32, 55, 59, 0.1)');
content = content.replace(/rgba\(14,\s*41,\s*49,\s*0\.25\)/g, 'rgba(32, 55, 59, 0.2)');
content = content.replace(/rgba\(14,\s*41,\s*49,\s*/g, 'rgba(32, 55, 59, ');

// Adjust text color on primary buttons (Since yellow button needs dark text)
content = content.replace(/\.action-btn\.primary\s*\{\s*background:\s*var\(--burgundy\);\s*color:\s*#fff;/g, '.action-btn.primary {\n    background: var(--burgundy);\n    color: #20373B;');
content = content.replace(/\.action-btn\.primary:hover\s*\{\s*background:\s*#0E2931;/gi, '.action-btn.primary:hover {\n    background: #20373B;');
// For primary btn hover text color
content = content.replace(/\.btn\.primary\s*\{\s*background:\s*var\(--primary\);\s*color:\s*#fff;/g, '.btn.primary {\n    background: var(--primary);\n    color: #20373B;');

fs.writeFileSync(file, content, 'utf8');
console.log('Soft Textile Redesign complete!');
