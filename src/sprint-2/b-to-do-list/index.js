const printList = (node) => {
  const iter = (accumulator, nodeItem) => {
    if (!nodeItem) return accumulator;

    return iter([...accumulator, nodeItem.value], nodeItem.next);
  };

  return iter([], node);
};

function solution(node) {
  const result = printList(node).join('\n');

  console.log(result);
}

module.exports = printList;
