import { createServer } from "http";

const server = createServer((req, res) => {
  //   res.end();
});
server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

server.on("request", (req, res) => {
  console.log(req.url);
  if (req.url === "/merli?query1=value1") {
    console.log("?????");
    res.writeHead(400, "Merli nop", {
      maHeader: "Ma header value",
    });
    const jsonBody = {
      data: "This is a json body.",
    };
    res.write(JSON.stringify(jsonBody));
    res.end();
  }
});

server.listen(8000);
