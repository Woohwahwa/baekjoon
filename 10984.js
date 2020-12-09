/*
  게으른 근우는 열심히 놀다가 문득, 자신의 학점 평균이 얼마일지 궁금해졌다.
  학사시스템도 들어가기 귀찮아하는 근우를 위해 구해주도록 하자.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = input.shift();
let output = '';

function calc(count, range) {
  let sum = 0;
  let avr = [];
  const arr = input.splice(1, range);
  for (let j = 0; j < arr.length; j++) {
    const number = arr[j].split(' ');
    if (isNaN(number)) {
      sum += parseInt(number[0])
      avr.push({ sum: parseFloat(number[0]), avr: parseFloat(number[1])})
    }
  }
  input.shift();
  return {sum, avr}
}

function calcGPA(number, sum) {
  return number.map(n => n.sum / sum * n.avr)
}

for (let i = 0; i < T; i++) {
  const result = calc(i, parseInt(input[i]));
  output += `${result.sum} ${calcGPA(result.avr, result.sum).reduce((a, b) => a + b).toFixed(1)}\n`
}

console.log(output);
