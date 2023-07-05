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
    this.load.image("fondoMenu", "./public/images/fondoMenu.jpg");
    this.load.image("botonPlay","./public/images/botonPlay.png");
    this.load.image("botonAyuda","./public/images/botonAyuda.png");
    this.load.image("botonCredits","./public/images/botonCredits.png");
    this.load.image("CredBack","./public/images/Cred.jpg");
    this.load.image("select","./public/images/select.jpg");
    this.load.image("Titulo","./public/images/titulo.png");
    this.load.image("ayuda","./public/images/ayuda.jpg");
    this.load.image("back","./public/images/optBackSel.png");
    this.load.image("sky", "./public/images/sky.jpg");
    this.load.image("sunrise", "./public/images/sunrise.jpg");
    this.load.image("mount", "./public/images/mountSun.jpg");
    this.load.image("ground", "./public/images/ground.png");
    this.load.image("dron", "./public/images/dron.png");
    this.load.image("playButt","./public/images/playButt.png");
    this.load.image("PrLvl","./public/images/PrLvl.jpg");
    this.load.image("reint","./public/images/reint.png");
    this.load.image("ave", "./public/images/ave.png");
    this.load.image("globo", "./public/images/globoS.png");
    this.load.image("noSt", "./public/images/noSt.png");
    this.load.image("onSt", "./public/images/onSt.png");
    this.load.image("twSt", "./public/images/twSt.png");
    this.load.image("thSt", "./public/images/thSt.png");

    

    //change for spritesheet pjPrin
    this.load.image("PJPrin", "./public/images/PJPrin.png");
    this.load.spritesheet("beam", "./public/images/beam.png",{
      frameWidth: 16,
      frameHeight: 16
    });
    //obstacles
    
    }
    create() {
      this.anims.create({
        key: "beam_anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate: 20,
        repeat: -1,
      }); 
        // init scene Menú
        this.scene.start("PrincipalMenu");
    }
}