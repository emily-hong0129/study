function ocean(target, type) {
  let bag = [1];

  for(let i = 1; i <= target; i++)
    bag[i] = 0;
  // bag[1,0,0,0, ... 0]  -> length : 51
                      // 3
  for(let i = 0; i < type.length; i++) {
    for(let j = 1; j <= target; j++)  // 50번씩 반복
      if(type[i] <= j){      
        bag[j] += bag[ j - type[i] ];
    }
  }
  return bag[target];
}