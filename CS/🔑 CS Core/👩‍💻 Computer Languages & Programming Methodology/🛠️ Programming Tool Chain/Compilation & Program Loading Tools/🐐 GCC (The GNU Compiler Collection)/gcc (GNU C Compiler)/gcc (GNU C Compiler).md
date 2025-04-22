# gcc (GNU C Compiler)

[TOC]



## Res
📂 https://gcc.gnu.org/onlinedocs/


### Related Topics



## Intro
> `gcc`早期仅支持c语言，那时`gcc`就单指GNU C Compiler，后来`gcc`支持了c以外的c++、fortran、object-c等编程语言，就演变为指代GNU Compiler Collection。Cygwin中，有关`gcc`的软件包被分拆为核心组件包`gcc-core`（仅支持c语言）和语言支持包如`gcc-g++`、`gcc-fortran`、`gcc-ada`、`gcc-objc`、`gcc-objc++`等多个。
> 
> 🔗 https://silaoa.github.io/2019/2019-03-20-Cygwin系列（六）：使用Cygwin常见问题及应对.html



## Ref
[在 Linux 下的 gcc 或 clang 编译器中调用不同版本的 C 语言标准编译程序以及查看本机默认编译标准的方法 | CSDN]: https://blog.csdn.net/wy_bk/article/details/88327220
```shell
gcc -std=c99 a.c //调用 C99 标准
gcc -std=c1x a.c //调用 GCC 接受 C11 之前的草案标准
gcc -std=c11 a.c //调用 C11 标准

gcc -E -dM - </dev/null | grep -e "#define __STDC_VERSION__"
```

[GCC编译优化指南]: https://sites.google.com/site/polarisnotme/linux/gcc

> 本文的主要读者是 LFS/Gentoo 的玩家，基本上比较 crazy 的玩家都接触过，如果你之前从未使用过 LFS/Gentoo ，请先按照[《Linux From Scratch 6.2 中文版》](http://lamp.linux.gov.cn/Linux/LFS-6.2/index.html)做一遍 LFS ，然后再来阅读此文将会更有意义。另外，本文是建立在[《深入理解软件包的配置、编译与安装》](http://lamp.linux.gov.cn/Linux/inside_config_compile_install.html) 一文基础之上的，在开始阅读本文之前，请先阅读它。

[gcc 编译 选项 汇总 - 沃德锅的文章 - 知乎]: https://zhuanlan.zhihu.com/p/347611674
```shell
# 查看默认编译选项
echo "" | gcc -v -x c++ -E -
```

[GCC -std编译标准一览表]: http://c.biancheng.net/view/8053.html
