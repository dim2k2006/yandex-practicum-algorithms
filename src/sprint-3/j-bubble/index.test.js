const { bubbleSort } = require('./');

const cases = [
  [[], []],
  [[1], []],
  [
    [4, 3, 9, 2, 1],
    [
      [3, 4, 2, 1, 9],
      [3, 2, 1, 4, 9],
      [2, 1, 3, 4, 9],
      [1, 2, 3, 4, 9],
    ]
  ],
  [
    [12, 8, 9, 10, 11],
    [
      [8, 9, 10, 11, 12]
    ]
  ]
];

cases.forEach(([input, expected]) => {
  test(`Sorts list of number. Input: ${JSON.stringify(input)}.`, () => {
    expect(bubbleSort(input)).toEqual(expected);
  });
});
