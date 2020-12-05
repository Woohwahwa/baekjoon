/*
  push X: 정수 X를 큐에 넣는 연산이다.
  pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  size: 큐에 들어있는 정수의 개수를 출력한다.
  empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
  front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

/* 풀이 */
const sample = [
  'push 1',
  'push 2',
  'front',
  'back',
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
  'front'
];
const queue = [];

function get10845() {
  sample.forEach(input => {
    if (input.includes('push')) {
      queue.push(input.split(' ')[1]);
    }
    if (input === 'pop') {
      console.log('pop: ', queue.length ? queue.shift() : '-1');
    }
    if (input === 'size') {
      console.log('size: ', queue.length);
    }
    if (input === 'empty') {
      console.log('empty: ', queue.length ? 0 : 1);
    }
    if (input === 'front') {
      console.log('top: ', queue.length ? queue[0] : '-1');
    }
    if (input === 'back') {
      console.log('top: ', queue.length ? queue[queue.length - 1] : '-1');
    }
  })
}

export default get10845;
