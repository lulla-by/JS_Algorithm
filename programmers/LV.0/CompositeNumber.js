function isComposite(num) {
  let divisorCount = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisorCount++;
    }
  }
  return divisorCount > 2;
}

function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    if (isComposite(i)) {
        answer++;
    }
  }
  console.log(answer);
  return answer;
}
