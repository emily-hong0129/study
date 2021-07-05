let elInputUsername = document.querySelector('#username')
let elPassword = document.querySelector('#password')
let elPasswordRE = document.querySelector('#password-retype')

// 메세지
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elMismatchPW = document.querySelector('.mismatch-message')

// 아이디 입력창에 글자를 키보드로 입력할 때
// 글자 수가 4개 이상이면
// '사용할 수 있는 아이디입니다' 메세지 출력
elInputUsername.onkeyup = function(){
  // console.log(elInputUsername.value);
  if(isMoreThan4Length(elInputUsername.value)){
    // console.log('4글자보다 크다')
    // 성공 메세지가 보여야함
    elSuccessMessage.classList.remove('hide')
    console.log(typeof elInputUsername.value)

    // 실패 메세지가 가려져야함
    elFailureMessage.classList.add('hide')
  }else{
    // console.log('짧다...')
    // 성공 메세지가 가려져야함
    elSuccessMessage.classList.add('hide')
    
    // 실패 메세지가 보여야함
    elFailureMessage.classList.remove('hide')
  }
}

// 비밀번호
elPasswordRE.onkeyup = function(){
  if(isMatch(elPassword.value, elPasswordRE.value)){  // 같을 때
    // console.log('맞음')
    // 실패 메세지 가림
    elMismatchPW.classList.add('hide')
  }else{  // 다를 때
    // console.log('틀림')
    // 실패 메세지 보임
    elMismatchPW.classList.remove('hide');
  }
}

// 아이디
function isMoreThan4Length(value) {
  return value.length >= 4;
}

// 비밀번호
function isMatch (password1, password2) {
  // 비밀번호, 비밀번호 확인이 같을 때
  if(password1 === password2){
    return true;
  }else{
    return false;
  }
}
