/*
  각 역에서 내린 사람 수와 탄 사람 수가 빈칸을 사이에 두고 첫째 줄부터 넷째 줄까지
  역 순서대로 한 줄에 하나씩 주어진다.

  첫째 줄에 최대 사람 수를 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let sum = 0;
let output = [];

for (let i = 0; i < input.length; i++) {
  const value = input[i].split(' ');
  if (sum > parseInt(value[0]) - parseInt(value[1])) {
    sum -= parseInt(value[0])
    sum += parseInt(value[1])
    output.push(sum);
  }
}

console.log(Math.max(...output));
