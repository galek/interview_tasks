#include <iostream>
#include <cstdio>
using namespace std;


string v[10]{"one\n", "two\n", "three\n", "four\n", "five\n", "six\n", "seven\n", "eight\n", "nine\n"};


void t(int i)
{ 
    if((i>9) && (i%2 == false)) //не четное
        cout << "even\n";
    else if((i>9) && (i%2 == true)) //четное
        cout<<"odd\n";
}

void NumberToWorld(int _i)
{
    /* Worls perfect
    //cout << _i<<"\n";
    if ((1<=_i) && (_i<=9))
        cout<<v[_i-1];
    else t(_i);*/

    // new version
    t(_i);
    cout<<v[_i-1];
}

void Interval(int _i, int j){
for(int i=_i;i<=j;i++)
{
     NumberToWorld(i);
}
}

int main() {
    // Complete the code.
    // На входе просто интервал
    int i, j;
    cin >> i >> j;

    Interval(i, j);

    return 0;
}
