import Game from "../Game";
import MySocket from "../models/MySocket";

class DisconnectEvent {
    constructor(game: Game, socket: MySocket) {
        socket.on("disconnect", () => {
            delete game.sockets[socket.id];

            game.io.emit("remove", socket.player.id);
        });
    }
}

export default DisconnectEvent;
