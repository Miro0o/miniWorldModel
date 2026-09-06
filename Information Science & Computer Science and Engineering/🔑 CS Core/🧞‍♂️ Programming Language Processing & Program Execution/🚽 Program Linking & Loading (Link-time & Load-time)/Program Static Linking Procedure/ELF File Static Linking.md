# ELF File Static Linking

[TOC]



## Res
### Related Topics
↗ [ELF (Executable and Linkable Format)](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20(Executable%20and%20Linkable%20Format).md)
↗ [ELF File Layout & Format](../../../🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/🔩%20Linux%20Kernel/Linux%20IO%20&%20Files%20Management/🤔%20Linux%20File%20System/Linux%20File%20Types%20&%20Formats/ELF%20(Executable%20and%20Linkable%20Format)/ELF%20File%20Layout%20&%20Format.md)



## Intro: ELF Static Linking
> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

链接过程主要包含了三个步骤：
1. **地址与空间分配（Address and Storage Allocation）**
2. **符号解析（Symbol Resolution）**
3. **重定位（Relocation）**

在Linux中，静态链接器（static linker）`ld`以一组可重定位目标文件和命令行参数作为输入，生成一个完全链接的、可以加载和运行的可执行目标文件作为输出。输入的可重定位目标文件由各种不同的节组成，每一节都是一个连续的字节序列。



## Address and Storage Allocation
> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

在介绍ELF文件结构关于段与节的区别时，我们就提到过可执行文件中的段是由目标文件中的节合并而来的。那么，我们的第一个问题是：对于多个输入目标文件，链接器如何将它们的各个节合并到输出文件呢？或者说，输出文件中的空间如何分配给输入文件。
1. **按序叠加**
	1. ![](../../../../../Assets/Pics/Pasted%20image%2020250329170728.png)
	2. 虽然这种方法非常简单，但是它存在一个问题：在有很多输入文件的情况下，输出文件会有很多零散的节。这种做法非常浪费空间，因为每个节都需要有一定的地址和空间对齐要求。x86硬件的对齐要求是4KB。如果一个节的大小只有1个字节，它也要在内存在重用4KB。这样会造成大量内部碎片。所以不是一个好的方案。
2. **合并相似节**
	1. 一个更加实际的方法便是合并相同性质的节，比如：将所有输入文件的 **`.text`节**合并到输出文件的 **`text`段**（注意，此时出现了段和节两个概念），如下图所示。
	2. ![](../../../../../Assets/Pics/Pasted%20image%2020250329170803.png)
	3. 其中`.bss`节在目标文件和可执行文件中不占用文件的空间，但是它在装载时占用地址空间。事实上，这里的**空间和地址**有两层含义:
		1. 在输出的可执行文件中的空间
		2. 在装载后的虚拟地址中的空间
	4. 对于有实际数据的节，如`.text`和`.data`，它们在文件中和虚拟地址中都要分配空间，因为它们在这两者中都存在；对于`.bss`来，分配空间的意义只局限于虚拟地址空间，因为它在文件中并没有内容。**我们在这里谈到的空间分配只关注于虚拟地址空间的分配**，因为这关系到链接器后面的关于地址计算的步骤，而可执行文件本身的空间分配与链接的关系并不大。
### Two-Pass Linking
现在的链接器空间分配的策略基本上都采用“合并相似节”的方法，使用这种方法的链接器一般采用一种叫 **两步链接（Two-pass Linking）** 的方法。即整个链接过程分为两步：
- **第一步 地址与空间分配** (Address and Storage Allocation)
    扫描所有的输入目标文件，获得它们的各个节的长度、属性、位置，并将输入目标文件中的符号表中所有的符号定义和符号引用收集起来，统一放到一个全局的符号表。这一步，链接器能够获得所有输入目标文件的节的长度，并将它们合并，计算出输出文件中各个节合并后的长度与位置，并建立映射关系。
- **第二步 符号解析与重定位** (Symbol Resolution and Relocation)
    使用前一步中收集到的所有信息，读取输入文件中节的输数据、重定位信息，并且进行符号解析与重定位、调整代码、调整代码中的地址等。事实上，第二步是链接过程的核心，尤其是重定位。

