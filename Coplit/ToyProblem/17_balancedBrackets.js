/*
const balancedBrackets = function (str) {
  if(str.length === 0){
    return true;
  }
  // 괄호마다 개수가 짝수여야 함, 짝이 맞아야함
  // str의 문자를 쪼개 배열 요소로 담기
  let arr = str.split('');  // ["[", "]", "(", ")", "{", "}"]

  // 괄호인 요소들 다 넣기
  // for(let i = 0; i < arr.length; i++){
  //   if(el === '{' || el === '[' || el === "(" || el === '}' || el === ']' || el === ")"){
  //     newArr.push(el);
  //   }else{
  //     if(newArr === 0){
  //       return false;
  //     }
  //   }
  // }

  for(let i = 0; i < arr.length; i++){
    if((arr[i] === "}" && arr[arr - 1] === "{") || (arr[i] === "{" && arr[arr - 1] === "}")){
      arr.pop(); // 맞으면 빼기
    }else if((arr[i] === ")" && arr[arr - 1] === "(") || (arr[i] === "(" && arr[arr - 1] === ")")){
      arr.pop();
    }else if((arr[i] === "]" && arr[arr - 1] === "[") || (arr[i] === "[" && arr[arr - 1] === "]")){
      arr.pop();
    }
  }

  // for(let el of arr){

  //   // 배열의 괄호요소를 하나씩 빼면서 반대쪽 괄호와 짝인지 확인
  //   if((el === "}" && newArr[newArr - 1] === "{") || (el === "{" && newArr[newArr - 1] === "}")){
  //     newArr.pop(); // 맞으면 빼기
  //   }else if((el === ")" && newArr[newArr - 1] === "(") || (el === "{" && newArr[newArr - 1] === ")")){
  //     newArr.pop();
  //   }else if((el === "]" && newArr[newArr - 1] === "[") || (el === "{" && newArr[newArr - 1] === "]")){
  //     newArr.pop();
  //   }
  //   // else{
  //   //   newArr.push(el)
  //   // }
  // }
  // 배열의 길이가 0이면 true
  if(arr.length > 0){
    return false
  }else{
    return true;
  }
};
*/

  // '[[[{{{((()))}}}]]]'
  // 짝이 맞아야 한다.
  // 짝이 어떻게 맞아야 할까? => 먼저 열린애가 제일 나중에 닫혀야함
  // stack을 선언하고 opener를 만나면 push
  // stack = '[[[{{{((('
  //          )))}}}]]]
  // 짝이 예쁘게 잘 맞았을 때 stack의 길이? => 0
  const balancedBrackets = function (str) {
    let stack = [];
    let opener = ['(', '{', '[']; // 여는 괄호들
    let closer = [')', '}', ']']; // 닫는 괄호들
  
    for(let bracket of str){
      let top = stack[stack.length - 1] // 필요없는 변수, 편하기위해 만듦
      if(opener.includes(bracket)){ // 여는 괄호면
        stack.push(bracket);
      }else{
        if(closer[opener.indexOf(top)] === bracket){
          stack.pop();
        }else{
          return false;
        }
      }
    }
    return stack.length === 0;
  }