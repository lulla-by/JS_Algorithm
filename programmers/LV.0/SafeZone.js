// 안전지대

// 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.

// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.


function solution(board) {
    let totalZone = board[0].length * board[0].length;
    let data = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        board[i][j] == 1
          ? data.push([i - 1, j - 1], [i - 1, j], [i - 1, j + 1], [i, j - 1], [i, j], [i, j + 1], [i + 1, j - 1], [i + 1, j], [i + 1, j + 1])
          : null;
      }
    }
    const newArr = data.filter(item => item[0] >= 0 && item[0] < board.length && item[1] >= 0 && item[1] < board[0].length);
  
    const uniqueArr = Array.from(new Set(newArr.map(JSON.stringify)), JSON.parse);

    
    return totalZone- uniqueArr.length;
  }
  