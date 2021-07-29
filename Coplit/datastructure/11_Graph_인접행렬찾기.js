function getDirections(matrix, from, to) {

  // queue를 간단하게 생성하고, 첫 시작점으로 from을 할당
  const queue = [from];
  const enqueue = (n) => queue.push(n);
  const dequeue = (n) => queue.shift();

  // 방문했다는 것을 표시하기 위해 1차원 행렬을 생성
  const isVisited = new Array(matrix.length).fill(false);

  // 첫 정점 방문 여부를 표시
  isVisited[from] = true

  // queue(방문할 곳)의 사이즈가 0이 될 때까지 반복
  while (queue.length > 0) {

    // queue에서 정점을 하나 빼서 now에 할당
    const now = dequeue();

    // 목적지인지 검사하고, 목적지라면 true를 반환
    if (now === to) return true;

    // 해당 정점의 간선들을 확인
    for (let next = 0; next < matrix[now].length; next++) {
      // 만약, 간선이 있고 방문하지 않았다면
      if (matrix[now][next] && !isVisited[next]){
        // queue에 next를 넣는다. (다음 정점으로 가기 위해)
        enqueue(next);
        // 해당 정점을 방문했다는 것을 표시
        isVisited[next] = true
      }
    }
    
  }

  // 길이 없다면 false를 반환
  return false;
}


///////
function getDirections(matrix, from, to) { 
  // from과 to가 유효하지 않은 정점일 때 
  if(from >= matrix.length || to >= matrix.length || from < 0 || to < 0) {
    return false; // 거짓 리턴
  }

  // to에 도달하기 전, 한 번 방문한 정점에 다시 방문하면 (무한 루프이므로)
  // 정점 방문 여부를 표시하는 배열 생성
  const isVisited = new Array(matrix.length).fill(false);

  function getDirectionsInner(matrix, from, to, isVisited){

    const connectToFrom = []; // from과 길로 연결된 정점들
    isVisited[from] = true; // from을 방문한 정점으로 표시
    // connectToFrom 배열 얻기
    // matrix[from] 배열 요소 순회
    for(let i = 0; i < matrix[from].length; i++) {
      // i번째 요소의 값이 0이 아니면 
      if(matrix[from][i] !== 0) {
        connectToFrom.push(i); // i를 connectToFrom에 추가
      }
    }

    // base case
    // connectToFrom 배열 안에 to가 존재하면
    if(connectToFrom.includes(to)) {
      return true; // 참 리턴
    } 

    // recursive case
    // connectToFrom 내에, to와 길로 연결된 정점이 있는지 탐색
    for(let vertex of connectToFrom) {
      // 무한 루프 피하기 - from 정점이 자기 자신을 연결하는 길을 가질 때 검증 생략
      // 재귀함수 호출값이 참이면
      if(!isVisited[vertex] && getDirectionsInner(matrix, vertex, to, isVisited)) {
        return true; // 참 리턴
      }
      isVisited[vertex] = true; // vertex를 방문한 정점으로 표시
    }

    // base case
    // from과 연결된 정점들 중에, 끝까지 to와 길로 연결된 정점을 찾을 수 없으면
    return false; // 거짓 리턴
  }

  return getDirectionsInner(matrix, from, to, isVisited);
}