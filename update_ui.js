const fs = require('fs');
const htmlFile = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\index.html';
const cssFile = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';

// 1. Update HTML
let html = fs.readFileSync(htmlFile, 'utf8');

const images = [
    'https://images.unsplash.com/photo-1584984282367-e9a0f0254c01?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605809797380-5a33116dfde1?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1616422285623-14ff86bdf87f?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1605000595304-7a31f1f23719?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1620054813589-914fb50f1d19?auto=format&fit=crop&q=80&w=400'
];

// We will inject a side card at the start of each section container
// Section About
html = html.replace(/(<section id="about" class="section">\s*<div class="container">)/, 
    `$1\n                <div class="floating-card left float-1"><img src="${images[0]}" alt="Traditional Weaving"></div>`);

// Section Skills
html = html.replace(/(<section id="skills" class="section bg-light">\s*<div class="container">)/, 
    `$1\n                <div class="floating-card right float-2"><img src="${images[1]}" alt="Handloom Pattern"></div>`);

// Section Projects
html = html.replace(/(<section id="projects" class="section">\s*<div class="container">)/, 
    `$1\n                <div class="floating-card left float-3"><img src="${images[2]}" alt="Jacquard Silk"></div>`);

// Section Forge
html = html.replace(/(<section id="forge" class="section">\s*<div class="container">)/, 
    `$1\n                <div class="floating-card right float-1"><img src="${images[3]}" alt="Textile Loom"></div>`);

// Section Experience
html = html.replace(/(<section id="experience" class="section bg-light">\s*<div class="container">)/, 
    `$1\n                <div class="floating-card left float-2"><img src="${images[4]}" alt="Textile Fabric"></div>`);

// Add motif to Hero
html = html.replace(/(<div class="hero-content">)/, 
    `$1\n                <div class="hero-motif"><img src="${images[5]}" alt="Indian Motif" class="motif-img"></div>`);

fs.writeFileSync(htmlFile, html, 'utf8');

// 2. Update CSS
let css = fs.readFileSync(cssFile, 'utf8');

// Section title divider
const newDivider = `.section-title::after {
    content: '◈ ◈ ◈';
    display: block;
    width: 100%;
    height: auto;
    background: transparent;
    margin: 0.5rem auto 0;
    color: var(--sand-gold);
    font-size: 0.8rem;
    letter-spacing: 10px;
    text-align: center;
    border-radius: 0;
}`;
css = css.replace(/\.section-title::after\s*\{[\s\S]*?\}/, newDivider);
// Also for left align
const leftDivider = `.section-title.left-align::after {
    margin: 0.5rem 0 0;
    text-align: left;
}`;
css = css.replace(/\.section-title\.left-align::after\s*\{[\s\S]*?\}/, leftDivider);

// Section Backgrounds and Borders (Remove standard subtle border line and add framed borders)
const sectionBorder = `/* Handloom Section Framing */
.section {
    padding: 6rem 5%;
    position: relative;
    border-top: 8px solid var(--dark-maroon);
    border-bottom: 2px solid var(--sand-gold);
    background-color: var(--bg-body);
}

.section::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--sand-gold);
}
`;
css = css.replace(/\.section\s*\{\s*padding: 6rem 5%;\s*position: relative;\s*\}/, sectionBorder);
css = css.replace(/\.section::after\s*\{[\s\S]*?opacity:\s*0\.15;\s*\}/, '/* removed old section divider */');

// Remove gradient glow from cards and replace with solid shadow
css = css.replace(/background:\s*linear-gradient\(to bottom,\s*var\(--deep-wine\),\s*#[A-Za-z0-9]+\);/g, 'background: var(--deep-wine);');
css = css.replace(/background:\s*linear-gradient\(to bottom right,\s*var\(--deep-wine\),\s*#[A-Za-z0-9]+\);/g, 'background: var(--deep-wine);');

// Add floating card CSS at the end
const floatingCardCSS = `

/* Textile Museum Editorial Cards */
.floating-card {
    position: absolute;
    width: 220px;
    height: 300px;
    padding: 10px;
    background: #FFF; /* Classic photo border */
    box-shadow: 0 15px 35px rgba(74, 0, 18, 0.15);
    border-radius: 4px;
    z-index: 0;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    pointer-events: auto; /* Just decorative but hoverable */
}

.floating-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.05);
}

.floating-card.left {
    left: -12%;
    top: 10%;
}

.floating-card.right {
    right: -12%;
    top: 20%;
}

.floating-card.float-1 { transform: rotate(-6deg); }
.floating-card.float-2 { transform: rotate(4deg); }
.floating-card.float-3 { transform: rotate(-3deg); }

.floating-card:hover {
    transform: translateY(-10px) rotate(0deg) scale(1.05);
    box-shadow: 0 25px 45px rgba(74, 0, 18, 0.25);
    z-index: 10;
}

@media (max-width: 1400px) {
    .floating-card.left { left: -5%; }
    .floating-card.right { right: -5%; }
}

@media (max-width: 1200px) {
    .floating-card { display: none; }
}

/* Hero Motif */
.hero-motif {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--sand-gold);
    box-shadow: 0 5px 15px rgba(74,0,18,0.2);
}
.hero-motif img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
css += floatingCardCSS;

fs.writeFileSync(cssFile, css, 'utf8');
console.log('UI Transformation Complete');
