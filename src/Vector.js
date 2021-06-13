class Vector2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    difference(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    magnitude() {
        return Math.sqrt(Math.pow(this.x) + Math.pow(this.y))
    }
}

const dotProduct = (vec1, vec2) => {
    return vec1.x * vec2.x + vec1.y * vec2.y
}

const sum = (vec1, vec2) => {
    return new Vector2d(vec1.x + vec2.x, vec1.y + vec2.y);
}
export {
    dotProduct,
    sum
}

export default Vector2d;