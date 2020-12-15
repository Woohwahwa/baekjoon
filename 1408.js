/*
  첫째 줄에 도현이가 임무를 수행하는데 남은 시간을 문제에서 주어지는 시간의 형태 (XX:XX:XX)에 맞춰 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const start = input[0].split(":");
const end = input[1].split(":");

end[0] -= parseInt(start[0]);
end[1] -= parseInt(start[1]);
end[2] -= parseInt(start[2]);

if (end[2] < 0) end[2] += 60; end[1]--;
if (end[1] < 0) end[1] += 60; end[0]--;
if (end[0] === -1) end[0] = 0;

function formatTime(t) {
  return t < 10 ? '0' + t : t;
}

console.log(`${formatTime(end[0])}:${formatTime(end[1])}:${formatTime(end[2])}`);

