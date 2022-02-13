const removeNodeByIndex = (node, idx) => {
  const iter = (prevNode, node, index) => {
    if (node === null) return;

    if (index !== idx) return iter(node, node.next, index + 1);

    prevNode.next = node.next;
    node.next = null;
  };

  if (idx === 0) {
    const head = node.next;

    node.next = null;

    return head;
  }

  iter(null, node, 0);

  return node;
};

function solution(node, idx) {
  return removeNodeByIndex(node, idx);
}

module.exports = removeNodeByIndex;
