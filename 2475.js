/*
  검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지이다.
  예를 들어 고유번호의 처음 5자리의 숫자들이 04256이면,
  각 숫자를 제곱한 수들의 합 0+16+4+25+36 = 81 을 10으로 나눈 나머지인 1이 검증수이다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const arr = input.map(number => Math.pow(parseInt(number), 2));
console.log(arr.reduce((a, b) => a + b) % 10);
