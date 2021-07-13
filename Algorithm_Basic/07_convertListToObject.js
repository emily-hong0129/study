function convertListToObject(arr) {
  let result = {};

  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] in result === true || arr[i].length === 0){
      continue;
    }else{
      result[arr[i][0]] = arr[i][1];
    }
  }
  return result;
}
