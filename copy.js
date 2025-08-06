// let products = [20, 30, 40, 50, 60];
// let compProducts = products; // compProducts is a reference to products
// let compProducts = []; // compProducts is a new array

// reference assignment always points to the same memory location
// products[0] = 8;
// compProducts[0] = 9;

// make another array with for loop
// for(let product of products){
//     compProducts.push(product); // compProducts is now a copy of products
//  }

// value can be changed in compProducts without affecting products
// products[0] = 8;
// compProducts[0] = 9

// check results
// console.log(products); 
// console.log(compProducts); 


/*
* another method to copy an array
*/
let numbers = [10, 20, 30, 40, 50];
// array copy methods
// let  newNumbers = Array.from(numbers); // creates a new array from numbers
// let newNumbers = [].concat(numbers); // concatenates numbers into a new array
let newNumbers = [...numbers]; // spread operator creates a new array

newNumbers.push(60);
numbers.pop(); // removing the last number from the original array 

console.log(numbers);
console.log(newNumbers); 


// shallow copy vs deep copy