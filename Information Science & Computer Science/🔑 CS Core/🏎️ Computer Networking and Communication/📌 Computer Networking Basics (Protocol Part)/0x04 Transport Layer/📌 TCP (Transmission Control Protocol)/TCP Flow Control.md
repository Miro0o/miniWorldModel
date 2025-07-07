# TCP Flow Contorl

[TOC]



## Res
🔗【深入浅出计算机网络 - 5.3.3 TCP的流量控制】 https://www.bilibili.com/video/BV1w841147JB/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

↗ [Reliable Data Transfer (RDT)](../../Reliable%20Data%20Transfer%20(RDT)/Reliable%20Data%20Transfer%20(RDT).md)



## TCP Flow Control Basic
Flow control: **receiver controls sender**, so sender won’t overflow receiver’s buffer by transmitting too much, too fast.

> This is, in my understanding, from the server's perspective, whereas connection control is from the network's perspective; although both of them involves controlling the sender's sending rate.

![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.49.58%20AM.png)


### `rwnd` (Receiver Side)
![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.50.24%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-21%20at%2011.50.50%20AM.png)



## Flow Control In Action
![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.28.10%20PM.png)


### Timer + 0 Window Detection Segment
![Screenshot 2022-11-20 at 10.45.00 AM](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.45.00%20AM.png)

![Screenshot 2022-11-20 at 10.45.58 AM](../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2010.45.58%20AM.png)


![](../../../../../../Assets/Pics/Screenshot%202023-04-22%20at%202.30.07%20PM.png)


## Ref

