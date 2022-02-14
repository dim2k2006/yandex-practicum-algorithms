const { isCorrectBracketSeq } = require('./');

test('Returns true.', () => {
  expect(isCorrectBracketSeq('{[()]}')).toBe(true);
});

test('Returns true.', () => {
  expect(isCorrectBracketSeq('()')).toBe(true);
});
