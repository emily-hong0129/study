function findMatryoshka(matryoshka, size) {
  /*
  { size: 10, matryoshka: { size: 3, matryoshka: null }}      , 3 => true
  */

    // key가 matryoshka 인 value를 찾아서 입력받은 size와 비교해야함
    // value === size => true
    // value === size => false 이면 객체안의 matryoshka인 key의 value와 비교 (함수호출하는 부분?)

  if (size === matryoshka.size) return true;
  if (matryoshka.matryoshka === null) return false;
  if (size < matryoshka.size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  }
  // base case
  return false;
}
