/*
  N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
*/

/* 풀이 */
function get2739(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

export default get2739;
