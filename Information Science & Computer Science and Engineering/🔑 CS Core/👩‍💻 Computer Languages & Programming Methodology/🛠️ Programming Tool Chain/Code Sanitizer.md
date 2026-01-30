# Code Sanitizer

[TOC]



## Res
### Related Topics
↗ [System Security](../../../CyberSecurity/System%20Security/System%20Security.md)
- ↗ [Software Runtime Security](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/Software%20Runtime%20Security.md)
	- ↗ [Memory Security](../../../CyberSecurity/System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Security.md)
- ↗ [Operating System Security (& Mobile Security)](../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/Operating%20System%20Security%20(&%20Mobile%20Security).md)
	- ↗ [Linux Kernel Security Mechanisms](../../../CyberSecurity/System%20Security/🧸%20Operating%20System%20Security%20(&%20Mobile%20Security)/🐏%20Linux%20Security/Linux%20Kernel%20Security%20Mechanisms/Linux%20Kernel%20Security%20Mechanisms.md)

↗ [Fuzzing (Concrete Execution)](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/Fuzzing%20(Concrete%20Execution)/Fuzzing%20(Concrete%20Execution).md)

↗ [Code Instrumentation, System Visibility, & Computer Profiling](../../../CyberSecurity/🏰%20Cybersecurity%20Basics%20&%20InfoSec/🍦%20Software%20Security/🪆%20Software%20(Program)%20Analysis%20&%20Binary%20Engineering/📌%20Software%20(Program)%20Analysis%20Basics/👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/🥁%20Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling/Code%20Instrumentation,%20System%20Visibility,%20&%20Computer%20Profiling.md)

↗ [Debuggers & Disassemblers & Decompilers](Debuggers%20&%20Disassemblers%20&%20Decompilers/Debuggers%20&%20Disassemblers%20&%20Decompilers.md)
- ↗ [Valgrind](Debuggers%20&%20Disassemblers%20&%20Decompilers/Disassemblers%20&%20Decompilers/Valgrind.md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Code_sanitizer

A code sanitizer is a programming tool that detects bugs in the form of undefined or suspicious behavior by a compiler inserting instrumentation code at runtime. The class of tools was first introduced by Google's AddressSanitizer (or ASan) of 2012, which uses directly mapped shadow memory to detect memory corruption such as buffer overflows or accesses to a dangling pointer (use-after-free).


### List of Sanitizers
> 🔗 https://en.wikipedia.org/wiki/Code_sanitizer#Other_sanitizers

Google also produced LeakSanitizer (LSan, memory leaks), ThreadSanitizer (TSan, data races and deadlocks), MemorySanitizer (MSan, uninitialized memory), and UndefinedBehaviorSanitizer (UBSan, undefined behaviors, with fine-grained control).[14] These tools are generally available in Clang/LLVM and GCC.[15][16][17] Similar to KASan, there are kernel-specific versions of LSan, MSan, TSan, as well as completely original kernel sanitizers such as KFENCE and KCSan.[18]

Additional sanitizer tools (grouped by compilers under -fsanitize or a similar flag) include:[15][16][17]
- LLVM control-flow integrity and its kernel counterpart, which checks virtual tables and type casts for forward-edge CFI
- MemTagSanitizer, an ASan-like tool that uses Armv8.5-A features for very low overhead
- ShadowCallStack, an AArch64 tool that provides a shadow stack protection
- Scudo Hardened Allocator, an alternative memory allocator that includes GWP-ASan, a probabilistic ASan analogue with low overhead[19]
- libFuzzer, an LLVM tool that adds code coverage to fuzzing[20]



## AddressSanitizer (AS)
### KernelAddressSanitizer (KAS)




## Ref
[Code Sanitizor]: https://en.wikipedia.org/wiki/Code_sanitizer
