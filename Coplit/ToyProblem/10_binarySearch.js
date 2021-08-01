const binarySearch = function (arr, target) {
  let left = 0, // 배열 맨 왼쪽 요소
  right = arr.length - 1; // 배열 맨 오른쪽의 마지막 요소
  
  while (left <= right) { // 맨 왼쪽 요소가 맨 오른쪽 요소보다 작거나 같을때까지 반복
    let middle = parseInt((right + left) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};
