const rotateMatrix = function (matrix, k= 1) {
  /*
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ]
 */

  // 빈배열인 경우
  if(matrix.length === 0) return matrix;

  // k값 받아서 k번 회전시킨 배열
  for(let i = 0; i < k; i++){
    matrix = rotate(matrix)
  }
  return matrix

};

const rotate = (matrix) => {
  let result = [];
  for(let i = 0; i < matrix[0].length; i++) {
    let array = [] //새로운 빈 배열 선언
    for(let j = matrix.length-1; j >= 0; j--){
      array.push(matrix[j][i])
    } // [13, 9, 5, 1] -> [14, 10, 6, 2]
    result.push(array)
  }

  return result
}


/*
const rotateMatrix = function (matrix, rotateNum = 1) {
  // rotateNum 이 0일 수 있으므로 아래와 같은 초기화는 지양해야 함
  // rotateNum = rotateNum || 1
  const N = matrix.length;
  // 빈 배열을 입력받을 수 있다.
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4;
  // 회전하지 않는다.
  if (rotateNum === 0) return matrix;

  const rotated = [];
  // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row];
      else if (rotateNum === 2)
        rotated[row][col] = matrix[N - row - 1][M - col - 1];
      else rotated[row][col] = matrix[col][M - row - 1];
    }
  }

  return rotated;
};
*/