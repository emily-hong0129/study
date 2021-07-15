function convertDoubleSpaceToSingle(str) {
  let arr = str.split(' ');
  let newStr = '';
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === ''){
      continue;
    }else{
      newStr = newStr + ' ' + arr[i];
    }
  }
  return newStr.slice(1);
}
 
