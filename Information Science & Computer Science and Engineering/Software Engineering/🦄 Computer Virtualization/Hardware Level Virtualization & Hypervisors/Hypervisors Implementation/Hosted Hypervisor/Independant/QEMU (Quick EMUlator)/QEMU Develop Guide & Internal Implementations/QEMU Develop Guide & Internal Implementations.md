# QEMU Develop Guide & Internal Implementations

[TOC]



## Res
📄 https://www.qemu.org/docs/master/specs/index.html

### Developer Notices
All developers will want to familiarise themselves with [QEMU Community Processes](https://www.qemu.org/docs/master/devel/index-process.html#development-process) and how the community interacts. Please pay particular attention to the [QEMU Coding Style](https://www.qemu.org/docs/master/devel/style.html#coding-style) and [Submitting a Patch](https://www.qemu.org/docs/master/devel/submitting-a-patch.html#submitting-a-patch) sections to avoid common pitfalls.

If you wish to implement a new hardware model you will want to read through the [The QEMU Object Model (QOM)](https://www.qemu.org/docs/master/devel/qom.html#qom) documentation to understand how QEMU’s object model works.

Those wishing to enhance or add new CPU emulation capabilities will want to read our [TCG Emulation](https://www.qemu.org/docs/master/devel/index-tcg.html#tcg) documentation, especially the overview of the [Translator Internals](https://www.qemu.org/docs/master/devel/tcg.html#tcg-internals).
- [QEMU Community Processes](https://www.qemu.org/docs/master/devel/index-process.html)
- [QEMU Build and Test System](https://www.qemu.org/docs/master/devel/index-build.html)
- [Internal QEMU APIs](https://www.qemu.org/docs/master/devel/index-api.html)
- [Internal Subsystem Information](https://www.qemu.org/docs/master/devel/index-internals.html)
- [TCG Emulation](https://www.qemu.org/docs/master/devel/index-tcg.html)



## Intro
> This section of the manual documents various parts of the internals of QEMU. You only need to read it if you are interested in reading or modifying QEMU’s source code.

QEMU is a large and mature project with a number of complex subsystems that can be overwhelming to understand. The development documentation is not comprehensive but hopefully presents enough to get you started. If there are areas that are unclear please reach out either via the IRC channel or mailing list and hopefully we can improve the documentation for future developers.

### QEMU Source Code Structure
Qemu 软件虚拟化实现的思路是采用二进制指令翻译技术，主要是提取 guest 代码，然后将其翻译成 TCG 中间代码，最后再将中间代码翻译成 host 指定架构的代码，如 x86 体系就翻译成其支持的代码形式，ARM 架构同理。

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020231019202638.png)

所以，从宏观上看，源码结构主要包含以下几个部分：

/vl.c：最主要的模拟循环，虚拟机环境初始化，和 CPU 的执行。
/target-arch/translate.c：将 guest 代码翻译成不同架构的 TCG 操作码。
/tcg/tcg.c：主要的 TCG 代码。
/tcg/arch/tcg-target.c：将 TCG 代码转化生成主机代码。
/cpu-exec.c：主要寻找下一个二进制翻译代码块，如果没有找到就请求得到下一个代码块，并且操作生成的代码块。

![](../../../../../../../../../Assets/Pics/Pasted%20image%2020231019202757.png)



## Ref
[QEMU 入门指南 ｜ CSDN]: https://blog.csdn.net/fontthrone/article/details/104157859

