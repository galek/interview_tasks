#include <iostream>
#include <vector>
#include <algorithm>

// сортировка методом пузырька, по возрастанию
// see std::sort(c++) quicksort(c) for reference
// 
// 1 2 3 
// 3 1 2
// 3 2 1

void ResPrintf(const std::vector<int>& _v);


void puz(std::vector<int>&_v) 
{
	for (size_t i = 0; i < _v.size(); i++) // don't forget about this!
		for (size_t i = 1; i < _v.size(); i++)
		{
			if (_v[i] < _v[i - 1]) {
				std::swap(_v[i], _v[i - 1]); // псевдокод, меняет местами 
			}
		}

	ResPrintf(_v);
}

void ResPrintf(const std::vector<int>& _v) {
	for (const auto &c : _v) {
		std::cout << c << ",";
	}
}

int main()
{
	std::vector<int> a{ 3,2,1 };
	puz(a);

	// out 1,2,3 - correct

	// quicksort
	//std::sort(a.begin(), a.end());
	//ResPrintf(a);

	//system("pause");
	return 0;
}
