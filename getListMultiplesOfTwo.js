const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  const numbers = range.range(2, upTo + 1, 2);
  return numbers;
}

module.exports = getListMultiplesOfTwo;
