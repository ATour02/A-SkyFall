const config = {
  width: 800,
  height: 600
};

export default class Help extends Phaser.Scene {
    constructor() {
      super("Help");
    }
  // simular boton en imagen
    init() {
     
    }
   
    create() {
      
      this.add.image(400,300,"ayuda").setScale(0.5).setDisplaySize(config.width, config.height);
      const backOption = this.add.image(110,508,"back").setScale(0.2).setInteractive();
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