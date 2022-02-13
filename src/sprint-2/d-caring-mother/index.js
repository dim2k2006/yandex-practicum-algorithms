const findIndex = (node, value) => {
  const iter = (node, index) => {
    if (!node) return -1;

    if (node.value === value) return index;

    return iter(node.next, index + 1);
  };

  return iter(node, 0);
};

function solution(node, value) {
  return findIndex(node, value);
}

module.exports = findIndex;
