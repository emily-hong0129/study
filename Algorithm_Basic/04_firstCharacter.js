function firstCharacter(str) {  // 'hello word'
  // 각 단어마다 첫번째 글자
  // 공백을 기준으로 나눔
  let result = '';

  if(str.length === 0){
    return result;
  }

  let word = str.split(' ')
  for(let i = 0; i < word.length; i++){  // ["hello", "world"]
    result += word[i][0]
  }
  return result;
} 
