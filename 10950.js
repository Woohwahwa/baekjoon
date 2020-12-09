/*
  두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const T = input.shift();
let output = '';

for (let i = 0; i < T; i++) {
  output += input[i].split(' ').reduce((a, b) => parseInt(a) + parseInt(b)) + '\n'
}

console.log(output);
