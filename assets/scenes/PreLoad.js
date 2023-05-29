export default class PreLoad extends Phaser.Scene {
    // escena para optimiozar tiempos
    // carga el preload solo una vez y sirve para todo el juego
    constructor() {
      // key of the scene
      super("preload");
    }
    
    preload() {
    //background
    this.load.image("sky", "./public/images/sky.jpg");
    this.load.image("ground", "./public/images/ground.png");

    //change for spritesheet pjPrin
    this.load.image("PJPrin", "./public/images/PJPrin.png");

    //obstacles
    this.load.spritesheet("dron", "./public/images/dron.png",{
      frameWidth: 27,
      frameHeight: 14
    });
    }
    create() {

        // init scene Menú
        this.scene.start("Game");
    }
}