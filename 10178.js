/*
  가장 첫 번째 줄에는 테스트 케이스의 수가 입력되고,
  각 테스트 케이스마다 사탕의 개수 c와 형제의 수 v가 차례대로 입력된다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
let output = '';

for (let i = 0; i < T; i++) {
  const candy = input[i].split(' ')
  const father = candy[0] % candy[1]
  const child = (parseInt(candy[0]) - father) / parseInt(candy[1]);
  output += `You get ${child} piece(s) and your dad gets ${father} piece(s).\n`
}

console.log(output);
