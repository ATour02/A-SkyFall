const config = {
  width: 800,
  height: 600
};
import {
  SHAPES,
  TRIANGULO,
  CUADRADO,
  ROMBO,
} from "../scenes/util.js";

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {

  }

  create() {
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
      this.add.image(120, 580, "ground").setScale(1)
    this.ground.setVisible(false)

    // Sprites
    const player = this.add.image(400, 150, "PJPrin").setScale(0.25);

    const obstacles = this.physics.add.group();

    this.cameras.main.setBounds(0, 0, config.width, config.height);
    this.cameras.main.setFollowOffset(0, -config.height / 2);
    this.cameras.main.startFollow(player);
    this.cameras.main.followOffset.y = -config.height / 2;

    this.player = player;

    /*shapes SOLUCIONAR
    const dron = this.add.sprite(100, 100, "dron");
    dron.setVisible(true);
    console.log("Se creó el dron: ", dron.x, dron.y, dron.width, dron.height, dron.anims.currentAnim.key);
    this.anims.create({
      key: "dron_anim",
      frames: this.anims.generateFrameNumbers("dron"),
      frameRate: 8,
      repeat: -1
    });
    dron.play("dron_anim");
    */
  }

  update() {
    // Calcula el desplazamiento del fondo de suelo basado en el tiempo transcurrido
    const elapsedTime = this.time.now - this.startTime;
    const totalFallTime = this.totalFallTime;
    const groundOffsetY = (config.height * elapsedTime) / totalFallTime;
    const skyOffsetY = groundOffsetY / 2;
    // Actualiza las posiciones de los fondos de cielo y suelo
    this.sky.y = -skyOffsetY;
    console.log(this.sky.y)

    // Verificar si el fondo de cielo está fuera de la pantalla y reiniciarlo
    if (this.sky.y <= -570) {
      this.ground.setVisible(true);
      this.sky.y = -600;
      // Animar el movimiento vertical del jugador
      this.tweens.add({
        targets: this.player,
        y: 482, // Posición final en el eje Y
        duration: 900, // Duración de la animación en milisegundos
        ease: "Linear", // Función de interpolación lineal
        yoyo: false, // Repetir la animación de ida y vuelta
        repeat: 0 // Número de repeticiones (0 para infinito)
      })
      // Detener el movimiento vertical
    }
  }
}