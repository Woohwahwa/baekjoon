/*
  오늘은 2007년 1월 1일 월요일이다.
  그렇다면 2007년 x월 y일은 무슨 요일일까? 이를 알아내는 프로그램을 작성하시오.
*/

/* 풀이 */
function get1924(x, y) {
  const date = new Date(`2007-${x}-${y}`)
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT']
  console.log(week[date.getDay()]);
}

export default get1924;
