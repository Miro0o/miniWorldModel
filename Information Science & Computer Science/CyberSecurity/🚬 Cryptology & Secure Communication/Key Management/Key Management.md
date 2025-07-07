# Key Management

[TOC]



## Res
### Related Topics
↗ [Credentials & Password Related Tools](../../☠️%20Kill%20Chain%20&%20Security%20Tool%20Box/Credentials%20&%20Password%20Related%20Tools/Credentials%20&%20Password%20Related%20Tools.md)
↗ [Access Control (访问控制)](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Access%20Control%20(访问控制).md)
↗ [Human-Oriented Authentication (鉴别对象为人)](../../⛈️%20Risk%20Management/🐺%20Risk%20Countermeasures%20&%20Security%20Control/Identity%20&%20Access%20Management%20(IAM)/Access%20Control%20(访问控制)/Authentication%20(身份鉴别)/Object-Based%20Authetication/Human-Oriented%20Authentication%20(鉴别对象为人)/Human-Oriented%20Authentication%20(鉴别对象为人).md)

↗ [Key Management](../../../Software%20Engineering/☁️%20Cloud%20Computing%20&%20Cloud%20Native/Dev(Sec)Ops%20(Application%20Level%20Engineering)/🛬%20Continuous%20Delivery/Provisioning/Key%20Management/Key%20Management.md)



## Intro
### Key Management Basics
#### Why Keys?
在密码学中引入密钥的好处还表现为:
(1) 在一个加密方案中不用担心算法的安全性，即可以认为算法是公开的，只要保护好密钥就可以了，很明显，保护好密钥比保护好算法要容易得多;

(2) 可以使用不同的密钥保护不同的秘密，这意味着当有人攻破了个密钥时，受威胁的只是这个被攻破密钥所保护的信息，其他的秘密依然是安全的，由此可见密钥在整个密码算 法中处于十分重要的中心地位。
#### What/Why is Key Management?
密钥管理就是在授权各方之间实现密钥关系的建立和维护的一整套技术和程序。密钥管理是密码学的一个重要的分支，也是密码学应用最重要、最困难的部分。
- 密钥管理负责密钥从产生到最终销毁的整个过程，包括密钥的生成、存储、分发、使用、备份/恢复、更新、撤销和销毁等。
- 密钥管理作为提供机密性、实体认证、数据源认证、数据完整性和数字签名等安全密码技术的基础，在整个密码学中占有重要的地位。因为现代密码学要求所有加密体制的密码算法是可以公开评估的，整个密码系统的安全性并不取决于对密码算法的保密或者是对加密设备等的保护，而是取决于密钥的安全性，一旦密钥泄露，攻击者将有可能窃取到机密信息，也就不再具有保密功能。

![](../../../../Assets/Pics/Screenshot%202023-05-24%20at%203.00.23%20PM.png)


### Human Factor in Key Management
密钥管理是一项综合性的系统工程，要求管理与技术并重，除了技术性因素外，它还与人的因素密切相关，包括密钥管理相关的行政管理制度和密钥管理人员的素质。密码系统的安全强度总是取决于系统最薄弱的环节。因此，再好的技术，如果失去了必要管理的支持，终将使技术毫无意义，管理只能通过健全相应的制度以及加强对人员的教育、培训来解决。


### ⭐️ Key Management Essentials & Principles
#### Key Management Policies (策略) & Mechanism (机制)
密钥管理策略是密钥管理系统的高级指导。策略着重原则指导，而不着重具体实现。密钥管理机制是实现和执行策略的技术和方法。没有好的管理策略，再好的机制也不能确保密钥的安全。相反，没有好的机制，再好的策略也没有实际意义。策略通常是原则的、简单明确的，而机制是具体的、复杂繁琐的。
#### 1️⃣ 全程安全原则
必须在密钥的产生、存储、备份、分发、组织、使用、更新、终止和销毁等的全过程中 对密钥采取妥善的安全管理。只有在各个阶段都安全时，密钥才是安全的，否则只要其中一个环节不安全，密钥就不安全。例如对于重要的密钥，从它的产生到销毁的全过程中除了在 使用的时候可以以明文形式出现外都不应当以明文形式出现。
#### 2️⃣ 最小权利原则
应当只分发给用户进行某一事务处理所需的最小的密钥集合。因为用户获得的密钥越多，则他的权利就越大，因而所能获得的信息就越多。如果用户不诚实，则可能发生危害信 息安全的事件。
#### 3️⃣ 责任分离原则
一个密钥应当专职一种功能，不要让一个密钥兼任几种功能。例如:用于数据加密的密 钥不应同时用于认证，用于文件加密的密钥不应同时用于通信加密。而应当是:一个密钥用于数据加密，另一个密钥用于认证;一个密钥用于文件加密，另一个密钥用于通信加密。因 为，使一个密钥专职一种功能，即使密钥暴露，也只会影响一种功能，使损失最小，否则损 失就大得多。
#### 4️⃣ 密钥分级原则
对于一个大的系统(例如网络)，所需要的密钥的种类和数量都很多。应当采用密钥分级 的策略，根据密钥的职责和重要性，把密钥划分为几个级别。用高级密钥保护低级密钥，最 高级的密钥由安全的物理保护。这样，既可减少受保护的密钥的数量，又可简化密钥的管理 工作。

一般可将密钥划分为三级:主密钥，二级密钥，初级密钥。
#### 5️⃣ 密钥更新原则
密钥必须按时更新。否则，即使是采用很强的密码算法，使用时间越长，敌手截获的密 文越多，破译密码的可能性就越大。理想情况是一个密钥只使用一次。完全的一次一密是不 现实的。一般的，初级密钥采用一次一密，二级密钥更新的频率低些，主密钥更新的频率更 低些。密钥更新的频率越高，越有利于安全，但是密钥的管理就越麻烦。实际应用时应当在 安全和方便之间折中。
#### 6️⃣ 密钥应当有足够的长度
密码安全的一个必要条件是密钥有足够的长度。密钥越长，密钥空间就越大，攻击就越 困难，因而也就越安全。然而密钥越长，则软硬件实现消耗的资源就越多。
#### 7️⃣ 密码体制不同，密钥管理也不相同
由于传统密码体制与公开密钥密码体制是性质不同的两种密码(例如，公开密钥密码体 制的加密钥可以公开，其秘密性不需要保护)，因此它们在密钥管理方而有很大的不同。



## Hierarchical Key Management Systems
↗ [Hierarchical Key Management Systems](Hierarchical%20Key%20Management%20Systems.md)



## Key Management Life Circle
↗ [Key Management Life Circle](Key%20Management%20Life%20Circle.md)



## Threshold Scheme (秘密分割)
↗ [Threshold Scheme (门限方案)](📌%20Key%20Management%20Algorithms%20&%20Protocols/Key%20Management%20Algorithms/Threshold%20Scheme%20(门限方案)/Threshold%20Scheme%20(门限方案).md)



## Group Key (群密钥)
↗ [Group Key](📌%20Key%20Management%20Algorithms%20&%20Protocols/Key%20Management%20Algorithms/Group%20Key/Group%20Key.md)



## Ref

