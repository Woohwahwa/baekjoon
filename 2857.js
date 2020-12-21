/*
  첫째 줄에 FBI 요원을 출력한다. 이때, 해당하는 요원이 몇 번째 입력인지를 공백으로 구분하여 출력해야 하며, 오름차순으로 출력해야 한다. 만약 FBI 요원이 없다면 "HE GOT AWAY!"를 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = ''

for (let i = 0; i < input.length; i++) {
  if (input[i].includes('FBI')) output += i + 1 + ' ';
}

console.log(output.length ? output : 'HE GOT AWAY!');
