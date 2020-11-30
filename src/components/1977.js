/*
  M과 N이 주어질 때 M이상 N이하의 자연수 중 완전제곱수인 것을 모두 골라 그 합을 구하고
  그 중 최솟값을 찾는 프로그램을 작성하시오.
  예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중
  완전제곱수는 64,  81,  100 이렇게 총 3개가 있으므로 그 합은 245가 되고 이 중 최솟값은 64가 된다.
*/

/* 풀이 */
function get1977(m, n) {
  const max = 10000;
  let sum = 0;
  let min = [];

  if (m <= max && n <= max && m <= n) {
    for (let i = m; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        if (j * j === i) {
          sum += i;
          min.push(i);
        }
      }
    }

    console.log('제곱수 합계: ', sum);
    console.log('제곱수 중 최솟값: ', min.length ? Math.min(...min) : -1);
  } else {
    return false;
  }
}

export default get1977;
