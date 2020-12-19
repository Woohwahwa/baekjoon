/*
  push_front X: 정수 X를 덱의 앞에 넣는다.
  push_back X: 정수 X를 덱의 뒤에 넣는다.
  pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 덱에 들어있는 정수의 개수를 출력한다.
  empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
  front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const deque = [];
let output = '';

input.forEach(input => {
  if (input.includes('push_front')) {
    deque.splice(0, 0, input.split(' ')[1]);
  }
  if (input.includes('push_back')) {
    deque.push(input.split(' ')[1]);
  }
  if (input === 'pop_front') {
    output += deque.length ? deque.shift() + '\n' : '-1' + '\n';
  }
  if (input === 'pop_back') {
    output += deque.length ? deque.pop() + '\n' : '-1' + '\n';
  }
  if (input === 'size') {
    output += deque.length + '\n';
  }
  if (input === 'empty') {
    output += deque.length ? 0 + '\n' : 1 + '\n'
  }
  if (input === 'front') {
    output += deque.length ? deque[0] + '\n' : '-1' + '\n'
  }
  if (input === 'back') {
    output += deque.length ? deque[deque.length - 1] + '\n' : '-1' + '\n'
  }
})

console.log(output);
