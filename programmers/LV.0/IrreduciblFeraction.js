// 분수의 덧셈

// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
// 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.


// 최대 공약수를 계산
function getGcd(a, b) {
  let r = a % b;
  if (b === 0) {
    // 나머지가 0일때 a를 리턴
    return a;
  } else {
    // 나머지가 0이 아니면 재귀로 getGcd 호출
    // a를 b로 나눈 값의 나머지 (여기서는 a % b = r)를 b로 넘겨줌
    return getGcd(b, r);
  }
}

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];

  // 최소공배수(lcm) 계산
  let lcm = (denom1 * denom2) / getGcd(denom1, denom2);

  // 두 분수의 합 계산
  let sum = numer1 * (lcm / denom1) + numer2 * (lcm / denom2);

  // 최대공약수(gcd) 계산
  let gcd = getGcd(sum, lcm);

  answer.push(sum / gcd);
  answer.push(lcm / gcd);

  console.log(answer);
  return answer;
}
