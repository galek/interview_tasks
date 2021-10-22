/*задание:Реализовать функцию, которая возвращает массив строк с целочисленными значениями, попеременно возрастающими и убывающими от 1 до N.

Например, результат при N=4:

[
'1',
'2-1',
'1-2-3',
'4-3-2-1',
]
Допустимые значения N:
0 < N < 1000000;*/


function genDown(n) {
  const resDownStrArr = []
  for (let i = n; i > 0; i--) {
    resDownStrArr.push(String(i))
  }
  
  return resDownStrArr
}

function genUp(n) {
  const resUpStrArr = []
  for (let i = 1; i <= n; i++) {
    resUpStrArr.push(String(i))
  }
  
  return resUpStrArr
}

/**
 * Реализуйте функцию sequences
 */
function sequences(n) {
  const resStrArr = []


  for (let i = 1; i < n; i++) {
    resStrArr.push(
      (i % 2 ? genUp(i).join('-') : genDown(i).join('-'))
    );
  }

  return resStrArr;
}

console.log(sequences(5))
