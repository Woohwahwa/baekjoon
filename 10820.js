/*
  첫째 줄부터 N번째 줄까지 각각의 문자열에 대해서 소문자, 대문자, 숫자, 공백의 개수를 공백으로 구분해 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
let output = '';

for (let i = 0; i < input.length; i++) {
  const br = i === input.length - 1 ? '' : '\n';
  output += getLowerCase(input[i]) + ' ' + getUpperCase(input[i]) + ' ' + getNumberCase(input[i]) + ' ' + getSpaceCount(input[i]) + br;
}

console.log(output);

function getLowerCase(str) {
  return str.length - str.replace(/[a-z]/g, '').length;
}

function getUpperCase(str) {
  return str.length - str.replace(/[A-Z]/g, '').length;
}

function getNumberCase(str) {
  return str.length - str.replace(/[0-9]/g, '').length;
}

function getSpaceCount(str) {
  return str.split(' ').length - 1
}