![](../../../../../Assets/Pics/Pasted%20image%2020250329171151.png)
在地址与空间分配步骤完成之后，相似权限的节会被合并成段，并生成了[ELF文件结构](http://chuquan.me/2018/05/21/elf-introduce/)一文中没有介绍的 **程序头表（Program Header Table）** 结构。如下右图可执行文件结构所示，主要生成两个段：代码段（ `text`段）、数据段（ `data`段 ）。

![](../../../../../Assets/Pics/Pasted%20image%2020250329171253.png)
我们使用ld或gcc将`a.o`和`b.o`链接起来，然后使用objdump工具来查看链接前后的地址分配情况。

```
$ objdump -h a.o

Sections:
Idx Name          Size      VMA               LMA               File off  Algn
  0 .text         0000004f  0000000000000000  0000000000000000  00000040  2**0
                  CONTENTS, ALLOC, LOAD, RELOC, READONLY, CODE
  1 .data         00000000  0000000000000000  0000000000000000  0000008f  2**0
                  CONTENTS, ALLOC, LOAD, DATA
  2 .bss          00000000  0000000000000000  0000000000000000  0000008f  2**0
                  ALLOC
  
```

```
$ objdump -h b.o

Sections:
Idx Name          Size      VMA               LMA               File off  Algn
  0 .text         0000004b  0000000000000000  0000000000000000  00000040  2**0
                  CONTENTS, ALLOC, LOAD, READONLY, CODE
  1 .data         00000004  0000000000000000  0000000000000000  0000008c  2**2
                  CONTENTS, ALLOC, LOAD, DATA
  2 .bss          00000000  0000000000000000  0000000000000000  00000090  2**0
                  ALLOC
  ...
```

```
$ objdump -h ab

Sections:
Idx Name          Size      VMA               LMA               File off  Algn
  ...
  13 .text         00000202  0000000000400450  0000000000400450  00000450  2**4
                  CONTENTS, ALLOC, LOAD, READONLY, CODE
  ...
  24 .data         00000014  0000000000601028  0000000000601028  00001028  2**3
                  CONTENTS, ALLOC, LOAD, DATA
  25 .bss          00000004  000000000060103c  000000000060103c  0000103c  2**0
                  ALLOC
  ...
```

可以发现，链接前目标文件中所有节的 **VMA（Virtual Memory Address）** 都是0，因为虚拟空间还没有分配。链接后，可执行文件`ab`中各个节被分配到了相应的虚拟地址，如`.text`节被分配到了地址`0x0000000000400450`。

那么，为什么链接器要将可执行文件`ab`的`.text`节分配到`0x0000000000400450`？而不是从虚拟空间的0地址开始分配呢？这涉及到**操作系统的进程虚拟地址空间的分配规则**。在Linux x86-64系统中，代码段总是从`0x0000000000400000`开始的，另外`.text`节之前还有`ELF Header`、`Program Header Table`、`.init`等占用了一定的空间，所以就被分配到了`0x0000000000400450`。



## Symbol Resolution
> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

在**两步链接**中，这一步和重定位被合并成了一步，这是因为重定位的过程是伴随着符号解析的。这里我们分开介绍。

链接器解析符号引用的方法是将每个引用与它输入的可重定位目标文件的符号表中的一个确定的符号定义关联起来。对那些和引用定义在相同模块的局部符号的引用，符号解析是非常简单的。编译器只允许每个模块中每个局部符号有一个定义。静态局部变量也会有本地链接器符号，编译器还要确保它们拥有唯一的名字。

然而，对于全局符号的解析要复杂得多。当编译器遇到一个不是在当前模块中定义的符号（变量或函数名）时，会假设该符号是在其他某个模块中定义的，生成一个链接器符号表条目，并把它交给链接器处理。如果链接器在它的任何输入模块中都找不到这个被引用符号的定义，就输出一条错误信息并终止。

另一方面，对全局符号的解析，经常会面临多个目标文件可能会定义相同名字的全局符号。这种情况下，链接器必须要么标志一个错误，要么以某种方法选出一个定义并抛弃其他定义。
#### 多重定义的全局符号解析
链接器的输入是一组可重定位目标模块。每个模块定义一组符号，有些是局部符号（只对定义该符号的模块可见），有些是全局符号（对其他模块也可见）。如果多个模块定义同名的全局符号，该如何进行取舍？

Linux编译系统采用如下的方法解决多重定义的全局符号解析：

**在编译时，编译器想汇编器输出每个全局符号，或者是强（strong）或者是弱（weak），而汇编器把这个信息隐含地编码在可重定位目标文件的符号表中。**

根据强弱符号的定义，Linux链接器使用下面的规则来处理多重定义的符号名：
- **规则1：不允许有多个同名的强符号。**
- **规则2：如果有一个强符号和多个弱符号同名，则选择强符号。**
- **规则3：如果有多个弱符号同名，则从这些弱符号中任意选择一个。**

另一方面，由于允许一个符号定义在多个文件中，所以可能会导致一个问题：如果一个弱符号定义在多个目标文件中，而它们的类型不同，怎么办？这种情况主要有三种：
- **情况1：两个或两个以上的强符号类型不一致。**
- **情况2：有一个强符号，其他都是弱符号，出现类型不一致。**
- **情况3：两个或两个以上弱符号类型不一致。**

其中，情况1由于多个强符号定义本身就是非法的，所以链接器就会报错。对于后两种情况，编译器和链接器采用一种叫 **COMMON块（Common Block）** 的机制来处理。其过程如下：

**首先，编译器将未初始化的全局变量定义为弱符号处理。对于情况3，最终链接时选择最大的类型。对于情况2，最终输出结果中的符号所占空间与强符号相同，如果链接过程中有弱符号大于强符号，链接器会发出警告。**



## Relocation
> 🔗 https://blog.csdn.net/jinking01/article/details/105388149?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388149&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link

事实上，重定位过程也伴随着符号的解析过程。链接的前两步完成之后，链接器就已经确定所有符号的虚拟地址了，那么链接器就可以根据符号的地址对每个需要重定位的指令进行地址修正。

那么链接器如何知道哪些指令是要被调整的呢？事实上，我们前面提到的ELF文件中的 **重定位表（Relocation Table）** 专门用来保存这些与重定位相关的信息。

对于可重定位的ELF文件来说，它必须包含重定位表，用来描述如何修改相应的节的内容。对于每个要被重定位的ELF节都有一个对应的重定位表。如果`.text`节需要被重定位，则会有一个相对应叫`.rel.text`的节保存了代码节的重定位表；如果`.data`节需要被重定位，则会有一个相对应的`.rel.tdata`的节保存了数据节的重定位表。

我们可以使用objdump工具来查看目标文件中的重定位表：

```
$ objdump -r a.o

a.o:     file format elf64-x86-64

RELOCATION RECORDS FOR [.text]:
OFFSET           TYPE              VALUE
0000000000000023 R_X86_64_32       share
0000000000000030 R_X86_64_PC32     swap-0x0000000000000004
0000000000000049 R_X86_64_PC32     __stack_chk_fail-0x0000000000000004


RELOCATION RECORDS FOR [.eh_frame]:
OFFSET           TYPE              VALUE
0000000000000020 R_X86_64_PC32     .text
```

我们可以看到每个要被重定位的地方是一个 **重定位入口（Relocation Entry）**。利用数据结构成员包含的信息，即可完成重定位。


![](../../../../../Assets/Pics/Pasted%20image%2020250329183514.png)
<small><a>https://gist.github.com/x0nu11byt3/bcb35c3de461e5fb66173071a2379779</a></small>



## Staticly Linked ELF File Loading
![|600](../../../../../Assets/Pics/Pasted%20image%2020250329172821.png)
<small><a>https://blog.csdn.net/jinking01/article/details/105388577?fromshare=blogdetail&sharetype=blogdetail&sharerId=105388577&sharerefer=PC&sharesource=weixin_43336330&sharefrom=from_link</a> ELF Loading Example: load_elf_binary()</small>



## ELF Execution
↗ [Program Execution (Runtime)](../../🤡%20Program%20Execution%20(Runtime)/Program%20Execution%20(Runtime).md)

![](../../../../../Assets/Pics/Pasted%20image%2020240925195819.png)



## Ref
[ELF文件加载过程 - 小乐叔叔的文章 - 知乎]: https://zhuanlan.zhihu.com/p/287863861
