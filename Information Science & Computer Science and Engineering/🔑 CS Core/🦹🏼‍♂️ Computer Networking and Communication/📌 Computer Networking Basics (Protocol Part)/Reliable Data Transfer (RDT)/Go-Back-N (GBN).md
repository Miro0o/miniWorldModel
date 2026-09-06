# Go-Back-N (GBN)

[TOC]



## Res
### Related Topics


### Learning Resources
【深入浅出计算机网络 - 3.2.3 （3）可靠传输的实现机制 - 回退N帧协议】 https://www.bilibili.com/video/BV1Lt4y1J7uu/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## GBN Basics
### GBN Specifics
![](../../../../../Assets/Pics/Screenshot%202023-04-19%20at%209.24.07%20AM.png)

> 采用 N 个比特为数据分组编号。(不是上图中的发送窗口N ！)
> 
> 发送窗口($W_s$)：$2^0 \lt W_s \le 2^N-1$ (具体取值取决于协议具体实现)
> - 若 $W_s = 1$, 则退化为停止等待协议
> - 若 $W_s > 2^n - 1$ 会发生严重的错误。
> 
> 接收窗口()$W_r$：1


### GBN FSM
![](../../../../../Assets/Pics/Screenshot%202023-04-22%20at%203.37.29%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-04-22%20at%203.37.39%20PM.png)


### Continuing ARQ
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.24.37%20AM.png)



## 🎯 Sliding-windows Protocol
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.26.51%20AM.png)

The range of permissible sequence numbers for transmitted but not yet acknowledged packets can be viewed as a window of size N over the range of sequence numbers. As the protocol operates, this window slides forward over the sequence number space. For this reason, N is often referred to as the window size and the GBN protocol itself as a **sliding-window protocol**.



## 🎯 Cumulative Acknowledgement Protocol
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.31.23%20AM.png)
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.31.03%20AM.png)

- The advantage of this approach is the simplicity of receiver buffering— sthe receiver need not buffer any out-of-order packets. Thus, while the sender must maintain the upper and lower bounds of its window and the position of nextseqnum within this window, the only piece of information the receiver need maintain is the sequence number of the next in-order packet. This value is held in the variable expectedseqnum.
- Of course, the disadvantage of throwing away a correctly received packet is that the subsequent retransmission of that packet might be lost or garbled and thus even more retransmissions would be required.



## 🎯 Go Back N Frame
![](../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.20.21%20PM.png)

![](../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.19.24%20PM.png)



## N-sized Window & Maximal $2^N-1$ Data Group
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.32.33%20AM.png)



## Summary
![](../../../../../Assets/Pics/Screenshot%202023-04-15%20at%2010.41.36%20AM.png)

![](../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.33.46%20PM.png)


Why N-sized windows? (not an infinite noe)
🙈 We’ll see in Section 3.5 that flow control is one reason to impose a limit on the sender. We’ll examine another reason to do so in Section 3.7, when we study TCP congestion control.




## Ref

