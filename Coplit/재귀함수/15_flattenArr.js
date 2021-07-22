function flatten15(arr) {
  /*
   * 1.재귀 함수의 입력값과 출력값 정의하기
   *  - flatternArr : [num or []] => []
   * 2.문제를 쪼개고 경우의 수를 나누기
   *  - 더 이상 쪼갤 수 없는 경우 : 빈 배열을 입력받은 경우 -> 빈 배열 리턴 
   *  - 그렇지 않은 경우 :  
   * 3.단순한 문제 해결하기 (base case)
   *  - [[], ?, [], [[]], []]
   * 4.복잡한 문제 해결하기
   * 5.코드 구현하기
   *  
   * 
   *  주어진 문제가 (구조는 비슷하고) 더 작은 문제로 나뉘어 질 수 있는 경우
      중첩된 루프가 많거나 중첩의 정도(number of loops)를 미리 알 수 없는 경우

      배열이 아닌 숫자를 만났을 경우 -> result.push(arr[i])
   */
  
  // base case
  if (arr.length === 0) {
    return [];
  }

  // recursive case
  const head = arr[0];
  const tail = arr.slice(1);
  if (Array.isArray(head)) {
    return flatten15([...head, ...tail]);
  } else {
    return [head].concat(flatten15(tail));
  }
}