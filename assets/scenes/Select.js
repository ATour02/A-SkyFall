const config = {
  width: 800,
  height: 600
};
export default class Select extends Phaser.Scene {
  constructor() {
    super("Select");
  }
  // simular boton en imagen
  init({ prNivel, SgNivel, ThNivel }) {
    this.score = 0;
    this.stairCount = prNivel || 0;
    this.stairCountSg = SgNivel || 0;
    this.stairCountTh = ThNivel || 0;
    this.TotalStairs = this.stairCount + this.stairCountSg + this.stairCountTh;
    console.log("test" + this.stairCount + "SG   " + this.stairCountSg + "Third " + this.stairCountTh);

  }


  create() {
    this.add.image(400, 300, "fondoMenu").setScale(0.45).setDisplaySize(config.width, config.height);;
    this.add.image(400, 300, "select").setScale(0.5);
    const playButton = this.add.image(230, 400, "playButt").setScale(0.5).setScale(0.1).setInteractive();
    const playButtonSg = this.add.image(400, 400, "playButt").setScale(0.5).setScale(0.1).setInteractive();
    const playButtonTh = this.add.image(576, 400, "playButt").setScale(0.5).setScale(0.1).setInteractive();
    const backOption = this.add.image(183, 472, "back").setScale(0.165).setInteractive();
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
    playButtonSg.on("pointerup", () => {
      this.scene.start("Game2");
    })
    playButtonTh.on("pointerup", () => {
      this.scene.start("Game3");
    })
    this.ScoreText = this.add.text(365, 82, "0", {
      fontSize: "50px",
    });
    //Estrellas primer nivel
    this.noSt = this.add.image(230, 362, "noSt")
      .setScale(0.065)
      .setVisible(false);

    this.oneSt = this.add.image(230, 360, "onSt")
      .setScale(0.065)
      .setVisible(false);

    this.twoSt = this.add.image(230, 360, "twSt")
      .setScale(0.067)
      .setVisible(false);

    this.thSt = this.add.image(230, 360, "thSt")
      .setScale(0.065)
      .setVisible(false);

      //Estrellas Segundo nivel
      this.noStSg = this.add.image(400, 362, "noSt")
      .setScale(0.065)
      .setVisible(false);

    this.oneStSg = this.add.image(400, 360, "onSt")
      .setScale(0.065)
      .setVisible(false);

    this.twoStSg = this.add.image(400, 360, "twSt")
      .setScale(0.067)
      .setVisible(false);

    this.thStSg = this.add.image(400, 360, "thSt")
      .setScale(0.065)
      .setVisible(false);


      //Estrellas Tercer Nivel
      this.noStTh = this.add.image(576, 362, "noSt")
      .setScale(0.065)
      .setVisible(false);

    this.oneStTh = this.add.image(576, 360, "onSt")
      .setScale(0.065)
      .setVisible(false);

    this.twoStTh = this.add.image(576, 360, "twSt")
      .setScale(0.067)
      .setVisible(false);

    this.thStTh = this.add.image(576, 360, "thSt")
      .setScale(0.065)
      .setVisible(false);

  }

  update() {
 if (this.stairCount >= 0 && this.stairCount < 1) {
  this.noSt.setVisible(true);
 };
 if ( this.stairCount >= 1 && this.stairCount < 2 ) {
  this.oneSt.setVisible(true);
 };
 if ( this.stairCount >= 2 && this.stairCount < 3 ) {
  this.twoSt.setVisible(true);
 };
 if (this.stairCount >= 3 ) {
  this.thSt.setVisible(true);
 };
// Lógica seg estrellas
 if (this.stairCountSg >= 0 && this.stairCountSg < 1) {
  this.noStSg.setVisible(true);
 };
 if ( this.stairCountSg >= 1 && this.stairCountSg < 2 ) {
  this.oneStSg.setVisible(true);
 };
 if ( this.stairCountSg >= 2 && this.stairCountSg < 3 ) {
  this.twoStSg.setVisible(true);
 };
 if (this.stairCountSg >= 3 ) {
  this.thStSg.setVisible(true);
 };

 // Logica Tercer estrellas

 if (this.stairCountTh >= 0 && this.stairCountTh < 1) {
  this.noStTh.setVisible(true);
 };
 if ( this.stairCountTh >= 1 && this.stairCountTh < 2 ) {
  this.oneStTh.setVisible(true);
 };
 if ( this.stairCountTh >= 2 && this.stairCountTh < 3 ) {
  this.twoStTh.setVisible(true);
 };
 if (this.stairCountTh >= 3 ) {
  this.thStTh.setVisible(true);
 };

 this.ScoreText.setText(
  this.TotalStairs
);
  }
}