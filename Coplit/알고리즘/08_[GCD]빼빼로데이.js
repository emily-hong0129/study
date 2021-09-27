/*
// 최대 공약수(유클리드 호제법: Euclidean algorithm)
function gcd(m, n) {
  if (m % n === 0) return n;  
  return gcd(n, m % n);
}

// M = 4, N = 8
function divideChocolateStick(M, N) {
  const result = [];
  // 최대공약수를 구한다.
  // M, N의 순서는 상관없다.
  const GCD = gcd(M, N);

  // 약수는 대칭적이므로 제곱근까지만 반복해도 된다.
  // 예) 36의 약수는 1, 2, 3, 4, 6, 9, 12, 18, 36이다.
  // 제곱근을 기준으로 양쪽의 값 하나씩 곱했을 때 36이 되기 때문에
  // 제곱근 보다 큰 약수는 제곱근보다 작은 약수에서 구할 수 있다.
  const sqrt = Math.floor(Math.sqrt(GCD));
  for (let left = 1; left <= sqrt; left++) {
    if (GCD % left === 0) {
      // 최대공약수의 약수인 경우 중 제곱근 보다 작은 약수의 경우
      result.push([left, M / left, N / left]);
      if (left * left < GCD) {
        // 제곱근이 아닌 경우(제곱근 보다 작은)
        right = GCD / left; // 최대 공약수를 제곱근이 아닌 수로 나누면 제곱근 보다 큰 약수를 구할 수 있다.
        result.push([right, M / right, N / right]);
      }
    }
  }

  // '빼빼로를 받게 되는 직원의 수'를 기준으로 오름차순으로 정렬
  result.sort((a, b) => a[0] - b[0]);

  return result;
}

/*
function divideChocolateStick(M, N) {
  const GCD = (a, b) => a % b === 0 ? b : GCD(b, a % b);  // 최대공약수 만들어주는 함수
  const gcd = GCD(M, N) // gcd = M과 N의 최대 공약수
  const result = [];

  const sqrt = Math.sqrt(gcd);

  for(let i = 1; i <= sqrt; i++){ // 1, 2, 5, 10
    if(gcd % i === 0){  // (약수라면), 빼빼로를 공평하게 나누어줄 수 있다면 or 약수라면
      // 배열의 모양을 통째로 push, M과 N을 출근한 직원수대로 나눈다
      result.push([i, M / i, N / i]); // 1 2 => gcd / i => 10   gcd / 2 => 5

      // 제곱근 부분
      if(i * i < gcd){  // 1 * 1 => 1
        const pair = (gcd / i); // i의 짝꿍
        result.push([pair, M / pair, N / pair]);
      }

    }
  }
  // 빼빼로를 받게되는 직원의 수를 기준으로 오름차순으로 정렬한다.
  result.sort((a, b) => a[0] - b[0]); // 1명배열의 짝꿍인 10명배열을 오른쪽 끝으로 위치해야함
  return result;
}
*/

/* other solution
function divideChocolateStick(M, N){
  let bigGcd = gcd(M, N)
  let result = [];
  let divisior = []
  let sqrt = parseInt(Math.sqrt(bigGcd))
  for(let i = sqrt; i >= 1; i--){
    if(bigGcd % i === 0){
      if(bigGcd / i === sqrt){
        divisior.push(i)
      }else{
        divisior.unshift(i)
        divisior.push(bigGcd / i)
      }
    }
  }
  for(let key of divisior){
    result.push([key, M / key, N /key])
  }

  return result

  function gcd(num1, num2){
    if(num1 % num2 === 0) return num2

    return gcd(num2, num1 % num2)
  }
}
*/
