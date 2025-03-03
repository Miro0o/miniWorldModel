# Make & Makefile Syntax

[TOC]



## Res
### Related Topics



## Intro
### what is make/cmake/qmake?
🎯 🎯 [how is make/cmake/qmake different??](https://www.cnblogs.com/cj2014/p/6111634.html) #unsolved 



## Make Alike Build Systems
### GNU Make (`make`)
make is a command line tool on Unix-like OS, executing Makefile and based on that to organize the project as it is expected.
+ `makefile` is a script-like file. it contains all the commands needed for running a project, including  when and how to compile and organize every and each file.
+ Hence, for a large softeware project engineers don't have to compile each file manually one by one. and also `make` makes the maintainness of the proj. easier.  
+ Makefile is specifically ont Unix-like OS.

↗ [GNU Make](GNU%20Make/GNU%20Make.md)


### CMake
since make is Unix-like OS specific, there comes cmake. cmake is cross-plantform, it generates `makefile ` for different OS running it. 

```shell
<srcfile> -> cmakelist -> cmake -> makefile -> make -> <targetfile> 
```

↗ [CMake](CMake/CMake.md)


### qmake
akin to cmake. but qmake and cmake have different architecture and policy handling makefile-generating. 
qmake belongs to QT. 


### Other Build Systems...
[make、gmake、cmake、nmake和Dmake 区别](https://blog.csdn.net/lionhenryzxxy/article/details/58585716)
+ Build System :
	+ GUN make
	+ Dmake
	+ NMake (win)
	+ MSBuild
	+  Ninja
	+  CMake
	+  [**qmake**](https://www.jetbrains.com/help/clion/qt-tutorial.html)
		+  [QT](http://c.biancheng.net/view/3868.html). 
	+ ...



## Ref
[🤔 makefile中条件判断与函数 | CSDN]: http://t.csdnimg.cn/QekEf
