/*
  push X: 정수 X를 큐에 넣는 연산이다.
  pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 큐에 들어있는 정수의 개수를 출력한다.
  empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
  front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const queue = [];
let output = '';

input.forEach(input => {
  if (input.includes('push')) {
    queue.push(input.split(' ')[1]);
  }
  if (input === 'pop') {
    output += queue.length ? queue.shift() + '\n' : '-1' + '\n'
  }
  if (input === 'size') {
    output += queue.length + '\n';
  }
  if (input === 'empty') {
    output += queue.length ? 0 + '\n' : 1 + '\n'
  }
  if (input === 'front') {
    output += queue.length ? queue[0] + '\n' : '-1' + '\n'
  }
  if (input === 'back') {
    output += queue.length ? queue[queue.length - 1] + '\n' : '-1' + '\n'
  }
})

console.log(output);
