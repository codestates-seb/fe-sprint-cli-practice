const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO

 const num = range.range(2, upTo + 1, 2);
 return num;
}

module.exports = getListMultiplesOfTwo;
