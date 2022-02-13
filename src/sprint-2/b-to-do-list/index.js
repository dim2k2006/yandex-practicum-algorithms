const printList = (node) => {
  const iter = (accumulator, nodeItem) => {
    if (!nodeItem) return accumulator;

    if (accumulator === '') return iter(`${nodeItem.value}`, nodeItem.next);

    return iter(`${accumulator}\n${nodeItem.value}`, nodeItem.next);
  };

  const result = iter('', node);

  return result;
};

function solution(node) {
  console.log(printList(node));
}

module.exports = printList;
