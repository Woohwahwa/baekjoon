/*
  예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
*/

/* 풀이 */
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let output = '';
for (let i = 1; i < input; i++) {
  output += ' '.repeat(input - i) + '*'.repeat(i * 2 - 1) + '\n'
}
for (let i = 0; i < input; i++) {
  output += ' '.repeat(i) + '*'.repeat((input - i) * 2 - 1) + '\n'
}

console.log(output)


