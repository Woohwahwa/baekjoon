/*
  여러분은 입력에 나열된 사람의 덩치 등수를 구해서 그 순서대로 첫 줄에 출력해야 한다. 단, 각 덩치 등수는 공백문자로 분리되어야 한다.
*/

/* 풀이 */
const [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(v => v.split(' ').map(n => Number(n)))
let output = [];

for (let i = 0; i < T; i++) {
  let count = 0;

  for (let j = 0; j < T; j++) {
    if (i !== j) {
      if (input[i][0] < input[j][0] && input[i][1] < input[j][1]) {
        count ++;
      }
    }
  }

  output.push(count + 1);
}

console.log(output.join(' '));
