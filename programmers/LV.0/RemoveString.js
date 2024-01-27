// 특정 문자 제거하기

// 문자열 my_string과 문자 letter이 매개변수로 주어집니다.
// my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요

function solution(my_string, letter) {
    let answer = '';
    let arr = my_string.split("")
    answer = arr.filter((item)=>item !== letter).join("")
    return answer;
}


// 다른 사람 풀이

// split 사용

function solution2(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}