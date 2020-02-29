// import { double } from './basics'
const numbers = [1,2,3,4]

const double = numbers.map( number => {
  return number * 2
})

test('doubled array', () => {
  expect(double).toStrictEqual([2,4,6,8]);
});

const sum = numbers.reduce( (acc, num) => {
  return acc = acc + num
})

test('computes sum of array', () => {
  expect(sum).toEqual(10);
});