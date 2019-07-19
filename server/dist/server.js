"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const Game_1 = __importDefault(require("./Game"));
const dirproject = path_1.default.resolve(__dirname + "/../..");
const app = express_1.default();
const server = http_1.default.createServer(app);
app.use("/dist", express_1.default.static(dirproject + "/client/dist"));
// app.use("/vendor", express.static(dirproject + "/vendor"));
app.get("/", (req, res) => {
    res.sendFile(dirproject + "/client/dist/index.html");
});
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
const game = new Game_1.default(server);
