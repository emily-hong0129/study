/*
count: 0     [95, 90, 99, 99, 80, 99]
count: 1  95 [90, 99, 99, 80, 99]
count: 2  95 [99, 99, 80, 99]
=> 나간 사람 수의 배열 [2]

count: 1  99 [99, 80, 99]
count: 2  99 [80, 99]
count: 3  99 [99]
count: 4  99 []
=> 나간 사람 수의 배열 [2, 4]
=> 최대 몇 명? : 4  
*/

function paveBox(boxes) {
  let answer = [];

  // boxes 배열이 0보다 클 때까지 반복
  while(boxes.length > 0){
      let finishIndex = boxes.findIndex(fn => boxes[0] < fn);
      
      if(finishIndex === -1){
          // 만약 찾지 못했다면 answer에 boxes 배열의 길이를 넣은 후, boxes 내부의 요소를 전부 삭제
          answer.push(boxes.length);
          boxes.splice(0, boxes.length);

      } else {
          // 만약 찾았다면, 해당 인덱스를 answer에 넣고, boxes에서 그만큼 제외
          answer.push(finishIndex);
          boxes.splice(0, finishIndex);
      }
  }

  // 결과물을 반환
  return Math.max(...answer);
}