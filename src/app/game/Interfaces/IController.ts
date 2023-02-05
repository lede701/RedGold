import { ISprite } from "./ISprite";

export interface IController {
  sprite: any;
  input: any;

  move(): any;
}
