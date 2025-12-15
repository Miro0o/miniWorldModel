>[不同编译器的区别？](https://www.zhihu.com/question/24873800)

> 📜 G++ basics: https://cloud.tencent.com/developer/article/1394309
>  G++ on win: https://www.cnblogs.com/lulipro/p/6661763.htm
>  official docs (2016)
>  https://gcc.gnu.org/onlinedocs/gcc-6.1.0/gcc.pdf

g++ is a C++ compiler, belonging to GCC ([[../../../../../../../Assets/🗃 Archive/🗂️ Archive/CS entries quick-look#GUN|GUN]] Compile Collection).
gcc(GNU C Compiler) is a C compiler, also belonging to GCC( GUN Compile Collection). 

# g++

👀 [_have a donut_](https://www.a1k0n.net/2006/09/15/obfuscated-c-donut.html)

> quick-start: https://cloud.tencent.com/developer/article/1394309

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
+ **Compile**
	>.c/.cpp/.h --> .o/.obj (二进制可重定位文件)
	+ pre-compile `gcc -E *.c -o *.i` 
		+ windows --> .obj
		+ linux --> .o
	+ compile `gcc -S *.i -o *.s`
	+ assembly `gcc -c *.s -o *.o`
+ **Link**
	> .o/.obj/.lib --> .exe/.dll
+   **Build**


## compiling .cpp containing 4 processes : 
+ Processing
	 ```shell 
	 g++  -E  test.cpp  -o  test.i    //生成预处理后的.i文件
	```
+ Compilation
	```shell
	g++ -S test.i -o test.s			//生成汇编.s文件
	```
+ Assembly
	```shell
	g++  -c  test.s  -o  test.o    //生成二进制.o文件
	```
+ Link
	```shell
	g++ test.o  -o  test.out  	  //生成二进制.out可执行文件
	```
	
	

# gcc

和g++ 差不多？？
## Troubleshooting: 
[Linux 64位系统编译32位链接库](http://blog.chinaunix.net/uid-28682353-id-4130348.html)

​	

