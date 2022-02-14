const { isCorrectBracketSeq } = require('./');

test('Returns true.', () => {
  expect(isCorrectBracketSeq('{[()]}')).toBe(true);
});

test('Returns true.', () => {
  expect(isCorrectBracketSeq('()')).toBe(true);
});

test('Returns false.', () => {
  expect(isCorrectBracketSeq(')(')).toBe(false);
});

test('Returns false.', () => {
  expect(isCorrectBracketSeq('({]})')).toBe(false);
});

test('Returns false.', () => {
  expect(isCorrectBracketSeq('((())]')).toBe(false);
});

test('Returns false.', () => {
  expect(isCorrectBracketSeq('([)]')).toBe(false);
});
