# Procedure (Function) Call & Runtime Memory Layout

[TOC]



## Res
### Related Topics
↗ [ASM (Assembly Languages)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)

↗ [(Text) Data Representations & Storage in Computer](../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/(Text)%20Data%20Representations%20&%20Storage%20in%20Computer.md)

↗ [Primary Storage (Main Memory) Technologies & RAM](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)
- ↗ [Virtual Memory (Hardware and Control Structure)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
- ↗ [Virtual Memory (OS Software Level)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)

↗ [Address Space & Memory Layout](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
↗ [Register](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/📌%20Basic%20CPU%20Components/Register.md)
↗ [Memory Access & Addressing](Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

↗ [Network Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)
↗ [Network Programming & RPC](../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [Internal Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)

↗ [System Core Function Libraries & C Standard Library (User Mode)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md) ⭐
↗ [Linux System Calls](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md) ⭐

↗ [Operating System Security](../../../../CyberSecurity/System%20Security/Operating%20System%20Security/Operating%20System%20Security.md)
- ↗ [Memory Threats & Attacks](../../../CyberSecurity/System%20Security/🏃%20System%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Memory%20Threats%20&%20Attacks.md)
- ↗ [Memory Protections & Mitigations](../../../CyberSecurity/System%20Security/🏃%20System%20Runtime%20Security/📝%20Memory%20Security/Memory%20Protections%20&%20Mitigations/Memory%20Protections%20&%20Mitigations.md)
↗ [Software Security](../../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/Software%20Security.md)
- ↗ [DCA (Dynamic Code Analysis) & DAST](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/📌%20Software%20Analysis%20Basics%20Methodologies/📌%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST.md)

↗ [FAQ /👉 Linux Library Functions Call 🆚 System Call 🆚 Procedure/Function Call](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/FAQ.md#👉%20Linux%20Library%20Functions%20Call%20🆚%20System%20Call%20🆚%20Procedure/Function%20Call)


### Other Resources



## Intro: Function /Procedure Calls Basics
### Function /Procedure Calls in a C Example


### ⭐ Function /Procedure Calls in an x86 Example: A Quick Detour
> ↗ [x86 Architecture Family (80x86, 8086 family)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
> ↗ [x86 ISA Based ASM](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86%20ISA%20Based%20ASM.md)
> ↗ [8086 ASM (16 bit)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md)
> ↗ [Address Space & Memory Layout](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
> ↗ [Register](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips/📌%20Microprocessors%20Unit%20(MPU)/CPU%20(Central%20Processing%20Unit)/📌%20Basic%20CPU%20Components/Register.md)
> 🔗 https://textbook.cs161.org/memory-safety/x86.html#28-x86-function-calls
> 🎬 [Lecture 0: CS61C Review](https://sp21.cs161.org/review/0)
> 🎬 [Function Call in x86 Assembly](https://youtu.be/JmYsn4NNeH4?si=NIjqHXnsZkhcaMCw)

![](../../../../../Assets/Pics/Screenshot%202024-09-04%20at%2012.59.03.png)
##### Stack: Pushing and popping
![](../../../../../Assets/Pics/Pasted%20image%2020240910095249.png)
![](../../../../../Assets/Pics/Pasted%20image%2020240910095256.png)
##### x86 Function Call
When a function is called, the stack allocates extra space to store local variables and other information relevant to that function. Recall that the stack grows down, so this extra space will be at lower addresses in memory. Once the function returns, the space on the stack is freed up for future function calls. This section explains the steps of a function call in x86.

**Recall that in a function call, the _caller_ calls the _callee_.** Program execution starts in the caller, moves to the callee as a result of the function call, and then returns to the caller after the function call completes.

When we call a function in x86, we need to update the values in all three registers we’ve discussed:
- `eip`, the instruction pointer, is currently pointing at the instructions of the caller. It needs to be changed to point to the instructions of the callee.
- `ebp` and `esp` currently point to the top and bottom of the caller stack frame, respectively. Both registers need to be updated to point to the top and bottom of a new stack frame for the callee.

When the function returns, we want to restore the old values in the registers so that we can go back to executing the caller. **When we update the value of a register, we need to save its old value on the stack so we can restore the old value after the function returns.**

There are **11 steps** to calling an x86 function and returning. In this example, `main` is the caller function and `foo` is the callee function. In other words, `main` calls the `foo` function.

Here is the stack before the function is called. `ebp` and `esp` point to the top and bottom of the caller stack frame.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163556.png)

**1. Push arguments onto the stack.** RISC-V passes arguments by storing them in registers, but x86 passes arguments by pushing them onto the stack. Note that esp is decremented as we push arguments onto the stack. Arguments are pushed onto the stack in reverse order.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163609.png)

**2. Push the old `eip` (`rip`) on the stack.** We are about to change the value in the `eip` register, so we need to save its current value on the stack before we overwrite it with a new value. When we push this value on the stack, it is called the `old eip` or the `rip` (return instruction pointer).[6](https://textbook.cs161.org/memory-safety/x86.html#fn:6)

![](../../../../../Assets/Pics/Pasted%20image%2020240902163631.png)

**3. Move `eip`.** Now that we’ve saved the old value of `eip`, we can safely change `eip` to point to the instructions for the callee function.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163646.png)

**4. Push the `old ebp` (`sfp`) on the stack.** We are about to change the value in the `ebp` register, so we need to save its current value on the stack before we overwrite it with a new value. When we push this value on the stack, it is called the `old ebp` or the `sfp` (saved frame pointer). Note that `esp` has been decremented because we pushed a new value on the stack.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163656.png)

**5. Move `ebp` down.** Now that we’ve saved the old value of `ebp`, we can safely change `ebp` to point to the top of the new stack frame. The top of the new stack frame is where `esp` is currently pointing, since we are about to allocate new space below `esp` for the new stack frame.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163706.png)

**6. Move esp down.** Now we can allocate new space for the new stack frame by decrementing `esp`. The compiler looks at the complexity of the function to determine how far `esp` should be decremented. For example, a function with only a few local variables doesn’t require too much space on the stack, so `esp` will only be decremented by a few bytes. On the other hand, if a function declares a large array as a local variable, `esp` will need to be decremented by a lot to fit the array on the stack.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163716.png)

**7. Execute the function.** Local variables and any other necessary data can now be saved in the new stack frame. Additionally, since ebp is always pointing at the top of the stack frame, we can use it as a point of reference to find other variables on the stack. For example, the arguments will be located starting at the address stored in ebp, plus 8.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163725.png)

**8. Move esp up.** Once the function is ready to return, we increment `esp` to point to the top of the stack frame (`ebp`). This effectively erases the stack frame, since the stack frame is now located below esp. (Anything on the stack below `esp` is undefined.)
![](../../../../../Assets/Pics/Pasted%20image%2020240902163733.png)

**9. Restore the old `ebp` (`sfp`)**. The next value on the stack is the `sfp`, the old value of `ebp` `before` we started executing the function. We pop the `sfp` off the stack and store it back into the `ebp` register. This returns `ebp` to its old value before the function was called.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163742.png)

**10. Restore the old eip (rip)**. The next value on the stack is the rip, the old value of eip before we started executing the function. We pop the rip off the stack and store it back into the eip register. This returns eip to its old value before the function was called.[7](https://textbook.cs161.org/memory-safety/x86.html#fn:7)
![](../../../../../Assets/Pics/Pasted%20image%2020240902163750.png)

**11. Remove arguments from the stack.** Since the function call is over, we don’t need to store the arguments anymore. We can remove them by incrementing `esp` (recall that anything on the stack below `esp` is undefined).
![](../../../../../Assets/Pics/Pasted%20image%2020240902163801.png)

You might notice that we saved the old values of `eip` and `ebp` during the function call, but not the old value of esp. A nice consequence of this function call design is that `esp` will automatically move to the bottom of the stack as we push values onto the stack and automatically return to its old position as we remove values from the stack. As a result, there is no need to save the old value of `esp` during the function call.


### How to Trace Function Calls? Or even System Calls ?
#function_call #procedure_call 

↗ [Software Analysis & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20Analysis%20&%20Binary%20Engineering/Software%20Analysis%20&%20Binary%20Engineering.md)



## ABI & Architecture-Specifics on Procedure Call
> **1️⃣ Calling conventions**, **2️⃣ type representations**, and **3️⃣ name mangling** are all part of what is known as an ↗ [ABI (Application Binary Interface)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Interfaces%20&%20Hardware%20Drivers/ABI%20(Application%20Binary%20Interface).md)


### 🎻 Function /Procedure Calling Conventions
> 🤖 Contents below are AI-generated (Chat-gpt4-mini) 

Function call conventions are a set of rules that define how functions receive parameters, return values, and manage resources such as the stack and registers. These conventions ensure **compatibility** and **interoperability** between different parts of a program, such as between functions written in different languages or between a program and the operating system.

==Function calling conventions are thus a product of both the underlying **architecture (ISA)** and the design choices made by **compiler** and **system designers**.==
- **ISA Influence**: The difference in function call conventions between architectures like x86 and RISC-V is indeed influenced by their respective ISAs. CISC architectures like x86 traditionally use a stack-based calling convention due to a smaller number of registers, while RISC architectures like RISC-V use register-based calling conventions because they have more registers available.
- **Flexibility**: Although ISAs strongly influence calling conventions, they are not strictly defined by the ISA itself. They can vary based on operating systems, compilers, and specific use cases within the same ISA.


### Type Representation


### Name Mangling



## 👽 System Calls
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
↗ [Linux System Calls](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md)



## 🎯 Local Procedure Call (LPC)
> ↗ [Internal Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)


### Local Process Calls Another Local Process
#### Stack Frame Structure
#### Procedure Call & Return Instruction
#### Register Conventions
#### 🤔 LPC Instance

### Local Process Calls Itself (Iterative Calling)



## 🎯 Remote Procedure Call (RPC)
> ↗ [Remote Procedure Call (RPC)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
> ↗ [Network Programming & RPC](../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
> ↗ [SE /Middleware /Remote Procedure Call (RPC)](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)



## Ref
[👍 深入理解计算机系统（3.7）------过程（函数的调用原理）]: https://www.cnblogs.com/ysocean/p/7625917.html

过程在高级语言中也称为函数，方法。一个过程的调用包括将数据（以过程参数和返回值的形式）和控制从代码的一部分传递到另一部分。此外，它还必须在进入时为过程的局部变量分配空间，并在退出时释放空间。大多数机器，包括我们一直讲的 IA32，只提供转移控制到过程和从过程中转移出控制这种简单指令。数据传递和局部变量的分配释放都是通过操纵程序栈来实现。

合理的构建方法并调用，能大大增加代码的复用性，也能使代码结构更加清晰，接下来我们就来详细的介绍。

![](../../../../../Assets/Pics/Pasted%20image%2020240610235007.png)

[系统调用与过程调用 | CSDN]: https://blog.csdn.net/shuyangxiaogou/article/details/5666098
1. 调用形式不同
2. 被调用代码的位置不同
3. 提供方式不同
4. 调用的实现不同

[汇编中的栈帧理解 | CSDN]: http://t.csdnimg.cn/h7dY6
![](../../../../../../Assets/Pics/Pasted%20image%2020240610215026.png)

![](../../../../Assets/Pics/Pasted%20image%2020250303220015.png)