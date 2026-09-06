# C & CPP

[TOC]



## Res
📂 https://en.cppreference.com/w/c (C Reference)
C89, [C95](https://en.cppreference.com/w/c/95 "c/95"), [C99](https://en.cppreference.com/w/c/99 "c/99"), [C11](https://en.cppreference.com/w/c/11 "c/11"), [C17](https://en.cppreference.com/w/c/17 "c/17"), [C23](https://en.cppreference.com/w/c/23 "c/23")

📂 https://en.cppreference.com/w/cpp (C++ Reference)
C++98, C++03, [C++11](https://en.cppreference.com/w/cpp/11 "cpp/11"), [C++14](https://en.cppreference.com/w/cpp/14 "cpp/14"), [C++17](https://en.cppreference.com/w/cpp/17 "cpp/17"), [C++20](https://en.cppreference.com/w/cpp/20 "cpp/20"), [C++23](https://en.cppreference.com/w/cpp/23 "cpp/23") 
[Compiler support](https://en.cppreference.com/w/cpp/compiler_support "cpp/compiler support") [C++11](https://en.cppreference.com/w/cpp/compiler_support/11 "cpp/compiler support/11"), [C++14](https://en.cppreference.com/w/cpp/compiler_support/14 "cpp/compiler support/14"), [C++17](https://en.cppreference.com/w/cpp/compiler_support/17 "cpp/compiler support/17"), [C++20](https://en.cppreference.com/w/cpp/compiler_support/20 "cpp/compiler support/20"), [C++23](https://en.cppreference.com/w/cpp/compiler_support/23 "cpp/compiler support/23")


### Related Topics
↗ [Operating System & OS Kernel (Theory Part)](../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29.md)
↗ [System Core Function Libraries & C Standard Library (User Mode)](../../../../👷🏾‍♂️%20Computer%20%28Host%29%20System/Operating%20System%20&%20OS%20Kernel%20%28Theory%20Part%29/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/System%20Core%20Function%20Libraries%20&%20C%20Standard%20Library%20%28User%20Mode%29.md)
↗ [System Software Engineering](../../../../../Software%20Engineering/👇%20System%20Software%20Engineering/System%20Software%20Engineering.md)

↗ [C-like Runtimes](../../../🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/C-like%20Runtimes/C-like%20Runtimes.md)


### Learning Resources
📖 “K&R” text by Brian Kernighan and Dennis Ritchie

🎬 https://space.bilibili.com/263032155/channel/collectiondetail?sid=599074&spm_id_from=333.788.0.0
合集·现代C++项目实战
本系列《项目实战》课程更注重实战，结合实际项目，探讨现代C++黑科技如何运用，类似于cppcon。而此前的《高性能》系列课程更注重理论，主打一个标准库和语言新特性的完全API指南，类似于cppreference。希望同学们能结合起来观看。

🎬【【中字精译】《为游戏编程学习C++》 全网最好的C++入门教程】 https://www.bilibili.com/video/BV1dT421a7HT/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🎬 https://www.youtube.com/@javidx9extra/videos?view=0&sort=p&shelf_id=3
🎬【【百万好评】国外技术大神C++游戏编程实战教程，油管580W收藏，新手10小时入门，并快速达到游戏开发能力】 https://www.bilibili.com/video/BV12m42157oq/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### C Language
![|100](../../../../../../Assets/Pics/Pasted%20image%2020250915231837.png)

> Quote from CSAPP

C was developed from 1969 to 1973 by Dennis Ritchie of Bell Laboratories. The **American National Standards Institute (ANSI)** ratified the **ANSI C standard** in 1989, and this standardization later became the responsibility of the **International Standards Organization (ISO)**. The standards define the C language and a set of library functions known as the **C standard library**. **Kernighan** and **Ritchie** describe ANSI C in their classic book, which is known affectionately as “K&R” . In Ritchie’s words, C is “quirky, flawed, and an enormous success.” So why the success?
- **C was closely tied with the Unix operating system**. C was developed from the beginning as the system programming language for Unix. Most of the Unix kernel (the core part of the operating system), and all of its supporting tools and libraries, were written in C. As Unix became popular in universities in the late 1970s and early 1980s, many people were exposed to C and found that they liked it. Since Unix was written almost entirely in C, it could be easily ported to new machines, which created an even wider audience for both C and Unix.
- **C is a small, simple language**. The design was controlled by a single person, rather than a committee, and the result was a clean, consistent design with little baggage. The K&R book describes the complete language and standard library, with numerous examples and exercises, in only 261 pages. The simplicity of C made it relatively easy to learn and to port to different computers.
- **C was designed for a practical purpose**. C was designed to implement the Unix operating system. Later, other people found that they could write the programs they wanted, without the language getting in the way.

C is the language of choice for system-level programming, and there is a huge installed base of application-level programs as well. However, it is not perfect for all programmers and all situations. C pointers are a common source of confusion and programming errors. C also lacks explicit support for useful abstractions such as classes, objects, and exceptions. Newer languages such as C++ and Java address these issues for application-level programs.


### C++ Language
![|100](../../../../../../Assets/Pics/Pasted%20image%2020250915231911.png)



## Ref
[👍 C语言之宏的使用技巧(宏嵌套/宏展开/可变参数宏)]:https://www.cnblogs.com/skyzu2333/p/14888938.html
