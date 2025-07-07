# ROP (Return-Oriented Programming)

[TOC]



## Res
### Related Topics
↗ [Static Code Analysis Tools (SCAT)](../../../../../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Static%20Code%20Analysis%20Tools%20(SCAT).md)
- gadget



## Intro
返回导向编程（Return-Oriented Programming，缩写：ROP）是一种高级的内存攻击技术，该技术允许攻击者在现代操作系统的各种通用防御下执行代码，如内存不可执行和代码签名等。这类攻击往往利用操作堆栈调用时的程序漏洞，通常是缓冲区溢出。攻击者控制堆栈调用以劫持程序控制流并执行针对性的机器语言指令序列（gadgets），每一段 gadget 通常以 return 指令（`ret`，机器码为`c3`）结束，并位于共享库代码中的子程序中。通过执行这些指令序列，也就控制了程序的执行。

`ret` 指令相当于 `pop eip`。即，首先将 `esp` 指向的 4 字节内容读取并赋值给 `eip`，然后 `esp` 加上 4 字节指向栈的下一个位置。如果当前执行的指令序列仍然以 `ret` 指令结束，则这个过程将重复， `esp` 再次增加并且执行下一个指令序列。


### 寻找 gadgets
- 1. 在程序中寻找所有的 c3（ret） 字节
- 2.向前搜索，看前面的字节是否包含一个有效指令，这里可以指定最大搜索字节数，以获得不同长度的 gadgets
- 3.记录下我们找到的所有有效指令序列

理论上我们是可以这样寻找 gadgets 的，但实际上有很多工具可以完成这个工作，如 ROPgadget，Ropper 等。更完整的搜索可以使用 [http://ropshell.com/](http://ropshell.com/)。



## Ref
[👍 ROP Chaining: Return Oriented Programming]: https://www.ired.team/offensive-security/code-injection-process-injection/binary-exploitation/rop-chaining-return-oriented-programming

The purpose of this lab is to familiarize with a binary exploitation technique called Return Oriented Programming (ROP), ROP chains / ROP gadgets. The technique is used to bypass Data Execution Protection (DEP).
