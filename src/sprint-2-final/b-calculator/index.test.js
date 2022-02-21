const { calculate } = require('./');

const cases = [
  ['2 1 + 3 *', 9],
  ['7 2 + 4 * 2 +', 38],
  ['4 13 5 / +', 6],
  ['10 2 4 * -', 2],
];

cases.forEach(([input, expected]) => {
  test(`Calculates ${input} and returns ${expected}.`, () => {
    expect(calculate(input)).toBe(expected);
  });
});
