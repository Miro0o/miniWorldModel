# DCA (Dynamic Code Analysis) & DAST

[TOC]



## Res
### Related Topics
↗ [Semantic Analysis](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Compilation%20Phase/1️⃣%20Frontend%20-%20Programming%20Language%20Analysis/Semantic%20Analysis/Semantic%20Analysis.md)
↗ [Formal Semantics and Programming Language](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)

↗ [Software Quality Assurance (SQA)](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
↗ [Software Testing](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)
- ↗ [Fuzzing (Concrete Execution)](Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)
- ↗ [LLM & Fuzzing](../../../../../../Academics%20🎓%20(In%20CS)/🗒️%20My%20Academic%20Projects%20Workspace/LLM%20&%20Software%20Security%20and%20Analysis/LLM%20&%20Fuzzing.md)
↗ [(Formal) Model Checking](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

↗ [Debuggers & Disassemblers & Decompilers](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Debuggers%20&%20Disassemblers%20&%20Decompilers.md)
- ↗ [gdb (GNU DeBugger)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/🐐%20GCC%20(The%20GNU%20Compiler%20Collection)/gdb%20(GNU%20DeBugger)/gdb%20(GNU%20DeBugger).md)
- ↗ [OllyDbg (OD)](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Debuggers%20&%20Disassemblers%20&%20Decompilers/Disassemblers%20&%20Decompilers/OllyDbg%20(OD).md)

↗ [Dynamics Code Analysis Tools (DCAT)](../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/🌋%20Dynamics%20Code%20Analysis%20Tools%20(DCAT)/Dynamics%20Code%20Analysis%20Tools%20(DCAT).md)
↗ [📌 Computer Profiling & System Visibility](../../../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)

↗ [Operating System & OS Kernel (Theory Part)](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)
- ↗ [OS Memory Management (Main Memory + Secondary Memory Resource)](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource).md)
	- ↗ [Address Space & Memory Layout](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Memory%20Management%20(Main%20Memory%20+%20Secondary%20Memory%20Resource)/Address%20Space%20&%20Memory%20Layout.md)
- ↗ [OS Processes & Automata Management (CPU + Main Memory Resource)](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource)/OS%20Processes%20&%20Automata%20Management%20(CPU%20+%20Main%20Memory%20Resource).md)
- ↗ [Kernel Debugging](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/🦺%20Operating%20System%20Basics/Kernel%20Debugging.md)
↗ [Computer Memory & Storage](../../../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Computer%20Architecture/Computer%20Microarchitectures%20(Computer%20Organization)%20&%20von%20Neumann%20Model/Computer%20Memory%20&%20Storage/Computer%20Memory%20&%20Storage.md)

↗ [Programming Language Processing & Program Execution](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/Programming%20Language%20Processing%20&%20Program%20Execution.md)
- ↗ [Program Execution (Runtime)](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)
- ↗ [Procedure (Function) Call & Runtime Memory Layout](../../../../../../🔑%20CS%20Core/🛣️%20Programming%20Language%20Processing%20&%20Program%20Execution/🤡%20Program%20Execution%20(Runtime)/Procedure%20(Function)%20Call%20&%20Runtime%20Memory%20Layout.md)
↗ [Software Runtime Security](../../../../../System%20Security/🏃%20Software%20Runtime%20Security/Software%20Runtime%20Security.md)
↗ [Cloud-Native System Runtime Security](../../../../../System%20Security/Cloud%20Security/🩳%20Cloud-Native%20System%20Runtime%20Security/Cloud-Native%20System%20Runtime%20Security.md)


### Other Resources
https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html



## Intro
![application_execution_and_computer_data_flow.excalidraw | 800](../../../../../../../Assets/Illustrations/Computer%20System/application_execution_and_computer_data_flow.excalidraw.md)
<small>Application Execution and Computer Data Flow</small>

> 🔗 https://en.wikipedia.org/wiki/Dynamic_program_analysis

