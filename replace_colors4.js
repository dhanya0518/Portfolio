const fs = require('fs');
const file = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';

let content = fs.readFileSync(file, 'utf8');

// 1. Rewrite :root variables entirely
const newRoot = `:root {
    /* Brand Palette - Clean Luxury Textile */
    --champagne-beige: #F6EBDD; /* Warm Cream */
    --sand-gold: #E7C66B; /* Soft Gold Accent */
    --burgundy: #6B001B; /* Primary Maroon */
    --dark-maroon: #4A0012; /* Deep Maroon */
    --deep-wine: #4A0012; /* Deep Maroon */

    /* Functional Mappings */
    --bg-card: var(--deep-wine);
    --bg-body: var(--champagne-beige);
    --bg-alt: rgba(107, 0, 27, 0.03); /* Extremely subtle maroon tint */

    --primary: var(--burgundy);
    --primary-dark: var(--dark-maroon);
    --accent: var(--sand-gold);

    /* Text Colors - Increased Contrast */
    --text-page: #3A2A22; /* Elegant Brown Text */
    --text-card-main: #F6EBDD; /* Cream Text on dark cards */
    --text-card-head: var(--sand-gold);
    --text-card-sub: rgba(246, 235, 221, 0.85);

    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Clean solid shadows instead of glows */
    --shadow: 0 8px 25px rgba(74, 0, 18, 0.15);
    --shadow-hover: 0 15px 35px rgba(74, 0, 18, 0.25);

    --gradient-primary: var(--burgundy); /* Solid instead of gradient */
    --gradient-gold: var(--sand-gold); /* Solid instead of gradient */
    --gradient-hero: none;
}`;

content = content.replace(/:root\s*\{[\s\S]*?\}/m, newRoot);

