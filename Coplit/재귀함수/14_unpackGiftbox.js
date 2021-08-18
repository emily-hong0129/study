/* solution_1
function giftBox14(giftBox, wish) {
  // base case
  // recursive case
  for(let i = 0; i < giftBox.length; i++){
    // giftBox안에 배열이 또 있기 때문에 먼저 요소가 배열인지 검사
    if(Array.isArray(giftBox[i])){  // 요소가 배열인 경우
      const result = giftBox14(giftBox[i],wish); //// 배열인 요소안에 wish 찾았니?
      if(result === true ){ // 찾았음  
        return true;
      }

    }else if(giftBox[i] === wish){  // 없을때, giftBox에서 배열인 요소 뒤의 요소를 마저 검사
        return true;  // 있다면,
    }
  }
  return false; // wish 와 일치하는 요소가 전부 없음.
}
*/

// solution_2
function unpackGiftbox(giftBox, wish) {
  if(giftBox.includes(wish)) return true;  // giftBox 배열에 wish를 포함하고 있으면

  for(let gift of giftBox){ // gift 안의 요소들에 접근
    if(Array.isArray(gift)){  // 요소가 배열형태 일 때 한번 더 까야함
      let found = unpackGiftbox(gift, wish);  // 이 부분을 너무 믿어서 리턴해버리면 안된다. DFS에서도 똑같음 
      // return을 쓰면 undefined가 나오기 때문에 변수 found에 담아서 undefined 경우를 걸러줌
      if(found === true) return found; // 외우기, 진짜 찾았을때만 return 하기
    }
  }
  // 정말 못찾았으면 마지막에 false
  return false;
}
// unpackGiftbox => true (요소가 내가 찾는 wish일 때)

/* reduce solution
function unpackGiftbox(giftBox, wish){
  return trueOfFalse = giftBox.reduce((acc, cur) => {
    if(cur === wish) return true;
    if(Array.isArray(cur)){
      return unpackGiftbox(cur, wish) || acc
    }else{
      return acc;
    }
  },false)
  // return trueOfFalse
}
*/

