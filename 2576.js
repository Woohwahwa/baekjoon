/*
  7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최솟값을 찾는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = [];
let sum = 0;

for (let i = 0; i < 7; i++) {
  if (input[i] % 2 === 1) output.push(parseInt(input[i]))
}

if (output.length) sum = output.reduce((a, b) => a + b);
const min = Math.min(...output);

console.log(output.length ? sum + '\n' + min : -1);
