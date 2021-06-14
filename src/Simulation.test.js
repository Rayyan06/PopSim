import Simulation from "./Simulation.js";
import Particle from "./Particle.js";
import Food from "./Food.js";
import { PARTICLE_COUNT, FOOD_COUNT } from "./constants.js";
import ctx from "./mockCtx.js";

jest.mock("./Particle.js");
jest.mock("./Food.js");

describe("Simulation", () => {
  let sim;
  beforeAll(() => {
    sim = new Simulation();
  });
  beforeEach(() => {
    Food.mockClear();
    Particle.mockClear();
  });
  test("should have the constructor working", () => {
    expect(sim.particles).toBeDefined();
    expect(sim.foods).toBeDefined();
  });
  it("should create PARTICLE_COUNT particles in createParticles", () => {
    sim.createParticles();
    expect(Particle).toHaveBeenCalledTimes(PARTICLE_COUNT);
  });
  it("should create FOOD_COUNT foods in createFoods", () => {
    sim.createFoods();
    expect(Food).toHaveBeenCalledTimes(FOOD_COUNT);
  });
  it("should call the appropriate functions in setup", () => {
    const createParticlesSpy = jest.spyOn(sim, "createParticles");
    const createFoodsSpy = jest.spyOn(sim, "createFoods");
    sim.setup();
    expect(createParticlesSpy).toHaveBeenCalled();
    expect(createFoodsSpy).toHaveBeenCalled();
  });
  it("should draw the right things in draw", () => {
    sim.setup();
    const drawParticle = jest.spyOn(Particle, "draw");
    const moveParticle = jest.spyOn(Particle, "move");

    const drawFood = jest.spyOn(Food, "draw");

    sim.draw(ctx);

    expect(drawParticle).toHaveBeenCalledWith(ctx);
    expect(moveParticle).toHaveBeenCalled();

    expect(drawParticle).toHaveBeenCalledTimes(sim.particles.length);

    expect(drawFood).toHaveBeenCalledWith(ctx);
    expect(drawFood).toHaveBeenCalledTimes(sim.foods.length);
  });
});
