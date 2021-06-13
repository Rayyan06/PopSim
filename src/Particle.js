
import { PARTICLE_COLOR, PARTICLE_SIZE, WIDTH, HEIGHT, PARTICLE_SPEED } from "./constants.js";
import { getRandomInt } from "./utility.js"
import Vector2d from "./Vector.js"

export default class Particle {
    constructor() {
        this.pos = new Vector2d(getRandomInt(0, WIDTH), getRandomInt(0, HEIGHT))
        this.vel = new Vector2d(0, 0)
        this.color = PARTICLE_COLOR;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, PARTICLE_SIZE, 0, 2 * Math.PI);
        ctx.fill();
    }

    move() {

        this.pos.add(this.vel);

    }

    checkWallCollisions() {
        
        if (this.pos.x > WIDTH - PARTICLE_SIZE) {
            this.pos.x = WIDTH - PARTICLE_SIZE;
        } else if (this.pos.x < 0 + PARTICLE_SIZE) {
            this.pos.x = 0 + PARTICLE_SIZE;
        } 
        if (this.pos.y > HEIGHT -PARTICLE_SIZE) {
            this.pos.y = HEIGHT - PARTICLE_SIZE;
        } else if (this.pos.y < 0 + PARTICLE_SIZE) {
            this.pos.y = 0 + PARTICLE_SIZE
        }
    }
    /*
    nearestCreature(creatures) {
        let closestDistance = WIDTH;
        let closestCreature;
        for (let creature of creatures) {
            if (creature === this) continue;
            let distance = this.creatureDistance(creature)
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCreature = creature;
            }
        }
        return closestCreature;
    }
    turnAwayFromNearest(creatures) {
        if (!creatures) return;
        let nearestCreature = this.nearestCreature(creatures) 
        let followAngle = Math.atan2(nearestCreature.pos.y - this.pos.y, nearestCreature.pos.x - this.pos.x);
        console.log(followAngle);
        this.angle=followAngle
    }
*/
 

    creatureDistance(other) {
        return Math.sqrt(Math.pow(other.pos.x - this.pos.x, 2) + Math.pow(other.pos.y - this.pos.y, 2))
    }
}