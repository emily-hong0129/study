function and10(arr) {
  if(arr.length === 0){
  return true;
}else if(arr.length === 1){
  return arr[0];
}else{
  return arr[0]&&and10(arr.slice(1))
}
}

/*
function and11(arr) {
  // 빈배열
  if(arr.length === 0){
    return true;

  }else if(arr[0] === false){ // flase일때 종료
    return false;

  }else if(arr.length === 1){ // 배열길이 1
    return arr[0];
  }else{
    // 배열의 요소를 빼면서 비교
    return and10(arr.slice(1))
  }
}
*/

