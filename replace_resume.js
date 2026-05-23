const fs = require('fs');

const indexFile = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\index.html';
let html = fs.readFileSync(indexFile, 'utf-8');

// Replace the old resume section
const oldResumeSectionPattern = /<div class="projects-grid centered-item reveal">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newResumeSection = `<div class="editorial-grid reveal-stagger">
                    <div class="editorial-card reveal">
                        <div class="editorial-image">
                            <img src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=400" alt="Textile Weaving">
                        </div>
                        <div class="editorial-content">
                            <h3>Academic Background</h3>
                            <p>Explore my educational journey and strong foundation in textile technology.</p>
                            <a href="#about" class="btn secondary">Read More</a>
                        </div>
                    </div>
                    
                    <div class="editorial-card offset-card reveal">
                        <div class="editorial-image">
                            <img src="https://images.unsplash.com/photo-1605809797380-5a33116dfde1?auto=format&fit=crop&q=80&w=400" alt="Handloom Silk">
                        </div>
                        <div class="editorial-content">
                            <h3>Download Resume</h3>
                            <p>Get a comprehensive overview of my technical skills and experience.</p>
                            <a href="https://www.canva.com/design/DAHBBk_A4dU/_qyMPGDx9t3_qrC1s2DBXg/edit?utm_content=DAHBBk_A4dU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="btn primary">Download PDF</a>
                        </div>
                    </div>

                    <div class="editorial-card reveal">
                        <div class="editorial-image">
                            <img src="https://images.unsplash.com/photo-1620054813589-914fb50f1d19?auto=format&fit=crop&q=80&w=400" alt="Textile Art">
                        </div>
                        <div class="editorial-content">
                            <h3>Professional Profile</h3>
                            <p>Connect with me on LinkedIn to view my latest professional updates.</p>
                            <a href="https://www.linkedin.com/in/dhanyasuki-s-354446290" target="_blank" class="btn secondary">LinkedIn Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

html = html.replace(oldResumeSectionPattern, newResumeSection);

fs.writeFileSync(indexFile, html, 'utf-8');

const cssFile = 'c:\\Users\\dhany\\OneDrive\\Documents\\Portfolio\\style.css';
let css = fs.readFileSync(cssFile, 'utf-8');

const newStyles = `

/* Editorial Grid for Resume Section */
.editorial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    align-items: start;
    margin-top: 3rem;
}

.editorial-card {
    background: var(--bg-body);
    border: 1px solid var(--primary);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    display: flex;
    flex-direction: column;
}

.editorial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(74, 0, 18, 0.1); /* Soft, flat shadow */
}

.offset-card {
    margin-top: 3rem; /* Asymmetrical layout */
}

.editorial-image {
    width: 100%;
    height: 250px;
    border-bottom: 1px solid var(--primary);
    overflow: hidden;
}

.editorial-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.editorial-card:hover .editorial-image img {
    transform: scale(1.03);
}

.editorial-content {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.editorial-content h3 {
    color: var(--primary-dark);
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.editorial-content p {
    color: var(--text-page);
    font-size: 1rem;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.editorial-content .btn {
    align-self: flex-start;
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
}

@media (max-width: 900px) {
    .offset-card {
        margin-top: 0;
    }
}
`;

css += newStyles;
fs.writeFileSync(cssFile, css, 'utf-8');

console.log('Resume section updated successfully.');
