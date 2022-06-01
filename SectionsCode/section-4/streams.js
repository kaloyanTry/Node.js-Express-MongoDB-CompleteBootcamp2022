const fs = require("fs");
const server = require("http").createServer(); //create server directly

server.on("request", (req, res) => {
  // The best modern solution:
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);

  // // Solution 1 old one: block all the code:
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // // Solution 2 consuming streams: read stream and then write:
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening...");
});
