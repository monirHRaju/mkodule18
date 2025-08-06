// const nums = [1, 2, 3, 4, 5];
// const reversedNums = [];

// for (let i = 0; i < nums.length; i++) {
//     reversedNums.unshift(nums[i]);
// }
// console.log(reversedNums);


const nums = [1, 2, 3, 4, 5];
const reversedNums = [];

// for (let i = nums.length - 1; i >= 0; i--) {
//     reversedNums.push(nums[i]);
// }
// console.log(reversedNums);


// using for of loop
// for (const num of nums) {
//     reversedNums.unshift(num);
// }
// console.log(reversedNums);


// reversing the array in place
// nums.reverse();
// console.log(nums);

// to keep it in a new array
const newReversedNums = nums.reverse();
console.log(newReversedNums);

