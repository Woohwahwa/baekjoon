/*
  M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.
  단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = input.shift();
const m = input[0];

function getNumber(n, m) {
  const result = [];

  // 처음에 m과 n사이의 수를 넣어놓기
  for (let i = 2; i <= n; i++) {
    if (i > m) result[i] = i;
  }

  // 제곱근을 계산한다
  for (let i = 2; i * i <= n; i++) {
    // 제곱근을 가지고 배수를 계산한다
    for (let j = i * i; j <= n; j += i) {
      // m보다 큰 수의 중 배수를 가지고 있는 경우 false를 준다
      if (j > m) result[j] = false
    }
  }

  // false를 받지 않은 수들은 소수이다
  const primeNumber = result.filter(number => number > 0);
  console.log(Math.min(...primeNumber));

  // 수가 있는 경우 모두 더해주고, 결과값이 없는 경우는 -1을 리턴한다
  return primeNumber.length ? primeNumber.reduce((a, b) => a + b) : -1;

}

console.log(getNumber(parseInt(m), parseInt(n)));
