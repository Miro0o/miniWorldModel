# Software Analysis & Binary Engineering

[TOC]



## Res
### Related Topics
↗ [Software Vulnerability & Weakness](../🐒%20Software%20Vulnerability%20&%20Weakness/Software%20Vulnerability%20&%20Weakness.md)
- ↗ [Vulnerability Discovery（漏洞检测）](../🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Discovery（漏洞检测）/Vulnerability%20Discovery（漏洞检测）.md)
- ↗ [Vulnerability Disclosure（漏洞挖掘）](../🐒%20Software%20Vulnerability%20&%20Weakness/Vulnerability%20Disclosure（漏洞挖掘）/Vulnerability%20Disclosure（漏洞挖掘）.md)

↗ [Software Testing](../../../../Software%20Engineering/Software%20Maintenance%20&%20Operations%20Management/🧪%20Software%20Testing/Software%20Testing.md)
↗ [Security Audit & Security Audit Trail](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Security%20Audit%20&%20Security%20Audit%20Trail.md)
↗ [Code Review](../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Security%20Audit%20&%20Security%20Audit%20Trail/Code%20Review.md)

↗ [Program Compilation & Execution](../../../../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/Program%20Compilation%20&%20Execution.md)

↗ [Operating System Security](../../../System%20Security/Operating%20System%20Security/Operating%20System%20Security.md)
↗ [Operating System Kernel (Kernel Mode)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/😴%20Operating%20System%20Components%20&%20Runtime%20Libraries/Operating%20System%20Kernel%20(Kernel%20Mode).md)
↗ [Operating Systems & Kernels (Engineering Part)](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Operating%20Systems%20&%20Kernels%20(Engineering%20Part).md)
↗ [Operating System & OS Kernel (Theory Part)](../../../../🔑%20CS%20Core/👷🏾‍♂️%20Computer%20System/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part)/Operating%20System%20&%20OS%20Kernel%20(Theory%20Part).md)

↗ [Software Analysis Tools](../../../☠️%20Kill%20Chain/🔞%20Software%20Analysis%20Tools/Software%20Analysis%20Tools.md)
↗ [Reverse & Binary Analysis Tools](../../../☠️%20Kill%20Chain/🔞%20Software%20Analysis%20Tools/⛰️%20Static%20Code%20Analysis%20Tools%20(SCAT)/Reverse%20&%20Binary%20Analysis%20Tools.md)
↗ [📌 Computer Profiling & System Visibility](../../../../🔑%20CS%20Core/🥷🏼%20Operating%20Systems%20&%20Kernels%20(Engineering%20Part)/Linux%20(Derived%20From%20UNIX%20Family)/Linux%20Free%20Software%20&%20OSS%20(Open%20Source%20Software)/Host%20Management/📌%20Computer%20Profiling%20&%20System%20Visibility.md)

↗ [Program Debugging & Defensive Programming](../../../../🗺%20CS%20Overview/Program%20Debugging%20&%20Defensive%20Programming.md)


### Learning Resources
📂 https://www.scuctf.com/ctfwiki/pwn/
CTF PWN 入门 | SCU CTF WiKi

🏫 [Malicious Code Analysis](../../../../🗺%20CS%20Overview/Courses%20of%20Universities/CMU/Malicious%20Code%20Analysis/Malicious%20Code%20Analysis.md)

📚 https://firmianay.gitbook.io/ctf-all-in-one/ (CTF竞赛权威指南(Pwn篇))
🚧 https://github.com/firmianay/CTF-All-In-One/tree/master
 
📚 [二进制安全学习笔记](https://binhack.readthedocs.io/zh/latest/index.html)

📚 c++反汇编与逆向分析技术揭秘第二版 钱林松 张延清

👨‍💻 http://ifsec.blogspot.com/2018/02/so-you-want-to-work-in-security-and-for.html 
So you want to work in security? (and for some reason ended up here rather than reading other people’s posts on the topic).

[ctf-wiki](https://ctf-wiki.org/)：涵盖了大部分 ctf pwn 题的漏洞利用方法，而且配有题目讲解。强烈推荐。

[how2heap](https://github.com/shellphish/how2heap)：教你各个版本下的 glibc ptmalloc2 堆利用方法。

https://scubsrgroup.github.io/BinaryDatabase/
Binary related materials


### Sites & Blogs
🫂 https://iosre.com i睿论坛

🫂 https://down.52pojie.cn 爱盘 - 在线破解工具包

🫂 https://www.52pojie.cn 吾爱破解

🫂 https://bbs.kanxue.com 看雪学苑

http://uuzdaisuki.com/categories/
一些 网安 & CTF 合集


### Others
🚧 https://github.com/0th3rs-Security-Team/Binary-Security-Advanced-References
本仓库内容旨在收集二进制安全相关的精品阅读材料，供学习者深入参考学习所用

📔 https://github.com/gh0stkey/Binary-Learning
二进制安全相关的学习笔记

📔 https://n0a110w.github.io
Just a collection of notes, snippets and other goodies..



## Intro



## Ref
[ctf re/pwn入门书单]: https://eternalsakura13.com/2018/05/31/shudan/

逆向
- c++反汇编技术解密
	- 介绍：这本是完整看完了的，后面关于对象和类写的不错。
- 使用OllyDbg从零开始Cracking(已完结）
	- 介绍：学习od使用的教程，动手实践上不错，翻译和配套资料在看雪可以搜到。
- 逆向工程权威指南

pwn（浏览器、内核什么的书就不安利了……太多了，只写一下学ctf pwn看过的书）
- 0day安全2
	- 介绍：我只看了前半本的内容，书有点老了，感觉看不看没影响。
- 深入理解计算机系统
	- 介绍：必读书，读了大概一个周，不求全懂，大概用到的地方都看过了，其他的用到再查了，其实内容也不是很深。
- 程序员的自我修养
	- 介绍: 必读的基础书，讲Linux上的程序装载链接什么的，很有意义。
- glibc内存管理ptmalloc源代码分析
	- 介绍：理解Linux堆管理的必读书
- 漏洞战争
	- 介绍：很好的书，里面的案例能调的都值得调一下。


[二进制安全学习之路]: https://xz.aliyun.com/t/12402

[👍 脱壳技术 ｜ 看雪学苑]: https://bbs.kanxue.com/thread-58798.htm

CTF高质量PWN题之二叉树的漏洞利用 - yjlabs的文章 - 知乎
https://zhuanlan.zhihu.com/p/434745218