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
