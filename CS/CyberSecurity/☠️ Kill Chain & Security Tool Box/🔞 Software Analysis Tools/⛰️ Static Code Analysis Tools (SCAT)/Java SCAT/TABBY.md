# TABBY

[TOC]



## Res
🏠 
🚧 https://github.com/wh1t3p1g/tabby


### Related Topics



## Intro
TABBY 是一款针对 Java 语言的静态代码分析工具，可用于快速发现多种类型的 Java 语言相关的漏洞。

TABBY 使用静态分析框架 [Soot](https://github.com/soot-oss/soot) 作为语义提取工具，将JAR/WAR/CLASS文件转化为代码属性图， 并使用 [Neo4j](https://neo4j.com/) 图数据库来存储生成的代码属性图CPG。

此外，通过扩展 Neo4j 的[路径遍历逻辑](https://github.com/wh1t3p1g/tabby-path-finder)，TABBY 可以使用简单的 cypher 语句即可完成复杂污点分析输出潜在的漏洞调用链路。



## Ref
