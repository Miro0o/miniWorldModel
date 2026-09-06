# L4 Microkernel Family

[TOC]



## Res
### Related Topics
↗ [Microkernel (μ-kernel)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20(Host)%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/🦺%20Operating%20System%20Basics/Operating%20System%20Design%20(OS%20Kernel%20Design)%20&%20Kernel%20Architecture/Microkernel%20(μ-kernel).md)


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/L4_microkernel_family

**L4** is a family of second-generation [microkernels](https://en.wikipedia.org/wiki/Microkernel "Microkernel"), used to implement a variety of types of [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") (OS), though mostly for [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like"), _Portable Operating System Interface_ ([POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX")) compliant types.

L4, like its predecessor microkernel [L3](https://en.wikipedia.org/wiki/L4_microkernel_family#L3), was created by [German](https://en.wikipedia.org/wiki/Germany "Germany") [computer scientist](https://en.wikipedia.org/wiki/Computer_scientist "Computer scientist") [Jochen Liedtke](https://en.wikipedia.org/wiki/Jochen_Liedtke "Jochen Liedtke") as a response to the poor performance of earlier microkernel-based OSes. Liedtke felt that a system designed from the start for high performance, rather than other goals, could produce a microkernel of practical use. His original implementation in hand-coded Intel [i386](https://en.wikipedia.org/wiki/I386 "I386")-specific [assembly language](https://en.wikipedia.org/wiki/Assembly_language "Assembly language") code in 1993 created attention by being 20 times faster than [Mach](https://en.wikipedia.org/wiki/Mach_\(kernel\) "Mach (kernel)"). The follow-up publication two years later was considered so influential that it won the 2015 [ACM SIGOPS](https://en.wikipedia.org/wiki/ACM_SIGOPS "ACM SIGOPS") Hall of Fame Award. Since its introduction, L4 has been developed to be [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software "Cross-platform software") and to improve [security](https://en.wikipedia.org/wiki/Computer_security "Computer security"), isolation, and [robustness](https://en.wikipedia.org/wiki/Robustness_\(computer_science\) "Robustness (computer science)").

There have been various re-implementations of the original L4 [kernel](https://en.wikipedia.org/wiki/Kernel_\(operating_system\) "Kernel (operating system)") [application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface "Application binary interface") (ABI) and its successors, including _L4Ka::Pistachio_ (implemented by Liedtke and his students at [Karlsruhe Institute of Technology](https://en.wikipedia.org/wiki/Karlsruhe_Institute_of_Technology "Karlsruhe Institute of Technology")), _L4/MIPS_ ([University of New South Wales](https://en.wikipedia.org/wiki/University_of_New_South_Wales "University of New South Wales") (UNSW)), _Fiasco_ ([Dresden University of Technology](https://en.wikipedia.org/wiki/Dresden_University_of_Technology "Dresden University of Technology") (TU Dresden)). For this reason, the name _L4_ has been generalized and no longer refers to only Liedtke's original implementation. It now applies to the whole [microkernel](https://en.wikipedia.org/wiki/Microkernel "Microkernel") family including the L4 kernel [interface](https://en.wikipedia.org/wiki/Interface_\(computing\) "Interface (computing)") and its different versions.

L4 is widely deployed. One variant, OKL4 from Open Kernel Labs, shipped in billions of mobile devices.



## Ref
