import Game from "./states/Game";
import * as Phaser from "phaser";

class App extends Phaser.Game {
    constructor() {
        let gameScene = new Game('Game');

        let config = {
            type: Phaser.AUTO,  //Phaser will decide how to render our game (WebGL or Canvas)
            width: 24 * 32, // game width
            height: 17 * 32, // game height
            scene: gameScene // our newly created scene
        };

        super(config);
        // super(24 * 32, 17 * 32, Phaser.AUTO);

        // this.state.add("Game", Game);
        // this.state.start("Game");
    }
}

new App();
