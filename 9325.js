/*
  첫째 줄에 테스트 케이스의 개수가 주어진다.
  각 테스트 케이스의 첫 줄엔 자동차의 가격 s가 주어진다. (1 ≤ s ≤ 100 000)
  둘째 줄엔 해빈이가 구매하려고 하는 서로 다른 옵션의 개수 n이 주어진다. (0 ≤ n ≤ 1 000)
  뒤이어 n개의 줄이 입력으로 들어온다.
  각 줄은 q 와 p로 이루어져 있는데 q는 해빈이가 사려고 하는 특정 옵션의 개수이고
  p는 해당 옵션의 가격이다. (1 ≤ q ≤ 100, 1 ≤ p ≤ 10 000)
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
let output = '';

function calc(number) {
  let result = 0;

  result += number
  input.shift();
  for (let i = 0; i < parseInt(input[0]); i++) {
    // input.splice(0, i);
    const value = input[i + 1].split(' ');
    result += parseInt(value[0]) * parseInt(value[1])
  }

  input.splice(0, parseInt(input[0]) + 1);

  return result;
}

for (let i = 0; i < T; i++) {
  output += calc(parseInt(input[0])) + '\n'
}

console.log(output);
