const config = {
  width: 800,
  height: 600
};
export default class TranPr extends Phaser.Scene {
    constructor() {
      super("TranPr");
    }
  
    init({ score }) {
     this.finalScorePr = score || 0;
     this.Hscore = 0;
     this.stairs = 0;
     console.log(this.finalScorePr);
    }
  
    
  
    create() {
      this.add.image(400,300,"PrLvl").setScale(0.45).setDisplaySize(config.width, config.height);
      
      const backOption = this.add.image(220,490,"back").setScale(0.2).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.stairsPr()
            })
      const RetryOption = this.add.image(600,490,"reint").setScale(0.30).setInteractive();
            RetryOption.on("pointerover", () => {
        
              RetryOption.setTint(0x285866);
            });
              RetryOption.on("pointerout", () => {
        
              RetryOption.clearTint();
            });
              RetryOption.on("pointerup", () => {
              this.scene.start("Game");
              })
      this.scoreText = this.add.text(415, 303, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.HscoreText = this.add.text(413, 370, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.noSt = this.add.image(400,228,"noSt")
      .setScale(0.18)
      .setVisible(false);

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
    if (this.finalScorePr >= 1200) {
      this.thSt.setVisible(true);
      this.stairs = 3;
    }
    if (this.finalScorePr < 1200 && this.finalScorePr >= 700) {
      this.twoSt.setVisible(true);
      this.stairs = 2;
    }
    if (this.finalScorePr < 700 && this.finalScorePr >= 300 ) {
      this.oneSt.setVisible(true);
      this.stairs = 1;
    }
    if (this.finalScorePr < 300 ) {
      this.noSt.setVisible(true);
      this.stairs = 0;
    }
    }
    stairsPr() {
    this.scene.start("Select", {
      prNivel: this.stairs,
    });
    console.log(this.stairs);
    }
  }