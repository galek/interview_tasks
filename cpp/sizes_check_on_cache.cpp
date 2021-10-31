#include <iostream>

// Размеры структуры, при использовании кеша(группировка полей)
// Однажды задавался вопрос, про группировку данных и вес структуры, 
// при сгруппированных полях и без
// Авторы явно вдохновлялись данной статьей
// https://gamedev.ru/code/articles/?id=5879
// В 5 варианте утверждалось, что размер будет меньше

using namespace std;
struct test {};
struct test2 {
	int32_t a; // 4
};
struct test3 {
	int32_t a; // 4
	int8_t b; // 1
};
struct test4 {
	int32_t a; // 4
	int8_t b; // 1
	int16_t c; // 2
};
struct test5 {
	int32_t a; // 4
	int16_t c; // 2
	int8_t b; // 1
};
struct test6 {
	int16_t c; // 2
	int8_t b; // 1
	int32_t a; // 4
};

int main()
{
	// Tested on VS2017+GCC with O2/Ox
	cout << sizeof(test) << "\n"; // 1
	cout << sizeof(test2) << "\n"; // 4
	cout << sizeof(test3) << "\n"; // 8
	cout << sizeof(test4) << "\n"; // 8
	cout << sizeof(test5) << "\n"; // 8
	cout << sizeof(test6) << "\n"; // 8

	return 0;
}
