import { IController } from "../Interfaces/IController";
import { ISprite } from "../Interfaces/ISprite";

export class BoatController implements IController {
  public sprite!: any;
  public input!: any;

  private _speed: any;

  constructor() {
    this._speed = {
      vert: 100,
      horz: 200
    }
  }

  public move(): any {
    if (this._speed.horz > 0) {
      if (this.input.left.isDown) {
        this.sprite.body.setVelocityX(-this._speed.horz);
      } else if (this.input.right.isDown) {
        this.sprite.body.setVelocityX(this._speed.horz);
      }
      else {
        this.sprite.body.setVelocityX(0);
      }
    }

    if (this._speed.vert > 0) {
      if (this.input.up.isDown) {
        this.sprite.body.setVelocityY(-this._speed.vert);
      } else if (this.input.down.isDown) {
        this.sprite.body.setVelocityY(this._speed.vert);
      } else {
        this.sprite.body.setVelocityY(0);
      }
    }
  }
}
