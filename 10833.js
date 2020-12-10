/*
  첫 번째 줄에는 학교의 수를 나타내는 정수 N (1 ≤ N ≤ 100)이 주어진다.
  다음 N 개의 줄에 각 학교의 학생 수와 배정된 사과 개수를 나타내는 두 개의 정수가 주어진다.
  학생 수와 사과 개수는 모두 1이상 100이하이다.

  남은 사과의 총 개수를 나타내는 정수를 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();

let output = 0;

for (let i = 0; i < T; i++) {
  const number = input[i].split(' ');
  output += parseInt(number[1]) % parseInt(number[0]);
}

console.log(output);


