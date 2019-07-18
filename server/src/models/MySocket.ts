import Player from "./Player";

export default interface MySocket extends SocketIO.Socket {
  player: Player;
}
