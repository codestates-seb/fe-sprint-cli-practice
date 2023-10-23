const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  let result = range.range(2, upTo + 1, 2);
  return result;
}

module.exports = getListMultiplesOfTwo;
