export default class Help extends Phaser.Scene {
    constructor() {
      super("Help");
    }
  // simular boton en imagen
    init() {
     
    }
  
    preload() {
      this.load.image("ayuda","./public/images/ayuda.jpg");
      this.load.image("back","./public/images/optBackSel.png");
    }
  
    create() {
      
      this.add.image(400,300,"ayuda").setScale(0.5);
      const backOption = this.add.image(93,490,"back").setScale(0.195).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.scene.start("PrincipalMenu");
            })
    }
  
    update() {
   
    }
  }