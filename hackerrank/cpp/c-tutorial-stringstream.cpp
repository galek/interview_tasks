/*
Input:
23,4,56

Out:
23
4
56
*/
#include <sstream>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

vector<int> parseInts(string str) {
	// Complete this function
    stringstream ss(str);
    size_t n = std::count(str.begin(), str.end(), ',');
    std::vector<int> v;

    for(int i=0;i<n+1;i++)
    {
        int a;char ch;
        ss>>a >> ch;
        v.push_back(a);
    }
    return v;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}

