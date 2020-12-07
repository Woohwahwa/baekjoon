/*
  자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const n = require('fs').readFileSync('/dev/stdin').toString()

//::TODO 런타임에러
let x = n;
while (x > 1) {
  x -= 1;
  console.log(x);
}
