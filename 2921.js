/*
  첫째 줄에 테스트 케이스의 개수 T가 주어진다.
  각 테스트 케이스는 한 줄로 이루어져 있으며, 주사위를 두 번 던져 나온 두 수를 입력한다.
*/

/* 풀이 */
const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

console.log((input * (input + 1) * (input + 2)) / 2);
