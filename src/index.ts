import { createServer } from "http";
import * as fs from "fs";

const server = createServer((req, res) => {
  //   res.end();
});
server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

server.on("request", (req, res) => {
  console.log(req.url);
  console.log("?????");
  res.writeHead(200);

  const index = fs.readFileSync("tsDist/frontend/index.html");

  res.write(index);
  res.end();
});

server.listen(8000);
