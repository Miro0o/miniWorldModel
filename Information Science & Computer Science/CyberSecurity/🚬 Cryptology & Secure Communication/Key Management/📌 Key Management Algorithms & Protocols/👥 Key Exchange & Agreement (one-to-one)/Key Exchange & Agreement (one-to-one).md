# Key Exchange & Agreement (one-to-one)

[TOC]



## Res
### Related Topics
↗ [Authentication (身份鉴别)](../../../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Authentication%20(身份鉴别).md)



## Intro
> 密钥分发和密钥协商过程都是用以在保密通信双方之间建立通信所使用密钥的安全协 议(或机制)。在这种协议(或机制)运行结束时，参与协议运行的双方都将得到相同的密钥，同时，所得到的密钥对于其他任何方都是不可知的，当然，可能参与的可信管理机构(TA，Trust Authority)除外。
> 
> 密钥分发与密钥协商过程具有如下的一些区别:密钥分发被定义为一种机制，保密通信 中的一方利用此机制生成并选择秘密密钥，然后把该密钥发送给通信的另一方或通信的其他多方;而密钥协商则是保密通信双方(或更多方)通过公开信道的通信来共同形成(一个共同的？)秘密密钥的协议。一个密钥协商方案中，用来确定密钥的值是通信双方所提供的输入的函数。
> 
> 在密钥分发与密钥协商过程中，经常利用一个**可信管理机构 TA**，它的作用可能包括: 验证用户身份;产生、选择和传送秘密密钥给用户等等。



## Ref
[Key exchange | Wikipedia]: https://en.wikipedia.org/wiki/Key_exchange
