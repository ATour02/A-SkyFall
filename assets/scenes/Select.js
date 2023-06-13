export default class Next extends Phaser.Scene {
    constructor() {
      super("Select");
    }
  // simular boton en imagen
    init() {
     
    }
  
    preload() {
      this.load.image("select","./public/images/select.jpg");
    }
  
    create() {
      
      this.add.image(400,300,"select").setScale(0.5);

    }
  
    update() {
   
    }
  }