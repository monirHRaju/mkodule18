//sort numbers in ascending order 
// const randNumbers = [5, 330, 3, 11, 8, 1, 2, 100, 320, 200, 50];
// const sortedNumbers = randNumbers.sort((a, b) => a - b)

//sort numbers in descending order 
// const randNumbers = [5, 330, 3, 11, 8, 1, 2, 100, 320, 200, 50];
// const sortedNumbers = randNumbers.sort((a, b) => b - a)

// console.log(sortedNumbers);


// sor t strings in ascending order
// const randStrings = ['banana', 'apple', 'orange', 'kiwi', 'grape'];
// const sortedStrings = randStrings.sort();
// console.log(sortedStrings);

// to sort strings in descending order
// const randStrings = ['banana', 'apple', 'orange', 'kiwi', 'grape'];
// const sortedStrings = randStrings.sort().reverse();
// console.log(sortedStrings);

// alternative way to sort strings in descending order
let fruits = ["banana", "apple", "mango", "cherry"];

fruits.sort((a, b) => b.localeCompare(a));

console.log(fruits);  