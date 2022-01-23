const zip = (inputA, inputB) => {
  const iter = (accumulator, listA, listB) => {
    if (listA.length === 0) {
      return accumulator;
    }

    const newAccumulator = [...accumulator, listA[0], listB[0]];

    return iter(newAccumulator, listA.slice(1), listB.slice(1));
  };

  return iter([], inputA, inputB);
};

module.exports = zip;
