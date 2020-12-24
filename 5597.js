/*
  교수님이 내준 특별과제를 28명이 제출했는데,
  그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하세요.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => parseInt(v));
input.sort((a, b) => a - b);
let output = [];

for (let i = 1; i < 30; i++) {
  if (!input.includes(i)) output.push(i);
  if (output.length === 2) break;
}

console.log(output.join('\n'));
