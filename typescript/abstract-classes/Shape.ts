export abstract class Shape {
    constructor(private _x: number, private _y: number) { }

    getInfo() {
        return `x = ${this._x}, y = ${this._y}`;
    }

    abstract getArea(): number;
}