const fs = require('fs');
const path = require('path');

function searchDir(dir, query) {
    let results = [];
    try {
        const list = fs.readdirSync(dir);
        for (const file of list) {
            const fullPath = path.join(dir, file);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                results = results.concat(searchDir(fullPath, query));
            } else if (file.endsWith('.jsonl') || file.endsWith('.txt') || file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes(query)) {
                    results.push({ path: fullPath, index: content.indexOf(query) });
                }
            }
        }
    } catch (e) {
        // ignore
    }
    return results;
}

const baseDir = 'C:\\Users\\dhany\\.gemini\\antigravity';
const matches = searchDir(baseDir, 'My Resume');
console.log('Matches found:', matches.length);
for (const match of matches) {
    console.log('File:', match.path);
    const content = fs.readFileSync(match.path, 'utf8');
    console.log(content.substring(match.index - 500, match.index + 1000));
    console.log('----------------------------------------------------');
}
