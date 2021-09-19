// dynamic programming: O(M * N)
// memoization을 활용해 중복 계산되는 문제를 제거한다.
// LCS('ABCD', 'ACEB')의 경우 재귀 호출을 적어보면 아래와 같다.
// => 1) LCS('BCD', 'CEB')
//  => 1-1) LCS('CD', 'CEB'), 1-2) LCS('BCD', 'EB')
//    => 1-1-1) LCS('D', 'CEB'), 1-1-2) LCS('CD', 'EB')
//    => 1-2-1) LCS('CD', 'EB'), 1-2-2) LCS('BCD', 'B')
// 더 볼 필요 없이 1-1-2)와 1-2-1)은 같은 문제임을 알 수 있다.
const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];
  // 중복 계산을 방지하기 위해 left, right
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right, len) => {
    if (memo[left][right] !== -1) return memo[left][right];

    if (left === str1.length || right === str2.length) return 0;

    if (str1[left] === str2[right]) {
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right), //
      compareOneByOne(left, right + 1)
    );
    return memo[left][right];
  };

  return compareOneByOne(0, 0, 0);
};