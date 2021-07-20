function sum01(num) {
  
  if(num === 0 || num === 1){
    return num;
  }
  return num + sum01(num-1);
}