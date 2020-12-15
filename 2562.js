/*
  두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = [];

output = input.map(number => parseInt(number));
output.sort((a, b) => a - b);
const max = output[output.length - 1];
const count = parseInt(input.findIndex(number => parseInt(number) === max)) + 1;
console.log(max + '\n' + count);
