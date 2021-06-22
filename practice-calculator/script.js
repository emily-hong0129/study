const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있다.

function calculate(n1, operator, n2) {
  let result = 0;
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  // n1과 n2를 operator에 따라 계산하는 함수
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴
  if(operator === '+'){
    result = n1 + n2;
  }else if(operator === '-'){
    result = n1 - n2;
  }else if(operator === '*'){
    result = n1 * n2;
  }else if(operator === '/'){
    result = n1 / n2;
  }
  return String(result);
}

// console.log('firstOperend :',firstOperend.textContent);
// console.log('firstOperend :', typeof firstOperend);
/*
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
*/

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보 저장
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옴
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옴
  const buttonContainerArray = buttons.children;

  if (target.matches('button')) {
    for (let i = 0; i < buttonContainerArray.length; i++) {
      const childrenArray = buttonContainerArray[i].children;
      for (let j = 0; j < childrenArray.length; j++) {
        childrenArray[j].classList.remove('isPressed');
      }
    }

    if (action === 'number') {
      if (display.textContent === '0' || previousKey === 'operator' || previousKey === 'calculate') {
        display.textContent = buttonContent;
      } else {
        display.textContent = display.textContent + buttonContent;
      }
      previousKey = 'number';
    }

    if (action === 'operator') {
      target.classList.add('isPressed');
      if (firstNum && operatorForAdvanced && previousKey !== 'operator' && previousKey !== 'calculate') {
        display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
      }
      firstNum = display.textContent;
      operatorForAdvanced = buttonContent;
      previousKey = 'operator';
    }

    if (action === 'decimal') {
      if (!display.textContent.includes('.') && previousKey !== 'operator') {
        display.textContent = display.textContent + '.';
      } else if (previousKey === 'operator') {
        display.textContent = '0.';
      }
      previousKey = 'decimal';
    }

    if (action === 'clear') {
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      previousKey = 'clear';
      display.textContent = '0';
    }

    if (action === 'calculate') {
      if (firstNum) {
        if (previousKey === 'calculate') {
          display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum);
        } else {
          previousNum = display.textContent;
          display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
        }
      }
      previousKey = 'calculate';
    }
  }
});