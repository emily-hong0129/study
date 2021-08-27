function rockPaperScissors (rounds) {
  let rps = ["rock", "paper", "scissors"];
  // 매 판당 낼수 있는 경우의 수 3개, 여러 판이 진행될 경우, 중복된 패를 낼 수 있다. (중복순열)
  // 가위 바위 보의 배열 생성
  // 배열의 모든 요소의 경우의 수에 접근하기 위해 재귀함수를 작성
  let recur = (rps, selectNum) => {
    let output = [];
    // 재귀탈출은 인자로 들어온 판수만큼 재귀를 수행했을 때가 된다.
    // 주어진 판수를 모두 수행했을때
    // 인자로 들어온 배열의 요소에 brackets을 씌워 리턴
    if (selectNum === 1) return rps.map((hand) => [hand]);
    // 가위바위보 배열의 요소 각각 아래 로직을 수행한다
    rps.forEach((hand, idx, rps) => {
      // 현재 요소를 current에 할당
      let current = hand;
      // 배열의 나머지 요소를 restArr에 할당
      // 중복순열이므로, 현재 요소를 포함한다
      let restArr = rps;
      // 판수를 줄여가며 재귀를 수행
      // 재귀의 로직은
      // 처음 실행된 rock을 갖고 판수를 소모한다
      // 주어진 판수를 모두 수행하면 output에 push
      // 한 번의 재귀가 끝났습니다. 마지막 호출 전으로 돌아간다
      // 이제 paper가 current가 된다
      // 마지막 호출 바로 전으로 돌아갔으므로
      // rock, rock, paper가 output에 push 된다
      // 이런 식으로 가위바위보 배열의 모든 요소에 재귀를 수행하며
      // output에 경우의 수가 담기게 된다
      let permArr = recur(restArr, selectNum - 1);
      // 재귀의 결과를 이전 값과 합침
      let combineFix = permArr.map((el) => [current, ...el]);
      output.push(...combineFix);
    });
    return output;
  };
  // 입력인자로 판수가 주어지지 않으면,
  // 기본값인 3판을 수행
  return recur(rps, rounds || 3);
};
