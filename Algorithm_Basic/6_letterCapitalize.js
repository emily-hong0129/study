function letterCapitalize(str) {
  // 배열
  // 각 요소 첫번째 글자를 대문자로 변환
  // 문자열 리턴
  let arr = str.split(' '); // ["hello", "world"]
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === ''){
      result.push(arr[i])
    }else{
      result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
  }
  return result.join(' ');
}
