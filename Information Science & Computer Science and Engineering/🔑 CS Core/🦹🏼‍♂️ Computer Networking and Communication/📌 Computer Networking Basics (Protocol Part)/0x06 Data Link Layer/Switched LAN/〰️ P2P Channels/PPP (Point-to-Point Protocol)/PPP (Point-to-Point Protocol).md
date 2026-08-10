# PPP (Point-to-Point Protocol)

[TOC]



## Res
### Related Topics


### Other Resources
【深入浅出计算机网络 - 3.3 点对点协议PPP】 https://www.bilibili.com/video/BV1HD4y1B7UH/?share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d

【深入浅出计算机网络 微课视频】 https://www.bilibili.com/video/BV1NT411g7n6/?p=25&share_source=copy_web&vd_source=7740584ebdab35221363fc24d1582d9d



## Intro
- **PPP(pointer-to-pointer)** 是最常用的借助于串行线或**ISDN**建立拨入连接服务的协议
- PPP是对串行链路数据进行IP封装的标准

> 🔗 https://en.wikipedia.org/wiki/Point-to-Point_Protocol

In computer networking, **Point-to-Point Protocol** (**PPP**) is a data link layer (layer 2) communication protocol between two routers directly without any host or any other networking in between. It can provide loop connection [authentication](https://en.wikipedia.org/wiki/Authentication), transmission [encryption](https://en.wikipedia.org/wiki/Encryption), and [data compression](https://en.wikipedia.org/wiki/Data_compression).

PPP is used over many types of physical networks, including [serial cable](https://en.wikipedia.org/wiki/Serial_cable), [phone line](https://en.wikipedia.org/wiki/Phone_line), [trunk line](https://en.wikipedia.org/wiki/Trunking#Trunk_line), [cellular telephone](https://en.wikipedia.org/wiki/Cellular_telephone), specialized radio links, [ISDN](https://en.wikipedia.org/wiki/ISDN), and [fiber optic links](https://en.wikipedia.org/wiki/Fiber-optic_communication) such as [SONET](https://en.wikipedia.org/wiki/SONET). Since IP packets cannot be transmitted over a [modem](https://en.wikipedia.org/wiki/Modem) line on their own without some data link protocol that can identify where the transmitted frame starts and where it ends, [Internet service providers](https://en.wikipedia.org/wiki/Internet_service_provider) (ISPs) have used PPP for customer [dial-up access](https://en.wikipedia.org/wiki/Dial-up_access) to the [Internet](https://en.wikipedia.org/wiki/Internet).

Two derivatives of PPP, **[Point-to-Point Protocol over Ethernet](https://en.wikipedia.org/wiki/Point-to-Point_Protocol_over_Ethernet) (PPPoE)** and **[Point-to-Point Protocol over ATM](https://en.wikipedia.org/wiki/Point-to-Point_Protocol_over_ATM) (PPPoA)**, are used most commonly by ISPs to establish a [digital subscriber line](https://en.wikipedia.org/wiki/Digital_subscriber_line) (DSL) Internet service LP connection with customers.

### PPP Workflow
1. 用户拨号接入服务器端时，路由器的调制解调器对拨号作出应答，并建立一条物理连接。
2. 在链路建立后，进入网络层协议阶段前，**PPP** 提供一个可选择的鉴别阶段：口令验证协议**PAP**。连接请求端不停地发送**ID/Password**给验证者，一直到验证被响应或连接被终止为止。
3. 由**LCP**协议实现链路的创建（协商一些选项），接着进行网络层连接的建立，给新接入的**PC**机分配一个临时的**IP**地址，这样**PC**机就成为**Internet**上一个主机。



## PPP Components
### LCP (Link Control Protocol)


### NCP (Network Control Protocol)


### ⭐ PAP (Password Authentication Protocol)
#### PAP Communication Process
↗ [Password Based Authentication (基于口令) /Password Authentication Protocol (PAP)](../../../../../../../CyberSecurity/⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#👉%20Password%20Authentication%20Protocol%20(PAP))
↗ [Password Based Authentication (基于口令) /Enhanced PAP](../../../../../../../CyberSecurity/⛈️%20Risk%20Management%20(In%20Cyberspace)/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Password%20Based%20Authentication%20(基于口令)/Password%20Based%20Authentication%20(基于口令).md#👉%20Enhanced%20PAP)
#### PAP Frame Format
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-08%20at%209.04.24PM.png)

![](../../../../../../../../Assets/Pics/Screenshot%202023-11-08%20at%209.04.54PM.png)
![](../../../../../../../../Assets/Pics/Screenshot%202023-11-08%20at%209.05.07PM.png)



## Ref