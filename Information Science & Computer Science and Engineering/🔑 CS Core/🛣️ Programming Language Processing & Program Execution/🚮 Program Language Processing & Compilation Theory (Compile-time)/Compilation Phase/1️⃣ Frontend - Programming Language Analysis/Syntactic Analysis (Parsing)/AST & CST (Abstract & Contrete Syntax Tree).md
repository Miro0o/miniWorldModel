# AST & CST (Abstract & Contrete Syntax Tree)

[TOC]



## Res
### Related Topics


### Other Resources
【【尚硅谷】Vue源码解析之AST抽象语法树】 https://www.bilibili.com/video/BV1GK4y1W7fi/?p=9&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## AST Overview
![Screenshot 2023-01-23 at 1.11.10 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.11.10%20AM.png)

![Screenshot 2023-01-23 at 1.12.21 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.12.21%20AM.png)



## AST Algorithm Review
### Pointer
![Screenshot 2023-01-23 at 1.14.03 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.14.03%20AM.png)

一个简单的双指针。

就题目本身来说可以直接进行单调栈判断。


### Recursion
![Screenshot 2023-01-23 at 1.19.32 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.19.32%20AM.png)

![Screenshot 2023-01-23 at 1.16.57 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.16.57%20AM.png)

![Screenshot 2023-01-23 at 1.15.45 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.15.45%20AM.png)

主要思想就是递归+记忆化。这里JS实现的比较简洁，利用了JS语言的一些特性。


### Stack
![Screenshot 2023-01-23 at 1.20.05 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.20.05%20AM.png)

![Screenshot 2023-01-23 at 1.20.52 AM](../../../../../../../../Assets/Pics/Screenshot%202023-01-23%20at%201.20.52%20AM.png)

利用栈的后进先出的特点进行问题的数学建模。



## Ref
[AST(抽象语法树)超详细 | CSDN]: https://blog.csdn.net/weixin_39408343/article/details/95984062
