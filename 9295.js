/*
  첫째 줄에 테스트 케이스의 개수 T가 주어진다.
  각 테스트 케이스는 한 줄로 이루어져 있으며, 주사위를 두 번 던져 나온 두 수를 입력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
let output = '';

for (let i = 0; i < T; i++) {
  const value = input[i].split(' ')
  output += `Case ${i + 1}: ${parseInt(value[0]) + parseInt(value[1])}\n`
}

console.log(output);
