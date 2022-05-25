const fs = require('fs');
const http = require('http');
const url = require('url');

// Creating the server:
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  //Page overview:
  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(tempOverview);

    //Page product:
  } else if (pathName === 'product') {
    res.end('PRODUCT');

    //API:
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Not found:
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page Not Found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
