/*
  1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때,
  0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
//::TODO 첫째 줄에 테스트 케이스의 개수 T가 주어짐
const n = require('fs').readFileSync('/dev/stdin').toString()
if (n <= 0) {
  console.log('1 0');
} else if (n <= 1) {
  console.log('0 1');
} else {
  console.log('1 2');
}
