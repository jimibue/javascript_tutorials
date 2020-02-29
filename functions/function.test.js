// to run yarn jest functions/function.test.js

const {
  helloWorld, 
  helloWorld1, 
  sum, 
  sum1
} = require('./function')

test('outputs Hello World', () => {
  expect(helloWorld1()).toBe('Hello World');
});

test('outputs Hello World', () => {
  expect(helloWorld()).toBe('Hello World');
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum1(1, 2)).toBe(3);
});