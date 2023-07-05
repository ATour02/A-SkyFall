export default class Select extends Phaser.Scene {
  constructor() {
    super("Select");
  }
  // simular boton en imagen
  init({ prNivel, SgNivel }) {
    this.score = 0;
    this.stairCount = prNivel || 1;
    this.stairCountSg = SgNivel || 1;
    console.log("test" + this.stairCount + "SG   " + this.stairCountSg);

  }


  create() {
    this.add.image(400, 300, "fondoMenu").setScale(0.45);
    this.add.image(400, 300, "select").setScale(0.5);
    const playButton = this.add.image(230, 400, "playButt").setScale(0.5).setScale(0.1).setInteractive();
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
    this.ScoreText = this.add.text(365, 82, "8", {
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
  }

  update() {
 if (this.stairCount <= 1) {
  this.noSt.setVisible(true);
 };
 if ( this.stairCount > 1 && this.stairCount <= 2 ) {
  this.oneSt.setVisible(true);
 };
 if ( this.stairCount > 2 && this.stairCount <= 3 ) {
  this.twoSt.setVisible(true);
 };
 if (this.stairCount > 3 && this.stairCount <= 4 ) {
  this.thSt.setVisible(true);
 };
// Lógica seg estrellas
 if (this.stairCountSg <= 1) {
  this.noStSg.setVisible(true);
 };
 if ( this.stairCountSg > 1 && this.stairCountSg <= 2 ) {
  this.oneStSg.setVisible(true);
 };
 if ( this.stairCountSg > 2 && this.stairCountSg <= 3 ) {
  this.twoStSg.setVisible(true);
 };
 if (this.stairCountSg > 3 && this.stairCountSg <= 4 ) {
  this.thStSg.setVisible(true);
 };
  }
}