/*
  첫째 줄에 도현이가 임무를 수행하는데 남은 시간을 문제에서 주어지는 시간의 형태 (XX:XX:XX)에 맞춰 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const start = input[0].split(":");
const end = input[1].split(":");

const startTime = calcTime(start[0], start[1], start[2]);
const endTime = calcTime(end[0], end[1], end[2]);

function calcTime(h, m, s) {
  h = parseInt(h);
  m = parseInt(m);
  s = parseInt(s);
  return h * 3600 + m * 60 + s;
}

let sec = (endTime - startTime) % 60;
let min = (endTime - startTime - sec) / 60 % 60;
let hour = (endTime - startTime - sec - min * 60) / 60 / 60;

function formatTime(t) {
  return t < 10 ? '0' + t : t;
}

console.log(`${formatTime(hour)}:${formatTime(min)}:${formatTime(sec)}`);
