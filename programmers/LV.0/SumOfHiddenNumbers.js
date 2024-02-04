// 숨어있는 숫자의 덧셈

// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('');
    for (let i = 0; i < my_string.length; i++) {
      let newEle = +arr[i];
      if (!isNaN(newEle)) {
        answer += newEle
      } 
    }
    return answer;
}
