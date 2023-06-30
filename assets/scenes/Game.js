const config = {
  width: 800,
  height: 600
};
import {
  OBST_DELAY,
  OBST,
  DRON,
  GLOBO,
  AVE,
} from "../scenes/Util.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    this.shapesRecolected = {
      ["dron"]: { score: 100 },
      ["globo"]: { score: 200 },
      ["ave"]: { score: 150 },
    };

    this.isWinner = false;
    this.gameOver = false;
    this.vida = 0;
    this.score = 0;
    this.Hscore = 0;
  }

  create() {
    //GUI
    
    // input
    this.cursors = this.input.keyboard.createCursorKeys();
    // Caida y tiempo
    const totalFallTime = 5000; // Duración de caida
    const startTime = this.time.now;
    this.totalFallTime = totalFallTime;
    this.startTime = startTime;

    // Background sky
    const skyWidth = config.width;
    const skyHeight = config.height * 2;
    this.sky = this.add.image(0, 0, "sky").setOrigin(0);
    this.sky.setDisplaySize(skyWidth, skyHeight);

    // Background ground
    this.ground = 
    this.add.image(120, 580, "ground").setScale(1);
    this.ground.setVisible(false);

    this.timeText = this.add.text(600, 15, "Score: 0", {
      fontSize: "30px",
      fontStyle: "bold",
    });

    // Sprites
    const player = this.physics.add.sprite(400, 150, "PJPrin").setScale(0.20);

    this.shapesGroup = this.physics.add.group();
    this.proj = this.add.group();

    this.cameras.main.setBounds(0, 0, config.width, config.height);
    this.cameras.main.setFollowOffset(0, -config.height / 2);
    this.cameras.main.startFollow(player);
    this.cameras.main.followOffset.y = -config.height / 2;

    this.player = player;
    this.player.setCollideWorldBounds(true);
    let beam = this.physics.add.sprite(this.player.x, this.player.y, "beam")
    .setScale(3)
    .setVelocityY(500)
    .setVisible(false);
    // obstacles

    //const dron = this.physics.add.image(120, 550, "dron").setScale(0.17);
    //this.dron = dron;

    // colliders
    this.physics.add.collider(this.player, this.shapesGroup);
    this.physics.add.collider(beam, this.shapesGroup);
    this.physics.add.collider(this.player, beam);
    this.physics.add.overlap(
      this.player,
      this.shapesGroup,
      this.collectShape,
      null,
      this
    );
    
    // creacion de obstaculos
      this.time.addEvent({
      delay: 1000,
      callback: this.addShape,
      callbackScope: this,
      loop: false,
      repeat: 30,
    });
    this.space = this.cursors.space;
  }

  update() {
    if (this.gameOver ) {
      this.scene.start("TranPr"); // Momentáneo, habrá pantalla.
    }
    if (this.isWinner) {
      this.scene.start("TranPr"); // Momentáneo, habrá pantalla.
    }
    if (this.vida >= 3){
      this.scene.start("TranPr");
    }

    //mov
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    } else {
      this.player.setVelocityX(0);
    }
    if (this.collectShape) {
      this.player.setVelocityY(0);
    }
  // shot
  if (Phaser.Input.Keyboard.JustDown(this.space)) {
    this.shootBeam();
    console.log("fire");
  }    

    //mov obstacles
   //this.dron.setVelocityY(-160);
    // Calcula el desplazamiento del fondo de suelo basado en el tiempo transcurrido
    const elapsedTime = this.time.now - this.startTime;
    const totalFallTime = this.totalFallTime;
    const groundOffsetY = (config.height * elapsedTime) / totalFallTime;
    const skyOffsetY = groundOffsetY / 8;
    // Actualiza las posiciones de los fondos de cielo y suelo
    this.sky.y = -skyOffsetY;
    console.log(this.sky.y)
    // Verificar si el fondo de cielo está fuera de la pantalla y reiniciarlo
    if (this.sky.y <= -570) {
      this.ground.setVisible(true);

      // Animar el movimiento vertical del jugador
      this.tweens.add({
        targets: this.player,
        y: 492, // Posición final en el eje Y
        duration: 900, // Duración de la animación en milisegundos
        ease: "Linear", // Función de interpolación lineal
        yoyo: false, // Repetir la animación de ida y vuelta
        repeat: 0 // Número de repeticiones (0 para infinito)
      })
      // Detener el movimiento vertical
    }
    if (this.sky.y <= -650) {
      this.isWinner = true;
      console.log( this.isWinner);
    }
    //testing dron
}
collectShape(player, shapeGroup) {
  console.log("figura recolectada");
  shapeGroup.disableBody(true, true);
  this.vida = this.vida + 1;
  console.log("LEER ACA" + this.vida)
  const shapeName = shapeGroup.texture.key;
  const scoreNow = this.shapesRecolected[shapeName].score;
  this.score = this.score + scoreNow;
  console.log("test " + this.score)
}
//dron() { 
  //Game.physics.add.image(120, 550, "dron").setScale(0.17);
addShape() {
  const randomShape = Phaser.Math.RND.pick([DRON, GLOBO, AVE]) 
  const randomX = Phaser.Math.RND.between(0, 800);

  this.shapesGroup.create(randomX, 800, randomShape)
    .setCircle(170, 130, 100)
    .setBounce(0.8)
    .setScale(0.23)
    .setVelocityY(-230)
    //.setData(POINTS_PERCENTAGE, POINTS_PERCENTAGE_VALUE_START);

  console.log("shape is added", randomX, Game.dron);
}
shootBeam(){
  const beam = this.physics.add.sprite(this.player.x, this.player.y, "beam")
  .setScale(3)
  .setVelocityY(500);
}
}