export default class PrincipalMenu extends Phaser.Scene {
    constructor() {
      super("PrincipalMenu");
    }
    init(){}

  preload(){
      this.load.image("fondoMenu", "./public/images/fondoMenu.jpg");
      this.load.image("botonPlay","./public/images/botonPlay.png");
      this.load.image("botonAyuda","./public/images/botonAyuda.png");
      this.load.image("botonCredits","./public/images/botonCredits.png");
     // this.load.image("ninja","./assets/images/Ninja.png");
      this.load.image("Titulo","./public/images/titulo.png");
      
  }
  create(){
      this.add.image(400,300,"fondoMenu").setScale(0.45);
      this.add.image(400,180,"Titulo").setScale(0.4);
      

      const startButton=this.add.image(390,280,"botonPlay").setScale(0.3).setInteractive();
      startButton.on("pointerover", () => {
  
  startButton.setTint(0x0000ff);
});
    const helpButton = this.add.image(390,370,"botonAyuda").setScale(0.3).setInteractive();
    helpButton.on("pointerover", () => {

helpButton.setTint(0x0000ff);
});

startButton.on("pointerout", () => {
  
  startButton.clearTint();
});
       startButton.on("pointerup", () => {
          this.scene.start("Game");
      })

helpButton.on("pointerout", () => {
  
  helpButton.clearTint();
});
        helpButton.on("pointerup", () => {
            this.scene.start("Game");
        })
   }  
}  