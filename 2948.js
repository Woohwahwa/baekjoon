/*
  2009년 날짜가 주어졌을 때, 무슨 요일인지 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const month = input[1];
const day = input[0];
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(week[new Date(`2009-${month}-${day}`).getDay()]);
