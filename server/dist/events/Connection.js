"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewPlayer_1 = __importDefault(require("./NewPlayer"));
class ConnectionEvent {
    constructor(game) {
        game.io.on("connection", (socket) => {
            new NewPlayer_1.default(game, socket);
        });
    }
}
exports.default = ConnectionEvent;
//# sourceMappingURL=Connection.js.map