let tiling = function (n) {
  // 보드 사이즈 : 2 * n
  // 타일 : 2 * 1
  // 타일을 놓는 방법을 a, b, c, d로 구분
  // 피보나치 수열
  
  let arr = [1, 2];
  for(let i = 2; i < n; i++){
    arr[i] = arr[i -1] + arr[i -2];
    arr[i] = Number(arr[i].toString());
  }
  return Number(arr[n - 1].toString())
};
