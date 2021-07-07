function firstReverse(str) {
  //문자열 배열로 변환
  //reverse 사용
  //배열을 문자열로 변환
  let newArr = str.split('').reverse().join('')
  return newArr
}