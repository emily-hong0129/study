function removeExtremes(arr) {
  let longStr = '';
  let shortStr = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  
  // 문자열 요소들의 길이를 비교
  for(let i = 0; i < arr.length; i++){
    if(longStr.length <= arr[i].length){   // 가장 긴 문자열
      longStr = arr[i];
    }
    
    for(let i = 0; i < arr.length; i++){
      if(shortStr.length >= arr[i].length){   // 가장 짧은 문자열
        shortStr = arr[i];
      }
    }
  }
  arr.splice(arr.indexOf(longStr), 1);
  arr.splice(arr.indexOf(shortStr), 1);

  return arr;
}
