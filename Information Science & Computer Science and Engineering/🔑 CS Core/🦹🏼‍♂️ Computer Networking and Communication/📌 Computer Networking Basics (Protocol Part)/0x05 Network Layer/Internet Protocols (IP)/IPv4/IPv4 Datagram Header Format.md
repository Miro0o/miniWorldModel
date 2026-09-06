# IPv4 Datagram Header Format

[TOC]



## Res
🔗 【深入浅出计算机网络 - 4.2.7 IPv4数据报的首部格式】 https://www.bilibili.com/video/BV19Y4y1K7i7/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=57&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.27.37%20AM.png)



## Overview
![Screenshot 2022-11-20 at 1.21.45 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%201.21.45%20PM.png)
<small>IPv4 Header Format</small>

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.02.54%20AM.png)





## Entry-Specific
### Version 
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.29.11%20AM.png)


### Header Length
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.29.43%20AM.png)


### Options & Padding
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.30.12%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.32.19%20AM.png)


### Type of Service
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.29.51%20AM.png)


### (Total) Length
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.33.15%20AM.png)


### ⭐️ Fragmentation & Reassembly (`Identifier` + `Flag` + `Fragment Offset`)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.34.40%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.36.19%20AM.png)

 
#### IP Datagram Fragmentation
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.37.10%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.37.47%20AM.png)


#### Excercise Problem
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.53.12%20AM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.52.53%20AM.png)



### TTL (Time to Live)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.38.42%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.39.37%20AM.png)


### Upper Layer (上层协议)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.40.05%20AM.png)


### Header Checksum
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.40.57%20AM.png)

> IPv4 header checksum only detects error **within** ip header. While TCP header checksum detects error in the whole transport segment.
> 
> Also, IPv6 has already discarded header checksum.


#### ⭐ Header Checksum Calculation (1's Complement)
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.56.34%20AM.png)

1's Complement: 二进制数求和后取反。
2‘s Complement: 取反后加1。

这里的 “1补全” 和 “2补全” 实际意义：
假设二进制数有N位。则二进制数最大为全1，记为 $MaxN = 2^N - 1$ 。
“1补全”就是在 $MaxN$ 内求反码，“2补全”就是在 $2^N$ 即 $MaxN + 1$ 内求反码。
这里反码的意思就是0、1互换。

#### ⭐ IPv4 Checksum 🆚 TCP Checksum

#TODO 


[Difference between IP checksum and TCP checksum]: https://networkengineering.stackexchange.com/questions/52936/difference-between-ip-checksum-and-tcp-checksum



### Src IP & Dst IP
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2010.58.56%20AM.png)



## 🤔 Exercises
Problem \#1
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.42.19%20AM.png)


Problem \#2
![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.44.39%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.45.27%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2011.45.46%20AM.png)



## Ref

