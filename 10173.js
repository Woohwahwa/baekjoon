/*
  영어 문장속 숨어있는 니모(Nemo)를 찾아보자. 니모를 찾는데 있어서 대소문자는 중요하지 않다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
let output = ''

const arr = input.split('EOI')[0].split('\n');

for (let i = 0; i < arr.length - 1; i++) {
  const br = i === arr.length - 2 ? '' : '\n';
  output += arr[i].toLowerCase().includes('nemo') ? 'Found' + br : 'Missing' + br;
}

console.log(output);
