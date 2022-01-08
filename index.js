const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replaceTemplate.js');

// const hello = "Hello world";
// console.log(hello);
////////////////////////////////////////////////////////////
// Blocking, syncronous way - Non-good practice:
// Read stuff from files:
// const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textInput);

// // Write text on file:
// const textOutput = `This is all we know about the avocado: ${textInput}.\nCreated on ${Date.now()}.`;

// fs.writeFileSync("./txt/output.txt", textOutput);
// console.log("File written!");

// Non-blocking, asynchronous way: Good practice:
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error 💣");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has not been written 🤕");
//       });
//     });
//   });
// });
// console.log("Will read file.");
/////////////////////////////////////////////////////////////////////
// SERVER

//const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// working with 3d modules:
const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
// console.log(slugs); // take/slug and lowercase the last parts of elements/productNames

// creating server
const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, { 'Content-type': 'text/html' });

    const cardsHtml = dataObj.map((el) => replaceTemplate(tempCard, el)).join('');
    const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === '/product') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    res.end('<h1>Page not found</h1>');
  }

  //res.end("Hello from the server!");
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000');
});
