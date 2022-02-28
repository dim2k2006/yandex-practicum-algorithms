const { genBrackets } = require('./');

const cases = [
  [2, ['(())', '()()']],
  [3, ['((()))', '(()())', '(())()', '()(())', '()()()']],
];

cases.forEach(([input, expected]) => {
  test(`Generates brackets. Input: ${input}.`, () => {
    expect(genBrackets(input)).toEqual(expected);
  });
});
