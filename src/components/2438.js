/*
  첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
*/

/* 풀이 */
function get2438(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}

export default get2438;
