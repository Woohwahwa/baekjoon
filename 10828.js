/*
  push X: 정수 X를 스택에 넣는 연산이다.
  pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 스택에 들어있는 정수의 개수를 출력한다.
  empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
  top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
input.shift();

const stack = [];
let output = '';

input.forEach(input => {
  if (input.includes('push')) {
    stack.push(input.split(' ')[1]);
  }
  if (input === 'pop') {
    output += stack.length ? stack.pop() + '\n' : '-1' + '\n';
  }
  if (input === 'size') {
    output += stack.length + '\n';
  }
  if (input === 'empty') {
    output += stack.length ? 0 + '\n' : 1 + '\n';
  }
  if (input === 'top') {
    output += stack.length ? stack[stack.length - 1] + '\n' : '-1' + '\n'
  }
})

console.log(output);
