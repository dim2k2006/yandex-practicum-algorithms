const printList = require('./');

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const item4 = new Node(4);
const item3 = new Node(3, item4);
const item2 = new Node(2, item3);
const item1 = new Node(1, item2);

test('Returns [1, 2, 3, 4].', () => {
  expect(printList(item1)).toEqual([1, 2, 3, 4]);
});
