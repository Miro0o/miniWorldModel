# Java

[TOC]

## Res
Oracle Java
🏠 https://www.java.com/en/
🏠 https://www.oracle.com/java/

OpenJDK
🏠 https://jdk.java.net
🏠 https://dev.java
📂 https://dev.java/learn/

📂 https://docs.oracle.com/en/java/index.html | oracle - docs
📂 http://docs.oracle.com/javaee | Java EE documentation

---
**Java Platform, Standard Edition (Java SE)**
- [Java SE Licensing Information](https://www.oracle.com/technetwork/java/javase/documentation)
	Product License, Commercial Features and Terms, [Java SE Licensing Information User Manual (LIUM)](https://www.oracle.com/java/technologies/javase/licensing-user-manual.html), Readme Files, Release Notes, and information on Data Collection
- [Java SE Technical Documentation](https://www.oracle.com/pls/topic/lookup?ctx=en/java/javase&id=javaselatest)
- [Java SE Components Documentation](http://docs.oracle.com/javacomponents)

---
**Java Platform, Enterprise Edition (Java EE)**
Java EE provides an API and runtime environment for developing and running large, multi-tiered, reliable, and secure enterprise applications that are portable and scalable and that integrate easily with legacy applications and data.

📂 [Java EE documentation](http://docs.oracle.com/javaee)

---
**Java Embedded**
Java ME Embedded is designed for resource-constrained devices like wireless modules for M2M, industrial control, smart-grid infrastructure, environmental sensors and tracking, and more.
📂 [Java ME Embedded documentation](http://docs.oracle.com/javame)

Oracle Java SE Embedded delivers a secure, optimized runtime environment ideal for network-based devices.
📂 [Oracle Java SE Embedded and JDK for ARM documentation](http://docs.oracle.com/javase/8/javase-embedded.htm)

Java Card technology provides a secure environment for applications that run on smart cards and other devices with very limited memory and processing capabilities.
📂 [Java Card documentation](https://docs.oracle.com/pls/topic/lookup?ctx=en/java/javacard&id=homepage)


### Related Topics
↗ [Java Runtimes (JRE & JDKs Tools)](../../../🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools).md)
↗ [Java Virtual Machine (JVM)](../../../🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Virtual%20Machine%20(JVM)/Java%20Virtual%20Machine%20(JVM).md)
↗ [javac (Java Programming Language Compiler)](../../../🛠️%20Programming%20Tools%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Compilers/javac%20(Java%20Programming%20Language%20Compiler)/javac%20(Java%20Programming%20Language%20Compiler).md)
↗ [JavaCC](../../../🛠️%20Programming%20Tools%20Chain/Compilation%20&%20Program%20Loading%20Tools/Compilers/📌%20CC%20(Compiler%20Compilers)/JavaCC/JavaCC.md)

↗ [SE /BackEndDev /JavaWeb](../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20BackEnd%20Language%20&%20Ecosystems/Java%20Web.md)


### Learning Guides
📂 [The Java Tutorials](https://docs.oracle.com/javase/tutorial/index.html)
📂 [Oracle Java official develeper doc](https://dev.java/learn/getting-started-with-java/)

👉 [how2j.cn -- java全栈开发](https://how2j.cn) 
👉 [Java 全栈知识体系](https://pdai.tech)
[codebaoku -- 编程宝库](http://www.codebaoku.com)

https://www.geeksforgeeks.org/java/
Java tutorial -- GeeksforGeeks

https://javaguide.cn
「Java学习 + 面试指南」涵盖 Java 程序员需要掌握的核心知识

[Java | Code Cademy](https://www.codecademy.com/catalog/language/java)

[菜鸟](https://www.runoob.com/java/java-tutorial.html)
[廖雪峰](https://www.liaoxuefeng.com/wiki/1252599548343744)

🎬 [遇见狂神说](https://space.bilibili.com/95256449)
🎬 [韩顺平](https://space.bilibili.com/651245581)



## Intro
Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.

>  Java介于编译型语言和解释型语言之间。编译型语言如C、C++，代码是直接编译成机器码执行，但是不同的平台（x86、ARM等）CPU的指令集不同，因此，需要编译出每一种平台的对应机器码。解释型语言如Python、Ruby没有这个问题，可以由解释器直接加载源码然后运行，代价是运行效率太低。而Java是将代码编译成一种“字节码”，它类似于抽象的CPU指令，然后，针对不同平台编写虚拟机，不同平台的虚拟机负责加载字节码并执行，这样就实现了“一次编写，到处运行”的效果。当然，这是针对Java开发者而言。对于虚拟机，需要为每个平台分别开发。为了保证不同平台、不同公司开发的虚拟机都能正确执行Java字节码，SUN公司制定了一系列的Java虚拟机规范。从实践的角度看，JVM的兼容性做得非常好，低版本的Java字节码完全可以正常运行在高版本的JVM上。

Begin with 📄 https://dev.java/learn/ and  📂 [oracle - docs](https://docs.oracle.com/en/java/index.html)

```ascii
┌───────────────────────────┐
│Java EE                    │
│    ┌────────────────────┐ │
│    │Java SE             │ │
│    │    ┌─────────────┐ │ │
│    │    │   Java ME   │ │ │
│    │    └─────────────┘ │ │
│    └────────────────────┘ │
└───────────────────────────┘
```



## 🤷🏽‍♂️ Ref
[手把手教你整合最优雅SSM框架：SpringMVC + Spring + MyBatis]: https://blog.csdn.net/qq598535550/article/details/51703190

