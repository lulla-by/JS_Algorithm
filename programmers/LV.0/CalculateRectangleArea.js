// 직사각형 넓이 구하기

//2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다.
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 
// 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
  const first = dots[0];
  let arr = dots
    .filter((item) => first[0] !== item[0] && first[1] !== item[1])
    .flat();
  const width = Math.abs(first[0] - arr[0]);
  const height = Math.abs(first[1] - arr[1]);
  const area = width * height;
  return area;
}
solution(
  [
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ],
  4
);
