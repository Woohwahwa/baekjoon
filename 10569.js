/*
  첫 번째 줄에 1 이상 100 이하의 자연수 T가 주어진다.
  다음 T개의 줄에 4 이상 100 이하의 자연수 V와 E가 공백을 사이에 두고 주어진다.
  V와 E는 각각 꼭짓점의 개수와 모서리의 개수이다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
let output = '';

for (let i = 0; i < T; i++) {
  const value = input[i].split(' ')
  output += parseInt(value[1]) - parseInt(value[0]) + 2 + '\n'
}

console.log(output);
