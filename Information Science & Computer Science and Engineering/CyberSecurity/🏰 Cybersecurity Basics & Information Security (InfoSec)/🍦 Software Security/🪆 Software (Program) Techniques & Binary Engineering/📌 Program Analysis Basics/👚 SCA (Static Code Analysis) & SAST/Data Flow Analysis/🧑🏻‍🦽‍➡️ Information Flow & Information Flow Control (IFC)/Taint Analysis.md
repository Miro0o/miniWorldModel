# Taint Analysis

[TOC]



## Res
### Related Topics


### Other Resources



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


> 🔗 [南大软分课程笔记｜13 静态分析在安全领域的应用](https://blog.wohin.me/posts/nju-program-analysis-13/)

污点分析是最常见的信息流分析技术之一。它将程序数据分为两类：
1. 感兴趣的数据，带有某些标签，也叫做污点数据。
2. 其他数据，或者叫无污点数据。

污点数据的源头称为sources。实际场景中，污点数据通常来自某些方法的返回值。污点分析技术将追踪污点数据在程序中的流动过程，观察它们是否流到我们感兴趣的地方（locations of interest），这些地方又称作sinks。实际场景中，sinks通常是一些敏感方法。Source和sink是污点分析中非常重要的两个概念。

前面我们提到过损害机密性的敏感数据泄露威胁和损害完整性的注入威胁，事实上，污点分析能够用来发现这两类威胁。对于前者来说，source是敏感数据的来源，sink是泄露点；对于后者来说，source是不受信数据的来源，sink是重要的计算语句（如`eval`函数）。下面的两段代码分别展示了这两个场景：

```java
// information leak
x = getPassword(); // source
y = x;
log(y); // sink

// injection error
x = readInput(); // source
cmd = "..." + x;
execute(cmd); // sink
```

污点分析要回答的问题是，某个特定的污点数据能否流到某个sink处，或者从另一个角度来看，在一个sink处某个指针能够指向哪些污点数据。

Neville Grech和Yannis Smaragdakis于2017年发表的论文 [_P/Taint: Unified Points-to and Taint Analysis_](https://yanniss.github.io/ptaint-oopsla17-prelim.pdf) 指出，污点分析可以基于指针分析进行，因为两者非常相似——前者考察的是污点数据如何在程序中流动，后者考察的是抽象对象如何在程序中流动。我们只需要将污点数据当作一种特殊的“人造”对象，将sources当作污点数据的allocation sites，然后应用指针分析来传播污点数据即可。

事实上，上节课学习的上下文敏感的指针分析也可以用于污点分析，从而提高分析精度。不过，谭老师后面并没有给出上下文敏感的分析案例，而是用一个简单的上下文不敏感分析来讲解。

污点分析的域和记法与指针分析基本相同，除了新增的污点数据部分：
- Variables: $x, y \in V$
- Fields: $f, g \in F$
- Objects: $o_i, o_j \in O$
- Tainted data: $t_i, t_j \in T \subseteq O$
- Instance fields: $o_i.f, o_j.g \in O \times F$
- Pointers: $\text{Pointer} = V \cup (O \times F)$
- Points-to relations: $pt : \text{Pointer} \rightarrow \mathcal{P}(O)$

其中，$t_i$表示该污点数据来自call site $i$，$\mathcal{P}(O)$表示$O$的幂集，$pt(p)$表示$p$的指向集合。

污点分析的输入如下：
- Sources：由source方法（被调用后返回污点数据的方法）组成的集合。
- Sinks：由携带敏感实参的sink方法（污点数据流向这些方法的实参，违背了安全策略）组成的集合。

污点分析的输出是TaintFlows，它是由source和sink方法调用构成的元组组成的集合。

污点分析的规则与指针分析基本相同，除了新增的两条处理sources和sinks的规则：

| 种类   | 语句                             | 规则                                                                                                     |
| ---- | ------------------------------ | ------------------------------------------------------------------------------------------------------ |
| Call | $l: r = x.k(a_1, \ldots, a_n)$ | $\frac{l \rightarrow m \in CG \quad m \in Sources}{t_l \in pt(r)}$                                     |
| Call | $l: r = x.k(a_1, \ldots, a_n)$ | $\frac{l \rightarrow m \in CG \quad (m, i) \in Sinks \quad t_j \in pt(a_i)}{(j, l, i) \in TaintFlows}$ |

下面是一个污点分析的案例：
![](../../../../../../../../../Assets/Pics/Pasted%20image%2020260414135832.png)

从该案例可以看出，污点分析是伴随指针分析进行的。最终的输出TaintFlows中的`<3, 7, 0>`表示第3行处的敏感方法`getPassword`的返回值传播到了第7行的危险方法`log`的第0个参数，说明该程序可能存在信息泄露漏洞。



## Ref
[8.9 第八章_知识点9_污点分析基本原理]: https://www.bilibili.com/video/BV1jz4y1L761/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
转载自南开大学刘哲理老师编写的《软件安全:漏洞利用及渗透测试》教材的配套教学视频. 南开大学刘哲理老师编写的《软件安全：漏洞利用及渗透测试》，内容深入浅出，知识点链接顺畅，配套教学资源完备，非常适合信息安全专业的学生学习。
[基于LLM与IDA pro进行自动化漏洞分析和污点追踪]: https://www.bilibili.com/video/BV1vRP5eTEhY/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
