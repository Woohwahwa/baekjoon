/*
  두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
*/

/* 풀이 */
function get1001(a, b) {
  if (a > 0 && b < 10) {
    return a - b;
  } else {
    return false;
  }
}

export default get1001;
