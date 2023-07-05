const config = {
  width: 800,
  height: 600
};
export default class PrincipalMenu extends Phaser.Scene {
    constructor() {
      super("PrincipalMenu");
    }
    init(){
    }

  create(){
      this.add.image(400,300,"fondoMenu").setScale(0.45).setDisplaySize(config.width, config.height);

      this.add.image(400,180,"Titulo").setScale(0.4);
      

      const startButton=this.add.image(390,280,"botonPlay").setScale(0.3).setInteractive();
      startButton.on("pointerover", () => {
  
  startButton.setTint(0x0000ff);
});
    const helpButton = this.add.image(390,370,"botonAyuda").setScale(0.3).setInteractive();
    helpButton.on("pointerover", () => {

helpButton.setTint(0x0000ff);
});

const creditsButton = this.add.image(390,460,"botonCredits").setScale(0.3).setInteractive();
    creditsButton.on("pointerover", () => {

creditsButton.setTint(0x0000ff);
});

startButton.on("pointerout", () => {
  
  startButton.clearTint();
});
       startButton.on("pointerup", () => {
        this.scene.start("Select");
      })
this.PlayText = this.add.text(346, 260, "JUGAR", {
        fontSize: "30px",
        fontStyle: "bold",
        fill: "#517986",
      });

helpButton.on("pointerout", () => {
  
  helpButton.clearTint();
});
        helpButton.on("pointerup", () => {
            this.scene.start("Help"); 
        })
  this.helpText = this.add.text(350, 352, "AYUDA", {
          fontSize: "30px",
          fontStyle: "bold",
          fill: "#517986",
        });

creditsButton.on("pointerout", () => {
  
  creditsButton.clearTint();
        });
        creditsButton.on("pointerup", () => {
              this.scene.start("Game2");
              })
  this.CredText = this.add.text(336, 443, "CRÉDITOS", {
                fontSize: "25px",
                fontStyle: "bold",
                fill: "#517986",
              });
this.cameras.main.setBounds(0, 0, config.width, config.height);
}
  
}  