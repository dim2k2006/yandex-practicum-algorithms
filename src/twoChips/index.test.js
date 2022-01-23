const getChips = require('.');

test('Finds correct chips.', () => {
  const chipsScores = [-1, -1, -9, -7, 3, -6];
  const K = 2;
  const expected = [-1, 3];

  expect(getChips(chipsScores, K)).toEqual(expected);
});
