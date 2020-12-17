/*
  두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = '';

for (let i = 0; i < input.length; i++) {
  const value = input[i].split(' ');
  output += Number(value[0]) + Number(value[1]) + '\n';
}

console.log(output);
