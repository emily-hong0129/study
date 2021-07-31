let dfs = function (node) {
  // 노드 생성
  // 반복하면서value에 node의 children 저장
  let result = [];
  result.push(node.value);  //node의 value를 배열에 넣음
  for(let i = 0; i< node.children.length; i++){
    result = result.concat(dfs(node.children[i]))
  }
  // 배열을 순회하면서 각 값들을 인자로 하여 dfs를 재귀호출 하고, dfs 재귀호출 값을 result 배열의 요소로 concat
  return result
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

// membership check(중복 확인)를 따로 하지 않는다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

