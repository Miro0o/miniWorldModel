# JVM Security

[TOC]



## Res
### Related Topics
↗ [Java](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/☕️%20Java/Java.md)
↗ [Java Virtual Machine (JVM)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Virtual%20Machine%20(JVM)/Java%20Virtual%20Machine%20(JVM).md)
↗ [JVM-Based Languages](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/Compiled%20+%20Interpreted%20Languages/⚰️%20JVM-Based%20Languages/JVM-Based%20Languages.md)
↗ [Java Runtimes (JRE & JDKs Tools)](../../../../🔑%20CS%20Core/👩‍💻%20Computer%20Languages%20&%20Programming%20Methodology/🛠️%20Programming%20Tool%20Chain/🚠%20Application%20Runtimes%20&%20SDKs/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools)/Java%20Runtimes%20(JRE%20&%20JDKs%20Tools).md)

↗ [Web Security](../../💉%20Web%20Security/Web%20Security.md)



## Intro


## Ref
[👍 Java内存攻击技术漫谈]: https://xz.aliyun.com/t/10075#toc-7

Java技术栈漏洞目前业已是web安全领域的主流战场，随着IPS、RASP等防御系统的更新迭代，Java攻防交战阵地已经从磁盘升级到了内存里面。  
在今年7月份上海银针安全沙龙上，我分享了《Java内存攻击技术漫谈》的议题，个人觉得PPT承载的信息比较离散，技术类的内容还是更适合用文章的形式来分享，所以一直想着抽时间写一篇和议题配套的文章，不巧赶上南京的新冠疫情，这篇文章拖了一个多月才有时间写。
1. allowAttachSelf绕过
2. 内存马防检测
3. Java原生远程进程注入
4. 自定义类调用系统Native库函数
5. 无文件落地Agent型内存马植入
6. Java跨平台任意Native代码执行

