const largestProductOfThree = function (arr) {
  // 배열 정렬
  // 음수일 경우 2개 있어야함
  // 배열 0번째, 마지막 요소 비교
  arr = arr.sort((a,b) => a -b); // [-10, -4, 1, 2, 6, 20]
  let maxNum;
  let newArr = []

  if(arr[0] < 0 && arr[1] < 0){  // 양수와 음수가 같이 있는 배열 (음수가 2개있을 경우)
    maxNum = (arr[0] * arr[1] * arr[arr.length - 1])  // -10, -4, 20
  }
  else{
    newArr = arr.slice(arr.length - 3); // [2, 6, 20]
    maxNum = (newArr[0] * newArr[1] * newArr[2])
  }

  // 음수만 있는 배열  [-5, -4, -3, -2, -1]
  if(arr[arr.length - 1] < 0){
    newArr = arr.slice(arr.length - 3) // [-3, -2, -1]
    maxNum = (newArr[0] * newArr[1] * newArr[2])
  }

  return maxNum;
};