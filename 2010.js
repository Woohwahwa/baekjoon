/*
  첫째 줄에 멀티탭의 개수 N이 주어진다.
  (1<=N<=500,000) 이어서 둘째 줄부터 N개의 줄에 걸쳐
  각 멀티탭이 몇 개의 플러그를 꽂을 수 있도록 되어 있는지를 나타내는 자연수가 주어진다.
  이 자연수는 1,000을 넘지 않는다.
*/

/* 풀이 */
const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n').map((text) => Number(text));

console.log(arr.reduce((pre, cur) => pre + cur, 0) - n + 1);
