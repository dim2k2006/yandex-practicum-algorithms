const getScores = require('./');

test('Returns 2.', () => {
  const k = 3;
  const field = [1, 2, 3, 1, 2, '.', '.', 2, 2, '.', '.', 2, 2, '.', '.', 2];

  expect(getScores(k, field)).toBe(2);
});

test('Returns 1.', () => {
  const k = 4;
  const field = [1, 1, 1, 1, 9, 9, 9, 9, 1, 1, 1, 1, 9, 9, 1, 1];

  expect(getScores(k, field)).toBe(1);
});

test('Returns 0.', () => {
  const k = 4;
  const field = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  expect(getScores(k, field)).toBe(0);
});

test('Returns 0.', () => {
  const k = 0;
  const field = [1, 2, 3, 1, 2, '.', '.', 2, 2, '.', '.', 2, 2, '.', '.', 2];

  expect(getScores(k, field)).toBe(0);
});

test('Returns 2.', () => {
  const k = 3;
  const field = [
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
  ];

  expect(getScores(k, field)).toBe(0);
});
