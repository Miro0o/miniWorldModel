# Lab01 函数调用过程中寄存器的数值变化情况

[TOC]



## 程序准备
### 开发环境
```sh
$ uname -a
Darwin fkSCU.local 22.3.0 Darwin Kernel Version 22.3.0: Mon Jan 30 20:42:11 PST 2023; root:xnu-8792.81.3~2/RELEASE_X86_64 x86_64

$ gdb --version
GNU gdb (GDB) 12.1
Copyright (C) 2023 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

$ gcc --version
Apple clang version 14.0.0 (clang-1400.0.29.202)
Target: x86_64-apple-darwin22.3.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin

pwndbg> version
Gdb:      12.1
Python:   3.10.7 (main, Mar 10 2023, 10:47:39) [GCC 12.2.0]
Pwndbg:   1.1.1
Capstone: 4.0.1024
Unicorn:  2.0.0
pwndbg>
```


### C语言原代码
```cpp
   File: func_call.c
   
       #include <stdio.h>
    
       int add (int a, int b){
           return a + b;
       }
    
       int main(){
           int a = 1, b = 2;
           printf("a + b = %d", add(a , b));
           return 0;
       }
```


### 汇编代码

使用gcc对程序进行编译, 这里使用 `-m32` 选项设置其为32位程序（默认为i386 ISA）:
```shell
$ gcc-12 func_call.c -m32 -o func_gcc_32.s
```

得到汇编代码：
```asm
   File: func_gcc_32.s
   
          .section    __TEXT,__text,regular,pure_instructions
          .build_version macos, 13, 0 sdk_version 13, 1
          .globl  _add                            ## -- Begin function add
          .p2align    4, 0x90
      _add:                                   ## @add
          .cfi_startproc
      ## %bb.0:
          pushl   %ebp
          .cfi_def_cfa_offset 8
          .cfi_offset %ebp, -8
           movl    %esp, %ebp
           .cfi_def_cfa_register %ebp
           movl    12(%ebp), %eax
           movl    8(%ebp), %eax
           movl    8(%ebp), %eax
           addl    12(%ebp), %eax
           popl    %ebp
           retl
           .cfi_endproc
                                               ## -- End function
           .globl  _main                           ## -- Begin function main
           .p2align    4, 0x90
       _main:                                  ## @main
           .cfi_startproc
       ## %bb.0:
           pushl   %ebp
           .cfi_def_cfa_offset 8
           .cfi_offset %ebp, -8
           movl    %esp, %ebp
           .cfi_def_cfa_register %ebp
           subl    $24, %esp
           calll   L1$pb
       L1$pb:
           popl    %eax
           movl    %eax, -16(%ebp)                 ## 4-byte Spill
           movl    $0, -4(%ebp)
           movl    $1, -8(%ebp)
           movl    $2, -12(%ebp)
           movl    -8(%ebp), %ecx
           movl    -12(%ebp), %eax
           movl    %ecx, (%esp)
           movl    %eax, 4(%esp)
           calll   _add
           movl    -16(%ebp), %ecx                 ## 4-byte Reload
           leal    L_.str-L1$pb(%ecx), %ecx
           movl    %ecx, (%esp)
           movl    %eax, 4(%esp)
           calll   _printf
           xorl    %eax, %eax
           addl    $24, %esp
           popl    %ebp
           retl
           .cfi_endproc
                                               ## -- End function
           .section    __TEXT,__cstring,cstring_literals
       L_.str:                                 ## @.str
           .asciz  "a + b = %d"
    
       .subsections_via_symbols
```



## 开始动态调试
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.33.11%20PM.png)
<small>调试界面截图</small>



### 1. 启动gdb，程序初始操作

启动gdb，此时程序先通过增加栈顶（减少esp值）开辟内存（和其他操作）。对应的指令为 `sub esp, 0x10` 和 `__x86.get_pc_thunk.bx`

