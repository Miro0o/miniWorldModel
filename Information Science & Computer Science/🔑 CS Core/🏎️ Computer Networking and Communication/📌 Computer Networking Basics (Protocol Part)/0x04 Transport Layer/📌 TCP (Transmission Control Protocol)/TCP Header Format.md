# TCP Header Format

[TOC]



## Res
### Related Topics


### Learning Resources
🔗【深入浅出计算机网络 - 5.3.1 TCP报文段的首部格式】 https://www.bilibili.com/video/BV1Ce4y1674L/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## TCP Header Fields Overview
![Explaining TCP/IP | Kelvin.Liang](../../../../../../Assets/Pics/TCP_header.jpeg)
<small>TCP Segment Header</small>

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.44.14%20PM.png)

![](../../../../../../Assets/Pics/Screenshot%202023-04-19%20at%2012.45.29%20PM.png)
<small>Source: <a>https://skminhaj.wordpress.com/2016/02/15/tcp-segment-vs-udp-datagram-header-format/</a></small>



## 🤕 TCP Header Fields
### Src Port Number & Dst Port Number



### Sequence Number & Acknowledgment Number & ACK
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.52.21%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.53.19%20PM.png)
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.53.37%20PM.png)


![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.54.52%20PM.png)


### Offset Number
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.55.49%20PM.png)


### Reserved Number
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.56.24%20PM.png)

 
### Windows Number (`rwnd`)
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.57.48%20PM.png)


### Checksum
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.58.15%20PM.png)

> ❓ ==Difference between IP checksum & TCP checksum?==
> 
> ↗ [IPv4 Datagram Header Format](../../0x05%20Network%20Layer/Internet%20Protocols%20(IP)/IPv4/IPv4%20Datagram%20Header%20Format.md)
> 
> [Difference between IP checksum and TCP checksum](https://networkengineering.stackexchange.com/questions/52936/difference-between-ip-checksum-and-tcp-checksum)


### Optional Fields
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%2010.01.32%20PM.png)


### Padding
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%2010.02.08%20PM.png)



## 🏴‍☠️ TCP Flag Fields
### SYN
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.59.05%20PM.png)


### FIN
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.59.30%20PM.png)


### RST
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%209.59.51%20PM.png)


### PSH
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%2010.00.41%20PM.png)


### URG & URG Pointer
![](../../../../../../Assets/Pics/Screenshot%202023-06-16%20at%2010.00.17%20PM.png)



## Ref

