export default class TranPr extends Phaser.Scene {
    constructor() {
      super("TranPr");
    }
  
    init() {
     
    }
  
    preload() {
      this.load.image("PrLvl","./public/images/PrLvl.jpg");
      this.load.image("reint","./public/images/reint.png");
      this.load.image("back","./public/images/optBackSel.png");
    }
  
    create() {
      this.add.image(400,300,"PrLvl").setScale(0.45);
      
      const backOption = this.add.image(205,457,"back").setScale(0.165).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.scene.start("PrincipalMenu");
            })
      const RetryOption = this.add.image(600,455,"reint").setScale(0.26).setInteractive();
            RetryOption.on("pointerover", () => {
        
              RetryOption.setTint(0x285866);
            });
            RetryOption.on("pointerout", () => {
        
              RetryOption.clearTint();
            });
                   RetryOption.on("pointerup", () => {
                      this.scene.start("Game");
                  })
    }
  
    update() {
   
    }
  }