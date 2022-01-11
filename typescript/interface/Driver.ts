import { CricketCoach } from "./CricketCoach";
import { BasketballCoach } from "./BasketballCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myBasketballCoach = new BasketballCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myBasketballCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}