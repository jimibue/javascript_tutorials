let animals = ["cow", "dog", "cat", "horse", "lion"];

for (let index = 0; index < animals.length; index++) {
  console.log(animals[index]); //printing the individual elements of the array
}

let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
// declare an empty list
let evenNumbers = [];
// loop through the elements in the numbers list
for (let index = 0; index < numbers.length; index++) {
    // check to see if a number is even
    if (numbers[index] % 2 === 0) {
        // add the even number to the evenNumbers list 
        evenNumbers.push(numbers[index]);
    }
}
// this will print [2, 8, 4, 10]
console.log(evenNumbers);
