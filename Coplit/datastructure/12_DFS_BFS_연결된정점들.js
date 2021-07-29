function connectedVertices(edges) {
  // 행렬 기준
  // 제일 큰 버텍스 찾기
  const max = Math.max(...edges.flat());

  // 버텍스 찾았다면? 행렬 만들기
  const matrix = new Array(max + 1).fill(0).map(e => new Array(max + 1).fill(0));

  //엣지 넣기
  edges.forEach(e => {
    matrix[e[0]][e[1]] = 1;
    matrix[e[1]][e[0]] = 1;
  })

  // 탐색에 가장 중요한 건? 두 번 방문하지 않는다.
  let visited = new Array(matrix.length).fill(false);

  // 카운트
  let count = 0;

  // 버텍스를 하나씩 순회하면서 연결된 정점이 있는지 확인한다!!
  for(let i = 0; i < matrix.length; i++) {
    if(visited[i] === false) {
      bfs(matrix, i, visited);
      count++;
    }
  }

  // 카운트 반환
	return count;
}


// bfs solution
function bfs(matrix, v, visited) {
  // 큐에 시작점 넣고
  let Q = [v];
  // 방문했다고 표시
  visited[v] = true;
  // 큐에 모든 게 없어질 때까지 반복한다.

  while(Q.length !== 0) {
    // 큐에서 하나 뺀다.
    let current = Q.pop();
    // 현재 정점 확인한다.
    for(let i = 0; i < matrix[current].length; i++) {
      // 정점 순회하면서?
      if(visited[i] !== true && matrix[current][i] === 1) {
        // 큐에 i를 넣자
        Q.unshift(i);
        // 방문했다고 표현하자
        visited[i] = true;
      }
    }
  }
}

// dfs solution
function dfs(matrix, vertex, visited) {
	// 해당 버텍스에 방문 표시
	visited[vertex] = true;

	// 해당 버텍스의 모든 간선들을 전부 순회한다
	for (let i = 0; i < matrix[vertex].length; i++) {

		// 만약 i번째 간선과 이어진 버텍스를 방문하지 않았다면
		if(visited[i] !== true && matrix[vertex][i] === 1){
			// dfs를 호출해(재귀) 방문합니다.
			dfs(matrix, i, visited);
		}
		// 모든 방문이 종료되면 다음 버텍스를 확인한다
		// 재귀가 종료되면(한 정점에서 이어진 모든 간선들을 확인했다면) dfs 함수를 종료하고 카운트를 센다
	}
}