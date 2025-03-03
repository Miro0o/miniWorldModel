# [C/C++](https://www.cplusplus.com)

[TOC]



# 面向对象编程 （oop）
> 👨‍🏫 **Tutorials :**
[newbie.com]( https://www.runoob.com/cplusplus/cpp-copy-constructor.html)
[W3school](https://www.w3schools.com/cpp/cpp_constructors.asp)

[动态链接 和 静态链接](https://blog.csdn.net/fuzhongmin05/article/details/54616520)

## 类/对象

### 运算符

+ 直接成员访问运算符 (`.`)
	+ 在类外访问类公共成员元素
	+  范围解析运算符 (`::`)（scope resolution）
		+  类外定义类公共成员函数
	+  内联 ( inline )
		+  编译时编译器代码替换
	+  访问修饰符 (access specifier)
		+   public、private、protected 
	+   attribute
+   构造函数 (constructor)
	+   与类同名
	+   初始化传参
	+   初始化列表
	>   [构造函数、拷贝构造函数（copy constructor）、](https://www.cnblogs.com/liushui-sky/p/7728902.html)
	
+   析构函数
	+   在类名称前加(`~`);

+   友元函数
+   内联函数
+   this 指针
+   指向类的指针
+   static member
	+   all objects share one static member;
	+   initialized as 0 when claimed;
	+   cann't be modified within the class; whereas it can be modified outside the class
	+   access at any time, no matter whether an object was claimed or not;
		+   hence static member cann't visit `this` pointor
### 继承（ Inheritance）
一个派生类继承了所有的基类方法，但下列情况除外：
+ 基类的构造函数、析构函数和拷贝构造函数。
+ 基类的重载运算符。
+ 基类的友元函数。
	
###### Defs
+  base class
+ derived class

###### Types
+ multilevel inheritance
+ multiple inheritance

### [ 多态（polymorphism）](https://www.runoob.com/cplusplus/cpp-overloading.html)
+ operator overloading
+ overload function

*my_code ：* 
```c++
#include<iostream>
using namespace std;

class viechle{
    public:
        int RR,Benz,volve;
        viechle(){
            cout<<"inticial constructor impleted:"<<endl;
        }
        void destroy_car();
    private:
        int volsvagan;
        
    protected:
        int miro;

};
struct node{
    // const char a[3]={'1','2','3'};
    int a;
};

void viechle::destroy_car(){
            cout<<" imna killyou !";
}

class car2: public viechle{
    public: 
        // virtual int RR = 2;
        car2(){
            miro=RR=100;
            // volsvagan (InBase,Inaccessible)

        }
        virtual void get(){
            cout<<"miro="<<miro<<endl;   
        }
};

class areplane{
    public:
        areplane(){
            cout<<"we're ready to take off!"<<endl;
        }
};

class cars: public car2, public areplane{
    public:
        cars(){
            cout<<"multiple inheritance constructor initicalized:"<<endl;
            cout<<"RR="<<RR<<endl;
        }
};

class car_car: public car2{
    public:
        void get(){
            cout<<"car_car's get is different from its base class!"<<endl;
        }
};

class me_car: private viechle{
    me_car(){
        miro=1;
        cout<<"MIRO"<<endl;
    }
};

int main(){
    // char a[]="asdfjasdljfhafkjgas";
    node temp;
    cout<<(temp.a=1)<<endl;
    car2 car;
    car.destroy_car();
    car.get();
    cars MIRO;
    MIRO.destroy_car();
    cout<<endl;
    car_car CAR;
    CAR.get();
    MIRO.get();
    me_car ME_CAR;
    
    // cout<<a;
//   try {
//   int age = 15;
//   if (age >= 18) {
//     cout << "Access granted - you are old enough.";
//   } else {
//     throw 505;
//   }
// }
// catch (...) {
//   cout << "Access denied - You must be at least 18 years old.\n";
// }
    return 0;
}

```


# 流输入输出
```c++
# include <iostream>  
# include <fstream>  
# include <cstring>  
using namespace std;  
  
int main(){  
    ofstream input_file;  
 string filename("test_file.txt");  
 input_file.open(filename);  
 if (!input_file.is_open()) {  
        cout << "Could not open the file - '" << "'" << endl;  
 return EXIT_FAILURE;  
 }  
  
    string data;  
 cout << "plz input the content of the test_file.txt file";  
 cin >> data;  
  
 input_file << data << endl;  
 input_file.close();  
  
 ifstream output_file;  
 output_file.open("test_file.txt");  
 string data_copy;  
 output_file >> data_copy;  
  
 cout << data_copy << endl; // #1 output  
 output_file >> data_copy;  
 cout << data_copy << endl; // #2 output  
  
 output_file.close();  
  
 return 0;  
}
```

