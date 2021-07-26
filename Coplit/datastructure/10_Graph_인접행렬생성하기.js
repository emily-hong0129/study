function createMatrix(edges) {

	// 행렬의 크기를 구한다.
	// max 변수를 0으로 할당하고, edges를 전부 순회해 제일 큰 숫자를 max에 할당한다.
	// max보다 크지 않을 경우엔 바꾸지 않는다.
	let max = 0;
	for (let i = 0; i < edges.length; i++) {
		// edges의 한 요소에는 숫자 이외에 방향성도 있으니, 숫자까지만 slice를 하여 비교한다.
		const curMax = Math.max(...edges[i].slice(0, 2));
		curMax > max ? (max = curMax) : null;
	}

  // matrix의 뼈대를 잡는다.
  // max로 구한 최대값에 1을 더하여 array를 만들고(0번째부터 있기 때문입니다) 전부 0으로 채운 뒤
	// map을 사용해 각 요소마다 배열로 바꿔준다. 배열의 크기를 이번에도 최대값에 1을 더한 뒤, 0으로 채운다
	const result = new Array(max + 1).fill(0).map((row) => new Array(max + 1).fill(0));

  // edges를 순회하며 무향인 곳엔 각각의 간선에 1로 바꾸어 주고, 방향이 있는 간선엔 해당 간선에만 1로 바꾸어 준다.
	// 만약, [0, 3, "directed"]가 들어왔다면,
	// 만들어 둔 result의 0 번째 row에 3 번째 col에 1을 추가한다.
	// [ 0, 0, 0, 1 ] => 0번째 버텍스가 갈 수 있는 간선 중, 3 번으로 가는 간선만 갈 수 있다.
	edges.forEach((edge) => {
		const [row, col, direction] = edge;
		if (direction === "undirected") {
			result[col][row] = 1;
		}
		result[row][col] = 1;
	});

  // result를 반환한다.
	return result;
}