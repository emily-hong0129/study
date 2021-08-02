// 시간복잡도가 O(log n)인 풀이
const rotatedArraySearch = function (rotated, target) { // [4, 5, 6, 0, 1, 2, 3],  2
    let left = 0,
    right = rotated.length - 1;

  while (left <= right) {
    let middle = parseInt((right + left) / 2);

    if (rotated[middle] === target) {
      return middle;
    }

    if (rotated[left] < rotated[middle]) {
      // 왼쪽 절반이 정렬되어 있는 상태
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      // 오른쪽 절반이 정렬되어 있는 상태
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};

// 시간복잡도가 O(n)인 풀이
const rotatedArraySearch = (rotated, target) => {
  for (let i = 0; i < rotated.length; i++) {
    if (rotated[i] === target) {
      return i;
    }
  }
  return -1;
};