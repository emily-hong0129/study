function get09(num, arr) { // num= 2, [1, 2, 3, 4]
  if(num === 0 || arr.length === 0){
    return [];
  }
  
  const head = arr.slice(0,1);  // [1]
  const tail = arr.slice(1);  // [2,3,4,5]

  head.push(get09 (num - 1, tail));
  let result = head.flat();

  return result;

}
