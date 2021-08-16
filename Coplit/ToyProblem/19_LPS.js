/*
const LPS = function (str) {
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
*/

const LPS = function (str) {
  let max= 0; // 가장 큰 값을 리턴하기 위해
  let half = Math.floor(str.length / 2);

  for(let i = 0; i <= half; i++){
    if(str.slice(0, i) === str.slice(-i)){  // 
      if(max < i) max = i;
    }
  }
  
  return max;
}


