export {}; // block scope fixing, L:7

let mastered: boolean = false;
const sayTypeScript: string = "This is Typescript!";
var anyTypeVariable: any = false;
// Apparently this is scope based, can't redeclare same variable names in two different files.
// Maybe telling TS this file is a module would allow using same variable names? Apparently, it does.
var nums: number[] = [5, 5, 5, 5, 11, 1, 1, 3, 4, 5, 6];
let reviews: string[] = ["Bad review", "Good Review"]

console.log(`Mastered TS yet? ${mastered}\n${sayTypeScript}`);
anyTypeVariable = 0.01015123;
console.log(`Any type variable value = ${anyTypeVariable}.`);
anyTypeVariable = "Hello!";
console.log(`Any type variable value = ${anyTypeVariable}.`);

// Array stuff.
console.log(`Array of numbers = ${nums}`);
// Add to array.
reviews.push("Average review..");
console.log(`Reviews => ${reviews.join(", ")}`);
