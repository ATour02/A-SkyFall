export default class Select extends Phaser.Scene {
    constructor() {
      super("Select");
    }
  // simular boton en imagen
    init() {
     this.score = 0;
    }
  
  
    create() {
      this.add.image(400,300,"fondoMenu").setScale(0.45);
      this.add.image(400,300,"select").setScale(0.5);
      const playButton = this.add.image(230,360,"playButt").setScale(0.5).setScale(0.1).setInteractive();
      const backOption = this.add.image(183,472,"back").setScale(0.165).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.scene.start("PrincipalMenu");
            })
        playButton.on("pointerup", () => {
              this.scene.start("Game");
          })
      this.ScoreText = this.add.text(365, 82, "8", {
        fontSize: "50px",
      });

    }
  
    update() {
   
    }
  }