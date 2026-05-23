const https = require('https');

const queries = ['Indian textile', 'Handloom weaving', 'Kanchipuram sari', 'Zari embroidery', 'Ajrakh print'];

async function fetchImages() {
  for (const q of queries) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(q)}&pithumbsize=600`;
    
    await new Promise((resolve) => {
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const pages = json.query?.pages || {};
            for (const key in pages) {
              if (pages[key].thumbnail) {
                console.log(`Title: ${pages[key].title}`);
                console.log(`URL: ${pages[key].thumbnail.source}\n`);
              }
            }
          } catch(e) {}
          resolve();
        });
      });
    });
  }
}

fetchImages();
