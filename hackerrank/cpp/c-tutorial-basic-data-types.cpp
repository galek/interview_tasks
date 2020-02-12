#include <iostream>
#include <cstdio>
using namespace std;

int main() {
    // Complete the code.
    char ch; 
    long long li;
    float fl;
    double d;
    int i;
    
    scanf("%i %lli %c %f %lf",
    &i,
    &li,
    &ch,
    &fl,
    &d
    );

    printf("%i\n%lli\n%c\n%f\n%lf\n", 
    i, 
    li,ch,
    fl,
    d);

    return 0;
}

