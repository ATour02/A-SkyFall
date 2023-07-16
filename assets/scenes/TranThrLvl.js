const config = {
    width: 800,
    height: 600
  };
export default class TranTh extends Phaser.Scene {
    constructor() {
      super("TranTh");
    }
  
    init({ score }) {
     this.finalScoreTh = score || 0;
     this.Hscore = 0;
     this.stairs = 0;
     console.log(this.finalScoreTh);
    }
  
    
  
    create() {
        this.add.image(400,300,"ThLvl").setScale(0.45).setDisplaySize(config.width, config.height);
      
      const backOption = this.add.image(205,490,"back").setScale(0.19).setInteractive();
      backOption.on("pointerover", () => {
  
        backOption.setTint(0x285866);
      });
      backOption.on("pointerout", () => {
  
        backOption.clearTint();
      });
             backOption.on("pointerup", () => {
                this.stairsTh()
            })
      const RetryOption = this.add.image(600,490,"reint").setScale(0.28).setInteractive();
            RetryOption.on("pointerover", () => {
        
              RetryOption.setTint(0x285866);
            });
              RetryOption.on("pointerout", () => {
        
              RetryOption.clearTint();
            });
              RetryOption.on("pointerup", () => {
              this.scene.start("Game3");
              })
      this.scoreText = this.add.text(415, 293, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.HscoreText = this.add.text(413, 362, "0", {
        fontSize: "35px",
        fontStyle: "bold",
      });

      this.noSt = this.add.image(400,218,"noSt")
      .setScale(0.18)
      .setVisible(false);

       this.oneSt = this.add.image(400,210,"onSt")
      .setScale(0.16)
      .setVisible(false);

      this.twoSt = this.add.image(400,210,"twSt")
      .setScale(0.18)
      .setVisible(false);

      this.thSt = this.add.image(400,212,"thSt")
      .setScale(0.16)
      .setVisible(false);

    }
  
    update() {
      this.scoreText.setText(
        this.finalScoreTh
      );
    if (this.finalScoreTh > this.Hscore) {
      this.Hscore = this.finalScoreTh
    };
    this.HscoreText.setText(
      this.Hscore
    );
    if (this.finalScoreTh >= 1200) {
      this.thSt.setVisible(true);
      this.stairs = 3;
    }
    if (this.finalScoreTh < 1200 && this.finalScoreTh >= 700) {
      this.twoSt.setVisible(true);
      this.stairs = 2;
    }
    if (this.finalScoreTh < 700 && this.finalScoreTh >= 300 ) {
      this.oneSt.setVisible(true);
      this.stairs = 1;
    }
    if (this.finalScoreTh < 300 ) {
      this.noSt.setVisible(true);
      this.stairs = 0;
    }
    }
    stairsTh() {
    this.scene.start("Select", {
      ThNivel: this.stairs,
    });
    }
  }