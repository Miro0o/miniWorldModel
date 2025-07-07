# IP Encapsulation Security Payload (ESP)

[TOC]



## Res


## Intro
ESP机制通过将整个IP分组或上层协议部分（即传输层协议数据，如TCP、UDP或ICMP协议数据）封装到一个ESP载荷之中，然后对此载荷进行相应的安全处理，如加密处理、鉴别处理等，实现对通信的机密性和完整性保护。

ESP只鉴别ESP头之后的信息，比AH鉴别的范围窄，AH还要对外部IP头各部分进行鉴别。

由于ESP除具备AH的全部功能外还用于确保数据包的机密性，因此每个ESP的SA都必须同时定义两套算法：负责保护机密性的加密算法和负责进行身份验证的鉴别算法



## ESP Formats
![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.21.55PM.png)



## ESP Working Modes
与**AH**机制相类似，根据**ESP**封装的载荷内容不同，**ESP**头可选用两种方式中的一种来应用于**IP**数据包，即传送模式或隧道模式，其间的差别决定了**ESP**保护的真正对象是什么

![](../../../../../../../Assets/Pics/Screenshot%202023-11-20%20at%209.20.37AM.png)
### Transmitting Modes
![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.26.15PM.png)

### Tunneling Modes
![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.26.36PM.png)



## Ref

