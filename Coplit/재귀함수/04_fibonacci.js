function fibo04(num) { // 3
  if (num <= 1) { 
    return num;
  } //1 이하면 그대로 리턴하고 함수 종료

  else {
    return fibo04(num-2) + fibo04(num-1)
  }
}

// [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... ]
