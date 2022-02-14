const reverse = (list) => {
  const iter = (prevNode, node) => {
    if (!node) return prevNode;

    const newCurrentNode = node.next;

    node.prev = node.next;
    node.next = prevNode;

    return iter(node, newCurrentNode);
  };

  const result = iter(list.prev, list);

  return result;
};

function solution(node) {
  return reverse(node);
}

module.exports = reverse;
