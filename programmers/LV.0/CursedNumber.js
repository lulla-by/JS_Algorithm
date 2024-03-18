function solution(n) {
    let answer = 0;
    let count = 0; // 3을 저주의 숫자로 생각하는 3x 마을 사람들이 사용하지 않는 수의 개수
    let num = 1; // 3x 마을에서 사용하는 숫자
  
    while (count < n) {
      // 3을 저주의 숫자로 생각하여 3의 배수와 숫자 3을 건너뛰기
      if (num % 3 !== 0 && num.toString().indexOf('3') === -1) {
        count++; // 사용할 수 있는 숫자 개수 증가
        answer = num; // 정답 갱신
      }
      num++; // 다음 숫자로 이동
    }
  
    return answer;
  }
solution(10);
