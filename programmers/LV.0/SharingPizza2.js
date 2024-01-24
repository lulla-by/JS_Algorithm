function getGcd(a, b) {
  let r = a % b;
  if (b === 0) {
    return a;
  } else {
    return getGcd(b, r);
  }
}

function solution(n) {
  let gcd = n > 6 ? getGcd(n, 6) : getGcd(6, n);
  let lcm = (n * 6) / gcd;
  let answer = lcm / 6;
  return answer;
}

// 다른 사람 풀이법

// 주어진 수를 6으로 나누어 떨어질 때까지 6씩 더해주며 반복
// 이때, 조각 수를 나타내는 변수인 piece가 6으로 나누어 떨어지면 반복문을 종료하고,
// 현재까지의 누적된 조각 수를 6으로 나누어 반환
const solution2 = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}
