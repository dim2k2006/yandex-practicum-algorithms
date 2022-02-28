const { genCombinations } = require('./');

const cases = [
  ['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']],
  ['92', ['wa', 'wb', 'wc', 'xa', 'xb', 'xc', 'ya', 'yb', 'yc', 'za', 'zb', 'zc']],
];

cases.forEach(([input, expected]) => {
  test(`Generates combination. Input: ${input}.`, () => {
    expect(genCombinations(input)).toEqual(expected);
  });
});
