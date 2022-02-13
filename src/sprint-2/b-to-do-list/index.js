const printList = (node) => {
  const iter = (accumulator, nodeItem) => {
    if (!nodeItem) return accumulator;

    return iter([...accumulator, nodeItem.value], nodeItem.next);
  };

  return iter([], node);
};

module.exports = printList;
