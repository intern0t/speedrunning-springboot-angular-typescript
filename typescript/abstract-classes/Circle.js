"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getInfo() {
        return super.getInfo() + `, radius = ${this.radius}`;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;
