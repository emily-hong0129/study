function power(base, exponent) {
  // exponent가 짝수일때
  // exponent가 홀수일때
  if(exponent === 0){
    return 1;
  }
  if(exponent%2 ===0){
    let result = power(base, exponent/2)%94906249
    return (result * result)%94906249
  }
  else{
    let result= power(base, (exponent-1)/2)%94906249
    return (base * ((result * result)%94906249))%94906249
  }
}
