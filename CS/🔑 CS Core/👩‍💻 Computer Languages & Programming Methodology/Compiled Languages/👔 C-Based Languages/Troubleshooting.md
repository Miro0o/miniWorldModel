# Troubleshooting

[TOC]



## 👉 Sleep in C| warning implicit declaration of function `sleep'?
#c #syntax 

> TL;DR 
> As it is stated on the Linux _man_ page [here](https://linux.die.net/man/3/sleep) we need to include **unistd.h** and should do fine for all **OS**.

==The function `sleep` is not part of C programming language==. So, C compiler needs a declaration/prototype of it so that it can get to know about about number of arguments and their data types and return data type of the function. When it doesn't find it, it creates an `Implicit Declaration` of that function.

In Linux, `sleep` has a prototype in `<unistd.h>` and in windows, there is another function `Sleep` which has a prototype in `<windows.h>` or  `<synchapi.h>`. You can always get away with including header, if you explicitly supply the prototype of the function before using it. It is useful when you need only few functions from a header file.

The prototype of `Sleep` function in C on windows is:
```c
VOID WINAPI Sleep(_In_ DWORD dwMilliseconds);
```

Remember, it is always a good practice to supply the prototype of the function being used either by including the appropriate header file or by explicitly writing it. Even, if you don't supply it, compiler will just throw a warning most of the time and it will make an assumption which in most cases will be something that you don't want. It is better to include the header file as API might change in future versions of the Library.


[Sleep | warning implicit declaration of function `sleep'?]: https://stackoverflow.com/questions/39156743/sleep-warning-implicit-declaration-of-function-sleep



## 👉 Undefined reference to pthread_create in Linux
#cpp #c #pthread_create #linux 

Additionally: depending on the platform, you may need 
- a different compiler for threads,
- a different libc for threads (i.e. `-lc_r`),
- `-thread` or `-threads` or other, instead of or in addition to `-lpthread`

---
For Linux the correct command is:
```c
gcc -pthread -o term term.c
```

In general, libraries should follow sources and objects on command line, and `-lpthread` is not an "option", it's a library specification. On a system with only `libpthread.a` installed,
```c
gcc -lpthread ...
```

will fail to link.

Read [this](https://eli.thegreenplace.net/2013/07/09/library-order-in-static-linking) or [this](https://web.archive.org/web/20180627210132/webpages.charter.net/ppluzhnikov/linker.html) detailed explanation.

---
In my case: 
```Makefile
CC = gcc
LD = gcc
CFLAGS = -g -O2 -DHAVE_CONFIG_H -I.

all: shell
shell: shell.o nachos_syscall.o

# $(LD) $(CFLAGS) -s -o shell shell.o nachos_syscall.o -lc -lc_r
# change the -lc_r to -lpthread
$(LD) $(CFLAGS) -s -o shell shell.o nachos_syscall.o -lc -lpthread

clean:
$ (RM) -f shell.o nachos_syscall.o shell

distclean: clean
$(RM) -f Makefile config.h config.log config.status
```

[Undefined reference to pthread_create in Linux]: https://stackoverflow.com/questions/1662909/undefined-reference-to-pthread-create-in-linux

[Undefined Reference to pthread_create]: https://linuxhint.com/undefined-reference-pthread-create/


There are several reasons why the “Undefined reference to pthread_create” error occurs:
1. Missing Thread Header File, 
```c
#include <pthread.h>
```
2. Incorrect Compiler Flag
```Shell
## This gets the error
gcc -o threads posix_threads.c

## This is correct
gcc -pthread -o threads posix_threads.c

# Adding the -pthread option to the compiler commands allows the compiler to execute the code with the pthread.h library.
```
3. Cmake Flag Missing
You can do so by adding the following line to your make file.
```Makefile
add_compile_options(-pthread)
```

Or
```Makefile
SET(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread")
```



## 👉 warning: excess elements in array initializer
#c #cpp 



## 👉 static declaration follows non-static declaration
#static_declaration #c #cpp #syntax 



[extern报错:static declaration follows non-static declaration | CSDN]: http://t.csdnimg.cn/7UNnC



## 👉 dereferencing pointer to incomplete type

[dereferencing pointer to incomplete type | Stackoverflow]: https://stackoverflow.com/q/2700646



## 👉 未定义引用
#c #program_link

**原因**
出现这种情况的原因，主要是C/C++编译为`obj`文件的时候并不需要函数的具体实现，只要有函数的原型即可。但是在链接为可执行文件的时候就必须要具体的实现了。如果错误是`未声明的引用`，那就是找不到函数的原型，解决办法这里就不细致说了，通常是相关的头文件未包含。


**解决办法**
指定原因就好办了，既然知道是缺少了函数的具体实现，那么就给它这个函数的实现就好了。比如上面的例子，是因为缺失了`dlopen`、`dlsym`、`dlerror`、`dlclose`这些函数的实现，这几个函数是用于加载动态链接库的，编译的时候需要添加`-ldl`来使用`dl`库(这是静态库，在系统目录下`/usr/lib/i386-linux-gnu/libdl.a`、`/usr/lib/x86_64-linux-gnu/libdl.a`)。

但是看上面编译的时候是有添加`-ldl`选项的，那么为什么不行呢？


**gcc 依赖顺序问题**
这个主要的原因是`gcc`编译的时候，各个文件依赖顺序的问题。

在`gcc`编译的时候，如果文件`a`依赖于文件`b`，那么编译的时候必须把`a`放前面，`b`放后面。

例如:在`main.c`中使用了`pthread`库相关函数，那么编译的时候必须是`main.c`在前，`-lpthread`在后。 gcc main.c -lpthread -o a.out 。

上面出现问题的原因就是引入库的顺序在前面了，将其放置在后面即可了。

```
g++ -o spider  bloomfilter.o confparser.o crc32.o dso.o hashs.o md5.o qstring.o sha1.o socket.o spider.o threads.o url.o    -rdynamic -lpthread -levent -lcrypt -ldl
```

也可以使用 `Xlinker` 选项来
```
g++ -o spider  bloomfilter.o confparser.o crc32.o dso.o hashs.o md5.o qstring.o sha1.o socket.o spider.o threads.o url.o    -rdynamic -Xlinker "-(" -lpthread -levent -lcrypt -ldl -Xlinker "-)"
```


[gcc编译时对'xxxx'未定义的引用问题]: https://www.cnblogs.com/oloroso/p/4688426.html
[(.text+0x20)：对‘main’未定义的引用 | CSDN]: http://t.csdnimg.cn/t7FsB
