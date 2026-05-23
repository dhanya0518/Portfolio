const fs = require('fs');
const file = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';

let content = fs.readFileSync(file, 'utf8');

// 1. HEX replacements
// Background
content = content.replace(/#F5EFE6/gi, '#E2E2E0');
content = content.replace(/#FAF3E0/gi, '#E2E2E0'); // just in case
// Accent / Hover / Headings (Old Gold/Copper -> Soft Aqua Teal)
content = content.replace(/#C47A3A/gi, '#2B7574');
content = content.replace(/#FFD27D/gi, '#2B7574'); 
// Primary Buttons (Old Burgundy/Burnt Orange -> Rich Crimson Red)
content = content.replace(/#D97742/gi, '#861211');
content = content.replace(/#8B1A33/gi, '#861211');
// Cards / Dark Maroon (Old Olive/Maroon -> Dark Teal)
content = content.replace(/#485646/gi, '#12484C');
content = content.replace(/#6D0D1D/gi, '#12484C');
// Deep Wine (Old Moss Green/Wine -> Dark Teal)
content = content.replace(/#3E4B3C/gi, '#12484C');
content = content.replace(/#3B010B/gi, '#12484C');
// Navbar / Footer
content = content.replace(/#2F3A2E/gi, '#0E2931');
content = content.replace(/#250205/gi, '#0E2931');
// Text page
content = content.replace(/#2B2B2B/gi, '#0E2931');
content = content.replace(/#1A0307/gi, '#0E2931');
// Light Text
content = content.replace(/#FFF8E7/gi, '#E2E2E0');
// Hover Glow
content = content.replace(/#F4C7A1/gi, '#2B7574');
// Miscellaneous backgrounds
content = content.replace(/#FDFBF7/gi, '#EAEAE8');
content = content.replace(/#EFE7D8/gi, '#D1D1D0');
content = content.replace(/#556552/gi, '#2B7574');

// 2. RGB replacements (Opacity preservation)
// Background: 245, 239, 230 -> 226, 226, 224
content = content.replace(/245,\s*239,\s*230/g, '226, 226, 224');
// Accent: 196, 122, 58 -> 43, 117, 116
content = content.replace(/196,\s*122,\s*58/g, '43, 117, 116');
// Primary: 217, 119, 66 -> 134, 18, 17
content = content.replace(/217,\s*119,\s*66/g, '134, 18, 17');
// Cards: 72, 86, 70 -> 18, 72, 76
content = content.replace(/72,\s*86,\s*70/g, '18, 72, 76');
// Cards: 62, 75, 60 -> 18, 72, 76
content = content.replace(/62,\s*75,\s*60/g, '18, 72, 76');
// Glows: 244, 199, 161 -> 43, 117, 116
content = content.replace(/244,\s*199,\s*161/g, '43, 117, 116');
// Footer/Navbar: 47, 58, 46 -> 14, 41, 49
content = content.replace(/47,\s*58,\s*46/g, '14, 41, 49');

// Replace any remaining RGBs that were missed in prev conversion
content = content.replace(/255,\s*210,\s*125/g, '43, 117, 116'); // sand gold
content = content.replace(/139,\s*26,\s*51/g, '134, 18, 17'); // burgundy
content = content.replace(/109,\s*0,\s*29/g, '18, 72, 76'); // dark maroon
content = content.replace(/59,\s*1,\s*11/g, '18, 72, 76'); // deep wine
content = content.replace(/242,\s*217,\s*160/g, '43, 117, 116');
content = content.replace(/214,\s*153,\s*100/g, '43, 117, 116');
content = content.replace(/180,\s*95,\s*50/g, '134, 18, 17');
content = content.replace(/10,\s*2,\s*5/g, '14, 41, 49'); // Modal bg

// 3. Elegant shadows (Replace harsh shadows with soft, elegant teal-tinted shadows)
content = content.replace(/--shadow:\s*0\s*15px\s*40px\s*rgba\(0,\s*0,\s*0,\s*0\.3\);/g, '--shadow: 0 10px 30px rgba(14, 41, 49, 0.15);');
content = content.replace(/--shadow-hover:\s*0\s*20px\s*50px\s*rgba\(0,\s*0,\s*0,\s*0\.45\);/g, '--shadow-hover: 0 20px 40px rgba(14, 41, 49, 0.25);');

// Change hardcoded shadows with rgba(0,0,0,...) to use Deep Ocean Teal
content = content.replace(/rgba\(0,\s*0,\s*0,\s*0\.([0-9]+)\)/g, 'rgba(14, 41, 49, 0.$1)');

// 4. Smooth rounded corners (increase border radius)
content = content.replace(/border-radius:\s*6px/g, 'border-radius: 12px');
content = content.replace(/border-radius:\s*8px/g, 'border-radius: 16px');
content = content.replace(/border-radius:\s*12px/g, 'border-radius: 24px');
content = content.replace(/border-radius:\s*15px/g, 'border-radius: 28px');

// 5. Abstract wave background for Hero (Replacing Ikat)
const newHeroBg = `background-image: 
        radial-gradient(ellipse at 0% 0%, rgba(43, 117, 116, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 100% 100%, rgba(134, 18, 17, 0.05) 0%, transparent 50%),
        repeating-radial-gradient(circle at 50% 150%, rgba(43, 117, 116, 0.04) 0%, rgba(43, 117, 116, 0.04) 2%, transparent 2.5%, transparent 4%);
    background-size: 100% 100%;`;
content = content.replace(/background-image:\s*[\s\S]*?background-size:[\s\S]*?;/, newHeroBg);

// Remove the block print motif from hero::before and add abstract wave motif
const newHeroBefore = `background-image: 
        linear-gradient(45deg, rgba(14, 41, 49, 0.02) 25%, transparent 25%, transparent 50%, rgba(14, 41, 49, 0.02) 50%, rgba(14, 41, 49, 0.02) 75%, transparent 75%, transparent);
    background-size: 60px 60px;
    opacity: 0.6;`;
content = content.replace(/background-image:\s*radial-gradient[\s\S]*?opacity:\s*0\.15;/m, newHeroBefore);

// 6. Section bg-light wave background
const newBgLight = `background-image: 
        radial-gradient(circle at 100% 0%, transparent 20%, rgba(43, 117, 116, 0.08) 21%, rgba(43, 117, 116, 0.08) 34%, transparent 35%, transparent),
        radial-gradient(circle at 0% 100%, transparent 20%, rgba(43, 117, 116, 0.08) 21%, rgba(43, 117, 116, 0.08) 34%, transparent 35%, transparent);`;
content = content.replace(/background-image:\s*radial-gradient\(circle at 100% 50%[\s\S]*?transparent\);/m, newBgLight);

// 7. Make the gradients less harsh
content = content.replace(/--gradient-primary:\s*linear-gradient\(135deg,\s*var\(--burgundy\)\s*0%,\s*var\(--deep-wine\)\s*100%\);/g, '--gradient-primary: linear-gradient(135deg, var(--burgundy) 0%, #0E2931 100%);');
content = content.replace(/--gradient-gold:\s*linear-gradient\(135deg,\s*#[A-Z0-9]+\s*0%,\s*#E5C585\s*100%\);/gi, '--gradient-gold: linear-gradient(135deg, #2B7574 0%, #12484C 100%);');

// Clean up specific hover animations
content = content.replace(/transform:\s*translateY\(-10px\)\s*scale\(1\.02\);/g, 'transform: translateY(-8px) scale(1.01);'); // Softer lift
content = content.replace(/transform:\s*translateY\(-5px\)\s*scale\(1\.08\);/g, 'transform: translateY(-4px) scale(1.03);');

fs.writeFileSync(file, content, 'utf8');
console.log('Teal Redesign complete!');
