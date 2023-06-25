import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
    private loadingText!: Phaser.GameObjects.Text;
  constructor() {
    super('BootScene');
  }
  preload() {}
  create() {
    this.loadingText = this.add.text(20, 20, 'Loading game...', {color: 'limegreen' , fontSize: '48px', fontFamily: 'monospace'});
  }

  changeText(msg: string){
    this.loadingText.setText(msg);
  }
}
