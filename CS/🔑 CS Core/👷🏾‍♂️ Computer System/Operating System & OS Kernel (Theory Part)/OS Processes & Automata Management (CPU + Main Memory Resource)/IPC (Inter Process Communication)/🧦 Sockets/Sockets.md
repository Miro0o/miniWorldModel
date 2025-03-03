# Sockets

[TOC]



## Res
### Related Topics
↗ [Internet Domain Socket](../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md)
↗ [Internet Domain Socket Programming](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Internet%20Domain%20Socket%20Programming/Internet%20Domain%20Socket%20Programming.md)



## Intro
> 🔗 http://blog.chinaunix.net/uid-22240661-id-1781638.html

> Socket 属于一种IPC方式，由UCB提出。Socket通信可以是主机内部进程，也可以是不同主机间进程通讯。这种抽象可以有很多种设计模式和实现方式，而BSD提出的Socket既作为一种规范又作为一种实现是这种抽象的一个 de facto standard.

Socket 的英文原意就是“孔”或“插座”,现在,作为 BSD UNIX 的进程通讯机制,  
取其后一种意义。日常生活中常见的插座,有的是信号插座,有的是电源插座,有的可以  
接受信号(或能量) ,有的可以发送信号(或能量)。假如电话线与电话机之间安放一个插  
座(相当于二者之间的接口,这一部分装置物理上是存在的)则 Socket 非常相似于电话插  
座。

将电话系统与面向连接的 Socket 机制相比,有着惊人相似的地方。以一个国家级的电话网为例。电话的通话双方相当于相互通信的两个进程;通话双方所在的地区(享有一个全局唯一的区号)相当于一个网络,区号是它的网络地址;区内的一个单位的交换机相当于一台主机,主机分配给每个用户的局内号码相当于 Socket 号(下面将谈到)。

任何用户在通话之前,首先要占有一部电话机,相当于申请一个 Socket 号;同时要知道对方的电话号码,相当于对方有一个 Socket。然后向对方拨号呼叫,相当于发出连接请求(假如对方不在同一区内,还要拨对方区号,相当于给出网络地址)。对方假如在场并空闲(相当于通信的另一主机开机且可以接受连接请求),拿起电话话筒,双方就可以正式通话,相当于连接成功。双方通话的过程,是向电话机发出信号和从电话机接受信号的过程,相当于向 Socket 发送数据和从 Socket 接受数据。通话结束后,一方挂起电话机,相当于关闭 Socket,撤消连接。

在电话系统中,一般用户只能感受到本地电话机和对方电话号码的存在,建立通话的过程、话音传输的过程以及整个电话系统的技术细节对它都是透明的,这也与 Socket 机制非常相似。Socket 利用网间网通信设施实现进程通信,但它对通信设施的细节毫不关心,只要通信设施能提供足够的通信能力,它就满足了。  

至此,我们对 Socket 进行了直观的描述。抽象出来,Socket 实质上提供了进程通信的端点。进程通信之前,双方首先必须各自创建一个端点,否则是没有办法建立联系并相互通信的。正如打电话之前,双方必须各自拥有一台电话机一样。


### Berkeley Sockets, POSIX Sockets & BSD Sockets
↗ [Berkeley Sockets & POSIX Sockets & BSD Sockets](Berkeley%20Sockets%20&%20POSIX%20Sockets%20&%20BSD%20Sockets.md)



## Types of Sockets
### 1️⃣ Internal Sockets | LPC
↗ [Internal Sockets](🌉%20Internal%20Sockets/Internal%20Sockets.md)
- ↗ [UNIX Domain Sockets (POSIX)](🌉%20Internal%20Sockets/UNIX%20Domain%20Sockets%20(POSIX).md)


### 2️⃣ Network Sockets (External Communication) | RPC
↗ [Network Sockets](../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Network%20Sockets.md)
- ↗ [Internet Domain Socket](../../../OS%20IO%20System/IO%20Generality%20(via%20Abstraction)/🛜%20Network%20Sockets/Internet%20Domain%20Socket.md)

↗ [Network Programming & RPC](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Network%20Programming%20&%20RPC.md)
- [Internet Domain Socket Programming](../../../../../🏎️%20Computer%20Networking%20and%20Communication/Network%20Programming%20&%20RPC/Internet%20Domain%20Socket%20Programming/Internet%20Domain%20Socket%20Programming.md)

↗ [Cloud Native /RPC](../../../../../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Cloud%20Operating%20System%20&%20Platform%20(System%20Level%20Engineering)/Orchestration%20&%20Management/Cloud%20RPC%20Services.md)
↗ [SE /RPC](../../../../../../Software%20Engineering/☝️%20Application%20Software%20Engineering/🕸️%20Web%20Development%20&%20The%20Internet/🗄️%20Web%20BackEnd%20Dev%20&%20Middleware/Web%20Dev%20Middleware/RPC%20Services/RPC%20Services.md)



## Ref
[UNIX Domain vs BSD vs TCP vs Internet sockets?]: https://stackoverflow.com/a/22898357/16542494
[👍 Socket 的功能 和 套接字的三种类型 | ChinaUnix]: http://blog.chinaunix.net/uid-22240661-id-1781638.html

[👍【网络编程知识】什么是Socket？概念及原理分析]: https://www.cnblogs.com/gmpy/articles/17802712.html

![](../../../../../../../../Assets/Pics/Pasted%20image%2020240423222918.png)
