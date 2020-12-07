/*
  n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
const n = require('fs').readFileSync('/dev/stdin').toString()
console.log((Number(n) * (Number(n) + 1)) / 2)
