const express = require("express");
const server = express();
const port = 9000;
const hubs = require("./routers/hubsRouters");
server.use("/api/hubs", hubs);
server.get("/", (req, res) => {
  res.status(200).send("Hello World.");
});

server.listen(port, () => {
  console.log("server is starting up");
});
