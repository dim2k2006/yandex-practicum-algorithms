const { isSubsequence } = require('./');

const cases = [
  ['', 'abc', true],
  ['abc', '', false],
  ['abc', 'ahbgdcu', true],
  ['abcp', 'ahpc', false],
];

cases.forEach(([string1, string2, expected]) => {
  test(`Returns ${expected}. String1: ${string1}. String2: ${string2}`, () => {
    expect(isSubsequence(string1, string2)).toBe(expected);
  });
});
