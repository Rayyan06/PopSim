import Particle from "./Particle.js";
import { PARTICLE_COUNT } from "./constants.js";

export default class Simulation {
  constructor() {
    this.particles = [];
  }

  createParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.particles.push(new Particle());
    }
  }

  setup() {
    this.createParticles();
  }

  draw(ctx) {
    this.particles.forEach((particle) => {
      particle.draw(ctx);
      particle.move();

      //creature.turnAwayFromNearest(this.creatures);
    });
  }
}
