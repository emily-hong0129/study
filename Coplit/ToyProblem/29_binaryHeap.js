// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  // TODO
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  // TODO
  heap.push(item);
  let curIdx = heap.length - 1; // 현재 위치
  let pIdx = getParentIdx(curIdx); // 부모 위치
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) { // 부모의 값이 유효하고 부모의 값보다 자식의 값이 클 때
    swap(curIdx, pIdx, heap); // 부모와 자식값을 바꿈
    curIdx = pIdx; // 현재 위치를 부모의 위치로 바꿈
    pIdx = getParentIdx(curIdx); // 부모의 위치는 다시 자식의 위치의 부모의 위치가 된다
  }
  return heap;

}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
