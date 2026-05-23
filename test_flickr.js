const https = require('https');
https.get('https://loremflickr.com/400/600/indian,textile', (res) => {
  console.log(res.statusCode, res.headers.location);
});
