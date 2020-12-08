/*
  자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString()
const num = parseInt(input);

let output = "";

for (let i = num; i > 0; i--) {
  output += i + "\n";
}

console.log(output);

