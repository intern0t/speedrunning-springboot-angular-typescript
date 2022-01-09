"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// Can't create an abstract class object.
// let myShape = new Shape(10, 20);
// console.log(`Shape object => ${myShape.getInfo()}`);
let myCircle = new Circle_1.Circle(10, 20, 5);
console.log(`Shape object => ${myCircle.getInfo()}`);
let myRectangle = new Rectangle_1.Rectangle(10, 20, 100, 50);
console.log(`Shape object => ${myRectangle.getInfo()}`);
console.log('------------------------------------------------');
// Declaring an array for shapes.
let shapes = [];
// shapes.push(myShape); /** Check L#5 */
shapes.push(myCircle);
shapes.push(myRectangle);
for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log(`Area => ${shape.getArea()}`);
}
