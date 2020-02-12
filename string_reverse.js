/*
Задача: сделать реверс текстовой строки
На вход 23
На выход 32
*/

function r()
{
	let str="23";
	let result='';
	// условие окончания (более простое) >=0; 
	// влоб: i!=-1
	for(let i=str.length-1; i>=0; i--)
	{
 		result+=str[i];
		//alert(str[i] + ' iterator ' + i);
	}
	alert (result);
}

r();
