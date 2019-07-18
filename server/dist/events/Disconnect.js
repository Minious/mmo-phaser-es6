"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DisconnectEvent {
    constructor(game, socket) {
        socket.on("disconnect", () => {
            delete game.sockets[socket.id];
            game.io.emit("remove", socket.player.id);
        });
    }
}
exports.default = DisconnectEvent;
//# sourceMappingURL=Disconnect.js.map