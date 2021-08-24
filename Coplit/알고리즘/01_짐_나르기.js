function movingStuff(stuff, limit) {  //  [70, 50, 80, 50], 100 => 3
  let sortedArr = stuff.sort((a,b) => a-b); // [80, 70, 50, 50]
  let count = 0;  // 나갈때마다 카운트

  // 배열을 순회
  while (sortedArr.length !==0) { 
    if (sortedArr[0] + sortedArr[sortedArr.length-1] <= limit) { 
      count++ 
      sortedArr.shift();
      sortedArr.pop();
    } else {
      count++
      sortedArr.pop();  
    }
  }
  return count;
}