const range = require('range'); // range 모듈을 불러옵니다

function getListMultiplesOfTwo(upTo) {
  // TODO
  let count =' ';
    let a;
    let output = [];
        if (upTo<=1) {
            count = count;
        }
        else if(upTo === 2) {
            count = '2';
        }
        else {
            count = '2';
            for(let i = 4; i <= upTo; i = i + 2) {
                count = count + ',' + i;    
            }
        }
        a = count.split(',').map(parseFloat);
        return a;
}

module.exports = getListMultiplesOfTwo;
