export default class PreLoad extends Phaser.Scene {
    // escena para optimiozar tiempos
    // carga el preload solo una vez y sirve para todo el juego
    constructor() {
      // key of the scene
      super("preload");
    }
    
    preload() {
      //menu
    //background
    this.load.image("sky", "./public/images/sky.jpg");
    this.load.image("ground", "./public/images/ground.png");
    this.load.image("dron", "./public/images/dron.png");

    //change for spritesheet pjPrin
    this.load.image("PJPrin", "./public/images/PJPrin.png");

    //obstacles
    
    }
    create() {
      /* this.anims.create({
        key: "dron",
        frames: this.anims.generateFrameNumbers("dron", { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1,
      }); */
        // init scene Menú
        this.scene.start("PrincipalMenu");
    }
}