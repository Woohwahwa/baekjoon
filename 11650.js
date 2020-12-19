/*
  2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로,
  x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let output = arr.map(v => v.split(' ').map(str => parseInt(str)));
let result = '';
output
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach(number => {
  result += `${number[0]} ${number[1]}\n`
})

console.log(result);
