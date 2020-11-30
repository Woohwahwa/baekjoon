/*
  어떤 반에 있는 학생들의 생일이 주어졌을 때,
  가장 나이가 적은 사람과 가장 많은 사람을 구하는 프로그램을 작성하시오.
*/

/* 풀이 */
const studentArray = [
  'Mickey 1 10 1991',
  'Alice 30 12 1990',
  'Tom 15 8 1993',
  'Jerry 18 9 1990',
  'Garfield 20 9 1990'
];

function get5635() {
  const studentValidate = (value) => {
    const array = value.split(' ');
    const nameLimit = array[0].length <= 15; // 최대 15글자
    const defaultLimit = array[1].charAt(0) !== '0' && array[2].charAt(0) !== '0' && array[3].charAt(0) !== '0'; // 앞글자는 0이 아니다
    const dayLimit = 1 <= array[1] <= 31; // day 제한
    const monthLimit = 1 <= array[2] <= 12; // month 제한
    const yearLimit = 1990 <= array[3] <= 2010; // year 제한

    return nameLimit && defaultLimit && dayLimit && monthLimit && yearLimit;
  }

  const studentCalc = studentArray.map(student => {
    if (studentValidate(student)) {
      const array = student.split(' ');
      array.reverse();
      return array;
    } else {
      return false;
    }
  });

  studentCalc.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        if (a[2] === b[2]) {
          return true;
        } else {
          return a[2] - b[2]
        }
      } else {
        return a[1] - b[1]
      }
    } else {
      return a[0] - b[0]
    }
  })

  console.log('가장 나이가 적은 사람의 이름: ', studentCalc[studentCalc.length - 1][3]);
  console.log('가장 나이가 많은 사람의 이름: ', studentCalc[0][3]);
}

export default get5635;
