#include <iostream>

using namespace std;
/*
 * Create classes Rectangle and RectangleArea
 */

struct Rectangle
{
    void read_input(){cin>>width >> height;}
    virtual void display() { cout<<width<< " " <<height; }
    virtual ~Rectangle(){}

    int width, height;
};

struct RectangleArea:public Rectangle
{
    virtual void display() override  { cout<< "\n" << width * height; }
    virtual ~RectangleArea(){}
};


