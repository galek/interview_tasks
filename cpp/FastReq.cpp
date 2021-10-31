/******************************************************************************
// version 2018 year
*******************************************************************************/

#include <iostream>

using namespace std;

/*
функция которая считает факториал целого неотрицательного числа через рекурсию
*/
// counter
size_t i = 1;
size_t out = 1;

void start(size_t _v)
{
	// if(_v<0) // out уже = 1
	if (_v<0)
		return;

	/// 4!=1*2*3*4
	// 1 = v*(v-(v-3))*(v-(v-2))*(v-(v-1))

	out *= (_v/*Последний*/ - (_v - i/*каждый последующий*/)); // умножаю на первый эл. далее на последующий
	i++;

	//std::cout << "out " << out << "\n";

	if (i != _v)
		start(_v);
	else
		out *= _v;
}


int main()
{
	start(3); // out = 6
	std::cout << "out " << out << "\n";

	//system("pause");
	return 1;
}
