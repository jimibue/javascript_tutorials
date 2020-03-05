## Javascipt array iterators

### For loop example (old way of doing things)
``` javascript
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
```

### A better way to do the above is iterators
``` javascript
  let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
  // declare an empty list
  let evenNumbers = numbers.filter( (number) => {
      return number % 2 === 0 
    })  
  console.log(evenNumbers);
  // this will print [2, 8, 4, 10]
```

``` javascript
  let numbers = [7, 2, 3, 8, 11, 1, 4, 15, 10];
  // one-liner
  let evenNumbers = numbers.filter( number => number % 2 === 0 )  
  console.log(evenNumbers);
  // this will print [2, 8, 4, 10]
```

### iterators follow this general syntax
``` javascript
  let some_array = [];

  // for iterators that return new arrays 
  let new_array = some_array.map( function(item) {
    // do something with item
  })  

  // for iterators that return don't new arrays 
  some_array.forEach( function(item) {
    // do something with item
  }) 

  // for iterators that return a single value
  let value = some_array.every( function(item) {
    // do something with item
  }) 
```

### Quick Examples
```ruby
export const numberArray = [1,2,3,4]

export const doubleArray = numberArray.map( number => {
  return number * 2
})

export const evensOnlyArray = numberArray.filter( number => {
  return number % 2 === 0
})

export const arraySum = numberArray.reduce( (accumulator, current_num)  => {
  return accumulator + current_num
})

export const allNumbersGreaterThanZero = numberArray.every( number => {
  return number > 0
})

export const someNumbersAreOdd = numberArray.some( number => {
  return number % 2 !== 0
})

export const evensOnlyAndDoubleArray = numberArray.filter( number => {
  return number % 2 == 0
}).map( number => number * 2 ) //return not needed in one line arrow function
```

  
