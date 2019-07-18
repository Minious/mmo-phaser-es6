"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
const Connection_1 = __importDefault(require("./events/Connection"));
class Game {
    constructor(app) {
        this.sockets = {};
        this.lastPlayerID = 0;
        this.io = socket_io_1.default(app);
        new Connection_1.default(this);
    }
    getAllPlayers() {
        const players = [];
        const self = this;
        Object.keys(self.io.sockets.connected).forEach((socketID) => {
            const player = self.sockets[socketID].player;
            if (player) {
                players.push(player);
            }
        });
        return players;
    }
    randomInt(low, high) {
        return Math.floor(Math.random() * (high - low) + low);
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map