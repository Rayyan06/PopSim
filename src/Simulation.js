import Particle from "./Particle.js";
import Food from "./Food.js";
import { PARTICLE_COUNT, FOOD_COUNT, WIDTH, HEIGHT } from "./constants.js";
import { getRandomInt } from "./utility.js";

export default class Simulation {
  constructor() {
    this.particles = [];
    this.foods = [];
  }

  createParticles() {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      this.particles.push(new Particle());
    }
  }

  createFoods() {
    for (let i = 0; i < FOOD_COUNT; i++) {
      this.foods.push(
        new Food(getRandomInt(0, WIDTH), getRandomInt(0, HEIGHT))
      );
    }
  }

  setup() {
    this.createParticles();
    this.createFoods();
  }

  draw(ctx) {
    this.particles.forEach((particle) => {
      particle.draw(ctx);
      particle.move();

      //creature.turnAwayFromNearest(this.creatures);
    });

    this.foods.forEach((food) => {
      food.draw(ctx);
    });
  }
}
