const employees = [
    {name: 'Alice', age: 30, department: 'HR'},
    {name: 'Bob', age: 25, department: 'Engineering'},
    {name: 'Charlie', age: 35, department: 'Marketing'},
    {name: 'David', age: 28, department: 'Engineering'},
]
//change the name of the first employee
// employees[0].name = "Monir";
//     console.log(employees[0].name); // Accessing the name of the first employee


// for (const employee of employees) {
//     const worker = employee.name + ':' + employee.age + ':' + employee.department;
//     console.log(worker);
// }


// example of array of arrays
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];  
const array2 = [
    [6, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];  
let newArray = arrayOfArrays.concat(array2);
console.log(newArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9]]


// Accessing elements in a nested array
// console.log(arrayOfArrays[0][1]); // Output: 2

// cnage the value of an element in a nested array
// arrayOfArrays[1][2] = 10;
// console.log(arrayOfArrays[1][2]); // Output: 10

// push and pop in a nested array
// arrayOfArrays[0].push(4);
// console.log(arrayOfArrays[0]); // Output: [1, 2, 3, 4]
// arrayOfArrays[2].pop();
// console.log(arrayOfArrays[2]); // Output: [7, 8]