import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';
import { BoatController } from './Input/BoatController';
import { IController } from './Interfaces/IController';

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
  private controller!: IController;

  constructor() {
    super({ key: 'main' });
  }

  create() {
    this.controller = new BoatController();
    this.controller.input = this.input.keyboard.createCursorKeys();
    this.controller.sprite = this.add.rectangle(400, 400, 80, 30, 0xffffff) as any;
    this.physics.add.existing(this.controller.sprite);
  }

  preload() {
    console.log('preload method');
  }

  override update() {
    this.controller.move();
  }
}
