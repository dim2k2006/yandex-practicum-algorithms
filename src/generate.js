class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports.Node = Node;

const buildLinkedList = (values) => {
  const buildNode = (index) => {
    const value = values[index];

    if (index === values.length - 1) return new Node(value, null);

    return new Node(value, buildNode(index + 1));
  };

  return buildNode(0);
};

exports.buildLinkedList = buildLinkedList;
