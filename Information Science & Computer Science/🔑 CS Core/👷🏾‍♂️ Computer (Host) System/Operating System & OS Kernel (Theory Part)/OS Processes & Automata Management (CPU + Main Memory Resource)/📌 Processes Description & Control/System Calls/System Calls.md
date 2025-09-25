# System Calls

[TOC]



## Res
### Related Topics
↗ [Privilege Level & Protection Ring](../../../../Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Privilege%20Level%20&%20Protection%20Ring.md)
↗ [Instruction Execution/ Interrupts](../../../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md) ⭐
↗ [ASM /Interrupts](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interrupts/Interrupts.md)

↗ [System Call Interfaces (SCI)](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/System%20Call%20Interfaces%20(SCI).md)
- ↗ [POSIX (Portable Operating System Interface)](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/POSIX%20(Portable%20Operating%20System%20Interface).md)
- ↗ [Windows API](../../../../Computer%20Interfaces%20&%20Hardware%20Drivers/System%20Call%20Interfaces%20(SCI)/Windows%20API.md)

↗ [Linux System Calls](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md) ⭐
- ↗ [Linux System Calls on Intel x86 CPU](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/ISA%20Specific%20Linux%20System%20Calls/Linux%20System%20Calls%20on%20Intel%20x86%20CPU.md)
↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [Operating System Kernel (Kernel Mode)](../../../😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../../😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)
↗ [CPU (Central Processing Unit)](../../../../Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/CPU%20(Central%20Processing%20Unit).md)

↗ [eBPF (extended BPF)](../../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Level%20Projects/eBPF%20(extended%20BPF)/eBPF%20(extended%20BPF).md)


### Learning Resources



