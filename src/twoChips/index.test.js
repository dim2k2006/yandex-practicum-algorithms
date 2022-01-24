const getChips = require('.');
const getChips2 = require('./index2');
const getChips3 = require('./index3');

test('Finds correct chips.', () => {
  const chipsScores = [-1, -1, -9, -7, 3, -6];
  const K = 2;
  const expected = [-1, 3];

  expect(getChips(chipsScores, K)).toEqual(expected);
  expect(getChips2(chipsScores, K)).toEqual(expected);
  expect(getChips3(chipsScores, K)).toEqual(expected);
});

test('Finds correct chips 2.', () => {
  const chipsScores = [-91, -56, -44, -32, -10, 33, 55, 58, 87, 94];
  const K = -88;
  const expected = [-56, -32];

  expect(getChips2(chipsScores, K)).toEqual(expected);
  expect(getChips3(chipsScores, K)).toEqual(expected);
});
