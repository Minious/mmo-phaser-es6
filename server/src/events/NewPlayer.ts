import Game from "../Game";
import MySocket from "../Models/MySocket";
import ClickEvent from "./Click";
import DisconnectEvent from "./Disconnect";

class NewPlayerEvent {
    constructor(game: Game, socket: MySocket) {
        socket.on("newplayer", () => {
            game.sockets[socket.id] = socket;

            socket.player = {
                id: game.lastPlayerID++,
                x: game.randomInt(100, 400),
                y: game.randomInt(100, 400)
            };

            socket.emit("allplayers", game.getAllPlayers());
            socket.broadcast.emit("newplayer", socket.player);

            new ClickEvent(game, socket);
            new DisconnectEvent(game, socket);
        });
    }
}

export default NewPlayerEvent;
