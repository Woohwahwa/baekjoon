/*
  예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
*/

/* 풀이 */
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let output = '';
for (let i = 1; i < input; i++) {
  output += '*'.repeat(i) + '\n'
}
for (let i = 0; i < input; i++) {
  output += '*'.repeat(input - i) + '\n'
}

console.log(output)


