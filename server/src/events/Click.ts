import Game from "../Game";
import MySocket from "../models/MySocket";

class ClickEvent {
    constructor(game: Game, socket: MySocket) {
        socket.on("click", (data) => {
            socket.player.x = data.x - 30;
            socket.player.y = data.y - 40;
            game.io.emit("move", socket.player);
        });
    }
}

export default ClickEvent;
