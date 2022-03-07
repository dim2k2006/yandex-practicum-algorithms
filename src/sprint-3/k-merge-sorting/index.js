function merge_sort(arr, left, right) {
  const iter = (list) => {
    if (list.length === 1) return list;

    const leftList = iter(list.slice(0, Math.ceil(list.length / 2)));
    const rightList = iter(list.slice(Math.ceil(list.length / 2), list.length));

    const result = merge(
      leftList.concat(rightList),
      0,
      Math.ceil((leftList.length + rightList.length) / 2),
      leftList.length + rightList.length,
    );

    return result;
  };

  const result = iter(arr.slice(left, right));

  arr.splice(0, right - left, ...result);
}

function merge(arr, left, mid, right) {
  const leftList = arr.slice(left, mid);
  const rightList = arr.slice(mid, right + 1);

  let leftIndex = 0;
  let rightIndex = 0;

  const result = [];
  let resultIndex = 0;

  while (leftIndex < leftList.length && rightIndex < rightList.length) {
    const leftItem = leftList[leftIndex];
    const rightItem = rightList[rightIndex];

    if (leftItem <= rightItem) {
      result[resultIndex] = leftItem;
      leftIndex = leftIndex + 1;
    } else {
      result[resultIndex] = rightItem;
      rightIndex = rightIndex + 1;
    }

    resultIndex = resultIndex + 1;
  }

  while (leftIndex < leftList.length) {
    result[resultIndex] = leftList[leftIndex];
    leftIndex = leftIndex + 1;
    resultIndex = resultIndex + 1;
  }

  while (rightIndex < rightList.length) {
    result[resultIndex] = rightList[rightIndex];
    rightIndex = rightIndex + 1;
    resultIndex = resultIndex + 1;
  }

  return result;
}

exports.merge_sort = merge_sort;
exports.merge = merge;
