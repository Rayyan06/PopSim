import Simulation from "./Simulation.js";
import Particle from "./Particle.js";

jest.mock("./Particle.js");
describe("Simulation", () => {
  test("should have the constructor working", () => {
    const sim = new Simulation();
    expect(sim.particles).toBeDefined();
  });
  it("should create PARTICLE_COUNT particles in createParticles", () => {
    const sim = new Simulation();
    sim.createParticles();
    expect(Particle).toHaveBeenCalledTimes(PARTICLE_COUNT);
  });
  it.todo("should call the appropriate functions in setup");
  it.todo("should draw the right things in draw");
});