![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.37.32%20PM.png)
``` json
*EAX  0x565561b4 (main) ◂— lea    ecx, [esp + 4]
*EBX  0xf7e26ff4 (_GLOBAL_OFFSET_TABLE_) ◂— 0x226d8c
*ECX  0xffffce40 ◂— 0x1
*EDX  0xffffce60 —▸ 0xf7e26ff4 (_GLOBAL_OFFSET_TABLE_) ◂— 0x226d8c
*EDI  0xf7ffcb80 (_rtld_global_ro) ◂— 0x0
*ESI  0x56558edc (__do_global_dtors_aux_fini_array_entry) —▸ 0x56556140 (__do_global_dtors_aux) ◂— endbr32
*EBP  0xffffce28 ◂— 0x0
*ESP  0xffffce20 —▸ 0xffffce40 ◂— 0x1
*EIP  0x565561c3 (main+15) ◂— sub    esp, 0x10

// *号表示此寄存器的值在上一次指令执行后发生了改变。这里由于是第一次执行，所以所有的寄存器的值都发生了改变。
```


![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.40.44%20PM.png)
```json
*ESP  0xffffce10 —▸ 0xffffce50 —▸ 0xf7e26ff4 (_GLOBAL_OFFSET_TABLE_) ◂— 0x226d8c
*EIP  0x565561c6 (main+18) —▸ 0xfffed5e8 ◂— 0x0
```



### 2. 进入 `main` 函数内部

![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.47.40%20PM.png)
```json
*ESP  0xffffce10 —▸ 0xffffce50 —▸ 0xf7e26ff4 (_GLOBAL_OFFSET_TABLE_) ◂— 0x226d8c
*EIP  0x565561cb (main+23) ◂— add    ebx, 0x2e0d
```


对地址为 `ebp - 0x10` 的双字类型进行赋值， 值大小为1：(对应源码 `int a = 1`)
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.55.08%20PM.png)
```json
*EBX  0x56558fd8 (_GLOBAL_OFFSET_TABLE_) ◂— 0x3ee0
*EIP  0x565561d1 (main+29) ◂— mov    dword ptr [ebp - 0x10], 1
```


对地址为` ebp - 0xc` 的双字类型进行赋值， 值大小为2：(对应源码 `int b = 2`)
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.55.54%20PM.png)
```json
*EIP  0x565561d8 (main+36) ◂— mov    dword ptr [ebp - 0xc], 2
```



### 3. 进入 `add` 函数

在 `main` 函数内部进行 `add` 函数的调用 `call add`:
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%203.56.44%20PM.png)
```json
*ESP  0xffffce08 ◂— 0x1
*EIP  0x565561e5 (main+49) —▸ 0xffffb3e8 ◂— 0x0
```


此处开辟空间，类似main函数开始。不再详述。
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.01.44%20PM.png)
```json
*ESP  0xffffce04 —▸ 0x565561ea (main+54) ◂— add    esp, 8
*EIP  0x5655619d (add) ◂— push   ebp
```


此处两次mov操作，为原程序中两个加数a，b赋值；加数a，b分别由eax， ebx储存。
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.04.04%20PM.png)
```json
*EAX  0x56558fd8 (_GLOBAL_OFFSET_TABLE_) ◂— 0x3ee0
*EIP  0x565561aa (add+13) ◂— mov    edx, dword ptr [ebp + 8]
```



### 4. 调用 `printf` 函数

此处 `call printf@plt` 指令进行printf函数的调用。
对于printf函数的调用不进行详细叙述。

![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.12.02%20PM.png)
```json
*ESP  0xffffce00 —▸ 0x56557008 ◂— 'a + b = %d'
*EIP  0x565561f8 (main+68) —▸ 0xfffe53e8 ◂— 0x0
```



### 5. 程序结束
此处通过减少栈顶 (增加esp的值，`add esp, 0x10` ), 程序准备释放内存，结束进程。
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.15.46%20PM.png)
```json
*ESP  0xffffce10 —▸ 0xffffce50 —▸ 0xf7e26ff4 (_GLOBAL_OFFSET_TABLE_) ◂— 0x226d8c
*EIP  0x56556200 (main+76) ◂— mov    eax, 0
```


将栈内元素出栈（`pop ecx` ,`pop ebx`, `pop ebp` ）
![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.18.17%20PM.png)
```json
*EBP  0x0
*ESP  0xffffce2c —▸ 0xf7c1f3e9 (__libc_sta![](../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.17.59%20PM.png)rt_call_main+121) ◂— add    esp, 0x10
*EIP  0x5655620b (main+87) ◂— lea    esp, [ecx - 4]
```


程序结束：![](../../../../../Assets/Pics/Screenshot%202023-04-02%20at%204.20.36%20PM.png)

