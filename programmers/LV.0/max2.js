//최댓값 만들기 (2)

//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let result;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (result == undefined) {
        result = numbers[i] * numbers[j];
      }
      result =
        result > numbers[i] * numbers[j] ? result : numbers[i] * numbers[j];
    }
  }
  return result;
}
