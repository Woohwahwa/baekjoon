/*
  첫째 줄에는 별 N개, 둘째 줄에는 별 N-1개, ..., N번째 줄에는 별 1개를 찍는 문제
*/

/* 풀이 */
const n = require('fs').readFileSync('/dev/stdin').toString()
for (let i = n; i > 0; i--) {
  console.log(' '.repeat(n - i) + '*'.repeat(i))
}
