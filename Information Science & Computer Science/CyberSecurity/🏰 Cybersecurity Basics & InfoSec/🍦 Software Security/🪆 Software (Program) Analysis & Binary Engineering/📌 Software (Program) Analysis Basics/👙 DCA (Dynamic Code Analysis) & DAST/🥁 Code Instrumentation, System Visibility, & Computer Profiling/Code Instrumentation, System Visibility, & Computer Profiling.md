# Code Instrumentation, System Visibility, & Computer Profiling

[TOC]



## Res
### Related Topics
↗ [📌 Computer Profiling & System Visibility](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md) "Linux"
↗ [Computer Profiling](../../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/Host%20Management/Computer%20Profiling.md) "macos"
↗ [End Host Management & Hardware Profiling](../../../../../../../🔑%20CS%20Core/Generic%20Software%20Tools%20&%20Projects/🧱%20Hardware%20Related%20Tools/End%20Host%20Management%20&%20Hardware%20Profiling.md)
↗ [Hook Techniques](../../SRE%20(Software%20Reverse%20Engineering)/Hook%20Techniques/Hook%20Techniques.md)

↗ [Program Language Processing & Compilation Theory (Compile-time)](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Processing%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Program Execution (Runtime)](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
↗ [Address Space & Memory Layout](../../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)

↗ [Software Testing](../../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)


### Other Resources
https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)
- [Hooking](https://en.wikipedia.org/wiki/Hooking "Hooking") – range of techniques used to alter or augment the behavior of an operating system, of applications, or of other software components by intercepting function calls or messages or events passed between software components.
- [Instruction set simulator](https://en.wikipedia.org/wiki/Instruction_set_simulator "Instruction set simulator") – simulation of all instructions at machine code level to provide instrumentation
- [Runtime intelligence](https://en.wikipedia.org/wiki/Runtime_intelligence "Runtime intelligence") – technologies, [managed services](https://en.wikipedia.org/wiki/Managed_services "Managed services") and practices for the collection, integration, analysis, and presentation of application usage levels, patterns, and practices.
- [Software performance analysis](https://en.wikipedia.org/wiki/Software_performance_analysis "Software performance analysis") – techniques to monitor code performance, including instrumentation.
- [Hardware performance counter](https://en.wikipedia.org/wiki/Hardware_performance_counter "Hardware performance counter")
- [DTrace](https://en.wikipedia.org/wiki/DTrace "DTrace") – A comprehensive dynamic tracing framework for troubleshooting kernel and application problems on production systems in real time, implemented in [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD"), and many other platforms and products.
- [_Java Management Extensions_ (JMX)](https://en.wikipedia.org/wiki/Java_Management_Extensions "Java Management Extensions") – Java technology for managing and monitoring applications, system objects, devices (such as printers), and service-oriented networks.
- [Application Response Measurement](https://en.wikipedia.org/wiki/Application_Response_Measurement "Application Response Measurement") – standardized instrumentation [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") for [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") and [Java](https://en.wikipedia.org/wiki/Java_\(programming_language\) "Java (programming language)").
- [Dynamic recompilation](https://en.wikipedia.org/wiki/Dynamic_recompilation "Dynamic recompilation") – a feature of some emulators and virtual machines where the system may recompile some part of a program during execution.



## Intro



## Code Instrumentation (插桩)
> 🔗 [Reichelt (2024)](https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#ref:reichelt2024overhead)
> 🔗 [GitHub - ucla-pls/wiretap: An instrumenter for dynamic logging for java bytecode programs](https://github.com/ucla-pls/wiretap)
> 🔗 [Kalhauge (2018)](https://courses.compute.dtu.dk/02242/topics/concolic-execution.html#ref:kalhauge2018sound)


> 🔗 https://en.wikipedia.org/wiki/Instrumentation_(computer_programming)

In [computer programming](https://en.wikipedia.org/wiki/Computer_programming "Computer programming"), **instrumentation** is the act of modifying software so that [analysis](https://en.wikipedia.org/wiki/Analysis "Analysis") can be performed on it.

==Generally, instrumentation either modifies [source code](https://en.wikipedia.org/wiki/Source_code "Source code") or [binary code](https://en.wikipedia.org/wiki/Binary_code "Binary code").== Execution environments like the JVM provide separate interfaces to add instrumentation to program executions, such as the [JVMTI](https://en.wikipedia.org/wiki/Java_Virtual_Machine_Tools_Interface "Java Virtual Machine Tools Interface"), which enables instrumentation during program start.

Instrumentation enables [profiling](https://en.wikipedia.org/wiki/Profiling_\(computer_programming\) "Profiling (computer programming)"): measuring dynamic behavior during a test run. This is useful for properties of a program that cannot be [analyzed statically](https://en.wikipedia.org/wiki/Static_program_analysis "Static program analysis") with sufficient precision, such as [performance](https://en.wikipedia.org/wiki/Software_performance "Software performance") and [alias analysis](https://en.wikipedia.org/wiki/Alias_analysis "Alias analysis").

Instrumentation can include:
- [Logging events](https://en.wikipedia.org/wiki/Tracing_\(software\) "Tracing (software)") such as failures and operation start and end
- Measuring and logging the duration of operations



## Computer Profiling (性能分析)



## Ref
[Instrumentation 与 Profiling | CSDN]: https://blog.csdn.net/fenng/article/details/81362183?fromshare=blogdetail&sharetype=blogdetail&sharerId=81362183&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

看到有反馈说到《Oracle性能诊断艺术》中对于 Instrumentation 这个词的翻译问题。说实话，对这个词的处理当初挺让我头疼，这是个可以意会但很难用一个中文词汇对应的术语，一些翻译词典或是已有的翻译作品对这个词的处理也是五花八门。在图灵著译俱乐部里面提问得到很多回答（这里要致谢！）。权衡再三，最后根据整个章节的重点以及上下文选择用 “性能测量”。

我不喜欢用有些人说的测试领域内所用的术语”插桩”，实在是有点诡异。当然，如果这个词不翻译的话，或许更好。

另一个比较难以处理的就是 “Profiling” ，根据维基百科的解释 ，这个词指”动态程序分析的一种形式…根据程序执行收集到的信息调查程序的运行行为，通常用来查找程序中的瓶颈”。最后我用了”剖析”。(Updated: 中文是 “性能分析“。不过我觉得似乎有点容易混淆。)

这两个词很有趣，任何一个程序或者软件项目构建的初期，如果没有考虑 Instrumentation ，在程序或项目交付后，又不能做 Profiling ，那么这个程序或者项目肯定会是灾难。所以，能对 DBA 着重强调一下这一点或许要比看更多的同质化内容更有价值。
