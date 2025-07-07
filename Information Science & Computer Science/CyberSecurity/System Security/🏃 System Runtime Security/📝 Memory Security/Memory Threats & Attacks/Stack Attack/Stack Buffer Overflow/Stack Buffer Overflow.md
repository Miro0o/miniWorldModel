# Stack Buffer Overflow

[TOC]



## Res
### Related Topics


### Other Resources



## Intro
> 🔗 https://en.wikipedia.org/wiki/Stack_buffer_overflow

In software, a stack buffer overflow or stack buffer overrun occurs when a program writes to a memory address on the program's call stack outside of the intended data structure, which is usually a fixed-length buffer. Stack buffer overflow bugs are caused when a program writes more data to a buffer located on the stack than what is actually allocated for that buffer. This almost always results in corruption of adjacent data on the stack, and in cases where the overflow was triggered by mistake, will often cause the program to crash or operate incorrectly. Stack buffer overflow is a type of the more general programming malfunction known as buffer overflow (or buffer overrun). Overfilling a buffer on the stack is more likely to derail program execution than overfilling a buffer on the heap because the stack contains the return addresses for all active function calls.

A stack buffer overflow can be caused deliberately as part of an attack known as stack smashing. If the affected program is running with special privileges, or accepts data from untrusted network hosts (e.g. a webserver) then the bug is a potential security vulnerability. If the stack buffer is filled with data supplied from an untrusted user then that user can corrupt the stack in such a way as to inject executable code into the running program and take control of the process. This is one of the oldest and more reliable methods for attackers to gain unauthorized access to a computer

![](../../../../../../../../Assets/Pics/Screenshot%202023-03-05%20at%201.44.33%20PM.png)
<small>《汇编语言》，王爽</small>



## Ref
[👍 👍 缓冲区溢出攻击 | cnblog]: https://www.cnblogs.com/fanzhidongyzby/p/3250405.html

> 📮 This article has been archived locally.

[Stack buffer overflow | wikipedia]: https://en.wikipedia.org/wiki/Stack_buffer_overflow

[栈溢出原理 ｜ ctf-wiki]: https://ctf-wiki.org/pwn/linux/user-mode/stackoverflow/x86/stackoverflow-basic/
