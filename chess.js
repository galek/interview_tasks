/*
Шахматная доска
Задача вывести шахматную доску.
TODO: Сделать нужно CSS, и вывести это визуально.

Сейчас здесь схематичное решение.
*/
let array=[];

function drawChess()
{
  let isBlack = true;
    
  for(let i=0;i<8;i++)
  for(let j=0;j<8;j++)
  {
  if(j==0) isBlack!=isBlack;
  
  if(isBlack) {
    array.push({isBlack:true, x:i, y:j});
  }
  else
  {
    array.push({isBlack:false, x:i, y:j});
  }
  
  isBlack!=isBlack;
  }
}
