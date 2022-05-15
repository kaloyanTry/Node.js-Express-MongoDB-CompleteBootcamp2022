// Reading and writting files on the file system:
///////////////////////
//import fs from "fs";
// old way is to require 'fs': access to the file system:
const fs = require("fs");

// const hello = "Hello world!";
// console.log(hello);

// // Blocking, sync way:
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is all we know about avocado: ${textIn}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("File written.");
// //////////////////////////////////

// Non-blocking, Async way:
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) {
    return console.log("ERROR!!!");
  }
  console.log(data);
});
console.log("Will read the file.");
