"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Click_1 = __importDefault(require("./Click"));
const Disconnect_1 = __importDefault(require("./Disconnect"));
class NewPlayerEvent {
    constructor(game, socket) {
        socket.on("newplayer", () => {
            game.sockets[socket.id] = socket;
            socket.player = {
                id: game.lastPlayerID++,
                x: game.randomInt(100, 400),
                y: game.randomInt(100, 400)
            };
            socket.emit("allplayers", game.getAllPlayers());
            socket.broadcast.emit("newplayer", socket.player);
            new Click_1.default(game, socket);
            new Disconnect_1.default(game, socket);
        });
    }
}
exports.default = NewPlayerEvent;
