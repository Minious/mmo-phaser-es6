import Game from "../states/Game";

class Client {

    public socket: SocketIOClient.Socket;

    constructor(game: Game) {
        this.socket = io.connect();

        this.socket.on("newplayer", (data: any) => {
            game.addNewPlayer(data.id, data.x, data.y);
        });

        this.socket.on("allplayers", (data: any) => {
            for (const player of data) {
                game.addNewPlayer(player.id, player.x, player.y);
            }
        });

        this.socket.on("move", (data: any) => {
            game.movePlayer(data.id, data.x, data.y);
        });

        this.socket.on("remove", (id: string) => {
            game.removePlayer(id);
        });
    }

    public askNewPlayer() {
        this.socket.emit("newplayer");
    }

    public sendClick(x: number, y: number) {
        this.socket.emit("click", { x, y });
    }
}

export default Client;