## Intro
> You can find a list of system calls on Linux by checking the [man page for syscalls(2)](http://man7.org/linux/man-pages/man2/syscalls.2.html).
> ↗ [Linux System Calls](../../../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md)
> 
> ↗ [The Essence of Computing - Program](../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Program.md)

**System calls** are how a program enters the kernel to perform some task. Programs use system calls to perform a variety of operations such as: creating processes, doing network and file IO, and much more.


### System Calls & Wrapper Functions (in Linux Kernel)
There are several different ways for user programs to make system calls and the low-level instructions for making a system call vary among CPU architectures.

As an application developer, you don’t typically need to think about how exactly a system call is made. You simply include the appropriate header file and make the call as if it were a normal function.

**Core system library** (usually `libc`) like **`glibc` project** provides **wrapper code /wrapper functions** which abstracts you away from the underlying code which arranges the arguments you’ve passed and enters the kernel.

> 其实系统调用这个词有两种理解，有些资料把open、read、write、fork等man手册第二页的函数称之为系统调用，其实这个只是真正系统调用的[封装函数](https://www.zhihu.com/search?q=%E5%B0%81%E8%A3%85%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)（wrapper functions），我姑且称之为**广义上的系统调用**。每个系统调用的封装函数都会通过软中断陷入内核态然后调用对应的真正的系统调用。且一般会一一对应。比如fork函数内部会调用sys_fork。而后者其实才是真正的准确意义上的系统调用，由内核提供的服务，姑且称之为**狭义的系统调用**。
> 
> 系统调用的封装函数其实是系统标准库（一般是C语言中的glibc）实现的，而真正的系统调用是内核中的实现。
> 
> 上述描述符合Linux实现的系统调用机制，然而Linux属于宏内核架构；需要注意的是虽然这种架构和相应的系统调用机制是现在的主流，但是这绝不是唯一的架构。比如，上述系统调用的机制并不是微内核架构中的情况。

![protection_ring.excalidraw | 800](../../../../../../../../Assets/Illustrations/Computer%20System/protection_ring.excalidraw.md)


### Privilege Levels /Protection Ring
> ↗ [Privilege Level & Protection Ring](../../../../Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/📌%20ISA%20Basics/Privilege%20Level%20&%20Protection%20Ring.md)


![](../../../../../../../../Assets/Pics/Pasted%20image%2020240217173550.png)
<small>Protection ring of Intel x86 CPU. Usually ring 0 is kernel space, ring 3 is user space.</small>


### System Calls & (Software) Interrupts
> ↗ [Program Execution /Interrupts](../../../../../🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)
> ↗ [ASM /Interrupts](../../../../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/⚡️%20ASM%20Advance/Interrupts/Interrupts.md)
> ↗ [Operating System Kernel (Kernel Mode)](../../../😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240217141037.png)
<small>System calls in different kernel design.</small>

> 可以发现，在用户态和内核态的边界上画着线表示的就是系统调用！也就是说不管是[单内核](https://www.zhihu.com/search?q=%E5%8D%95%E5%86%85%E6%A0%B8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)还是微内核，运行在用户态的应用程序，想使用某些内核态才能执行的功能，必须要经过系统调用来实现。所以你需要明白：进程从用户态陷入了内核态，这是目的，而使用系统调用，仅仅是达成该目的的手段。因果要理清。 
> 
> 再来解释一下什么是软中断。要说软中断，先说一下中断（interrupt），如果你大学的时候有听过《_计算机组成与_[体系结构](https://www.zhihu.com/search?q=%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)》这门课的话，那么你应该会记得。中断本身是一个硬件概念，就是打断CPU，让其执行一下其他任务，比如键盘中断、打印机中断、定时器中断等。[软中断](https://www.zhihu.com/search?q=%E8%BD%AF%E4%B8%AD%E6%96%AD&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)本就是从软件层面模拟了这一中断操作。
> 
> 网上很多资料大多会提到使用128号软中断指令（int $0x80）来使进程从用户态陷入内核态，执行完毕后调用[iret指令](https://www.zhihu.com/search?q=iret%E6%8C%87%E4%BB%A4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)重回用户态。但其实这是比较传统、比较老的做法。后来随着CPU（Intel和AMD）的升级，Linux内核一般会使用快速系统调用（Fast system calls）的sysenter/syscall指令来代替int $0x80，使用sysexit/sysret代替iret。在运行[软中断指令](https://www.zhihu.com/search?q=%E8%BD%AF%E4%B8%AD%E6%96%AD%E6%8C%87%E4%BB%A4&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A1329177990%7D)的时候，会用一个寄存器来存储具体的系统调用号，比如在Linux上read和write的系统调用号分别为0和1。


### Calling system calls with assembly is a bad idea
It’s not a great idea to call system calls by writing your own assembly code.

One big reason for this is that some system calls have additional code that runs in `glibc` before or after the system call runs.

In the examples below, we’ll be using the `exit` system call. It turns out that you can register functions to run when `exit` is called by a program by using [`atexit`](http://man7.org/linux/man-pages/man3/atexit.3.html).

Those functions are called from `glibc`, not the kernel. So, if you write your own assembly to call `exit` as we show below, your registered handler functions won’t be executed since you are bypassing `glibc`.

Nevertheless, manually making system calls with assembly is a good learning experience.



## Ref
[👍 系统调用和库函数有什么区别？ - 果冻虾仁的回答 - 知乎]: https://www.zhihu.com/question/19930018/answer/1329177990

- [The Definitive Guide To Linux System Calls](https://link.zhihu.com/?target=https%3A//blog.packagecloud.io/eng/2016/04/05/the-definitive-guide-to-linux-system-calls/)
- [Wikipedia: System Call](https://link.zhihu.com/?target=https%3A//en.wikipedia.org/wiki/System_call)
- [走进程序世界的田园——从系统调用看微内核宏内核](https://link.zhihu.com/?target=https%3A//www.ixueshu.com/document/92bdd43d8ed96cc7.html)
- [微内核操作系统MINIX3消息机制的研究与改进](https://link.zhihu.com/?target=https%3A//www.ixueshu.com/document/79edc05c2a32f39843d218eac83a3390318947a18e7f9386.html)
- [Linux syscall过程分析](https://link.zhihu.com/?target=https%3A//cloud.tencent.com/developer/article/1492374)

[👍 The Definitive Guide to Linux System Calls]: https://blog.packagecloud.io/the-definitive-guide-to-linux-system-calls/
[👍 Linux syscall过程分析（万字长文）]: https://cloud.tencent.com/developer/article/1492374
