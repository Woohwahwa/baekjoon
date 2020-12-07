/*
  두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const lst = require('fs').readFileSync('/dev/stdin').toString().split(' ');

if (lst[0] > 0 && lst[1] < 10) {
  console.log(lst[0] - lst[1]);
} else {
  return false;
}
