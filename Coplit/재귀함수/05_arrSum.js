function sum05(arr) {
  // 빈배열이 되면 종료
  if (arr.length === 0) {
    return 0;
  }

  // [1, 2, 3, 4]
  // head: 1   
  // tail: 2, 3, 4

  // const [head, ...tail] = arr;
  const head = arr[0];
  const tail = arr.slice(1);
  return head + sum05(tail);
}
