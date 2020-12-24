/*
  길이가 N인 정수 배열 A와 B가 있다. 다음과 같이 함수 S를 정의하자.
  S = A[0]×B[0] + ... + A[N-1]×B[N-1]
  첫째 줄에 S의 최솟값을 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
const arr = input.map(v => v.split(' ').map(n => parseInt(n)))
let output = 0;
for (let i = 0; i < 2; i++) {
  arr[i].sort((a, b) => a - b)
}

arr[1].reverse();

for (let j = 0; j < T; j++) {
  output += arr[0][j] * arr[1][j]
}
console.log(output);
