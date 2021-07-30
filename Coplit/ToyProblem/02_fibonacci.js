// Q. 재귀함수만으로 피보나치 구현

// try1
// 소스의 직관력이 좋다
// 하지만 큰수에서는 실행초과가 뜸
// O(2^n) 구조이기 때문에 비효율적이다.
function fibonacci(n) {
  if(n < 2){
    return n;
  }
  else{
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

// dynamic with meoization: O(N)
// fibo(10)
// = fibo(9) + fibo(8)
// = fibo(8) + fibo(7) + fibo(7) + fibo(6)
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n);
};





