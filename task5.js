const nums = [1,2,3];
// const copy = Array.from(nums);
// const copy = [...nums]
const copy = [].concat(nums);
copy[0] = 99;

console.log(nums);
console.log(copy);