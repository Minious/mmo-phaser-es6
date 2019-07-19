import Client from "../services/Client";
import * as Phaser from "phaser";

class Game extends Phaser.Scene {
    public client: Client;
    public playerMap: { [id: string]: Phaser.GameObjects.Sprite; };

    constructor(config: string) {
        super(config);
        this.client = new Client(this);
        this.playerMap = {};
    }

    public preload() {
        // this.stage.disableVisibilityChange = true;
        // this.load.tilemap("map", "assets/map/example_map.json", null, Phaser.Tilemaps.Tilemap.TILED_JSON);
        this.load.tilemapTiledJSON('level1', 'assets/map/example_map.json');
        this.load.spritesheet("tileset", "assets/map/tilesheet.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("sprite", "assets/sprites/sprite.png");
    }

    public create() {
        const map: Phaser.Tilemaps.Tilemap = this.add.tilemap("map");
        map.addTilesetImage("tilesheet", "tileset");
        let layer: Phaser.Tilemaps.StaticTilemapLayer;
        for (let i = 0; i < map.layers.length; i++) {
            layer = map.createStaticLayer(i, "tileset");
        }
        // layer.inputEnabled = true;
        this.client.askNewPlayer();

        // layer.events.onInputUp.add(this.getCoordinates, this);
    }

    public getCoordinates(layer: any, pointer: Phaser.Input.Pointer) {
        this.client.sendClick(pointer.worldX, pointer.worldY);
    }

    public addNewPlayer(id: string, x: number, y: number) {
        this.playerMap[id] = this.add.sprite(x, y, "sprite");
    }

    public movePlayer = function(id: string, x: number, y: number) {
        const player: Phaser.GameObjects.Sprite = this.playerMap[id];
        const distance: number = Phaser.Math.Distance.Between(player.x, player.y, x, y);
        const duration: number = distance * 10;
        // const tween: Phaser.Tweens.Tween = this.game.add.tween(player);
        const tween: Phaser.Tweens.Tween = this.tweens.add({
            targets: player,
            x: x,
            y: y,
            ease: 'Linear',
            duration: duration,
            repeat: 0,
            yoyo: false
        });
        // tween.to({ x, y }, duration);
        tween.play();
    };

    public removePlayer = function(id: string) {
        this.playerMap[id].destroy();
        delete this.playerMap[id];
    };
}

export default Game;
