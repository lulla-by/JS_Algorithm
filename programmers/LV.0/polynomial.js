// 다항식 더하기

// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
// 같은 식이라면 가장 짧은 수식을 return 합니다.

// 반례때문에 꽤나 애먹은 문제

// x + 1이 들어가면 x + 1로 나와야함
// 일항식일 경우도 고려

function solution(polynomial) {
  var answer = '';
  const arr = polynomial.split(' + ');
  const notIncludesX = arr
    .filter((item) => item.indexOf('x') === -1)
    .map((item) => +item);
  const sumNotIncludesX = notIncludesX.reduce((acc, cur) => acc + cur, 0);

  const includesX = arr.filter((item) => item.includes('x'));
  const replaceXArr = includesX
    .map((item) => item.replace('x', ''))
    .map((item) => (item === '' ? 1 : +item));
  let sumIncluedsX =replaceXArr.reduce((acc, cur) => acc + cur, 0) + 'x'

if(sumIncluedsX == "1x"){
    sumIncluedsX = "x"
}else if(sumIncluedsX =="0x"){
    sumIncluedsX = 0
}
  answer =
    sumIncluedsX == 0 || sumIncluedsX == '0x'
      ? sumNotIncludesX
      : sumNotIncludesX == 0
      ? sumIncluedsX
      : `${sumIncluedsX} + ${sumNotIncludesX}`
  return answer.toString();
}
