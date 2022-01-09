"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const BasketballCoach_1 = require("./BasketballCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myBasketballCoach = new BasketballCoach_1.BasketballCoach();
let coaches = [];
coaches.push(myCricketCoach);
coaches.push(myBasketballCoach);
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
