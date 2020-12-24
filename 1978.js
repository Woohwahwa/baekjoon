/*
  주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();

const numberArr = input[0].split(' ');
let output = 0;

for (let i = 1; i < T; i++) {
  const number = parseInt(numberArr[i]);
  if (isPrime(number)) output += 1;
}

console.log(output);

function isPrime(num) {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
