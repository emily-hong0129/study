function readVertically(arr) {
  let long = arr[0]; // 가장 긴 문자열로 가정, 또는 아무 긴 문자열로 할당해도됨
  let result = '';  // 빈문자열

  for(let i = 0; i < arr.length ; i++){   // 문자열들 하나씩 검사  ['hi', 'world'] 
    if(long.length < arr[i].length){  // arr i번째 문자열길이가 더 길때 ['world']
      long = arr[i];
    }
  }

  // arr[i]에 대한 for문
  for(let i = 0; i < long.length; i++){ // 가장 긴문자열    ['world']길이 5
    let word = '';  // 초기화된 word

    // arr[j]에 대한 for문
    for(let j = 0; j < arr.length; j++){  // arr길이(2)전까지 실행
      if(arr[j][i] === undefined){  // 비어있는 행, 열이있을때 건너뜀
        continue; // for문을 빠져나오고 밑에 result에 hw 적용되고 다시 arr[i]의 for문으로 돌아감
      } else {
        word = word + arr[j][i]; // h,w -> result에 hw적용 
      }
    }

    result = result + word; // hw적용 -> i의 for문으로 돌아가서 초기화된 word에서 다시 문자열 넣어줌->누적
  }
  return result;
  
}

// 'hwiorld'
// [0][0] -> h
// [1][0] -> w
// [0][1] -> i
// [1][1] -> o
// [1][2] -> r
// [1][3] -> l
// [1][4] -> d

// 'hweolrllrod'
// [0][0] -> h 
// [1][0] -> w
// [0][1] -> e
// [1][1] -> o
// [0][2] -> l
// [1][2] -> l
//  ....