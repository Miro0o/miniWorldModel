# Select Repeat (SR)

[TOC]



## Res
【深入浅出计算机网络 - 3.2.3 （4）可靠传输的实现机制 - 选择重传协议】 https://www.bilibili.com/video/BV1aV4y1H7yc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
### SR Specifics
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%209.41.13%20AM.png)

> 采用 N 个比特为数据分组编号。(不是上图中的发送窗口N ！)
> 
> 发送窗口($W_s$)：$2^0 \lt W_s \le 2^{N-1}$ (具体取值取决于协议具体实现)
> - 若 $W_s = 1$, 则退化为停止等待协议
> - 若 $W_s > 2^n - 1$ 无法分辨新旧分组
> 
> 接收窗口()$W_r$：$1 < W_r ≤ W_s$
> - 若 $W_r = 1$， 则与GBN相同
> - 若 $W_r > W_s$，没有意义


### SR Overview
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.26.21%20PM.png)



## ⭐️ SR Process
【深入浅出计算机网络 - 3.2.3 （4）可靠传输的实现机制 - 选择重传协议】 https://www.bilibili.com/video/BV1aV4y1H7yc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## N-sized Window & Maximal $2^N-1$ Data Group
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.48.29%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.49.49%20AM.png)



## Summary
![](../../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.45.04%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.31.45%20PM.png)


### SR Problem
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.30.11%20PM.png)




## Ref

