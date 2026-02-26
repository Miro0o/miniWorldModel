# Procedure (Function) Call & Runtime Memory Layout

[TOC]



## Res
### Related Topics
↗ [ASM (Assembly Languages)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/ASM%20(Assembly%20Languages).md)
↗ [Instruction Set Architecture (ISA) & Processor Architecture](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture.md)
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)

↗ [(Text) Data Representations & Storage in Computer](../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/😤%20Information,%20Data,%20Number%20and%20Math%20in%20Digital%20Systems/(Text)%20Data%20Representations%20&%20Storage%20in%20Computer.md)
↗ [Bag, Queue, Stack](../../🧙‍♂️%20Algorithm%20&%20Data%20Structure/📌%20Algorithms%20Basics%20&%20Data%20Structure/Data%20Structures/Bag,%20Queue,%20Stack.md)

↗ [Primary Storage (Main Memory) Technologies & RAM](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM.md)
- ↗ [Virtual Memory (Hardware and Control Structure)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Primary%20Storage%20(Main%20Memory)%20Technologies%20&%20RAM/Virtual%20Memory%20(Hardware%20and%20Control%20Structure)/Virtual%20Memory%20(Hardware%20and%20Control%20Structure).md)
↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
- ↗ [Virtual Memory (OS Software Level)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Virtual%20Memory%20(OS%20Software%20Level)/Virtual%20Memory%20(OS%20Software%20Level).md)

