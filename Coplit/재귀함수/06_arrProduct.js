function arrMulti06(arr) {
  const head = arr[0];
  const tail = arr.slice(1);
  
  if (arr.length === 0) {
    return 1;
  }else if(arr.length === 1){
    return head;
  }

  return head * arrMulti06(tail);

}
