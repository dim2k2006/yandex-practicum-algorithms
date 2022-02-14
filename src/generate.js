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

class BiNode {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

module.exports.BiNode = BiNode;

const buildBiLinkedList = (values) => {
  const buildNode = (index, prevNode) => {
    const value = values[index];

    if (index === values.length - 1) return new BiNode(value, null, prevNode);

    const node = new BiNode(value, null, prevNode);

    const nextNode = buildNode(index + 1, node);

    node.next = nextNode;

    return node;
  };

  return buildNode(0, null);
};

exports.buildBiLinkedList = buildBiLinkedList;

const debugBiLinkedList = (node) => {
  if (!node) return;

  const prev = node.prev ? node.prev.value : null;
  const next = node.next ? node.next.value : null;

  console.log(`value: ${node.value}. prev: ${prev}. next: ${next}`);

  return debugBiLinkedList(node.next);
};

exports.debugBiLinkedList = debugBiLinkedList;
