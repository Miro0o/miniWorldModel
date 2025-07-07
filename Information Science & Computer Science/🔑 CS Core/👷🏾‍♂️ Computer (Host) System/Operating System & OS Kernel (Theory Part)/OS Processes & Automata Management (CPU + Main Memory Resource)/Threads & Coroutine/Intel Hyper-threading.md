# Intel Hyper-threading

[TOC]



## Res



## Intro
> 🔗 https://en.wikipedia.org/wiki/Hyper-threading

Hyper-threading (officially called Hyper-Threading Technology or HT Technology and abbreviated as HTT or HT) is Intel's proprietary simultaneous multithreading (SMT) implementation used to improve parallelization of computations (doing multiple tasks at once) performed on x86 microprocessors. It was introduced on Xeon server processors in February 2002 and on Pentium 4 desktop processors in November 2002. Since then, Intel has included this technology in Itanium, Atom, and Core 'i' Series CPUs, among others.

For each processor core that is physically present, the operating system addresses two virtual (logical) cores and shares the workload between them when possible. The main function of hyper-threading is to increase the number of independent instructions in the pipeline; it takes advantage of superscalar architecture, in which multiple instructions operate on separate data in parallel. With HTT, one physical core appears as two processors to the operating system, allowing concurrent scheduling of two processes per core. In addition, two or more processes can use the same resources: If resources for one process are not available, then another process can continue if its resources are available.

In addition to requiring simultaneous multithreading support in the operating system, hyper-threading can be properly utilized only with an operating system specifically optimized for it



## Ref

