    function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    // queue에 bufferSize만큼 0을 삽입한다
    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }

    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당한다
    let currentDocument = documents.shift();

    // queue의 제일 앞에 currnetDocument를 삽입하고, 제일 마지막 요소를 없앤다
    queue.unshift(currentDocument);
    queue.pop();

    // totalBufferVolume(총 용량)에 currnetDocument의 크기를 합친다
    totalBufferVolume = totalBufferVolume + currentDocument;

    // 1 초가 지났다는 것을 count를 증가하며 나타낸다
    count++;

    // totalBufferVolume(총 용량)가 0이 될 때까지 반복한다
    while(totalBufferVolume){
        
        // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거한다
        totalBufferVolume = totalBufferVolume - queue.pop();
        
        // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당한다
        currentDocument = documents.shift();
        
        // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
        if(currentDocument + totalBufferVolume <= capacities){

            // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가한다
            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

            // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
        }else{

            // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입한다
            documents.unshift(currentDocument);
            queue.unshift(0);
        }

        // 한 번 반복할 때마다 count(초)를 올린다
        count++;
    }

    // count를 반환
    return count;
}