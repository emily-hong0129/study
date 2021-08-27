function newChickenRecipe(stuffArr, choiceNum) {  // 배열, 요소개수
  // 상한 재료를 필터링하여 새로운 배열로 리턴한다
  let freshArr = stuffArr.filter(el => String(el).slice(-3) !== "000")

  let recur = (arr, choiceNum) => {
    let result = []
    if(choiceNum === 1) return arr.map((hand) => [hand]);
    // 재귀 함수는 중복 순열과 거의 동일
    arr.forEach((hand, idx, arr) => {
      let current = hand
      // 중복 순열과의 차이점
      // 일반 순열은 이미 선택한 요소는 다시 선택할 수 없다.
      // 필터링한 배열을 재귀의 인자로 전달한다.
      let restArr = arr.filter((_, index) => index !== idx);
      let permArr = recur(restArr, choiceNum - 1)
      let combine = permArr.map((el) => [current, ...el])
      result.push(...combine)
    })
    return result
  }
  return recur(freshArr, choiceNum)
}
