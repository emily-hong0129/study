function ABCheck(str) {
  // 소문자 변환
  str = str.toLowerCase()
  // a ~ b 또는 b ~ a
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a' && str[i + 4] === 'b' || str[i] === 'b' && str[i + 4] === 'a'){
      return true;
    }
  }
  return false;
}
