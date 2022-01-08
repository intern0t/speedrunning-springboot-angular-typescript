let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// I don't see anything new in terms of loops, specific to TS.

const total = nums.reduce((a, b) => a + b);

console.log(`Average though reduce => ${nums} is = ${total / nums.length}.`);

let totalSum: number = 0.0;

for(let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
}

console.log(`Average through for loop => ${totalSum / nums.length}.`);

totalSum = 0;

for(let num of nums) {
    totalSum += num;
}

console.log(`Average through simplified for loop => ${totalSum / nums.length}.`);
