import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit{
  phaserGame!: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor(){
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 1100,
      scene: [MainScene],
      parent: 'theGame',
      physics: {
        default: 'arcade',
        arcade: {y: 10.0}
      }
    };

  }

  public ngOnInit(){
    this.phaserGame = new Phaser.Game(this.config);
  }
}

class MainScene extends Phaser.Scene {

  private sqObject!: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body };

  constructor() {
    super({ key: 'main' });
  }

  create() {
    this.sqObject = this.add.rectangle(400,400, 100, 100, 0xffffff) as any;
    this.physics.add.existing(this.sqObject);
  }

  preload() {
    console.log('preload method');
  }

  override update() {
    const keys = this.input.keyboard.createCursorKeys();
    if(keys.up.isDown){
      this.sqObject.body.setVelocityY(-500);
    }else if(keys.down.isDown){
      this.sqObject.body.setVelocityY(500);
    }else{
      this.sqObject.body.setVelocityY(0);
    }

    if(keys.left.isDown){
      this.sqObject.body.setAccelerationX(-500);
    }else if(keys.right.isDown){
      this.sqObject.body.setAccelerationX(500);
    }else{
      this.sqObject.body.setAccelerationX(0);
    }
  }
}