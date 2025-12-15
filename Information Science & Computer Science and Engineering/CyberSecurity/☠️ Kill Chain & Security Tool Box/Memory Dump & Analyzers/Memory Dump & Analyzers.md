# Memory Dump & Analyzers

[TOC]



## Res
### Related Topics
↗ [Software Runtime Security](../../System%20Security/🏃%20Software%20Runtime%20Security/Software%20Runtime%20Security.md)
- ↗ [Memory Security](../../System%20Security/🏃%20Software%20Runtime%20Security/📝%20Memory%20Security/Memory%20Security.md)

↗ [📌 Computer Profiling & System Visibility](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)
↗ [Computer Profiling](../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Apple%20Operating%20Systems/macOS%20(Derived%20From%20UNIX%20Family)/🪓%20macOS%20CLI%20Software/Host%20Management/Computer%20Profiling.md)

↗ [Forensics & Counter Forensics Tools](../Forensics%20&%20Counter%20Forensics%20Tools/Forensics%20&%20Counter%20Forensics%20Tools.md)
- ↗ [FTK Imager](../Forensics%20&%20Counter%20Forensics%20Tools/(Data)%20Preservation%20Tools/FTK%20Imager.md)
- ↗ [CAINE](../Forensics%20&%20Counter%20Forensics%20Tools/(Data)%20Preservation%20Tools/CAINE.md)


### Other Resources
https://github.com/LETHAL-FORENSICS/Collect-MemoryDump
Collect-MemoryDump
Collect-MemoryDump - Automated Creation of Windows Memory Snapshots for DFIR
Collect-MemoryDump.ps1 is a PowerShell script utilized to collect a Memory Snapshot from a live Windows system (including Pagefile Collection) in a forensically sound manner.



## Intro
> 🔗 https://en.wikipedia.org/wiki/Core_dump

In computing, a core dump,[a] memory dump, crash dump, storage dump, system dump, or ABEND dump[1] consists of the recorded state of the working memory of a computer program at a specific time, generally when the program has crashed or otherwise terminated abnormally.[2] In practice, other key pieces of program state are usually dumped at the same time, including the processor registers, which may include the program counter and stack pointer, memory management information, and other processor and operating system flags and information. A snapshot dump (or snap dump) is a memory dump requested by the computer operator or by the running program, after which the program is able to continue. Core dumps are often used to assist in diagnosing and debugging errors in computer programs.

On many operating systems, a fatal exception in a program automatically triggers a core dump. By extension, the phrase "to dump core" has come to mean in many cases, any fatal error, regardless of whether a record of the program memory exists. The term "core dump", "memory dump", or just "dump" has also become jargon to indicate any output of a large amount of raw data for further examination or other purposes



## Ref
[ Memory Dumps and Crash Dumps: Understanding and Debugging System Failures| medium]: https://medium.com/@jean.smit/memory-dumps-and-crash-dumps-understanding-and-debugging-system-failures-96026909554d
