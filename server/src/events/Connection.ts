import Game from "../Game";
import MySocket from "../models/MySocket";
import NewPlayerEvent from "./NewPlayer";

class ConnectionEvent {
    constructor(game: Game) {
        game.io.on("connection", (socket: MySocket) => {
            new NewPlayerEvent(game, socket);
        });
    }
}

export default ConnectionEvent;
