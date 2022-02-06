const getBinarySum = require('./');

test('Returns 10110.', () => {
  expect(getBinarySum('1011', '1011')).toBe('10110');
});

test('Returns 11110.', () => {
  expect(getBinarySum('1111', '1111')).toBe('11110');
});

test('Returns 10101.', () => {
  expect(getBinarySum('1010', '1011')).toBe('10101');
});

test('Returns 10.', () => {
  expect(getBinarySum('1', '1')).toBe('10');
});

test('Returns 10.', () => {
  expect(getBinarySum('10', '0')).toBe('10');
});

test('Returns 11010101.', () => {
  expect(getBinarySum('11001', '10111100')).toBe('11010101');
});

test('Returns 10101001011000100000011110010000111000011100110111110010001101111010100010101110100111.', () => {
  expect(
    getBinarySum(
      '1101110101000001000100101000100101100010101100001111001101011111111',
      '10101001011000011110101111101000101111110111110011000101111000011000101001000010101000',
    ),
  ).toBe(
    '10101001011000100000011110010000111000011100110111110010001101111010100010101110100111',
  );
});

test('Returns 0.', () => {
  expect(getBinarySum('0', '0')).toBe('0');
});
