// using for .. of loop to concate all the elements of an array into a single string.

var number = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';
for (var name of number) {
//     // console.log(name); // Output: "Tom", "Tim", "Tin", "Tik"
    result += name;
}
console.log(result); // Output: "Tom Tim Tin Tik"


// using join to convert array to string
var names = ['Tom', 'Tim', 'Tin', 'Tik'];

let joinded = names.join('')

console.log(joinded);