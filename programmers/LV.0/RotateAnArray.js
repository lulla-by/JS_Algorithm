// 배열 회전시키기

// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다.
//  배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  let answer = [];
  if (direction === 'left') {
    let rest = numbers.splice(0, 1);
    answer = numbers.concat(rest);
  } else {
    let rest = numbers.splice(numbers.length - 1, 1);
    answer = [...rest, ...numbers];
  }
  return answer;
}