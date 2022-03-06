function merge_sort(arr, left, right) {
  return undefined;
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
