// 공배수

// 정수 number와 n, m이 주어집니다. 
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

function solution (number,n,m) {
    const first = number % n == 0;
    const second = number % m == 0;
    const third = first && second;
    return third ? 1 : 0
}
