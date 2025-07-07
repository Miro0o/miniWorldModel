# IP Datagram Delivery

[TOC]



## Res
🔗 【深入浅出计算机网络 - 4.2.6 IP数据报的发送和转发流程】 https://www.bilibili.com/video/BV1Ne4y187tz/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
> To better forward & route packages, ↗ [ICMP (Internet Control Message Protocol)](../🎮%20Control%20Plane%20(Routing%20&%20Managements)/IP%20Layer%20Network%20Management/ICMP%20(Internet%20Control%20Message%20Protocol)/ICMP%20(Internet%20Control%20Message%20Protocol).md) was invented to improve the performance of ip package delivering

![Screenshot 2022-11-26 at 3.55.37 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-26%20at%203.55.37%20PM.png)


### Determine IP Datagram Destination is Internal or External
![Screenshot 2022-11-26 at 3.55.01 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-26%20at%203.55.01%20PM.png)

By comparing network number of source IP & destination IP, router knows where to forward datagram.



## 🔃 Direct Delivery (Within Subnet)
↗ [Link-Layer Addressing (MAC Addressing)](../../0x06%20Data%20Link%20Layer/📌%20Link%20Layer%20(Switched%20Network)%20Basics/Link-Layer%20Addressing%20(MAC%20Addressing).md)



## 🔀 Indirect Delivery (Without Subnet)
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.30.32%20AM.png)


### Default Gateway
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.32.14%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.33.33%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.37.35%20AM.png)


### Multicast Segregation
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.36.59%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.36.33%20AM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%207.54.44%20PM.png)


### 🤔 Exercise Problems
Problem \#1
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.39.11%20AM.png)

Problem \#2
![](../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2011.39.40%20AM.png)



## Ref
