const { getFibonacciModule, getFibonacci } = require('./');

// const sequence = [
//   [0, 1],
//   [1, 1],
//   [2, 1],
//   [3, 2],
//   [4, 3],
//   [5, 5],
//   [6, 8],
//   [7, 13],
//   [8, 21],
//   [9, 34],
//   [10, 55],
//   [11, 89],
//   [12, 144],
//   [13, 233],
//   [14, 377],
//   [15, 610],
//   [16, 987],
//   [17, 1597],
//   [18, 2584],
//   [19, 4181],
//   [20, 6765],
//   [98, BigInt(135301852344706746049)],
// ];
//
// describe('getFibonacci', () => {
//   sequence.forEach(([input, expected]) => {
//     test(`F ${input} => ${expected}`, () => {
//       expect(getFibonacci(0)).toBe(1);
//     });
//   });
// });

describe('getFibonacciModule', () => {
  test('Returns 3.', () => {
    expect(getFibonacciModule(3, 1)).toBe(BigInt(3));
  });

  test('Returns 9.', () => {
    expect(getFibonacciModule(10, 1)).toBe(BigInt(9));
  });

  test('Returns 9026.', () => {
    expect(getFibonacciModule(98, 4)).toBe(BigInt(9026));
  });
});
