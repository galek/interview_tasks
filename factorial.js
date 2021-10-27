 //функция которая считает факториал целого неотрицательного числа через рекурсию
 function r(integer) {
   if ((integer === 0) || (integer < 0))
     return 1;

   return integer * r(integer - 1);
 }

const i = r(3);
alert(i);
