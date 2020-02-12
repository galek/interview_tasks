#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   

int n;
cin >> n;
std::vector<int> v;

for(int i=0;i<n;i++)
{
    int t;
    cin >> t;
    v.push_back(t);
}

std::sort(v.begin(), v.end());

for(int i=0;i<v.size();i++)
{
    cout << v[i] << " ";
}

    return 0;
}
