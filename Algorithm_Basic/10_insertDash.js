function insertDash(str) {
  // 연속되는 홀수 사이 '-'
  // 문자열 리턴
  let result = '';

  for(let i = 0; i < str.length; i++){
    // 홀수가 연속될때
    if(str[i] % 2 === 1 && str[i + 1] % 2 === 1){
      result += `${str[i]}-`;
    }else{
      result += str[i];
    }
  }
  return result;
}