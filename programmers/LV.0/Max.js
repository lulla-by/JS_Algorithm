// 최댓값 만들기

// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.


function solution(numbers) {
  var answer = 0;
  const array = numbers.sort((a, b) => a - b);
  const max1 = array[array.length - 1]
  const max2 = array[array.length - 2]
  answer = max1 * max2 
  return answer;
}

