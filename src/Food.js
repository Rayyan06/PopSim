import { FOOD_COLOR, FOOD_SIZE, WIDTH, HEIGHT } from "./constants";
import Vector2d from "./Vector";

export default class Food {
  constructor(x, y) {
    this.pos = new Vector2d(x, y);
  }

  draw(ctx) {
    ctx.fillStyle = FOOD_COLOR;
    ctx.fillRect(this.pos.x, this.pos.y, FOOD_SIZE, FOOD_SIZE);
  }
}
