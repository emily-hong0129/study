function reverse12(arr) {  // [1,2,3,4,5]
  if(arr.length === 0){
    return [];
  }

  const head = arr.slice(-1); //5
  const tail = arr.slice(0, arr.length-1);  //[1,2,3,4]

  return head.concat(reverse12(tail));
  /*
  // const [head, ...tail] = arr;

  const head = arr[0];
  const tail = arr.slice(1);
  return reverseArr(tail).concat(head);

  */

}
