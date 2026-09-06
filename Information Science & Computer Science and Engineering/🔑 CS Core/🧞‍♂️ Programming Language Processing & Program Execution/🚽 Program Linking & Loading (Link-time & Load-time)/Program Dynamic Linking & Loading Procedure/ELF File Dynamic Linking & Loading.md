# ELF File Dynamic Linking & Loading

[TOC]



## Res
### Related Topics
↗ [ELF (Executable and Linkable Format)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)
↗ [ELF File Layout & Format](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20File%20Layout%20&%20Format.md)



## Intro: ELF Dynamic Linking & Loading
> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

链接过程主要包含了三个步骤：
1. **地址与空间分配（Address and Storage Allocation）**
2. **符号解析（Symbol Resolution）**
3. **重定位（Relocation）**

静态链接使得进行模块化开发，大大提供了程序的开发效率。随着，程序规模的扩大，静态链接的诸多缺点也逐渐暴露出来，如：浪费内存和磁盘空间、模块更新困难等。在静态链接中，C语言静态库是很典型的浪费空间的例子。关于模块更新，静态链接的程序有任何更新，都必须重新编译链接，用户则需要重新下载安装该程序。

解决空间浪费和更新困难最简单的方法便是将程序的模块相互分割开来，形成独立文件。简而言之，就是不对那些组成程序的目标文件进行链接，而是等到程序要运行时才进行链接。

动态链接涉及运行时的链接以及多个文件的装载，必需要有操作系统的支持。因为动态链接的情况下，进程的虚拟地址空间的分布会比静态链接情况下更为复杂，还有一些存储管理、内存共享、进程线程等机制在动态链接下也会有一些微妙的变化。

目前，主流操作系统都支持动态链接。在Linux中，ELF动态链接文件被称为 **动态共享对象（DSO，Dynamic Shared Objects）**，一般以`.so`为后缀；在Windows中，动态链接文件被称为 **动态链接库（Dynamic Linking Library）**，一般以`.dll`为后缀。

在Linux中，常用的C语言库的运行库glibc，其动态链接形式的版本保留在 `/lib`目录下，文件名为 `libc.so`。整个系统只保留一份C语言动态链接文件`libc.so`，所有的C语言编写的、动态链接的程序都可以在运行时使用它。当程序被装载时，系统的**动态链接器**会将程序所需要的所有动态链接库装载到进程的地址空间，并将程序中所有未解析的符号绑定到相应的动态链接库中，并进行重定位。

> 🔗 https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779

