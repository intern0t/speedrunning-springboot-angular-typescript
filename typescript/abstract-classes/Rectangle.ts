import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        super(theX, theY);
    }

    // Overriding
    getInfo(): string {
        return super.getInfo() + `, width = ${this._width}, Length = ${this._length}`;
    }

    getArea(): number {
        return this._width * this._length;
    }
}