# Exo & Exocompilation

[TOC]



## Res
🏠 https://exo-lang.dev/


### Related Topics


### Other Resources



## Intro
Exo is a domain-specific programming language that helps low-level performance engineers transform very simple programs that specify what they want to compute into very complex programs that do the same thing as the specification, only much, much faster.

> 🤖 https://chatgpt.com/share/6ad83cc8-74ec-83ec-a75f-b872a3733a35

传统编译器大致是：
```
算法
  ↓
编译器内部优化 Pass
  ↓
目标机器代码
```

Exo 的思路则是：
```
算法
  +
用户编写的优化变换
  +
用户描述的硬件指令与存储能力
  ↓
Exo 验证并执行程序变换
  ↓
面向目标硬件的优化代码
```

这意味着，优化策略本身变成了可编程、可组合、可复用的软件资产。



## Ref
