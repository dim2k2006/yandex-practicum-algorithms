const isPalindrome = require('./');

test('Returns true.', () => {
  const text = 'A man, a plan, a canal: Panama';

  expect(isPalindrome(text)).toBe(true);
});

test('Returns false.', () => {
  const text = 'zo';

  expect(isPalindrome(text)).toBe(false);
});
