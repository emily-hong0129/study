const largestRectangularArea = function (histogram) {
  //가장 작은 값과 해당 인덱스를 가지는 구간트리를 만들자.
  const createMinIdxTree = (arr, segmentStart, segmentEnd) => {
    if (segmentStart === segmentEnd) return { idx: segmentStart, val: arr[segmentStart] };

    const mid = parseInt((segmentStart + segmentEnd) / 2);
    const left = createMinIdxTree(arr, segmentStart, mid);
    const right = createMinIdxTree(arr, mid + 1, segmentEnd);

    return {
      val : Math.min(left.val, right.val),
      idx : left.val < right.val ? left.idx : right.idx,
      left,
      right
    };
  };

  //특정 구간에서도 가장 작은 값의 인덱스를 뽑을 수 있는 함수를 만들자.
  const getMinIdx = (treeStart, treeEnd, rangeStart, rangeEnd, tree) => {
    if (rangeStart <= treeStart && treeEnd <= rangeEnd) return tree.idx;
    if (treeEnd < rangeStart || rangeEnd < treeStart) return rangeStart;

    const mid = parseInt((treeStart + treeEnd) / 2);
    const left = getMinIdx(treeStart, mid, rangeStart, rangeEnd, tree.left);
    const right = getMinIdx(mid + 1, treeEnd, rangeStart, rangeEnd, tree.right);

    return histogram[left] < histogram[right] ? left : right;
  };

  /*
  1. 구간 중, 가장 작은 막대를 찾는다. (처음에는 전체 구간)
  2. 작은 막대의 높이를 기준으로 구간 길이를 곱해, 첫번째 사각형을 만든다. (후보)
  3. 작은 막대를 기준으로 왼쪽 구간과 오른쪽 구간을 나눈다.
  4. 첫번재 후보와 왼쪽 구간 후보, 오른쪽 구간 후보 중 가장 큰 값을 리턴한다.
  5. 4의 왼쪽 구간 후보와 오른쪽 구간 후보는 각각 1 ~ 4의 과정을 거친 값이다. (재귀)
  */

  const getRangeArea = (start, end, tree) => {
    if (start > end) return 0;

    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);

    return Math.max(
      (end - start + 1) * histogram[minIdx],
      getRangeArea(start, minIdx - 1, tree),
      getRangeArea(minIdx + 1, end, tree)
    );
  };

  const minIdxTree = createMinIdxTree(histogram, 0, histogram.length - 1);
  
  return getRangeArea(0, histogram.length - 1, minIdxTree);
}