const server = require("ws").Server;
const s = new server({ port: 40510 });

s.on("connection", (ws) => {
  ws.on("message", (message) => {
    s.clients.forEach((client) => {
      client.send(message);
    });
  });
});
