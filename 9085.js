/*
  10보다 작거나 같은 자연수 N개를 주면 합을 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

let output = '';

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 1) {
    const arr = input[i].split(' ');
    output += arr.reduce((a, b) => parseInt(a) + parseInt(b)) + '\n'
  }
}

console.log(output);
