const countMovingAverage = require('.');

test('Counts moving average.', () => {
  const timeseries = [1, 2, 3, 4, 5, 6, 7];
  const k = 4;
  const expected = [2.5, 3.5, 4.5, 5.5];

  expect(countMovingAverage(timeseries, k)).toEqual(expected);
});
