
// def hello_world
//   'hello world'
// end

function helloWorld() {
  return 'Hello World'
}

// arrow function
// An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own this value.
const helloWorld1 = () => {
  return 'Hello World'
}




// ruby
// def sum(x,y)
//   x + y
// end

function sum(x, y) {
  return x + y;
}

const sum1 = (x, y) => {
  return x + y;
}

module.exports = {helloWorld, helloWorld1, sum, sum1}