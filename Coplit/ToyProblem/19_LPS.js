const LPS = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  // 정규식을 사용하면 간단해짐??
  // aaaabaaaa => 4
  // aaaaa => 2 
  // aaaaa => 5
  // 주어진 문자열의 가장 긴 접두어이면서 접미어인 길이를 찾아내야함
  // 접두어와 접미어가 겹치치 않아야 함
  let result = '';  // 

  for(let i = 0 ; i <= str.length / 2; i ++){ // 2.5
    let pre = str.slice(0, i);
    let suffix = str.slice(str.length - i);
    
    // 길이가 같다면
    if(pre === suffix){ // 'aa', 'aa'
      result = pre; // 접두어를 결과에 담음
    }
  }

  return result.length;
};

// // 정규식
// const LPS = function (str) {
//   const result = str.match(/(\w*).*\1/);
//   return result[1].length;
// };


