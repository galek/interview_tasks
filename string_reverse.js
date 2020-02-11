/*
Задача: сделать реверс текстовой строки
На вход 23
На выход 32
*/

function r()
{
	let str="23";
	let result='';

	for(let i=str.length-1; i!=-1; i--)
	{
 		result+=str[i];
		//alert(str[i] + ' iterator ' + i);
	}
	alert (result);
}

r();
