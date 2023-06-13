export default class Select extends Phaser.Scene {
    constructor() {
      super("Select");
    }
  // simular boton en imagen
    init() {
     this.score = 0;
    }
  
    preload() {
      this.load.image("select","./public/images/select.jpg");
    }
  
    create() {
      
      this.add.image(400,300,"select").setScale(0.5);
      this.ScoreText = this.add.text(365, 82, "8", {
        fontSize: "50px",
      });

    }
  
    update() {
   
    }
  }