/*
  n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const arr = [0, 1];

const fibo = (n) => {
  if (arr[n] === undefined)
    arr[n] = BigInt(fibo(n - 1)) + BigInt(fibo(n - 2));
  return arr[n];
};

console.log(fibo(input).toString());
