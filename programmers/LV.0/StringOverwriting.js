function solution(my_string, overwrite_string, s) {
    let answer = '';
    let myStringArray = [...my_string];
    myStringArray.splice(s, overwrite_string.length, ...overwrite_string);
    answer = myStringArray.join('')
    console.log(answer);
    return answer;
  }
  
  solution('He11oWor1d', 'lloWorl', 2);