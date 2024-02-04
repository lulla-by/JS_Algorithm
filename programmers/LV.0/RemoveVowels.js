// 모음 제거

// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let answer = '';
  const arr = my_string.split('');
  const removeVowelsArr = arr.filter((ele) => !isVowel(ele));
  answer = removeVowelsArr.join('');
  return answer;
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

solution('nice to meet you');