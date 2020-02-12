/*
На вход число (размер строки)
Задача сделать реверс строки
*/
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

void Reverse(const std::vector<int>& _vec)
{
    for(int i=_vec.size()-1;i>=0;i--) {
        cout<<_vec[i] << " "; //<< "Iterator " << i << "\n";
    }
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   

    int size=0;
    cin >> size;

std::vector<int> _vec;
for(int i=0;i<size;i++)
{
    int v;
    cin >> v;
   // cout << "Read " << v << " \n";
    _vec.push_back(v);
}

Reverse(_vec);

    return 0;
}
