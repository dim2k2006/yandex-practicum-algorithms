const getLongestWord = require('./');

test('Returns ["segment", 7].', () => {
  const text = 'i love segment tree';

  expect(getLongestWord(text)).toEqual(['segment', 7]);
});

test('Returns ["jumps", 5].', () => {
  const text = 'frog jumps from river';

  expect(getLongestWord(text)).toEqual(['jumps', 5]);
});
