const getExtraLetter = require('./');

test('Returns e.', () => {
  const string1 = 'abcd';
  const string2 = 'abcde';

  expect(getExtraLetter(string1, string2)).toBe('e');
});

test('Returns g.', () => {
  const string1 = 'go';
  const string2 = 'ogg';

  expect(getExtraLetter(string1, string2)).toBe('g');
});

test('Returns c.', () => {
  const string1 = 'xtkpx';
  const string2 = 'xkctpx';

  expect(getExtraLetter(string1, string2)).toBe('c');
});
