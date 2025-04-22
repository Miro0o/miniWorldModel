# GNU Make

[TOC]



## Res
🏠 https://www.gnu.org/software/make/
📂 https://www.gnu.org/software/make/#documentation
📂 https://www.gnu.org/software/make/manual/make.htm


### Related Topics


### Other Resources
https://seisman.github.io/how-to-write-makefile/overview.html



## Intro
GNU Make is a tool which controls the generation of executables and other non-source files of a program from the program's source files.

Make gets its knowledge of how to build your program from a file called the _makefile_, which lists each of the non-source files and how to compute it from other files. When you write a program, you should write a makefile for it, so that it is possible to use Make to build and install the program.
#### Capabilities of Make
- Make enables the end user to build and install your package without knowing the details of how that is done -- because these details are recorded in the makefile that you supply.
- Make figures out automatically which files it needs to update, based on which source files have changed. It also automatically determines the proper order for updating files, in case one non-source file depends on another non-source file. As a result, if you change a few source files and then run Make, it does not need to recompile all of your program. It updates only those non-source files that depend directly or indirectly on the source files that you changed.
- Make is not limited to any particular language. For each non-source file in the program, the makefile specifies the shell commands to compute it. These shell commands can run a compiler to produce an object file, the linker to produce an executable, `ar` to update a library, or TeX or Makeinfo to format documentation.
- Make is not limited to building a package. You can also use Make to control installing or deinstalling a package, generate tags tables for it, or anything else you want to do often enough to make it worth while writing down how to do it.


### 为什么学 GNU Make
大家第一次写 hello world 程序的时候一定都记得，在编辑完 `helloworld.c` 之后，需要用 `gcc`编译生成可执行文件，然后再执行（如果你不理解前面这段话，请先自行谷歌 *gcc 编译* 并理解相关内容）。但如果你的项目由成百上千个 C 源文件组成，并且星罗棋布在各个子目录下，你该如何将它们编译链接到一起呢？假如你的项目编译一次需要半个小时（大型项目相当常见），而你只修改了一个分号，是不是还需要再等半个小时呢？

这时候 GNU Make 就闪亮登场了，它能让你在一个脚本里（即所谓的 `Makefile`）定义整个编译流程以及各个目标文件与源文件之间的依赖关系，并且只重新编译你的修改会影响到的部分，从而降低编译的时间。


### 如何学习 GNU Make
这里有一篇写得深入浅出的文档 [跟我一起写makefile](https://seisman.github.io/how-to-write-makefile/overview.html) 供大家参考。

GNU Make 掌握起来相对容易，但用好它需要不断的练习。将它融入到自己的日常开发中，勤于学习和模仿其他优秀开源项目里的 `Makefile` 的写法，总结出适合自己的 template，久而久之，你对 GNU Make 的使用会愈加纯熟。

> 👌 👌 👌  [A very detailed makefile tutorial](https://seisman.github.io/how-to-write-makefile/overview.html) (learn make before learn CMake is recommanded)

```makefile
OBJ = hello.o

hello : $(OBJ)
	g++v $(OBJ) -o hello

$(OBJ) : head.hpp

.PHONY : clean
clean: 
	rm hello $(OBJ)
```



## Ref
[makefile -- 后缀规则]: https://blog.csdn.net/Anhui_Chen/article/details/107874270
> 后缀规则是一种 make 定义隐式规则的旧式方式。**模式规则更加通用、清晰，后缀规则已经被废弃。** 为了兼容旧的 makefiles，GNU make 依然支持后缀规则。后缀规则有两种形式：**双后缀**和**单后缀**。

[What is the purpose of .PHONY in a Makefile? | Stackoverflow]: https://stackoverflow.com/q/2145590/16542494

By default, Makefile targets are "file targets" - they are used to build files from other files. Make assumes its target is a file, and this makes writing Makefiles relatively easy:
```
foo: bar
  create_one_from_the_other foo bar
```

However, sometimes, you want your Makefile to run commands that do not represent physical files in the file system. Good examples of this are the common targets "clean" and "all". Chances are this isn't the case, but you _may_ potentially have a file named `clean` in your main directory. In such a case Make will be confused because by default the `clean` target would be associated with this file and Make will only run it when the file doesn't appear to be up-to-date with regards to its dependencies.

These special targets are called _phony_ and you can explicitly tell Make they're not associated with files, e.g.:
```
.PHONY: clean
clean:
  rm -rf *.o
```

Now `make clean` will run as expected even if you do have a file named `clean`.

In terms of Make, a phony target is simply a target that is always out-of-date, so whenever you ask `make <phony_target>`, it will run, independent from the state of the file system. Some common `make` targets that are often phony are: `all`, `install`, `clean`, `distclean`, `TAGS`, `info`, `check`.

See also: 🔗 [GNU make manual: Phony Targets](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html)
