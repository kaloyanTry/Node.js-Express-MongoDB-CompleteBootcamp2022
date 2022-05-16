// 1. Reading and writting files on the file system:

//import fs from "fs";
// old way is to require 'fs': access to the file system:
const fs = require("fs");

// 2. Creating a simple web server:
const http = require("http");

// 3. Routing:
const url = require("url");
const { runInNewContext } = require("vm");

// const hello = "Hello world!";
// console.log(hello);

// // 1. Blocking, sync way:
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is all we know about avocado: ${textIn}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("File written.");
// //////////////////////////////////

// // 1. Non-blocking, Async way:
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) {
//     return console.log("ERROR!!!");
//   }
//   console.log(data);
// });
// console.log("Will read the file.");
// /////////////////////////////////////

// // 2. Creating a simple web server:
// // create  a sever and passing a callback function:
// const server = http.createServer((req, res) => {
//   res.end("hello from the server!");
// });
// // starting a web server with listen command, on port 8000 and ip address:
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to request on port 8000");
// });

// 3. Routing:
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW!");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT!");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
