# Key Management Life Circle

[TOC]



## Res


## Intro

### Trusted Authority (TA)



### Key Distribution Center (KDC)



## Key Management Life Circle
### 1️⃣ Key Generation
↗ [Key Generation](Key%20Generation/Key%20Generation.md)


### 2️⃣ Key Storage /Backup
↗ [Key Storage & Backup](Key%20Storage%20&%20Backup/Key%20Storage%20&%20Backup.md)


### 3️⃣ / 4️⃣ 🫱🏻‍🫲🏿 Key Exchange /Agreement (密钥协商) &  🚚 Key Distribution (密钥分发/分配)
↗ [Key Exchange & Agreement (one-to-one)](📌%20Key%20Management%20Algorithms%20&%20Protocols/👥%20Key%20Exchange%20&%20Agreement%20(one-to-one)/Key%20Exchange%20&%20Agreement%20(one-to-one).md)
↗ [Key Distribution (one-to-many)](📌%20Key%20Management%20Algorithms%20&%20Protocols/🚛%20Key%20Distribution%20(one-to-many)/Key%20Distribution%20(one-to-many).md)

> 密钥分发和密钥协商过程都是用以在保密通信双方之间建立通信所使用密钥的安全协 议(或机制)。在这种协议(或机制)运行结束时，参与协议运行的双方都将得到相同的密钥，同时，所得到的密钥对于其他任何方都是不可知的，当然，可能参与的可信管理机构(TA，Trust Authority)除外。
> 
> 密钥分发与密钥协商过程具有如下的一些区别:密钥分发被定义为一种机制，保密通信 中的一方利用此机制生成并选择秘密密钥，然后把该密钥发送给通信的另一方或通信的其他多方;而密钥协商则是保密通信双方(或更多方)通过公开信道的通信来共同形成(一个共同的？)秘密密钥的协议。一个密钥协商方案中，用来确定密钥的值是通信双方所提供的输入的函数。
> 
> 在密钥分发与密钥协商过程中，经常利用一个**可信管理机构 TA**，它的作用可能包括: 验证用户身份;产生、选择和传送秘密密钥给用户等等。


![](../../../../../Assets/Pics/Screenshot%202023-05-24%20at%203.12.31%20PM.png)


### 5️⃣ Key Termination /Deconstruction
↗ [Key Termination & Deconstruction](Key%20Termination%20&%20Deconstruction/Key%20Termination%20&%20Deconstruction.md)



## Ref

