/*
  두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const T = input.shift();
let output = [];

for (let i = 0; i <= 6; i++) {
  if (T % i === 0) output.push(i)
}

const result = output[input[0] - 1];

console.log(output.length < result ? 0 : result);
