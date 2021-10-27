/*
Шахматная доска
Задача вывести шахматную доску.
TODO: Сделать нужно CSS, и вывести это визуально.

Сейчас здесь схематичное решение.
*/
function drawChess() {
  let isBlack = true;
  let arr = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      arr.push({
        isBlack,
        x: i,
        y: j
      });
      isBlack = !isBlack;
    }
  }

  return arr
}

console.warn(drawChess())
