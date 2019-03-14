const express = require("express");
const server = express();
const db = require("../data/db");
server.use(express.json());
server.get("/", (req, res) => {
  db.hubs //line 2 in db.js
    .find()
    .then(hubs => res.status(200).json({ success: true, hubs }))
    .catch(({ code, message }) => res.status(code).json({ message }));
});
server.post("/", (req, res) => {
  const hub = req.body;
  //db.js:72 shows that addHub takes in a hub argument
  //then() takes the newHub that addHub returns and then returns a 201 (creation) status
  db.hubs
    .add(hub)
    .then(newHub => res.status(201).json({ success: true, newHub }))
    .catch(({ code, message }) => res.status(code).json({ message }));
});
module.exports = server;
