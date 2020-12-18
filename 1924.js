/*
  오늘은 2007년 1월 1일 월요일이다. 그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.
*/

/* 풀이 */
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const month = input[0];
const day = input[1];
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
console.log(week[new Date(`2007-${month}-${day}`).getDay()]);
