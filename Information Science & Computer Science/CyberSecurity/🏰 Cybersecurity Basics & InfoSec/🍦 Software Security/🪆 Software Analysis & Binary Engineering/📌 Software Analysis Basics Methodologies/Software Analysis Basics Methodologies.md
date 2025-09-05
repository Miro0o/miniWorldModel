# Software Analysis Basics Methodologies

[TOC]



## Res
### Related Topics
↗ [Computer Languages & Programming Methodology](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Program Language Translation & Compilation Theory (Compile-time)](../../../../../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)


### Other Resources
↗ [NJU /软件分析](../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/软件分析/软件分析.md)
- [南京大学《软件分析》课程01（Introduction）](https://www.bilibili.com/video/BV1b7411K7P4?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程02（Intermediate Representation）](https://www.bilibili.com/video/BV1zE411s77Z?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程03（Data Flow Analysis I）](https://www.bilibili.com/video/BV1oE411K79d?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程04（Data Flow Analysis II）](https://www.bilibili.com/video/BV19741197zA?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程05（Data Flow Analysis - Foundations I）](https://www.bilibili.com/video/BV1A741117it?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程06（Data Flow Analysis - Foundations II）](https://www.bilibili.com/video/BV1964y1M7nL?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程07（Interprocedural Analysis）](https://www.bilibili.com/video/BV1GQ4y1T7zm?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程08（Pointer Analysis）](https://www.bilibili.com/video/BV1gg4y1z78p?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程09（Pointer Analysis - Foundations I）](https://www.bilibili.com/video/BV1NS4y1Q7UJ?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程10（Pointer Analysis - Foundations II）](https://www.bilibili.com/video/BV1fb4y1i7HY?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程11（Pointer Analysis - Context Sensitivity I）](https://www.bilibili.com/video/BV1wQ4y1v72e?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程12（Pointer Analysis - Context Sensitivity II）](https://www.bilibili.com/video/BV1aR4y1x7Zk?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程13（Static Analysis for Security）](https://www.bilibili.com/video/BV1Fq4y1B74m?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程14（Datalog-Based Program Analysis）](https://www.bilibili.com/video/BV1wa411k7Uv?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程15（CFL-Reachability and IFDS）](https://www.bilibili.com/video/BV1gL411j7vS?spm_id_from=333.788.comment.all.click) 
- [南京大学《软件分析》课程16（Soundness and Soundiness）](https://www.bilibili.com/video/BV1d3411s7tt?spm_id_from=333.788.comment.all.click)



## Intro: Software Analysis
![](../../../../../../Assets/Pics/Screenshot%202025-09-06%20at%2000.52.22.png)
<small>【南京大学《软件分析》课程01（Introduction）】 <a>https://www.bilibili.com/video/BV1b7411K7P4</a></small>

> 🔗 https://en.wikipedia.org/wiki/Program_analysis

In computer science, program analysis[1] is the process of analyzing the behavior of computer programs regarding a property such as correctness, robustness, safety and liveness. Program analysis focuses on two major areas: program optimization and program correctness. The first focuses on improving the program’s performance while reducing the resource usage while the latter focuses on ensuring that the program does what it is supposed to do.

Program analysis can be performed without executing the program (static program analysis), during runtime (dynamic program analysis) or in a combination of both.



### Software Analysis Taxonomy
**Static Code Analysis**
↗ [SCA (Static Code Analysis) & SAST](👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)


**Dynamic Code Analysis**
↗ [DCA (Dynamic Code Analysis) & DAST](👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST.md)


**Interactive Application Security Testing (IAST)**
> 🔗 https://en.wikipedia.org/wiki/Interactive_application_security_testing

Interactive application security testing (abbreviated as IAST) is a security testing method that detects software vulnerabilities by interaction with the program coupled with observation and sensors. The tool was launched by several application security companies. It is distinct from static application security testing, which does not interact with the program, and dynamic application security testing, which considers the program as a black box. It may be considered a mix of both



## Ref
