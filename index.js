const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const path = require("path");

const server = http.createServer(app);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(
  "/.well-known",
  express.static(path.join(process.cwd(), ".well-known"))
);

app.get("/", async (req, res) => {
  res.send("Welcome to this Api....");
});

server.listen(55555, (req, res) => {
  console.log(`App running on port ${55555}`);
});