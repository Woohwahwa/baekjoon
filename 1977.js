/*
  M과 N이 주어질 때 M이상 N이하의 자연수 중 완전제곱수인 것을 모두 골라 그 합을 구하고
  그 중 최솟값을 찾는 프로그램을 작성하시오.
  예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중
  완전제곱수는 64,  81,  100 이렇게 총 3개가 있으므로 그 합은 245가 되고 이 중 최솟값은 64가 된다.
*/

/* 풀이 */
const n = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const startNum = parseInt(n[0]);
const endNum = parseInt(n[1]);

const firstSquare = Math.ceil(Math.sqrt(startNum));
const endSquare = Math.floor(Math.sqrt(endNum));

let total = 0;
for (let x = firstSquare; x < endSquare + 1; x++) {
  total += x * x;
}

if (total === 0) {
  console.log("-1")
} else {
  console.log(total);
  console.log(firstSquare * firstSquare);
}
