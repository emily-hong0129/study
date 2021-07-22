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

