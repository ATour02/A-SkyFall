const config = {
  width: 800,
  height: 600
};

export default class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {

  }

  preload() {
    // Cargar los recursos necesarios
    this.load.image("sky", "public/images/sky.jpg");
    this.load.image("ground", "public/images/ground.jpg");
    this.load.image("PJPrin", "public/images/PJPrin.png");
  }

  create() {
    // Caida y tiempo
    const totalFallTime = 5000; // Duración de caida
    const startTime = this.time.now;
    this.totalFallTime = totalFallTime;
    this.startTime = startTime;

    // Background sky
    const sky = this.add.image(0, 0, "sky").setOrigin(0).setName("sky");
    sky.setDisplaySize(config.width, config.height);
    sky.setScrollFactor(0);

    // Background ground
    const ground = this.add.image(0, config.height, "ground").setOrigin(0).setName("ground");
    ground.setDisplaySize(config.width, config.height);
    ground.setScrollFactor(0);
    ground.setVisible(false);

    // Sprites
    const player = this.physics.add.sprite(400, 300, "PJPrin").setScale(0.2);

    const obstacles = this.physics.add.group();

    this.cameras.main.setBounds(0, 0, config.width, config.height);
    this.cameras.main.setFollowOffset(0, -config.height / 2);
  }

  update() {
    // Calcula el desplazamiento del fondo de suelo basado en el tiempo transcurrido
    const elapsedTime = this.time.now - this.startTime;
    const totalFallTime = this.totalFallTime;
    const groundOffsetY = (config.height * elapsedTime) / totalFallTime;
    const skyOffsetY = groundOffsetY / 2;

    // Actualiza las posiciones de los fondos de cielo y suelo
    const sky = this.children.getByName("sky");
    if (sky) {
      sky.y = -skyOffsetY;
    }

    const ground = this.children.getByName("ground");
    if (ground) {
      ground.y = config.height - groundOffsetY;
    }

    const player = this.children.getByName("player");
    if (player) {
      this.cameras.main.scrollY = player.y - config.height / 2;
    }
  }
}