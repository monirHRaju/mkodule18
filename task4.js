// convert a string into array then reverse it in a new array

// const statement = "I am a hard working person";
// const reversedStatement = [];
// const splitted = statement.split(' ');

// for(let i = 0; i < splitted.length; i++){
//     reversedStatement.unshift(splitted[i]);
// }

// console.log(reversedStatement);


// reverse a string to string
const statement = "I am a hard working person";
let reversed = statement.split(' ').reverse().join(' ')

console.log(reversed);