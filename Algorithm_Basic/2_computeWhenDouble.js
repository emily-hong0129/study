function computeWhenDouble(interestRate) { 
  let a = 1;
  let year = 0;
  let rate = (interestRate / 100) + 1 ; 

  for(let i = 0; i <= 1000000; i++){
    a = a * rate;
    year++;
    if(a >= 2){
      break;
    }
  }
  return year;
}