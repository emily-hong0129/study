const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.

function calculate(n1, operator, n2) {
  let result = 0;
  // n1과 n2를 operator에 따라 계산하는 함수
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴
  if(operator === '+'){
    result = Number(n1) + Number(n2)
  }else if(operator === '-'){
    result = Number(n1) - Number(n2)
  }else if(operator === '*'){
    result = Number(n1) * Number(n2)
  }else if(operator === '/'){
    result = Number(n1) / Number(n2)
  }
  return String(result);
}

// console.log('firstOperend :',firstOperend.textContent);
// console.log('firstOperend :', typeof firstOperend);

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보 저장, 해당 태그
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴, number 나 operator
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴, (7 , + 등..)

  if (target.matches('button')) {
    // 클릭된 HTML 엘리먼트가 button
    if (action === 'number') {  // 버튼의 클래스가 number
      if(firstOperend.textContent !== '0'){
        secondOperend.textContent = buttonContent;
      }else{
        firstOperend.textContent = buttonContent;
      }

      console.log('숫자 ' + buttonContent + ' 버튼');
    }

    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    if (action === 'clear') {
      firstOperend.textContent = '0';
      operator.textContent = '+';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
      console.log('초기화 버튼');
    }

    if (action === 'calculate') {
      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)

      console.log('계산 버튼');
    }
  }
});