↗ [Address Space & Memory Layout](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
↗ [Register](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Register.md)
↗ [Memory Access & Addressing](Instruction%20Execution/Memory%20Access%20&%20Addressing.md)

↗ [Network Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)
↗ [Network Programming & RPC](../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
↗ [Internal Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)

↗ [System Core Function Libraries & C Standard Library (User Mode)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20(User%20Mode).md)
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md) ⭐
↗ [Linux System Calls](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md) ⭐

↗ [Operating System Security (& Mobile Security)](../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/Operating%20System%20Security%20(&%20Mobile%20Security).md)
- ↗ [Memory Threats & Attacks](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Memory%20Threats%20&%20Attacks.md)
- ↗ [Memory Protections & Mitigations](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Protections%20&%20Mitigations/Memory%20Protections%20&%20Mitigations.md)
↗ [Software Security](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/Software%20Security.md)
- ↗ [DCA (Dynamic Code Analysis) & DAST](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST.md)

↗ [FAQ /👉 Linux Library Functions Call 🆚 System Call 🆚 Procedure/Function Call](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/FAQ.md#👉%20Linux%20Library%20Functions%20Call%20🆚%20System%20Call%20🆚%20Procedure/Function%20Call)

↗ [Memory Threats & Attacks](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Threats%20&%20Attacks/Memory%20Threats%20&%20Attacks.md)


### Other Resources



## Intro
> 🔗 https://www.sciencedirect.com/topics/computer-science/procedure-call

A procedure call in computer science refers to the invocation of a **modular block of code**, known as a **procedure**, which is designed to perform a specific task within a program. Depending on the particular [programming language](https://www.sciencedirect.com/topics/computer-science/programming-language), a procedure may be called a function, subroutine, method, or other names; some languages make distinctions between these terms. When a procedure is called, control is transferred from the calling procedure (the **caller**) to the called procedure (the **callee**), which executes its statements and may return control (to the next instruction of  **call site**, i.e. the next instruction of the calling instruction) and possibly a value to the caller. Each procedure call creates and initializes **procedure-local storage**, which protects the caller's environment, establishes the callee's environment, and creates any linkages between those environments specified by the call and the language. This mechanism allows programmers to develop and test parts of a program in isolation, providing insulation against problems in other procedures.

**Procedure calls are fundamental to structuring programs and enabling abstraction.** Procedures help define interfaces between system components; cross-component interactions are typically structured through procedure calls. They play a critical role in separate compilation, which allows [software developers](https://www.sciencedirect.com/topics/computer-science/software-developer) to build large software systems. Procedure calls provide an orderly transfer of control and a standard way to map arguments from the **caller's name space** to the **callee's name space**. The activation of a procedure refers to the instance of its execution, with each call creating a distinct activation that maintains its own local state. **Procedures are essential in defining interfaces between system components and in enabling reliable code.**


### Why Procedure and Procedure Calls?
This is how Turing machine is designed, and by this design it gives our the power of Turing machine, i.e. the computation power that can compute any problem described by a Turing-complete language. 🥸 

Essentially, it gives our program the power of recursion.

↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md)

![](../../../../Assets/Pics/Screenshot%202023-05-08%20at%204.26.42%20PM.png)
<small>What can computers do?</small>


### Mechanisms of Procedure Calls
> 🔗 https://www.sciencedirect.com/topics/computer-science/procedure-call

Procedure calls are managed using a **call stack**, where each active procedure is represented by an [activation record](https://www.sciencedirect.com/topics/computer-science/activation-record) (also known as a stack frame) that stores [control information](https://www.sciencedirect.com/topics/computer-science/control-information), local variables, parameters, and the return address. The stack mechanism supports recursion by creating a distinct activation and state for each call to a procedure, and unwinds in last-in, first-out order as calls return, correctly tracking all return addresses and local states for [recursive computations](https://www.sciencedirect.com/topics/computer-science/recursive-computation) such as factorial calculations.

[Parameter passing](https://www.sciencedirect.com/topics/computer-science/parameter-passing) methods include:
- **[Call-by-value](https://www.sciencedirect.com/topics/computer-science/call-by-value)**: The caller evaluates actual parameters and passes their values to the callee; modifications in the callee are not visible to the caller.
- **[Call-by-reference](https://www.sciencedirect.com/topics/computer-science/call-by-reference)**: The caller passes the address of the actual parameter, allowing changes in the callee to affect the caller's variable.
- **Call-by-value-result**: Copies values back to actual parameters on return.
- **Call-by-name**: Substitutes the actual parameter textually and may use thunks—functions that evaluate the actual parameter when accessed, as in Algol and R programming languages.

Return values are handled by allocating space outside the callee's activation record, often in the caller's activation record or a designated register, with conventions ensuring both caller and callee agree on the size and location of the returned value.

==Calling conventions and [linkage conventions](https://www.sciencedirect.com/topics/computer-science/linkage-convention) are agreements between the compiler and [operating system](https://www.sciencedirect.com/topics/economics-econometrics-and-finance/operating-system) that define the actions taken to call and return from a procedure, including mapping names to values, preserving environments, and enabling interoperability and separate compilation.== These conventions standardize [calling sequences](https://www.sciencedirect.com/topics/computer-science/calling-sequence), allowing code from different sources and languages to interact safely and efficiently.

The implementation of procedure calls involves four sequences:
- **[Precall sequence](https://www.sciencedirect.com/topics/computer-science/precall-sequence)** in the caller: prepares arguments and preserves the caller's environment.
- **Prologue** in the callee: establishes the callee's environment.
- **Epilogue** in the callee: dismantles the callee's environment.
- **[Postreturn sequence](https://www.sciencedirect.com/topics/computer-science/postreturn-sequence)** in the caller: restores the caller's environment.

These sequences can be optimized by shifting work between caller and callee, and by using library routines for saving and restoring registers.

[Object-oriented languages](https://www.sciencedirect.com/topics/computer-science/object-oriented-languages) may add an implicit parameter for the [receiver's object](https://www.sciencedirect.com/topics/computer-science/receiver-object) record.

The compiler must emit code to evaluate actual parameters, allocate activation records, and maintain pointers such as the activation record pointer in a designated register.

Leaf-call optimization reduces overhead in procedures that do not call others by omitting unnecessary operations, such as saving the return address, unless required for [debugging or monitoring tools](https://www.sciencedirect.com/topics/computer-science/debugging-tool).

These mechanisms affect program control flow by providing orderly transfer of control and resource management through stack allocation and register preservation.


### Procedure Calls in Programming Languages


### Procedure Calls in Concurrent, Distributed, and Remote Systems



## 👉 Same Process Procedure Call
### ⭐ Function /Procedure Calls in an x86 Example: A Quick Detour
> ↗ [x86 Architecture Family (80x86, 8086 family)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Instruction%20Set%20Architecture%20(ISA)%20&%20Processor%20Architecture/CISC%20(Complex%20Instruction%20Set%20Computer)/x86%20Architecture%20Family%20(80x86,%208086%20family)/x86%20Architecture%20Family%20(80x86,%208086%20family).md)
> ↗ [x86 ISA Based ASM](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/x86%20ISA%20Based%20ASM.md)
> ↗ [8086 ASM (16 bit)](../../👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/ASM%20(Assembly%20Languages)/x86%20ISA%20Based%20ASM/8086%20ASM%20(16%20bit).md)
> ↗ [Address Space & Memory Layout](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
> ↗ [Register](../../👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/🚦%20Computer%20Processors%20&%20Logic%20Chips%20(Theory%20Part)/📌%20Microprocessor%20&%20Microprocessors%20Unit%20(MPU)/🧠%20CPU%20(Central%20Processing%20Unit)/📌%20Inside%20CPU%20Core%20(Core%20Microarchitecture)/Register.md)

> 🔗 https://textbook.cs161.org/memory-safety/x86.html#28-x86-function-calls
> 🎬 [Lecture 0: CS61C Review](https://sp21.cs161.org/review/0)
> 🎬 [Function Call in x86 Assembly](https://youtu.be/JmYsn4NNeH4?si=NIjqHXnsZkhcaMCw)

The process virtual memory layout: 
![|400](../../../../../Assets/Pics/Pasted%20image%2020240902162344.png)

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

**1. Push function arguments onto the stack.** RISC-V passes arguments by storing them in registers, but x86 passes arguments by pushing them onto the stack. Note that esp is decremented as we push arguments onto the stack. Arguments are pushed onto the stack in reverse order.
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

**8. Move esp up.** Once the function is ready to return, we increment `esp` to point to the top(bottom?) of the stack frame (`ebp`). This effectively erases the stack frame, since the stack frame is now located below esp. (Anything on the stack below `esp` is undefined.)
![](../../../../../Assets/Pics/Pasted%20image%2020240902163733.png)

**9. Restore the old `ebp` (`sfp`)**. The next value on the stack is the `sfp`, the old value of `ebp` `before` we started executing the function. We pop the `sfp` off the stack and store it back into the `ebp` register. This returns `ebp` to its old value before the function was called.
![](../../../../../Assets/Pics/Pasted%20image%2020240902163742.png)

**10. Restore the old eip (rip)**. The next value on the stack is the rip, the old value of eip before we started executing the function. We pop the rip off the stack and store it back into the eip register. This returns eip to its old value before the function was called.[7](https://textbook.cs161.org/memory-safety/x86.html#fn:7)
![](../../../../../Assets/Pics/Pasted%20image%2020240902163750.png)

**11. Remove arguments from the stack.** Since the function call is over, we don’t need to store the arguments anymore. We can remove them by incrementing `esp` (recall that anything on the stack below `esp` is undefined).
![](../../../../../Assets/Pics/Pasted%20image%2020240902163801.png)

You might notice that we saved the old values of `eip` and `ebp` during the function call, but not the old value of esp. A nice consequence of this function call design is that `esp` will automatically move to the bottom of the stack as we push values onto the stack and automatically return to its old position as we remove values from the stack. As a result, there is no need to save the old value of `esp` during the function call.


### How to Trace Function Calls? Or even System Calls ?
#function_call #procedure_call #system_call 

↗ [Software (Program) Techniques & Binary Engineering](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/Software%20(Program)%20Techniques%20&%20Binary%20Engineering.md)
↗ [Program Analysis Basics](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Techniques%20&%20Binary%20Engineering/📌%20Program%20Analysis%20Basics/Program%20Analysis%20Basics.md)

↗ [📌 Computer Profiling & System Visibility](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)



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



## 👉 Inter Process Procedure Calls
### Inter Process Communication (IPC)
↗ [IPC (Inter Process Communication)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/IPC%20(Inter%20Process%20Communication).md)
- ↗ [Synchronization](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/Synchronization/Synchronization.md)
	- Semaphore
	- RWLock
	- Mutex & Cond
- ↗ [Signal](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/Signal/Signal.md)
- ↗ [Shared Memory](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/Shared%20Memory/Shared%20Memory.md)
- ↗ [Message Passing](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/Message%20Passing/Message%20Passing.md)
	- Message Queue
	- Pipeline & FIFO
- ↗ [Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/Sockets.md)
	- ↗ [Internal Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)
	- ↗ [Network Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)

↗ [Concurrency & Locking & IPC in Linux](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Concurrency%20&%20Locking%20&%20IPC%20in%20Linux/Concurrency%20&%20Locking%20&%20IPC%20in%20Linux.md)
↗ [Linux IPC Basics](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/⭕️%20Task%20Management%20&%20Scheduling%20(Process%20&%20Threads)/Concurrency%20&%20Locking%20&%20IPC%20in%20Linux/Linux%20IPC%20Basics.md)


### 👽 System Calls
↗ [System Calls](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/📌%20Processes%20Description%20&%20Control/System%20Calls/System%20Calls.md)
↗ [Linux System Calls](../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/👽%20Linux%20System%20Calls/Linux%20System%20Calls.md)


### 🎯 Local Procedure Call (LPC)
>↗ [Internal Sockets](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Internal%20Sockets.md)
>↗ [Local Procedure Call (LPC)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/IPC%20(Inter%20Process%20Communication)/🧦%20Sockets/🌉%20Internal%20Sockets/Local%20Procedure%20Call%20(LPC).md)

#### Local Process Calls Another Local Process
##### Stack Frame Structure

##### Procedure Call & Return Instruction

##### Register Conventions

##### 🤔 LPC Instance

#### Local Process Calls Itself (Recursion)
↗ [Computability (Recursion) Theory - Turing Machine and R.E. Language](../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/😶‍🌫️%20Theory%20of%20Computation/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language/Computability%20(Recursion)%20Theory%20-%20Turing%20Machine%20and%20R.E.%20Language.md) "recursion"
↗ [Number Sequence](../../../🧮%20Mathematics/🧐%20Mathematical%20Analysis%20(&%20Analytical%20Mathematics)/Number%20Sequence,%20Series,%20and%20Basic%20Properties%20of%20Function/Number%20Sequence.md) "recursion"


### 🎯 Remote Procedure Call (RPC)
↗ [Remote Procedure Call (RPC)](../../👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Remote%20Procedure%20Call%20(RPC).md)
↗ [Network Programming & RPC](../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)

↗ [RPC Services](../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)
↗ [Cloud RPC Services](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)



## Optimization Techniques Related to Procedure Calls
> 🔗 https://www.sciencedirect.com/topics/computer-science/procedure-call

Inline expansion, also known as inlining, replaces a procedure call with the body of the called procedure, tailored to the specific call site, thereby eliminating most of the procedure linkage code and reducing call and return overheads. Inlining can improve performance, but may increase code size, especially when the procedure is called from multiple locations within a program. The decision to inline is influenced by factors such as callee size, caller size, dynamic and static call counts, constant-valued actual parameters, parameter count, and loop nesting depth; compilers often use heuristics based on these metrics to select profitable call sites for inlining.

Tail call optimization specializes the handling of calls that occur as the last action in a procedure, allowing the compiler to eliminate much of the standard linkage overhead and, in the case of [tail recursion](https://www.sciencedirect.com/topics/computer-science/tail-recursion), to transform recursive calls into efficient loops. Leaf-call optimization targets procedures that do not call other procedures, enabling the compiler to omit unnecessary linkage code, such as saving and restoring registers, and to statically allocate activation records, reducing runtime costs.

[Register allocation](https://www.sciencedirect.com/topics/computer-science/register-allocation) strategies for procedure calls involve passing parameters and return values in registers when possible, as exemplified by conventions like the ARM Procedure Call Standard, which uses registers r0–r3 for the first four parameters and r0 for the return value. The compiler may optimize register usage in [leaf procedures](https://www.sciencedirect.com/topics/computer-science/leaf-procedure) by trying to use [caller-saves registers](https://www.sciencedirect.com/topics/computer-science/caller-saves-register) before [callee-saves registers](https://www.sciencedirect.com/topics/computer-science/callee-saves-register), and by avoiding the save and restore code for callee-saves registers in the prologue and epilogue; in small leaf procedures, the compiler may be able to avoid all use of callee-saves registers.

Parameter promotion can be used to remove inefficiencies related to ambiguous [memory references](https://www.sciencedirect.com/topics/computer-science/memory-reference), when the compiler can prove that an ambiguous value has just one corresponding [memory location](https://www.sciencedirect.com/topics/computer-science/memory-location) through detailed analysis of pointer values or [array subscript](https://www.sciencedirect.com/topics/computer-science/array-subscript) values. 9 Interprocedural optimizations, such as [inline substitution](https://www.sciencedirect.com/topics/computer-science/inline-substitution) and procedure placement, analyze and transform multiple procedures together. These techniques require the compiler to manage dependencies across procedures and may necessitate [recompilation](https://www.sciencedirect.com/topics/computer-science/recompilation) when source code changes affect optimization assumptions.

The trade-off between abstraction benefits and runtime costs is evident in the overhead introduced by procedure calls, including activation record allocation, parameter evaluation, and state preservation. [Optimizing compilers](https://www.sciencedirect.com/topics/computer-science/optimizing-compiler) seek to reduce these costs while maintaining the modularity and [maintainability](https://www.sciencedirect.com/topics/computer-science/maintainability) provided by procedural abstraction. 13 10 When applying these [optimizations, compilers](https://www.sciencedirect.com/topics/computer-science/compiler-optimization) consider factors such as code size constraints, execution frequency, and metrics related to the caller, callee, and call site.



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