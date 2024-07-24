const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 }, () => {
  console.log("Open World Package started");
});

wss.on("connection", function connection(ws) {
  ws.on("message", (data) => {
    console.log("Received: " + data);
  });
});

wss.on("listening", () => {
  console.log("Open World Package listening on port 8080");
});
