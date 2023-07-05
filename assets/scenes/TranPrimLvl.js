export default class TranPr extends Phaser.Scene {
    constructor() {
      super("TranPr");
    }
  
    init(data) {
     this.finalScorePr = data.score || 600;
     this.Hscore = 0;
     console.log(this.finalScorePr);
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
      this.scoreText = this.add.text(415, 284, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.HscoreText = this.add.text(413, 342, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

       this.oneSt = this.add.image(400,220,"onSt")
      .setScale(0.16)
      .setVisible(false);

      this.twoSt = this.add.image(400,220,"twSt")
      .setScale(0.18)
      .setVisible(false);

      this.thSt = this.add.image(400,222,"thSt")
      .setScale(0.16)
      .setVisible(false);

    }
  
    update() {
      this.scoreText.setText(
        this.finalScorePr
      );
    if (this.finalScorePr > this.Hscore) {
      this.Hscore = this.finalScorePr
    };
    this.HscoreText.setText(
      this.Hscore
    );
    if (this.finalScorePr >= 900) {
      this.thSt.setVisible(true);
    }
    if (this.finalScorePr < 900 && this.finalScorePr > 400) {
      this.twoSt.setVisible(true);
    }
    if (this.finalScorePr <= 400 ) {
      this.oneSt.setVisible(true);
    }
    }
  }