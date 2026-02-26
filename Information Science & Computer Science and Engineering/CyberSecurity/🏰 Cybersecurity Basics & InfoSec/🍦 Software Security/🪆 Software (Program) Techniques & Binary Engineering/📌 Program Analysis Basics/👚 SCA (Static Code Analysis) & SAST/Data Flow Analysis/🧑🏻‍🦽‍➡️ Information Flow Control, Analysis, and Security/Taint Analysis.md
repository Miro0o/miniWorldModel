# Taint Analysis

[TOC]



## Res
### Related Topics


### Other Resources
[南大软分课程笔记｜13 静态分析在安全领域的应用](https://blog.wohin.me/posts/nju-program-analysis-13/)



## Intro
> 程序分析 -- 南京大学

Taint analysis is the most common information flow analysis. It classifies program data into two kinds:
- Data of interest, some kinds of labels are associated with the data, called tainted data
- Other data, called untainted data
- Sources of tainted data is called sources. In practice, tainted data usually come from the return values of some methods (regarded as sources).
- Taint analysis tracks how tainted data flow through the program and observes if they can flow to locations of interest (called sinks). In practice, sinks are usually some sensitive methods


**Taint Analysis: Two Applications**
- Confidentiality
	- Source: source of secret data
	- Sink: leakage
	- Information leaks

```
x = getPassword(); // source
y = x;
log(y); // sink
```

- Integrity
	- Source: source of untrusted data
	- Sink: critical computation
	- Injection errors

```
x = readInput(); // source
cmd = "..." + x;
execute(cmd); // sink
```

Taint analysis can detect both unwanted information flows.



## Ref
[8.9 第八章_知识点9_污点分析基本原理]: https://www.bilibili.com/video/BV1jz4y1L761/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
转载自南开大学刘哲理老师编写的《软件安全:漏洞利用及渗透测试》教材的配套教学视频. 南开大学刘哲理老师编写的《软件安全：漏洞利用及渗透测试》，内容深入浅出，知识点链接顺畅，配套教学资源完备，非常适合信息安全专业的学生学习。
[基于LLM与IDA pro进行自动化漏洞分析和污点追踪]: https://www.bilibili.com/video/BV1vRP5eTEhY/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
