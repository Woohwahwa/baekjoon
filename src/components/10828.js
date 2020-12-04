/*
  push X: 정수 X를 스택에 넣는 연산이다.
  pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 스택에 들어있는 정수의 개수를 출력한다.
  empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
  top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

/* 풀이 */
const stack = [];
const sample = [
  'push 1',
  'push 2',
  'top',
  'size',
  'empty',
  'pop',
  'pop',
  'pop',
  'size',
  'empty',
  'pop',
  'push 3',
  'empty',
  'top'
]

function get10828() {
  sample.forEach(input => {
    if (input.includes('push')) {
      stack.push(input.split(' ')[1]);
    }
    if (input === 'pop') {
      console.log('pop: ', stack.length ? stack.pop() : '-1');
    }
    if (input === 'size') {
      console.log('size: ', stack.length);
    }
    if (input === 'empty') {
      console.log('empty: ', stack.length ? 0 : 1);
    }
    if (input === 'top') {
      console.log('top: ', stack.length ? stack[stack.length - 1] : '-1');
    }
  })
}

export default get10828;
