/*
  출력은 입력받은 카이사르 단어를 원래 단어로 고친 걸 출력하시면 됩니다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString();
const arr = [];
let output = '';

for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
  arr.push(String.fromCharCode(i));
}
input.split('').forEach(v => {
  const index = arr.indexOf(v);
  output += arr[(index - 3) % 26]
})

console.log(output);
