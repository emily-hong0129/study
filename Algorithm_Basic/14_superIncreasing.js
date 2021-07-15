function superIncreasing(arr) {
  let sum = arr[0];

  for(let i = 1; i < arr.length; i++){
    
    if(sum >= arr[i]){  // 합이 다음 요소보다 크거나 같을때
      return false;
    }else{  // 합이 다음 요소보다 작을때
      sum += arr[i];
    }
  }
  return true;
}