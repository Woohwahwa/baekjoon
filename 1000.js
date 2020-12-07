/*
  두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const lst = require('fs').readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(lst[0]) + Number(lst[1]));
