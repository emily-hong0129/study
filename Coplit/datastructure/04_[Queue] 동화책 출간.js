function improveBook(books, speeds) {
    let answer = [];
    let workDay = [];
    let quotient = 0;
    let remainder = 0;

    // books 배열을 순회합니다.
    for(let i = 0; i < books.length; i++) {
        // 각 담당자마다 책이 발행되는 시간을 계산합니다.
        quotient = Math.floor((100 - books[i]) / speeds[i]);
        remainder = (100 - books[i]) % speeds[i];
        
        // 만약 나머지(remainder)가 0보다 크면 몫(quotient)에 1을 더합니다.
        if(remainder > 0){
            quotient = quotient + 1;
        }
        
        // workDay 배열에 차례대로 담습니다.
        // workDay 배열은 books배열에서 책이 발행되는 시간만을 추출해 넣은 배열입니다.
        workDay.push(quotient);
    }

    // workDay 배열이 0보다 클 때까지 반복합니다.
    while(workDay.length > 0){

        // workDay에서 0번째 인덱스보다 큰 크기의 인덱스를 찾아 deployIndex에 할당합니다.
        let deployIndex = workDay.findIndex(fn => workDay[0] < fn);
        
        if(deployIndex === -1){
            // 만약 찾지 못했다면 answer에 workDay 배열의 길이를 넣은 후, workDay 내부의 요소를 전부 삭제합니다.
            answer.push(workDay.length);
            workDay.splice(0, workDay.length);

        } else {
            // 만약 찾았다면, 해당 인덱스를 answer에 넣고, workDay에서 그만큼 제외합니다.
            answer.push(deployIndex);
            workDay.splice(0, deployIndex);
        }
    }

    // 결과물을 반환합니다.
    return answer;
}