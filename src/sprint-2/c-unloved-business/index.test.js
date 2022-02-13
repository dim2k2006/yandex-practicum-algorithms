const removeNodeByIndex = require('./');

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const buildLinkedList = (values) => {
  const buildNode = (index) => {
    const value = values[index];

    if (index === values.length - 1) return new Node(value, null);

    return new Node(value, buildNode(index + 1));
  };

  return buildNode(0);
};

test('Removes first node.', () => {
  const list = buildLinkedList([1, 2, 3, 4]);
  const expectedList = buildLinkedList([2, 3, 4]);

  expect(removeNodeByIndex(list, 0)).toEqual(expectedList);
});

test('Removes node from the middle.', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5]);
  const expectedList = buildLinkedList([1, 2, 4, 5]);

  expect(removeNodeByIndex(list, 2)).toEqual(expectedList);
});

test('Removes last node.', () => {
  const list = buildLinkedList([1, 2, 3, 4, 5]);
  const expectedList = buildLinkedList([1, 2, 3, 4]);

  expect(removeNodeByIndex(list, 4)).toEqual(expectedList);
});
