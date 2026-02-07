# Intel Pin - A Dynamic Binary Instrumentation Tool

[TOC]



## Res
🏠 https://www.intel.com/content/www/us/en/developer/articles/tool/pin-a-dynamic-binary-instrumentation-tool.html
📄 [Pin 4.1.99687 User Manual](https://software.intel.com/sites/landingpage/pintool/docs/99687/Pin/doc/html/index.html)

Tutorials
- [CGO 2013](https://www.intel.com/content/dam/develop/external/us/en/documents/cgo2013-256675.pdf) [PDF 3.464MB] (February 2013, Shenzhen, China)
- [CGO 2012/ISPASS 2012](https://www.intel.com/content/dam/develop/external/us/en/documents/pin-tutorial-cgo-ispass-2012.ppt) [PPT 6.7MB] (April 2012 - San Jose, CA and New Brunswick, NJ)
- [CGO 2011](https://www.intel.com/content/dam/develop/external/us/en/documents/pin-tutorial-cgo-2011-final-1.ppt) [PPT 10.5MB] (April 2011, Chamonix, France)
- [CGO 2010](https://www.intel.com/content/dam/develop/external/us/en/documents/cgo-2010-final.ppt) [PPT 7MB] (April 2010, Toronto, Canada)
- Academia Sinica 2009 (May 2009 - Taipei, Taiwan) - [Part 1](https://www.intel.com/content/dam/develop/external/us/en/documents/pintutorial-academiasinica-1.ppt) [PPT 469KB] and [Part 2](https://www.intel.com/content/dam/develop/external/us/en/documents/pintutorial-academiasinica-2.ppt) [PPT 299KB]
- ISCA 2008 (June 2008 - Beijing, China) - [Part 1](https://www.intel.com/content/dam/develop/external/us/en/documents/isca2008-pintutorial-partone.ppt) [PPT 469KB] and [](https://www.intel.com/sites/default/files/article/256675/isca2008-pintutorial-parttwo.ppt)[Part 2](https://www.intel.com/content/dam/develop/external/us/en/documents/isca2008-pintutorial-parttwo.ppt) [PPT 220KB]
- ASPLOS 2008 (March 2008 - Seattle, WA) - [Slides](https://www.intel.com/content/dam/develop/external/us/en/documents/asplos2008-pintutorial.ppt) [PPT 409KB] and [Hands On](https://www.intel.com/content/dam/develop/external/us/en/documents/asplos2008-handson-256675.pdf) [PDF 365KB] materials
- PLDI 2007 (June 2007 - San Diego, CA) - [Slides [PDF 5.601MB]](https://www.intel.com/content/dam/develop/external/us/en/documents/pldi2007-pintutorial-256675.pdf)


### Related Topics


### Other Resources



## Intro
> 🔗 https://www.intel.com/content/www/us/en/developer/articles/tool/pin-a-dynamic-binary-instrumentation-tool.html

Pin is a dynamic binary instrumentation framework for the IA-32 and x86-64 instruction-set architectures that enables the creation of dynamic program analysis tools. Some tools built with Pin are Intel® VTune™ Amplifier, Intel® Inspector, Intel® Advisor and Intel® Software Development Emulator (Intel® SDE). The tools created using Pin, called Pintools, can be used to perform program analysis on user space applications on Linux® and Microsoft Windows. As a dynamic binary instrumentation tool, instrumentation is performed at run time on the compiled binary files. Thus, it requires no recompiling of source code and can support instrumenting programs that dynamically generate code.

Pin provides a rich API that abstracts away the underlying instruction-set idiosyncrasies and allows context information such as register contents to be passed to the injected code as parameters. Pin automatically saves and restores the registers that are overwritten by the injected code, so the application continues to work. Limited access to symbol and debug information is available as well.

Pin was originally created as a tool for computer architecture analysis, but its flexible API and an active community (called "[Pinheads](https://groups.io/g/pinheads)") have created a diverse set of tools for security, emulation and parallel program analysis.



## Ref
[intel Pin：动态二进制插桩的安装和使用，以及如何开发一个自己的Pintool]: https://www.cnblogs.com/level5uiharu/p/16963907.html
Pin可以被看做一个即时JIT编译器（Just in Time）。它可以程序运行时拦截常规可执行文件的指令，并在指令执行前生成新的代码，然后去执行生成的新的代码，并在新的代码执行完成后，将控制权交给被拦截的指令。
就好像在指令前插了一根桩完成了其他的操作之后再执行程序正常的操作。
Pin支持多平台（Windows、Linux、OSX、Android）和多架构（x86，x86-64、Itanium、Xscale，好像支持的也不是很多。。）
**Pin不开源**

Pin只是一个开发框架，在真正对程序进行动态插桩时，需要使用通过Pin编译而来的Pintool。
Pintool是一个动态链接库，在使用Pin时需要通过参数载入Pintool对选定的二进制文件进行插桩分析。
（Pin和Pintool的关系，呃，有点类似于LLVM 和LLVM Pass）

**插桩的颗粒度**
Pin有四种插桩的模式，也叫颗粒度，它们的区别在于“何时进行插桩”：
- INS instrumentation：指令级插桩，即在每条指令执行时插桩
- TRACE instrumentation：基本块级插桩，即在每个基本块执行时插桩
- RTN instrumentation：函数级插桩，即在每个函数执行时插桩
- IMG instrumentation：镜像级插桩，对整个程序映像插桩
其中，TRACE和传统的基本块有所区别，在Pin中，trace从一个branch开始，以一个无条件跳转（jmp call ret）结束。因此会形成一个单一入口，单一出口的指令序列，因此如果按照传统基本块的定义概念去计算基本块数量，结果可能与预期的不一致。
