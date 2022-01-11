import { Coach } from "./Coach";

export class BasketballCoach implements Coach {
    getDailyWorkout(): string {
        return "Do 10,000 hoops.";
    }

}