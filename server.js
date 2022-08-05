const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

app.use(cors());
// var server = require("http").Server(app);
// var io = require("socket.io")(server);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let APP_PORT = 10043;

app.use(bodyParser.json());

server.listen(APP_PORT, () => {
  console.log(`SERVER RUNNING ON PORT : ${APP_PORT}`);
});

app.post("/", (req, res) => {
  const data = req.body;

  console.log(`Problem name: ${data.name}`);
  console.log(`Problem group: ${data.group}`);
  console.log("Full body:");
  console.log(JSON.stringify(data, null, 4));
  io.sockets.emit("send-new-problem", data);

  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`);
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  // socket.on("disconnect", function () {
  //   console.log("client has disconnected:" + socket.id);
  // });
});
