// 이어 붙인 수

// 정수가 담긴 리스트 num_list가 주어집니다. 
// num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요


function solution(num_list) {
    let oddArr = [];
    let evenArr = [];
    for(let i = 0; i < num_list.length;i++){
        num_list[i] % 2 == 0 ? evenArr.push(num_list[i].toString()) : oddArr.push(num_list[i].toString())
    }
    let odd = oddArr.reduce((a,b) => (a+b));
    let even = evenArr.reduce((a,b) => (a+b));
    let answer = (+odd) + (+even);
    return answer;
}