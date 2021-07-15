function transformFirstAndLast(arr) {
  let result = {}  // 결과값을 담을 객체

  if(arr.length === 0){ // 배열 요소가 없을 때
    return result;
  }else{
    result[arr[0]] = arr[arr.length - 1];
    return result;
  }
} 
