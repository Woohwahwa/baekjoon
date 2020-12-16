/*
  첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다.
  둘째 줄에 세준이의 현재 성적이 주어진다.
  이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

let output = [];
output = input[0].split(' ').map(v => parseInt(v));
let sum = 0;

const max = Math.max(...output);
for (let i = 0; i < output.length; i++) {
  sum += newScore(output[i])
}

console.log(sum / output.length);

function newScore(score) {
  return score / max * 100;
}
