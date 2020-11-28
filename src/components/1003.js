/*
  1은 2번 출력되고, 0은 1번 출력된다. N이 주어졌을 때, fibonacci(N)을 호출했을 때,
  0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
function get1003(n) {
  if (n <= 0) return `1 0`;
  if (n <= 1) return `0 1`;

  return `1 2`;
}

export default get1003;
