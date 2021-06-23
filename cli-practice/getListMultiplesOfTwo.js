const { range } = require('range'); // range 모듈을 불러온다

function getListMultiplesOfTwo(upTo) {
  // TODO
  return range(2, upTo + 2, 2);
}

module.exports = getListMultiplesOfTwo;