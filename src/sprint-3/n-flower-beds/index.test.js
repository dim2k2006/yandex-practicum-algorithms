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
];

cases.forEach(([input, expected]) => {
  test(`Generates borders. Input: ${input}.`, () => {
    expect(getBorders(input)).toEqual(expected);
  });
});
