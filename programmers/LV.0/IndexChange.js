// 인덱스 바꾸기

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  let answer = "";
  let arr = my_string.split('');
  const first = my_string[num1];
  const second = my_string[num2];

  arr[num1] = second
  arr[num2] = first
  answer = arr.join("")
  return answer;
}

solution('I love you', 3, 6);
