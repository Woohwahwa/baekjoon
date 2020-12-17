/*
  주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();

const numberArr = input[0].split(' ');
const resultArr = [];

for (let i = 1; i < T; i++) {
  const number = parseInt(numberArr[i]);
  // 2와 3인 경우 true 처리
  if (number > 1 && number < 4) resultArr.push(true)

  // 소수 계산
  if (number <= 1000) {
    const result = setNumber(number);
    if (result) resultArr.push(setNumber(number))
  } else {
    return false;
  }
}

function setNumber(n) {
  let result = false;
  // 제곱근을 계산한 후 다시 루프를 돌린다.
  for (let i = 2; i * i < n; i++) {
    for (let j = i * i; j <= n; j += i) {
      if (j === n) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  }

  return result
}

console.log(resultArr.length);
