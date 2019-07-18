import express from "express";
import http from "http";
import path from "path";

import Game from "./Game";

const dirproject = path.resolve(__dirname + "/../..");

const app = express();
const server = http.createServer(app);

app.use("/", express.static(dirproject + "/bin/client"));
app.use("/assets", express.static(dirproject + "/assets"));
app.use("/vendor", express.static(dirproject + "/vendor"));

app.get("/", (req, res) => {
    res.sendFile(dirproject + "/bin/client/index.html");
});

const PORT = process.env.PORT || 8081;

server.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`);
});

const game = new Game(server);
