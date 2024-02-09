// 가까운 수

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
  let arr = [];
  var answer = 0;
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    let result = array[i] >= n ? array[i] - n : n - array[i];
    arr.push({ original: array[i], result });
    resultArr.push(result);
  }
  let newArr = arr.sort((a, b) => a.original - b.original);
  let min = Math.min(...resultArr);
  answer = newArr.find((obj) => obj.result === min).original;
  return answer;
}

solution([10, 14, 12], 13);
