function solution(my_string) {
  const nums = my_string.match(/[0-9]+/g);
  const answer = nums === null ? 0 : nums.reduce((a, c) => a + +c, 0);
  return answer;
}

solution('ap');
