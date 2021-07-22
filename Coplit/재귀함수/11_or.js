function or11(arr) {
  if(arr.length === 0){
    return false;
  }else if(arr.length === 1){
    return arr[0];
  }else{
    return arr[0] || or11(arr.slice(1))
  }
}
