/*
  첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
*/

function get1978(n) {
  const result = [];

  // 제곱근을 계산한 후 다시 루프를 돌린다.
  for (let i = 2; i * i < n; i++) {
    for (let j = i * i; j <= n; j += i) {
      if (result[j] !== false) {
        // 소수가 아닌 수에 composition 이라는 값을 넣어준다.
        result[j] = 'composition';
      }
    }
  }

  // 소수가 아닌 수(합성 수)를 필터링 한다.
  const compositionNumber = result.filter(number => number === 'composition').length;

  // 처음 값에서 합성수를 빼 최종적으로 소수를 계산한다.
  return n - compositionNumber;
}

export default get1978;