// 2. Fix Header / Footer
content = content.replace(/header\s*\{\s*background:\s*#[0-9A-Fa-f]+;/g, 'header {\n    background: var(--dark-maroon);');
content = content.replace(/footer\s*\{\s*background:\s*#[0-9A-Fa-f]+;/g, 'footer {\n    background: var(--dark-maroon);');

// 3. Fix Text colors in links
content = content.replace(/color:\s*#[0-9A-Fa-f]+;\s*\/\* Light text on Wine \*\//g, 'color: var(--text-card-main); /* Light text on Wine */');

// 4. Hero Section Cleanup
content = content.replace(/background-color:\s*#[0-9A-Fa-f]+;\s*\/\* Fresh, vibrant base \*\//, 'background-color: var(--bg-body);');
const dottedPattern = `background-image: radial-gradient(rgba(107, 0, 27, 0.08) 1.5px, transparent 1.5px);
    background-size: 24px 24px;
    opacity: 1;`;
content = content.replace(/background-image:\s*linear-gradient[\s\S]*?opacity:\s*0\.6;/m, dottedPattern);

// 5. Hero Image Box Shadow (Remove Glow, use solid clean shadow)
const newHeroShadow = `border: 6px solid var(--burgundy);
    box-shadow: 0 25px 50px rgba(74, 0, 18, 0.2);`;
content = content.replace(/border:\s*6px solid var\(--burgundy\);[\s\S]*?\/\* Inner soft glow focus \*\//m, newHeroShadow);
content = content.replace(/box-shadow:\s*0\s*25px\s*50px\s*rgba\(32,\s*55,\s*59,\s*0\.4\);/g, 'box-shadow: 0 25px 50px rgba(74, 0, 18, 0.3);');

// 6. Hero Text Shadows
content = content.replace(/text-shadow:\s*0\s*4px\s*12px[\s\S]*?;/g, 'text-shadow: none;');
content = content.replace(/text-shadow:\s*1px\s*1px\s*0px\s*rgba\(255,\s*255,\s*255,\s*0\.5\);/g, 'text-shadow: none;');

// 7. Hero Summary (Remove Blur)
const solidSummaryBg = `background: var(--bg-card);
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(231, 198, 107, 0.2);`;
content = content.replace(/background:\s*rgba\(81,\s*156,\s*171,\s*0\.8\);[\s\S]*?border:\s*1px solid rgba\(255,\s*198,\s*79,\s*0\.1\);/m, solidSummaryBg);

// 8. Primary Button Updates
content = content.replace(/\.btn\.primary\s*\{\s*background:\s*var\(--primary\);\s*color:\s*#[A-Za-z0-9]+;/g, '.btn.primary {\n    background: var(--primary);\n    color: #FFF;');
content = content.replace(/\.action-btn\.primary\s*\{\s*background:\s*var\(--burgundy\);\s*color:\s*#[A-Za-z0-9]+;/g, '.action-btn.primary {\n    background: var(--burgundy);\n    color: #FFF;');
content = content.replace(/box-shadow:\s*0\s*6px\s*20px\s*rgba\([^)]+\);/g, 'box-shadow: 0 6px 15px rgba(74, 0, 18, 0.2);');
content = content.replace(/box-shadow:\s*0\s*12px\s*30px\s*rgba\([^)]+\);/g, 'box-shadow: 0 10px 25px rgba(74, 0, 18, 0.3);');
content = content.replace(/\.btn\.primary:hover\s*\{\s*background:\s*#[0-9A-Fa-f]+;/g, '.btn.primary:hover {\n    background: var(--dark-maroon);');
content = content.replace(/\.action-btn\.primary:hover\s*\{\s*background:\s*#[0-9A-Fa-f]+;/g, '.action-btn.primary:hover {\n    background: var(--dark-maroon);');

// 9. Sections & Cards
content = content.replace(/\.section:nth-child\(odd\)\s*\{\s*background-color:\s*rgba\([^)]+\);\s*\}/g, '.section:nth-child(odd) {\n    background-color: var(--bg-alt);\n}');
const bgLightSolid = `background-color: var(--bg-body);
    background-image: none;
    border-top: 1px solid rgba(107, 0, 27, 0.05);
    border-bottom: 1px solid rgba(107, 0, 27, 0.05);`;
content = content.replace(/background-color:\s*#[0-9A-Fa-f]+;[\s\S]*?border-bottom:\s*1px solid rgba\([^)]+\);/m, bgLightSolid);

// 10. Card Hover gradients removal
content = content.replace(/background:\s*linear-gradient\(to bottom,\s*var\(--deep-wine\),\s*#[0-9A-Fa-f]+\);/g, 'background: var(--deep-wine);');
content = content.replace(/background:\s*linear-gradient\(to bottom right,\s*var\(--deep-wine\),\s*#[0-9A-Fa-f]+\);/g, 'background: var(--deep-wine);');

// 11. Remove Blur from Cert Modal
content = content.replace(/backdrop-filter:\s*blur\(5px\);/g, '');
content = content.replace(/background-color:\s*rgba\(10,\s*2,\s*5,\s*0\.85\);/g, 'background-color: rgba(74, 0, 18, 0.95);');

// 12. Fix explicit color left behind
content = content.replace(/color:\s*#20373B;/g, 'color: var(--text-page);');
content = content.replace(/background:\s*rgba\(255,\s*198,\s*79,\s*0\.03\);/g, 'background: rgba(231, 198, 107, 0.05);');
content = content.replace(/rgba\(255,\s*198,\s*79/g, 'rgba(231, 198, 107'); // Catch any stray yellows
content = content.replace(/rgba\(81,\s*156,\s*171/g, 'rgba(107, 0, 27'); // Catch stray teals
content = content.replace(/rgba\(32,\s*55,\s*59/g, 'rgba(74, 0, 18'); // Catch stray dark teals

fs.writeFileSync(file, content, 'utf8');
console.log('Restored Maroon Portfolio Theme!');
