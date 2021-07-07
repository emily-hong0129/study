let elInputUsername = document.querySelector('#username')
let elPassword = document.querySelector('#password')
let elPasswordRE = document.querySelector('#password-retype')
let elPhoneNum = document.querySelector('#phoneNum')
let elBtnJoin = document.querySelector('#join');  // 회원가입 버튼

// 메세지
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elPwMessage = document.querySelector('.failure-password')
let mismatchPW = document.querySelector('.mismatch-message')
let elPhoneMessage = document.querySelector('.confirm-phoneNum')

// 아이디 입력창에 글자를 키보드로 입력할 때
// 글자 수가 4개 이상이면
// '사용할 수 있는 아이디입니다' 메세지 출력
elInputUsername.onkeyup = function(){
  // console.log(elInputUsername.value);
  if(isMoreThan4Length(elInputUsername.value)){
    // console.log('4글자보다 크네')
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
// PW 형식
elPwMessage.classList.remove('hide');
elPassword.onkeyup = function(){
  if(strongPassword(elPassword.value)){
    // 형식 맞을 때
    elPwMessage.classList.add('hide')
  }else{
    elPwMessage.classList.remove('hide');
  }
}

// mismatch PW
elPasswordRE.onkeyup = function(){
  if(isMatch(elPassword.value, elPasswordRE.value)){  // 같을 때
    // console.log('맞음')
    // 실패 메세지 가림
    mismatchPW.classList.add('hide')
  }else{  // 다를 때
    // console.log('틀림')
    // 실패 메세지 보임
    mismatchPW.classList.remove('hide');
  }
}

// 전화번호
elPhoneNum.onkeyup = function(){
  if(checkPhoneNum(elPhoneNum.value) === false){
    console.log('전화번호 형식을 확인해주세요');
    elPhoneMessage.classList.remove('hide');
  }else{
    console.log('전화번호 형식 맞음');
    elPhoneMessage.classList.add('hide');
  }
}

// 아이디
function isMoreThan4Length(value) {
  return value.length >= 4; // true,false로 알 수 있음
}

// 비밀번호
// 1. 비밀번호 형식
function strongPassword(password){
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)  // true/false
}

// 2. check PW
function isMatch (password1, password2) {
  // 비밀번호, 비밀번호 확인이 같을 때
  if(password1 === password2){
    return true;
  }else{
    return false;
  }
}

// 전화번호 확인
function checkPhoneNum (value){
  return /^\d{3}-\d{3,4}-\d{4}$/.test(value); // true/false
}


// 회원가입 버튼
function signupClick(){
  console.log('회원가입 버튼 클릭!');
  // 
}

// 회원가입 버튼 연결
elBtnJoin.onclick = signupClick;
