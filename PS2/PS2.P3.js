// Function to calculate the cube of a number
const cube = (x) => x ** 3;

// Using .map() to apply the cube function to each element of the array
const array = [1, 2, 3, 4, 5, 6, 7];
const resultArray = array.map(cube);

// Printing the result array
console.log(resultArray);
