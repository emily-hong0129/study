function arrLeng07(arr) { // [1,2,3,4] => 4
  if(arr.isEmpty() === true){
    return 0;
  }

  return 1 + arrLeng07(arr.slice(1)); 
}

// [2,3,4]
// 1 + arrLength([2,3,4])
// 1 + 1 + arrLength([3,4])
// 1 + 1 + 1 + arrLength([4])
// 1 + 1 + 1 + 1 + 0