const numbers = [12, 98,5,41,23,78,46];
const evenNumbers = [];
const oddNumbers = [];

for (let i=0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i]);
        // continue // Skip even numbers
    }
        oddNumbers.push(numbers[i]);
}   

console.log(evenNumbers); // Output the array of even numbers
console.log(oddNumbers); // Output the array of even numbers