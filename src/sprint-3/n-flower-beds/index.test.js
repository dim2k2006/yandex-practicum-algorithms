const { getBorders } = require('./');

const cases = [
  [
    [
      [7, 8],
      [7, 8],
      [2, 3],
      [6, 10],
    ],
    [
      [2, 3],
      [6, 10],
    ],
  ],
  [
    [
      [2, 3],
      [5, 6],
      [3, 4],
      [3, 4],
    ],
    [
      [2, 4],
      [5, 6],
    ],
  ],
];

cases.forEach(([input, expected]) => {
  test(`Generates borders. Input: ${input}.`, () => {
    expect(getBorders(input)).toEqual(expected);
  });
});
