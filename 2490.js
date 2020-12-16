/*
  첫째 줄부터 셋째 줄까지 한 줄에 하나씩 결과를  도는 A, 개는 B, 걸은 C, 윷은 D, 모는 E로 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = ''

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(' ');

  // 1의 개수 필터링
  const length = arr.filter(v => v === '1').length;

  // 도개걸윷모 체크
  output += getStatus(length) + '\n';
}

console.log(output);

function getStatus(number) {
  switch (number) {
    case 0:
      return 'D'
    case 1:
      return 'A'
    case 2:
      return 'B'
    case 3:
      return 'C'
    default:
      return 'E'
  }
}
