# IP Authentication Header (AH)

[TOC]



## Res
↗ [IP Encapsulation Security Payload (ESP)](../IP%20Encapsulation%20Security%20Payload%20(ESP)/IP%20Encapsulation%20Security%20Payload%20(ESP).md)



## Intro
AH的功能
- IP鉴别头AH通过为IP数据包插入一个AH头来提供安全服务
- AH能为IP数据包提供
	- **无连接完整性**。通过消息鉴别码产生的校验值来保证
	- **数据起源鉴别**。通过数据包中包含一个将要被验证的共享秘密或密钥来保证
	- **抗重放攻击**。通过在AH中使用一个序列号来实现。



## AH Formats
![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.17.46PM.png)

![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.18.15PM.png)



## AH Working Modes
![](../../../../../../../Assets/Pics/Screenshot%202023-12-16%20at%204.19.41PM.png)



## Ref

