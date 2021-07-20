function odd02(num) {
  // 2를 반복적으로 계속 뺀다.
  // 0 또는 1로 홀수,짝수 판단 
  // Math.abs() : 절대값

  // 음수일 경우
  if(num < 0){
    num = Math.abs(num);
  }

  if(num === 0){
    return false;
  }else if(num === 1){
    return true;
  }

  return odd02(num - 2);
}
