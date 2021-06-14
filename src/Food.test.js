import Food from "./Food.js";
import ctx from "./mockCtx.js";
import { FOOD_COLOR, FOOD_SIZE } from "./constants.js";
import Vector2d from "./Vector.js";

jest.mock("./Vector.js");
describe("Food", () => {
  it("Should have the constructor working", () => {
    const food = new Food(3, 2);
    expect(Vector2d).toHaveBeenCalledWith(3, 2);
  });
  it("should draw correctly", () => {
    const food = new Food(6, 3);
    food.draw(ctx);
    expect(ctx.fillStyle).toBe(FOOD_COLOR);
    expect(ctx.fillRect).toHaveBeenCalledWith(
      food.pos.x,
      food.pos.y,
      FOOD_SIZE,
      FOOD_SIZE
    );
  });
});
