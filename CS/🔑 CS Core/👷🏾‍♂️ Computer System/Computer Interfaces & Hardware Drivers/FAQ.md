# FAQ

[TOC]



## 👉 Difference between API and ABI
#API #ABI

My understanding: (?🤷‍♀️)
The concepts of API/ABI is dynamic and relative. When referring to API, it means the interface the system as a whole provided to the outside; while for ABI, it means the interfaces provided among system's components for intra-communicating purposes.

---

**API: Application Program Interface**
This is the set of public types/variables/functions that you expose from your application/library.

In C/C++ this is what you expose in the header files that you ship with the application.


**ABI: Application Binary Interface**
This is how the compiler builds an application.  
It defines things (but is not limited to):
- How parameters are passed to functions (registers/stack).
- Who cleans parameters from the stack (caller/callee).
- Where the return value is placed for return.
- How exceptions propagate.

[👍 Difference between API and ABI | Stackoverflow]: https://stackoverflow.com/a/3784697/16542494

---

**Linux shared library minimal runnable API vs ABI example**

This answer has been extracted from my other answer: [What is an application binary interface (ABI)?](https://stackoverflow.com/questions/2171177/what-is-an-application-binary-interface-abi/54967743#54967743) but I felt that it directly answers this one as well, and that the questions are not duplicates.

In the context of shared libraries, the most important implication of "having a stable ABI" is that you don't need to recompile your programs after the library changes.

As we will see in the example below, it is possible to modify the ABI, breaking programs, even though the API is unchanged.

main.c
```c
#include <assert.h>
#include <stdlib.h>

#include "mylib.h"

int main(void) {
    mylib_mystruct *myobject = mylib_init(1);
    assert(myobject->old_field == 1);
    free(myobject);
    return EXIT_SUCCESS;
}
```

mylib.c
```c
#include <stdlib.h>

#include "mylib.h"

mylib_mystruct* mylib_init(int old_field) {
    mylib_mystruct *myobject;
    myobject = malloc(sizeof(mylib_mystruct));
    myobject->old_field = old_field;
    return myobject;
}
```

mylib.h
```c
#ifndef MYLIB_H
#define MYLIB_H

typedef struct {
    int old_field;
} mylib_mystruct;

mylib_mystruct* mylib_init(int old_field);

#endif
```

Compiles and runs fine with:
```c
cc='gcc -pedantic-errors -std=c89 -Wall -Wextra'
$cc -fPIC -c -o mylib.o mylib.c
$cc -L . -shared -o libmylib.so mylib.o
$cc -L . -o main.out main.c -lmylib
LD_LIBRARY_PATH=. ./main.out
```

Now, suppose that for v2 of the library, we want to add a new field to `mylib_mystruct` called `new_field`.

If we added the field before `old_field` as in:
```c
typedef struct {
    int new_field;
    int old_field;
} mylib_mystruct;
```

and rebuilt the library but not `main.out`, then the assert fails!

This is because the line:
``` c
myobject->old_field == 1
```

had generated assembly that is trying to access the very first `int` of the struct, which is now `new_field` instead of the expected `old_field`.

Therefore this change broke the ABI.

If, however, we add `new_field` after `old_field`:
``` c
typedef struct {
    int old_field;
    int new_field;
} mylib_mystruct;
```

then the old generated assembly still accesses the first `int` of the struct, and the program still works, because we kept the ABI stable.

Here is a [fully automated version of this example on GitHub](https://github.com/cirosantilli/cpp-cheat/tree/449024d6bedc8ff1d9d5a832efaf8f0851fb260c/shared_library/abi).

Another way to keep this ABI stable would have been to treat `mylib_mystruct` as an [opaque struct](https://en.wikipedia.org/wiki/Opaque_pointer), and only access its fields through method helpers. This makes it easier to keep the ABI stable, but would incur a performance overhead as we'd do more function calls.

**API vs ABI**
In the previous example, it is interesting to note that adding the `new_field` before `old_field`, only broke the ABI, but not the API.

What this means, is that if we had recompiled our `main.c` program against the library, it would have worked regardless.

We would also have broken the API however if we had changed for example the function signature:
```c
mylib_mystruct* mylib_init(int old_field, int new_field);
```

since in that case, `main.c` would stop compiling altogether.

**Semantic API vs Programming API**
We can also classify API changes in a third type: semantic changes.

The semantic API, is usually a natural language description of what the API is supposed to do, usually included in the API documentation.

It is therefore possible to break the semantic API without breaking the program build itself.

For example, if we had modified
```c
myobject->old_field = old_field;
```

to:
```c
myobject->old_field = old_field + 1;
```

then this would have broken neither programming API, nor ABI, but `main.c` the semantic API would break.

There are two ways to programmatically check the contract API:
- test a bunch of corner cases. Easy to do, but you might always miss one.
- [formal verification](https://en.wikipedia.org/wiki/Formal_verification). Harder to do, but produces mathematical proof of correctness, essentially unifying documentation and tests into a "human" / machine verifiable manner! As long as there isn't a bug in your formal description of course ;-)

Tested in Ubuntu 18.10, GCC 8.2.0.


[👍 Difference between API and ABI | Stackoverflow]: https://stackoverflow.com/a/54970475/16542494



## 👉 Difference Between Computer Firmware 🆚 Drivers?
#firmware #driver

驱动是 OS 的一部分，跑在 CPU 上；Firmware 是硬件的一部分，跑在硬件板载的嵌入式芯片上。两者之间通过某些协议进行沟通，譬如对于硬盘驱动和 firmware 之间就是 SCSI 之类的协议。


---
相同点都是管理硬件的，区别是随谁一起发布。随硬件一起发布的叫固件，随软件一起发布的叫驱动。

随硬件一起发布是因为没有固件，硬件本身无法工作，如bios。随软件一起发布是因为为没有它软件无法在目标硬件上工作，如linux驱动。说白了只看出身立场，不看能力。

软件厂商和硬件厂商之间有一个接口界面，这个界面下的软件通常叫firmware，由硬件厂商提供，之上的操作硬件的叫驱动，有软件厂商提供。这个界面可以是大家一起订立的，也可以是软件厂商定义的，也可以是硬件厂商定义的。硬件厂商定义的话，通常倾向于把界限网上推，这样他能干更多的事情，能对软件友好，从而提高市场占有率。软件厂商定义的话，倾向于往下推，这样它可以要求硬件厂商开放更多硬件信息，软件可以做更多优化。通常的结果是大家定义一个最合适的界限，然后都想越过这个界限。比如说uefi，它做了很多驱动做的事情，试图取代驱动。而linux内核也不肯放弃驱动，所以选择不使用uefi提供的好多功能。

作者：Sinaean Dean  
链接：https://www.zhihu.com/question/22175660/answer/273740705  
来源：知乎  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


---
驱动和固件（firmware）都是代码，**前者为软件服务，后者为硬件服务**。

在操作系统概念还不明确的时代，二者是没有明显区别的。

但是随着计算机体系结构的发展，硬件的种类开始变多，操作系统的种类也变多了。

这个时候，因为各种技术的、商业的原因，硬件厂商希望自己的硬件能被更多的软件厂商使用，所以就需要在硬件之上做一些封装，让自己的硬件操纵起来更容易，这个时候就要有firmware这种东西了，它简化了软件与硬件的交互。

但是为什么不把fimware做的很完美，做的不需要驱动支持呢？因为有不同的操作系统。我不知道你对操作系统的理解是到什么程度？只知道Windows？还是还仅仅知道Linux？还是清楚Unix和FreeBSD是不同的系统？知道有RTOS？知道有上百种不同的内核？

不同的操作系统，对于操作硬件的方式完全不同，在Windows里应用态是无法直接写IO端口的，而在嵌入式系统里，一般都不限制直接操作IO端口。所以，硬件厂商一方面为了自己的硬件能被软件更简单的使用，就需要写firmware，而另一方面为了兼容各种操作系统，又不能把firmware写的太死，必须预留足够的余地让软件自由发挥——软件的自由发挥就是驱动。

不同操作系统的驱动是不能兼容的，原因就是驱动是为操作系统服务的，有的操作系统是单线程的，有些操作系统不允许动态申请内存，所以不同的操作系统要操作硬件，就要根据自身的特性编写对应的操作代码，这就是驱动存在的意义——适应系统需要。

假如世界上只有一种操作系统，并且版本永远不会改变，那么firmware和驱动就可以融合在一起，但这只能一个不现实的梦想，要知道民用操作系统和工业控制操作系统差别是十分巨大的。

作者：时国怀  
链接：https://www.zhihu.com/question/22175660/answer/20547502  
来源：知乎  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。  
