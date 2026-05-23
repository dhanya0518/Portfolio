const fs = require('fs');
const cssFile = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';
let css = fs.readFileSync(cssFile, 'utf8');

// 1. Fix Navbar Text Color
css = css.replace(/\.nav-links a\s*\{[^}]*\}/g, (match) => {
    return match.replace(/color:\s*var\(--text-page\);/g, 'color: var(--champagne-beige);');
});

// Also ensure hover doesn't just change text to burgundy, maybe keep it cream or make it sand-gold
css = css.replace(/\.nav-links a:hover\s*\{\s*color:\s*var\(--burgundy\);\s*\}/g, '.nav-links a:hover {\n    color: var(--sand-gold);\n}');

// 2. Fix Hero Image Hover
// Remove the broken or incomplete hover rule I might have added before
css = css.replace(/\.hero-image-container:hover \.hero-profile-img\s*\{[\s\S]*?\}/g, '');

// Ensure .hero-image-container has overflow hidden (it probably does, but let's make sure)
// And add the robust hover rule
const properHoverCss = `
.hero-image-container {
    overflow: hidden !important;
}
.hero-profile-img {
    transition: transform 0.4s ease !important;
}
.hero-image-container:hover .hero-profile-img {
    transform: scale(1.04) !important;
}
`;
css += properHoverCss;

fs.writeFileSync(cssFile, css, 'utf8');
console.log('Final fixes applied.');
