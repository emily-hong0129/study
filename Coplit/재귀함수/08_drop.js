function delete08(num, arr) { // num =2 , [1, -2, 1, 3] => [1,3]
  // slice 사용하여 요소를 제거한다.
  if(num > arr.length){
    return [];
  }
    else if (num ===0){
    return arr;
  }
    arr.shift()
    return delete08(num-1,arr);
}

// [1,2,3,4]
// num = 1, [2,3,4]
// num = 2, [3,4]
// num = 3, [4]



