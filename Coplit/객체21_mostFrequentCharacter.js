function mostFrequentCharacter(str) {
  str = str.replace(/ /gi, ""); // 띄어쓰기 제거

  let obj = {firstCount: 0, maxChar: ''}
  for(let i = 0; i < str.length; i++){
    if(obj[str[i]] === undefined){
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;

    if(obj[str[i]] > obj['firstCount']){
      obj['firstCount'] = obj[str[i]];
      obj['maxChar'] = str[i];
    }
  }
  return obj['maxChar'];
}