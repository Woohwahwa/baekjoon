/*
  0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
let output = 1;

for (let i = 1; i <= input; i++) {
  output = output * i;
}

console.log(output);
