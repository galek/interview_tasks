#include <iostream>
#include <sstream>
using namespace std;

#define STRINGIFY(x) #x
#define TOSTRING(x) STRINGIFY(x)


struct Student
{
    void set_age(int _age){age=_age;}
    void set_standard(int _standard){standard=_standard;}
    void set_first_name(string _age){first_name=_age;}
    void set_last_name(string _age){last_name=_age;}


    int get_age(){return age;}
    int get_standard(){return standard;}
    string get_first_name(){return first_name;}
    string get_last_name(){return last_name;}

    string to_string(){
        return std::to_string(age)+","
        + first_name+","+last_name+","
        +std::to_string(standard);
    }

    int age, standard;
    string first_name, last_name;
};
/*
Enter code for class Student here.
Read statement for specification.
*/

int main() {
    int age, standard;
    string first_name, last_name;
    
    cin >> age >> first_name >> last_name >> standard;
    
    Student st;
    st.set_age(age);
    st.set_standard(standard);
    st.set_first_name(first_name);
    st.set_last_name(last_name);
    
    cout << st.get_age() << "\n";
    cout << st.get_last_name() << ", " << st.get_first_name() << "\n";
    cout << st.get_standard() << "\n";
    cout << "\n";
    cout << st.to_string();
    
    return 0;
}

