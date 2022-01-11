import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(private x: number, private y: number, private radius: number) {
        super(x, y);
    }

    getInfo(): string {
        return super.getInfo() + `, radius = ${this.radius}`;
    }
}