import GameOver from "./assets/scenes/GameOver.js";
import Game from "./assets/scenes/Game.js";
import Game2 from "./assets/scenes/Game2.js";
import Game3 from "./assets/scenes/Game3.js";
import PreLoad from "./assets/scenes/PreLoad.js";
import PrincipalMenu from "./assets/scenes/PrincipalMenu.js";
import Win from "./assets/scenes/Win.js";
import Select from "./assets/scenes/Select.js";
import Help from "./assets/scenes/Help.js";
import Credits from "./assets/scenes/Credits.js";
import TranPr from "./assets/scenes/TranPrimLvl.js";
import TranSg from "./assets/scenes/TranSegLvl.js";
import TranTh from "./assets/scenes/TranThrLvl.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [PreLoad, Game, Game2,Game3, GameOver, PrincipalMenu,TranPr,TranSg,TranTh, Select, Help, Credits, Win],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);