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
const T = [
  'push_back 1',
  'push_front 2',
  'front',
  'back',
  'size',
  'empty',
  'pop_front',
  'pop_back',
  'pop_front',
  'size',
  'empty',
  'pop_back',
  'push_front 3',
  'empty',
  'front'
];
const deque = [];

function get10866() {
  T.forEach(input => {
    if (input.includes('push_front')) {
      deque.splice(0, 0, input.split(' ')[1]);
    }
    if (input.includes('push_back')) {
      deque.push(input.split(' ')[1]);
    }
    if (input === 'pop_front') {
      console.log('pop__front: ', deque.length ? deque.shift() : '-1');
    }
    if (input === 'pop_back') {
      console.log('pop__back: ', deque.length ? deque.pop() : '-1');
    }
    if (input === 'size') {
      console.log('size: ', deque.length);
    }
    if (input === 'empty') {
      console.log('empty: ', deque.length ? 0 : 1);
    }
    if (input === 'front') {
      console.log('front: ', deque.length ? deque[0] : '-1');
    }
    if (input === 'back') {
      console.log('back: ', deque.length ? deque[deque.length - 1] : '-1');
    }
  })
}

export default get10866;
