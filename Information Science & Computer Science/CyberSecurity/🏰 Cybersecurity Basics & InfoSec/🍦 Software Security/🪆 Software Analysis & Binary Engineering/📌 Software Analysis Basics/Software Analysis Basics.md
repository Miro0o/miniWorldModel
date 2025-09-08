# Software Analysis Basics

[TOC]



## Res
### Related Topics
↗ [Software Quality Assurance (SQA)](../../../../../Software%20Engineering/🎭%20Software%20Quality%20Assurance%20(SQA)/Software%20Quality%20Assurance%20(SQA).md)
↗ [ICT System Reliability (Correctness) & Verification](../../../../⛈️%20Risk%20Management/🦟%20Vulnerabilities/ICT%20System%20Reliability%20(Correctness)%20&%20Verification.md)

↗ [Computer Languages & Programming Methodology](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Computer%20Languages%20&%20Programming%20Methodology.md)
- ↗ [Programming Language Theory (PLT)](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🐢%20Programming%20Language%20Theory%20(PLT)/Programming%20Language%20Theory%20(PLT).md)
↗ [Program Language Translation & Compilation Theory (Compile-time)](../../../../../🔑%20CS%20Core/🛣️%20Program%20Compilation%20&%20Execution/🚮%20Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time)/Program%20Language%20Translation%20&%20Compilation%20Theory%20(Compile-time).md)
↗ [Compilation & Program Loading Tools](../../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilation%20&%20Program%20Loading%20Tools.md)


### Other Resources
↗ [NJU /软件分析](../../../../../🗺%20CS%20Overview/💋%20Intro%20to%20Computer%20Science/👩🏼‍🏫%20Courses%20of%20Universities/NJU%20南京大学/软件分析/软件分析.md)
- 《（静态）软件分析》课程网站（含课件、实验作业、实验文档）： https://tai-e.pascal-lab.net/lectures.html 
- 《（静态）软件分析》实验作业在线评测：https://oj.pascal-lab.net/
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

https://www2.compute.dtu.dk/courses/02242/
02242: Program Analysis | Autumn 2024
Christian Gram Kalhauge | DTU

|No|Date|Topic|
|---|---|---|
|`01`|`2024-09-02`|[Introduction](https://courses.compute.dtu.dk/02242/topics/introduction.html)|
|`02`|`2024-09-09`|[Syntactic Analysis](https://courses.compute.dtu.dk/02242/topics/syntactic-analysis.html)|
|`03`|`2024-09-16`|[Semantics](https://courses.compute.dtu.dk/02242/topics/semantics.html)|
|`04`|`2024-09-23`|[Dynamic Analysis](https://courses.compute.dtu.dk/02242/topics/dynamic-analysis.html)|
|`05`|`2024-09-30`|[Bounded Static Analysis](https://courses.compute.dtu.dk/02242/topics/bounded-static-analysis.html)|
|`06`|`2024-10-07`|Recap / Project / QA|
|--|`2024-10-14`|Autumn holiday|
|`07`|`2024-10-21`|Self Study // Feedback From Proposals|
|`08`|`2024-10-28`|[Unbounded Static Analysis](https://courses.compute.dtu.dk/02242/topics/unbounded-static-analysis.html)|
|`09`|`2024-11-04`|[Concolic Execution](https://courses.compute.dtu.dk/02242/topics/concolic-execution.html)|
|`10`|`2024-11-11`|[How to write a good paper](https://courses.compute.dtu.dk/02242/topics/how-to-write-a-paper.html)|
|`11`|`2024-11-18`|Self Study // Peer Feedback On Papers|
|`12`|`2024-11-25`|[Context Sensitive Analysis](https://courses.compute.dtu.dk/02242/topics/context-sensitive-analysis.html)|
|`13`|`2024-12-02`|Q/A & How to-do a good presentation|
|--|`2024-12-10`|Exam|



## Intro: Software Analysis
![](../../../../../../Assets/Pics/Screenshot%202025-09-06%20at%2000.52.22.png)
<small>【南京大学《软件分析》课程01（Introduction）】 <a>https://www.bilibili.com/video/BV1b7411K7P4</a></small>

[Math's Fundamental Flaw - Veritasium](https://www.youtube.com/watch?v=HeQX2HjkcNo)

> 🔗 https://en.wikipedia.org/wiki/Program_analysis

In computer science, program analysis[1] is the process of analyzing the behavior of computer programs regarding a property such as correctness, robustness, safety and liveness. Program analysis focuses on two major areas: program optimization and program correctness. The first focuses on improving the program’s performance while reducing the resource usage while the latter focuses on ensuring that the program does what it is supposed to do.

Program analysis can be performed without executing the program (static program analysis), during runtime (dynamic program analysis) or in a combination of both.

> 🔗 https://en.wikipedia.org/wiki/Decidability_(logic)


### Software Analysis Taxonomy
**Static Code Analysis**
↗ [SCA (Static Code Analysis) & SAST](👚%20SCA%20(Static%20Code%20Analysis)%20&%20SAST/SCA%20(Static%20Code%20Analysis)%20&%20SAST.md)


**Dynamic Code Analysis**
↗ [DCA (Dynamic Code Analysis) & DAST](👙%20DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST/DCA%20(Dynamic%20Code%20Analysis)%20&%20DAST.md)


**Interactive Application Security Testing (IAST)**
> 🔗 https://en.wikipedia.org/wiki/Interactive_application_security_testing

Interactive application security testing (abbreviated as IAST) is a security testing method that detects software vulnerabilities by interaction with the program coupled with observation and sensors. The tool was launched by several application security companies. It is distinct from static application security testing, which does not interact with the program, and dynamic application security testing, which considers the program as a black box. It may be considered a mix of both



## Ref
