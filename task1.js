const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// const reversedColors = colors.reverse(); //reverse the order of the array. way1
const reversedColors = []; //way2

// colors.sort((a, b) => a.localeCompare(b)); // sort colors in ascending order

// for way 2, we can use a loop to reverse the order
for(let i = 0; i < colors.length; i++) {
    reversedColors.unshift(colors[i]);
    // console.log(colors);
}


console.log(reversedColors);