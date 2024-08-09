import { createServer } from "http";
import * as fs from "fs";
import { DbGetData } from "./db";

const server = createServer((req, res) => {
  //   res.end();
});
server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

server.on("request", (req, res) => {
  console.log(req.url);

  const fileExtensionArray = req.url?.split(".");
  console.log("fileExtensionArray", fileExtensionArray);

  if (fileExtensionArray && fileExtensionArray.length > 1) {
    const fileName = fileExtensionArray[0];
    const fileExtension = fileExtensionArray[1];

    const filePath = `tsDist/frontend${fileName}.${fileExtension}`;

    console.log("FILE: ", filePath);

    try {
      const fileBuffer = fs.readFileSync(filePath);
      res.writeHead(200);
      res.write(fileBuffer);
      res.end();
    } catch (error) {
      res.writeHead(404);
      res.end();
    }
  } else if (req.url === "/") {
    const fileBuffer = fs.readFileSync("tsDist/frontend/index.html");

    res.writeHead(200);
    res.write(fileBuffer);
    res.end();
  } else if (req.url === "/items") {
    if (req.method !== "GET") {
      res.writeHead(400);
      res.write("BAD MATHOD");
      res.end();
    } else {
      const data = DbGetData();
      res.writeHead(200, "", {
        "Content-Type": "text/json; charset=utf-8",
      });
      res.write(JSON.stringify(data));
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
