#include <stdio.h>
#include <cmath>

void update(int *a,int *b) {
    // Complete this function    
    int sum = *a+*b;
    int min = std::abs(*a-*b);
    
    *a=sum;
    *b=min;
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}

