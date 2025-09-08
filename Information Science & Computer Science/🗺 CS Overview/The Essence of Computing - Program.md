# The Essence of Computing - Program

[TOC]



## Res
### Related Topics
↗ [Theory of Computation](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/Theory%20of%20Computation.md)
- ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

↗ [Mathematical Modeling & Real World Problem Solving](../🧮%20Mathematics/Mathematical%20Modeling%20&%20Real%20World%20Problem%20Solving.md)
↗ [(Formal) Model Checking /1️⃣ System Modeling](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)

↗ [Computer Languages & Programming Methodology](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
↗ [Program Compilation & Execution](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/Program%20Compilation%20&%20Execution.md)
- ↗ [Program Language Translation & Compilation Theory (Compile-time)](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)

↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
↗ [Computer Memory & Storage](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)
↗ [Address Space & Memory Layout](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)

↗ [Operating System & OS Kernel (Theory Part)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
↗ [Operating Systems & Kernels (Engineering Part)](../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)


### Other Resources
🔥 🎬【操作系统上的程序 (什么是程序和编译器) [南京大学2022操作系统-P2]】 https://www.bilibili.com/video/BV12L4y1379V/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### Related Contextual Concepts Review
![ | 800](../../../Assets/Illustrations/Computer%20Science%20Philosophy/Human_and_knowledge.excalidraw.md)
<small>The relationship of language, information/data, computation, and automation.</small>

![Automata_Formal_Lan.excalidraw | 800](../../../Assets/Illustrations/Math/Automata_Formal_Lan.excalidraw.md)
<small>Automata and Formal Language</small>
↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)

![computer_architecture.excalidraw | 800](../../../Assets/Illustrations/Computer%20System/computer_architecture_and_computer_science.excalidraw.md)
<small>Computer System & Computer Science Overview</small>
↗ [Computer Architecture](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Architecture.md)

![application_execution_and_computer_data_flow.excalidraw | 800](../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Computer Program Execution Procedure: Top-down Review</small>
↗ [Program Compilation & Execution](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/Program%20Compilation%20&%20Execution.md)

- 主体视角下的宇宙三大构成元素：信息、物质、能量
	- 知识是有组织的信息
	- 语言为信息一切活动提供载体。
		- 信息可以脱离语言存在，但是语言是复杂信息运动的优质载体。脱离了语言，信息很难在主体意识下做复杂运动。
- 计算机科学的研究范畴：信息运动的自动化（自动化计算）
	- 计算机的构成：计算模型（数学）+ 硬件实现 + 软件实现
	- 计算机的应用：数学建模（算法）+ 软件实现（编程）
- 软件：软件 = 程序 + 文档
	- 程序 = 指令（编程语言）+ 数据
	- 程序通过语言的形式对计算机硬件的运行进行指令，以达到计算的目的。
- 结论
	- 编程语言和程序构成了计算机科学及计算的核心/灵魂；
	- 编程语言主要的研究范围在于形式语言的设计及实现，前者主要涉及对应的数学知识，后者还涉及软件工程；
	- 程序的主要研究范围在于程序的设计及运行，前者涉及具体的编程语言和算法，后者涉及计算机硬件和软件的工作原理。



## 😆 Program, Computer, and Automation
🔥 🎬【操作系统上的程序 (什么是程序和编译器) [南京大学2022操作系统-P2]】 https://www.bilibili.com/video/BV12L4y1379V/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

### Automaton & Transition System
↗ [(Formal) Model Checking /1️⃣ System Modeling](../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics/🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)
↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)


### Digital Circuits and Automaton (State Machine)
状态 = 寄存器保存的值 (flip-flop)
初始状态 = RESET (implementation dependent)
迁移 = 组合逻辑电路计算寄存器下一周期的值


### Program's State Machine Model (Programming Languages Semantics)
> ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> Push-Down Automaton (PDA)
#### 1️⃣ Program's State Machine: Application Perspective
C 程序的状态机模型 (语义，semantics)
- 状态 = 堆 + 栈
- 初始状态 = `main` 的第一条语句
- 迁移 = 执行一条简单C语句
    - 任何 C 程序都可以改写成 “非复合语句” 的 C 代码
    - [真的有这种工具](https://cil-project.github.io/cil/) (C Intermediate Language) 和[解释器](https://gitlab.com/zsaleeba/picoc)

C 程序的状态机模型 (语义，semantics)
- 状态 = stack frame 的列表 (每个 frame 有 PC) + 全局变量
- 初始状态 = main(argc, argv), 全局变量初始化
- 迁移 = 执行 top stack frame PC 的语句; PC++
    - 函数调用 = push frame (frame.PC = 入口)
    - 函数返回 = pop frame

应用：将任何递归程序就地转为非递归
#### 2️⃣ Program's State Machine: CPU(Computer) Perspective
C 程序的状态机模型 (语义，semantics)
- 状态 = 内存 MM + 寄存器 RR
- 初始状态 = (稍后回答)
- 迁移 = 执行一条指令
#### Application Program and OS Program
> ↗ [Operating System & OS Kernel (Theory Part)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
> ↗ [Operating Systems & Kernels (Engineering Part)](../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
> ↗ [Operating System Kernel (Kernel Mode)](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
> ↗ [System Calls](../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
> ↗ [Interrupts (Software & Hardware)](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🤡%20Program%20Execution%20(Runtime)/Instruction%20Execution/Interrupts%20(Software%20&%20Hardware).md)

操作系统上的程序:
- 所有的指令都只能计算
	- deterministic: `mov`, `add`, `sub`, `call`, ...
	- non-deterministic: `rdrand`, ...
	- 但这些指令甚至都无法使程序停下来 (NEMU: 加条 `trap` 指令)
- 调用操作系统 `syscall`
	- 把 `(M,R)`完全交给操作系统，任其修改
	    - 一个有趣的问题：如果程序不打算完全信任操作系统？
	- 实现与操作系统中的其他对象交互
	    - 读写文件/操作系统状态 (例如把文件内容写入 MM)
	    - 改变进程 (运行中状态机) 的状态，例如创建进程/销毁自己

==操作系统上的应用程序 = 计算 + `syscall`==
- 程序 = 计算 → `syscall` → 计算 → ...
	- 被操作系统加载
		- 通过另一个进程执行 `execve` 设置为初始状态
	- 状态机执行
		- 进程管理：`fork`, `execve`, `exit`, ...
		- 文件/设备管理：`open`, `close`, `read`, `write`, ...
		- 存储管理：`mmap`, `brk`, ...
	- 直到 `_exit (exit_group)` 退出
- 💀 问题：怎么构造一个最小的 Hello, World？
- 💀 问题：一个普通的、人畜无害的 Hello World C 程序执行的第一条指令在哪里？ /“二进制程序状态机的初始状态是什么？” (↗ [Intro to Computer Science /Questions Leading my CS Study](💋%20Intro%20to%20Computer%20Science/Intro%20to%20Computer%20Science.md#Questions%20Leading%20my%20CS%20Study))
	- `ld-linux-x86-64.so` 加载了 libc
		- 之后 libc 完成了自己的初始化
	    - RTFM: [libc startup](https://www.gnu.org/software/hurd/glibc/startup.html) on Hurd
	    - `main()` 的开始/结束并不是整个程序的开始/结束
	    - 例子：[hello-goodbye.c](https://jyywiki.cn/pages/OS/2022/demos/hello-goodbye.c)
	- 谁规定是 `ld-linux-x86-64.so`，而不是 `xxxx.so`?
		- `readelf` 告诉你答案

==操作系统上的应用程序：都在操作系统 API (syscall) 和操作系统中的对象上构建==
- 编译器 (gcc)，代表其他工具程序
	- 主要的系统调用：execve, read, write
	- `strace -f gcc a.c` (gcc 会启动其他进程)
		- 可以管道给编辑器 `vim -`
		- 编辑器里还可以 `%!grep` (细节/技巧)
- 图形界面程序 (xedit)，代表其他图形界面程序 (例如 vscode)
	- 主要的系统调用：`poll`, `recvmsg`, `writev`
	- `strace xedit`
	    - 图形界面程序和 X-Window 服务器按照 X11 协议通信
	    - 虚拟机中的 `xedit` 将 X11 命令通过 ssh (X11 forwarding) 转发到 Host
- 窗口管理器
    - 管理设备和屏幕 (`read`/`write`/`mmap`)
    - 进程间通信 (`send`, `recv`)
- 任务管理器
    - 访问操作系统提供的进程对象 (`readdir`/`read`)
    - 参考 gdb 里的 `info proc *`
- 杀毒软件
    - 文件静态扫描 (`read`)
    - 主动防御 (`ptrace`)
    - 其他更复杂的安全机制……


### Compilation: Switch /Transfer Between Program's State Machine
> ↗ [Automata Theory and (Formal) Language Theory](../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic/😶‍🌫️%20Theory%20of%20Computation/🍏%20Automata%20Theory%20and%20(Formal)%20Language%20Theory/Automata%20Theory%20and%20(Formal)%20Language%20Theory.md)
> ↗ [Program Compilation & Execution](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/Program%20Compilation%20&%20Execution.md)
> ↗ [Compilation Phase](../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/Compilation%20Phase.md)
> ↗ [Compilation & Program Loading Tools](../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)

编译器：源代码 $S$ (状态机) → 二进制代码 $C$ (状态机)
$$C=compile(S)$$

编译 (优化) 的正确性 (Soundness): 
- $S$ 与 $C$ 的可观测行为严格一致
    - system calls; volatile variable loads/stores; termination
- Trivially 正确 (但低效) 的实现
    - 解释执行/直接翻译 $S$ 的语义

现代 (与未来的) 编译优化: 
- 在保证观测一致性 (sound) 的前提下改写代码 (rewriting)
	- Inline assembly 也可以参与优化
	    - 其他优化可能会跨过不带 barrier 的 `asm volatile`
	- Eventual memory consistency
	- Call to external CU = write back visible memory
- 这给了我们很多想象的空间
	- Semantic-based compilation (synthesis)
	- AI-based rewriting
	- Fine-grained semantics & system call fusion

> [An executable formal semantics of C with applications](https://dl.acm.org/doi/10.1145/2103621.2103719) (POPL'12)
> [CompCert C verified compiler](https://compcert.org/motivations.html) and a [paper](https://xavierleroy.org/publi/compcert-backend.pdf) (POPL'06, Most Influential Paper Award 🏅)
> [Copy-and-patch compilation](https://dl.acm.org/doi/10.1145/3485513) (OOPSLA'21, Distinguished Paper 🏅)



## Ref
[👍 How libc startup in a process works?]: https://www.gnu.org/software/hurd/glibc/startup.html
**Statically-linked program**
- The ELF headers points program start at `_start`.
- `_start` (sysdeps/mach/hurd/i386/static-start.S) calls `_hurd_stack_setup`
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_hurd_stack_setup` (sysdeps/mach/hurd/i386/init-first.c) calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `doinit` (in sysdeps/mach/hurd/i386/init-first.c), which mangles the stack and calls `doinit1` which calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit` hooks, which notably checks `std*`).
- We are back to `_start`, which jumps to `_start1` which is the normal libc startup which calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, tls, libpthread, atexit
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `preinit_array_start` functions
- `__libc_csu_init` calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls calls application's `main`, then `exit`.

**dynamically-linked program**
- dl.so ELF headers point its start at `_start`.
- `_start` (sysdeps/i386/dl-machine.h) calls `_dl_start`.
- `_dl_start` (elf/rtld.c) initializes `bootstrap_map`, calls `_dl_start_final`
- `_dl_start_final` calls `_dl_sysdep_start`.
- `_dl_sysdep_start` (sysdeps/mach/hurd/dl-sysdep.c) calls `__mach_init` to initialize enough to run RPCs, then calls `_hurd_startup`.
- `_hurd_startup` (hurd/hurdstartup.c) gets hurdish information from servers and calls its `main` parameter.
- the `main` parameter was actually `go` inside `_dl_sysdep_start`, which calls `dl_main`.
- `dl_main` (elf/rtld.c) interprets ld.so parameters, loads the binary and libraries, calls `_dl_allocate_tls_init`.
- we are back to `go`, which branches to `_dl_start_user`.
- `_dl_start_user` (./sysdeps/i386/dl-machine.h) runs `RTLD_START_SPECIAL_INIT` (sysdeps/mach/hurd/i386/dl-machine.h) which calls `_dl_init_first`.
- `_dl_init_first` (sysdeps/mach/hurd/i386/init-first.c) calls `first_init` which calls `__mach_init` to initialize enough to run RPCs, then runs the `_hurd_preinit_hook` hooks, which initialize global variables of libc.
- `_dl_init_first` calls `init`.
- `init` sets threadvars, tries to initialize threads (and perhaps switches to the new stack) and gets to call `init1`.
- `init1` gets the Hurd block, calls `_hurd_init` on it
- `_hurd_init` (hurd/hurdinit.c) initializes initial ports, starts the signal thread, runs the `_hurd_subinit` hooks (`init_dtable` hurd/dtable.c notably initializes the FD table and the `_hurd_fd_subinit`hooks, which notably checks `std*`).
- we are back to `_dl_start_user`, which calls `_dl_init` (elf/dl-init.c) which calls application initializers.
- `_dl_start_user` jumps to the application's entry point, `_start`
- `_start` (sysdeps/i386/start.S) calls `__libc_start_main`
- `__libc_start_main` (actually called `LIBC_START_MAIN` in csu/libc-start.c) initializes libc, atexit,
- `__libc_start_main` calls initialization function given as parameter `__libc_csu_init`,
- `__libc_csu_init` (csu/elf-init.c) calls `_init`
- `_init` (sysdeps/i386/crti.S) calls `PREINIT_FUNCTION`, (actually libpthread on Linux, `__gmon_start__` on hurd)
- back to `__libc_csu_init` calls `init_array_start` functions
- back to `__libc_start_main`, it calls application's `main`, then `exit`.

