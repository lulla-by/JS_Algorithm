// 배열의 평균값

// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let sum = 0;
  let length = numbers.length;

  for (let i = 0; i < length; i++) {
    sum += numbers[i];
  }

  let answer = sum / length;
  return answer;
}

