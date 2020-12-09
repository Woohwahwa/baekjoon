/*
 첫째 줄에 10권의 총 가격이 주어진다.
 둘째 줄부터 9개 줄에는 가격을 읽을 수 있는 책 9권의 가격이 주어진다.
 책의 가격은 10000이하이다.
*/

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input.shift());

for (let i = 0; i < 9; i++) {
  T -= parseInt(input[i]);
}

console.log(T);
