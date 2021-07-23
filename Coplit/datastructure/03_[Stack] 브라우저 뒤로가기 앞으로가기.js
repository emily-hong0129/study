function browserStack(actions, start) {
  let prevStack = [];
  let nextStack = [];
  let current = start;

  // 반복문으로 actions 배열에 접근
  for(let i = 0; i < actions.length; i++){
    if(actions[i] === -1){  // 뒤로가기
    // 뒤로가기할때 prevStack에서 현재페이지로 가져올 요소가 있을 경우(prev가 비어있지 않을 경우)
      // 현재페이지는 nextStack으로 push
      // prevStack에서 pop하여 현재페이지로 할당
      if(prevStack.length > 0){
        nextStack.push(current)
        current = prevStack.pop();
      }

    }else if(actions[i] === 1){ // 앞으로가기
    // 앞으로갈때 nextStack에서 현재페이지로 가져올 요소가 있을 경우(next가 비어있지 않을 경우)
      // 현재페이지는 prevStack으로 push
      // nextStak에서 pop하여 현제페이지에 할당
      if(nextStack.length > 0){
        prevStack.push(current);
        current = nextStack.pop();
      }

    }else{  // 문자열이 들어올때
      // 현재페이지는 prevStack으로 push
      // 문자열은 현재페이지에 할당
      // 다음 페이지는 []
      prevStack.push(current);
      current = actions[i]
      nextStack = []
    }
  }
  return [prevStack, current, nextStack]
}