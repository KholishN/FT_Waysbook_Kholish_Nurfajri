require("dotenv").config();
const express = require("express");
const router = require("./src/routes");
const cors = require("cors");

const app = express();
const PORT = 5000;
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

require("./src/socket")(io);

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use("/api/v1/", router);

server.listen(PORT, () => console.log(`Server Running on Port : ${PORT}`));
