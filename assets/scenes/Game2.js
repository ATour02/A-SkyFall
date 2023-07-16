const config = {
  width: 800,
  height: 600
};
import {
  OBST_DELAY,
  OBST,
  DRON,
  GLOBO,
  GLOBO_sg,
  AVE,
  AVE_sg,
  ammo,
  powerUp_life,
  POWUP,
} from "../scenes/Util.js";

export default class Game2 extends Phaser.Scene {
  constructor() {
    super("Game2");
  }

  init() {
    this.shapesRecolected = {
      ["dron"]: { score: 100 },
      ["globo"]: { score: 200 },
      ["globo2"]: { score: 200 },
      ["ave"]: { score: 150 },
      ["ave2"]: { score: 150 },
    };

    this.isWinner = false;
    this.gameOver = false;
    this.life = 3;
    this.score = 0;
    this.Hscore = 0;
    this.ammo = 5;
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
    this.sky = this.add.image(0, 0, "sunrise").setOrigin(0);
    this.sky.setDisplaySize(skyWidth, skyHeight);
    this.sky.y = 0;

    // Background ground
    this.ground =
    this.add.image(400, 580, "ground3").setScale(0.3);
    this.ground2 =
    this.add.image(100, 580, "ground3").setScale(0.3);
    this.ground3 =
    this.add.image(700, 580, "ground3").setScale(0.3);
  
    this.ground.setVisible(false);
    this.ground2.setVisible(false);
    this.ground3.setVisible(false);

    this.scoreText = this.add.text(575, 35, "SCORE:", {
      fontSize: "30px",
      fontStyle: "bold",
      fill: "#99FF33",
    });
    this.punScoreText = this.add.text(700, 35, "0", {
      fontSize: "30px",
      fontStyle: "bold",
    });

    this.ammoText = this.add.text(100, 85, "x", {
      fontSize: "30px",
      fontStyle: "bold",
    });
    this.lifeText = this.add.text(100, 35, "x", {
      fontSize: "30px",
      fontStyle: "bold",
    });

    // Sprites
    const player = this.physics.add.sprite(400, 150, "PJPrin").setScale(1.3);
    player.play("pjPrin");

    this.shapesGroup = this.physics.add.group();
    this.add.image(70, 100, "ammo").setScale(0.42);
    this.add.image(70, 50, "life").setScale(0.42);

    this.cameras.main.setBounds(0, 0, config.width, config.height);
    this.cameras.main.setFollowOffset(0, -config.height / 2);
    this.cameras.main.startFollow(player);
    this.cameras.main.followOffset.y = -config.height / 2;

    this.player = player;
    this.player.setCollideWorldBounds(true);

    // colliders
    this.physics.add.collider(this.player, this.shapesGroup);
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
      repeat: 35,
    });
    this.time.addEvent({
      delay: 2500,
      callback: this.addMun,
      callbackScope: this,
      loop: true,
    });
    this.space = this.cursors.space;
  }

  update() {
    if (this.isWinner) {
      this.changeScene() // Momentáneo, habrá pantalla.
    }
    if (this.life < 1) {
      this.changeScene()
    }

    this.punScoreText.setText(
      this.score
    );
    this.ammoText.setText(
      "x " +  this.ammo
    );
    this.lifeText.setText(
      "x " +  this.life
    );
    //mov
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-330);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(330);
    } else {
      this.player.setVelocityX(0);
    }
    if (this.collectShape) {
      this.player.setVelocityY(0);
    }
    // shot
    if (Phaser.Input.Keyboard.JustDown(this.space) && this.ammo > 0) {
      this.shootBeam();
      this.ammo = this.ammo - 1;
      console.log("fire");
    }

    //mov obstacles
    //this.dron.setVelocityY(-160);
    // Calcula el desplazamiento del fondo de suelo basado en el tiempo transcurrido
    const elapsedTime = this.time.now - this.startTime;
    const totalFallTime = this.totalFallTime;
    const groundOffsetY = (config.height * elapsedTime) / totalFallTime;
    const skyOffsetY = groundOffsetY / 9;
    // Actualiza las posiciones de los fondos de cielo y suelo
    this.sky.y = -skyOffsetY;
    console.log(this.sky.y)
    // Verificar si el fondo de cielo está fuera de la pantalla y reiniciarlo
    if (this.sky.y <= -570) {
      this.ground.setVisible(true);
      this.ground2.setVisible(true);
      this.ground3.setVisible(true);

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
      console.log(this.isWinner);
    }
    //testing dron
  }
  collectShape(player, shapeGroup) {
    console.log("figura recolectada");
    shapeGroup.disableBody(true, true);
    this.life = this.life - 1;
    console.log("LEER ACA" + this.life)
  }
  //dron() { 
  //Game.physics.add.image(120, 550, "dron").setScale(0.17);
  addShape() {
    const randomShape = Phaser.Math.RND.pick([DRON, GLOBO,GLOBO_sg, AVE, AVE_sg])
    const randomX = Phaser.Math.RND.between(0, 800);

    this.shapesGroup.create(randomX, 800, randomShape)
      .setCircle(170, 130, 100)
      .setBounce(0.8)
      .setScale(0.23)
      .setVelocityY(-230)

  }
  destroyShape(beam, shapeGroup) {
    shapeGroup.disableBody(true, true);
    this.beam.disableBody(true, true);
    const shapeName = shapeGroup.texture.key;
    const scoreNow = this.shapesRecolected[shapeName].score;
    this.score = this.score + scoreNow;
    console.log("test " + this.score)
  }
  shootBeam() {
    this.beam = this.physics.add.sprite(this.player.x, this.player.y, "beam")
      .setScale(3)
      .setVelocityY(500);
    this.physics.add.collider(this.beam, this.shapesGroup, this.destroyShape, null, this)
  }
  changeScene() {
    this.scene.start("TranSg", {
      score: this.score,
    });
  }
  addMun() {
    this.ammo = this.ammo + 1;
  }
}