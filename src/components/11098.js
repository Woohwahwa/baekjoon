/*
  각각의 테스트 케이스에서 가장 비싼 선수의 이름을 출력해야한다.
*/

/* 풀이 */
function get11098() {
  const memberArray = [
    {
      price: 10,
      name: 'Iversen'
    },
    {
      price: 1000000,
      name: 'Nannskog'
    },
    {
      price: 2000000,
      name: 'Ronaldinho'
    }
  ];

  console.log('가장 비싼 선수: ', Math.max(...memberArray.map(member => member.price)));

  return Math.max(...memberArray.map(member => member.price));
}

export default get11098;
