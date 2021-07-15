function powerOfTwo(num) {
  if(num === 1){
    return true;
  }

  let pow = 2;
  while(pow < num){ // 계속 곱하여 num과 같은지 확인
    pow *= 2
  }

  return pow === num
} 
