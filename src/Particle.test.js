import Particle from "./Particle.js";
import ctx from "./mockCtx.js";
import { PARTICLE_SIZE, WIDTH, HEIGHT } from "./constants.js";
import Food from "./Food.js";

describe("Particle", () => {
  let particle;
  beforeEach(() => {
    particle = new Particle();
  });
  test("the constructor", () => {
    expect(particle.pos).toBeDefined();
    expect(particle.vel).toBeDefined();
    expect(particle.color).toBeDefined();
    expect(particle.closeFoods).toBeDefined();
  });

  it("should call the appropriate functions related to ctx in draw", () => {
    particle.draw(ctx);
    expect(ctx.fillStyle).toBe(particle.color);
    expect(ctx.beginPath).toHaveBeenCalled();
    expect(ctx.arc).toHaveBeenCalledWith(
      particle.pos.x,
      particle.pos.y,
      PARTICLE_SIZE,
      0,
      2 * Math.PI
    );
    expect(ctx.fill).toHaveBeenCalled();
  });

  it("Should update position appropriately", () => {
    const addPos = jest.spyOn(particle.pos, "add");
    particle.move();
    expect(addPos).toHaveBeenCalledWith(particle.vel);
  });
  it("checkWallCollisions should work properly for balls which go greater than the width and the height", () => {
    particle.pos.x = WIDTH + 100;
    particle.pos.y = HEIGHT + 100;
    particle.checkWallCollisions();
    expect(particle.pos.x).toBeLessThanOrEqual(WIDTH);
    expect(particle.pos.y).toBeLessThanOrEqual(HEIGHT);
  });

  it("checkWallCollisions should work properly for balls which go into negative numbers", () => {
    particle.pos.x = -10;
    particle.pos.y = -10;
    particle.checkWallCollisions();
    expect(particle.pos.x).toBeGreaterThanOrEqual(0);
    expect(particle.pos.y).toBeGreaterThanOrEqual(0);
  });
  it("distance should work successfully", () => {
    // To avoid random numbers being close to the borders
    particle.pos.x = WIDTH / 2;
    particle.pos.y = HEIGHT / 2;
    let otherParticle = new Particle();
    let del = { x: 3, y: 4 };

    otherParticle.pos.x = particle.pos.x + del.x;
    otherParticle.pos.y = particle.pos.y + del.y;
    const expectedLength = Math.sqrt(
      Math.pow(otherParticle.pos.x - particle.pos.x, 2) +
        Math.pow(otherParticle.pos.y - particle.pos.y, 2)
    );
    expect(particle.distance(otherParticle)).toBe(expectedLength);
  });
  it("moveToNearestFood sanity check", () => {
    particle.pos.x = WIDTH / 2;
    particle.pos.y = HEIGHT / 2;
    particle.moveToFood(new Food(WIDTH / 2 + 10, HEIGHT / 2 + 10));
    expect(particle.vel.x).toBeGreaterThan(0);
    expect(particle.vel.y).toBeGreaterThan(0);
  });
});
