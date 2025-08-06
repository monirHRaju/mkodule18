// use a for .. of loop to concate all the elements of an array into a single string.

var number = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = '';
for (var name of number) {
    // console.log(name); // Output: "Tom", "Tim", "Tin", "Tik"
    result += name;
}
console.log(result); // Output: "Tom Tim Tin Tik"
