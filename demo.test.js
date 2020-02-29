// const sum = require('./demo');
// const just = require('jest');
// require('jest')

// def sum(x,y)
//   x + y
// end

function sum(x, y) {
  return x + y;
}
const sum1 = (x, y) => {
  return x + y;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum1(1, 2)).toBe(3);
});