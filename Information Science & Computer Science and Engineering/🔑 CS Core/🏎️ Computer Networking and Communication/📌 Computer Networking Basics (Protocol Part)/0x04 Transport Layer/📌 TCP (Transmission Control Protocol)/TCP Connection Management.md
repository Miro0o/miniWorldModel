# TCP Connection Management

[TOC]



## Res
### Related Topics


### Learning Resources
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=83&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2011.43.26%20AM.png)



## 👏 3-way Handshake (TCP Connection Establishment)
🔗【深入浅出计算机网络 - 5.3.2 TCP的运输连接管理（1）——”三报文握手“建立TCP连接】 https://www.bilibili.com/video/BV12d4y1z7YQ/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### 2-Way Handshake Problems
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2011.41.52%20AM.png)


### 3-Way Handshake Basics
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%203.22.32%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%203.38.29%20PM.png)



![Screenshot 2022-11-13 at 10.34.52 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2010.34.52%20AM.png)



![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2011.42.43%20AM.png)



## ⭐️ TCP Reliable Data Transmission (TCP RDT)
🔗【深入浅出计算机网络 - 5.3.6 TCP可靠传输的实现】 https://www.bilibili.com/video/BV16d4y1M7qc/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### TCP Sequence Numbers & ACKs
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.30.24%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.32.10%20AM.png)

❗TCP window size = $MIN(cwnd, rwnd)$


### 🎯 TCP RDT Basic Mechanism 
#### 1️⃣ Byte-based Sliding Window (Sender)

![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.42.43%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.43.31%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.36.01%20AM.png)


#### 2️⃣ Cumulative Acknowledgement & Fast Retransmit (Receiver)

> ❗ TCP has no claim on policies upon out-of-order packets at receiver side. Handling of out-of-order packets is at receiver's discretion. 

![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.35.32%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.45.12%20PM.png)


#### 3️⃣ TCP RDT Summary
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.45.51%20PM.png)

##### Exercise Problems
![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%209.41.41%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%209.42.55%20AM.png)



### 🎯 Round Trip Time: Time Out (RTTO) (==TCP Timer Management==)
🔗【深入浅出计算机网络 - 5.3.7 TCP超时重传时间的选择】 https://www.bilibili.com/video/BV1cg411e7xv/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%209.44.39%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%201.13.09%20PM.png)

> RTO 应该略大于 RTTO， 但是实际情况远比这简单。如何确定RTO是很困的问题。


#### 1️⃣ RTT Estimation (`EstimatedRTT` + `SampleRTT`)

![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%209.47.14%20AM.png)

##### ⭐️ EWMA (Exponential Weighted Moving Average) & `EstimatedRTT`
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%201.14.34%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%201.13.55%20PM.png)

##### `SampleRTT`
#TODO 


#### 2️⃣ ReTransmission TimeOut Interval (RTTO)
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.48.55%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%201.12.07%20PM.png)


#### 🤔 RTT & RTTO in Action
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.49.37%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.52.14%20PM.png)


##### ⭐️ RTT & RTTO: Example
![](../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%209.59.22%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.53.07%20PM.png)


### 🎯 TCP Retransmission Choices
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.36.27%20AM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.37.57%20AM.png)


#### 1️⃣ TCP Fast Retransmit
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.38.09%20AM.png)


#### 2️⃣ TCP Selective Acknowledgement, SACK, [RFC 2018] Recommend
🔗【深入浅出计算机网络 - 5.3.8 TCP的选择确认】 https://www.bilibili.com/video/BV1dW4y1h7TR/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![Screenshot 2022-11-20 at 10.50.47 AM](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.50.47%20AM.png)


### 🏁 Supplementary Notes
![Screenshot 2022-11-13 at 11.03.30 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2011.03.30%20AM.png)



## 👋🏻 4-way Handshake (Connection Release)
🔗 【深入浅出计算机网络 - 5.3.2 TCP的运输连接管理（2）——”四报文挥手“释放TCP连接】 https://www.bilibili.com/video/BV1LB4y1776Q/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d


### 4-Way Handshake Basics
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%203.38.56%20PM.png)

![Screenshot 2022-11-13 at 10.51.46 AM](../../../../../../Assets/Pics/Screenshot%202022-11-13%20at%2010.51.46%20AM.png)


### MSL (Maximum Segment Lifetime)
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2011.49.36%20AM.png)


### TCP Keepalive Timer
![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2011.49.23%20AM.png)



## Ref

