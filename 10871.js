/*
  정수 N개로 이루어진 수열 A와 정수 X가 주어진다.
  이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

  X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
const T = input.split(' ')[1];
const arr = input.split('\n')[1].split(' ');
let output = '';

arr.forEach(value => {
  if (parseInt(value) < parseInt(T)) output += value + ' '
})

console.log(output);
