const getListForm = require('./');

test('Returns [1, 2, 3, 4].', () => {
  const list = [1, 2, 0, 0];
  const number = 34;

  expect(getListForm(list, number)).toEqual([1, 2, 3, 4]);
});

test('Returns [1, 2, 3, 4].', () => {
  const list = [9, 5];
  const number = 17;

  expect(getListForm(list, number)).toEqual([1, 1, 2]);
});
