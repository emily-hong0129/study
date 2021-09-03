const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  // bfs 구현을 위해 큐를 선언한다.
  // enQueue, deQueue시마다 인덱싱을 다시 하지 않기 위해
  // 순환 큐(circular queue)로 구현한다.
  // 문제의 특성에 따라 큐에는 좌표 평면의 한 점이 삽입되고, 한번 삽입된 요소는 두 번 다시 삽입되지 않는다.

  let R = village.length;
  let C = village[0].length;
  let matrix = createMatrix(village);
  let moves = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, 1], // RIGHT
    [0, -1], // LEFT
  ];
  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  // 마을을 벗어나는지 안 벗어나는지 검사
  const queue = [];

  const enQueue = (queue, pos) => {
    queue.push(pos)
  }; // 소문을 들은 집의 좌표를 queue에 넣는다.
  const deQueue = (queue) => {
    const pos = queue.shift();
    return pos;
  }; // 소문을 들은 집의 좌표를 queue에서 빼준다.

  let cnt = 0; //소문이 퍼진 시간

  enQueue(queue, [row, col]); // 시작점의 집을 먼저 queue에 넣어준다.
  
  matrix[row][col] = 0; // 마을 좌표의 값으로 소문이 퍼지는 데 걸리는 시간을 저장
  while (queue.length > 0) {
    // 큐의 가장 앞 자리의 좌표를 얻는다.
    let [row, col] = deQueue(queue);
    cnt = matrix[row][col];

    // 현재 지점을 기준으로 네 방향을 검토한다.
    moves.forEach((move) => {
      let nextRow = row + move[0];
      let nextCol = col + move[1];
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === '1') { 
        // 마을을 벗어나지 않고 소문이 퍼지지 않은 집을 queue에 넣어준다.
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = matrix[row][col] + 1; // 소문이 퍼진 시간 증가
      }
    });
  }
  return cnt;
};
