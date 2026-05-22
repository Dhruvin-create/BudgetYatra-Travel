const fs = require('fs');
const c = fs.readFileSync('src/lib/data/blogs.js', 'utf8');
const slugs = c.match(/"slug": "[^"]+"/g) || c.match(/slug: '[^']+'/g) || [];
console.log('Slugs found:', slugs.length);
slugs.forEach(s => console.log(' -', s));