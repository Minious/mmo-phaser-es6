import http from "http";
import SocketIO from "socket.io";

import ConnectionEvent from "./events/Connection";
import MySocket from "./models/MySocket";
import Player from "./models/Player";

class Game {
    public lastPlayerID: number;
    public io: SocketIO.Server;
    public sockets: { [id: string]: MySocket; } = {};

    constructor(app: http.Server) {
        this.lastPlayerID = 0;
        this.io = SocketIO(app);
        new ConnectionEvent(this);
    }

    public getAllPlayers() {
        const players: Player[] = [];
        const self = this;

        Object.keys(self.io.sockets.connected).forEach((socketID) => {
            const player: Player = self.sockets[socketID].player;
            if (player) {
                players.push(player);
            }
        });

        return players;
    }

    public randomInt(low: number, high: number) {
        return Math.floor(Math.random() * (high - low) + low);
    }
}

export default Game;
