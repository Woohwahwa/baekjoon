/*
  두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[1]);
let resultGCD = 0;
let resultLCM;

const minN = Math.min(n, m);
const maxN = Math.max(n, m);

function gcd(a, b) {
  return ((a % b) === 0 ? b : gcd(b, (a % b)))
}

function lcm(a, b) {
  return a * b / resultGCD;
}

resultGCD = gcd(maxN, minN);
resultLCM = lcm(maxN, minN);

console.log(resultGCD + '\n' + resultLCM);
