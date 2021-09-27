function boardGame(board, operation) {
  const N = board.length;
  const directions = {
    'U': [-1, 0], // 상
    'D': [1, 0],  // 하
    'L': [0, -1], // 좌
    'R': [0, 1]   // 우
  }
  const isInside = (y, x) => 0 <= y && y < N && 0 <= x && 0 < N;
  let [y, x] = [0, 0]
  let sum = 0;
  for(let i = 0; i < operation.length; i++){
    let [moveY, moveX] = directions[operation[i]];
    y += moveY  // 움직인 값을 더해주면 움직임
    x += moveX
    if(!isInside(y, x)) return 'OUT'  // 움직인 값이 판 안에 없으면 리턴
    
    sum += board[y][x]; // 여기에서 지금 남아있는 y, x는 판 안에 있는 좌표다
  }
  return sum;
};


/*
점수를 계산해야되는 score 를 설정한후
시작점 설정과
이동시 움직임을 저장할 x,y축을 만들어주고
반복문안에서 스트링들을 만날시 y,x의 점수를 기록해나간다
*/

/*
function boardGame(board, operation) {
  const DIR = {
    'U': [-1, 0],
    'D': [1, 0],
    'L': [0, -1],
    'R': [0, 1]
  }
  const LEN = board.length;
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  let Y = 0;
  let X = 0;
  let score = 0;
  for (let i = 0; i < operation.length; i++) {
    const [dY, dX] = DIR[operation[i]];
    Y += dY;
    X += dX;
    if (isValid(Y, X) === false) return 'OUT';
    score += board[Y][X];
  }
  return score;
};
*/
