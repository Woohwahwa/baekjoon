/*
  1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때,
  0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
//::TODO 런타임 에러
const input = require('fs').readFileSync('/dev/stdin').toString().map(Number);
const T = input.shift();

function fibo(n) {
  const arr = [1, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

for (let i = 0; i < T; i++) {
  const n = input[i];
  if (n === 0) {
    console.log(`1 0`);
  } else if (n === 1) {
    console.log(`0 1`);
  } else {
    const result = fibo(n);
    console.log(`${result[n - 2]} ${result[n - 1]}`);
  }
}
