function partTimeJob(k) {
  let coin = [500, 100, 50, 10, 5, 1]
  // 되도록 큰단위 동전을 사용
  let count = 0; // 동전개수
  for(let i of coin){
    count = count + Math.floor(k / i); //동전의 개수
    k = k - i * Math.floor(k / i); // 남은 돈 계산
  }
  return count
}