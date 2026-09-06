# IPv4 Address Coding & Network Number Assigning

[TOC]



## Res
### Related Topics



## Overview
### IP Address & Interface
IP address is the world-wide unique address assigned to **NIC (network interface card)** or simple network interface as its network communicating identity. 

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.35.06%20AM.png)


### IP Address Structure & Subnet
Subnet is device interfaces that can physically reach each other without passing through an intervening router.

![](../../../../../../../Assets/Pics/Screenshot%202023-05-12%20at%2010.38.17%20AM.png)



## 🎯 IPv4 Address Coding Methods
![Screenshot 2022-11-20 at 12.26.00 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.26.00%20PM.png)


### 1️⃣ Classful IPv4 Address Coding
🎬 【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=50&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
#### Classful IPv4 Address Coding Overview
> 🔗 http://t.csdnimg.cn/9wMZ1

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.32.07%20AM.png)

![Screenshot 2022-11-20 at 12.12.43 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.12.43%20PM.png)
![Screenshot 2022-11-20 at 12.13.19 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.13.19%20PM.png)
#### 1️⃣ Type A Address
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.35.22%20AM.png)

一个A 类IP地址仅使用第一个8位位组表示网络地址。剩下的3个8位位组表示主机地址。A类地址的第一个位总为0，这一点在数学上限制了A类地址的范围小于127,127是64+32+16+8+4+2+1的和。最左边位表示128，在这里空缺。因此仅有127个可能的A类网络。A类地址后面的24位(3个点-十进制数)表示可能的主机地址，A类网络地址的范围从1.0.0.0到126.0.0.0。注意只有第一个8位位组表示网络地址，剩余的3个8位位组用于表示第一个8位位组所表示网络中惟一的主机地址，当用于描述网络时这些位置为0。注意技术上讲，127.0.0.0 也是一个A类地址，但是它已被保留作闭环（look back ）测试之用而不能分配给一个网络。每一个A类地址能支持16777214个不同的主机地址，这个数是由2的24次方再减去2得到的。减2是必要的，因为IP把全0保留为表示网络而全1表示网络内的广播地址。其中10.0.0.0 和10.255.255.255保留
#### 2️⃣ Type B Address
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.37.47%20AM.png)

设计B类地址的目的是支持中到大型的网络。B类网络地址范围从128.1.0.0到191.254.0.0。B 类地址蕴含的数学逻辑是相当简单的。一个B类IP地址使用两个8位位组表示网络号，另外两个8位位组表示主机号。B类地址的第1个8位位组的前两位总置为10，剩下的6位既可以是0也可以是1，这样就限制其范围小于等于191，由128+32+16+8+4+2+1得到。最后的16位( 2个8位位组)标识可能的主机地址。每一个B类地址能支持64534 个惟一的主机地址，这个数由2的16次方减2得到。B类网络仅有16382个，其中172.16.0.0和172.31.255.255保留。
#### 3️⃣ Type C Address
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.39.37%20AM.png)

C类地址用于支持大量的小型网络。这类地址可以认为与A类地址正好相反。A类地址使用第一个8位位组表示网络号，剩下的3个表示主机号，而C类地址使用三个8位位组表示网络地址，仅用一个8位位组表示主机号。C类地址的前3位数为110，前两位和为192(128+64)，这形成了C类地址空间的下界。第三位等于十进制数32,这一位为0限制了地址空间的上界。不能使用第三位限制了此8位位组的最大值为255-32等于223。因此C类网络地址范围从192.0.1.0 至223.255.254.0。最后一个8位位组用于主机寻址。每一个C类地址理论上可支持最大256个主机地址(0～255)，但是仅有254个可用，因为0和255不是有效的主机地址。可以有2097150个不同的C类网络地址，其中192.168.0.0和192.168.255.255保留。
#### 🤔 Exercise Problems
Problem \#1
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.42.18%20AM.png)

Problem \#2
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.44.06%20AM.png)

Problem \#3
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.46.45%20AM.png)
#### 4️⃣ Type D Address (IP Multicasting Group Addresses)
↗ [IP Multicasting (Group Communication)（多播，组播）](../../🎮%20Control%20Plane%20(Routing%20&%20Managements)/Network%20Routing%20(IP%20Address%20Modes)%20(Route%20Selection)/IP%20Multicasting%20(Group%20Communication)（多播，组播）/IP%20Multicasting%20(Group%20Communication)（多播，组播）.md)

