/*
  첫째 줄에는 별 2×N-1개, 둘째 줄에는 별 2×N-3개, ..., N번째 줄에는 별 1개를 찍는 문제
  별은 가운데를 기준으로 대칭이어야 한다.
*/

/* 풀이 */
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let output = '';
for (let i = 0; i < input; i++) {
  output += ' '.repeat(i) + '*'.repeat((input - i) * 2 - 1) + '\n'
}

console.log(output)


