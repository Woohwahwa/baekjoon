/*
  예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
const value = '*' + ' ';
let output = '';
for (let i = 1; i <= input; i++) {
  if (i % 2 === 0) output += ' ';
  output += value.repeat(input) + '\n'
}

console.log(output);
