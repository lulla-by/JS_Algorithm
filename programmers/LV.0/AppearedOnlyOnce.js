// 한번만 등장한 문자

//문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.
// 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
  let answer = '';
  let arr = {};
  for (let i = 0; i < s.length; i++) {
    const isExist = Object.keys(arr).includes(s[i]);
    isExist ? (arr[s[i]] += 1) : (arr[s[i]] = 0);
  }
  const result = Object.keys(arr)
    .filter((key) => arr[key] === 0)
    .sort();

  answer = result.join('');
  return answer;
}

