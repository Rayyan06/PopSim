import { FOOD_COLOR, FOOD_SIZE, WIDTH, HEIGHT } from "./constants";

export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.fillStyle = FOOD_COLOR;
    ctx.fillRect(this.x, this.y, FOOD_SIZE, FOOD_SIZE);
  }
}
