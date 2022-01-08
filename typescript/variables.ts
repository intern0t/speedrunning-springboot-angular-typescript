let mastered: boolean = false;
const sayTypeScript: string = "This is Typescript!";
var anyTypeVariable: any = false;
var nums: number[] = [5, 5, 5, 5, 11, 1, 1, 3, 4, 5, 6];
let reviews: string[] = ["Bad review", "Good Review"]

console.log(`Mastered TS yet? ${mastered}\n${sayTypeScript}`);
anyTypeVariable = 0.01015123;
console.log(`Any type variable value = ${anyTypeVariable}.`);
anyTypeVariable = "Hello!";
console.log(`Any type variable value = ${anyTypeVariable}.`);
console.log(`Array of numbers = ${nums}`);
reviews.push("Average review..");
console.log(`Reviews => ${reviews.join(", ")}`);