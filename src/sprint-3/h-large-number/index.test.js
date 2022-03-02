const { genBiggestNumber } = require('./');

const cases = [
  ['1 1 5', 511],
  // ['1 2', 21],
  // ['15 56 2', 56215],
  // ['1 783 2', 78321],
  // ['2 4 5 2 10', 542210],
];

cases.forEach(([input, expected]) => {
  test(`Generates biggest number. Input: ${input}.`, () => {
    expect(genBiggestNumber(input)).toEqual(expected);
  });
});