**Dynamic program analysis** is the act of [analyzing software](https://en.wikipedia.org/wiki/Program_analysis_\(computer_science\) "Program analysis (computer science)") that involves executing a [program](https://en.wikipedia.org/wiki/Computer_program "Computer program") – as opposed to [static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis "Static program analysis"), which does not execute it.

Analysis can focus on different aspects of the software including but not limited to: [behavior](https://en.wikipedia.org/wiki/Behavior "Behavior"), [test coverage](https://en.wikipedia.org/wiki/Test_coverage "Test coverage"), [performance](https://en.wikipedia.org/wiki/Software_performance "Software performance") and [security](https://en.wikipedia.org/wiki/Security "Security").

To be effective, the target program must be executed with sufficient test inputs to address the ranges of possible inputs and outputs. [Software testing](https://en.wikipedia.org/wiki/Software_testing "Software testing") measures, such as [code coverage](https://en.wikipedia.org/wiki/Code_coverage "Code coverage"), and tools such as [mutation testing](https://en.wikipedia.org/wiki/Mutation_testing "Mutation testing"), are used to identify where testing is inadequate.

> 🔗 https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html

Dynamic analysis is finding out information about a program by running it. Actually, you have been doing dynamic analysis most of your career without knowing it. When you have been writing tests for your program, you have been doing dynamic analysis. When you have inserted log statements in your program, you have been doing dynamic analysis. And, when you have search through a log to recreate a bug in production, you have been doing dynamic analysis.

It might seem obvious that we can learn about a program by running it, but it is far from obvious what we learn and even how to run the program. In theory, dynamic analysis is about extracting information about the all behaviours of a program from a few executions (or traces).


### Program Semantics & Transition System
↗ [The Essence of Computing - Programs & The Semantics of Programs](../../../../../../🗺%20CS%20Overview/The%20Essence%20of%20Computing%20-%20Programs%20&%20The%20Semantics%20of%20Programs.md)
↗ [Formal Semantics and Programming Language](../../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Formal%20Semantics%20and%20Programming%20Language/Formal%20Semantics%20and%20Programming%20Language.md)
↗ [(Formal) Model Checking /1️⃣ System Modeling](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)


### Phases of Dynamic Analysis (in Formal Definition)
> ↗ [(Formal) Model Checking](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html

Dynamic analysis consists of three phases, [Trace Selection (§1.1)](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:trace-selection), [Trace Abstraction and Prediction (§1.3)](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:trace-prediction), and [Trace Analysis (§1.2)](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:trace-analysis).
#### 1️⃣ Trace Selection
> ↗ [(Formal) Model Checking /1️⃣ System Modeling](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#1️⃣%20System%20Modeling)

First, recall the definition of a Transition System from [Transition System and Traces (§2.4)](https://courses.compute.dtu.dk/02242/topics/semantics.html#sec:trace-semantics). A program $P$ can be described as a triplet $⟨𝐒𝐭𝐚𝐭𝐞_P,\delta_P,I_P⟩$, were $\delta_P$ is the transition function and $I_P$ is the set of initial states.

In the first phase, we select a trace from the transitions system. This consists of choosing an initial state $\sigma\in I_p$, and then executing the program to picking a trace $\tau$: $$\tau \in 𝐒𝐞𝐥𝐞𝐜𝐭(P,\sigma)\equiv\tau\in Sem(P)\land\tau_0=\sigma$$
If the program is deterministic, there is only one trace per input state. If the program is non-deterministic, like for example with parallel programs each initial state might give rise to multiple traces.

Selecting the initial state or even executing the program is not trivial in practice (see [Running the Program (§2)](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:running-the-program)).
#### 2️⃣ Trace Abstraction and Prediction & Program Properties
> ↗ [(Formal) Model Checking /2️⃣ Properties and Property Specialization](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#2️⃣%20Properties%20and%20Property%20Specialization)
>↗ [Temporal Logic (时态逻辑)](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Temporal%20Logic%20(时态逻辑).md)
>- ↗  [Computation-Tree Logic (CTL*) Family](../../../../../../🧮%20Mathematics/🤼‍♀️%20Mathematical%20Logic%20(Foundations%20of%20Mathematics)/📍%20Mathematical%20Logic%20Basics%20(Formal%20Logic)/Modality%20Logic%20(模态逻辑)/Temporal%20Logic%20(时态逻辑)/Computation-Tree%20Logic%20(CTL*)%20Family/Computation-Tree%20Logic%20(CTL*)%20Family.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:trace-analysis

Now that we have a trace, we can make several deductions about behaviors of the program by analyzing the trace. Common analyses are (slightly abusing notation):
- did it end in a failure?
	- $𝚃𝙰_{𝚎𝚛𝚛}(\tau)\equiv\tau−1=err(...)$
- did any opened resource, not get closed?
	- $𝚃𝙰_{𝚛𝚎𝚜}(\tau)\equiv\exists fi. O(τ_i,f)\land\forall j. \neg 𝐂(\tau_j,f)\lor j<i$
- did we execute this instruction?
	- $𝚃𝙰_{𝚌𝚘𝚟𝚎𝚛(i)}(\tau)\equiv i\in\{e.\iota | e\in\tau\}$

Any question we can answer correctly for one trace can be turned into a _may analysis_ for the full program. If we find a trace that ends in a failure, the program might fail. If the we find a trace where opened resource is not closed, we know that program may not close all resources in the program. So, essentially for any property $X$ we can find in one trace, we can build an may analysis which can detect it: $$\exists\sigma\in I_p, \tau\in 𝐒𝐞𝐥𝐞𝐜𝐭(P,\sigma).𝚃𝙰_X(\tau)\impliesℒ_X(P)$$
Actually, if we can increase the precision of the analysis by running the program multiple times. And, in the limit (assuming that we could run all traces) a dynamic analysis precisely captures any property. $$\forall\sigma\in I_p, \tau\in 𝐒𝐞𝐥𝐞𝐜𝐭(P,\sigma).𝚃𝙰_X(\tau)\impliesℒ_X(P)$$
#### 3️⃣ Trace Analysis
> ↗ [(Formal) Model Checking /3️⃣ Models Analysis & Improvement](../🙇‍♂️%20Formal%20Methods%20&%20Formal%20Verification%20(FV)/(Formal)%20Model%20Checking/(Formal)%20Model%20Checking.md#3️⃣%20Models%20Analysis%20&%20Improvement)
> ↗ [Runtime Verification](Runtime%20Verification/Runtime%20Verification.md)

> 🔗 https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#sec:trace-prediction

The problem is of course, that the number of traces in the semantics of most programs are infinite (or close), and it is impossible to cover them all without some trickery. Therefore, should we try to expand the number of traces we cover every time by inferring information about other traces from one trace. We call this _Trace Prediction_.

Trace prediction works by mapping each trace τ from the trace space into a possible finite set of trace classes [τ]. If we can show that an analysis over the trace class is equivalent to a trace analysis over all traces in the trace class: 𝚃𝙰X([τ])⟹∃τ′∈[τ].𝚃𝙰X(τ′), we can save a lot of executions. And if we are also able to avoid any trace class in our next trace selection we can potentially cover all traces of a program.

This step is especially useful when dealing with parallel programs. It can be very hard to run into deadlocks or data-races. With trace prediction, we can infer that there exist a datarace in the program even if we don't run into it ([Kalhauge 2018](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html#ref:kalhauge2018sound)).
##### The Path Class
##### Trace Evaluation
##### Trace Abstraction


### Pros & Cons of Dynamic Code Analysis
**Pros**
Running the program is often a good initial analysis we can do on most programs, and it has a lot of advantages:
- Most programming languages comes with built-in interpreter. Running the program can sometimes be easier than using a syntactic analysis.
- The analysis can present you with a concrete trace that produce the error. This makes it very easy to debug the error.
- Since the goal of the dynamic analysis is to underestimate the set of valid traces, if it warns us about a problem, then the problem is real.
**Cons**
It might seem obvious, that we can learn things about the program by running it, however, running the program is not always as easy as we would like.
- Setting up the correct environment of a program can be hard to downward impossible without running it in production.
- Warning that something can happen by doing it, can be problematic if the program has side-effects like deleting the database or firing the missiles.
- Running the program, will never tell you if something can't happen, like the program running forever.



## Software Testing
↗ [Software Testing](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Software%20Testing.md)
↗ [Types of Software Testing](../../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/🧪%20Software%20Testing/Types%20of%20Software%20Testing/Types%20of%20Software%20Testing.md)


### Functional Testing


### Un-Functional Testing
#### DAST (Dynamic Application Security Testing)

#### Fuzz Testing
↗ [Fuzzing (Concrete Execution)](Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)



## Ref
