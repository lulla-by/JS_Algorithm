// 중복된 문자 제거

// 문자열 my_string이 매개변수로 주어집니다.
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = '';
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.includes(my_string[i]) ? null : arr.push(my_string[i]);
  }
  answer = arr.join("");
  return answer;
}

solution('We are the world');
