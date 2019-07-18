"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClickEvent {
    constructor(game, socket) {
        socket.on("click", (data) => {
            socket.player.x = data.x - 30;
            socket.player.y = data.y - 40;
            game.io.emit("move", socket.player);
        });
    }
}
exports.default = ClickEvent;
//# sourceMappingURL=Click.js.map