D 类地址用于在IP网络中的组播( multicasting ，又称为多目广播)。D类地址的前4位恒为1110 ，预置前3位为1意味着D类地址开始于128+64+32等于224。第4位为0意味着D类地址的最大值为128+64+32+8+4+2+1为239，因此D类地址空间的范围从224.0.0.0到239. 255. 255.254。
#### 5️⃣ Type E Address
E 类地址保留作研究之用。因此Internet上没有可用的E类地址。E类地址的前4位恒为1，因此有效的地址范围从240.0.0.0 至255.255.255.255。
总的来说，ip地址分类由第一个八位组的值来确定。任何一个0到127 间的网络地址均是一个A类地址。任何一个128到191间的网络地址是一个B类地址。任何一个192到223 间的网络地址是一个C类地址。任何一个第一个八位组在224到239 间的网络地址是一个组播地址即D类地址。E类保留。


### 2️⃣ Subnetting

🎬 【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=51&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.23.25%20AM.png)


#### Subnet Mask
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.53.34%20AM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.54.49%20AM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%209.55.25%20AM.png)
#### 🤔 Exercise Problems
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.19.29%20AM.png)
#### Default Subnet Mask
![Screenshot 2022-11-20 at 12.24.02 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.24.02%20PM.png)


### 3️⃣ Classless Inter-Domain Routing (CIDR)

🔗 【深入浅出计算机网络 - 4.2.2 IPv4地址及其编址方法——无分类编址方法】 https://www.bilibili.com/video/BV1gD4y1B7iW/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d
【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=52&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.39.03%20AM.png)
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.39.27%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.39.56%20AM.png)
#### CIDR 🆚 Classful Address Coding
![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2011.17.36%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-06-17%20at%2011.18.38%20AM.png)
#### Route Aggregation (Supernet) & Longest Prefix Match
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.40.54%20AM.png)
#### 🤔 Exercise Problems
Problem \#1
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.40.17%20AM.png)

Problem \#2
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.37.12%20AM.png)

Problem \#3
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.38.20%20AM.png)

Problem \#4
![Screenshot 2022-11-20 at 12.28.33 PM](../../../../../../../Assets/Pics/Screenshot%202022-11-20%20at%2012.28.33%20PM.png)



## 🎯 IPv4 Application Planning & FLSM + VLSM
🔗 【深入浅出计算机网络 - 4.2.3 IPv4地址的应用规划】 https://www.bilibili.com/video/BV1J24y1Z72E/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

🔗【定长子网划分和变长子网划分的二叉树解法】 https://www.bilibili.com/video/BV11G4y1x75G/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.53.20%20AM.png)


### FLSM (Fixed Length Subnet Masking) via 2️⃣ Subnetting
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.57.05%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.58.15%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.58.45%20AM.png)



![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.48.48%20AM.png)


### VLSM (Variable Length Subnet Masking) via 3️⃣ CIDR
![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.49.43%20AM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-05-10%20at%2010.51.58%20AM.png)


### 🤔 Exercise Problems
skiped.


## Ref
[👍 网络基础之子网划分]: https://www.cnblogs.com/linhaifeng/articles/5951486.html

[内网IP范围 | CSDN]: http://t.csdnimg.cn/9wMZ1
```shell
内网IP
10.0.0.0 - 10.255.255.255 
172.16.0.0 - 172.31.255.255 
192.168.0.0 - 192.168.255.555 

还有些要排除
127.0.0.1本机
0.0.0.0代表本机所有地址
224.0.0.0~255.255.255.255 多播地址
127.0.0.1 - 127.255.255.254都是环回地址（指向本机).


-----------------------------------------------------------------
REC 1918留出了3块IP地址空间（1个A类地址段，16个B类地址段，256个C类地址段）作为私有的内部使用的地址。在这个范围内的IP地址不能被路由到Internet骨干网上；Internet路由器将丢弃该私有地址。
 
IP地址类别 RPC 1918内部地址范围
 
A类 10.0.0.0到10.255.255.255
B类 172.16.0.0到172.31.255.255
C类 192.168.0.0到192.168.255.255


-----------------------------------------------------------------
IP地址分为公有IP地址和私有IP地址。

公有地址（Public address，也可称为公网地址）由Internet NIC（Internet Network Information Center因特网信息中心）负责。这些IP地址分配给注册并向Internet NIC提出申请的组织机构。通过它直接访问因特网，它是广域网范畴内的。

私有地址（Private address，也可称为专网地址）属于非注册地址，专门为组织机构内部使用，它是局域网范畴内的，出了所在局域网是无法访问因特网的。

留用的内部私有地址目前主要有以下几类：
* A类：10.0.0.0--10.255.255.255
* B类：172.16.0.0--172.31.255.255
* C类：192.168.0.0--192.168.255.255

组播地址，注意它和广播的区别。从224.0.0.0到239.255.255.255都是这样的地址。
外网地址是除了内网和组播地址以外的地址范围
```

[全网最全网络基础思维导图（38张) | SDNLAB]: https://mp.weixin.qq.com/s/jlstOkjnJtrLKOGtWedebA
![](../../../../../../../Assets/Pics/Pasted%20image%2020240510145621.png)

