import { Types } from 'phaser';
import { BootScene } from './scenes';

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [BootScene],
};

export default config;