![](../../../../../Assets/Pics/Pasted%20image%2020250329180541.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>

Dynamic linking is the process in which we resolve functions from external libraries (shared objects).

By default, lazy binding is used, which is resolving functions at the time they are called first, at next calls it will be saved in the GOT (GLobal offset table). Then the PLT entry just have to jmp onto the address contained in the GOT entry for that function.

![](../../../../../Assets/Pics/Pasted%20image%2020250329180734.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>

We can avoid lazy binding using `LD_BIND_NOW` env var, or using `RELRO` ( or `Relocation Read-Only`).

When an external function is called from the code, instead of the real function, the PLT entry for that function is called.

The PLT is code that uses the GOT to jump and resolve with the help of the linker the external functions.

There is a relocation needed for fgets which will be resolved by the linker, as the address resolved must be written somewhere, in the offset value, it points to the GOT entry, for `fgets()`. Then the linker once the function is resolved will write that address on it.

```
Offset       Info        Type         SymValue     SymName
...
0804a000   00000107  R_386_JUMP_SLOT   00000000    fgets
...
```

`0x0804a000` is the GOT entry for `fgets()`.

When a function like `fgets` is called first:

```
objdump -d ./prog
...
8048481: e8 da fe ff ff    call 0x8048360 <fgets@plt>
...
```

`fgets@plt` is called.

PLT entry:

```
...
08048360 <fgets@plt>:
/* A jmp into the GOT */
8048360:  ff 25 00 a0 04 08   jmp *0x804a000
8048366:  68 00 00 00 00      push $0x0
804836b:  e9 e0 ff ff ff      jmp  0x8048350 <_init+0x34>
...
```

In the first instruction it does an indirect jump to the address contained in the GOT entry for `fgets`.

The address contained in the GOT at that time is the next instruction of that jmp, so the `push 0x0` instruction gets executed, that pushes onto the stack the index at GOT where `fgets` is located, take care that the first 3 entries are reserved, so actually it would be the 4th.

Reserved GOT entries:

- `GOT[0]`: Contains an address that points to the dynamic segment of the executable, which is used by the dynamic linker for extracting dynamic linking-related information.
- `GOT[1]`: Contains the address of the `link_map` structure that is used by the dynamic linker to resolve symbols.
- `GOT[2]`: Contains the address to the dynamic linkers `_dl_runtime_resolve()` function that resolves the actual symbol address for the shared library function.

The last instruction in the `fgets()` PLT stub is a `jmp 0x8048350`. This address points to the very first PLT entry in every executable, known as PLT-0.

```
8048350: ff 35 f8 9f 04 08      pushl  0x8049ff8
8048356: ff 25 fc 9f 04 08      jmp   *0x8049ffc
804835c: 00 00                  add    %al,(%eax)
```

The first `pushl` instruction pushes the address of the second GOT entry, `GOT[1]`, onto the stack, which, as noted earlier, contains the address of the `link_map` structure.

The `jmp *0x8049ffc` performs an indirect jmp into the third GOT entry, `GOT[2]`, which contains the address to the dynamic linkers `_dl_runtime_resolve()` function, therefore transferring control to the dynamic linker and resolving the address for `fgets()`. Once `fgets()` has been resolved, all future calls to the PLT entry for `fgets()` will result in a jump to the `fgets()` code itself, rather than pointing back into the PLT and going through the lazy linking process again.


### Two-Pass Linking
↗ [ELF File Static Linking](../Program%20Static%20Linking%20Procedure/ELF%20File%20Static%20Linking.md)



## Address and Storage Allocation
对于静态链接的可执行文件来说，整个进程只有一个文件要被映射，即可执行文件。而对于动态链接，除了可执行文件，还有它所依赖的共享目标文件。

关于共享目标文件在内存中的地址分配，主要有两种解决方案，分别是：
- **静态共享库（Static Shared Library）**（地址固定）
- **动态共享库（Dynamic Shared Library）**（地址不固定）


### Static Shared Library
静态共享库的做法是将程序的各个模块统一交给操作系统进行管理，操作系统在**某个特定的地址**划分出一些地址块，为那些已知的模块预留足够的空间。因为这个地址对于不同的应用程序来说，都是固定的，所以称之为**静态**。

但是静态共享库的目标地址会导致地址冲突、升级等问题。


### Dynamic Shared Library (Load Time Relocation)
采用动态共享库的方式，也称为**装载时重定位（Load Time Relocation）**。其基本思路是：**在链接时，对所有绝对地址的引用都不作重定位，而把这一步推迟到装载时再完成。一旦模块装载地址确定，即目标地址确定，那么系统就对程序中所有的绝对地址引用进行重定位。**

但是这种方式也存在一些问题。比如，动态链接模块被装载映射至虚拟空间后，指令部分是在多个进程间共享的，由于装载时重定位的方法需要修改指令，所以没有办法做到同一份指令被多个进程共享，因为指令被重定位后对于每个进程来说都是不同的。

然后，动态链接库中的代码是共享的，但是其中的可修改数据部分对于不同进程来说是由多个副本的。基于此，一种名为**地址无关代码**的技术被提出以克服这个问题。

> 计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决。

**地址无关代码（PIC，Position-independent Code）** 技术完美阐释了上面这句名言，其基本原理是：把指令中那些需要被修改的部分分离出来，跟数据部分放在一起，这样指令部分就可以保持不变，而数据部分可以在每个进程中拥有一个副本。

共享对象模块中的地址引用按照是否为跨模块分为两类：模块内部引用、模块外部引用。按照不用的引用方式又可分为：指令引用、数据引用。以如下代码为例，可得出如下四种类型：
- **类型1：模块内部的函数调用。**
- **类型2：模块内部的数据访问，如模块中定义的全局变量、静态变量。**
- **类型3：模块外部的函数调用。**
- **类型4：模块外部的数据访问，如其他模块中定义的全局变量。**

==类型1 模块内部函数调用==
- 由于被调用的函数与调用者都处于同一模块，它们之间的相对位置是固定的。对于现代的系统来说，模块内部的调用都可以是相对地址调用，或者是基于寄存器的相对调用，所以对于这种指令是不需要重定位的。

==类型2 模块内部数据访问==
- 一个模块前面一般是若干个页的代码，后面紧跟着若干个页的数据，这些页之间的相对位置是固定的，即任何一条指令与它需要访问的模块内部数据之间的相对位置是固定的，所以只需要相对于当前指令加上固定的偏移量就可以访问模块内部数据了。

==类型3 模块间数据访问==
- 模块间的数据访问比模块内部稍微麻烦一些，因为模块间的数据访问目标地址要等到装载时才决定。此时，动态链接需要使用代码无关地址技术，其基本思想是把地址相关的部分放到数据段。ELF的实现方法是：在数据段中建立一个**指向这些变量的指针数组**，也称为**全局偏移表（Global Offset Table，GOT）**，当代码需要引用该全局变量时，可以通过GOT中相对应的项间接引用。过程示意图如下所示：
	- ![](../../../../../Assets/Pics/Pasted%20image%2020250329172439.png)
- 当指令中需要访问变量b时，程序会先找到GOT，然后根据GOT中变量所对应的项找到变量的目标地址。每个变量都对应一个4字节的地址，链接器在装载模块时会查找每个变量所在的地址，然后填充GOT中的各个项，以确保每个指针所指向的地址正确。由于GOT本身是放在数据段的，所以它可以**在模块装载时被修改**，并且每个进程都可以有独立的副本，相互不受影响。

==类型4 模块间函数调用==
- 对于模块间函数调用，同样可以采用类型3的方法来解决。与上面的类型有所不同的是，GOT中响应的项保存的是目标函数的地址，当模块需要调用目标函数时，可以通过GOT中的项进行间接跳转。



## Symbol Resolution



## Relocation
![](../../../../../Assets/Pics/Pasted%20image%2020250329183514.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>



## Dynamicly Linked ELF File Loading
![|600](../../../../../Assets/Pics/Pasted%20image%2020250329172821.png)
<small><a>https://blog.csdn.net/jinking01/article/details/105388577?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388577&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link</a> ELF Loading Example: load_elf_binary()</small>

#TODO



## ELF Execution
↗ [Program Execution (Runtime)](../../🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)

![](../../../../../Assets/Pics/Pasted%20image%2020240925195819.png)



## Ref
[ELF文件加载过程 - 小乐叔叔的文章 - 知乎]: https://zhuanlan.zhihu.com/p/287863861
