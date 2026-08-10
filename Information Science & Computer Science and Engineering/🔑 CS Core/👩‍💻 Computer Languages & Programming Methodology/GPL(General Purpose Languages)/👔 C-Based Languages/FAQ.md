# FAQ

[TOC]



> ⚠ This file was writen in early time. Contents may be sketchy & missing.



## 👉 Codes `\033[E` and `\03307`
#c #ansi #cpp 

The sequence `ESC [ E` is an error – or possibly, a hypercorrect version – in that source. The code is `ESC E`, and it serves to move the cursor to [the next line](http://www.vt100.net/docs/vt510-rm/chapter4.html). The `[` indicates it can take an optional numerical parameter (*zero* or more), and in this case there are none, so it can be omitted. (A numerical parameter would indicate how many lines to skip; `0` or `1` shows a regular newline, and higher values makes it skip lines.)

The definition is hard to find because it's more usual to just use `\n` – the regular newline code – to move the cursor to the start of the next line in a terminal program.

The sequence `ESC [07m` also contains a redundant code, `ESC [7m` is enough to put the terminal into Reverse mode. You are probably used to adding this to the start of a color sequence so you can set the *foreground color* of the text (numbers from `30..37`) instead of *background* (`40..47`), and use spaces to draw a colored block.



[Meanings of terminal codes `\033[E` and` \033[07`, which appear in printf statements?]: https://stackoverflow.com/questions/41485511/meanings-of-terminal-codes-033e-and-03307-which-appear-in-printf-statemen



## 👉 diffs btween [new/delete -- malloc/free](https://stackoverflow.com/questions/240212/what-is-the-difference-between-new-delete-and-malloc-free)
#c #cpp 

> *p = new int / int p ??
> see [[../../../../../Assets/🗃 Archive/Curriculums/SCU/CS/数据结构与算法分析/顺序表和链表#^f56a27| malloc]]

```c++
void* malloc (size_t size);
```

```c++
int main(){
 	int *a; int M = 10;
	a = (int *) malloc(M);			
	cout<<"sizeof(a) == "<< sizeof(a)<<endl;	//a是指针，a本身大小永远是一个指针的大小8byte 
	for(int i=0;i<M;i++) a[i] = i;
	for(int i=0;i<M;i++) cout<<" "<<a[i];
	
	return 0;
}

```



## 👉 Char initialize （字符数组初始化）:
#c  #cpp 

```c++
char parr[] = "zifuchuanshuzu";
    //⬆️ 与charr_test[]等价,字符串末尾有\n
char charr_test[] = { 'z','i','f','u','c','h','u','a','n','s','h','u','z','u' ,'\0'};	
char charr[] = { 'z','i','f','u','c','h','u','a','n','s','h','u','z','u' };
 // ⬆️ 字符串末没有 \n
```



## 👉 binary/ hex/ oct output（格式控制输出）
#c #cpp


+ bitset

```c++
  	cout<<hex<<n<<endl;        // 输出 16 进制
    cout<<oct<<n<<endl;		   // 输出 8 进制
	
	bitset<8> n(15);			// 二进制使用补码输出
	cout<<n.to_string()<<endl;
	bitset<8> b(-13);
	cout<<b.to_string()<<endl; 
```



## 👉 **auto** 关键字
#c #cpp 

> + [c.biancheng 中文教程](http://c.biancheng.net/view/6984.html)
> + [microsoft docs](https://docs.microsoft.com/en-us/cpp/cpp/auto-cpp?view=msvc-160) 
+ `auto` is a kind of spaceholder. the compiler replace this command with the right specifier it concluded form the text. and ⚠️ **NOTICE** that in c/c++ any variable MUST have a specific type. 



## 👉 sizeof()
#c #cpp 

+ 不是函数，预编译阶段已经算出大小



## 👉 [strtol](https://blog.csdn.net/S031302306/article/details/52060914)
#c #cpp 

+ cstdlib
	```c++
	long strtol(const char *__str, char **__endptr, int __base);
	```
+ `__str` 是目标串，`__endpter`是结束地址。base是指定的合法数字的范围。
+ base = 0 时合法数字0 ～ 9
+ base = n (n≠0) 时 合法数字 0～n



##  👉 [range-based for loop](https://en.cppreference.com/w/cpp/language/range-for)
#c #cpp 

+ see on [stackflow](https://stackoverflow.com/questions/12702561/iterate-through-a-c-vector-using-a-for-loop) 

	```c++
	attr(optional) for (init-statement(optional);range-declaration: range-expression ){
	
		loop-statement
	
	}
	
	// e.g.
	
	int a[M_size];
	for(int &i:a){
		cout<<i<<endl;
	}
	```



## [Union](https://blog.csdn.net/lincyang/article/details/6176642)





## [enum](https://www.runoob.com/cprogramming/c-enum.html)





## typedef
+ typedef _originaltype _wantedtype
	+ e.g.
		>  typedef int INT_ARRAY_100[100];
		>  INT_ARRAY_100 arr;
+ 考虑如下语句：
> typedef char* PCHAR;
> int strcmp(const PCHAR,const PCHAR);

+  其中 ```const PCHAR = const (char*) ≠ const char* = (const char)* ```
	+ 前者声明链PCHAR指针本身的const属性，后者声明了指针指向元素的const属性
+ typedef 属于*[存储类关键字](https://blog.csdn.net/shenwanjiang111/article/details/78340722)*
	+  其他：auto、extern、static、 register、thread_local
	+  >  typedef static int INT_STATIC;
	+  故上述代码不成立，VC++2010 中的报错信息为“无法指定多个存储类”。


http://c.biancheng.net/view/298.html

[C/C++ typedef用法详解（真的很详细） | CSDN]: http://t.csdnimg.cn/afgm3



##  endl&\n
**关于 endl与'\n' 区别**:
-   1、在 C++ 中，终端输出换行时，用 cout<<......<<endl 与 "\n" 都可以，这是初级的认识。但二者有小小的区别，用 endl 时会刷新缓冲区，使得栈中的东西刷新一次，但用 "\n" 不会刷新，它只会换行，盏内数据没有变化。但一般情况，二者的这点区别是很小的，在大的程序中可能会用到。建议用 endl 来换行。
    
-   2、endl 除了写 '\n' 进外，还调用 flush 函数，刷新缓冲区，把缓冲区里的数据写入文件或屏幕.考虑效率就用 '\n'。
    
-   3、cout *lt;< endl; 除了往输出流中插入一个 '\n' 还有刷新输出流的作用。
    

```c
cout << endl; 
等价于: 
cout << '\n' << flush;

```

**在没有必要刷新输出流的时候应尽量使用 cout << '\n', 过多的 endl 是影响程序执行效率低下。**

https://www.jianshu.com/p/2c0c72f4fde7



## rand&srand
+ http://c.biancheng.net/view/2043.html
+ rand() 是伪随机函数。她是符合一种正态分布，根据固定的种子值有固定的随机树。
+ srand可以用来重新生成这个种子数。



## [编译/链接/运行](https://blog.csdn.net/ASJBFJSB/article/details/81252308)
> see more:
	> [bilibili](https://www.bilibili.com/video/BV1pf4y1J7YF?from=search&seid=8872179399538554368&spm_id_from=333.337.0.0) (pretty much detailed & instructive)
	> [csdn](https://blog.csdn.net/jsjsjs1789/article/details/103305529)
	> [csdn](https://blog.csdn.net/qq_37753409/article/details/82026613)
+ VFS (virtual file system)
+ programme = command + data
+ virtual address space
	+ ALU	
	+ .data .bss .text
+ **1. Compile**
	>.c/.cpp/.h --> .o/.obj (二进制可重定位文件)
	+ pre-compile `gcc -E *.c -o *.i` 
		+ windows --> .obj
		+ linux --> .o
	+ compile `gcc -S *.i -o *.s`
	+ assembly `gcc -c *.s -o *.o`
+ **2. Link**
	> .o/.obj/.lib --> .exe/.dll
+   **3.Build**




## [指针 Pointer](https://www.cnblogs.com/tongye/p/9650573.html)
+  内存地址/内存空间编码
	+ ALU, 步长
+ 语法
	+ ``` *p[N] <--> (*P)[N] ```
+ 指针与数组/结构体/函数/指针（双指针）




## [*C++ios](https://zhuanlan.zhihu.com/p/352961501)
> 目前仅作了解



## STL
+ [strcpy/strncpy](https://blog.csdn.net/lanzhihui_10086/article/details/39827729)



## [conio.h](https://stackoverflow.com/questions/59812014/why-use-conio-h)

conio stands for console i/o, is built on MSVC and has DOS specs. it is referable for win coding. 

The conio.h header is specific to Turbo C, which predates the earliest C standard by several years. It contains routines that are specific to the DOS command line. One function here that's frequently used is `getch`, which allows reading one character at a time without having to press the Enter key. It also contains `gotoxy` which allows placing the cursor at a specific location in the terminal

Generally speaking, methods of communicating with the terminal like this are very OS specific, so each has their own (typically non-portable) way of doing it.

This contrasts with the functions in stdio.h which contain functions like `printf`, `scanf`, and `getchar` which work regardless of what type of console is in use.



## [time.h](https://blog.csdn.net/qq_36667170/article/details/79507547)

clock()
CLOCKS_PER_SEC



## 👉 文件读写模式控制符
#c #cpp 

 + r / r+
 + w/ w+
 + a / a+
 + 

https://www.cnblogs.com/acode/p/5986958.html



## 👉 Assertions in C/C++
#assertion #c #cpp 

Assertions are statements used to test assumptions made by programmers. For example, we may use assertion to check if the pointer returned by malloc() is NULL or not.   
Following is the syntax for assertion.  
```c
void assert( int expression ); 
```

If the expression evaluates to 0 (false), then the expression, sourcecode filename, and line number are sent to the standard error, and then abort() function is called. 
For example, consider the following program.

**Assertion 🆚 Normal Error Handling**  
Assertions are mainly used to check logically impossible situations. For example, they can be used to check the state of a code which is expected before it starts running, or the state after it finishes running. ==Unlike normal error handling, assertions are generally disabled at run-time.== Therefore, it is not a good idea to write statements in assert() that can cause side effects. For example, writing something like assert(x = 5) is not a good idea as x is changed and this change won’t happen when assertions are disabled. See [this](https://www.geeksforgeeks.org/understanding-exit-abort-and-assert/) for more details.

**Ignoring Assertions**
In C/C++, we can completely remove assertions at compile time using the preprocessor `NDEBUG`.

```c
// The below program runs fine because NDEBUG is defined

# define NDEBUG
# include <assert.h>

int main(){
    int x = 7;
    assert (x==5);
    return 0;

}
```

