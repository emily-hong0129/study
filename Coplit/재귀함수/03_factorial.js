function facto03(num) {
  if(num <= 1){
    return 1;
  }
  return num * facto03(num - 1);
}
